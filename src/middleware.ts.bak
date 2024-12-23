import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  try {
    // 继续处理请求
    return NextResponse.next()
  } catch (error) {
    console.error('Middleware error:', error)
    // 返回一个友好的错误响应
    return new NextResponse(
      JSON.stringify({
        success: false,
        message: 'Internal Server Error',
      }),
      {
        status: 500,
        headers: {
          'content-type': 'application/json',
        },
      }
    )
  }
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
