import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/huawei.json");
const tsPath = path.join(root, "prisma/catalog/huawei-catalog-enriched.ts");
const cacheDir = "/private/tmp/huawei-phonemore-cache";
fs.mkdirSync(cacheDir, { recursive: true });

const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";
const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));

function clean(value) {
  if (value == null) return null;
  const text = String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x2B;/g, "+")
    .replace(/\s+/g, " ")
    .trim();
  if (!text || /feature not registered/i.test(text)) return null;
  return text;
}

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/^huawei\s+/, "")
    .replace(/^honor\s+/, "")
    .replace(/^huawei\s+honor\s+/, "honor ")
    .replace(/[+]/g, " plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return normalizeName(value).replace(/\s+/g, "-");
}

function compactMemory(value) {
  const text = clean(value);
  if (!text) return null;
  const match = text.match(/(\d+(?:\.\d+)?)\s*(TB|GB|MB)\b/i);
  if (!match) return null;
  return `${match[1]}${match[2].toUpperCase()}`;
}

function cacheName(url) {
  return encodeURIComponent(url).replace(/%/g, "_") + ".html";
}

async function fetchCached(url) {
  const file = path.join(cacheDir, cacheName(url));
  if (fs.existsSync(file)) return fs.readFileSync(file, "utf8");
  const res = await fetch(url, { headers: { "user-agent": userAgent, accept: "text/html" } });
  const html = await res.text();
  fs.writeFileSync(file, html);
  await new Promise((resolve) => setTimeout(resolve, 250));
  return html;
}

function isUsablePage(html) {
  return html.includes("id=tb_specs") && !html.includes("404 - File or directory not found");
}

function rowValue(html, label) {
  const escaped = label.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(`<tr[^>]*>\\s*<td>\\s*${escaped}\\s*</td>\\s*<td[^>]*>([\\s\\S]*?)</td>\\s*</tr>`, "i");
  const match = html.match(re);
  return match ? clean(match[1]) : null;
}

function parseOptions(html, brandSlug) {
  const options = [];
  const re = /<option\s+value="([^"]+)"[^>]*>([^<]+)<\/option>/gi;
  for (const match of html.matchAll(re)) {
    const url = match[1];
    const label = clean(match[2]);
    if (url && label && url.startsWith(`/specs/${brandSlug}/`)) {
      options.push({ url: `https://www.phonemore.com${url}`, label });
    }
  }
  return options;
}

function parsePage(html, pageUrl, optionLabel = null) {
  const displayType = rowValue(html, "Display type");
  const screenSize = rowValue(html, "Screen size");
  const resolution = rowValue(html, "Display resolution");
  const chipset = rowValue(html, "Chipset");
  const ram = compactMemory(rowValue(html, "RAM memory"));
  const storage = compactMemory(rowValue(html, "Internal storage"));
  const battery = rowValue(html, "Battery capacity");
  const os = rowValue(html, "System version");
  const weight = rowValue(html, "Weight");
  const widthHeight = rowValue(html, "Size (width x height)");
  const depth = rowValue(html, "Depth");
  const colorText = (html.match(/Miscellaneous<\/td><td>([\s\S]*?)<\/td>/i)?.[1] || "").match(/Colors:\s*([^<]+)/i)?.[1];
  const colors = colorText ? colorText.split(/,|\/|;|\bor\b/i).map(clean).filter(Boolean) : [];
  return {
    pageUrl,
    display: [screenSize, displayType, resolution].filter(Boolean).join(" ") || null,
    processor: chipset ? chipset.replace(/^64bit:\s*/i, "") : null,
    ram,
    storage,
    battery: battery?.match(/\d{3,5}\s*mAh/i)?.[0] ?? battery,
    os,
    weight,
    dimensions: [widthHeight, depth].filter(Boolean).join(" x ") || null,
    colors,
    optionLabel,
  };
}

function candidateSlugs(modelName) {
  const base = slugify(modelName);
  const withoutHuawei = slugify(modelName.replace(/^Huawei\s+/i, ""));
  const without5g = withoutHuawei.replace(/-5g$/, "");
  const withoutYearParen = withoutHuawei.replace(/-(20\d{2})$/, "");
  return [...new Set([
    base,
    withoutHuawei,
    without5g,
    withoutYearParen,
    withoutHuawei.replace(/-4g$/, ""),
    withoutHuawei.replace(/-lte$/, ""),
    withoutHuawei.replace(/-plus/g, "-plus"),
    withoutHuawei.replace(/^honor-/, ""),
  ].filter(Boolean))];
}

function addVariant(model, parsed) {
  const storage = parsed.storage || model.specs.storage?.[0];
  const ram = parsed.ram || model.specs.ram;
  if (!storage && !ram && parsed.colors.length === 0) return 0;
  const colors = parsed.colors.length ? parsed.colors : [null];
  const seen = new Set(model.variants.map((variant) => [
    variant.ram || "",
    variant.storage || "",
    variant.color || "",
    variant.connectivity || "",
  ].join("|").toLowerCase()));
  let added = 0;
  for (const color of colors) {
    const key = [ram || "", storage || "", color || "", ""].join("|").toLowerCase();
    if (seen.has(key)) continue;
    seen.add(key);
    model.variants.push({
      name: [model.name, ram, storage, color].filter(Boolean).join(" "),
      ...(ram ? { ram } : {}),
      ...(storage ? { storage } : {}),
      ...(color ? { color } : {}),
      sourceBasis: "phonemore_simplified_storage_color",
    });
    added++;
  }
  return added;
}

function needsEnrichment(model) {
  return model.variants.length === 0
    || !model.specs.display
    || !model.specs.processor
    || !Array.isArray(model.specs.storage)
    || model.specs.storage.length === 0;
}

async function enrichModel(model) {
  if (!needsEnrichment(model)) return { status: "skipped", variants: 0, patchedSpecs: 0 };
  let baseHtml = null;
  let baseUrl = null;
  let brandSlug = "huawei";
  for (const currentBrand of ["huawei", "honor"]) {
    for (const slug of candidateSlugs(model.name)) {
      const url = `https://www.phonemore.com/specs/${currentBrand}/${slug}/`;
      const html = await fetchCached(url);
      if (isUsablePage(html)) {
        baseHtml = html;
        baseUrl = url;
        brandSlug = currentBrand;
        break;
      }
    }
    if (baseHtml) break;
  }
  if (!baseHtml) return { status: "not_found", variants: 0, patchedSpecs: 0 };

  const options = parseOptions(baseHtml, brandSlug);
  const pages = options.length ? options : [{ url: baseUrl, label: null }];
  let variants = 0;
  let patchedSpecs = 0;
  const sources = new Set(model.sources || []);
  sources.add(baseUrl);

  for (const page of pages.slice(0, 16)) {
    const html = page.url === baseUrl ? baseHtml : await fetchCached(page.url);
    if (!isUsablePage(html)) continue;
    const parsed = parsePage(html, page.url, page.label);
    sources.add(page.url);
    if (!model.specs.display && parsed.display) {
      model.specs.display = parsed.display;
      patchedSpecs++;
    }
    if (!model.specs.processor && parsed.processor) {
      model.specs.processor = parsed.processor;
      patchedSpecs++;
    }
    if ((!Array.isArray(model.specs.storage) || model.specs.storage.length === 0) && parsed.storage) {
      model.specs.storage = [parsed.storage];
      patchedSpecs++;
    } else if (Array.isArray(model.specs.storage) && parsed.storage && !model.specs.storage.includes(parsed.storage)) {
      model.specs.storage.push(parsed.storage);
    }
    if (!model.specs.ram && parsed.ram) model.specs.ram = parsed.ram;
    if (!model.specs.battery && parsed.battery) model.specs.battery = parsed.battery;
    if (!model.specs.os && parsed.os) model.specs.os = parsed.os;
    if (!model.specs.weight && parsed.weight) model.specs.weight = parsed.weight;
    if (!model.specs.dimensions && parsed.dimensions) model.specs.dimensions = parsed.dimensions;
    variants += addVariant(model, parsed);
  }

  model.sources = [...sources];
  return { status: "enriched", variants, patchedSpecs };
}

function fillRemaining(model) {
  let patched = 0;
  if (!model.specs.display) {
    model.specs.display = "Not specified";
    patched++;
  }
  if (!model.specs.processor) {
    model.specs.processor = "Not specified";
    patched++;
  }
  if (!Array.isArray(model.specs.storage) || model.specs.storage.length === 0) {
    model.specs.storage = ["Not specified"];
    patched++;
  }
  if (model.variants.length === 0) {
    model.variants.push({
      name: `${model.name} Base configuration`,
      storage: model.specs.storage[0],
      sourceBasis: "fallback_public_model_base_configuration",
    });
    patched++;
  }
  return patched;
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

let enriched = 0;
let notFound = 0;
let addedVariants = 0;
let patchedSpecs = 0;
let fallbackPatched = 0;

for (const family of brand.families) {
  for (const model of family.models) {
    const result = await enrichModel(model);
    if (result.status === "enriched") {
      enriched++;
      addedVariants += result.variants;
      patchedSpecs += result.patchedSpecs;
    } else if (result.status === "not_found") {
      notFound++;
    }
    fallbackPatched += fillRemaining(model);
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs();

const models = brand.families.flatMap((family) => family.models.map((model) => ({ family: family.name, ...model })));
const variants = models.flatMap((model) => model.variants.map((variant) => ({ family: model.family, model: model.name, ...variant })));
console.log(JSON.stringify({
  enriched,
  notFound,
  addedVariants,
  patchedSpecs,
  fallbackPatched,
  families: brand.families.length,
  models: models.length,
  variants: variants.length,
  missingDisplay: models.filter((model) => !model.specs.display).length,
  missingProcessor: models.filter((model) => !model.specs.processor).length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0).length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
}, null, 2));
