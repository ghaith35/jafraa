import { Prisma } from "@prisma/client";

/**
 * Safely generates a unique sequential repair invoice number for a store.
 * Format: {PREFIX}-INV-{YYYY}-{000001}
 * Example: DEMO-INV-2026-000001
 *
 * Must be called within a Prisma transaction.
 */
export async function generateInvoiceNumber(
  tx: Prisma.TransactionClient,
  storeId: string,
  storePrefix: string
): Promise<string> {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-12

  const sequence = await tx.documentSequence.upsert({
    where: {
      storeId_type_year_month: {
        storeId,
        type: "invoice",
        year,
        month,
      },
    },
    update: {
      lastNumber: { increment: 1 },
    },
    create: {
      storeId,
      type: "invoice",
      year,
      month,
      lastNumber: 1,
    },
  });

  // Format: PREFIX-INV-YYYY-000001
  const formattedNumber = String(sequence.lastNumber).padStart(6, "0");
  return `${storePrefix}-INV-${year}-${formattedNumber}`;
}
