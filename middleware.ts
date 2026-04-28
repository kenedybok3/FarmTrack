import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

function handleAuthRedirects(
  request: NextRequest,
  response: NextResponse,
  user: unknown
): NextResponse {
  const path = request.nextUrl.pathname

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
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

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

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}