/**
 * Enriched Poco phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/poco.json.
 */

export type PocoEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type PocoEnrichedModelSpecs = {
  display?: string | null;
  processor?: string | null;
  ram?: string | null;
  storage?: string[] | null;
  battery?: string | null;
  os?: string | null;
  weight?: string | null;
  dimensions?: string | null;
  colors?: string | null;
};

export type PocoEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: PocoEnrichedModelSpecs;
  variants: PocoEnrichedModelVariant[];
  sources?: string[];
};

export type PocoEnrichedFamily = {
  name: string;
  models: PocoEnrichedModel[];
};

export const POCO_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: PocoEnrichedFamily[];
} = {
  "brandName": "Poco",
  "logoUrl": "https://logo.clearbit.com/po.co",
  "sortOrder": 5,
  "families": [
    {
      "name": "POCO F",
      "models": [
        {
          "name": "POCO F7",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F7 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F7 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7.jpg"
          ]
        },
        {
          "name": "POCO F7 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F7 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F7 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F7 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO F7 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1440 x 3200 pixels, 20:9 ratio (~526 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 15, HyperOS 2",
            "weight": "206 g (7.27 oz)",
            "dimensions": "160.3 x 75 x 8.1 mm (6.31 x 2.95 x 0.32 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "POCO F7 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO F7 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7-pro.jpg"
          ]
        },
        {
          "name": "POCO F7 Ultra",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7-ultra.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1440 x 3200 pixels, 20:9 ratio (~526 ppi density)",
            "processor": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5300 mAh",
            "os": "Android 15, HyperOS 2",
            "weight": "212 g (7.48 oz)",
            "dimensions": "160.3 x 75 x 8.4 mm (6.31 x 2.95 x 0.33 in)",
            "colors": "Black, Yellow"
          },
          "variants": [
            {
              "name": "POCO F7 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO F7 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f7-ultra.jpg"
          ]
        },
        {
          "name": "POCO F8 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f8-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f8-pro.jpg"
          ]
        },
        {
          "name": "POCO F8 Ultra",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f8-ultra.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F8 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F8 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f8-ultra.jpg"
          ]
        },
        {
          "name": "POCO F6",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, HDR10+, Dolby Vision, 500 nits (typ), 1200 nits (HBM), 2400 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Qualcomm SM8635 Snapdragon 8s Gen 3 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades, HyperOS",
            "weight": "179.0",
            "dimensions": "160.5 x 74.5 x 8 mm (6.32 x 2.93 x 0.31 in)",
            "colors": "Black, Green, Titanium"
          },
          "variants": [
            {
              "name": "POCO F6 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6.jpg"
          ]
        },
        {
          "name": "POCO F6 Deadpool",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F6 Deadpool 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO F6 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 700 nits (typ), 1200 nits (HBM), 4000 nits (peak), 6.67 inches, 1440 x 3200",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades, HyperOS",
            "weight": "209.0",
            "dimensions": "160.9 x 75 x 8.2 mm (6.33 x 2.95 x 0.32 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "POCO F6 Pro 16GB 1000GB",
              "ram": "16GB",
              "storage": "1000GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f6-pro.jpg"
          ]
        },
        {
          "name": "POCO F5",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-2.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, Dolby Vision, HDR10+, 120Hz, 500 nits (typ), 1000 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM7475-AB Snapdragon 7+ Gen 2 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14, HyperOS",
            "weight": "181.0",
            "dimensions": "161.1 x 75 x 7.9 mm (6.34 x 2.95 x 0.31 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "POCO F5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-2.jpg"
          ]
        },
        {
          "name": "POCO F5 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro-1.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 500 nits (typ), 1000 nits (HBM), 1400 nits (peak), 6.67 inches, 1440 x 3200",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5160",
            "os": "Android 13, MIUI 14 for POCO",
            "weight": "204.0",
            "dimensions": "162.8 x 75.4 x 8.6 mm (6.41 x 2.97 x 0.34 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "POCO F5 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f5-pro-1.jpg"
          ]
        },
        {
          "name": "POCO F4",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f4-5g.jpg",
          "specs": {
            "display": "AMOLED, 120Hz, HDR10+, Dolby Vision, 900 nits (HBM), 1300 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 12, upgradable to Android 13, MIUI 14.2 for POCO",
            "weight": "195.0",
            "dimensions": "163.2 x 76 x 7.7 mm (6.43 x 2.99 x 0.30 in)",
            "colors": "Moonlight Silver, Night Black, Nebula Green"
          },
          "variants": [
            {
              "name": "POCO F4 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f4-5g.jpg"
          ]
        },
        {
          "name": "POCO F4 GT",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f4-gt.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 800 nits (HBM), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700",
            "os": "Android 12, upgradable to Android 13, MIUI 14",
            "weight": "210.0",
            "dimensions": "162.5 x 76.7 x 8.5 mm (6.40 x 3.02 x 0.33 in)",
            "colors": "Stealth Black, Knight Silver, Cyber Yellow"
          },
          "variants": [
            {
              "name": "POCO F4 GT 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f4-gt.jpg"
          ]
        },
        {
          "name": "POCO F3",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f3.jpg",
          "specs": {
            "display": "AMOLED, 120Hz, HDR10+, 1300 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4520",
            "os": "Android 11, upgradable to Android 13, HyperOS",
            "weight": "196.0",
            "dimensions": "163.7 x 76.4 x 7.8 mm (6.44 x 3.01 x 0.31 in)",
            "colors": "Arctic White, Night Black, Deep Ocean Blue, Moonlight Silver"
          },
          "variants": [
            {
              "name": "POCO F3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f3.jpg"
          ]
        },
        {
          "name": "POCO F3 GT",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/poco-f3-gt.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5065 mAh",
            "os": "Android 11, upgradable to Android 12, MIUI 13 for POCO",
            "weight": "205 g (7.23 oz)",
            "dimensions": "161.9 x 76.9 x 8.3 mm (6.37 x 3.03 x 0.33 in)",
            "colors": "Predator Black, Gunmetal Silver"
          },
          "variants": [
            {
              "name": "POCO F3 GT 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO F3 GT 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO F3 GT 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/poco-f3-gt.jpg"
          ]
        },
        {
          "name": "POCO F2 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f2-pro.jpg",
          "specs": {
            "display": "Super AMOLED, HDR10+, 500 nits (typ), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700",
            "os": "Android 10, upgradable to Android 12, MIUI 14",
            "weight": "219.0",
            "dimensions": "163.3 x 75.4 x 8.9 mm (6.43 x 2.97 x 0.35 in)",
            "colors": "Neon Blue, Phantom White, Electric Purple, Cyber Gray"
          },
          "variants": [
            {
              "name": "POCO F2 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-f2-pro.jpg"
          ]
        },
        {
          "name": "POCO F1",
          "aliases": [
            "Pocophone F1"
          ],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO F1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO F1 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Poco_(smartphone)"
          ]
        }
      ]
    },
    {
      "name": "POCO X",
      "models": [
        {
          "name": "POCO X8 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x8-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x8-pro.jpg"
          ]
        },
        {
          "name": "POCO X8 Pro Iron Man",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X8 Pro Iron Man 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO X8 Pro Max",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x8-pro-max.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X8 Pro Max 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X8 Pro Max 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x8-pro-max.jpg"
          ]
        },
        {
          "name": "POCO X7",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x7.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1220 x 2712 pixels, 20:9 ratio (~446 ppi density)",
            "processor": "Mediatek Dimensity 7300 Ultra (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5110 mAh (Global)",
            "os": "Android 14, HyperOS",
            "weight": "185.5 g or 190 g (6.70 oz)",
            "dimensions": "162.3 x 74.4 x 8.4 mm or 8.6 mm",
            "colors": "Black, Green, Silver"
          },
          "variants": [
            {
              "name": "POCO X7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X7 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x7.jpg"
          ]
        },
        {
          "name": "POCO X7 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x7-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1220 x 2712 pixels, 20:9 ratio (~446 ppi density)",
            "processor": "Mediatek Dimensity 8400 Ultra (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6000 mAh (Global)",
            "os": "Android 15, HyperOS 2",
            "weight": "195 g or 198 g (6.88 oz)",
            "dimensions": "160.8 x 75.2 x 8.3 mm (6.33 x 2.96 x 0.33 in)",
            "colors": "Black/Yellow, White, Green, Red (Iron Man Edition)"
          },
          "variants": [
            {
              "name": "POCO X7 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X7 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X7 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x7-pro.jpg"
          ]
        },
        {
          "name": "POCO X7 Pro Iron Man Edition",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X7 Pro Iron Man Edition 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO X6",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, 500 nits (typ), 1200 nits (HBM), 1800 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Qualcomm SM7435-AB Snapdragon 7s Gen 2 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5100",
            "os": "Android 13, up to 3 major Android upgrades, HyperOS",
            "weight": "181.0",
            "dimensions": "161.2 x 74.3 x 8 mm (6.35 x 2.93 x 0.31 in)",
            "colors": "Black, White, Blue"
          },
          "variants": [
            {
              "name": "POCO X6 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6.jpg"
          ]
        },
        {
          "name": "POCO X6 Neo",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-neo-.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 6080 (6 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13",
            "weight": "175 g (6.17 oz)",
            "dimensions": "161.1 x 75 x 7.7 mm (6.34 x 2.95 x 0.30 in)",
            "colors": "Astral Black, Horizon Blue, Martian Orange"
          },
          "variants": [
            {
              "name": "POCO X6 Neo 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X6 Neo 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-neo-.jpg"
          ]
        },
        {
          "name": "POCO X6 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, HDR10+, Dolby Vision, 500 nits (typ), 1200 nits (HBM), 1800 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 8300 Ultra (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades, HyperOS",
            "weight": "186.0",
            "dimensions": "160.5 x 74.3 x 8.3 mm (6.32 x 2.93 x 0.33 in)",
            "colors": "Black, Yellow, Gray"
          },
          "variants": [
            {
              "name": "POCO X6 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x6-pro.jpg"
          ]
        },
        {
          "name": "POCO X5",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Super AMOLED, 120Hz, 700 nits (HBM), 1200 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, MIUI 13 for POCO",
            "weight": "189.0",
            "dimensions": "165.9 x 76.2 x 8 mm (6.53 x 3.00 x 0.31 in)",
            "colors": "Jaguar Black, Wildcat Blue, Supernova Green"
          },
          "variants": [
            {
              "name": "POCO X5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO X5 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x5-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X5 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X5 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x5-5g.jpg"
          ]
        },
        {
          "name": "POCO X5 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x5-pro-5g.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 500 nits (typ), 900 nits (HBM), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 13, MIUI 14 for POCO",
            "weight": "181.0",
            "dimensions": "162.9 x 76 x 7.9 mm (6.41 x 2.99 x 0.31 in)",
            "colors": "Astral Black, Horizon Blue, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO X5 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x5-pro-5g.jpg"
          ]
        },
        {
          "name": "POCO X4 GT",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-gt.jpg",
          "specs": {
            "display": "IPS LCD, 144Hz, HDR10, Dolby Vision, 500 nits (typ), 650 nits (HBM), 6.6 inches, 1080 x 2460",
            "processor": "Mediatek Dimensity 8100 (5 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5080",
            "os": "Android 12, MIUI 13 for POCO",
            "weight": "200.0",
            "dimensions": "163.6 x 74.3 x 8.9 mm (6.44 x 2.93 x 0.35 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "POCO X4 GT 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-gt.jpg"
          ]
        },
        {
          "name": "POCO X4 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO X4 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X4 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X4 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO X4 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x4-pro.jpg"
          ]
        },
        {
          "name": "POCO X4 Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Super AMOLED, 120Hz, 700 nits, 1200 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 13 for POCO",
            "weight": "205.0",
            "dimensions": "164.2 x 76.1 x 8.1 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Laser Black, Laser Blue, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO X4 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO X3 GT",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 120Hz, HDR10, 450 nits (typ), 6.6 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 12.5 for POCO",
            "weight": "193.0",
            "dimensions": "163.3 x 75.9 x 8.9 mm (6.43 x 2.99 x 0.35 in)",
            "colors": "Stargaze Black, Wave Blue, Cloud White"
          },
          "variants": [
            {
              "name": "POCO X3 GT 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO X3 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-pro-.jpg",
          "specs": {
            "display": "IPS LCD, 120Hz, HDR10, 450 nits (typ), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm Snapdragon 860 (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5160",
            "os": "Android 11, upgradable to Android 12, MIUI 13 for POCO",
            "weight": "215.0",
            "dimensions": "165.3 x 76.8 x 9.4 mm (6.51 x 3.02 x 0.37 in)",
            "colors": "Phantom Black, Frost Blue, Metal Bronze"
          },
          "variants": [
            {
              "name": "POCO X3 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-pro-.jpg"
          ]
        },
        {
          "name": "POCO X2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x2.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 10, upgradable to Android 11, MIUI 12.5",
            "weight": "208 g (7.34 oz)",
            "dimensions": "165.3 x 76.6 x 8.8 mm (6.51 x 3.02 x 0.35 in)",
            "colors": "Atlantis Blue, Matrix Purple, Phoenix Red"
          },
          "variants": [
            {
              "name": "POCO X2 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x2.jpg"
          ]
        },
        {
          "name": "POCO X3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7150-AC Snapdragon 732G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 6000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "225 g (7.94 oz)",
            "dimensions": "165.3 x 76.8 x 10.1 mm (6.51 x 3.02 x 0.40 in)",
            "colors": "Cobalt Blue, Shadow Gray"
          },
          "variants": [
            {
              "name": "POCO X3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO X3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3.jpg"
          ]
        },
        {
          "name": "POCO X3 NFC",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-nfc.jpg",
          "specs": {
            "display": "IPS LCD, 120Hz, HDR10, 450 nits (typ), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM7150-AC Snapdragon 732G (8 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5160",
            "os": "Android 10, upgradable to Android 12, MIUI 14",
            "weight": "215.0",
            "dimensions": "165.3 x 76.8 x 9.4 mm (6.51 x 3.02 x 0.37 in)",
            "colors": "Cobalt Blue, Shadow Gray"
          },
          "variants": [
            {
              "name": "POCO X3 NFC 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-x3-nfc.jpg"
          ]
        }
      ]
    },
    {
      "name": "POCO M",
      "models": [
        {
          "name": "POCO M8",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m8.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M8 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m8.jpg"
          ]
        },
        {
          "name": "POCO M8 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M8 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO M8 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m8-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M8 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m8-pro.jpg"
          ]
        },
        {
          "name": "POCO M8 Pro 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M8 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8 Pro 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO M8s 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M8s 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8s 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M8s 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO M7",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "6.88 inches, 112.4 cm, 720 x 1640 pixels (~260 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5160 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HyperOS",
            "weight": "205.4 g (7.23 oz)",
            "dimensions": "171.9 x 77.8 x 8.2 mm (6.77 x 3.06 x 0.32 in)",
            "colors": "Ocean Blue, Satin Black, Mint Green"
          },
          "variants": [
            {
              "name": "POCO M7 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO M7 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m7-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M7 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M7 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M7 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m7-5g.jpg"
          ]
        },
        {
          "name": "POCO M7 Plus 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M7 Plus 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M7 Plus 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        },
        {
          "name": "POCO M6",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "6.74 inches, 109.7 cm, 720 x 1600 pixels, 20:9 ratio (~260 ppi density)",
            "processor": "Mediatek Dimensity 6100+ (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, MIUI 14",
            "weight": "195 g (6.88 oz)",
            "dimensions": "168 x 78 x 8.1 mm (6.61 x 3.07 x 0.32 in)",
            "colors": "Galactic Black, Orion Blue"
          },
          "variants": [
            {
              "name": "POCO M6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M6 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M6 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M6 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO M6 4G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-4g.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 550 nits (HBM), 6.79 inches, 1080 x 2460",
            "processor": "Mediatek Helio G91 Ultra (12 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5030",
            "os": "Android 14, HyperOS",
            "weight": "205.0",
            "dimensions": "168.6 x 76.3 x 8.3 mm (6.64 x 3.00 x 0.33 in)",
            "colors": "Black, Silver, Purple"
          },
          "variants": [
            {
              "name": "POCO M6 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-4g.jpg"
          ]
        },
        {
          "name": "POCO M6 Plus 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-plus-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M6 Plus 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M6 Plus 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-plus-5g.jpg"
          ]
        },
        {
          "name": "POCO M6 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/poco-m6-pro.jpg",
          "specs": {
            "display": "AMOLED, 120Hz, 1000 nits (HBM), 1300 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Mediatek Helio G99 Ultra",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 13, MIUI 14, planned upgrade to Android 14, HyperOS",
            "weight": "179.0",
            "dimensions": "161.1 x 75 x 8 mm (6.34 x 2.95 x 0.31 in)",
            "colors": "Black, Blue, Purple"
          },
          "variants": [
            {
              "name": "POCO M6 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/poco-m6-pro.jpg"
          ]
        },
        {
          "name": "POCO M7 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m7-pro-5g-.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 7025 Ultra (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5110 mAh",
            "os": "Android 14, up to 2 (INT) / 4 (EU) major Android upgrades, HyperOS",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162.4 x 75.7 x 8 mm (6.39 x 2.98 x 0.31 in)",
            "colors": "Lavender Frost, Lunar Dust, Olive Twilight"
          },
          "variants": [
            {
              "name": "POCO M7 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M7 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m7-pro-5g-.jpg"
          ]
        },
        {
          "name": "POCO M6 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-5g-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M6 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M6 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M6 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-5g-.jpg"
          ]
        },
        {
          "name": "POCO M6 Pro 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-pro-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M6 Pro 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M6 Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO M6 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m6-pro-5g.jpg"
          ]
        },
        {
          "name": "POCO M4 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-5g.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 500 nits (HBM), 6.58 inches, 1080 x 2408",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 12, MIUI 13",
            "weight": "200.0",
            "dimensions": "164 x 76.1 x 8.9 mm (6.46 x 3.00 x 0.35 in)",
            "colors": "Power Black, Cool Blue, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO M4 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-5g.jpg"
          ]
        },
        {
          "name": "POCO M4 5G India",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 90Hz, 500 nits (HBM), 6.58 inches, 1080 x 2408",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 12, MIUI 13",
            "weight": "200.0",
            "dimensions": "164 x 76.1 x 8.9 mm (6.46 x 3.00 x 0.35 in)",
            "colors": "Power Black, Cool Blue, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO M4 5G India 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO M4 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro.jpg",
          "specs": {
            "display": "AMOLED, 90Hz, 700 nits, 1000 nits (peak), 6.43 inches, 1080 x 2400",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 13 for POCO",
            "weight": "179.5",
            "dimensions": "159.9 x 73.9 x 8.1 mm (6.30 x 2.91 x 0.32 in)",
            "colors": "Power Black, Cool Blue, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO M4 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro.jpg"
          ]
        },
        {
          "name": "POCO M5",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 500 nits (HBM), 6.58 inches, 1080 x 2408",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 14, HyperOS",
            "weight": "201.0",
            "dimensions": "164 x 76.1 x 8.9 mm (6.46 x 3.00 x 0.35 in)",
            "colors": "Black, Green, Yellow"
          },
          "variants": [
            {
              "name": "POCO M5 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5.jpg"
          ]
        },
        {
          "name": "POCO M5s",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5s.jpg",
          "specs": {
            "display": "AMOLED, 450 nits (typ), 700 nits (HBM), 1100 nits (peak), 6.43 inches, 1080 x 2400",
            "processor": "Mediatek MT6785V/CD Helio G95 (12 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 12, MIUI 13",
            "weight": "178.8",
            "dimensions": "160.5 x 74.5 x 8.3 mm (6.32 x 2.93 x 0.33 in)",
            "colors": "Gray, Blue, White"
          },
          "variants": [
            {
              "name": "POCO M5s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m5s.jpg"
          ]
        },
        {
          "name": "POCO M2 Reloaded",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2-reloaded.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "198 g (6.98 oz)",
            "dimensions": "163.3 x 77 x 9.1 mm (6.43 x 3.03 x 0.36 in)",
            "colors": "Pitch Black (Greyish Black), Slate Blue (Mostly Blue)"
          },
          "variants": [
            {
              "name": "POCO M2 Reloaded 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m2-reloaded.jpg"
          ]
        },
        {
          "name": "POCO M3 Pro 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3-pro-5g.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 400 nits (typ), 500 nits (HBM), 6.5 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 12",
            "weight": "190.0",
            "dimensions": "161.8 x 75.3 x 8.9 mm (6.37 x 2.96 x 0.35 in)",
            "colors": "Poco Yellow, Power Black, Cool Blue"
          },
          "variants": [
            {
              "name": "POCO M3 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3-pro-5g.jpg"
          ]
        },
        {
          "name": "POCO M3 Pro 5G India",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 90Hz, 400 nits (typ), 500 nits (HBM), 6.5 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 12",
            "weight": "190.0",
            "dimensions": "161.8 x 75.3 x 8.9 mm (6.37 x 2.96 x 0.35 in)",
            "colors": "Poco Yellow, Power Black, Cool Blue"
          },
          "variants": [
            {
              "name": "POCO M3 Pro 5G India 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO M4 Pro 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro-5g.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 450 nits (typ), 6.6 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, upgradable to Android 12, MIUI 13",
            "weight": "195.0",
            "dimensions": "163.6 x 75.8 x 8.8 mm (6.44 x 2.98 x 0.35 in)",
            "colors": "Poco Yellow, Power Black, Cool Blue"
          },
          "variants": [
            {
              "name": "POCO M4 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m4-pro-5g.jpg"
          ]
        },
        {
          "name": "POCO M2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "198 g (6.98 oz)",
            "dimensions": "163.3 x 77 x 9.1 mm (6.43 x 3.03 x 0.36 in)",
            "colors": "Brick Red, Pitch Black, Slate Blue"
          },
          "variants": [
            {
              "name": "POCO M2 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO M2 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/poco-m2-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "209 g (7.37 oz)",
            "dimensions": "165.8 x 76.7 x 8.8 mm (6.53 x 3.02 x 0.35 in)",
            "colors": "Out Of The Blue, Green and Greener, Two Shades of Black"
          },
          "variants": [
            {
              "name": "POCO M2 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M2 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO M2 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/poco-m2-pro.jpg"
          ]
        },
        {
          "name": "POCO M3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3.jpg",
          "specs": {
            "display": "IPS LCD, 400 nits (typ), 6.53 inches, 1080 x 2340",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000",
            "os": "Android 10, MIUI 12",
            "weight": "198.0",
            "dimensions": "162.3 x 77.3 x 9.6 mm (6.39 x 3.04 x 0.38 in)",
            "colors": "Cool Blue, Poco Yellow, Power Black"
          },
          "variants": [
            {
              "name": "POCO M3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-m3.jpg"
          ]
        },
        {
          "name": "POCO M3 MZB087AIN",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO M3 MZB087AIN 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/"
          ]
        }
      ]
    },
    {
      "name": "POCO C",
      "models": [
        {
          "name": "POCO C81",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C81 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C81 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81.jpg"
          ]
        },
        {
          "name": "POCO C81 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C81 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C81 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C81 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81-pro.jpg"
          ]
        },
        {
          "name": "POCO C81x",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81x.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C81x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C81x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c81x.jpg"
          ]
        },
        {
          "name": "POCO C85x",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85x-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C85x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85x-.jpg"
          ]
        },
        {
          "name": "POCO C71",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c71.jpg",
          "specs": {
            "display": "6.88 inches, 112.4 cm, 720 x 1640 pixels (~260 ppi density)",
            "processor": "Unisoc T7250 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5200 mAh",
            "os": "Android 15, up to 2 major Android upgrades, HyperOS",
            "weight": "193 g (6.81 oz)",
            "dimensions": "171.8 x 77.8 x 8.3 mm (6.76 x 3.06 x 0.33 in)",
            "colors": "Power Black, Cool Blue, Desert Gold"
          },
          "variants": [
            {
              "name": "POCO C71 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C71 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c71.jpg"
          ]
        },
        {
          "name": "POCO C75 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75-5g-.jpg",
          "specs": {
            "display": "6.88 inches, 112.4 cm, 720 x 1640 pixels (~260 ppi density)",
            "processor": "Qualcomm SM4635 Snapdragon 4s Gen 2 (4 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5160 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HyperOS",
            "weight": "212.4 g (7.51 oz)",
            "dimensions": "171.9 x 77.8 x 8.2 mm (6.77 x 3.06 x 0.32 in)",
            "colors": "Aqua Bliss, Enchanted Green, Silver Stardust"
          },
          "variants": [
            {
              "name": "POCO C75 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75-5g-.jpg"
          ]
        },
        {
          "name": "POCO C85",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C85 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85.jpg"
          ]
        },
        {
          "name": "POCO C85 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "POCO C85 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "POCO C85 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c85-5g.jpg"
          ]
        },
        {
          "name": "POCO C61",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c61.jpg",
          "specs": {
            "display": "6.71 inches, 106.5 cm, 720 x 1650 pixels (~268 ppi density)",
            "processor": "Mediatek Helio G36 (12 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 14, MIUI",
            "weight": "199 g (7.05 oz)",
            "dimensions": "168.4 x 76.3 x 8.3 mm (6.63 x 3.00 x 0.33 in)",
            "colors": "Black, Blue, Green"
          },
          "variants": [
            {
              "name": "POCO C61 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C61 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C61 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C61 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c61.jpg"
          ]
        },
        {
          "name": "POCO C75",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75-.jpg",
          "specs": {
            "display": "6.88 inches, 112.4 cm, 720 x 1640 pixels (~260 ppi density)",
            "processor": "Mediatek Helio G81 Ultra (12 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5160 mAh",
            "os": "Android 14, HyperOS",
            "weight": "204 g (7.20 oz)",
            "dimensions": "171.9 x 77.8 x 8.2 mm (6.77 x 3.06 x 0.32 in)",
            "colors": "Black, Green, Gold"
          },
          "variants": [
            {
              "name": "POCO C75 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C75 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c75-.jpg"
          ]
        },
        {
          "name": "POCO C50",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c50.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB/3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12 (Go edition)",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.9 x 76.8 x 9.1 mm (6.49 x 3.02 x 0.36 in)",
            "colors": "Country Green, Royal Blue"
          },
          "variants": [
            {
              "name": "POCO C50 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C50 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c50.jpg"
          ]
        },
        {
          "name": "POCO C51",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c51.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Helio G36 (12 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13 (Go edition), MIUI",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.9 x 76.8 x 9.1 mm (6.49 x 3.02 x 0.36 in)",
            "colors": "Power Black, Royal Blue"
          },
          "variants": [
            {
              "name": "POCO C51 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C51 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c51.jpg"
          ]
        },
        {
          "name": "POCO C55",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c55.jpg",
          "specs": {
            "display": "6.71 inches, 106.5 cm, 720 x 1650 pixels (~268 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, MIUI 13 for POCO",
            "weight": "192 g (6.77 oz)",
            "dimensions": "168.8 x 76.4 x 8.8 mm (6.65 x 3.01 x 0.35 in)",
            "colors": "Cool Blue, Power Black, Forest Green"
          },
          "variants": [
            {
              "name": "POCO C55 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C55 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c55.jpg"
          ]
        },
        {
          "name": "POCO C65",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c65.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 450 nits (typ), 600 nits (HBM), 6.74 inches, 720 x 1600",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, MIUI 14 for POCO",
            "weight": "192.0",
            "dimensions": "168 x 78 x 8.1 mm (6.61 x 3.07 x 0.32 in)",
            "colors": "Black, Blue, Purple"
          },
          "variants": [
            {
              "name": "POCO C65 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.mi.com/global/product-list/phone/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c65.jpg"
          ]
        },
        {
          "name": "POCO C65 India",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 90Hz, 450 nits (typ), 600 nits (HBM), 6.74 inches, 720 x 1600",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, MIUI 14 for POCO",
            "weight": "192.0",
            "dimensions": "168 x 78 x 8.1 mm (6.61 x 3.07 x 0.32 in)",
            "colors": "Black, Blue, Purple"
          },
          "variants": [
            {
              "name": "POCO C65 India 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "kaggle:gsmarena-derived-poco-specs"
          ]
        },
        {
          "name": "POCO C40",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c40.jpg",
          "specs": {
            "display": "IPS LCD, 400 nits, 6.71 inches, 720 x 1650",
            "processor": "JLQ JR510 (11 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "6000",
            "os": "Android 11, MIUI 13 for POCO",
            "weight": "204.0",
            "dimensions": "169.6 x 76.6 x 9.2 mm (6.68 x 3.02 x 0.36 in)",
            "colors": "Power Black, Coral Green, Poco Yellow"
          },
          "variants": [
            {
              "name": "POCO C40 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c40.jpg"
          ]
        },
        {
          "name": "POCO C31",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c31.jpg",
          "specs": {
            "display": "6.53 inches, 102.9 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "194 g (6.84 oz)",
            "dimensions": "164.9 x 77.1 x 9 mm (6.49 x 3.04 x 0.35 in)",
            "colors": "Royal Blue, Shadow Gray"
          },
          "variants": [
            {
              "name": "POCO C31 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C31 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c31.jpg"
          ]
        },
        {
          "name": "POCO C3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c3.jpg",
          "specs": {
            "display": "6.43 inches, 102.1 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "194 g (6.84 oz)",
            "dimensions": "164.9 x 77.1 x 9 mm (6.49 x 3.04 x 0.35 in)",
            "colors": "Arctic Blue, Lime Green, Matte Black"
          },
          "variants": [
            {
              "name": "POCO C3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "POCO C3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/poco/",
            "https://www.gsmchoice.com/en/catalogue/poco/models/1/",
            "https://en.wikipedia.org/wiki/Poco_(smartphone)",
            "kaggle:gsmarena-derived-poco-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-poco-c3.jpg"
          ]
        }
      ]
    }
  ]
};
