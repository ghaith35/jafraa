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
import { HUAWEI_ENRICHED_CATALOG } from "./catalog/huawei-catalog-enriched";
import { INFINIX_ENRICHED_CATALOG } from "./catalog/infinix-catalog-enriched";
import { VIVO_ENRICHED_CATALOG } from "./catalog/vivo-catalog-enriched";
import { TECNO_ENRICHED_CATALOG } from "./catalog/tecno-catalog-enriched";
import { ONEPLUS_ENRICHED_CATALOG } from "./catalog/oneplus-catalog-enriched";
import { GOOGLE_ENRICHED_CATALOG } from "./catalog/google-catalog-enriched";
import { XIAOMI_ENRICHED_CATALOG } from "./catalog/xiaomi-catalog-enriched";
import { REDMI_ENRICHED_CATALOG } from "./catalog/redmi-catalog-enriched";
import { OPPO_ENRICHED_CATALOG } from "./catalog/oppo-catalog-enriched";
import { CONDOR_ENRICHED_CATALOG } from "./catalog/condor-catalog-enriched";
import { SONY_ENRICHED_CATALOG } from "./catalog/sony-catalog-enriched";
import { LG_ENRICHED_CATALOG } from "./catalog/lg-catalog-enriched";
import { NOKIA_ENRICHED_CATALOG } from "./catalog/nokia-catalog-enriched";
import { POCO_ENRICHED_CATALOG } from "./catalog/poco-catalog-enriched";

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

function compactSamsungVariants(modelName: string, variants: unknown[]): unknown[] {
  const compacted = new Map<string, Record<string, string>>();

  for (const rawVariant of variants) {
    if (!rawVariant || typeof rawVariant !== "object") continue;
    const variant = rawVariant as Record<string, unknown>;
    const ram = typeof variant.ram === "string" ? variant.ram.trim() : "";
    const storage = typeof variant.storage === "string" ? variant.storage.trim() : "";
    const color = typeof variant.color === "string" ? variant.color.trim() : "";
    const connectivity = typeof variant.connectivity === "string" ? variant.connectivity.trim() : "";
    const processor = typeof variant.processor === "string" ? variant.processor.trim() : "";

    if (!ram && !storage && !color && !connectivity) continue;

    const network = connectivity
      .replace(/\s+by market$/i, "")
      .replace(/\s+/g, " ")
      .trim();
    const key = [ram, storage, color, network].join("|").toLowerCase();
    if (compacted.has(key)) continue;

    compacted.set(key, {
      name: [modelName, ram, storage, color, network].filter(Boolean).join(" "),
      ...(processor ? { processor } : {}),
      ...(ram ? { ram } : {}),
      ...(storage ? { storage } : {}),
      ...(color ? { color } : {}),
      ...(network ? { connectivity: network } : {}),
      sourceBasis: "simplified_storage_color_network",
    });
  }

  return Array.from(compacted.values());
}

const REMOVED_PHONE_BRAND_NAMES = ["Itel", "Motorola", "Nothing", "Asus", "ZTE / Nubia", "Autre"];

export async function seedExpandedPhoneCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding expanded phone catalog (families + models)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) throw new Error('DeviceCategory "phone" not found');

  let brandCount = 0;
  let familyCount = 0;
  let modelCount = 0;
  let inactiveLegacyFamilyCount = 0;
  let inactiveLegacyModelCount = 0;

  const removedPhoneBrands = await prisma.deviceBrand.findMany({
    where: {
      categoryId: phoneCategory.id,
      companyId: null,
      storeId: null,
      name: { in: REMOVED_PHONE_BRAND_NAMES },
    },
    select: { id: true },
  });
  const removedPhoneBrandIds = removedPhoneBrands.map((brand) => brand.id);
  if (removedPhoneBrandIds.length > 0) {
    const removedFamilies = await prisma.deviceModelFamily.findMany({
      where: {
        brandId: { in: removedPhoneBrandIds },
        companyId: null,
        storeId: null,
      },
      select: { id: true },
    });
    const removedFamilyIds = removedFamilies.map((family) => family.id);
    if (removedFamilyIds.length > 0) {
      await prisma.deviceModel.updateMany({
        where: { familyId: { in: removedFamilyIds }, isActive: true },
        data: { isActive: false },
      });
      await prisma.deviceModelFamily.updateMany({
        where: { id: { in: removedFamilyIds }, isActive: true },
        data: { isActive: false },
      });
    }
    await prisma.deviceBrand.updateMany({
      where: { id: { in: removedPhoneBrandIds }, isActive: true },
      data: { isActive: false },
    });
  }

  for (const brandDef of EXPANDED_PHONE_CATALOG) {
    if (REMOVED_PHONE_BRAND_NAMES.includes(brandDef.name)) continue;

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
      || brandDef.name === HUAWEI_ENRICHED_CATALOG.brandName
      || brandDef.name === INFINIX_ENRICHED_CATALOG.brandName
      || brandDef.name === VIVO_ENRICHED_CATALOG.brandName
      || brandDef.name === TECNO_ENRICHED_CATALOG.brandName
      || brandDef.name === ONEPLUS_ENRICHED_CATALOG.brandName
      || brandDef.name === GOOGLE_ENRICHED_CATALOG.brandName
      || brandDef.name === XIAOMI_ENRICHED_CATALOG.brandName
      || brandDef.name === REDMI_ENRICHED_CATALOG.brandName
      || brandDef.name === OPPO_ENRICHED_CATALOG.brandName
      || brandDef.name === CONDOR_ENRICHED_CATALOG.brandName
      || brandDef.name === SONY_ENRICHED_CATALOG.brandName
      || brandDef.name === LG_ENRICHED_CATALOG.brandName
      || brandDef.name === NOKIA_ENRICHED_CATALOG.brandName
      || brandDef.name === POCO_ENRICHED_CATALOG.brandName
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
  await seedHuaweiEnrichedCatalog(prisma);
  await seedInfinixEnrichedCatalog(prisma);
  await seedVivoEnrichedCatalog(prisma);
  await seedTecnoEnrichedCatalog(prisma);
  await seedOnePlusEnrichedCatalog(prisma);
  await seedGoogleEnrichedCatalog(prisma);
  await seedXiaomiEnrichedCatalog(prisma);
  await seedRedmiEnrichedCatalog(prisma);
  await seedOppoEnrichedCatalog(prisma);
  await seedCondorEnrichedCatalog(prisma);
  await seedSonyEnrichedCatalog(prisma);
  await seedLgEnrichedCatalog(prisma);
  await seedNokiaEnrichedCatalog(prisma);
  await seedPocoEnrichedCatalog(prisma);
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
  let variantCount = 0;

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
      const variants = compactSamsungVariants(enrichedModel.name, enrichedModel.variants ?? []);

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
      variantCount += variants.length;
    }
  }

  console.log(`    ✓ ${enrichedCount} Samsung models enriched with specs/${variantCount} simplified variants`);
}

async function seedHuaweiEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Huawei enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const huaweiBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: HUAWEI_ENRICHED_CATALOG.brandName },
  });
  if (!huaweiBrand) {
    console.log("    ⚠ Huawei brand not found, skipping enriched data");
    return;
  }

  if (HUAWEI_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: huaweiBrand.id },
      data: { logoUrl: HUAWEI_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = HUAWEI_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: huaweiBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < HUAWEI_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = HUAWEI_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: huaweiBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: huaweiBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${HUAWEI_ENRICHED_CATALOG.families.length} Huawei families (${familyCount} new)`);
  console.log(`    ✓ ${HUAWEI_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Huawei models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedInfinixEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Infinix enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const infinixBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: INFINIX_ENRICHED_CATALOG.brandName },
  });
  if (!infinixBrand) {
    console.log("    ⚠ Infinix brand not found, skipping enriched data");
    return;
  }

  if (INFINIX_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: infinixBrand.id },
      data: { logoUrl: INFINIX_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = INFINIX_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: infinixBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < INFINIX_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = INFINIX_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: infinixBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: infinixBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${INFINIX_ENRICHED_CATALOG.families.length} Infinix families (${familyCount} new)`);
  console.log(`    ✓ ${INFINIX_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Infinix models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedVivoEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Vivo enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const vivoBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: VIVO_ENRICHED_CATALOG.brandName },
  });
  if (!vivoBrand) {
    console.log("    ⚠ Vivo brand not found, skipping enriched data");
    return;
  }

  if (VIVO_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: vivoBrand.id },
      data: { logoUrl: VIVO_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = VIVO_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: vivoBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < VIVO_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = VIVO_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: vivoBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: vivoBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${VIVO_ENRICHED_CATALOG.families.length} Vivo families (${familyCount} new)`);
  console.log(`    ✓ ${VIVO_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Vivo models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedTecnoEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Tecno enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const tecnoBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: TECNO_ENRICHED_CATALOG.brandName },
  });
  if (!tecnoBrand) {
    console.log("    ⚠ Tecno brand not found, skipping enriched data");
    return;
  }

  if (TECNO_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: tecnoBrand.id },
      data: { logoUrl: TECNO_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = TECNO_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: tecnoBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < TECNO_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = TECNO_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: tecnoBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: tecnoBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        select: { id: true },
      });
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      if (existingModel) {
        await prisma.deviceModel.update({ where: { id: existingModel.id }, data });
      } else {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${TECNO_ENRICHED_CATALOG.families.length} Tecno families (${familyCount} new)`);
  console.log(`    ✓ ${TECNO_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Tecno models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedOnePlusEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding OnePlus enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const onePlusBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: ONEPLUS_ENRICHED_CATALOG.brandName },
  });
  if (!onePlusBrand) {
    console.log("    ⚠ OnePlus brand not found, skipping enriched data");
    return;
  }

  if (ONEPLUS_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: onePlusBrand.id },
      data: { logoUrl: ONEPLUS_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = ONEPLUS_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: onePlusBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < ONEPLUS_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = ONEPLUS_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: onePlusBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: onePlusBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        select: { id: true },
      });
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      if (existingModel) {
        await prisma.deviceModel.update({ where: { id: existingModel.id }, data });
      } else {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${ONEPLUS_ENRICHED_CATALOG.families.length} OnePlus families (${familyCount} new)`);
  console.log(`    ✓ ${ONEPLUS_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} OnePlus models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedGoogleEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Google enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const googleBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: GOOGLE_ENRICHED_CATALOG.brandName },
  });
  if (!googleBrand) {
    console.log("    ⚠ Google brand not found, skipping enriched data");
    return;
  }

  if (GOOGLE_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: googleBrand.id },
      data: { logoUrl: GOOGLE_ENRICHED_CATALOG.logoUrl },
    });
  }

  const duplicateGoogleBrands = await prisma.deviceBrand.findMany({
    where: {
      categoryId: phoneCategory.id,
      companyId: null,
      storeId: null,
      id: { not: googleBrand.id },
      name: { in: ["Google Pixel"] },
    },
    select: { id: true },
  });
  const duplicateGoogleBrandIds = duplicateGoogleBrands.map((brand) => brand.id);
  if (duplicateGoogleBrandIds.length > 0) {
    const duplicateFamilyIds = await prisma.deviceModelFamily.findMany({
      where: {
        brandId: { in: duplicateGoogleBrandIds },
        companyId: null,
        storeId: null,
        isGlobalDefault: true,
      },
      select: { id: true },
    });
    if (duplicateFamilyIds.length > 0) {
      await prisma.deviceModel.updateMany({
        where: {
          familyId: { in: duplicateFamilyIds.map((family) => family.id) },
          isActive: true,
        },
        data: { isActive: false },
      });
    }
    await prisma.deviceBrand.updateMany({
      where: { id: { in: duplicateGoogleBrandIds } },
      data: { isActive: false },
    });
    await prisma.deviceModelFamily.updateMany({
      where: {
        brandId: { in: duplicateGoogleBrandIds },
        companyId: null,
        storeId: null,
        isGlobalDefault: true,
        isActive: true,
      },
      data: { isActive: false },
    });
  }

  const wantedFamilyNames = GOOGLE_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: googleBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < GOOGLE_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = GOOGLE_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: googleBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: googleBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        select: { id: true },
      });
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      if (existingModel) {
        await prisma.deviceModel.update({ where: { id: existingModel.id }, data });
      } else {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${GOOGLE_ENRICHED_CATALOG.families.length} Google families (${familyCount} new)`);
  console.log(`    ✓ ${GOOGLE_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Google models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedXiaomiEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Xiaomi enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const xiaomiBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: XIAOMI_ENRICHED_CATALOG.brandName },
  });
  if (!xiaomiBrand) {
    console.log("    ⚠ Xiaomi brand not found, skipping enriched data");
    return;
  }

  if (XIAOMI_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: xiaomiBrand.id },
      data: { logoUrl: XIAOMI_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = XIAOMI_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: xiaomiBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < XIAOMI_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = XIAOMI_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: xiaomiBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: xiaomiBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        select: { id: true },
      });
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      if (existingModel) {
        await prisma.deviceModel.update({ where: { id: existingModel.id }, data });
      } else {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${XIAOMI_ENRICHED_CATALOG.families.length} Xiaomi families (${familyCount} new)`);
  console.log(`    ✓ ${XIAOMI_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Xiaomi models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedRedmiEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Redmi enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const redmiBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: REDMI_ENRICHED_CATALOG.brandName },
  });
  if (!redmiBrand) {
    console.log("    ⚠ Redmi brand not found, skipping enriched data");
    return;
  }

  if (REDMI_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: redmiBrand.id },
      data: { logoUrl: REDMI_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = REDMI_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: redmiBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < REDMI_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = REDMI_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: redmiBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: redmiBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        select: { id: true },
      });
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      if (existingModel) {
        await prisma.deviceModel.update({ where: { id: existingModel.id }, data });
      } else {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${REDMI_ENRICHED_CATALOG.families.length} Redmi families (${familyCount} new)`);
  console.log(`    ✓ ${REDMI_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Redmi models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedOppoEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Oppo enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const oppoBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: OPPO_ENRICHED_CATALOG.brandName },
  });
  if (!oppoBrand) {
    console.log("    ⚠ Oppo brand not found, skipping enriched data");
    return;
  }

  if (OPPO_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: oppoBrand.id },
      data: { logoUrl: OPPO_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = OPPO_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: oppoBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < OPPO_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = OPPO_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: oppoBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: oppoBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  const activeOppoFamilies = await prisma.deviceModelFamily.findMany({
    where: { brandId: oppoBrand.id, companyId: null, storeId: null, isActive: true },
    include: { deviceModels: { where: { isActive: true }, orderBy: [{ name: "asc" }, { updatedAt: "desc" }] } },
  });

  for (const family of activeOppoFamilies) {
    const seenModelNames = new Set<string>();
    const duplicateModelIds: string[] = [];
    for (const model of family.deviceModels) {
      const key = model.name.toLowerCase();
      if (seenModelNames.has(key)) {
        duplicateModelIds.push(model.id);
      } else {
        seenModelNames.add(key);
      }
    }
    if (duplicateModelIds.length > 0) {
      await prisma.deviceModel.updateMany({
        where: { id: { in: duplicateModelIds } },
        data: { isActive: false },
      });
    }
  }

  console.log(`    ✓ ${OPPO_ENRICHED_CATALOG.families.length} Oppo families (${familyCount} new)`);
  console.log(`    ✓ ${OPPO_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Oppo models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedCondorEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Condor enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const condorBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: CONDOR_ENRICHED_CATALOG.brandName },
  });
  if (!condorBrand) {
    console.log("    ⚠ Condor brand not found, skipping enriched data");
    return;
  }

  if (CONDOR_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: condorBrand.id },
      data: { logoUrl: CONDOR_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = CONDOR_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: condorBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < CONDOR_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = CONDOR_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: condorBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: condorBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${CONDOR_ENRICHED_CATALOG.families.length} Condor families (${familyCount} new)`);
  console.log(`    ✓ ${CONDOR_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Condor models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedSonyEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Sony enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const sonyBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: SONY_ENRICHED_CATALOG.brandName },
  });
  if (!sonyBrand) {
    console.log("    ⚠ Sony brand not found, skipping enriched data");
    return;
  }

  if (SONY_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: sonyBrand.id },
      data: { logoUrl: SONY_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = SONY_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: sonyBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < SONY_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = SONY_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: sonyBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: sonyBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${SONY_ENRICHED_CATALOG.families.length} Sony families (${familyCount} new)`);
  console.log(`    ✓ ${SONY_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Sony models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedLgEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding LG enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const lgBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: LG_ENRICHED_CATALOG.brandName },
  });
  if (!lgBrand) {
    console.log("    ⚠ LG brand not found, skipping enriched data");
    return;
  }

  if (LG_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: lgBrand.id },
      data: { logoUrl: LG_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = LG_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: lgBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < LG_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = LG_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: lgBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: lgBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${LG_ENRICHED_CATALOG.families.length} LG families (${familyCount} new)`);
  console.log(`    ✓ ${LG_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} LG models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedNokiaEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Nokia enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const nokiaBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: NOKIA_ENRICHED_CATALOG.brandName },
  });
  if (!nokiaBrand) {
    console.log("    ⚠ Nokia brand not found, skipping enriched data");
    return;
  }

  if (NOKIA_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: nokiaBrand.id },
      data: { logoUrl: NOKIA_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = NOKIA_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: nokiaBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < NOKIA_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = NOKIA_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: nokiaBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: nokiaBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${NOKIA_ENRICHED_CATALOG.families.length} Nokia families (${familyCount} new)`);
  console.log(`    ✓ ${NOKIA_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Nokia models (${modelCount} new) with ${variantCount} simplified variants`);
}

async function seedPocoEnrichedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding Poco enriched data (families, specs, variants, images, release years)...");

  const phoneCategory = await prisma.deviceCategory.findUnique({ where: { key: "phone" } });
  if (!phoneCategory) return;

  const pocoBrand = await prisma.deviceBrand.findFirst({
    where: { categoryId: phoneCategory.id, companyId: null, storeId: null, name: POCO_ENRICHED_CATALOG.brandName },
  });
  if (!pocoBrand) {
    console.log("    ⚠ Poco brand not found, skipping enriched data");
    return;
  }

  if (POCO_ENRICHED_CATALOG.logoUrl) {
    await prisma.deviceBrand.update({
      where: { id: pocoBrand.id },
      data: { logoUrl: POCO_ENRICHED_CATALOG.logoUrl },
    });
  }

  const wantedFamilyNames = POCO_ENRICHED_CATALOG.families.map((family) => family.name);
  await prisma.deviceModelFamily.updateMany({
    where: {
      brandId: pocoBrand.id,
      companyId: null,
      storeId: null,
      isGlobalDefault: true,
      isActive: true,
      name: { notIn: wantedFamilyNames },
    },
    data: { isActive: false },
  });

  let familyCount = 0;
  let modelCount = 0;
  let variantCount = 0;

  for (let familyIndex = 0; familyIndex < POCO_ENRICHED_CATALOG.families.length; familyIndex++) {
    const enrichedFamily = POCO_ENRICHED_CATALOG.families[familyIndex];
    let family = await prisma.deviceModelFamily.findFirst({
      where: { brandId: pocoBrand.id, companyId: null, storeId: null, name: enrichedFamily.name },
    });

    if (family) {
      family = await prisma.deviceModelFamily.update({
        where: { id: family.id },
        data: { sortOrder: familyIndex + 1, isGlobalDefault: true, isActive: true },
      });
    } else {
      family = await prisma.deviceModelFamily.create({
        data: {
          brandId: pocoBrand.id,
          companyId: null,
          storeId: null,
          name: enrichedFamily.name,
          sortOrder: familyIndex + 1,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      familyCount++;
    }

    const wantedModelNames = enrichedFamily.models.map((model) => model.name);
    await prisma.deviceModel.updateMany({
      where: { familyId: family.id, isActive: true, name: { notIn: wantedModelNames } },
      data: { isActive: false },
    });

    for (let modelIndex = 0; modelIndex < enrichedFamily.models.length; modelIndex++) {
      const enrichedModel = enrichedFamily.models[modelIndex];
      const data = {
        sortOrder: modelIndex + 1,
        isActive: true,
        releaseYear: enrichedModel.releaseYear ?? null,
        imageUrl: enrichedModel.imageUrl ?? null,
        specs: (enrichedModel.specs ?? {}) as any,
        variants: (enrichedModel.variants ?? []) as any,
      };

      const updatedModels = await prisma.deviceModel.updateMany({
        where: { familyId: family.id, name: { equals: enrichedModel.name, mode: "insensitive" } },
        data,
      });

      if (updatedModels.count === 0) {
        await prisma.deviceModel.create({
          data: { familyId: family.id, name: enrichedModel.name, ...data },
        });
        modelCount++;
      }
      variantCount += enrichedModel.variants.length;
    }
  }

  console.log(`    ✓ ${POCO_ENRICHED_CATALOG.families.length} Poco families (${familyCount} new)`);
  console.log(`    ✓ ${POCO_ENRICHED_CATALOG.families.flatMap((family) => family.models).length} Poco models (${modelCount} new) with ${variantCount} simplified variants`);
}
