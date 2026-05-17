import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import * as fs from "fs";
dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  const broken = JSON.parse(fs.readFileSync("/tmp/broken_samsung_images.json", "utf-8"));
  const ids: string[] = broken.map((b: any) => b.id as string);

  console.log("Setting imageUrl to null for " + ids.length + " broken Samsung models...");

  const result = await prisma.deviceModel.updateMany({
    where: { id: { in: ids } },
    data: { imageUrl: null },
  });

  console.log("  Updated " + result.count + " models");

  const samsungBrand = await prisma.deviceBrand.findFirst({ where: { name: "Samsung" } });
  if (!samsungBrand) { process.exit(1); }
  
  const withImg = await prisma.deviceModel.count({
    where: { family: { brandId: samsungBrand.id }, imageUrl: { not: null } },
  });
  const noImg = await prisma.deviceModel.count({
    where: { family: { brandId: samsungBrand.id }, imageUrl: null },
  });
  console.log("  Samsung models with valid images: " + withImg);
  console.log("  Samsung models without images: " + noImg);

  await prisma.$disconnect();
  await pool.end();
}

main();
