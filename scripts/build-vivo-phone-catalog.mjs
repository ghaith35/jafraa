import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const sourcePath = path.join(root, "src/data/catalog/phones/prompts/phones_vivo_full_public_phone_catalog_v1.json");
const brandPath = path.join(root, "src/data/catalog/phones/brands/vivo.json");
const tsPath = path.join(root, "prisma/catalog/vivo-catalog-enriched.ts");
const reportPath = "/private/tmp/vivo-phone-catalog-build-report.json";
const userAgent = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/125.0 Safari/537.36";

const FAMILY_ORDER = [
  "vivo X",
  "vivo Foldables",
  "vivo Xplay",
  "vivo Xshot",
  "vivo NEX",
  "vivo V",
  "vivo Y",
  "vivo T",
  "vivo S",
  "vivo Z",
  "vivo U",
  "vivo G",
  "vivo E",
  "vivo iQOO",
];

function decodeHtml(value) {
  return String(value || "")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#x2B;/g, "+")
    .replace(/&Prime;|&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/<br\s*\/?>/gi, ", ")
    .replace(/\s+/g, " ")
    .trim();
}

function stripTags(value) {
  return decodeHtml(String(value || "").replace(/<[^>]+>/g, " "));
}

function normalizeName(value, { loose = false } = {}) {
  let normalized = decodeHtml(value)
    .toLowerCase()
    .replace(/^vivo\s+/, "")
    .replace(/^bbk\s+/, "")
    .replace(/[+]/g, " plus ")
    .replace(/([a-z])(\d)/g, "$1 $2")
    .replace(/(\d)([a-z])/g, "$1 $2")
    .replace(/\([^)]*\)/g, " ");

  if (loose) {
    normalized = normalized
      .replace(/\b(?:4g|5g|china|global|india|indonesia|malaysia|taiwan|international)\b/g, " ")
      .replace(/\b(?:edition|version|model)\b/g, " ");
  }

  return normalized
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function familyFor(name) {
  const normalized = normalizeName(name, { loose: true });
  if (normalized.startsWith("iqoo ") || normalized === "iqoo") return "vivo iQOO";
  if (/^x\s+(?:fold|flip|note)\b/.test(normalized)) return "vivo Foldables";
  if (normalized.startsWith("xplay")) return "vivo Xplay";
  if (normalized.startsWith("xshot")) return "vivo Xshot";
  if (normalized.startsWith("nex")) return "vivo NEX";
  if (normalized.startsWith("x ") || /^x\d/.test(normalized)) return "vivo X";
  if (normalized.startsWith("v ") || /^v\d/.test(normalized)) return "vivo V";
  if (normalized.startsWith("y ") || /^y\d/.test(normalized)) return "vivo Y";
  if (normalized.startsWith("t ") || /^t\d/.test(normalized)) return "vivo T";
  if (normalized.startsWith("s ") || /^s\d/.test(normalized)) return "vivo S";
  if (normalized.startsWith("z ") || /^z\d/.test(normalized)) return "vivo Z";
  if (normalized.startsWith("u ") || /^u\d/.test(normalized)) return "vivo U";
  if (normalized.startsWith("g ") || /^g\d/.test(normalized)) return "vivo G";
  if (normalized.startsWith("e ") || /^e\d/.test(normalized)) return "vivo E";
  return "vivo Y";
}

function stripTitleToName(title) {
  const clean = decodeHtml(title);
  const announced = clean.split(/\.\s*Announced\b/i)[0] || clean;
  return announced
    .replace(/\s+Android tablet$/i, "")
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
    const listedName = decodeHtml(match[4]).replace(/\s+/g, " ").trim();
    const titleName = stripTitleToName(title);
    const name = titleName.toLowerCase().startsWith("vivo ") || titleName.toLowerCase().startsWith("iqoo ")
      ? titleName
      : `vivo ${listedName}`;
    if (/\btablet\b|\bpad\b/i.test(`${name} ${title}`)) continue;
    records.push({ name, href: `https://www.gsmarena.com/${href}`, imageUrl, title });
  }
  return records;
}

function specValue(html, spec) {
  const re = new RegExp(`<td class="nfo"[^>]*data-spec="${spec}"[^>]*>([\\s\\S]*?)<\\/td>`, "i");
  return stripTags(html.match(re)?.[1] || "");
}

function highlightValue(html, spec) {
  const re = new RegExp(`data-spec="${spec}"[^>]*>([\\s\\S]*?)<`, "i");
  return stripTags(html.match(re)?.[1] || "");
}

function parseReleaseYear(...values) {
  for (const value of values.filter(Boolean)) {
    const year = String(value).match(/\b(20\d{2}|19\d{2})\b/)?.[1];
    if (year) return Number(year);
  }
  return null;
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

function parseStorageOptions(value) {
  const options = [...String(value || "").matchAll(/\b(\d+(?:GB|TB))\b(?=\s+(?:\d+(?:GB|MB)\s+RAM|storage|UFS|eMMC|ROM)|[,;]|$)/gi)]
    .map((match) => match[1].toUpperCase().replace("TB", "TB").replace("GB", "GB"));
  return [...new Set(options)];
}

function parseRamOptions(value) {
  const options = [...String(value || "").matchAll(/\b(\d+(?:GB|MB))\s+RAM\b/gi)].map((match) => match[1].toUpperCase());
  return [...new Set(options)];
}

function parseVariants(modelName, memoryText) {
  const variants = new Map();
  const re = /\b(\d+(?:GB|TB))\s+(\d+(?:GB|MB))\s+RAM\b/gi;
  for (const match of String(memoryText || "").matchAll(re)) {
    const storage = match[1].toUpperCase();
    const ram = match[2].toUpperCase();
    const key = `${ram}|${storage}`;
    if (!variants.has(key)) {
      variants.set(key, {
        name: `${modelName} ${ram} ${storage}`,
        ram,
        storage,
        sourceBasis: "gsmarena_internal_memory",
      });
    }
  }
  return [...variants.values()];
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
    const rams = String(specs.ram || "").split(/[\/,]| or /i).map((part) => part.trim()).filter(Boolean);
    const storages = Array.isArray(specs.storage) ? specs.storage.filter(Boolean) : [];
    for (const ram of rams.length ? rams : [""]) {
      for (const storage of storages.length ? storages : [""]) {
        if (!ram && !storage) continue;
        const key = [ram, storage].join("|").toLowerCase();
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

  return [...map.values()];
}

function parseDetail(record, html) {
  const displayParts = [
    specValue(html, "displaytype"),
    specValue(html, "displaysize"),
    specValue(html, "displayresolution"),
  ].filter(Boolean);
  const memory = specValue(html, "internalmemory");
  const storage = parseStorageOptions(memory);
  const ramOptions = parseRamOptions(memory);
  const specs = {
    display: displayParts.length ? displayParts.join(", ") : highlightValue(html, "displaysize-hl") || parseSpecsFromTitle(record.title).display || "Not specified",
    processor: specValue(html, "chipset") || highlightValue(html, "chipset-hl") || parseSpecsFromTitle(record.title).processor || "Not specified",
    ram: ramOptions.length ? ramOptions.join(", ") : highlightValue(html, "ramsize-hl") || parseSpecsFromTitle(record.title).ram || null,
    storage: storage.length ? storage : parseSpecsFromTitle(record.title).storage || ["Not specified"],
    battery: highlightValue(html, "batsize-hl")
      ? `${highlightValue(html, "batsize-hl")} mAh`
      : specValue(html, "batdescription1") || parseSpecsFromTitle(record.title).battery || null,
    os: specValue(html, "os") || null,
    weight: specValue(html, "weight") || null,
    dimensions: specValue(html, "dimensions") || null,
  };
  return {
    releaseYear: parseReleaseYear(specValue(html, "year"), specValue(html, "status"), record.title),
    specs,
    variants: parseVariants(record.name, memory),
  };
}

async function fetchText(url) {
  const res = await fetch(url, {
    signal: AbortSignal.timeout(15000),
    headers: { "user-agent": userAgent, accept: "text/html,*/*" },
  }).catch(() => null);
  if (!res?.ok) return null;
  return res.text();
}

async function fetchGsmarenaRecords() {
  const records = [];
  for (let page = 1; page <= 12; page++) {
    const url = page === 1
      ? "https://www.gsmarena.com/vivo-phones-98.php"
      : `https://www.gsmarena.com/vivo-phones-f-98-0-p${page}.php`;
    const html = await fetchText(url);
    if (!html) continue;
    records.push(...parseListing(html));
  }
  const deduped = new Map();
  for (const record of records) deduped.set(record.href, record);
  return [...deduped.values()];
}

async function mapConcurrent(items, limit, mapper) {
  const output = new Array(items.length);
  let nextIndex = 0;
  await Promise.all(Array.from({ length: limit }, async () => {
    while (nextIndex < items.length) {
      const index = nextIndex++;
      output[index] = await mapper(items[index], index);
    }
  }));
  return output;
}

function mergeModel(sourceModel, record = null, detail = null) {
  const titleSpecs = record ? parseSpecsFromTitle(record.title) : {};
  const sourceSpecs = sourceModel.specs || {};
  const detailSpecs = detail?.specs || {};
  const specs = {
    display: sourceSpecs.display ?? detailSpecs.display ?? titleSpecs.display ?? "Not specified",
    processor: sourceSpecs.processor ?? detailSpecs.processor ?? titleSpecs.processor ?? "Not specified",
    ram: sourceSpecs.ram ?? detailSpecs.ram ?? titleSpecs.ram ?? null,
    storage: Array.isArray(sourceSpecs.storage) && sourceSpecs.storage.length > 0
      ? sourceSpecs.storage
      : detailSpecs.storage ?? titleSpecs.storage ?? ["Not specified"],
    battery: sourceSpecs.battery ?? detailSpecs.battery ?? titleSpecs.battery ?? null,
    os: sourceSpecs.os ?? detailSpecs.os ?? null,
    weight: sourceSpecs.weight ?? detailSpecs.weight ?? null,
    dimensions: sourceSpecs.dimensions ?? detailSpecs.dimensions ?? null,
  };
  return {
    name: sourceModel.name,
    aliases: sourceModel.aliases || [],
    releaseYear: sourceModel.release_year ?? detail?.releaseYear ?? parseReleaseYear(record?.title) ?? null,
    imageUrl: sourceModel.image_url ?? record?.imageUrl ?? null,
    specs,
    variants: compactVariants(sourceModel.name, specs, detail?.variants?.length ? detail.variants : sourceModel.variants || []),
    sources: [...new Set([...(sourceModel.sources || []), ...(record ? [record.href] : [])])],
  };
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Vivo phone catalog with specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/vivo.json.\n */\n\nexport type VivoEnrichedModelVariant = {\n  name: string;\n  ram?: string;\n  storage?: string;\n  color?: string;\n  connectivity?: string;\n  sourceBasis?: string;\n};\n\nexport type VivoEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type VivoEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: VivoEnrichedModelSpecs;\n  variants: VivoEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type VivoEnrichedFamily = {\n  name: string;\n  models: VivoEnrichedModel[];\n};\n\nexport const VIVO_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: VivoEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const source = JSON.parse(fs.readFileSync(sourcePath, "utf8"));
const sourceBrand = source.brands.find((brand) => normalizeName(brand.name) === "vivo");
if (!sourceBrand) throw new Error("Vivo brand not found");

const gsmarenaRecords = await fetchGsmarenaRecords();
const detailByHref = new Map();
await mapConcurrent(gsmarenaRecords, 10, async (record) => {
  const html = await fetchText(record.href);
  if (!html) return null;
  detailByHref.set(record.href, parseDetail(record, html));
  return null;
});

const recordByName = new Map();
const recordByLooseName = new Map();
for (const record of gsmarenaRecords) {
  recordByName.set(normalizeName(record.name), record);
  recordByLooseName.set(normalizeName(record.name, { loose: true }), record);
}

const sourceModels = sourceBrand.families.flatMap((family) => (
  family.models.map((model) => ({ ...model, family: family.name }))
));
const sourceKeys = new Set(sourceModels.flatMap((model) => [
  normalizeName(model.name),
  normalizeName(model.name, { loose: true }),
]));

let addedFromGsmarena = 0;
for (const record of gsmarenaRecords) {
  const key = normalizeName(record.name);
  const looseKey = normalizeName(record.name, { loose: true });
  if (sourceKeys.has(key) || sourceKeys.has(looseKey)) continue;
  const detail = detailByHref.get(record.href);
  sourceModels.push({
    name: record.name,
    aliases: [],
    release_year: detail?.releaseYear ?? parseReleaseYear(record.title),
    image_url: record.imageUrl,
    specs: detail?.specs ?? parseSpecsFromTitle(record.title),
    variants: detail?.variants ?? [],
    sources: [record.href],
    family: familyFor(record.name),
  });
  sourceKeys.add(key);
  sourceKeys.add(looseKey);
  addedFromGsmarena++;
}

const brand = {
  name: "Vivo",
  sortOrder: 8,
  aliases: ["vivo"],
  logoUrl: sourceBrand.logo_url ?? "https://logo.clearbit.com/vivo.com",
  families: FAMILY_ORDER.map((name) => ({ name, models: [] })),
};
const familyMap = new Map(brand.families.map((family) => [family.name, family]));

const unmatchedSourceModels = [];
for (const sourceModel of sourceModels) {
  const record = recordByName.get(normalizeName(sourceModel.name))
    ?? recordByLooseName.get(normalizeName(sourceModel.name, { loose: true }))
    ?? null;
  const detail = record ? detailByHref.get(record.href) : null;
  if (!record) unmatchedSourceModels.push({ family: sourceModel.family, name: sourceModel.name });
  const model = mergeModel(sourceModel, record, detail);
  familyMap.get(familyFor(model.name))?.models.push(model);
}

let imageFallbacks = 0;
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
  gsmarenaRecords: gsmarenaRecords.length,
  detailPagesFetched: detailByHref.size,
  addedFromGsmarena,
  families: brand.families.length,
  models: models.length,
  variants: variants.length,
  imagesFound: models.filter((model) => model.imageUrl && !model.sources?.some((source) => String(source).startsWith("fallback:image-from-family:"))).length,
  imageFallbacks,
  missingImages: models.filter((model) => !model.imageUrl).length,
  missingDisplay: models.filter((model) => !model.specs.display || model.specs.display === "Not specified").length,
  missingProcessor: models.filter((model) => !model.specs.processor || model.specs.processor === "Not specified").length,
  missingStorage: models.filter((model) => !Array.isArray(model.specs.storage) || model.specs.storage.length === 0 || model.specs.storage[0] === "Not specified").length,
  noVariantModels: models.filter((model) => model.variants.length === 0).length,
  unmatchedSourceModels: unmatchedSourceModels.slice(0, 200),
};
fs.writeFileSync(reportPath, JSON.stringify(report, null, 2) + "\n");
console.log(JSON.stringify(report, null, 2));
