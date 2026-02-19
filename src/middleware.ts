import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Routes that are always public (no stealth gate)
const PUBLIC_PATHS = [
  "/",
  "/blog",
  "/stealth-login",
  "/feed.xml",
  "/sitemap.xml",
  "/favicon.ico",
];

function isPublicPath(pathname: string): boolean {
  // Exact matches
  if (PUBLIC_PATHS.includes(pathname)) return true;
  // Blog posts
  if (pathname.startsWith("/blog/")) return true;
  // Static assets
  if (pathname.startsWith("/_next/")) return true;
  if (pathname.startsWith("/api/")) return true;
  return false;
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public paths through
  if (isPublicPath(pathname)) {
    return NextResponse.next();
  }

  // Check for stealth access cookie
  const hasAccess = request.cookies.get("stealth_access")?.value === "granted";
  if (hasAccess) {
    return NextResponse.next();
  }

  // Redirect to stealth login
  const loginUrl = new URL("/stealth-login", request.url);
  loginUrl.searchParams.set("redirect", pathname);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: [
    // Match all paths except static files
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
