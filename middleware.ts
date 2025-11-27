import { NextResponse, type NextRequest } from "next/server";

import { defaultLocale, getPreferredLocale, isSupportedLocale, locales } from "./src/lib/i18n";

function hasLocale(pathname: string) {
  return locales.some((locale) => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`));
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  if (hasLocale(pathname)) {
    return NextResponse.next();
  }

  const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
  const acceptLanguage = request.headers.get("accept-language");
  const locale = getPreferredLocale(cookieLocale, acceptLanguage);

  const redirectURL = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(redirectURL);
}

export const config = {
  matcher: "/((?!_next|api|.*\\..*).*)"
};
