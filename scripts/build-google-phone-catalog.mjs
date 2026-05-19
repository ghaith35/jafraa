import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_google_full_public_phone_catalog_v1.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/google.json");
const tsPath = path.join(root, "prisma/catalog/google-catalog-enriched.ts");
const reportPath = "/private/tmp/google-phone-catalog-build-report.json";

const FAMILY_ORDER = ["Pixel", "Nexus"];

function normalizeModel(sourceModel) {
  const specs = sourceModel.specs || {};
  const variants = (sourceModel.variants || []).map((variant) => ({
    name: variant.name || [sourceModel.name, variant.ram, variant.storage].filter(Boolean).join(" "),
    ...(variant.ram ? { ram: variant.ram } : {}),
    ...(variant.storage ? { storage: variant.storage } : {}),
    ...(variant.color ? { color: variant.color } : {}),
    ...(variant.connectivity ? { connectivity: variant.connectivity } : {}),
    sourceBasis: variant.sourceBasis || "source_verified_storage_ram",
  }));

  return {
    name: sourceModel.name,
    aliases: sourceModel.aliases || [],
    releaseYear: sourceModel.release_year ?? null,
    imageUrl: sourceModel.image_url ?? null,
    specs: {
      display: specs.display ?? null,
      processor: specs.processor ?? null,
      ram: specs.ram ?? null,
      storage: Array.isArray(specs.storage) ? specs.storage : [],
      battery: specs.battery ?? null,
      os: specs.os ?? null,
      weight: specs.weight ?? null,
      dimensions: specs.dimensions ?? null,
    },
    variants,
    sources: sourceModel.sources || [],
  };
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Google phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/google.json.\n */\n\nexport type GoogleEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type GoogleEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type GoogleEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: GoogleEnrichedModelSpecs;\n  variants: GoogleEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type GoogleEnrichedFamily = {\n  name: string;\n  models: GoogleEnrichedModel[];\n};\n\nexport const GOOGLE_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: GoogleEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceBrand = source.brands.find((brand) => brand.name === "Google");
if (!sourceBrand) throw new Error("Google brand not found");

const sourceFamilies = new Map(sourceBrand.families.map((family) => [family.name, family]));
const brand = {
  name: "Google",
  sortOrder: 15,
  aliases: ["Google Pixel"],
  logoUrl: sourceBrand.logo_url ?? "https://logo.clearbit.com/google.com",
  families: FAMILY_ORDER.map((name) => ({
    name,
    models: (sourceFamilies.get(name)?.models || [])
      .map(normalizeModel)
      .sort((a, b) => (b.releaseYear ?? -1) - (a.releaseYear ?? -1) || a.name.localeCompare(b.name)),
  })),
};

fs.mkdirSync(path.dirname(brandPath), { recursive: true });
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const models = brand.families.flatMap((family) => family.models);
const images = models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:"));
const report = {
  families: brand.families.length,
  models: models.length,
  variants: models.reduce((count, model) => count + model.variants.length, 0),
  modelsWithImage: images.length,
  uniqueImages: new Set(images).size,
  duplicateImageCount: images.length - new Set(images).size,
  missingImages: models.filter((model) => !model.imageUrl).length,
  missingDisplay: models.filter((model) => !model.specs.display).length,
  missingProcessor: models.filter((model) => !model.specs.processor).length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0).length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
