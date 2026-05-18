import fs from "node:fs";
import https from "node:https";

const CATALOG_PATH = "src/data/catalog/laptops/brands/apple.json";

const CDN = "https://cdsassets.apple.com/live/7WUAS350/images";

function img(path) {
  return `${CDN}/${path}`;
}

function normalized(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").replace(/\s+/g, " ").trim();
}

function validUrl(url) {
  return new Promise((resolve) => {
    const request = https.request(url, { method: "HEAD" }, (response) => {
      response.resume();
      resolve(response.statusCode >= 200 && response.statusCode < 400);
    });
    request.setTimeout(8000, () => {
      request.destroy();
      resolve(false);
    });
    request.on("error", () => resolve(false));
    request.end();
  });
}

function airImage(name) {
  const n = normalized(name);
  if (n.includes("15 inch m5")) return img("macbook-air/macbook-air-15in-m5-colors.png");
  if (n.includes("13 inch m5")) return img("macbook-air/macbook-air-13in-m5-colors.png");
  if (n.includes("15 inch m4")) return img("macbook-air/2025-macbook-air-15in-colors.png");
  if (n.includes("13 inch m4")) return img("macbook-air/2025-macbook-air-13in-colors.png");
  if (n.includes("15 inch m3")) return img("macbook-air/2024-macbook-air-15in-m3-colors.png");
  if (n.includes("13 inch m3")) return img("macbook-air/2024-macbook-air-13in-m3-colors.png");
  if (n.includes("15 inch m2")) return img("macbook-air/2023-macbook-air-15in-m2-colors.png");
  if (n.includes("13 inch m2")) return img("macbook-air/2022-macbook-air-m2-colors.png");
  if (n.includes("13 inch m1")) return img("macbook-air/macbook-air-2020-late-device.jpg");
  if (n.includes("2020") && n.includes("intel")) return img("macbook-air/macbook-air-2020-device.jpg");
  if (n.includes("2019") || n.includes("2018")) return img("macbook-air/macbook-air-2018-device.jpg");
  if (n.includes("2017")) return img("macbook-air/macbook-air-2017-device.jpg");
  if (n.includes("2015") && n.includes("13 inch")) return img("macbook-air/macbook-air-2015-13in-device.jpg");
  if (n.includes("2015") && n.includes("11 inch")) return img("macbook-air/macbook-air-2015-11in-device.jpg");
  if ((n.includes("2014") || n.includes("2013")) && n.includes("13 inch")) return img("macbook-air/macbook-air-2013-2014-13in-device.jpg");
  if ((n.includes("2014") || n.includes("2013")) && n.includes("11 inch")) return img("macbook-air/macbook-air-2013-2014-11in-device.jpg");
  if (n.includes("2012") && n.includes("13 inch")) return img("macbook-air/macbook-air-2012-13in-device.jpg");
  if (n.includes("2012") && n.includes("11 inch")) return img("macbook-air/macbook-air-2012-11in-device.jpg");
  if (n.includes("2011") && n.includes("13 inch")) return img("macbook-air/macbook-air-2011-13in-device.jpg");
  if (n.includes("2011") && n.includes("11 inch")) return img("macbook-air/macbook-air-2011-11in-device.jpg");
  if (n.includes("2010") && n.includes("13 inch")) return img("macbook-air/macbook-air-2009-2010-13in-device.jpg");
  if (n.includes("2010") && n.includes("11 inch")) return img("macbook-air/macbook-air-2010-11in-device.jpg");
  return null;
}

function proImage(name) {
  const n = normalized(name);
  if (n.includes("16 inch m5")) return img("macbook-pro/macbook-pro-16in-m5-pro-m5-max.png");
  if (n.includes("14 inch m5 pro") || n.includes("14 inch m5 max")) return img("macbook-pro/macbook-pro-14in-m5-pro-m5-max.png");
  if (n.includes("14 inch m5")) return img("macbook-pro/macbook-pro-14in-m5-colors.png");
  if (n.includes("16 inch m4")) return img("macbook-pro/macbook-pro-16in-2024-colors.png");
  if (n.includes("14 inch m4 pro") || n.includes("14 inch m4 max")) return img("macbook-pro/macbook-pro-14in-2024-m4-pro-m4-max-colors.png");
  if (n.includes("14 inch m4")) return img("macbook-pro/macbook-pro-14in-2024-m4-colors.png");
  if (n.includes("16 inch m3")) return img("macbook-pro/macbook-pro-16in-m3-pro-m3-max-nov-2023-silver-space-black.png");
  if (n.includes("14 inch m3 pro") || n.includes("14 inch m3 max")) return img("macbook-pro/macbook-pro-14in-m3-pro-m3-max-nov-2023-silver-space-black.png");
  if (n.includes("14 inch m3")) return img("macbook-pro/macbook-pro-14in-m3-nov-2023-silver-space-gray.png");
  if (n.includes("16 inch m2")) return img("macbook-pro/macbook-pro-16in-2023.png");
  if (n.includes("14 inch m2")) return img("macbook-pro/macbook-pro-14in-2023.png");
  if (n.includes("13 inch m2")) return img("macbook-pro/macbook-pro-13-in-M2-2022.png");
  if (n.includes("16 inch m1")) return img("macbook-pro/macbook-pro-2021-16in.png");
  if (n.includes("14 inch m1")) return img("macbook-pro/macbook-pro-2021-14in.png");
  if (n.includes("13 inch m1")) return img("macbook-pro/macbook-pro-2020-late-13in-device.jpg");
  if (n.includes("2020") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-2020-13in-device-3.jpg");
  if (n.includes("2019") && n.includes("16 inch")) return img("macbook-pro/macbook-pro-16in-2019.jpg");
  if (n.includes("2019") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-2018-15in-device-2.jpg");
  if (n.includes("2019") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-2018-13in-device.jpg");
  if (n.includes("2018") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-2018-15in-device-2.jpg");
  if (n.includes("2018") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-2018-13in-device.jpg");
  if (n.includes("2017") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-2017-15in-device.jpg");
  if (n.includes("2017") && n.includes("13 inch") && n.includes("two thunderbolt")) return img("macbook-pro/macbook-pro-2017-13in-device-2thunderbolt-3ports.jpg");
  if (n.includes("2017") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-2017-13in-device.jpg");
  if (n.includes("2016") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-2016-15in-device.jpg");
  if (n.includes("2016") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-2016-13in-device.jpg");
  if (n.includes("2015") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-mid-2015-15in-device.jpg");
  if (n.includes("2015") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-early-2015-13in-device.jpg");
  if (n.includes("2014") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-mid-2014-15in-device.jpg");
  if (n.includes("2014") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-mid-2014-13in-device.jpg");
  if (n.includes("late 2013") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-late-2013-15in-device.jpg");
  if (n.includes("late 2013") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-late-2013-13in-device.jpg");
  if (n.includes("early 2013") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-early-2013-15in-device.jpg");
  if (n.includes("early 2013") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-early-2013-13in-device.jpg");
  if (n.includes("2013") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-late-2013-15in-device.jpg");
  if (n.includes("2013") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-late-2013-13in-device.jpg");
  if (n.includes("2012") && n.includes("15 inch") && n.includes("retina")) return img("macbook-pro/macbook-pro-mid-2012-15in-device2.jpg");
  if (n.includes("2012") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-mid-2012-15in-device.jpg");
  if (n.includes("2012") && n.includes("13 inch") && n.includes("retina")) return img("macbook-pro/macbook-pro-late-2012-13in-device.jpg");
  if (n.includes("2012") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-mid-2012-13in-device.jpg");
  if (n.includes("late 2011") && n.includes("17 inch")) return img("macbook-pro/macbook-pro-late-2011-17in-device.jpg");
  if (n.includes("late 2011") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-late-2011-15in-device.jpg");
  if (n.includes("late 2011") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-late-2011-13in-device.jpg");
  if (n.includes("2011") && n.includes("17 inch")) return img("macbook-pro/macbook-pro-early-2011-17in-device.jpg");
  if (n.includes("2011") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-early-2011-15in-device.jpg");
  if (n.includes("2011") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-early-2011-13in-device.jpg");
  if (n.includes("2010") && n.includes("17 inch")) return img("macbook-pro/macbook-pro-mid-2010-17in-device.jpg");
  if (n.includes("2010") && n.includes("15 inch")) return img("macbook-pro/macbook-pro-mid-2010-15in-device.jpg");
  if (n.includes("2010") && n.includes("13 inch")) return img("macbook-pro/macbook-pro-mid-2010-13in-device.jpg");
  return null;
}

function macbookImage(name) {
  const n = normalized(name);
  if (n.includes("2017") && n.includes("12 inch")) return img("macbook/macbook-2017-device.jpg");
  if (n.includes("2016") && n.includes("12 inch")) return img("macbook/macbook-2016-device.jpg");
  if (n.includes("2015") && n.includes("12 inch")) return img("macbook/macbook-2015-device.jpg");
  if (n.includes("2010") && n.includes("13 inch")) return img("macbook/macbook-late-2009-2010-device.jpg");
  return null;
}

function imageFor(familyName, modelName) {
  if (familyName === "MacBook Air") return airImage(modelName);
  if (familyName === "MacBook Pro") return proImage(modelName);
  if (familyName === "MacBook") return macbookImage(modelName);
  return null;
}

const catalog = JSON.parse(fs.readFileSync(CATALOG_PATH, "utf8"));
const assignedUrls = new Set();
let changed = 0;
let unresolved = 0;

for (const family of catalog.families) {
  for (const model of family.models) {
    const nextUrl = imageFor(family.name, model.name);
    if (!nextUrl) {
      unresolved++;
      continue;
    }
    assignedUrls.add(nextUrl);
    if (model.imageUrl !== nextUrl) {
      model.imageUrl = nextUrl;
      changed++;
    }
  }
}

const invalidUrls = [];
for (const url of assignedUrls) {
  if (!(await validUrl(url))) invalidUrls.push(url);
}

if (invalidUrls.length > 0) {
  console.error(JSON.stringify({ error: "Invalid Apple image URLs", invalidUrls }, null, 2));
  process.exit(1);
}

fs.writeFileSync(CATALOG_PATH, `${JSON.stringify(catalog, null, 2)}\n`);

const models = catalog.families.flatMap((family) => family.models.map((model) => ({ family: family.name, model })));
const byUrl = new Map();
for (const { family, model } of models) {
  if (!model.imageUrl) continue;
  if (!byUrl.has(model.imageUrl)) byUrl.set(model.imageUrl, []);
  byUrl.get(model.imageUrl).push(`${family} :: ${model.name}`);
}

const reused = [...byUrl.entries()].filter(([, rows]) => rows.length > 1);
console.log(JSON.stringify({
  changed,
  models: models.length,
  missingImages: models.filter(({ model }) => !model.imageUrl).length,
  unresolved,
  uniqueImages: byUrl.size,
  reusedImageUrls: reused.length,
  maxModelsPerImage: Math.max(...[...byUrl.values()].map((rows) => rows.length)),
}, null, 2));
