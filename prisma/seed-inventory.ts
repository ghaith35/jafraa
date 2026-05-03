/**
 * Inventory seed data — Block 7
 *
 * Seeds:
 * - InventoryCategory rows (product categories + part categories) for the demo store
 * - Sample starter services (labor items only — no stock quantities)
 *
 * Store-scoped. Idempotent. Uses findFirst + create pattern.
 *
 * NOTE: No stock quantities are seeded. Products and parts are seeded as empty
 * categories only. Sample services are added as obviously demo items.
 */

import type { PrismaClient } from "@prisma/client";

// ─── Category definitions ─────────────────────────────────────────────────────

const PRODUCT_CATEGORIES = [
  { name: "Chargeurs téléphone",    sortOrder: 1 },
  { name: "Câbles téléphone",       sortOrder: 2 },
  { name: "Coques / Housses",       sortOrder: 3 },
  { name: "Protections écran",      sortOrder: 4 },
  { name: "Écouteurs / Casques",    sortOrder: 5 },
  { name: "Batteries externes",     sortOrder: 6 },
  { name: "Chargeurs ordinateur",   sortOrder: 7 },
  { name: "Stockage / USB",         sortOrder: 8 },
  { name: "Consommables imprimante", sortOrder: 9 },
  { name: "Outils / Consommables",  sortOrder: 10 },
];

const PART_CATEGORIES = [
  { name: "Écrans téléphone",      sortOrder: 1 },
  { name: "Batteries téléphone",   sortOrder: 2 },
  { name: "Ports de charge",       sortOrder: 3 },
  { name: "Caméras",               sortOrder: 4 },
  { name: "Haut-parleurs / Micros", sortOrder: 5 },
  { name: "Batteries ordinateur",  sortOrder: 6 },
  { name: "Chargeurs ordinateur",  sortOrder: 7 },
  { name: "Claviers ordinateur",   sortOrder: 8 },
  { name: "Rouleaux imprimante",   sortOrder: 9 },
  { name: "Contrôleurs / Ports console", sortOrder: 10 },
];

// ─── Sample services ──────────────────────────────────────────────────────────

interface ServiceDef {
  name: string;
  category: string;
  skuSuffix: string;
  sellingPrice: number;
  estimatedDurationMinutes: number;
}

const SAMPLE_SERVICES: ServiceDef[] = [
  { name: "Diagnostic",                     category: "Diagnostic",    skuSuffix: "DIAG",  sellingPrice: 500,   estimatedDurationMinutes: 30 },
  { name: "Remplacement écran (main-d'œuvre)", category: "Réparation", skuSuffix: "ECRAN", sellingPrice: 1500,  estimatedDurationMinutes: 45 },
  { name: "Remplacement batterie (main-d'œuvre)", category: "Réparation", skuSuffix: "BATT", sellingPrice: 800,  estimatedDurationMinutes: 30 },
  { name: "Réparation port de charge",       category: "Réparation",   skuSuffix: "PORT",  sellingPrice: 1200,  estimatedDurationMinutes: 60 },
  { name: "Installation logiciel",           category: "Logiciel",     skuSuffix: "SOFT",  sellingPrice: 600,   estimatedDurationMinutes: 30 },
  { name: "Nettoyage / dépoussiérage",       category: "Entretien",    skuSuffix: "NETT",  sellingPrice: 400,   estimatedDurationMinutes: 20 },
  { name: "Sauvegarde données",              category: "Logiciel",     skuSuffix: "SAVE",  sellingPrice: 700,   estimatedDurationMinutes: 45 },
  { name: "Maintenance imprimante",          category: "Entretien",    skuSuffix: "PRINT", sellingPrice: 1000,  estimatedDurationMinutes: 60 },
];

// ─── Seed function ────────────────────────────────────────────────────────────

export async function seedInventory(prisma: PrismaClient) {
  console.log("\n  Seeding inventory catalog...");

  // Find the demo store (seeded in main seed)
  const demoStore = await prisma.store.findFirst({
    where: { company: { name: "Demo Réparation" } },
    select: { id: true },
  });

  if (!demoStore) {
    console.warn("  ⚠ Demo store not found — skipping inventory seed");
    return;
  }

  const storeId = demoStore.id;

  // 1. Seed product categories
  for (const cat of PRODUCT_CATEGORIES) {
    const existing = await prisma.inventoryCategory.findFirst({
      where: { storeId, itemType: "product", name: cat.name },
    });
    if (!existing) {
      await prisma.inventoryCategory.create({
        data: { storeId, itemType: "product", name: cat.name, sortOrder: cat.sortOrder },
      });
    }
  }
  console.log(`    ✓ ${PRODUCT_CATEGORIES.length} product categories`);

  // 2. Seed part categories
  for (const cat of PART_CATEGORIES) {
    const existing = await prisma.inventoryCategory.findFirst({
      where: { storeId, itemType: "part", name: cat.name },
    });
    if (!existing) {
      await prisma.inventoryCategory.create({
        data: { storeId, itemType: "part", name: cat.name, sortOrder: cat.sortOrder },
      });
    }
  }
  console.log(`    ✓ ${PART_CATEGORIES.length} part categories`);

  // 3. Seed sample services
  let serviceCount = 0;
  for (const svc of SAMPLE_SERVICES) {
    const sku = `SRV-DEMO-${svc.skuSuffix}`;
    const existing = await prisma.service.findFirst({
      where: { storeId, sku },
    });
    if (!existing) {
      await prisma.service.create({
        data: {
          storeId,
          name: svc.name,
          sku,
          category: svc.category,
          sellingPrice: svc.sellingPrice,
          estimatedDurationMinutes: svc.estimatedDurationMinutes,
          notes: "Exemple de service — à adapter selon vos tarifs.",
        },
      });
      serviceCount++;
    }
  }
  console.log(`    ✓ ${serviceCount} sample services`);
  console.log("  Inventory catalog seeded.");
}
