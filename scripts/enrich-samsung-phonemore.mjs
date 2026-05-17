import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/samsung.json");
const tsPath = path.join(root, "prisma/catalog/samsung-catalog-enriched.ts");
const cacheDir = "/private/tmp/samsung-phonemore-cache";
fs.mkdirSync(cacheDir, { recursive: true });

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

function normalizeName(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/samsung\s+/g, "")
    .replace(/[+]/g, " plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return normalizeName(value).replace(/\s+/g, "-");
}

function clean(value) {
  if (value == null) return null;
  const text = String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&#x2B;/g, "+")
    .replace(/&#xF1;/g, "n")
    .replace(/\s+/g, " ")
    .trim();
  if (!text || /feature not registered/i.test(text)) return null;
  return text;
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
  await new Promise((resolve) => setTimeout(resolve, 550));
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

function parseOptions(html) {
  const options = [];
  const re = /<option\s+value="([^"]+)"[^>]*>([^<]+)<\/option>/gi;
  for (const match of html.matchAll(re)) {
    const url = match[1];
    const label = clean(match[2]);
    if (url && label && url.startsWith("/specs/samsung/")) {
      options.push({ url: `https://www.phonemore.com${url}`, label });
    }
  }
  return options;
}

function parsePage(html, modelName, pageUrl, optionLabel = null) {
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
  const otherNames = rowValue(html, "Other model names");
  const model = rowValue(html, "Model") || optionLabel;
  const colorText = (html.match(/Miscellaneous<\/td><td>([\s\S]*?)<\/td>/i)?.[1] || "").match(/Colors:\s*([^<]+)/i)?.[1];
  const colors = colorText
    ? colorText.split(/,|\/|;|\bor\b/i).map(clean).filter(Boolean)
    : [];
  const modelNumbers = new Set();
  for (const source of [model, otherNames, optionLabel]) {
    if (!source) continue;
    for (const match of source.matchAll(/\b(?:SM|GT|SGH|SCH|SPH|SC|SHV|SHW|SH|EK|YP|W)[-A-Z0-9/]+(?:\/DS)?\b/g)) {
      modelNumbers.add(match[0]);
    }
  }
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
    modelNumbers: [...modelNumbers],
    variantLabel: optionLabel,
    modelName,
  };
}

function candidateSlugs(modelName) {
  const base = slugify(modelName);
  const without5g = base.replace(/-5g$/, "");
  const candidates = new Set([base, without5g]);
  const withoutYear = base.replace(/-(20\d{2})$/, "");
  candidates.add(withoutYear);
  candidates.add(base.replace(/-4g$/, ""));
  candidates.add(base.replace(/-lte$/, ""));
  candidates.add(base.replace(/-plus-/g, "-plus-"));
  candidates.add(base.replace(/note(\d+)/, "note-$1"));
  candidates.add(base.replace(/fold(\d+)/, "fold-$1"));
  candidates.add(base.replace(/flip(\d+)/, "flip-$1"));
  candidates.add(base.replace(/xcover(\d+)/, "xcover-$1"));
  candidates.add(base.replace(/-ii\b/g, "-2"));
  candidates.add(base.replace(/-iii\b/g, "-3"));
  candidates.add(base.replace(/-iv\b/g, "-4"));
  candidates.add(base.replace(/-duos$/, ""));
  candidates.add(base.replace(/-i\d{3,4}\b/g, ""));
  candidates.add(base.replace(/^i\d{3,4}-/, ""));
  candidates.add(base.replace(/^b\d{3,4}-/, ""));
  candidates.add(base.replace(/^s\d{3,4}-/, ""));
  candidates.add(base.replace(/^d\d{3,4}-/, ""));
  return [...candidates].filter(Boolean);
}

function needsEnrichment(model) {
  return model.variants.length === 0
    || !model.specs.display
    || !model.specs.processor
    || !Array.isArray(model.specs.storage)
    || model.specs.storage.length === 0;
}

function addVariant(model, parsed) {
  if (!parsed.ram || !parsed.storage) return 0;
  const colors = parsed.colors.length ? parsed.colors : [null];
  const modelNumbers = parsed.modelNumbers.length ? parsed.modelNumbers : [null];
  const seen = new Set(model.variants.map((variant) => [
    variant.ram,
    variant.storage,
    variant.color || "",
    variant.modelNumber || "",
  ].join("|").toLowerCase()));
  let added = 0;
  for (const color of colors) {
    for (const modelNumber of modelNumbers) {
      const key = [parsed.ram, parsed.storage, color || "", modelNumber || ""].join("|").toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      const variant = {
        name: [model.name, parsed.ram, parsed.storage, color, modelNumber].filter(Boolean).join(" "),
        ...(parsed.processor ? { processor: parsed.processor } : {}),
        ram: parsed.ram,
        storage: parsed.storage,
        ...(color ? { color } : {}),
        ...(modelNumber ? { modelNumber } : {}),
        sourceBasis: "phonemore_specs",
      };
      model.variants.push(variant);
      added++;
    }
  }
  return added;
}

async function enrichModel(model) {
  if (!needsEnrichment(model)) return { status: "skipped", variants: 0 };
  let baseHtml = null;
  let baseUrl = null;
  for (const slug of candidateSlugs(model.name)) {
    const url = `https://www.phonemore.com/specs/samsung/${slug}/`;
    const html = await fetchCached(url);
    if (isUsablePage(html)) {
      baseHtml = html;
      baseUrl = url;
      break;
    }
  }
  if (!baseHtml) return { status: "not_found", variants: 0 };

  const options = parseOptions(baseHtml);
  const pages = options.length ? options : [{ url: baseUrl, label: null }];
  let variants = 0;
  let patchedSpecs = 0;
  const sources = new Set(model.sources || []);
  sources.add(baseUrl);

  for (const page of pages.slice(0, 24)) {
    const html = page.url === baseUrl ? baseHtml : await fetchCached(page.url);
    if (!isUsablePage(html)) continue;
    const parsed = parsePage(html, model.name, page.url, page.label);
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

function regenerateTs() {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Samsung phone catalog with detailed specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/samsung.json.\n */\n\nexport type SamsungEnrichedModelVariant = {\n  name: string;\n  processor?: string;\n  ram: string;\n  storage: string;\n  color?: string;\n  modelNumber?: string;\n  connectivity?: string;\n  market?: string;\n  sourceBasis?: string;\n};\n\nexport type SamsungEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type SamsungEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: SamsungEnrichedModelSpecs;\n  variants: SamsungEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type SamsungEnrichedFamily = {\n  name: string;\n  models: SamsungEnrichedModel[];\n};\n\nexport const SAMSUNG_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: SamsungEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

let enriched = 0;
let notFound = 0;
let addedVariants = 0;
for (const family of brand.families) {
  for (const model of family.models) {
    if (!needsEnrichment(model)) continue;
    const result = await enrichModel(model);
    if (result.status === "enriched") {
      enriched++;
      addedVariants += result.variants;
    } else if (result.status === "not_found") {
      notFound++;
    }
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
  families: brand.families.length,
  models: models.length,
  variants: variants.length,
  missingDisplay: models.filter((model) => !model.specs.display).length,
  missingProcessor: models.filter((model) => !model.specs.processor).length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0).length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
  badVariants: variants.filter((variant) => !variant.name || !variant.ram || !variant.storage).length,
}, null, 2));
