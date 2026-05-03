/*
  Warnings:

  - You are about to drop the column `deviceFamilyId` on the `customer_assets` table. All the data in the column will be lost.
  - You are about to drop the column `deviceModelId` on the `customer_assets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "customer_assets" DROP COLUMN "deviceFamilyId",
DROP COLUMN "deviceModelId",
ADD COLUMN     "deviceCategoryId" TEXT,
ADD COLUMN     "deviceModelFamilyId" TEXT;

-- CreateTable
CREATE TABLE "device_categories" (
    "id" TEXT NOT NULL,
    "key" TEXT NOT NULL,
    "nameFr" TEXT NOT NULL,
    "nameAr" TEXT NOT NULL,
    "nameEn" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_brands" (
    "id" TEXT NOT NULL,
    "categoryId" TEXT NOT NULL,
    "companyId" TEXT,
    "storeId" TEXT,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isGlobalDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_brands_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "device_model_families" (
    "id" TEXT NOT NULL,
    "brandId" TEXT NOT NULL,
    "companyId" TEXT,
    "storeId" TEXT,
    "name" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isGlobalDefault" BOOLEAN NOT NULL DEFAULT false,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "device_model_families_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "device_categories_key_key" ON "device_categories"("key");

-- CreateIndex
CREATE INDEX "device_categories_isActive_sortOrder_idx" ON "device_categories"("isActive", "sortOrder");

-- CreateIndex
CREATE INDEX "device_brands_categoryId_isActive_sortOrder_idx" ON "device_brands"("categoryId", "isActive", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "device_brands_categoryId_companyId_storeId_name_key" ON "device_brands"("categoryId", "companyId", "storeId", "name");

-- CreateIndex
CREATE INDEX "device_model_families_brandId_isActive_sortOrder_idx" ON "device_model_families"("brandId", "isActive", "sortOrder");

-- CreateIndex
CREATE UNIQUE INDEX "device_model_families_brandId_companyId_storeId_name_key" ON "device_model_families"("brandId", "companyId", "storeId", "name");

-- AddForeignKey
ALTER TABLE "customer_assets" ADD CONSTRAINT "customer_assets_deviceCategoryId_fkey" FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_assets" ADD CONSTRAINT "customer_assets_deviceBrandId_fkey" FOREIGN KEY ("deviceBrandId") REFERENCES "device_brands"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "customer_assets" ADD CONSTRAINT "customer_assets_deviceModelFamilyId_fkey" FOREIGN KEY ("deviceModelFamilyId") REFERENCES "device_model_families"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_brands" ADD CONSTRAINT "device_brands_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "device_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "device_model_families" ADD CONSTRAINT "device_model_families_brandId_fkey" FOREIGN KEY ("brandId") REFERENCES "device_brands"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
