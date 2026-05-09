import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

function handleAuthRedirects(
  request: NextRequest,
  response: NextResponse,
  user: unknown
): NextResponse {
  const path = request.nextUrl.pathname

  // Register page is a "Safe Zone" - no redirects ever
  if (path === '/register') return response

  const isAuthPage = path === '/login' || path === '/register'

  const isProtectedPage =
    path.startsWith('/dashboard') ||
    path === '/setup-profile'

  if (!user && isProtectedPage) {
    console.log(`[Middleware] Redirecting unauthenticated user from ${path} to /login`)
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (user && isAuthPage) {
    console.log(`[Middleware] Redirecting authenticated user from ${path} to /dashboard`)
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return response
}

export async function middleware(request: NextRequest) {
  // Check for demo mode cookie first
  const isDemo = request.cookies.get('demo_mode')?.value === 'true'

  // If demo mode, allow access without Supabase check
  if (isDemo) {
    return NextResponse.next()
  }

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  // Otherwise, check Supabase auth as normal
  try {
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll()
          },
          setAll(cookiesToSet) {
            cookiesToSet.forEach(({ name, value, options }) => {
              request.cookies.set(name, value)
            })
            response = NextResponse.next({
              request,
            })
          },
        },
      }
    )

    const { data: { user }, error } = await supabase.auth.getUser()

    if (error) {
      console.error('[Middleware] Error getting user:', error.message)
    } else {
      console.log('[Middleware] User check completed:', user ? `Logged in as ${user.email}` : 'No user')
    }

    return handleAuthRedirects(request, response, user)
  } catch (err) {
    console.error('[Middleware] Unexpected error:', err)
    return handleAuthRedirects(request, response, null)
  }
}
