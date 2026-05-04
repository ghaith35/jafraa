import { Prisma } from "@prisma/client";

/**
 * Safely generates a unique sequential document number for a store.
 * Format: {PREFIX}-DEV-{YYYY}-{000001}
 * Example: ALG-DEV-2026-000001
 * 
 * Must be called within a Prisma transaction.
 */
export async function generateEstimateNumber(
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
        type: "estimate",
        year,
        month,
      },
    },
    update: {
      lastNumber: { increment: 1 },
    },
    create: {
      storeId,
      type: "estimate",
      year,
      month,
      lastNumber: 1,
    },
  });

  // Format: PREFIX-DEV-YYYY-000001
  // We use 6 digits for the sequence number.
  const formattedNumber = String(sequence.lastNumber).padStart(6, "0");
  return `${storePrefix}-DEV-${year}-${formattedNumber}`;
}
