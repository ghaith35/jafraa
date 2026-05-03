import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import {
  signAccessToken,
  generateRefreshToken,
  hashRefreshToken,
} from "@/lib/auth/tokens";

const IS_PROD = process.env.NODE_ENV === "production";
const GRACE_WINDOW_MS = 3_000;

export async function POST(req: NextRequest) {
  const rawToken = req.cookies.get("refresh_token")?.value;
  if (!rawToken) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const tokenHash = hashRefreshToken(rawToken);

  const existing = await prisma.refreshToken.findUnique({
    where: { tokenHash },
    include: { user: { include: { storeAccess: { select: { storeId: true } } } } },
  });

  if (!existing) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  if (existing.isRevoked) {
    const withinGrace =
      existing.replacedAt &&
      Date.now() - existing.replacedAt.getTime() < GRACE_WINDOW_MS;

    if (withinGrace && existing.replacedById) {
      // Legit race — issue a new access token only, no refresh rotation
      const user = existing.user;
      const storeIds = user.storeAccess.map((a) => a.storeId);
      const accessToken = await signAccessToken({
        sub: user.id,
        companyId: user.companyId,
        role: user.role,
        storeIds,
      });
      const response = NextResponse.json({ ok: true });
      response.cookies.set("access_token", accessToken, {
        httpOnly: true,
        secure: IS_PROD,
        sameSite: "lax",
        maxAge: 60 * 15,
        path: "/",
      });
      return response;
    }

    // Token reuse outside grace window — revoke entire family (security event)
    await prisma.refreshToken.updateMany({
      where: { familyId: existing.familyId },
      data: { isRevoked: true },
    });
    const response = NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    response.cookies.delete("refresh_token");
    response.cookies.delete("access_token");
    return response;
  }

  if (existing.expiresAt < new Date()) {
    return NextResponse.json({ error: "Session expirée" }, { status: 401 });
  }

  const user = existing.user;
  const storeIds = user.storeAccess.map((a) => a.storeId);

  const newRawToken = generateRefreshToken();
  const newHash = hashRefreshToken(newRawToken);
  const newFamilyId = existing.familyId; // same family — keeps the chain

  // Create new token, then mark old as replaced (transaction)
  const newToken = await prisma.$transaction(async (tx) => {
    const created = await tx.refreshToken.create({
      data: {
        userId: user.id,
        tokenHash: newHash,
        familyId: newFamilyId,
        expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
        createdIp:
          req.headers.get("x-forwarded-for") ??
          req.headers.get("x-real-ip") ??
          undefined,
      },
    });
    await tx.refreshToken.update({
      where: { id: existing.id },
      data: {
        isRevoked: true,
        replacedById: created.id,
        replacedAt: new Date(),
      },
    });
    return created;
  });

  void newToken; // used for its side-effects via transaction

  const accessToken = await signAccessToken({
    sub: user.id,
    companyId: user.companyId,
    role: user.role,
    storeIds,
  });

  const response = NextResponse.json({ ok: true });

  response.cookies.set("access_token", accessToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "lax",
    maxAge: 60 * 15,
    path: "/",
  });

  response.cookies.set("refresh_token", newRawToken, {
    httpOnly: true,
    secure: IS_PROD,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });

  return response;
}
