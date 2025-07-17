import { withAuth } from 'next-auth/middleware';
import { NextResponse } from 'next/server';

export default withAuth(
  function middleware(req) {
    const token = req.nextauth.token;

    if (req.nextUrl.pathname.startsWith('/dashboard/admin') && token?.role !== 'admin') {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }

    if (req.nextUrl.pathname.startsWith('/dashboard/user') && token?.role !== 'user') {
      return NextResponse.rewrite(new URL('/denied', req.url));
    }
  },
  {
    callbacks: {
      authorized: ({ token }) => !!token,
    },
    pages: {
      signIn: '/login',
    },
  },
);

export const config = {
  matcher: ['/dashboard', '/dashboard/:path*'],
};
