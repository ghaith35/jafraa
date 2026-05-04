import { Prisma } from "@prisma/client";

/**
 * Safely generates a unique sequential POS sale number for a store.
 * Format: {PREFIX}-POS-{YYYY}-{000001}
 * Example: DEMO-POS-2026-000001
 * 
 * Must be called within a Prisma transaction.
 */
export async function generateSaleNumber(
  tx: Prisma.TransactionClient,
  storeId: string,
  storePrefix: string
): Promise<string> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-12

  // Upsert the sequence for this year/month combination
  const sequence = await tx.documentSequence.upsert({
    where: {
      storeId_type_year_month: {
        storeId,
        type: "pos_sale",
        year,
        month,
      },
    },
    update: {
      lastNumber: { increment: 1 },
    },
    create: {
      storeId,
      type: "pos_sale",
      year,
      month,
      lastNumber: 1,
    },
  });

  // Format: PREFIX-POS-YYYY-000001
  const formattedNumber = String(sequence.lastNumber).padStart(6, "0");
  return `${storePrefix}-POS-${year}-${formattedNumber}`;
}
