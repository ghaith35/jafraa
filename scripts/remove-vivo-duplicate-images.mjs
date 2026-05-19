import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/vivo.json");
const tsPath = path.join(root, "prisma/catalog/vivo-catalog-enriched.ts");
const reportPath = "/private/tmp/vivo-remove-duplicate-images-report.json";

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Vivo phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/vivo.json.\n */\n\nexport type VivoEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type VivoEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n  colors?: string | null;\n};\n\nexport type VivoEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: VivoEnrichedModelSpecs;\n  variants: VivoEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type VivoEnrichedFamily = {\n  name: string;\n  models: VivoEnrichedModel[];\n};\n\nexport const VIVO_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: VivoEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const models = brand.families.flatMap((family) => family.models);
const byImage = new Map();
for (const model of models) {
  if (!model.imageUrl) continue;
  const key = String(model.imageUrl).replace(/^http:/, "https:");
  if (!byImage.has(key)) byImage.set(key, []);
  byImage.get(key).push(model);
}

const removed = [];
for (const [imageUrl, imageModels] of byImage) {
  if (imageModels.length <= 1) continue;
  for (const model of imageModels) {
    removed.push({ name: model.name, imageUrl });
    model.imageUrl = null;
    model.sources = (model.sources || []).filter((source) => source !== imageUrl && !String(source).startsWith("fallback:image-from-family:"));
    model.sources = [...new Set([...model.sources, "image-cleared:duplicate-url-shared-by-multiple-models"])];
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const finalImages = models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:"));
const report = {
  removed: removed.length,
  models: models.length,
  modelsWithImage: finalImages.length,
  uniqueImages: new Set(finalImages).size,
  duplicateImageCount: finalImages.length - new Set(finalImages).size,
  missingImages: models.filter((model) => !model.imageUrl).length,
  removedSamples: removed.slice(0, 50),
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
