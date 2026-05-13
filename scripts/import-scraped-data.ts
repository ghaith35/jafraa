/**
 * Import scraped device catalog data.
 *
 * Run AFTER scraping:
 *   1. python scripts/scrape-device-catalog.py --all
 *   2. npx tsx scripts/import-scraped-data.ts --file scripts/scraped_data/phones.json
 *   3. npx tsx scripts/import-scraped-data.ts --file scripts/scraped_data/laptops.json
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

interface ScrapedBrand {
  name: string;
  families: ScrapedFamily[];
}

interface ScrapedFamily {
  name: string;
  models?: string[];
}

interface ScrapedData {
  category: string;
  brands: ScrapedBrand[];
}

async function getCategoryId(key: string): Promise<string | null> {
  const cat = await prisma.deviceCategory.findFirst({ where: { key } });
  return cat?.id ?? null;
}

async function importScrapedData(filePath: string) {
  const raw = fs.readFileSync(filePath, "utf-8");
  const data: ScrapedData = JSON.parse(raw);
  const categoryKey = data.category;

  const categoryId = await getCategoryId(categoryKey);
  if (!categoryId) {
    console.error(`Category "${categoryKey}" not found in DB`);
    process.exit(1);
  }

  console.log(`\nImporting ${data.brands.length} brands for "${categoryKey}"...`);

  let brandCount = 0;
  let familyCount = 0;

  for (const brandDef of data.brands) {
    if (!brandDef.name) continue;

    // Find existing or create
    let brand = await prisma.deviceBrand.findFirst({
      where: {
        categoryId,
        companyId: null,
        storeId: null,
        name: brandDef.name,
      },
    });

    if (!brand) {
      brand = await prisma.deviceBrand.create({
        data: {
          categoryId,
          companyId: null,
          storeId: null,
          name: brandDef.name,
          sortOrder: 99,
          isGlobalDefault: true,
          isActive: true,
        },
      });
      brandCount++;
    }

    // Create model families (skip if already exists)
    for (const familyDef of brandDef.families) {
      if (!familyDef.name) continue;

      const existing = await prisma.deviceModelFamily.findFirst({
        where: {
          brandId: brand.id,
          companyId: null,
          storeId: null,
          name: familyDef.name,
        },
      });

      if (!existing) {
        await prisma.deviceModelFamily.create({
          data: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: familyDef.name,
            sortOrder: 1,
            isGlobalDefault: true,
            isActive: true,
          },
        });
        familyCount++;
      }
    }
  }

  console.log(`  +${brandCount} new brands, +${familyCount} new families`);
  await prisma.$disconnect();
  await pool.end();
}

const filePath = process.argv.find((a) => a.startsWith("--file="))?.split("=")[1]
  ?? process.argv[2];

if (!filePath) {
  console.error("Usage: npx tsx scripts/import-scraped-data.ts --file=scripts/scraped_data/phones.json");
  process.exit(1);
}

importScrapedData(filePath).catch((e) => {
  console.error(e);
  process.exit(1);
});
