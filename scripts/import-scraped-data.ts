/**
 * Import device catalog JSON from ChatGPT.
 *
 * Usage: npx tsx scripts/import-scraped-data.ts --file=path/to/file.json
 *
 * Supports two JSON formats:
 *   Format 1: { "category": "phone", "brands": [...] }
 *   Format 2: { "categories": [{ "key": "phone", "brands": [...] }] }
 */

import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as fs from "fs";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

// ─── Types ───────────────────────────────────────────────────────────────────

interface Specs {
  display?: string;
  processor?: string;
  ram?: string;
  storage?: string[];
  battery?: string;
  os?: string;
  weight?: string;
  dimensions?: string;
  [key: string]: unknown;
}

interface Variant {
  name: string;
  processor?: string;
  ram?: string;
  storage?: string;
  color?: string;
  [key: string]: unknown;
}

interface Model {
  name: string;
  release_year?: number;
  image_url?: string;
  specs?: Specs;
  variants?: Variant[];
}

interface Family {
  name: string;
  models?: Model[];
}

interface Brand {
  name: string;
  logo_url?: string;
  families: Family[];
}

interface CategoryEntry {
  key: string;
  brands: Brand[];
}

interface CatalogFile {
  category?: string;
  brands?: Brand[];
  categories?: CategoryEntry[];
}

// ─── Import Logic ────────────────────────────────────────────────────────────

async function getCategoryId(key: string): Promise<string | null> {
  const cat = await prisma.deviceCategory.findFirst({ where: { key } });
  return cat?.id ?? null;
}

async function ensureBrand(categoryId: string, brandDef: Brand) {
  let brand = await prisma.deviceBrand.findFirst({
    where: { categoryId, companyId: null, storeId: null, name: brandDef.name },
  });

  if (!brand) {
    brand = await prisma.deviceBrand.create({
      data: {
        categoryId,
        companyId: null,
        storeId: null,
        name: brandDef.name,
        logoUrl: brandDef.logo_url || null,
        sortOrder: 99,
        isGlobalDefault: true,
        isActive: true,
      },
    });
    return { brand, created: true };
  }

  // Update logo if new one provided
  if (brandDef.logo_url && brand.logoUrl !== brandDef.logo_url) {
    await prisma.deviceBrand.update({ where: { id: brand.id }, data: { logoUrl: brandDef.logo_url } });
  }

  return { brand, created: false };
}

async function ensureFamily(brandId: string, familyDef: Family) {
  let family = await prisma.deviceModelFamily.findFirst({
    where: { brandId, companyId: null, storeId: null, name: familyDef.name },
  });

  if (!family) {
    family = await prisma.deviceModelFamily.create({
      data: {
        brandId,
        companyId: null,
        storeId: null,
        name: familyDef.name,
        sortOrder: 1,
        isGlobalDefault: true,
        isActive: true,
      },
    });
    return { family, created: true };
  }

  return { family, created: false };
}

async function ensureModel(familyId: string, modelDef: Model) {
  const existing = await prisma.deviceModel.findFirst({
    where: { familyId, name: modelDef.name },
  });

  if (existing) return { model: existing, created: false };

  const model = await prisma.deviceModel.create({
    data: {
      familyId,
      name: modelDef.name,
      releaseYear: modelDef.release_year ?? null,
      imageUrl: modelDef.image_url ?? null,
      specs: (modelDef.specs ?? {}) as object,
      variants: (modelDef.variants ?? []) as object[],
      sortOrder: 1,
      isActive: true,
    },
  });

  return { model, created: true };
}

// ─── Main ────────────────────────────────────────────────────────────────────

async function importFile(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data: CatalogFile = JSON.parse(raw);

  // Normalize: extract brands array from either format
  let entries: { categoryKey: string; brands: Brand[] }[] = [];

  if (data.categories) {
    // Format 2: { "categories": [{ "key": "phone", "brands": [...] }] }
    entries = data.categories.map((c) => ({ categoryKey: c.key, brands: c.brands }));
  } else if (data.category && data.brands) {
    // Format 1: { "category": "phone", "brands": [...] }
    entries = [{ categoryKey: data.category, brands: data.brands }];
  } else {
    console.error("Unknown JSON format. Expected { category, brands } or { categories }");
    process.exit(1);
  }

  let stats = { brands: 0, families: 0, models: 0, variants: 0 };

  for (const entry of entries) {
    const categoryId = await getCategoryId(entry.categoryKey);
    if (!categoryId) {
      console.warn(`Skip unknown category: ${entry.categoryKey}`);
      continue;
    }

    console.log(`\nProcessing: ${entry.categoryKey}`);

    for (const brandDef of entry.brands) {
      const { brand, created: newBrand } = await ensureBrand(categoryId, brandDef);
      if (newBrand) stats.brands++;

      for (const familyDef of brandDef.families) {
        const { family, created: newFamily } = await ensureFamily(brand.id, familyDef);
        if (newFamily) stats.families++;

        const models = familyDef.models ?? [];
        for (const modelDef of models) {
          const { model, created: newModel } = await ensureModel(family.id, modelDef);
          if (newModel) stats.models++;

          const variants = modelDef.variants ?? [];
          stats.variants += variants.length;
        }
      }
    }

    console.log(`  Brands: ${entry.brands.length}, Families: ${entry.brands.reduce((s, b) => s + b.families.length, 0)}, Models: ~${entry.brands.reduce((s, b) => s + (b.families.reduce((s2, f) => s2 + (f.models?.length ?? 0), 0)), 0)}`);
  }

  console.log(`\nImport complete.`);

  await prisma.$disconnect();
  await pool.end();
}

// ─── CLI ─────────────────────────────────────────────────────────────────────

const filePath = process.argv.find((a) => a.startsWith("--file="))?.split("=")[1] ?? process.argv[2];
if (!filePath) {
  console.error("Usage: npx tsx scripts/import-scraped-data.ts --file=path/to/file.json");
  process.exit(1);
}

console.log(`Importing: ${filePath}`);
importFile(filePath).catch((e) => {
  console.error("Import failed:", e);
  process.exit(1);
});
