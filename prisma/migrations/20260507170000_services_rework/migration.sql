-- Services rework: domain-scoped categories, multilingual fields, cost/margin baseline, and packages

-- Alter existing services table (additive, backward-compatible)
ALTER TABLE "services"
ADD COLUMN "serviceCategoryId" TEXT,
ADD COLUMN "deviceCategoryId" TEXT,
ADD COLUMN "nameFr" TEXT,
ADD COLUMN "nameEn" TEXT,
ADD COLUMN "nameAr" TEXT,
ADD COLUMN "basePrice" DECIMAL(12,2),
ADD COLUMN "costPrice" DECIMAL(12,2);

-- Create service_categories
CREATE TABLE "service_categories" (
  "id" TEXT NOT NULL,
  "storeId" TEXT NOT NULL,
  "deviceCategoryId" TEXT,
  "parentId" TEXT,
  "namePath" TEXT NOT NULL,
  "nameFr" TEXT NOT NULL,
  "nameEn" TEXT,
  "nameAr" TEXT,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "isArchived" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "service_categories_pkey" PRIMARY KEY ("id")
);

-- Create service_packages
CREATE TABLE "service_packages" (
  "id" TEXT NOT NULL,
  "storeId" TEXT NOT NULL,
  "deviceCategoryId" TEXT,
  "serviceCategoryId" TEXT,
  "name" TEXT NOT NULL,
  "description" TEXT,
  "basePrice" DECIMAL(12,2) NOT NULL DEFAULT 0,
  "costPrice" DECIMAL(12,2),
  "isActive" BOOLEAN NOT NULL DEFAULT true,
  "isArchived" BOOLEAN NOT NULL DEFAULT false,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updatedAt" TIMESTAMP(3) NOT NULL,
  CONSTRAINT "service_packages_pkey" PRIMARY KEY ("id")
);

-- Create service_package_items
CREATE TABLE "service_package_items" (
  "id" TEXT NOT NULL,
  "packageId" TEXT NOT NULL,
  "serviceId" TEXT NOT NULL,
  "quantity" DECIMAL(12,3) NOT NULL DEFAULT 1,
  "sortOrder" INTEGER NOT NULL DEFAULT 0,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT "service_package_items_pkey" PRIMARY KEY ("id")
);

-- Indexes
CREATE INDEX "services_storeId_serviceCategoryId_idx" ON "services"("storeId", "serviceCategoryId");
CREATE INDEX "services_storeId_deviceCategoryId_idx" ON "services"("storeId", "deviceCategoryId");
CREATE UNIQUE INDEX "service_categories_storeId_namePath_key" ON "service_categories"("storeId", "namePath");
CREATE INDEX "service_categories_storeId_deviceCategoryId_isActive_sortOrder_idx" ON "service_categories"("storeId", "deviceCategoryId", "isActive", "sortOrder");
CREATE INDEX "service_categories_storeId_parentId_idx" ON "service_categories"("storeId", "parentId");
CREATE INDEX "service_packages_storeId_deviceCategoryId_isActive_idx" ON "service_packages"("storeId", "deviceCategoryId", "isActive");
CREATE INDEX "service_packages_storeId_serviceCategoryId_idx" ON "service_packages"("storeId", "serviceCategoryId");
CREATE UNIQUE INDEX "service_package_items_packageId_serviceId_key" ON "service_package_items"("packageId", "serviceId");
CREATE INDEX "service_package_items_serviceId_idx" ON "service_package_items"("serviceId");

-- Foreign keys
ALTER TABLE "services"
ADD CONSTRAINT "services_serviceCategoryId_fkey"
FOREIGN KEY ("serviceCategoryId") REFERENCES "service_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "services"
ADD CONSTRAINT "services_deviceCategoryId_fkey"
FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "service_categories"
ADD CONSTRAINT "service_categories_storeId_fkey"
FOREIGN KEY ("storeId") REFERENCES "stores"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "service_categories"
ADD CONSTRAINT "service_categories_deviceCategoryId_fkey"
FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "service_categories"
ADD CONSTRAINT "service_categories_parentId_fkey"
FOREIGN KEY ("parentId") REFERENCES "service_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "service_packages"
ADD CONSTRAINT "service_packages_storeId_fkey"
FOREIGN KEY ("storeId") REFERENCES "stores"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;

ALTER TABLE "service_packages"
ADD CONSTRAINT "service_packages_deviceCategoryId_fkey"
FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "service_packages"
ADD CONSTRAINT "service_packages_serviceCategoryId_fkey"
FOREIGN KEY ("serviceCategoryId") REFERENCES "service_categories"("id")
ON DELETE SET NULL ON UPDATE CASCADE;

ALTER TABLE "service_package_items"
ADD CONSTRAINT "service_package_items_packageId_fkey"
FOREIGN KEY ("packageId") REFERENCES "service_packages"("id")
ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "service_package_items"
ADD CONSTRAINT "service_package_items_serviceId_fkey"
FOREIGN KEY ("serviceId") REFERENCES "services"("id")
ON DELETE RESTRICT ON UPDATE CASCADE;
