import { Prisma } from "@prisma/client";

/**
 * Safely generates a unique sequential estimate number for a store.
 * Format: {PREFIX}-DEV-{YYYYMM}-{000001}
 * Example: ALG-DEV-202605-000001
 *
 * The DocumentSequence key is monthly, so the generated number must also
 * include the month. Otherwise every new month could restart at the same
 * visible number and collide with the store-level unique estimate number.
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
  const period = `${year}${String(month).padStart(2, "0")}`;

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

  // Format: PREFIX-DEV-YYYYMM-000001
  // We use 6 digits for the sequence number.
  const formattedNumber = String(sequence.lastNumber).padStart(6, "0");
  return `${storePrefix}-DEV-${period}-${formattedNumber}`;
}
