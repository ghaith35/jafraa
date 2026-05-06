import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    await prisma.$queryRaw`SELECT 1`;
    return NextResponse.json({ ok: true, service: "jafraa", database: "ok", timestamp: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ ok: false, service: "jafraa", database: "error", timestamp: new Date().toISOString() }, { status: 503 });
  }
}
