import { SignJWT, jwtVerify } from "jose";
import crypto from "crypto";
import type { UserRole } from "@prisma/client";

export interface AccessTokenPayload {
  sub: string;
  companyId: string;
  role: UserRole;
  storeIds: string[];
}

function getJwtSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET;
  if (!secret) throw new Error("JWT_SECRET is not set");
  return new TextEncoder().encode(secret);
}

export async function signAccessToken(
  payload: AccessTokenPayload
): Promise<string> {
  return new SignJWT({
    companyId: payload.companyId,
    role: payload.role,
    storeIds: payload.storeIds,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setSubject(payload.sub)
    .setIssuedAt()
    .setExpirationTime("15m")
    .sign(getJwtSecret());
}

export async function verifyAccessToken(
  token: string
): Promise<AccessTokenPayload> {
  const { payload } = await jwtVerify(token, getJwtSecret());
  return {
    sub: payload.sub as string,
    companyId: payload.companyId as string,
    role: payload.role as UserRole,
    storeIds: payload.storeIds as string[],
  };
}

export function generateRefreshToken(): string {
  return crypto.randomBytes(40).toString("hex");
}

export function hashRefreshToken(token: string): string {
  return crypto.createHash("sha256").update(token).digest("hex");
}
