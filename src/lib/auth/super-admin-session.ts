import { cookies } from "next/headers";
import { SignJWT, jwtVerify } from "jose";

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET ?? "repaire-super-admin-secret-change-me"
);

const COOKIE = "sa_token";
const EXPIRY = "4h";

export interface SuperAdminSession {
  sub: string;
  email: string;
  name: string;
}

export async function signSuperAdminToken(payload: SuperAdminSession): Promise<string> {
  return new SignJWT({ ...payload })
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime(EXPIRY)
    .sign(SECRET);
}

export async function getSuperAdminSession(): Promise<SuperAdminSession | null> {
  try {
    const jar = await cookies();
    const token = jar.get(COOKIE)?.value;
    if (!token) return null;
    const { payload } = await jwtVerify(token, SECRET);
    return payload as unknown as SuperAdminSession;
  } catch {
    return null;
  }
}

export async function setSuperAdminCookie(token: string) {
  const jar = await cookies();
  jar.set(COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/super-admin",
    maxAge: 60 * 60 * 4, // 4 hours
  });
}

export async function clearSuperAdminCookie() {
  const jar = await cookies();
  jar.delete(COOKIE);
}
