import fs from "node:fs";
import https from "node:https";

const CATALOG_PATH = "src/data/catalog/laptops/brands/dell.json";
const CACHE_PATH = "/private/tmp/dell-laptop-image-cache.json";
const CONCURRENCY = 12;

const USER_AGENT = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function get(url, timeoutMs = 6000) {
  return new Promise((resolve) => {
    const request = https.get(url, { headers: { "user-agent": USER_AGENT } }, (response) => {
      if ([301, 302, 303, 307, 308].includes(response.statusCode) && response.headers.location) {
        response.resume();
        const next = new URL(response.headers.location, url).toString();
        resolve(get(next, timeoutMs));
        return;
      }

      let data = "";
      response.setEncoding("utf8");
      response.on("data", (chunk) => {
        data += chunk;
        if (data.length > 2_000_000) request.destroy();
      });
      response.on("end", () => resolve({ statusCode: response.statusCode ?? 0, data }));
    });
    request.setTimeout(timeoutMs, () => {
      request.destroy();
      resolve({ statusCode: 0, data: "" });
    });
    request.on("error", () => resolve({ statusCode: 0, data: "" }));
  });
}

function normalize(value) {
  return value
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/\+/g, " plus ")
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function slugify(value) {
  return normalize(value).replace(/\s+/g, "-");
}

function modelSlugCandidates(modelName) {
  const normalized = normalize(modelName);
  const withoutDell = normalized.replace(/^dell\s+/, "");
  const parts = withoutDell.split(" ");
  const line = parts[0] ?? "";
  const numericParts = parts.filter((part) => /^\d{3,5}$/.test(part));
  const lastNumber = numericParts.at(-1);
  const candidates = [];

  if (line && lastNumber) {
    candidates.push(`dell-${line}-${lastNumber}`);
  }

  if (withoutDell.startsWith("g series ")) {
    candidates.push(`dell-${slugify(withoutDell.replace(/^g series\s+/, ""))}`);
  }

  if (withoutDell.startsWith("dell pro ")) {
    candidates.push(slugify(withoutDell));
  }

  candidates.push(`dell-${slugify(withoutDell)}`);
  candidates.push(slugify(withoutDell));

  return [...new Set(candidates)].filter(Boolean).slice(0, 4);
}

function imageUrlsFromHtml(html) {
  return [...new Set([
    ...[...html.matchAll(/https?:\/\/cdn\.cs\.1worldsync\.com\/[^"' <>)]+?\.(?:jpg|jpeg|png|webp)/gi)].map((m) => m[0]),
    ...[...html.matchAll(/https?:\/\/i\.dell\.com\/is\/image\/DellContent\/[^"' <>)]+/gi)].map((m) => m[0].replace(/&amp;/g, "&")),
  ])].filter((url) => !/logo|icon|sprite/i.test(url));
}

function productInDetailUrlsFromSearch(html) {
  const urls = [];
  for (const match of html.matchAll(/uddg=([^&"]+)/g)) {
    const decoded = decodeURIComponent(match[1]);
    if (/^https:\/\/www\.productindetail\.com\/pn\/[^?#]+(?:\/pictures)?/.test(decoded)) {
      urls.push(decoded.replace(/\/$/, "").replace(/(\?|\#).*$/, ""));
    }
  }
  return [...new Set(urls)];
}

function scoreImage(url) {
  if (/front|gallery|hero|notebook|laptop|open|device/i.test(url)) return 2;
  return 1;
}

function bestImage(urls) {
  return urls
    .map((url, index) => ({ url, index, score: scoreImage(url) }))
    .sort((a, b) => b.score - a.score || a.index - b.index)[0]?.url ?? null;
}

async function fetchProductInDetailImage(slug) {
  const url = `https://www.productindetail.com/pn/${slug}/pictures`;
  const response = await get(url);
  if (response.statusCode < 200 || response.statusCode >= 400) return null;
  return bestImage(imageUrlsFromHtml(response.data));
}

async function fetchSearchDiscoveredImage(modelName) {
  const searchUrl = `https://duckduckgo.com/html/?q=${encodeURIComponent(`${modelName} productindetail pictures`)}`;
  const response = await get(searchUrl);
  if (response.statusCode < 200 || response.statusCode >= 400) return null;

  for (const pageUrl of productInDetailUrlsFromSearch(response.data).slice(0, 3)) {
    await sleep(150);
    const response = await get(pageUrl.endsWith("/pictures") ? pageUrl : `${pageUrl}/pictures`);
    const image = bestImage(imageUrlsFromHtml(response.data));
    if (image) return image;
  }

  return null;
}

async function imageForModel(modelName) {
  for (const slug of modelSlugCandidates(modelName)) {
    const image = await fetchProductInDetailImage(slug);
    if (image) return { imageUrl: image, source: `productindetail:${slug}` };
  }

  return { imageUrl: null, source: null };
}

async function main() {
  const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
  const cache = fs.existsSync(CACHE_PATH)
    ? JSON.parse(fs.readFileSync(CACHE_PATH, "utf8"))
    : {};

  const rows = catalog.families.flatMap((family) => family.models.map((model) => ({ family, model })));
  let cursor = 0;
  let found = 0;
  let unresolved = 0;

  async function worker(workerId) {
    while (cursor < rows.length) {
      const row = rows[cursor++];
      const key = row.model.name;

      if (!cache[key]) {
        cache[key] = await imageForModel(key);
        if (cursor % 20 === 0) {
          fs.writeFileSync(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`);
        }
        await sleep(120 + workerId * 20);
      }

      if (cache[key]?.imageUrl) {
        row.model.imageUrl = cache[key].imageUrl;
        found++;
      } else {
        unresolved++;
      }

      if (cursor % 25 === 0) {
        console.log(`  checked ${cursor}/${rows.length} found=${found} unresolved=${unresolved}`);
      }
    }
  }

  await Promise.all(Array.from({ length: CONCURRENCY }, (_, index) => worker(index)));
  fs.writeFileSync(CACHE_PATH, `${JSON.stringify(cache, null, 2)}\n`);
  fs.writeFileSync(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`);

  const byUrl = new Map();
  const models = catalog.families.flatMap((family) => family.models);
  for (const model of models) {
    if (!model.imageUrl) continue;
    byUrl.set(model.imageUrl, (byUrl.get(model.imageUrl) ?? 0) + 1);
  }

  console.log(JSON.stringify({
    models: models.length,
    found,
    unresolved,
    missingImages: models.filter((model) => !model.imageUrl).length,
    uniqueImages: byUrl.size,
    reusedImageUrls: [...byUrl.values()].filter((count) => count > 1).length,
    maxModelsPerImage: Math.max(...byUrl.values()),
    cachePath: CACHE_PATH,
  }, null, 2));
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
