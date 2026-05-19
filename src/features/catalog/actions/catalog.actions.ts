"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { EXPANDED_LAPTOP_CATALOG } from "../../../../prisma/catalog/laptop-catalog-expanded";
import { EXPANDED_PHONE_CATALOG } from "../../../../prisma/catalog/phone-catalog-expanded";
import { APPLE_ENRICHED_CATALOG } from "../../../../prisma/catalog/apple-catalog-enriched";
import { SAMSUNG_ENRICHED_CATALOG } from "../../../../prisma/catalog/samsung-catalog-enriched";
import { HUAWEI_ENRICHED_CATALOG } from "../../../../prisma/catalog/huawei-catalog-enriched";
import { INFINIX_ENRICHED_CATALOG } from "../../../../prisma/catalog/infinix-catalog-enriched";
import { VIVO_ENRICHED_CATALOG } from "../../../../prisma/catalog/vivo-catalog-enriched";
import { TECNO_ENRICHED_CATALOG } from "../../../../prisma/catalog/tecno-catalog-enriched";
import { ONEPLUS_ENRICHED_CATALOG } from "../../../../prisma/catalog/oneplus-catalog-enriched";
import { GOOGLE_ENRICHED_CATALOG } from "../../../../prisma/catalog/google-catalog-enriched";
import { XIAOMI_ENRICHED_CATALOG } from "../../../../prisma/catalog/xiaomi-catalog-enriched";
import { REDMI_ENRICHED_CATALOG } from "../../../../prisma/catalog/redmi-catalog-enriched";
import { OPPO_ENRICHED_CATALOG } from "../../../../prisma/catalog/oppo-catalog-enriched";
import { CONDOR_ENRICHED_CATALOG } from "../../../../prisma/catalog/condor-catalog-enriched";
import { SONY_ENRICHED_CATALOG } from "../../../../prisma/catalog/sony-catalog-enriched";
import { LG_ENRICHED_CATALOG } from "../../../../prisma/catalog/lg-catalog-enriched";
import { NOKIA_ENRICHED_CATALOG } from "../../../../prisma/catalog/nokia-catalog-enriched";
import { POCO_ENRICHED_CATALOG } from "../../../../prisma/catalog/poco-catalog-enriched";

import brandAcer from "../../../data/catalog/laptops/brands/acer.json";
import brandApple from "../../../data/catalog/laptops/brands/apple.json";
import brandAsus from "../../../data/catalog/laptops/brands/asus.json";
import brandChuwi from "../../../data/catalog/laptops/brands/chuwi.json";
import brandCondor from "../../../data/catalog/laptops/brands/condor.json";
import brandDell from "../../../data/catalog/laptops/brands/dell.json";
import brandFujitsu from "../../../data/catalog/laptops/brands/fujitsu.json";
import brandGigabyteAorus from "../../../data/catalog/laptops/brands/gigabyte---aorus.json";
import brandHp from "../../../data/catalog/laptops/brands/hp.json";
import brandHonor from "../../../data/catalog/laptops/brands/honor.json";
import brandHuawei from "../../../data/catalog/laptops/brands/huawei.json";
import brandLenovo from "../../../data/catalog/laptops/brands/lenovo.json";
import brandLg from "../../../data/catalog/laptops/brands/lg.json";
import brandMedion from "../../../data/catalog/laptops/brands/medion.json";
import brandMicrosoftSurface from "../../../data/catalog/laptops/brands/microsoft-surface.json";
import brandMsi from "../../../data/catalog/laptops/brands/msi.json";
import brandRazer from "../../../data/catalog/laptops/brands/razer.json";
import brandSamsung from "../../../data/catalog/laptops/brands/samsung.json";
import brandSonyVaio from "../../../data/catalog/laptops/brands/sony---vaio.json";
import brandThomson from "../../../data/catalog/laptops/brands/thomson.json";
import brandToshibaDynabook from "../../../data/catalog/laptops/brands/toshiba---dynabook.json";

// ─── Types ────────────────────────────────────────────────────────────────────

type ActionError = { error: string };
type CatalogManagerAuth =
  | { ok: false; error: string }
  | { ok: true; session: NonNullable<Awaited<ReturnType<typeof getSession>>> };

const VIRTUAL_LAPTOP_FAMILY_PREFIX = "virtual:laptop-family:";
const VIRTUAL_LAPTOP_MODEL_PREFIX = "virtual:laptop-model:";
const VIRTUAL_PHONE_FAMILY_PREFIX = "virtual:phone-family:";
const VIRTUAL_PHONE_MODEL_PREFIX = "virtual:phone-model:";

type BrandCatalogModel = {
  name: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown> | null;
  variants: unknown[] | null;
};

type BrandCatalogFamily = {
  name: string;
  models: BrandCatalogModel[];
};

type BrandCatalog = {
  name: string;
  sortOrder: number;
  aliases: string[];
  families: BrandCatalogFamily[];
};

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
    const entries: [string, BrandCatalog][] = [[normalizeCatalogName(cat.name), cat]];
    for (const alias of cat.aliases) {
      entries.push([normalizeCatalogName(alias), cat]);
    }
    return entries;
  }),
);

function normalizeCatalogName(value: string) {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function makeVirtualLaptopFamilyId(brandId: string, familyName: string) {
  return `${VIRTUAL_LAPTOP_FAMILY_PREFIX}${brandId}:${encodeURIComponent(familyName)}`;
}

function makeVirtualPhoneFamilyId(brandId: string, familyName: string) {
  return `${VIRTUAL_PHONE_FAMILY_PREFIX}${brandId}:${encodeURIComponent(familyName)}`;
}

function parseVirtualLaptopFamilyId(id: string) {
  if (!id.startsWith(VIRTUAL_LAPTOP_FAMILY_PREFIX)) return null;
  const rest = id.slice(VIRTUAL_LAPTOP_FAMILY_PREFIX.length);
  const separator = rest.indexOf(":");
  if (separator === -1) return null;
  return {
    brandId: rest.slice(0, separator),
    familyName: decodeURIComponent(rest.slice(separator + 1)),
  };
}

function parseVirtualPhoneFamilyId(id: string) {
  if (!id.startsWith(VIRTUAL_PHONE_FAMILY_PREFIX)) return null;
  const rest = id.slice(VIRTUAL_PHONE_FAMILY_PREFIX.length);
  const separator = rest.indexOf(":");
  if (separator === -1) return null;
  return {
    brandId: rest.slice(0, separator),
    familyName: decodeURIComponent(rest.slice(separator + 1)),
  };
}

function laptopBrandDef(brandName: string) {
  const normalized = normalizeCatalogName(brandName);
  return EXPANDED_LAPTOP_CATALOG.find(
    (brand) =>
      normalizeCatalogName(brand.name) === normalized ||
      (brand.aliases ?? []).some((a) => normalizeCatalogName(a) === normalized),
  ) ?? null;
}

function phoneBrandDef(brandName: string) {
  const normalized = normalizeCatalogName(brandName);
  return EXPANDED_PHONE_CATALOG.find(
    (brand) => normalizeCatalogName(brand.name) === normalized,
  ) ?? null;
}

function appleEnrichedBrandDef(brandName: string) {
  return normalizeCatalogName(brandName) === normalizeCatalogName(APPLE_ENRICHED_CATALOG.brandName)
    ? APPLE_ENRICHED_CATALOG
    : null;
}

function phoneEnrichedBrandDef(brandName: string) {
  const normalized = normalizeCatalogName(brandName);
  if (normalized === normalizeCatalogName(APPLE_ENRICHED_CATALOG.brandName)) return APPLE_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(SAMSUNG_ENRICHED_CATALOG.brandName)) return SAMSUNG_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(HUAWEI_ENRICHED_CATALOG.brandName)) return HUAWEI_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(INFINIX_ENRICHED_CATALOG.brandName)) return INFINIX_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(VIVO_ENRICHED_CATALOG.brandName)) return VIVO_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(TECNO_ENRICHED_CATALOG.brandName)) return TECNO_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(ONEPLUS_ENRICHED_CATALOG.brandName)) return ONEPLUS_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(GOOGLE_ENRICHED_CATALOG.brandName)) return GOOGLE_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(XIAOMI_ENRICHED_CATALOG.brandName)) return XIAOMI_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(REDMI_ENRICHED_CATALOG.brandName)) return REDMI_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(OPPO_ENRICHED_CATALOG.brandName)) return OPPO_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(CONDOR_ENRICHED_CATALOG.brandName)) return CONDOR_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(SONY_ENRICHED_CATALOG.brandName)) return SONY_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(LG_ENRICHED_CATALOG.brandName)) return LG_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(NOKIA_ENRICHED_CATALOG.brandName)) return NOKIA_ENRICHED_CATALOG;
  if (normalized === normalizeCatalogName(POCO_ENRICHED_CATALOG.brandName)) return POCO_ENRICHED_CATALOG;
  return null;
}

function phoneFamilyDef(brandName: string, familyName: string) {
  const brandDef = phoneBrandDef(brandName);
  const normalizedFamily = normalizeCatalogName(familyName);
  return brandDef?.families.find((family) => normalizeCatalogName(family.name) === normalizedFamily) ?? null;
}

function appleEnrichedModelsForFamily(brandName: string, familyName: string) {
  const brandDef = phoneEnrichedBrandDef(brandName);
  const normalizedFamily = normalizeCatalogName(familyName);
  return brandDef?.families.find((family) => normalizeCatalogName(family.name) === normalizedFamily)?.models ?? [];
}

function isMeaningfulRecord(value: unknown) {
  return !!value && typeof value === "object" && !Array.isArray(value) && Object.keys(value).length > 0;
}

function isNonEmptyArray(value: unknown): value is unknown[] {
  return Array.isArray(value) && value.length > 0;
}

function familyNameMatches(sourceFamily: string, normalizedFamily: string, strippedFamily: string): boolean {
  if (sourceFamily === normalizedFamily) return true;
  if (sourceFamily === strippedFamily) return true;
  return false;
}

function getBrandCatalog(brandName: string): BrandCatalog | null {
  return BRAND_CATALOG_BY_NAME.get(normalizeCatalogName(brandName)) ?? null;
}

function getBrandCatalogModelsForFamily(brandName: string, familyName: string): BrandCatalogModel[] {
  const catalog = getBrandCatalog(brandName);
  if (!catalog) return [];

  const normalizedFamily = normalizeCatalogName(familyName);
  const brandPrefix = normalizeCatalogName(catalog.name) + " ";
  const strippedFamily = normalizedFamily.startsWith(brandPrefix)
    ? normalizedFamily.slice(brandPrefix.length)
    : normalizedFamily;

  const models: BrandCatalogModel[] = [];

  for (const family of catalog.families) {
    const sourceFamily = normalizeCatalogName(family.name);
    if (!familyNameMatches(sourceFamily, normalizedFamily, strippedFamily)) continue;

    for (const model of family.models) {
      const key = normalizeCatalogName(model.name);
      if (!models.some((m) => normalizeCatalogName(m.name) === key)) {
        models.push(model);
      }
    }
  }

  return models;
}

function laptopFallbackModelsForFamily(familyId: string, brandName: string, familyName: string) {
  const brandDef = laptopBrandDef(brandName);
  const catalogModels = getBrandCatalogModelsForFamily(brandName, familyName);
  const now = new Date(0);

  if (catalogModels.length > 0 && brandDef) {
    const expandedFamily = brandDef.families.find(
      (f) => normalizeCatalogName(f.name) === normalizeCatalogName(familyName),
    );

    if (expandedFamily && expandedFamily.models.length > 0) {
      const catalogByName = new Map<string, BrandCatalogModel>();
      for (const cm of catalogModels) {
        catalogByName.set(normalizeCatalogName(cm.name), cm);
      }

      const seen = new Set<string>();
      const results: Array<{
        id: string;
        familyId: string;
        name: string;
        releaseYear: number | null;
        imageUrl: string | null;
        specs: Record<string, unknown>;
        variants: unknown[];
        sortOrder: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
      }> = [];

      for (let i = 0; i < expandedFamily.models.length; i++) {
        const modelName = expandedFamily.models[i];
        const key = normalizeCatalogName(modelName);
        if (seen.has(key)) continue;
        seen.add(key);

        const catalogMatch = catalogByName.get(key)
          ?? [...catalogByName.entries()].find(([k]) => k.startsWith(key) || key.startsWith(k))?.[1];

        if (catalogMatch) {
          results.push({
            id: `${VIRTUAL_LAPTOP_MODEL_PREFIX}${familyId}:${encodeURIComponent(catalogMatch.name)}`,
            familyId,
            name: catalogMatch.name,
            releaseYear: catalogMatch.releaseYear,
            imageUrl: catalogMatch.imageUrl,
            specs: catalogMatch.specs ?? {},
            variants: Array.isArray(catalogMatch.variants) ? catalogMatch.variants : [],
            sortOrder: i + 1,
            isActive: true,
            createdAt: now,
            updatedAt: now,
          });
        } else {
          results.push({
            id: `${VIRTUAL_LAPTOP_MODEL_PREFIX}${familyId}:${encodeURIComponent(modelName)}`,
            familyId,
            name: modelName,
            releaseYear: null,
            imageUrl: null,
            specs: {},
            variants: [],
            sortOrder: i + 1,
            isActive: true,
            createdAt: now,
            updatedAt: now,
          });
        }
      }

      for (const cm of catalogModels) {
        const key = normalizeCatalogName(cm.name);
        if (seen.has(key)) continue;
        seen.add(key);
        results.push({
          id: `${VIRTUAL_LAPTOP_MODEL_PREFIX}${familyId}:${encodeURIComponent(cm.name)}`,
          familyId,
          name: cm.name,
          releaseYear: cm.releaseYear,
          imageUrl: cm.imageUrl,
          specs: cm.specs ?? {},
          variants: Array.isArray(cm.variants) ? cm.variants : [],
          sortOrder: results.length + 1,
          isActive: true,
          createdAt: now,
          updatedAt: now,
        });
      }

      return results;
    }

    return catalogModels.map((model, index) => ({
      id: `${VIRTUAL_LAPTOP_MODEL_PREFIX}${familyId}:${encodeURIComponent(model.name)}`,
      familyId,
      name: model.name,
      releaseYear: model.releaseYear,
      imageUrl: model.imageUrl,
      specs: model.specs ?? {},
      variants: Array.isArray(model.variants) ? model.variants : [],
      sortOrder: index + 1,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    }));
  }

  if (brandDef) {
    const expandedFamily = brandDef.families.find(
      (f) => normalizeCatalogName(f.name) === normalizeCatalogName(familyName),
    );
    if (expandedFamily) {
      return expandedFamily.models.map((modelName, index) => ({
        id: `${VIRTUAL_LAPTOP_MODEL_PREFIX}${familyId}:${encodeURIComponent(modelName)}`,
        familyId,
        name: modelName,
        releaseYear: null,
        imageUrl: null,
        specs: {},
        variants: [],
        sortOrder: index + 1,
        isActive: true,
        createdAt: now,
        updatedAt: now,
      }));
    }
  }

  return [];
}

function phoneFallbackModelsForFamily(familyId: string, brandName: string, familyName: string) {
  const enrichedBrandDef = phoneEnrichedBrandDef(brandName);
  const enrichedFamily = enrichedBrandDef?.families.find(
    (family) => normalizeCatalogName(family.name) === normalizeCatalogName(familyName),
  );
  if (enrichedFamily) {
    const now = new Date(0);
    return enrichedFamily.models.map((model, index) => ({
      id: `${VIRTUAL_PHONE_MODEL_PREFIX}${familyId}:${encodeURIComponent(model.name)}`,
      familyId,
      name: model.name,
      releaseYear: model.releaseYear ?? null,
      imageUrl: model.imageUrl ?? null,
      specs: model.specs ?? {},
      variants: model.variants ?? [],
      sortOrder: index + 1,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    }));
  }

  const familyDef = phoneFamilyDef(brandName, familyName);
  const enrichedModels = appleEnrichedModelsForFamily(brandName, familyName);
  const enrichedByName = new Map(enrichedModels.map((model) => [normalizeCatalogName(model.name), model]));
  const now = new Date(0);

  if (!familyDef) return [];

  return familyDef.models.map((modelName, index) => {
    const enriched = enrichedByName.get(normalizeCatalogName(modelName));
    return {
      id: `${VIRTUAL_PHONE_MODEL_PREFIX}${familyId}:${encodeURIComponent(modelName)}`,
      familyId,
      name: enriched?.name ?? modelName,
      releaseYear: enriched?.releaseYear ?? null,
      imageUrl: enriched?.imageUrl ?? null,
      specs: enriched?.specs ?? {},
      variants: enriched?.variants ?? [],
      sortOrder: index + 1,
      isActive: true,
      createdAt: now,
      updatedAt: now,
    };
  });
}

// ─── Read queries ────────────────────────────────────────────────────────────

/** List all device categories, ordered by sortOrder */
export async function listDeviceCategories() {
  return prisma.deviceCategory.findMany({
    orderBy: [{ sortOrder: "asc" }, { nameFr: "asc" }],
  });
}

/**
 * List brands for a category.
 * Includes global defaults + custom entries for the current company/store.
 */
export async function listBrandsByCategory(
  categoryId: string,
  opts?: { companyId?: string; storeId?: string }
) {
  return prisma.deviceBrand.findMany({
    where: {
      categoryId,
      isActive: true,
      OR: [
        // Global defaults
        { isGlobalDefault: true },
        // Company/store custom entries
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: opts.storeId ?? null }]
          : []),
        ...(opts?.companyId
          ? [{ companyId: opts.companyId, storeId: null }]
          : []),
      ],
    },
    include: {
      _count: { select: { modelFamilies: true } },
    },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
  });
}

/**
 * List model families for a brand.
 * Includes global defaults + custom entries for the current company/store.
 */
export async function listFamiliesByBrand(
  brandId: string,
  opts?: { companyId?: string; storeId?: string; includeLaptopModelFallback?: boolean }
) {
  const scopeWhere = [
    { isGlobalDefault: true },
    ...(opts?.companyId
      ? [{ companyId: opts.companyId, storeId: opts.storeId ?? null }]
      : []),
    ...(opts?.companyId
      ? [{ companyId: opts.companyId, storeId: null }]
      : []),
  ];

  const [brand, dbFamilies] = await Promise.all([
    prisma.deviceBrand.findUnique({
      where: { id: brandId },
      select: { id: true, name: true, category: { select: { key: true } } },
    }),
    prisma.deviceModelFamily.findMany({
      where: {
        brandId,
        isActive: true,
        OR: scopeWhere,
      },
    }),
  ]);

  let families = dbFamilies;

  if (brand?.category.key === "laptop" && opts?.includeLaptopModelFallback) {
    const brandDef = laptopBrandDef(brand.name);
    if (brandDef) {
      const properFamilyNames = new Set(brandDef.families.map((family) => normalizeCatalogName(family.name)));
      const existingFamilyNames = new Set(families.map((family) => normalizeCatalogName(family.name)));

      families = families.filter((family) => {
        if (!family.isGlobalDefault) return true;
        return properFamilyNames.has(normalizeCatalogName(family.name));
      });

      const now = new Date(0);
      const virtualFamilies = brandDef.families
        .filter((family) => !existingFamilyNames.has(normalizeCatalogName(family.name)))
        .map((family, index) => ({
          id: makeVirtualLaptopFamilyId(brand.id, family.name),
          brandId: brand.id,
          companyId: null,
          storeId: null,
          name: family.name,
          sortOrder: index + 1,
          isGlobalDefault: true,
          isActive: true,
          createdAt: now,
          updatedAt: now,
        }));

      families = [...families, ...virtualFamilies];
    }
  }

  if (brand?.category.key === "phone") {
    const enrichedBrandDef = phoneEnrichedBrandDef(brand.name);
    const brandDef = enrichedBrandDef ?? phoneBrandDef(brand.name);
    if (brandDef) {
      const properFamilyNames = new Set(brandDef.families.map((family) => normalizeCatalogName(family.name)));

      families = families.filter((family) => {
        if (!family.isGlobalDefault) return true;
        return properFamilyNames.has(normalizeCatalogName(family.name));
      });

      if (opts?.includeLaptopModelFallback && !enrichedBrandDef) {
        const existingFamilyNames = new Set(families.map((family) => normalizeCatalogName(family.name)));
        const now = new Date(0);
        const virtualFamilies = brandDef.families
          .filter((family) => !existingFamilyNames.has(normalizeCatalogName(family.name)))
          .map((family, index) => ({
            id: makeVirtualPhoneFamilyId(brand.id, family.name),
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: family.name,
            sortOrder: index + 1,
            isGlobalDefault: true,
            isActive: true,
            createdAt: now,
            updatedAt: now,
          }));

        families = [...families, ...virtualFamilies];
      }
    }
  }

  if (brand?.category.key === "phone") {
    const enrichedBrandDef = phoneEnrichedBrandDef(brand.name);
    if (enrichedBrandDef) {
      const familyOrder = new Map(
        enrichedBrandDef.families.map((family, index) => [normalizeCatalogName(family.name), index]),
      );
      return families.sort((a, b) => {
        const ao = familyOrder.get(normalizeCatalogName(a.name)) ?? Number.MAX_SAFE_INTEGER;
        const bo = familyOrder.get(normalizeCatalogName(b.name)) ?? Number.MAX_SAFE_INTEGER;
        return ao - bo || a.sortOrder - b.sortOrder || a.name.localeCompare(b.name);
      });
    }
  }

  const maxYears = await prisma.deviceModel.groupBy({
    by: ["familyId"],
    where: { familyId: { in: families.map((f) => f.id) } },
    _max: { releaseYear: true },
  });
  const yearMap = new Map(maxYears.map((y) => [y.familyId, y._max.releaseYear]));

  return families.sort((a, b) => {
    const ya = yearMap.get(a.id) ?? -1;
    const yb = yearMap.get(b.id) ?? -1;
    return yb - ya || a.sortOrder - b.sortOrder || a.name.localeCompare(b.name);
  });
}

/**
 * List device models for a family.
 */
export async function listModelsByFamily(familyId: string) {
  const virtualLaptopFamily = parseVirtualLaptopFamilyId(familyId);
  if (virtualLaptopFamily) {
    const brand = await prisma.deviceBrand.findUnique({
      where: { id: virtualLaptopFamily.brandId },
      select: { name: true },
    });
    if (!brand) return [];
    return laptopFallbackModelsForFamily(familyId, brand.name, virtualLaptopFamily.familyName);
  }

  const virtualPhoneFamily = parseVirtualPhoneFamilyId(familyId);
  if (virtualPhoneFamily) {
    const brand = await prisma.deviceBrand.findUnique({
      where: { id: virtualPhoneFamily.brandId },
      select: { name: true },
    });
    if (!brand) return [];
    return phoneFallbackModelsForFamily(familyId, brand.name, virtualPhoneFamily.familyName);
  }

  const models = await prisma.deviceModel.findMany({
    where: { familyId, isActive: true },
    orderBy: [{ releaseYear: { sort: "desc", nulls: "last" } }, { sortOrder: "asc" }, { name: "asc" }],
  });

  const family = await prisma.deviceModelFamily.findUnique({
    where: { id: familyId },
    select: {
      name: true,
      brand: {
        select: {
          name: true,
          category: { select: { key: true } },
        },
      },
    },
  });

  if (family?.brand.category.key === "phone") {
    const fallbackModels = phoneFallbackModelsForFamily(familyId, family.brand.name, family.name);
    if (fallbackModels.length === 0) return models;

    const allowedModelNames = new Set(fallbackModels.map((model) => normalizeCatalogName(model.name)));
    const fallbackByName = new Map(fallbackModels.map((model) => [normalizeCatalogName(model.name), model]));
    const mergedModels = models
      .filter((model) => allowedModelNames.has(normalizeCatalogName(model.name)))
      .map((model) => {
        const fallback = fallbackByName.get(normalizeCatalogName(model.name));
        if (!fallback) return model;
        return {
          ...model,
          releaseYear: model.releaseYear ?? fallback.releaseYear,
          imageUrl: model.imageUrl ?? fallback.imageUrl,
          specs: isMeaningfulRecord(model.specs) ? model.specs : fallback.specs,
          variants: isNonEmptyArray(model.variants) ? model.variants : fallback.variants,
        };
      });

    const existingModelNames = new Set(mergedModels.map((model) => normalizeCatalogName(model.name)));
    const missingFallbackModels = fallbackModels.filter((model) => !existingModelNames.has(normalizeCatalogName(model.name)));

    return [...mergedModels, ...missingFallbackModels].sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
  }

  if (family?.brand.category.key !== "laptop") return models;

  const fallbackModels = laptopFallbackModelsForFamily(familyId, family.brand.name, family.name);
  if (fallbackModels.length === 0) return models;

  const existingModelNames = new Set(models.map((model) => normalizeCatalogName(model.name)));
  const missingFallbackModels = fallbackModels.filter((model) => !existingModelNames.has(normalizeCatalogName(model.name)));

  return [...models, ...missingFallbackModels].sort((a, b) => a.sortOrder - b.sortOrder || a.name.localeCompare(b.name));
}

/** Search brands across all categories (for autocomplete/search) */
export async function searchCatalog(
  query: string,
  opts?: { companyId?: string; storeId?: string }
) {
  const q = query.trim();
  if (!q) return { brands: [], families: [] };

  const [brands, families] = await Promise.all([
    prisma.deviceBrand.findMany({
      where: {
        name: { contains: q, mode: "insensitive" },
        isActive: true,
        OR: [
          { isGlobalDefault: true },
          ...(opts?.companyId
            ? [{ companyId: opts.companyId }]
            : []),
        ],
      },
      include: { category: { select: { nameFr: true, key: true } } },
      take: 20,
      orderBy: { sortOrder: "asc" },
    }),
    prisma.deviceModelFamily.findMany({
      where: {
        name: { contains: q, mode: "insensitive" },
        isActive: true,
        OR: [
          { isGlobalDefault: true },
          ...(opts?.companyId
            ? [{ companyId: opts.companyId }]
            : []),
        ],
      },
      include: {
        brand: {
          select: {
            name: true,
            category: { select: { nameFr: true, key: true } },
          },
        },
      },
      take: 20,
      orderBy: { sortOrder: "asc" },
    }),
  ]);

  return { brands, families };
}

// ─── Mutations (Admin/Manager only) ──────────────────────────────────────────

/** Create a store-custom brand under a category */
export async function createStoreCustomBrand(
  categoryId: string,
  name: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 120) {
    return { error: "Le nom de la marque est requis (max 120 caractères)" };
  }

  // Check category exists
  const category = await prisma.deviceCategory.findUnique({
    where: { id: categoryId },
    select: { id: true },
  });
  if (!category) return { error: "Catégorie introuvable" };

  // Check for duplicate in same scope
  const storeId = session.storeIds[0] ?? null;
  const existing = await prisma.deviceBrand.findFirst({
    where: {
      categoryId,
      name: { equals: trimmed, mode: "insensitive" },
      OR: [
        { isGlobalDefault: true },
        { companyId: session.companyId, storeId },
      ],
    },
  });
  if (existing) return { error: "Cette marque existe déjà" };

  try {
    const brand = await prisma.deviceBrand.create({
      data: {
        categoryId,
        companyId: session.companyId,
        storeId,
        name: trimmed,
        sortOrder: 50,
        isGlobalDefault: false,
        isActive: true,
      },
    });
    revalidatePath("/dashboard/settings/catalog");
    return { id: brand.id };
  } catch {
    return { error: "Erreur lors de la création de la marque" };
  }
}

/** Create a store-custom model family under a brand */
export async function createStoreCustomFamily(
  brandId: string,
  name: string
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const trimmed = name.trim();
  if (!trimmed || trimmed.length > 120) {
    return { error: "Le nom de la famille est requis (max 120 caractères)" };
  }

  // Check brand exists
  const brand = await prisma.deviceBrand.findUnique({
    where: { id: brandId },
    select: { id: true },
  });
  if (!brand) return { error: "Marque introuvable" };

  const storeId = session.storeIds[0] ?? null;
  const existing = await prisma.deviceModelFamily.findFirst({
    where: {
      brandId,
      name: { equals: trimmed, mode: "insensitive" },
      OR: [
        { isGlobalDefault: true },
        { companyId: session.companyId, storeId },
      ],
    },
  });
  if (existing) return { error: "Cette famille de modèle existe déjà" };

  try {
    const family = await prisma.deviceModelFamily.create({
      data: {
        brandId,
        companyId: session.companyId,
        storeId,
        name: trimmed,
        sortOrder: 50,
        isGlobalDefault: false,
        isActive: true,
      },
    });
    revalidatePath("/dashboard/settings/catalog");
    return { id: family.id };
  } catch {
    return { error: "Erreur lors de la création de la famille" };
  }
}

/**
 * Get full catalog data for the catalog management page.
 * Returns categories with brands and families.
 */
export async function getCatalogPageData(
  categoryKey?: string,
  opts?: { companyId?: string; storeId?: string }
) {
  const categories = await listDeviceCategories();

  // Use first category if no key specified
  const targetKey = categoryKey ?? categories[0]?.key;
  const selectedCategory = categories.find((c) => c.key === targetKey) ?? null;

  let brands: Awaited<ReturnType<typeof listBrandsByCategory>> = [];
  if (selectedCategory) {
    brands = await listBrandsByCategory(selectedCategory.id, opts);
  }

  return { categories, selectedCategory, brands };
}

// ─── Catalog Suggestions ────────────────────────────────────────────────────

export type CatalogSuggestionStatusFilter = "pending" | "approved" | "rejected" | "merged" | "all";

export type CreateCatalogSuggestionInput = {
  categoryId?: string | null;
  categoryKey?: string | null;
  brandId?: string | null;
  brandName?: string | null;
  familyId?: string | null;
  printerType?: string | null;
  seriesName?: string | null;
  modelLine?: string | null;
  generation?: string | null;
  modelName: string;
  processor?: string | null;
  ram?: string | null;
  storage?: string | null;
  gpu?: string | null;
  sku?: string | null;
  notes?: string | null;
  source?: string | null;
};

function cleanNullable(value?: string | null) {
  const trimmed = value?.trim();
  return trimmed ? trimmed : null;
}

async function requireCatalogManager(): Promise<CatalogManagerAuth> {
  const session = await getSession();
  if (!session) return { ok: false, error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { ok: false, error: "Permission insuffisante" };
  }
  return { ok: true, session };
}

export async function createCatalogSuggestion(
  input: CreateCatalogSuggestionInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const modelName = input.modelName.trim().replace(/\s+/g, " ");
  if (!modelName || modelName.length > 180) {
    return { error: "Le nom du modèle est requis (max 180 caractères)" };
  }

  const storeId = session.storeIds[0] ?? null;

  const existingPending = await prisma.deviceCatalogSuggestion.findFirst({
    where: {
      companyId: session.companyId,
      storeId,
      status: "pending",
      modelName: { equals: modelName, mode: "insensitive" },
      ...(input.categoryId ? { categoryId: input.categoryId } : {}),
      ...(input.brandId ? { brandId: input.brandId } : {}),
      ...(input.familyId ? { familyId: input.familyId } : {}),
    },
    select: { id: true },
  });

  if (existingPending) return { id: existingPending.id };

  const suggestion = await prisma.deviceCatalogSuggestion.create({
    data: {
      companyId: session.companyId,
      storeId,
      createdByUserId: session.sub,
      categoryId: cleanNullable(input.categoryId),
      categoryKey: cleanNullable(input.categoryKey),
      brandId: cleanNullable(input.brandId),
      brandName: cleanNullable(input.brandName),
      familyId: cleanNullable(input.familyId),
      printerType: cleanNullable(input.printerType),
      seriesName: cleanNullable(input.seriesName),
      modelLine: cleanNullable(input.modelLine),
      generation: cleanNullable(input.generation),
      modelName,
      processor: cleanNullable(input.processor),
      ram: cleanNullable(input.ram),
      storage: cleanNullable(input.storage),
      gpu: cleanNullable(input.gpu),
      sku: cleanNullable(input.sku),
      notes: cleanNullable(input.notes),
      source: cleanNullable(input.source) ?? "repair_intake",
      status: "pending",
    },
    select: { id: true },
  });

  revalidatePath("/dashboard/settings/catalog");
  revalidatePath("/dashboard/settings/catalog/suggestions");
  return suggestion;
}

export async function listCatalogSuggestions(status: CatalogSuggestionStatusFilter = "pending") {
  const session = await getSession();
  if (!session) return [];

  const suggestions = await prisma.deviceCatalogSuggestion.findMany({
    where: {
      companyId: session.companyId,
      OR: [{ storeId: session.storeIds[0] ?? null }, { storeId: null }],
      ...(status === "all" ? {} : { status }),
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  const categoryIds = Array.from(new Set(suggestions.map((s) => s.categoryId).filter(Boolean))) as string[];
  const brandIds = Array.from(new Set(suggestions.map((s) => s.brandId).filter(Boolean))) as string[];
  const familyIds = Array.from(new Set(suggestions.map((s) => s.familyId).filter(Boolean))) as string[];

  const [categories, brands, families] = await Promise.all([
    categoryIds.length
      ? prisma.deviceCategory.findMany({ where: { id: { in: categoryIds } }, select: { id: true, key: true, nameFr: true, nameEn: true, nameAr: true } })
      : Promise.resolve([]),
    brandIds.length ? prisma.deviceBrand.findMany({ where: { id: { in: brandIds } }, select: { id: true, name: true } }) : Promise.resolve([]),
    familyIds.length ? prisma.deviceModelFamily.findMany({ where: { id: { in: familyIds } }, select: { id: true, name: true } }) : Promise.resolve([]),
  ]);

  const categoryById = new Map(categories.map((category) => [category.id, category]));
  const brandById = new Map(brands.map((brand) => [brand.id, brand]));
  const familyById = new Map(families.map((family) => [family.id, family]));

  return suggestions.map((suggestion) => ({
    ...suggestion,
    category: suggestion.categoryId ? categoryById.get(suggestion.categoryId) ?? null : null,
    brand: suggestion.brandId ? brandById.get(suggestion.brandId) ?? null : null,
    family: suggestion.familyId ? familyById.get(suggestion.familyId) ?? null : null,
  }));
}

export async function approveCatalogSuggestion(id: string): Promise<ActionError | { id: string; familyId: string }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const suggestion = await prisma.deviceCatalogSuggestion.findFirst({
    where: {
      id,
      companyId: session.companyId,
      OR: [{ storeId }, { storeId: null }],
    },
  });
  if (!suggestion) return { error: "Suggestion introuvable" };
  if (suggestion.status !== "pending") return { error: "Cette suggestion est déjà traitée" };

  const modelName = suggestion.modelName.trim().replace(/\s+/g, " ");
  if (!modelName) return { error: "Modèle invalide" };

  try {
    const result = await prisma.$transaction(async (tx) => {
      let categoryId = suggestion.categoryId;
      if (!categoryId && suggestion.categoryKey) {
        const category = await tx.deviceCategory.findUnique({ where: { key: suggestion.categoryKey }, select: { id: true } });
        categoryId = category?.id ?? null;
      }
      if (!categoryId) throw new Error("Catégorie manquante");

      let brandId = suggestion.brandId;
      if (!brandId) {
        const brandName = suggestion.brandName?.trim();
        if (!brandName) throw new Error("Marque manquante");
        const existingBrand = await tx.deviceBrand.findFirst({
          where: {
            categoryId,
            name: { equals: brandName, mode: "insensitive" },
            OR: [{ isGlobalDefault: true }, { companyId: session.companyId, storeId }, { companyId: session.companyId, storeId: null }],
          },
          select: { id: true },
        });
        brandId = existingBrand?.id ?? (await tx.deviceBrand.create({
          data: {
            categoryId,
            companyId: session.companyId,
            storeId,
            name: brandName,
            sortOrder: 50,
            isGlobalDefault: false,
            isActive: true,
          },
          select: { id: true },
        })).id;
      } else {
        const targetBrand = await tx.deviceBrand.findFirst({
          where: {
            id: brandId,
            categoryId,
            OR: [
              { isGlobalDefault: true },
              { companyId: session.companyId, storeId },
              { companyId: session.companyId, storeId: null },
            ],
          },
          select: { id: true },
        });
        if (!targetBrand) throw new Error("Marque introuvable");
      }

      let familyId: string;
      let familyExisted: boolean;

      if (suggestion.familyId) {
        const targetFamily = await tx.deviceModelFamily.findFirst({
          where: {
            id: suggestion.familyId,
            brandId,
            OR: [
              { isGlobalDefault: true },
              { companyId: session.companyId, storeId },
              { companyId: session.companyId, storeId: null },
            ],
          },
          select: { id: true, name: true },
        });
        if (!targetFamily) throw new Error("Famille introuvable");
        familyId = targetFamily.id;
        familyExisted = true;
      } else {
        const familyName = suggestion.seriesName?.trim()
          || suggestion.modelLine?.trim()
          || suggestion.generation?.trim()
          || modelName;

        const existingFamily = await tx.deviceModelFamily.findFirst({
          where: {
            brandId,
            name: { equals: familyName, mode: "insensitive" },
            OR: [{ isGlobalDefault: true }, { companyId: session.companyId, storeId }, { companyId: session.companyId, storeId: null }],
          },
          select: { id: true },
        });

        familyExisted = !!existingFamily;

        familyId = existingFamily?.id ?? (await tx.deviceModelFamily.create({
          data: {
            brandId,
            companyId: session.companyId,
            storeId,
            name: familyName,
            sortOrder: 50,
            isGlobalDefault: false,
            isActive: true,
          },
          select: { id: true },
        })).id;
      }

      const specs: Record<string, string> = {};
      if (suggestion.processor) specs.processor = suggestion.processor.trim();
      if (suggestion.ram) specs.ram = suggestion.ram.trim();
      if (suggestion.storage) specs.storage = suggestion.storage.trim();
      if (suggestion.gpu) specs.gpu = suggestion.gpu.trim();

      const existingModel = await tx.deviceModel.findFirst({
        where: { familyId, name: { equals: modelName, mode: "insensitive" } },
        select: { id: true },
      });

      const existingModelId = existingModel?.id ?? null;

      if (!existingModelId) {
        await tx.deviceModel.create({
          data: {
            familyId,
            name: modelName,
            specs: Object.keys(specs).length > 0 ? specs : undefined,
            sortOrder: 50,
            isActive: true,
          },
        });
      }

      const status = familyExisted
        ? (existingModelId ? "merged" : "approved")
        : "approved";

      await tx.deviceCatalogSuggestion.update({
        where: { id },
        data: {
          status,
          approvedFamilyId: familyId,
          reviewedAt: new Date(),
          reviewedByUserId: session.sub,
        },
      });

      return { id, familyId };
    });

    revalidatePath("/dashboard/settings/catalog");
    revalidatePath("/dashboard/settings/catalog/suggestions");
    return result;
  } catch (error) {
    return { error: error instanceof Error ? error.message : "Erreur lors de l’approbation" };
  }
}

export async function rejectCatalogSuggestion(id: string, reason?: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const suggestion = await prisma.deviceCatalogSuggestion.findFirst({
    where: { id, companyId: session.companyId, OR: [{ storeId }, { storeId: null }] },
    select: { id: true, status: true },
  });
  if (!suggestion) return { error: "Suggestion introuvable" };
  if (suggestion.status !== "pending") return { error: "Cette suggestion est déjà traitée" };

  await prisma.deviceCatalogSuggestion.update({
    where: { id },
    data: {
      status: "rejected",
      rejectionReason: cleanNullable(reason),
      reviewedAt: new Date(),
      reviewedByUserId: session.sub,
    },
  });
  revalidatePath("/dashboard/settings/catalog/suggestions");
  return { success: true };
}

export async function archiveStoreCustomBrand(id: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const brand = await prisma.deviceBrand.findFirst({
    where: { id, companyId: session.companyId, storeId, isGlobalDefault: false },
    select: { id: true },
  });
  if (!brand) return { error: "Seules les marques boutique peuvent être archivées" };

  await prisma.deviceBrand.update({ where: { id }, data: { isActive: false } });
  revalidatePath("/dashboard/settings/catalog");
  return { success: true };
}

export async function archiveStoreCustomFamily(id: string): Promise<ActionError | { success: true }> {
  const auth = await requireCatalogManager();
  if (!auth.ok) return { error: auth.error };
  const { session } = auth;
  const storeId = session.storeIds[0] ?? null;

  const family = await prisma.deviceModelFamily.findFirst({
    where: { id, companyId: session.companyId, storeId, isGlobalDefault: false },
    select: { id: true },
  });
  if (!family) return { error: "Seuls les modèles boutique peuvent être archivés" };

  await prisma.deviceModelFamily.update({ where: { id }, data: { isActive: false } });
  revalidatePath("/dashboard/settings/catalog");
  return { success: true };
}
