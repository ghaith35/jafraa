/**
 * Enriched Xiaomi phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/xiaomi.json.
 */

export type XiaomiEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type XiaomiEnrichedModelSpecs = {
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

export type XiaomiEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: XiaomiEnrichedModelSpecs;
  variants: XiaomiEnrichedModelVariant[];
  sources?: string[];
};

export type XiaomiEnrichedFamily = {
  name: string;
  models: XiaomiEnrichedModel[];
};

export const XIAOMI_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: XiaomiEnrichedFamily[];
} = {
  "brandName": "Xiaomi",
  "logoUrl": "https://logo.clearbit.com/mi.com",
  "sortOrder": 3,
  "families": [
    {
      "name": "Xiaomi Number Series",
      "models": [
        {
          "name": "Xiaomi 17 Ultra",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-ultra.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi 17 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Ultra 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-ultra.jpg"
          ]
        },
        {
          "name": "Xiaomi 15 Ultra",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra-.jpg",
          "specs": {
            "display": "6.73 inches, 108.9 cm, 1440 x 3200 pixels, 20:9 ratio (~522 ppi density)",
            "processor": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 5410 mAh - Global",
            "os": "Android 15, up to 4 major Android upgrades, HyperOS 2",
            "weight": "226 g or 229 g (7.97 oz)",
            "dimensions": "161.3 x 75.3 x 9.4 mm (6.35 x 2.96 x 0.37 in)",
            "colors": "Black, White, Silver Chrome, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 15 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 Ultra 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-ultra-.jpg"
          ]
        },
        {
          "name": "Xiaomi 15S Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15s-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi 15S Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 15S Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 15S Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15s-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 15T",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15t.jpg",
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
              "name": "Xiaomi 15T 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 15T 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15t.jpg"
          ]
        },
        {
          "name": "Xiaomi 15T Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15t-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi 15T Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 15T Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 15T Pro 12GB 1TB",
              "ram": "12GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 17",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17.jpg",
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
              "name": "Xiaomi 17 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17.jpg"
          ]
        },
        {
          "name": "Xiaomi 17 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi 17 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 17 Pro Max",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-pro-max.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi 17 Pro Max 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Pro Max 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 17 Pro Max 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-17-pro-max.jpg"
          ]
        },
        {
          "name": "Xiaomi 14 Ultra",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-new.jpg",
          "specs": {
            "display": "LTPO AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 1000 nits (typ), 3000 nits (peak), 6.73 inches, 1440 x 3200",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 4 major Android upgrades, HyperOS",
            "weight": "229.5",
            "dimensions": "161.4 x 75.3 x 9.2 mm (6.35 x 2.96 x 0.36 in)",
            "colors": "Black, Blue, White, Titanium Gray"
          },
          "variants": [
            {
              "name": "Xiaomi 14 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra-new.jpg"
          ]
        },
        {
          "name": "Xiaomi 14T",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 144Hz, Dolby Vision, HDR10+, 1600 nits (HBM), 4000 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 8300 Ultra (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, HyperOS",
            "weight": "193.0",
            "dimensions": "160.5 x 75.1 x 7.8 mm or 8.0 mm",
            "colors": "Titan Gray, Titan Blue, Titan Black, Lemon Green"
          },
          "variants": [
            {
              "name": "Xiaomi 14T 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t.jpg"
          ]
        },
        {
          "name": "Xiaomi 14T Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t-pro.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 144Hz, Dolby Vision, HDR10+, 1600 nits (HBM), 4000 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 9300+ (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 14, HyperOS",
            "weight": "209.0",
            "dimensions": "160.4 x 75.1 x 8.4 mm (6.31 x 2.96 x 0.33 in)",
            "colors": "Titan Gray, Titan Blue, Titan Black"
          },
          "variants": [
            {
              "name": "Xiaomi 14T Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 15",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg",
          "specs": {
            "display": "6.36 inches, 97.6 cm, 1200 x 2670 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 5240 mAh - Global",
            "os": "Android 15, up to 4 major Android upgrades, HyperOS 2",
            "weight": "189 / 191 / 192 g (6.67 oz)",
            "dimensions": "152.3 x 71.2 x 8.1 / 8.4 / 8.5 mm",
            "colors": "Black, White, Liquid Silver, Green, Lilac"
          },
          "variants": [
            {
              "name": "Xiaomi 15 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15.jpg"
          ]
        },
        {
          "name": "Xiaomi 15 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-pro.jpg",
          "specs": {
            "display": "6.73 inches, 108.9 cm, 1440 x 3200 pixels, 20:9 ratio (~522 ppi density)",
            "processor": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 6100 mAh",
            "os": "Android 15, HyperOS 2",
            "weight": "213 g or 219 g (7.51 oz)",
            "dimensions": "161.3 x 75.3 x 8.4 mm or 8.7 mm",
            "colors": "Black, White, Silver, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 15 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 15 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-15-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 13 Lite",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-lite.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, Dolby Vision, HDR10+, 120Hz, 500 nits (typ), 1000 nits (peak), 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM7450-AB Snapdragon 7 Gen 1 (4 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 12, MIUI 14",
            "weight": "171.0",
            "dimensions": "159.2 x 72.7 x 7.2 mm (6.27 x 2.86 x 0.28 in)",
            "colors": "Black, Lite Blue, Lite Pink"
          },
          "variants": [
            {
              "name": "Xiaomi 13 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-lite.jpg"
          ]
        },
        {
          "name": "Xiaomi 13 Ultra",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-ultra.jpg",
          "specs": {
            "display": "LTPO AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 1300 nits (HBM), 2600 nits (peak), 6.73 inches, 1440 x 3200",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14, HyperOS",
            "weight": "227.0",
            "dimensions": "163.2 x 74.6 x 9.1 mm (6.43 x 2.94 x 0.36 in)",
            "colors": "Black, Olive Green, White, Orange, Yellow, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 13 Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13-ultra.jpg"
          ]
        },
        {
          "name": "Xiaomi 13T",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 144Hz, Dolby Vision, HDR10+, 1200 nits (HBM), 2600 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 8200 Ultra (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, up to 4 major Android upgrades, HyperOS",
            "weight": "193.0",
            "dimensions": "162.2 x 75.7 x 8.5 mm (6.39 x 2.98 x 0.33 in)",
            "colors": "Alpine Blue, Meadow Green, Black"
          },
          "variants": [
            {
              "name": "Xiaomi 13T 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t.jpg"
          ]
        },
        {
          "name": "Xiaomi 13T Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t-pro.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 144Hz, Dolby Vision, HDR10+, 1200 nits (HBM), 2600 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 9200+ (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 13, up to 4 major Android upgrades, HyperOS",
            "weight": "200.0",
            "dimensions": "162.2 x 75.7 x 8.5 mm (6.39 x 2.98 x 0.33 in)",
            "colors": "Alpine Blue, Meadow Green, Black"
          },
          "variants": [
            {
              "name": "Xiaomi 13T Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-13t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 14",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg",
          "specs": {
            "display": "LTPO OLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 1000 nits (typ), 3000 nits (peak), 6.36 inches, 1200 x 2670",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "4610",
            "os": "Android 14, up to 4 major Android upgrades, HyperOS",
            "weight": "188.0",
            "dimensions": "152.8 x 71.5 x 8.2 mm or 8.3 mm",
            "colors": "Black, White, Jade Green, Pink"
          },
          "variants": [
            {
              "name": "Xiaomi 14 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14.jpg"
          ]
        },
        {
          "name": "Xiaomi 14 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-pro.jpg",
          "specs": {
            "display": "6.73 inches, 108.9 cm, 1440 x 3200 pixels, 20:9 ratio (~522 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Li-Po 4880 mAh",
            "os": "Android 14, HyperOS",
            "weight": "223 g or 230 g (7.87 oz)",
            "dimensions": "161.4 x 75.3 x 8.5 mm",
            "colors": "Black, Silver, Titanium, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 14 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 14 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 14 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 11i",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 920 (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 5160 mAh",
            "os": "Android 11, upgradable to Android 12, MIUI 13",
            "weight": "207 g (7.30 oz)",
            "dimensions": "163.7 x 76.2 x 8.3 mm (6.44 x 3.00 x 0.33 in)",
            "colors": "Camo Green, Stealth Black, Purple Mist, Pacific Pearl"
          },
          "variants": [
            {
              "name": "Xiaomi 11i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 11i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 11i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i.jpg"
          ]
        },
        {
          "name": "Xiaomi 11i HyperCharge",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i-hypercharge.jpg",
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
              "name": "Xiaomi 11i HyperCharge 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 11i HyperCharge 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11i-hypercharge.jpg"
          ]
        },
        {
          "name": "Xiaomi 12 Lite",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-12Lite.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4300 mAh",
            "os": "Android 12, upgradable to Android 14, HyperOS",
            "weight": "173 g (6.10 oz)",
            "dimensions": "159.3 x 73.7 x 7.3 mm (6.27 x 2.90 x 0.29 in)",
            "colors": "Black, Lite Green, Lite Pink"
          },
          "variants": [
            {
              "name": "Xiaomi 12 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-12-lite/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-12Lite.jpg"
          ]
        },
        {
          "name": "Xiaomi 12 Pro Dimensity",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12-pro-dimensity.jpg",
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
              "name": "Xiaomi 12 Pro Dimensity 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 12 Pro Dimensity 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12-pro-dimensity.jpg"
          ]
        },
        {
          "name": "Xiaomi 12S",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s.jpg",
          "specs": {
            "display": "6.28 inches, 95.2 cm, 1080 x 2400 pixels, 20:9 ratio (~419 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, MIUI 13",
            "weight": "179 g / 182 g (6.31 oz)",
            "dimensions": "152.7 x 69.9 x 8.2 mm or 8.7 mm",
            "colors": "Gray, White, Purple, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 12S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s.jpg"
          ]
        },
        {
          "name": "Xiaomi 12S Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-pro.jpg",
          "specs": {
            "display": "6.73 inches, 109.4 cm, 1440 x 3200 pixels, 20:9 ratio (~521 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4600 mAh",
            "os": "Android 12, MIUI 13",
            "weight": "203 g / 204 g (7.16 oz)",
            "dimensions": "163.6 x 74.6 x 8.2 mm or 8.7 mm",
            "colors": "Gray, White, Purple, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 12S Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 12S Ultra",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-ultra.jpg",
          "specs": {
            "display": "6.73 inches, 108.9 cm, 1440 x 3200 pixels, 20:9 ratio (~522 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4860 mAh",
            "os": "Android 12, MIUI 13",
            "weight": "225 g (7.94 oz)",
            "dimensions": "163.2 x 75 x 9.1 mm (6.43 x 2.95 x 0.36 in)",
            "colors": "Black, Dark Green"
          },
          "variants": [
            {
              "name": "Xiaomi 12S Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi 12S Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12s-ultra.jpg"
          ]
        },
        {
          "name": "Xiaomi 12T",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12t.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, HDR10+, 500 nits (typ), 900 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Mediatek Dimensity 8100 Ultra (5 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 14, MIUI 14",
            "weight": "202.0",
            "dimensions": "163.1 x 75.9 x 8.6 mm (6.42 x 2.99 x 0.34 in)",
            "colors": "Black, Silver, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 12T 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12t.jpg"
          ]
        },
        {
          "name": "Xiaomi 12T Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12t-pro.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 500 nits (typ), 900 nits (peak), 6.67 inches, 1220 x 2712",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 14, HyperOS",
            "weight": "205.0",
            "dimensions": "163.1 x 75.9 x 8.6 mm (6.42 x 2.99 x 0.34 in)",
            "colors": "Black, Silver, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 12T Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 13",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-13.jpg",
          "specs": {
            "display": "AMOLED, 120Hz, Dolby Vision, HDR10+, 1200 nits (HBM), 1900 nits (peak), 6.36 inches, 1080 x 2400",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4500",
            "os": "Android 13, upgradable to Android 14, MIUI 14",
            "weight": "185.0",
            "dimensions": "152.8 x 71.5 x 8.0 mm or 8.1 mm",
            "colors": "White, Black, Flora Green, Mountain Blue, Red, Blue, Yellow, Green, Gray"
          },
          "variants": [
            {
              "name": "Xiaomi 13 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-13/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-13.jpg"
          ]
        },
        {
          "name": "Xiaomi 13 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-13-Pro.jpg",
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 1200 nits (HBM), 1900 nits (peak), 6.73 inches, 1440 x 3200",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4820",
            "os": "Android 13, upgradable to Android 14, HyperOS",
            "weight": "210.0",
            "dimensions": "162.9 x 74.6 x 8.4 mm or 8.7 mm",
            "colors": "Ceramic White, Ceramic Black, Ceramic Flora Green, Mountain Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 13 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-13-pro/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-13-Pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 11 Lite",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Lite.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
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
              "name": "Xiaomi 11 Lite 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 11 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 11 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:override",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Lite.jpg"
          ]
        },
        {
          "name": "Xiaomi 11 Lite 5G",
          "aliases": [],
          "releaseYear": 2021,
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
              "name": "Xiaomi 11 Lite 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 11 Lite 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi 11 Lite 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        },
        {
          "name": "Xiaomi 11 Lite 5G NE",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11-lite-5g-ne.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, Dolby Vision, HDR10+, 90Hz, 500 nits (typ), 800 nits (HBM), 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4250",
            "os": "Android 11, upgradable to Android 12, MIUI 13",
            "weight": "158.0",
            "dimensions": "160.5 x 75.7 x 6.8 mm (6.32 x 2.98 x 0.27 in)",
            "colors": "Truffle Black (Vinyl Black), Bubblegum Blue (Jazz Blue), Peach Pink (Tuscany Coral), Snowflake White (Diamond Dazzle)"
          },
          "variants": [
            {
              "name": "Xiaomi 11 Lite 5G NE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11-lite-5g-ne.jpg"
          ]
        },
        {
          "name": "Xiaomi 11T",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11t.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 800 nits (typ), 1000 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, upgradable to Android 13, MIUI 14",
            "weight": "203.0",
            "dimensions": "164.1 x 76.9 x 8.8 mm (6.46 x 3.03 x 0.35 in)",
            "colors": "Meteorite Gray, Moonlight White, Celestial Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 11T 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11t.jpg"
          ]
        },
        {
          "name": "Xiaomi 11T Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11t-pro.jpg",
          "specs": {
            "display": "AMOLED, Dolby Vision, 1B colors, 120Hz, HDR10+, 800 nits (typ), 1000 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, upgradable to Android 13, MIUI 14",
            "weight": "204.0",
            "dimensions": "164.1 x 76.9 x 8.8 mm (6.46 x 3.03 x 0.35 in)",
            "colors": "Meteorite Gray, Moonlight White, Celestial Blue"
          },
          "variants": [
            {
              "name": "Xiaomi 11T Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-11t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 12",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 1100 nits (peak), 6.28 inches, 1080 x 2400",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 12, MIUI 13",
            "weight": "179.0",
            "dimensions": "152.7 x 69.9 x 8.2 mm (6.01 x 2.75 x 0.32 in)",
            "colors": "Gray, Blue, Purple, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 12 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12.jpg"
          ]
        },
        {
          "name": "Xiaomi 12 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12-pro.jpg",
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 120Hz, Dolby Vision, HDR10+, 1000 nits (HBM), 1500 nits (peak), 6.73 inches, 1440 x 3200",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600",
            "os": "Android 12, MIUI 13",
            "weight": "204.0",
            "dimensions": "163.6 x 74.6 x 8.2 mm (6.44 x 2.94 x 0.32 in)",
            "colors": "Gray, Blue, Purple, Green"
          },
          "variants": [
            {
              "name": "Xiaomi 12 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi 12X",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12x.jpg",
          "specs": {
            "display": "AMOLED, 68B colors, 120Hz, Dolby Vision, HDR10+, 1100 nits (peak), 6.28 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 11, MIUI 13",
            "weight": "176.0",
            "dimensions": "152.7 x 69.9 x 8.2 mm (6.01 x 2.75 x 0.32 in)",
            "colors": "Gray, Blue, Purple"
          },
          "variants": [
            {
              "name": "Xiaomi 12X 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-12x.jpg"
          ]
        }
      ]
    },
    {
      "name": "Mi Number Series",
      "models": [
        {
          "name": "Xiaomi Mi 10i 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10i-5g.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7225 Snapdragon 750G 5G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4820 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "214.5 g (7.55 oz)",
            "dimensions": "165.4 x 76.8 x 9 mm (6.51 x 3.02 x 0.35 in)",
            "colors": "Pacific Sunrise, Midnight Black, Atlantic Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10i 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10i 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10i-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10s.jpg",
          "specs": {
            "display": "6.67 inches, 109.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~386 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4780 mAh",
            "os": "Android 11, MIUI 12",
            "weight": "208 g (7.34 oz)",
            "dimensions": "162.6 x 74.8 x 9 mm (6.40 x 2.94 x 0.35 in)",
            "colors": "Titanium Black, Ice Blue, Pearl White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10s.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11 Lite",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED, 1B colors, HDR10, 90Hz, 500 nits (typ), 800 nits, 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM7150 Snapdragon 732G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4250",
            "os": "Android 11, MIUI 12",
            "weight": "157.0",
            "dimensions": "160.5 x 75.7 x 6.8 mm (6.32 x 2.98 x 0.27 in)",
            "colors": "Boba Black (Vinyl Black), Peach Pink (Tuscany Coral), Bubblegum Blue (Jazz Blue)"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs"
          ]
        },
        {
          "name": "Xiaomi Mi 11 Lite 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11-lite-5g.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, HDR10+, 90Hz, 500 nits (typ), 800 nits, 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM7350-AB Snapdragon 780G (5 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4250",
            "os": "Android 11, upgradable to Android 13, MIUI 14",
            "weight": "159.0",
            "dimensions": "160.5 x 75.7 x 6.8 mm (6.32 x 2.98 x 0.27 in)",
            "colors": "Truffle Black, Mint Green, Citrus Yellow"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11 Lite 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-11-lite-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Pro.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, Dolby Vision, 1500 nits (peak), 6.81 inches, 1440 x 3200",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 11, MIUI 12.5",
            "weight": "208.0",
            "dimensions": "164.3 x 74.6 x 8.5 mm (6.47 x 2.94 x 0.33 in)",
            "colors": "Black, Green, Purple"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-11-pro/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11 Ultra",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Ultra-Black.jpg",
          "specs": {
            "display": "6.81 inches, 112.0 cm, 1440 x 3200 pixels, 20:9 ratio (~515 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, upgradable to Android 13, MIUI 14",
            "weight": "234 g (8.25 oz)",
            "dimensions": "164.3 x 74.6 x 8.4 mm (6.47 x 2.94 x 0.33 in)",
            "colors": "Ceramic White (Cosmic White), Ceramic Black (Cosmic Black)"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11 Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 11 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 11 Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-11-ultra/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11-Ultra-Black.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11i",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11i.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4520 mAh",
            "os": "Android 11, MIUI 12",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.7 x 76.4 x 7.8 mm (6.44 x 3.01 x 0.31 in)",
            "colors": "Celestial Silver, Frosty White, Cosmic Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 11i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-11i/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-11i.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11X",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11x.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 4520 mAh",
            "os": "Android 11, MIUI 12",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.7 x 76.4 x 7.8 mm (6.44 x 3.01 x 0.31 in)",
            "colors": "Celestial Silver, Lunar White, Cosmic Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11X 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 11X 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11x.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11X Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11x-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4520 mAh",
            "os": "Android 11, MIUI 12",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.7 x 76.4 x 7.8 mm (6.44 x 3.01 x 0.31 in)",
            "colors": "Celestial Silver, Lunar White, Cosmic Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11X Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 11X Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11x-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-5g.jpg",
          "specs": {
            "display": "Super AMOLED, 90Hz, HDR10+, 500 nits (typ), 6.67 inches, 1080 x 2340",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4780",
            "os": "Android 10, upgradable to Android 13, MIUI 14",
            "weight": "208.0",
            "dimensions": "162.5 x 74.8 x 9 mm (6.40 x 2.94 x 0.35 in)",
            "colors": "Coral Green, Twilight Grey, Peach Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10 Lite 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi10-lite-5g.jpg",
          "specs": {
            "display": "6.57 inches, 104.2 cm, 1080 x 2400 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4160 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "192 g (6.77 oz)",
            "dimensions": "163.7 x 74.8 x 7.9 mm (6.44 x 2.94 x 0.31 in)",
            "colors": "Aurora Blue, Cosmic Gray, Dream White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10 Lite 5G 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Lite 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Lite 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi10-lite-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10 Pro 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-pro-5g.jpg",
          "specs": {
            "display": "6.67 inches, 109.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~386 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 10, upgradable to Android 13, MIUI 14",
            "weight": "208 g (7.34 oz)",
            "dimensions": "162.5 x 74.8 x 9 mm (6.40 x 2.94 x 0.35 in)",
            "colors": "Alpine White, Solstice Grey"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Pro 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-pro-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10 Ultra",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi10-ultra.jpg",
          "specs": {
            "display": "6.67 inches, 109.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~386 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Ion 4500 mAh, graphene-enhanced",
            "os": "Android 10, MIUI 12.5",
            "weight": "221.8 g (7.83 oz)",
            "dimensions": "162.4 x 75.1 x 9.5 mm (6.39 x 2.96 x 0.37 in)",
            "colors": "Obsidian Black, Mercury Silver, Transparent Edition"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10 Ultra 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi10-ultra.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10 Youth 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-youth-5g.jpg",
          "specs": {
            "display": "6.57 inches, 104.2 cm, 1080 x 2400 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4160 mAh",
            "os": "Android 10, MIUI 11",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164 x 74.8 x 7.9 mm (6.46 x 2.94 x 0.31 in)",
            "colors": "Blue, White, Black, Green, Orange/Peach"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10 Youth 5G 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Youth 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Youth 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10 Youth 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10-youth-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10T 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-5g.jpg",
          "specs": {
            "display": "IPS LCD, 144Hz, HDR10+, 500 nits (typ), 650 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 10, upgradable to Android 11, MIUI 12.5",
            "weight": "216.0",
            "dimensions": "165.1 x 76.4 x 9.3 mm (6.5 x 3.01 x 0.37 in)",
            "colors": "Cosmic Black, Lunar Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10T 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-10t-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10T Lite 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-10T-Lite-5G.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7225 Snapdragon 750G 5G (8 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4820 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "214.5 g (7.58 oz)",
            "dimensions": "165.4 x 76.8 x 9 mm (6.51 x 3.02 x 0.35 in)",
            "colors": "Atlantic Blue, Pearl Gray, Rose Gold Beach"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10T Lite 5G 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 10T Lite 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-10t-lite-5g/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-10T-Lite-5G.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 10T Pro 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-10T-Pro-5G.jpg",
          "specs": {
            "display": "IPS LCD, 144Hz, HDR10+, 500 nits (typ), 650 nits (peak), 6.67 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 10, upgradable to Android 11, MIUI 12.5",
            "weight": "218.0",
            "dimensions": "165.1 x 76.4 x 9.3 mm (6.5 x 3.01 x 0.37 in)",
            "colors": "Cosmic Black, Lunar Silver, Aurora Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 10T Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-10t-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mi-10T-Pro-5G.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 11",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 1500 nits (peak), 6.81 inches, 1440 x 3200",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600",
            "os": "Android 11, upgradable to Android 14, HyperOS",
            "weight": "196.0",
            "dimensions": "164.3 x 74.6 x 8.1 mm (Glass) / 8.6 mm (Leather)",
            "colors": "Horizon Blue, Cloud White, Midnight Gray, Special Edition Blue, Gold, Violet"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 11 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:override",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi11.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, MIUI 12.5",
            "weight": "173 g (6.10 oz)",
            "dimensions": "157.5 x 74.7 x 7.6 mm (6.20 x 2.94 x 0.30 in)",
            "colors": "Lavender Violet, Ocean Blue, Piano Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 8GB 64GB",
              "ram": "8GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9 Explorer",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9-explorer.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 9.0 (Pie), MIUI 10",
            "weight": "173 g (6.10 oz)",
            "dimensions": "157.5 x 74.7 x 7.6 mm (6.20 x 2.94 x 0.30 in)",
            "colors": "Transparent Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9 Explorer 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 Explorer 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-9-explorer/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9-explorer.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9 Lite",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9-lite.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4030 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, MIUI 11",
            "weight": "179 g (6.31 oz)",
            "dimensions": "156.8 x 74.5 x 8.7 mm (6.17 x 2.93 x 0.34 in)",
            "colors": "Pearl White, Aurora Blue, Onyx Grey"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9 Lite 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-9-lite/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9-lite.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9 Pro 5G",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-pro-5g.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 10, MIUI 11",
            "weight": "196 g (6.91 oz)",
            "dimensions": "157.2 x 74.6 x 8.5 mm (6.19 x 2.94 x 0.33 in)",
            "colors": "Dream White, Titanium Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 Pro 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-pro-5g.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9 SE",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-se.jpg",
          "specs": {
            "display": "5.97 inches, 87.5 cm, 1080 x 2340 pixels, 19.5:9 ratio (~432 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3070 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, MIUI 12.5",
            "weight": "155 g (5.47 oz)",
            "dimensions": "147.5 x 70.5 x 7.5 mm (5.81 x 2.78 x 0.30 in)",
            "colors": "Violet, Blue, Gray"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9 SE 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9 SE 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9-se.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9T",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9t.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730 (8 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, MIUI 12.1",
            "weight": "191 g (6.74 oz)",
            "dimensions": "156.7 x 74.3 x 8.8 mm (6.17 x 2.93 x 0.35 in)",
            "colors": "Carbon black, Red flame, Glacier blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9T 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9T 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-9t.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 9T Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9t-pro.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, MIUI 12.5",
            "weight": "191 g (6.74 oz)",
            "dimensions": "156.7 x 74.3 x 8.8 mm (6.17 x 2.93 x 0.35 in)",
            "colors": "Carbon black, Red flame, Glacier blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 9T Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9T Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 9T Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-9t-pro/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-9t-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 6X",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB",
            "storage": [
              "32GB",
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
              "name": "Xiaomi Mi 6X 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 6X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 6X 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 6X 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        },
        {
          "name": "Xiaomi Mi 8",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi8.jpg",
          "specs": {
            "display": "6.21 inches, 97.1 cm, 1080 x 2248 pixels (~402 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 3400 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, MIUI 12",
            "weight": "175 g (6.17 oz)",
            "dimensions": "154.9 x 74.8 x 7.6 mm (6.10 x 2.94 x 0.30 in)",
            "colors": "Black, Blue, White, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 8 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi8.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 8 Explorer",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-8-explorer.jpg",
          "specs": {
            "display": "6.21 inches, 97.1 cm, 1080 x 2248 pixels (~402 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, MIUI 12",
            "weight": "177 g (6.24 oz)",
            "dimensions": "154.9 x 74.8 x 7.6 mm (6.10 x 2.94 x 0.30 in)",
            "colors": "Black (transparent back)"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 8 Explorer 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-8-explorer/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-8-explorer.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 8 Lite",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-8-lite-.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3350 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, MIUI 11",
            "weight": "169 g (5.96 oz)",
            "dimensions": "156.4 x 75.8 x 7.5 mm (6.16 x 2.98 x 0.30 in)",
            "colors": "Midnight Black, Aurora Blue, Twilight Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 8 Lite 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 Lite 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 Lite 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-8-lite-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 8 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-8-pro-.jpg",
          "specs": {
            "display": "6.21 inches, 97.1 cm, 1080 x 2248 pixels (~402 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), planned upgrade to Android 10, MIUI 12",
            "weight": "177 g (6.24 oz)",
            "dimensions": "154.9 x 74.8 x 7.6 mm (6.10 x 2.94 x 0.30 in)",
            "colors": "Transparent Black, Meteorite Black, Twilight Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 8 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-8-pro-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 8 SE",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi8-se.jpg",
          "specs": {
            "display": "5.88 inches, 87.6 cm, 1080 x 2244 pixels, 18.7:9 ratio (~423 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3120 mAh, non-removable",
            "os": "Android 8.1 (Oreo), MIUI 9.5",
            "weight": "164 g (5.78 oz)",
            "dimensions": "147.3 x 73.1 x 7.5 mm (5.80 x 2.88 x 0.30 in)",
            "colors": "Gray, Blue, Red, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 8 SE 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 SE 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 8 SE 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi8-se.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 5c",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5c.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~428 ppi pixel density), 5.15 inches (~72.6% screen-to-body ratio)",
            "processor": "Xiaomi Surge S1",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "Non-removable Li-Ion 2860 mAh battery",
            "os": "Android 7.1 (Nougat)",
            "weight": "135 g",
            "dimensions": "144.4 x 69.7 x 7.1 mm (5.69 x 2.74 x 0.28 in)",
            "colors": "Black| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 5c 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5c.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 5X",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5x.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
            "storage": [
              "32GB",
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
              "name": "Xiaomi Mi 5X 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 5X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5x.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 6",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-6.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~428 ppi pixel density), 5.15 inches (~71.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8998 Snapdragon 835",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Po 3350 mAh battery",
            "os": "Android 7.1.1 (Nougat)",
            "weight": "168 g",
            "dimensions": "145.2 x 70.5 x 7.5 mm (5.72 x 2.78 x 0.30 in)",
            "colors": "Ceramic Black| Black| Blue| White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 6 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 6 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:override",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-6.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 4s",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4s.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8992 Snapdragon 808 (20 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), upgradable to 7.0 (Nougat), MIUI 10",
            "weight": "133 g (4.69 oz)",
            "dimensions": "139.3 x 70.8 x 7.8 mm (5.48 x 2.79 x 0.31 in)",
            "colors": "Black, White, Gold, Pink"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 4s 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4s.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/yu-yutopia.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~428 ppi pixel density), 5.15 inches (~73.1% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 820",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Po 3000 mAh battery",
            "os": "Android 6.0 (Marshmallow)| upgradable to 7.0 (Nougat)",
            "weight": "129 g",
            "dimensions": "144.6 x 69.2 x 7.3 mm (5.69 x 2.72 x 0.29 in)",
            "colors": "Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 5 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 5 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/yu-yutopia.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 5s",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "5.15 inches, 73.1 cm, 1080 x 1920 pixels, 16:9 ratio (~428 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 821 (14 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow), upgradable to 7.0 (Nougat), MIUI 10",
            "weight": "145 g (5.11 oz)",
            "dimensions": "145.6 x 70.3 x 8.3 mm (5.73 x 2.77 x 0.33 in)",
            "colors": "Silver, Gray, Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 5s 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 5s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs"
          ]
        },
        {
          "name": "Xiaomi Mi 5s Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5s1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~386 ppi pixel density), 5.7 inches (~74.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 821",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable 3200 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "168 g",
            "dimensions": "154.6 x 77.7 x 8 mm (6.09 x 3.06 x 0.31 in)",
            "colors": "Silver| Gray| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 5s Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi 5s Plus 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-5s1.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 4c",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4c.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8992 Snapdragon 808 (20 nm)",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3080 mAh, non-removable",
            "os": "Android 5.1.1 (Lollipop), upgradable to 7.0 (Nougat), MIUI 10",
            "weight": "132 g (4.66 oz)",
            "dimensions": "138.1 x 69.6 x 7.8 mm (5.44 x 2.74 x 0.31 in)",
            "colors": "White, grey, pink, yellow, blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 4c 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 4c 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4c.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 4i",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi4i.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8939 Snapdragon 615 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3120 mAh, non-removable",
            "os": "Android 5.0.2 (Lollipop), MIUI 8.2",
            "weight": "130 g (4.59 oz)",
            "dimensions": "138.1 x 69.6 x 7.8 mm (5.44 x 2.74 x 0.31 in)",
            "colors": "Dark Gray, Black, White, Yellow, Blue, Pink"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 4i 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 4i 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi4i.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 4",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801 (28 nm)",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "64GB"
            ],
            "battery": "Li-Ion 3080 mAh, non-removable",
            "os": "Android 4.4.3 (KitKat), upgradable to 6.0.1 (Marshmallow), MIUI 10",
            "weight": "149 g (5.26 oz)",
            "dimensions": "139.2 x 68.5 x 8.9 mm (5.48 x 2.70 x 0.35 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 4 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-4.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 2A",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2a.jpg",
          "specs": {
            "display": "4.5 inches, 55.8 cm, 720 x 1280 pixels, 16:9 ratio (~326 ppi density)",
            "processor": "Qualcomm Snapdragon S4 Pro",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2030 mAh, removable",
            "os": "Android 4.1 (Jelly Bean)",
            "weight": "133 g (4.69 oz)",
            "dimensions": "133 x 66.5 x 9.5 mm (5.24 x 2.62 x 0.37 in)",
            "colors": "Black (front panel), 4 color options (back panel)"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 2A 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2a.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 2S",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2s.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2000 mAh, removable",
            "os": "Android 4.1 (Jelly Bean), upgradable to 4.4.4 (KitKat), MIUI 5",
            "weight": "145 g (5.11 oz)",
            "dimensions": "126 x 62 x 10.2 mm (4.96 x 2.44 x 0.40 in)",
            "colors": "Black/white, black/blue, black/yellow, black/green, black/pink"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 2S 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 2S 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2s.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 3",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi3.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8274AB Snapdragon 800 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB",
              "64GB"
            ],
            "battery": "Li-Ion 3050 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 6.0 (Marshmallow), MIUI 5",
            "weight": "145 g (5.11 oz)",
            "dimensions": "144 x 73.6 x 8.1 mm (5.67 x 2.90 x 0.32 in)",
            "colors": "White, Gray, Black, Yellow, Pink, Blue, Gold, Green"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 3 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi3.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 1S",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-1s.jpg",
          "specs": {
            "display": "4.0 inches, 44.1 cm, 480 x 854 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm MSM8260 Snapdragon S3",
            "ram": "1GB",
            "storage": [
              "4GB"
            ],
            "battery": "Removable Li-Ion 1930 mAh battery",
            "os": "Android 4.0 (Ice Cream Sandwich)",
            "weight": "149 g (5.26 oz)",
            "dimensions": "125 x 63 x 11.9 mm (4.92 x 2.48 x 0.47 in)",
            "colors": "White, green, blue, red, violet, orange, gray"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 1S 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-1s/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-1s.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 2",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2000 mAh battery",
            "os": "Android 4.1 (Jelly Bean), upgradable to 4.4.4 (KitKat), MIUI 5",
            "weight": "145 g (5.11 oz)",
            "dimensions": "126 x 62 x 10.2 mm (4.96 x 2.44 x 0.40 in)",
            "colors": "White, green, blue, red"
          },
          "variants": [
            {
              "name": "Xiaomi Mi 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi2.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi 1",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi1.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "4GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi Mi 1 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi1.jpg"
          ]
        }
      ]
    },
    {
      "name": "MIX / Foldables",
      "models": [
        {
          "name": "Xiaomi MIX Fold 5",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi MIX Fold 5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi MIX Fold 5 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi MIX Fold 5 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        },
        {
          "name": "Xiaomi MIX Flip 2",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Flip-2.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi MIX Flip 2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi MIX Flip 2 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi MIX Flip 2 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mix-flip-2/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Flip-2.jpg"
          ]
        },
        {
          "name": "Xiaomi MIX Flip",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-flip.jpg",
          "specs": {
            "display": "Foldable LTPO AMOLED, 1B colors, Dolby Vision, HDR10+, 120Hz, 3000 nits (peak), 6.86 inches, 1224 x 2912",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "4780",
            "os": "Android 14, HyperOS",
            "weight": "190.0",
            "dimensions": "Unfolded: 167.5 x 74 x 7.6 mm",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Xiaomi MIX Flip 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-flip.jpg"
          ]
        },
        {
          "name": "Xiaomi MIX Fold 4",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Fold-4-Blue.jpg",
          "specs": {
            "display": "7.98 inches, 204.1 cm, 2224 x 2488 pixels (~418 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, HyperOS",
            "weight": "226 g or 228 g (7.97 oz)",
            "dimensions": "Unfolded: 159.4 x 143.3 x 4.6 mm",
            "colors": "Black, White, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi MIX Fold 4 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 4 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 4 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mix-fold-4/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Fold-4-Blue.jpg"
          ]
        },
        {
          "name": "Xiaomi MIX Fold 3",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Fold-3-Gold.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 1916 x 2160 pixels (~360 ppi density)",
            "processor": "Qualcomm SM8550-AC Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Li-Po 4800 mAh",
            "os": "Android 13, upgradable to Android 14, HyperOS",
            "weight": "255 g or 259 g (8.99 oz)",
            "dimensions": "Unfolded: 161.2 x 143.3 x 5.3 mm",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi MIX Fold 3 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 3 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 3 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mix-fold-3/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Mix-Fold-3-Gold.jpg"
          ]
        },
        {
          "name": "Xiaomi MIX Fold 2",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-fold-2.jpg",
          "specs": {
            "display": "8.02 inches, 206.0 cm, 1914 x 2160 pixels (~360 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, MIUI Fold 13",
            "weight": "262 g (9.24 oz)",
            "dimensions": "Unfolded: 161.1 x 144.7 x 5.4 mm",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi MIX Fold 2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 2 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX Fold 2 12GB 1TB",
              "ram": "12GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mix-fold-2.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX Fold",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-fold.jpg",
          "specs": {
            "display": "8.01 inches, 198.7 cm, 1860 x 2480 pixels, 4:3 ratio (~387 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5020 mAh",
            "os": "Android 10, MIUI 12",
            "weight": "317 g (Glass)",
            "dimensions": "Unfolded: 173.3 x 133.4 x 7.6 mm",
            "colors": "Black, Ceramic"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX Fold 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX Fold 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX Fold 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-fold.jpg"
          ]
        },
        {
          "name": "Xiaomi MIX 4",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-4.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, MIUI 12.5",
            "weight": "225 g (7.94 oz)",
            "dimensions": "162.6 x 75.4 x 8 mm (6.40 x 2.97 x 0.31 in)",
            "colors": "Ceramic Black, Ceramic White, Shadow Gray"
          },
          "variants": [
            {
              "name": "Xiaomi MIX 4 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX 4 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX 4 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi MIX 4 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:override",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-4.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX 3 5G",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3800 mAh, non-removable",
            "os": "Android 9.0 (Pie), MIUI 12",
            "weight": "225 g (7.94 oz)",
            "dimensions": "157.9 x 74.7 x 9.4 mm (6.22 x 2.94 x 0.37 in)",
            "colors": "Sapphire Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX 3 5G 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 3 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs"
          ]
        },
        {
          "name": "Xiaomi Mi MIX Alpha",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-alpha.jpg",
          "specs": {
            "display": "7.92 inches, 201.8 cm, 2088 x 2250 pixels (~388 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": "Li-Po 4050 mAh, non-removable",
            "os": "Android 10, MIUI 11",
            "weight": "241 g (8.50 oz)",
            "dimensions": "154.4 x 72.3 x 10.4 mm (6.08 x 2.85 x 0.41 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX Alpha 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-alpha.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX 2S",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-2s.jpg",
          "specs": {
            "display": "5.99 inches, 92.6 cm, 1080 x 2160 pixels, 18:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 3400 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 10, MIUI 12",
            "weight": "191 g (6.74 oz)",
            "dimensions": "150.9 x 74.9 x 8.1 mm (5.94 x 2.95 x 0.32 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX 2S 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 2S 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 2S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-mix-2s.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX 3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-mix-3.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB/10GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 3200 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, MIUI 12",
            "weight": "218 g (7.69 oz)",
            "dimensions": "157.9 x 74.7 x 8.5 mm (6.22 x 2.94 x 0.33 in)",
            "colors": "Jade Green, Sapphire Blue, Onyx Black, Forbidden City Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 3 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 3 10GB 256GB",
              "ram": "10GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-mix-3/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-mix-3.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX 2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-mix-2.jpg",
          "specs": {
            "display": "5.99 inches, 92.6 cm, 1080 x 2160 pixels, 18:9 ratio (~403 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 3400 mAh, non-removable",
            "os": "Android 7.1 (Nougat), planned upgrade to Android 10, MIUI 12",
            "weight": "185 g (6.53 oz)",
            "dimensions": "151.8 x 75.5 x 7.7 mm (5.98 x 2.97 x 0.30 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX 2 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi MIX 2 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-mix-2/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-mix-2.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi MIX",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mix-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 2040 pixels (~362 ppi pixel density), 6.4 inches (~83.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 821",
            "ram": "4GB/6GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Non-removable Li-Ion 4400 mAh battery",
            "os": "Android 6.0 (Marshmallow)| planned upgrade to 7.0 (Nougat)",
            "weight": "209 g",
            "dimensions": "158.8 x 81.9 x 7.9 mm (6.25 x 3.22 x 0.31 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi MIX 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi MIX 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mix-.jpg"
          ]
        }
      ]
    },
    {
      "name": "Mi Note",
      "models": [
        {
          "name": "Xiaomi Mi Note 10 Lite",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-note-10-lite-.jpg",
          "specs": {
            "display": "AMOLED, HDR10, 430 nits (typ), 6.47 inches, 1080 x 2340",
            "processor": "Qualcomm SDM730 Snapdragon 730G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5260",
            "os": "Android 10, upgradable to Android 11, MIUI 12.5 E",
            "weight": "204.0",
            "dimensions": "157.8 x 74.2 x 9.7 mm (6.21 x 2.92 x 0.38 in)",
            "colors": "Midnight Black, Glacier White, Nebula Purple"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 10 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-note-10-lite-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note 10",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-10.jpg",
          "specs": {
            "display": "6.47 inches, 102.8 cm, 1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730G (8 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 5260 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, MIUI 12",
            "weight": "208 g (7.34 oz)",
            "dimensions": "157.8 x 74.2 x 9.7 mm (6.21 x 2.92 x 0.38 in)",
            "colors": "Aurora Green, Glacier White, Midnight Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 10 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Note 10 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-note-10/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-10.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note 10 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-10-pro.jpg",
          "specs": {
            "display": "6.47 inches, 102.8 cm, 1080 x 2340 pixels, 19.5:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730G (8 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Po 5260 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, MIUI 12",
            "weight": "208 g (7.34 oz)",
            "dimensions": "157.8 x 74.2 x 9.7 mm (6.21 x 2.92 x 0.38 in)",
            "colors": "Aurora Green, Glacier White, Midnight Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-note-10-pro/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-10-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note 3",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-3.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 7.1 (Nougat), upgradable to Android 9, MIUI 12",
            "weight": "163 g (5.75 oz)",
            "dimensions": "152.6 x 74 x 7.6 mm (6.01 x 2.91 x 0.30 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Note 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-note-3/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-3.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note 2",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-note2-.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~386 ppi pixel density), 5.7 inches (~74.2% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 821",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 4070 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "166 g",
            "dimensions": "156.2 x 77.3 x 7.6 mm (6.15 x 3.04 x 0.30 in)",
            "colors": "Black| Gold| Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi Note 2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-note2-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1080 x 1920 pixels, 16:9 ratio (~386 ppi density)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801 (28 nm)",
            "ram": "3GB",
            "storage": [
              "16GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat), upgradable to 6.0 (Marshmallow)",
            "weight": "161 g (5.68 oz)",
            "dimensions": "155.1 x 77.6 x 7 mm (6.11 x 3.06 x 0.28 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Note 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-note/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Note Pro",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-pro.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1440 x 2560 pixels, 16:9 ratio (~515 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 7.0 (Nougat), MIUI 9",
            "weight": "161 g (5.68 oz)",
            "dimensions": "155.1 x 77.6 x 7 mm (6.11 x 3.06 x 0.28 in)",
            "colors": "Black, White, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Note Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-note-pro/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-note-pro.jpg"
          ]
        }
      ]
    },
    {
      "name": "Mi Max",
      "models": [
        {
          "name": "Xiaomi Mi Max 3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-max-3.jpg",
          "specs": {
            "display": "6.9 inches, 122.9 cm, 1080 x 2160 pixels, 18:9 ratio (~350 ppi density)",
            "processor": "Qualcomm SDM636 Snapdragon 636 (14 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 5500 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, MIUI 12",
            "weight": "221 g (7.80 oz)",
            "dimensions": "176.2 x 87.4 x 8 mm (6.94 x 3.44 x 0.31 in)",
            "colors": "Black, Champagne Gold, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Max 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Max 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-max-3/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-max-3.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Max 2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max2.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~342 ppi pixel density), 6.44 inches (~74.0% screen-to-body ratio)",
            "processor": "Qualcomm MSM8953 Snapdragon 625",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 5300 mAh battery",
            "os": "Android 7.1.1 (Nougat)",
            "weight": "211 g",
            "dimensions": "174.1 x 88.7 x 7.6 mm (6.85 x 3.49 x 0.30 in)",
            "colors": "Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Max 2 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi Max 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi Max 2 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max2.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Max",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max.jpg",
          "specs": {
            "display": "6.44 inches, 114.3 cm, 1080 x 1920 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8956 Snapdragon 650",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4850 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow), upgradable to 7.0 (Nougat), MIUI 10",
            "weight": "203g (7.16 oz)",
            "dimensions": "173.1 x 88.3 x 7.5 mm (6.81 x 3.48 x 0.30 in)",
            "colors": "Gray, Silver, Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Max 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Max 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Max 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Max 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-max.jpg"
          ]
        }
      ]
    },
    {
      "name": "Mi A / Other Mi",
      "models": [
        {
          "name": "Xiaomi Mi A3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a3.jpg",
          "specs": {
            "display": "6.09 inches, 91.0 cm, 720 x 1560 pixels, 19.5:9 ratio (~282 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4030 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, Android One",
            "weight": "173.8 g (6.14 oz)",
            "dimensions": "153.5 x 71.9 x 8.5 mm (6.04 x 2.83 x 0.33 in)",
            "colors": "Kind of Gray, Not just Blue, More than White"
          },
          "variants": [
            {
              "name": "Xiaomi Mi A3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi A3 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi A3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a3.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi A2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2-.jpg",
          "specs": {
            "display": "5.99 inches, 92.6 cm, 1080 x 2160 pixels, 18:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie), Android One",
            "weight": "166 g (5.86 oz)",
            "dimensions": "158.7 x 75.4 x 7.3 mm (6.25 x 2.97 x 0.29 in)",
            "colors": "Black, Gold, Blue, Red, Rose Gold"
          },
          "variants": [
            {
              "name": "Xiaomi Mi A2 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi A2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi A2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2-.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi A2 Lite",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2-lite.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
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
              "name": "Xiaomi Mi A2 Lite 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Mi A2 Lite 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a2-lite.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi Play",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-mi-play.jpg",
          "specs": {
            "display": "5.84 inches, 85.1 cm, 1080 x 2280 pixels, 19:9 ratio (~432 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "147.8 x 71.9 x 7.8 mm (5.82 x 2.83 x 0.31 in)",
            "colors": "Dream Blue, Twilight Gold, Black"
          },
          "variants": [
            {
              "name": "Xiaomi Mi Play 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi Play 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-mi-play/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-mi-play.jpg"
          ]
        },
        {
          "name": "Xiaomi Mi A1",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a1.jpg",
          "specs": {
            "display": "5.5 inches, 82.6 cm, 1080 x 1920 pixels, 16:9 ratio (~403 ppi density)",
            "processor": "Qualcomm MSM8953 Snapdragon 625 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 3080 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat), upgradable to Android 9.0 (Pie), Android One",
            "weight": "165 g (5.82 oz)",
            "dimensions": "155.4 x 75.8 x 7.3 mm (6.12 x 2.98 x 0.29 in)",
            "colors": "Black, Gold, Rose Gold, Red"
          },
          "variants": [
            {
              "name": "Xiaomi Mi A1 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Mi A1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-mi-a1.jpg"
          ]
        }
      ]
    },
    {
      "name": "Civi",
      "models": [
        {
          "name": "Xiaomi Civi 5 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-5-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi Civi 5 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Civi 5 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Civi 5 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Xiaomi Civi 5 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-5-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Civi 4 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg",
          "specs": {
            "display": "6.55 inches, 103.5 cm, 1236 x 2750 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Qualcomm SM8635 Snapdragon 8s Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4700 mAh",
            "os": "Android 14, HyperOS",
            "weight": "177.6 or 179.3 g or 180.9 g (6.28 oz)",
            "dimensions": "157.2 x 72.8 x 7.5 mm or 7.8 mm",
            "colors": "Black, Pink, Blue, Green"
          },
          "variants": [
            {
              "name": "Xiaomi Civi 4 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 4 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 4 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-4-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Civi 3",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-3.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Mediatek Dimensity 8200 Ultra (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 13, MIUI 14",
            "weight": "174 g (6.14 oz)",
            "dimensions": "158.7 x 71.7 x 7.6 mm (6.25 x 2.82 x 0.30 in)",
            "colors": "Purple, Mint, Gold, Gray"
          },
          "variants": [
            {
              "name": "Xiaomi Civi 3 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 3 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 3 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-3.jpg"
          ]
        },
        {
          "name": "Xiaomi Civi 1S",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-1s.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7325-AE Snapdragon 778G+ 5G (6 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, MIUI 13",
            "weight": "166 g (5.86 oz)",
            "dimensions": "158.3 x 71.5 x 7 mm (6.23 x 2.81 x 0.28 in)",
            "colors": "Black, Blue, Pink, Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Civi 1S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 1S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 1S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi-1s.jpg"
          ]
        },
        {
          "name": "Xiaomi Civi 2",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Xiaomi-Civi-2.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7450-AB Snapdragon 7 Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, MIUI 13",
            "weight": "171.8 g (6.07 oz)",
            "dimensions": "159.2 x 72.7 x 7.2 mm (6.27 x 2.86 x 0.28 in)",
            "colors": "Black, Blue, Violet, Silver, Hello Kitty"
          },
          "variants": [
            {
              "name": "Xiaomi Civi 2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-civi-2/",
            "https://www.gsmarena.com.bd/images/products/Xiaomi-Civi-2.jpg"
          ]
        },
        {
          "name": "Xiaomi Civi",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, MIUI 12.5",
            "weight": "166 g (5.86 oz)",
            "dimensions": "158.3 x 71.5 x 7 mm (6.23 x 2.81 x 0.28 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "Xiaomi Civi 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Civi 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-civi.jpg"
          ]
        }
      ]
    },
    {
      "name": "Black Shark",
      "models": [
        {
          "name": "Xiaomi Black Shark 5",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4650 mAh",
            "os": "Android 12, Joy UI 13",
            "weight": "218 g (7.69 oz)",
            "dimensions": "163.8 x 76.3 x 10 mm (6.45 x 3.00 x 0.39 in)",
            "colors": "Black, White, Gray"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 5 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4650 mAh",
            "os": "Android 12, Joy UI 13",
            "weight": "220 g (7.76 oz)",
            "dimensions": "163.9 x 76.5 x 9.5 mm (6.45 x 3.01 x 0.37 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 5 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 5 RS",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-rs.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888/888+ 5G (5 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, Joy UI 12.8",
            "weight": "220 g (7.76 oz)",
            "dimensions": "163.7 x 76.2 x 9.9 mm (6.44 x 3.00 x 0.39 in)",
            "colors": "Black, Yellow"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 5 RS 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 5 RS 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-5-rs.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 4",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, Joy UI 12.5",
            "weight": "210 g (7.41 oz)",
            "dimensions": "163.8 x 76.4 x 9.9 mm (6.45 x 3.01 x 0.39 in)",
            "colors": "Mirror Black, Pale Grey, Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 4 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 4 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, Joy UI 12.5",
            "weight": "220 g (7.76 oz)",
            "dimensions": "163.8 x 76.4 x 9.9 mm (6.45 x 3.01 x 0.39 in)",
            "colors": "Shadow Black, Misty Grey, Cosmos Black, Dark Blue, Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 4 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 4S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4s.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, Joy UI 12.8",
            "weight": "210 g (7.41 oz)",
            "dimensions": "163.7 x 76.2 x 9.9 mm (6.44 x 3.00 x 0.39 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 4S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4S 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4s.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 4S Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4s-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, Joy UI 12.8",
            "weight": "220 g (7.76 oz)",
            "dimensions": "163.7 x 76.2 x 9.9 mm (6.44 x 3.00 x 0.39 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 4S Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4S Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 4S Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-4s-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4720 mAh",
            "os": "Android 10",
            "weight": "222 g (7.83 oz)",
            "dimensions": "168.7 x 77.3 x 10.4 mm (6.64 x 3.04 x 0.41 in)",
            "colors": "Lightning Black, Armor Gray, Star Silver"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 3 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 3 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 3 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3-pro.jpg",
          "specs": {
            "display": "7.1 inches, 123.7 cm, 1440 x 3120 pixels, 19.5:9 ratio (~484 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10",
            "weight": "253 g (8.92 oz)",
            "dimensions": "177.8 x 83.3 x 10.1 mm (7.00 x 3.28 x 0.40 in)",
            "colors": "Phantom Black, Armor Gray"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 3 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 3 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 3 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 3S",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3s.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4729 mAh",
            "os": "Android 10",
            "weight": "222 g (7.83 oz)",
            "dimensions": "168.7 x 77.3 x 10.4 mm (6.64 x 3.04 x 0.41 in)",
            "colors": "Sky Cloud Black, Crystal Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 3S 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 3S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-3s.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 2",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-2.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, JoyUI 11",
            "weight": "205 g (7.23 oz)",
            "dimensions": "163.6 x 75 x 8.8 mm (6.44 x 2.95 x 0.35 in)",
            "colors": "Black, Silver, Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark-2.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark 2 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-black-shark-2-pro.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "205 g (7.23 oz)",
            "dimensions": "163.6 x 75 x 8.8 mm (6.44 x 2.95 x 0.35 in)",
            "colors": "Shadow Black, Iceberg Grey, Gulf Blue, Streamer Purple"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 2 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 2 Pro 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 2 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-black-shark-2-pro/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-black-shark-2-pro.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark.jpg",
          "specs": {
            "display": "5.99 inches, 92.6 cm, 1080 x 2160 pixels, 18:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 8.0 (Oreo)",
            "weight": "190 g (6.70 oz)",
            "dimensions": "161.6 x 75.4 x 9.3 mm (6.36 x 2.97 x 0.37 in)",
            "colors": "Black, Gray, Royal Blue"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-black-shark.jpg"
          ]
        },
        {
          "name": "Xiaomi Black Shark Helo",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/xiaomi-black-shark-helo.jpg",
          "specs": {
            "display": "6.01 inches, 93.2 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB/10GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 8.0 (Oreo)",
            "weight": "190 g (6.70 oz)",
            "dimensions": "160 x 75.2 x 8.7 mm (6.30 x 2.96 x 0.34 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "Xiaomi Black Shark Helo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark Helo 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Xiaomi Black Shark Helo 10GB 256GB",
              "ram": "10GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/",
            "kaggle:gsmarena-derived-xiaomi-specs",
            "https://www.gsmarena.com.bd/pictures/xiaomi-black-shark-helo/",
            "https://www.gsmarena.com.bd/images/products/xiaomi-black-shark-helo.jpg"
          ]
        }
      ]
    },
    {
      "name": "Other Xiaomi Phones",
      "models": [
        {
          "name": "Xiaomi Qin 2",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "32GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi Qin 2 1GB 32GB",
              "ram": "1GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        },
        {
          "name": "Xiaomi Qin 1",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "256MB",
            "storage": [
              "512MB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi Qin 1 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        },
        {
          "name": "Xiaomi Qin 1s",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "256MB",
            "storage": [
              "512MB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Xiaomi Qin 1s 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/xiaomi/"
          ]
        }
      ]
    }
  ]
};
