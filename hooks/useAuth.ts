import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import type { Farmer } from '@/types'

interface AuthState {
  user: Farmer | null
  loading: boolean
  error: string | null
}

// Self-healing farmer profile upsert - uses UUID id from auth.users directly
async function upsertFarmerProfile(id: string, email: string, fullName: string): Promise<Farmer | null> {
  const { data, error } = await supabase
    .from('farmers')
    .upsert(
      {
        id,
        email,
        full_name: fullName,
        farm_type: 'Poultry',
        bird_types: ['Layers'] as any[]
      },
      { onConflict: 'id' }
    )
    .select()
    .single()

  if (error) {
    console.error('upsertFarmerProfile error:', { message: error.message, code: error.code, details: error.details })
    return null
  }
  return data as Farmer
}

// Get farmer profile directly by user ID
async function getFarmerByUserId(id: string): Promise<Farmer | null> {
  const { data, error } = await supabase
    .from('farmers')
    .select('*')
    .eq('id', id)
    .single()

  if (error && error.code !== 'PGRST116') {
    console.error('getFarmerByUserId error:', error)
    return null
  }
  return data as Farmer | null
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  // Session recovery: force signOut if refresh token is missing/invalid
  const recoverSession = useCallback(async () => {
    try {
      const { data: { session }, error } = await supabase.auth.getSession()
      
      if (error?.message?.includes('refresh_token') || error?.message?.includes('Invalid')) {
        await supabase.auth.signOut()
        return null
      }
      
      if (!session?.user) {
        return null
      }
      
      return session.user
    } catch (err) {
      // If any auth error, force signOut for clean state
      await supabase.auth.signOut()
      return null
    }
  }, [])

  const checkSession = useCallback(async () => {
    try {
      const isDemoMode = typeof window !== 'undefined' && document.cookie.includes('demo_mode=true')
      const storedFarmerId = typeof window !== 'undefined' 
        ? (document.cookie.match(new RegExp('(^| )farmer_id=([^;]+)')) || [])[2] || null
        : null
      
      // If demo mode is active, set user to null (demo users don't have a Supabase user)
      if (isDemoMode) {
        setState({ user: null, loading: false, error: null })
        return
      }

      // Session recovery check
      const user = await recoverSession()
      
      if (!user?.email) {
        // Try stored farmer ID as fallback
        if (storedFarmerId) {
          const farmer = await getFarmerByUserId(storedFarmerId)
          if (farmer?.id) {
            setState({ user: farmer, loading: false, error: null })
            return
          }
        }
        setState({ user: null, loading: false, error: null })
        return
      }

      // Self-healing: check if farmer profile exists, create if missing
      let farmer = await getFarmerByUserId(user.id)

      if (!farmer) {
        farmer = await upsertFarmerProfile(
          user.id,
          user.email || '',
          user.user_metadata?.full_name || user.email?.split('@')[0] || ''
        )
      }

      if (!farmer?.id) {
        console.error('checkSession - Invalid farmer data:', farmer)
        setState({ user: null, loading: false, error: null })
        return
      }

      localStorage.setItem('farmer_id', farmer.id)
      setState({ user: farmer, loading: false, error: null })
    } catch (err) {
      console.error('checkSession - Error:', err)
      const isDemoMode = typeof window !== 'undefined' && document.cookie.includes('demo_mode=true')
      
      if (isDemoMode) {
        setState({ user: null, loading: false, error: null })
        return
      }
      
      // On error, force clean session
      await supabase.auth.signOut()
      setState({ user: null, loading: false, error: err instanceof Error ? err.message : null })
    }
  }, [recoverSession])

  useEffect(() => {
    checkSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
          await checkSession()
        }
        else if (event === "SIGNED_OUT") {
          localStorage.removeItem("farmer_id")
          setState({ user: null, loading: false, error: null })
        }
      }
    )

    return () => subscription.unsubscribe()
  }, [checkSession])

  const login = async (email: string, password: string) => {
    setState(prev => ({ ...prev, error: null, loading: true }))

    try {
      const { data: authData, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        if (error.message?.includes('rate limit') || error.message?.includes('Rate limit') || error.status === 429) {
          throw new Error('Too many login attempts. Please wait a few minutes before trying again.')
        }
        console.error('Auth signIn error:', error)
        throw error
      }

      // Self-healing login: ensure farmer profile exists
      const user = authData?.user
      if (!user) {
        throw new Error('No user returned from sign in')
      }

      let farmer = await getFarmerByUserId(user.id)

      if (!farmer) {
        farmer = await upsertFarmerProfile(
          user.id,
          user.email || '',
          user.user_metadata?.full_name || ''
        )
      }

      if (!farmer?.id) {
        throw new Error('Failed to retrieve or create farmer record')
      }

      // Clear demo cookies when user logs in
      document.cookie = "demo_mode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
      document.cookie = "farmer_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"

      localStorage.setItem('farmer_id', farmer.id)
      setState({ user: farmer, loading: false, error: null })
      return { success: true, farmer }
    } catch (err: unknown) {
      console.error('Login error:', err)
      const message = err instanceof Error ? err.message : 'Login failed'
      setState(prev => ({
        ...prev,
        loading: false,
        error: message
      }))
      return { success: false, error: message }
    }
  }

  const register = async (email: string, name: string, phone: string, password: string, farmType = 'Poultry') => {
    setState(prev => ({ ...prev, error: null, loading: true }))

    try {
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: name
          }
        }
      })

      if (authError) {
        if (authError.message?.includes('User already registered') ||
            authError.code === 'user_already_exists') {
          // User exists - sign in instead
          const { data: signInData, error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
          })

          if (signInError) {
            throw new Error('Account exists. Please try logging in or reset your password.')
          }

          if (!signInData?.user?.id) {
            throw new Error('Sign-in succeeded but no user data returned')
          }

          // Create farmer profile for existing user
          const farmer = await upsertFarmerProfile(
            signInData.user.id,
            email,
            signInData.user.user_metadata?.full_name || name
          )
          if (!farmer) {
            throw new Error('Failed to create farmer record')
          }

          document.cookie = "demo_mode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
          document.cookie = "farmer_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
          localStorage.setItem('farmer_id', farmer.id)
          setState({ user: farmer, loading: false, error: null })
          return { success: true, farmer }
        }

        // Handle email rate limit - suggest OTP alternative
        if (authError.message?.includes('rate limit') ||
            authError.message?.includes('Rate limit') ||
            authError.status === 429) {
          throw new Error('Too many sign-up attempts. Please wait a few minutes or try signing up with your phone number instead.')
        }

        console.error('Auth signup error:', authError)
        throw authError
      }

      // Get the newly created user
      const user = authData?.user
      if (!user?.id) {
        throw new Error('Signup succeeded but no user ID returned. Email confirmation may be required.')
      }

      // Self-healing registration: create farmer profile using upsert
      const farmer = await upsertFarmerProfile(
        user.id,
        email,
        user.user_metadata?.full_name || name
      )

      if (!farmer) {
        throw new Error('Failed to create farmer record')
      }

      // Clear demo cookies when user registers
      document.cookie = "demo_mode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
      document.cookie = "farmer_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"

      localStorage.setItem('farmer_id', farmer.id)
      setState({ user: farmer, loading: false, error: null })
      return { success: true, farmer }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Registration failed'
      setState(prev => ({
        ...prev,
        loading: false,
        error: message
      }))
      return { success: false, error: message }
    }
  }

  const signUpWithOtp = async (phone: string) => {
    setState(prev => ({ ...prev, error: null, loading: true }))

    try {
      const { data, error } = await supabase.auth.signInWithOtp({
        phone,
        options: {
          shouldCreateUser: true,
        }
      })

      if (error) {
        throw error
      }

      // User was created/sent OTP successfully
      setState(prev => ({
        ...prev,
        loading: false,
        error: null
      }))
      return { success: true, message: 'OTP sent to your phone number' }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'OTP sign-up failed'
      setState(prev => ({
        ...prev,
        loading: false,
        error: message
      }))
      return { success: false, error: message }
    }
  }

  const logout = async () => {
    try {
      await supabase.auth.signOut()

      // Clear our app cookies
      document.cookie = "farmer_id=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"
      document.cookie = "demo_mode=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;"

      // Clear all Supabase cookies (sb-*)
      document.cookie.split(';').forEach(cookie => {
        const [name] = cookie.trim().split('=')
        if (name.startsWith('sb-')) {
          document.cookie = `${name}=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT;`
        }
      })

      setState({ user: null, loading: false, error: null })
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const loginDemo = async () => {
    setState(prev => ({ ...prev, error: null, loading: true }))
    
    try {
      document.cookie = "demo_mode=true; path=/;"
      document.cookie = "farmer_id=demo; path=/;"
      setState({ user: null, loading: false, error: null })
      return { success: true }
    } catch (err: unknown) {
      console.error('Demo login error:', err)
      const message = err instanceof Error ? err.message : 'Demo login failed'
      setState(prev => ({
        ...prev,
        loading: false,
        error: message
      }))
      return { success: false, error: message }
    }
  }

  const getStoredFarmerId = () => {
    if (typeof window === 'undefined') return null
    const match = document.cookie.match(new RegExp('(^| )farmer_id=([^;]+)'))
    return match ? match[2] : null
  }

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    register,
    signUpWithOtp,
    logout,
    loginDemo,
    getStoredFarmerId,
    checkSession
  }
}