import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_huawei_full_public_phone_catalog_v2.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/huawei.json");
const tsPath = path.join(root, "prisma/catalog/huawei-catalog-enriched.ts");
const reportPath = "/private/tmp/huawei-phone-catalog-build-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&#x2B;/g, "+")
    .replace(/&Prime;|&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeName(value) {
  return decodeHtml(value)
    .toLowerCase()
    .replace(/^huawei\s+/, "")
    .replace(/^honor\s+/, "")
    .replace(/^huawei\s+honor\s+/, "honor ")
    .replace(/\b5g\b/g, "")
    .replace(/[+]/g, " plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function nameKeys(value) {
  const base = normalizeName(value);
  if (!base) return [];
  return [...new Set([
    base,
    base.replace(/^honor /, ""),
    `honor ${base}`.replace(/\s+/g, " "),
  ].filter(Boolean))];
}

function stripTitleToName(title) {
  const clean = decodeHtml(title);
  const announced = clean.split(/\.\s*Announced\b/i)[0] || clean;
  return announced
    .replace(/\s+Android smartphone$/i, "")
    .replace(/\s+smartphone$/i, "")
    .replace(/\s+Feature phone$/i, "")
    .replace(/\s+phone$/i, "")
    .replace(/\s+tablet$/i, "")
    .trim();
}

function parseListing(html) {
  const records = [];
  const re = /<li><a href="([^"]+)"><img src=([^ >]+)[^>]*title="([^"]+)"[^>]*><strong><span>(.*?)<\/span><\/strong><\/a><\/li>/gi;
  for (const match of html.matchAll(re)) {
    const href = decodeHtml(match[1]);
    const imageUrl = decodeHtml(match[2]).replace(/^\/\//, "https://");
    const title = decodeHtml(match[3]);
    const titleName = stripTitleToName(title);
    const displayName = decodeHtml(match[4]).replace(/\s+/g, " ").trim();
    records.push({
      href: `https://www.gsmarena.com/${href}`,
      imageUrl,
      title,
      names: [...new Set([titleName, `Huawei ${displayName}`, `Honor ${displayName}`, displayName].filter(Boolean))],
    });
  }
  return records;
}

function parseSpecsFromTitle(title) {
  const specs = {};
  const display = title.match(/Features\s+([^,.]+?)\s+display/i)?.[1];
  const processor = title.match(/display,\s*([^,.]+?)\s+chipset/i)?.[1];
  const battery = title.match(/(\d{3,5}\s*mAh)\s+battery/i)?.[1];
  const storage = title.match(/(\d+(?:GB|TB))\s+storage/i)?.[1];
  const ram = title.match(/(\d+(?:GB|MB))\s+RAM/i)?.[1];
  if (display) specs.display = `${display} display`;
  if (processor) specs.processor = processor;
  if (battery) specs.battery = battery;
  if (storage) specs.storage = [storage];
  if (ram) specs.ram = ram;
  return specs;
}

function parseReleaseYearFromTitle(title) {
  const year = title.match(/Announced\s+[A-Za-z]+\s+(\d{4})/i)?.[1]
    ?? title.match(/Announced\s+(\d{4})/i)?.[1];
  return year ? Number(year) : null;
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { "user-agent": userAgent, accept: "text/html" } });
  if (!res.ok) throw new Error(`${url} returned ${res.status}`);
  return res.text();
}

async function isValidImage(url) {
  if (!url) return false;
  const res = await fetch(url, {
    method: "HEAD",
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  const type = res?.headers.get("content-type") || "";
  return Boolean(res?.ok && type.startsWith("image/"));
}

async function scrapeBrandListings() {
  const index = new Map();
  const records = [];
  const brands = [
    { first: "https://www.gsmarena.com/huawei-phones-58.php", page: (n) => `https://www.gsmarena.com/huawei-phones-f-58-0-p${n}.php`, pages: 9 },
    { first: "https://www.gsmarena.com/honor-phones-121.php", page: (n) => `https://www.gsmarena.com/honor-phones-f-121-0-p${n}.php`, pages: 8 },
  ];
  for (const brand of brands) {
    for (let page = 1; page <= brand.pages; page++) {
      const url = page === 1 ? brand.first : brand.page(page);
      const html = await fetchText(url).catch((error) => {
        console.warn(`Skipping ${url}: ${error.message}`);
        return null;
      });
      if (!html) continue;
      const pageRecords = parseListing(html);
      records.push(...pageRecords);
      for (const record of pageRecords) {
        for (const name of record.names) {
          for (const key of nameKeys(name)) {
            if (key && !index.has(key)) index.set(key, record);
          }
        }
      }
      await new Promise((resolve) => setTimeout(resolve, 200));
    }
  }
  return { records, index };
}

function cleanVariant(modelName, rawVariant) {
  if (!rawVariant || typeof rawVariant !== "object") return null;
  const variant = rawVariant;
  const ram = typeof variant.ram === "string" ? variant.ram.trim() : "";
  const storage = typeof variant.storage === "string" ? variant.storage.trim() : "";
  const color = typeof variant.color === "string" ? variant.color.trim() : "";
  const connectivity = typeof variant.connectivity === "string" ? variant.connectivity.trim() : "";
  if (!ram && !storage && !color && !connectivity) return null;
  return {
    name: [modelName, ram, storage, color, connectivity].filter(Boolean).join(" "),
    ...(ram ? { ram } : {}),
    ...(storage ? { storage } : {}),
    ...(color ? { color } : {}),
    ...(connectivity ? { connectivity } : {}),
    sourceBasis: "simplified_storage_color_network",
  };
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Huawei phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/huawei.json.\n */\n\nexport type HuaweiEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type HuaweiEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type HuaweiEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: HuaweiEnrichedModelSpecs;\n  variants: HuaweiEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type HuaweiEnrichedFamily = {\n  name: string;\n  models: HuaweiEnrichedModel[];\n};\n\nexport const HUAWEI_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: HuaweiEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const huaweiSource = source.brands.find((brand) => brand.name === "Huawei");
if (!huaweiSource) throw new Error("Huawei brand not found in source file");

const { records, index } = await scrapeBrandListings();
const brand = {
  name: "Huawei",
  sortOrder: 9,
  aliases: [],
  logoUrl: huaweiSource.logo_url ?? "https://logo.clearbit.com/huawei.com",
  families: [],
};

let matchedImages = 0;
let keptValidImages = 0;
let clearedImages = 0;
let patchedSpecs = 0;
const unmatched = [];

for (const sourceFamily of huaweiSource.families) {
  const family = { name: sourceFamily.name, models: [] };
  for (const sourceModel of sourceFamily.models) {
    const specs = { ...(sourceModel.specs ?? {}) };
    const candidates = [sourceModel.name, ...(sourceModel.aliases ?? [])].flatMap(nameKeys);
    const record = candidates.map((candidate) => index.get(candidate)).find(Boolean);
    let imageUrl = sourceModel.image_url ?? null;
    const sources = new Set(sourceModel.sources ?? []);

    if (record) {
      imageUrl = record.imageUrl;
      sources.add(record.href);
      matchedImages++;
      const titleSpecs = parseSpecsFromTitle(record.title);
      for (const [key, value] of Object.entries(titleSpecs)) {
        if (key === "storage") {
          if (!Array.isArray(specs.storage) || specs.storage.length === 0) {
            specs.storage = value;
            patchedSpecs++;
          }
        } else if (!specs[key]) {
          specs[key] = value;
          patchedSpecs++;
        }
      }
      if (!sourceModel.release_year) {
        sourceModel.release_year = parseReleaseYearFromTitle(record.title);
      }
    }

    if (imageUrl && !(await isValidImage(imageUrl))) {
      imageUrl = null;
      clearedImages++;
    } else if (imageUrl) {
      keptValidImages++;
    }

    if (!record && !imageUrl) {
      unmatched.push({ family: sourceFamily.name, name: sourceModel.name });
    }

    const compacted = new Map();
    for (const rawVariant of sourceModel.variants ?? []) {
      const variant = cleanVariant(sourceModel.name, rawVariant);
      if (!variant) continue;
      const key = [variant.ram ?? "", variant.storage ?? "", variant.color ?? "", variant.connectivity ?? ""].join("|").toLowerCase();
      if (!compacted.has(key)) compacted.set(key, variant);
    }

    family.models.push({
      name: sourceModel.name,
      aliases: sourceModel.aliases ?? [],
      releaseYear: sourceModel.release_year ?? null,
      imageUrl,
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
      variants: Array.from(compacted.values()),
      sources: Array.from(sources),
    });
  }
  brand.families.push(family);
}

fs.mkdirSync(path.dirname(brandPath), { recursive: true });
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const models = brand.families.flatMap((family) => family.models.map((model) => ({ family: family.name, ...model })));
const variants = models.flatMap((model) => model.variants.map((variant) => ({ family: model.family, model: model.name, ...variant })));
const report = {
  listingRecords: records.length,
  indexedNames: index.size,
  families: brand.families.length,
  models: models.length,
  variants: variants.length,
  matchedImages,
  keptValidImages,
  clearedImages,
  missingImages: models.filter((model) => !model.imageUrl).length,
  patchedSpecs,
  missingDisplay: models.filter((model) => !model.specs.display).length,
  missingProcessor: models.filter((model) => !model.specs.processor).length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0).length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
  unmatched: unmatched.slice(0, 200),
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify({ ...report, reportPath }, null, 2));
