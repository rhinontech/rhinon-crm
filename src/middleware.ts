// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

function getBasePath(pathname: string): string {
  const parts = pathname.split("/");
  return parts[1] || "";
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const authToken = request.cookies.get("authToken")?.value;
  const currentRole = request.cookies.get("currentRole")?.value;

  const publicAuthPrefixes = [
    "/auth/login",
    "/auth/signup",
    "/auth/forgot-password",
    "/auth/reset-password",
    "/auth/verify-account",
    "/auth/create-account",
    "/auth/admin-create-account",
    "/auth/teamsOnboarding",
  ];

  // Allow all public auth routes by checking prefix
  if (publicAuthPrefixes.some((path) => pathname.startsWith(path))) {
    // Allow /auth/teamsOnboarding even if user is authenticated
    if (authToken && pathname !== "/auth/teamsOnboarding") {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  // Allow home page to render — redirect will happen inside
  if (pathname === "/") {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!authToken || !currentRole) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }

  // Redirect if path role doesn't match cookie role
  const basePath = getBasePath(pathname);
  if (basePath && basePath !== currentRole) {
    return NextResponse.redirect(
      new URL(`/${currentRole}/dashboard`, request.url)
    );
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
