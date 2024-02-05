import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  if (!token && path !== '/login' && path !== '/register') {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
