import type { PrismaClient } from "@prisma/client";
import {
  BASE_SERVICE_TYPE_KEYS,
  BASE_SERVICE_TYPE_DEFAULTS,
} from "../src/features/services/config/service-types";

export async function seedServiceTypes(prisma: PrismaClient) {
  console.log("\n  Seeding service types...");

  const companies = await prisma.company.findMany({ select: { id: true, name: true } });

  for (const company of companies) {
    for (const key of BASE_SERVICE_TYPE_KEYS) {
      const defaults = BASE_SERVICE_TYPE_DEFAULTS[key];
      const existing = await prisma.serviceType.findFirst({
        where: { companyId: company.id, baseKey: key },
      });
      if (!existing) {
        await prisma.serviceType.create({
          data: {
            companyId: company.id,
            baseKey: key,
            isBase: true,
            nameFr: defaults.nameFr,
            nameEn: defaults.nameEn,
            nameAr: defaults.nameAr,
            sortOrder: defaults.sortOrder,
            isActive: true,
          },
        });
      }
    }
    console.log(`    ✓ Service types for: ${company.name}`);
  }

  // Link existing demo services to their service type by matching the old `category` text
  // (category column was dropped; we use name-based heuristics on existing services)
  const demoStore = await prisma.store.findFirst({
    where: { company: { name: "Demo Réparation" } },
    select: { id: true, companyId: true },
  });

  if (demoStore) {
    const serviceTypes = await prisma.serviceType.findMany({
      where: { companyId: demoStore.companyId },
      select: { id: true, baseKey: true },
    });
    const typeByKey = Object.fromEntries(serviceTypes.map((st) => [st.baseKey, st.id]));

    // Map demo service SKUs to their base type key
    const skuTypeMap: Record<string, string> = {
      "SRV-DEMO-DIAG":  "diagnostic",
      "SRV-DEMO-ECRAN": "repair",
      "SRV-DEMO-BATT":  "repair",
      "SRV-DEMO-PORT":  "repair",
      "SRV-DEMO-SOFT":  "software",
      "SRV-DEMO-NETT":  "cleaning",
      "SRV-DEMO-SAVE":  "software",
      "SRV-DEMO-PRINT": "maintenance",
    };

    for (const [sku, key] of Object.entries(skuTypeMap)) {
      const typeId = typeByKey[key];
      if (!typeId) continue;
      await prisma.service.updateMany({
        where: { storeId: demoStore.id, sku },
        data: { serviceTypeId: typeId },
      });
    }
    console.log("    ✓ Linked demo services to service types");
  }

  console.log("  Service types seeded.");
}
