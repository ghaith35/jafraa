-- CreateEnum
CREATE TYPE "RepairStatus" AS ENUM ('received', 'in_diagnosis', 'in_repair', 'ready_for_pickup', 'completed', 'not_repaired');

-- CreateEnum
CREATE TYPE "RepairPriority" AS ENUM ('normal', 'rush');

-- CreateEnum
CREATE TYPE "ProblemResolutionStatus" AS ENUM ('pending', 'fixed', 'not_fixed', 'deferred');

-- CreateTable
CREATE TABLE "repair_tickets" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "storeId" TEXT NOT NULL,
    "ticketNumber" TEXT NOT NULL,
    "customerId" TEXT NOT NULL,
    "customerDeviceId" TEXT,
    "deviceCategoryId" TEXT,
    "deviceBrandId" TEXT,
    "deviceFamilyId" TEXT,
    "customDeviceBrand" TEXT,
    "customDeviceModel" TEXT,
    "deviceColor" TEXT,
    "deviceStorageRam" TEXT,
    "imeiSerial" TEXT,
    "currentStatus" "RepairStatus" NOT NULL DEFAULT 'received',
    "priority" "RepairPriority" NOT NULL DEFAULT 'normal',
    "assignedTechnicianId" TEXT,
    "diagnosisNote" TEXT,
    "internalNotes" TEXT,
    "customerNotes" TEXT,
    "estimatedPrice" DECIMAL(12,2),
    "finalPrice" DECIMAL(12,2),
    "warrantyDays" INTEGER,
    "dueAt" TIMESTAMP(3),
    "isArchived" BOOLEAN NOT NULL DEFAULT false,
    "createdByUserId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repair_tickets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repair_ticket_problems" (
    "id" TEXT NOT NULL,
    "repairTicketId" TEXT NOT NULL,
    "problemText" TEXT NOT NULL,
    "resolutionStatus" "ProblemResolutionStatus" NOT NULL DEFAULT 'pending',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "repair_ticket_problems_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "repair_status_history" (
    "id" TEXT NOT NULL,
    "repairTicketId" TEXT NOT NULL,
    "oldStatus" "RepairStatus",
    "newStatus" "RepairStatus" NOT NULL,
    "changedByUserId" TEXT NOT NULL,
    "note" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "repair_status_history_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "repair_tickets_storeId_currentStatus_idx" ON "repair_tickets"("storeId", "currentStatus");

-- CreateIndex
CREATE INDEX "repair_tickets_customerId_idx" ON "repair_tickets"("customerId");

-- CreateIndex
CREATE INDEX "repair_tickets_assignedTechnicianId_idx" ON "repair_tickets"("assignedTechnicianId");

-- CreateIndex
CREATE UNIQUE INDEX "repair_tickets_storeId_ticketNumber_key" ON "repair_tickets"("storeId", "ticketNumber");

-- CreateIndex
CREATE INDEX "repair_ticket_problems_repairTicketId_idx" ON "repair_ticket_problems"("repairTicketId");

-- CreateIndex
CREATE INDEX "repair_status_history_repairTicketId_createdAt_idx" ON "repair_status_history"("repairTicketId", "createdAt" DESC);

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_customerId_fkey" FOREIGN KEY ("customerId") REFERENCES "customers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_customerDeviceId_fkey" FOREIGN KEY ("customerDeviceId") REFERENCES "customer_assets"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_deviceCategoryId_fkey" FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_deviceBrandId_fkey" FOREIGN KEY ("deviceBrandId") REFERENCES "device_brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_deviceFamilyId_fkey" FOREIGN KEY ("deviceFamilyId") REFERENCES "device_model_families"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_assignedTechnicianId_fkey" FOREIGN KEY ("assignedTechnicianId") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_tickets" ADD CONSTRAINT "repair_tickets_createdByUserId_fkey" FOREIGN KEY ("createdByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_ticket_problems" ADD CONSTRAINT "repair_ticket_problems_repairTicketId_fkey" FOREIGN KEY ("repairTicketId") REFERENCES "repair_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_status_history" ADD CONSTRAINT "repair_status_history_repairTicketId_fkey" FOREIGN KEY ("repairTicketId") REFERENCES "repair_tickets"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_status_history" ADD CONSTRAINT "repair_status_history_changedByUserId_fkey" FOREIGN KEY ("changedByUserId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
