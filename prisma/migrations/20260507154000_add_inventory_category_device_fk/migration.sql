-- Add optional device category mapping for inventory categories (FK-based scoping)
ALTER TABLE "inventory_categories"
ADD COLUMN "deviceCategoryId" TEXT;

ALTER TABLE "inventory_categories"
ADD CONSTRAINT "inventory_categories_deviceCategoryId_fkey"
FOREIGN KEY ("deviceCategoryId")
REFERENCES "device_categories"("id")
ON DELETE SET NULL
ON UPDATE CASCADE;

CREATE INDEX "inventory_categories_storeId_itemType_deviceCategoryId_idx"
ON "inventory_categories"("storeId", "itemType", "deviceCategoryId");
