/**
 * One-time script to fix existing catalog data.
 *
 * When suggestions were approved before the fix, only a DeviceModelFamily was
 * created (no DeviceModel). This script backfills the missing DeviceModel
 * entries so that models appear in the "الموديلات" (Models) section instead of
 * the "العائلات" (Families) section.
 *
 * Run with: npx tsx scripts/backfill-missing-models.ts
 */

import { prisma } from "../src/lib/db";

async function main() {
  const suggestions = await prisma.deviceCatalogSuggestion.findMany({
    where: {
      status: { in: ["approved", "merged"] },
      approvedFamilyId: { not: null },
    },
    select: {
      id: true,
      modelName: true,
      approvedFamilyId: true,
      processor: true,
      ram: true,
      storage: true,
      gpu: true,
    },
  });

  console.log(`Found ${suggestions.length} approved/merged suggestions`);

  let created = 0;
  let skipped = 0;

  for (const s of suggestions) {
    if (!s.approvedFamilyId) continue;

    const modelName = s.modelName.trim().replace(/\s+/g, " ");
    if (!modelName) continue;

    const existing = await prisma.deviceModel.findFirst({
      where: {
        familyId: s.approvedFamilyId,
        name: { equals: modelName, mode: "insensitive" },
      },
      select: { id: true },
    });

    if (existing) {
      skipped++;
      continue;
    }

    const specs: Record<string, string> = {};
    if (s.processor) specs.processor = s.processor.trim();
    if (s.ram) specs.ram = s.ram.trim();
    if (s.storage) specs.storage = s.storage.trim();
    if (s.gpu) specs.gpu = s.gpu.trim();

    await prisma.deviceModel.create({
      data: {
        familyId: s.approvedFamilyId,
        name: modelName,
        specs: Object.keys(specs).length > 0 ? specs : undefined,
        sortOrder: 50,
        isActive: true,
      },
    });

    created++;
    console.log(`  Created model "${modelName}" (suggestion ${s.id})`);
  }

  console.log(`\nDone: ${created} models created, ${skipped} already existed.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
