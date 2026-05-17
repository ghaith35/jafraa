-- Create junction table for service ↔ device category (many-to-many)
CREATE TABLE "service_device_categories" (
    "serviceId"        TEXT NOT NULL,
    "deviceCategoryId" TEXT NOT NULL,
    CONSTRAINT "service_device_categories_pkey" PRIMARY KEY ("serviceId", "deviceCategoryId")
);

-- Migrate existing single deviceCategoryId into junction table
INSERT INTO "service_device_categories" ("serviceId", "deviceCategoryId")
SELECT "id", "deviceCategoryId"
FROM "services"
WHERE "deviceCategoryId" IS NOT NULL;

-- Add foreign keys
ALTER TABLE "service_device_categories"
    ADD CONSTRAINT "service_device_categories_serviceId_fkey"
    FOREIGN KEY ("serviceId") REFERENCES "services"("id") ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE "service_device_categories"
    ADD CONSTRAINT "service_device_categories_deviceCategoryId_fkey"
    FOREIGN KEY ("deviceCategoryId") REFERENCES "device_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

CREATE INDEX "service_device_categories_deviceCategoryId_idx"
    ON "service_device_categories"("deviceCategoryId");

-- Drop old single-value column and its index
DROP INDEX IF EXISTS "services_storeId_deviceCategoryId_idx";
ALTER TABLE "services" DROP COLUMN IF EXISTS "deviceCategoryId";
