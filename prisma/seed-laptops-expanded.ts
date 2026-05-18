import type { PrismaClient } from "@prisma/client";
import { EXPANDED_LAPTOP_CATALOG } from "./catalog/laptop-catalog-expanded";

import brandAcer from "../src/data/catalog/laptops/brands/acer.json";
import brandApple from "../src/data/catalog/laptops/brands/apple.json";
import brandAsus from "../src/data/catalog/laptops/brands/asus.json";
import brandChuwi from "../src/data/catalog/laptops/brands/chuwi.json";
import brandCondor from "../src/data/catalog/laptops/brands/condor.json";
import brandDell from "../src/data/catalog/laptops/brands/dell.json";
import brandFujitsu from "../src/data/catalog/laptops/brands/fujitsu.json";
import brandGigabyteAorus from "../src/data/catalog/laptops/brands/gigabyte---aorus.json";
import brandHp from "../src/data/catalog/laptops/brands/hp.json";
import brandHonor from "../src/data/catalog/laptops/brands/honor.json";
import brandHuawei from "../src/data/catalog/laptops/brands/huawei.json";
import brandLenovo from "../src/data/catalog/laptops/brands/lenovo.json";
import brandLg from "../src/data/catalog/laptops/brands/lg.json";
import brandMedion from "../src/data/catalog/laptops/brands/medion.json";
import brandMicrosoftSurface from "../src/data/catalog/laptops/brands/microsoft-surface.json";
import brandMsi from "../src/data/catalog/laptops/brands/msi.json";
import brandRazer from "../src/data/catalog/laptops/brands/razer.json";
import brandSamsung from "../src/data/catalog/laptops/brands/samsung.json";
import brandSonyVaio from "../src/data/catalog/laptops/brands/sony---vaio.json";
import brandThomson from "../src/data/catalog/laptops/brands/thomson.json";
import brandToshibaDynabook from "../src/data/catalog/laptops/brands/toshiba---dynabook.json";

interface BrandCatalogModel {
  name: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown> | null;
  variants: unknown[] | null;
}

interface BrandCatalogFamily {
  name: string;
  models: BrandCatalogModel[];
}

interface BrandCatalog {
  name: string;
  sortOrder: number;
  aliases: string[];
  families: BrandCatalogFamily[];
}

const BRAND_CATALOGS: BrandCatalog[] = [
  brandAcer,
  brandApple,
  brandAsus,
  brandChuwi,
  brandCondor,
  brandDell,
  brandFujitsu,
  brandGigabyteAorus,
  brandHp,
  brandHonor,
  brandHuawei,
  brandLenovo,
  brandLg,
  brandMedion,
  brandMicrosoftSurface,
  brandMsi,
  brandRazer,
  brandSamsung,
  brandSonyVaio,
  brandThomson,
  brandToshibaDynabook,
];

const BRAND_CATALOG_BY_NAME = new Map<string, BrandCatalog>(
  BRAND_CATALOGS.flatMap((cat) => {
    const entries: [string, BrandCatalog][] = [[cat.name.toLowerCase().trim(), cat]];
    for (const alias of cat.aliases) {
      entries.push([alias.toLowerCase().trim(), cat]);
    }
    return entries;
  }),
);

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function getBrandCatalogModels(brandName: string, familyName: string): BrandCatalogModel[] {
  const catalog =
    BRAND_CATALOG_BY_NAME.get(normalize(brandName)) ??
    BRAND_CATALOG_BY_NAME.get(normalize(brandName).split(" ")[0]);
  if (!catalog) return [];

  const nf = normalize(familyName);
  const brandPrefix = normalize(catalog.name) + " ";
  const stripped = nf.startsWith(brandPrefix) ? nf.slice(brandPrefix.length) : nf;

  const models: BrandCatalogModel[] = [];
  for (const family of catalog.families) {
    const sf = normalize(family.name);
    if (sf === nf || sf === stripped) {
      for (const model of family.models) {
        const key = normalize(model.name);
        if (!models.some((m) => normalize(m.name) === key)) {
          models.push(model);
        }
      }
    }
  }
  return models;
}

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

export async function seedExpandedLaptopCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding expanded laptop catalog (families + models with specs)...");

  const laptopCategory = await prisma.deviceCategory.findUnique({ where: { key: "laptop" } });
  if (!laptopCategory) throw new Error('DeviceCategory "laptop" not found');

  let brandCount = 0;
  let familyCount = 0;
  let modelCount = 0;
  let specsUpdated = 0;
  let inactiveLegacyFamilyCount = 0;

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

    const brandCatalogModels = getBrandCatalogModels(brandDef.name, "");

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

      const familyCatalogModels = getBrandCatalogModels(brandDef.name, familyDef.name);
      const catalogByName = new Map<string, BrandCatalogModel>();
      for (const cm of familyCatalogModels) {
        catalogByName.set(normalize(cm.name), cm);
      }

      for (let modelIndex = 0; modelIndex < familyDef.models.length; modelIndex++) {
        const modelName = familyDef.models[modelIndex];
        const modelSortOrder = modelIndex + 1;
        const existingModel = await prisma.deviceModel.findFirst({
          where: { familyId: family.id, name: { equals: modelName, mode: "insensitive" } },
          select: { id: true },
        });

        const catalogModel = catalogByName.get(normalize(modelName))
          ?? (() => {
            const compact = normalize(modelName).replace(/\s+/g, "");
            for (const [key, cm] of catalogByName) {
              if (key.replace(/\s+/g, "") === compact) return cm;
            }
            for (const [key, cm] of catalogByName) {
              if (key.startsWith(normalize(modelName)) || normalize(modelName).startsWith(key)) return cm;
            }
            return undefined;
          })();

        const releaseYear = catalogModel?.releaseYear ?? null;
        const imageUrl = catalogModel?.imageUrl ?? null;
        const specs = catalogModel?.specs ?? null;
        const variants = Array.isArray(catalogModel?.variants) ? catalogModel!.variants : null;

        if (existingModel) {
          const updateData: Record<string, unknown> = {
            sortOrder: modelSortOrder,
            isActive: true,
          };
          if (releaseYear !== null) updateData.releaseYear = releaseYear;
          if (imageUrl !== null) updateData.imageUrl = imageUrl;
          if (specs !== null) updateData.specs = specs as any;
          if (variants !== null) updateData.variants = variants as any;
          await prisma.deviceModel.update({
            where: { id: existingModel.id },
            data: updateData,
          });
          if (specs !== null) specsUpdated++;
        } else {
          await prisma.deviceModel.create({
            data: {
              familyId: family.id,
              name: modelName,
              sortOrder: modelSortOrder,
              isActive: true,
              releaseYear: releaseYear,
              imageUrl: imageUrl,
              specs: (specs ?? {}) as any,
              variants: (variants ?? []) as any,
            },
          });
          modelCount++;
          if (specs !== null) specsUpdated++;
        }
      }
    }
  }

  console.log(`    ✓ ${brandCount} laptop brands`);
  console.log(`    ✓ ${familyCount} new families, ${modelCount} new models`);
  console.log(`    ✓ ${specsUpdated} models with specs written`);
  if (inactiveLegacyFamilyCount) {
    console.log(`    ✓ ${inactiveLegacyFamilyCount} legacy model-level families deactivated`);
  }
  console.log("  Expanded laptop catalog seeded.");
}
