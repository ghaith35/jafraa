import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const brandPath = path.join(root, "src/data/catalog/phones/brands/samsung.json");
const tsPath = path.join(root, "prisma/catalog/samsung-catalog-enriched.ts");
const reportPath = "/private/tmp/samsung-gsmarena-image-fix-report.json";

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
    .replace(/^samsung\s+/, "")
    .replace(/\bbada os\b/g, "")
    .replace(/\b5g\b/g, "")
    .replace(/[+]/g, " plus ")
    .replace(/\bduos\b/g, "dual sim")
    .replace(/\bdual\s+sim\b/g, "dual sim")
    .replace(/[^a-z0-9]+/g, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function nameKeys(value) {
  const normalized = normalizeName(value);
  if (!normalized) return [];
  const withoutCodes = normalized
    .replace(/^(?:gt|sm|sc|sch|sgh|sph|shv|shw|sh|ek|yp)?\s?[a-z]?\d{3,5}[a-z]? /i, "")
    .replace(/ (?:gt|sm|sc|sch|sgh|sph|shv|shw|sh|ek|yp)?\s?[a-z]?\d{3,5}[a-z]?$/i, "")
    .replace(/\s+/g, " ")
    .trim();
  const withoutNetworkSuffix = withoutCodes
    .replace(/\b(?:lte a|lte|cdma|4g|dual sim)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
  return [...new Set([normalized, withoutCodes, withoutNetworkSuffix].filter(Boolean))];
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

async function fetchText(url) {
  const res = await fetch(url, {
    headers: {
      "user-agent": userAgent,
      accept: "text/html,image/avif,image/webp,image/apng,*/*",
    },
  });
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

function parseDetailPage(html) {
  const name = html.match(/HISTORY_ITEM_NAME\s*=\s*"([^"]+)"/)?.[1];
  const imageUrl = html.match(/HISTORY_ITEM_IMAGE\s*=\s*"([^"]+)"/)?.[1];
  return {
    name: decodeHtml(name),
    imageUrl: decodeHtml(imageUrl).replace(/^\/\//, "https://"),
  };
}

function isReasonableMatch(model, pageName) {
  const modelKeys = nameKeys(model.name);
  const aliasKeys = (model.aliases || []).flatMap(nameKeys);
  const pageKeys = nameKeys(pageName);
  return [...modelKeys, ...aliasKeys].some((modelKey) => (
    pageKeys.includes(modelKey)
      || pageKeys.some((pageKey) => pageKey.includes(modelKey) || modelKey.includes(pageKey))
  ));
}

function parseListing(html) {
  const records = [];
  const re = /<li><a href="([^"]+)"><img src=([^ >]+)[^>]*title="([^"]+)"[^>]*><strong><span>(.*?)<\/span><\/strong><\/a><\/li>/gi;
  for (const match of html.matchAll(re)) {
    const href = decodeHtml(match[1]);
    const imageUrl = decodeHtml(match[2]).replace(/^\/\//, "https://");
    const titleName = stripTitleToName(match[3]);
    const displayName = `Samsung ${decodeHtml(match[4]).replace(/\s+/g, " ").trim()}`;
    const names = [...new Set([titleName, displayName].filter(Boolean))];
    records.push({ href: `https://www.gsmarena.com/${href}`, imageUrl, names });
  }
  return records;
}

function addRecord(index, record) {
  for (const name of record.names) {
    for (const key of nameKeys(name)) {
      if (key && !index.has(key)) index.set(key, record);
    }
  }
}

function regenerateTs(brand) {
  const payload = {
    brandName: brand.name,
    logoUrl: brand.logoUrl,
    sortOrder: brand.sortOrder,
    families: brand.families,
  };
  const ts = `/**\n * Enriched Samsung phone catalog with detailed specs, variants, images, and release years.\n * Generated from src/data/catalog/phones/brands/samsung.json.\n */\n\nexport type SamsungEnrichedModelVariant = {\n  name: string;\n  processor?: string;\n  ram: string;\n  storage: string;\n  color?: string;\n  modelNumber?: string;\n  connectivity?: string;\n  market?: string;\n  sourceBasis?: string;\n};\n\nexport type SamsungEnrichedModelSpecs = {\n  display?: string | null;\n  processor?: string | null;\n  ram?: string | null;\n  storage?: string[] | null;\n  battery?: string | null;\n  os?: string | null;\n  weight?: string | null;\n  dimensions?: string | null;\n};\n\nexport type SamsungEnrichedModel = {\n  name: string;\n  aliases: string[];\n  releaseYear: number | null;\n  imageUrl: string | null;\n  specs: SamsungEnrichedModelSpecs;\n  variants: SamsungEnrichedModelVariant[];\n  sources?: string[];\n};\n\nexport type SamsungEnrichedFamily = {\n  name: string;\n  models: SamsungEnrichedModel[];\n};\n\nexport const SAMSUNG_ENRICHED_CATALOG: {\n  brandName: string;\n  logoUrl: string | null;\n  sortOrder: number;\n  families: SamsungEnrichedFamily[];\n} = ${JSON.stringify(payload, null, 2)};\n`;
  fs.writeFileSync(tsPath, ts);
}

const brand = JSON.parse(fs.readFileSync(brandPath, "utf8"));
const index = new Map();
const listingRecords = [];

for (let page = 1; page <= 29; page++) {
  const url = page === 1
    ? "https://www.gsmarena.com/samsung-phones-9.php"
    : `https://www.gsmarena.com/samsung-phones-f-9-0-p${page}.php`;
  const html = await fetchText(url);
  const records = parseListing(html);
  listingRecords.push(...records);
  for (const record of records) addRecord(index, record);
  await new Promise((resolve) => setTimeout(resolve, 200));
}

const changes = [];
const unmatched = [];

for (const family of brand.families) {
  for (const model of family.models) {
    const candidates = [model.name, ...(model.aliases || [])].flatMap(nameKeys);
    const record = candidates.map((candidate) => index.get(candidate)).find(Boolean);
    if (!record) {
      unmatched.push({ family: family.name, name: model.name, imageUrl: model.imageUrl });
      continue;
    }
    if (model.imageUrl !== record.imageUrl) {
      changes.push({
        family: family.name,
        name: model.name,
        before: model.imageUrl,
        after: record.imageUrl,
        source: record.href,
      });
      model.imageUrl = record.imageUrl;
    }
    const sources = new Set(model.sources || []);
    sources.add(record.href);
    model.sources = [...sources];
  }
}

for (const family of brand.families) {
  for (const model of family.models) {
    if (await isValidImage(model.imageUrl)) continue;
    const gsmarenaSources = (model.sources || []).filter((source) => (
      /^https:\/\/www\.gsmarena\.com\/[^/]+-\d+\.php$/.test(source)
    ));
    for (const source of gsmarenaSources) {
      const html = await fetchText(source).catch(() => null);
      if (!html) continue;
      const detail = parseDetailPage(html);
      if (!detail.imageUrl || !detail.name || !isReasonableMatch(model, detail.name)) continue;
      if (!(await isValidImage(detail.imageUrl))) continue;
      changes.push({
        family: family.name,
        name: model.name,
        before: model.imageUrl,
        after: detail.imageUrl,
        source,
      });
      model.imageUrl = detail.imageUrl;
      break;
    }
  }
}

const models = brand.families.flatMap((family) => family.models.map((model) => ({ family: family.name, ...model })));
const invalidAfter = [];
for (const model of models) {
  if (!(await isValidImage(model.imageUrl))) {
    invalidAfter.push({ family: model.family, name: model.name, imageUrl: model.imageUrl });
  }
}

fs.writeFileSync(brandPath, JSON.stringify(brand, null, 2) + "\n");
regenerateTs(brand);
fs.writeFileSync(reportPath, JSON.stringify({
  listingRecords: listingRecords.length,
  indexedNames: index.size,
  changed: changes.length,
  unmatched: unmatched.length,
  invalidAfter: invalidAfter.length,
  changes,
  unmatched,
  invalidAfter,
}, null, 2) + "\n");

console.log(JSON.stringify({
  listingRecords: listingRecords.length,
  indexedNames: index.size,
  changed: changes.length,
  unmatched: unmatched.length,
  invalidAfter: invalidAfter.length,
  reportPath,
}, null, 2));
