import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const lang = url.pathname.split("/")[1]; // Extract `lang` from the URL

  // Add `lang` as a custom header for server-side use
  request.headers.set("x-lang", lang || "ja");

  return NextResponse.next({ request });
}
