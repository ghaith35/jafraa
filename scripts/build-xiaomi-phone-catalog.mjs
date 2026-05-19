import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_xiaomi_full_public_phone_catalog_v1.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/xiaomi.json");
const tsPath = path.join(root, "prisma/catalog/xiaomi-catalog-enriched.ts");
const reportPath = "/private/tmp/xiaomi-phone-catalog-build-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const FAMILY_ORDER = [
  "Xiaomi Number Series",
  "Mi Number Series",
  "MIX / Foldables",
  "Mi Note",
  "Mi Max",
  "Mi A / Other Mi",
  "Civi",
  "Black Shark",
  "Other Xiaomi Phones",
];

const dataFiles = [
  "/Users/ghaith/.cache/kagglehub/datasets/madajaswanth/phone-dataset-8461-phones/versions/1/AllPhones.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/willianoliveiragibin/phone-information-2024/versions/1/processed_data news.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/arwinneil/gsmarena-phone-dataset/versions/1/phone_dataset .csv",
];

const IMAGE_URL_OVERRIDES = new Map(Object.entries({
  "Xiaomi Mi 11 Ultra": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11-ultra.jpg",
  "Xiaomi Mi 11 Pro": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11-pro.jpg",
  "Xiaomi Mi 11": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg",
  "Xiaomi Mi 10 Ultra": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-ultra.jpg",
  "Xiaomi Mi 10 Pro": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-pro.jpg",
  "Xiaomi Mi 10": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-5g.jpg",
  "Xiaomi Mi 9": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9.jpg",
  "Xiaomi Mi 8": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-8.jpg",
  "Xiaomi Mi 6": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-6.jpg",
  "Xiaomi 11 Lite": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Lite.jpg",
  "Xiaomi 11 Lite 5G": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11-lite-5g.jpg",
  "Xiaomi MIX 4": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-4.jpg",
}));

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
    .replace(/^xiaomi\s+/, "")
    .replace(/^black\s+shark\s+/, "black shark ")
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

function isMainXiaomiPhoneName(name) {
  if (!/^(xiaomi|black shark)\b/i.test(name)) return false;
  if (/\b(?:redmi|poco|pad|tablet|watch|band)\b/i.test(name)) return false;
  return true;
}

function recordFromAllPhones(row) {
  const name = clean(row.Name);
  if (!isMainXiaomiPhoneName(name)) return null;
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
  if (clean(row.phone_brand).toLowerCase() !== "xiaomi" || !isMainXiaomiPhoneName(name)) return null;
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
  if (clean(row.brand).toLowerCase() !== "xiaomi") return null;
  const name = `Xiaomi ${clean(row.model)}`;
  if (!isMainXiaomiPhoneName(name)) return null;
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
  const noXiaomi = slugify(modelName.replace(/^xiaomi\s+/i, ""));
  const set = new Set();
  for (const item of [base, noXiaomi]) {
    if (!item) continue;
    for (const suffix of ["", "-", "--", "-1", "-2", "-new"]) set.add(`${item}${suffix}`);
    set.add(item.replace(/mi-(\d+)/, "mi$1"));
    set.add(item.replace(/xiaomi-mi-(\d+)/, "xiaomi-mi$1"));
    set.add(item.replace(/black-shark-(\d+)/, "xiaomi-black-shark-$1"));
    set.add(item.replace(/mix-fold-(\d+)/, "xiaomi-mix-fold-$1"));
  }
  return [...set].filter(Boolean);
}

function pageCandidateSlugs(modelName) {
  return [...new Set([
    slugify(modelName),
    slugify(modelName.replace(/^xiaomi\s+/i, "")),
    ...imageCandidateSlugs(modelName),
  ].filter(Boolean))];
}

async function isValidImage(url) {
  if (!url || !/^https?:\/\//i.test(url)) return false;
  const res = await fetch(url, {
    method: "HEAD",
    signal: AbortSignal.timeout(8000),
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
  for (const slug of pageCandidateSlugs(modelName)) {
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
  const ts = `/**\n * Enriched Xiaomi phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/xiaomi.json.\n */\n\nexport type XiaomiEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type XiaomiEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n  colors?: string | null;\n};\n\nexport type XiaomiEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: XiaomiEnrichedModelSpecs;\n  variants: XiaomiEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type XiaomiEnrichedFamily = {\n  name: string;\n  models: XiaomiEnrichedModel[];\n};\n\nexport const XIAOMI_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: XiaomiEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceBrand = source.brands.find((brand) => clean(brand.name).toLowerCase() === "xiaomi");
if (!sourceBrand) throw new Error("Xiaomi brand not found");

const { records, byName, byLooseName } = loadDatasetRecords();
const brand = {
  name: "Xiaomi",
  sortOrder: 3,
  aliases: ["Mi"],
  logoUrl: sourceBrand.logo_url ?? "https://logo.clearbit.com/mi.com",
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
      sources: [...new Set([...(sourceModel.sources || []), ...(record ? ["kaggle:gsmarena-derived-xiaomi-specs"] : [])])],
    };
    model.variants = ensureVariants(model);
    familyMap.get(family.name)?.models.push(model);
  }
}

let imageMatches = 0;
const models = brand.families.flatMap((family) => family.models);
const usedImages = new Set();
await mapConcurrent(models, 12, async (model) => {
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
await mapConcurrent(models.filter((model) => model.imageUrl), 12, async (model) => {
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
