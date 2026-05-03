"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";

export async function listStockMovements(opts?: { storeId?: string }) {
  const session = await getSession();
  if (!session) return [];
  // Admin and Manager can view stock movements
  if (!hasPermission(session.role, "inventory:manage")) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  return prisma.stockMovement.findMany({
    where: { storeId },
    include: {
      product: { select: { name: true, sku: true } },
      part: { select: { name: true, sku: true } },
      createdBy: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
  });
}
