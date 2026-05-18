import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/huawei.json");
const tsPath = path.join(root, "prisma/catalog/huawei-catalog-enriched.ts");
const reportPath = "/private/tmp/huawei-image-candidate-fix-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return normalizeName(value).replace(/\s+/g, "-");
}

function add(set, slug) {
  if (!slug) return;
  const clean = slug
    .replace(/--+/g, "-")
    .replace(/^-|-$/g, "")
    .trim();
  if (clean) set.add(clean);
}

function candidateSlugs(modelName) {
  const base = slugify(modelName);
  const noHuawei = slugify(modelName.replace(/^Huawei\s+/i, ""));
  const honor = slugify(modelName.replace(/^Huawei\s+Honor\s+/i, "Honor "));
  const noHonor = slugify(modelName.replace(/^Huawei\s+Honor\s+/i, ""));
  const set = new Set();

  for (const rootSlug of [base, noHuawei, honor, noHonor]) {
    add(set, rootSlug);
    add(set, rootSlug.replace(/-5g$/, ""));
    add(set, rootSlug.replace(/-4g$/, ""));
    add(set, rootSlug.replace(/-plus/g, "-plus"));
    add(set, rootSlug.replace(/-pro-plus/g, "-pro-plus"));
    add(set, rootSlug.replace(/-rs-ultimate-design/g, "-rs"));
    add(set, rootSlug.replace(/-rs-porsche-design/g, "-rs-porsche"));
    add(set, rootSlug.replace(/-porsche-design/g, "-porsche-design"));
    add(set, rootSlug.replace(/-ultimate-design/g, ""));
    add(set, rootSlug.replace(/-prime-(20\\d{2})$/g, "-prime-$1"));
  }

  const suffixes = ["", "-new", "-1", "-2", "-official", "-ofic"];
  const expanded = new Set();
  for (const slug of set) {
    for (const suffix of suffixes) add(expanded, `${slug}${suffix}`);
    if (slug.startsWith("huawei-")) {
      for (const suffix of suffixes) add(expanded, `${slug.slice("huawei-".length)}${suffix}`);
    }
    if (slug.startsWith("huawei-honor-")) {
      for (const suffix of suffixes) add(expanded, `honor-${slug.slice("huawei-honor-".length)}${suffix}`);
    }
  }

  return [...expanded];
}

async function isValidImage(url) {
  const res = await fetch(url, {
    method: "HEAD",
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  const type = res?.headers.get("content-type") || "";
  return Boolean(res?.ok && type.startsWith("image/"));
}

async function findImage(modelName) {
  for (const slug of candidateSlugs(modelName)) {
    const url = `https://fdn2.gsmarena.com/vv/bigpic/${slug}.jpg`;
    if (await isValidImage(url)) return url;
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
    const url = await findImage(model.name);
    if (url) {
      model.imageUrl = url;
      const sources = new Set(model.sources || []);
      sources.add(url);
      model.sources = [...sources];
      changes.push({ family: family.name, name: model.name, imageUrl: url });
    } else {
      unresolved.push({ family: family.name, name: model.name });
    }
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs();
fs.writeFileSync(reportPath, JSON.stringify({ changed: changes.length, unresolved: unresolved.length, changes, unresolved }, null, 2) + "\n");
console.log(JSON.stringify({ changed: changes.length, unresolved: unresolved.length, reportPath }, null, 2));
