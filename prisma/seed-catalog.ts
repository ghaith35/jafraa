/**
 * Catalog seed data — Block 6
 *
 * Seeds DeviceCategory, DeviceBrand, and DeviceModelFamily tables
 * with practical starter data for Algerian repair shops.
 *
 * All entries are global defaults (companyId/storeId = null, isGlobalDefault = true).
 * Idempotent — safe to re-run (uses findFirst + create pattern for nullable unique fields).
 */

import type { PrismaClient } from "@prisma/client";

// ─── Types ───────────────────────────────────────────────────────────────────

interface CategoryDef {
  key: string;
  nameFr: string;
  nameAr: string;
  nameEn: string;
  sortOrder: number;
}

interface BrandDef {
  name: string;
  sortOrder: number;
  families: string[];
}

interface CategoryWithBrands {
  categoryKey: string;
  brands: BrandDef[];
}

// ─── Categories ──────────────────────────────────────────────────────────────

const CATEGORIES: CategoryDef[] = [
  { key: "phone",   nameFr: "Téléphone",           nameAr: "هاتف",         nameEn: "Phone",            sortOrder: 1 },
  { key: "tablet",  nameFr: "Tablette / iPad",     nameAr: "لوح / آيباد",  nameEn: "Tablet / iPad",    sortOrder: 2 },
  { key: "laptop",  nameFr: "Ordinateur portable",  nameAr: "حاسوب محمول",  nameEn: "Laptop",           sortOrder: 3 },
  { key: "desktop", nameFr: "Ordinateur fixe",      nameAr: "حاسوب مكتبي",  nameEn: "Desktop Computer", sortOrder: 4 },
  { key: "printer", nameFr: "Imprimante",           nameAr: "طابعة",        nameEn: "Printer",          sortOrder: 5 },
  { key: "console", nameFr: "Console de jeux",      nameAr: "جهاز ألعاب",   nameEn: "Game Console",     sortOrder: 6 },
  { key: "other",   nameFr: "Autre",                nameAr: "أخرى",         nameEn: "Other",            sortOrder: 99 },
];

// ─── Brands & Families per Category ──────────────────────────────────────────

const CATALOG: CategoryWithBrands[] = [
  {
    categoryKey: "phone",
    brands: [
      { name: "Samsung",  sortOrder: 1,  families: ["Galaxy A", "Galaxy S", "Galaxy Note", "Galaxy M", "Galaxy Z"] },
      { name: "Apple",    sortOrder: 2,  families: ["iPhone 6/7/8", "iPhone X/XR/XS", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16", "iPhone SE"] },
      { name: "Xiaomi",   sortOrder: 3,  families: ["Xiaomi Number Series", "Xiaomi T Series", "Xiaomi Mix"] },
      { name: "Redmi",    sortOrder: 4,  families: ["Redmi Number Series", "Redmi Note Series"] },
      { name: "Poco",     sortOrder: 5,  families: ["Poco C", "Poco M", "Poco X", "Poco F"] },
      { name: "Oppo",     sortOrder: 6,  families: ["A Series", "Reno Series", "Find Series"] },
      { name: "Realme",   sortOrder: 7,  families: ["C Series", "Number Series", "Narzo", "GT"] },
      { name: "Infinix",  sortOrder: 8,  families: ["Smart", "Hot", "Note", "Zero"] },
      { name: "Tecno",    sortOrder: 9,  families: ["Spark", "Camon", "Pop", "Phantom"] },
      { name: "Itel",     sortOrder: 10, families: ["A Series", "P Series", "S Series"] },
      { name: "Huawei",   sortOrder: 11, families: ["P Series", "Mate Series", "Nova", "Y Series"] },
      { name: "Honor",    sortOrder: 12, families: ["X Series", "Magic", "Number Series"] },
      { name: "Vivo",     sortOrder: 13, families: ["Y Series", "V Series", "X Series"] },
      { name: "Condor",   sortOrder: 14, families: ["Allure", "Griffe", "Plume"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "tablet",
    brands: [
      { name: "Apple iPad",         sortOrder: 1, families: ["iPad", "iPad mini", "iPad Air", "iPad Pro"] },
      { name: "Samsung Galaxy Tab", sortOrder: 2, families: ["Tab A", "Tab S", "Tab Active"] },
      { name: "Lenovo Tab",         sortOrder: 3, families: ["Tab M", "Tab P", "Yoga Tab"] },
      { name: "Huawei MatePad",     sortOrder: 4, families: ["MatePad", "MediaPad"] },
      { name: "Xiaomi Pad",         sortOrder: 5, families: ["Xiaomi Pad", "Redmi Pad"] },
      { name: "Honor Pad",          sortOrder: 6, families: [] },
      { name: "Oppo Pad",           sortOrder: 7, families: [] },
      { name: "Realme Pad",         sortOrder: 8, families: [] },
      { name: "Condor",             sortOrder: 9, families: [] },
      { name: "Autre",              sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "laptop",
    brands: [
      { name: "HP",                   sortOrder: 1,  families: ["Pavilion", "ProBook", "EliteBook", "Envy", "Omen", "Victus"] },
      { name: "Dell",                 sortOrder: 2,  families: ["Inspiron", "Vostro", "Latitude", "XPS", "Precision"] },
      { name: "Lenovo",               sortOrder: 3,  families: ["IdeaPad", "ThinkPad", "ThinkBook", "Yoga", "Legion", "LOQ"] },
      { name: "Acer",                 sortOrder: 4,  families: ["Aspire", "Swift", "Spin", "TravelMate", "Nitro", "Predator"] },
      { name: "Asus",                 sortOrder: 5,  families: ["VivoBook", "ZenBook", "TUF Gaming", "ROG", "ExpertBook"] },
      { name: "Apple",                sortOrder: 6,  families: ["MacBook Air", "MacBook Pro"] },
      { name: "MSI",                  sortOrder: 7,  families: ["Modern", "Prestige", "Katana", "GF Series", "GE Raider"] },
      { name: "Toshiba / Dynabook",   sortOrder: 8,  families: [] },
      { name: "Samsung",              sortOrder: 9,  families: [] },
      { name: "Huawei",               sortOrder: 10, families: [] },
      { name: "Microsoft Surface",    sortOrder: 11, families: [] },
      { name: "Condor",               sortOrder: 12, families: ["CloudBook", "Terra", "Neo"] },
      { name: "Thomson",              sortOrder: 13, families: ["Neo", "Hero", "Prestige"] },
      { name: "Autre",                sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "desktop",
    brands: [
      { name: "PC assemblé (Custom)", sortOrder: 1,  families: ["Gaming build", "Office build", "Workstation build"] },
      { name: "HP",                    sortOrder: 2,  families: ["Pavilion Desktop", "ProDesk", "EliteDesk", "All-in-One", "Omen", "Z Workstation"] },
      { name: "Dell",                  sortOrder: 3,  families: ["OptiPlex", "Inspiron Desktop", "Vostro Desktop", "XPS Desktop", "Precision", "Alienware"] },
      { name: "Lenovo",                sortOrder: 4,  families: ["ThinkCentre", "IdeaCentre", "Legion Tower", "ThinkStation"] },
      { name: "Acer",                  sortOrder: 5,  families: [] },
      { name: "Asus",                  sortOrder: 6,  families: [] },
      { name: "Apple",                 sortOrder: 7,  families: ["iMac", "Mac mini", "Mac Studio", "Mac Pro"] },
      { name: "MSI",                   sortOrder: 8,  families: [] },
      { name: "Condor",                sortOrder: 9,  families: [] },
      { name: "Autre",                 sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "printer",
    brands: [
      { name: "Epson",    sortOrder: 1,  families: ["EcoTank", "L Series", "WorkForce"] },
      { name: "Canon",    sortOrder: 2,  families: ["PIXMA G", "PIXMA", "i-SENSYS"] },
      { name: "HP",       sortOrder: 3,  families: ["LaserJet", "DeskJet", "OfficeJet", "Smart Tank"] },
      { name: "Brother",  sortOrder: 4,  families: ["DCP", "MFC", "HL", "InkBenefit"] },
      { name: "Samsung",  sortOrder: 5,  families: ["Xpress", "ML", "CLX"] },
      { name: "Xerox",    sortOrder: 6,  families: ["Phaser", "WorkCentre"] },
      { name: "Ricoh",    sortOrder: 7,  families: ["Aficio", "SP Series"] },
      { name: "Kyocera",  sortOrder: 8,  families: ["Ecosys"] },
      { name: "Pantum",   sortOrder: 9,  families: ["P Series", "M Series"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "console",
    brands: [
      { name: "Sony PlayStation",         sortOrder: 1,  families: ["PlayStation 3", "PlayStation 4", "PlayStation 5", "PSP / PS Vita"] },
      { name: "Microsoft Xbox",           sortOrder: 2,  families: ["Xbox 360", "Xbox One", "Xbox Series S/X"] },
      { name: "Nintendo",                 sortOrder: 3,  families: ["Switch", "Wii / Wii U", "DS / 3DS", "Game Boy"] },
      { name: "Steam Deck / Handheld PC", sortOrder: 4,  families: ["Steam Deck", "Asus ROG Ally", "Lenovo Legion Go"] },
      { name: "Retro / Classique",        sortOrder: 5,  families: ["NES / SNES / Nintendo 64", "Sega", "Atari"] },
      { name: "Autre",                    sortOrder: 99, families: [] },
    ],
  },
];

// ─── Seed Function ───────────────────────────────────────────────────────────

/**
 * Idempotent catalog seed.
 *
 * PostgreSQL treats NULL != NULL in unique indexes, so Prisma upsert cannot
 * reliably target rows with nullable unique columns. We use findFirst + create/update
 * for brands and model families (which have nullable companyId/storeId).
 */
export async function seedCatalog(prisma: PrismaClient) {
  console.log("\n  Seeding device catalog...");

  // 1. Upsert categories (key is a simple unique — upsert works fine)
  const categoryMap = new Map<string, string>(); // key -> id
  for (const cat of CATEGORIES) {
    const record = await prisma.deviceCategory.upsert({
      where: { key: cat.key },
      update: {
        nameFr: cat.nameFr,
        nameAr: cat.nameAr,
        nameEn: cat.nameEn,
        sortOrder: cat.sortOrder,
        isActive: true,
      },
      create: {
        key: cat.key,
        nameFr: cat.nameFr,
        nameAr: cat.nameAr,
        nameEn: cat.nameEn,
        sortOrder: cat.sortOrder,
        isActive: true,
      },
    });
    categoryMap.set(cat.key, record.id);
  }
  console.log(`    ✓ ${CATEGORIES.length} categories`);

  // 2. Seed brands and families using findFirst + create/update pattern
  let brandCount = 0;
  let familyCount = 0;

  for (const catEntry of CATALOG) {
    const categoryId = categoryMap.get(catEntry.categoryKey);
    if (!categoryId) {
      console.warn(`    ⚠ Unknown category key: ${catEntry.categoryKey}`);
      continue;
    }

    for (const brandDef of catEntry.brands) {
      // Find existing global brand or create
      let brand = await prisma.deviceBrand.findFirst({
        where: {
          categoryId,
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
            categoryId,
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

      // Seed model families under this brand
      for (let fi = 0; fi < brandDef.families.length; fi++) {
        const familyName = brandDef.families[fi];

        const existing = await prisma.deviceModelFamily.findFirst({
          where: {
            brandId: brand.id,
            companyId: null,
            storeId: null,
            name: familyName,
          },
        });

        if (existing) {
          await prisma.deviceModelFamily.update({
            where: { id: existing.id },
            data: {
              sortOrder: fi + 1,
              isGlobalDefault: true,
              isActive: true,
            },
          });
        } else {
          await prisma.deviceModelFamily.create({
            data: {
              brandId: brand.id,
              companyId: null,
              storeId: null,
              name: familyName,
              sortOrder: fi + 1,
              isGlobalDefault: true,
              isActive: true,
            },
          });
        }
        familyCount++;
      }
    }
  }

  console.log(`    ✓ ${brandCount} brands, ${familyCount} model families`);
  console.log("  Device catalog seeded.");
}
