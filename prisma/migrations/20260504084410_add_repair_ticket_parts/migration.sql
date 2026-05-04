-- CreateEnum
CREATE TYPE "RepairPartStatus" AS ENUM ('reserved', 'released', 'used');

-- CreateTable
CREATE TABLE "repair_ticket_parts" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "repairTicketId" TEXT NOT NULL,
    "partId" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,
    "status" "RepairPartStatus" NOT NULL DEFAULT 'reserved',
    "reservedByUserId" TEXT NOT NULL,
    "releasedByUserId" TEXT,
    "releasedAt" TIMESTAMP(3),
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repair_ticket_parts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "repair_ticket_parts_repairTicketId_idx" ON "repair_ticket_parts"("repairTicketId");

-- CreateIndex
CREATE INDEX "repair_ticket_parts_partId_idx" ON "repair_ticket_parts"("partId");

-- CreateIndex
CREATE INDEX "repair_ticket_parts_storeId_partId_status_idx" ON "repair_ticket_parts"("storeId", "partId", "status");

-- CreateIndex
CREATE INDEX "repair_ticket_parts_companyId_storeId_idx" ON "repair_ticket_parts"("companyId", "storeId");

-- AddForeignKey
ALTER TABLE "repair_ticket_parts" ADD CONSTRAINT "repair_ticket_parts_repairTicketId_fkey" FOREIGN KEY ("repairTicketId") REFERENCES "repair_tickets"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_ticket_parts" ADD CONSTRAINT "repair_ticket_parts_partId_fkey" FOREIGN KEY ("partId") REFERENCES "parts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_ticket_parts" ADD CONSTRAINT "repair_ticket_parts_reservedByUserId_fkey" FOREIGN KEY ("reservedByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_ticket_parts" ADD CONSTRAINT "repair_ticket_parts_releasedByUserId_fkey" FOREIGN KEY ("releasedByUserId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
