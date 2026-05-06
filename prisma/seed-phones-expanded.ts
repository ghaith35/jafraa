import type { PrismaClient } from "@prisma/client";
import { EXPANDED_PHONE_CATALOG } from "./catalog/phone-catalog-expanded";


const LEGACY_GROUPED_PHONE_FAMILIES: Record<string, string[]> = {
  Samsung: ["Galaxy A", "Galaxy S", "Galaxy Note", "Galaxy M", "Galaxy Z"],
  Apple: ["iPhone 6/7/8", "iPhone X/XR/XS", "iPhone SE"],
  Xiaomi: ["Xiaomi Number Series", "Xiaomi T Series", "Xiaomi Mix"],
  Redmi: ["Redmi Number Series", "Redmi Note Series"],
  Poco: ["Poco C", "Poco M", "Poco X", "Poco F"],
  Oppo: ["A Series", "Reno Series", "Find Series"],
  Realme: ["C Series", "Number Series", "Narzo", "GT"],
  Infinix: ["Smart", "Hot", "Note", "Zero"],
  Tecno: ["Spark", "Camon", "Pop", "Phantom"],
  Itel: ["A Series", "P Series", "S Series"],
  Huawei: ["P Series", "Mate Series", "Nova", "Y Series"],
  Honor: ["X Series", "Magic", "Number Series"],
  Vivo: ["Y Series", "V Series", "X Series"],
  Condor: ["Allure", "Griffe", "Plume"],
};

export async function seedExpandedPhoneCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding expanded phone catalog...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) {
    throw new Error('DeviceCategory with key "phone" was not found. Run seedCatalog(prisma) first.');
  }

  let brandCount = 0;
  let familyCount = 0;

  for (const brandDef of EXPANDED_PHONE_CATALOG) {
    let brand = await prisma.deviceBrand.findFirst({
      where: {
        categoryId: phoneCategory.id,
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
          categoryId: phoneCategory.id,
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

    const legacyGroupedFamilies = LEGACY_GROUPED_PHONE_FAMILIES[brandDef.name] ?? [];
    if (legacyGroupedFamilies.length > 0) {
      await prisma.deviceModelFamily.updateMany({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          isGlobalDefault: true,
          name: { in: legacyGroupedFamilies },
        },
        data: { isActive: false },
      });
    }

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

  console.log(`    ✓ ${brandCount} phone brands`);
  console.log(`    ✓ ${familyCount} phone model families`);
  console.log("  Expanded phone catalog seeded.");
}
