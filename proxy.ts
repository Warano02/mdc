import { NextRequest, NextResponse } from "next/server";

function redirectToAuth(request: NextRequest) {
  const url = request.nextUrl.clone();
  url.pathname = "/login";
  url.search = "";
  return NextResponse.redirect(url);
}

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("ac_t")?.value;

  if (!token) {
    return redirectToAuth(request);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};