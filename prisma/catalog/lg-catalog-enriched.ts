/**
 * Enriched LG phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/lg.json.
 */

export type LGEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type LGEnrichedModelSpecs = {
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

export type LGEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: LGEnrichedModelSpecs;
  variants: LGEnrichedModelVariant[];
  sources?: string[];
};

export type LGEnrichedFamily = {
  name: string;
  models: LGEnrichedModel[];
};

export const LG_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: LGEnrichedFamily[];
} = {
  "brandName": "LG",
  "logoUrl": "https://logo.clearbit.com/lg.com",
  "sortOrder": 19,
  "families": [
    {
      "name": "Wing / Velvet",
      "models": [
        {
          "name": "LG Velvet",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 4300 mAh",
            "os": "Android 10, upgradable to Android 11, LG UX 10",
            "weight": "180 g (6.35 oz)",
            "dimensions": "167.1 x 74.1 x 7.9 mm (6.58 x 2.92 x 0.31 in)",
            "colors": "Black, Aurora Silver"
          },
          "variants": [
            {
              "name": "LG Velvet 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-.jpg"
          ]
        },
        {
          "name": "LG Velvet 4G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-4g.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG Velvet 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-velvet-4g.jpg"
          ]
        },
        {
          "name": "LG Velvet 4G Dual SIM",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG Velvet 4G Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones"
          ]
        },
        {
          "name": "LG Velvet 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Qualcomm SM7250 Snapdragon 765G 5G (7 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 4300 mAh",
            "os": "Android 10, upgradable to Android 13, LG UX",
            "weight": "180 g (6.35 oz)",
            "dimensions": "167.2 x 74.1 x 7.9 mm (6.58 x 2.92 x 0.31 in)",
            "colors": "Aurora White, Aurora Green, Aurora Gray, Illusion Sunset, Red, Pink"
          },
          "variants": [
            {
              "name": "LG Velvet 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Velvet 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG Wing",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-wing.jpg",
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
              "name": "LG Wing 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wing 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-wing.jpg"
          ]
        },
        {
          "name": "LG Wing Dual SIM",
          "aliases": [],
          "releaseYear": 2020,
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
              "name": "LG Wing Dual SIM 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wing Dual SIM 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://www.lg.com/us/cell-phones"
          ]
        }
      ]
    },
    {
      "name": "V Series",
      "models": [
        {
          "name": "LG V60 ThinQ 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10, upgradable to Android 13",
            "weight": "213 g (Global)/ 218 g (Verizon) (7.51 oz)",
            "dimensions": "169.3 x 77.6 x 8.9 mm (6.67 x 3.06 x 0.35 in)",
            "colors": "Classy Blue, Classy White"
          },
          "variants": [
            {
              "name": "LG V60 ThinQ 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V60 ThinQ 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG V50 ThinQ 5G",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.4 inches, 100.2 cm, 1440 x 3120 pixels, 19.5:9 ratio (~538 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11",
            "weight": "183 g (6.46 oz)",
            "dimensions": "159.2 x 76.1 x 8.3 mm (6.27 x 3.00 x 0.33 in)",
            "colors": "New Aurora Black"
          },
          "variants": [
            {
              "name": "LG V50 ThinQ 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG V50S ThinQ",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB/8GB",
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
              "name": "LG V50S ThinQ 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG V50S ThinQ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V30+ JOJO L-02K",
          "aliases": [],
          "releaseYear": 2018,
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
              "name": "LG V30+ JOJO L-02K 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V30S ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-v30s-thinq.jpg",
          "specs": {
            "display": "6.0 inches, 92.6 cm, 1440 x 2880 pixels, 18:9 ratio (~538 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 8.0 (Oreo), LG UX 6",
            "weight": "158 g (5.57 oz)",
            "dimensions": "151.7 x 75.4 x 7.3 mm (5.97 x 2.97 x 0.29 in)",
            "colors": "New Maroccan Blue, New Platinum Gray"
          },
          "variants": [
            {
              "name": "LG V30S ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V30S ThinQ 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-v30s-thinq.jpg"
          ]
        },
        {
          "name": "LG V30S+ ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG V30S+ ThinQ 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V35 ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-v35-thinq.jpg",
          "specs": {
            "display": "6.0 inches, 92.6 cm, 1440 x 2880 pixels, 18:9 ratio (~538 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie)",
            "weight": "157 g (5.54 oz)",
            "dimensions": "151.7 x 75.4 x 7.3 mm (5.97 x 2.97 x 0.29 in)",
            "colors": "New Aurora Black, New Platinum Gray"
          },
          "variants": [
            {
              "name": "LG V35 ThinQ 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V35 ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-v35-thinq/",
            "https://www.gsmarena.com.bd/images/products/lg-v35-thinq.jpg"
          ]
        },
        {
          "name": "LG V35+ ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG V35+ ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V40 ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-v40-thinq.jpg",
          "specs": {
            "display": "6.4 inches, 100.5 cm, 1440 x 3120 pixels, 19.5:9 ratio (~537 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10",
            "weight": "169 g (5.96 oz)",
            "dimensions": "158.8 x 75.7 x 7.6 mm (6.25 x 2.98 x 0.30 in)",
            "colors": "New Platinum Gray, Carmine Red, New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG V40 ThinQ 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V40 ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-v40-thinq/",
            "https://www.gsmarena.com.bd/images/products/lg-v40-thinq.jpg"
          ]
        },
        {
          "name": "LG V40 ThinQ Dual SIM",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG V40 ThinQ Dual SIM 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG V40 ThinQ Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V30",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-v30-.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1440 x 2880 pixels, 18:9 ratio (~537 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat), upgradable to Android 9.0 (Pie)",
            "weight": "158 g (5.57 oz)",
            "dimensions": "151.7 x 75.4 x 7.3 mm (5.97 x 2.97 x 0.29 in)",
            "colors": "Aurora Black, Cloud Silver, Moroccan Blue, Lavender Violet, Raspberry Rose"
          },
          "variants": [
            {
              "name": "LG V30 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V30 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-v30-.jpg"
          ]
        },
        {
          "name": "LG V30+",
          "aliases": [],
          "releaseYear": 2017,
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
              "name": "LG V30+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V20",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-v20-ofic1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~513 ppi pixel density), 5.7 inches (~72.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 820",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Removable Li-Ion 3200 mAh battery",
            "os": "Android 7.0 (Nougat)",
            "weight": "174 g",
            "dimensions": "159.7 x 78.1 x 7.6 mm (6.29 x 3.07 x 0.30 in)",
            "colors": "Titan| Silver| Pink"
          },
          "variants": [
            {
              "name": "LG V20 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG V20 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-v20-ofic1.jpg"
          ]
        },
        {
          "name": "LG V20 US996",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V20 US996 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V34 isai Beat",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V34 isai Beat 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-v10-.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1440 x 2560 pixels, 16:9 ratio (~515 ppi density)",
            "processor": "Qualcomm MSM8992 Snapdragon 808 (20 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 5.1.1 (Lollipop), upgradable to 7.0 (Nougat)",
            "weight": "192 g (6.77 oz)",
            "dimensions": "159.6 x 79.3 x 8.6 mm (6.28 x 3.12 x 0.34 in)",
            "colors": "Space Black, Luxe White, Modern Beige, Ocean Blue, Opal Blue"
          },
          "variants": [
            {
              "name": "LG V10 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG V10 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-v10-.jpg"
          ]
        },
        {
          "name": "LG V10 H900",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 H900 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 H901",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 H901 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 H960",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 H960 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 H961N",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 H961N 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 H962",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 H962 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 RS987",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 RS987 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG V10 VS990",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG V10 VS990 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        }
      ]
    },
    {
      "name": "G Series",
      "models": [
        {
          "name": "LG G8 ThinQ",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-g8-thinq.jpg",
          "specs": {
            "display": "6.1 inches, 91.0 cm, 1440 x 3120 pixels, 19.5:9 ratio (~564 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11",
            "weight": "167 g (5.89 oz)",
            "dimensions": "151.9 x 71.8 x 8.4 mm (5.98 x 2.83 x 0.33 in)",
            "colors": "Platinum Gray, New Aurora Black, New Moroccan Blue, Carmine Red"
          },
          "variants": [
            {
              "name": "LG G8 ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-g8-thinq/",
            "https://www.gsmarena.com.bd/images/products/lg-g8-thinq.jpg"
          ]
        },
        {
          "name": "LG G8 ThinQ LM-G820N",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG G8 ThinQ LM-G820N 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G8S ThinQ",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g8s-thinq.jpg",
          "specs": {
            "display": "6.21 inches, 97.6 cm, 1080 x 2248 pixels (~401 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3550 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 12",
            "weight": "181 g (6.38 oz)",
            "dimensions": "155.3 x 76.6 x 8 mm (6.11 x 3.02 x 0.31 in)",
            "colors": "Mirror Black, Mirror Teal, Mirror White, Carmine Red, New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG G8S ThinQ 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G8S ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g8s-thinq.jpg"
          ]
        },
        {
          "name": "LG G8S ThinQ Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG G8S ThinQ Dual SIM 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G8S ThinQ Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G8X ThinQ",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g8x-thinq.jpg",
          "specs": {
            "display": "6.4 inches, 100.5 cm, 1080 x 2340 pixels, 19.5:9 ratio (~403 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 12",
            "weight": "192 g (6.77 oz)",
            "dimensions": "159.3 x 75.8 x 8.4 mm (6.27 x 2.98 x 0.33 in)",
            "colors": "New Aurora Black"
          },
          "variants": [
            {
              "name": "LG G8X ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g8x-thinq.jpg"
          ]
        },
        {
          "name": "LG G8X ThinQ Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG G8X ThinQ Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G7 Fit",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-fit.jpg",
          "specs": {
            "display": "6.1 inches, 91.3 cm, 1440 x 3120 pixels, 19.5:9 ratio (~563 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 821 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "156 g (5.50 oz)",
            "dimensions": "153.2 x 71.9 x 8 mm (6.03 x 2.83 x 0.31 in)",
            "colors": "New Aurora Black, New Platinum Gray"
          },
          "variants": [
            {
              "name": "LG G7 Fit 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G7 Fit 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-fit.jpg"
          ]
        },
        {
          "name": "LG G7 One",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-one.jpg",
          "specs": {
            "display": "6.1 inches, 91.3 cm, 1440 x 3120 pixels, 19.5:9 ratio (~563 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 10, Android One",
            "weight": "156 g (5.50 oz)",
            "dimensions": "153.2 x 71.9 x 7.9 mm (6.03 x 2.83 x 0.31 in)",
            "colors": "New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG G7 One 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G7 One 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-one.jpg"
          ]
        },
        {
          "name": "LG G7 ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-thinq-.jpg",
          "specs": {
            "display": "6.1 inches, 91.0 cm, 1440 x 3120 pixels, 19.5:9 ratio (~564 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 10",
            "weight": "162 g (5.71 oz)",
            "dimensions": "153.2 x 71.9 x 7.9 mm (6.03 x 2.83 x 0.31 in)",
            "colors": "New Platinum Gray, New Aurora Black, New Moroccan Blue, Raspberry Rose"
          },
          "variants": [
            {
              "name": "LG G7 ThinQ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G7 ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g7-thinq-.jpg"
          ]
        },
        {
          "name": "LG G7 ThinQ Dual SIM",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG G7 ThinQ Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G7 ThinQ Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G7+ Fit",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG G7+ Fit 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G7+ ThinQ",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "6GB",
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
              "name": "LG G7+ ThinQ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G6",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g6.jpg",
          "specs": {
            "display": "5.7 inches, 84.1 cm, 1440 x 2880 pixels, 18:9 ratio (~564 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 821 (14 nm)",
            "ram": "4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 7.0 (Nougat), upgradable to Android 9.0 (Pie), LG UX 8 UI",
            "weight": "163 g (5.75 oz)",
            "dimensions": "148.9 x 71.9 x 7.9 mm (5.86 x 2.83 x 0.31 in)",
            "colors": "Astro Black, Ice Platinum, Terra Gold, Marine Blue, Mystic White, Raspberry Rose, Moroccan Blue, Lavender Violet"
          },
          "variants": [
            {
              "name": "LG G6 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G6 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g6.jpg"
          ]
        },
        {
          "name": "LG G6 Dual SIM",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
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
              "name": "LG G6 Dual SIM 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G6 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G6+",
          "aliases": [],
          "releaseYear": 2017,
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
              "name": "LG G6+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G6+ Dual SIM",
          "aliases": [],
          "releaseYear": 2017,
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
              "name": "LG G6+ Dual SIM 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-nexus-5x-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~554 ppi pixel density), 5.3 inches (~70.1% screen-to-body ratio)",
            "processor": "Qualcomm MSM8996 Snapdragon 820",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2700 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)| upgradable to 7.0 (Nougat)",
            "weight": "159 g",
            "dimensions": "149.4 x 73.9 x 7.7 mm (5.88 x 2.91 x 0.30 in)",
            "colors": "Carbon| Quartz| Ice"
          },
          "variants": [
            {
              "name": "LG G5 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-nexus-5x-.jpg"
          ]
        },
        {
          "name": "LG G5 F700",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG G5 F700 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G5 H840",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB",
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
              "name": "LG G5 H840 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G5 H860",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "4GB",
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
              "name": "LG G5 H860 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G5 SE",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g5.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~554 ppi pixel density), 5.3 inches (~70.1% screen-to-body ratio)",
            "processor": "Qualcomm MSM8976 Snapdragon 652",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Removable Li-Ion 2800 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)| upgradable to 7.0 (Nougat)",
            "weight": "156 g",
            "dimensions": "149.4 x 73.9 x 7.3 mm (5.88 x 2.91 x 0.29 in)",
            "colors": "Silver| Titan| Gold"
          },
          "variants": [
            {
              "name": "LG G5 SE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g5.jpg"
          ]
        },
        {
          "name": "LG G5 SE dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB",
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
              "name": "LG G5 SE dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G Flex2",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g-flex2.jpg",
          "specs": {
            "display": "5.5 inches, 82.6 cm, 1080 x 1920 pixels, 16:9 ratio (~403 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "152 g (5.36 oz)",
            "dimensions": "149.1 x 75.3 x 9.4 mm (5.87 x 2.96 x 0.37 in)",
            "colors": "Platinum Silver, Flamenco Red"
          },
          "variants": [
            {
              "name": "LG G Flex2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G Flex2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g-flex2.jpg"
          ]
        },
        {
          "name": "LG G Stylo",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g-stylo-.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 720 x 1280 pixels, 16:9 ratio (~258 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm)",
            "ram": "1GB/2GB",
            "storage": [
              "8GB",
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 5.0 (Lollipop), upgradable to 6.0 (Marshmallow)",
            "weight": "165.9 g (5.86 oz)",
            "dimensions": "154.4 x 79.3 x 9.4 mm (6.08 x 3.12 x 0.37 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG G Stylo 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G Stylo 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g-stylo-.jpg"
          ]
        },
        {
          "name": "LG G Vista 2",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g-vista-2-.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1080 x 1920 pixels, 16:9 ratio (~386 ppi density)",
            "processor": "Qualcomm MSM8952 Snapdragon 617 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 5.1 (Lollipop)",
            "weight": "169.8 g (5.96 oz)",
            "dimensions": "154.4 x 79.8 x 9.7 mm (6.08 x 3.14 x 0.38 in)",
            "colors": "Metallic Black"
          },
          "variants": [
            {
              "name": "LG G Vista 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g-vista-2-.jpg"
          ]
        },
        {
          "name": "LG G3 Stylus Dual SIM",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G3 Stylus Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G4",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-google-nexus-5-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~538 ppi pixel density), 5.5 inches (~72.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM8992 Snapdragon 808",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2300 mAh battery",
            "os": "Android 5.1.1 (Lollipop)| 6.0 (Marshmallow)| planned upgrade to 7.0 (Nougat)",
            "weight": "155 g",
            "dimensions": "148.9 x 76.1 x 6.3 - 9.8 mm",
            "colors": "Black| White| Red"
          },
          "variants": [
            {
              "name": "LG G4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-google-nexus-5-.jpg"
          ]
        },
        {
          "name": "LG G4 Beat",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g4s-beat.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~423 ppi pixel density), 5.2 inches (~72.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8939 Snapdragon 615",
            "ram": "1.5GB",
            "storage": [
              "8GB"
            ],
            "battery": "Removable Li-Ion 2300 mAh battery",
            "os": "Android 5.1.1 (Lollipop)",
            "weight": "139 g",
            "dimensions": "142.7 x 72.6 x 9.9 mm (5.62 x 2.86 x 0.39 in)",
            "colors": "Metallic Gray| Ceramic White| Shiny Gold"
          },
          "variants": [
            {
              "name": "LG G4 Beat 1.5GB 8GB",
              "ram": "1.5GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g4s-beat.jpg"
          ]
        },
        {
          "name": "LG G4 Dual",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g4-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~534 ppi pixel density), 5.5 inches (~73.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8992 Snapdragon 808",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Removable Li-Ion 3000 mAh battery",
            "os": "Android 5.1.1 (Lollipop)| upgradable to 6.0 (Marshmallow)",
            "weight": "155 g",
            "dimensions": "149 x 76.2 x 9.8 mm (5.87 x 3.00 x 0.39 in)",
            "colors": "Grey| White| Gold| Leather Black| Leather Brown| Leather Red"
          },
          "variants": [
            {
              "name": "LG G4 Dual 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g4-.jpg"
          ]
        },
        {
          "name": "LG G4 Stylus",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "5.7 inches, 89.6 cm, 720 x 1280 pixels, 16:9 ratio (~258 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm) - H631, H635, H630D, MS631",
            "ram": "1GB/2GB",
            "storage": [
              "8GB",
              "16GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 5.0 (Lollipop), upgradable to 5.1 (Lollipop)",
            "weight": "163 g (5.75 oz)",
            "dimensions": "154.3 x 79.2 x 9.6 mm (6.07 x 3.12 x 0.38 in)",
            "colors": "Metallic Silver, Floral White"
          },
          "variants": [
            {
              "name": "LG G4 Stylus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G4 Stylus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG G4 Stylus 3G",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G4 Stylus 3G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G4 Stylus H630",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G4 Stylus H630 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G4 Stylus H630D",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G4 Stylus H630D 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G4c",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g4c-1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~70.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Removable Li-Ion 2540 mAh battery",
            "os": "Android 5.0.2 (Lollipop)| upgradable to 6.0 (Marshmallow)",
            "weight": "136 g",
            "dimensions": "139.7 x 69.8 x 10.2 mm (5.5 x 2.75 x 0.40 in)",
            "colors": "Metallic Gray| Ceramic White| Shiny Gold"
          },
          "variants": [
            {
              "name": "LG G4c 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g4c-1.jpg"
          ]
        },
        {
          "name": "LG G4S Dual",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1.5GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G4S Dual 1.5GB 8GB",
              "ram": "1.5GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G Pro 2",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g-pro-2.jpg",
          "specs": {
            "display": "5.9 inches, 96.0 cm, 1080 x 1920 pixels, 16:9 ratio (~373 ppi density)",
            "processor": "Qualcomm MSM8974 Snapdragon 800 (28 nm)",
            "ram": "3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3200 mAh, removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 5.0.1 (Lollipop), LG Optimus UI",
            "weight": "172 g (6.07 oz)",
            "dimensions": "157.9 x 81.9 x 8.3 mm (6.22 x 3.22 x 0.33 in)",
            "colors": "Titan, White, Silver, Burgundy"
          },
          "variants": [
            {
              "name": "LG G Pro 2 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG G Pro 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g-pro-2.jpg"
          ]
        },
        {
          "name": "LG G Pro 2 D838",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "3GB",
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
              "name": "LG G Pro 2 D838 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G Vista",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g-vista.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 720 x 1280 pixels, 16:9 ratio (~258 ppi density)",
            "processor": "Qualcomm Snapdragon 400 (28 nm)",
            "ram": "1.5GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 3200 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "167 g (5.89 oz)",
            "dimensions": "152.1 x 79.2 x 9.1 mm (5.99 x 3.12 x 0.36 in)",
            "colors": "Metallic Black"
          },
          "variants": [
            {
              "name": "LG G Vista 1.5GB 8GB",
              "ram": "1.5GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g-vista.jpg"
          ]
        },
        {
          "name": "LG G2 Lite",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "4.5 inches, 57.6 cm, 480 x 800 pixels, 5:3 ratio (~207 ppi density)",
            "processor": "Quad-core 1.2 GHz",
            "ram": "1GB",
            "storage": [
              "4GB"
            ],
            "battery": "Li-Ion 1820 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "153.7 g (5.40 oz)",
            "dimensions": "127.5 x 67.9 x 11.9 mm (5.02 x 2.67 x 0.47 in)",
            "colors": "White, Black, Gold"
          },
          "variants": [
            {
              "name": "LG G2 Lite 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG G2 Mini",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g2-mini.jpg",
          "specs": {
            "display": "4.7 inches, 60.9 cm, 540 x 960 pixels, 16:9 ratio (~234 ppi density)",
            "processor": "Qualcomm MSM8226 Snapdragon 400 (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2440 mAh, removable",
            "os": "Android 4.4.2 (KitKat), LG Optimus UI",
            "weight": "121 g (4.27 oz)",
            "dimensions": "129.6 x 66 x 9.8 mm (5.10 x 2.60 x 0.39 in)",
            "colors": "Titan Black, Lunar White, Red, Gold"
          },
          "variants": [
            {
              "name": "LG G2 Mini 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g2-mini.jpg"
          ]
        },
        {
          "name": "LG G2 mini Dual SIM",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G2 mini Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3.jpg",
          "specs": {
            "display": "5.5 inches, 82.2 cm, 1440 x 2560 pixels, 16:9 ratio (~538 ppi density)",
            "processor": "Qualcomm MSM8975AC Snapdragon 801 (28 nm)",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 6.0 (Marshmallow)",
            "weight": "149.7 g (5.29 oz)",
            "dimensions": "146.3 x 74.7 x 8.9 mm (5.76 x 2.94 x 0.35 in)",
            "colors": "Metallic Black, Silk White (Verizon), Shine Gold (Sprint)"
          },
          "variants": [
            {
              "name": "LG G3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3.jpg"
          ]
        },
        {
          "name": "LG G3 A",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm Snapdragon 800 (28 nm)",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 2610 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "146.8 g (5.19 oz)",
            "dimensions": "141 x 71.6 x 9.8 mm (5.55 x 2.82 x 0.39 in)",
            "colors": "White, Titanium"
          },
          "variants": [
            {
              "name": "LG G3 A 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG G3 Beat",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-beat.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG G3 Beat 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-beat.jpg"
          ]
        },
        {
          "name": "LG G3 Dual SIM",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-dual-sim.jpg",
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
              "name": "LG G3 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-dual-sim.jpg"
          ]
        },
        {
          "name": "LG G3 F400",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB",
            "storage": [
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
              "name": "LG G3 F400 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G3 F400 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G3 LTE-A",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1440 x 2560 pixels, 16:9 ratio (~534 ppi density)",
            "processor": "Qualcomm APQ8084 Snapdragon 805 (28 nm)",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 5.0.1 (Lollipop)",
            "weight": "154 g (5.43 oz)",
            "dimensions": "146.3 x 74.6 x 9.1 mm (5.76 x 2.94 x 0.36 in)",
            "colors": "Silk White, Shine Gold, Metallic Black, Wine, Moon Violet"
          },
          "variants": [
            {
              "name": "LG G3 LTE-A 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG G3 s",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-s.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8926 Snapdragon 400 (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 5.0.2 (Lollipop)",
            "weight": "134 g (4.73 oz)",
            "dimensions": "137.7 x 69.6 x 10.3 mm (5.42 x 2.74 x 0.41 in)",
            "colors": "Metallic Black, Silk White, Shine Gold"
          },
          "variants": [
            {
              "name": "LG G3 s 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-s.jpg"
          ]
        },
        {
          "name": "LG G3 s Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm Snapdragon 400 (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "-",
            "dimensions": "137.7 x 69.6 x 10.3 mm (5.42 x 2.74 x 0.41 in)",
            "colors": "Metallic Black, Silk White"
          },
          "variants": [
            {
              "name": "LG G3 s Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG G3 Screen",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-screen.jpg",
          "specs": {
            "display": "5.9 inches, 96.0 cm, 1080 x 1920 pixels, 16:9 ratio (~373 ppi density)",
            "processor": "LG Nuclun",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "182 g (6.42 oz)",
            "dimensions": "157.8 x 81.8 x 9.5 mm (6.21 x 3.22 x 0.37 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "LG G3 Screen 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-screen.jpg"
          ]
        },
        {
          "name": "LG G3 Stylus",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-stylus.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 540 x 960 pixels, 16:9 ratio (~200 ppi density)",
            "processor": "Mediatek MT6582 (28 nm)",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "163 g (5.75 oz)",
            "dimensions": "149.3 x 75.9 x 10.2 mm (5.88 x 2.99 x 0.40 in)",
            "colors": "Black, White, Gold"
          },
          "variants": [
            {
              "name": "LG G3 Stylus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-g3-stylus.jpg"
          ]
        },
        {
          "name": "LG G Flex",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g-flex.jpg",
          "specs": {
            "display": "Curved P-OLED capacitive touchscreen 16M colors, 720 x 1280 pixels (~245 ppi pixel density), 6.0 inches (~75.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974 Snapdragon 800",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "Non-removable Li-Po 3500 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "177 g",
            "dimensions": "160.5 x 81.6 x 8.7 mm (6.32 x 3.21 x 0.34 in)",
            "colors": "Titan silver"
          },
          "variants": [
            {
              "name": "LG G Flex 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g-flex.jpg"
          ]
        },
        {
          "name": "LG G Pro Lite",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g-pro-lite-d680.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~200 ppi pixel density), 5.5 inches (~72.2% screen-to-body ratio)",
            "processor": "Mediatek MT6577",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Removable Li-Ion 3140 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)| upgrad&#1072;ble to 4.4.2 (KitKat)",
            "weight": "161 g",
            "dimensions": "150.2 x 76.9 x 9.4 mm (5.91 x 3.03 x 0.37 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "LG G Pro Lite 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g-pro-lite-d680.jpg"
          ]
        },
        {
          "name": "LG G Pro Lite Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/LG-G-Pro-Lite-Dual.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~200 ppi pixel density), 5.5 inches (~72.2% screen-to-body ratio)",
            "processor": "Mediatek MT6577",
            "ram": "1GB",
            "storage": [
              "8GB"
            ],
            "battery": "Removable Li-Ion 3140 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)",
            "weight": "161 g",
            "dimensions": "150.2 x 76.9 x 9.4 mm (5.91 x 3.03 x 0.37 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "LG G Pro Lite Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/LG-G-Pro-Lite-Dual.jpg"
          ]
        },
        {
          "name": "LG G2",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g2-ofic.jpg",
          "specs": {
            "display": "True HD-IPS + LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~75.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM8974 Snapdragon 800",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 3000 mAh battery",
            "os": "Android 4.2.2 (Jelly Bean)| upgradable to 5.0.2 (Lollipop)",
            "weight": "143 g",
            "dimensions": "138.5 x 70.9 x 8.9 mm (5.45 x 2.79 x 0.35 in)",
            "colors": "Black| White| Red| Gold"
          },
          "variants": [
            {
              "name": "LG G2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g2-ofic.jpg"
          ]
        },
        {
          "name": "LG G2 F320",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
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
              "name": "LG G2 F320 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G2 F320 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG G2 L-01F",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
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
              "name": "LG G2 L-01F 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG GX",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
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
              "name": "LG GX 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        }
      ]
    },
    {
      "name": "K Series",
      "models": [
        {
          "name": "LG K22",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k22.jpg",
          "specs": {
            "display": "6.2 inches, 95.9 cm, 720 x 1520 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Qualcomm QM215 Snapdragon 215 (28 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3000 mAh",
            "os": "Android 10",
            "weight": "169.5 g (6.00 oz)",
            "dimensions": "155.7 x 75.4 x 8.4 mm (6.13 x 2.97 x 0.33 in)",
            "colors": "Titan, Blue"
          },
          "variants": [
            {
              "name": "LG K22 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K22 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k22.jpg"
          ]
        },
        {
          "name": "LG K22+",
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
              "name": "LG K22+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K22+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K22+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K22+ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K31",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k31.jpg",
          "specs": {
            "display": "5.7 inches, 81.1 cm, 720 x 1520 pixels, 19:9 ratio (~295 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3000 mAh",
            "os": "Android 10, LG UX 9.1",
            "weight": "146 g (5.15 oz)",
            "dimensions": "147.8 x 71.1 x 8.6 mm (5.82 x 2.80 x 0.34 in)",
            "colors": "Gray"
          },
          "variants": [
            {
              "name": "LG K31 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k31.jpg"
          ]
        },
        {
          "name": "LG K31 Rebel",
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
              "name": "LG K31 Rebel 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K31 Rebel 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K31 Rebel 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K31 Rebel 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K41S",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k41s.jpg",
          "specs": {
            "display": "6.55 inches, 103.6 cm, 720 x 1600 pixels, 20:9 ratio (~268 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "191.7 g (6.77 oz)",
            "dimensions": "165.8 x 76.5 x 8.3 mm (6.53 x 3.01 x 0.33 in)",
            "colors": "Titanium, Black, White"
          },
          "variants": [
            {
              "name": "LG K41S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k41s.jpg"
          ]
        },
        {
          "name": "LG K42",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k42.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, upgradable to Android 11",
            "weight": "182 g (6.42 oz)",
            "dimensions": "165 x 76.7 x 8.4 mm (6.50 x 3.02 x 0.33 in)",
            "colors": "Gray, Green"
          },
          "variants": [
            {
              "name": "LG K42 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k42.jpg"
          ]
        },
        {
          "name": "LG K42 Dual SIM",
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
              "name": "LG K42 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K42 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K42 Dual SIM 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K42 Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K51",
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
              "name": "LG K51 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K51 LMK500QM",
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
              "name": "LG K51 LMK500QM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 LMK500QM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 LMK500QM 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K51 LMK500QM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K51S",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k51s.jpg",
          "specs": {
            "display": "6.55 inches, 93.6 cm, 720 x 1600 pixels, 20:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "194.5 g (6.88 oz)",
            "dimensions": "165.2 x 76.7 x 8.3 mm (6.50 x 3.02 x 0.33 in)",
            "colors": "Titanium, Pink, Blue, Red"
          },
          "variants": [
            {
              "name": "LG K51S 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k51s.jpg"
          ]
        },
        {
          "name": "LG K52",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k52.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "188 g (6.63 oz)",
            "dimensions": "165 x 76.7 x 8.4 mm (6.50 x 3.02 x 0.33 in)",
            "colors": "White, Blue, Red"
          },
          "variants": [
            {
              "name": "LG K52 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k52.jpg"
          ]
        },
        {
          "name": "LG K62",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k62.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165 x 76.7 x 8.4 mm (6.50 x 3.02 x 0.33 in)",
            "colors": "White, Sky Blue, Red"
          },
          "variants": [
            {
              "name": "LG K62 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K62 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k62.jpg"
          ]
        },
        {
          "name": "LG K62+",
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
              "name": "LG K62+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K62+ K525BMW",
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
              "name": "LG K62+ K525BMW 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ K525BMW 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ K525BMW 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K62+ K525BMW 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K71",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/LG-K71.jpg",
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "220 g (7.76 oz)",
            "dimensions": "171.4 x 77.7 x 8.7 mm (6.75 x 3.06 x 0.34 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG K71 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-k71/",
            "https://www.gsmarena.com.bd/images/products/LG-K71.jpg"
          ]
        },
        {
          "name": "LG K8X",
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
              "name": "LG K8X 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8X 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8X 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K92 5G",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k92-5g.jpg",
          "specs": {
            "display": "6.7 inches, 108.4 cm, 1080 x 2400 pixels, 20:9 ratio (~393 ppi density)",
            "processor": "Qualcomm SM6350 Snapdragon 690 5G (8 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "202.4 g (7.13 oz)",
            "dimensions": "166.4 x 77.2 x 8.4 mm (6.55 x 3.04 x 0.33 in)",
            "colors": "Titan Gray"
          },
          "variants": [
            {
              "name": "LG K92 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k92-5g.jpg"
          ]
        },
        {
          "name": "LG K12 Max",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K12 Max 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12 Max 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12 Max 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K12 Prime",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K12 Prime 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12 Prime 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12 Prime 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K12+",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K12+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K12+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K20 Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K20 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K20 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K20 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K30 2019 Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K30 2019 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K30 2019 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K30 2019 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K40",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k40-.jpg",
          "specs": {
            "display": "5.7 inches, 83.8 cm, 720 x 1440 pixels, 18:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), LG UX 7",
            "weight": "144 g (5.08 oz)",
            "dimensions": "153 x 71.9 x 8.3 mm (6.02 x 2.83 x 0.33 in)",
            "colors": "Black, New Moroccan Blue, New Platinum Gray"
          },
          "variants": [
            {
              "name": "LG K40 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K40 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k40-.jpg"
          ]
        },
        {
          "name": "LG K40 Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K40 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K40 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K40 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K40S",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "6.1 inches, 92.9 cm, 720 x 1520 pixels, 19:9 ratio (~276 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10",
            "weight": "186 g (6.56 oz)",
            "dimensions": "156.3 x 73.9 x 8.6 mm (6.15 x 2.91 x 0.34 in)",
            "colors": "New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG K40S 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K40S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG K40S Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K40S Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K40S Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K40S Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K50",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k50-.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 720 x 1520 pixels, 19:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "170 g (6.00 oz)",
            "dimensions": "161.3 x 77 x 8.7 mm (6.35 x 3.03 x 0.34 in)",
            "colors": "Aurora Black, Moroccan Blue, Platinum Gray"
          },
          "variants": [
            {
              "name": "LG K50 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k50-.jpg"
          ]
        },
        {
          "name": "LG K50 Dual SIM",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K50 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K50 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K50 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K50S",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k50s-.jpg",
          "specs": {
            "display": "6.5 inches, 105.5 cm, 720 x 1520 pixels, 19:9 ratio (~259 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "194 g (6.84 oz)",
            "dimensions": "165.8 x 77.5 x 8.2 mm (6.53 x 3.05 x 0.32 in)",
            "colors": "New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG K50S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k50s-.jpg"
          ]
        },
        {
          "name": "LG K8S",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K8S 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8S 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k10-2018-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K10 2018 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k10-2018-.jpg"
          ]
        },
        {
          "name": "LG K10 Alpha 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K10 Alpha 2018 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 Alpha 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 Alpha 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10+ 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K10+ 2018 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10+ 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10+ 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K11",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K11 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K11 Alpha",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K11 Alpha 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 Alpha 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 Alpha 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K11 Dual SIM",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K11 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K11 Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k11-plus.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat), upgradable to Android 8.1 (Oreo)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "148.7 x 75.3 x 8.7 mm (5.85 x 2.96 x 0.34 in)",
            "colors": "Moroccan Blue, Terra Gold, Black"
          },
          "variants": [
            {
              "name": "LG K11 Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K11 Plus 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K11 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k11-plus.jpg"
          ]
        },
        {
          "name": "LG K11 X410TKB",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K11 X410TKB 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 X410TKB 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K11 X410TKB 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K30",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k30-.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2880 mAh, non-removable",
            "os": "Android 7.1 (Nougat)",
            "weight": "168.1 g (5.93 oz)",
            "dimensions": "148.6 x 75 x 8.6 mm (5.85 x 2.95 x 0.34 in)",
            "colors": "New Aurora Black, Blue"
          },
          "variants": [
            {
              "name": "LG K30 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k30-.jpg"
          ]
        },
        {
          "name": "LG K8 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k8-2018-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K8 2018 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k8-2018-.jpg"
          ]
        },
        {
          "name": "LG K8+",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K8+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K9",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG K9 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K9 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 2017",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k10-2017.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 2017 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k10-2017.jpg"
          ]
        },
        {
          "name": "LG K10 2017 M250",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 2017 M250 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 2017 M250e",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 2017 M250e 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250e 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250e 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 2017 M250e 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K3 2017",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k3-2017.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K3 2017 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 2017 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 2017 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 2017 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k3-2017.jpg"
          ]
        },
        {
          "name": "LG K4 2017",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k4-2017.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 2017 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k4-2017.jpg"
          ]
        },
        {
          "name": "LG K4 2017 Dual",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 2017 Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K4 2017 Dual SIM X230",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 2017 Dual SIM X230 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual SIM X230 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual SIM X230 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 Dual SIM X230 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K4 2017 X230",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 2017 X230 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 X230 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 X230 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 2017 X230 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K7i Mosquito Away",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K7i Mosquito Away 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K7i Mosquito Away 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K7i Mosquito Away 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K7i Mosquito Away 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K8 2017",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k8-2017.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K8 2017 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k8-2017.jpg"
          ]
        },
        {
          "name": "LG K8 2017 X240",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K8 2017 X240 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 X240 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 X240 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 2017 X240 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K8 Dual 2017",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K8 Dual 2017 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 2017 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 2017 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 2017 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k10.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "148.7 x 75.3 x 8.7 mm (5.85 x 2.96 x 0.34 in)",
            "colors": "Aurora Black, Moroccan Blue, Terra Gold"
          },
          "variants": [
            {
              "name": "LG K10 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K10 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k10.jpg"
          ]
        },
        {
          "name": "LG K10 Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 F670",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 F670 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 F670 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 F670 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 F670 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 LTE",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.1.2 (Nougat)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "148.7 x 75.3 x 8.7 mm (5.85 x 2.96 x 0.34 in)",
            "colors": "Aurora Black, Moroccan Blue, Terra Gold"
          },
          "variants": [
            {
              "name": "LG K10 LTE 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K10 LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG K10 LTE Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 LTE Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 LTE K420ds",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 LTE K420ds 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420ds 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420ds 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420ds 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K10 LTE K420N",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K10 LTE K420N 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420N 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420N 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K10 LTE K420N 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K3",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-k3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~61.6% screen-to-body ratio)",
            "processor": "Mediatek MT6737M - K100",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1940 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "127 g",
            "dimensions": "133.8 x 67.7 x 9.4 mm (5.27 x 2.67 x 0.37 in)",
            "colors": "Black/Dark BLue"
          },
          "variants": [
            {
              "name": "LG K3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-k3.jpg"
          ]
        },
        {
          "name": "LG K3 Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K3 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K3 K100",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K3 K100 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 K100 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 K100 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K3 K100 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K4 LTE",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-k4-2017.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~195 ppi pixel density), 5.0 inches (~66.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8909 Snapdragon 210",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2500 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "138 g",
            "dimensions": "144.7 x 72.6 x 7.9 mm (5.70 x 2.86 x 0.31 in)",
            "colors": "Black| Titan"
          },
          "variants": [
            {
              "name": "LG K4 LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-k4-2017.jpg"
          ]
        },
        {
          "name": "LG K4 LTE K120e",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 LTE K120e 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K120e 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K120e 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K120e 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K4 LTE K121",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K4 LTE K121 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K121 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K121 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K4 LTE K121 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-k5-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~196 ppi pixel density), 5.0 inches (~66.4% screen-to-body ratio)",
            "processor": "Mediatek MT6582",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 5.1.1 (Lollipop)",
            "weight": "128 g",
            "dimensions": "145 x 71.6 x 8.9 mm (5.71 x 2.82 x 0.35 in)",
            "colors": "Gold| Silver| Titan"
          },
          "variants": [
            {
              "name": "LG K5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K5 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-k5-.jpg"
          ]
        },
        {
          "name": "LG K7",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k7.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Mediatek MT6580M (3G model)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2125 mAh, removable",
            "os": "Android 5.1 (Lollipop)",
            "weight": "161 g (5.68 oz)",
            "dimensions": "143.6 x 72.5 x 9.1 mm (5.65 x 2.85 x 0.36 in)",
            "colors": "White, Black, Gold; Titan (LTE model)"
          },
          "variants": [
            {
              "name": "LG K7 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k7.jpg"
          ]
        },
        {
          "name": "LG K7 LTE",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Mediatek MT6580M (3G model)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2125 mAh, removable",
            "os": "Android 5.1 (Lollipop)",
            "weight": "161 g (5.68 oz)",
            "dimensions": "143.6 x 72.5 x 9.1 mm (5.65 x 2.85 x 0.36 in)",
            "colors": "White, Black, Gold; Titan (LTE model)"
          },
          "variants": [
            {
              "name": "LG K7 LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG K8",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-k8.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8909 Snapdragon 210 (28 nm) - Global",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2500 mAh, removable",
            "os": "Android 7.1.2 (Nougat)",
            "weight": "152 g (5.36 oz)",
            "dimensions": "146.3 x 73.2 x 8.2 mm (5.76 x 2.88 x 0.32 in)",
            "colors": "Aurora Black, Moroccan Blue, Terra Gold"
          },
          "variants": [
            {
              "name": "LG K8 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG K8 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-k8.jpg"
          ]
        },
        {
          "name": "LG K8 4G",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K8 4G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 4G 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 4G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 4G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG K8 Dual",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG K8 Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG K8 Dual 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        }
      ]
    },
    {
      "name": "Q / Stylus / Stylo",
      "models": [
        {
          "name": "LG Q31",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q31.jpg",
          "specs": {
            "display": "5.7 inches, 81.1 cm, 720 x 1520 pixels, 19:9 ratio (~295 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3000 mAh",
            "os": "Android 10",
            "weight": "145 g (5.11 oz)",
            "dimensions": "147.9 x 71 x 8.7 mm (5.82 x 2.80 x 0.34 in)",
            "colors": "Silver"
          },
          "variants": [
            {
              "name": "LG Q31 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q31.jpg"
          ]
        },
        {
          "name": "LG Q51",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q51.jpg",
          "specs": {
            "display": "6.5 inches, 105.5 cm, 720 x 1520 pixels, 19:9 ratio (~259 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "-",
            "dimensions": "164.5 x 77.5 x 8.4 mm (6.48 x 3.05 x 0.33 in)",
            "colors": "Frozen White, Moonlight Titanium"
          },
          "variants": [
            {
              "name": "LG Q51 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q51.jpg"
          ]
        },
        {
          "name": "LG Q52",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q52.jpg",
          "specs": {
            "display": "6.6 inches, 105.2 cm, 720 x 1600 pixels, 20:9 ratio (~266 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "186 g (6.56 oz)",
            "dimensions": "165 x 76.7 x 8.4 mm (6.50 x 3.02 x 0.33 in)",
            "colors": "Silky White, Silky Red"
          },
          "variants": [
            {
              "name": "LG Q52 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q52.jpg"
          ]
        },
        {
          "name": "LG Q61",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q61.jpg",
          "specs": {
            "display": "6.53 inches, 104.7 cm, 1080 x 2340 pixels, 19.5:9 ratio (~395 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "-",
            "dimensions": "164.5 x 77.5 x 8.3 mm (6.48 x 3.05 x 0.33 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG Q61 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q61.jpg"
          ]
        },
        {
          "name": "LG Q92",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q92.jpg",
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
              "name": "LG Q92 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q92 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q92 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q92 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q92.jpg"
          ]
        },
        {
          "name": "LG Stylo 6",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
          "specs": {
            "display": "6.8 inches, 109.8 cm, 1080 x 2460 pixels (~395 ppi density)",
            "processor": "Mediatek MT6765 Helio P35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "219 g (7.72 oz)",
            "dimensions": "171.2 x 77.7 x 8.6 mm (6.74 x 3.06 x 0.34 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG Stylo 6 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG Q60",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q60-.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 720 x 1520 pixels, 19:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie), LG UX 7",
            "weight": "172 g (6.07 oz)",
            "dimensions": "161.3 x 77 x 8.7 mm (6.35 x 3.03 x 0.34 in)",
            "colors": "New Moroccan Blue, Aurora Black"
          },
          "variants": [
            {
              "name": "LG Q60 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q60-.jpg"
          ]
        },
        {
          "name": "LG Q70",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q70.jpg",
          "specs": {
            "display": "6.4 inches, 101.4 cm, 1080 x 2310 pixels (~398 ppi density)",
            "processor": "Qualcomm SDM675 Snapdragon 675 (11 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10, LG UX 9",
            "weight": "198 g (6.98 oz)",
            "dimensions": "162.1 x 76.8 x 8.3 mm (6.38 x 3.02 x 0.33 in)",
            "colors": "Mirror Black"
          },
          "variants": [
            {
              "name": "LG Q70 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q70.jpg"
          ]
        },
        {
          "name": "LG Q70 LMQ620WA",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q70 LMQ620WA 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q70 LMQ620WA 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q70 LMQ620WA 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q9 One",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q9 One 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q9 One 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q9 One 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylo 5",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-5.jpg",
          "specs": {
            "display": "6.2 inches, 99.2 cm, 1080 x 2160 pixels, 18:9 ratio (~390 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3500 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "179 g (6.31 oz)",
            "dimensions": "160 x 77.7 x 8.4 mm (6.30 x 3.06 x 0.33 in)",
            "colors": "Blonde Rose, Platinum Gray"
          },
          "variants": [
            {
              "name": "LG Stylo 5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-5.jpg"
          ]
        },
        {
          "name": "LG Stylo 5+",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Stylo 5+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 5+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 5+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylo 5X",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Stylo 5X 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 5X 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 5X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q Stylus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-q-stylus.jpg",
          "specs": {
            "display": "6.2 inches, 99.7 cm, 1080 x 2160 pixels, 18:9 ratio (~389 ppi density)",
            "processor": "Mediatek MT6750 - Q Stylus/Q Stylus α",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3300 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "171 g (6.03 oz)",
            "dimensions": "160.1 x 77.7 x 8.1 mm (6.30 x 3.06 x 0.32 in)",
            "colors": "Aurora Black, Moroccan Blue, Lavender Violet"
          },
          "variants": [
            {
              "name": "LG Q Stylus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Q Stylus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-q-stylus/",
            "https://www.gsmarena.com.bd/images/products/lg-q-stylus.jpg"
          ]
        },
        {
          "name": "LG Q Stylus Alpha",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q Stylus Alpha 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q Stylus Alpha 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q Stylus Alpha 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q Stylus Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q Stylus Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q Stylus Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q Stylus Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q7-.jpg",
          "specs": {
            "display": "5.5 inches, 77.0 cm, 1080 x 2160 pixels, 18:9 ratio (~442 ppi density)",
            "processor": "Mediatek MT6750S (28 nm) - Q7, Q7α",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo), upgradable to Android 9.0 (Pie)",
            "weight": "145 g (5.11 oz)",
            "dimensions": "143.8 x 69.3 x 8.4 mm (5.66 x 2.73 x 0.33 in)",
            "colors": "Aurora Black, Moroccan Blue, Lavender Violet"
          },
          "variants": [
            {
              "name": "LG Q7 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Q7 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q7-.jpg"
          ]
        },
        {
          "name": "LG Q7 Alpha",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7 Alpha 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Alpha 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Alpha 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7 Dual",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Dual 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Dual 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7 Dual Q610EMW",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7 Dual Q610EMW 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Dual Q610EMW 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Dual Q610EMW 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7 Q610ZM",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7 Q610ZM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Q610ZM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7 Q610ZM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7+",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7+ Dual Q610NA",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7+ Dual Q610NA 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ Dual Q610NA 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ Dual Q610NA 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q7+ Dual Q610YB",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q7+ Dual Q610YB 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ Dual Q610YB 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q7+ Dual Q610YB 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q8 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q8-2018-.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Q8 2018 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q8 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q8 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q8-2018-.jpg"
          ]
        },
        {
          "name": "LG Q9",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q9-.jpg",
          "specs": {
            "display": "6.1 inches, 91.0 cm, 1440 x 3120 pixels, 19.5:9 ratio (~564 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 821 (14 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "159 g (5.61 oz)",
            "dimensions": "153.2 x 71.9 x 7.9 mm (6.03 x 2.83 x 0.31 in)",
            "colors": "Carmine Red, New Aurora Black, New Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG Q9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q9-.jpg"
          ]
        },
        {
          "name": "LG Stylo 4",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Stylo 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylo 4+",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Stylo 4+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 4+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 4+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q6",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q6.jpg",
          "specs": {
            "display": "5.5 inches, 77.0 cm, 1080 x 2160 pixels, 18:9 ratio (~442 ppi density)",
            "processor": "Qualcomm MSM8940 Snapdragon 435 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 3000 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat), upgradable to Android 8.0 (Oreo), LG UI 5.0",
            "weight": "149 g (5.26 oz)",
            "dimensions": "142.5 x 69.3 x 8.1 mm (5.61 x 2.73 x 0.32 in)",
            "colors": "Astro Black, Ice Platinum, Mystic White, Terra Gold"
          },
          "variants": [
            {
              "name": "LG Q6 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Q6 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Q6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q6.jpg"
          ]
        },
        {
          "name": "LG Q6 alpha",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Q6 alpha 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 alpha 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 alpha 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 alpha 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q6 Dual SIM",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Q6 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q6+",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Q6+ 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6+ 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6+ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q6+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Q8",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-q8-.jpg",
          "specs": {
            "display": "6.2 inches, 99.7 cm, 1080 x 2160 pixels, 18:9 ratio (~389 ppi density)",
            "processor": "Qualcomm SDM450 Snapdragon 450 (14 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 3300 mAh, non-removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "172 g (6.07 oz)",
            "dimensions": "160.1 x 77.7 x 8.4 mm (6.30 x 3.06 x 0.33 in)",
            "colors": "Aurora Black, Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG Q8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-q8-.jpg"
          ]
        },
        {
          "name": "LG Q8 X800K",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Q8 X800K 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q8 X800K 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q8 X800K 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Q8 X800K 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylo 3",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Stylo 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 3 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylo 3 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-3-plus.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 1080 x 1920 pixels, 16:9 ratio (~386 ppi density)",
            "processor": "Qualcomm MSM8940 Snapdragon 435 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3080 mAh, removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "150 g (5.29 oz)",
            "dimensions": "155.7 x 79.8 x 7.4 mm (6.13 x 3.14 x 0.29 in)",
            "colors": "Titan"
          },
          "variants": [
            {
              "name": "LG Stylo 3 Plus 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-stylo-3-plus.jpg"
          ]
        },
        {
          "name": "LG Stylus 3",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylus-3-.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 720 x 1280 pixels, 16:9 ratio (~258 ppi density)",
            "processor": "Mediatek MT6750 - M400DK",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3200 mAh, removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "149 g (5.26 oz)",
            "dimensions": "155.6 x 79.8 x 7.4 mm (6.13 x 3.14 x 0.29 in)",
            "colors": "Titan, Pink gold"
          },
          "variants": [
            {
              "name": "LG Stylus 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Stylus 3 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Stylus 3 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-stylus-3-.jpg"
          ]
        },
        {
          "name": "LG Stylo 2",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-stylo2-1.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~258 ppi pixel density), 5.7 inches (~72.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 3000 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "144.6 g",
            "dimensions": "155 x 79.5 x 7.4 mm (6.10 x 3.13 x 0.29 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Stylo 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-stylo2-1.jpg"
          ]
        },
        {
          "name": "LG Stylo 2 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Stylo 2 Plus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 Plus 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylo 2 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylus 2",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-stylus-2.jpg",
          "specs": {
            "display": "5.7 inches, 89.6 cm, 720 x 1280 pixels, 16:9 ratio (~258 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 6.0 (Marshmallow), upgradable to Android 7.0 (Nougat)",
            "weight": "142 g (5.01 oz)",
            "dimensions": "155 x 79.6 x 7.4 mm (6.10 x 3.13 x 0.29 in)",
            "colors": "Titan, White, Brown"
          },
          "variants": [
            {
              "name": "LG Stylus 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-stylus-2.jpg"
          ]
        },
        {
          "name": "LG Stylus 2 Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Stylus 2 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Stylus 2 Plus",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-stylus-2-plus-.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels, 5.7 inches (~72.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8937 Snapdragon 430",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2900 or 3000 mAh battery",
            "os": "Android 6.0 (Marshmallow)| upgradable to 7.0 (Nougat)",
            "weight": "146 g",
            "dimensions": "155 x 79.6 x 7.4 mm (6.10 x 3.13 x 0.29 in)",
            "colors": "Titan| Gold| Brown"
          },
          "variants": [
            {
              "name": "LG Stylus 2 Plus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-stylus-2-plus-.jpg"
          ]
        },
        {
          "name": "LG Stylus 2 Plus Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Stylus 2 Plus Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Stylus 2 Plus Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        }
      ]
    },
    {
      "name": "W Series",
      "models": [
        {
          "name": "LG W41",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w41.jpg",
          "specs": {
            "display": "6.55 inches, 118.3 cm, 900 x 1600 pixels, 16:9 ratio (~280 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10",
            "weight": "201 g (7.09 oz)",
            "dimensions": "166.5 x 77.3 x 9.3 mm (6.56 x 3.04 x 0.37 in)",
            "colors": "Magic Blue, Laser Blue"
          },
          "variants": [
            {
              "name": "LG W41 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w41.jpg"
          ]
        },
        {
          "name": "LG W41 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-pro.jpg",
          "specs": {
            "display": "6.55 inches, 118.3 cm, 900 x 1600 pixels, 16:9 ratio (~280 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10",
            "weight": "201 g (7.09 oz)",
            "dimensions": "166.5 x 77.3 x 9.3 mm (6.56 x 3.04 x 0.37 in)",
            "colors": "Magic Blue, Laser Blue"
          },
          "variants": [
            {
              "name": "LG W41 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-pro.jpg"
          ]
        },
        {
          "name": "LG W41+",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-plus.jpg",
          "specs": {
            "display": "6.55 inches, 118.3 cm, 900 x 1600 pixels, 16:9 ratio (~280 ppi density)",
            "processor": "Mediatek MT6765G Helio G35 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 10",
            "weight": "201 g (7.09 oz)",
            "dimensions": "166.5 x 77.3 x 9.3 mm (6.56 x 3.04 x 0.37 in)",
            "colors": "Magic Blue, Laser Blue"
          },
          "variants": [
            {
              "name": "LG W41+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w41-plus.jpg"
          ]
        },
        {
          "name": "LG W10 Alpha",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w10-alpha-.jpg",
          "specs": {
            "display": "5.71 inches, 81.7 cm, 720 x 1512 pixels, 19:9 ratio (~293 ppi density)",
            "processor": "Unisoc SC9863A (28 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 3450 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "170 g (6.00 oz)",
            "dimensions": "147.3 x 71 x 8.9 mm (5.80 x 2.80 x 0.35 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "LG W10 Alpha 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w10-alpha-.jpg"
          ]
        },
        {
          "name": "LG W11",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w11.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "-",
            "dimensions": "166.2 x 76.3 x 8.4 mm (6.54 x 3.00 x 0.33 in)",
            "colors": "Midnight Blue"
          },
          "variants": [
            {
              "name": "LG W11 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w11.jpg"
          ]
        },
        {
          "name": "LG W31",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w31.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "173.6 g (6.14 oz)",
            "dimensions": "166.2 x 76.3 x 8.4 mm (6.54 x 3.00 x 0.33 in)",
            "colors": "Midnight Blue"
          },
          "variants": [
            {
              "name": "LG W31 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG W31 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w31.jpg"
          ]
        },
        {
          "name": "LG W31+",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w31-plus.jpg",
          "specs": {
            "display": "6.52 inches, 102.6 cm, 720 x 1600 pixels, 20:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10",
            "weight": "173.6 g (6.14 oz)",
            "dimensions": "166.2 x 76.3 x 8.4 mm (6.54 x 3.00 x 0.33 in)",
            "colors": "Midnight Blue"
          },
          "variants": [
            {
              "name": "LG W31+ 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w31-plus.jpg"
          ]
        },
        {
          "name": "LG W10",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w10.jpg",
          "specs": {
            "display": "6.19 inches, 96.0 cm, 720 x 1512 pixels, 19:9 ratio (~271 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "164 g (5.78 oz)",
            "dimensions": "156 x 76.2 x 8.5 mm (6.14 x 3.00 x 0.33 in)",
            "colors": "Tulip Purple, Smokey Grey"
          },
          "variants": [
            {
              "name": "LG W10 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w10.jpg"
          ]
        },
        {
          "name": "LG W30",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w30.jpg",
          "specs": {
            "display": "6.26 inches, 97.8 cm, 720 x 1520 pixels, 19:9 ratio (~269 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "175 g (6.17 oz)",
            "dimensions": "159 x 76.5 x 8.2 mm (6.26 x 3.01 x 0.32 in)",
            "colors": "Thunder Blue, Platinum Grey, Aurora Green"
          },
          "variants": [
            {
              "name": "LG W30 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG W30 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w30.jpg"
          ]
        },
        {
          "name": "LG W30 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-w30-pro.jpg",
          "specs": {
            "display": "6.22 inches, 96.6 cm, 720 x 1520 pixels, 19:9 ratio (~270 ppi density)",
            "processor": "Qualcomm SDM632 Snapdragon 632 (14 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4050 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "172 g (6.07 oz)",
            "dimensions": "157.7 x 75.9 x 8.3 mm (6.21 x 2.99 x 0.33 in)",
            "colors": "Midnight Blue, Midnight Purple"
          },
          "variants": [
            {
              "name": "LG W30 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-w30-pro.jpg"
          ]
        },
        {
          "name": "LG W30+",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG W30+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG W30+ 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        }
      ]
    },
    {
      "name": "X Series",
      "models": [
        {
          "name": "LG X Screen Dual SIM",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG X Screen Dual SIM 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Screen Dual SIM 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Xpression Plus 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Xpression Plus 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Xpression Plus 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X2 2019",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG X2 2019 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X2 2019 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X4 2019",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG X4 2019 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X4 2019 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X6",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG X6 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Xpression Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Xpression Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Xpression Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Power3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x-power3.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 8.1 (Oreo)",
            "weight": "171 g (6.03 oz)",
            "dimensions": "154.7 x 78.1 x 8.9 mm (6.09 x 3.07 x 0.35 in)",
            "colors": "Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG X Power3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x-power3.jpg"
          ]
        },
        {
          "name": "LG X2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG X2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X4",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG X4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X4+",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x4-plus-.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "172.3 g (6.07 oz)",
            "dimensions": "148.6 x 75.1 x 8.6 mm (5.85 x 2.96 x 0.34 in)",
            "colors": "Lavender Violet, Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG X4+ 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x4-plus-.jpg"
          ]
        },
        {
          "name": "LG X5 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG X5 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X5 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Charge",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Charge 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Charge 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Charge 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Charge 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Fast",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Fast 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Fast 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Fast 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Fast 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Power2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x-power2.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6750",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 4500 mAh, non-removable",
            "os": "Android 7.0 (Nougat), upgradable to Android 8.1 (Oreo)",
            "weight": "164 g (5.78 oz)",
            "dimensions": "154.7 x 78.1 x 8.4 mm (6.09 x 3.07 x 0.33 in)",
            "colors": "Black Titan, Shiny Titan, Shiny Gold, Shiny Blue"
          },
          "variants": [
            {
              "name": "LG X Power2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG X Power2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x-power2.jpg"
          ]
        },
        {
          "name": "LG X Style Dual SIM",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Style Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X venture",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x-venture-.jpg",
          "specs": {
            "display": "5.2 inches, 74.9 cm, 1080 x 1920 pixels, 16:9 ratio (~423 ppi density)",
            "processor": "Qualcomm MSM8940 Snapdragon 435 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 4100 mAh, non-removable",
            "os": "Android 7.0 (Nougat), LG UX 5",
            "weight": "166.5 g (5.89 oz)",
            "dimensions": "154 x 75.8 x 9.3 mm (6.06 x 2.98 x 0.37 in)",
            "colors": "Black, Chocolate Brown"
          },
          "variants": [
            {
              "name": "LG X venture 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x-venture-.jpg"
          ]
        },
        {
          "name": "LG X300",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X300 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X300 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X300 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X300 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X400",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X400 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X400 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X400 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X400 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X401",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X401 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X401 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X401 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X401 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X500",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X500 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X500 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X500 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X500 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X cam",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x-cam-.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Mediatek MT6753 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2520 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "118 g (4.16 oz)",
            "dimensions": "147.5 x 73.6 x 6.9 mm (5.81 x 2.90 x 0.27 in)",
            "colors": "Titan Silver, White, Gold, Pink Gold"
          },
          "variants": [
            {
              "name": "LG X cam 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x-cam-.jpg"
          ]
        },
        {
          "name": "LG X cam F690S",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X cam F690S 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam F690S 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam F690S 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam F690S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X cam K580Y",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X cam K580Y 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam K580Y 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam K580Y 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X cam K580Y 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Mach",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-x-mach.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1440 x 2560 pixels (~538 ppi pixel density), 5.5 inches (~72.0% screen-to-body ratio)",
            "processor": "Qualcomm MSM8992 Snapdragon 808",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 3000 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "150 g",
            "dimensions": "149.1 x 76.5 x 8.9 mm (5.87 x 3.01 x 0.35 in)",
            "colors": "Titan| White"
          },
          "variants": [
            {
              "name": "LG X Mach 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Mach 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Mach 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Mach 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-x-mach.jpg"
          ]
        },
        {
          "name": "LG X Power",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-x-power.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~277 ppi pixel density), 5.3 inches (~69.4% screen-to-body ratio)",
            "processor": "Mediatek MT6735",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 4100 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "139 g",
            "dimensions": "148.9 x 74.9 x 7.9 mm (5.86 x 2.95 x 0.31 in)",
            "colors": "Indigo| White| Gold"
          },
          "variants": [
            {
              "name": "LG X Power 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-x-power.jpg"
          ]
        },
        {
          "name": "LG X Power Dual SIM",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Power Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Power F750K",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Power F750K 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power F750K 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power F750K 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power F750K 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Power K210",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Power K210 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K210 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K210 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K210 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X Power K450",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG X Power K450 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K450 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K450 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Power K450 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG X screen",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-x-screen-.jpg",
          "specs": {
            "display": "4.93 inches, 67.0 cm, 720 x 1280 pixels, 16:9 ratio (~298 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 2300 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "120 g (4.23 oz)",
            "dimensions": "142.6 x 71.8 x 7.1 mm (5.61 x 2.83 x 0.28 in)",
            "colors": "Black, White, Pink Gold"
          },
          "variants": [
            {
              "name": "LG X screen 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-x-screen-.jpg"
          ]
        },
        {
          "name": "LG X Skin",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-x-skin.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~66.7% screen-to-body ratio)",
            "processor": "Quad-core 1.3 GHz",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2100 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "122 g",
            "dimensions": "144.8 x 71.4 x 6.9 mm (5.70 x 2.81 x 0.27 in)",
            "colors": "Gold| Titanium"
          },
          "variants": [
            {
              "name": "LG X Skin 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Skin 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Skin 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Skin 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-x-skin.jpg"
          ]
        },
        {
          "name": "LG X Style",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-x-style.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~66.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8909 Snapdragon 210",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2100 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)",
            "weight": "121 g",
            "dimensions": "144.8 x 71.4 x 6.9 mm (5.70 x 2.81 x 0.27 in)",
            "colors": "Black| White| Titan"
          },
          "variants": [
            {
              "name": "LG X Style 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X Style 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-x-style.jpg"
          ]
        },
        {
          "name": "LG X5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-x5.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~267 ppi pixel density), 5.5 inches (~71.5% screen-to-body ratio)",
            "processor": "Quad-core 1.3 GHz",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2800 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "133 g",
            "dimensions": "151.6 x 76.9 x 7.2 mm (5.97 x 3.03 x 0.28 in)",
            "colors": "White| Indigo Black"
          },
          "variants": [
            {
              "name": "LG X5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X5 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG X5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-x5.jpg"
          ]
        }
      ]
    },
    {
      "name": "Optimus",
      "models": [
        {
          "name": "LG Optimus Zone 3",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Optimus Zone 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 3 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus F5",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-f5.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~256 ppi pixel density), 4.3 inches (~62.7% screen-to-body ratio)",
            "processor": "Qualcomm MSM8960 Snapdragon S4 Plus",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2150 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)",
            "weight": "131 g",
            "dimensions": "126 x 64.5 x 9.3 mm (4.96 x 2.54 x 0.37 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "LG Optimus F5 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F5 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F5 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-f5.jpg"
          ]
        },
        {
          "name": "LG Optimus F6",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-f6-indigo-black.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 540 x 960 pixels (~245 ppi pixel density), 4.5 inches (~66.2% screen-to-body ratio)",
            "processor": "Qualcomm MSM8930 Snapdragon 400",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2460 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)",
            "weight": "126 g",
            "dimensions": "128 x 65.9 x 10.2 mm (5.04 x 2.59 x 0.40 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "LG Optimus F6 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F6 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F6 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F6 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-f6-indigo-black.jpg"
          ]
        },
        {
          "name": "LG Optimus F7",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-f7.jpg",
          "specs": {
            "display": "True HD-IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~313 ppi pixel density), 4.7 inches (~67.4% screen-to-body ratio)",
            "processor": "Dual-core 1.5 GHz",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2540 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)",
            "weight": "133.2 g",
            "dimensions": "131.7 x 68.2 x 9.6 mm (5.19 x 2.69 x 0.38 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "LG Optimus F7 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F7 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F7 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus F7 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-f7.jpg"
          ]
        },
        {
          "name": "LG Optimus G Pro",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-g-pro.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus G Pro 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-g-pro.jpg"
          ]
        },
        {
          "name": "LG Optimus G Pro E980",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus G Pro E980 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E980 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E980 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E980 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus G Pro E988",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus G Pro E988 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E988 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E988 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G Pro E988 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus GJ",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-gj.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus GJ 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus GJ 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus GJ 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus GJ 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-gj.jpg"
          ]
        },
        {
          "name": "LG Optimus L1 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l1-ii.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L1 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l1-ii.jpg"
          ]
        },
        {
          "name": "LG Optimus L1 II Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L1 II Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus L1 II Tri",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L1 II Tri 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Tri 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Tri 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L1 II Tri 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus L3 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L3 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus L3 II Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l3-ii-dual.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L3 II Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L3 II Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l3-ii-dual.jpg"
          ]
        },
        {
          "name": "LG Optimus L4 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l4-ii.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L4 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l4-ii.jpg"
          ]
        },
        {
          "name": "LG Optimus L4 II Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l4-ii-dual.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L4 II Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L4 II Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l4-ii-dual.jpg"
          ]
        },
        {
          "name": "LG Optimus L5 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L5 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus L5 II Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L5 II Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L5 II Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus L7 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l7-ii.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L7 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l7-ii.jpg"
          ]
        },
        {
          "name": "LG Optimus L7 II Dual",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l7-ii-dual.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L7 II Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L7 II Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l7-ii-dual.jpg"
          ]
        },
        {
          "name": "LG Optimus L9 II",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-l9-ii-new.jpg",
          "specs": {
            "display": "True HD-IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~312 ppi pixel density), 4.7 inches (~71.3% screen-to-body ratio)",
            "processor": "Qualcomm MSM8230 Snapdragon 400",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2150 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)| upgrad&#1072;ble to 4.4.2 (KitKat)",
            "weight": "120 g",
            "dimensions": "128.4 x 66.5 x 9 mm (5.06 x 2.62 x 0.35 in)",
            "colors": "White| Black"
          },
          "variants": [
            {
              "name": "LG Optimus L9 II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-l9-ii-new.jpg"
          ]
        },
        {
          "name": "LG Optimus LTE III",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus LTE III 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus LTE III 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus LTE III 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus LTE III 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus Zone",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus Zone 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Zone 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG VS410 Optimus Zone",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG VS410 Optimus Zone 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VS410 Optimus Zone 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VS410 Optimus Zone 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VS410 Optimus Zone 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Vu 3",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Vu 3 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Vu 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Vu 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Vu 3 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus 3D Max",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-3d-max.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus 3D Max 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 3D Max 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 3D Max 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 3D Max 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-3d-max.jpg"
          ]
        },
        {
          "name": "LG Optimus 4X HD",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus 4X HD 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 4X HD 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 4X HD 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 4X HD 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus G",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus G 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus G E973",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-g-e973.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus G E973 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E973 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E973 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E973 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-g-e973.jpg"
          ]
        },
        {
          "name": "LG Optimus G E975",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-g-e973-black.jpg",
          "specs": {
            "display": "True HD-IPS + LCD capacitive touchscreen 16M colors, 768 x 1280 pixels (~318 ppi pixel density), 4.7 inches (~69.2% screen-to-body ratio)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Po 2100 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean)| upgrad&#1072;ble to 4.4.2 (KitKat)",
            "weight": "145 g",
            "dimensions": "131.9 x 68.9 x 8.5 mm (5.19 x 2.71 x 0.33 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "LG Optimus G E975 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E975 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E975 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus G E975 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-g-e973-black.jpg"
          ]
        },
        {
          "name": "LG Optimus L9",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l9.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus L9 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus L9 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-l9.jpg"
          ]
        },
        {
          "name": "LG Optimus Regard",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Optimus Regard 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Regard 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Regard 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Regard 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus Vu II",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-vu-ii-.jpg",
          "specs": {
            "display": "HD-IPS LCD capacitive touchscreen 16M colors, 768 x 1024 pixels (~256 ppi pixel density), 5.0 inches (~68.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8960 Snapdragon S4 Plus",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2150 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich)",
            "weight": "159 g",
            "dimensions": "132.2 x 85.6 x 9.4 mm (5.20 x 3.37 x 0.37 in)",
            "colors": "Black| White| Pink"
          },
          "variants": [
            {
              "name": "LG Optimus Vu II 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Vu II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Vu II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Vu II 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-vu-ii-.jpg"
          ]
        },
        {
          "name": "LG Optimus 3D",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-3d.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus 3D 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 3D 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 3D 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-3d.jpg"
          ]
        },
        {
          "name": "LG Optimus Black",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-white.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~233 ppi pixel density), 4.0 inches (~58.3% screen-to-body ratio)",
            "processor": "TI OMAP 3630",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 2.2 (Froyo)| 2.3 (Gingerbread)| upgradable to 4.0 (Ice Cream Sandwich)",
            "weight": "109 g",
            "dimensions": "122 x 64 x 9.2 mm (4.80 x 2.52 x 0.36 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG Optimus Black 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Black 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Black 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-white.jpg"
          ]
        },
        {
          "name": "LG Optimus Chat",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus Chat 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Chat 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Chat 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus LTE",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/LG-Optimus-LTE-P936.jpg",
          "specs": {
            "display": "HD-IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~326 ppi pixel density), 4.5 inches (~61.9% screen-to-body ratio)",
            "processor": "Dual-core 1.5 GHz Scorpion",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion battery",
            "os": "Android 2.3.6 (Gingerbread)| planned upgrade to 4.0 (Ice Cream Sandwich)",
            "weight": "135 g",
            "dimensions": "132.9 x 67.9 x 10.4 mm (5.23 x 2.67 x 0.41 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Optimus LTE 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus LTE 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus LTE 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/LG-Optimus-LTE-P936.jpg"
          ]
        },
        {
          "name": "LG Optimus Me",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus Me 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Me 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Me 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus Net",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-net.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 320 x 480 pixels (~180 ppi pixel density), 3.2 inches (~45.5% screen-to-body ratio)",
            "processor": "Qualcomm MSM7227&#1058; Snapdragon S1",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 2.3.3 (Gingerbread)",
            "weight": "129.2 g",
            "dimensions": "113.5 x 59 x 12.1 mm (4.47 x 2.32 x 0.48 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Optimus Net 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Net 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Net 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-net.jpg"
          ]
        },
        {
          "name": "LG Optimus Slider",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-slider-ls700.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen, 320 x 480 pixels (~180 ppi pixel density), 3.2 inches (~44.9% screen-to-body ratio)",
            "processor": "800 MHz",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 2.3 (Gingerbread)",
            "weight": null,
            "dimensions": "115 x 59 x 15 mm (4.53 x 2.32 x 0.59 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Optimus Slider 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Slider 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Slider 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-optimus-slider-ls700.jpg"
          ]
        },
        {
          "name": "LG Optimus 2X",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/LG-Optimus-2X-new.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~233 ppi pixel density), 4.0 inches (~58.2% screen-to-body ratio)",
            "processor": "Nvidia Tegra 2 AP20H",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 2.2 (Froyo)| 2.3| upgradable to 4.0 (Ice Cream Sandwich)",
            "weight": "139 g",
            "dimensions": "123.9 x 63.2 x 10.9 mm (4.88 x 2.49 x 0.43 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Optimus 2X 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 2X 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 2X 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/LG-Optimus-2X-new.jpg"
          ]
        },
        {
          "name": "LG Optimus 7",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-7.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus 7 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 7 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus 7 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-7.jpg"
          ]
        },
        {
          "name": "LG Optimus Chic",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus Chic 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Chic 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Chic 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        },
        {
          "name": "LG Optimus One",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-one.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus One 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus One 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus One 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-optimus-one.jpg"
          ]
        },
        {
          "name": "LG Optimus Q",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Optimus Q 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Q 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Optimus Q 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones"
          ]
        }
      ]
    },
    {
      "name": "L / F / P / E Series",
      "models": [
        {
          "name": "LG L5000",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG L5000 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L5000 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L5000 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L5000 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L70 LTE",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG L70 LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 LTE 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 LTE 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG E985T",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG E985T 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E985T 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E985T 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E985T 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG F3Q",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG F3Q 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F3Q 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F3Q 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F3Q 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG F60",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "4.5 inches, 57.6 cm, 480 x 800 pixels, 5:3 ratio (~207 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2100 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "129.6 g (4.55 oz)",
            "dimensions": "127.5 x 67.9 x 10.6 mm (5.02 x 2.67 x 0.42 in)",
            "colors": "White, Black"
          },
          "variants": [
            {
              "name": "LG F60 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG F60 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG F60 Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG F60 Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F60 Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F60 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F60 Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG F70",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-f70.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG F70 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F70 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F70 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F70 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-f70.jpg"
          ]
        },
        {
          "name": "LG F90",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG F90 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F90 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F90 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG F90 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L Bello",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l-bello.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 480 x 854 pixels, 16:9 ratio (~196 ppi density)",
            "processor": "Mediatek MT6582 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 4.4.2 (KitKat), LG UI 3",
            "weight": "137 g (4.83 oz)",
            "dimensions": "138.1 x 70.6 x 10.7 mm (5.44 x 2.78 x 0.42 in)",
            "colors": "White, Black, Gold"
          },
          "variants": [
            {
              "name": "LG L Bello 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l-bello.jpg"
          ]
        },
        {
          "name": "LG L Bello Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L Bello Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Bello Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Bello Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Bello Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L Fino",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l-fino.jpg",
          "specs": {
            "display": "4.5 inches, 57.6 cm, 480 x 800 pixels, 5:3 ratio (~207 ppi density)",
            "processor": "Qualcomm MSM8212 Snapdragon 200 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1900 mAh, removable",
            "os": "Android 4.4.2 (KitKat), LG UI 3",
            "weight": "145 g (5.11 oz)",
            "dimensions": "127.5 x 67.9 x 11.9 mm (5.02 x 2.67 x 0.47 in)",
            "colors": "White, Black, Gold, Red, Green"
          },
          "variants": [
            {
              "name": "LG L Fino 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l-fino.jpg"
          ]
        },
        {
          "name": "LG L Fino Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L Fino Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Fino Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Fino Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Fino Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L Prime D337",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l-prime-d337.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L Prime D337 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Prime D337 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Prime D337 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L Prime D337 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l-prime-d337.jpg"
          ]
        },
        {
          "name": "LG L20",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l20.jpg",
          "specs": {
            "display": "3.0 inches, 27.9 cm, 240 x 320 pixels, 4:3 ratio (~133 ppi density)",
            "processor": "Mediatek MT6572M (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1540 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "-",
            "dimensions": "105.6 x 64.5 x 13 mm (4.16 x 2.54 x 0.51 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "LG L20 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l20.jpg"
          ]
        },
        {
          "name": "LG L20 Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L20 Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L20 Tri",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L20 Tri 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Tri 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Tri 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L20 Tri 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L35",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l35.jpg",
          "specs": {
            "display": "3.2 inches, 30.5 cm, 320 x 480 pixels, 3:2 ratio (~180 ppi density)",
            "processor": "Qualcomm MSM8210 Snapdragon 200 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1540 mAh, removable",
            "os": "Android OS",
            "weight": "107 g (3.77 oz)",
            "dimensions": "109.4 x 59 x 11.9 mm (4.31 x 2.32 x 0.47 in)",
            "colors": "White, Black"
          },
          "variants": [
            {
              "name": "LG L35 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l35.jpg"
          ]
        },
        {
          "name": "LG L40",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L40 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L40 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L40 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L40 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L50 Sporty",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L50 Sporty 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L50 Sporty 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L50 Sporty 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L50 Sporty 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L60",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l60.jpg",
          "specs": {
            "display": "4.3 inches, 52.6 cm, 480 x 800 pixels, 5:3 ratio (~217 ppi density)",
            "processor": "Dual-core 1.3 GHz",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1540 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "119 g (4.20 oz)",
            "dimensions": "124.1 x 66.3 x 11.8 mm (4.89 x 2.61 x 0.46 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "LG L60 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l60.jpg"
          ]
        },
        {
          "name": "LG L65",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l65.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L65 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l65.jpg"
          ]
        },
        {
          "name": "LG L65 Dual SIM",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L65 Dual SIM 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L65 Dual SIM 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L70",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L70 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L70 Tri",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L70 Tri 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 Tri 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 Tri 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L70 Tri 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L80",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l80.jpg",
          "specs": {
            "display": "5.0 inches, 71.2 cm, 480 x 800 pixels, 5:3 ratio (~187 ppi density)",
            "processor": "Dual-core 1.2 GHz",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "138 g (4.87 oz)",
            "dimensions": "138.2 x 74.3 x 9.7 mm (5.44 x 2.93 x 0.38 in)",
            "colors": "White, Black"
          },
          "variants": [
            {
              "name": "LG L80 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l80.jpg"
          ]
        },
        {
          "name": "LG L80 Dual SIM",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L80 Dual SIM 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L80 Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L80 Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L80 Dual SIM 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG L90",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l90.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L90 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l90.jpg"
          ]
        },
        {
          "name": "LG L90 Dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-l90-dual.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG L90 Dual 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 Dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 Dual 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG L90 Dual 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-l90-dual.jpg"
          ]
        },
        {
          "name": "LG E460",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG E460 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E460 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E460 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG E460 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG MS659",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG MS659 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS659 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS659 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS659 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG P659",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG P659 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P659 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P659 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P659 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG P692",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG P692 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P692 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P692 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P692 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG P768",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG P768 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P768 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P768 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P768 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG P769",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG P769 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P769 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P769 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P769 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG P895",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG P895 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P895 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P895 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG P895 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        }
      ]
    },
    {
      "name": "Nexus",
      "models": [
        {
          "name": "LG Nexus 5X",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-5x.jpg",
          "specs": {
            "display": "5.2 inches, 74.9 cm, 1080 x 1920 pixels, 16:9 ratio (~423 ppi density)",
            "processor": "Qualcomm MSM8992 Snapdragon 808 (20 nm)",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 2700 mAh, non-removable",
            "os": "Android 6.0 (Marshmallow), upgradable to Android 8.0 (Oreo)",
            "weight": "136 g (4.80 oz)",
            "dimensions": "147 x 72.6 x 7.9 mm (5.79 x 2.86 x 0.31 in)",
            "colors": "Carbon, Quartz, Ice"
          },
          "variants": [
            {
              "name": "LG Nexus 5X 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Nexus 5X 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-5x.jpg"
          ]
        },
        {
          "name": "LG Nexus 5",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "4.95 inches, 67.5 cm, 1080 x 1920 pixels, 16:9 ratio (~445 ppi density)",
            "processor": "Qualcomm MSM8974 Snapdragon 800 (28 nm)",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 2300 mAh, non-removable",
            "os": "Android 4.4 (Ice Cream Sandwich), upgradable to 6.0 (Marshmallow)",
            "weight": "130 g (4.59 oz)",
            "dimensions": "137.9 x 69.2 x 8.6 mm (5.43 x 2.72 x 0.34 in)",
            "colors": "Black, White, Red"
          },
          "variants": [
            {
              "name": "LG Nexus 5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "LG Nexus 5 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG Nexus 4",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-4.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB",
            "storage": [
              "8GB",
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
              "name": "LG Nexus 4 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Nexus 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-4.jpg"
          ]
        }
      ]
    },
    {
      "name": "Carrier / Regional Phones",
      "models": [
        {
          "name": "LG Aristo 5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Aristo 5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Fortune 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Fortune 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fortune 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Harmony",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-harmony.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2800 mAh, removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "141.8 g (5.01 oz)",
            "dimensions": "149.9 x 76.2 x 7.6 mm (5.90 x 3.00 x 0.30 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Harmony 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Harmony 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-harmony.jpg"
          ]
        },
        {
          "name": "LG Harmony 4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Harmony 4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Harmony 4 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Phoenix 4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Phoenix 4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 4 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Phoenix 5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Phoenix 5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Reflect",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Reflect 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Reflect 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Risio 4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Risio 4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Risio 4 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Tribute Monarch",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Tribute Monarch 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute Monarch 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Arena 2",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Arena 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Arena 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Aristo 3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Aristo 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Aristo 4",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Aristo 4 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 4 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Escape Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Escape Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Harmony 3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Harmony 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Harmony 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Journey LTE",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Journey LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Journey LTE 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Neon Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Neon Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Neon Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Prime 2",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Prime 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prime 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Tribute Empire",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-tribute-empire.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Mediatek MT6750 (28 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2500 mAh, removable",
            "os": "Android 8.1 (Oreo)",
            "weight": "140.1 g (4.94 oz)",
            "dimensions": "144.8 x 71.8 x 8.1 mm (5.70 x 2.83 x 0.32 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG Tribute Empire 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-tribute-empire.jpg"
          ]
        },
        {
          "name": "LG Tribute Royal",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Tribute Royal 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute Royal 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Aristo 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-aristo-2.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2410 mAh, removable",
            "os": "Android 7.1.2 (Nougat)",
            "weight": "139 g (4.90 oz)",
            "dimensions": "144.8 x 71.9 x 8.1 mm (5.70 x 2.83 x 0.32 in)",
            "colors": "Titan"
          },
          "variants": [
            {
              "name": "LG Aristo 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-aristo-2/",
            "https://www.gsmarena.com.bd/images/products/lg-aristo-2.jpg"
          ]
        },
        {
          "name": "LG Aristo 2 Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Aristo 2 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 2 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Fortune 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Fortune 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fortune 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Harmony 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Harmony 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Harmony 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Phoenix Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
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
              "name": "LG Phoenix Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Premier Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Premier Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Premier Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Rebel 3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Rebel 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Rebel 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Risio 3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Risio 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Risio 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Tribute Dynasty",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Tribute Dynasty 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute Dynasty 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Zone 4",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-zone-4.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8917 Snapdragon 425 (28 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2500 mAh, removable",
            "os": "Android 7.1.2 (Nougat)",
            "weight": "140.3 g (4.94 oz)",
            "dimensions": "144.8 x 71.9 x 7.9 mm (5.70 x 2.83 x 0.31 in)",
            "colors": "Moroccan Blue"
          },
          "variants": [
            {
              "name": "LG Zone 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-zone-4/",
            "https://www.gsmarena.com.bd/images/products/lg-zone-4.jpg"
          ]
        },
        {
          "name": "LG Aristo",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Aristo 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Aristo 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Fiesta 2 LTE",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Fiesta 2 LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fiesta 2 LTE 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fiesta 2 LTE 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fiesta 2 LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Fortune",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Fortune 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fortune 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fortune 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fortune 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Phoenix 2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-phoenix-2.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Phoenix 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 2 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-phoenix-2.jpg"
          ]
        },
        {
          "name": "LG Phoenix 3",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Phoenix 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 3 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Phoenix 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Spree",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Spree 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spree 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spree 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spree 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Tribute HD",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Tribute HD 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute HD 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute HD 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute HD 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Escape 2",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Escape 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 2 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Prime Plus",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Prime Plus 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prime Plus 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prime Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prime Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Tribute 2",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-tribute-2.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~218 ppi pixel density), 4.5 inches (~66.2% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1900 mAh battery",
            "os": "Android 5.1 (Lollipop)",
            "weight": "138.9 g",
            "dimensions": "129.9 x 64.9 x 10.9 mm (5.11 x 2.56 x 0.43 in)",
            "colors": "BLue"
          },
          "variants": [
            {
              "name": "LG Tribute 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute 2 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Tribute 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-tribute-2.jpg"
          ]
        },
        {
          "name": "LG Lucid 3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-lucid-3.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Lucid 3 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 3 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-lucid-3.jpg"
          ]
        },
        {
          "name": "LG Tribute",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-tribute-2.jpg",
          "specs": {
            "display": "4.5 inches, 57.6 cm, 480 x 800 pixels, 5:3 ratio (~207 ppi density)",
            "processor": "Qualcomm MSM8926 Snapdragon 400 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2100 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "138.9 g (4.94 oz)",
            "dimensions": "127.5 x 67.8 x 10.7 mm (5.02 x 2.67 x 0.42 in)",
            "colors": "White"
          },
          "variants": [
            {
              "name": "LG Tribute 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-tribute-2.jpg"
          ]
        },
        {
          "name": "LG Volt",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "4.7 inches, 60.9 cm, 540 x 960 pixels, 16:9 ratio (~234 ppi density)",
            "processor": "Qualcomm MSM8926 Snapdragon 400 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "136.1 g (4.80 oz)",
            "dimensions": "131.6 x 66 x 10.4 mm (5.18 x 2.60 x 0.41 in)",
            "colors": "Blue (Boost Mobile), White (Virgin Mobile)"
          },
          "variants": [
            {
              "name": "LG Volt 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG Enact",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Enact 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Enact 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Enact 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Enact 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Lucid 2",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Lucid 2 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Lucid 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Escape",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Escape 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Escape 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Mach",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Mach 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Mach 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Mach 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Mach 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        },
        {
          "name": "LG Spectrum 2",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Spectrum 2 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spectrum 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spectrum 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spectrum 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/"
          ]
        }
      ]
    },
    {
      "name": "Classic / Feature Phones",
      "models": [
        {
          "name": "LG Exalt LTE",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Exalt LTE 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Exalt LTE 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Folder",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Folder 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Folder 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Folder 2",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-folder-2.jpg",
          "specs": {
            "display": "2.8 inches, 24.3 cm, 240 x 320 pixels, 4:3 ratio (~143 ppi density)",
            "processor": "Processor details pending public verification",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 1470 mAh, removable",
            "os": null,
            "weight": "127 g (4.48 oz)",
            "dimensions": "107.9 x 55 x 18 mm (4.25 x 2.17 x 0.71 in)",
            "colors": "White, Platinum Gray"
          },
          "variants": [
            {
              "name": "LG Folder 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "https://www.gsmarena.com.bd/pictures/lg-folder-2/",
            "https://www.gsmarena.com.bd/images/products/lg-folder-2.jpg"
          ]
        },
        {
          "name": "LG Style 3",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": null,
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
              "name": "LG Style 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Style 3 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Wine LTE",
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
              "name": "LG Wine LTE 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine LTE 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine LTE 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine LTE 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Android One X5",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Android One X5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Android One X5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Style 2",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": null,
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
              "name": "LG Style 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Style 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Signature Edition 2018",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": null,
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
              "name": "LG Signature Edition 2018 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Signature Edition 2018 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Exalt",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Exalt 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Exalt 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Exalt 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Exalt 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Signature Edition",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Signature Edition 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Signature Edition 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Signature Edition 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Signature Edition 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG U",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-u.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~424 ppi pixel density), 5.2 inches (~69.0% screen-to-body ratio)",
            "processor": "Octa-core 1.14 GHz",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 3000 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "135 g",
            "dimensions": "147.6 x 73.2 x 7.7 mm (5.81 x 2.88 x 0.30 in)",
            "colors": "White| black| pink"
          },
          "variants": [
            {
              "name": "LG U 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG U 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG U 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG U 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-u.jpg"
          ]
        },
        {
          "name": "LG Wine 3G",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Wine 3G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine 3G 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine 3G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine 3G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG band Play",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG band Play 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG band Play 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG band Play 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG band Play 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Bello II",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-bello-2.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 854 pixels (~196 ppi pixel density), 5.0 inches (~68.3% screen-to-body ratio)",
            "processor": "Quad-core 1.3 GHz Cortex-A7",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 2540 mAh battery",
            "os": "Android 5.1.1 (Lollipop)",
            "weight": "155 g",
            "dimensions": "140.8 x 71.6 x 9.6 mm (5.54 x 2.82 x 0.38 in)",
            "colors": "White| Titan| Gold"
          },
          "variants": [
            {
              "name": "LG Bello II 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Bello II 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Bello II 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Bello II 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-bello-2.jpg"
          ]
        },
        {
          "name": "LG Class F620S",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Class F620S 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Class F620S 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Class F620S 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Class F620S 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG DM-01G",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG DM-01G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG DM-01G 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG DM-01G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG DM-01G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG G360",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-g360.jpg",
          "specs": {
            "display": "TFT, 240 x 320 pixels (~133 ppi pixel density), 3.0 inches (~44.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "125 g",
            "dimensions": "108 x 58 x 19.5 mm (4.25 x 2.28 x 0.77 in)",
            "colors": "Wine Red"
          },
          "variants": [
            {
              "name": "LG G360 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG G360 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-g360.jpg"
          ]
        },
        {
          "name": "LG Gentle",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-gentle.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Gentle 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Gentle 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Gentle 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Gentle 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-gentle.jpg"
          ]
        },
        {
          "name": "LG Ice Cream Smart",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Ice Cream Smart 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ice Cream Smart 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ice Cream Smart 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ice Cream Smart 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Isai Vivid LGV32",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Isai Vivid LGV32 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai Vivid LGV32 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai Vivid LGV32 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai Vivid LGV32 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Joy",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-joy-.jpg",
          "specs": {
            "display": "4.0 inches, 45.5 cm, 480 x 800 pixels, 5:3 ratio (~233 ppi density)",
            "processor": "Qualcomm MSM8210 Snapdragon 200 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1900 mAh, removable",
            "os": "Android 4.4 (KitKat)",
            "weight": "128 g (4.52 oz)",
            "dimensions": "122.7 x 64 x 11.9 mm (4.83 x 2.52 x 0.47 in)",
            "colors": "Dark blue, White"
          },
          "variants": [
            {
              "name": "LG Joy 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-joy-.jpg"
          ]
        },
        {
          "name": "LG Leon",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-leon.jpg",
          "specs": {
            "display": "4.5 inches, 55.8 cm, 480 x 854 pixels, 16:9 ratio (~218 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm)",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1900 mAh, removable",
            "os": "Android 5.0.1 (Lollipop)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "129.9 x 64.9 x 10.9 mm (5.11 x 2.56 x 0.43 in)",
            "colors": "Titan, Gold"
          },
          "variants": [
            {
              "name": "LG Leon 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-leon.jpg"
          ]
        },
        {
          "name": "LG Leon 3G",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Leon 3G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Leon 3G 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Leon 3G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Leon 3G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Magna",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-magna-.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Mediatek MT6582 - H502 model",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "137 g (4.83 oz)",
            "dimensions": "139.8 x 69.9 x 10.1 mm (5.50 x 2.75 x 0.40 in)",
            "colors": "Black, White, Gold"
          },
          "variants": [
            {
              "name": "LG Magna 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-magna-.jpg"
          ]
        },
        {
          "name": "LG Magna LTE",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Mediatek MT6582 - H502 model",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2540 mAh, removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "137 g (4.83 oz)",
            "dimensions": "139.8 x 69.9 x 10.1 mm (5.50 x 2.75 x 0.40 in)",
            "colors": "Black, White, Gold"
          },
          "variants": [
            {
              "name": "LG Magna LTE 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs"
          ]
        },
        {
          "name": "LG Max",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Max 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Max 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Max 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Max 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Ray X190",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Ray X190 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ray X190 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ray X190 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Ray X190 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Spirit",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-spirit.jpg",
          "specs": {
            "display": "4.7 inches, 60.9 cm, 720 x 1280 pixels, 16:9 ratio (~312 ppi density)",
            "processor": "Qualcomm MSM8916 Snapdragon 410 (28 nm) - H440N, H445",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2100 mAh, removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "124.4 g (4.37 oz)",
            "dimensions": "133.3 x 66.1 x 10 mm (5.25 x 2.60 x 0.39 in)",
            "colors": "Titan, Gold, White"
          },
          "variants": [
            {
              "name": "LG Spirit 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-spirit.jpg"
          ]
        },
        {
          "name": "LG Spirit 3G",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Spirit 3G 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Spirit 3G Dual SIM",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Spirit 3G Dual SIM 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G Dual SIM 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G Dual SIM 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spirit 3G Dual SIM 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Spray 402LG",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Spray 402LG 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spray 402LG 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spray 402LG 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Spray 402LG 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Wine Smart 2015",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Wine Smart 2015 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 2015 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 2015 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 2015 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Wine Smart Jazz",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Wine Smart Jazz 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart Jazz 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart Jazz 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart Jazz 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Zero",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-class-f620.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~67.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM8916 Snapdragon 410",
            "ram": "1GB/1.5GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Non-removable Li-Ion 2050 mAh battery",
            "os": "Android 5.1.1 (Lollipop)| upgrad&#1072;ble to 6.0 (Marshmallow)",
            "weight": "150 g",
            "dimensions": "142 x 71.8 x 7.4 mm (5.59 x 2.83 x 0.29 in)",
            "colors": "Gold| Silver| Blue| Black"
          },
          "variants": [
            {
              "name": "LG Zero 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-class-f620.jpg"
          ]
        },
        {
          "name": "LG Zero H650K",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "1GB/1.5GB/2GB/3GB",
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
              "name": "LG Zero H650K 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero H650K 1.5GB 16GB",
              "ram": "1.5GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero H650K 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Zero H650K 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG A395",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-a395.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~182 ppi pixel density), 2.2 inches (~25.4% screen-to-body ratio)",
            "processor": "Mediatek MT6253",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": null,
            "weight": "97 g",
            "dimensions": "114.4 x 51.6 x 13 mm (4.50 x 2.03 x 0.51 in)",
            "colors": "Black| Silver"
          },
          "variants": [
            {
              "name": "LG A395 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A395 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A395 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A395 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-a395.jpg"
          ]
        },
        {
          "name": "LG AKA",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-aka.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm Snapdragon 400 (28 nm)",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2610 mAh, removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "135 g (4.76 oz)",
            "dimensions": "138.7 x 71.9 x 10 mm (5.46 x 2.83 x 0.39 in)",
            "colors": "White, Pink, Yellow, Navy"
          },
          "variants": [
            {
              "name": "LG AKA 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG AKA 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG AKA 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG AKA 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-aka.jpg"
          ]
        },
        {
          "name": "LG D500",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG D500 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG D500 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG D500 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG D500 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Fx0 LGL25",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Fx0 LGL25 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fx0 LGL25 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fx0 LGL25 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fx0 LGL25 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Isai FL",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Isai FL 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai FL 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai FL 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai FL 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Isai VL",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Isai VL 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai VL 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai VL 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Isai VL 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG MS500",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG MS500 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS500 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS500 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG MS500 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG T580",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG T580 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T580 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T580 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T580 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Transpyre",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG Transpyre 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Transpyre 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Transpyre 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Transpyre 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Wine Smart",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-wine.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 320 x 480 pixels (~180 ppi pixel density), 3.2 inches (~44.1% screen-to-body ratio)",
            "processor": "Quad-core 1.1 GHz",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1700 mAh battery",
            "os": "Android 5.1.1 (Lollipop)",
            "weight": "143 g",
            "dimensions": "117.7 x 58.7 x 16.6 mm (4.63 x 2.31 x 0.65 in)",
            "colors": "Navy| Burgundy"
          },
          "variants": [
            {
              "name": "LG Wine Smart 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Wine Smart 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-wine.jpg"
          ]
        },
        {
          "name": "LG Fireweb",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-fireweb.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen, 320 x 480 pixels (~144 ppi pixel density), 4.0 inches (~63.0% screen-to-body ratio)",
            "processor": "Qualcomm MSM7227A Snapdragon S1",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1540 mAh battery",
            "os": "Firefox OS 1.1",
            "weight": "122.5 g",
            "dimensions": "113.8 x 66.5 x 9 mm (4.48 x 2.62 x 0.35 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Fireweb 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fireweb 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fireweb 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Fireweb 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-fireweb.jpg"
          ]
        },
        {
          "name": "LG LS720",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG LS720 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG LS720 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG LS720 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG LS720 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG VM720",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
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
              "name": "LG VM720 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VM720 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VM720 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG VM720 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG A165",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-a165.jpg",
          "specs": {
            "display": "TFT 256K colors, 176 x 220 pixels (~141 ppi pixel density), 2.0 inches (~24.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "81 g",
            "dimensions": "110 x 47.5 x 14.1 mm (4.33 x 1.87 x 0.56 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG A165 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A165 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A165 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A165 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-a165.jpg"
          ]
        },
        {
          "name": "LG A180",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-a180.jpg",
          "specs": {
            "display": "TFT 65K colors, 128 x 128 pixels (~119 ppi pixel density), 1.52 inches (~15.6% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "66.3 g",
            "dimensions": "106.3 x 44.9 x 14 mm (4.19 x 1.77 x 0.55 in)",
            "colors": "Graphite"
          },
          "variants": [
            {
              "name": "LG A180 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A180 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A180 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A180 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-a180.jpg"
          ]
        },
        {
          "name": "LG A270",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-a270.jpg",
          "specs": {
            "display": "TFT 65K colors, 128 x 128 pixels (~125 ppi pixel density), 1.45 inches (~14.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "65.8 g",
            "dimensions": "107.2 x 44.9 x 14.6 mm (4.22 x 1.77 x 0.57 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG A270 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A270 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A270 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG A270 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-a270.jpg"
          ]
        },
        {
          "name": "LG C199",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-c199.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~174 ppi pixel density), 2.3 inches (~25.0% screen-to-body ratio)",
            "processor": "Mediatek MT6236",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 1100 mAh battery",
            "os": null,
            "weight": "92 g",
            "dimensions": "109.4 x 59.8 x 12.5 mm (4.31 x 2.35 x 0.49 in)",
            "colors": "Black/Silver"
          },
          "variants": [
            {
              "name": "LG C199 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C199 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C199 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C199 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-c199.jpg"
          ]
        },
        {
          "name": "LG C375 Cookie Tweet",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-c375-cookie-tweet.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~174 ppi pixel density), 2.3 inches (~23.8% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "92.5 g",
            "dimensions": "113 x 61 x 12 mm (4.45 x 2.40 x 0.47 in)",
            "colors": "Black/Silver"
          },
          "variants": [
            {
              "name": "LG C375 Cookie Tweet 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C375 Cookie Tweet 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C375 Cookie Tweet 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG C375 Cookie Tweet 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-c375-cookie-tweet.jpg"
          ]
        },
        {
          "name": "LG T385",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-t385.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 240 x 320 pixels (~125 ppi pixel density), 3.2 inches (~52.2% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB/2GB",
            "storage": [
              "4GB",
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": null,
            "dimensions": "103 x 59 x 10.7 mm (4.06 x 2.32 x 0.42 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG T385 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T385 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T385 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T385 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-t385.jpg"
          ]
        },
        {
          "name": "LG Prada 3.0",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-prada-3.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 480 x 800 pixels (~217 ppi pixel density), 4.3 inches (~59.8% screen-to-body ratio)",
            "processor": "TI OMAP 4430",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1540 mAh battery",
            "os": "Android 2.3.7 (Gingerbread)| planned upgrade to 4.0 (Ice Cream Sandwich)",
            "weight": "138 g",
            "dimensions": "127.5 x 69 x 8.5 mm (5.02 x 2.72 x 0.33 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG Prada 3.0 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prada 3.0 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Prada 3.0 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-prada-3.jpg"
          ]
        },
        {
          "name": "LG T375 Cookie Smart",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-cookie-smart-t375.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 240 x 320 pixels (~125 ppi pixel density), 3.2 inches (~52.2% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "96 g",
            "dimensions": "103 x 59 x 10.7 mm (4.06 x 2.32 x 0.42 in)",
            "colors": "White| Black| Red"
          },
          "variants": [
            {
              "name": "LG T375 Cookie Smart 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T375 Cookie Smart 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T375 Cookie Smart 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-cookie-smart-t375.jpg"
          ]
        },
        {
          "name": "LG Cookie Fresh GS290",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Cookie Fresh GS290 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Cookie Fresh GS290 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Cookie Fresh GS290 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Cookie Plus GS500",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Cookie Plus GS500 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Cookie Plus GS500 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Cookie Plus GS500 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG GD880 Mini",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gd880--.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 480 x 854 pixels (~306 ppi pixel density), 3.2 inches (~58.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1000 mAh battery (LGIP-550N)",
            "os": null,
            "weight": "99 g",
            "dimensions": "102 x 47.6 x 10.6 mm (4.02 x 1.87 x 0.42 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG GD880 Mini 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GD880 Mini 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GD880 Mini 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gd880--.jpg"
          ]
        },
        {
          "name": "LG GM360 Viewty Snap",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/LG-GM360-Viewty-Snap-new.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~44.7% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "87 g",
            "dimensions": "108 x 53.1 x 12 mm (4.25 x 2.09 x 0.47 in)",
            "colors": "Black| Silver"
          },
          "variants": [
            {
              "name": "LG GM360 Viewty Snap 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM360 Viewty Snap 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM360 Viewty Snap 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/LG-GM360-Viewty-Snap-new.jpg"
          ]
        },
        {
          "name": "LG GS290 Cookie Fresh",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gs290-cookie-fresh.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~44.8% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "89 g",
            "dimensions": "108 x 52.9 x 12.5 mm (4.25 x 2.08 x 0.49 in)",
            "colors": "Silver| Orange/white| Purple/white| Blue/light silver"
          },
          "variants": [
            {
              "name": "LG GS290 Cookie Fresh 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GS290 Cookie Fresh 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GS290 Cookie Fresh 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gs290-cookie-fresh.jpg"
          ]
        },
        {
          "name": "LG GS500 Cookie Plus",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gs500.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~45.6% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "92.5 g",
            "dimensions": "107 x 52.5 x 11.5 mm (4.21 x 2.07 x 0.45 in)",
            "colors": "Black| White Silver|Imperial Purple| Baby Pink| Wine Red| Brown"
          },
          "variants": [
            {
              "name": "LG GS500 Cookie Plus 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GS500 Cookie Plus 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GS500 Cookie Plus 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gs500.jpg"
          ]
        },
        {
          "name": "LG GT540 Optimus",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gt540-optimus-ofic.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors (65K effective), 320 x 480 pixels (~192 ppi pixel density), 3.0 inches (~45.1% screen-to-body ratio)",
            "processor": "600 MHz",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 1.6 (Donut)| upgradable to 2.1 (Eclair)",
            "weight": "115.5 g",
            "dimensions": "109 x 54.5 x 12.7 mm (4.29 x 2.15 x 0.5 in)",
            "colors": "Black| White| Pink"
          },
          "variants": [
            {
              "name": "LG GT540 Optimus 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT540 Optimus 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT540 Optimus 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gt540-optimus-ofic.jpg"
          ]
        },
        {
          "name": "LG KM570 Cookie Gig",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-cookie-music-ofic.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~46.0% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "87 g",
            "dimensions": "105.9 x 52.6 x 11.9 mm (4.17 x 2.07 x 0.47 in)",
            "colors": "Silver Black| Prism violet| Blue"
          },
          "variants": [
            {
              "name": "LG KM570 Cookie Gig 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM570 Cookie Gig 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM570 Cookie Gig 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-cookie-music-ofic.jpg"
          ]
        },
        {
          "name": "LG T300 Cookie Lite",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG T300 Cookie Lite 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T300 Cookie Lite 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T300 Cookie Lite 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG T310 Wink Style",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG T310 Wink Style 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T310 Wink Style 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T310 Wink Style 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG T320 Wink 3G",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG T320 Wink 3G 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T320 Wink 3G 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T320 Wink 3G 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG T325",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG T325 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T325 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG T325 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Arena KM900",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Arena KM900 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Arena KM900 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Arena KM900 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Chocolate Touch",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Chocolate Touch 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Chocolate Touch 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Chocolate Touch 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Crystal GD900",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Crystal GD900 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Crystal GD900 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Crystal GD900 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG GM730",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-gm730.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG GM730 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM730 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM730 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-gm730.jpg"
          ]
        },
        {
          "name": "LG GM750",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gm750.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~43.6% screen-to-body ratio)",
            "processor": "Qualcomm MSM7201A",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Microsoft Windows Mobile 6.5 Professional",
            "weight": "120 g",
            "dimensions": "109.8 x 53.5 x 12.9 mm (4.32 x 2.11 x 0.51 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG GM750 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM750 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GM750 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gm750.jpg"
          ]
        },
        {
          "name": "LG GT500 Puccini",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gt500.jpg",
          "specs": {
            "display": "TFT touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~43.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion battery",
            "os": null,
            "weight": "98 g",
            "dimensions": "107 x 55 x 12 mm (4.21 x 2.17 x 0.47 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG GT500 Puccini 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT500 Puccini 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT500 Puccini 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gt500.jpg"
          ]
        },
        {
          "name": "LG GT505",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gt505.jpg",
          "specs": {
            "display": "TFT touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~43.9% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1000 mAh battery",
            "os": null,
            "weight": "98 g",
            "dimensions": "107 x 54.5 x 11.8 mm (4.21 x 2.15 x 0.46 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG GT505 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT505 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GT505 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gt505.jpg"
          ]
        },
        {
          "name": "LG GW300",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gw300.jpg",
          "specs": {
            "display": "TFT 256K colors, 320 x 240 pixels (~167 ppi pixel density), 2.4 inches (~25.3% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Po 900 mAh battery",
            "os": null,
            "weight": "95 g",
            "dimensions": "115.5 x 61 x 12.8 mm (4.55 x 2.40 x 0.50 in)",
            "colors": "Black| Blue"
          },
          "variants": [
            {
              "name": "LG GW300 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW300 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW300 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gw300.jpg"
          ]
        },
        {
          "name": "LG GW520",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gv520.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~167 ppi pixel density), 2.8 inches (~39.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "125.5 g",
            "dimensions": "106.5 x 53 x 15.9 mm (4.19 x 2.09 x 0.63 in)",
            "colors": "Blue on Black| Red on Black| Silver| Pearl White"
          },
          "variants": [
            {
              "name": "LG GW520 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW520 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW520 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gv520.jpg"
          ]
        },
        {
          "name": "LG GW550",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gw550-new.jpg",
          "specs": {
            "display": "TFT 65K colors, 320 x 240 pixels (~167 ppi pixel density), 2.4 inches (~24.8% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1300 mAh battery",
            "os": "Microsoft Windows Mobile 6.5 Standard",
            "weight": "125.5 g",
            "dimensions": "116 x 62 x 12 mm (4.57 x 2.44 x 0.47 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG GW550 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW550 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW550 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gw550-new.jpg"
          ]
        },
        {
          "name": "LG GW620",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-gw620.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors (65K effective), 320 x 480 pixels (~192 ppi pixel density), 3.0 inches (~45.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Po 1500 mAh battery",
            "os": "Android 1.5| upgradable to 2.2 (Froyo)",
            "weight": "139 g",
            "dimensions": "109 x 54.5 x 15.9 mm (4.29 x 2.15 x 0.63 in)",
            "colors": "Black| Gray| Blue"
          },
          "variants": [
            {
              "name": "LG GW620 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW620 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG GW620 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-gw620.jpg"
          ]
        },
        {
          "name": "LG KM555e",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-km555e-new.jpg",
          "specs": {
            "display": "TFT touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~45.3% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "90 g",
            "dimensions": "105.9 x 53.4 x 12 mm (4.17 x 2.10 x 0.47 in)",
            "colors": "Black| Silver| Violet"
          },
          "variants": [
            {
              "name": "LG KM555e 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM555e 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM555e 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-km555e-new.jpg"
          ]
        },
        {
          "name": "LG KM900 Arena",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-km900-arena.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 16M colors, 480 x 800 pixels (~311 ppi pixel density), 3.0 inches (~43.7% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": "Removable Li-Ion 1000 mAh battery",
            "os": null,
            "weight": "105 g",
            "dimensions": "105.9 x 55.3 x 12 mm (4.17 x 2.18 x 0.47 in)",
            "colors": "Silver| Titan Black| Dusty Pink"
          },
          "variants": [
            {
              "name": "LG KM900 Arena 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM900 Arena 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG KM900 Arena 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-km900-arena.jpg"
          ]
        },
        {
          "name": "LG New Chocolate BL20",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG New Chocolate BL20 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG New Chocolate BL20 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG New Chocolate BL20 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG New Chocolate BL40",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG New Chocolate BL40 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG New Chocolate BL40 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG New Chocolate BL40 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Pop GD510",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Pop GD510 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Pop GD510 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Pop GD510 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Shine II",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-shine-ii.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Shine II 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Shine II 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Shine II 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-shine-ii.jpg"
          ]
        },
        {
          "name": "LG Viewty Smart GC900",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "128MB/256MB/512MB",
            "storage": [
              "256MB",
              "512MB",
              "1GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": null
          },
          "variants": [
            {
              "name": "LG Viewty Smart GC900 128MB 256MB",
              "ram": "128MB",
              "storage": "256MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Viewty Smart GC900 256MB 512MB",
              "ram": "256MB",
              "storage": "512MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "LG Viewty Smart GC900 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Chocolate 3",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Chocolate 3 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Cookie KP500",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Cookie KP500 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG KC550",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kc550.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~167 ppi pixel density), 2.4 inches (~35.8% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "110 g",
            "dimensions": "96.9 x 51.4 x 14.9 mm (3.81 x 2.02 x 0.59 in)",
            "colors": "Black| Gray| Pink"
          },
          "variants": [
            {
              "name": "LG KC550 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kc550.jpg"
          ]
        },
        {
          "name": "LG KC780",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kc780.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~167 ppi pixel density), 2.4 inches (~32.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "119 g",
            "dimensions": "107 x 52 x 13.9 mm (4.21 x 2.05 x 0.55 in)",
            "colors": "Gray"
          },
          "variants": [
            {
              "name": "LG KC780 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kc780.jpg"
          ]
        },
        {
          "name": "LG KC910 Renoir",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kc910.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~42.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1000 mAh battery",
            "os": null,
            "weight": "114 g",
            "dimensions": "107.8 x 55.9 x 14 mm (4.24 x 2.20 x 0.55 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KC910 Renoir Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kc910.jpg"
          ]
        },
        {
          "name": "LG KF510",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kf510.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~182 ppi pixel density), 2.2 inches (~29.0% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery (LGIP-410A)",
            "os": null,
            "weight": "91 g",
            "dimensions": "104.5 x 49.5 x 10.9 mm (4.11 x 1.95 x 0.43 in)",
            "colors": "Stardust Dark Grey| Sunset Red"
          },
          "variants": [
            {
              "name": "LG KF510 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kf510.jpg"
          ]
        },
        {
          "name": "LG KF600",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kf600.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~200 ppi pixel density), 2.0 inches (~24.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "107 g",
            "dimensions": "101.2 x 50.7 x 14.1 mm (3.98 x 2.00 x 0.56 in)",
            "colors": "Pastel Pink| Shiny Pink| Wine Red| Titan"
          },
          "variants": [
            {
              "name": "LG KF600 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kf600.jpg"
          ]
        },
        {
          "name": "LG KF700",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kf700.jpg",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 480 pixels (~179 ppi pixel density), 3.0 inches (~44.6% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "107 g",
            "dimensions": "102 x 51 x 14.5 mm (4.02 x 2.01 x 0.57 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KF700 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kf700.jpg"
          ]
        },
        {
          "name": "LG KF900 Prada",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/prada-ii.jpg",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~45.4% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "130 g",
            "dimensions": "104.5 x 54 x 16.8 mm (4.11 x 2.13 x 0.66 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KF900 Prada Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/prada-ii.jpg"
          ]
        },
        {
          "name": "LG KS360",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ks360.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~167 ppi pixel density), 2.4 inches (~34.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "111.5 g",
            "dimensions": "101.5 x 51 x 16.8 mm (4.00 x 2.01 x 0.66 in)",
            "colors": "Black and red| Black and silver| White and soft pink| Titanium and bright blue"
          },
          "variants": [
            {
              "name": "LG KS360 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ks360.jpg"
          ]
        },
        {
          "name": "LG KT520",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kt520.jpg",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~182 ppi pixel density), 2.2 inches (~29.8% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "97 g",
            "dimensions": "101.4 x 49.6 x 15.3 mm (3.99 x 1.95 x 0.60 in)",
            "colors": null
          },
          "variants": [
            {
              "name": "LG KT520 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kt520.jpg"
          ]
        },
        {
          "name": "LG KT610",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kt610.jpg",
          "specs": {
            "display": "TFT 256K colors, 320 x 240 pixels (~167 ppi pixel density), 2.4 inches (~30.4% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Po 960 mAh battery",
            "os": "Symbian 9.2| S60 rel. 3.1",
            "weight": "125.5 g",
            "dimensions": "108.9 x 53.9 x 17.2 mm (4.29 x 2.12 x 0.68 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KT610 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kt610.jpg"
          ]
        },
        {
          "name": "LG Prada II KF900",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Prada II KF900 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Renoir KC910",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Renoir KC910 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Secret KF750",
          "aliases": [],
          "releaseYear": 2008,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Secret KF750 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG KE850 Prada",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ke850_prada.gif",
          "specs": {
            "display": "TFT capacitive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~48.0% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "85 g",
            "dimensions": "98.8 x 54 x 12 mm (3.89 x 2.13 x 0.47 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KE850 Prada Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ke850_prada.gif"
          ]
        },
        {
          "name": "LG KE970 Shine",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-shine.gif",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~182 ppi pixel density), 2.2 inches (~29.7% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 750 mAh battery",
            "os": null,
            "weight": "119 g",
            "dimensions": "99.8 x 50.6 x 13.8 mm (3.93 x 1.99 x 0.54 in)",
            "colors": "Silver| Titanium Black| Gold| Pink"
          },
          "variants": [
            {
              "name": "LG KE970 Shine Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-shine.gif"
          ]
        },
        {
          "name": "LG KS20",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ks20.gif",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors (65K effective), 240 x 320 pixels (~143 ppi pixel density), 2.8 inches (~41.9% screen-to-body ratio)",
            "processor": "Qualcomm MSM72000",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1050 mAh battery",
            "os": "Microsoft Windows Mobile 6.0 Professional",
            "weight": "92.5 g",
            "dimensions": "99.8 x 58 x 12.8 mm (3.93 x 2.28 x 0.50 in)",
            "colors": "Black| Baby Pink"
          },
          "variants": [
            {
              "name": "LG KS20 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ks20.gif"
          ]
        },
        {
          "name": "LG KU380",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ku380.jpg",
          "specs": {
            "display": "TFT 256K colors, 176 x 220 pixels (~160 ppi pixel density), 1.76 inches (~22.6% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 900 mAh battery",
            "os": null,
            "weight": "91 g",
            "dimensions": "96 x 45 x 17.9 mm (3.78 x 1.77 x 0.70 in)",
            "colors": "Black| White"
          },
          "variants": [
            {
              "name": "LG KU380 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ku380.jpg"
          ]
        },
        {
          "name": "LG KU580",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ku580.gif",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~200 ppi pixel density), 2.0 inches (~24.9% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 860 mAh battery",
            "os": null,
            "weight": "73 g",
            "dimensions": "94 x 53 x 16.5 mm (3.70 x 2.09 x 0.65 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KU580 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ku580.gif"
          ]
        },
        {
          "name": "LG KU950",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ku950.gif",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~167 ppi pixel density), 2.4 inches (~33.2% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 950 mAh battery",
            "os": null,
            "weight": "116 g",
            "dimensions": "102 x 52.6 x 18.9 mm (4.02 x 2.07 x 0.74 in)",
            "colors": "Silver"
          },
          "variants": [
            {
              "name": "LG KU950 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ku950.gif"
          ]
        },
        {
          "name": "LG KU970 Shine",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ku970.gif",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~182 ppi pixel density), 2.2 inches (~29.7% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "120 g",
            "dimensions": "99.8 x 50.6 x 13.8 mm (3.93 x 1.99 x 0.54 in)",
            "colors": "Silver"
          },
          "variants": [
            {
              "name": "LG KU970 Shine Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ku970.gif"
          ]
        },
        {
          "name": "LG KU990 Viewty",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-ku990.gif",
          "specs": {
            "display": "TFT resistive touchscreen 256K colors, 240 x 400 pixels (~155 ppi pixel density), 3.0 inches (~45.5% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 1000 mAh battery",
            "os": null,
            "weight": "112 g",
            "dimensions": "103.5 x 54.4 x 14.8 mm (4.07 x 2.14 x 0.58 in)",
            "colors": "Black| Dark Silver| Purple| Pink| Hot Red| White"
          },
          "variants": [
            {
              "name": "LG KU990 Viewty Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-ku990.gif"
          ]
        },
        {
          "name": "LG Prada KE850",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Prada KE850 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Shine KE970",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Shine KE970 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Viewty KU990",
          "aliases": [],
          "releaseYear": 2007,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Viewty KU990 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG Chocolate",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": null,
          "specs": {
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
              "name": "LG Chocolate Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG KE800 Chocolate Platinum",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": null,
          "specs": {
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
              "name": "LG KE800 Chocolate Platinum Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG KG200",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg200.gif",
          "specs": {
            "display": "TFT 256K colors, 128 x 160 pixels (~114 ppi pixel density), 1.8 inches (~22.2% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 800 mAh battery",
            "os": null,
            "weight": "89 g",
            "dimensions": "100 x 46 x 15 mm (3.94 x 1.81 x 0.59 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KG200 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg200.gif"
          ]
        },
        {
          "name": "LG KG220",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg220.gif",
          "specs": {
            "display": "CSTN 65K colors, 128 x 128 pixels",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 830 mAh battery",
            "os": null,
            "weight": "73 g",
            "dimensions": "81.8 x 43.4 x 23.3 mm (3.22 x 1.71 x 0.92 in)",
            "colors": "Black| Pink"
          },
          "variants": [
            {
              "name": "LG KG220 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg220.gif"
          ]
        },
        {
          "name": "LG KG290",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg290.gif",
          "specs": {
            "display": "TFT 256K colors, 128 x 160 pixels (~116 ppi pixel density), 1.77 inches (~23.3% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 820 mAh battery",
            "os": null,
            "weight": "90 g",
            "dimensions": "92 x 46 x 17.7 mm (3.62 x 1.81 x 0.70 in)",
            "colors": "Black| Gray"
          },
          "variants": [
            {
              "name": "LG KG290 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg290.gif"
          ]
        },
        {
          "name": "LG KG320",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg320.gif",
          "specs": {
            "display": "TFT 256K colors, 176 x 220 pixels (~157 ppi pixel density), 1.8 inches (~23.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion battery",
            "os": null,
            "weight": "70 g",
            "dimensions": "96 x 46 x 9.9 mm (3.78 x 1.81 x 0.39 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KG320 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg320.gif"
          ]
        },
        {
          "name": "LG KG800 Chocolate",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": null,
          "specs": {
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
              "name": "LG KG800 Chocolate Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones"
          ]
        },
        {
          "name": "LG KG810",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg810.gif",
          "specs": {
            "display": "TFT 256K colors, 176 x 220 pixels (~141 ppi pixel density), 2.0 inches| 31 x 39 mm (~29.1% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 700 mAh battery",
            "os": null,
            "weight": "83 g",
            "dimensions": "92 x 47 x 14.9 mm (3.62 x 1.85 x 0.59 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "LG KG810 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg810.gif"
          ]
        },
        {
          "name": "LG KG920",
          "aliases": [],
          "releaseYear": 2006,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/lg-kg920.gif",
          "specs": {
            "display": "TFT 256K colors, 240 x 320 pixels (~200 ppi pixel density), 2.0 inches (~22.9% screen-to-body ratio)",
            "processor": "Processor details pending public verification",
            "ram": null,
            "storage": [
              "Market-dependent storage"
            ],
            "battery": "Removable Li-Ion 820 mAh battery",
            "os": null,
            "weight": "138 g",
            "dimensions": "108 x 50 x 18 mm (4.25 x 1.97 x 0.71 in)",
            "colors": "Silver"
          },
          "variants": [
            {
              "name": "LG KG920 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/lg/",
            "https://en.wikipedia.org/wiki/List_of_LG_mobile_phones",
            "https://en.wikipedia.org/wiki/Category:LG_Electronics_mobile_phones",
            "kaggle:gsmarena-derived-lg-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/lg-kg920.gif"
          ]
        }
      ]
    }
  ]
};
