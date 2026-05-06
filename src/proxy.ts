import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { routing } from "@/i18n/routing";

const PROTECTED_PREFIXES = ["/dashboard"];
const AUTH_PREFIXES = ["/login"];

function getJwtSecret(): Uint8Array {
  return new TextEncoder().encode(process.env.JWT_SECRET ?? "");
}

async function isValidToken(token: string): Promise<boolean> {
  try {
    await jwtVerify(token, getJwtSecret());
    return true;
  } catch {
    return false;
  }
}

function stripLocalePrefix(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  const [firstSegment] = segments;

  if (firstSegment && (routing.locales as readonly string[]).includes(firstSegment)) {
    const rest = segments.slice(1);
    return rest.length ? `/${rest.join("/")}` : "/";
  }

  return pathname;
}

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const routePath = stripLocalePrefix(pathname);
  const accessToken = request.cookies.get("access_token")?.value;

  const isProtected = PROTECTED_PREFIXES.some((p) => routePath.startsWith(p));
  const isAuthPage = AUTH_PREFIXES.some((p) => routePath.startsWith(p));

  if (isProtected) {
    const valid = accessToken ? await isValidToken(accessToken) : false;
    if (!valid) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("from", routePath);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (isAuthPage && accessToken) {
    const valid = await isValidToken(accessToken);
    if (valid) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|_vercel|.*\\..*).*)"],
};
