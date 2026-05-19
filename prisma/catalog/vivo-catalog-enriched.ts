/**
 * Enriched Vivo phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/vivo.json.
 */

export type VivoEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type VivoEnrichedModelSpecs = {
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

export type VivoEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: VivoEnrichedModelSpecs;
  variants: VivoEnrichedModelVariant[];
  sources?: string[];
};

export type VivoEnrichedFamily = {
  name: string;
  models: VivoEnrichedModel[];
};

export const VIVO_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: VivoEnrichedFamily[];
} = {
  "brandName": "Vivo",
  "logoUrl": "https://logo.clearbit.com/vivo.com",
  "sortOrder": 8,
  "families": [
    {
      "name": "vivo X",
      "models": [
        {
          "name": "vivo X100",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100.jpg",
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 120Hz, 3000 nits (peak), 6.78 inches, 1260 x 2800",
            "processor": "Mediatek Dimensity 9300 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, Funtouch 14 (International), OriginOS 4 (China)",
            "weight": "202.0",
            "dimensions": "164.1 x 75.2 x 8.5 mm or 8.8 mm",
            "colors": "Startrail Blue, Asteroid Black, White, Orange"
          },
          "variants": [
            {
              "name": "vivo X100 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100.jpg"
          ]
        },
        {
          "name": "vivo X100 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg",
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 120Hz, HDR10+, 3000 nits (peak), 6.78 inches, 1260 x 2800",
            "processor": "Mediatek Dimensity 9300 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5400",
            "os": "Android 14, up to Android 15, Funtouch 15 (International), OriginOS 4 (China)",
            "weight": "221.0",
            "dimensions": "164.1 x 75.3 x 8.9 mm or 9.1 mm",
            "colors": "Startrail Blue, Asteroid Black, Sunset Orange, White"
          },
          "variants": [
            {
              "name": "vivo X100 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x100-pro.jpg"
          ]
        },
        {
          "name": "vivo X6S",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~68.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2400 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "140.5 g",
            "dimensions": "147.9 x 73.8 x 6.7 mm (5.82 x 2.91 x 0.26 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X6S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "image-cleared:duplicate-url-shared-by-multiple-models"
          ]
        },
        {
          "name": "vivo X6S Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x6s-plus.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~386 ppi pixel density), 5.7 inches (~70.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "172.5 g",
            "dimensions": "158.4 x 80.1 x 6.9 mm (6.24 x 3.15 x 0.27 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X6S Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X7",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x7.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~71.0% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "151 g",
            "dimensions": "147.3 x 71.3 x 7.2 mm (5.80 x 2.81 x 0.28 in)",
            "colors": "Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X7 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X7 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x7-plus.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~386 ppi pixel density), 5.7 inches (~72.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 4000 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "183.5 g",
            "dimensions": "158.9 x 78 x 7.5 mm (6.26 x 3.07 x 0.30 in)",
            "colors": "Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X7 Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X9",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-v5.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~73.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8953 Snapdragon 625",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "154 g",
            "dimensions": "152.6 x 74 x 7 mm (6.01 x 2.91 x 0.28 in)",
            "colors": "Gold| Gray"
          },
          "variants": [
            {
              "name": "vivo X9 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X5 Max+",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-max-plus.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~69.5% screen-to-body ratio)",
            "processor": "Mediatek MT6752",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2300 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": null,
            "dimensions": "153.9 x 78 x 5.1 mm (6.06 x 3.07 x 0.20 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo X5 Max+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X5 Pro",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x5-pro.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~68.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2450 mAh battery",
            "os": "Android 5.0 (Lollipop)",
            "weight": "151 g",
            "dimensions": "147.9 x 73.5 x 6.4 mm (5.82 x 2.89 x 0.25 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "vivo X5 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X6",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~68.3% screen-to-body ratio)",
            "processor": "Mediatek MT6752",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2400 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "135.5 g",
            "dimensions": "147.9 x 73.8 x 6.7 mm (5.82 x 2.91 x 0.26 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X6 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "image-cleared:duplicate-url-shared-by-multiple-models"
          ]
        },
        {
          "name": "vivo X6 Plus",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~386 ppi pixel density), 5.7 inches (~70.7% screen-to-body ratio)",
            "processor": "Mediatek MT6752",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "171 g",
            "dimensions": "158.4 x 80 x 6.9 mm (6.24 x 3.15 x 0.27 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X6 Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "image-cleared:duplicate-url-shared-by-multiple-models"
          ]
        },
        {
          "name": "vivo X3S",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x3s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.7% screen-to-body ratio)",
            "processor": "Mediatek MT6592",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2000 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "150 g",
            "dimensions": "143.3 x 71 x 6 mm (5.64 x 2.80 x 0.24 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "vivo X3S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X5",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x5v.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2250 mAh battery",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "141 g",
            "dimensions": "143.3 x 71.1 x 6.3 mm (5.64 x 2.80 x 0.25 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo X5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X5 Max",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x5-max.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~69.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2300 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "156 g",
            "dimensions": "153.9 x 78 x 5.1 mm (6.06 x 3.07 x 0.20 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo X5 Max Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X1S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X1S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X20",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20.jpg",
          "specs": {
            "display": "6.01 inches, 93.2 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3250 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), upgradable to Android 8.0 (Oreo), Funtouch 3.2",
            "weight": "159 g (5.61 oz)",
            "dimensions": "155.9 x 75.2 x 7.2 mm (6.14 x 2.96 x 0.28 in)",
            "colors": "Matte Black, Black/Gold, Gold, Rose gold, Blue, Pink"
          },
          "variants": [
            {
              "name": "vivo X20 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20.jpg"
          ]
        },
        {
          "name": "vivo X20 Plus",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20-plus.jpg",
          "specs": {
            "display": "6.43 inches, 106.7 cm, 1080 x 2160 pixels, 18:9 ratio (~376 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3900 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), upgradable to Android 8.0 (Oreo), Funtouch 3.2",
            "weight": "181.5 g (6.42 oz)",
            "dimensions": "165.3 x 80.1 x 7.5 mm (6.51 x 3.15 x 0.30 in)",
            "colors": "Matte Black, Gold, Rose gold"
          },
          "variants": [
            {
              "name": "vivo X20 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20-plus.jpg"
          ]
        },
        {
          "name": "vivo X20 Plus UD",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20-plus-ud.jpg",
          "specs": {
            "display": "6.43 inches, 106.7 cm, 1080 x 2160 pixels, 18:9 ratio (~376 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3900 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), Funtouch 3.2",
            "weight": "181.5 g (6.42 oz)",
            "dimensions": "155.3 x 80.1 x 7.5 mm (6.11 x 3.15 x 0.30 in)",
            "colors": "Matte Black, Gold, Rose gold"
          },
          "variants": [
            {
              "name": "vivo X20 Plus UD 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x20-plus-ud.jpg"
          ]
        },
        {
          "name": "vivo X200",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1260 x 2800 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 5800 mAh (Global)",
            "os": "Android 15, up to 4 major Android upgrades, Funtouch 15 (International), OriginOS 5 (China)",
            "weight": "197 g or 202 g (6.95 oz)",
            "dimensions": "160.3 x 74.8 x 8 mm (6.31 x 2.94 x 0.31 in)",
            "colors": "Natural Green (Aurora Green), Cosmos Black, Blue, White, Titanium"
          },
          "variants": [
            {
              "name": "vivo X200 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200.jpg"
          ]
        },
        {
          "name": "vivo X200 FE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-fe.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X200 FE Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-fe.jpg"
          ]
        },
        {
          "name": "vivo X200 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.5 cm, 1260 x 2800 pixels, 20:9 ratio (~452 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 6000 mAh (Global)",
            "os": "Android 15, up to 4 major Android upgrades, Funtouch 15 (International), OriginOS 5 (China)",
            "weight": "223 g or 228 g (7.87 oz)",
            "dimensions": "162.4 x 76 x 8.2 mm or 8.5 mm",
            "colors": "Cosmos Black, Titanium Grey, Blue, White"
          },
          "variants": [
            {
              "name": "vivo X200 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro.jpg"
          ]
        },
        {
          "name": "vivo X200 Pro mini",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro-mini.jpg",
          "specs": {
            "display": "6.31 inches, 98.0 cm, 1216 x 2640 pixels, 19.5:9 ratio (~460 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 5700 mAh",
            "os": "Android 15, OriginOS 5 (China)",
            "weight": "187 g (6.60 oz)",
            "dimensions": "150.8 x 71.8 x 8.2 mm (5.94 x 2.83 x 0.32 in)",
            "colors": "Black, White, Green, Pink"
          },
          "variants": [
            {
              "name": "vivo X200 Pro mini 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 Pro mini 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 Pro mini 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X200 Pro mini 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-pro-mini.jpg"
          ]
        },
        {
          "name": "vivo X200 Ultra",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-ultra.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X200 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X200 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X200 Ultra 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x200-ultra.jpg"
          ]
        },
        {
          "name": "vivo X200T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X200T Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X21",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x21.jpg",
          "specs": {
            "display": "6.28 inches, 98.4 cm, 1080 x 2280 pixels, 19:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "156.2 g (5.50 oz)",
            "dimensions": "154.5 x 74.8 x 7.4 mm (6.08 x 2.94 x 0.29 in)",
            "colors": "Black, Aurora White, Ruby Red"
          },
          "variants": [
            {
              "name": "vivo X21 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X21 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x21.jpg"
          ]
        },
        {
          "name": "vivo X21 FIFA",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X21 FIFA Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X21i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.28 inches, 98.4 cm, 1080 x 2280 pixels, 19:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "6GB, 4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3425 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "159 g (5.61 oz)",
            "dimensions": "154.4 x 75 x 7 mm (6.08 x 2.95 x 0.28 in)",
            "colors": "Black, Aurora White, Ruby Red, Night Purple"
          },
          "variants": [
            {
              "name": "vivo X21i 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X21i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X21s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X21s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X21UD",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x21ud.jpg",
          "specs": {
            "display": "6.28 inches, 98.4 cm, 1080 x 2280 pixels, 19:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "156.2 g (5.50 oz)",
            "dimensions": "154.5 x 74.8 x 7.4 mm (6.08 x 2.94 x 0.29 in)",
            "colors": "Black, Ruby Red"
          },
          "variants": [
            {
              "name": "vivo X21UD 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x21ud.jpg"
          ]
        },
        {
          "name": "vivo X23",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x23.jpg",
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM670 Snapdragon 670 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3400 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "160.5 g (5.68 oz)",
            "dimensions": "157.7 x 74.1 x 7.5 mm (6.21 x 2.92 x 0.30 in)",
            "colors": "Phantom Purple, Magic Night, Phantom Red"
          },
          "variants": [
            {
              "name": "vivo X23 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x23.jpg"
          ]
        },
        {
          "name": "vivo X23 Symphony",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X23 Symphony Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X27",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x27-2.jpg",
          "specs": {
            "display": "6.39 inches, 101.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "188 g (6.63 oz)",
            "dimensions": "157.7 x 74.3 x 9 mm (6.21 x 2.93 x 0.35 in)",
            "colors": "Blue, Gold, Symphony Summer"
          },
          "variants": [
            {
              "name": "vivo X27 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X27 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x27-2.jpg"
          ]
        },
        {
          "name": "vivo X27 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x27-pro.jpg",
          "specs": {
            "display": "6.7 inches, 106.6 cm, 1080 x 2460 pixels (~401 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "200 g (7.05 oz)",
            "dimensions": "165.7 x 74.6 x 9 mm (6.52 x 2.94 x 0.35 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "vivo X27 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x27-pro.jpg"
          ]
        },
        {
          "name": "vivo X3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X30 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X30 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X30 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X30 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X300",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X300 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300.jpg"
          ]
        },
        {
          "name": "vivo X300 FE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-fe.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X300 FE Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-fe.jpg"
          ]
        },
        {
          "name": "vivo X300 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-pro.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X300 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-pro.jpg"
          ]
        },
        {
          "name": "vivo X300 Ultra",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-ultra.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X300 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X300 Ultra 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300-ultra.jpg"
          ]
        },
        {
          "name": "vivo X300s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300s.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X300s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x300s.jpg"
          ]
        },
        {
          "name": "vivo X3F",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X3F Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X3L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X3L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X3V",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X3V Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5 Max F",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5 Max F Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5 Max L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5 Max L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5 Max S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5 Max S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5 Max V",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5 Max V Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5 Pro 3G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5 Pro 3G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X50",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730 (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "173 g (6.10 oz)",
            "dimensions": "159.5 x 75.4 x 7.6 mm (6.28 x 2.97 x 0.30 in)",
            "colors": "Glaze Black, Frost Blue"
          },
          "variants": [
            {
              "name": "vivo X50 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X50 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50.jpg"
          ]
        },
        {
          "name": "vivo X50 4G LTE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X50 4G LTE Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X50 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-lite.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10",
            "weight": "190.2 g (6.70 oz)",
            "dimensions": "159.3 x 75.2 x 8.7 mm (6.27 x 2.96 x 0.34 in)",
            "colors": "Nebula Blue, Jade Black"
          },
          "variants": [
            {
              "name": "vivo X50 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-lite.jpg"
          ]
        },
        {
          "name": "vivo X50 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4315 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "181.5 g (6.42 oz)",
            "dimensions": "158.5 x 72.8 x 8 mm (6.24 x 2.87 x 0.31 in)",
            "colors": "Dark Blue, Light Blue"
          },
          "variants": [
            {
              "name": "vivo X50 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X50 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X50 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-pro-plus.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4350 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "192.2 g (6.77 oz)",
            "dimensions": "158.5 x 73 x 8.8 mm (6.24 x 2.87 x 0.35 in)",
            "colors": "Blue, Brown"
          },
          "variants": [
            {
              "name": "vivo X50 Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X50 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X50 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x50-pro-plus.jpg"
          ]
        },
        {
          "name": "vivo X50 Pro+ Alexander Wang",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X50 Pro+ Alexander Wang Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X50e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4350 mAh",
            "os": "Android 10, Funtouch 10",
            "weight": "200.4 g (7.05 oz)",
            "dimensions": "162.1 x 75 x 8.9 mm (6.38 x 2.95 x 0.35 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo X50e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X51 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x51-5g.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4315 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "181.5 g (6.42 oz)",
            "dimensions": "158.5 x 72.8 x 8 mm (6.24 x 2.87 x 0.31 in)",
            "colors": "Gray"
          },
          "variants": [
            {
              "name": "vivo X51 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x51-5g.jpg"
          ]
        },
        {
          "name": "vivo X5F",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5F Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5M",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5M Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X5V",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x5v.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X5V Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x5v.jpg"
          ]
        },
        {
          "name": "vivo X60",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "176 g (6.21 oz)",
            "dimensions": "159.6 x 75 x 7.4 mm (6.28 x 2.95 x 0.29 in)",
            "colors": "Midnight Black, Shimmer Blue"
          },
          "variants": [
            {
              "name": "vivo X60 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X60 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60.jpg"
          ]
        },
        {
          "name": "vivo X60 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "179 g (6.31 oz)",
            "dimensions": "158.6 x 73.2 x 7.6 mm (6.24 x 2.88 x 0.30 in)",
            "colors": "Midnight Black, Shimmer Blue"
          },
          "variants": [
            {
              "name": "vivo X60 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro.jpg"
          ]
        },
        {
          "name": "vivo X60 Pro V2047A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X60 Pro V2047A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X60 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro-plus.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 11, Funtouch 12 (International), OriginOS 1.0 (China)",
            "weight": "191 g (6.74 oz)",
            "dimensions": "158.6 x 73.4 x 9.1 mm (6.24 x 2.89 x 0.36 in)",
            "colors": "Orange, Emperor Blue"
          },
          "variants": [
            {
              "name": "vivo X60 Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X60 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60-pro-plus.jpg"
          ]
        },
        {
          "name": "vivo X60 V2046A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X60 V2046A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X60 V2059A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X60 V2059A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X60t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60t.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4300 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "175.5 g (6.21 oz)",
            "dimensions": "159.6 x 75 x 7.4 mm (6.28 x 2.95 x 0.29 in)",
            "colors": "Gray, Aurora"
          },
          "variants": [
            {
              "name": "vivo X60t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x60t.jpg"
          ]
        },
        {
          "name": "vivo X60t Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "191 g (6.74 oz)",
            "dimensions": "158.6 x 73.4 x 9.1 mm (6.24 x 2.89 x 0.36 in)",
            "colors": "Orange, Emperor Blue"
          },
          "variants": [
            {
              "name": "vivo X60t Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X60t Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X60t Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X70",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 11, upgradable to Android 14, Funtouch OS 14 (International), OriginOS (China)",
            "weight": "181/182 g (6.42 oz)",
            "dimensions": "160.1 x 75.4 x 7.6 mm (6.30 x 2.97 x 0.30 in)",
            "colors": "Cosmic Black, Aurora Dawn, White"
          },
          "variants": [
            {
              "name": "vivo X70 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70.jpg"
          ]
        },
        {
          "name": "vivo X70 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-2.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm) - International",
            "ram": "8GB, 12GB, 16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4450 mAh",
            "os": "Android 11, upgradable to Android 14, Funtouch OS 14 (International), OriginOS (China)",
            "weight": "183/184/185/186 g (6.46 oz)",
            "dimensions": "158.3 x 73.2 x 8 mm (6.23 x 2.88 x 0.31 in)",
            "colors": "Cosmic Black, Aurora Dawn, White"
          },
          "variants": [
            {
              "name": "vivo X70 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-2.jpg"
          ]
        },
        {
          "name": "vivo X70 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-plus.jpg",
          "specs": {
            "display": "6.78 inches, 111.4 cm, 1440 x 3200 pixels, 20:9 ratio (~517 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 11, upgradable to Android 14, Funtouch OS 14 (International), OriginOS 1.0 (China)",
            "weight": "209 g / 213 g (7.37 oz)",
            "dimensions": "164.5 x 75.2 x 8.9 mm (6.48 x 2.96 x 0.35 in)",
            "colors": "Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo X70 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X70 Pro+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x70-pro-plus.jpg"
          ]
        },
        {
          "name": "vivo X70t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X70t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X80",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 9000 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, upgradable to Android 14, Funtouch 14 (Global), OriginOS Ocean (China)",
            "weight": "203 g / 206 g (7.16 oz)",
            "dimensions": "165 x 75.2 x 8.3 mm or 8.8 mm",
            "colors": "Cosmic Black, Urban Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo X80 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X80 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X80 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X80 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80.jpg"
          ]
        },
        {
          "name": "vivo X80 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "186 g (6.56 oz)",
            "dimensions": "159.2 x 74.2 x 7.8 mm (6.27 x 2.92 x 0.31 in)",
            "colors": "Diamond Black, Sunrise Gold"
          },
          "variants": [
            {
              "name": "vivo X80 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X80 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.4 cm, 1440 x 3200 pixels, 20:9 ratio (~517 ppi density)",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, upgradable to Android 14, Funtouch 14 (Global), OriginOS Ocean (China)",
            "weight": "215 g / 219 g (7.58 oz)",
            "dimensions": "164.6 x 75.3 x 9.1 mm (6.48 x 2.96 x 0.36 in)",
            "colors": "Cosmic Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo X80 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X80 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X80 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x80-pro.jpg"
          ]
        },
        {
          "name": "vivo X80 Pro Dimensity 9000",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X80 Pro Dimensity 9000 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X9 Plus",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x9-plus.jpg",
          "specs": {
            "display": "5.88 inches, 95.3 cm, 1080 x 1920 pixels, 16:9 ratio (~375 ppi density)",
            "processor": "Qualcomm MSM8976 Pro Snapdragon 653 (28 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 6.1 (Marshmallow), upgradable to Android 8 (Oreo), Funtouch 3",
            "weight": "199 g (7.02 oz)",
            "dimensions": "162 x 79 x 7.5 mm (6.38 x 3.11 x 0.30 in)",
            "colors": "Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "vivo X9 Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x9-plus.jpg"
          ]
        },
        {
          "name": "vivo X90",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90.jpg",
          "specs": {
            "display": "6.78 inches, 111.5 cm, 1260 x 2800 pixels, 20:9 ratio (~452 ppi density)",
            "processor": "Mediatek Dimensity 9200 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4810 mAh",
            "os": "Android 13, Funtouch 13 (Global), OriginOS 3 (China)",
            "weight": "196 g / 200 g (6.91 oz)",
            "dimensions": "164.1 x 74.4 x 8.5 mm or 8.9 mm",
            "colors": "Asteroid Black, Breeze Blue, Red"
          },
          "variants": [
            {
              "name": "vivo X90 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90.jpg"
          ]
        },
        {
          "name": "vivo X90 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9200 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4870 mAh",
            "os": "Android 13, upgradable to Android 14, Funtouch 14 (Global), OriginOS 3 (China)",
            "weight": "214.9 g (7.58 oz)",
            "dimensions": "164.1 x 74.5 x 9.3 mm (6.46 x 2.93 x 0.37 in)",
            "colors": "Legendary Black, Red"
          },
          "variants": [
            {
              "name": "vivo X90 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro.jpg"
          ]
        },
        {
          "name": "vivo X90 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro-plus.jpg",
          "specs": {
            "display": "6.78 inches, 111.4 cm, 1440 x 3200 pixels, 20:9 ratio (~517 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 13, Funtouch (Global), OriginOS 3 (China)",
            "weight": "221 g (7.80 oz)",
            "dimensions": "164.4 x 75.3 x 9.7 mm (6.47 x 2.96 x 0.38 in)",
            "colors": "Black, Red"
          },
          "variants": [
            {
              "name": "vivo X90 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90 Pro+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90-pro-plus.jpg"
          ]
        },
        {
          "name": "vivo X90s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90s.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9200+ (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4810 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "197.5 / 201.5 / 202.2 / 203.5 g (6.98 oz)",
            "dimensions": "164.1 x 74.4 x 8.5 mm or 8.9 mm",
            "colors": "Black, White, Red, Green"
          },
          "variants": [
            {
              "name": "vivo X90s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90s 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X90s 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x90s.jpg"
          ]
        },
        {
          "name": "vivo X9i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X9i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X9L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X9L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo X9s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Qualcomm MSM8976 Snapdragon 652 (28 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3320 mAh, non-removable",
            "os": "Android 7.1 (Nougat), upgradable to Android 8.0 (Oreo), Funtouch 3.1",
            "weight": "154 g (5.43 oz)",
            "dimensions": "152.6 x 74 x 7 mm (6.01 x 2.91 x 0.28 in)",
            "colors": "Gold, Rose Gold, Black"
          },
          "variants": [
            {
              "name": "vivo X9s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo X9s Plus",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.85 inches, 94.3 cm, 1080 x 1920 pixels, 16:9 ratio (~377 ppi density)",
            "processor": "Qualcomm MSM8976 Pro Snapdragon 653 (28 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 4015 mAh, non-removable",
            "os": "Android 7.1 (Nougat), upgradable to Android 8.0 (Oreo), Funtouch 3.1",
            "weight": "183.2 g (6.46 oz)",
            "dimensions": "162.6 x 78.9 x 7.3 mm (6.40 x 3.11 x 0.29 in)",
            "colors": "Gold, Rose Gold, Black"
          },
          "variants": [
            {
              "name": "vivo X9s Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        }
      ]
    },
    {
      "name": "vivo Foldables",
      "models": [
        {
          "name": "vivo X Flip",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-flip.jpg",
          "specs": {
            "display": "6.74 inches, 106.1 cm, 1080 x 2520 pixels, 21:9 ratio (~407 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "198 g (6.98 oz)",
            "dimensions": "Unfolded: 166.4 x 75.3 x 7.8 mm",
            "colors": "Rhombic Purple, Silk Gold, Diamond Black"
          },
          "variants": [
            {
              "name": "vivo X Flip 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Flip 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-flip.jpg"
          ]
        },
        {
          "name": "vivo X Fold",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 1916 x 2160 pixels (~360 ppi density)",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "311 g (10.97 oz)",
            "dimensions": "Unfolded: 162 x 144.9 x 6.3 mm",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo X Fold 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold.jpg"
          ]
        },
        {
          "name": "vivo X Fold+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold-plus.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 1916 x 2160 pixels (~360 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4730 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "311 g (10.97 oz)",
            "dimensions": "Unfolded: 162 x 144.9 x 6.3 mm",
            "colors": "Black, Blue, Red"
          },
          "variants": [
            {
              "name": "vivo X Fold+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold-plus.jpg"
          ]
        },
        {
          "name": "vivo X Fold2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold2.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 1916 x 2160 pixels (~360 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4800 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "279 g (9.84 oz)",
            "dimensions": "Unfolded: 161.3 x 143.4 x 6 mm",
            "colors": "Black, Blue, Red"
          },
          "variants": [
            {
              "name": "vivo X Fold2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold2 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold2.jpg"
          ]
        },
        {
          "name": "vivo X Fold3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold3.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 2200 x 2480 pixels (~413 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 5500 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "219 g (7.72 oz)",
            "dimensions": "Unfolded: 160 x 142.7 x 4.7 mm",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "vivo X Fold3 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold3 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold3 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold3 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold3.jpg"
          ]
        },
        {
          "name": "vivo X Fold3 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold3-pro.jpg",
          "specs": {
            "display": "8.03 inches, 206.5 cm, 2200 x 2480 pixels (~413 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 5700 mAh",
            "os": "Android 14, upgradable to Android 15, Funtouch 15 (International), OriginOS 4 (China)",
            "weight": "236 g (8.32 oz)",
            "dimensions": "Unfolded: 160 x 142.4 x 5.2 mm",
            "colors": "Celestial Black, White, Lunar White"
          },
          "variants": [
            {
              "name": "vivo X Fold3 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold3 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Fold3 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold3-pro.jpg"
          ]
        },
        {
          "name": "vivo X Fold5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold5.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo X Fold5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X Fold5 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo X Fold5 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-fold5.jpg"
          ]
        },
        {
          "name": "vivo X Note",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-note.jpg",
          "specs": {
            "display": "7.0 inches, 121.3 cm, 1440 x 3080 pixels (~486 ppi density)",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "216 / 221 g (7.62 oz)",
            "dimensions": "168.8 x 80.3 x 8.4 mm (6.65 x 3.16 x 0.33 in)",
            "colors": "Black, Blue, Gray"
          },
          "variants": [
            {
              "name": "vivo X Note 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Note 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo X Note 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-x-note.jpg"
          ]
        }
      ]
    },
    {
      "name": "vivo Xplay",
      "models": [
        {
          "name": "vivo Xplay5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-xplay5.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1440 x 2560 pixels (~541 ppi pixel density), 5.43 inches (~69.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3600 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "167.8 g",
            "dimensions": "153.5 x 76.2 x 7.6 mm (6.04 x 3.00 x 0.30 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo Xplay5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Xplay5 Elite",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-xplay5-elite.jpg",
          "specs": {
            "display": "Super AMOLED capacitive touchscreen 16M colors, 1440 x 2560 pixels (~541 ppi pixel density), 5.43 inches (~69.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 820",
            "ram": "6 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3600 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "167.8 g",
            "dimensions": "153.5 x 76.2 x 7.6 mm (6.04 x 3.00 x 0.30 in)",
            "colors": "Silver| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo Xplay5 Elite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Xplay 3S",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-xplay-3s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~490 ppi pixel density), 6.0 inches (~75.9% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 801",
            "ram": "3 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 3200 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "174 g",
            "dimensions": "158.2 x 82.6 x 8.7 mm (6.23 x 3.25 x 0.34 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo Xplay 3S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Xplay",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Xplay Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Xplay 5S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Xplay 5S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Xplay 6",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.46 inches, 82.2 cm, 1440 x 2560 pixels, 16:9 ratio (~538 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 820 (14 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 4080 mAh, non-removable",
            "os": "Android 6.1 (Marshmallow), upgradable to Android 8 (Oreo), Funtouch 3",
            "weight": "178 g (6.28 oz)",
            "dimensions": "153.8 x 73.6 x 8.4 mm (6.06 x 2.90 x 0.33 in)",
            "colors": "Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "vivo Xplay 6 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        }
      ]
    },
    {
      "name": "vivo Xshot",
      "models": [
        {
          "name": "vivo Xshot",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-xshot.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~69.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974AA Snapdragon 801",
            "ram": "2 GB RAM/ 32 GB| 3 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2600 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "148 g",
            "dimensions": "146.5 x 73.3 x 8 mm (5.77 x 2.89 x 0.31 in)",
            "colors": "White/Black"
          },
          "variants": [
            {
              "name": "vivo Xshot Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Xshot Elite Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Xshot Elite Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Xshot Ultimate Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Xshot Ultimate Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        }
      ]
    },
    {
      "name": "vivo NEX",
      "models": [
        {
          "name": "vivo NEX",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo NEX Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo NEX 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.89 inches, 119.3 cm, 1080 x 2256 pixels (~363 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "217.3 g (7.65 oz)",
            "dimensions": "167.4 x 76.1 x 9.4 mm (6.59 x 3.00 x 0.37 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo NEX 3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo NEX 3 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.89 inches, 119.3 cm, 1080 x 2256 pixels (~363 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, Funtouch 10",
            "weight": "218.5 g (7.72 oz)",
            "dimensions": "167.4 x 76.1 x 9.4 mm (6.59 x 3.00 x 0.37 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo NEX 3 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo NEX 3 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo NEX 3S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo NEX 3S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo NEX Dual Display",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "10GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 4.5",
            "weight": "199 g (7.02 oz)",
            "dimensions": "157.2 x 75.3 x 8.1 mm (6.19 x 2.96 x 0.32 in)",
            "colors": "Polar Blue"
          },
          "variants": [
            {
              "name": "vivo NEX Dual Display 10GB 128GB",
              "ram": "10GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo NEX Dual Display 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo NEX S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-nex-s.jpg",
          "specs": {
            "display": "6.59 inches, 107.3 cm, 1080 x 2316 pixels, 19.3:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie), Funtouch 6.6",
            "weight": "199 g (7.02 oz)",
            "dimensions": "162 x 77 x 8 mm (6.38 x 3.03 x 0.31 in)",
            "colors": "Black, Red"
          },
          "variants": [
            {
              "name": "vivo NEX S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo NEX S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-nex-s.jpg"
          ]
        }
      ]
    },
    {
      "name": "vivo V",
      "models": [
        {
          "name": "vivo V30",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED, 1B colors, HDR10+, 120Hz, 1200 nits (HBM), 2800 nits (peak), 6.78 inches, 1260 x 2800",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 2 major Android upgrades, Funtouch 14",
            "weight": "186.0",
            "dimensions": "164.4 x 75.1 x 7.5 mm (6.47 x 2.96 x 0.30 in)",
            "colors": "Bloom White, Waving Aqua, Lush Green, Noble Black"
          },
          "variants": [
            {
              "name": "vivo V30 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V5 Lite",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-v5-lite.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~71.8% screen-to-body ratio)",
            "processor": "Octa-core",
            "ram": "3 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "155 g",
            "dimensions": "153.8 x 75.5 x 7.6 mm (6.06 x 2.97 x 0.30 in)",
            "colors": "Crown Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo V5 Lite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V5 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-x9-plus.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~73.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8953 Snapdragon 625",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 4000 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "158.6 g",
            "dimensions": "152.6 x 74 x 7.3 mm (6.01 x 2.91 x 0.29 in)",
            "colors": "Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "vivo V5 Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V3",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939v2 Snapdragon 616",
            "ram": "3 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2550 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "138 g",
            "dimensions": "143.6 x 71 x 7.5 mm (5.65 x 2.80 x 0.30 in)",
            "colors": "Gold"
          },
          "variants": [
            {
              "name": "vivo V3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "image-cleared:duplicate-url-shared-by-multiple-models"
          ]
        },
        {
          "name": "vivo V3Max",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~70.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "4 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "168 g",
            "dimensions": "153.9 x 77.1 x 7.6 mm (6.06 x 3.04 x 0.30 in)",
            "colors": "Gold"
          },
          "variants": [
            {
              "name": "vivo V3Max Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "image-cleared:duplicate-url-shared-by-multiple-models"
          ]
        },
        {
          "name": "vivo V1",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-v1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2300 mAh battery",
            "os": "Android 5.0 (Lollipop)",
            "weight": "153 g",
            "dimensions": "143.3 x 71 x 6.8 mm (5.64 x 2.80 x 0.27 in)",
            "colors": "White/Gold"
          },
          "variants": [
            {
              "name": "vivo V1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V1Max",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-v1-max.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~70.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2720 mAh battery",
            "os": "Android 5.0 (Lollipop)",
            "weight": "165 g",
            "dimensions": "154 x 77 x 6.8 mm (6.06 x 3.03 x 0.27 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo V1Max Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V1 2015",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V1 2015 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V11",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "3400 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie), Funtouch 6.1",
            "weight": "156 g (5.50 oz)",
            "dimensions": "157.9 x 75 x 7.9 mm (6.22 x 2.95 x 0.31 in)",
            "colors": "Starry Night, Dazzling Gold, Nebula, Supernova Red"
          },
          "variants": [
            {
              "name": "vivo V11 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V11 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V11 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v11-pro-2.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V11 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v11-pro-2.jpg"
          ]
        },
        {
          "name": "vivo V15",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6771 Helio P70 (12 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "189.5 g (6.70 oz)",
            "dimensions": "161.2 x 75.9 x 8.5 mm (6.35 x 2.99 x 0.33 in)",
            "colors": "Topaz Blue, Glamour Red, Frozen Black, Royal Blue"
          },
          "variants": [
            {
              "name": "vivo V15 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V15 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15.jpg"
          ]
        },
        {
          "name": "vivo V15 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15-pro.jpg",
          "specs": {
            "display": "6.39 inches, 99.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "3700 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "185 g (6.53 oz)",
            "dimensions": "157.3 x 74.7 x 8.2 mm (6.19 x 2.94 x 0.32 in)",
            "colors": "Topaz Blue, Coral Red, Ruby Red"
          },
          "variants": [
            {
              "name": "vivo V15 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V15 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v15-pro.jpg"
          ]
        },
        {
          "name": "vivo V17",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v17.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "176 g (6.21 oz)",
            "dimensions": "159 x 74.2 x 8.5 mm (6.26 x 2.92 x 0.33 in)",
            "colors": "Admiral Blue, Glacier Ice White, Midnight Ocean Black"
          },
          "variants": [
            {
              "name": "vivo V17 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V17 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v17.jpg"
          ]
        },
        {
          "name": "vivo V17 Neo",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v17-neo.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Mediatek MT6768 Helio P65 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "179 g (6.31 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Black brilliant, Blue Pearl"
          },
          "variants": [
            {
              "name": "vivo V17 Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v17-neo.jpg"
          ]
        },
        {
          "name": "vivo V17 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4100 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "201.8 g (7.13 oz)",
            "dimensions": "159 x 74.7 x 9.8 mm (6.26 x 2.94 x 0.39 in)",
            "colors": "Crystal Black, Crystal Sky, Midnight Ocean"
          },
          "variants": [
            {
              "name": "vivo V17 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V17 V1948F",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V17 V1948F Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V19",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v19.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "186.5 g (6.60 oz)",
            "dimensions": "159.6 x 75 x 8.5 mm (6.28 x 2.95 x 0.33 in)",
            "colors": "Mystic Silver/Sleek Silver, Piano Black/Gleam Black"
          },
          "variants": [
            {
              "name": "vivo V19 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V19 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v19.jpg"
          ]
        },
        {
          "name": "vivo V19 Neo",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "176 g (6.21 oz)",
            "dimensions": "159 x 74.2 x 8.5 mm (6.26 x 2.92 x 0.33 in)",
            "colors": "Admiral Blue, Crystal White"
          },
          "variants": [
            {
              "name": "vivo V19 Neo 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V19 Neo 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V19 Snapdragon 712",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V19 Snapdragon 712 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V2 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V20",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, Funtouch 11",
            "weight": "171 g (6.03 oz)",
            "dimensions": "161.3 x 74.2 x 7.4 mm (6.35 x 2.92 x 0.29 in)",
            "colors": "Sunset Melody, Midnight Jazz, Moonlight Sonata"
          },
          "variants": [
            {
              "name": "vivo V20 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V20 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20.jpg"
          ]
        },
        {
          "name": "vivo V20 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730 (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, upgradable to Android 12, Funtouch 12",
            "weight": "171 g (6.03 oz)",
            "dimensions": "161.3 x 74.2 x 7.4 mm (6.35 x 2.92 x 0.29 in)",
            "colors": "Sunset Melody, Midnight Jazz, Moonlight Sonata"
          },
          "variants": [
            {
              "name": "vivo V20 2021 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V20 2021 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V20 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20-pro.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 10, upgradable to Android 11, Funtouch 11",
            "weight": "170 g (6.00 oz)",
            "dimensions": "158.8 x 74.2 x 7.4 mm (6.25 x 2.92 x 0.29 in)",
            "colors": "Sunset Melody, Midnight Jazz, Moonlight Sonata"
          },
          "variants": [
            {
              "name": "vivo V20 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v20-pro.jpg"
          ]
        },
        {
          "name": "vivo V20 SE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "171 g (6.03 oz)",
            "dimensions": "161 x 74.1 x 7.8 mm (6.34 x 2.92 x 0.31 in)",
            "colors": "Gravity Black, Oxygen Blue"
          },
          "variants": [
            {
              "name": "vivo V20 SE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V21",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 800U (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "176 g (6.21 oz)",
            "dimensions": "159.7 x 73.9 x 7.3 mm (6.29 x 2.91 x 0.29 in)",
            "colors": "Dusk Blue, Sunset Dazzle"
          },
          "variants": [
            {
              "name": "vivo V21 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V21 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21.jpg"
          ]
        },
        {
          "name": "vivo V21e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21e.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "171 g (6.03 oz)",
            "dimensions": "161.2 x 74.4 x 7.4 mm (6.35 x 2.93 x 0.29 in)",
            "colors": "Diamond Flare, Roman Black"
          },
          "variants": [
            {
              "name": "vivo V21e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21e.jpg"
          ]
        },
        {
          "name": "vivo V21e 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21e-5g.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "165 g or 167 g (5.82 oz)",
            "dimensions": "160.6 x 73.9 x 7.7 or 7.8 mm",
            "colors": "Sunset Jazz, Dark Pearl"
          },
          "variants": [
            {
              "name": "vivo V21e 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v21e-5g.jpg"
          ]
        },
        {
          "name": "vivo V21s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 800U (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "176 g / 177 g (6.21 oz)",
            "dimensions": "159.7 x 73.9 x 7.3 mm or 7.4 mm",
            "colors": "Dusk Blue, Gradient"
          },
          "variants": [
            {
              "name": "vivo V21s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V23 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-5g.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 920 (6 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 12, upgradable to Android 14, Funtouch 14",
            "weight": "179 g or 181 g (6.31 oz)",
            "dimensions": "157.2 x 72.4 x 7.4 or 7.6 mm",
            "colors": "Sunshine Gold, Stardust Black"
          },
          "variants": [
            {
              "name": "vivo V23 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V23 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-5g.jpg"
          ]
        },
        {
          "name": "vivo V23 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "171 g (6.03 oz)",
            "dimensions": "159.5 x 73.3 x 7.4 mm (6.28 x 2.89 x 0.29 in)",
            "colors": "Sunshine Gold, Stardust Black"
          },
          "variants": [
            {
              "name": "vivo V23 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V23 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23-pro.jpg"
          ]
        },
        {
          "name": "vivo V23e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23e.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4050 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.9 x 74.3 x 7.4 mm (6.33 x 2.93 x 0.29 in)",
            "colors": "Black, Aurora"
          },
          "variants": [
            {
              "name": "vivo V23e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V23e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v23e.jpg"
          ]
        },
        {
          "name": "vivo V23e 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4050 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.9 x 74.3 x 7.4 mm (6.33 x 2.93 x 0.29 in)",
            "colors": "Sunshine Coast (Sunshine Gold), Moonlight Shadow (Midnight Blue)"
          },
          "variants": [
            {
              "name": "vivo V23e 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V25 5G",
          "aliases": [],
          "releaseYear": null,
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V25 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo V25 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V25 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V25 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V25e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v25e.jpg",
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "183 g (6.46 oz)",
            "dimensions": "159.2 x 74.2 x 7.8 mm (6.27 x 2.92 x 0.31 in)",
            "colors": "Diamond Black, Sunrise Gold"
          },
          "variants": [
            {
              "name": "vivo V25e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V25e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V25e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v25e.jpg"
          ]
        },
        {
          "name": "vivo V27",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 7200 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "180 g (6.35 oz)",
            "dimensions": "164.1 x 74.8 x 7.4 mm (6.46 x 2.94 x 0.29 in)",
            "colors": "Magic Blue, Noble Black, Emerald Green, Flowing Gold"
          },
          "variants": [
            {
              "name": "vivo V27 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27.jpg"
          ]
        },
        {
          "name": "vivo V27 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.1 x 74.8 x 7.4 mm (6.46 x 2.94 x 0.29 in)",
            "colors": "Magic Blue, Noble Black"
          },
          "variants": [
            {
              "name": "vivo V27 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v27-pro.jpg"
          ]
        },
        {
          "name": "vivo V27e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "185 g (6.53 oz)",
            "dimensions": "162.5 x 75.8 x 7.7 mm (6.40 x 2.98 x 0.30 in)",
            "colors": "Glory Black, Lavender Purple, Lively Green"
          },
          "variants": [
            {
              "name": "vivo V27e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V27e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V29 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V29 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V29 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V29 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V29 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v29-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, up to 3 major Android upgrades, Funtouch 13",
            "weight": "188 g (6.63 oz)",
            "dimensions": "164.2 x 74.4 x 7.5 mm (6.46 x 2.93 x 0.30 in)",
            "colors": "Himalayan Blue, Space Black, Pink"
          },
          "variants": [
            {
              "name": "vivo V29 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V29 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v29-pro.jpg"
          ]
        },
        {
          "name": "vivo V29e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v29e.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Ion 4800 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162.4 x 74.9 x 7.7 mm (6.39 x 2.95 x 0.30 in)",
            "colors": "Forest Black, Rose Gold, Ice Creek Blue"
          },
          "variants": [
            {
              "name": "vivo V29e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V29e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v29e.jpg"
          ]
        },
        {
          "name": "vivo V29e Global",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Ion 4800 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162.4 x 74.9 x 7.7 mm (6.39 x 2.95 x 0.30 in)",
            "colors": "Forest Black, Rose Gold, Ice Creek Blue"
          },
          "variants": [
            {
              "name": "vivo V29e Global 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V29e Global 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V30 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-lite.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "185.5 g or 191 g (6.56 oz)",
            "dimensions": "162.4 x 74.9 x 7.8 mm (6.39 x 2.95 x 0.31 in)",
            "colors": "Leather Purple, Leather Orange, Crystal Black"
          },
          "variants": [
            {
              "name": "vivo V30 Lite 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-lite.jpg"
          ]
        },
        {
          "name": "vivo V30 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, up to 2 major Android upgrades, Funtouch 14",
            "weight": "188 g (6.63 oz)",
            "dimensions": "164.4 x 75.1 x 7.5 mm (6.47 x 2.96 x 0.30 in)",
            "colors": "Bloom White, Waving Aqua, Lush Green, Noble Black"
          },
          "variants": [
            {
              "name": "vivo V30 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V30 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V30 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v30-pro.jpg"
          ]
        },
        {
          "name": "vivo V40 Lite 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 685 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "188 g or 190 g (6.63 oz)",
            "dimensions": "163.2 x 75.9 x 7.8 mm or 8.0 mm",
            "colors": "Titanium Silver, Carbon Black, Pearl Violet"
          },
          "variants": [
            {
              "name": "vivo V40 Lite 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V40 Lite 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V40 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V40 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V40 SE 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V40 SE 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V40e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40e.jpg",
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Mediatek Dimensity 7300 (4 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5500 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "183 g (6.46 oz)",
            "dimensions": "163.7 x 75 x 7.5 mm (6.44 x 2.95 x 0.30 in)",
            "colors": "Royal Bronze, Mint Green"
          },
          "variants": [
            {
              "name": "vivo V40e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V40e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v40e.jpg"
          ]
        },
        {
          "name": "vivo V5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v5.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow), Funtouch 2.6",
            "weight": "154 g (5.43 oz)",
            "dimensions": "153.8 x 75.5 x 7.6 mm (6.06 x 2.97 x 0.30 in)",
            "colors": "Gold, Gray"
          },
          "variants": [
            {
              "name": "vivo V5 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v5.jpg"
          ]
        },
        {
          "name": "vivo V50",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50.jpg",
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Si/C 6000 mAh",
            "os": "Android 15, up to 3 major Android upgrades, Funtouch 15",
            "weight": "189 g or 199 g (6.67 oz)",
            "dimensions": "163.3 x 76.7 x 7.4 / 7.6 / 7.7 mm",
            "colors": "Ancora Red (Rose Red), Satin Black (Titanium Grey), Starry Blue (Starry Night), Mist Purple"
          },
          "variants": [
            {
              "name": "vivo V50 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V50 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V50 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V50 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50.jpg"
          ]
        },
        {
          "name": "vivo V50 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6500 mAh",
            "os": "Android 15, Funtouch 15",
            "weight": "197 g (6.95 oz)",
            "dimensions": "163.8 x 76.3 x 7.8 mm (6.45 x 3.00 x 0.31 in)",
            "colors": "Phantom Black, Titanium Gold, Fantasy Purple, Silk Green"
          },
          "variants": [
            {
              "name": "vivo V50 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V50 Lite 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V50 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50-lite-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V50 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50-lite-5g.jpg"
          ]
        },
        {
          "name": "vivo V50e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50e.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V50e Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v50e.jpg"
          ]
        },
        {
          "name": "vivo V5Plus Limited Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V5Plus Limited Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V5S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v5s.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 6 (Marshmallow), Funtouch 3",
            "weight": "154 g (5.43 oz)",
            "dimensions": "153.8 x 75.5 x 7.6 mm (6.06 x 2.97 x 0.30 in)",
            "colors": "Crown Gold, Matte Black"
          },
          "variants": [
            {
              "name": "vivo V5S 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v5s.jpg"
          ]
        },
        {
          "name": "vivo V60",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V60 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo V60 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo V60 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo V60 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60.jpg"
          ]
        },
        {
          "name": "vivo V60 Lite 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60-lite-4g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V60 Lite 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60-lite-4g.jpg"
          ]
        },
        {
          "name": "vivo V60 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V60 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V60e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60e.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V60e Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v60e.jpg"
          ]
        },
        {
          "name": "vivo V7",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v7.jpg",
          "specs": {
            "display": "5.7 inches, 83.8 cm, 720 x 1440 pixels, 18:9 ratio (~282 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat), Funtouch 3.2",
            "weight": "139 g (4.90 oz)",
            "dimensions": "149.3 x 72.8 x 7.9 mm (5.88 x 2.87 x 0.31 in)",
            "colors": "Champagne Gold, Matte Black, Energetic Blue"
          },
          "variants": [
            {
              "name": "vivo V7 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v7.jpg"
          ]
        },
        {
          "name": "vivo V7+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v7-plus.jpg",
          "specs": {
            "display": "5.99 inches, 92.6 cm, 720 x 1440 pixels, 18:9 ratio (~269 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3225 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat), Funtouch 3.2",
            "weight": "160 g (5.64 oz)",
            "dimensions": "155.9 x 75.8 x 7.7 mm (6.14 x 2.98 x 0.30 in)",
            "colors": "Champagne Gold, Matte Black, Infinite Red"
          },
          "variants": [
            {
              "name": "vivo V7+ 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V7+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v7-plus.jpg"
          ]
        },
        {
          "name": "vivo V7+ Infinite Love",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V7+ Infinite Love Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V70",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V70 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70.jpg"
          ]
        },
        {
          "name": "vivo V70 Elite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70-elite.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V70 Elite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70-elite.jpg"
          ]
        },
        {
          "name": "vivo V70 FE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70-fe.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V70 FE Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-v70-fe.jpg"
          ]
        },
        {
          "name": "vivo V9",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Qualcomm MSM8953-Pro Snapdragon 626 (14 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "154.8 x 75.1 x 7.9 mm (6.09 x 2.96 x 0.31 in)",
            "colors": "Gold, Black, Sapphire Blue"
          },
          "variants": [
            {
              "name": "vivo V9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V9 6 GB",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Black, Red"
          },
          "variants": [
            {
              "name": "vivo V9 6 GB 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo V9 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo V9 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo V9 Youth",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "154.8 x 75.1 x 7.9 mm (6.09 x 2.96 x 0.31 in)",
            "colors": "Champagne Gold, Pearl Black, Red"
          },
          "variants": [
            {
              "name": "vivo V9 Youth 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo V9 Youth 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        }
      ]
    },
    {
      "name": "vivo Y",
      "models": [
        {
          "name": "vivo Y76 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y76-5g.jpg",
          "specs": {
            "display": "IPS LCD, 460 nits (typ), 6.58 inches, 1080 x 2408",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4100",
            "os": "Android 11, Funtouch 12",
            "weight": "175.0",
            "dimensions": "163.8 x 75 x 7.8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Cosmic Aurora, Midnight Space"
          },
          "variants": [
            {
              "name": "vivo Y76 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y76-5g.jpg"
          ]
        },
        {
          "name": "vivo Y50",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y50.jpg",
          "specs": {
            "display": "IPS LCD, 6.53 inches, 1080 x 2400",
            "processor": "Qualcomm SM6125 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 10, Funtouch 10.0",
            "weight": "197.0",
            "dimensions": "162 x 76.5 x 9.1 mm (6.38 x 3.01 x 0.36 in)",
            "colors": "Starry Black, Iris Blue, Iris Blue, Pearl White"
          },
          "variants": [
            {
              "name": "vivo Y50 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y50.jpg"
          ]
        },
        {
          "name": "vivo Y25",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y25.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.3% screen-to-body ratio)",
            "processor": "Mediatek MT6580",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Li-Ion 1900 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": null,
            "dimensions": "130.7 x 66.4 x 9.2 mm (5.15 x 2.61 x 0.36 in)",
            "colors": "White/Gray"
          },
          "variants": [
            {
              "name": "vivo Y25 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y55S",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y55s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~282 ppi pixel density), 5.2 inches (~69.1% screen-to-body ratio)",
            "processor": "Qualcomm MSM8917 Snapdragon 425",
            "ram": "2/3 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2730 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "142 g",
            "dimensions": "147.9 x 72.9 x 7.5 mm (5.82 x 2.87 x 0.30 in)",
            "colors": "Crown Gold| Rose Gold| Space Gray"
          },
          "variants": [
            {
              "name": "vivo Y55S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y15s",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y15s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.1% screen-to-body ratio)",
            "processor": "Mediatek MT6580",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Po 1900 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "130 g",
            "dimensions": "131.4 x 66.2 x 9 mm (5.17 x 2.61 x 0.35 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "vivo Y15s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y31",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y31.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~312 ppi pixel density), 4.7 inches (~64.5% screen-to-body ratio)",
            "processor": "Mediatek MT6580",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Po 2100 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "137 g",
            "dimensions": "137.2 x 68.8 x 8.4 mm (5.40 x 2.71 x 0.33 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "vivo Y31 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y35",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y35.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2300 mAh battery",
            "os": "Android 5.0 (Lollipop)",
            "weight": "153 g",
            "dimensions": "143.3 x 71 x 6.8 mm (5.64 x 2.80 x 0.27 in)",
            "colors": "White/Gold"
          },
          "variants": [
            {
              "name": "vivo Y35 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y37",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y37.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~70.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2720 mAh battery",
            "os": "Android 5.0 (Lollipop)",
            "weight": "165 g",
            "dimensions": "154 x 77 x 6.8 mm (6.06 x 3.03 x 0.27 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo Y37 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y51",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y51.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~220 ppi pixel density), 5.0 inches (~66.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2350 mAh battery",
            "os": "Android 5.0.2 (Lollipop)",
            "weight": "157 g",
            "dimensions": "143.8 x 71.7 x 7.5 mm (5.66 x 2.82 x 0.30 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo Y51 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y11",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y11.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~233 ppi pixel density), 4.0 inches (~59.2% screen-to-body ratio)",
            "processor": "Mediatek MT6582&#1052;",
            "ram": "512 MB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Po 1700 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "124 g",
            "dimensions": "123 x 62.5 x 8.8 mm (4.84 x 2.46 x 0.35 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "vivo Y11 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y27",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y27.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~312 ppi pixel density), 4.7 inches (~65.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Po 2260 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "137 g",
            "dimensions": "136.9 x 68.1 x 7 mm (5.39 x 2.68 x 0.28 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "vivo Y27 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y15",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y15.jpg",
          "specs": {
            "display": "Capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.1% screen-to-body ratio)",
            "processor": "Mediatek MT6582",
            "ram": "512 MB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "130 g",
            "dimensions": "131.4 x 66.2 x 9 mm (5.17 x 2.61 x 0.35 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "vivo Y15 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y22",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/vivo-y22.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~63.9% screen-to-body ratio)",
            "processor": "Mediatek MT6582",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "126 g",
            "dimensions": "130.5 x 66.9 x 8.6 mm (5.14 x 2.63 x 0.34 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "vivo Y22 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y01",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y01.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), Funtouch 11.1",
            "weight": "178 g (6.28 oz)",
            "dimensions": "164 x 75.2 x 8.3 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Sapphire Blue, Elegant Black"
          },
          "variants": [
            {
              "name": "vivo Y01 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y01 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y01.jpg"
          ]
        },
        {
          "name": "vivo Y01A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y01A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y02",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12 (Go edition), Funtouch 12",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164 x 75.6 x 8.5 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Cosmic Grey, Orchid Blue"
          },
          "variants": [
            {
              "name": "vivo Y02 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y02 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y02A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12 (Go edition), Funtouch 12",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164 x 75.6 x 8.5 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Cosmic Grey, Orchid Blue"
          },
          "variants": [
            {
              "name": "vivo Y02A 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y02s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y02s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164 x 76 x 8.2 mm (6.46 x 2.99 x 0.32 in)",
            "colors": "Vibrant Blue, Fluorite Black"
          },
          "variants": [
            {
              "name": "vivo Y02s 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y02s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y02s 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y02s.jpg"
          ]
        },
        {
          "name": "vivo Y02t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y02t.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164 x 75.6 x 8.5 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Orchid Blue, Cosmic Grey, Sunset Gold"
          },
          "variants": [
            {
              "name": "vivo Y02t 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y02t 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y02t.jpg"
          ]
        },
        {
          "name": "vivo Y03",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y03.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Helio G85 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.8 x 75.7 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Space Black, Gem Green"
          },
          "variants": [
            {
              "name": "vivo Y03 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y03 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y03.jpg"
          ]
        },
        {
          "name": "vivo Y04 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y04 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y04s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y04s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y05",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y05.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y05 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y05.jpg"
          ]
        },
        {
          "name": "vivo Y1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y10 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y10 t1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y10 t1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y100",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y100.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "172 g or 183 g (6.07 oz)",
            "dimensions": "164.4 x 74.9 x 7.6 mm (6.47 x 2.95 x 0.30 in)",
            "colors": "Blue, Green, Black"
          },
          "variants": [
            {
              "name": "vivo Y100 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y100.jpg"
          ]
        },
        {
          "name": "vivo Y100 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y100 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y100 V2313A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y100 V2313A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y100A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y100A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y100i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y100i.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8 mm (6.46 x 3.00 x 0.31 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "vivo Y100i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100i 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100i 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y100i.jpg"
          ]
        },
        {
          "name": "vivo Y100t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "200 g (7.05 oz)",
            "dimensions": "164.6 x 75.8 x 8.8 mm (6.48 x 2.98 x 0.35 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo Y100t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100t 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y100t 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y11 2019",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y11-2019.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y11 2019 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y11-2019.jpg"
          ]
        },
        {
          "name": "vivo Y11 2023",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y11 2023 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y11 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y11 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y11d",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y11d Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y11s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y11s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "191 g (6.74 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Glacier Blue, Phantom Black"
          },
          "variants": [
            {
              "name": "vivo Y11s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y11s.jpg"
          ]
        },
        {
          "name": "vivo Y12",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y12.jpg",
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "190.5 g (6.74 oz)",
            "dimensions": "159.4 x 76.8 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Aqua Blue, Burgundy Red"
          },
          "variants": [
            {
              "name": "vivo Y12 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y12.jpg"
          ]
        },
        {
          "name": "vivo Y12 V2317A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y12 V2317A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y12A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11",
            "weight": "191 g (6.74 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Phantom Black, Glacier Blue"
          },
          "variants": [
            {
              "name": "vivo Y12A 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y12G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y12G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y12i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "190.5 g (6.74 oz)",
            "dimensions": "159.4 x 76.8 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Agate Red, Mineral Blue"
          },
          "variants": [
            {
              "name": "vivo Y12i 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y12s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y12s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "191 g (6.74 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Glacier Blue, Phantom Black"
          },
          "variants": [
            {
              "name": "vivo Y12s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12s 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y12s.jpg"
          ]
        },
        {
          "name": "vivo Y12s 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11",
            "weight": "191 g (6.74 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Mysterious Black (Phantom Black), Ice Blue (Glacier Blue)"
          },
          "variants": [
            {
              "name": "vivo Y12s 2021 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y12s 2021 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y13",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y13 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y15 2019",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y15 2019 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y15 2020",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y15 2020 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y15A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "179 g (6.31 oz)",
            "dimensions": "164 x 75.2 x 8.3 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Wave Green, Mystic Blue"
          },
          "variants": [
            {
              "name": "vivo Y15A 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y15c",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y15c Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y16",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y16.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "184 g (6.49 oz)",
            "dimensions": "164 x 75.6 x 8.2 mm (6.46 x 2.98 x 0.32 in)",
            "colors": "Drizzling Gold, Stellar Black"
          },
          "variants": [
            {
              "name": "vivo Y16 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y16 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y16 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y16 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y16 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y16.jpg"
          ]
        },
        {
          "name": "vivo Y17",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y17.jpg",
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "190.5 g (6.74 oz)",
            "dimensions": "159.4 x 76.8 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Mineral Blue, Mystic Purple, Peach Pink, Peacock Blue"
          },
          "variants": [
            {
              "name": "vivo Y17 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y17 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y17.jpg"
          ]
        },
        {
          "name": "vivo Y17 2019",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y17 2019 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y17s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y17s.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6769 Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.7 x 75.4 x 8.1 mm (6.44 x 2.97 x 0.32 in)",
            "colors": "Glitter Purple, Forest Green"
          },
          "variants": [
            {
              "name": "vivo Y17s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y17s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y17s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y17s.jpg"
          ]
        },
        {
          "name": "vivo Y18L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y18L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y18t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Unisoc T612 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.6 x 75.6 x 8.4 mm (6.44 x 2.98 x 0.33 in)",
            "colors": "Space Black, Gem Green"
          },
          "variants": [
            {
              "name": "vivo Y18t 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y19",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y19.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6768 Helio P65 (12 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.2 x 76.5 x 8.9 mm (6.39 x 3.01 x 0.35 in)",
            "colors": "Magnetic Black, Spring White"
          },
          "variants": [
            {
              "name": "vivo Y19 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y19.jpg"
          ]
        },
        {
          "name": "vivo Y19 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y19e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19e Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y19s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y19s.jpg",
          "specs": {
            "display": "6.68 inches, 107.4 cm, 720 x 1608 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Unisoc Tiger T612 (12 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5500 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "198 g (6.98 oz)",
            "dimensions": "165.8 x 76.1 x 8.1 mm (6.53 x 3.00 x 0.32 in)",
            "colors": "Pearl Silver, Glossy Black, Glacier Blue"
          },
          "variants": [
            {
              "name": "vivo Y19s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19s 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y19s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y19s.jpg"
          ]
        },
        {
          "name": "vivo Y19s 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19s 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y19s Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19s Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y19sGT",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19sGT Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y19t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y19t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y1s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y1s.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 4030 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "161 g (5.68 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Aurora Blue, Olive Black"
          },
          "variants": [
            {
              "name": "vivo Y1s 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y1s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y1s.jpg"
          ]
        },
        {
          "name": "vivo Y20",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "3GB, 4GB, 6GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "192.3 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Obsidian Black, Dawn White, Purist Blue"
          },
          "variants": [
            {
              "name": "vivo Y20 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20.jpg"
          ]
        },
        {
          "name": "vivo Y20 2020",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y20 2020 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y20 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20-2021.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Dawn White, Nebula Blue"
          },
          "variants": [
            {
              "name": "vivo Y20 2021 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20 2021 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20-2021.jpg"
          ]
        },
        {
          "name": "vivo Y200",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "188 g or 190 g (6.63 oz)",
            "dimensions": "163.2 x 75.9 x 7.8 mm or 8.0 mm",
            "colors": "Dynamic Black (Imperial Black), Titanium Silver, Dreamy Violet"
          },
          "variants": [
            {
              "name": "vivo Y200 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y200 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y200 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 685 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "188 g or 190 g (6.63 oz)",
            "dimensions": "163.2 x 75.9 x 7.8 mm (6.43 x 2.99 x 0.31 in)",
            "colors": "Titanium Silver, Emerald Green"
          },
          "variants": [
            {
              "name": "vivo Y200 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y200 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y200+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.68 inches, 107.4 cm, 720 x 1608 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "199 g (7.02 oz)",
            "dimensions": "165.7 x 76 x 8 mm (6.52 x 2.99 x 0.31 in)",
            "colors": "Dark Gray, Green, Apricot"
          },
          "variants": [
            {
              "name": "vivo Y200+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y200+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y200+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y200e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "185.5 g or 191 g (6.56 oz)",
            "dimensions": "163.2 x 75.8 x 7.8 mm (6.43 x 2.98 x 0.31 in)",
            "colors": "Black Diamond, Saffron Delight"
          },
          "variants": [
            {
              "name": "vivo Y200e 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y200e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y20a",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Dawn White, Nebula Blue"
          },
          "variants": [
            {
              "name": "vivo Y20a 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y20G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20g.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "192.3 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Purist Blue, Obsidian Black"
          },
          "variants": [
            {
              "name": "vivo Y20G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20g.jpg"
          ]
        },
        {
          "name": "vivo Y20i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "192.3 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Dawn White, Nebula Blue"
          },
          "variants": [
            {
              "name": "vivo Y20i 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20i 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y20s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.5 or Funtouch 11",
            "weight": "192.3 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Purist Blue, Obsidian Black, Nebula Blue"
          },
          "variants": [
            {
              "name": "vivo Y20s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y20s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y20s.jpg"
          ]
        },
        {
          "name": "vivo Y20s G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y20s G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y20T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Obsidian Black, Purist Blue"
          },
          "variants": [
            {
              "name": "vivo Y20T 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y21",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Diamond Glow, Midnight Blue"
          },
          "variants": [
            {
              "name": "vivo Y21 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y21 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y21 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y21 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y21 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y21 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y21a",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Midnight Blue, Diamond Glow"
          },
          "variants": [
            {
              "name": "vivo Y21a 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y21d",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y21d.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y21d Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y21d.jpg"
          ]
        },
        {
          "name": "vivo Y21e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Midnight Blue, Diamond Glow"
          },
          "variants": [
            {
              "name": "vivo Y21e 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y21G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6769 Helio G70 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Diamond Glow, Midnight Blue"
          },
          "variants": [
            {
              "name": "vivo Y21G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y21s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y21s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Midnight Blue, Pearl White"
          },
          "variants": [
            {
              "name": "vivo Y21s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y21s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y21s.jpg"
          ]
        },
        {
          "name": "vivo Y21T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Midnight Blue, Pearl White"
          },
          "variants": [
            {
              "name": "vivo Y21T 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y21T 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y22 2022",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y22-2022.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y22 2022 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y22-2022.jpg"
          ]
        },
        {
          "name": "vivo Y22iL",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y22iL Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y22L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y22L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y22s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y22s.jpg",
          "specs": {
            "display": "6.55 inches, 103.1 cm, 720 x 1612 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.3 x 76.1 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Summer Cyan, Starlit Blue"
          },
          "variants": [
            {
              "name": "vivo Y22s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y22s.jpg"
          ]
        },
        {
          "name": "vivo Y22s Global",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.55 inches, 103.1 cm, 720 x 1612 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.3 x 76.1 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Summer Cyan, Starlit Blue"
          },
          "variants": [
            {
              "name": "vivo Y22s Global 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y23L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y23L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y27 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y27 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y27 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y27-5g.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8.1 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Satin Purple, Mystic Black"
          },
          "variants": [
            {
              "name": "vivo Y27 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y27 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y27 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y27 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y27-5g.jpg"
          ]
        },
        {
          "name": "vivo Y27L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y27L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y27s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y27s.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.1 x 76.2 x 8.2 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Burgundy Black, Garden Green"
          },
          "variants": [
            {
              "name": "vivo Y27s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y27s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y27s.jpg"
          ]
        },
        {
          "name": "vivo Y27s Indonesia",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.1 x 76.2 x 8.2 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Burgundy Black, Garden Green"
          },
          "variants": [
            {
              "name": "vivo Y27s Indonesia 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y27s Indonesia 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y28 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y28 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y28L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y28L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y29 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y29-4g.jpg",
          "specs": {
            "display": "6.68 inches, 107.4 cm, 720 x 1608 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 685 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 6500 mAh",
            "os": "Android 15, Funtouch 15",
            "weight": "204 g or 208 g (7.20 oz)",
            "dimensions": "165.7 x 76.3 x 8.2 mm (6.52 x 3.00 x 0.32 in)",
            "colors": "Noble Brown, Elegant White"
          },
          "variants": [
            {
              "name": "vivo Y29 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y29 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y29 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y29-4g.jpg"
          ]
        },
        {
          "name": "vivo Y29 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y29 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y29L",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y29L Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y29s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.74 inches, 109.7 cm, 720 x 1600 pixels, 20:9 ratio (~260 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Ion 5500 mAh - Global",
            "os": "Android 15, Funtouch 15",
            "weight": "199 g (7.02 oz)",
            "dimensions": "167.3 x 77 x 8.2 mm (6.59 x 3.03 x 0.32 in)",
            "colors": "Titanium Gold, Dark Green"
          },
          "variants": [
            {
              "name": "vivo Y29s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y29t 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y29t 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.0",
            "weight": "190 g (6.70 oz)",
            "dimensions": "159.4 x 76.7 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Ink blue, Jade Red"
          },
          "variants": [
            {
              "name": "vivo Y3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y3 Standard Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "191.5 g (6.77 oz)",
            "dimensions": "159.4 x 76.7 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Ink blue, Jade Red"
          },
          "variants": [
            {
              "name": "vivo Y3 Standard Edition 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y30",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y30.jpg",
          "specs": {
            "display": "6.47 inches, 102.8 cm, 720 x 1560 pixels, 19.5:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB, 4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "197 g (6.95 oz)",
            "dimensions": "162 x 76.5 x 9.1 mm (6.38 x 3.01 x 0.36 in)",
            "colors": "Dazzle Blue, Moonstone White"
          },
          "variants": [
            {
              "name": "vivo Y30 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y30.jpg"
          ]
        },
        {
          "name": "vivo Y30 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y30 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y30 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164 x 75.9 x 8.3 mm (6.46 x 2.99 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo Y30 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y30 Standard Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "191.4 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Aurora, Glacier Blue"
          },
          "variants": [
            {
              "name": "vivo Y30 Standard Edition 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 Standard Edition 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 Standard Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y30 Standard Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y30 V2034A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y30 V2034A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y300",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6500 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "200 g (7.05 oz)",
            "dimensions": "163.6 x 76.2 x 7.8 mm (6.44 x 3.00 x 0.31 in)",
            "colors": "Black, White, Green"
          },
          "variants": [
            {
              "name": "vivo Y300 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y300 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y300 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-5g.jpg"
          ]
        },
        {
          "name": "vivo Y300 GT",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y300 GT Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y300 Plus",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "172 g or 183 g (6.07 oz)",
            "dimensions": "164.4 x 74.9 x 7.5 mm (6.47 x 2.95 x 0.30 in)",
            "colors": "Silk black, Silk green"
          },
          "variants": [
            {
              "name": "vivo Y300 Plus 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y300 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-pro.jpg",
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Qualcomm SM6450 Snapdragon 6 Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "6500 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "194 g (6.84 oz)",
            "dimensions": "163.4 x 76.4 x 7.7 mm (6.43 x 3.01 x 0.30 in)",
            "colors": "Black, Ocean Blue, Titanium, White"
          },
          "variants": [
            {
              "name": "vivo Y300 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-pro.jpg"
          ]
        },
        {
          "name": "vivo Y300 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-pro-plus.jpg",
          "specs": {
            "display": "6.77 inches, 110.9 cm, 1080 x 2392 pixels (~388 ppi density)",
            "processor": "Qualcomm SM7635 Snapdragon 7s Gen 3 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 7300 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "199 g (7.02 oz)",
            "dimensions": "163.4 x 76.4 x 7.9 mm (6.43 x 3.01 x 0.31 in)",
            "colors": "Black, Silver, Pink"
          },
          "variants": [
            {
              "name": "vivo Y300 Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300 Pro+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300-pro-plus.jpg"
          ]
        },
        {
          "name": "vivo Y300c",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y300c Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y300i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.68 inches, 107.4 cm, 720 x 1608 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6500 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "205 g (7.23 oz)",
            "dimensions": "165.7 x 76.3 x 8.1 mm (6.52 x 3.00 x 0.32 in)",
            "colors": "Black, Blue, Titanium"
          },
          "variants": [
            {
              "name": "vivo Y300i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300i 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300i 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y300t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300t.jpg",
          "specs": {
            "display": "6.72 inches, 108.8 cm, 1080 x 2408 pixels, 20:9 ratio (~393 ppi density)",
            "processor": "Mediatek Dimensity 7300 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Ion 6500 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "204 g or 208 g (7.20 oz)",
            "dimensions": "165.7 x 76.3 x 8.1 mm (6.52 x 3.00 x 0.32 in)",
            "colors": "Black, White, Blue"
          },
          "variants": [
            {
              "name": "vivo Y300t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300t 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y300t 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y300t.jpg"
          ]
        },
        {
          "name": "vivo Y30g",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y30g.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6768 Helio P65 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "191.4 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Obsidian Black, Dawn White, Aqua Blue"
          },
          "variants": [
            {
              "name": "vivo Y30g 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y30g.jpg"
          ]
        },
        {
          "name": "vivo Y30i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y30i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y31 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31-2021.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31-2021.jpg"
          ]
        },
        {
          "name": "vivo Y31 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31-5g.jpg"
          ]
        },
        {
          "name": "vivo Y31 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y31A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y31d",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31d.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31d Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y31d.jpg"
          ]
        },
        {
          "name": "vivo Y31s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.8 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 10.5",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164.2 x 75.4 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Red, Gray, Aurora"
          },
          "variants": [
            {
              "name": "vivo Y31s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y31s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y31s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y31s V2068A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y31s V2068A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y32",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y32.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Dark Blue, Light Blue"
          },
          "variants": [
            {
              "name": "vivo Y32 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y32 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y32 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y32 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y32.jpg"
          ]
        },
        {
          "name": "vivo Y32t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y32t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y33",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "191 g (6.74 oz)",
            "dimensions": "164 x 75.5 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Black, Light Blue"
          },
          "variants": [
            {
              "name": "vivo Y33 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y33 V2057",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y33 V2057 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y33e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33e.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "198 g (6.98 oz)",
            "dimensions": "164 x 75.9 x 8.5 mm (6.46 x 2.99 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo Y33e 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33e.jpg"
          ]
        },
        {
          "name": "vivo Y33S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33s.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Mirror Black, Midday Dream"
          },
          "variants": [
            {
              "name": "vivo Y33S 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y33S 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y33S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33s.jpg"
          ]
        },
        {
          "name": "vivo Y33s V2166A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y33s V2166A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y33T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33t.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Mirror Black, Midday Dream"
          },
          "variants": [
            {
              "name": "vivo Y33T 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y33T 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y33t.jpg"
          ]
        },
        {
          "name": "vivo Y33t V2317A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y33t V2317A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y35 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y35 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y35 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y35-5g.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS Ocean",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164.1 x 75.6 x 8.2 mm (6.46 x 2.98 x 0.32 in)",
            "colors": "Gold, Black, Blue"
          },
          "variants": [
            {
              "name": "vivo Y35 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y35 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y35 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y35-5g.jpg"
          ]
        },
        {
          "name": "vivo Y35+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y35-plus.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8.1 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Black, Blue, Violet"
          },
          "variants": [
            {
              "name": "vivo Y35+ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y35+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y35+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y35-plus.jpg"
          ]
        },
        {
          "name": "vivo Y35A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y35A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y35m",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y35m Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y35m+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y35m+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y36",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "202 g (7.13 oz)",
            "dimensions": "164.1 x 76.2 x 8.2 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Meteor Black, Vibrant Gold"
          },
          "variants": [
            {
              "name": "vivo Y36 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36.jpg"
          ]
        },
        {
          "name": "vivo Y36 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36-5g.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8.1 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Crystal Green, Mystic Black"
          },
          "variants": [
            {
              "name": "vivo Y36 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36-5g.jpg"
          ]
        },
        {
          "name": "vivo Y36 5G China",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8.1 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Crystal Green, Mystic Black"
          },
          "variants": [
            {
              "name": "vivo Y36 5G China 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y36c",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y36c Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y36i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36i.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.7 x 75.4 x 8.1 mm (6.44 x 2.97 x 0.32 in)",
            "colors": "Purple, Gold, Black"
          },
          "variants": [
            {
              "name": "vivo Y36i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y36i.jpg"
          ]
        },
        {
          "name": "vivo Y36m",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y36m Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y37 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y37-pro.jpg",
          "specs": {
            "display": "6.68 inches, 107.4 cm, 720 x 1608 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM4450 Snapdragon 4 Gen 2 (4 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "199 g (7.02 oz)",
            "dimensions": "165.7 x 76 x 8 mm (6.52 x 2.99 x 0.31 in)",
            "colors": "Dark Gray, Green, Apricot"
          },
          "variants": [
            {
              "name": "vivo Y37 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y37-pro.jpg"
          ]
        },
        {
          "name": "vivo Y37+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y37+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y37c",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y37c Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y37t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y37t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y39 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y39-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y39 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y39-5g.jpg"
          ]
        },
        {
          "name": "vivo Y3s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y3s.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), Funtouch 11",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Starry Blue, Pearl White, Mint Green"
          },
          "variants": [
            {
              "name": "vivo Y3s 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y3s.jpg"
          ]
        },
        {
          "name": "vivo Y3s India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), Funtouch 11",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Starry Blue, Pearl White, Mint Green"
          },
          "variants": [
            {
              "name": "vivo Y3s India 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y3t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y3t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y400",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y400 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y400 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y400-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y400 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y400-5g.jpg"
          ]
        },
        {
          "name": "vivo Y400 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y400 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y50 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y500",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y500 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y500 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y500-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y500 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y500-pro.jpg"
          ]
        },
        {
          "name": "vivo Y500i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y500i.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y500i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y500i.jpg"
          ]
        },
        {
          "name": "vivo Y500s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y500s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y50e Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y50i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50m 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y50m 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50s 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y50s 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y50t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y50t.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, OriginOS",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162 x 76.6 x 8.5 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo Y50t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y50t.jpg"
          ]
        },
        {
          "name": "vivo Y51 2020",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y51-2020.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y51 2020 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y51-2020.jpg"
          ]
        },
        {
          "name": "vivo Y51 2020 Indonesia",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y51 2020 Indonesia Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y51 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y51 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y51A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, upgradable to Android 12, Funtouch 12",
            "weight": "188 g (6.63 oz)",
            "dimensions": "163.9 x 75.3 x 8.4 mm (6.45 x 2.96 x 0.33 in)",
            "colors": "Titanium Sapphire, Crystal Symphony"
          },
          "variants": [
            {
              "name": "vivo Y51A 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y51A 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y51e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y51e Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y51s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y51s.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Exynos 880 (8 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162 x 76.6 x 8.5 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "vivo Y51s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y51s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y51s.jpg"
          ]
        },
        {
          "name": "vivo Y52",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y52 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y52 2022",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y52 2022 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y52s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164.2 x 75.4 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Gray Coral, Aurora"
          },
          "variants": [
            {
              "name": "vivo Y52s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y52s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y52s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y52s t1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164.2 x 75.4 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Gray, Coral, Aurora"
          },
          "variants": [
            {
              "name": "vivo Y52s t1 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y52s t1 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y52t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y52t.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "198 g (6.98 oz)",
            "dimensions": "164 x 75.9 x 8.5 mm (6.46 x 2.99 x 0.33 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo Y52t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y52t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y52t.jpg"
          ]
        },
        {
          "name": "vivo Y53",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 540 x 960 pixels, 16:9 ratio (~220 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2500 mAh, non-removable",
            "os": "Android 6 (Marshmallow), Funtouch 3",
            "weight": "137 g (4.83 oz)",
            "dimensions": "144.2 x 71.4 x 7.6 mm (5.68 x 2.81 x 0.30 in)",
            "colors": "Crown Gold, Matte Black"
          },
          "variants": [
            {
              "name": "vivo Y53 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53.jpg"
          ]
        },
        {
          "name": "vivo Y53i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 540 x 960 pixels, 16:9 ratio (~220 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2500 mAh, non-removable",
            "os": "Android 6 (Marshmallow), Funtouch 3",
            "weight": "137 g (4.83 oz)",
            "dimensions": "144.2 x 71.4 x 7.6 mm (5.68 x 2.81 x 0.30 in)",
            "colors": "Crown Gold, Matte Black"
          },
          "variants": [
            {
              "name": "vivo Y53i 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y53s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53s.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164 x 75.3 x 8.5 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo Y53s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y53s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53s.jpg"
          ]
        },
        {
          "name": "vivo Y53s 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53s-4g.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164 x 75.5 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Blue Purple, Black Green"
          },
          "variants": [
            {
              "name": "vivo Y53s 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y53s 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y53s-4g.jpg"
          ]
        },
        {
          "name": "vivo Y53s NFC",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y53s NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y53s t2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y53s t2 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y53s V2069A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y53s V2069A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y53t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y53t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y54s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "188.4 g (6.63 oz)",
            "dimensions": "164.2 x 75.4 x 8.5 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Blue, Black"
          },
          "variants": [
            {
              "name": "vivo Y54s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y55 4G Vietnam",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y55 4G Vietnam Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y55 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y55-5g.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164 x 75.9 x 8.3 mm (6.46 x 2.99 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo Y55 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y55 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y55-5g.jpg"
          ]
        },
        {
          "name": "vivo Y55l",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.2 inches, 74.5 cm, 720 x 1280 pixels, 16:9 ratio (~282 ppi density)",
            "processor": "Qualcomm MSM8937 Snapdragon 430 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2650 mAh, non-removable",
            "os": "Android 6 (Marshmallow), Funtouch 2.6",
            "weight": "142 g (5.01 oz)",
            "dimensions": "147.9 x 72.9 x 7.5 mm (5.82 x 2.87 x 0.30 in)",
            "colors": "Gold, Gray"
          },
          "variants": [
            {
              "name": "vivo Y55l 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y55s 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y55s 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y55s 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y55s-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y55s 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y55s-5g.jpg"
          ]
        },
        {
          "name": "vivo Y55t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y55t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y56 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y56-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y56 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y56-5g.jpg"
          ]
        },
        {
          "name": "vivo Y5s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y5s.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6768 Helio P65 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.2 x 76.5 x 8.9 mm (6.39 x 3.01 x 0.35 in)",
            "colors": "Magnetic Black, Spring White, Blue"
          },
          "variants": [
            {
              "name": "vivo Y5s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y5s.jpg"
          ]
        },
        {
          "name": "vivo Y6 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y6 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y60",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y60.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y60 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y60.jpg"
          ]
        },
        {
          "name": "vivo Y600 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y600-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y600 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y600-pro.jpg"
          ]
        },
        {
          "name": "vivo Y60m",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y60m Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y622",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y622 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y627",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y627 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y65",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y65.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "3GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1 (Nougat), Funtouch 3.2",
            "weight": "157 g (5.54 oz)",
            "dimensions": "153.6 x 75.8 x 7.5 mm (6.05 x 2.98 x 0.30 in)",
            "colors": "Gold, Matte Black, Rose Gold"
          },
          "variants": [
            {
              "name": "vivo Y65 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y65.jpg"
          ]
        },
        {
          "name": "vivo Y66",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y66 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y66i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y66i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y67",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y67.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow), Funtouch 2.6",
            "weight": "154 g (5.43 oz)",
            "dimensions": "153.8 x 75.5 x 7.6 mm (6.06 x 2.97 x 0.30 in)",
            "colors": "Gold, Pink Gold"
          },
          "variants": [
            {
              "name": "vivo Y67 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y67.jpg"
          ]
        },
        {
          "name": "vivo Y69",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y69.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.0 (Nougat), Funtouch 3.2",
            "weight": "162.8 g (5.75 oz)",
            "dimensions": "154.6 x 75.5 x 7.7 mm (6.09 x 2.97 x 0.30 in)",
            "colors": "Gold, Matte Black"
          },
          "variants": [
            {
              "name": "vivo Y69 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y69.jpg"
          ]
        },
        {
          "name": "vivo Y6t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y6t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y70",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 10, Funtouch 11",
            "weight": "171 g (6.03 oz)",
            "dimensions": "161 x 74.1 x 7.8 mm (6.34 x 2.92 x 0.31 in)",
            "colors": "Gravity Black, Oxygen Blue"
          },
          "variants": [
            {
              "name": "vivo Y70 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y70s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y70s.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Exynos 880 (8 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162 x 76.6 x 8.5 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "vivo Y70s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y70s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y70s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y70s.jpg"
          ]
        },
        {
          "name": "vivo Y70t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y70t.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Exynos 880 (8 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162 x 76.6 x 8.5 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "vivo Y70t 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y70t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y70t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y70t.jpg"
          ]
        },
        {
          "name": "vivo Y71",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3360 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "155.9 x 75.7 x 7.8 mm (6.14 x 2.98 x 0.31 in)",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "vivo Y71 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y71 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y71 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y71i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3360 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "155.9 x 75.7 x 7.8 mm (6.14 x 2.98 x 0.31 in)",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "vivo Y71i 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y71T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y71t.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "166.3 g or 167.9 g (5.86 oz)",
            "dimensions": "160.6 x 73.9 x 7.7 or 7.8 mm",
            "colors": "Blue, Aurora"
          },
          "variants": [
            {
              "name": "vivo Y71T 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y71T 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y71t.jpg"
          ]
        },
        {
          "name": "vivo Y72",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y72.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y72 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y72.jpg"
          ]
        },
        {
          "name": "vivo Y72 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y72 India Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y72t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y72t.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, OriginOS 11",
            "weight": "199.8 g (7.05 oz)",
            "dimensions": "163.9 x 75.3 x 9.2 mm (6.45 x 2.96 x 0.36 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "vivo Y72t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y72t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y72t.jpg"
          ]
        },
        {
          "name": "vivo Y73",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6785V/CD Helio G95 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "170 g (6.00 oz)",
            "dimensions": "161.2 x 74.4 x 7.4 mm (6.35 x 2.93 x 0.29 in)",
            "colors": "Diamond Flare, Roman Black"
          },
          "variants": [
            {
              "name": "vivo Y73 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y73 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y73 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y73s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y73s.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "171.3 g (6.03 oz)",
            "dimensions": "161 x 74 x 7.8 mm (6.34 x 2.91 x 0.31 in)",
            "colors": "Black, Silver"
          },
          "variants": [
            {
              "name": "vivo Y73s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y73s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y73s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y73s.jpg"
          ]
        },
        {
          "name": "vivo Y73t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y73t.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, OriginOS 11",
            "weight": "201.5 g (7.13 oz)",
            "dimensions": "163.9 x 75.3 x 9.2 mm (6.45 x 2.96 x 0.36 in)",
            "colors": "Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo Y73t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y73t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y73t 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y73t.jpg"
          ]
        },
        {
          "name": "vivo Y74s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 11, OriginOS",
            "weight": "175 g (6.17 oz)",
            "dimensions": "163.8 x 75 x 7.8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Black, Aurora"
          },
          "variants": [
            {
              "name": "vivo Y74s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y75",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y75.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4050 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.9 x 74.3 x 7.4 mm (6.33 x 2.93 x 0.29 in)",
            "colors": "Moonlight Shadow, Dancing Waves"
          },
          "variants": [
            {
              "name": "vivo Y75 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y75.jpg"
          ]
        },
        {
          "name": "vivo Y75 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y75 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y75 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164 x 75.9 x 8.3 mm (6.46 x 2.99 x 0.33 in)",
            "colors": "Glowing Galaxy, Starlight Black"
          },
          "variants": [
            {
              "name": "vivo Y75 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y75s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y75s.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164 x 75.3 x 8.5 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Black, Gradient"
          },
          "variants": [
            {
              "name": "vivo Y75s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y75s 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y75s.jpg"
          ]
        },
        {
          "name": "vivo Y75s 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y75s 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y76s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y76s.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 11, OriginOS",
            "weight": "175 g (6.17 oz)",
            "dimensions": "163.8 x 75 x 7.8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Black, Aurora, Silver"
          },
          "variants": [
            {
              "name": "vivo Y76s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y76s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y76s 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y76s.jpg"
          ]
        },
        {
          "name": "vivo Y77 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y77-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y77 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y77-5g.jpg"
          ]
        },
        {
          "name": "vivo Y77 V2219A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y77 V2219A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y77e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y77e.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "194 g (6.84 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Black, Blue gradient, Pink"
          },
          "variants": [
            {
              "name": "vivo Y77e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y77e.jpg"
          ]
        },
        {
          "name": "vivo Y77e t1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y77e t1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y77t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 7020 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "190 g (6.70 oz)",
            "dimensions": "164.1 x 76.2 x 8 mm (6.46 x 3.00 x 0.31 in)",
            "colors": "Black, Mint, Gold"
          },
          "variants": [
            {
              "name": "vivo Y77t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y77t 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y78",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "177 g (6.24 oz)",
            "dimensions": "164.3 x 74.8 x 7.9 mm (6.47 x 2.94 x 0.31 in)",
            "colors": "Flare Black, Dreamy Gold"
          },
          "variants": [
            {
              "name": "vivo Y78 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78.jpg"
          ]
        },
        {
          "name": "vivo Y78 Global",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78-global.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "177 g (6.24 oz)",
            "dimensions": "164.3 x 74.8 x 7.9 mm (6.47 x 2.94 x 0.31 in)",
            "colors": "Flare Black, Dreamy Gold"
          },
          "variants": [
            {
              "name": "vivo Y78 Global 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78-global.jpg"
          ]
        },
        {
          "name": "vivo Y78 t1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y78 t1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y78+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78-plus.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "177 g (6.24 oz)",
            "dimensions": "164.3 x 74.8 x 7.9 mm (6.47 x 2.94 x 0.31 in)",
            "colors": "Black, Blue, Gold"
          },
          "variants": [
            {
              "name": "vivo Y78+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y78+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y78+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78-plus.jpg"
          ]
        },
        {
          "name": "vivo Y78m",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y78m Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y78m t1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y78m t1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y78t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78t.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Qualcomm SM6450 Snapdragon 6 Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "199.6 g (7.05 oz)",
            "dimensions": "164.6 x 75.8 x 9.1 mm (6.48 x 2.98 x 0.36 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo Y78t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y78t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y78t 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y78t.jpg"
          ]
        },
        {
          "name": "vivo Y79",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y79 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y7s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y7s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y81",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y81.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB"
            ],
            "battery": "3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "146.5 g (5.15 oz)",
            "dimensions": "155.1 x 75 x 7.8 mm (6.11 x 2.95 x 0.31 in)",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "vivo Y81 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y81 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y81.jpg"
          ]
        },
        {
          "name": "vivo Y81i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y81i.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "143 g (5.04 oz)",
            "dimensions": "155.1 x 75 x 7.8 mm (6.11 x 2.95 x 0.31 in)",
            "colors": "Black, Red"
          },
          "variants": [
            {
              "name": "vivo Y81i 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y81i.jpg"
          ]
        },
        {
          "name": "vivo Y81s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y81s Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y83",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y83.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "150 g (5.29 oz)",
            "dimensions": "155.2 x 75.2 x 7.7 mm (6.11 x 2.96 x 0.30 in)",
            "colors": "Black, Aurora White, Red, Gold"
          },
          "variants": [
            {
              "name": "vivo Y83 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y83 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y83.jpg"
          ]
        },
        {
          "name": "vivo Y83 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y83-pro.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "152 g (5.36 oz)",
            "dimensions": "155.2 x 75.2 x 7.7 mm (6.11 x 2.96 x 0.30 in)",
            "colors": "Nebula Purple, Black, Gold"
          },
          "variants": [
            {
              "name": "vivo Y83 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y83-pro.jpg"
          ]
        },
        {
          "name": "vivo Y85",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y85 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y89",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y89.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm MSM8953-Pro Snapdragon 626 (14 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "149.3 g (5.26 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Aurora, Black"
          },
          "variants": [
            {
              "name": "vivo Y89 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y89.jpg"
          ]
        },
        {
          "name": "vivo Y90",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y90.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "163.5 g (5.78 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Black, Gold"
          },
          "variants": [
            {
              "name": "vivo Y90 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y90 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y90.jpg"
          ]
        },
        {
          "name": "vivo Y91",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y91.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "163.5 g (5.78 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Starry Black, Ocean Blue"
          },
          "variants": [
            {
              "name": "vivo Y91 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y91.jpg"
          ]
        },
        {
          "name": "vivo Y91 Helio P22",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y91 Helio P22 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y91C",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y91C Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y91D",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y91D Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y91i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "163.5 g (5.78 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Starry Black, Ocean Blue, Red"
          },
          "variants": [
            {
              "name": "vivo Y91i 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y91i 1820",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y91i 1820 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y927",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y927 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y93",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y93.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "163.5 g (5.78 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Starry Black, Nebula Purple"
          },
          "variants": [
            {
              "name": "vivo Y93 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y93 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y93 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y93.jpg"
          ]
        },
        {
          "name": "vivo Y93 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y93 Lite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y937",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Y937 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Y93s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "165 g (5.82 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Zixia Red, Aurora Red, Blue"
          },
          "variants": [
            {
              "name": "vivo Y93s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y95",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM439 Snapdragon 439 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4030 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "163.5 g (5.75 oz)",
            "dimensions": "155.1 x 75.1 x 8.3 mm (6.11 x 2.96 x 0.33 in)",
            "colors": "Starry Night, Nebula Purple, Aurora Red"
          },
          "variants": [
            {
              "name": "vivo Y95 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y95 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Y95 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Y97",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y97.jpg",
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "3315 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4.5",
            "weight": "162 g (5.71 oz)",
            "dimensions": "155.9 x 75.6 x 8.1 mm (6.14 x 2.98 x 0.32 in)",
            "colors": "Starry Night, Nebula, Pink"
          },
          "variants": [
            {
              "name": "vivo Y97 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y97.jpg"
          ]
        },
        {
          "name": "vivo Y9s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-y9s.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "186.7 g (6.60 oz)",
            "dimensions": "159.3 x 75.2 x 8.7 mm (6.27 x 2.96 x 0.34 in)",
            "colors": "Fancy Sky, Knight Black, Nebula Blue"
          },
          "variants": [
            {
              "name": "vivo Y9s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-y9s.jpg"
          ]
        }
      ]
    },
    {
      "name": "vivo T",
      "models": [
        {
          "name": "vivo T1 4G V2153",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T1 4G V2153 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T1 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-5g.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Starlight Black, Rainbow Fantasy"
          },
          "variants": [
            {
              "name": "vivo T1 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1-5g.jpg"
          ]
        },
        {
          "name": "vivo T1 5G Indonesia",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Starlight Black, Rainbow Fantasy"
          },
          "variants": [
            {
              "name": "vivo T1 5G Indonesia 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Indonesia 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Indonesia 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Indonesia 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo T1 5G Malaysia",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Starlight Black, Rainbow Fantasy"
          },
          "variants": [
            {
              "name": "vivo T1 5G Malaysia 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Malaysia 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Malaysia 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1 5G Malaysia 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo T1 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T1 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T1 V2141",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T1 V2141 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T1x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1x.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.3 x 76.1 x 8 mm (6.47 x 3.00 x 0.31 in)",
            "colors": "Gravity Black, Space Blue"
          },
          "variants": [
            {
              "name": "vivo T1x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T1x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t1x.jpg"
          ]
        },
        {
          "name": "vivo T1x 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T1x 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T1x V2143",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T1x V2143 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "186 g (6.56 oz)",
            "dimensions": "162.5 x 75.8 x 7.7 mm (6.40 x 2.98 x 0.30 in)",
            "colors": "Black Onyx, Sea Green, Lavender Glow"
          },
          "variants": [
            {
              "name": "vivo T2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2.jpg"
          ]
        },
        {
          "name": "vivo T2 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T2 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T2 Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T2 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T2x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2x.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "184 g (6.49 oz)",
            "dimensions": "164.1 x 75.6 x 8.2 mm (6.46 x 2.98 x 0.32 in)",
            "colors": "Glimmer Black, Aurora Gold, Marine Blue"
          },
          "variants": [
            {
              "name": "vivo T2x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T2x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T2x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t2x.jpg"
          ]
        },
        {
          "name": "vivo T2x 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T2x 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T3 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T3 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T3 Ultra",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-ultra.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9200+ (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 5500 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.2 x 74.9 x 7.6 mm (6.46 x 2.95 x 0.30 in)",
            "colors": "Lunar Gray, Frost Green"
          },
          "variants": [
            {
              "name": "vivo T3 Ultra 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T3 Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo T3 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t3-ultra.jpg"
          ]
        },
        {
          "name": "vivo T3x 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T3x 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T4 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T4 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T4 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t4-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t4-pro.jpg"
          ]
        },
        {
          "name": "vivo T4 Ultra",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4 Ultra Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T4R",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4R Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo T4x 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t4x-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T4x 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t4x-5g.jpg"
          ]
        },
        {
          "name": "vivo T5 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-t5-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T5 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-t5-pro.jpg"
          ]
        },
        {
          "name": "vivo T5x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo T5x Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        }
      ]
    },
    {
      "name": "vivo S",
      "models": [
        {
          "name": "vivo S1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Mediatek MT6768 Helio P65 (12 nm)",
            "ram": "6GB, 4GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "179 g (6.31 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Diamond Black, Skyline Blue, Cosmic Green"
          },
          "variants": [
            {
              "name": "vivo S1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S1 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S1 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1.jpg"
          ]
        },
        {
          "name": "vivo S1 Prime",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "190.2 g (6.70 oz)",
            "dimensions": "159.3 x 75.2 x 8.7 mm (6.27 x 2.96 x 0.34 in)",
            "colors": "Nebula Blue, Jade Black"
          },
          "variants": [
            {
              "name": "vivo S1 Prime 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo S1 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1-pro.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "186.7 g (6.60 oz)",
            "dimensions": "159.3 x 75.2 x 8.7 mm (6.27 x 2.96 x 0.34 in)",
            "colors": "Knight Black, Fancy Sky"
          },
          "variants": [
            {
              "name": "vivo S1 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1-pro.jpg"
          ]
        },
        {
          "name": "vivo S1 Pro V1945",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S1 Pro V1945 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S1 V1907",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1-v1907.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S1 V1907 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s1-v1907.jpg"
          ]
        },
        {
          "name": "vivo S10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4050 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "173 g (6.10 oz)",
            "dimensions": "158.2 x 73.7 x 7.3 mm (6.23 x 2.90 x 0.29 in)",
            "colors": "Black, White, Gradient Blue, Yellow"
          },
          "variants": [
            {
              "name": "vivo S10 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S10 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S10 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo S10 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s10-pro.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4050 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "173 g (6.10 oz)",
            "dimensions": "158.2 x 73.7 x 7.3 mm (6.23 x 2.90 x 0.29 in)",
            "colors": "Black, White, Gradient Blue, Yellow"
          },
          "variants": [
            {
              "name": "vivo S10 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S10 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s10-pro.jpg"
          ]
        },
        {
          "name": "vivo S10e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s10e.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.9 x 74.3 x 7.5 mm (6.33 x 2.93 x 0.30 in)",
            "colors": "Black, White, Aurora"
          },
          "variants": [
            {
              "name": "vivo S10e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S10e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s10e.jpg"
          ]
        },
        {
          "name": "vivo S11",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S11 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S12",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s12.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4200 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "179 g or 181 g (6.31 oz)",
            "dimensions": "157.2 x 72.4 x 7.4 or 7.6 mm",
            "colors": "Black, Blue, Yellow"
          },
          "variants": [
            {
              "name": "vivo S12 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S12 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S12 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s12.jpg"
          ]
        },
        {
          "name": "vivo S12 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S12 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S12 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s12-pro.jpg",
          "specs": {
            "display": "6.56 inches, 103.9 cm, 1080 x 2400 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "171 g (6.03 oz)",
            "dimensions": "159.5 x 73.3 x 7.4 mm (6.28 x 2.89 x 0.29 in)",
            "colors": "Black, Blue, Yellow"
          },
          "variants": [
            {
              "name": "vivo S12 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S12 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S12 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s12-pro.jpg"
          ]
        },
        {
          "name": "vivo S15",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "197 g (6.95 oz)",
            "dimensions": "161.1 x 74.3 x 8 mm (6.34 x 2.93 x 0.31 in)",
            "colors": "Blue, Black, Yellow"
          },
          "variants": [
            {
              "name": "vivo S15 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S15 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S15 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15.jpg"
          ]
        },
        {
          "name": "vivo S15 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15-pro.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Mediatek Dimensity 8100 (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "188 g (6.63 oz)",
            "dimensions": "158.9 x 73.5 x 8.6 mm (6.26 x 2.89 x 0.34 in)",
            "colors": "Blue, Black"
          },
          "variants": [
            {
              "name": "vivo S15 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S15 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15-pro.jpg"
          ]
        },
        {
          "name": "vivo S15e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15e.jpg",
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Exynos 1080 (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "190 g (6.70 oz)",
            "dimensions": "159.7 x 73.6 x 8.5 mm (6.29 x 2.90 x 0.33 in)",
            "colors": "Black, Blue, Silver/Pink"
          },
          "variants": [
            {
              "name": "vivo S15e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S15e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S15e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s15e.jpg"
          ]
        },
        {
          "name": "vivo S16",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.1 x 74.8 x 7.4 mm (6.46 x 2.94 x 0.29 in)",
            "colors": "Black, Mint, Gold"
          },
          "variants": [
            {
              "name": "vivo S16 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16.jpg"
          ]
        },
        {
          "name": "vivo S16 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.1 x 74.8 x 7.4 mm (6.46 x 2.94 x 0.29 in)",
            "colors": "Black, Mint"
          },
          "variants": [
            {
              "name": "vivo S16 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16-pro.jpg"
          ]
        },
        {
          "name": "vivo S16e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16e.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Exynos 1080 (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "187.7 g or 189 g (6.63 oz)",
            "dimensions": "162.5 x 75.8 x 7.7 mm or 7.8 mm",
            "colors": "Black, Green, Purple"
          },
          "variants": [
            {
              "name": "vivo S16e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S16e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s16e.jpg"
          ]
        },
        {
          "name": "vivo S17",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM7325-AE Snapdragon 778G+ 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164.2 x 74.4 x 7.5 mm (6.46 x 2.93 x 0.30 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "vivo S17 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17.jpg"
          ]
        },
        {
          "name": "vivo S17 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.5 cm, 1260 x 2800 pixels, 20:9 ratio (~452 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "188 g (6.63 oz)",
            "dimensions": "164.2 x 74.4 x 7.5 mm (6.46 x 2.93 x 0.30 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo S17 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17-pro.jpg"
          ]
        },
        {
          "name": "vivo S17e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17e.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 7200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "178 g (6.28 oz)",
            "dimensions": "164.2 x 74.9 x 7.4 mm (6.46 x 2.95 x 0.29 in)",
            "colors": "Black, Mint"
          },
          "variants": [
            {
              "name": "vivo S17e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S17e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17e.jpg"
          ]
        },
        {
          "name": "vivo S17t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17t.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 8050 (6 nm)",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": "4600 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "186 g (6.56 oz)",
            "dimensions": "164.2 x 74.4 x 7.5 mm (6.46 x 2.93 x 0.30 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "vivo S17t 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s17t.jpg"
          ]
        },
        {
          "name": "vivo S18",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB, 12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "185.8 g (6.56 oz)",
            "dimensions": "164.4 x 75.1 x 7.5 mm (6.47 x 2.96 x 0.30 in)",
            "colors": "Black, Blue/Green, Silver, Purple"
          },
          "variants": [
            {
              "name": "vivo S18 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18.jpg"
          ]
        },
        {
          "name": "vivo S18 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9200+ (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "188 g (6.63 oz)",
            "dimensions": "164.4 x 75.1 x 7.5 mm (6.47 x 2.96 x 0.30 in)",
            "colors": "Black, Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo S18 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18-pro.jpg"
          ]
        },
        {
          "name": "vivo S18e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18e.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 7200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4800 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.4 x 74.9 x 7.7 mm (6.39 x 2.95 x 0.30 in)",
            "colors": "Black, Purple, Silver"
          },
          "variants": [
            {
              "name": "vivo S18e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18e 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S18e 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s18e.jpg"
          ]
        },
        {
          "name": "vivo S20",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s20.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1260 x 2800 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB, 12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6500 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "186 g (6.56 oz)",
            "dimensions": "160.4 x 74.2 x 7.2 mm (6.31 x 2.92 x 0.28 in)",
            "colors": "Gray, Gold, White"
          },
          "variants": [
            {
              "name": "vivo S20 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S20 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S20 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S20 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s20.jpg"
          ]
        },
        {
          "name": "vivo S20 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1260 x 2800 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Mediatek Dimensity 9300+ (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 5500 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "194 g (6.84 oz)",
            "dimensions": "160.6 x 75 x 7.5 mm (6.32 x 2.95 x 0.30 in)",
            "colors": "Gray, Purple, Gold"
          },
          "variants": [
            {
              "name": "vivo S20 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S20 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S20 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo S3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S30",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s30.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S30 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s30.jpg"
          ]
        },
        {
          "name": "vivo S30 Pro mini",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s30-pro-mini.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S30 Pro mini Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s30-pro-mini.jpg"
          ]
        },
        {
          "name": "vivo S5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s5.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4100 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "188 g (6.63 oz)",
            "dimensions": "157.9 x 73.9 x 8.6 mm (6.22 x 2.91 x 0.34 in)",
            "colors": "Icelandic Blue, Phantom Blue, Star Black"
          },
          "variants": [
            {
              "name": "vivo S5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s5.jpg"
          ]
        },
        {
          "name": "vivo S50",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s50.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S50 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s50.jpg"
          ]
        },
        {
          "name": "vivo S50 Pro mini",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s50-pro-mini.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S50 Pro mini Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s50-pro-mini.jpg"
          ]
        },
        {
          "name": "vivo S50t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S50t Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S6",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S6 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S6 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s6-5g.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Exynos 980 (8 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "181 g (6.38 oz)",
            "dimensions": "161.2 x 74.7 x 8.7 mm (6.35 x 2.94 x 0.34 in)",
            "colors": "Black, Blue, White/Blue, Streamer Secret"
          },
          "variants": [
            {
              "name": "vivo S6 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S6 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S6 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s6-5g.jpg"
          ]
        },
        {
          "name": "vivo S7",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s7.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "170 g (6.00 oz)",
            "dimensions": "158.8 x 74.2 x 7.4 mm (6.25 x 2.92 x 0.29 in)",
            "colors": "Black, White, Gradient Blue"
          },
          "variants": [
            {
              "name": "vivo S7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s7.jpg"
          ]
        },
        {
          "name": "vivo S7 V2020A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S7 V2020A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S7e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 10, Funtouch 10.5",
            "weight": "171.7 g (6.07 oz)",
            "dimensions": "161 x 74 x 7.7 mm (6.34 x 2.91 x 0.30 in)",
            "colors": "Phantom Blue, Mirror Black, Silver Moon"
          },
          "variants": [
            {
              "name": "vivo S7e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S7e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo S7t",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 820 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "169 g (5.96 oz)",
            "dimensions": "158.8 x 74.2 x 7.4 mm (6.25 x 2.92 x 0.29 in)",
            "colors": "Black, White, Gradient Blue"
          },
          "variants": [
            {
              "name": "vivo S7t 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S7t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo S9",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s9.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 1100 (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "173 g (6.10 oz)",
            "dimensions": "158.4 x 73.9 x 7.4 mm (6.24 x 2.91 x 0.29 in)",
            "colors": "Black, White, Gradient Blue"
          },
          "variants": [
            {
              "name": "vivo S9 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S9 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s9.jpg"
          ]
        },
        {
          "name": "vivo S9 2021",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo S9 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo S9e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-s9e.jpg",
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 820 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4100 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "168.8 / 171.5 g (5.96 oz)",
            "dimensions": "159.3 x 74.3 x 7.3 mm / 7.4 mm",
            "colors": "Black, White, Starry Blue"
          },
          "variants": [
            {
              "name": "vivo S9e 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo S9e 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-s9e.jpg"
          ]
        }
      ]
    },
    {
      "name": "vivo Z",
      "models": [
        {
          "name": "vivo Z1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "149.3 g (5.26 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Sapphire blue, Enamel blue, Hyun red, Enamel black, Black gold limited edition, Aurora Special Edition"
          },
          "variants": [
            {
              "name": "vivo Z1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Z1 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm MSM8953-Pro Snapdragon 626 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "149 g (5.26 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Black, Red, Aurora"
          },
          "variants": [
            {
              "name": "vivo Z1 Lite 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Z1 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, Funtouch 10",
            "weight": "201 g (7.09 oz)",
            "dimensions": "162.4 x 77.3 x 8.9 mm (6.39 x 3.04 x 0.35 in)",
            "colors": "Sonic Blue, Sonic Black, Mirror Black"
          },
          "variants": [
            {
              "name": "vivo Z1 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo Z1 Youth",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Z1 Youth Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Z10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Z10 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Z1i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z1i.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM636 Snapdragon 636 (14 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 8.1 (Oreo), Funtouch 4",
            "weight": "149.3 g (5.26 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Black, Red"
          },
          "variants": [
            {
              "name": "vivo Z1i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z1i.jpg"
          ]
        },
        {
          "name": "vivo Z1x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z1x.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "6GB, 4GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, Funtouch 10",
            "weight": "189.6 g (6.70 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Fusion Blue, Phantom Purple"
          },
          "variants": [
            {
              "name": "vivo Z1x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z1x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z1x.jpg"
          ]
        },
        {
          "name": "vivo Z3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3.jpg",
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SDM670 Snapdragon 670 (10 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "3315 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "164 g (5.78 oz)",
            "dimensions": "156 x 75.6 x 8.1 mm (6.14 x 2.98 x 0.32 in)",
            "colors": "Starry Night, Aurora Blue, Dream Powder"
          },
          "variants": [
            {
              "name": "vivo Z3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3.jpg"
          ]
        },
        {
          "name": "vivo Z3i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3i.jpg",
          "specs": {
            "display": "6.3 inches, 99.1 cm, 1080 x 2280 pixels, 19:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "3315 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "164 g (5.78 oz)",
            "dimensions": "156 x 75.6 x 8.1 mm (6.14 x 2.98 x 0.32 in)",
            "colors": "Aurora blue, Millenium Pink"
          },
          "variants": [
            {
              "name": "vivo Z3i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3i.jpg"
          ]
        },
        {
          "name": "vivo Z3i Standard Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Z3i Standard Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Z3x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3x.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 1080 x 2280 pixels, 19:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3260 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "150 g (5.29 oz)",
            "dimensions": "154.8 x 75 x 7.9 mm (6.09 x 2.95 x 0.31 in)",
            "colors": "Black, Red, Aurora"
          },
          "variants": [
            {
              "name": "vivo Z3x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z3x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z3x.jpg"
          ]
        },
        {
          "name": "vivo Z5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "187 g (6.60 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Aurora illusion, Bamboo Forest Night, Holographic illusion"
          },
          "variants": [
            {
              "name": "vivo Z5 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z5 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5.jpg"
          ]
        },
        {
          "name": "vivo Z5i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5i.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.2 x 76.5 x 8.9 mm (6.39 x 3.01 x 0.35 in)",
            "colors": "Glazed Black, Jade Blue"
          },
          "variants": [
            {
              "name": "vivo Z5i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5i.jpg"
          ]
        },
        {
          "name": "vivo Z5x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5x.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM712 Snapdragon 712 (10 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 9.0 (Pie), upgradable to Android 10, Funtouch 10",
            "weight": "204.1 g (7.20 oz)",
            "dimensions": "162.4 x 77.3 x 8.9 mm (6.39 x 3.04 x 0.35 in)",
            "colors": "Black, Blue, White, Dark Blue"
          },
          "variants": [
            {
              "name": "vivo Z5x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z5x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z5x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5x.jpg"
          ]
        },
        {
          "name": "vivo Z5x 2020",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5x-2020.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Z5x 2020 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z5x-2020.jpg"
          ]
        },
        {
          "name": "vivo Z5x 712",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo Z5x 712 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo Z6 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-z6-5g.jpg",
          "specs": {
            "display": "6.57 inches, 104.2 cm, 1080 x 2400 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, Funtouch 10.0",
            "weight": "201 g (7.09 oz)",
            "dimensions": "164 x 75.1 x 9.2 mm (6.46 x 2.96 x 0.36 in)",
            "colors": "Ice Age, Interstellar Silver, Aurora Black"
          },
          "variants": [
            {
              "name": "vivo Z6 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo Z6 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-z6-5g.jpg"
          ]
        }
      ]
    },
    {
      "name": "vivo U",
      "models": [
        {
          "name": "vivo U1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo U1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo U10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.35 inches, 99.6 cm, 720 x 1544 pixels, 19.3:9 ratio (~268 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "3GB, 4GB, 6GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "190.5 g (6.70 oz)",
            "dimensions": "159.4 x 76.8 x 8.9 mm (6.28 x 3.02 x 0.35 in)",
            "colors": "Thunder Black, Electric Blue, Black, Blue, Red"
          },
          "variants": [
            {
              "name": "vivo U10 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U10 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U10 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U10 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo U20",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-u20.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.2",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.2 x 76.5 x 8.9 mm (6.39 x 3.01 x 0.35 in)",
            "colors": "Racing Black, Blaze Blue"
          },
          "variants": [
            {
              "name": "vivo U20 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U20 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U20 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-u20.jpg"
          ]
        },
        {
          "name": "vivo U3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-u3.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.0",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.2 x 76.5 x 8.9 mm (6.39 x 3.01 x 0.35 in)",
            "colors": "Black, Blue, Green"
          },
          "variants": [
            {
              "name": "vivo U3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo U3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-u3.jpg"
          ]
        },
        {
          "name": "vivo U3x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo U3x Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        }
      ]
    },
    {
      "name": "vivo G",
      "models": [
        {
          "name": "vivo G1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo G1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo G2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-g2.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.7 x 75.4 x 8.1 mm (6.44 x 2.97 x 0.32 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "vivo G2 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo G2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo G2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo G2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-g2.jpg"
          ]
        },
        {
          "name": "vivo G3 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo G3 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        }
      ]
    },
    {
      "name": "vivo E",
      "models": [
        {
          "name": "vivo E1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo E1 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo E3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo E3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo E5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo E5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        }
      ]
    },
    {
      "name": "vivo iQOO",
      "models": [
        {
          "name": "vivo iQOO 12",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 144Hz, HDR10+, 1400 nits (HBM), 3000 nits (peak), 6.78 inches, 1260 x 2800",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 2 major Android upgrades, Funtouch 15 (International), OriginOS 4 (China)",
            "weight": "198.5",
            "dimensions": "163.2 x 75.9 x 8.1 mm or 8.4 mm",
            "colors": "Black, Red, White (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 12 16GB 1000GB",
              "ram": "16GB",
              "storage": "1000GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo.jpg",
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "196 g (6.91 oz)",
            "dimensions": "157.7 x 75.2 x 8.5 mm (6.21 x 2.96 x 0.33 in)",
            "colors": "Optic Blue, Lava Orange, Samurai Black, Feather White"
          },
          "variants": [
            {
              "name": "vivo iQOO 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo.jpg"
          ]
        },
        {
          "name": "vivo iQOO 10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "206 g (7.27 oz)",
            "dimensions": "164.5 x 77.1 x 8.4 mm (6.48 x 3.04 x 0.33 in)",
            "colors": "White (BMW M branding), Orange, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO 10 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 10 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, Funtouch 12 (International), OriginOS Ocean (China)",
            "weight": "215.4 g or 216.2 g (7.58 oz)",
            "dimensions": "164.9 x 75.5 x 9.5 mm (6.49 x 2.97 x 0.37 in)",
            "colors": "Black, White (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 10 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 11 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 11 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo iQOO 11 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo iQOO 11 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 11 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 13, Funtouch 13 (International), OriginOS 3 (China)",
            "weight": "210.5 g or 213 g (7.44 oz)",
            "dimensions": "164.8 x 75.3 x 8.9 mm or 9.1 mm",
            "colors": "Black, Green, White (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 11 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 11 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 11 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 11S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "4700 mAh",
            "os": "Android 13, OriginOS 3 (China)",
            "weight": "207 g or 210 g (7.30 oz)",
            "dimensions": "164.9 x 77.1 x 8.4 mm or 8.7 mm",
            "colors": "Black, Sky Blue, Legendary White (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 11S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 11S 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 11S 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 11S 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 11S Legendary",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 11S Legendary Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 12 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, up to 2 major Android upgrades, Funtouch 14 (International), OriginOS 4 (China)",
            "weight": "205 g or 210 g (7.23 oz)",
            "dimensions": "164.6 x 75.4 x 8.6 mm or 8.8 mm",
            "colors": "Black, Red, White (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 12 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 12 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 12 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 13",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-13.jpg",
          "specs": {
            "display": "6.82 inches, 113.0 cm, 1440 x 3168 pixels (~510 ppi density)",
            "processor": "Qualcomm SM8750-AB Snapdragon 8 Elite (3 nm)",
            "ram": "12GB/16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 6150 mAh (Global)",
            "os": "Android 15, up to 4 major Android upgrades, Funtouch 15 (International), OriginOS 5 (China)",
            "weight": "207 g or 213 g (7.30 oz)",
            "dimensions": "163.4 x 76.7 x 8 mm (6.43 x 3.02 x 0.31 in)",
            "colors": "Alpha (Black), Nardo Gray (Silver), White (BMW M branding), Green"
          },
          "variants": [
            {
              "name": "vivo iQOO 13 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 13 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 13 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 13 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 13 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-13.jpg"
          ]
        },
        {
          "name": "vivo iQOO 15",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15.jpg",
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
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 15 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo iQOO 15 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "vivo iQOO 15 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15.jpg"
          ]
        },
        {
          "name": "vivo iQOO 15 Honor of Kings",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 15 Honor of Kings Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 15 Ultra",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15-ultra.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 15 Ultra Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15-ultra.jpg"
          ]
        },
        {
          "name": "vivo iQOO 15R",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15r.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 15R Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-15r.jpg"
          ]
        },
        {
          "name": "vivo iQOO 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 3 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-3-5g.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 10, iQOO UI 1.0",
            "weight": "214.5 g (7.58 oz)",
            "dimensions": "158.5 x 74.9 x 9.2 mm (6.24 x 2.95 x 0.36 in)",
            "colors": "Volcano Orange, Tornado Black, Quantum Silver"
          },
          "variants": [
            {
              "name": "vivo iQOO 3 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 3 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 3 5G 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 3 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 3 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-3-5g.jpg"
          ]
        },
        {
          "name": "vivo iQOO 3 5G Transformer",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 3 5G Transformer Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 5 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-5-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 5 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-5-pro.jpg"
          ]
        },
        {
          "name": "vivo iQOO 7",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.3 x 76.4 x 8.4 mm (6.43 x 3.01 x 0.33 in)",
            "colors": "Solid Ice, Storm Black, Monster Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO 7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 7 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-7.jpg"
          ]
        },
        {
          "name": "vivo iQOO 7 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 11, Funtouch 11.1",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.3 x 76.4 x 8.4 mm (6.43 x 3.01 x 0.33 in)",
            "colors": "Solid Ice, Storm Black, Monster Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO 7 India 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 7 India 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 7 India 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 7 Legend",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 7 Legend Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 7 Legendary Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 7 Legendary Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 7 Monster Orange",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO 7 Monster Orange Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO 8",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-8.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4350 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "200 g (7.05 oz)",
            "dimensions": "159 x 75.1 x 8.6 mm (6.26 x 2.96 x 0.34 in)",
            "colors": "White, Orange, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO 8 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 8 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-8.jpg"
          ]
        },
        {
          "name": "vivo iQOO 8 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "205 g (7.23 oz)",
            "dimensions": "165 x 75.2 x 9.2 mm (6.50 x 2.96 x 0.36 in)",
            "colors": "White (BMW M branding), Black, Pilot Edition"
          },
          "variants": [
            {
              "name": "vivo iQOO 8 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 9",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9.jpg",
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4350 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "200 g / 202 g (7.05 oz)",
            "dimensions": "159.1 x 75.1 x 8.6 or 8.7 mm",
            "colors": "Legend, Alpha, Phoenix Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO 9 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9.jpg"
          ]
        },
        {
          "name": "vivo iQOO 9 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.56 inches, 104.6 cm, 1080 x 2376 pixels (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888+ 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4350 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "200 g / 202 g (7.05 oz)",
            "dimensions": "159.1 x 75.1 x 8.6 or 8.7 mm",
            "colors": "Legend, Alpha, Phoenix Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO 9 India 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9 India 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO 9 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1440 x 3200 pixels, 20:9 ratio (~518 ppi density)",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, Funtouch 12 (International), OriginOS Ocean (China)",
            "weight": "204 g or 210 g (7.20 oz)",
            "dimensions": "164.8 x 75.2 x 8.8 mm",
            "colors": "Legend (White w/ BMW M branding), Dark Cruise, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO 9 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-pro.jpg"
          ]
        },
        {
          "name": "vivo iQOO 9 SE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-se.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "199 g (7.02 oz)",
            "dimensions": "163.2 x 76.4 x 8.4 mm (6.43 x 3.01 x 0.33 in)",
            "colors": "Space Fusion, Sunset Sierra"
          },
          "variants": [
            {
              "name": "vivo iQOO 9 SE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9 SE 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-9-se.jpg"
          ]
        },
        {
          "name": "vivo iQOO 9T",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, upgradable to Android 14, Funtouch 14",
            "weight": "206 g (7.27 oz)",
            "dimensions": "165 x 77 x 8 mm (6.50 x 3.03 x 0.31 in)",
            "colors": "Alpha, Legend (BMW M branding)"
          },
          "variants": [
            {
              "name": "vivo iQOO 9T 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO 9T 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Monster",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Monster Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO Neo",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "198.5 g (7.02 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Black, Purple"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 8GB 64GB",
              "ram": "8GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo 855",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo-855.jpg",
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "198.5 g (7.02 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Purple, Aurora White, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo 855 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 855 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 855 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 855 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo-855.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo 855 Racing Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.38 inches, 99.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~404 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9",
            "weight": "198.5 g (7.02 oz)",
            "dimensions": "159.5 x 75.2 x 8.1 mm (6.28 x 2.96 x 0.32 in)",
            "colors": "Iceland Aurora, Carbon Black, Light Mint"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo 855 Racing Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo 855 Racing Edition 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo10",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 6100 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "199 g or 206 g (7.05 oz)",
            "dimensions": "162.9 x 75.4 x 8 mm (6.41 x 2.97 x 0.31 in)",
            "colors": "Black, White, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo10 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo10 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "Si/C Li-Ion 6100 mAh",
            "os": "Android 15, OriginOS 5",
            "weight": "199 g or 206 g (7.05 oz)",
            "dimensions": "162.9 x 75.4 x 8 mm (6.41 x 2.97 x 0.31 in)",
            "colors": "Black, White, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo10 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo10 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo10 Pro+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Neo10 Pro+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO Neo3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo3.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Neo3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo3.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo5.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 11, OriginOS 1.0 for iQOO",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.3 x 76.4 x 8.4 mm (6.43 x 3.01 x 0.33 in)",
            "colors": "Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo5.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo5 Lite",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.57 inches, 104.0 cm, 1080 x 2408 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 11, OriginOS 1.0",
            "weight": "198.3 g (6.98 oz)",
            "dimensions": "164 x 75.5 x 8.9 mm (6.46 x 2.97 x 0.35 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo5 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 Lite 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo5 SE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164.7 x 76.7 x 8.5 mm (6.48 x 3.02 x 0.33 in)",
            "colors": "Black, White, Aurora"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo5 SE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 SE 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5 SE 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo5S",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.2 x 76.4 x 8.4 mm (6.43 x 3.01 x 0.33 in)",
            "colors": "Orange, Blue, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo5S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo5S 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo6",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "190 g (6.70 oz)",
            "dimensions": "163 x 76.2 x 8.5 mm (6.42 x 3.00 x 0.33 in)",
            "colors": "Dark Nova, Cyber Rage"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo6 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo6 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo6 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "190 g (6.70 oz)",
            "dimensions": "163 x 76.2 x 8.5 mm (6.42 x 3.00 x 0.33 in)",
            "colors": "Dark Nova, Cyber Rage"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo6 India 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo6 India 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo6 SE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6-se.jpg",
          "specs": {
            "display": "6.62 inches, 105.8 cm, 1080 x 2400 pixels, 20:9 ratio (~398 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "190 g (6.70 oz)",
            "dimensions": "163 x 76.2 x 8.5 mm (6.42 x 3.00 x 0.33 in)",
            "colors": "Blue, Orange, Gradient"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo6 SE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo6 SE 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo6 SE 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo6 SE 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo6-se.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo7",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo7.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164.8 x 76.9 x 8.6 mm (6.49 x 3.03 x 0.34 in)",
            "colors": "Interstellar Black, Frost Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo7.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo7 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164.8 x 76.9 x 8.6 mm (6.49 x 3.03 x 0.34 in)",
            "colors": "Interstellar Black, Frost Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo7 India 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 India 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo7 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "197 g or 202 g (6.95 oz)",
            "dimensions": "164.8 x 76.9 x 8.5 mm or 8.9 mm",
            "colors": "Fearless Flame, Dark Storm"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo7 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo7 Racing Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB, 12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "197 g / 202 g (6.95 oz)",
            "dimensions": "164.8 x 76.9 x 8.5 mm or 8.9 mm",
            "colors": "Orange, Black, Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo7 Racing Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 Racing Edition 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 Racing Edition 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 Racing Edition 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo7 SE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo7-se.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1080 x 2400 pixels, 20:9 ratio (~388 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB, 12GB, 16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS 3",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164.8 x 76.9 x 8.6 mm (6.49 x 3.03 x 0.34 in)",
            "colors": "Blue, Gray, Gradient"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo7 SE 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 SE 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 SE 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 SE 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo7 SE 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo7-se.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo8",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo8.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13 or OriginOS 3 (China)",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.7 x 77 x 8.5 mm (6.48 x 3.03 x 0.33 in)",
            "colors": "Red, Mint, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo8 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo8 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo8 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo8 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-neo8.jpg"
          ]
        },
        {
          "name": "vivo iQOO Neo8 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9200+ (4 nm)",
            "ram": "16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, Funtouch 13 or OriginOS 3 (China)",
            "weight": "192 g (6.77 oz)",
            "dimensions": "164.7 x 77 x 8.5 mm (6.48 x 3.03 x 0.33 in)",
            "colors": "Red, Mint, Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo8 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo8 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo8 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo9",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5160 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "190 g or 196 g (6.70 oz)",
            "dimensions": "163.5 x 75.7 x 8 mm or 8.3 mm",
            "colors": "Black, Blue, Red"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo9 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo9 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo9 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Neo9 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5160 mAh",
            "os": "Android 14, Funtouch 14",
            "weight": "190 g or 196 g (6.70 oz)",
            "dimensions": "163.5 x 75.7 x 8.0 mm or 8.3 mm",
            "colors": "Fiery Red, Conqueror Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Neo9 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo9 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Neo9 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-pro.jpg",
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "215 g (7.58 oz)",
            "dimensions": "158.8 x 75.7 x 9.3 mm (6.25 x 2.98 x 0.37 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Pro 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-pro.jpg"
          ]
        },
        {
          "name": "vivo iQOO Pro 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-pro-5g.jpg",
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh, non-removable",
            "os": "Android 9.0 (Pie), Funtouch 9.1",
            "weight": "217 g (7.65 oz)",
            "dimensions": "158.8 x 75.7 x 9.3 mm (6.25 x 2.98 x 0.37 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Pro 5G 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-pro-5g.jpg"
          ]
        },
        {
          "name": "vivo iQOO U1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u1.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, iQOO UI 1.0",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162.1 x 76.6 x 8.5 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "vivo iQOO U1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U1 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u1.jpg"
          ]
        },
        {
          "name": "vivo iQOO U1x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u1x.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, IQOO UI 1.0",
            "weight": "192.3 g (6.77 oz)",
            "dimensions": "164.4 x 76.3 x 8.4 mm (6.47 x 3.00 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO U1x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U1x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U1x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u1x.jpg"
          ]
        },
        {
          "name": "vivo iQOO U3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u3.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 800U (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, IQOO UI 1.5",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164.2 x 75.4 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "White, Gray, Aurora"
          },
          "variants": [
            {
              "name": "vivo iQOO U3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u3.jpg"
          ]
        },
        {
          "name": "vivo iQOO U3x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "6GB, 4GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0 for iQOO",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164.2 x 75.4 x 8.4 mm (6.46 x 2.97 x 0.33 in)",
            "colors": "Gray, Aurora"
          },
          "variants": [
            {
              "name": "vivo iQOO U3x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U3x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U3x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U3x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO U3x 4G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO U3x 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO U5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "185 g (6.53 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "White, Gray, Aurora"
          },
          "variants": [
            {
              "name": "vivo iQOO U5 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5.jpg"
          ]
        },
        {
          "name": "vivo iQOO U5e",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5e.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, OriginOS Ocean",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo iQOO U5e 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U5e 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5e.jpg"
          ]
        },
        {
          "name": "vivo iQOO U5x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5x.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "179 g (6.31 oz)",
            "dimensions": "164 x 75.2 x 8.3 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Dark Blue, Light Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO U5x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO U5x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-u5x.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.57 inches, 104.0 cm, 1080 x 2408 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Mediatek Dimensity 1000+ (7 nm)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, iQOO UI 1.0",
            "weight": "195 g (6.88 oz)",
            "dimensions": "164 x 75.6 x 8.9 mm (6.46 x 2.98 x 0.35 in)",
            "colors": "Galaxy Silver, Space blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Z1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Z1 Nautical King Limited Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Z1 Nautical King Limited Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO Z1x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.57 inches, 105.0 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, iQOO UI 1.0",
            "weight": "199.5 g (7.05 oz)",
            "dimensions": "164.2 x 76.5 x 9.1 mm (6.46 x 3.01 x 0.36 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "vivo iQOO Z1x 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z1x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Z3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SDM768 Snapdragon 768G 5G (7 nm)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4400 mAh",
            "os": "Android 11, Funtouch 11.1 (International), OriginOS 1.0 for iQOO (China)",
            "weight": "185.5 g (6.56 oz)",
            "dimensions": "164 x 75.3 x 8.5 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Ace Black, Cyber Blue, Silver"
          },
          "variants": [
            {
              "name": "vivo iQOO Z3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z3 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z3 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Z5",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, Funtouch 12 (International), OriginOS for iQOO 1.0 (China)",
            "weight": "193 g (6.81 oz)",
            "dimensions": "164.7 x 76.7 x 8.5 mm (6.48 x 3.02 x 0.33 in)",
            "colors": "Arctic Dawn, Mystic Space, Cyber Grid, Aurora"
          },
          "variants": [
            {
              "name": "vivo iQOO Z5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z5x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5x.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, OriginOS 1.0 for iQOO",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164 x 75.3 x 8.5 mm (6.46 x 2.96 x 0.33 in)",
            "colors": "Black, Orange, Silver"
          },
          "variants": [
            {
              "name": "vivo iQOO Z5x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z5x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z5x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z5x.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z6",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "185 g (6.53 oz)",
            "dimensions": "164 x 75.8 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Dynamo Black, Chromatic Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Z6 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z6 44W",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-44w.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "182 g (6.42 oz)",
            "dimensions": "160.8 x 73.8 x 8.4 mm (6.33 x 2.91 x 0.33 in)",
            "colors": "Lumina Blue, Raven Black"
          },
          "variants": [
            {
              "name": "vivo iQOO Z6 44W 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 44W 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 44W 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-44w.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z6 Lite 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-lite-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Z6 Lite 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-lite-5g.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z6 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-pro.jpg",
          "specs": {
            "display": "6.44 inches, 100.0 cm, 1080 x 2404 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 12, Funtouch 12",
            "weight": "180 g (6.35 oz)",
            "dimensions": "159.7 x 73.6 x 8.5 mm (6.29 x 2.90 x 0.33 in)",
            "colors": "Phantom Dusk, Legion Sky"
          },
          "variants": [
            {
              "name": "vivo iQOO Z6 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6-pro.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z6 V2220A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Z6 V2220A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO Z6x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6x.jpg",
          "specs": {
            "display": "6.58 inches, 104.3 cm, 1080 x 2408 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, OriginOS Ocean",
            "weight": "204 g (7.20 oz)",
            "dimensions": "163.9 x 75.3 x 9.3 mm (6.45 x 2.96 x 0.37 in)",
            "colors": "Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO Z6x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z6x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z6x.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z7",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7-1.jpg",
          "specs": {
            "display": "6.38 inches, 98.3 cm, 1080 x 2400 pixels, 20:9 ratio (~413 ppi density)",
            "processor": "Mediatek Dimensity 920 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 13, upgradable to Android 14, Funtouch 14",
            "weight": "173 g (6.10 oz)",
            "dimensions": "158.9 x 73.5 x 7.8 mm (6.26 x 2.89 x 0.31 in)",
            "colors": "Norway Blue, Pacific Night"
          },
          "variants": [
            {
              "name": "vivo iQOO Z7 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7-1.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z7i",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7i.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, OriginOS Ocean",
            "weight": "186 (6.56 oz)",
            "dimensions": "164.1 x 75.6 x 8.2 mm (6.46 x 2.98 x 0.32 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "vivo iQOO Z7i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7i 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7i.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z7s",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.38 inches, 98.3 cm, 1080 x 2400 pixels, 20:9 ratio (~413 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 13, Funtouch 13",
            "weight": "172 g (6.07 oz)",
            "dimensions": "158.9 x 73.5 x 7.8 mm (6.26 x 2.89 x 0.31 in)",
            "colors": "Norway Blue, Pacific Night"
          },
          "variants": [
            {
              "name": "vivo iQOO Z7s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs"
          ]
        },
        {
          "name": "vivo iQOO Z7x",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7x.jpg",
          "specs": {
            "display": "6.64 inches, 106.8 cm, 1080 x 2388 pixels (~395 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB, 8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 13, Funtouch 13 (Global), Origin OS 3 (China)",
            "weight": "205 g (7.23 oz)",
            "dimensions": "164.6 x 75.8 x 9.1 mm (6.48 x 2.98 x 0.36 in)",
            "colors": "Tropical Blue, Metallic Grey, Orange"
          },
          "variants": [
            {
              "name": "vivo iQOO Z7x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z7x 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z7x.jpg"
          ]
        },
        {
          "name": "vivo iQOO Z9 Turbo Long Battery",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "vivo iQOO Z9 Turbo Long Battery Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/"
          ]
        },
        {
          "name": "vivo iQOO Z9 Turbo+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z9-turbo-plus.jpg",
          "specs": {
            "display": "6.78 inches, 111.0 cm, 1260 x 2800 pixels, 20:9 ratio (~453 ppi density)",
            "processor": "Mediatek Dimensity 9300+ (4 nm)",
            "ram": "12GB, 16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 6400 mAh",
            "os": "Android 14, OriginOS 4",
            "weight": "196 g (6.91 oz)",
            "dimensions": "163.7 x 75.9 x 8 mm (6.44 x 2.99 x 0.31 in)",
            "colors": "Black, White, Titanium"
          },
          "variants": [
            {
              "name": "vivo iQOO Z9 Turbo+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z9 Turbo+ 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z9 Turbo+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "vivo iQOO Z9 Turbo+ 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/vivo/",
            "kaggle:gsmarena-derived-vivo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/vivo-iqoo-z9-turbo-plus.jpg"
          ]
        }
      ]
    }
  ]
};
