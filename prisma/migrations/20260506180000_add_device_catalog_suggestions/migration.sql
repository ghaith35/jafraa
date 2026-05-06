-- Add catalog suggestions so repair shops can use missing devices immediately,
-- then approve/merge/reject them later from Settings.
CREATE TYPE "CatalogSuggestionStatus" AS ENUM ('pending', 'approved', 'rejected', 'merged');

CREATE TABLE "device_catalog_suggestions" (
    "id" TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "storeId" TEXT,
    "createdByUserId" TEXT,
    "categoryId" TEXT,
    "categoryKey" TEXT,
    "brandId" TEXT,
    "brandName" TEXT,
    "familyId" TEXT,
    "printerType" TEXT,
    "seriesName" TEXT,
    "modelLine" TEXT,
    "generation" TEXT,
    "modelName" TEXT NOT NULL,
    "processor" TEXT,
    "ram" TEXT,
    "storage" TEXT,
    "gpu" TEXT,
    "sku" TEXT,
    "notes" TEXT,
    "source" TEXT NOT NULL DEFAULT 'repair_intake',
    "status" "CatalogSuggestionStatus" NOT NULL DEFAULT 'pending',
    "approvedFamilyId" TEXT,
    "rejectionReason" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "reviewedAt" TIMESTAMP(3),
    "reviewedByUserId" TEXT,

    CONSTRAINT "device_catalog_suggestions_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "device_catalog_suggestions_companyId_storeId_status_createdAt_idx" ON "device_catalog_suggestions"("companyId", "storeId", "status", "createdAt");
CREATE INDEX "device_catalog_suggestions_categoryId_brandId_status_idx" ON "device_catalog_suggestions"("categoryId", "brandId", "status");
