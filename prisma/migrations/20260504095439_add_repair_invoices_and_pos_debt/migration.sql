-- CreateEnum
CREATE TYPE "RepairInvoiceStatus" AS ENUM ('unpaid', 'partial', 'paid', 'cancelled');

-- AlterTable
ALTER TABLE "pos_sales" ADD COLUMN     "debtAmount" DECIMAL(12,2) NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE "repair_invoices" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "repairTicketId" TEXT NOT NULL,
    "invoiceNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "subtotalAmount" DECIMAL(12,2) NOT NULL,
    "discountAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "totalAmount" DECIMAL(12,2) NOT NULL,
    "paidAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "debtAmount" DECIMAL(12,2) NOT NULL DEFAULT 0,
    "status" "RepairInvoiceStatus" NOT NULL DEFAULT 'unpaid',
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repair_invoices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repair_invoice_lines" (
    "id" TEXT NOT NULL,
    "repairInvoiceId" TEXT NOT NULL,
    "lineType" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "repairTicketPartId" TEXT,
    "serviceId" TEXT,
    "quantity" DECIMAL(12,3) NOT NULL,
    "unitPrice" DECIMAL(12,2) NOT NULL,
    "totalPrice" DECIMAL(12,2) NOT NULL,
    "costTotal" DECIMAL(12,2),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "repair_invoice_lines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "repair_invoices_repairTicketId_idx" ON "repair_invoices"("repairTicketId");

-- CreateIndex
CREATE INDEX "repair_invoices_customerId_idx" ON "repair_invoices"("customerId");

-- CreateIndex
CREATE INDEX "repair_invoices_storeId_createdAt_idx" ON "repair_invoices"("storeId", "createdAt" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "repair_invoices_storeId_invoiceNumber_key" ON "repair_invoices"("storeId", "invoiceNumber");

-- CreateIndex
CREATE INDEX "repair_invoice_lines_repairInvoiceId_idx" ON "repair_invoice_lines"("repairInvoiceId");

-- AddForeignKey
ALTER TABLE "repair_invoices" ADD CONSTRAINT "repair_invoices_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_invoices" ADD CONSTRAINT "repair_invoices_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_invoices" ADD CONSTRAINT "repair_invoices_repairTicketId_fkey" FOREIGN KEY ("repairTicketId") REFERENCES "repair_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_invoices" ADD CONSTRAINT "repair_invoices_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_invoices" ADD CONSTRAINT "repair_invoices_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_invoice_lines" ADD CONSTRAINT "repair_invoice_lines_repairInvoiceId_fkey" FOREIGN KEY ("repairInvoiceId") REFERENCES "repair_invoices"("id") ON DELETE CASCADE ON UPDATE CASCADE;
