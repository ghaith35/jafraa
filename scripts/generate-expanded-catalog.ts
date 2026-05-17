import * as fs from "fs";
import * as path from "path";

const BRANDS_DIR = path.resolve(
  __dirname,
  "../src/data/catalog/laptops/brands"
);
const OUTPUT_FILE = path.resolve(
  __dirname,
  "../prisma/catalog/laptop-catalog-expanded.ts"
);

interface BrandJsonModel {
  name: string;
  [key: string]: unknown;
}

interface BrandJsonFamily {
  name: string;
  models: BrandJsonModel[];
}

interface BrandJson {
  name: string;
  sortOrder: number;
  aliases?: string[];
  families: BrandJsonFamily[];
}

function formatStringArray(items: string[], indent: number): string {
  if (items.length === 0) return "[]";
  const pad = " ".repeat(indent + 4);
  const lines = items.map((item) => `${pad}"${item}"`);
  return `[\n${lines.join(",\n")}\n${" ".repeat(indent)}]`;
}

function generateCatalog(brands: BrandJson[]): string {
  const sorted = [...brands].sort((a, b) => a.sortOrder - b.sortOrder);

  const brandBlocks = sorted.map((brand) => {
    const familyBlocks = brand.families.map((family) => {
      const modelNames = family.models.map((m) => m.name);
      return `      {
        name: "${family.name}",
        models: ${formatStringArray(modelNames, 8)}
      }`;
    });

    const familiesStr =
      brand.families.length === 0
        ? "[]"
        : `[\n${familyBlocks.join(",\n")}\n    ]`;

    const aliasStr =
      brand.aliases && brand.aliases.length > 0
        ? formatStringArray(brand.aliases, 4)
        : "[]";

    let block = `  {\n    name: "${brand.name}",\n    sortOrder: ${brand.sortOrder},\n    aliases: ${aliasStr},\n    families: ${familiesStr}\n  }`;

    return block;
  });

  return `/** Expanded laptop catalog for global defaults. */

export type ExpandedLaptopFamilyDef = {
  name: string;
  models: string[];
};

export type ExpandedLaptopBrandDef = {
  name: string;
  sortOrder: number;
  aliases?: string[];
  notes?: string;
  families: ExpandedLaptopFamilyDef[];
};

export const EXPANDED_LAPTOP_CATALOG: ExpandedLaptopBrandDef[] = [
${brandBlocks.join(",\n")}
];
`;
}

function main() {
  const files = fs.readdirSync(BRANDS_DIR).filter((f) => f.endsWith(".json"));

  const brands: BrandJson[] = files.map((file) => {
    const raw = fs.readFileSync(path.join(BRANDS_DIR, file), "utf-8");
    return JSON.parse(raw) as BrandJson;
  });

  const output = generateCatalog(brands);

  const outputDir = path.dirname(OUTPUT_FILE);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(OUTPUT_FILE, output, "utf-8");
  console.log(`Written ${brands.length} brands to ${OUTPUT_FILE}`);
}

main();