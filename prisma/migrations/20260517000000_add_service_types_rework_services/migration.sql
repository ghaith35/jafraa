-- Migration: Add ServiceType model, rework Service model, drop ServiceCategory
-- 2026-05-17

-- ── 1. Create service_types table ────────────────────────────────────────────
CREATE TABLE "service_types" (
    "id"        TEXT NOT NULL,
    "companyId" TEXT NOT NULL,
    "baseKey"   TEXT,
    "isBase"    BOOLEAN NOT NULL DEFAULT false,
    "nameFr"    TEXT NOT NULL,
    "nameEn"    TEXT,
    "nameAr"    TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "isActive"  BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "service_types_pkey" PRIMARY KEY ("id")
);

-- Unique: one record per baseKey per company (NULLs allowed to repeat for custom types)
CREATE UNIQUE INDEX "service_types_companyId_baseKey_key"
    ON "service_types"("companyId", "baseKey")
    WHERE "baseKey" IS NOT NULL;

CREATE INDEX "service_types_companyId_isActive_sortOrder_idx"
    ON "service_types"("companyId", "isActive", "sortOrder");

ALTER TABLE "service_types"
    ADD CONSTRAINT "service_types_companyId_fkey"
    FOREIGN KEY ("companyId") REFERENCES "companies"("id")
    ON DELETE RESTRICT ON UPDATE CASCADE;

-- ── 2. Add serviceTypeId to services ─────────────────────────────────────────
ALTER TABLE "services" ADD COLUMN "serviceTypeId" TEXT;

-- ── 3. Rename / clean up Service name fields ──────────────────────────────────
-- nameFr was nullable — make it non-null by filling from `name` where null
UPDATE "services" SET "nameFr" = "name" WHERE "nameFr" IS NULL OR "nameFr" = '';
ALTER TABLE "services" ALTER COLUMN "nameFr" SET NOT NULL;

-- Drop old fields no longer needed
ALTER TABLE "services" DROP COLUMN IF EXISTS "name";
ALTER TABLE "services" DROP COLUMN IF EXISTS "category";
ALTER TABLE "services" DROP COLUMN IF EXISTS "serviceCategoryId";

-- ── 4. Add FK for serviceTypeId ───────────────────────────────────────────────
ALTER TABLE "services"
    ADD CONSTRAINT "services_serviceTypeId_fkey"
    FOREIGN KEY ("serviceTypeId") REFERENCES "service_types"("id")
    ON DELETE SET NULL ON UPDATE CASCADE;

CREATE INDEX "services_storeId_serviceTypeId_idx"
    ON "services"("storeId", "serviceTypeId");

-- ── 5. Drop serviceCategoryId from service_packages ───────────────────────────
ALTER TABLE "service_packages" DROP COLUMN IF EXISTS "serviceCategoryId";

-- ── 6. Drop service_categories table ─────────────────────────────────────────
-- Remove the index first, then the table (CASCADE handles FK from services which we already dropped)
DROP TABLE IF EXISTS "service_categories" CASCADE;
