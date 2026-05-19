/**
 * Enriched Tecno phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/tecno.json.
 */

export type TecnoEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type TecnoEnrichedModelSpecs = {
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

export type TecnoEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: TecnoEnrichedModelSpecs;
  variants: TecnoEnrichedModelVariant[];
  sources?: string[];
};

export type TecnoEnrichedFamily = {
  name: string;
  models: TecnoEnrichedModel[];
};

export const TECNO_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: TecnoEnrichedFamily[];
} = {
  "brandName": "Tecno",
  "logoUrl": "https://logo.clearbit.com/tecno-mobile.com",
  "sortOrder": 12,
  "families": [
    {
      "name": "Phantom",
      "models": [
        {
          "name": "Tecno Phantom V Flip2",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "6.9 inches, 107.6 cm, 1080 x 2640 pixels (~413 ppi density)",
            "processor": "Mediatek Dimensity 8020 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4720 mAh",
            "os": "Android 14, HIOS 14",
            "weight": "196 g (6.91 oz)",
            "dimensions": "Unfolded: 170.8 x 73.4 x 7.6 mm",
            "colors": "Travertine Green, Moondust Grey"
          },
          "variants": [
            {
              "name": "Tecno Phantom V Flip2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Phantom V Fold2",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "7.85 inches, 196.9 cm, 2000 x 2296 pixels (~388 ppi density)",
            "processor": "Mediatek Dimensity 9000+ (4 nm)",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": "5750 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HiOS 14 Fold",
            "weight": "249 g (8.78 oz)",
            "dimensions": "Unfolded: 159 x 140.4 x 6.1 mm",
            "colors": "Karst Green, Rippling Blue"
          },
          "variants": [
            {
              "name": "Tecno Phantom V Fold2 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Phantom V Flip 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-v-flip-5g.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Phantom V Flip 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-v-flip-5g.jpg"
          ]
        },
        {
          "name": "Tecno Phantom V Fold",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-v-fold.jpg",
          "specs": {
            "display": "7.85 inches, 196.9 cm, 2000 x 2296 pixels (~388 ppi density)",
            "processor": "Mediatek Dimensity 9000+ (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HiOS 13 Fold",
            "weight": "299 g (10.55 oz)",
            "dimensions": "Unfolded: 159.4 x 140.4 x 6.9 mm",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Tecno Phantom V Fold 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Phantom V Fold 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-v-fold.jpg"
          ]
        },
        {
          "name": "Tecno Phantom X2",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2.jpg",
          "specs": {
            "display": "6.8 inches, 111.6 cm, 1080 x 2400 pixels, 20:9 ratio (~387 ppi density)",
            "processor": "Mediatek Dimensity 9000 (4 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5160 mAh",
            "os": "Android 12, HIOS 12",
            "weight": "203 g (7.16 oz)",
            "dimensions": "164.6 x 72.7 x 8.9 mm (6.48 x 2.86 x 0.35 in)",
            "colors": "Stardust Gray, Moonlight Silver"
          },
          "variants": [
            {
              "name": "Tecno Phantom X2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2.jpg"
          ]
        },
        {
          "name": "Tecno Phantom X2 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2-pro.jpg",
          "specs": {
            "display": "6.8 inches, 111.6 cm, 1080 x 2400 pixels, 20:9 ratio (~387 ppi density)",
            "processor": "Mediatek Dimensity 9000 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5160 mAh",
            "os": "Android 12, HIOS 12",
            "weight": "201 g (7.09 oz)",
            "dimensions": "164.6 x 72.7 x 9 mm (6.48 x 2.86 x 0.35 in)",
            "colors": "Stardust Gray, Mars Orange"
          },
          "variants": [
            {
              "name": "Tecno Phantom X2 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x2-pro.jpg"
          ]
        },
        {
          "name": "Tecno Phantom X",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x.jpg",
          "specs": {
            "display": "6.7 inches, 110.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~385 ppi density)",
            "processor": "Mediatek MT6785V/CD Helio G95 (12 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "201 g (7.09 oz)",
            "dimensions": "163.5 x 73.8 x 8.7 mm (6.44 x 2.91 x 0.34 in)",
            "colors": "Starry Night Blue, Monet Summer"
          },
          "variants": [
            {
              "name": "Tecno Phantom X 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-x.jpg"
          ]
        },
        {
          "name": "Tecno Phantom 9",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-9.jpg",
          "specs": {
            "display": "6.39 inches, 100.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "164.4 g (5.78 oz)",
            "dimensions": "158.5 x 75.3 x 7.9 mm (6.24 x 2.96 x 0.31 in)",
            "colors": "Lapland Aurora"
          },
          "variants": [
            {
              "name": "Tecno Phantom 9 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-phantom-9.jpg"
          ]
        },
        {
          "name": "Tecno Phantom 8",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1080 x 1920 pixels, 16:9 ratio (~386 ppi density)",
            "processor": "Mediatek MT6757T Helio P25 (16 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "185 g (6.53 oz)",
            "dimensions": "160 x 79.5 x 7.9 mm (6.30 x 3.13 x 0.31 in)",
            "colors": "Galaxy Blue, Champagne Gold, Phantom Black"
          },
          "variants": [
            {
              "name": "Tecno Phantom 8 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Phantom 6",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6755 (28 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "141.8 g (5.01 oz)",
            "dimensions": "151.5 x 75.5 x 6.2 mm (5.96 x 2.97 x 0.24 in)",
            "colors": "Champange Gold, Star Gray"
          },
          "variants": [
            {
              "name": "Tecno Phantom 6 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Phantom 6 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Mediatek MT6797 Helio X20 (20 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 4050 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "196.7 g (6.95 oz)",
            "dimensions": "160.4 x 83.5 x 7.7 mm (6.31 x 3.29 x 0.30 in)",
            "colors": "Champange Gold"
          },
          "variants": [
            {
              "name": "Tecno Phantom 6 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Phantom 5",
          "aliases": [],
          "releaseYear": 2015,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Phantom 5 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Phantom Z",
          "aliases": [],
          "releaseYear": 2014,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Phantom Z Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Phantom Z Mini",
          "aliases": [],
          "releaseYear": 2014,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Phantom Z Mini Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        }
      ]
    },
    {
      "name": "Camon",
      "models": [
        {
          "name": "Tecno Camon 50",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 50 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Camon 50 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-50-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 50 Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-50-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 50 Pro 5G",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 50 Pro 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Camon 50 Ultra",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-50-ultra.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 50 Ultra Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-50-ultra.jpg"
          ]
        },
        {
          "name": "Tecno Camon 40",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G100 Ultimate (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5200 mAh",
            "os": "Android 15, up to 3 major Android upgrades, HIOS 15",
            "weight": "177.2 g (6.24 oz)",
            "dimensions": "164.1 x 74.6 x 7.3 mm (6.46 x 2.94 x 0.29 in)",
            "colors": "Emerald Lake Green, Galaxy Black, Glacier White, Emerald Glow Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 40 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 40 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 40 Premier",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-premier.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1260 x 2800 pixels, 20:9 ratio (~460 ppi density)",
            "processor": "Mediatek Dimensity 8350 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "Si/C Li-Ion 5100 mAh",
            "os": "Android 15, up to 3 major Android upgrades, HIOS 15",
            "weight": "193 g (7.41 oz)",
            "dimensions": "161 x 75 x 7.7 mm (6.34 x 2.95 x 0.30 in)",
            "colors": "Emerald Lake Green, Galaxy Black"
          },
          "variants": [
            {
              "name": "Tecno Camon 40 Premier 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-premier.jpg"
          ]
        },
        {
          "name": "Tecno Camon 40 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-pro-1.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Dimensity 7300 (4 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5200 mAh",
            "os": "Android 15, up to 3 major Android upgrades, HIOS 15",
            "weight": "179 g (6.31 oz)",
            "dimensions": "164.3 x 74.6 x 7.3 mm (6.47 x 2.94 x 0.29 in)",
            "colors": "Emerald Lake Green, Galaxy Black, Glacier White"
          },
          "variants": [
            {
              "name": "Tecno Camon 40 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 40 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-pro-1.jpg"
          ]
        },
        {
          "name": "Tecno Camon 40 Pro 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-pro-5g.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 40 Pro 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-40-pro-5g.jpg"
          ]
        },
        {
          "name": "Tecno Camon 30",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G99 Ultimate",
            "ram": null,
            "storage": [
              "8GB",
              "12GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HIOS 14",
            "weight": "-",
            "dimensions": "165.3 x 75.3 x 7.7 mm (6.51 x 2.96 x 0.30 in)",
            "colors": "Iceland Basaltic Dark, Uyuni Salt White, Sahara Sand Brown"
          },
          "variants": [
            {
              "name": "Tecno Camon 30 8GB",
              "storage": "8GB",
              "sourceBasis": "derived_from_model_specs"
            },
            {
              "name": "Tecno Camon 30 12GB",
              "storage": "12GB",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30.jpg"
          ]
        },
        {
          "name": "Tecno Camon 30 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-5g.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Dimensity 7020 (6 nm)",
            "ram": null,
            "storage": [
              "8GB",
              "12GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HIOS 14",
            "weight": "199 g (7.05 oz)",
            "dimensions": "165.4 x 75.9 x 7.8 mm or 8.0 mm",
            "colors": "Iceland Basaltic Dark, Uyuni Salt White, Emerald Lake Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 30 5G 8GB",
              "storage": "8GB",
              "sourceBasis": "derived_from_model_specs"
            },
            {
              "name": "Tecno Camon 30 5G 12GB",
              "storage": "12GB",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-5g.jpg"
          ]
        },
        {
          "name": "Tecno Camon 30 Loewe",
          "aliases": [],
          "releaseYear": 2024,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 30 Loewe Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Camon 30 Premier 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-premier-5g.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 30 Premier 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30-premier-5g.jpg"
          ]
        },
        {
          "name": "Tecno Camon 30 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 30 Pro 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Camon 30S",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30s.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G100 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HIOS 14",
            "weight": "-",
            "dimensions": "164.5 x 74.6 x 7.6 mm (6.48 x 2.94 x 0.30 in)",
            "colors": "Nebula Violet, Blue, Celestial Black, Dawn Gold"
          },
          "variants": [
            {
              "name": "Tecno Camon 30S 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 30S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 30S 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30s.jpg"
          ]
        },
        {
          "name": "Tecno Camon 30s Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30s-pro.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G100 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, up to 2 major Android upgrades, HIOS 14",
            "weight": "-",
            "dimensions": "164.6 x 74.6 x 7.8 mm (6.48 x 2.94 x 0.31 in)",
            "colors": "Interstellar Grey, Pearl Gold, Shim Silver Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 30s Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-30s-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 20",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "-",
            "dimensions": "163.4 x 76.7 x 7.8 mm (6.43 x 3.02 x 0.31 in)",
            "colors": "Predawn Black, Glacier Glow, Serenity Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 20 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 20 Avocado Art",
          "aliases": [],
          "releaseYear": 2023,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 20 Avocado Art Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Camon 20 Premier 5G",
          "aliases": [],
          "releaseYear": 2023,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 20 Premier 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Camon 20 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "-",
            "dimensions": "163.4 x 76.7 x 7.8 mm (6.43 x 3.02 x 0.31 in)",
            "colors": "Predawn Black, Serenity Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 20 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 20 Pro 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 8050 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "-",
            "dimensions": "162.7 x 75.9 x 7.8 mm (6.41 x 2.99 x 0.31 in)",
            "colors": "Dark Welkin, Serenity Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 20 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 20s Pro 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Mediatek Dimensity 8020 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "193 g (6.81 oz)",
            "dimensions": "162.7 x 75.9 x 7.8 mm (6.41 x 2.99 x 0.31 in)",
            "colors": "Dark Welkin, Serenity Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 20s Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 20s Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 19",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-19.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "198 g (6.98 oz)",
            "dimensions": "166.6 x 74.4 x 8.3 mm (6.56 x 2.93 x 0.33 in)",
            "colors": "Eco Black, Sea Salt White, Digital Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 19 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 19 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-19.jpg"
          ]
        },
        {
          "name": "Tecno Camon 19 Neo",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "168.8 x 76.9 x 8.5 mm (6.65 x 3.03 x 0.33 in)",
            "colors": "Eco Black, Ice Mirror, Dreamland Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 19 Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 19 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "204 g (7.20 oz)",
            "dimensions": "166.8 x 74.6 x 8.6 mm (6.57 x 2.94 x 0.34 in)",
            "colors": "Polar Blue, Eco Black, Mondrian"
          },
          "variants": [
            {
              "name": "Tecno Camon 19 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 19 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 19 Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-19-pro-5g.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "166.7 x 74.3 x 8.6 mm (6.56 x 2.93 x 0.34 in)",
            "colors": "Eco Black, Cedar Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 19 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 19 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-19-pro-5g.jpg"
          ]
        },
        {
          "name": "Tecno Camon 19 Pro Art Edition",
          "aliases": [],
          "releaseYear": 2022,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 19 Pro Art Edition Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/"
          ]
        },
        {
          "name": "Tecno Camon 17",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.5 x 76.5 x 9 mm (6.48 x 3.01 x 0.35 in)",
            "colors": "Frost Sliver, Deep Sea, Tranquil Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 17 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 17 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17.jpg"
          ]
        },
        {
          "name": "Tecno Camon 17 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17-pro.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6785V/CD Helio G95 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "201 g (7.09 oz)",
            "dimensions": "168.9 x 77 x 9 mm (6.65 x 3.03 x 0.35 in)",
            "colors": "California Silver, Malibu Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 17 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 17 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 17P",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17p.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "168.7 x 76.4 x 8.8 mm (6.64 x 3.01 x 0.35 in)",
            "colors": "Frost Sliver, Magnet Black, Spruce Green"
          },
          "variants": [
            {
              "name": "Tecno Camon 17P 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-17p.jpg"
          ]
        },
        {
          "name": "Tecno Camon 18",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769H Helio G88 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 8.0",
            "weight": "-",
            "dimensions": "168.9 x 76.7 x 8.8 mm (6.65 x 3.02 x 0.35 in)",
            "colors": "Dusk Gray, Ceramic White, Iris purple"
          },
          "variants": [
            {
              "name": "Tecno Camon 18 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 18 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18.jpg"
          ]
        },
        {
          "name": "Tecno Camon 18 Premier",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18-premier.jpg",
          "specs": {
            "display": "6.7 inches, 108.4 cm, 1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4750 mAh",
            "os": "Android 11, HIOS 8.0",
            "weight": "200.6 g (7.09 oz)",
            "dimensions": "163.8 x 75.9 x 8.2 mm (6.45 x 2.99 x 0.32 in)",
            "colors": "Polar night, Vast sky"
          },
          "variants": [
            {
              "name": "Tecno Camon 18 Premier 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18-premier.jpg"
          ]
        },
        {
          "name": "Tecno Camon 18P",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18p.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6781 Helio G96 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 8.0",
            "weight": "-",
            "dimensions": "168.9 x 76.7 x 8.8 mm (6.65 x 3.02 x 0.35 in)",
            "colors": "Dusk Gray, Ceramic White, Iris purple"
          },
          "variants": [
            {
              "name": "Tecno Camon 18P 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18p.jpg"
          ]
        },
        {
          "name": "Tecno Camon 18T",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18t.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 8.0",
            "weight": "-",
            "dimensions": "168.9 x 76.7 x 8.9 mm (6.65 x 3.02 x 0.35 in)",
            "colors": "Iris purple, Dusk Gray, Ceramic White"
          },
          "variants": [
            {
              "name": "Tecno Camon 18T 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-18t.jpg"
          ]
        },
        {
          "name": "Tecno Camon 15",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "196 g (6.91 oz)",
            "dimensions": "164.1 x 76.4 x 8.8 mm (6.46 x 3.01 x 0.35 in)",
            "colors": "Shoal Gold, Fascinating Purple, Jade"
          },
          "variants": [
            {
              "name": "Tecno Camon 15 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15.jpg"
          ]
        },
        {
          "name": "Tecno Camon 15 Air",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "-",
            "dimensions": "164.5 x 76.5 x 9 mm (6.48 x 3.01 x 0.35 in)",
            "colors": "Malachite Blue, Ice lake Blue, Misty Gray"
          },
          "variants": [
            {
              "name": "Tecno Camon 15 Air 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 15 Premier",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15-premier.jpg",
          "specs": {
            "display": "6.6 inches, 106.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~390 ppi density)",
            "processor": "Mediatek MT6765V/W Helio P35 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "203 g (7.16 oz)",
            "dimensions": "163.3 x 77.7 x 9.1 mm (6.43 x 3.06 x 0.36 in)",
            "colors": "Ice Jadeite, Opal White"
          },
          "variants": [
            {
              "name": "Tecno Camon 15 Premier 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15-premier.jpg"
          ]
        },
        {
          "name": "Tecno Camon 15 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15-pro.jpg",
          "specs": {
            "display": "6.6 inches, 106.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~390 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "203 g (7.16 oz)",
            "dimensions": "163.3 x 77.7 x 9.1 mm (6.43 x 3.06 x 0.36 in)",
            "colors": "Ice Jadeite, Opal White"
          },
          "variants": [
            {
              "name": "Tecno Camon 15 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-15-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 16",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769V/CB Helio G70 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "207 g (7.30 oz)",
            "dimensions": "170.9 x 77.2 x 9.2 mm (6.73 x 3.04 x 0.36 in)",
            "colors": "Cloud White, Purist Blue, Misty Grey"
          },
          "variants": [
            {
              "name": "Tecno Camon 16 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 16 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 16 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16.jpg"
          ]
        },
        {
          "name": "Tecno Camon 16 Premier",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16-premier.jpg",
          "specs": {
            "display": "6.85 inches, 111.4 cm, 1080 x 2460 pixels (~392 ppi density)",
            "processor": "Mediatek MT6785 Helio G90T (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "210 g (7.41 oz)",
            "dimensions": "170.6 x 77.2 x 9.1 mm (6.72 x 3.04 x 0.36 in)",
            "colors": "Glacial Silver"
          },
          "variants": [
            {
              "name": "Tecno Camon 16 Premier 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16-premier.jpg"
          ]
        },
        {
          "name": "Tecno Camon 16 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16-pro.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769V/CB Helio G70 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 7.0",
            "weight": "207 g (7.30 oz)",
            "dimensions": "170.9 x 77.2 x 9.2 mm (6.73 x 3.04 x 0.36 in)",
            "colors": "Onyx Black, Ice Crystal Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 16 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 16 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-16-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 16 S",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.2",
            "weight": "-",
            "dimensions": "164.5 x 76.5 x 9 mm (6.48 x 3.01 x 0.35 in)",
            "colors": "Ice Jadeite, Misty Grey, Blue Hawaii"
          },
          "variants": [
            {
              "name": "Tecno Camon 16 S 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 16 SE",
          "aliases": [],
          "releaseYear": 2020,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon 16 SE Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon 12",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "170.7 g (6.03 oz)",
            "dimensions": "166 x 75.8 x 8.2 mm (6.54 x 2.98 x 0.32 in)",
            "colors": "Dawn Blue, Dark Jade, Sky Cyan"
          },
          "variants": [
            {
              "name": "Tecno Camon 12 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12.jpg"
          ]
        },
        {
          "name": "Tecno Camon 12 Air",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12-air.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 720 x 1600 pixels, 20:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "181 g (6.38 oz)",
            "dimensions": "164.2 x 76.1 x 8.2 mm (6.46 x 3.00 x 0.32 in)",
            "colors": "Ocean Blue, Alpenglow Gold, Stellar Purple"
          },
          "variants": [
            {
              "name": "Tecno Camon 12 Air 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 12 Air 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12-air.jpg"
          ]
        },
        {
          "name": "Tecno Camon 12 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12-pro.jpg",
          "specs": {
            "display": "6.35 inches, 97.4 cm, 720 x 1600 pixels, 20:9 ratio (~276 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "161 g (5.68 oz)",
            "dimensions": "158.6 x 75.5 x 7.8 mm (6.24 x 2.97 x 0.31 in)",
            "colors": "Dawn Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon 12 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-12-pro.jpg"
          ]
        },
        {
          "name": "Tecno Camon 11",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 96.7 cm, 720 x 1500 pixels (~268 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3750 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "156.5 x 76 x 5.6 mm (6.16 x 2.99 x 0.22 in)",
            "colors": "Bordeaux Red, Aqua Blue, Midnight Black"
          },
          "variants": [
            {
              "name": "Tecno Camon 11 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon 11 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon 11 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 96.7 cm, 720 x 1500 pixels (~268 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3750 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "155 g (5.47 oz)",
            "dimensions": "156.5 x 76 x 5.6 mm (6.16 x 2.99 x 0.22 in)",
            "colors": "Nebula black"
          },
          "variants": [
            {
              "name": "Tecno Camon 11 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon I",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I 2",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I 2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I 2x",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I 2x Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Air",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Air Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Air 2+",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Air 2+ Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Click",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Click Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Click 2",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Click 2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Sky",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Sky Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Sky 2",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Sky 2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Sky 3",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Sky 3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon I Twin",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon I Twin Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Camon i4",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-i4.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "3500 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "156.9 x 75.8 x 8 mm (6.18 x 2.98 x 0.31 in)",
            "colors": "Aqua Blue, Champagne Gold, Midnight Black, Nebula Black"
          },
          "variants": [
            {
              "name": "Tecno Camon i4 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon i4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon i4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-camon-i4.jpg"
          ]
        },
        {
          "name": "Tecno Camon iAce",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon iAce Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Camon iAce 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 78.1 cm, 720 x 1440 pixels, 18:9 ratio (~293 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "3050 mAh, non-removable",
            "os": "Android 8.1 (Oreo), HIOS 4.1",
            "weight": "150 g (5.29 oz)",
            "dimensions": "148.3 x 71.9 x 8.5 mm (5.84 x 2.83 x 0.33 in)",
            "colors": "Champagne Gold, Midnight Black, City Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon iAce 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon iAce 2x",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 78.1 cm, 720 x 1440 pixels, 18:9 ratio (~293 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "3050 mAh, non-removable",
            "os": "Android 8.1 (Oreo), HIOS 4.1",
            "weight": "150 g (5.29 oz)",
            "dimensions": "148.3 x 71.9 x 8.5 mm (5.84 x 2.83 x 0.33 in)",
            "colors": "Champagne Gold, Midnight Black, Nebula Black"
          },
          "variants": [
            {
              "name": "Tecno Camon iAce 2x 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon C7",
          "aliases": [],
          "releaseYear": 2017,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon C7 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Camon CX",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6750T (28 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "152.8 x 75.8 x 5.6 mm (6.02 x 2.98 x 0.22 in)",
            "colors": "Grey, Rose Golden, Golden, Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon CX 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon CX 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon CX Air",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Octa-core 1.3 GHz",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "153 x 75.4 x 6.6 mm (6.02 x 2.97 x 0.26 in)",
            "colors": "Champagne Gold, Sky Grey, Elegant Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon CX Air 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon C8",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon C8 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Camon C9",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon C9 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Camon C5",
          "aliases": [],
          "releaseYear": 2015,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Camon C5 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Camon CM",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "5.7 inches, 83.8 cm, 720 x 1440 pixels, 18:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6737H",
            "ram": "2GB, 3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "152.2 x 71.7 x 5.6 mm (5.99 x 2.82 x 0.22 in)",
            "colors": "Champagne Gold, Midnight Black, City Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon CM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon CM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon X",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6763T Helio P23 (16 nm)",
            "ram": "3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3750 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "149 g (5.26 oz)",
            "dimensions": "158.6 x 75.8 x 5.2 mm (6.24 x 2.98 x 0.20 in)",
            "colors": "Champagne Gold, Midnight Black, City Blue"
          },
          "variants": [
            {
              "name": "Tecno Camon X 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Camon X 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Camon X Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6763T Helio P23 (16 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3750 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "148 g (5.22 oz)",
            "dimensions": "158 x 75.2 x 5.2 mm (6.22 x 2.96 x 0.20 in)",
            "colors": "Midnight Black, Bordeaux Red"
          },
          "variants": [
            {
              "name": "Tecno Camon X Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        }
      ]
    },
    {
      "name": "Pova",
      "models": [
        {
          "name": "Tecno Pova Curve 2 5G",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova Curve 2 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 7",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova 7 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 7 5G",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova 7 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 7 Neo",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova 7 Neo Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 7 Pro 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB",
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
              "name": "Tecno Pova 7 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Tecno Pova 7 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 7 Ultra 5G",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova 7 Ultra 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova Slim 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB",
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
              "name": "Tecno Pova Slim 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pova 6",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Helio G99 Ultimate (6 nm)",
            "ram": "8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 14, HIOS 14",
            "weight": "195 g (6.88 oz)",
            "dimensions": "166.2 x 76.8 x 7.9 mm (6.54 x 3.02 x 0.31 in)",
            "colors": "Interstellar Blue, Comet Green, Meteorite Grey"
          },
          "variants": [
            {
              "name": "Tecno Pova 6 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 6 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6.jpg"
          ]
        },
        {
          "name": "Tecno Pova 6 Neo",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6-neo.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Helio G99 Ultimate (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 14, HIOS 14",
            "weight": "-",
            "dimensions": "168.6 x 76.6 x 9.2 mm (6.64 x 3.02 x 0.36 in)",
            "colors": "Starry Silver, Speed Black, Comet Green"
          },
          "variants": [
            {
              "name": "Tecno Pova 6 Neo 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 6 Neo 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6-neo.jpg"
          ]
        },
        {
          "name": "Tecno Pova 6 Neo 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6-neo-5g.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, HIOS 14.5",
            "weight": "192.3 (6.77 oz)",
            "dimensions": "165.4 x 76.8 x 7.8 mm (6.51 x 3.02 x 0.31 in)",
            "colors": "Azure Sky, Midnight Shadow, Aurora Cloud"
          },
          "variants": [
            {
              "name": "Tecno Pova 6 Neo 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 6 Neo 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-6-neo-5g.jpg"
          ]
        },
        {
          "name": "Tecno Pova 6 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED, 120Hz, 1300 nits (peak), 6.78 inches, 1080 x 2436",
            "processor": "Mediatek Dimensity 6080 (6 nm)",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "6000",
            "os": "Android 14, HIOS 14",
            "weight": "198.0",
            "dimensions": "165.5 x 76.1 x 7.9 mm (6.52 x 3.00 x 0.31 in)",
            "colors": "Comet Green, Meteorite Grey"
          },
          "variants": [
            {
              "name": "Tecno Pova 6 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pova 5",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "219.4 g (7.76 oz)",
            "dimensions": "168.6 x 76.6 x 9 mm (6.64 x 3.02 x 0.35 in)",
            "colors": "Mecha Black, Amber Gold, Hurricane Blue, Free Fire Edition"
          },
          "variants": [
            {
              "name": "Tecno Pova 5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5.jpg"
          ]
        },
        {
          "name": "Tecno Pova 5 Free Fire",
          "aliases": [],
          "releaseYear": 2023,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pova 5 Free Fire Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Pova 5 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5-pro.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Dimensity 6080 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, upgradable to Android 14, HIOS 14",
            "weight": "212 g (7.48 oz)",
            "dimensions": "168.5 x 76.5 x 9 mm (6.63 x 3.01 x 0.35 in)",
            "colors": "Dark Illusion, Silver Fantasy, Free Fire Edition"
          },
          "variants": [
            {
              "name": "Tecno Pova 5 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 5 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5-pro.jpg"
          ]
        },
        {
          "name": "Tecno Pova 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5g.jpg",
          "specs": {
            "display": "6.9 inches, 113.1 cm, 1080 x 2460 pixels (~389 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, HIOS 8.0",
            "weight": "-",
            "dimensions": "172.8 x 78.2 x 9.1 mm (6.80 x 3.08 x 0.36 in)",
            "colors": "Aether Black"
          },
          "variants": [
            {
              "name": "Tecno Pova 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-5g.jpg"
          ]
        },
        {
          "name": "Tecno Pova 4",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.82 inches, 112.3 cm, 720 x 1600 pixels, 20:9 ratio (~257 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 12, HIOS 12",
            "weight": "214 g (7.55 oz)",
            "dimensions": "170.6 x 77.5 x 8.7 mm (6.72 x 3.05 x 0.34 in)",
            "colors": "Cryolite Blue, Uranolith Grey"
          },
          "variants": [
            {
              "name": "Tecno Pova 4 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pova 4 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.66 inches, 105.3 cm, 1080 x 2460 pixels (~403 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 12, HIOS",
            "weight": "-",
            "dimensions": "164.8 x 77 x 9.2 mm (6.49 x 3.03 x 0.36 in)",
            "colors": "Fluorite Blue"
          },
          "variants": [
            {
              "name": "Tecno Pova 4 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pova Neo 2",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.82 inches, 110.5 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "170.9 x 77.8 x 9.6 mm (6.73 x 3.06 x 0.38 in)",
            "colors": "Uranolite Gray, Virtual Blue, Orange Magma"
          },
          "variants": [
            {
              "name": "Tecno Pova Neo 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova Neo 2 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova Neo 2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pova 2",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-2.jpg",
          "specs": {
            "display": "6.9 inches, 113.1 cm, 1080 x 2460 pixels (~389 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "173.3 x 78.8 x 9.6 mm (6.82 x 3.10 x 0.38 in)",
            "colors": "Polar Silver, Power Blue, Dazzle Black"
          },
          "variants": [
            {
              "name": "Tecno Pova 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 2 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-2.jpg"
          ]
        },
        {
          "name": "Tecno Pova",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10, HIOS 7.0",
            "weight": "-",
            "dimensions": "171.2 x 77.6 x 9.4 mm (6.74 x 3.06 x 0.37 in)",
            "colors": "Magic Blue, Speed Purple, Dazzle Black"
          },
          "variants": [
            {
              "name": "Tecno Pova 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova.jpg"
          ]
        },
        {
          "name": "Tecno Pova 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.9 inches, 113.1 cm, 1080 x 2460 pixels (~389 ppi density)",
            "processor": "Mediatek MT6769H Helio G88 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 11, HIOS",
            "weight": "230 g (8.11 oz)",
            "dimensions": "173.1 x 78.5 x 9.4 mm (6.81 x 3.09 x 0.37 in)",
            "colors": "Electric Blue, Tech Silver, Eco Black"
          },
          "variants": [
            {
              "name": "Tecno Pova 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pova Curve 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-curve-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB",
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
              "name": "Tecno Pova Curve 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Tecno Pova Curve 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-curve-5g.jpg"
          ]
        },
        {
          "name": "Tecno Pova Neo",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6762G Helio G25 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "171.4 x 77.3 x 9.1 mm (6.75 x 3.04 x 0.36 in)",
            "colors": "Obsidian, Geek blue, Powehi"
          },
          "variants": [
            {
              "name": "Tecno Pova Neo 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo.jpg"
          ]
        },
        {
          "name": "Tecno Pova Neo 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo-3.jpg",
          "specs": {
            "display": "6.82 inches, 110.5 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 13, HIOS",
            "weight": "-",
            "dimensions": "170.7 x 77.6 x 9.3 mm (6.72 x 3.06 x 0.37 in)",
            "colors": "Amber Gold, Mecha Black, Hurricane Blue"
          },
          "variants": [
            {
              "name": "Tecno Pova Neo 3 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pova Neo 3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo-3.jpg"
          ]
        },
        {
          "name": "Tecno Pova Neo 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo-5g.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "170.8 x 77.9 x 9.5 mm (6.72 x 3.07 x 0.37 in)",
            "colors": "Sprint Blue, Sapphire Black"
          },
          "variants": [
            {
              "name": "Tecno Pova Neo 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pova-neo-5g.jpg"
          ]
        }
      ]
    },
    {
      "name": "Spark",
      "models": [
        {
          "name": "Tecno Spark 50",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 50 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 50 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "Tecno Spark 50 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark Go 3",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Go 3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 40",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
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
              "name": "Tecno Spark 40 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Tecno Spark 40 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Tecno Spark 40 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Tecno Spark 40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 40 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-40-5g.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 40 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-40-5g.jpg"
          ]
        },
        {
          "name": "Tecno Spark 40 Pro",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 40 Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 40 Pro+",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 40 Pro+ Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 40C",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-40c.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 40C Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-40c.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 1S",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Mediatek Helio G50",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14 (Go edition), HIOS 14",
            "weight": "-",
            "dimensions": "165.6 x 77 x 8.4 mm (6.52 x 3.03 x 0.33 in)",
            "colors": "Startrail Black, Glittery White"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 1S 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark Go 2",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark Go 2020",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2020.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761D Helio A20 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HIOS 6.2",
            "weight": "-",
            "dimensions": "165.6 x 76.3 x 9.1 mm (6.52 x 3.00 x 0.36 in)",
            "colors": "Ice Jadeite, Aqua Blue, Sky Black"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2020 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2020.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 2021",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2021.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Quad-core 1.8 GHz",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HiOS 6.2",
            "weight": "193 g (6.81 oz)",
            "dimensions": "165.6 x 76.3 x 9.1 mm (6.52 x 3.00 x 0.36 in)",
            "colors": "Maldives Blue, Horizon Orange, Galaxy Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2021 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2021.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 2022",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2022.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Quad-core",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), HiOS 7.6",
            "weight": "199 g (7.02 oz)",
            "dimensions": "164.5 x 76 x 9 mm (6.48 x 2.99 x 0.35 in)",
            "colors": "Turquoise Cyan, Iris Purple, Ice Silver, Atlantic Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2022 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2022.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 2023",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2023.jpg",
          "specs": {
            "display": "IPS LCD, 6.6 inches, 720 x 1600",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000",
            "os": "Android 12, HIOS 12",
            "weight": null,
            "dimensions": "163.9 x 75.5 x 8.9 mm (6.45 x 2.97 x 0.35 in)",
            "colors": "Endless Black, Nebula Purple, Uyuni Blue, Skin Orange"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2023 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2023.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 2024",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2024.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 6.6 inches, 720 x 1612",
            "processor": "Unisoc T606 (12 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 13 (Go edition), HIOS 13",
            "weight": null,
            "dimensions": "163.7 x 75.6 x 8.6 mm (6.44 x 2.98 x 0.34 in)",
            "colors": "Mystery White, Alpenglow Gold, Magic Skin, Gravity Black"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 2024 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-2024.jpg"
          ]
        },
        {
          "name": "Tecno Spark Slim",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-slim.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Slim Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-slim.jpg"
          ]
        },
        {
          "name": "Tecno Spark 20",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20.jpg",
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HIOS 13",
            "weight": "-",
            "dimensions": "163.7 x 75.6 x 8.5 mm (6.44 x 2.98 x 0.33 in)",
            "colors": "Gravity Black, Cyber White, Neon Gold, Magic Skin 2.0 (Blue)"
          },
          "variants": [
            {
              "name": "Tecno Spark 20 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20.jpg"
          ]
        },
        {
          "name": "Tecno Spark 20 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Helio G99 (6 nm)",
            "ram": "4GB, 8GB, 12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13",
            "weight": "-",
            "dimensions": "168.6 x 76.6 x 8.4 mm (6.64 x 3.02 x 0.33 in)",
            "colors": "Moonlit Black, Frosty Ivory, Sunset Blush, Magic Skin 2.0 Green"
          },
          "variants": [
            {
              "name": "Tecno Spark 20 Pro 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro.jpg"
          ]
        },
        {
          "name": "Tecno Spark 20 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro-5g.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Dimensity 6080 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14",
            "weight": "200 g or 201.5 g (7.05 oz)",
            "dimensions": "168.5 x 76.2 x 8.3 mm or 8.5 mm",
            "colors": "Startrail Black, Glossy White, Neon Green"
          },
          "variants": [
            {
              "name": "Tecno Spark 20 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro-5g.jpg"
          ]
        },
        {
          "name": "Tecno Spark 20 Pro+",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro-plus.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G99 Ultimate",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14",
            "weight": "179 g (6.31 oz)",
            "dimensions": "164.7 x 75 x 7.6 mm (6.48 x 2.95 x 0.30 in)",
            "colors": "Temporal Orbits, Lunar Frost, Radiant Starstream, Magic Skin 2.0 Green"
          },
          "variants": [
            {
              "name": "Tecno Spark 20 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20-pro-plus.jpg"
          ]
        },
        {
          "name": "Tecno Spark 20C",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20c.jpg",
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Mediatek",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13",
            "weight": "-",
            "dimensions": "163.7 x 75.6 x 8.6 mm (6.44 x 2.98 x 0.34 in)",
            "colors": "Mystery White, Alpenglow Gold, Magic Skin, Gravity Black"
          },
          "variants": [
            {
              "name": "Tecno Spark 20C 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20C 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 20C 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-20c.jpg"
          ]
        },
        {
          "name": "Tecno Spark 30",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30.jpg",
          "specs": {
            "display": "6.78 inches, 109.2 cm, 1080 x 2460 pixels (~396 ppi density)",
            "processor": "Mediatek Helio G91 (12 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, HIOS 14",
            "weight": "-",
            "dimensions": "168 x 76.4 x 7.7 mm or 7.9 mm",
            "colors": "Stellar Shadow, Astral Ice, Magic Skin 3.0, Bumblebee Edition"
          },
          "variants": [
            {
              "name": "Tecno Spark 30 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30.jpg"
          ]
        },
        {
          "name": "Tecno Spark 30 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30-5g.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, HIOS 14.5",
            "weight": "-",
            "dimensions": "165.4 x 76.8 x 7.8 mm (6.51 x 3.02 x 0.31 in)",
            "colors": "Azure Sky, Midnight Shadow, Aurora Cloud"
          },
          "variants": [
            {
              "name": "Tecno Spark 30 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30-5g.jpg"
          ]
        },
        {
          "name": "Tecno Spark 30 Limited Edition",
          "aliases": [],
          "releaseYear": 2024,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 30 Limited Edition Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 30 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30-pro.jpg",
          "specs": {
            "display": "6.78 inches, 109.9 cm, 1080 x 2436 pixels (~393 ppi density)",
            "processor": "Mediatek Helio G100 (6 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, HIOS 14",
            "weight": "-",
            "dimensions": "166.6 x 77 x 7.4 mm (6.56 x 3.03 x 0.29 in)",
            "colors": "Obsidian Edge, Arctic Glow, Magic Skin 3.0, Optimus Prime Edition"
          },
          "variants": [
            {
              "name": "Tecno Spark 30 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30-pro.jpg"
          ]
        },
        {
          "name": "Tecno Spark 30 Pro Limited Edition",
          "aliases": [],
          "releaseYear": 2024,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 30 Pro Limited Edition Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Spark 30C",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30c.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Mediatek Helio G81",
            "ram": "4GB, 6GB, 8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14",
            "weight": "-",
            "dimensions": "-",
            "colors": "Orbit Black, Orbit White, Magic Skin 3.0"
          },
          "variants": [
            {
              "name": "Tecno Spark 30C 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30C 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30C 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30C 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30c.jpg"
          ]
        },
        {
          "name": "Tecno Spark 30C 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30c-5g.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14",
            "weight": "-",
            "dimensions": "165 x 77 x 8 mm (6.50 x 3.03 x 0.31 in)",
            "colors": "Aurora Cloud, Azure Sky, Midnight Shadow"
          },
          "variants": [
            {
              "name": "Tecno Spark 30C 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30C 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 30C 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-30c-5g.jpg"
          ]
        },
        {
          "name": "Tecno Spark 10",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6765 Helio G37 (12 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13, HIOS 12",
            "weight": "-",
            "dimensions": "163.9 x 75.4 x 8.4 mm (6.45 x 2.97 x 0.33 in)",
            "colors": "Black, Blue, White, Skin Orange"
          },
          "variants": [
            {
              "name": "Tecno Spark 10 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 10 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 10 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 90Hz, 6.6 inches, 720 x 1612",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 13, HIOS 12.6",
            "weight": null,
            "dimensions": "164.4 x 75.5 x 8.4 mm (6.47 x 2.97 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "Tecno Spark 10 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 10 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD, 90Hz, 6.8 inches, 1080 x 2460",
            "processor": "Mediatek MT6769H Helio G88 (12 nm)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, HIOS 12.6",
            "weight": "208.0",
            "dimensions": "168.4 x 76.2 x 8.4 mm (6.63 x 3.00 x 0.33 in)",
            "colors": "Starry Black, Pearl White"
          },
          "variants": [
            {
              "name": "Tecno Spark 10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 10 Pro Magic Magenta",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB",
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
              "name": "Tecno Spark 10 Pro Magic Magenta 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Spark 10 Pro Moon Explorer",
          "aliases": [],
          "releaseYear": 2023,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 10 Pro Moon Explorer Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Spark 10C",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-10c.jpg",
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Unisoc T606 (12 nm)",
            "ram": "4GB, 8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "163.9 x 75.5 x 8.5 mm (6.45 x 2.97 x 0.33 in)",
            "colors": "Black, Blue, Green"
          },
          "variants": [
            {
              "name": "Tecno Spark 10C 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 10C 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 10C 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-10c.jpg"
          ]
        },
        {
          "name": "Tecno Spark 9",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9-1.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6765V/CB Helio G37 (12 nm)",
            "ram": "3GB, 4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "164.6 x 76 x 9 mm (6.48 x 2.99 x 0.35 in)",
            "colors": "Infinity Black, Sky Mirror"
          },
          "variants": [
            {
              "name": "Tecno Spark 9 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 9 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9-1.jpg"
          ]
        },
        {
          "name": "Tecno Spark 9 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 103.4 cm, 1080 x 2408 pixels, 20:9 ratio (~403 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 8.6",
            "weight": "-",
            "dimensions": "164.2 x 75.6 x 8.4 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Quantum Black, Burano Blue, Glacier White, Hacker Storm, Sport Edition, Kyanite Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark 9 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 9 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 9 Pro Sport",
          "aliases": [],
          "releaseYear": 2022,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 9 Pro Sport Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/"
          ]
        },
        {
          "name": "Tecno Spark 9T",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.9 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.5 x 76.1 x 8.9 mm (6.48 x 3.00 x 0.35 in)",
            "colors": "Turquoise Cyan, Atlantic Blue, Iris Purple, Tahiti Gold"
          },
          "variants": [
            {
              "name": "Tecno Spark 9T 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 9T India",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9t-india.jpg",
          "specs": {
            "display": "6.6 inches, 104.9 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.5 x 76.1 x 8.9 mm (6.48 x 3.00 x 0.35 in)",
            "colors": "Turquoise Cyan, Atlantic Blue, Iris Purple, Tahiti Gold"
          },
          "variants": [
            {
              "name": "Tecno Spark 9T India 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-9t-india.jpg"
          ]
        },
        {
          "name": "Tecno Spark 7",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6762D Helio A25 (12 nm)",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "6000 mAh (Global)",
            "os": "Android 11, HIOS 7.5",
            "weight": "-",
            "dimensions": "164.8 x 76.1 x 9.5 mm (6.49 x 3.00 x 0.37 in)",
            "colors": "Morpheus Blue, Spruce Green, Magnet Black"
          },
          "variants": [
            {
              "name": "Tecno Spark 7 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7.jpg"
          ]
        },
        {
          "name": "Tecno Spark 7 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7-pro.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6769V/CU Helio G80 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.5",
            "weight": "-",
            "dimensions": "164.9 x 76.2 x 8.8 mm (6.49 x 3.00 x 0.35 in)",
            "colors": "Alps Blue, Spruce Green, Neon Dream, Magnet Black"
          },
          "variants": [
            {
              "name": "Tecno Spark 7 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7-pro.jpg"
          ]
        },
        {
          "name": "Tecno Spark 7P",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7p.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769V/CB Helio G70 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.5",
            "weight": "-",
            "dimensions": "171.9 x 77.9 x 9.2 mm (6.77 x 3.07 x 0.36 in)",
            "colors": "Alps Blue, Spruce Green, Magnet Black, Summer Mojito"
          },
          "variants": [
            {
              "name": "Tecno Spark 7P 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7P 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7p.jpg"
          ]
        },
        {
          "name": "Tecno Spark 7T",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7t.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.8 x 76.1 x 9.5 mm (6.49 x 3.00 x 0.37 in)",
            "colors": "Nebula orange, Magnet Black, Jewel Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark 7T 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 7T 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-7t.jpg"
          ]
        },
        {
          "name": "Tecno Spark 8",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB, 2GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), HIOS 7.6",
            "weight": "200 g (7.05 oz)",
            "dimensions": "164.8 x 76.1 x 9.2 mm (6.49 x 3.00 x 0.36 in)",
            "colors": "Turquoise Cyan, Atlantic Blue, Iris Purple"
          },
          "variants": [
            {
              "name": "Tecno Spark 8 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8.jpg"
          ]
        },
        {
          "name": "Tecno Spark 8 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6769Z Helio G85 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "169 x 76.8 x 8.8 mm (6.65 x 3.02 x 0.35 in)",
            "colors": "Komodo Island, Interstellar Black, Winsor Violet"
          },
          "variants": [
            {
              "name": "Tecno Spark 8 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 8C",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8c.jpg",
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Unisoc T606 (12 nm)",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 (Go edition), HiOS 7.6",
            "weight": "-",
            "dimensions": "164.6 x 76 x 9 mm (6.48 x 2.99 x 0.35 in)",
            "colors": "Turquoise, Magnet Black, Iris Purple, Diamond Gray"
          },
          "variants": [
            {
              "name": "Tecno Spark 8C 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8C 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8C 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8c.jpg"
          ]
        },
        {
          "name": "Tecno Spark 8P",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8p.jpg",
          "specs": {
            "display": "6.6 inches, 104.9 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6769V Helio G70 (12 nm) - Version 1",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.5 x 76.1 x 8.9 mm (6.48 x 3.00 x 0.35 in)",
            "colors": "Turquoise Cyan, Atlantic Blue, Iris Purple, Tahiti Gold"
          },
          "variants": [
            {
              "name": "Tecno Spark 8P 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8P 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 8P 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8p.jpg"
          ]
        },
        {
          "name": "Tecno Spark 8T",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8t.jpg",
          "specs": {
            "display": "6.6 inches, 104.9 cm, 1080 x 2408 pixels, 20:9 ratio (~400 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.3 x 75.9 x 8.9 mm (6.47 x 2.99 x 0.35 in)",
            "colors": "Atlantic Blue, Turquoise Cyan, Iris Purple, Cocoa Gold"
          },
          "variants": [
            {
              "name": "Tecno Spark 8T 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-8t.jpg"
          ]
        },
        {
          "name": "Tecno Spark 3 16+1",
          "aliases": [],
          "releaseYear": 2020,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 3 16+1 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Spark 5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-5.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.1",
            "weight": "-",
            "dimensions": "164.7 x 76.3 x 8.8 mm (6.48 x 3.00 x 0.35 in)",
            "colors": "Ice Jadeite, Spark Orange, Vacation Blue, Misty Grey"
          },
          "variants": [
            {
              "name": "Tecno Spark 5 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-5.jpg"
          ]
        },
        {
          "name": "Tecno Spark 5 Air",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-5-air.jpg",
          "specs": {
            "display": "7.0 inches, 116.4 cm, 720 x 1640 pixels (~256 ppi density)",
            "processor": "Mediatek",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HIOS 6.0",
            "weight": "-",
            "dimensions": "174.6 x 79.3 x 9.1 mm (6.87 x 3.12 x 0.36 in)",
            "colors": "Ice Jadeite, Spark Orange, Vacation Blue, Misty Green"
          },
          "variants": [
            {
              "name": "Tecno Spark 5 Air 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-5-air.jpg"
          ]
        },
        {
          "name": "Tecno Spark 5 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6762D Helio A25 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 6.1",
            "weight": "-",
            "dimensions": "164.7 x 76.3 x 8.8 mm (6.48 x 3.00 x 0.35 in)",
            "colors": "Ice Jadeite, Spark Orange, Seabed Blue, Cloud White"
          },
          "variants": [
            {
              "name": "Tecno Spark 5 Pro 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 5 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 5 Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 6",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 720 x 1640 pixels (~263 ppi density)",
            "processor": "Mediatek MT6769V/CB Helio G70 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10, HIOS 7.0",
            "weight": "-",
            "dimensions": "170.8 x 77.3 x 9.2 mm (6.72 x 3.04 x 0.36 in)",
            "colors": "Ocean Blue, Comet Black, Dynamic Orabge, Misty Violet"
          },
          "variants": [
            {
              "name": "Tecno Spark 6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 6 Air",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "7.0 inches, 116.4 cm, 720 x 1640 pixels (~256 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10 (Go edition), HiOS 6.2",
            "weight": "-",
            "dimensions": "174.7 x 79.4 x 9.3 mm (6.88 x 3.13 x 0.37 in)",
            "colors": "Comet Black, Ocean Blue, Cloud White"
          },
          "variants": [
            {
              "name": "Tecno Spark 6 Air 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 Air 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 Air 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 6 Go",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-6-go.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761D Helio A20 (12 nm) - 2GB, 3GB model",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HIOS 6.2",
            "weight": "-",
            "dimensions": "165.6 x 76.3 x 9.1 mm (6.52 x 3.00 x 0.36 in)",
            "colors": "Ice Jadelite, Mystery White, Aqua Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark 6 Go 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 Go 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 Go 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 6 Go 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-6-go.jpg"
          ]
        },
        {
          "name": "Tecno Spark Power 2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "7.0 inches, 116.4 cm, 720 x 1640 pixels (~256 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10, HIOS 6.1",
            "weight": "220 g (7.76 oz)",
            "dimensions": "174.9 x 79.6 x 9.2 mm (6.89 x 3.13 x 0.36 in)",
            "colors": "Ice Jadeite, Misty Grey, Fascinating Purple"
          },
          "variants": [
            {
              "name": "Tecno Spark Power 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark Power 2 Air",
          "aliases": [],
          "releaseYear": 2020,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Power 2 Air Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Spark 4",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Quad-core 2.0 GHz",
            "ram": "2GB, 3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 4000 mAh",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "-",
            "dimensions": "165.3 x 75.9 x 8.2 mm (6.51 x 2.99 x 0.32 in)",
            "colors": "Royal Purple, Vacation Blue"
          },
          "variants": [
            {
              "name": "Tecno Spark 4 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 4 Air",
          "aliases": [],
          "releaseYear": 2019,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark 4 Air Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Spark 4 Lite",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-4-lite.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "-",
            "dimensions": "166.7 x 75.8 x 8.4 mm (6.56 x 2.98 x 0.33 in)",
            "colors": "Midnight Black, Vacation Blue, Hillier Purple"
          },
          "variants": [
            {
              "name": "Tecno Spark 4 Lite 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-4-lite.jpg"
          ]
        },
        {
          "name": "Tecno Spark 2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6580 (28 nm)",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 8.1 Oreo (Go edition)",
            "weight": "175 g (6.17 oz)",
            "dimensions": "159.4 x 76.2 x 7.8 mm (6.28 x 3.00 x 0.31 in)",
            "colors": "Champagne Gold, Black, Coral Blue, Metallic Red"
          },
          "variants": [
            {
              "name": "Tecno Spark 2 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark K7",
          "aliases": [],
          "releaseYear": 2017,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark K7 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Spark Pro",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Quad-core 1.3 GHz",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "182 g (6.42 oz)",
            "dimensions": "153 x 76.4 x 7.9 mm (6.02 x 3.01 x 0.31 in)",
            "colors": "Coral Blue, Champagne Gold, Black, Metallic Red"
          },
          "variants": [
            {
              "name": "Tecno Spark Pro 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark Pro 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-3.jpg",
          "specs": {
            "display": "6.2 inches, 96.7 cm, 720 x 1500 pixels (~268 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), HIOS 5.0",
            "weight": "-",
            "dimensions": "155.3 x 75.8 x 8.2 mm (6.11 x 2.98 x 0.32 in)",
            "colors": "Midnight Black, Champagne Gold, Aqua Blue, Bordeaux Red"
          },
          "variants": [
            {
              "name": "Tecno Spark 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-3.jpg"
          ]
        },
        {
          "name": "Tecno Spark 3 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 96.7 cm, 720 x 1500 pixels (~268 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "-",
            "dimensions": "154.3 x 75.5 x 7.9 mm (6.07 x 2.97 x 0.31 in)",
            "colors": "Midnight Black, Champagne Gold, Nebula Black"
          },
          "variants": [
            {
              "name": "Tecno Spark 3 Pro 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark Go",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go.jpg",
          "specs": {
            "display": "6.1 inches, 91.3 cm, 720 x 1560 pixels, 19.5:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 9.0 (Pie), HIOS 5.0",
            "weight": "174 g (6.14 oz)",
            "dimensions": "156.1 x 75 x 9.2 mm (6.15 x 2.95 x 0.36 in)",
            "colors": "Nebula Black, Royal Purple"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark Go 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go 1",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": null,
          "specs": {
            "display": "6.67 inches, 107.4 cm, 720 x 1600 pixels, 20:9 ratio (~263 ppi density)",
            "processor": "Unisoc T615 (12 nm)",
            "ram": "3GB, 4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14 (Go edition), HIOS 14",
            "weight": "-",
            "dimensions": "165.6 x 77 x 8.4 mm (6.52 x 3.03 x 0.33 in)",
            "colors": "Startrail Black, Glittery White"
          },
          "variants": [
            {
              "name": "Tecno Spark Go 1 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark Go 1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark Go 1 3GB 128GB",
              "ram": "3GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Spark Go 1 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Spark Go 5G",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-5g.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Go 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-spark-go-5g.jpg"
          ]
        },
        {
          "name": "Tecno Spark Go Plus",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Go Plus Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/"
          ]
        },
        {
          "name": "Tecno Spark K9 Plus",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark K9 Plus Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Spark Power",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Spark Power Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/"
          ]
        }
      ]
    },
    {
      "name": "Pop",
      "models": [
        {
          "name": "Tecno Pop X",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop X Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pop X 5G",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop X 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pop 8",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Unisoc T606 (12 nm)",
            "ram": "2GB, 3GB, 4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13 (Go edition)",
            "weight": "-",
            "dimensions": "163.7 x 75.6 x 8.6 mm (6.44 x 2.98 x 0.34 in)",
            "colors": "Mystery White, Alpenglow Gold, Magic Skin, Gravity Black"
          },
          "variants": [
            {
              "name": "Tecno Pop 8 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 8 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 8 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 9",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14",
            "weight": "189 g (6.67 oz)",
            "dimensions": "165 x 77 x 8 mm (6.50 x 3.03 x 0.31 in)",
            "colors": "Aurora Cloud, Azure Sky, Midnight Shadow"
          },
          "variants": [
            {
              "name": "Tecno Pop 9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 9 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 9 5G",
          "aliases": [],
          "releaseYear": 2024,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 9 5G Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/1/"
          ]
        },
        {
          "name": "Tecno Pop 20",
          "aliases": [],
          "releaseYear": 2023,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 20 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/"
          ]
        },
        {
          "name": "Tecno Pop 6",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.1 inches, 91.3 cm, 720 x 1560 pixels, 19.5:9 ratio (~282 ppi density)",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 5000 mAh",
            "os": "Android 11 (Go edition), HiOS",
            "weight": "-",
            "dimensions": "157.8 x 73.8 x 9.7 mm (6.21 x 2.91 x 0.38 in)",
            "colors": "Sea Blue, Lime Green, Sky Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 6 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 6 Go",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 480 x 960 pixels, 18:9 ratio (~179 ppi density)",
            "processor": "Processor details pending public verification",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 4000 mAh",
            "os": "Android 11 (Go edition), HiOS",
            "weight": "-",
            "dimensions": "160.3 x 78.8 x 10.9 mm (6.31 x 3.10 x 0.43 in)",
            "colors": "Ice-crystal Blue, Starfall Grey, Iris Purple, Gradation Sky Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 6 Go 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 6 Go 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 6 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12 (Go edition), HiOS 8.6",
            "weight": "195 g (6.88 oz)",
            "dimensions": "164.9 x 76.3 x 8.8 mm (6.49 x 3.00 x 0.35 in)",
            "colors": "Peaceful Blue, Polar Black"
          },
          "variants": [
            {
              "name": "Tecno Pop 6 Pro 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 7",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12 (Go edition)",
            "weight": "-",
            "dimensions": "163.9 x 75.5 x 8.9 mm (6.45 x 2.97 x 0.35 in)",
            "colors": "Endless Black, Capri Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 7 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 7 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 104.6 cm, 720 x 1612 pixels, 20:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 12, HIOS 12",
            "weight": "-",
            "dimensions": "163.9 x 75.5 x 8.9 mm (6.45 x 2.97 x 0.35 in)",
            "colors": "Turquoise Cyan, Atlantic Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 7 Pro 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 5",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.1 inches, 91.3 cm, 720 x 1560 pixels, 19.5:9 ratio (~282 ppi density)",
            "processor": "Quad-core 1.3 GHz Cortex-A7",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 10 (Go edition), HIOS",
            "weight": "-",
            "dimensions": "157.7 x 75.7 x 9.6 mm (6.21 x 2.98 x 0.38 in)",
            "colors": "Ice Lake Green, Obsidian Black, Ice Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 5 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 5 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 5 LTE",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Unisoc SC9863A (28 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11, HIOS 7.6",
            "weight": "-",
            "dimensions": "164.9 x 76.1 x 8.8 mm (6.49 x 3.00 x 0.35 in)",
            "colors": "Ice Blue, Deepsea Luster, Turquoise Cyan"
          },
          "variants": [
            {
              "name": "Tecno Pop 5 LTE 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 5 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11 (Go edition), HiOS 7.6",
            "weight": "-",
            "dimensions": "164.9 x 76.1 x 9.5 mm (6.49 x 3.00 x 0.37 in)",
            "colors": "Ice Blue, Deepsea Luster, Sky Cyan"
          },
          "variants": [
            {
              "name": "Tecno Pop 5 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 5C",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5c.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Unisoc SC7731e",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2400 mAh",
            "os": "Android 10 (Go edition), HIOS",
            "weight": "150 g (5.29 oz)",
            "dimensions": "145.2 x 74.1 x 9.9 mm (5.72 x 2.92 x 0.39 in)",
            "colors": "Lake Blue, Dark Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 5C 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5c.jpg"
          ]
        },
        {
          "name": "Tecno Pop 5S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5s.jpg",
          "specs": {
            "display": "5.7 inches, 81.1 cm, 720 x 1520 pixels, 19:9 ratio (~295 ppi density)",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3020 mAh",
            "os": "Android 10 (Go edition), HiOS",
            "weight": "160 g (5.64 oz)",
            "dimensions": "148 x 72.3 x 9.9 mm (5.83 x 2.85 x 0.39 in)",
            "colors": "Light Purple, Deep Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 5S 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5s.jpg"
          ]
        },
        {
          "name": "Tecno Pop 5X",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5x.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Unisoc SC9832E (28 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 4000 mAh",
            "os": "Android 10 (Go edition), HiOS",
            "weight": "150 g (5.29 oz)",
            "dimensions": "166 x 75.9 x 8.5 mm (6.54 x 2.99 x 0.33 in)",
            "colors": "Cosmic Shine, Crystal Blue, Dazzle Black"
          },
          "variants": [
            {
              "name": "Tecno Pop 5X 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/2/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-5x.jpg"
          ]
        },
        {
          "name": "Tecno Pop 4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 480 x 960 pixels, 18:9 ratio (~179 ppi density)",
            "processor": "Quad-core 1.3 GHz",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HIOS",
            "weight": "-",
            "dimensions": "160 x 77.3 x 9.5 mm (6.30 x 3.04 x 0.37 in)",
            "colors": "Ice Lake Green, Dawn Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 4 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 4 LTE",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 480 x 960 pixels, 18:9 ratio (~179 ppi density)",
            "processor": "Quad-core 1.3 GHz",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 10 (Go edition), HIOS",
            "weight": "-",
            "dimensions": "160 x 77.3 x 9.5 mm (6.30 x 3.04 x 0.37 in)",
            "colors": "Ice Lake Green, Dawn Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 4 LTE 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 4 Pro",
          "aliases": [],
          "releaseYear": 2020,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 4 Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        },
        {
          "name": "Tecno Pop 3",
          "aliases": [],
          "releaseYear": 2019,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Pop 3 Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-3-plus.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 9.0 (Pie), HIOS 5.5",
            "weight": "180.5 g (6.38 oz)",
            "dimensions": "166.7 x 75.8 x 8.4 mm (6.56 x 2.98 x 0.33 in)",
            "colors": "Midnight Black, Vacation Blue, Hillier Purple"
          },
          "variants": [
            {
              "name": "Tecno Pop 3 Plus 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-3-plus.jpg"
          ]
        },
        {
          "name": "Tecno Pop 1",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.45 inches, 76.7 cm, 480 x 960 pixels, 18:9 ratio (~197 ppi density)",
            "processor": "Mediatek MT6580W (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2400 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "151.5 x 71.9 x 8.5 mm (5.96 x 2.83 x 0.33 in)",
            "colors": "Champagn Gold, Midnight Black, Bordeaux Red, Jewel Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 1 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 1 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.45 inches, 76.7 cm, 480 x 960 pixels, 18:9 ratio (~197 ppi density)",
            "processor": "Mediatek MT6580W (28 nm)",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2400 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "151.5 x 71.9 x 8.5 mm (5.96 x 2.83 x 0.33 in)",
            "colors": "Champagn Gold, Midnight Black, Bordeaux Red, Jewel Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 1 Pro 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 1s",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 78.1 cm, 720 x 1440 pixels, 18:9 ratio (~293 ppi density)",
            "processor": "Mediatek MT6739WA (28 nm)",
            "ram": "1GB, 2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 8.1 Oreo (Go edition)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "148.1 x 71.6 x 8.6 mm (5.83 x 2.82 x 0.34 in)",
            "colors": "Champagne Gold, Midnight Black, City Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 1s 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pop 1s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 1s Pro",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 1s Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Pop 2",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Pop 2 Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 480 x 960 pixels, 18:9 ratio (~179 ppi density)",
            "processor": "Mediatek MT6580P",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 8.1 Oreo (Go edition)",
            "weight": "205 g (7.23 oz)",
            "dimensions": "161.7 x 78.9 x 9.6 mm (6.37 x 3.11 x 0.38 in)",
            "colors": "Midnight Black, Champagne Gold, Nebula Black"
          },
          "variants": [
            {
              "name": "Tecno Pop 2 Plus 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/5/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pop 2 Power",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 2 Power Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Pop 2 Pro",
          "aliases": [],
          "releaseYear": 2018,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Pop 2 Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/"
          ]
        },
        {
          "name": "Tecno Pop 2F",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-2f.jpg",
          "specs": {
            "display": "5.45 inches, 76.7 cm, 480 x 960 pixels, 18:9 ratio (~197 ppi density)",
            "processor": "Mediatek MT6580M",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 2400 mAh, removable",
            "os": "Android 8.1 Oreo (Go edition)",
            "weight": "155 g (5.47 oz)",
            "dimensions": "149.8 x 72.8 x 9.4 mm (5.90 x 2.87 x 0.37 in)",
            "colors": "Midnight Black, Champagne Gold, City Blue"
          },
          "variants": [
            {
              "name": "Tecno Pop 2F 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pop-2f.jpg"
          ]
        }
      ]
    },
    {
      "name": "Pouvoir",
      "models": [
        {
          "name": "Tecno Pouvoir 4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-4.jpg",
          "specs": {
            "display": "7.0 inches, 116.4 cm, 720 x 1640 pixels (~256 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "-",
            "dimensions": "174.9 x 79.6 x 9.2 mm (6.89 x 3.13 x 0.36 in)",
            "colors": "Cosmic Shine, Ice Jadeite, Fascinating Purple"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-4.jpg"
          ]
        },
        {
          "name": "Tecno Pouvoir 4 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-4-pro.jpg",
          "specs": {
            "display": "7.0 inches, 116.4 cm, 720 x 1640 pixels (~256 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "4GB, 6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10, HIOS 6.0",
            "weight": "-",
            "dimensions": "174.9 x 79.6 x 9.2 mm (6.89 x 3.13 x 0.36 in)",
            "colors": "Ice Jadeite, Misty Grey, Fascinating Purple"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 4 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Tecno Pouvoir 4 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-4-pro.jpg"
          ]
        },
        {
          "name": "Tecno Pouvoir 3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3.jpg",
          "specs": {
            "display": "6.2 inches, 96.7 cm, 720 x 1500 pixels (~268 ppi density)",
            "processor": "Mediatek MT6739WA (28 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), HIOS 4.1",
            "weight": "168 g (5.93 oz)",
            "dimensions": "157.6 x 76.7 x 8.5 mm (6.20 x 3.02 x 0.33 in)",
            "colors": "Gold, Black, Blue"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 3 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3.jpg"
          ]
        },
        {
          "name": "Tecno Pouvoir 3 Air",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3-air.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 480 x 960 pixels, 18:9 ratio (~179 ppi density)",
            "processor": "Mediatek MT6761 Helio A22 (12 nm)",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "5000 mAh, non-removable",
            "os": "Android 9.0 Pie (Go edition), HIOS 5.0",
            "weight": "-",
            "dimensions": "163 x 78.2 x 9.3 mm (6.42 x 3.08 x 0.37 in)",
            "colors": "Champagne Gold, Midnight Black, Aqua Blue"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 3 Air 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3-air.jpg"
          ]
        },
        {
          "name": "Tecno Pouvoir 3 Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3-plus.jpg",
          "specs": {
            "display": "6.35 inches, 99.5 cm, 720 x 1548 pixels (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "6000 mAh, non-removable",
            "os": "Android 9.0 (Pie), HIOS 5.0",
            "weight": "-",
            "dimensions": "159 x 76 x 9.2 mm (6.26 x 2.99 x 0.36 in)",
            "colors": "Gold, Black, Blue"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 3 Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/tecno-pouvoir-3-plus.jpg"
          ]
        },
        {
          "name": "Tecno Pouvoir 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Quad-core 1.3 GHz Cortex-A7",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 5000 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "167 g (5.89 oz)",
            "dimensions": "159.8 x 76.8 x 8.5 mm (6.29 x 3.02 x 0.33 in)",
            "colors": "City Blue, Midnight Black, Champagne Gold"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno Pouvoir 2 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 92.9 cm, 720 x 1440 pixels, 18:9 ratio (~268 ppi density)",
            "processor": "Quad-core 1.3 GHz Cortex-A7",
            "ram": "3GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 5000 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "171 g (6.03 oz)",
            "dimensions": "159.8 x 76.8 x 8.2 mm (6.29 x 3.02 x 0.32 in)",
            "colors": "City Blue, Phantom Black, Honor Gold, Champagne Gold"
          },
          "variants": [
            {
              "name": "Tecno Pouvoir 2 Pro 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        }
      ]
    },
    {
      "name": "F",
      "models": [
        {
          "name": "Tecno F2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Mediatek MT6580M (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2000 mAh battery",
            "os": "Android 7.0 (Nougat)",
            "weight": "152.4 g (5.36 oz)",
            "dimensions": "145 x 74.2 x 9.7 mm (5.71 x 2.92 x 0.38 in)",
            "colors": "Champagne Gold, Ice Blue, Phantom Red"
          },
          "variants": [
            {
              "name": "Tecno F2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        },
        {
          "name": "Tecno F2 LTE",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Mediatek MT6739WA (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2400 mAh battery",
            "os": "Android 8.1 Oreo (Go edition)",
            "weight": "168.5 g (5.96 oz)",
            "dimensions": "143.8 x 74 x 9.6 mm (5.66 x 2.91 x 0.38 in)",
            "colors": "Champagne Gold, Midnight Black, City Blue"
          },
          "variants": [
            {
              "name": "Tecno F2 LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/4/",
            "kaggle:gsmarena-derived-tecno-specs"
          ]
        }
      ]
    },
    {
      "name": "i",
      "models": [
        {
          "name": "Tecno i5 Pro",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno i5 Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/tecno/models/3/"
          ]
        }
      ]
    },
    {
      "name": "W",
      "models": [
        {
          "name": "Tecno W4",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W4 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno W5",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W5 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno W5 Lite",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W5 Lite Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno W1",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W1 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno W2",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno W3",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno W3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        }
      ]
    },
    {
      "name": "L",
      "models": [
        {
          "name": "Tecno L9",
          "aliases": [],
          "releaseYear": 2017,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno L9 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno L9 Plus",
          "aliases": [],
          "releaseYear": 2017,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno L9 Plus Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno L8",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno L8 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno L8 Lite",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno L8 Lite Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno L8 Plus",
          "aliases": [],
          "releaseYear": 2016,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno L8 Plus Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        }
      ]
    },
    {
      "name": "Boom",
      "models": [
        {
          "name": "Tecno Boom J8",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Boom J8 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        },
        {
          "name": "Tecno Boom J7",
          "aliases": [],
          "releaseYear": 2015,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "Tecno Boom J7 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Tecno_Mobile"
          ]
        }
      ]
    }
  ]
};
