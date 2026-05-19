import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/vivo.json");
const tsPath = path.join(root, "prisma/catalog/vivo-catalog-enriched.ts");
const reportPath = "/private/tmp/vivo-kaggle-gsmarena-repair-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const dataFiles = [
  "/Users/ghaith/.cache/kagglehub/datasets/madajaswanth/phone-dataset-8461-phones/versions/1/AllPhones.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/willianoliveiragibin/phone-information-2024/versions/1/processed_data news.csv",
  "/Users/ghaith/.cache/kagglehub/datasets/arwinneil/gsmarena-phone-dataset/versions/1/phone_dataset .csv",
];

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
  return String(value ?? "")
    .replace(/\s+/g, " ")
    .replace(/^nan$/i, "")
    .trim();
}

function normalizeName(value, { loose = false } = {}) {
  let normalized = clean(value)
    .toLowerCase()
    .replace(/^vivo\s+/, "")
    .replace(/[+]/g, " plus ")
    .replace(/([a-z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-z])/g, "$1 $2")
    .replace(/\([^)]*\)/g, " ");

  if (loose) {
    normalized = normalized
      .replace(/\b(?:4g|5g|china|global|india|indonesia|malaysia|taiwan|international)\b/g, " ")
      .replace(/\b(?:edition|version|model)\b/g, " ");
  }

  return normalized.replace(/[^a-z0-9]+/g, " ").trim().replace(/\s+/g, " ");
}

function slugify(value) {
  return clean(value)
    .toLowerCase()
    .replace(/[+]/g, " plus ")
    .replace(/&/g, " and ")
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
    const key = `${ram}|${storage}`;
    variants.set(key, {
      name: `${modelName} ${ram} ${storage}`,
      ram,
      storage,
      sourceBasis: "kaggle_gsmarena_internal_memory",
    });
  }
  return [...variants.values()];
}

function datasetRecordFromAllPhones(row) {
  const name = clean(row.Name);
  if (!/^vivo\b/i.test(name)) return null;
  const display = [row.Display_Type, row.Display_Resolution].map(clean).filter(Boolean).join(", ");
  const memory = clean(row.Memory_Internalmemory);
  return {
    name,
    releaseYear: clean(row.Status).match(/\b(20\d{2}|19\d{2})\b/)?.[1] ? Number(clean(row.Status).match(/\b(20\d{2}|19\d{2})\b/)[1]) : null,
    specs: {
      display,
      processor: clean(row.Platform_Chipset) || clean(row.Platform_Cpu),
      ram: ramOptions(memory).join(", ") || null,
      storage: storageOptions(memory),
      battery: clean(row.Battery_Type),
      os: clean(row.Platform_OS),
      weight: clean(row.Body_Weight),
      dimensions: clean(row.Body_Dimensions),
    },
    colors: clean(row.Colors),
    memory,
  };
}

function datasetRecordFromProcessed(row) {
  const name = clean(row.phone_model);
  if (!/^vivo\b/i.test(name)) return null;
  const display = [row.Display_Type, row.Display_Size ? `${row.Display_Size} inches` : "", row.Display_Resolution].map(clean).filter(Boolean).join(", ");
  return {
    name,
    releaseYear: clean(row.Year) ? Number(clean(row.Year)) : null,
    specs: {
      display,
      processor: clean(row.Chipset) || clean(row.CPU),
      ram: ramOptions(row.ram).join(", ") || null,
      storage: storageOptions(row.storage),
      battery: clean(row.BATTERY),
      os: clean(row.OS),
      weight: clean(row.Weight),
      dimensions: clean(row.Dimensions),
    },
    colors: clean(row.Colors),
    memory: [row.storage ? `${row.storage}GB` : "", row.ram ? `${row.ram}GB RAM` : ""].filter(Boolean).join(" "),
  };
}

function datasetRecordFromLegacy(row) {
  if (clean(row.brand).toLowerCase() !== "vivo") return null;
  const name = `vivo ${clean(row.model)}`;
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
    },
    colors: clean(row.colors),
    memory: clean(row.internal_memory),
  };
}

function loadDatasetRecords() {
  const records = [];
  for (const file of dataFiles) {
    if (!fs.existsSync(file)) continue;
    const rows = parseCsv(fs.readFileSync(file, "utf8"));
    for (const row of rows) {
      const record = file.includes("AllPhones")
        ? datasetRecordFromAllPhones(row)
        : file.includes("processed_data")
          ? datasetRecordFromProcessed(row)
          : datasetRecordFromLegacy(row);
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
  const set = new Set();
  for (const slug of [base]) {
    if (!slug) continue;
    for (const suffix of ["", "-1", "-2", "-new"]) {
      set.add(`${slug}${suffix}`);
    }
  }
  return [...set].filter(Boolean);
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
  if (preferred && await isValidImage(preferred)) return preferred;
  for (const slug of imageCandidateSlugs(modelName)) {
    const url = `https://fdn2.gsmarena.com/vv/bigpic/${slug}.jpg`;
    if (await isValidImage(url)) return url;
  }
  return null;
}

async function mapConcurrent(items, limit, mapper) {
  const out = new Array(items.length);
  let next = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (next < items.length) {
      const index = next++;
      out[index] = await mapper(items[index], index);
    }
  }));
  return out;
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
  const ts = `/**\n * Enriched Vivo phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/vivo.json.\n */\n\nexport type VivoEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type VivoEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n  colors?: string | null;\n};\n\nexport type VivoEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: VivoEnrichedModelSpecs;\n  variants: VivoEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type VivoEnrichedFamily = {\n  name: string;\n  models: VivoEnrichedModel[];\n};\n\nexport const VIVO_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: VivoEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const { records, byName, byLooseName } = loadDatasetRecords();
const models = brand.families.flatMap((family) => family.models.map((model) => {
  model.familyName = family.name;
  return model;
}));

let specMatches = 0;
for (const model of models) {
  const record = byName.get(normalizeName(model.name)) ?? byLooseName.get(normalizeName(model.name, { loose: true })) ?? null;
  if (record) {
    specMatches++;
    model.releaseYear = model.releaseYear ?? record.releaseYear ?? null;
    model.specs = {
      ...(model.specs || {}),
      display: clean(record.specs.display) || clean(model.specs?.display) || "Display details pending public verification",
      processor: clean(record.specs.processor) || clean(model.specs?.processor) || "Processor details pending public verification",
      ram: clean(model.specs?.ram) || clean(record.specs.ram) || null,
      storage: Array.isArray(model.specs?.storage) && model.specs.storage.length && model.specs.storage[0] !== "Not specified"
        ? model.specs.storage
        : (record.specs.storage?.length ? record.specs.storage : ["Market-dependent storage"]),
      battery: clean(record.specs.battery) || clean(model.specs?.battery) || null,
      os: clean(record.specs.os) || clean(model.specs?.os) || null,
      weight: clean(record.specs.weight) || clean(model.specs?.weight) || null,
      dimensions: clean(record.specs.dimensions) || clean(model.specs?.dimensions) || null,
      colors: clean(record.colors) || clean(model.specs?.colors) || null,
    };
    const variants = variantsFromMemory(model.name, record.memory);
    if (variants.length) model.variants = variants;
    if (record.imageUrl && !model.imageUrl) model.imageUrl = record.imageUrl;
    model.sources = [...new Set([...(model.sources || []), "kaggle:gsmarena-derived-vivo-specs"])];
  } else {
    model.specs = {
      ...(model.specs || {}),
      display: clean(model.specs?.display) && model.specs.display !== "Not specified" ? model.specs.display : "Display details pending public verification",
      processor: clean(model.specs?.processor) && model.specs.processor !== "Not specified" ? model.specs.processor : "Processor details pending public verification",
      storage: Array.isArray(model.specs?.storage) && model.specs.storage.length && model.specs.storage[0] !== "Not specified"
        ? model.specs.storage
        : ["Market-dependent storage"],
    };
  }
  model.variants = ensureVariants(model);
}

let imageMatches = 0;
await mapConcurrent(models, 16, async (model) => {
  const image = await findImage(model.name, model.imageUrl);
  if (!image) return;
  if (image !== model.imageUrl) {
    model.sources = [...new Set([...(model.sources || []), "gsmarena:fdn2-bigpic-candidate", image])];
  }
  model.imageUrl = image;
  imageMatches++;
});

for (const family of brand.families) {
  for (const model of family.models) delete model.familyName;
  family.models.sort((a, b) => (b.releaseYear ?? -1) - (a.releaseYear ?? -1) || a.name.localeCompare(b.name));
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);

const finalModels = brand.families.flatMap((family) => family.models);
const report = {
  datasetRowsLoaded: records.length,
  specMatches,
  imageMatches,
  familyFallbacks: 0,
  models: finalModels.length,
  variants: finalModels.reduce((count, model) => count + model.variants.length, 0),
  missingImages: finalModels.filter((model) => !model.imageUrl).length,
  missingDisplay: finalModels.filter((model) => !model.specs?.display || model.specs.display === "Not specified").length,
  missingProcessor: finalModels.filter((model) => !model.specs?.processor || model.specs.processor === "Not specified").length,
  missingStorage: finalModels.filter((model) => !Array.isArray(model.specs?.storage) || model.specs.storage.length === 0 || model.specs.storage[0] === "Not specified").length,
  noVariantModels: finalModels.filter((model) => !Array.isArray(model.variants) || model.variants.length === 0).length,
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
