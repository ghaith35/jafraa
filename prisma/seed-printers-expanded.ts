import type { PrismaClient } from "@prisma/client";
import { EXPANDED_PRINTER_CATALOG, PRINTER_CATALOG_COUNTS } from "./catalog/printer-catalog-expanded";

export async function seedExpandedPrinterCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding full printer catalog...");

  const printerCategory = await prisma.deviceCategory.findUnique({ where: { key: "printer" } });
  if (!printerCategory) {
    throw new Error('DeviceCategory with key "printer" was not found. Run seedCatalog(prisma) first.');
  }

  let brandCount = 0;
  let familyCount = 0;

  for (const brandDef of EXPANDED_PRINTER_CATALOG) {
    let brand = await prisma.deviceBrand.findFirst({
      where: {
        categoryId: printerCategory.id,
        companyId: null,
        storeId: null,
        name: brandDef.name,
      },
    });

    if (brand) {
      brand = await prisma.deviceBrand.update({
        where: { id: brand.id },
        data: { sortOrder: brandDef.sortOrder, isGlobalDefault: true, isActive: true },
      });
    } else {
      brand = await prisma.deviceBrand.create({
        data: {
          categoryId: printerCategory.id,
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
        where: { brandId: brand.id, companyId: null, storeId: null, name: familyName },
      });

      if (existing) {
        await prisma.deviceModelFamily.update({
          where: { id: existing.id },
          data: { sortOrder: i + 1, isGlobalDefault: true, isActive: true },
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

  console.log(`    ✓ ${brandCount} printer brands`);
  console.log(`    ✓ ${familyCount} printer model families`);
  console.log(`    ✓ ${PRINTER_CATALOG_COUNTS.byType.laser} laser models`);
  console.log(`    ✓ ${PRINTER_CATALOG_COUNTS.byType.ink_tank} réservoir / ink tank models`);
  console.log(`    ✓ ${PRINTER_CATALOG_COUNTS.byType.ink_cartridge} cartouche / ink cartridge models`);
  console.log(`    ✓ ${PRINTER_CATALOG_COUNTS.byType.risograph} risograph / digital duplicator models`);
  console.log("  Full printer catalog seeded.");
}
