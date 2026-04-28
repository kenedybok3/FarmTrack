import { useState, useEffect, useCallback } from 'react'
import { supabase } from '@/lib/supabase'
import { createFarmer, getFarmerByPhone, getFarmerByEmail, getFarmerById } from '@/lib/api/farmers'
import type { Farmer } from '@/types'

interface AuthState {
  user: Farmer | null
  loading: boolean
  error: string | null
}

function validateFarmerData(farmer: Farmer | null | undefined): farmer is Farmer {
  return farmer !== null && farmer !== undefined && typeof farmer.id === 'string' && farmer.id.length > 0
}

async function completeLogin(email: string): Promise<Farmer | null> {
  let farmer = await getFarmerByEmail(email)
  console.log('completeLogin - Farmer by email:', farmer)

  if (!farmer) {
    farmer = await createFarmer({
      email: email,
      phone: '+2340000000000',
      name: 'User',
      farm_type: 'Poultry'
    })
    console.log('completeLogin - Created new farmer:', farmer)
  }

  if (!validateFarmerData(farmer)) {
    console.error('completeLogin - Invalid farmer data:', farmer)
    return null
  }

  localStorage.setItem('farmer_id', farmer.id)
  return farmer
}

async function completeRegistration(email: string, name: string, phone: string, farmType: string): Promise<Farmer | null> {
  const farmer = await createFarmer({
    email: email,
    phone: phone,
    name,
    full_name: name,
    farm_type: farmType
  })

  if (!validateFarmerData(farmer)) {
    console.error('completeRegistration - Invalid farmer data:', farmer)
    return null
  }

  localStorage.setItem('farmer_id', farmer.id)
  return farmer
}

export function useAuth() {
  const [state, setState] = useState<AuthState>({
    user: null,
    loading: true,
    error: null
  })

  const checkSession = useCallback(async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()

      if (session?.user?.email) {
        let farmer = await getFarmerByEmail(session.user.email)

        if (!farmer) {
          farmer = await createFarmer({
            email: session.user.email,
            phone: '+2340000000000',
            name: 'User',
            farm_type: 'Poultry'
          })
        }

        if (!validateFarmerData(farmer)) {
          console.error('checkSession - Invalid farmer data:', farmer)
          setState({ user: null, loading: false, error: null })
          return
        }

        localStorage.setItem('farmer_id', farmer.id)
        setState({ user: farmer, loading: false, error: null })
        return
      }

      const storedFarmerId = localStorage.getItem('farmer_id')
      if (storedFarmerId) {
        const farmer = await getFarmerById(storedFarmerId)
        if (validateFarmerData(farmer)) {
          setState({ user: farmer, loading: false, error: null })
          return
        }
      }

      setState({ user: null, loading: false, error: null })
    } catch (err) {
      console.error('checkSession - Error:', err)
      const storedFarmerId = localStorage.getItem('farmer_id')
      if (storedFarmerId) {
        const farmer = await getFarmerById(storedFarmerId)
        if (validateFarmerData(farmer)) {
          setState({ user: farmer, loading: false, error: null })
          return
        }
      }
      setState({ user: null, loading: false, error: null })
    }
  }, [])

  useEffect(() => {
    checkSession()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN") {
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
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      })

      if (error) {
        console.error('Auth signIn error:', error)
        throw error
      }

      console.log('Auth success, user:', data?.user)

      const farmer = await completeLogin(email)
      if (!farmer) {
        throw new Error('Failed to retrieve or create farmer record')
      }

      setState({ user: farmer, loading: false, error: null })
      return { success: true }
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
      const { error: authError } = await supabase.auth.signUp({
        email,
        password
      })

      if (authError) {
        if (authError.message?.includes('User already registered') ||
            authError.code === 'user_already_exists') {
          const { error: signInError } = await supabase.auth.signInWithPassword({
            email,
            password
          })

          if (signInError) {
            throw new Error('Account exists. Please try logging in or reset your password.')
          }
        } else {
          console.error('Auth signup error:', authError)
          throw authError
        }
      }

      const farmer = await completeRegistration(email, name, phone, farmType)
      if (!farmer) {
        throw new Error('Failed to create farmer record')
      }

      setState({ user: farmer, loading: false, error: null })
      return { success: true }
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

  const logout = async () => {
    try {
      await supabase.auth.signOut()
      localStorage.removeItem('farmer_id')
      setState({ user: null, loading: false, error: null })
    } catch (err) {
      console.error('Logout error:', err)
    }
  }

  const getStoredFarmerId = () => {
    if (typeof window === 'undefined') return null
    return localStorage.getItem('farmer_id')
  }

  return {
    user: state.user,
    loading: state.loading,
    error: state.error,
    login,
    register,
    logout,
    getStoredFarmerId,
    checkSession
  }
}