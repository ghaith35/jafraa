/**
 * Seed expanded phone catalog with proper DeviceModelFamily rows and child
 * DeviceModel rows.
 *
 * Depends on seedCatalog() already having created the phone category and base
 * global brands/families.
 *
 * For Samsung, enriched data (specs, variants, imageUrl, releaseYear) is
 * applied after basic upsert via seedSamsungEnrichedCatalog().
 */

import type { PrismaClient } from "@prisma/client";
import { EXPANDED_PHONE_CATALOG } from "./catalog/phone-catalog-expanded";
import { APPLE_ENRICHED_CATALOG } from "./catalog/apple-catalog-enriched";
import { SAMSUNG_ENRICHED_CATALOG } from "./catalog/samsung-catalog-enriched";

function getLegacyModelFamilyNames(
  families: { name: string; models: string[] }[],
): string[] {
  const wantedFamilyNames = new Set(families.map((family) => family.name));
  const names = new Set<string>();

  for (const family of families) {
    for (const model of family.models) {
      names.add(model);
      if (!model.toLowerCase().startsWith(family.name.toLowerCase())) {
        names.add(`${family.name} ${model}`.trim());
      }
    }
  }

  for (const familyName of wantedFamilyNames) names.delete(familyName);
  return Array.from(names);
}

export async function seedExpandedPhoneCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding expanded phone catalog (families + models)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) throw new Error('DeviceCategory "phone" not found');

  let brandCount = 0;
  let familyCount = 0;
  let modelCount = 0;
  let inactiveLegacyFamilyCount = 0;
  let inactiveLegacyModelCount = 0;

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
        data: {
          sortOrder: brandDef.sortOrder,
          isGlobalDefault: true,
          isActive: true,
        },
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

    const legacyModelFamilyNames = getLegacyModelFamilyNames(brandDef.families);
    if (legacyModelFamilyNames.length > 0) {
      const cleanup = await prisma.deviceModelFamily.updateMany({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          isGlobalDefault: true,
          isActive: true,
          name: { in: legacyModelFamilyNames },
        },
        data: { isActive: false },
      });
      inactiveLegacyFamilyCount += cleanup.count;
    }

    if (
      brandDef.name === APPLE_ENRICHED_CATALOG.brandName
      || brandDef.name === SAMSUNG_ENRICHED_CATALOG.brandName
    ) {
      const wantedFamilyNames = brandDef.families.map((family) => family.name);
      const cleanup = await prisma.deviceModelFamily.updateMany({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          isGlobalDefault: true,
          isActive: true,
          name: { notIn: wantedFamilyNames },
        },
        data: { isActive: false },
      });
      inactiveLegacyFamilyCount += cleanup.count;
    }

    for (let familyIndex = 0; familyIndex < brandDef.families.length; familyIndex++) {
      const familyDef = brandDef.families[familyIndex];
      const familySortOrder = familyIndex + 1;

      let family = await prisma.deviceModelFamily.findFirst({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          name: familyDef.name,
        },
      });

      if (family) {
        family = await prisma.deviceModelFamily.update({
          where: { id: family.id },
          data: {
            sortOrder: familySortOrder,
            isGlobalDefault: true,
            isActive: true,
          },
        });
      } else {
        family = await prisma.deviceModelFamily.create({
          data: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: familyDef.name,
            sortOrder: familySortOrder,
            isGlobalDefault: true,
            isActive: true,
          },
        });
        familyCount++;
      }

      const staleModels = await prisma.deviceModel.updateMany({
        where: {
          familyId: family.id,
          isActive: true,
          name: { notIn: familyDef.models },
        },
        data: { isActive: false },
      });
      inactiveLegacyModelCount += staleModels.count;

      for (let modelIndex = 0; modelIndex < familyDef.models.length; modelIndex++) {
        const modelName = familyDef.models[modelIndex];
        const modelSortOrder = modelIndex + 1;
        const existingModel = await prisma.deviceModel.findFirst({
          where: { familyId: family.id, name: { equals: modelName, mode: "insensitive" } },
          select: { id: true },
        });

        if (existingModel) {
          await prisma.deviceModel.update({
            where: { id: existingModel.id },
            data: { sortOrder: modelSortOrder, isActive: true },
          });
        } else {
          await prisma.deviceModel.create({
            data: { familyId: family.id, name: modelName, sortOrder: modelSortOrder, isActive: true },
          });
          modelCount++;
        }
      }
    }
  }

  console.log(`    ✓ ${brandCount} phone brands`);
  console.log(`    ✓ ${familyCount} families, ${modelCount} models`);
  if (inactiveLegacyFamilyCount) {
    console.log(`    ✓ ${inactiveLegacyFamilyCount} legacy model-level families deactivated`);
  }
  if (inactiveLegacyModelCount) {
    console.log(`    ✓ ${inactiveLegacyModelCount} legacy models deactivated`);
  }
  console.log("  Expanded phone catalog seeded.");

  await seedAppleEnrichedCatalog(prisma);
  await seedSamsungEnrichedCatalog(prisma);
}

async function seedAppleEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Apple enriched data (specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const appleBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: APPLE_ENRICHED_CATALOG.brandName },
  });
  if (!appleBrand) {
    console.log("    Apple brand not found, skipping enriched data");
    return;
  }

  if (APPLE_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: appleBrand.id },
      data: { logoUrl: APPLE_ENRICHED_CATALOG.logoUrl },
    });
  }

  let enrichedCount = 0;
  let variantCount = 0;

  for (const enrichedFamily of APPLE_ENRICHED_CATALOG.families) {
    const family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: appleBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });
    if (!family) continue;

    for (const enrichedModel of enrichedFamily.models) {
      const model = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
      });
      if (!model) continue;

      await prisma.deviceModel.update({
        where: { id: model.id },
        data: {
          releaseYear: enrichedModel.releaseYear,
          imageUrl: enrichedModel.imageUrl,
          specs: enrichedModel.specs as any,
          variants: enrichedModel.variants as any,
        },
      });
      enrichedCount++;
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${enrichedCount} Apple models enriched with ${variantCount} variants`);
}

async function seedSamsungEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Samsung enriched data (specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const samsungBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: SAMSUNG_ENRICHED_CATALOG.brandName },
  });
  if (!samsungBrand) {
    console.log("    ⚠ Samsung brand not found, skipping enriched data");
    return;
  }

  if (SAMSUNG_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: samsungBrand.id },
      data: { logoUrl: SAMSUNG_ENRICHED_CATALOG.logoUrl },
    });
  }

  let enrichedCount = 0;

  for (const enrichedFamily of SAMSUNG_ENRICHED_CATALOG.families) {
    const family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: samsungBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });
    if (!family) continue;

    for (const enrichedModel of enrichedFamily.models) {
      const model = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
      });
      if (!model) continue;

      const specs = enrichedModel.specs ?? {};
      const variants = enrichedModel.variants ?? [];

      await prisma.deviceModel.update({
        where: { id: model.id },
        data: {
          releaseYear: enrichedModel.releaseYear ?? null,
          imageUrl: enrichedModel.imageUrl ?? null,
          specs: specs as any,
          variants: variants as any,
        },
      });
      enrichedCount++;
    }
  }

  console.log(`    ✓ ${enrichedCount} Samsung models enriched with specs/variants`);
}
