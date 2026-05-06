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
  { name: "Cartouches / toners",    sortOrder: 10 },
  { name: "Têtes imprimante",       sortOrder: 11 },
  { name: "Fuser / four imprimante", sortOrder: 12 },
  { name: "Masters / encre duplicateur", sortOrder: 13 },
  { name: "Contrôleurs / Ports console", sortOrder: 14 },
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

  // 4. Seed practical demo parts with device compatibility for the repair intake wizard
  const partCategories = await prisma.inventoryCategory.findMany({
    where: { storeId, itemType: "part" },
    select: { id: true, name: true },
  });
  const partCategoryId = (name: string) => partCategories.find((cat) => cat.name === name)?.id;

  async function getDeviceRefs(categoryKey: string, brandName: string, familyName?: string) {
    const category = await prisma.deviceCategory.findUnique({
      where: { key: categoryKey },
      select: { id: true },
    });
    if (!category) return null;

    const brand = await prisma.deviceBrand.findFirst({
      where: { categoryId: category.id, name: brandName, isActive: true },
      select: { id: true },
    });
    if (!brand) return { categoryId: category.id, brandId: null, familyId: null };

    const family = familyName
      ? await prisma.deviceModelFamily.findFirst({
          where: {
            brandId: brand.id,
            isActive: true,
            OR: [{ name: familyName }, { name: { contains: familyName } }],
          },
          select: { id: true },
        })
      : null;

    return { categoryId: category.id, brandId: brand.id, familyId: family?.id ?? null };
  }

  const sampleParts = [
    {
      sku: "PRT-DEMO-IP14PM-OLED",
      name: "iPhone 14 Pro Max OLED Screen",
      categoryName: "Écrans téléphone",
      price: 28500,
      stock: 5,
      refs: await getDeviceRefs("phone", "Apple", "iPhone 14 Pro Max"),
    },
    {
      sku: "PRT-DEMO-IP14PM-BATT",
      name: "iPhone 14 Pro Max Battery",
      categoryName: "Batteries téléphone",
      price: 8500,
      stock: 8,
      refs: await getDeviceRefs("phone", "Apple", "iPhone 14 Pro Max"),
    },
    {
      sku: "PRT-DEMO-IP14-PORT",
      name: "iPhone 14 Series Charging Port",
      categoryName: "Ports de charge",
      price: 6500,
      stock: 4,
      refs: await getDeviceRefs("phone", "Apple", "iPhone 14"),
    },
    {
      sku: "PRT-DEMO-IP15PLUS-BATT",
      name: "iPhone 15 Plus Battery",
      categoryName: "Batteries téléphone",
      price: 9500,
      stock: 6,
      refs: await getDeviceRefs("phone", "Apple", "iPhone 15 Plus"),
    },
    {
      sku: "PRT-DEMO-SAM-A15-SCREEN",
      name: "Samsung Galaxy A15 Screen",
      categoryName: "Écrans téléphone",
      price: 12000,
      stock: 7,
      refs: await getDeviceRefs("phone", "Samsung", "Galaxy A15"),
    },
    {
      sku: "PRT-DEMO-HP-M404-ROLLER",
      name: "HP LaserJet Pro M404 Pickup Roller",
      categoryName: "Rouleaux imprimante",
      price: 4200,
      stock: 10,
      refs: await getDeviceRefs("printer", "HP", "LaserJet Pro M404"),
    },
    {
      sku: "PRT-DEMO-HP-M404-FUSER",
      name: "HP LaserJet Pro M404 Fuser Unit",
      categoryName: "Fuser / four imprimante",
      price: 18500,
      stock: 2,
      refs: await getDeviceRefs("printer", "HP", "LaserJet Pro M404"),
    },
    {
      sku: "PRT-DEMO-EP-L3250-PAD",
      name: "Epson EcoTank L3250 Maintenance Pad",
      categoryName: "Rouleaux imprimante",
      price: 3500,
      stock: 6,
      refs: await getDeviceRefs("printer", "Epson", "EcoTank L3250"),
    },
    {
      sku: "PRT-DEMO-EP-L3250-HEAD",
      name: "Epson EcoTank L3250 Printhead",
      categoryName: "Têtes imprimante",
      price: 16500,
      stock: 3,
      refs: await getDeviceRefs("printer", "Epson", "EcoTank L3250"),
    },
    {
      sku: "PRT-DEMO-CAN-G3420-HEAD",
      name: "Canon PIXMA G3420 Printhead",
      categoryName: "Têtes imprimante",
      price: 14800,
      stock: 3,
      refs: await getDeviceRefs("printer", "Canon", "PIXMA G3420"),
    },
    {
      sku: "PRT-DEMO-HP-M404-TONER",
      name: "HP LaserJet Pro M404 Toner Cartridge",
      categoryName: "Cartouches / toners",
      price: 9500,
      stock: 8,
      refs: await getDeviceRefs("printer", "HP", "LaserJet Pro M404"),
    },
    {
      sku: "PRT-DEMO-RISO-SF5330-MASTER",
      name: "RISO SF 5330 Master Roll",
      categoryName: "Masters / encre duplicateur",
      price: 22000,
      stock: 2,
      refs: await getDeviceRefs("printer", "RISO", "SF 5330"),
    },
    {
      sku: "PRT-DEMO-RISO-SF5330-INK",
      name: "RISO SF 5330 Black Ink",
      categoryName: "Masters / encre duplicateur",
      price: 12500,
      stock: 4,
      refs: await getDeviceRefs("printer", "RISO", "SF 5330"),
    },
  ];

  let partCount = 0;
  for (const part of sampleParts) {
    const existing = await prisma.part.findFirst({ where: { storeId, sku: part.sku } });
    if (existing || !part.refs) continue;

    await prisma.part.create({
      data: {
        storeId,
        categoryId: partCategoryId(part.categoryName) ?? null,
        compatibleCategoryId: part.refs.categoryId,
        compatibleBrandId: part.refs.brandId,
        compatibleFamilyId: part.refs.familyId,
        name: part.name,
        sku: part.sku,
        brand: part.name.split(" ")[0],
        modelReference: part.name,
        sellingPrice: part.price,
        stockQty: part.stock,
        lowStockThreshold: 2,
        notes: "Pièce de démonstration compatible avec le nouveau workflow de réparation.",
      },
    });
    partCount++;
  }
  console.log(`    ✓ ${partCount} sample compatible parts`);

  console.log("  Inventory catalog seeded.");
}
