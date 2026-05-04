-- AlterTable
ALTER TABLE "repair_invoices" ADD COLUMN     "refundedAmount" DECIMAL(12,2) NOT NULL DEFAULT 0;
