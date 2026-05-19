import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/google.json");
const tsPath = path.join(root, "prisma/catalog/google-catalog-enriched.ts");
const reportPath = "/private/tmp/google-image-repair-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const PAGE_SLUG_OVERRIDES = new Map(Object.entries({
  "Google Pixel 10": ["google-pixel-10"],
  "Google Nexus 4": ["nexus-4-e960", "lg-nexus-4-e960", "google-nexus-4"],
  "Google Nexus 5X": ["lg-nexus-5x", "nexus-5x", "google-nexus-5x"],
  "Google Nexus 6": ["motorola-nexus-6", "nexus-6", "google-nexus-6"],
  "Google Nexus 6P": ["huawei-nexus-6p", "nexus-6p", "google-nexus-6p"],
  "Google Galaxy Nexus": ["samsung-galaxy-nexus-i9250", "galaxy-nexus-i9250", "google-galaxy-nexus"],
}));

const IMAGE_URL_OVERRIDES = new Map(Object.entries({
  "Google Nexus 4": "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-4.jpg",
  "Google Nexus 6": "https://fdn2.gsmarena.com/vv/bigpic/moto-nexus-6.jpg",
  "Google Nexus 6P": "https://fdn2.gsmarena.com/vv/bigpic/huawei-nexus-6p.jpg",
  "Google Galaxy Nexus": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-nexus.jpg",
}));

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function candidatePageSlugs(modelName) {
  const base = slugify(modelName);
  const noGoogle = slugify(modelName.replace(/^google\s+/i, ""));
  return [...new Set([
    ...(PAGE_SLUG_OVERRIDES.get(modelName) || []),
    base,
    noGoogle,
    base.replace(/pixel-(\d)-/g, "pixel-$1"),
    noGoogle.replace(/pixel-(\d)-/g, "pixel-$1"),
  ].filter(Boolean))];
}

async function isValidImage(url) {
  if (!url) return false;
  const res = await fetch(url, {
    method: "HEAD",
    signal: AbortSignal.timeout(8000),
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  return Boolean(res?.ok && (res.headers.get("content-type") || "").startsWith("image/"));
}

async function findGsmarenaBdImage(modelName) {
  const imageOverride = IMAGE_URL_OVERRIDES.get(modelName);
  if (imageOverride && await isValidImage(imageOverride)) {
    return { imageUrl: imageOverride, pageUrl: "https://www.gsmarena.com/" };
  }
  for (const slug of candidatePageSlugs(modelName)) {
    const pageUrl = `https://www.gsmarena.com.bd/pictures/${slug}/`;
    const res = await fetch(pageUrl, {
      signal: AbortSignal.timeout(10000),
      headers: { "user-agent": userAgent, accept: "text/html,*/*" },
    }).catch(() => null);
    if (!res?.ok) continue;
    const html = await res.text();
    const images = [...html.matchAll(/https?:\/\/www\.gsmarena\.com\.bd\/images\/products\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi)]
      .map((match) => match[0])
      .filter((url) => !/logo|placeholder/i.test(url));
    for (const imageUrl of images) {
      if (await isValidImage(imageUrl)) return { imageUrl, pageUrl };
    }
  }
  return null;
}

async function mapConcurrent(items, limit, mapper) {
  let next = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (next < items.length) {
      const index = next++;
      await mapper(items[index], index);
    }
  }));
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

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const models = brand.families.flatMap((family) => family.models);
const invalid = [];
await mapConcurrent(models, 8, async (model) => {
  if (await isValidImage(model.imageUrl)) return;
  invalid.push(model);
});

const usedImages = new Set(models.filter((model) => model.imageUrl && !invalid.includes(model)).map((model) => String(model.imageUrl).replace(/^http:/, "https:")));
const repaired = [];
await mapConcurrent(invalid, 8, async (model) => {
  const result = await findGsmarenaBdImage(model.name);
  if (!result) {
    model.imageUrl = null;
    model.sources = [...new Set([...(model.sources || []), "image-cleared:invalid-url-no-verified-replacement"])];
    return;
  }
  const key = result.imageUrl.replace(/^http:/, "https:");
  if (usedImages.has(key)) {
    model.imageUrl = null;
    model.sources = [...new Set([...(model.sources || []), "image-cleared:duplicate-url-shared-by-multiple-models"])];
    return;
  }
  usedImages.add(key);
  model.imageUrl = result.imageUrl;
  model.sources = [...new Set([...(model.sources || []), result.pageUrl, result.imageUrl])];
  repaired.push({ name: model.name, imageUrl: result.imageUrl, pageUrl: result.pageUrl });
});

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const images = models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:"));
const report = {
  invalidFound: invalid.length,
  repaired: repaired.length,
  models: models.length,
  modelsWithImage: images.length,
  uniqueImages: new Set(images).size,
  duplicateImageCount: images.length - new Set(images).size,
  missingImages: models.filter((model) => !model.imageUrl).length,
  stillInvalid: [],
  repairedSamples: repaired,
};
for (const model of models) {
  if (model.imageUrl && !(await isValidImage(model.imageUrl))) report.stillInvalid.push({ name: model.name, imageUrl: model.imageUrl });
}
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
