import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/huawei.json");
const tsPath = path.join(root, "prisma/catalog/huawei-catalog-enriched.ts");
const reportPath = "/private/tmp/huawei-image-fallback-report.json";

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const firstBrandImage = brand.families.flatMap((family) => family.models).find((model) => model.imageUrl)?.imageUrl ?? null;

function regenerateTs() {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Huawei phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/huawei.json.\n */\n\nexport type HuaweiEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type HuaweiEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type HuaweiEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: HuaweiEnrichedModelSpecs;\n  variants: HuaweiEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type HuaweiEnrichedFamily = {\n  name: string;\n  models: HuaweiEnrichedModel[];\n};\n\nexport const HUAWEI_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: HuaweiEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const changes = [];

for (const family of brand.families) {
  const familyFallback = family.models.find((model) => model.imageUrl)?.imageUrl ?? firstBrandImage;
  for (const model of family.models) {
    if (model.imageUrl || !familyFallback) continue;
    model.imageUrl = familyFallback;
    const sources = new Set(model.sources || []);
    sources.add(`fallback:image-from-family:${family.name}`);
    sources.add(familyFallback);
    model.sources = [...sources];
    changes.push({ family: family.name, name: model.name, imageUrl: familyFallback });
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs();
fs.writeFileSync(reportPath, JSON.stringify({ changed: changes.length, changes }, null, 2) + "\n");
console.log(JSON.stringify({ changed: changes.length, reportPath }, null, 2));
