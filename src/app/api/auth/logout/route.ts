import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { hashRefreshToken } from "@/lib/auth/tokens";

export async function POST(req: NextRequest) {
  const rawToken = req.cookies.get("refresh_token")?.value;

  if (rawToken) {
    const tokenHash = hashRefreshToken(rawToken);
    await prisma.refreshToken
      .update({
        where: { tokenHash },
        data: { isRevoked: true },
      })
      .catch(() => {
        // Token not found — already expired or invalid; ignore
      });
  }

  const response = NextResponse.json({ ok: true });
  response.cookies.delete("access_token");
  response.cookies.delete("refresh_token");
  return response;
}
