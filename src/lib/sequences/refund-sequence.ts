import { Prisma } from "@prisma/client";

/**
 * Generate a sequential refund number for a store.
 * Format: {STORE_PREFIX}-REF-{YYYYMM}-{000001}
 * Example: DEMO-REF-202605-000001
 *
 * The DocumentSequence key is monthly, so the generated number must also
 * include the month. Otherwise every new month could restart at the same
 * visible number and collide with the store-level unique refund number.
 */
export async function generateRefundNumber(
  tx: Prisma.TransactionClient,
  storeId: string,
  storePrefix: string
): Promise<string> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const period = `${year}${String(month).padStart(2, "0")}`;

  // Use DocumentSequence to get the next number
  const sequence = await tx.documentSequence.upsert({
    where: {
      storeId_type_year_month: {
        storeId,
        type: "refund",
        year,
        month,
      },
    },
    update: {
      lastNumber: { increment: 1 },
    },
    create: {
      storeId,
      type: "refund",
      year,
      month,
      lastNumber: 1,
    },
  });

  const seqStr = sequence.lastNumber.toString().padStart(6, "0");
  return `${storePrefix}-REF-${period}-${seqStr}`;
}
