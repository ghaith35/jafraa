import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_infinix_full_public_phone_catalog_v3_source_verified_variants.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/infinix.json");
const tsPath = path.join(root, "prisma/catalog/infinix-catalog-enriched.ts");
const reportPath = "/private/tmp/infinix-phone-catalog-build-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const FAMILY_ORDER = ["Infinix GT", "Infinix Zero", "Infinix Note", "Infinix Hot", "Infinix S", "Infinix Smart"];
const TABLET_NAMES = new Set(["Infinix Xpad", "Infinix Xpad 20", "Infinix Xpad 20 Pro", "Infinix Xpad GT"].map(normalizeName));

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
    .replace(/^infinix\s+/, "")
    .replace(/\b4g\b/g, "")
    .replace(/\b5g\b/g, "")
    .replace(/[+]/g, " plus ")
    .replace(/([a-z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-z])/g, "$1 $2")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function slugify(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function familyFor(name) {
  const normalized = normalizeName(name);
  if (normalized.startsWith("gt ")) return "Infinix GT";
  if (normalized.startsWith("zero ")) return "Infinix Zero";
  if (normalized.startsWith("note ")) return "Infinix Note";
  if (normalized.startsWith("hot ") || normalized === "hot") return "Infinix Hot";
  if (normalized.startsWith("smart ") || normalized === "smart") return "Infinix Smart";
  if (normalized.startsWith("s") || normalized.startsWith("hot s")) return "Infinix S";
  return "Infinix Hot";
}

function stripTitleToName(title) {
  const clean = decodeHtml(title);
  const announced = clean.split(/\.\s*Announced\b/i)[0] || clean;
  return announced
    .replace(/\s+Android smartphone$/i, "")
    .replace(/\s+smartphone$/i, "")
    .replace(/\s+phone$/i, "")
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
    const displayName = `Infinix ${decodeHtml(match[4]).replace(/\s+/g, " ").trim()}`;
    const name = titleName.toLowerCase().startsWith("infinix ") ? titleName : displayName;
    records.push({
      name,
      href: `https://www.gsmarena.com/${href}`,
      imageUrl,
      title,
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

function splitMemory(value) {
  if (!value) return [];
  return String(value)
    .split(/[\/,]| or /i)
    .map((part) => part.trim())
    .filter(Boolean);
}

function compactVariants(modelName, specs, variants) {
  const map = new Map();
  for (const raw of variants || []) {
    if (!raw || typeof raw !== "object") continue;
    const ram = typeof raw.ram === "string" ? raw.ram.trim() : "";
    const storage = typeof raw.storage === "string" ? raw.storage.trim() : "";
    const color = typeof raw.color === "string" ? raw.color.trim() : "";
    const connectivity = typeof raw.connectivity === "string" ? raw.connectivity.trim() : "";
    if (!ram && !storage && !color && !connectivity) continue;
    const key = [ram, storage, color, connectivity].join("|").toLowerCase();
    if (!map.has(key)) {
      map.set(key, {
        name: [modelName, ram, storage, color, connectivity].filter(Boolean).join(" "),
        ...(ram ? { ram } : {}),
        ...(storage ? { storage } : {}),
        ...(color ? { color } : {}),
        ...(connectivity ? { connectivity } : {}),
        sourceBasis: "simplified_storage_color_network",
      });
    }
  }

  if (map.size === 0) {
    const rams = splitMemory(specs.ram);
    const storages = Array.isArray(specs.storage) ? specs.storage.filter(Boolean) : [];
    for (const ram of rams.length ? rams : [""]) {
      for (const storage of storages.length ? storages : [""]) {
        if (!ram && !storage) continue;
        const key = [ram, storage, "", ""].join("|").toLowerCase();
        map.set(key, {
          name: [modelName, ram, storage].filter(Boolean).join(" "),
          ...(ram ? { ram } : {}),
          ...(storage ? { storage } : {}),
          sourceBasis: "derived_from_model_specs",
        });
      }
    }
  }

  if (map.size === 0) {
    map.set("base", {
      name: `${modelName} Base configuration`,
      storage: specs.storage?.[0] || "Not specified",
      sourceBasis: "fallback_public_model_base_configuration",
    });
  }

  return Array.from(map.values());
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

function imageCandidateSlugs(modelName) {
  const base = slugify(modelName);
  const noBrand = slugify(modelName.replace(/^Infinix\s+/i, ""));
  const set = new Set();
  for (const slug of [base, noBrand]) {
    if (!slug) continue;
    for (const suffix of ["", "-new", "-1", "-2"]) {
      set.add(`${slug}${suffix}`);
      if (slug.startsWith("infinix-")) set.add(`${slug.slice("infinix-".length)}${suffix}`);
    }
    set.add(slug.replace(/-plus/g, "-plus"));
    set.add(slug.replace(/-nfc$/g, ""));
    set.add(slug.replace(/-india$/g, ""));
  }
  return [...set].filter(Boolean);
}

async function findImage(modelName, listingUrl = null) {
  if (listingUrl && await isValidImage(listingUrl)) return listingUrl;

  for (const slug of imageCandidateSlugs(modelName)) {
    const url = `https://fdn2.gsmarena.com/vv/bigpic/${slug}.jpg`;
    if (await isValidImage(url)) return url;
  }

  for (const slug of imageCandidateSlugs(modelName).slice(0, 6)) {
    const pageUrl = `https://www.gsmarena.com.bd/pictures/${slug}/`;
    const res = await fetch(pageUrl, { headers: { "user-agent": userAgent, accept: "text/html" } }).catch(() => null);
    if (!res?.ok) continue;
    const html = await res.text();
    const productImages = [...html.matchAll(/https?:\/\/www\.gsmarena\.com\.bd\/images\/products\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi)]
      .map((match) => match[0])
      .filter((url) => !url.includes("logo"));
    for (const imageUrl of productImages) {
      if (await isValidImage(imageUrl)) return imageUrl;
    }
  }

  return null;
}

async function fetchGsmarenaRecords() {
  const records = [];
  for (let page = 1; page <= 4; page++) {
    const url = page === 1
      ? "https://www.gsmarena.com/infinix-phones-119.php"
      : `https://www.gsmarena.com/infinix-phones-f-119-0-p${page}.php`;
    const html = await (await fetch(url, { headers: { "user-agent": userAgent, accept: "text/html" } })).text();
    records.push(...parseListing(html));
  }
  return records;
}

function normalizeModel(sourceModel, listingRecord = null) {
  const titleSpecs = listingRecord ? parseSpecsFromTitle(listingRecord.title) : {};
  const sourceSpecs = sourceModel.specs || {};
  const specs = {
    display: sourceSpecs.display ?? titleSpecs.display ?? "Not specified",
    processor: sourceSpecs.processor ?? titleSpecs.processor ?? "Not specified",
    ram: sourceSpecs.ram ?? titleSpecs.ram ?? null,
    storage: Array.isArray(sourceSpecs.storage) && sourceSpecs.storage.length > 0
      ? sourceSpecs.storage
      : titleSpecs.storage ?? ["Not specified"],
    battery: sourceSpecs.battery ?? titleSpecs.battery ?? null,
    os: sourceSpecs.os ?? null,
    weight: sourceSpecs.weight ?? null,
    dimensions: sourceSpecs.dimensions ?? null,
  };
  return {
    name: sourceModel.name,
    aliases: sourceModel.aliases || [],
    releaseYear: sourceModel.release_year ?? parseReleaseYearFromTitle(listingRecord?.title || "") ?? null,
    imageUrl: null,
    specs,
    variants: compactVariants(sourceModel.name, specs, sourceModel.variants || []),
    sources: [...new Set([...(sourceModel.sources || []), ...(listingRecord ? [listingRecord.href] : [])])],
  };
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Infinix phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/infinix.json.\n */\n\nexport type InfinixEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type InfinixEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type InfinixEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: InfinixEnrichedModelSpecs;\n  variants: InfinixEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type InfinixEnrichedFamily = {\n  name: string;\n  models: InfinixEnrichedModel[];\n};\n\nexport const INFINIX_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: InfinixEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceBrand = source.brands.find((brand) => brand.name === "Infinix");
if (!sourceBrand) throw new Error("Infinix brand not found");

const gsmarenaRecords = await fetchGsmarenaRecords();
const recordByName = new Map();
for (const record of gsmarenaRecords) {
  if (TABLET_NAMES.has(normalizeName(record.name))) continue;
  recordByName.set(normalizeName(record.name), record);
}

const sourceModels = sourceBrand.families.flatMap((family) => family.models.map((model) => ({ ...model, family: family.name })));
const sourceByName = new Map(sourceModels.map((model) => [normalizeName(model.name), model]));

let addedFromGsmarena = 0;
for (const record of gsmarenaRecords) {
  const key = normalizeName(record.name);
  if (TABLET_NAMES.has(key) || sourceByName.has(key)) continue;
  sourceModels.push({
    name: record.name,
    aliases: [],
    release_year: parseReleaseYearFromTitle(record.title),
    release_date: null,
    image_url: record.imageUrl,
    specs: parseSpecsFromTitle(record.title),
    variants: [],
    sources: [record.href],
    family: familyFor(record.name),
  });
  sourceByName.set(key, sourceModels[sourceModels.length - 1]);
  addedFromGsmarena++;
}

const brand = {
  name: "Infinix",
  sortOrder: 11,
  aliases: [],
  logoUrl: sourceBrand.logo_url ?? "https://logo.clearbit.com/infinixmobility.com",
  families: FAMILY_ORDER.map((name) => ({ name, models: [] })),
};
const familyMap = new Map(brand.families.map((family) => [family.name, family]));

let imagesFound = 0;
let imageFallbacks = 0;
const unresolvedImages = [];

for (const sourceModel of sourceModels) {
  const listingRecord = recordByName.get(normalizeName(sourceModel.name)) ?? null;
  const model = normalizeModel(sourceModel, listingRecord);
  model.imageUrl = await findImage(model.name, sourceModel.image_url ?? listingRecord?.imageUrl ?? null);
  if (model.imageUrl) {
    imagesFound++;
    model.sources = [...new Set([...(model.sources || []), model.imageUrl])];
  } else {
    unresolvedImages.push({ family: familyFor(model.name), name: model.name });
  }
  familyMap.get(familyFor(model.name))?.models.push(model);
}

for (const family of brand.families) {
  const fallbackImage = family.models.find((model) => model.imageUrl)?.imageUrl
    ?? brand.families.flatMap((item) => item.models).find((model) => model.imageUrl)?.imageUrl
    ?? null;
  for (const model of family.models) {
    if (model.imageUrl || !fallbackImage) continue;
    model.imageUrl = fallbackImage;
    model.sources = [...new Set([...(model.sources || []), `fallback:image-from-family:${family.name}`, fallbackImage])];
    imageFallbacks++;
  }
}

for (const family of brand.families) {
  family.models.sort((a, b) => (b.releaseYear ?? -1) - (a.releaseYear ?? -1) || a.name.localeCompare(b.name));
}

fs.mkdirSync(path.dirname(brandPath), { recursive: true });
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const models = brand.families.flatMap((family) => family.models.map((model) => ({ family: family.name, ...model })));
const variants = models.flatMap((model) => model.variants.map((variant) => ({ family: model.family, model: model.name, ...variant })));
const report = {
  addedFromGsmarena,
  families: brand.families.length,
  models: models.length,
  variants: variants.length,
  imagesFound,
  imageFallbacks,
  missingImages: models.filter((model) => !model.imageUrl).length,
  missingDisplay: models.filter((model) => !model.specs.display).length,
  missingProcessor: models.filter((model) => !model.specs.processor).length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0).length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
  unresolvedImages: unresolvedImages.slice(0, 200),
};
fs.writeFileSync("/private/tmp/infinix-phone-catalog-build-report.json", JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
