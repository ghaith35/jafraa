/**
 * Merge all per-brand source JSON files into unified brand catalog files.
 *
 * Reads from: src/data/catalog/laptops/sources/*.json
 * Writes to:  src/data/catalog/laptops/brands/<brand-name>.json
 *
 * Each output file has the structure:
 * {
 *   name: string;
 *   sortOrder: number;
 *   aliases: string[];
 *   families: {
 *     name: string;
 *     models: {
 *       name: string;
 *       releaseYear: number | null;
 *       imageUrl: string | null;
 *       specs: Record<string, unknown> | null;
 *       variants: unknown[] | null;
 *     }[];
 *   }[];
 * }
 *
 * The expanded catalog (laptop-catalog-expanded.ts) family structure is used
 * as the authoritative family grouping. Rich JSON data fills in
 * imageUrl, specs, variants, and releaseYear where available.
 */

import * as fs from "fs";
import * as path from "path";

const SOURCES_DIR = path.resolve(__dirname, "../src/data/catalog/laptops/sources");
const BRANDS_DIR = path.resolve(__dirname, "../src/data/catalog/laptops/brands");
const EXPANDED_CATALOG_PATH = path.resolve(__dirname, "../prisma/catalog/laptop-catalog-expanded.ts");

interface SourceModel {
  name: string;
  release_year?: number | null;
  image_url?: string | null;
  specs?: Record<string, unknown> | null;
  variants?: unknown[] | null;
  [key: string]: unknown;
}

interface SourceFamily {
  name: string;
  models: SourceModel[];
  [key: string]: unknown;
}

interface SourceBrand {
  name: string;
  families: SourceFamily[];
  logo_url?: string | null;
  [key: string]: unknown;
}

interface SourceCatalogFile {
  category?: string;
  brands: SourceBrand[];
}

interface CatalogModel {
  name: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown> | null;
  variants: unknown[] | null;
}

interface CatalogFamily {
  name: string;
  models: CatalogModel[];
}

interface CatalogBrand {
  name: string;
  sortOrder: number;
  aliases: string[];
  families: CatalogFamily[];
}

interface ExpandedFamilyDef {
  name: string;
  models: string[];
}

interface ExpandedBrandDef {
  name: string;
  sortOrder: number;
  aliases?: string[];
  notes?: string;
  families: ExpandedFamilyDef[];
}

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

function loadSourceFiles(): SourceCatalogFile[] {
  const files = fs.readdirSync(SOURCES_DIR).filter((f) => f.endsWith(".json"));
  return files.map((f) => {
    const raw = fs.readFileSync(path.join(SOURCES_DIR, f), "utf-8");
    return JSON.parse(raw) as SourceCatalogFile;
  });
}

function parseExpandedCatalog(): ExpandedBrandDef[] {
  const raw = fs.readFileSync(EXPANDED_CATALOG_PATH, "utf-8");
  const brands: ExpandedBrandDef[] = [];

  // Use eval-like approach: extract the array literal and parse as JSON-like
  // Find the array start
  const startIdx = raw.indexOf("export const EXPANDED_LAPTOP_CATALOG");
  if (startIdx === -1) {
    console.error("Could not find EXPANDED_LAPTOP_CATALOG in file");
    return [];
  }

  // Find the array start after the = sign
  const startMarker = "= [";
  const arrayStartIdx = raw.indexOf(startMarker, startIdx);
  if (arrayStartIdx === -1) {
    console.error("Could not find array start in file");
    return [];
  }
  const arrayStart = arrayStartIdx + 2; // skip "= "

  // Find matching closing bracket
  let depth = 0;
  let arrayEnd = -1;
  for (let i = arrayStart; i < raw.length; i++) {
    if (raw[i] === "[") depth++;
    if (raw[i] === "]") {
      depth--;
      if (depth === 0) {
        arrayEnd = i + 1;
        break;
      }
    }
  }

  if (arrayEnd === -1) return [];

  let arrayStr = raw.slice(arrayStart, arrayEnd);

  // Convert TypeScript to JSON: replace trailing commas, unquoted keys, single-line strings with aliases
  // Remove TypeScript-specific syntax
  // Replace `aliases: [\n  "foo"\n]` style arrays
  // Remove `notes: "..."` lines

  // Simple approach: use Function constructor to evaluate
  try {
    // Create a safe evaluation context
    const evalStr = `
      const EXPANDED_LAPTOP_CATALOG = ${arrayStr};
      return EXPANDED_LAPTOP_CATALOG;
    `;
    const result = new Function(evalStr)() as ExpandedBrandDef[];

    // Filter out Autre
    for (const brand of result) {
      if (!brand.aliases) brand.aliases = [];
      if (!brand.families) brand.families = [];
      for (const family of brand.families) {
        if (!family.models) family.models = [];
      }
    }

    return result;
  } catch (e) {
    console.error("Failed to parse expanded catalog:", e);
    return [];
  }
}

function familyNameMatches(sourceFamily: string, targetFamily: string): boolean {
  const s = normalize(sourceFamily);
  const t = normalize(targetFamily);
  if (s === t) return true;
  if (s.startsWith(t + " ")) return true;
  if (t.startsWith(s + " ")) return true;
  return false;
}

function brandNameMatches(sourceBrand: string, targetBrand: string, aliases: string[] = []): boolean {
  const s = normalize(sourceBrand);
  if (s === normalize(targetBrand)) return true;
  for (const alias of aliases) {
    if (s === normalize(alias)) return true;
  }
  return false;
}

function buildRichModelMap(
  sources: SourceCatalogFile[],
  brandName: string,
  aliases: string[] = []
): Map<string, SourceModel> {
  const byName = new Map<string, SourceModel>();

  for (const catalog of sources) {
    for (const brand of catalog.brands ?? []) {
      if (!brandNameMatches(brand.name, brandName, aliases)) continue;

      for (const family of brand.families ?? []) {
        for (const model of family.models ?? []) {
          const key = normalize(model.name);
          if (!byName.has(key)) {
            byName.set(key, model);
          }
        }
      }
    }
  }

  return byName;
}

function enhanceModel(
  name: string,
  richModel: SourceModel | undefined
): CatalogModel {
  return {
    name,
    releaseYear: richModel?.release_year ?? null,
    imageUrl: richModel?.image_url ?? null,
    specs: richModel?.specs ?? null,
    variants: Array.isArray(richModel?.variants) ? richModel!.variants : null,
  };
}

function main() {
  fs.mkdirSync(BRANDS_DIR, { recursive: true });

  const sources = loadSourceFiles();
  const expandedBrands = parseExpandedCatalog();

  console.log(`Loaded ${sources.length} source files`);
  console.log(`Loaded ${expandedBrands.length} expanded brands`);

  // Build a brand-name mapping from all source files for brands NOT in expanded catalog
  const sourceBrandNames = new Map<string, SourceBrand>();
  for (const catalog of sources) {
    for (const brand of catalog.brands ?? []) {
      if (!sourceBrandNames.has(normalize(brand.name))) {
        sourceBrandNames.set(normalize(brand.name), brand);
      }
    }
  }

  for (const expandedBrand of expandedBrands) {
    if (expandedBrand.name === "Autre") continue;

    const aliases = expandedBrand.aliases ?? [];
    const richModelMap = buildRichModelMap(sources, expandedBrand.name, aliases);

    const catalogBrand: CatalogBrand = {
      name: expandedBrand.name,
      sortOrder: expandedBrand.sortOrder,
      aliases,
      families: [],
    };

    for (const expandedFamily of expandedBrand.families) {
      const family: CatalogFamily = {
        name: expandedFamily.name,
        models: [],
      };

      for (const modelName of expandedFamily.models) {
        const normalizedKey = normalize(modelName);
        let richModel = richModelMap.get(normalizedKey);

        if (!richModel) {
          // Try matching without spaces (handles "ThinkPad T 430" vs "ThinkPad T430")
          const compactKey = normalizedKey.replace(/\s+/g, "");
          for (const [key, model] of richModelMap) {
            const compactMapKey = key.replace(/\s+/g, "");
            if (compactKey === compactMapKey) {
              richModel = model;
              break;
            }
          }
        }

        if (!richModel) {
          for (const [key, model] of richModelMap) {
            if (key.startsWith(normalizedKey) || normalizedKey.startsWith(key)) {
              richModel = model;
              break;
            }
          }
        }

        // Use the rich model's name when available (source names are more authoritative)
        const displayName = richModel ? richModel.name : modelName;
        family.models.push(enhanceModel(displayName, richModel));
      }

      catalogBrand.families.push(family);
    }

    // Also add rich models that aren't in expanded catalog families
    const expandedModelNames = new Set<string>();
    for (const family of expandedBrand.families) {
      for (const model of family.models) {
        expandedModelNames.add(normalize(model));
      }
    }

    // Find rich families that match expanded families but add missing models
    for (const catalog of sources) {
      for (const brand of catalog.brands ?? []) {
        if (!brandNameMatches(brand.name, expandedBrand.name, aliases)) continue;

        for (const family of brand.families ?? []) {
          const matchesExpanded = expandedBrand.families.some(
            (ef) => familyNameMatches(family.name, ef.name)
          );

          if (!matchesExpanded) {
            // This rich family doesn't match any expanded family - skip for now
            // (will be handled by the familyNameMatches logic at runtime)
            continue;
          }

          for (const model of family.models ?? []) {
            const key = normalize(model.name);
            if (!expandedModelNames.has(key)) {
              // Find which expanded family this belongs to
              for (const ef of expandedBrand.families) {
                if (familyNameMatches(family.name, ef.name)) {
                  const catalogFamily = catalogBrand.families.find(
                    (cf) => cf.name === ef.name
                  );
                  if (catalogFamily) {
                    const alreadyInFamily = catalogFamily.models.some(
                      (m) => normalize(m.name) === key
                    );
                    if (!alreadyInFamily) {
                      catalogFamily.models.push(enhanceModel(model.name, model));
                      expandedModelNames.add(key);
                    }
                  }
                  break;
                }
              }
            }
          }
        }
      }
    }

    const outPath = path.join(
      BRANDS_DIR,
      `${expandedBrand.name.replace(/[^a-zA-Z0-9]/g, "-").toLowerCase()}.json`
    );
    fs.writeFileSync(outPath, JSON.stringify(catalogBrand, null, 2) + "\n");
    console.log(
      `  ${expandedBrand.name}: ${catalogBrand.families.length} families, ${catalogBrand.families.reduce((s, f) => s + f.models.length, 0)} models`
    );
  }

  console.log("\nDone! Brand files written to: " + BRANDS_DIR);
}

main();