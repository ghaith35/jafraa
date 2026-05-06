/**
 * Seed expanded laptop catalog into the existing DeviceBrand and DeviceModelFamily tables.
 *
 * Usage option A (recommended):
 *   1. Copy this file to prisma/seed-laptops-expanded.ts
 *   2. Copy prisma/catalog/laptop-catalog-expanded.ts to prisma/catalog/laptop-catalog-expanded.ts
 *   3. In prisma/seed.ts:
 *        import { seedExpandedLaptopCatalog } from "./seed-laptops-expanded";
 *        await seedCatalog(prisma);
 *        await seedExpandedLaptopCatalog(prisma);
 *
 * Usage option B:
 *   Run it manually with a small script after seedCatalog(), but option A is cleaner.
 */

import type { PrismaClient } from "@prisma/client";
import { EXPANDED_LAPTOP_CATALOG } from "./catalog/laptop-catalog-expanded";

export async function seedExpandedLaptopCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding expanded laptop catalog...");

  const laptopCategory = await prisma.deviceCategory.findUnique({
    where: { key: "laptop" },
  });

  if (!laptopCategory) {
    throw new Error('DeviceCategory with key "laptop" was not found. Run seedCatalog(prisma) first.');
  }

  let brandCount = 0;
  let familyCount = 0;

  for (const brandDef of EXPANDED_LAPTOP_CATALOG) {
    let brand = await prisma.deviceBrand.findFirst({
      where: {
        categoryId: laptopCategory.id,
        companyId: null,
        storeId: null,
        name: brandDef.name,
      },
    });

    if (brand) {
      brand = await prisma.deviceBrand.update({
        where: { id: brand.id },
        data: {
          sortOrder: brandDef.sortOrder,
          isGlobalDefault: true,
          isActive: true,
        },
      });
    } else {
      brand = await prisma.deviceBrand.create({
        data: {
          categoryId: laptopCategory.id,
          companyId: null,
          storeId: null,
          name: brandDef.name,
          sortOrder: brandDef.sortOrder,
          isGlobalDefault: true,
          isActive: true,
        },
      });
    }

    brandCount++;

    for (let i = 0; i < brandDef.families.length; i++) {
      const familyName = brandDef.families[i];
      const existing = await prisma.deviceModelFamily.findFirst({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          name: familyName,
        },
      });

      if (existing) {
        await prisma.deviceModelFamily.update({
          where: { id: existing.id },
          data: {
            sortOrder: i + 1,
            isGlobalDefault: true,
            isActive: true,
          },
        });
      } else {
        await prisma.deviceModelFamily.create({
          data: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: familyName,
            sortOrder: i + 1,
            isGlobalDefault: true,
            isActive: true,
          },
        });
      }

      familyCount++;
    }
  }

  console.log(`    ✓ ${brandCount} laptop brands`);
  console.log(`    ✓ ${familyCount} laptop model families`);
  console.log("  Expanded laptop catalog seeded.");
}
