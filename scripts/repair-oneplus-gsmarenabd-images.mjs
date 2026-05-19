import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/oneplus.json");
const tsPath = path.join(root, "prisma/catalog/oneplus-catalog-enriched.ts");
const reportPath = "/private/tmp/oneplus-gsmarenabd-image-repair-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const PAGE_SLUG_OVERRIDES = new Map(Object.entries({
  "OnePlus 10R 150W": ["oneplus-10r"],
  "OnePlus 7T Pro 5G McLaren": ["oneplus-7t-pro-5g-mclaren-edition"],
  "OnePlus Ace Racing": ["oneplus-ace-racing-edition"],
}));

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^one\s+plus\b/, "oneplus")
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function candidatePageSlugs(modelName) {
  const base = slugify(modelName);
  const no5g = slugify(modelName.replace(/\b5g\b/gi, ""));
  const noEdition = slugify(modelName.replace(/\b(?:genshin impact|x genshin impact|marble odyssey|jupiter rock|cyberpunk 2077|extreme edition|apex edition|pac-man edition|mclaren edition)\b/gi, ""));
  return [...new Set([
    ...(PAGE_SLUG_OVERRIDES.get(modelName) || []),
    base,
    no5g,
    noEdition,
    base.replace(/nord-ce-(\d)/, "nord-ce$1"),
    no5g.replace(/nord-ce-(\d)/, "nord-ce$1"),
    base.replace(/ace-(\d)/, "ace$1"),
    no5g.replace(/ace-(\d)/, "ace$1"),
  ].filter(Boolean))];
}

async function isValidImage(url) {
  const res = await fetch(url, {
    method: "HEAD",
    signal: AbortSignal.timeout(8000),
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  return Boolean(res?.ok && (res.headers.get("content-type") || "").startsWith("image/"));
}

async function findGsmarenaBdImage(modelName) {
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
  const ts = `/**\n * Enriched OnePlus phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/oneplus.json.\n */\n\nexport type OnePlusEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type OnePlusEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n  colors?: string | null;\n};\n\nexport type OnePlusEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: OnePlusEnrichedModelSpecs;\n  variants: OnePlusEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type OnePlusEnrichedFamily = {\n  name: string;\n  models: OnePlusEnrichedModel[];\n};\n\nexport const ONEPLUS_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: OnePlusEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const models = brand.families.flatMap((family) => family.models);
const usedImages = new Set(models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:")));
const missing = models.filter((model) => !model.imageUrl);
const repaired = [];

await mapConcurrent(missing, 8, async (model) => {
  const result = await findGsmarenaBdImage(model.name);
  if (!result) return;
  const key = result.imageUrl.replace(/^http:/, "https:");
  if (usedImages.has(key)) return;
  usedImages.add(key);
  model.imageUrl = result.imageUrl;
  model.sources = [...new Set([...(model.sources || []), result.pageUrl, result.imageUrl])];
  repaired.push({ name: model.name, imageUrl: result.imageUrl, pageUrl: result.pageUrl });
});

const byImage = new Map();
for (const model of models) {
  if (!model.imageUrl) continue;
  const key = String(model.imageUrl).replace(/^http:/, "https:");
  if (!byImage.has(key)) byImage.set(key, []);
  byImage.get(key).push(model.name);
}
for (const [imageUrl, names] of byImage) {
  if (names.length <= 1) continue;
  for (const model of models.filter((item) => String(item.imageUrl).replace(/^http:/, "https:") === imageUrl)) {
    model.imageUrl = null;
    model.sources = [...new Set([...(model.sources || []), "image-cleared:duplicate-url-shared-by-multiple-models"])];
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const finalImages = models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:"));
const report = {
  attempted: missing.length,
  repaired: repaired.length,
  models: models.length,
  modelsWithImage: finalImages.length,
  uniqueImages: new Set(finalImages).size,
  duplicateImageCount: finalImages.length - new Set(finalImages).size,
  missingImages: models.filter((model) => !model.imageUrl).length,
  repaired,
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
