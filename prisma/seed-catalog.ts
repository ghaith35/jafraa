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
  { key: "all_in_one",        nameFr: "Ordinateur Tout-en-Un",   nameAr: "حاسوب الكل في واحد",  nameEn: "All-in-One PC",     sortOrder: 4 },
  { key: "desktop_unit",      nameFr: "Unité Centrale",          nameAr: "وحدة مركزية",        nameEn: "Desktop Unit",      sortOrder: 5 },
  { key: "printer_laser",     nameFr: "Imprimante Laser",         nameAr: "طابعة ليزر",      nameEn: "Laser Printer",     sortOrder: 6 },
  { key: "printer_cartridge", nameFr: "Imprimante Cartouche",     nameAr: "طابعة خرطوشة",    nameEn: "Cartridge Printer", sortOrder: 7 },
  { key: "printer_risograph", nameFr: "Imprimante Risographique", nameAr: "طابعة ريزوغراف",  nameEn: "Risograph Printer", sortOrder: 8 },
  { key: "console", nameFr: "Console de jeux",      nameAr: "جهاز ألعاب",   nameEn: "Game Console",     sortOrder: 9 },
  { key: "other",   nameFr: "Autre",                nameAr: "أخرى",         nameEn: "Other",            sortOrder: 99 },
];

// ─── Brands & Families per Category ──────────────────────────────────────────

const CATALOG: CategoryWithBrands[] = [
  {
    categoryKey: "phone",
    brands: [
      { name: "Samsung",  sortOrder: 1,  families: ["Galaxy A", "Galaxy S", "Galaxy Note", "Galaxy M", "Galaxy Z Fold", "Galaxy Z Flip", "Galaxy Z", "Galaxy J", "Galaxy F", "Galaxy XCover"] },
      { name: "Apple",    sortOrder: 2,  families: ["iPhone 6/7/8", "iPhone X/XR/XS", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "iPhone SE", "iPhone 5/5S/SE", "iPhone Air"] },
      { name: "Xiaomi",   sortOrder: 3,  families: ["Xiaomi Number Series", "Xiaomi T Series", "Xiaomi Mix", "Xiaomi Civi", "Xiaomi Black Shark"] },
      { name: "Redmi",    sortOrder: 4,  families: ["Redmi Number Series", "Redmi Note Series", "Redmi A Series", "Redmi K Series"] },
      { name: "Poco",     sortOrder: 5,  families: ["Poco C", "Poco M", "Poco X", "Poco F"] },
      { name: "Oppo",     sortOrder: 6,  families: ["A Series", "Reno Series", "Find Series", "F Series"] },
      { name: "Realme",   sortOrder: 7,  families: ["C Series", "Number Series", "Narzo", "GT", "Realme X"] },
      { name: "Infinix",  sortOrder: 8,  families: ["Smart", "Hot", "Note", "Zero", "S Series"] },
      { name: "Tecno",    sortOrder: 9,  families: ["Spark", "Camon", "Pop", "Phantom", "Pova"] },
      { name: "Huawei",   sortOrder: 11, families: ["P Series", "Mate Series", "Nova", "Y Series", "Enjoy"] },
      { name: "Honor",    sortOrder: 12, families: ["X Series", "Magic", "Number Series", "Play", "Pad"] },
      { name: "Vivo",     sortOrder: 13, families: ["Y Series", "V Series", "X Series", "T Series", "iQOO"] },
      { name: "OnePlus",  sortOrder: 14, families: ["OnePlus Number", "OnePlus Nord", "OnePlus Ace"] },
      { name: "Google",   sortOrder: 15, families: ["Pixel", "Pixel A Series"] },
      { name: "Sony",     sortOrder: 17, families: ["Xperia 1", "Xperia 5", "Xperia 10"] },
      { name: "Nokia",    sortOrder: 19, families: ["Nokia G", "Nokia C", "Nokia X"] },
      { name: "LG",       sortOrder: 21, families: ["LG K Series", "LG Velvet", "LG Wing"] },
      { name: "Condor",   sortOrder: 22, families: ["Allure", "Griffe", "Plume"] },
    ],
  },
  {
    categoryKey: "tablet",
    brands: [
      { name: "Apple iPad",         sortOrder: 1, families: ["iPad", "iPad mini", "iPad Air", "iPad Pro"] },
      { name: "Samsung Galaxy Tab", sortOrder: 2, families: ["Tab A", "Tab S", "Tab Active", "Tab FE"] },
      { name: "Lenovo Tab",         sortOrder: 3, families: ["Tab M", "Tab P", "Yoga Tab", "Legion Tab"] },
      { name: "Huawei MatePad",     sortOrder: 4, families: ["MatePad", "MediaPad", "MatePad Pro"] },
      { name: "Xiaomi Pad",         sortOrder: 5, families: ["Xiaomi Pad", "Redmi Pad", "Pad Pro"] },
      { name: "Honor Pad",          sortOrder: 6, families: ["Honor Pad", "Honor Pad X"] },
      { name: "Oppo Pad",           sortOrder: 7, families: ["Oppo Pad", "Oppo Pad Air"] },
      { name: "Realme Pad",         sortOrder: 8, families: ["Realme Pad", "Realme Pad Mini"] },
      { name: "Amazon",             sortOrder: 9, families: ["Fire 7", "Fire HD 8", "Fire HD 10", "Fire Max 11"] },
      { name: "Microsoft Surface",  sortOrder: 10, families: ["Surface Pro", "Surface Go"] },
      { name: "Condor",             sortOrder: 11, families: [] },
      { name: "Autre",              sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "laptop",
    brands: [
      { name: "HP",                   sortOrder: 1,  families: ["Pavilion", "ProBook", "EliteBook", "Envy", "Omen", "Victus", "Spectre", "Stream", "ZBook", "Chromebook", "HP Essential", "Dragonfly", "EliteBook Extra", "OmniBook", "Compaq / Presario"] },
      { name: "Dell",                 sortOrder: 2,  families: ["Inspiron", "Vostro", "Latitude", "XPS", "Precision", "Alienware", "G Series", "Dell Pro"] },
      { name: "Lenovo",               sortOrder: 3,  families: ["IdeaPad", "ThinkPad", "ThinkBook", "Yoga", "Legion", "LOQ", "ThinkCentre"] },
      { name: "Acer",                 sortOrder: 4,  families: ["Aspire", "Swift", "Spin", "TravelMate", "Nitro", "Predator", "Extensa", "Chromebook"] },
      { name: "Asus",                 sortOrder: 5,  families: ["VivoBook", "ZenBook", "TUF Gaming", "ROG", "ExpertBook", "Chromebook", "ProArt"] },
      { name: "Apple",                sortOrder: 6,  families: ["MacBook Air", "MacBook Pro", "MacBook"] },
      { name: "MSI",                  sortOrder: 7,  families: ["Modern", "Prestige", "Katana", "GF Series", "GE Raider", "GS Stealth", "GP Leopard", "Alpha", "Bravo", "Sword"] },
      { name: "Toshiba / Dynabook",   sortOrder: 8,  families: ["Satellite", "Tecra", "Portege"] },
      { name: "Samsung",              sortOrder: 9,  families: ["Galaxy Book", "Galaxy Book Pro", "Galaxy Book Ultra", "Galaxy Chromebook"] },
      { name: "Huawei",               sortOrder: 10, families: ["MateBook D", "MateBook X Pro", "MateBook"] },
      { name: "Microsoft Surface",    sortOrder: 11, families: ["Surface Laptop", "Surface Pro", "Surface Book", "Surface Go"] },
      { name: "Razer",                sortOrder: 12, families: ["Blade", "Blade Stealth", "Blade Pro"] },
      { name: "Gigabyte",             sortOrder: 13, families: ["AORUS", "AERO", "Gaming G"] },
      { name: "LG",                   sortOrder: 14, families: ["Gram", "Ultra PC"] },
      { name: "Fujitsu",              sortOrder: 15, families: ["Lifebook", "Celsius"] },
      { name: "Panasonic",            sortOrder: 16, families: ["Toughbook", "Let's Note"] },
      { name: "Xiaomi",               sortOrder: 17, families: ["Mi Notebook", "RedmiBook"] },
      { name: "Honor",                sortOrder: 18, families: ["MagicBook"] },
      { name: "Condor",               sortOrder: 19, families: ["CloudBook", "Terra", "Neo"] },
      { name: "Thomson",              sortOrder: 20, families: ["Neo", "Hero", "Prestige", "X Pro"] },
      { name: "Medion",               sortOrder: 21, families: ["Akoya", "Erazer"] },
      { name: "Chuwi",                sortOrder: 22, families: ["HeroBook", "CoreBook", "GemiBook", "MiniBook", "FreeBook", "LapBook"] },
      { name: "Sony / VAIO",          sortOrder: 23, families: ["VAIO"] },
      { name: "Autre",                sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "all_in_one",
    brands: [
      { name: "Apple",    sortOrder: 1,  families: ["iMac", "iMac Pro"] },
      { name: "HP",       sortOrder: 2,  families: ["All-in-One", "Envy All-in-One", "Pavilion All-in-One"] },
      { name: "Dell",     sortOrder: 3,  families: ["Inspiron All-in-One", "XPS All-in-One", "OptiPlex All-in-One"] },
      { name: "Lenovo",   sortOrder: 4,  families: ["IdeaCentre AIO", "ThinkCentre AIO"] },
      { name: "Microsoft",sortOrder: 5,  families: ["Surface Studio"] },
      { name: "Asus",     sortOrder: 6,  families: ["Vivo AIO", "Zen AIO"] },
      { name: "Acer",     sortOrder: 7,  families: ["Aspire All-in-One"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "desktop_unit",
    brands: [
      { name: "PC assemblé (Custom)", sortOrder: 1,  families: ["Gaming build", "Office build", "Workstation build", "HTPC"] },
      { name: "HP",                    sortOrder: 2,  families: ["Pavilion Desktop", "ProDesk", "EliteDesk", "Omen Desktop", "Z Workstation"] },
      { name: "Dell",                  sortOrder: 3,  families: ["OptiPlex", "Inspiron Desktop", "Vostro Desktop", "XPS Desktop", "Precision Tower", "Alienware", "PowerEdge"] },
      { name: "Lenovo",                sortOrder: 4,  families: ["ThinkCentre", "IdeaCentre", "Legion Tower", "ThinkStation"] },
      { name: "Acer",                  sortOrder: 5,  families: ["Aspire Desktop", "Predator Orion"] },
      { name: "Asus",                  sortOrder: 6,  families: ["ROG Desktop", "ExpertCenter", "ProArt"] },
      { name: "MSI",                   sortOrder: 7,  families: ["Infinite", "Trident", "MEG"] },
      { name: "Condor",                sortOrder: 8,  families: [] },
      { name: "Autre",                 sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "printer_laser",
    brands: [
      { name: "HP",       sortOrder: 1,  families: ["LaserJet", "LaserJet Pro", "LaserJet Enterprise", "Neverstop Laser"] },
      { name: "Canon",    sortOrder: 2,  families: ["i-SENSYS", "imageCLASS", "LBP"] },
      { name: "Brother",  sortOrder: 3,  families: ["HL", "DCP", "MFC"] },
      { name: "Samsung",  sortOrder: 4,  families: ["Xpress", "ML", "CLX", "ProXpress"] },
      { name: "Xerox",    sortOrder: 5,  families: ["Phaser", "WorkCentre", "VersaLink"] },
      { name: "Ricoh",    sortOrder: 6,  families: ["Aficio", "SP Series", "IM Series"] },
      { name: "Kyocera",  sortOrder: 7,  families: ["Ecosys", "TASKalfa"] },
      { name: "Pantum",   sortOrder: 8,  families: ["P Series", "M Series"] },
      { name: "Lexmark",  sortOrder: 9,  families: ["MS Series", "MX Series"] },
      { name: "OKI",      sortOrder: 10, families: ["B Series", "C Series"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "printer_cartridge",
    brands: [
      { name: "Epson",    sortOrder: 1,  families: ["EcoTank", "L Series", "WorkForce", "Expression", "SureColor"] },
      { name: "Canon",    sortOrder: 2,  families: ["PIXMA G", "PIXMA", "PIXMA Pro", "MAXIFY"] },
      { name: "HP",       sortOrder: 3,  families: ["DeskJet", "OfficeJet", "Smart Tank", "ENVY", "Photosmart"] },
      { name: "Brother",  sortOrder: 4,  families: ["MFC", "DCP", "InkBenefit", "Color"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "printer_risograph",
    brands: [
      { name: "Ricoh",    sortOrder: 1,  families: ["Riso", "RisoCom"] },
      { name: "Duplo",    sortOrder: 2,  families: ["DP Series"] },
      { name: "Autre",    sortOrder: 99, families: [] },
    ],
  },
  {
    categoryKey: "console",
    brands: [
      { name: "Sony PlayStation",         sortOrder: 1,  families: ["PlayStation 1", "PlayStation 2", "PlayStation 3", "PlayStation 4", "PlayStation 5", "PSP / PS Vita"] },
      { name: "Microsoft Xbox",           sortOrder: 2,  families: ["Xbox", "Xbox 360", "Xbox One", "Xbox Series S/X"] },
      { name: "Nintendo",                 sortOrder: 3,  families: ["NES", "SNES", "Nintendo 64", "GameCube", "Wii", "Wii U", "Switch", "DS", "3DS", "Game Boy", "Game Boy Advance"] },
      { name: "Steam Deck / Handheld PC", sortOrder: 4,  families: ["Steam Deck", "Asus ROG Ally", "Lenovo Legion Go", "MSI Claw"] },
      { name: "Sega",                     sortOrder: 5,  families: ["Mega Drive / Genesis", "Saturn", "Dreamcast", "Game Gear"] },
      { name: "Retro / Classique",        sortOrder: 6,  families: ["Atari 2600", "Atari 7800", "Commodore 64", "Amiga"] },
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
