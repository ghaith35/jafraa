/**
 * One-time migration to restructure existing catalog data.
 *
 * Problem: The expanded seed data (laptop-catalog-expanded, phone-catalog-expanded, etc.)
 * stores individual models (e.g., "HP 14 G1", "Galaxy S26") as DeviceModelFamily entries.
 * They should be DeviceModel entries under proper parent families.
 *
 * This script:
 *  1. Identifies model-level families (those that are actually specific models)
 *  2. Creates/finds proper aggregate families for them
 *  3. Creates DeviceModel entries under the correct families
 *  4. Re-links existing RepairTicket / CustomerAsset references
 *  5. Marks the old model-level families as inactive
 *
 * Run: npx tsx scripts/restructure-catalog.ts
 */

import { prisma } from "../src/lib/db";

type MigrationPlan = {
  parentFamilyName: string;
  childFamilies: string[];
  modelSuffix: (familyName: string) => string;
};

type BrandPlan = {
  brandName: string;
  plans: MigrationPlan[];
};

const DETECTED_FAMILIES: Record<string, string[]> = {
  // Phone families from seed-catalog.ts (proper families)
  Samsung: ["Galaxy A", "Galaxy S", "Galaxy Note", "Galaxy M", "Galaxy Z Fold", "Galaxy Z Flip", "Galaxy Z", "Galaxy J", "Galaxy F", "Galaxy XCover"],
  Apple: ["iPhone 6/7/8", "iPhone X/XR/XS", "iPhone 11", "iPhone 12", "iPhone 13", "iPhone 14", "iPhone 15", "iPhone 16", "iPhone 17", "iPhone SE", "iPhone 5/5S/SE", "iPhone Air"],
  Xiaomi: ["Xiaomi Number Series", "Xiaomi T Series", "Xiaomi Mix", "Xiaomi Civi", "Xiaomi Black Shark"],
  Redmi: ["Redmi Number Series", "Redmi Note Series", "Redmi A Series", "Redmi K Series"],
  Poco: ["Poco C", "Poco M", "Poco X", "Poco F"],
  Oppo: ["A Series", "Reno Series", "Find Series", "F Series"],
  Realme: ["C Series", "Number Series", "Narzo", "GT", "Realme X"],
  Infinix: ["Smart", "Hot", "Note", "Zero", "S Series"],
  Tecno: ["Spark", "Camon", "Pop", "Phantom", "Pova"],
  Itel: ["A Series", "P Series", "S Series", "Vision"],
  Huawei: ["P Series", "Mate Series", "Nova", "Y Series", "Enjoy"],
  Honor: ["X Series", "Magic", "Number Series", "Play", "Pad"],
  Vivo: ["Y Series", "V Series", "X Series", "T Series", "iQOO"],
  OnePlus: ["OnePlus Number", "OnePlus Nord", "OnePlus Ace"],
  Google: ["Pixel", "Pixel A Series"],
  Nothing: ["Phone"],
  Sony: ["Xperia 1", "Xperia 5", "Xperia 10"],
  Motorola: ["Moto G", "Moto E", "Moto Edge", "Razr"],
  Nokia: ["Nokia G", "Nokia C", "Nokia X"],
  Asus: ["ROG Phone", "Zenfone"],
  LG: ["LG K Series", "LG Velvet", "LG Wing"],
  Condor: ["Allure", "Griffe", "Plume"],

  // Laptop families from seed-catalog.ts
  HP: ["Pavilion", "ProBook", "EliteBook", "Envy", "Omen", "Victus", "Spectre", "Stream", "ZBook", "Chromebook", "HP Essential", "Dragonfly", "OmniBook", "EliteBook Extra", "Compaq / Presario"],
  Dell: ["Inspiron", "Vostro", "Latitude", "XPS", "Precision", "Alienware", "G Series", "Dell Pro"],
  Lenovo: ["IdeaPad", "ThinkPad", "ThinkBook", "Yoga", "Legion", "LOQ", "ThinkCentre"],
  Acer: ["Aspire", "Swift", "Spin", "TravelMate", "Nitro", "Predator", "Extensa", "Chromebook"],
  "Asus (Laptop)": ["VivoBook", "ZenBook", "TUF Gaming", "ROG", "ExpertBook", "ProArt", "Chromebook"],
  "Apple (Laptop)": ["MacBook Air", "MacBook Pro", "MacBook"],
  MSI: ["Modern", "Prestige", "Katana", "GF Series", "GE Raider", "GS Stealth", "GP Leopard", "Alpha", "Bravo", "Sword"],
  "Toshiba / Dynabook": ["Satellite", "Tecra", "Portege"],
  "Samsung (Laptop)": ["Galaxy Book", "Galaxy Book Pro", "Galaxy Book Ultra", "Galaxy Chromebook"],
  "Huawei (Laptop)": ["MateBook D", "MateBook X Pro", "MateBook"],
  "Microsoft Surface": ["Surface Laptop", "Surface Pro", "Surface Book", "Surface Go"],
  Razer: ["Blade", "Blade Stealth", "Blade Pro"],
  Gigabyte: ["AORUS", "AERO", "Gaming G"],
  "LG (Laptop)": ["Gram", "Ultra PC"],
  Fujitsu: ["Lifebook", "Celsius"],
  Panasonic: ["Toughbook"],
  "Xiaomi (Laptop)": ["Mi Notebook", "RedmiBook"],
  "Honor (Laptop)": ["MagicBook"],
  Thomson: ["Neo", "Hero", "Prestige", "X Pro"],
  Medion: ["Akoya", "Erazer"],
  Chuwi: ["HeroBook", "CoreBook", "GemiBook", "MiniBook", "FreeBook", "LapBook"],
  "Sony / VAIO": ["VAIO"],
  Condor: ["CloudBook", "Terra", "Neo"],
};

/**
 * Check if a family name matches a known proper family.
 */
function expandSlashFamily(pf: string): string[] {
  const slashIdx = pf.indexOf("/");
  if (slashIdx === -1) return [pf];
  const first = pf.slice(0, slashIdx).trim();
  const rest = pf.slice(slashIdx + 1).split("/").map(p => p.trim());
  const baseMatch = first.match(/^(.+)(\s*\d+[\w]*)$/);
  if (baseMatch) {
    const prefix = baseMatch[1];
    return [first, ...rest.map(r => (prefix + r).trim())];
  }
  const textMatch = first.match(/^(.+?\s)(\w+)$/);
  if (textMatch) {
    const prefix = textMatch[1];
    return [first, ...rest.map(r => (prefix + r).trim())];
  }
  return [pf];
}

function matchesProperFamily(familyName: string, properFamilies: string[]): string | null {
  if (properFamilies.includes(familyName)) return familyName;
  const sorted = [...properFamilies].sort((a, b) => b.length - a.length);
  for (const pf of sorted) {
    if (familyName === pf || familyName.startsWith(pf)) return pf;
    if (pf.includes("/")) {
      for (const expanded of expandSlashFamily(pf)) {
        if (familyName === expanded || familyName.startsWith(expanded)) return pf;
      }
    }
  }
  return null;
}

function stripBrandPrefix(familyName: string, brandName: string): string {
  // For HP laptop families (which often have "HP " prefix), strip that
  for (const prefix of [brandName + " ", ...brandName.split(" / ").map(s => s + " ")]) {
    if (familyName.startsWith(prefix)) {
      return familyName.slice(prefix.length);
    }
  }
  return familyName;
}

async function main() {
  console.log("=== Catalog Restructuring Migration ===\n");

  let totalRestructured = 0;
  let totalFamiliesCreated = 0;
  let totalModelsCreated = 0;
  let totalTicketsRelinked = 0;
  let totalAssetsRelinked = 0;

  // Helper to categorize and restructure a brand's families
  async function restructureBrand(brandName: string, properFamilies: string[]) {
    const brand = await prisma.deviceBrand.findFirst({
      where: { name: brandName, isGlobalDefault: true, isActive: true },
      select: { id: true, name: true },
    });
    if (!brand) {
      console.log(`  Skipping brand "${brandName}" — not found in DB`);
      return;
    }

    const allFamilies = await prisma.deviceModelFamily.findMany({
      where: { brandId: brand.id, isActive: true },
      select: { id: true, name: true },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    });

    // Separate proper families from model-level families
    const properFamilyMap = new Map<string, string>(); // name -> id
    const modelLevelFamilies: { id: string; name: string }[] = [];

    for (const f of allFamilies) {
      const stripped = stripBrandPrefix(f.name, brandName);
      const matched = matchesProperFamily(stripped, properFamilies);
      if (matched) {
        properFamilyMap.set(matched, f.id);
      } else {
        modelLevelFamilies.push(f);
      }
    }

    if (modelLevelFamilies.length === 0) {
      console.log(`  ✓ ${brandName}: ${properFamilyMap.size} proper families, no model-level families`);
      return;
    }

    console.log(`\n  ${brandName}: ${properFamilyMap.size} proper families + ${modelLevelFamilies.length} model-level families`);

    // For each model-level family, try to find its parent and create a DeviceModel
    for (const mf of modelLevelFamilies) {
      const stripped = stripBrandPrefix(mf.name, brandName).trim();
      if (!stripped) continue;

      let parentFamilyName: string | null = null;
      let modelName: string = mf.name;
      let extractedModelName: string = "";

      // Try 1: Check if a brand-name prefix defines an aggregate family
      // e.g., "HP 14 G1" -> prefix "HP 14" is a potential aggregate family
      // e.g., "HP 240 G1" -> prefix "HP 240"
      const brandPrefix = brandName.split(" / ")[0]; // e.g., "Toshiba"
      let aggPrefix = "";
      for (let attempt of [brandPrefix, brandName]) {
        if (stripped.startsWith(attempt + " ")) {
          aggPrefix = attempt + " ";
          break;
        }
      }

      // Extract potential aggregate prefix if model ends with G\d+, Gen \d+, or similar
      const genMatch = mf.name.match(/^(.+?)\s+(G\d+|Gen\s+\d+|R\d+|\(.*\))$/);
      if (genMatch) {
        // e.g., "HP 14 G1" -> parent "HP 14", model "G1"
        aggPrefix = genMatch[1].trim();
        extractedModelName = genMatch[2].trim();
      }

      // Try 2: If no genMatch, try extracting family+name when name looks like "FAMILY NAME"
      const sizeMatch = mf.name.match(/^(.+?)\s+(\d+)$/);
      if (sizeMatch && !genMatch) {
        aggPrefix = sizeMatch[1].trim();
        extractedModelName = sizeMatch[2].trim();
      }

      // Try 3: Check if the model fits under a known proper family
      for (const [pfName, pfId] of properFamilyMap) {
        const pfPrefix = pfName;
        if (stripped.startsWith(pfPrefix + " ") || stripped === pfPrefix + "s") {
          parentFamilyName = pfName;
          extractedModelName = stripped.slice(pfName.length).trim();
          if (!extractedModelName) extractedModelName = mf.name;
          break;
        }
        // Also check without the brand prefix
        if (mf.name.startsWith(pfName + " ") || mf.name === pfName) {
          parentFamilyName = pfName;
          extractedModelName = mf.name.slice(pfName.length).trim();
          if (!extractedModelName) extractedModelName = mf.name;
          break;
        }
      }

      // If we found no parent by name, use aggregate prefix as family
      if (!parentFamilyName && aggPrefix) {
        parentFamilyName = aggPrefix;
        if (!extractedModelName) extractedModelName = mf.name;
      }

      if (!parentFamilyName) {
        // Could not determine parent; keep as-is but create DeviceModel with same name
        parentFamilyName = mf.name;
        extractedModelName = mf.name;
        console.log(`    ⚠ Could not determine parent for "${mf.name}", using self as parent`);
      }

      // Find or create the parent family
      let parentId = properFamilyMap.get(parentFamilyName);
      if (!parentId) {
        // Check if it already exists in DB under this brand
        const existing = await prisma.deviceModelFamily.findFirst({
          where: { brandId: brand.id, name: parentFamilyName, isActive: true },
          select: { id: true },
        });
        parentId = existing?.id ?? null;
        if (!parentId) {
          // Create a new aggregate family
          const created = await prisma.deviceModelFamily.create({
            data: {
              brandId: brand.id,
              companyId: null,
              storeId: null,
              name: parentFamilyName,
              sortOrder: properFamilyMap.size + 1,
              isGlobalDefault: true,
              isActive: true,
            },
            select: { id: true },
          });
          parentId = created.id;
          properFamilyMap.set(parentFamilyName, parentId);
          totalFamiliesCreated++;
          console.log(`    + Created family "${parentFamilyName}"`);
        }
      }

      // Check if a DeviceModel with this name already exists under the parent family
      const existingModel = await prisma.deviceModel.findFirst({
        where: { familyId: parentId!, name: { equals: modelName, mode: "insensitive" } },
        select: { id: true },
      });

      if (existingModel) {
        // Model already exists, skip creation
        continue;
      }

      // Create DeviceModel
      await prisma.deviceModel.create({
        data: {
          familyId: parentId!,
          name: modelName,
          sortOrder: 1,
          isActive: true,
        },
      });
      totalModelsCreated++;

      // Relink repair tickets from the old family to the new parent
      const ticketCount = await prisma.repairTicket.updateMany({
        where: { deviceFamilyId: mf.id },
        data: { deviceFamilyId: parentId! },
      });
      if (ticketCount.count > 0) {
        totalTicketsRelinked += ticketCount.count;
        console.log(`      Relinked ${ticketCount.count} tickets from "${mf.name}" to "${parentFamilyName}"`);
      }

      // Relink customer assets
      const assetCount = await prisma.customerAsset.updateMany({
        where: { deviceModelFamilyId: mf.id },
        data: { deviceModelFamilyId: parentId! },
      });
      if (assetCount.count > 0) {
        totalAssetsRelinked += assetCount.count;
        console.log(`      Relinked ${assetCount.count} assets from "${mf.name}" to "${parentFamilyName}"`);
      }

      // Mark the old model-level family as inactive (keeps it in DB for safety)
      await prisma.deviceModelFamily.update({
        where: { id: mf.id },
        data: { isActive: false },
      });
      totalRestructured++;
    }
  }

  // Process each brand
  for (const [brandName, properFamilies] of Object.entries(DETECTED_FAMILIES)) {
    await restructureBrand(brandName, properFamilies);
  }

  console.log("\n=== Migration Summary ===");
  console.log(`  Restructured (deactivated): ${totalRestructured} model-level families`);
  console.log(`  Created new families: ${totalFamiliesCreated}`);
  console.log(`  Created DeviceModel entries: ${totalModelsCreated}`);
  console.log(`  Relinked repair tickets: ${totalTicketsRelinked}`);
  console.log(`  Relinked customer assets: ${totalAssetsRelinked}`);
  console.log("\nDone! Run `npx tsx scripts/backfill-missing-models.ts` to also backfill any approved suggestions.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
