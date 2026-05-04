-- CreateEnum
CREATE TYPE "RefundType" AS ENUM ('pos_sale', 'repair_invoice');

-- CreateEnum
CREATE TYPE "RefundStatus" AS ENUM ('completed', 'cancelled');

-- CreateTable
CREATE TABLE "refunds" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "refundNumber" TEXT NOT NULL,
    "refundType" "RefundType" NOT NULL,
    "posSaleId" TEXT,
    "repairInvoiceId" TEXT,
    "cashSessionId" TEXT NOT NULL,
    "totalRefundAmount" DECIMAL(12,2) NOT NULL,
    "reason" TEXT NOT NULL,
    "status" "RefundStatus" NOT NULL DEFAULT 'completed',
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "refunds_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "refund_lines" (
    "id" TEXT NOT NULL,
    "refundId" TEXT NOT NULL,
    "lineType" TEXT NOT NULL,
    "posSaleLineId" TEXT,
    "repairInvoiceLineId" TEXT,
    "productId" TEXT,
    "partId" TEXT,
    "serviceId" TEXT,
    "description" TEXT NOT NULL,
    "quantity" DECIMAL(12,3) NOT NULL,
    "unitPrice" DECIMAL(12,2) NOT NULL,
    "totalRefundAmount" DECIMAL(12,2) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "refund_lines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "refunds_posSaleId_idx" ON "refunds"("posSaleId");

-- CreateIndex
CREATE INDEX "refunds_repairInvoiceId_idx" ON "refunds"("repairInvoiceId");

-- CreateIndex
CREATE INDEX "refunds_storeId_createdAt_idx" ON "refunds"("storeId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "refunds_storeId_refundNumber_key" ON "refunds"("storeId", "refundNumber");

-- CreateIndex
CREATE INDEX "refund_lines_refundId_idx" ON "refund_lines"("refundId");

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_posSaleId_fkey" FOREIGN KEY ("posSaleId") REFERENCES "pos_sales"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_repairInvoiceId_fkey" FOREIGN KEY ("repairInvoiceId") REFERENCES "repair_invoices"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_cashSessionId_fkey" FOREIGN KEY ("cashSessionId") REFERENCES "cash_register_sessions"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refunds" ADD CONSTRAINT "refunds_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_refundId_fkey" FOREIGN KEY ("refundId") REFERENCES "refunds"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_posSaleLineId_fkey" FOREIGN KEY ("posSaleLineId") REFERENCES "pos_sale_lines"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_repairInvoiceLineId_fkey" FOREIGN KEY ("repairInvoiceLineId") REFERENCES "repair_invoice_lines"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_partId_fkey" FOREIGN KEY ("partId") REFERENCES "parts"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "refund_lines" ADD CONSTRAINT "refund_lines_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE SET NULL ON UPDATE CASCADE;
