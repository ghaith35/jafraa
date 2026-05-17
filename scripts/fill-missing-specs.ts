import * as fs from "fs";
import * as path from "path";

const BRANDS_DIR = path.resolve(__dirname, "../src/data/catalog/laptops/brands");
const FILLS_DIR = path.resolve(__dirname, "../src/data/catalog/laptops/prompts");

function normalize(value: string): string {
  return value.trim().replace(/\s+/g, " ").toLowerCase();
}

interface FillModel {
  modelName: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown> | null;
  variants: unknown[] | null;
}

const FILL_FILE_TO_BRAND: [string, string][] = [
  ["toshiba_dynabook_missing_laptops_19.json", "toshiba---dynabook.json"],
];

let totalFilled = 0;

for (const [fillFile, brandFile] of FILL_FILE_TO_BRAND) {
  const fillPath = path.join(FILLS_DIR, fillFile);
  const brandPath = path.join(BRANDS_DIR, brandFile);

  if (!fs.existsSync(fillPath)) {
    console.log(`  SKIP ${fillFile} (not found)`);
    continue;
  }

  const fills: FillModel[] = JSON.parse(fs.readFileSync(fillPath, "utf-8"));
  const fillMap = new Map<string, FillModel>();
  for (const f of fills) {
    fillMap.set(normalize(f.modelName), f);
  }

  const brand = JSON.parse(fs.readFileSync(brandPath, "utf-8"));
  let filled = 0;

  for (const family of brand.families) {
    for (const model of family.models) {
      if (model.specs) continue;

      const key = normalize(model.name);
      let fill = fillMap.get(key);

      if (!fill) {
        const compactKey = key.replace(/\s+/g, "");
        for (const [fk, f] of fillMap) {
          if (fk.replace(/\s+/g, "") === compactKey) {
            fill = f;
            break;
          }
        }
      }

      if (!fill) {
        for (const [fk, f] of fillMap) {
          if (fk.startsWith(key) || key.startsWith(fk)) {
            fill = f;
            break;
          }
        }
      }

      if (fill) {
        model.releaseYear = fill.releaseYear ?? null;
        model.imageUrl = fill.imageUrl ?? null;
        model.specs = fill.specs ?? null;
        model.variants = Array.isArray(fill.variants) ? fill.variants : null;
        filled++;
        totalFilled++;
      }
    }
  }

  fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
  console.log(`  ${brandFile}: filled ${filled} models (${fillMap.size - filled} unmatched)`);
}

console.log(`\nTotal filled: ${totalFilled}`);

// Regenerate expanded catalog
const GEN_SCRIPT = path.resolve(__dirname, "generate-expanded-catalog.ts");
console.log("\nRegenerating expanded catalog...");
import { execSync } from "child_process";
execSync(`npx tsx "${GEN_SCRIPT}"`, { stdio: "inherit" });