import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { DEMO_HOMEPAGE_ONLY } from "@/lib/demo";

/**
 * While the site is a homepage-only demo, send any deep link to unfinished
 * routes back to `/`. Static assets and Next internals stay untouched.
 */
export function middleware(request: NextRequest) {
  if (!DEMO_HOMEPAGE_ONLY) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;

  if (pathname === "/") {
    return NextResponse.next();
  }

  // Allow Next internals, API, and files with extensions (images, favicon, etc.)
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/";
  url.search = "";
  url.hash = "";
  return NextResponse.redirect(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
