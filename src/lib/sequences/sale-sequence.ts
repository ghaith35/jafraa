import { Prisma } from "@prisma/client";

/**
 * Safely generates a unique sequential POS sale number for a store.
 * Format: {PREFIX}-POS-{YYYYMM}-{000001}
 * Example: DEMO-POS-202605-000001
 *
 * The DocumentSequence key is monthly, so the generated number must also
 * include the month. Otherwise every new month could restart at the same
 * visible number and collide with the store-level unique sale number.
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
  const period = `${year}${String(month).padStart(2, "0")}`;

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

  // Format: PREFIX-POS-YYYYMM-000001
  const formattedNumber = String(sequence.lastNumber).padStart(6, "0");
  return `${storePrefix}-POS-${period}-${formattedNumber}`;
}
