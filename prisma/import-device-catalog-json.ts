import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import fs from "fs";
import path from "path";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

type CatalogImportFile = {
  categories: Array<{
    key: string;
    nameFr?: string;
    nameEn?: string;
    nameAr?: string;
    brands: Array<{
      name: string;
      models: string[];
    }>;
  }>;
};

async function main() {
  const fileArg = process.argv[2];
  if (!fileArg) {
    throw new Error("Usage: npx tsx prisma/import-device-catalog-json.ts ./catalog.json");
  }

  const filePath = path.resolve(process.cwd(), fileArg);
  const payload = JSON.parse(fs.readFileSync(filePath, "utf8")) as CatalogImportFile;

  for (const [categoryIndex, categoryInput] of payload.categories.entries()) {
    const category = await prisma.deviceCategory.upsert({
      where: { key: categoryInput.key },
      update: {
        nameFr: categoryInput.nameFr ?? categoryInput.key,
        nameEn: categoryInput.nameEn ?? categoryInput.nameFr ?? categoryInput.key,
        nameAr: categoryInput.nameAr ?? categoryInput.nameFr ?? categoryInput.key,
        isActive: true,
      },
      create: {
        key: categoryInput.key,
        nameFr: categoryInput.nameFr ?? categoryInput.key,
        nameEn: categoryInput.nameEn ?? categoryInput.nameFr ?? categoryInput.key,
        nameAr: categoryInput.nameAr ?? categoryInput.nameFr ?? categoryInput.key,
        sortOrder: categoryIndex + 1,
        isActive: true,
      },
    });

    for (const [brandIndex, brandInput] of categoryInput.brands.entries()) {
      const existingBrand = await prisma.deviceBrand.findFirst({
        where: {
          categoryId: category.id,
          companyId: null,
          storeId: null,
          name: brandInput.name,
        },
      });

      const brand = existingBrand
        ? await prisma.deviceBrand.update({
            where: { id: existingBrand.id },
            data: {
              isActive: true,
              sortOrder: brandIndex + 1,
              isGlobalDefault: true,
            },
          })
        : await prisma.deviceBrand.create({
            data: {
              categoryId: category.id,
              companyId: null,
              storeId: null,
              name: brandInput.name,
              sortOrder: brandIndex + 1,
              isGlobalDefault: true,
              isActive: true,
            },
          });

      for (const [modelIndex, modelName] of brandInput.models.entries()) {
        const existingFamily = await prisma.deviceModelFamily.findFirst({
          where: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: modelName,
          },
        });

        if (existingFamily) {
          await prisma.deviceModelFamily.update({
            where: { id: existingFamily.id },
            data: {
              isActive: true,
              sortOrder: modelIndex + 1,
              isGlobalDefault: true,
            },
          });
          continue;
        }

        await prisma.deviceModelFamily.create({
          data: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: modelName,
            sortOrder: modelIndex + 1,
            isGlobalDefault: true,
            isActive: true,
          },
        });
      }
    }
  }

  console.log("Catalog import completed.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
