/**
 * Converts flat expanded catalog data into structured format (families + models).
 *
 * Run: npx tsx scripts/restructure-catalog-data.ts
 *
 * Reads laptop-catalog-expanded.ts and phone-catalog-expanded.ts (flat families arrays)
 * and writes laptop-catalog-structured.ts and phone-catalog-structured.ts with
 * proper families and their child models.
 */

import * as path from "path";
import * as fs from "fs";

const CATALOG_DIR = path.resolve(process.cwd(), "prisma", "catalog");

// ─── Proper families from seed-catalog.ts ─────────────────────────────────

const PHONE_PROPER: Record<string, string[]> = {
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
};

const LAPTOP_PROPER: Record<string, string[]> = {
  HP: ["Pavilion", "ProBook", "EliteBook", "Envy", "Omen", "Victus", "Spectre", "Stream", "ZBook", "Chromebook", "HP Essential", "Dragonfly", "EliteBook Extra", "OmniBook", "Compaq / Presario"],
  Dell: ["Inspiron", "Vostro", "Latitude", "XPS", "Precision", "Alienware", "G Series", "Dell Pro"],
  Lenovo: ["IdeaPad", "ThinkPad", "ThinkBook", "Yoga", "Legion", "LOQ", "ThinkCentre"],
  Acer: ["Aspire", "Swift", "Spin", "TravelMate", "Nitro", "Predator", "Extensa", "Chromebook"],
  Asus: ["VivoBook", "ZenBook", "TUF Gaming", "ROG", "ExpertBook", "ProArt", "Chromebook"],
  Apple: ["MacBook Air", "MacBook Pro", "MacBook"],
  MSI: ["Modern", "Prestige", "Katana", "GE Raider", "GS Stealth", "GP Leopard", "Alpha", "Bravo", "Sword"],
  "Toshiba / Dynabook": ["Satellite", "Tecra", "Portege"],
  Samsung: ["Galaxy Book", "Galaxy Book Pro", "Galaxy Book Ultra", "Galaxy Chromebook", "Notebook", "ATIV Book"],
  Huawei: ["MateBook D", "MateBook X Pro", "MateBook"],
  "Microsoft Surface": ["Surface Laptop", "Surface Pro", "Surface Book", "Surface Go"],
  Razer: ["Blade", "Blade Stealth", "Blade Pro"],
  Gigabyte: ["AORUS", "AERO", "Gaming G"],
  LG: ["Gram", "Ultra PC"],
  Fujitsu: ["Lifebook", "Celsius"],
  Panasonic: ["Toughbook"],
  Xiaomi: ["Mi Notebook", "RedmiBook"],
  Honor: ["MagicBook"],
  Thomson: ["Neo", "Hero", "Prestige", "X Pro"],
  Medion: ["Akoya", "Erazer"],
  Chuwi: ["HeroBook", "CoreBook", "GemiBook", "MiniBook", "FreeBook", "LapBook"],
  "Sony / VAIO": ["VAIO"],
  Condor: ["CloudBook", "Terra", "Neo"],
};

// ─── Helpers ──────────────────────────────────────────────────────────────

function stripped(fullName: string, brand: string): string {
  for (const p of [brand, ...brand.split(" / ")]) {
    const pp = p + " ";
    if (fullName.startsWith(pp)) return fullName.slice(pp.length).trim();
    if (fullName === p) return fullName;
  }
  return fullName;
}

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

function findParent(stripped: string, proper: string[]): string | null {
  const sorted = [...proper].sort((a, b) => b.length - a.length);
  for (const pf of sorted) {
    if (stripped === pf || stripped.startsWith(pf)) return pf;
    if (pf.includes("/")) {
      for (const expanded of expandSlashFamily(pf)) {
        if (stripped === expanded || stripped.startsWith(expanded)) return pf;
      }
    }
  }
  return null;
}

function groupRemaining(entries: string[]): Map<string, string[]> {
  const groups = new Map<string, string[]>();
  for (const entry of entries) {
    const gen = entry.match(/^(.+?)\s+(G\d+|Gen\s+\d+|R\d+)$/i);
    if (gen) {
      const prefix = gen[1].trim();
      if (!groups.has(prefix)) groups.set(prefix, []);
      groups.get(prefix)!.push(entry);
      continue;
    }
    const num = entry.match(/^(.+?)\s+(\d+)$/);
    if (num) {
      const prefix = num[1].trim();
      const siblings = entries.filter(e => {
        const m = e.match(/^(.+?)\s+(\d+)$/);
        return m && m[1].trim() === prefix;
      });
      if (siblings.length >= 2) {
        if (!groups.has(prefix)) groups.set(prefix, []);
        groups.get(prefix)!.push(entry);
        continue;
      }
    }
    if (!groups.has(entry)) groups.set(entry, []);
    groups.get(entry)!.push(entry);
  }
  return groups;
}

// ─── Convert a brand ──────────────────────────────────────────────────────

type FamilyEntry = { name: string; models: string[] };

function convertBrand(
  brand: any,
  properMap: Record<string, string[]>,
): { name: string; sortOrder: number; aliases?: string[]; notes?: string; families: FamilyEntry[] } {
  const proper = properMap[brand.name] ?? [];
  const families = new Map<string, string[]>();
  const remaining: string[] = [];

  for (const entry of brand.families) {
    const s = stripped(entry, brand.name);
    const parent = findParent(s, proper);
    if (parent) {
      if (!families.has(parent)) families.set(parent, []);
      families.get(parent)!.push(entry);
    } else {
      remaining.push(entry);
    }
  }

  for (const [prefix, entries] of groupRemaining(remaining)) {
    if (entries.length > 1) {
      families.set(prefix, entries.map(e => e.slice(prefix.length).trim() || e));
    } else {
      families.set(entries[0], [entries[0]]);
    }
  }

  const result: FamilyEntry[] = [];
  for (const pf of proper) {
    if (families.has(pf)) { result.push({ name: pf, models: families.get(pf)! }); families.delete(pf); }
  }
  for (const [name, models] of families) {
    result.push({ name, models });
  }

  return {
    name: brand.name,
    sortOrder: brand.sortOrder,
    ...(brand.aliases ? { aliases: brand.aliases } : {}),
    ...(brand.notes ? { notes: brand.notes } : {}),
    families: result,
  };
}

// ─── Pretty printer ───────────────────────────────────────────────────────

function pprint(data: any, indent: number): string {
  if (typeof data === "string") return JSON.stringify(data);
  if (typeof data !== "object" || data === null) return String(data);
  if (Array.isArray(data)) {
    if (data.length === 0) return "[]";
    const pad = "  ".repeat(indent);
    if (data.every(d => typeof d === "string")) {
      return "[\n" + data.map(d => pad + "    " + JSON.stringify(d)).join(",\n") + "\n" + pad + "  ]";
    }
    return "[\n" + data.map(d => pad + "  " + pprint(d, indent + 1)).join(",\n") + "\n" + pad + "]";
  }
  const pad = "  ".repeat(indent);
  const pad2 = "  ".repeat(indent + 1);
  const entries = Object.entries(data);
  return "{\n" + entries.map(([k, v]) => {
    const key = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(k) ? k : JSON.stringify(k);
    return `${pad2}${key}: ${pprint(v, indent + 1)}`;
  }).join(",\n") + "\n" + pad + "}";
}

function generateFile(
  brands: any[],
  properMap: Record<string, string[]>,
  exportName: string,
  typeDef: string,
): string {
  const converted = brands.map(b => convertBrand(b, properMap));
  return `${typeDef}\n\nexport const ${exportName}: StructuredBrandDef[] = ${pprint(converted, 0)};\n`;
}

// ─── Main ─────────────────────────────────────────────────────────────────

async function main() {
  console.log("=== Flat Catalog → Structured Converter ===\n");

  const laptopData: any[] = (await import(path.join(CATALOG_DIR, "laptop-catalog-expanded.ts"))).EXPANDED_LAPTOP_CATALOG;
  console.log(`Laptops: ${laptopData.length} brands loaded`);

  const laptopTypeDef = `// Auto-generated from laptop-catalog-expanded.ts
// Groups individual models under their proper families.

export type StructuredBrandDef = {
  name: string;
  sortOrder: number;
  aliases?: string[];
  notes?: string;
  families: { name: string; models: string[] }[];
};`;

  fs.writeFileSync(
    path.join(CATALOG_DIR, "laptop-catalog-structured.ts"),
    generateFile(laptopData, LAPTOP_PROPER, "EXPANDED_LAPTOP_CATALOG", laptopTypeDef),
  );
  console.log("  → Written laptop-catalog-structured.ts");

  const phoneData: any[] = (await import(path.join(CATALOG_DIR, "phone-catalog-expanded.ts"))).EXPANDED_PHONE_CATALOG;
  console.log(`Phones: ${phoneData.length} brands loaded`);

  const phoneTypeDef = `// Auto-generated from phone-catalog-expanded.ts
// Groups individual phone models under their proper families.

export type StructuredBrandDef = {
  name: string;
  sortOrder: number;
  families: { name: string; models: string[] }[];
};`;

  fs.writeFileSync(
    path.join(CATALOG_DIR, "phone-catalog-structured.ts"),
    generateFile(phoneData, PHONE_PROPER, "EXPANDED_PHONE_CATALOG", phoneTypeDef),
  );
  console.log("  → Written phone-catalog-structured.ts");

  console.log("\n=== Summary ===");
  for (const [label, brands, proper] of [
    ["Laptops", laptopData, LAPTOP_PROPER],
    ["Phones", phoneData, PHONE_PROPER],
  ] as const) {
    const converted = brands.map(b => convertBrand(b, proper));
    let totalModels = 0;
    for (const b of converted) for (const f of b.families) totalModels += f.models.length;
    console.log(`${label}: ${brands.reduce((s: number, b: any) => s + b.families.length, 0)} flat → ${converted.reduce((s, b) => s + b.families.length, 0)} families + ${totalModels} models`);
  }

  console.log("\nDone!");
}

main().catch(console.error);
