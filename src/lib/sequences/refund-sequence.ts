import { Prisma } from "@prisma/client";

/**
 * Generate a sequential refund number for a store.
 * Format: {STORE_PREFIX}-REF-{YYYY}-{000001}
 */
export async function generateRefundNumber(
  tx: Prisma.TransactionClient,
  storeId: string,
  storePrefix: string
): Promise<string> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;

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
  return `${storePrefix}-REF-${year}-${seqStr}`;
}
