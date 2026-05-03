import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/passwords";
import {
  signAccessToken,
  generateRefreshToken,
  hashRefreshToken,
} from "@/lib/auth/tokens";

const IS_PROD = process.env.NODE_ENV === "production";

export async function POST(req: NextRequest) {
  let body: { email?: string; password?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Corps de requête invalide" }, { status: 400 });
  }

  const email = body.email?.trim().toLowerCase();
  const password = body.password;

  if (!email || !password) {
    return NextResponse.json(
      { error: "Email et mot de passe requis" },
      { status: 400 }
    );
  }

  const user = await prisma.user.findFirst({
    where: { email, isActive: true, isArchived: false },
    include: {
      storeAccess: { select: { storeId: true } },
    },
  });

  // Constant-time negative path — always compare even when user not found
  const passwordValid = user
    ? await verifyPassword(password, user.passwordHash)
    : await verifyPassword(password, "$2b$12$invalidhashfortimingnormalization00");

  if (!user || !passwordValid) {
    return NextResponse.json({ error: "Identifiants incorrects" }, { status: 401 });
  }

  const storeIds = user.storeAccess.map((a) => a.storeId);

  const accessToken = await signAccessToken({
    sub: user.id,
    companyId: user.companyId,
    role: user.role,
    storeIds,
  });

  const rawRefreshToken = generateRefreshToken();
  const tokenHash = hashRefreshToken(rawRefreshToken);
  const familyId = crypto.randomUUID();

  await prisma.refreshToken.create({
    data: {
      userId: user.id,
      tokenHash,
      familyId,
      expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
      createdIp:
        req.headers.get("x-forwarded-for") ??
        req.headers.get("x-real-ip") ??
        undefined,
    },
  });

  const response = NextResponse.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      companyId: user.companyId,
      storeIds,
    },
  });

  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "lax",
    maxAge: 60 * 15,
    path: "/",
  });

  response.cookies.set("refresh_token", rawRefreshToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
