import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { verifyAccessToken } from "@/lib/auth/tokens";

export async function GET(req: NextRequest) {
  const token = req.cookies.get("access_token")?.value;
  if (!token) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  let payload;
  try {
    payload = await verifyAccessToken(token);
  } catch {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.sub },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      companyId: true,
      languagePreference: true,
      storeAccess: { select: { storeId: true } },
    },
  });

  if (!user || !user) {
    return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
  }

  return NextResponse.json({
    user: {
      ...user,
      storeIds: user.storeAccess.map((a) => a.storeId),
      storeAccess: undefined,
    },
  });
}
