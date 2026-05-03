/**
 * SKU generation utility for inventory items.
 *
 * Format:
 *   PRD-NNNNNN for products
 *   PRT-NNNNNN for parts
 *   SRV-NNNNNN for services
 *
 * Finds the max existing numeric suffix for the store+type and increments it.
 * Simple approach without advisory locks — acceptable for MVP traffic.
 * Race condition risk is minimal; SKU uniqueness constraint at DB level is the
 * final guard (P2002 should be caught and retried if needed).
 */

import { prisma } from "@/lib/db";

type ItemType = "product" | "part" | "service";

const PREFIXES: Record<ItemType, string> = {
  product: "PRD",
  part: "PRT",
  service: "SRV",
};

/**
 * Generate a unique SKU for the given storeId and itemType.
 * Returns a string like "PRD-000001".
 */
export async function generateSku(
  storeId: string,
  itemType: ItemType
): Promise<string> {
  const prefix = PREFIXES[itemType];
  const pattern = `${prefix}-%`;

  // Find the highest numeric suffix already used for this store + type
  let maxNum = 0;

  if (itemType === "product") {
    const rows = await prisma.product.findMany({
      where: { storeId, sku: { startsWith: `${prefix}-` } },
      select: { sku: true },
    });
    maxNum = extractMax(rows.map((r) => r.sku), prefix);
  } else if (itemType === "part") {
    const rows = await prisma.part.findMany({
      where: { storeId, sku: { startsWith: `${prefix}-` } },
      select: { sku: true },
    });
    maxNum = extractMax(rows.map((r) => r.sku), prefix);
  } else {
    const rows = await prisma.service.findMany({
      where: { storeId, sku: { startsWith: `${prefix}-` } },
      select: { sku: true },
    });
    maxNum = extractMax(rows.map((r) => r.sku), prefix);
  }

  void pattern; // suppress unused warning
  return `${prefix}-${String(maxNum + 1).padStart(6, "0")}`;
}

function extractMax(skus: string[], prefix: string): number {
  let max = 0;
  for (const sku of skus) {
    const numStr = sku.slice(prefix.length + 1); // e.g. "000042"
    const n = parseInt(numStr, 10);
    if (!isNaN(n) && n > max) max = n;
  }
  return max;
}
