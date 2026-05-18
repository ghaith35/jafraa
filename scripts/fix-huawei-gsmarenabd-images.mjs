import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/huawei.json");
const tsPath = path.join(root, "prisma/catalog/huawei-catalog-enriched.ts");
const reportPath = "/private/tmp/huawei-gsmarenabd-image-fix-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^huawei\s+honor\s+/, "honor ")
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function candidateSlugs(name) {
  const base = slugify(name);
  const noHuawei = slugify(name.replace(/^Huawei\s+/i, ""));
  const honor = slugify(name.replace(/^Huawei\s+Honor\s+/i, "Honor "));
  return [...new Set([
    base,
    noHuawei,
    honor,
    base.replace(/-5g$/, ""),
    noHuawei.replace(/-5g$/, ""),
    honor.replace(/-5g$/, ""),
  ].filter(Boolean))];
}

async function isValidImage(url) {
  const res = await fetch(url, {
    method: "HEAD",
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  const type = res?.headers.get("content-type") || "";
  return Boolean(res?.ok && type.startsWith("image/"));
}

async function findImage(name) {
  for (const slug of candidateSlugs(name)) {
    const pageUrl = `https://www.gsmarena.com.bd/pictures/${slug}/`;
    const res = await fetch(pageUrl, { headers: { "user-agent": userAgent, accept: "text/html" } }).catch(() => null);
    if (!res?.ok) continue;
    const html = await res.text();
    const productImages = [...html.matchAll(/https?:\/\/www\.gsmarena\.com\.bd\/images\/products\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi)]
      .map((match) => match[0])
      .filter((url) => !url.includes("logo"));
    for (const imageUrl of productImages) {
      if (await isValidImage(imageUrl)) return { imageUrl, pageUrl };
    }
  }
  return null;
}

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
const unresolved = [];

for (const family of brand.families) {
  for (const model of family.models) {
    if (model.imageUrl) continue;
    const found = await findImage(model.name);
    if (found) {
      model.imageUrl = found.imageUrl;
      const sources = new Set(model.sources || []);
      sources.add(found.pageUrl);
      sources.add(found.imageUrl);
      model.sources = [...sources];
      changes.push({ family: family.name, name: model.name, imageUrl: found.imageUrl });
    } else {
      unresolved.push({ family: family.name, name: model.name });
    }
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs();
fs.writeFileSync(reportPath, JSON.stringify({ changed: changes.length, unresolved: unresolved.length, changes, unresolved }, null, 2) + "\n");
console.log(JSON.stringify({ changed: changes.length, unresolved: unresolved.length, reportPath }, null, 2));
