import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_sony_full_public_phone_catalog_v1.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/sony.json");
const tsPath = path.join(root, "prisma/catalog/sony-catalog-enriched.ts");
const reportPath = "/private/tmp/sony-phone-catalog-build-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const FAMILY_ORDER = [
  "Xperia 1 / PRO",
  "Xperia 5",
  "Xperia 10 / Ace / 8",
  "Xperia X / XA / XZ / R / L",
  "Xperia Z",
  "Xperia C / E / M / T / 2012-2016",
  "Legacy Sony Ericsson Xperia",
  "Other Sony Ericsson Phones",
];

const dataFiles = [
  "/Users/ghaith/.cache/kagglehub/datasets/madajaswanth/phone-dataset-8461-phones/versions/1/AllPhones.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/willianoliveiragibin/phone-information-2024/versions/1/processed_data news.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/arwinneil/gsmarena-phone-dataset/versions/1/phone_dataset .csv",
];

const IMAGE_URL_OVERRIDES = new Map(Object.entries({}));

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let quoted = false;
  for (let index = 0; index < text.length; index++) {
    const char = text[index];
    const next = text[index + 1];
    if (quoted) {
      if (char === '"' && next === '"') {
        cell += '"';
        index++;
      } else if (char === '"') {
        quoted = false;
      } else {
        cell += char;
      }
    } else if (char === '"') {
      quoted = true;
    } else if (char === ",") {
      row.push(cell);
      cell = "";
    } else if (char === "\n") {
      row.push(cell);
      rows.push(row);
      row = [];
      cell = "";
    } else if (char !== "\r") {
      cell += char;
    }
  }
  if (cell || row.length) {
    row.push(cell);
    rows.push(row);
  }
  const headers = rows.shift() || [];
  return rows.map((values) => Object.fromEntries(headers.map((header, index) => [header, values[index] ?? ""])));
}

function clean(value) {
  return String(value ?? "").replace(/\s+/g, " ").replace(/^nan$/i, "").trim();
}

function normalizeName(value, { loose = false } = {}) {
  let normalized = clean(value)
    .toLowerCase()
    .replace(/^sony\s+ericsson\s+/, "")
    .replace(/^sony\s+/, "")
    .replace(/[+]/g, " plus ")
    .replace(/([a-z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-z])/g, "$1 $2")
    .replace(/\([^)]*\)/g, " ");
  if (loose) {
    normalized = normalized
      .replace(/\b(?:4g|5g|lte|global|india|china|international)\b/g, " ")
      .replace(/\b(?:edition|version|model|premium|transparent)\b/g, " ");
  }
  return normalized.replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

function slugify(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
    .replace(/\([^)]*\)/g, " ")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, "-");
}

function storageOptions(value) {
  const options = [...String(value || "").matchAll(/\b(\d+(?:GB|TB))\b(?=\s+(?:\d+(?:GB|MB)\s+RAM|storage|UFS|eMMC|ROM)|[,;]|$)/gi)]
    .map((match) => match[1].toUpperCase());
  if (options.length === 0 && /^\d+$/.test(clean(value))) options.push(`${clean(value)}GB`);
  return [...new Set(options)];
}

function ramOptions(value) {
  const options = [...String(value || "").matchAll(/\b(\d+(?:GB|MB))\s+RAM\b/gi)].map((match) => match[1].toUpperCase());
  if (options.length === 0 && /^\d+$/.test(clean(value))) options.push(`${clean(value)}GB`);
  return [...new Set(options)];
}

function variantsFromMemory(modelName, memory) {
  const variants = new Map();
  for (const match of String(memory || "").matchAll(/\b(\d+(?:GB|TB))\s+(\d+(?:GB|MB))\s+RAM\b/gi)) {
    const storage = match[1].toUpperCase();
    const ram = match[2].toUpperCase();
    variants.set(`${ram}|${storage}`, {
      name: `${modelName} ${ram} ${storage}`,
      ram,
      storage,
      sourceBasis: "kaggle_gsmarena_internal_memory",
    });
  }
  return [...variants.values()];
}

function isSonyPhoneName(name) {
  if (!/^sony(?:\s+ericsson)?\b/i.test(name)) return false;
  if (/\b(?:poco|pad|tablet|watch|band)\b/i.test(name)) return false;
  return true;
}

function recordFromAllPhones(row) {
  const name = clean(row.Name);
  if (!isSonyPhoneName(name)) return null;
  const memory = clean(row.Memory_Internalmemory);
  return {
    name,
    releaseYear: clean(row.Status).match(/\b(20\d{2}|19\d{2})\b/)?.[1] ? Number(clean(row.Status).match(/\b(20\d{2}|19\d{2})\b/)[1]) : null,
    specs: {
      display: [row.Display_Type, row.Display_Resolution].map(clean).filter(Boolean).join(", "),
      processor: clean(row.Platform_Chipset) || clean(row.Platform_Cpu),
      ram: ramOptions(memory).join(", ") || null,
      storage: storageOptions(memory),
      battery: clean(row.Battery_Type),
      os: clean(row.Platform_OS),
      weight: clean(row.Body_Weight),
      dimensions: clean(row.Body_Dimensions),
      colors: clean(row.Colors),
    },
    memory,
  };
}

function recordFromProcessed(row) {
  const name = clean(row.phone_model);
  if (!clean(row.phone_brand).toLowerCase().startsWith("sony") || !isSonyPhoneName(name)) return null;
  return {
    name,
    releaseYear: clean(row.Year) ? Number(clean(row.Year)) : null,
    specs: {
      display: [row.Display_Type, row.Display_Size ? `${row.Display_Size} inches` : "", row.Display_Resolution].map(clean).filter(Boolean).join(", "),
      processor: clean(row.Chipset) || clean(row.CPU),
      ram: ramOptions(row.ram).join(", ") || null,
      storage: storageOptions(row.storage),
      battery: clean(row.BATTERY),
      os: clean(row.OS),
      weight: clean(row.Weight),
      dimensions: clean(row.Dimensions),
      colors: clean(row.Colors),
    },
    memory: [row.storage ? `${row.storage}GB` : "", row.ram ? `${row.ram}GB RAM` : ""].filter(Boolean).join(" "),
  };
}

function recordFromLegacy(row) {
  if (!clean(row.brand).toLowerCase().startsWith("sony")) return null;
  const brandPrefix = clean(row.brand).toLowerCase().includes("ericsson") ? "Sony Ericsson" : "Sony";
  const name = `${brandPrefix} ${clean(row.model)}`;
  if (!isSonyPhoneName(name)) return null;
  return {
    name,
    releaseYear: clean(row.status).match(/\b(20\d{2}|19\d{2})\b/)?.[1] ? Number(clean(row.status).match(/\b(20\d{2}|19\d{2})\b/)[1]) : null,
    imageUrl: clean(row.img_url),
    specs: {
      display: [row.display_type, row.display_size, row.display_resolution].map(clean).filter(Boolean).join(", "),
      processor: clean(row.Chipset) || clean(row.CPU),
      ram: ramOptions(row.RAM).join(", ") || clean(row.RAM) || null,
      storage: storageOptions(row.internal_memory),
      battery: clean(row.battery),
      os: clean(row.OS),
      weight: clean(row.weight_g) ? `${clean(row.weight_g)} g` : null,
      dimensions: clean(row.dimentions),
      colors: clean(row.colors),
    },
    memory: clean(row.internal_memory),
  };
}

function loadDatasetRecords() {
  const records = [];
  for (const file of dataFiles) {
    if (!fs.existsSync(file)) continue;
    for (const row of parseCsv(fs.readFileSync(file, "utf8"))) {
      const record = file.includes("AllPhones")
        ? recordFromAllPhones(row)
        : file.includes("processed_data")
          ? recordFromProcessed(row)
          : recordFromLegacy(row);
      if (record) records.push(record);
    }
  }
  const byName = new Map();
  const byLooseName = new Map();
  for (const record of records) {
    byName.set(normalizeName(record.name), record);
    byLooseName.set(normalizeName(record.name, { loose: true }), record);
  }
  return { records, byName, byLooseName };
}

function imageCandidateSlugs(modelName) {
  const base = slugify(modelName);
  const noBrand = slugify(modelName.replace(/^sony\s+ericsson\s+/i, "").replace(/^sony\s+/i, ""));
  const set = new Set();
  const baseItems = [
    base,
    noBrand,
    noBrand ? `sony-${noBrand}` : "",
    noBrand ? `sony-ericsson-${noBrand}` : "",
  ];
  for (const item of baseItems) {
    if (!item) continue;
    for (const suffix of ["", "-", "--", "-1", "-2", "-new", "-5g", "-4g"]) set.add(`${item}${suffix}`);
    set.add(item.replace(/xperia-(\d+)-([ivx]+)/, "xperia-$1$2"));
    set.add(item.replace(/xperia-pro-i/, "xperia-pro-i"));
  }
  return [...set].filter(Boolean);
}

function pageCandidateSlugs(modelName) {
  return [...new Set([
    slugify(modelName),
    slugify(modelName.replace(/^sony\s+ericsson\s+/i, "").replace(/^sony\s+/i, "")),
    ...imageCandidateSlugs(modelName),
  ].filter(Boolean))];
}

async function isValidImage(url) {
  if (!url || !/^https?:\/\//i.test(url)) return false;
  const res = await fetch(url, {
    method: "HEAD",
    signal: AbortSignal.timeout(3000),
    headers: { "user-agent": userAgent, accept: "image/*,*/*" },
  }).catch(() => null);
  return Boolean(res?.ok && (res.headers.get("content-type") || "").startsWith("image/"));
}

async function findImage(modelName, preferred = null) {
  const override = IMAGE_URL_OVERRIDES.get(modelName);
  if (override && await isValidImage(override)) return { imageUrl: override, source: "gsmarena:override" };
  if (preferred && await isValidImage(preferred)) return { imageUrl: preferred, source: "kaggle:gsmarena-img-url" };
  for (const slug of imageCandidateSlugs(modelName)) {
    const url = `https://fdn2.gsmarena.com/vv/bigpic/${slug}.jpg`;
    if (await isValidImage(url)) return { imageUrl: url, source: "gsmarena:fdn2-bigpic-candidate" };
  }
  for (const slug of pageCandidateSlugs(modelName).slice(0, 3)) {
    const pageUrl = `https://www.gsmarena.com.bd/pictures/${slug}/`;
    const res = await fetch(pageUrl, {
      signal: AbortSignal.timeout(3500),
      headers: { "user-agent": userAgent, accept: "text/html,*/*" },
    }).catch(() => null);
    if (!res?.ok) continue;
    const html = await res.text();
    const images = [...html.matchAll(/https?:\/\/www\.gsmarena\.com\.bd\/images\/products\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/gi)]
      .map((match) => match[0])
      .filter((url) => !/logo|placeholder/i.test(url));
    for (const imageUrl of images) {
      if (await isValidImage(imageUrl)) return { imageUrl, source: pageUrl };
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

function ensureVariants(model) {
  if (Array.isArray(model.variants) && model.variants.length > 0) {
    return model.variants.map((variant) => ({
      name: variant.name || [model.name, variant.ram, variant.storage, variant.color, variant.connectivity].filter(Boolean).join(" "),
      ...variant,
      sourceBasis: variant.sourceBasis || "simplified_storage_color_network",
    }));
  }
  const storages = Array.isArray(model.specs.storage) && model.specs.storage.length ? model.specs.storage : ["Market-dependent storage"];
  const rams = clean(model.specs.ram).split(/,\s*|\/| or /i).map((item) => item.trim()).filter(Boolean);
  return storages.flatMap((storage) => (rams.length ? rams : [""]).map((ram) => ({
    name: [model.name, ram, storage].filter(Boolean).join(" "),
    ...(ram ? { ram } : {}),
    storage,
    sourceBasis: "derived_from_model_specs",
  })));
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Sony phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/sony.json.\n */\n\nexport type SonyEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type SonyEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n  colors?: string | null;\n};\n\nexport type SonyEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: SonyEnrichedModelSpecs;\n  variants: SonyEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type SonyEnrichedFamily = {\n  name: string;\n  models: SonyEnrichedModel[];\n};\n\nexport const SONY_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: SonyEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceBrand = source.brands.find((brand) => clean(brand.name).toLowerCase() === "sony");
if (!sourceBrand) throw new Error("Sony brand not found");

const { records, byName, byLooseName } = loadDatasetRecords();
const brand = {
  name: "Sony",
  sortOrder: 18,
  aliases: ["SONY", "Sony Ericsson"],
  logoUrl: sourceBrand.logo_url ?? "https://logo.clearbit.com/sony.com",
  families: FAMILY_ORDER.map((name) => ({ name, models: [] })),
};
const familyMap = new Map(brand.families.map((family) => [family.name, family]));

let specMatches = 0;
for (const family of sourceBrand.families) {
  for (const sourceModel of family.models || []) {
    const record = byName.get(normalizeName(sourceModel.name)) ?? byLooseName.get(normalizeName(sourceModel.name, { loose: true })) ?? null;
    if (record) specMatches++;
    const sourceSpecs = sourceModel.specs || {};
    const specs = {
      display: clean(record?.specs.display) || clean(sourceSpecs.display) || "Display details pending public verification",
      processor: clean(record?.specs.processor) || clean(sourceSpecs.processor) || "Processor details pending public verification",
      ram: clean(sourceSpecs.ram) || clean(record?.specs.ram) || null,
      storage: Array.isArray(sourceSpecs.storage) && sourceSpecs.storage.length
        ? sourceSpecs.storage
        : (record?.specs.storage?.length ? record.specs.storage : ["Market-dependent storage"]),
      battery: clean(record?.specs.battery) || clean(sourceSpecs.battery) || null,
      os: clean(record?.specs.os) || clean(sourceSpecs.os) || null,
      weight: clean(record?.specs.weight) || clean(sourceSpecs.weight) || null,
      dimensions: clean(record?.specs.dimensions) || clean(sourceSpecs.dimensions) || null,
      colors: clean(record?.specs.colors) || null,
    };
    const variants = variantsFromMemory(sourceModel.name, record?.memory);
    const model = {
      name: sourceModel.name,
      aliases: sourceModel.aliases || [],
      releaseYear: sourceModel.release_year ?? record?.releaseYear ?? null,
      imageUrl: null,
      specs,
      variants: variants.length ? variants : (sourceModel.variants || []),
      sources: [...new Set([...(sourceModel.sources || []), ...(record ? ["kaggle:gsmarena-derived-sony-specs"] : [])])],
    };
    model.variants = ensureVariants(model);
    familyMap.get(family.name)?.models.push(model);
  }
}

let imageMatches = 0;
const models = brand.families.flatMap((family) => family.models);
const usedImages = new Set();
await mapConcurrent(models, 24, async (model) => {
  const record = byName.get(normalizeName(model.name)) ?? byLooseName.get(normalizeName(model.name, { loose: true })) ?? null;
  const result = await findImage(model.name, record?.imageUrl);
  if (!result) return;
  const key = result.imageUrl.replace(/^http:/, "https:");
  if (usedImages.has(key)) return;
  usedImages.add(key);
  model.imageUrl = result.imageUrl;
  model.sources = [...new Set([...(model.sources || []), result.source, result.imageUrl])];
  imageMatches++;
});

const byImage = new Map();
for (const model of models) {
  if (!model.imageUrl) continue;
  const key = String(model.imageUrl).replace(/^http:/, "https:");
  if (!byImage.has(key)) byImage.set(key, []);
  byImage.get(key).push(model);
}
let duplicateImagesCleared = 0;
for (const imageModels of byImage.values()) {
  if (imageModels.length <= 1) continue;
  for (const model of imageModels) {
    model.imageUrl = null;
    model.sources = [...new Set([...(model.sources || []), "image-cleared:duplicate-url-shared-by-multiple-models"])];
    duplicateImagesCleared++;
  }
}

for (const family of brand.families) {
  family.models.sort((a, b) => (b.releaseYear ?? -1) - (a.releaseYear ?? -1) || a.name.localeCompare(b.name));
}

fs.mkdirSync(path.dirname(brandPath), { recursive: true });
fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const images = models.filter((model) => model.imageUrl).map((model) => String(model.imageUrl).replace(/^http:/, "https:"));
const badImages = [];
await mapConcurrent(models.filter((model) => model.imageUrl), 24, async (model) => {
  if (!(await isValidImage(model.imageUrl))) badImages.push({ name: model.name, imageUrl: model.imageUrl });
});
const report = {
  datasetRowsLoaded: records.length,
  specMatches,
  imageMatches,
  duplicateImagesCleared,
  familyFallbacks: 0,
  families: brand.families.length,
  models: models.length,
  variants: models.reduce((count, model) => count + model.variants.length, 0),
  modelsWithImage: images.length,
  uniqueImages: new Set(images).size,
  duplicateImageCount: images.length - new Set(images).size,
  badImageCount: badImages.length,
  badImages,
  missingImages: models.filter((model) => !model.imageUrl).length,
  missingDisplay: models.filter((model) => !model.specs?.display || model.specs.display === "Not specified").length,
  missingProcessor: models.filter((model) => !model.specs?.processor || model.specs.processor === "Not specified").length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs?.storage) || model.specs.storage.length === 0 || model.specs.storage[0] === "Not specified").length,
  noVariantModels: models.filter((model) => !Array.isArray(model.variants) || model.variants.length === 0).length,
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
