/**
 * Enriched Oppo phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/oppo.json.
 */

export type OppoEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type OppoEnrichedModelSpecs = {
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

export type OppoEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: OppoEnrichedModelSpecs;
  variants: OppoEnrichedModelVariant[];
  sources?: string[];
};

export type OppoEnrichedFamily = {
  name: string;
  models: OppoEnrichedModel[];
};

export const OPPO_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: OppoEnrichedFamily[];
} = {
  "brandName": "Oppo",
  "logoUrl": "https://logo.clearbit.com/oppo.com",
  "sortOrder": 6,
  "families": [
    {
      "name": "Find / Find X / Find N",
      "models": [
        {
          "name": "OPPO Find N6",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n6.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find N6 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find N6 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find N6 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find N6 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n6.jpg"
          ]
        },
        {
          "name": "OPPO Find X9 Ultra",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9-ultra-1.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X9 Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9-ultra-1.jpg"
          ]
        },
        {
          "name": "OPPO Find X9s",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9s.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X9s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9s.jpg"
          ]
        },
        {
          "name": "OPPO Find X9s Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9s-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X9s Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9s Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9s-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find N5",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n5.jpg",
          "specs": {
            "display": "8.12 inches, 211.7 cm, 2248 x 2480 pixels (~412 ppi density)",
            "processor": "Qualcomm SM8750-3-AB Snapdragon 8 Elite (3 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 5600 mAh",
            "os": "Android 15, ColorOS 15",
            "weight": "229 g (8.08 oz)",
            "dimensions": "Unfolded: 160.9 x 145.6 x 4.2 mm",
            "colors": "Cosmic Black, Misty White, Dusk Purple"
          },
          "variants": [
            {
              "name": "OPPO Find N5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N5 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N5 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n5.jpg"
          ]
        },
        {
          "name": "OPPO Find X8 Ultra",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-ultra.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X8 Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8 Ultra 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-ultra.jpg"
          ]
        },
        {
          "name": "OPPO Find X8s",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8s.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X8s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8s.jpg"
          ]
        },
        {
          "name": "OPPO Find X8s+",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8s-plus.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X8s+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X8s+ 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8s-plus.jpg"
          ]
        },
        {
          "name": "OPPO Find X9",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X9 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9.jpg"
          ]
        },
        {
          "name": "OPPO Find X9 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Find X9 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X9 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x9-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find X7",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7.jpg",
          "specs": {
            "display": "6.78 inches, 111.7 cm, 1264 x 2780 pixels (~450 ppi density)",
            "processor": "Mediatek Dimensity 9300 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "202 g or 206 g (7.13 oz)",
            "dimensions": "162.7 x 75.4 x 8.7 mm or 9.0 mm",
            "colors": "Black, Dark Blue, Light Brown, Purple"
          },
          "variants": [
            {
              "name": "OPPO Find X7 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X7 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X7 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X7 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7.jpg"
          ]
        },
        {
          "name": "OPPO Find X7 Ultra",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg",
          "specs": {
            "display": "6.82 inches, 113.0 cm, 1440 x 3168 pixels (~510 ppi density)",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, up to 4 major Android upgrades, ColorOS 14",
            "weight": "221 g (7.80 oz)",
            "dimensions": "164.3 x 76.2 x 9.5 mm (6.47 x 3.00 x 0.37 in)",
            "colors": "Black, Dark Blue, Light Brown"
          },
          "variants": [
            {
              "name": "OPPO Find X7 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X7 Ultra 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X7 Ultra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x7-ultra.jpg"
          ]
        },
        {
          "name": "OPPO Find X8",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8.jpg",
          "specs": {
            "display": "6.59 inches, 105.6 cm, 1256 x 2760 pixels (~460 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 5630 mAh",
            "os": "Android 15, up to 5 major Android upgrades, ColorOS 15",
            "weight": "193 g (6.81 oz)",
            "dimensions": "157.4 x 74.3 x 7.9 mm (6.20 x 2.93 x 0.31 in)",
            "colors": "Star Grey, Space Black, Shell Pink, Blue"
          },
          "variants": [
            {
              "name": "OPPO Find X8 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8.jpg"
          ]
        },
        {
          "name": "OPPO Find X8 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg",
          "specs": {
            "display": "6.78 inches, 111.7 cm, 1264 x 2780 pixels (~450 ppi density)",
            "processor": "Mediatek Dimensity 9400 (3 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Si/C Li-Ion 5910 mAh",
            "os": "Android 15, up to 5 major Android upgrades, ColorOS 15",
            "weight": "215 g (7.58 oz)",
            "dimensions": "162.3 x 76.7 x 8.2 mm (6.39 x 3.02 x 0.32 in)",
            "colors": "Space Black, Pearl White, Blue"
          },
          "variants": [
            {
              "name": "OPPO Find X8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X8 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x8-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find N3",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n3.jpg",
          "specs": {
            "display": "7.82 inches, 196.7 cm, 2268 x 2440 pixels (~426 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4805 mAh",
            "os": "Android 13, upgradable to Android 14, ColorOS 14",
            "weight": "239 g or 245 g (8.43 oz)",
            "dimensions": "Unfolded: 153.4 x 143.1 x 5.8 mm",
            "colors": "Black, Green, Gold, Red"
          },
          "variants": [
            {
              "name": "OPPO Find N3 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N3 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N3 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N3 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n3.jpg"
          ]
        },
        {
          "name": "OPPO Find N3 Flip",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n3-flip.jpg",
          "specs": {
            "display": "Foldable LTPO AMOLED, 120Hz, HDR10+, 1200 nits (HBM), 1600 nits (peak), 6.8 inches, 1080 x 2520",
            "processor": "Mediatek Dimensity 9200 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "4300",
            "os": "Android 13, up to 4 major Android upgrades, ColorOS 14",
            "weight": "198.0",
            "dimensions": "Unfolded: 166.4 x 75.8 x 7.8 mm",
            "colors": "Cream Gold, Misty Pink, Sleek Black"
          },
          "variants": [
            {
              "name": "OPPO Find N3 Flip 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n3-flip.jpg"
          ]
        },
        {
          "name": "OPPO Find X6",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6.jpg",
          "specs": {
            "display": "6.74 inches, 109.2 cm, 1240 x 2772 pixels, 20:9 ratio (~451 ppi density)",
            "processor": "Mediatek Dimensity 9200 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4800 mAh",
            "os": "Android 13, ColorOS 13.1",
            "weight": "207 g (7.30 oz)",
            "dimensions": "162.9 x 74.1 x 9 mm (6.41 x 2.92 x 0.35 in)",
            "colors": "Black, Green, Gold"
          },
          "variants": [
            {
              "name": "OPPO Find X6 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X6 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6.jpg"
          ]
        },
        {
          "name": "OPPO Find X6 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg",
          "specs": {
            "display": "6.82 inches, 113.0 cm, 1440 x 3168 pixels (~510 ppi density)",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, up to 4 major Android upgrades, ColorOS 14",
            "weight": "216 g or 218 g (7.62 oz)",
            "dimensions": "164.8 x 76.2 x 9.1 mm or 9.5 mm",
            "colors": "Black, Green, Brown"
          },
          "variants": [
            {
              "name": "OPPO Find X6 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X6 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X6 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x6-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find N2",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2.jpg",
          "specs": {
            "display": "7.1 inches, 162.2 cm, 1792 x 1920 pixels (~370 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4520 mAh",
            "os": "Android 13, ColorOS 13",
            "weight": "233 g or 237 g (8.22 oz)",
            "dimensions": "Unfolded: 132.2 x 140.5 x 7.4 mm",
            "colors": "Black, Green, White"
          },
          "variants": [
            {
              "name": "OPPO Find N2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N2 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2.jpg"
          ]
        },
        {
          "name": "OPPO Find N2 Flip",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg",
          "specs": {
            "display": "Foldable LTPO AMOLED, 120Hz, HDR10+, 1200 nits (HBM), 1600 nits (peak), 6.8 inches, 1080 x 2520",
            "processor": "Mediatek Dimensity 9000+ (4 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300",
            "os": "Android 13, up to 4 major Android upgrades, ColorOS 14",
            "weight": "191.0",
            "dimensions": "Unfolded: 166.2 x 75.2 x 7.5 mm",
            "colors": "Astral Black, Moonlit Purple, Gold"
          },
          "variants": [
            {
              "name": "OPPO Find N2 Flip 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n2-flip.jpg"
          ]
        },
        {
          "name": "OPPO Find X5",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 800 nits (HBM), 1000 nits (peak), 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4800",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "196.0",
            "dimensions": "160.3 x 72.6 x 8.7 mm (6.31 x 2.86 x 0.34 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "OPPO Find X5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5.jpg"
          ]
        },
        {
          "name": "OPPO Find X5 Lite",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-lite.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, ColorOS 12",
            "weight": "173 g (6.10 oz)",
            "dimensions": "160.6 x 73.2 x 7.8 mm (6.32 x 2.88 x 0.31 in)",
            "colors": "Starlight Black, Startrails Blue"
          },
          "variants": [
            {
              "name": "OPPO Find X5 Lite 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-lite.jpg"
          ]
        },
        {
          "name": "OPPO Find X5 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-pro.jpg",
          "specs": {
            "display": "LTPO2 AMOLED, 1B colors, 120Hz, HDR10+, BT.2020, 500 nits (typ), 800 nits (HBM), 1300 nits (peak), 6.7 inches, 1440 x 3216",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm) - Global",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "218.0",
            "dimensions": "163.7 x 73.9 x 8.5 or 8.8 mm",
            "colors": "Ceramic Black, Ceramic White, Blue (eco leather)"
          },
          "variants": [
            {
              "name": "OPPO Find X5 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x5-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find N",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n.jpg",
          "specs": {
            "display": "7.1 inches, 162.2 cm, 1792 x 1920 pixels (~370 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, upgradable to Android 14, ColorOS 14",
            "weight": "275 g (9.70 oz)",
            "dimensions": "Unfolded: 132.6 x 140.2 x 8.0 mm",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "OPPO Find N 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find N 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-n.jpg"
          ]
        },
        {
          "name": "OPPO Find X3",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3.jpg",
          "specs": {
            "display": "6.7 inches, 108.4 cm, 1440 x 3216 pixels, 20:9 ratio (~525 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, upgradable to Android 13, ColorOS 13",
            "weight": "193 g (6.81 oz)",
            "dimensions": "163.6 x 74 x 8.3 mm (6.44 x 2.91 x 0.33 in)",
            "colors": "Gloss Black, Blue, White"
          },
          "variants": [
            {
              "name": "OPPO Find X3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X3 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-find-x3/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3.jpg"
          ]
        },
        {
          "name": "OPPO Find X3 Lite",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3-Lite.jpg",
          "specs": {
            "display": "6.43 inches, 99.3 cm, 1080 x 2400 pixels, 20:9 ratio (~410 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4300 mAh",
            "os": "Android 11, upgradable to Android 13, ColorOS 13",
            "weight": "172 g or 180 g (6.07 oz)",
            "dimensions": "159.1 x 73.4 x 7.9 mm (6.26 x 2.89 x 0.31 in)",
            "colors": "Galactic Silver, Azure Blue, Starry Black"
          },
          "variants": [
            {
              "name": "OPPO Find X3 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-find-x3-lite/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3-Lite.jpg"
          ]
        },
        {
          "name": "OPPO Find X3 Neo",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3-Neo.jpg",
          "specs": {
            "display": "AMOLED, 90Hz, HDR10+, 500 nits (typ), 1100 nits (peak), 6.55 inches, 1080 x 2400",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 11, upgradable to Android 12, ColorOS",
            "weight": "184.0",
            "dimensions": "159.9 x 72.5 x 8 mm (6.30 x 2.85 x 0.31 in)",
            "colors": "Galactic Silver, Starlight Black"
          },
          "variants": [
            {
              "name": "OPPO Find X3 Neo 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-find-x3-neo/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Find-X3-Neo.jpg"
          ]
        },
        {
          "name": "OPPO Find X3 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x3-pro.jpg",
          "specs": {
            "display": "LTPO AMOLED, 1B colors, 120Hz, HDR10+, BT.2020, 500 nits (typ), 1300 nits (peak), 6.7 inches, 1440 x 3216",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 11, upgradable to Android 14, ColorOS 14",
            "weight": "193.0",
            "dimensions": "163.6 x 74 x 8.3 mm (6.44 x 2.91 x 0.33 in)",
            "colors": "Gloss Black, Blue, White, Cosmic Mocha, Mars Edition, Photographer Edition"
          },
          "variants": [
            {
              "name": "OPPO Find X3 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x3-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find X3 Pro Lensman",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Find X3 Pro Lensman 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Lensman 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Lensman 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Lensman 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find X3 Pro Mars Exploration Edition",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Find X3 Pro Mars Exploration Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Mars Exploration Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Mars Exploration Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X3 Pro Mars Exploration Edition 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find X2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2.jpg",
          "specs": {
            "display": "6.7 inches, 111.7 cm, 1440 x 3168 pixels (~513 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4200 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "209 g (Ceramic) / 192 g (Glass) (6.77 oz)",
            "dimensions": "164.9 x 74.5 x 8 mm (6.49 x 2.93 x 0.31 in)",
            "colors": "Black, Ocean"
          },
          "variants": [
            {
              "name": "OPPO Find X2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2.jpg"
          ]
        },
        {
          "name": "OPPO Find X2 League of Legends S10",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Find X2 League of Legends S10 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 League of Legends S10 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 League of Legends S10 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 League of Legends S10 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find X2 Lite",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-lite.jpg",
          "specs": {
            "display": "6.4 inches, 100.4 cm, 1080 x 2400 pixels, 20:9 ratio (~408 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 10, ColorOS 7",
            "weight": "180 g (6.35 oz)",
            "dimensions": "160.3 x 74.3 x 8 mm (6.31 x 2.93 x 0.31 in)",
            "colors": "Moonlight Black, Pearl White"
          },
          "variants": [
            {
              "name": "OPPO Find X2 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-lite.jpg"
          ]
        },
        {
          "name": "OPPO Find X2 Neo",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-neo.jpg",
          "specs": {
            "display": "6.5 inches, 103.5 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 10, ColorOS 7",
            "weight": "171 g (6.03 oz)",
            "dimensions": "159.4 x 72.4 x 7.7 mm (6.28 x 2.85 x 0.30 in)",
            "colors": "Moonlight Black, Starry Blue"
          },
          "variants": [
            {
              "name": "OPPO Find X2 Neo 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-neo.jpg"
          ]
        },
        {
          "name": "OPPO Find X2 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-pro.jpg",
          "specs": {
            "display": "6.7 inches, 111.7 cm, 1440 x 3168 pixels (~513 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4260 mAh, non-removable",
            "os": "Android 10, ColorOS 7.1",
            "weight": "217 g (Ceramic) / 200 g (Leather) (7.05 oz)",
            "dimensions": "165.2 x 74.4 x 8.8 mm (Ceramic) / 9.5mm (Leather)",
            "colors": "Black, Orange, Gray, Green, Lamborghini Edition"
          },
          "variants": [
            {
              "name": "OPPO Find X2 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X2 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x2-pro.jpg"
          ]
        },
        {
          "name": "OPPO Find X2 Pro Lamborghini",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Find X2 Pro Lamborghini 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 Pro Lamborghini 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 Pro Lamborghini 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X2 Pro Lamborghini 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find X",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x.jpg",
          "specs": {
            "display": "6.42 inches, 101.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3730 mAh (standard model)",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, ColorOS 7.0",
            "weight": "186 g (6.56 oz)",
            "dimensions": "156.7 x 74.2 x 9.6 mm (6.17 x 2.92 x 0.38 in)",
            "colors": "Bordeaux Red, Glacier Blue"
          },
          "variants": [
            {
              "name": "OPPO Find X 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Find X 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-find-x.jpg"
          ]
        },
        {
          "name": "OPPO Find X Lamborghini",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "6.42 inches, 101.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3400 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, ColorOS 7.0",
            "weight": "186 g (6.56 oz)",
            "dimensions": "156.7 x 74.2 x 9.4 mm (6.17 x 2.92 x 0.37 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "OPPO Find X Lamborghini 8GB 512GB",
              "ram": "8GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Find X Super Flash",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO Find X Super Flash 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X Super Flash 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find X Super Flash 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find 7",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~534 ppi pixel density), 5.5 inches (~72.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Po 3000 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "171 g",
            "dimensions": "152.6 x 75 x 9.2 mm (6.01 x 2.95 x 0.36 in)",
            "colors": "White| Black| Astro Black"
          },
          "variants": [
            {
              "name": "OPPO Find 7 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find 7 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find 7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Find 7a",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-7-new.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~72.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974AB Snapdragon 801",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Po 2800 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "170 g",
            "dimensions": "152.6 x 75 x 9.2 mm (6.01 x 2.95 x 0.36 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO Find 7a 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find 7a 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Find 7a 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-7-new.jpg"
          ]
        },
        {
          "name": "OPPO Find 5 Midnight",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find 5 Midnight Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find 5 Mini",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-5-mini.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~234 ppi pixel density), 4.7 inches (~65.4% screen-to-body ratio)",
            "processor": "Mediatek MT6582M",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Po 2000 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "128 g",
            "dimensions": "137 x 68 x 7.7 mm (5.39 x 2.68 x 0.30 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO Find 5 Mini 1 GB RAM Market-dependent storage",
              "ram": "1 GB RAM",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-5-mini.jpg"
          ]
        },
        {
          "name": "OPPO Find Way",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find Way Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find 3",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find 3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find 5",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-5.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~441 ppi pixel density), 5.0 inches (~70.6% screen-to-body ratio)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2500 mAh battery",
            "os": "Android 4.1 (Jelly Bean)",
            "weight": "165 g",
            "dimensions": "141.8 x 68.8 x 8.9 mm (5.58 x 2.71 x 0.35 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO Find 5 2 GB RAM Market-dependent storage",
              "ram": "2 GB RAM",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-find-5.jpg"
          ]
        },
        {
          "name": "OPPO Find Gemini",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find Gemini Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find Gemini Plus",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find Gemini Plus Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Find Guitar",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO Find Guitar Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Finder",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-finder.jpg",
          "specs": {
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
              "name": "OPPO Finder Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.oppo.com/en/",
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-finder.jpg"
          ]
        }
      ]
    },
    {
      "name": "Reno",
      "models": [
        {
          "name": "OPPO Reno15",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno15.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-reno15-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno15.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 F",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15-f.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 F 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 F 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 F 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 F 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15-f.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno15-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 Pro 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno15-Pro-5G.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-reno15-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno15-Pro-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 Pro Max",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno15-Pro-Max-5G.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 Pro Max 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Max 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Max 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Max 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-reno15-pro-max/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno15-Pro-Max-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno15 Pro Mini",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15 Pro Mini 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Mini 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Mini 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15 Pro Mini 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno15c",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15c 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno15c 5G",
          "aliases": [],
          "releaseYear": 2026,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno15c 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno15c 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno13",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-5G.jpg",
          "specs": {
            "display": "6.59 inches, 105.6 cm, 1256 x 2760 pixels (~460 ppi density)",
            "processor": "Mediatek Dimensity 8350 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5600 mAh",
            "os": "Android 15, ColorOS 15",
            "weight": "181 g (6.38 oz)",
            "dimensions": "157.9 x 74.7 x 7.2 mm (6.22 x 2.94 x 0.28 in)",
            "colors": "Plume White, Luminous Blue, Black, Purple, Blue"
          },
          "variants": [
            {
              "name": "OPPO Reno13 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno13/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno13 A",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno13 A 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 A 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 A 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 A 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno13 F 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-F-5G.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno13 F 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 F 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 F 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 F 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-reno13-f-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-F-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno13 FS 5G",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno13 FS 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 FS 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 FS 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno13 FS 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno13 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-Pro-China.jpg",
          "specs": {
            "display": "6.83 inches, 113.3 cm, 1272 x 2800 pixels (~450 ppi density)",
            "processor": "Mediatek Dimensity 8350 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5800 mAh",
            "os": "Android 15, ColorOS 15",
            "weight": "195 g or 197 g (6.88 oz)",
            "dimensions": "162.8 x 76.6 x 7.6 mm (6.41 x 3.02 x 0.30 in)",
            "colors": "Graphite Grey, Plume Purple, Pink"
          },
          "variants": [
            {
              "name": "OPPO Reno13 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno13 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno13-pro/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno13-Pro-China.jpg"
          ]
        },
        {
          "name": "OPPO Reno14",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno14.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno14 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno14.jpg"
          ]
        },
        {
          "name": "OPPO Reno14 F",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno14 F 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno14 F Star Wars",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno14 F Star Wars 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F Star Wars 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F Star Wars 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 F Star Wars 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno14 FS 5G",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno14 FS 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 FS 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 FS 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 FS 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno14 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno14-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO Reno14 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno14 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno14-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno11 A",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno11 A 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 A 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 A 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 A 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno11 F",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11-f-5g.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Mediatek Dimensity 7050 (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, upgradable to Android 15, ColorOS 15",
            "weight": "177 g (6.24 oz)",
            "dimensions": "161.1 x 74.7 x 7.5 mm (6.34 x 2.94 x 0.30 in)",
            "colors": "Palm Green, Ocean Blue, Coral Purple"
          },
          "variants": [
            {
              "name": "OPPO Reno11 F 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno11-f-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno12",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 1200 nits (peak), 6.7 inches, 1080 x 2412",
            "processor": "Mediatek Dimensity 7300 Energy (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades, ColorOS 14.1",
            "weight": "177.0",
            "dimensions": "161.4 x 74.1 x 7.6 mm (6.35 x 2.92 x 0.30 in)",
            "colors": "Matte Brown, Sunset Pink, Astro Silver"
          },
          "variants": [
            {
              "name": "OPPO Reno12 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12.jpg"
          ]
        },
        {
          "name": "OPPO Reno12 CPH2625",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 CPH2625 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 CPH2625 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 CPH2625 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 CPH2625 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 F 4G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-f-4g.jpg",
          "specs": {
            "display": "6.67 inches, 107.4 cm, 1080 x 2400 pixels, 20:9 ratio (~395 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 685 (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, upgradable to Android 15, ColorOS 15",
            "weight": "187 g (6.60 oz)",
            "dimensions": "163.1 x 75.8 x 7.7 mm (6.42 x 2.98 x 0.30 in)",
            "colors": "Amber Orange, Olive Green, Matte Grey"
          },
          "variants": [
            {
              "name": "OPPO Reno12 F 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno12 F 4G 8GB 512GB",
              "ram": "8GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno12-f-4g.jpg"
          ]
        },
        {
          "name": "OPPO Reno12 F 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 F 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 F Harry Potter",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 F Harry Potter 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F Harry Potter 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F Harry Potter 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 F Harry Potter 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 FS 4G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 FS 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 4G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 4G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 FS 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 FS 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 FS 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno12-Pro-Space-Brown.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 1200 nits (peak), 6.7 inches, 1080 x 2412",
            "processor": "Mediatek Dimensity 7300 Energy (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades, ColorOS 14.1",
            "weight": "180.0",
            "dimensions": "161.5 x 74.8 x 7.4 mm (6.36 x 2.94 x 0.29 in)",
            "colors": "Space Brown, Sunset Gold, Nebula Silver, Manish Malhotra"
          },
          "variants": [
            {
              "name": "OPPO Reno12 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno12-pro/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno12-Pro-Space-Brown.jpg"
          ]
        },
        {
          "name": "OPPO Reno12 Pro CPH2629",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 Pro CPH2629 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro CPH2629 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro CPH2629 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro CPH2629 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno12 Pro Manish Malhotra",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno12 Pro Manish Malhotra 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro Manish Malhotra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro Manish Malhotra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno12 Pro Manish Malhotra 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno10",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 800 nits (HBM), 950 nits (peak), 6.7 inches, 1080 x 2412",
            "processor": "Mediatek Dimensity 7050 (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14, ColorOS 14",
            "weight": "185.0",
            "dimensions": "162.4 x 74.2 x 8 mm (6.39 x 2.92 x 0.31 in)",
            "colors": "Silvery Grey, Ice Blue"
          },
          "variants": [
            {
              "name": "OPPO Reno10 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10.jpg"
          ]
        },
        {
          "name": "OPPO Reno10 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10-pro.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4600 mAh",
            "os": "Android 13, upgradable to Android 15, ColorOS 15",
            "weight": "185 g (6.53 oz)",
            "dimensions": "162.3 x 74.2 x 7.9 mm (6.39 x 2.92 x 0.31 in)",
            "colors": "Silvery Grey, Glossy Purple"
          },
          "variants": [
            {
              "name": "OPPO Reno10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno10 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno10 Pro+",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10-pro-plus.jpg",
          "specs": {
            "display": "6.74 inches, 109.2 cm, 1240 x 2772 pixels, 20:9 ratio (~451 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4700 mAh",
            "os": "Android 13, upgradable to Android 15, ColorOS 15",
            "weight": "194 g (6.84 oz)",
            "dimensions": "162.9 x 74 x 8.3 mm (6.41 x 2.91 x 0.33 in)",
            "colors": "Silvery Grey, Glossy Purple, Gold"
          },
          "variants": [
            {
              "name": "OPPO Reno10 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno10 Pro+ 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno10 Pro+ 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno10-pro-plus.jpg"
          ]
        },
        {
          "name": "OPPO Reno11",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno11.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 800 nits (HBM), 950 nits (peak), 6.7 inches, 1080 x 2412",
            "processor": "Mediatek Dimensity 7050 (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, ColorOS 14",
            "weight": "182.0",
            "dimensions": "162.4 x 74.3 x 7.9 mm or 8.0 mm",
            "colors": "Wave Green, Rock Grey"
          },
          "variants": [
            {
              "name": "OPPO Reno11 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno11/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno11.jpg"
          ]
        },
        {
          "name": "OPPO Reno11 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno11 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno11 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno11-Pro.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Mediatek Dimensity 8200 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4600 mAh",
            "os": "Android 14, upgradable to Android 15, ColorOS 15",
            "weight": "181 g (6.38 oz)",
            "dimensions": "162.4 x 74.1 x 7.6 mm or 7.7 mm",
            "colors": "Pearl White, Rock Grey"
          },
          "variants": [
            {
              "name": "OPPO Reno11 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno11 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno11-pro/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno11-Pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno11 Pro 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno11 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno11 Pro 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno8 T 4G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-t-4g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO Reno8 T 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 T 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 T 4G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 T 4G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-t-4g.jpg"
          ]
        },
        {
          "name": "OPPO Reno8 T 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno8-T-5G.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 4800 mAh",
            "os": "Android 13, upgradable to Android 14, ColorOS 14",
            "weight": "171 g (6.03 oz)",
            "dimensions": "162.3 x 74.3 x 7.7 mm (6.39 x 2.93 x 0.30 in)",
            "colors": "Black Starlight (Midnight Black), Dawn Gold (Sunrise Gold)"
          },
          "variants": [
            {
              "name": "OPPO Reno8 T 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno8 T 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno8-t-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno8-T-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno6 Lite",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-lite.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.3 x 73.8 x 8 mm (6.31 x 2.91 x 0.31 in)",
            "colors": "Black, Rainbow Silver"
          },
          "variants": [
            {
              "name": "OPPO Reno6 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-lite.jpg"
          ]
        },
        {
          "name": "OPPO Reno7 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-4g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 4G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-4g.jpg"
          ]
        },
        {
          "name": "OPPO Reno7 CPH2371",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 CPH2371 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 CPH2371 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 CPH2371 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 CPH2371 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7 Lite 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 Lite 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Lite 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Lite 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Lite 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7 Z 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-z-5g.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, ColorOS 12",
            "weight": "173 g (6.10 oz)",
            "dimensions": "159.9 x 73.2 x 7.5 mm (6.30 x 2.88 x 0.30 in)",
            "colors": "Black, Rainbow"
          },
          "variants": [
            {
              "name": "OPPO Reno7 Z 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7-z-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno8 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-4g.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "159.9 x 73.2 x 7.7 mm (6.30 x 2.88 x 0.30 in)",
            "colors": "Dawnlight Gold, Starlight Black"
          },
          "variants": [
            {
              "name": "OPPO Reno8 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-4g.jpg"
          ]
        },
        {
          "name": "OPPO Reno8 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno-8.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno8 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-reno8-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno-8.jpg"
          ]
        },
        {
          "name": "OPPO Reno8 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg",
          "specs": {
            "display": "AMOLED, 1B colors, 120Hz, HDR10+, 500 nits (typ), 800 nits (HBM), 950 nits (peak), 6.7 inches, 1080 x 2412",
            "processor": "Mediatek Dimensity 8100 Max (5 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "183.0",
            "dimensions": "161.2 x 74.2 x 7.3 mm (6.35 x 2.92 x 0.29 in)",
            "colors": "Glazed Green, Glazed Black, House of the Dragon"
          },
          "variants": [
            {
              "name": "OPPO Reno8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno8 Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno8 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno8 Pro 5G House of the Dragon",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno8 Pro 5G House of the Dragon 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G House of the Dragon 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G House of the Dragon 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Pro 5G House of the Dragon 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno8 Z 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-z-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno8 Z 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Z 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Z 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno8 Z 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno8-z-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno9",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 13, ColorOS 13",
            "weight": "174 g (6.14 oz)",
            "dimensions": "162.3 x 74.2 x 7.2 mm (6.39 x 2.92 x 0.28 in)",
            "colors": "Black, Gold, Pink gradient, Red"
          },
          "variants": [
            {
              "name": "OPPO Reno9 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno9 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9.jpg"
          ]
        },
        {
          "name": "OPPO Reno9 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9-pro.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Mediatek Dimensity 8100 Max (5 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 13, ColorOS 13",
            "weight": "174 g (6.14 oz)",
            "dimensions": "162.3 x 74.2 x 7.2 mm (6.39 x 2.92 x 0.28 in)",
            "colors": "Black, Gold, Pink gradient"
          },
          "variants": [
            {
              "name": "OPPO Reno9 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno9 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno9 Pro+",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9-pro-plus.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM8475 Snapdragon 8+ Gen 1 (4 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4700 mAh",
            "os": "Android 13, ColorOS 13",
            "weight": "192 g (6.77 oz)",
            "dimensions": "161.5 x 73.6 x 8 mm (6.36 x 2.90 x 0.31 in)",
            "colors": "Black, Gold, Mint"
          },
          "variants": [
            {
              "name": "OPPO Reno9 Pro+ 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno9 Pro+ 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno9-pro-plus.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 F",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno5-F.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.1 x 73.2 x 7.8 mm (6.30 x 2.88 x 0.31 in)",
            "colors": "Fluid Black, Fantastic Purple"
          },
          "variants": [
            {
              "name": "OPPO Reno5 F 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno5-f/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno5-F.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 Lite",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/OppoReno5Lite.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.1 x 73.2 x 7.8 mm (6.30 x 2.88 x 0.31 in)",
            "colors": "Fluid Black, Fantastic Purple"
          },
          "variants": [
            {
              "name": "OPPO Reno5 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno5 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno5-lite/",
            "https://www.gsmarena.com.bd/images/products/OppoReno5Lite.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 Marvel Edition",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno5 Marvel Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Marvel Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Marvel Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Marvel Edition 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno5A",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno5A 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5A 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5A 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5A 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno5K",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM7225 Snapdragon 750G 5G (8 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4300 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "172 g or 180 g (6.07 oz)",
            "dimensions": "159.1 x 73.4 x 7.9 mm (6.26 x 2.89 x 0.31 in)",
            "colors": "Moonlight Black, Starry Dream, Blue Breeze"
          },
          "variants": [
            {
              "name": "OPPO Reno5K 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno5K 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Reno5Z",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 800U (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "173 g (6.10 oz)",
            "dimensions": "160.1 x 73.4 x 7.8 mm (6.30 x 2.89 x 0.31 in)",
            "colors": "Fluid Black, Cosmo Blue"
          },
          "variants": [
            {
              "name": "OPPO Reno5Z 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Reno6 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-5g.jpg",
          "specs": {
            "display": "AMOLED, 90Hz, 430 nits (typ), 600 nits (HBM), 750 nits (peak), 6.43 inches, 1080 x 2400",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "182.0",
            "dimensions": "156.8 x 72.1 x 7.6 mm (6.17 x 2.84 x 0.30 in)",
            "colors": "Stellar Black, Aurora, Blue, Purple"
          },
          "variants": [
            {
              "name": "OPPO Reno6 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno6 CPH2235",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno6 CPH2235 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 CPH2235 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 CPH2235 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 CPH2235 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno6 Pro 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-pro-5g.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Mediatek Dimensity 1200 (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "177 g (6.24 oz)",
            "dimensions": "160 x 73.1 x 7.6 mm (6.30 x 2.88 x 0.30 in)",
            "colors": "Black, Blue, Aurora, Majestic Gold, Diwali Edition"
          },
          "variants": [
            {
              "name": "OPPO Reno6 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno6 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno6-pro-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno6 Pro 5G CPH2247",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno6 Pro 5G CPH2247 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro 5G CPH2247 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro 5G CPH2247 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro 5G CPH2247 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno6 Pro+ 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8250-AC Snapdragon 870 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "188 g (6.63 oz)",
            "dimensions": "160.8 x 72.5 x 8 mm (6.33 x 2.85 x 0.31 in)",
            "colors": "Arctic Blue, Lunar Grey"
          },
          "variants": [
            {
              "name": "OPPO Reno6 Pro+ 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno6 Pro+ 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Reno6 Pro+ 5G Detective Conan",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno6 Pro+ 5G Detective Conan 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro+ 5G Detective Conan 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro+ 5G Detective Conan 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Pro+ 5G Detective Conan 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno6 Z 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno6 Z 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Z 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Z 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno6 Z 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7.jpg",
          "specs": {
            "display": "AMOLED, 90Hz, 430 nits (typ), 600 nits (HBM), 800 nits (peak), 6.43 inches, 1080 x 2400",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "175.0",
            "dimensions": "159.9 x 73.2 x 7.5 mm (6.30 x 2.88 x 0.30 in)",
            "colors": "Cosmic Black, Sunset Orange"
          },
          "variants": [
            {
              "name": "OPPO Reno7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno7.jpg"
          ]
        },
        {
          "name": "OPPO Reno7 New Year Edition",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 New Year Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 New Year Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 New Year Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 New Year Edition 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7 Pro League of Legends",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno7 Pro League of Legends 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro League of Legends 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro League of Legends 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno7 Pro League of Legends 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno7 SE 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/OppoReno7SE-5G.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 900 (6 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, ColorOS 12",
            "weight": "171 g (6.03 oz)",
            "dimensions": "160.2 x 73.2 x 7.5 mm (6.31 x 2.88 x 0.30 in)",
            "colors": "Black, Blue, Gold"
          },
          "variants": [
            {
              "name": "OPPO Reno7 SE 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno7 SE 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno7-se-5g/",
            "https://www.gsmarena.com.bd/images/products/OppoReno7SE-5G.jpg"
          ]
        },
        {
          "name": "OPPO Reno3 A",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno3 A 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 A 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 A 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 A 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno3 CPH2043",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno3 CPH2043 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 CPH2043 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 CPH2043 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 CPH2043 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno3 Pro CPH2009",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno3 Pro CPH2009 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2009 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2009 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2009 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno3 Pro CPH2035",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno3 Pro CPH2035 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2035 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2035 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Pro CPH2035 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno3 Vitality Edition",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno3 Vitality Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Vitality Edition 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Vitality Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno3 Vitality Edition 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4.jpg",
          "specs": {
            "display": "6.4 inches, 98.9 cm, 1080 x 2400 pixels, 20:9 ratio (~411 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4015 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "165 g (5.82 oz)",
            "dimensions": "160.3 x 73.9 x 7.7 mm (6.31 x 2.91 x 0.30 in)",
            "colors": "Galactic Blue, Space Black"
          },
          "variants": [
            {
              "name": "OPPO Reno4 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4.jpg"
          ]
        },
        {
          "name": "OPPO Reno4 CPH2113",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno4 CPH2113 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 CPH2113 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 CPH2113 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 CPH2113 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno4 F",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "164 g (5.78 oz)",
            "dimensions": "160.1 x 73.8 x 7.5 mm (6.30 x 2.91 x 0.30 in)",
            "colors": "Matte Black, Metallic White"
          },
          "variants": [
            {
              "name": "OPPO Reno4 F 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Reno4 Lite",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4-lite.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4015 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "164 g (5.78 oz)",
            "dimensions": "160.1 x 73.7 x 7.4 mm (6.30 x 2.90 x 0.29 in)",
            "colors": "Magic Blue, Matte Black"
          },
          "variants": [
            {
              "name": "OPPO Reno4 Lite 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4-lite.jpg"
          ]
        },
        {
          "name": "OPPO Reno4 Mo Salah",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno4 Mo Salah 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Mo Salah 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Mo Salah 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Mo Salah 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno4 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4-pro.jpg",
          "specs": {
            "display": "6.5 inches, 103.5 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "161 g (5.68 oz)",
            "dimensions": "160.2 x 73.2 x 7.7 mm (6.31 x 2.88 x 0.30 in)",
            "colors": "Starry Night, Silky White"
          },
          "variants": [
            {
              "name": "OPPO Reno4 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno4 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno4-pro.jpg"
          ]
        },
        {
          "name": "OPPO Reno4 Pro CPH2089",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno4 Pro CPH2089 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2089 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2089 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2089 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno4 Pro CPH2109",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno4 Pro CPH2109 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2109 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2109 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno4 Pro CPH2109 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno5 4G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-Reno5-4G.jpg",
          "specs": {
            "display": "6.4 inches, 98.9 cm, 1080 x 2400 pixels, 20:9 ratio (~411 ppi density)",
            "processor": "Qualcomm SM7125 Snapdragon 720G (8 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "171 g (6.03 oz)",
            "dimensions": "159.1 x 73.3 x 7.7 mm (6.26 x 2.89 x 0.30 in)",
            "colors": "Galactic Silver (Fantasy Silver), Starlight Black (Starry Black)"
          },
          "variants": [
            {
              "name": "OPPO Reno5 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-reno5-4g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-Reno5-4G.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-5g.jpg",
          "specs": {
            "display": "AMOLED, 90Hz, 430 nits (typ), 600 nits (HDR), 750 nits (peak), 6.43 inches, 1080 x 2400",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4300",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "172.0",
            "dimensions": "159.1 x 73.4 x 7.9 mm (6.26 x 2.89 x 0.31 in)",
            "colors": "Galactic Silver, Azure Blue, Starry Black"
          },
          "variants": [
            {
              "name": "OPPO Reno5 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 Pro 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-pro-5g-.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Mediatek Dimensity 1000+ (7 nm)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4350 mAh",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "173 g (6.10 oz)",
            "dimensions": "159.7 x 73.2 x 7.6 mm (6.29 x 2.88 x 0.30 in)",
            "colors": "Astral Blue, Starry Black, Starry Dream, Star Wish Red"
          },
          "variants": [
            {
              "name": "OPPO Reno5 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno5 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-pro-5g-.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 Pro+ 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-pro-plus-5g.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "184 g (6.49 oz)",
            "dimensions": "159.9 x 72.5 x 8 mm (6.30 x 2.85 x 0.31 in)",
            "colors": "Galactic Silver, Starlight Black"
          },
          "variants": [
            {
              "name": "OPPO Reno5 Pro+ 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno5 Pro+ 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno5-pro-plus-5g.jpg"
          ]
        },
        {
          "name": "OPPO Reno5 Pro+ Artist",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Reno5 Pro+ Artist 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Pro+ Artist 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Pro+ Artist 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno5 Pro+ Artist 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3765 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, ColorOS 7.0",
            "weight": "185 g (6.53 oz)",
            "dimensions": "156.6 x 74.3 x 9 mm (6.17 x 2.93 x 0.35 in)",
            "colors": "Ocean Green, Jet Black, Nebula Purple, Pink Mist, Coral Orange, Inspiration Edition"
          },
          "variants": [
            {
              "name": "OPPO Reno 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno.jpg"
          ]
        },
        {
          "name": "OPPO Reno 10x Zoom",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg",
          "specs": {
            "display": "6.6 inches, 108.6 cm, 1080 x 2340 pixels, 19.5:9 ratio (~387 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4065 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, ColorOS 11",
            "weight": "210 g (7.41 oz)",
            "dimensions": "162 x 77.2 x 9.3 mm (6.38 x 3.04 x 0.37 in)",
            "colors": "Ocean Green, Jet Black, Mist Pink, Ocean Blue"
          },
          "variants": [
            {
              "name": "OPPO Reno 10x Zoom 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 10x Zoom 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 10x Zoom 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno 10x Zoom 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-10x-zoom.jpg"
          ]
        },
        {
          "name": "OPPO Reno 10x Zoom 12 GB RAM Special Edition",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO Reno 10x Zoom 12 GB RAM Special Edition 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno 10x Zoom 12 GB RAM Special Edition 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno 10x Zoom 12 GB RAM Special Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno 5G",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.6 inches, 108.6 cm, 1080 x 2340 pixels, 19.5:9 ratio (~387 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4065 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6",
            "weight": "215 g (7.58 oz)",
            "dimensions": "162 x 77.2 x 9.3 mm (6.38 x 3.04 x 0.37 in)",
            "colors": "Ocean Green, Jet Black"
          },
          "variants": [
            {
              "name": "OPPO Reno 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Reno A",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-a.jpg",
          "specs": {
            "display": "6.4 inches, 100.5 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3600 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6",
            "weight": "169.5 g (6.00 oz)",
            "dimensions": "158.4 x 75.4 x 7.8 mm (6.24 x 2.97 x 0.31 in)",
            "colors": "Blue, Black"
          },
          "variants": [
            {
              "name": "OPPO Reno A 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-a.jpg"
          ]
        },
        {
          "name": "OPPO Reno Z",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-z.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6779 Helio P90 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4035 mAh, non-removable",
            "os": "Android 9.0 (Pie), planned upgrade to Android 10, ColorOS 7.0",
            "weight": "186 g (6.56 oz)",
            "dimensions": "157.3 x 74.9 x 9.1 mm (6.19 x 2.95 x 0.36 in)",
            "colors": "Jet Black, Aurora Purple - Europe"
          },
          "variants": [
            {
              "name": "OPPO Reno Z 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno Z 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno Z 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno Z 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-z.jpg"
          ]
        },
        {
          "name": "OPPO Reno3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno3-.jpg",
          "specs": {
            "display": "6.4 inches, 98.9 cm, 1080 x 2400 pixels, 20:9 ratio (~411 ppi density)",
            "processor": "Mediatek MT6779 Helio P90 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 10, ColorOS 7",
            "weight": "170 g (6.00 oz)",
            "dimensions": "160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)",
            "colors": "Midnight Black, Aurora Blue, Sky White"
          },
          "variants": [
            {
              "name": "OPPO Reno3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno3-.jpg"
          ]
        },
        {
          "name": "OPPO Reno3 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno3-pro-.jpg",
          "specs": {
            "display": "6.4 inches, 101.8 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 10, ColorOS 7",
            "weight": "175 g (6.17 oz)",
            "dimensions": "158.8 x 73.4 x 8.1 mm (6.25 x 2.89 x 0.32 in)",
            "colors": "Auroral Blue, Midnight Black, Sky White"
          },
          "variants": [
            {
              "name": "OPPO Reno3 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno3 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno3 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno3-pro-.jpg"
          ]
        },
        {
          "name": "OPPO RX17 Neo",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-rx17-neo.jpg",
          "specs": {
            "display": "6.41 inches, 100.9 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3600 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "156 g (5.50 oz)",
            "dimensions": "158.3 x 75.5 x 7.4 mm (6.23 x 2.97 x 0.29 in)",
            "colors": "Mocha Red, Astral Blue"
          },
          "variants": [
            {
              "name": "OPPO RX17 Neo 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-rx17-neo/",
            "https://www.gsmarena.com.bd/images/products/oppo-rx17-neo.jpg"
          ]
        },
        {
          "name": "OPPO RX17 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-rx17-pro.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3700 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, ColorOS 7.0",
            "weight": "183 g (6.46 oz)",
            "dimensions": "157.6 x 74.6 x 7.9 mm (6.20 x 2.94 x 0.31 in)",
            "colors": "Radiant Mist, Emerald Green"
          },
          "variants": [
            {
              "name": "OPPO RX17 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO RX17 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-rx17-pro/",
            "https://www.gsmarena.com.bd/images/products/oppo-rx17-pro.jpg"
          ]
        }
      ]
    },
    {
      "name": "A Series",
      "models": [
        {
          "name": "OPPO A6 5G CPH2831",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6 5G CPH2831 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 5G CPH2831 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 5G CPH2831 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6c",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6c.jpg",
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
              "name": "OPPO A6c 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6c 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6c 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6c.jpg"
          ]
        },
        {
          "name": "OPPO A6c CPH2895",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6c CPH2895 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6c CPH2895 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6c CPH2895 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6i+ 5G",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6i+ 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6i+ 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6i+ 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6k",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6k.jpg",
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
              "name": "OPPO A6k 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6k 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6k 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6k.jpg"
          ]
        },
        {
          "name": "OPPO A6k China",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6k China 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6k China 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6k China 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6s",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6s.jpg",
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
              "name": "OPPO A6s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6s.jpg"
          ]
        },
        {
          "name": "OPPO A6s 5G",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6s 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6s 5G India",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6s 5G India 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 5G India 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s 5G India 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6s Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6s-pro.jpg",
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
              "name": "OPPO A6s Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6s Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6s-pro.jpg"
          ]
        },
        {
          "name": "OPPO A6t",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-.jpg",
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
              "name": "OPPO A6t 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-.jpg"
          ]
        },
        {
          "name": "OPPO A6t 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-5g.jpg",
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
              "name": "OPPO A6t 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-5g.jpg"
          ]
        },
        {
          "name": "OPPO A6t Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-pro.jpg",
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
              "name": "OPPO A6t Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6t-pro.jpg"
          ]
        },
        {
          "name": "OPPO A6t Pro 5G",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6t Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6t Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6v",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6v 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6v 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6v 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6x 5G India",
          "aliases": [],
          "releaseYear": 2026,
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
              "name": "OPPO A6x 5G India 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 5G India 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 5G India 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-5g.jpg",
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
              "name": "OPPO A5 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-5g.jpg"
          ]
        },
        {
          "name": "OPPO A5 5G CPH2751",
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
              "name": "OPPO A5 5G CPH2751 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 5G CPH2751 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 5G CPH2751 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5 CPH2727",
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
              "name": "OPPO A5 CPH2727 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 CPH2727 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 CPH2727 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5800 mAh",
            "os": "Android 15, ColorOS 15",
            "weight": "194 g (6.84 oz)",
            "dimensions": "164.8 x 75.5 x 7.8 mm (6.49 x 2.97 x 0.31 in)",
            "colors": "Flower Pink, Mocha Brown (Chocolate Mocha)"
          },
          "variants": [
            {
              "name": "OPPO A5 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-pro.jpg"
          ]
        },
        {
          "name": "OPPO A5 Pro 5G",
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
              "name": "OPPO A5 Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5i",
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
              "name": "OPPO A5i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5i Pro",
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
              "name": "OPPO A5i Pro 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5i Pro 5G",
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
              "name": "OPPO A5i Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5i Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5m",
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
              "name": "OPPO A5m 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5m 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5m 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5x",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5x.jpg",
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
              "name": "OPPO A5x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5x.jpg"
          ]
        },
        {
          "name": "OPPO A5x 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A5x-5G.jpg",
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
              "name": "OPPO A5x 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a5x-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A5x-5G.jpg"
          ]
        },
        {
          "name": "OPPO A6",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6.jpg",
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
              "name": "OPPO A6 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6.jpg"
          ]
        },
        {
          "name": "OPPO A6 5G",
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
              "name": "OPPO A6 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6 GT",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-gt.jpg",
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
              "name": "OPPO A6 GT 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 GT 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 GT 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-gt.jpg"
          ]
        },
        {
          "name": "OPPO A6 Max",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-max-.jpg",
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
              "name": "OPPO A6 Max 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Max 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Max 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-max-.jpg"
          ]
        },
        {
          "name": "OPPO A6 Pro 4G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-pro-4g.jpg",
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
              "name": "OPPO A6 Pro 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6-pro-4g.jpg"
          ]
        },
        {
          "name": "OPPO A6 Pro 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A6-Pro-5G.jpg",
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
              "name": "OPPO A6 Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a6-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A6-Pro-5G.jpg"
          ]
        },
        {
          "name": "OPPO A6 Pro 5G CPH2781",
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
              "name": "OPPO A6 Pro 5G CPH2781 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 5G CPH2781 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6 Pro 5G CPH2781 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6i 5G",
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
              "name": "OPPO A6i 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6i 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6i 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A6x",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6x.jpg",
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
              "name": "OPPO A6x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6x.jpg"
          ]
        },
        {
          "name": "OPPO A6x 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6x-5g.jpg",
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
              "name": "OPPO A6x 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A6x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a6x-5g.jpg"
          ]
        },
        {
          "name": "OPPO A1i 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A1i 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1i 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1i 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1i 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A1s 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A1s 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1s 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1s 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1s 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "187 g (6.60 oz)",
            "dimensions": "165.7 x 76 x 7.7 mm (6.52 x 2.99 x 0.30 in)",
            "colors": "Ocean Blue, Nebula Red"
          },
          "variants": [
            {
              "name": "OPPO A3 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3.jpg"
          ]
        },
        {
          "name": "OPPO A3 4G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A3-Nebula-Red.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM-6115 Snapdragon 6s 4G Gen1 (11 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165.8 x 76.1 x 7.7 mm (6.53 x 3.00 x 0.30 in)",
            "colors": "Sparkle Black, Starry Purple, Starlight White"
          },
          "variants": [
            {
              "name": "OPPO A3 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 4G 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 4G 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a3-4g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A3-Nebula-Red.jpg"
          ]
        },
        {
          "name": "OPPO A3 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3 5G India",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3 5G India 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G India 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G India 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 5G India 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3 Energy",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3 Energy 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Energy 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Energy 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Energy 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3-pro.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, upgradable to Android 15, ColorOS 15",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165.8 x 76.1 x 7.7 mm (6.53 x 3.00 x 0.30 in)",
            "colors": "Moonlit Purple, Starry Black"
          },
          "variants": [
            {
              "name": "OPPO A3 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3-pro.jpg"
          ]
        },
        {
          "name": "OPPO A3 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3 Pro 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Pro 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3i",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3i 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3i 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3x",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3x.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "187 g (6.60 oz)",
            "dimensions": "165.7 x 76 x 7.7 mm (6.52 x 2.99 x 0.30 in)",
            "colors": "Sparkle Black, Starlight White, Starry Purple"
          },
          "variants": [
            {
              "name": "OPPO A3x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3x.jpg"
          ]
        },
        {
          "name": "OPPO A3x 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3x 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A3x CPH2681",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A3x CPH2681 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x CPH2681 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x CPH2681 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A3x CPH2681 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A40",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A40 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A40M",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A40M 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40M 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40M 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A40M 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A60",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a60.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, upgradable to Android 15, ColorOS 15",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165.7 x 76 x 7.7 mm (6.52 x 2.99 x 0.30 in)",
            "colors": "Purple, Blue"
          },
          "variants": [
            {
              "name": "OPPO A60 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A60 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a60.jpg"
          ]
        },
        {
          "name": "OPPO A60 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A60 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A60 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A60 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A60 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A79 5G CPH2557",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A79 5G CPH2557 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G CPH2557 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G CPH2557 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G CPH2557 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A80 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A80-5G-Moonlit-Purple.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A80 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A80 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A80 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A80 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a80-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A80-5G-Moonlit-Purple.jpg"
          ]
        },
        {
          "name": "OPPO A1 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A1 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1-5g.jpg"
          ]
        },
        {
          "name": "OPPO A1 Energy Edition",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A1 Energy Edition 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 Energy Edition 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 Energy Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1 Energy Edition 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A18",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A18.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6769 Helio G85 (12 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, upgradable to Android 15, ColorOS 15",
            "weight": "188 g (6.63 oz)",
            "dimensions": "163.7 x 75 x 8.2 mm (6.44 x 2.95 x 0.32 in)",
            "colors": "Glowing Black, Glowing Blue"
          },
          "variants": [
            {
              "name": "OPPO A18 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A18 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a18/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A18.jpg"
          ]
        },
        {
          "name": "OPPO A1x 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A1x 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1x 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A1x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A2 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A2 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A2m",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A2m 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2m 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2m 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A2m 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A2x",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a2x.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, ColorOS 13.1",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.8 x 75.1 x 8.1 mm (6.45 x 2.96 x 0.32 in)",
            "colors": "Black, Gold, Purple"
          },
          "variants": [
            {
              "name": "OPPO A2x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A2x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A2x 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a2x.jpg"
          ]
        },
        {
          "name": "OPPO A56s",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a56s.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.8 x 75.1 x 8 mm (6.45 x 2.96 x 0.31 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "OPPO A56s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A56s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a56s.jpg"
          ]
        },
        {
          "name": "OPPO A59 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a59-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A59 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A59 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A59 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A59 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a59-5g.jpg"
          ]
        },
        {
          "name": "OPPO A78 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A78 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A78 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A78 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A78 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A79 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a79-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A79 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A79 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a79-5g.jpg"
          ]
        },
        {
          "name": "OPPO A98 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a98-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO A98 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A98 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A98 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A98 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a98-5g.jpg"
          ]
        },
        {
          "name": "OPPO A1 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1-pro.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4800 mAh",
            "os": "Android 13, ColorOS 13",
            "weight": "171 g (6.03 oz)",
            "dimensions": "162.3 x 74.3 x 7.7 mm (6.39 x 2.93 x 0.30 in)",
            "colors": "Black, Blue, Gold"
          },
          "variants": [
            {
              "name": "OPPO A1 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A1 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A1 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1-pro.jpg"
          ]
        },
        {
          "name": "OPPO A16e",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A16e.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762D Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "164 x 75.4 x 7.9 mm (6.46 x 2.97 x 0.31 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "OPPO A16e 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A16e 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a16e/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A16e.jpg"
          ]
        },
        {
          "name": "OPPO A17",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a17.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765 Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164.2 x 75.6 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Midnight Black, Lake Blue, Sunlight Orange"
          },
          "variants": [
            {
              "name": "OPPO A17 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A17 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a17.jpg"
          ]
        },
        {
          "name": "OPPO A17k",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a17k.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765 Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164.2 x 75.6 x 8.3 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Navy Blue, Gold"
          },
          "variants": [
            {
              "name": "OPPO A17k 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a17k.jpg"
          ]
        },
        {
          "name": "OPPO A36",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a36.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "185 g (6.53 oz)",
            "dimensions": "164.4 x 75.7 x 8.4 mm (6.47 x 2.98 x 0.33 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "OPPO A36 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A36 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A36 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a36.jpg"
          ]
        },
        {
          "name": "OPPO A55s PEMM00",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A55s PEMM00 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55s PEMM00 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55s PEMM00 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55s PEMM00 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A57 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a57-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A57 5G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A57 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A57 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A57 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a57-5g.jpg"
          ]
        },
        {
          "name": "OPPO A57e",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A57e.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "187 g (6.60 oz)",
            "dimensions": "163.7 x 75 x 8 mm (6.44 x 2.95 x 0.31 in)",
            "colors": "Glowing Black, Glowing Green"
          },
          "variants": [
            {
              "name": "OPPO A57e 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a57e/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A57e.jpg"
          ]
        },
        {
          "name": "OPPO A57s",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a57s.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "187 g (6.60 oz)",
            "dimensions": "163.8 x 75 x 8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Starry Black, Sky Blue"
          },
          "variants": [
            {
              "name": "OPPO A57s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A57s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a57s.jpg"
          ]
        },
        {
          "name": "OPPO A58 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A58-Violet.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A58 5G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a58-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A58-Violet.jpg"
          ]
        },
        {
          "name": "OPPO A58x 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A58x 5G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58x 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58x 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A58x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A76",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A76.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164.4 x 75.7 x 8.4 mm (6.47 x 2.98 x 0.33 in)",
            "colors": "Glowing Black, Glowing Blue"
          },
          "variants": [
            {
              "name": "OPPO A76 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A76 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a76/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A76.jpg"
          ]
        },
        {
          "name": "OPPO A77 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a77-4g.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "187 g / 189 g (6.60 oz)",
            "dimensions": "163.8 x 75 x 8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Sunset Orange, Sky Blue"
          },
          "variants": [
            {
              "name": "OPPO A77 4G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A77 4G 3GB 128GB",
              "ram": "3GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A77 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a77-4g.jpg"
          ]
        },
        {
          "name": "OPPO A77s",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a77s.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "187 g / 190 g (6.60 oz)",
            "dimensions": "163.8 x 75 x 8 mm (6.45 x 2.95 x 0.31 in)",
            "colors": "Sunset Orange, Starry Black"
          },
          "variants": [
            {
              "name": "OPPO A77s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a77s.jpg"
          ]
        },
        {
          "name": "OPPO A96",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a96.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 480 nits (typ), 600 nits (HBM), 6.59 inches, 1080 x 2412",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, ColorOS 11.1",
            "weight": "191.0",
            "dimensions": "164.4 x 75.7 x 8.4 mm (6.47 x 2.98 x 0.33 in)",
            "colors": "Starry Black, Sunset Blue"
          },
          "variants": [
            {
              "name": "OPPO A96 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a96.jpg"
          ]
        },
        {
          "name": "OPPO A96 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A96 4G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A96 4G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A96 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A96 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A97 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a97-5g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A97 5G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A97 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A97 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A97 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a97-5g.jpg"
          ]
        },
        {
          "name": "OPPO A11s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a11s.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.9 x 75.1 x 8.4 mm (6.45 x 2.96 x 0.33 in)",
            "colors": "Gray, White"
          },
          "variants": [
            {
              "name": "OPPO A11s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A11s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A11s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a11s.jpg"
          ]
        },
        {
          "name": "OPPO A16",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a16.jpg",
          "specs": {
            "display": "IPS LCD, 480 nits (typ), 6.52 inches, 720 x 1600",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, upgradable to Android 12, ColorOS 12",
            "weight": "190.0",
            "dimensions": "163.8 x 75.6 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Pearl Blue, Space Silver, Crystal Black"
          },
          "variants": [
            {
              "name": "OPPO A16 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a16.jpg"
          ]
        },
        {
          "name": "OPPO A16k",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a16k.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "164 x 75.4 x 7.9 mm (6.46 x 2.97 x 0.31 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "OPPO A16k 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A16k 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A16k 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A16k 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a16k.jpg"
          ]
        },
        {
          "name": "OPPO A16s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A16s.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "190 g (6.70 oz)",
            "dimensions": "163.8 x 75.6 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Pearl Blue, Crystal Black"
          },
          "variants": [
            {
              "name": "OPPO A16s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a16s/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A16s.jpg"
          ]
        },
        {
          "name": "OPPO A35",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "177 g (6.24 oz)",
            "dimensions": "164 x 75.4 x 7.9 mm (6.46 x 2.97 x 0.31 in)",
            "colors": "Black, White, Blue"
          },
          "variants": [
            {
              "name": "OPPO A35 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A35 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A53s 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a53s-5g.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "189.6 g (6.70 oz)",
            "dimensions": "164 x 75.7 x 8.4 mm (6.46 x 2.98 x 0.33 in)",
            "colors": "Crystal Blue, Ink Black"
          },
          "variants": [
            {
              "name": "OPPO A53s 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A53s 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a53s-5g.jpg"
          ]
        },
        {
          "name": "OPPO A54",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a54.jpg",
          "specs": {
            "display": "6.51 inches, 102.3 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "192 g (6.77 oz)",
            "dimensions": "163.6 x 75.7 x 8.4 mm (6.44 x 2.98 x 0.33 in)",
            "colors": "Crystal Black, Starry Blue"
          },
          "variants": [
            {
              "name": "OPPO A54 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A54 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A54 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a54.jpg"
          ]
        },
        {
          "name": "OPPO A54 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a54-5g.jpg",
          "specs": {
            "display": "IPS LCD, 90Hz, 480 nits (typ), 6.5 inches, 1080 x 2400",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, ColorOS 11.1",
            "weight": "190.0",
            "dimensions": "162.9 x 74.7 x 8.4 mm (6.41 x 2.94 x 0.33 in)",
            "colors": "Fluid Black, Fantastic Purple, Space Silver"
          },
          "variants": [
            {
              "name": "OPPO A54 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a54-5g.jpg"
          ]
        },
        {
          "name": "OPPO A54 5G OPG02",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A54 5G OPG02 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A54 5G OPG02 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A54 5G OPG02 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A54 5G OPG02 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A54s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/OppoA54s.jpg",
          "specs": {
            "display": "IPS LCD, 480 nits (typ), 6.52 inches, 720 x 1600",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, ColorOS 11.1",
            "weight": "190.0",
            "dimensions": "163.8 x 75.6 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Pearl Blue, Space Silver, Crystal Black"
          },
          "variants": [
            {
              "name": "OPPO A54s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a54s/",
            "https://www.gsmarena.com.bd/images/products/OppoA54s.jpg"
          ]
        },
        {
          "name": "OPPO A55",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55.jpg",
          "specs": {
            "display": "IPS LCD, 480 nits (typ), 550 nits (peak), 6.51 inches, 720 x 1600",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 11, ColorOS 11.1",
            "weight": "193.0",
            "dimensions": "163.6 x 75.7 x 8.4 mm (6.44 x 2.98 x 0.33 in)",
            "colors": "Rainbow Blue, Starry Black, Green"
          },
          "variants": [
            {
              "name": "OPPO A55 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55.jpg"
          ]
        },
        {
          "name": "OPPO A55 4G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55-4g-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A55 4G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55 4G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A55 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55-4g-.jpg"
          ]
        },
        {
          "name": "OPPO A55s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55s-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.9 x 75.7 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Black, Blue, Gold"
          },
          "variants": [
            {
              "name": "OPPO A55s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A55s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a55s-5g.jpg"
          ]
        },
        {
          "name": "OPPO A56 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a56-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "189.5 g (6.70 oz)",
            "dimensions": "163.8 x 75.6 x 8.4 mm (6.45 x 2.98 x 0.33 in)",
            "colors": "Black, Blue, Violet"
          },
          "variants": [
            {
              "name": "OPPO A56 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A56 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a56-5g.jpg"
          ]
        },
        {
          "name": "OPPO A74",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.3 x 73.8 x 8 mm (6.31 x 2.91 x 0.31 in)",
            "colors": "Prism Black, Midnight Blue"
          },
          "variants": [
            {
              "name": "OPPO A74 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A74 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A74 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A74 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a74-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "190 g (6.70 oz)",
            "dimensions": "162.9 x 74.7 x 8.4 mm (6.41 x 2.94 x 0.33 in)",
            "colors": "Fluid Black, Space Silver"
          },
          "variants": [
            {
              "name": "OPPO A74 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A74 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A74 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a74-5g.jpg"
          ]
        },
        {
          "name": "OPPO A74 5G CPH2263",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A74 5G CPH2263 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A74 5G CPH2263 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A74 5G CPH2263 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A74 5G CPH2263 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A93 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Qualcomm SM4350 Snapdragon 480 5G (8 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "188 g (6.63 oz)",
            "dimensions": "162.9 x 74.7 x 8.4 mm (6.41 x 2.94 x 0.33 in)",
            "colors": "Black, White, Aurora"
          },
          "variants": [
            {
              "name": "OPPO A93 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A93 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93-5g.jpg"
          ]
        },
        {
          "name": "OPPO A93s 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93s-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 700 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "188 g (6.63 oz)",
            "dimensions": "162.9 x 74.7 x 8.4 mm (6.41 x 2.94 x 0.33 in)",
            "colors": "Black, Blue, White"
          },
          "variants": [
            {
              "name": "OPPO A93s 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A93s 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93s-5g.jpg"
          ]
        },
        {
          "name": "OPPO A94",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.1 x 73.2 x 7.8 mm (6.30 x 2.88 x 0.31 in)",
            "colors": "Fluid Black, Fantastic Purple"
          },
          "variants": [
            {
              "name": "OPPO A94 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A94 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a94-5g.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek Dimensity 800U (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "173 g (6.10 oz)",
            "dimensions": "160.1 x 73.4 x 7.8 mm (6.30 x 2.89 x 0.31 in)",
            "colors": "Fluid Black, Space Silver, Cosmo Blue"
          },
          "variants": [
            {
              "name": "OPPO A94 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a94-5g.jpg"
          ]
        },
        {
          "name": "OPPO A95",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a95.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.3 x 73.8 x 8 mm (6.31 x 2.91 x 0.31 in)",
            "colors": "Glowing Starry Black, Glowing Rainbow Silver"
          },
          "variants": [
            {
              "name": "OPPO A95 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A95 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a95.jpg"
          ]
        },
        {
          "name": "OPPO A95 4G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-A95-4G.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A95 4G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A95 4G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A95 4G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A95 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a95-4g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-A95-4G.jpg"
          ]
        },
        {
          "name": "OPPO A11k",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a11k.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 9.0 (Pie), ColorOS 6.1",
            "weight": "165 g (5.82 oz)",
            "dimensions": "155.9 x 75.5 x 8.3 mm (6.14 x 2.97 x 0.33 in)",
            "colors": "Flowing Silver, Deep Blue"
          },
          "variants": [
            {
              "name": "OPPO A11k 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a11k.jpg"
          ]
        },
        {
          "name": "OPPO A12",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 9.0 (Pie), ColorOS 6.1",
            "weight": "165 g (5.82 oz)",
            "dimensions": "155.9 x 75.5 x 8.3 mm (6.14 x 2.97 x 0.33 in)",
            "colors": "Blue, Black"
          },
          "variants": [
            {
              "name": "OPPO A12 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A12 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12.jpg"
          ]
        },
        {
          "name": "OPPO A12e",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12e.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4230 mAh",
            "os": "Android 8.1 (Oreo), ColorOS 5.1",
            "weight": "168 g (5.93 oz)",
            "dimensions": "156.2 x 75.6 x 8.2 mm (6.15 x 2.98 x 0.32 in)",
            "colors": "Red, Dark Purple"
          },
          "variants": [
            {
              "name": "OPPO A12e 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12e.jpg"
          ]
        },
        {
          "name": "OPPO A12s",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12s.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 9.0 (Pie), ColorOS 6.1",
            "weight": "165 g (5.82 oz)",
            "dimensions": "155.9 x 75.5 x 8.3 mm (6.14 x 2.97 x 0.33 in)",
            "colors": "Deep Blue, Flowing Silver"
          },
          "variants": [
            {
              "name": "OPPO A12s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a12s.jpg"
          ]
        },
        {
          "name": "OPPO A15",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a15.jpg",
          "specs": {
            "display": "IPS LCD, 480 nits (typ), 6.52 inches, 720 x 1600",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "4230",
            "os": "Android 10, ColorOS 7.2",
            "weight": "175.0",
            "dimensions": "164 x 75.4 x 7.9 mm (6.46 x 2.97 x 0.31 in)",
            "colors": "Dynamic Black, Mystery Blue"
          },
          "variants": [
            {
              "name": "OPPO A15 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a15.jpg"
          ]
        },
        {
          "name": "OPPO A15s",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a15s.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "177 g (6.24 oz)",
            "dimensions": "164 x 75.4 x 7.9 mm (6.46 x 2.97 x 0.31 in)",
            "colors": "Dynamic Black, Fancy White"
          },
          "variants": [
            {
              "name": "OPPO A15s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A15s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a15s.jpg"
          ]
        },
        {
          "name": "OPPO A31 2020",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-a31-2020.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A31 2020 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A31 2020 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A31 2020 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A31 2020 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.gsmarena.com.bd/pictures/oppo-a31-2020/",
            "https://www.gsmarena.com.bd/images/products/oppo-a31-2020.jpg"
          ]
        },
        {
          "name": "OPPO A52",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a52.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Qualcomm SM6125 Snapdragon 665 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "192 g (6.77 oz)",
            "dimensions": "162 x 75.5 x 8.9 mm (6.38 x 2.97 x 0.35 in)",
            "colors": "Twilight Black, Stream White"
          },
          "variants": [
            {
              "name": "OPPO A52 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A52 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A52 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A52 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a52.jpg"
          ]
        },
        {
          "name": "OPPO A53",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-a53.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~70.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939v2 Snapdragon 616",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 3075 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "165 g",
            "dimensions": "153 x 77 x 7.4 mm (6.02 x 3.03 x 0.29 in)",
            "colors": "White/Gold"
          },
          "variants": [
            {
              "name": "OPPO A53 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A53 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A53 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A53 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-a53.jpg"
          ]
        },
        {
          "name": "OPPO A53 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a53-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4040 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "175 g (6.17 oz)",
            "dimensions": "162.2 x 75 x 7.9 mm (6.39 x 2.95 x 0.31 in)",
            "colors": "Black, Green, Purple"
          },
          "variants": [
            {
              "name": "OPPO A53 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A53 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A53 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a53-5g.jpg"
          ]
        },
        {
          "name": "OPPO A53s",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SM4250 Snapdragon 460 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "186 g (6.56 oz)",
            "dimensions": "163.9 x 75.1 x 8.4 mm (6.45 x 2.96 x 0.33 in)",
            "colors": "Electric Black, Fancy Blue"
          },
          "variants": [
            {
              "name": "OPPO A53s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A53s 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A72",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a72.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Qualcomm SM6125 Snapdragon 665 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "192 g (6.77 oz)",
            "dimensions": "162 x 75.5 x 8.9 mm (6.38 x 2.97 x 0.35 in)",
            "colors": "Twilight Black, Stream White, Sky Blue, Aurora Purple"
          },
          "variants": [
            {
              "name": "OPPO A72 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A72 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a72.jpg"
          ]
        },
        {
          "name": "OPPO A72 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a72-5g.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4040 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "175 g (6.17 oz)",
            "dimensions": "162.2 x 75 x 7.9 mm (6.39 x 2.95 x 0.31 in)",
            "colors": "Black, Purple, Neon"
          },
          "variants": [
            {
              "name": "OPPO A72 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A72 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A72 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a72-5g.jpg"
          ]
        },
        {
          "name": "OPPO A73 2020",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A73 2020 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A73 2020 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A73 2020 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A73 2020 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A73 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a73-5g-.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4040 mAh",
            "os": "Android 10, upgradable to Android 12, ColorOS 12",
            "weight": "177 g (6.24 oz)",
            "dimensions": "162.2 x 75 x 7.9 mm (6.39 x 2.95 x 0.31 in)",
            "colors": "Navy Black, Neon"
          },
          "variants": [
            {
              "name": "OPPO A73 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a73-5g-.jpg"
          ]
        },
        {
          "name": "OPPO A92",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a92-.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Qualcomm SM6125 Snapdragon 665 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "192 g (6.77 oz)",
            "dimensions": "162 x 75.5 x 8.9 mm (6.38 x 2.97 x 0.35 in)",
            "colors": "Twilight Black, Stream White, Aurora Purple"
          },
          "variants": [
            {
              "name": "OPPO A92 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A92 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a92-.jpg"
          ]
        },
        {
          "name": "OPPO A92s",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a92s.jpg",
          "specs": {
            "display": "6.57 inches, 104.2 cm, 1080 x 2400 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Mediatek Dimensity 800 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "184 g (6.49 oz)",
            "dimensions": "163.8 x 75.5 x 8.1 mm (6.45 x 2.97 x 0.32 in)",
            "colors": "Black, White, Pink"
          },
          "variants": [
            {
              "name": "OPPO A92s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A92s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A92s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a92s.jpg"
          ]
        },
        {
          "name": "OPPO A93",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "164 g (5.78 oz)",
            "dimensions": "160.1 x 73.8 x 7.5 mm (6.30 x 2.91 x 0.30 in)",
            "colors": "Matte Black, Metallic White"
          },
          "variants": [
            {
              "name": "OPPO A93 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a93.jpg"
          ]
        },
        {
          "name": "OPPO A11",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-a11.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6.0",
            "weight": "195 g (6.88 oz)",
            "dimensions": "163.6 x 75.6 x 9.1 mm (6.44 x 2.98 x 0.36 in)",
            "colors": "Purple, Lake Green, Cloud White"
          },
          "variants": [
            {
              "name": "OPPO A11 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A11 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A11 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A11 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-a11/",
            "https://www.gsmarena.com.bd/images/products/oppo-a11.jpg"
          ]
        },
        {
          "name": "OPPO A11x",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A11x 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A11x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A11x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A5 2020",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-2020.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A5 2020 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 2020 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A5 2020 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5-2020.jpg"
          ]
        },
        {
          "name": "OPPO A5s",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4230 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "170 g (6.00 oz)",
            "dimensions": "155.9 x 75.4 x 8.2 mm (6.14 x 2.97 x 0.32 in)",
            "colors": "Red, Black, Gold, Green"
          },
          "variants": [
            {
              "name": "OPPO A5s 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5s 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A7n",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7n.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4230 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "170 g (6.00 oz)",
            "dimensions": "155.9 x 75.4 x 8.2 mm (6.14 x 2.97 x 0.32 in)",
            "colors": "Green"
          },
          "variants": [
            {
              "name": "OPPO A7n 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7n.jpg"
          ]
        },
        {
          "name": "OPPO A8",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a8-.jpg",
          "specs": {
            "display": "6.5 inches, 102.8 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6765V/CB Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4230 mAh",
            "os": "Android 9.0 (Pie), ColorOS 6.1",
            "weight": "180 g (6.35 oz)",
            "dimensions": "163.9 x 75.5 x 8.3 mm (6.45 x 2.97 x 0.33 in)",
            "colors": "Green, Black"
          },
          "variants": [
            {
              "name": "OPPO A8 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a8-.jpg"
          ]
        },
        {
          "name": "OPPO A9",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a9.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 720 x 1600 pixels, 20:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, ColorOS 7.1",
            "weight": "195 g (6.88 oz)",
            "dimensions": "163.6 x 75.6 x 9.1 mm (6.44 x 2.98 x 0.36 in)",
            "colors": "Marine Green, Space Purple, Vanilla Mint"
          },
          "variants": [
            {
              "name": "OPPO A9 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A9 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a9.jpg"
          ]
        },
        {
          "name": "OPPO A9 2020",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a9-2020-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A9 2020 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A9 2020 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A9 2020 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a9-2020-.jpg"
          ]
        },
        {
          "name": "OPPO A91",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a91.jpg",
          "specs": {
            "display": "6.4 inches, 100.4 cm, 1080 x 2400 pixels, 20:9 ratio (~408 ppi density)",
            "processor": "Mediatek MT6771V Helio P70 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4025 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11, ColorOS 11",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)",
            "colors": "Lightening Black, Unicorn White, Blazing Blue, Red"
          },
          "variants": [
            {
              "name": "OPPO A91 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A91 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A91 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a91.jpg"
          ]
        },
        {
          "name": "OPPO A1",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1.jpg",
          "specs": {
            "display": "6.72 inches, 109.0 cm, 1080 x 2400 pixels, 20:9 ratio (~392 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, ColorOS 13.1",
            "weight": "191 g or 193 g (6.74 oz)",
            "dimensions": "165.6 x 76.1 x 8.2 mm (6.52 x 3.00 x 0.32 in)",
            "colors": "Black, Blue, Orange"
          },
          "variants": [
            {
              "name": "OPPO A1 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A1 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a1.jpg"
          ]
        },
        {
          "name": "OPPO A3s",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3s.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4230 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.1",
            "weight": "168 g (5.93 oz)",
            "dimensions": "156.2 x 75.6 x 8.2 mm (6.15 x 2.98 x 0.32 in)",
            "colors": "Red, Dark Purple"
          },
          "variants": [
            {
              "name": "OPPO A3s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A3s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a3s.jpg"
          ]
        },
        {
          "name": "OPPO A5",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM6450 Snapdragon 6 Gen 1 (4 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Si/C Li-Ion 6500 mAh",
            "os": "Android 15, ColorOS 15",
            "weight": "185 g or 189 g (6.53 oz)",
            "dimensions": "161.6 x 74.5 x 7.7 mm (6.36 x 2.93 x 0.30 in)",
            "colors": "Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "OPPO A5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A5 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a5.jpg"
          ]
        },
        {
          "name": "OPPO A7",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4230 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "168 g (5.93 oz)",
            "dimensions": "155.9 x 75.4 x 8.1 mm (6.14 x 2.97 x 0.32 in)",
            "colors": "Glazing Blue, Dazzling Gold, Rose Pink"
          },
          "variants": [
            {
              "name": "OPPO A7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A7 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A7 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7.jpg"
          ]
        },
        {
          "name": "OPPO A71 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a71-2018.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A71 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A71 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A71 2018 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a71-2018.jpg"
          ]
        },
        {
          "name": "OPPO A73s",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A73s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A73s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A73s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A7x",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7x-.jpg",
          "specs": {
            "display": "6.3 inches, 97.4 cm, 1080 x 2340 pixels, 19.5:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "169 g (5.96 oz)",
            "dimensions": "156.7 x 74 x 8 mm (6.17 x 2.91 x 0.31 in)",
            "colors": "Starry Purple, Ice Flame Blue"
          },
          "variants": [
            {
              "name": "OPPO A7x 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A7x 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a7x-.jpg"
          ]
        },
        {
          "name": "OPPO AX5",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO AX5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO AX7",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO AX7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX7 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX7 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO AX7 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO AX7 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX7 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO AX7 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A71",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a71-.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 720 x 1280 pixels, 16:9 ratio (~282 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1 (Nougat), , ColorOS 3.2",
            "weight": "137 g (4.83 oz)",
            "dimensions": "148.1 x 73.8 x 7.6 mm (5.83 x 2.91 x 0.30 in)",
            "colors": "Gold, Black, Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO A71 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A71 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a71-.jpg"
          ]
        },
        {
          "name": "OPPO A73",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a73.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4015 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "163 g (5.75 oz)",
            "dimensions": "159.8 x 72.9 x 7.5 mm (6.29 x 2.87 x 0.30 in)",
            "colors": "Navy Blue, Classic Silver"
          },
          "variants": [
            {
              "name": "OPPO A73 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A73 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a73.jpg"
          ]
        },
        {
          "name": "OPPO A75",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A75 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A75 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A75 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A75S",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A75S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A75S 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A75S 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A77",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-a77-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches",
            "processor": "Mediatek MT6750T",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 3200 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "153 g",
            "dimensions": "7.3 mm thickness",
            "colors": "Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO A77 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A77 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A77 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-a77-.jpg"
          ]
        },
        {
          "name": "OPPO A77 Snapdragon",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO A77 Snapdragon 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A77 Snapdragon 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A77 Snapdragon 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A79",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "6.72 inches, 109.0 cm, 1080 x 2400 pixels, 20:9 ratio (~392 ppi density)",
            "processor": "Mediatek Dimensity 6020 (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, upgradable to Android 15, ColorOS 15",
            "weight": "193 g (6.81 oz)",
            "dimensions": "165.6 x 76 x 8 mm (6.52 x 2.99 x 0.31 in)",
            "colors": "Mystery Black, Glowing Green, Dazzling Purple"
          },
          "variants": [
            {
              "name": "OPPO A79 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A79 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO A79 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO A30",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO A30 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A30 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A30 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A37",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-f1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2500 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "136 g",
            "dimensions": "143.1 x 71 x 7.7 mm (5.63 x 2.80 x 0.30 in)",
            "colors": "White/Gold"
          },
          "variants": [
            {
              "name": "OPPO A37 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A37 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A37 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-f1.jpg"
          ]
        },
        {
          "name": "OPPO A37 Snapdragon",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO A37 Snapdragon 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A37 Snapdragon 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A37 Snapdragon 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A39",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a39.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 720 x 1280 pixels, 16:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2900 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), ColorOS 3",
            "weight": "147 g (5.19 oz)",
            "dimensions": "149.1 x 72.9 x 7.7 mm (5.87 x 2.87 x 0.30 in)",
            "colors": "Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO A39 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a39.jpg"
          ]
        },
        {
          "name": "OPPO A57",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-a57.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~282 ppi pixel density), 5.2 inches (~68.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8940 Snapdragon 435",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2900 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "147 g",
            "dimensions": "149.1 x 72.9 x 7.7 mm (5.87 x 2.87 x 0.30 in)",
            "colors": "Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO A57 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A57 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A57 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-a57.jpg"
          ]
        },
        {
          "name": "OPPO A59",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-a59.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3075 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), ColorOS 3",
            "weight": "160 g (5.64 oz)",
            "dimensions": "154.5 x 76 x 7.4 mm (6.08 x 2.99 x 0.29 in)",
            "colors": "Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO A59 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-a59.jpg"
          ]
        },
        {
          "name": "OPPO A59s",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO A59s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A59s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A59s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO A31",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-a31.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2000 mAh battery",
            "os": "Android 4.4 (KitKat)",
            "weight": "135 g",
            "dimensions": "131.9 x 65.5 x 8 mm (5.19 x 2.58 x 0.31 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "OPPO A31 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A31 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A31 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-a31.jpg"
          ]
        },
        {
          "name": "OPPO A33",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-a33.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~220 ppi pixel density), 5.0 inches (~67.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2400 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "146 g",
            "dimensions": "142.7 x 71.7 x 7.6 mm (5.62 x 2.82 x 0.30 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "OPPO A33 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A33 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO A33 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://www.oppo.com/en/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-a33.jpg"
          ]
        }
      ]
    },
    {
      "name": "F Series",
      "models": [
        {
          "name": "OPPO F33 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F33-5G.jpg",
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
              "name": "OPPO F33 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F33 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f33-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F33-5G.jpg"
          ]
        },
        {
          "name": "OPPO F33 Pro 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F33-Pro-5G.jpg",
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
              "name": "OPPO F33 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F33 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f33-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F33-Pro-5G.jpg"
          ]
        },
        {
          "name": "OPPO F31 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F31-5G.jpg",
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
              "name": "OPPO F31 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F31 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f31-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F31-5G.jpg"
          ]
        },
        {
          "name": "OPPO F31 Pro 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F31-Pro-5G-Gold.jpg",
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
              "name": "OPPO F31 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F31 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f31-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F31-Pro-5G-Gold.jpg"
          ]
        },
        {
          "name": "OPPO F31 Pro+ 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F31-Pro-Plus-5G-Pink.jpg",
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
              "name": "OPPO F31 Pro+ 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F31 Pro+ 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f31-pro-plus-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F31-Pro-Plus-5G-Pink.jpg"
          ]
        },
        {
          "name": "OPPO F25 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F25-Pro-5G-Lava-Red.jpg",
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
              "name": "OPPO F25 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F25 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f25-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F25-Pro-5G-Lava-Red.jpg"
          ]
        },
        {
          "name": "OPPO F27 5G",
          "aliases": [],
          "releaseYear": 2024,
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
              "name": "OPPO F27 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F27 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F27 Pro+",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Mediatek Dimensity 7050 (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "177 g (6.24 oz)",
            "dimensions": "162.7 x 74.3 x 7.9 mm (6.41 x 2.93 x 0.31 in)",
            "colors": "Blue"
          },
          "variants": [
            {
              "name": "OPPO F27 Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F27 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO F23 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f23-5g.jpg",
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
              "name": "OPPO F23 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F23 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f23-5g.jpg"
          ]
        },
        {
          "name": "OPPO F21 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F21-Pro.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 12, upgradable to Android 14, ColorOS 14",
            "weight": "175 g (6.17 oz)",
            "dimensions": "159.9 x 73.2 x 7.5 mm (6.30 x 2.88 x 0.30 in)",
            "colors": "Cosmic Black, Sunset Orange, Dawnlight Gold, Starlight Black"
          },
          "variants": [
            {
              "name": "OPPO F21 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-f21-pro/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F21-Pro.jpg"
          ]
        },
        {
          "name": "OPPO F21 Pro 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO F21 Pro 4G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21 Pro 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21 Pro 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F21s Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/OPPO-F21s-Pro-S75.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO F21s Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21s Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21s Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f21s-pro/",
            "https://www.gsmarena.com.bd/images/products/OPPO-F21s-Pro-S75.jpg"
          ]
        },
        {
          "name": "OPPO F21s Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F21s-Pro-5G.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO F21s Pro 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21s Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F21s Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f21s-pro-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F21s-Pro-5G.jpg"
          ]
        },
        {
          "name": "OPPO F19",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.3 x 73.8 x 8 mm (6.31 x 2.91 x 0.31 in)",
            "colors": "Prism Black, Midnight Blue"
          },
          "variants": [
            {
              "name": "OPPO F19 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19.jpg"
          ]
        },
        {
          "name": "OPPO F19 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-F19-Pro-Purple.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4310 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.1 x 73.2 x 7.8 mm (6.30 x 2.88 x 0.31 in)",
            "colors": "Fluid Black, Space Silver"
          },
          "variants": [
            {
              "name": "OPPO F19 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F19 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-f19-pro/",
            "https://www.gsmarena.com.bd/images/products/Oppo-F19-Pro-Purple.jpg"
          ]
        },
        {
          "name": "OPPO F19 Pro+",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO F19 Pro+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F19 Pro+ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F19 Pro+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F19s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19s.jpg",
          "specs": {
            "display": "6.43 inches, 99.8 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "175 g (6.17 oz)",
            "dimensions": "160.3 x 73.8 x 8 mm (6.31 x 2.91 x 0.31 in)",
            "colors": "Glowing Black, Glowing Gold"
          },
          "variants": [
            {
              "name": "OPPO F19s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f19s.jpg"
          ]
        },
        {
          "name": "OPPO F15",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-f15.jpg",
          "specs": {
            "display": "6.4 inches, 100.4 cm, 1080 x 2400 pixels, 20:9 ratio (~408 ppi density)",
            "processor": "Mediatek MT6771V Helio P70 (12 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 9.0 (Pie), upgradable to Android 11, ColorOS 11.1",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.2 x 73.3 x 7.9 mm (6.31 x 2.89 x 0.31 in)",
            "colors": "Lightening Black, Unicorn White"
          },
          "variants": [
            {
              "name": "OPPO F15 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F15 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-f15/",
            "https://www.gsmarena.com.bd/images/products/oppo-f15.jpg"
          ]
        },
        {
          "name": "OPPO F17",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17.jpg",
          "specs": {
            "display": "6.44 inches, 100.1 cm, 1080 x 2400 pixels, 20:9 ratio (~409 ppi density)",
            "processor": "Qualcomm SM6115 Snapdragon 662 (11 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4015 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "163 g (5.75 oz)",
            "dimensions": "159.8 x 72.8 x 7.5 mm (6.29 x 2.87 x 0.30 in)",
            "colors": "Dynamic Orange, Navy Blue, Classic Silver"
          },
          "variants": [
            {
              "name": "OPPO F17 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F17 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F17 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F17 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17.jpg"
          ]
        },
        {
          "name": "OPPO F17 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17-pro--.jpg",
          "specs": {
            "display": "6.43 inches, 100.3 cm, 1080 x 2400 pixels, 20:9 ratio (~408 ppi density)",
            "processor": "Mediatek MT6779V Helio P95 (12 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4015 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "164 g (5.78 oz)",
            "dimensions": "160.1 x 73.8 x 7.5 mm (6.30 x 2.91 x 0.30 in)",
            "colors": "Magic Blue, Matte Black, Metallic White"
          },
          "variants": [
            {
              "name": "OPPO F17 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f17-pro--.jpg"
          ]
        },
        {
          "name": "OPPO F17 Pro Diwali",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO F17 Pro Diwali 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F17 Pro Diwali 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F17 Pro Diwali 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F17 Pro Diwali 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F11",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-.jpg",
          "specs": {
            "display": "6.53 inches, 105.2 cm, 1080 x 2340 pixels, 19.5:9 ratio (~394 ppi density)",
            "processor": "Mediatek MT6771 Helio P70 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4020 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6",
            "weight": "188 g (6.63 oz)",
            "dimensions": "162 x 76.1 x 8.3 mm (6.38 x 3.00 x 0.33 in)",
            "colors": "Flourite Purple, Marble Green, Jewelry White"
          },
          "variants": [
            {
              "name": "OPPO F11 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F11 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F11 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F11 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-.jpg"
          ]
        },
        {
          "name": "OPPO F11 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-pro-.jpg",
          "specs": {
            "display": "6.53 inches, 103.6 cm, 1080 x 2340 pixels, 19.5:9 ratio (~397 ppi density)",
            "processor": "Mediatek MT6771 Helio P70 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6",
            "weight": "190 g (6.70 oz)",
            "dimensions": "161.3 x 76.1 x 8.8 mm (6.35 x 3.00 x 0.35 in)",
            "colors": "Thunder Black, Aurora Green"
          },
          "variants": [
            {
              "name": "OPPO F11 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F11 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F11 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f11-pro-.jpg"
          ]
        },
        {
          "name": "OPPO F11 Pro Marvel's Avengers",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO F11 Pro Marvel's Avengers 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F11 Pro Marvel's Avengers 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F11 Pro Marvel's Avengers 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F7",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f7.jpg",
          "specs": {
            "display": "6.23 inches, 96.9 cm, 1080 x 2280 pixels, 19:9 ratio (~405 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3400 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5",
            "weight": "158 g (5.57 oz)",
            "dimensions": "156 x 75.3 x 7.8 mm (6.14 x 2.96 x 0.31 in)",
            "colors": "Solar Red, Diamond Black, Moonlight Silver"
          },
          "variants": [
            {
              "name": "OPPO F7 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F7 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f7.jpg"
          ]
        },
        {
          "name": "OPPO F7 Youth",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-f7-youth.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3410 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "155 g (5.47 oz)",
            "dimensions": "156.5 x 75.2 x 7.8 mm (6.16 x 2.96 x 0.31 in)",
            "colors": "Solar Red, Diamond Black"
          },
          "variants": [
            {
              "name": "OPPO F7 Youth 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-f7-youth/",
            "https://www.gsmarena.com.bd/images/products/oppo-f7-youth.jpg"
          ]
        },
        {
          "name": "OPPO F9",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg",
          "specs": {
            "display": "6.3 inches, 97.4 cm, 1080 x 2340 pixels, 19.5:9 ratio (~409 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, ColorOS 7.0",
            "weight": "169 g (5.96 oz)",
            "dimensions": "156.7 x 74 x 8 mm (6.17 x 2.91 x 0.31 in)",
            "colors": "Sunrise Red, Twilight Blue, Starry Purple, Jade Green"
          },
          "variants": [
            {
              "name": "OPPO F9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F9 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F9 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f9.jpg"
          ]
        },
        {
          "name": "OPPO F9 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-f9-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO F9 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F9 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F9 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-f9-pro/",
            "https://www.gsmarena.com.bd/images/products/oppo-f9-pro.jpg"
          ]
        },
        {
          "name": "OPPO F3",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-f3-plus.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~72.3% screen-to-body ratio)",
            "processor": "Mediatek MT6750T",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 4000 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "153 g",
            "dimensions": "153.3 x 75.2 x 7.3 mm (6.04 x 2.96 x 0.29 in)",
            "colors": "Pink| Gold"
          },
          "variants": [
            {
              "name": "OPPO F3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-f3-plus.jpg"
          ]
        },
        {
          "name": "OPPO F3 Lite",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO F3 Lite 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F3 Lite 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F3 Lite 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO F3 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f3-plus.jpg",
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Qualcomm MSM8976 Pro Snapdragon 653 (28 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 4000 mAh, non-removable",
            "os": "Android 6 (Marshmallow), ColorOS 3",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.6 x 80.8 x 7.4 mm (6.44 x 3.18 x 0.29 in)",
            "colors": "Pink, Gold"
          },
          "variants": [
            {
              "name": "OPPO F3 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F3 Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f3-plus.jpg"
          ]
        },
        {
          "name": "OPPO F5",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f5-.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6763T Helio P23 (16 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), ColorOS 3.2",
            "weight": "152 g (5.36 oz)",
            "dimensions": "156.5 x 76 x 7.5 mm (6.16 x 2.99 x 0.30 in)",
            "colors": "Black, Gold, Red"
          },
          "variants": [
            {
              "name": "OPPO F5 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F5 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f5-.jpg"
          ]
        },
        {
          "name": "OPPO F5 Youth",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-f5-youth.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Mediatek MT6763T Helio P23 (16 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 7.1 (Nougat), ColorOS 3.2",
            "weight": "152 g (5.36 oz)",
            "dimensions": "156.5 x 76 x 7.5 mm (6.16 x 2.99 x 0.30 in)",
            "colors": "Gold, Black"
          },
          "variants": [
            {
              "name": "OPPO F5 Youth 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO F5 Youth 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-f5-youth/",
            "https://www.gsmarena.com.bd/images/products/oppo-f5-youth.jpg"
          ]
        },
        {
          "name": "OPPO F1",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8939v2 Snapdragon 616 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 2500 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), ColorOS 2.1",
            "weight": "134 g (4.73 oz)",
            "dimensions": "143.5 x 71 x 7.3 mm (5.65 x 2.80 x 0.29 in)",
            "colors": "White/Gold"
          },
          "variants": [
            {
              "name": "OPPO F1 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1.jpg"
          ]
        },
        {
          "name": "OPPO F1 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1-plus.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6755 Helio P10 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 2850 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), ColorOS 3",
            "weight": "145 g (5.11 oz)",
            "dimensions": "151.8 x 74.3 x 6.6 mm (5.98 x 2.93 x 0.26 in)",
            "colors": "Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO F1 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-f1-plus.jpg"
          ]
        },
        {
          "name": "OPPO F1s",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r9s-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~71.0% screen-to-body ratio)",
            "processor": "Mediatek MT6755 or MTK7650",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 4000 mAh battery",
            "os": "Android 5.1 (Lollipop)| upgradable to 6.0 (Marshmallow)",
            "weight": "160 g",
            "dimensions": "154.5 x 76 x 7.4 mm (6.08 x 2.99 x 0.29 in)",
            "colors": "Black| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO F1s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F1s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO F1s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r9s-.jpg"
          ]
        }
      ]
    },
    {
      "name": "K Series",
      "models": [
        {
          "name": "OPPO K14 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-K14-5G.jpg",
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
              "name": "OPPO K14 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K14 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-k14-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-K14-5G.jpg"
          ]
        },
        {
          "name": "OPPO K14x 5G",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Oppo-K14x-5G-Blue.jpg",
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
              "name": "OPPO K14x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K14x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "https://www.gsmarena.com.bd/pictures/oppo-k14x-5g/",
            "https://www.gsmarena.com.bd/images/products/Oppo-K14x-5G-Blue.jpg"
          ]
        },
        {
          "name": "OPPO K15 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k15-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO K15 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k15-pro.jpg"
          ]
        },
        {
          "name": "OPPO K15 Pro+",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k15-pro-plus.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO K15 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro+ 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro+ 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K15 Pro+ 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k15-pro-plus.jpg"
          ]
        },
        {
          "name": "OPPO K13 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13-5g.jpg",
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
              "name": "OPPO K13 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13-5g.jpg"
          ]
        },
        {
          "name": "OPPO K13 Turbo 5G",
          "aliases": [],
          "releaseYear": 2025,
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO K13 Turbo 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K13 Turbo Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13-turbo-pro.jpg",
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
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "OPPO K13 Turbo Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13 Turbo Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13-turbo-pro.jpg"
          ]
        },
        {
          "name": "OPPO K13s 5G",
          "aliases": [],
          "releaseYear": 2025,
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
              "name": "OPPO K13s 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13s 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K13x 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13x-5g.jpg",
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
              "name": "OPPO K13x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K13x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k13x-5g.jpg"
          ]
        },
        {
          "name": "OPPO K12",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5500 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "186 g (6.56 oz)",
            "dimensions": "162.5 x 75.3 x 8.4 mm (6.40 x 2.96 x 0.33 in)",
            "colors": "Celadon Marble, Dark Chrome"
          },
          "variants": [
            {
              "name": "OPPO K12 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K12 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K12 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12.jpg"
          ]
        },
        {
          "name": "OPPO K12 Plus",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12-plus.jpg",
          "specs": {
            "display": "6.7 inches, 108.0 cm, 1080 x 2412 pixels, 20:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SM7550-AB Snapdragon 7 Gen 3 (4 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "6400 mAh",
            "os": "Android 14, ColorOS 14.0",
            "weight": "192 g (6.77 oz)",
            "dimensions": "162.5 x 75.3 x 8.4 mm (6.40 x 2.96 x 0.33 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "OPPO K12 Plus 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K12 Plus 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K12 Plus 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12-plus.jpg"
          ]
        },
        {
          "name": "OPPO K12x",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12x.jpg",
          "specs": {
            "display": "6.67 inches, 107.2 cm, 720 x 1604 pixels, 20:9 ratio (~264 ppi density)",
            "processor": "Mediatek Dimensity 6300 (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 14, ColorOS 14",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165.7 x 76 x 7.7 mm (6.52 x 2.99 x 0.30 in)",
            "colors": "Breeze Blue, Midnight Violet"
          },
          "variants": [
            {
              "name": "OPPO K12x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K12x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k12x.jpg"
          ]
        },
        {
          "name": "OPPO K12x 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
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
              "name": "OPPO K12x 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K12x 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K12x 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K12x 5G 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K11",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k11.jpg",
          "specs": {
            "display": "6.7 inches, 108.4 cm, 1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
            "processor": "Qualcomm Snapdragon 782G (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, ColorOS 13.1",
            "weight": "184 g (6.49 oz)",
            "dimensions": "162.7 x 75.5 x 8.2 mm (6.41 x 2.97 x 0.32 in)",
            "colors": "Moonshadow Gray; Glacier Blue"
          },
          "variants": [
            {
              "name": "OPPO K11 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K11 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K11 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k11.jpg"
          ]
        },
        {
          "name": "OPPO K11x",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k11x.jpg",
          "specs": {
            "display": "6.72 inches, 109.0 cm, 1080 x 2400 pixels, 20:9 ratio (~392 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "8GB/12GB/16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 13, ColorOS 13.1",
            "weight": "195 g (6.88 oz)",
            "dimensions": "165.5 x 76 x 8.3 mm (6.52 x 2.99 x 0.33 in)",
            "colors": "Jade Black, Pearl Blue"
          },
          "variants": [
            {
              "name": "OPPO K11x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K11x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K11x 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k11x.jpg"
          ]
        },
        {
          "name": "OPPO K10",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10.jpg",
          "specs": {
            "display": "6.59 inches, 104.5 cm, 1080 x 2412 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM6225 Snapdragon 680 4G (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "189 g (6.67 oz)",
            "dimensions": "164.4 x 75.7 x 8.4 mm (6.47 x 2.98 x 0.33 in)",
            "colors": "Black Carbon, Blue Flame"
          },
          "variants": [
            {
              "name": "OPPO K10 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K10 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10.jpg"
          ]
        },
        {
          "name": "OPPO K10 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-.jpg",
          "specs": {
            "display": "6.56 inches, 103.4 cm, 720 x 1612 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "190 g (6.70 oz)",
            "dimensions": "163.8 x 75.1 x 8 mm (6.45 x 2.96 x 0.31 in)",
            "colors": "Ocean Blue, Midnight Black"
          },
          "variants": [
            {
              "name": "OPPO K10 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K10 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-5g-.jpg"
          ]
        },
        {
          "name": "OPPO K10 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-pro-.jpg",
          "specs": {
            "display": "6.62 inches, 106.3 cm, 1080 x 2400 pixels, 20:9 ratio (~397 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, ColorOS 12.1",
            "weight": "199 g (7.02 oz)",
            "dimensions": "162.7 x 75.7 x 8.6 mm (6.41 x 2.98 x 0.34 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "OPPO K10 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K10 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k10-pro-.jpg"
          ]
        },
        {
          "name": "OPPO K10 Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO K10 Pro 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K10 Vitality",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO K10 Vitality 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10 Vitality 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10 Vitality 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10 Vitality 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K10x 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO K10x 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10x 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K10x 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K9 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO K9 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K9 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K9 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K9 Pro 5G",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB/8GB",
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
              "name": "OPPO K9 Pro 5G 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K9 Pro 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO K9 Pro 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india"
          ]
        },
        {
          "name": "OPPO K9s",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": null,
          "specs": {
            "display": "6.59 inches, 104.5 cm, 1080 x 2412 pixels, 20:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SM7325 Snapdragon 778G 5G (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.2",
            "weight": "199 g (7.02 oz)",
            "dimensions": "164.4 x 75.9 x 8.5 mm (6.47 x 2.99 x 0.33 in)",
            "colors": "Black, Silver, Aurora"
          },
          "variants": [
            {
              "name": "OPPO K9s 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K9s 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K9s 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO K9x",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k9x.jpg",
          "specs": {
            "display": "6.49 inches, 102.2 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 810 (6 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 11, ColorOS 11.1",
            "weight": "194 g (6.84 oz)",
            "dimensions": "162.2 x 74.8 x 8.8 mm (6.39 x 2.94 x 0.35 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "OPPO K9x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K9x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K9x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K9x 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k9x.jpg"
          ]
        },
        {
          "name": "OPPO K7 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k7-5g.jpg",
          "specs": {
            "display": "6.4 inches, 98.9 cm, 1080 x 2400 pixels, 20:9 ratio (~411 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4025 mAh",
            "os": "Android 10, ColorOS 7",
            "weight": "180 g (6.35 oz)",
            "dimensions": "160.3 x 74.3 x 8 mm (6.31 x 2.93 x 0.31 in)",
            "colors": "Moonlight Black, Pearl White, Blue, Blue/Red"
          },
          "variants": [
            {
              "name": "OPPO K7 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K7 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k7-5g.jpg"
          ]
        },
        {
          "name": "OPPO K7x",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k7x.jpg",
          "specs": {
            "display": "6.5 inches, 102.0 cm, 1080 x 2400 pixels, 20:9 ratio (~405 ppi density)",
            "processor": "Mediatek Dimensity 720 (7 nm)",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, ColorOS 7.2",
            "weight": "194 g (6.84 oz)",
            "dimensions": "162.2 x 75.1 x 9.1 mm (6.39 x 2.96 x 0.36 in)",
            "colors": "Blue, Black"
          },
          "variants": [
            {
              "name": "OPPO K7x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K7x 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K7x 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k7x.jpg"
          ]
        },
        {
          "name": "OPPO K3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k3.jpg",
          "specs": {
            "display": "6.5 inches, 104.8 cm, 1080 x 2340 pixels, 19.5:9 ratio (~394 ppi density)",
            "processor": "Qualcomm SDM710 Snapdragon 710 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3765 mAh, non-removable",
            "os": "Android 9.0 (Pie), ColorOS 6",
            "weight": "191 g (6.74 oz)",
            "dimensions": "161.2 x 76 x 9.4 mm (6.35 x 2.99 x 0.37 in)",
            "colors": "Black, Nebula Purple, Morning White"
          },
          "variants": [
            {
              "name": "OPPO K3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K3 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K3 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k3.jpg"
          ]
        },
        {
          "name": "OPPO K5",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k5.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM730 Snapdragon 730G (8 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), planned upgrade to Android 10, ColorOS 6.1",
            "weight": "182 g (6.42 oz)",
            "dimensions": "158.7 x 75.2 x 8.6 mm (6.25 x 2.96 x 0.34 in)",
            "colors": "Cyber ​​metal, Fantasy forest, Polar sunshine"
          },
          "variants": [
            {
              "name": "OPPO K5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K5 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k5.jpg"
          ]
        },
        {
          "name": "OPPO K1",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-k1-.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3600 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5.2",
            "weight": "156 g (5.50 oz)",
            "dimensions": "158.3 x 75.5 x 7.4 mm (6.23 x 2.97 x 0.29 in)",
            "colors": "Blue, Red, Silver Green"
          },
          "variants": [
            {
              "name": "OPPO K1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO K1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "https://www.91mobiles.com/list-of-phones/oppo-mobile-price-list-in-india",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-k1-.jpg"
          ]
        }
      ]
    },
    {
      "name": "R / Ace Series",
      "models": [
        {
          "name": "OPPO Ace 2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.55 inches, 103.6 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "6GB/8GB/12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, ColorOS 7.1",
            "weight": "186 g (6.56 oz)",
            "dimensions": "160 x 75.4 x 8.6 mm (6.30 x 2.97 x 0.34 in)",
            "colors": "Aurora Silver, Moon Rock Grey, Fantasy Purple"
          },
          "variants": [
            {
              "name": "OPPO Ace 2 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Ace 2 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Ace 2 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Ace 2 EVA",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB/12GB",
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
              "name": "OPPO Ace 2 EVA 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Ace 2 EVA 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Ace 2 EVA 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Ace 2 EVA 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Reno Ace",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-ace.jpg",
          "specs": {
            "display": "6.5 inches, 103.5 cm, 1080 x 2400 pixels, 20:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855+ (7 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, ColorOS 7.0",
            "weight": "200 g (7.05 oz)",
            "dimensions": "161 x 75.7 x 8.7 mm (6.34 x 2.98 x 0.34 in)",
            "colors": "Electric purple, Interstellar blue, Gundam Edition"
          },
          "variants": [
            {
              "name": "OPPO Reno Ace 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno Ace 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO Reno Ace 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-reno-ace.jpg"
          ]
        },
        {
          "name": "OPPO Reno Ace Gundam",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO Reno Ace Gundam 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno Ace Gundam 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Reno Ace Gundam 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R15",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r15-.jpg",
          "specs": {
            "display": "6.28 inches, 98.9 cm, 1080 x 2280 pixels, 19:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6771 Helio P60 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3450 mAh, non-removable",
            "os": "Android 8.1 (Oreo), ColorOS 5",
            "weight": "175 g (6.17 oz)",
            "dimensions": "155.1 x 75.2 x 7.4 mm (6.11 x 2.96 x 0.29 in)",
            "colors": "Hot Red, Snow White, Star Purple, Fantasy Pink"
          },
          "variants": [
            {
              "name": "OPPO R15 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO R15 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO R15 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r15-.jpg"
          ]
        },
        {
          "name": "OPPO R15 Dream Mirror",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO R15 Dream Mirror 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R15 Dream Mirror 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R15 Dream Mirror 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R15 Neo",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO R15 Neo 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R15 Neo 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R15 Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R15x",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r15x.jpg",
          "specs": {
            "display": "6.4 inches, 101.0 cm, 1080 x 2340 pixels, 19.5:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3600 mAh, non-removable",
            "os": "Android 8.1 (Oreo), planned upgrade to Android 9.0 (Pie), ColorOS 6.0",
            "weight": "156 g (5.50 oz)",
            "dimensions": "158.3 x 75.5 x 7.4 mm (6.23 x 2.97 x 0.29 in)",
            "colors": "Nebula, Silver Green"
          },
          "variants": [
            {
              "name": "OPPO R15x 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r15x.jpg"
          ]
        },
        {
          "name": "OPPO R17",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r17-.jpg",
          "specs": {
            "display": "6.4 inches, 100.5 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SDM670 Snapdragon 670 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 8.1 (Oreo), 9.0 (Pie), planned upgrade to Android 10, ColorOS 7.0",
            "weight": "182 g (6.42 oz)",
            "dimensions": "157.5 x 74.9 x 7.5 mm (6.20 x 2.95 x 0.30 in)",
            "colors": "Radiant Mist, Ambient Blue, Neon Purple"
          },
          "variants": [
            {
              "name": "OPPO R17 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO R17 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r17-.jpg"
          ]
        },
        {
          "name": "OPPO R17 Neo",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO R17 Neo 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R17 Neo 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R17 Neo 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R17 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r17-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO R17 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R17 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R17 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r17-pro.jpg"
          ]
        },
        {
          "name": "OPPO R11",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~72.2% screen-to-body ratio)",
            "processor": "Qualcomm MSM8956 Plus Snapdragon 660",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Po 3000 mAh battery",
            "os": "Android 7.1.1 (Nougat)",
            "weight": "150 g",
            "dimensions": "154.5 x 74.8 x 6.8 mm (6.08 x 2.94 x 0.27 in)",
            "colors": "Black| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO R11 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R11 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R11 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO R11 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r11.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~368 ppi pixel density), 6.0 inches (~73.0% screen-to-body ratio)",
            "processor": "Qualcomm MSM8956 Plus Snapdragon 660",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Po 4000 mAh battery",
            "os": "Android 7.1.1 (Nougat)",
            "weight": "188 g",
            "dimensions": "165.8 x 81.5 x 7.8 mm (6.53 x 3.21 x 0.31 in)",
            "colors": "Black| Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO R11 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R11 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R11 Plus 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r11.jpg"
          ]
        },
        {
          "name": "OPPO R11s",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-r11s.jpg",
          "specs": {
            "display": "6.01 inches, 93.7 cm, 1080 x 2160 pixels, 18:9 ratio (~401 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3200 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), ColorOS 3.2",
            "weight": "153 g (5.40 oz)",
            "dimensions": "155.1 x 75.5 x 7.1 mm (6.11 x 2.97 x 0.28 in)",
            "colors": "Red, Black, Champagne"
          },
          "variants": [
            {
              "name": "OPPO R11s 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-r11s/",
            "https://www.gsmarena.com.bd/images/products/oppo-r11s.jpg"
          ]
        },
        {
          "name": "OPPO R11s Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r11s-plus.jpg",
          "specs": {
            "display": "6.43 inches, 106.7 cm, 1080 x 2160 pixels, 18:9 ratio (~376 ppi density)",
            "processor": "Qualcomm SDM660 Snapdragon 660 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), ColorOS 3.2",
            "weight": "182 g (6.42 oz)",
            "dimensions": "164.8 x 80.2 x 7.3 mm (6.49 x 3.16 x 0.29 in)",
            "colors": "Black, Champagne"
          },
          "variants": [
            {
              "name": "OPPO R11s Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r11s-plus.jpg"
          ]
        },
        {
          "name": "OPPO R9s Pro",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB/4GB/6GB",
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
              "name": "OPPO R9s Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9s Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9s Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R9",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r9.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R9 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r9.jpg"
          ]
        },
        {
          "name": "OPPO R9 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Qualcomm MSM8976 Snapdragon 652 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 4120 mAh, non-removable",
            "os": "Android 5.1 (Lollipop), upgradable to 6 (Marshmallow), ColorOS 3",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.1 x 80.8 x 7.4 mm (6.42 x 3.18 x 0.29 in)",
            "colors": "Gold"
          },
          "variants": [
            {
              "name": "OPPO R9 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "OPPO R9 Plus 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO R9s",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~73.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8953 Snapdragon 625",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 3010 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "145 g",
            "dimensions": "153 x 74.3 x 6.6 mm (6.02 x 2.93 x 0.26 in)",
            "colors": "Black| Gold| Rose Gold| Red"
          },
          "variants": [
            {
              "name": "OPPO R9s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R9s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO R9s Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/oppo-r9s-plus.jpg",
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Qualcomm MSM8976 Pro Snapdragon 653 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 6.1 (Marshmallow), ColorOS 3",
            "weight": "185 g (6.53 oz)",
            "dimensions": "163.6 x 80.8 x 7.4 mm (6.44 x 3.18 x 0.29 in)",
            "colors": "Black, Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "OPPO R9s Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "https://www.gsmarena.com.bd/pictures/oppo-r9s-plus/",
            "https://www.gsmarena.com.bd/images/products/oppo-r9s-plus.jpg"
          ]
        },
        {
          "name": "OPPO R1C",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r1c.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R1C 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1C 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1C 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r1c.jpg"
          ]
        },
        {
          "name": "OPPO R1x",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r1c-new.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~69.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2420 mAh battery",
            "os": "Android 4.4 (KitKat)",
            "weight": "130 g",
            "dimensions": "140.6 x 70.1 x 6.8 mm (5.54 x 2.76 x 0.27 in)",
            "colors": "Dark blue| White"
          },
          "variants": [
            {
              "name": "OPPO R1x 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1x 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1x 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r1c-new.jpg"
          ]
        },
        {
          "name": "OPPO R5s",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r5s.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~67.2% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2000 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "155 g",
            "dimensions": "148.9 x 74.5 x 4.9 mm (5.86 x 2.93 x 0.19 in)",
            "colors": "Gray"
          },
          "variants": [
            {
              "name": "OPPO R5s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R5s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R5s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r5s.jpg"
          ]
        },
        {
          "name": "OPPO R7",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~445 ppi pixel density), 5.0 inches (~66.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2320 mAh battery",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "147 g",
            "dimensions": "143 x 71 x 6.3 mm (5.63 x 2.80 x 0.25 in)",
            "colors": "Golden| Silver"
          },
          "variants": [
            {
              "name": "OPPO R7 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO R7 Lite",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7-new.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2320 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "147 g",
            "dimensions": "143 x 71 x 6.3 mm (5.63 x 2.80 x 0.25 in)",
            "colors": "Golden| Silver"
          },
          "variants": [
            {
              "name": "OPPO R7 Lite 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Lite 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Lite 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7-new.jpg"
          ]
        },
        {
          "name": "OPPO R7 Plus",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7-plus.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~367 ppi pixel density), 6.0 inches (~76.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 4100 mAh battery",
            "os": "Android 5.1.1 (Lollipop)",
            "weight": "192 g",
            "dimensions": "158 x 82 x 7.8 mm (6.22 x 3.23 x 0.31 in)",
            "colors": "Golden| Silver"
          },
          "variants": [
            {
              "name": "OPPO R7 Plus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7-plus.jpg"
          ]
        },
        {
          "name": "OPPO R7 Plus FC Barcelona Edition",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R7 Plus FC Barcelona Edition 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Plus FC Barcelona Edition 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7 Plus FC Barcelona Edition 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R7s",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7s.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~401 ppi pixel density), 5.5 inches (~72.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 3070 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "155 g",
            "dimensions": "151.8 x 75.4 x 7 mm (5.98 x 2.97 x 0.28 in)",
            "colors": "Golden"
          },
          "variants": [
            {
              "name": "OPPO R7s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R7s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r7s.jpg"
          ]
        },
        {
          "name": "OPPO R805",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R805 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R805 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R805 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R830",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R830 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R830 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R830 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R1k",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R1k 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1k 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1k 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R1L",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R1L 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1L 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1L 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R1S",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r1s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~68.6% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 400",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2410 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "140 g",
            "dimensions": "142.7 x 70.4 x 7.1 mm (5.62 x 2.77 x 0.28 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "OPPO R1S 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1S 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R1S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r1s.jpg"
          ]
        },
        {
          "name": "OPPO R3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~68.8% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 400",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2410 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "140 g",
            "dimensions": "142.3 x 70.4 x 6.3 mm (5.60 x 2.77 x 0.25 in)",
            "colors": "Black| white"
          },
          "variants": [
            {
              "name": "OPPO R3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r3.jpg"
          ]
        },
        {
          "name": "OPPO R5",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r5-new1.jpg",
          "specs": {
            "display": "AMOLED capacitive touchscreen 16M colors, 1080 x 1920 pixels (~423 ppi pixel density), 5.2 inches (~67.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2000 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "155 g",
            "dimensions": "148.9 x 74.5 x 4.9 mm (5.86 x 2.93 x 0.19 in)",
            "colors": "Silver| Gold"
          },
          "variants": [
            {
              "name": "OPPO R5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r5-new1.jpg"
          ]
        },
        {
          "name": "OPPO R6007",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO R6007 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R6007 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO R6007 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R1",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R1 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R809T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R809T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R815T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-r815t.jpg",
          "specs": {
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
              "name": "OPPO R815T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-r815t.jpg"
          ]
        },
        {
          "name": "OPPO R819",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-r819.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~312 ppi pixel density), 4.7 inches (~65.6% screen-to-body ratio)",
            "processor": "Mediatek MT6589",
            "ram": "1 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 2000 mAh battery",
            "os": "Android 4.2.1 (Jelly Bean)",
            "weight": "110 g",
            "dimensions": "136.5 x 68 x 7.3 mm (5.37 x 2.68 x 0.29 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "OPPO R819 1 GB RAM Market-dependent storage",
              "ram": "1 GB RAM",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-r819.jpg"
          ]
        },
        {
          "name": "OPPO R819T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R819T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R821T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R821T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R823T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R823T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO R833T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO R833T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        }
      ]
    },
    {
      "name": "N Series",
      "models": [
        {
          "name": "OPPO N1 mini",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-n1-mini1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~64.3% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 400",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2140 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "150 g",
            "dimensions": "148.4 x 72.2 x 9.2 mm (5.84 x 2.84 x 0.36 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "OPPO N1 mini 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO N1 mini 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO N1 mini 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-n1-mini1.jpg"
          ]
        },
        {
          "name": "OPPO N3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-n3-new1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~403 ppi pixel density), 5.5 inches (~66.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974AA Snapdragon 801",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 3000 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "192 g",
            "dimensions": "161.2 x 77 x 9.9 mm (6.35 x 3.03 x 0.39 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "OPPO N3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO N3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO N3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-n3-new1.jpg"
          ]
        },
        {
          "name": "OPPO N1",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-n1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~373 ppi pixel density), 5.9 inches (~68.1% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 600",
            "ram": "2 GB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Non-removable Li-Ion 3610 mAh battery",
            "os": "Android 4.2 (Jelly Bean)",
            "weight": "213 g",
            "dimensions": "170.7 x 82.6 x 9 mm (6.72 x 3.25 x 0.35 in)",
            "colors": "White| dark blue"
          },
          "variants": [
            {
              "name": "OPPO N1 2 GB RAM Market-dependent storage",
              "ram": "2 GB RAM",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-n1.jpg"
          ]
        }
      ]
    },
    {
      "name": "Neo / Joy / Mirror / U",
      "models": [
        {
          "name": "OPPO Joy 3",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-joy3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~63.1% screen-to-body ratio)",
            "processor": "Mediatek MT6582",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Po 2000 mAh battery",
            "os": "Android 4.4 (KitKat)",
            "weight": "135 g",
            "dimensions": "132.8 x 66.6 x 9 mm (5.23 x 2.62 x 0.35 in)",
            "colors": "White| Gray"
          },
          "variants": [
            {
              "name": "OPPO Joy 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-joy3.jpg"
          ]
        },
        {
          "name": "OPPO Joy Plus",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-joy-plus.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~233 ppi pixel density), 4.0 inches (~58.3% screen-to-body ratio)",
            "processor": "Mediatek MT6572",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1700 mAh battery",
            "os": "Android 4.4 (KitKat)",
            "weight": "125 g",
            "dimensions": "124 x 63 x 9.9 mm (4.88 x 2.48 x 0.39 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "OPPO Joy Plus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-joy-plus.jpg"
          ]
        },
        {
          "name": "OPPO Mirror 3",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-mirror-3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~312 ppi pixel density), 4.7 inches (~64.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Po 2000 mAh battery",
            "os": "Android 4.4 (KitKat)",
            "weight": "130 g",
            "dimensions": "137.7 x 68.8 x 8.9 mm (5.42 x 2.71 x 0.35 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "OPPO Mirror 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-mirror-3.jpg"
          ]
        },
        {
          "name": "OPPO Mirror 5",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~220 ppi pixel density), 5.0 inches (~67.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2420 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "160 g",
            "dimensions": "143.4 x 71.2 x 7.7 mm (5.65 x 2.80 x 0.30 in)",
            "colors": "White| Blue"
          },
          "variants": [
            {
              "name": "OPPO Mirror 5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs"
          ]
        },
        {
          "name": "OPPO Mirror 5s",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-mirror-5s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2420 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "160 g",
            "dimensions": "143.4 x 71.2 x 7.7 mm (5.65 x 2.80 x 0.30 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "OPPO Mirror 5s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 5s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Mirror 5s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-mirror-5s.jpg"
          ]
        },
        {
          "name": "OPPO Neo 5 2015",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO Neo 5 2015 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5 2015 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5 2015 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO Neo 5s",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-5s.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2000 mAh battery",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "135 g",
            "dimensions": "131.9 x 65.5 x 8 mm (5.19 x 2.58 x 0.31 in)",
            "colors": "Blue| White"
          },
          "variants": [
            {
              "name": "OPPO Neo 5s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5s 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5s 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-5s.jpg"
          ]
        },
        {
          "name": "OPPO Neo 7",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-7.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~220 ppi pixel density), 5.0 inches (~67.4% screen-to-body ratio)",
            "processor": "Mediatek MT6582 - 3G model",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2420 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "141 g",
            "dimensions": "142.7 x 71.7 x 7.6 mm (5.62 x 2.82 x 0.30 in)",
            "colors": "Blue| White"
          },
          "variants": [
            {
              "name": "OPPO Neo 7 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 7 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-7.jpg"
          ]
        },
        {
          "name": "OPPO U3",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-u3-new.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~377 ppi pixel density), 5.9 inches (~74.0% screen-to-body ratio)",
            "processor": "Mediatek MT6752",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "195 g",
            "dimensions": "156.8 x 81 x 8 mm (6.17 x 3.19 x 0.31 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO U3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO U3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO U3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-u3-new.jpg"
          ]
        },
        {
          "name": "OPPO Joy",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-joy.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO Joy 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Joy 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-joy.jpg"
          ]
        },
        {
          "name": "OPPO Neo 3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.2% screen-to-body ratio)",
            "processor": "Mediatek MT6572",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 4.2.1 (Jelly Bean)",
            "weight": "128 g",
            "dimensions": "132 x 65.8 x 9.2 mm (5.20 x 2.59 x 0.36 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO Neo 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo3.jpg"
          ]
        },
        {
          "name": "OPPO Neo 5",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-5.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~64.2% screen-to-body ratio)",
            "processor": "Qualcomm Snapdragon 400",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 4.3 (Jelly Bean)",
            "weight": "132.5 g",
            "dimensions": "132 x 65.8 x 9.2 mm (5.20 x 2.59 x 0.36 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "OPPO Neo 5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Neo 5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo-5.jpg"
          ]
        },
        {
          "name": "OPPO Yoyo",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-yoyo.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO Yoyo 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Yoyo 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO Yoyo 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-yoyo.jpg"
          ]
        },
        {
          "name": "OPPO Neo",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~207 ppi pixel density), 4.5 inches (~66.4% screen-to-body ratio)",
            "processor": "Dual-core 1.3 GHz",
            "ram": "512 MB RAM",
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 4.2.1 (Jelly Bean)",
            "weight": "130 g",
            "dimensions": "132 x 65.8 x 9.2 mm (5.20 x 2.59 x 0.36 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "OPPO Neo 512 MB RAM Market-dependent storage",
              "ram": "512 MB RAM",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "kaggle:gsmarena-derived-oppo-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/oppo-neo.jpg"
          ]
        },
        {
          "name": "OPPO U705T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/oppo-u705t.jpg",
          "specs": {
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
              "name": "OPPO U705T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/oppo-u705t.jpg"
          ]
        },
        {
          "name": "OPPO U707T",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO U707T Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        }
      ]
    },
    {
      "name": "Other OPPO Phones",
      "models": [
        {
          "name": "OPPO T3 Lite 5G",
          "aliases": [],
          "releaseYear": 2024,
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
              "name": "OPPO T3 Lite 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO T3 Lite 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 1100",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 1100 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1100 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1100 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 1105",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 1105 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1105 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1105 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 1107",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 1107 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1107 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 1107 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 3000",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 3000 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3000 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3000 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 3005",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 3005 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3005 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3005 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO 3007",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
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
              "name": "OPPO 3007 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3007 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "OPPO 3007 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        },
        {
          "name": "OPPO X903",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
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
              "name": "OPPO X903 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/oppo/",
            "https://en.wikipedia.org/wiki/List_of_Oppo_products"
          ]
        }
      ]
    }
  ]
};
