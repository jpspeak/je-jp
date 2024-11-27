import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const langs = ["ja", "en"];

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const langParam = url.pathname.split("/")[1]; // Extract `lang` from the URL
  const lang = langs.includes(langParam) ? langParam : "ja";
  // Add `lang` as a custom header for server-side use
  request.headers.set("x-lang", lang);

  return NextResponse.next({ request });
}
