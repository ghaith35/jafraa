/**
 * Enriched Sony phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/sony.json.
 */

export type SonyEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type SonyEnrichedModelSpecs = {
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

export type SonyEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: SonyEnrichedModelSpecs;
  variants: SonyEnrichedModelVariant[];
  sources?: string[];
};

export type SonyEnrichedFamily = {
  name: string;
  models: SonyEnrichedModel[];
};

export const SONY_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: SonyEnrichedFamily[];
} = {
  "brandName": "Sony",
  "logoUrl": "https://logo.clearbit.com/sony.com",
  "sortOrder": 18,
  "families": [
    {
      "name": "Xperia 1 / PRO",
      "models": [
        {
          "name": "Sony Xperia 1 VIII",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-viii.jpg",
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
              "name": "Sony Xperia 1 VIII 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia 1 VIII 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia 1 VIII 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.sony.co.uk/smartphones",
            "https://www.sony.de/smartphones/gallery",
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-viii.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 VII",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Sony-Xperia-1VII.jpg",
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
              "name": "Sony Xperia 1 VII 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia 1 VII 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.sony.co.uk/smartphones",
            "https://www.sony.de/smartphones/gallery",
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-1-vii/",
            "https://www.gsmarena.com.bd/images/products/Sony-Xperia-1VII.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 VI",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-vi.jpg",
          "specs": {
            "display": "LTPO OLED, 1B colors, 120Hz, HDR BT.2020, 6.5 inches, 1080 x 2340",
            "processor": "Qualcomm SM8650-AB Snapdragon 8 Gen 3 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 14, up to 3 major Android upgrades",
            "weight": "192.0",
            "dimensions": "162 x 74 x 8.2 mm (6.38 x 2.91 x 0.32 in)",
            "colors": "Black, Platinum silver, Khaki green, Scar red"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 VI 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.sony.co.uk/smartphones",
            "https://www.sony.de/smartphones/gallery",
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-vi.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 V",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR BT.2020, 6.5 inches, 1644 x 3840",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14",
            "weight": "187.0",
            "dimensions": "165 x 71 x 8.3 mm (6.50 x 2.80 x 0.33 in)",
            "colors": "Black, Khaki Green, Platinum Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 V 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-v.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 IV",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iv.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR BT.2020, 6.5 inches, 1644 x 3840",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 13",
            "weight": "185.0",
            "dimensions": "165 x 71 x 8.2 mm (6.50 x 2.80 x 0.32 in)",
            "colors": "Black, Violet, White"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 IV 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iv.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 III",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR BT.2020, 6.5 inches, 1644 x 3840",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4500",
            "os": "Android 11, upgradable to Android 13",
            "weight": "186.0",
            "dimensions": "165 x 71 x 8.2 mm (6.50 x 2.80 x 0.32 in)",
            "colors": "Frosted Black, Frosted Gray, Frosted Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 III 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1-iii.jpg"
          ]
        },
        {
          "name": "Sony Xperia PRO-I",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-pro-i.jpg",
          "specs": {
            "display": "6.5 inches, 98.6 cm, 1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11, upgradable to Android 13",
            "weight": "211 g (7.44 oz)",
            "dimensions": "166 x 72 x 8.9 mm (6.54 x 2.83 x 0.35 in)",
            "colors": "Frosted Black"
          },
          "variants": [
            {
              "name": "Sony Xperia PRO-I 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-pro-i.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 II",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-1-ii.jpg",
          "specs": {
            "display": "6.5 inches, 98.6 cm, 1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, upgradable to Android 12",
            "weight": "181.4 g (6.38 oz)",
            "dimensions": "165.1 x 71.1 x 7.6 mm (6.5 x 2.80 x 0.30 in)",
            "colors": "Black, Purple, Mirror Lake Green"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 II 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 1 II 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-1-ii/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-1-ii.jpg"
          ]
        },
        {
          "name": "Sony Xperia PRO",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-pro-5g.jpg",
          "specs": {
            "display": "6.5 inches, 98.6 cm, 1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "12GB",
            "storage": [
              "512GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, upgradable to Android 12",
            "weight": "225.1 g (7.94 oz)",
            "dimensions": "170.2 x 76.2 x 10.2 mm (6.70 x 3.00 x 0.40 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "Sony Xperia PRO 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-pro-5g.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1.jpg",
          "specs": {
            "display": "6.5 inches, 98.6 cm, 1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3330 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11",
            "weight": "178 g (6.28 oz)",
            "dimensions": "167 x 72 x 8.2 mm (6.57 x 2.83 x 0.32 in)",
            "colors": "Black, Gray, Purple, White"
          },
          "variants": [
            {
              "name": "Sony Xperia 1 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-1.jpg"
          ]
        },
        {
          "name": "Sony Xperia 1 Professional Edition",
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
              "name": "Sony Xperia 1 Professional Edition 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        }
      ]
    },
    {
      "name": "Xperia 5",
      "models": [
        {
          "name": "Sony Xperia 5 V",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR10, BT.2020, 6.1 inches, 1080 x 2520",
            "processor": "Qualcomm SM8550-AB Snapdragon 8 Gen 2 (4 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14",
            "weight": "182.0",
            "dimensions": "154 x 68 x 8.6 mm (6.06 x 2.68 x 0.34 in)",
            "colors": "Black, Blue, Platinum Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia 5 V 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-v.jpg"
          ]
        },
        {
          "name": "Sony Xperia 5 IV",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Sony-Xperia-5-IV.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR BT.2020, 6.1 inches, 1080 x 2520",
            "processor": "Qualcomm SM8450 Snapdragon 8 Gen 1 (4 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000",
            "os": "Android 12, upgradable to Android 13",
            "weight": "172.0",
            "dimensions": "156 x 67 x 8.2 mm (6.14 x 2.64 x 0.32 in)",
            "colors": "Green, Black, Ecru White"
          },
          "variants": [
            {
              "name": "Sony Xperia 5 IV 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-5-iv/",
            "https://www.gsmarena.com.bd/images/products/Sony-Xperia-5-IV.jpg"
          ]
        },
        {
          "name": "Sony Xperia 5 III",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-iii.jpg",
          "specs": {
            "display": "OLED, 1B colors, 120Hz, HDR BT.2020, 6.1 inches, 1080 x 2520",
            "processor": "Qualcomm SM8350 Snapdragon 888 5G (5 nm)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500",
            "os": "Android 11, upgradable to Android 13",
            "weight": "168.0",
            "dimensions": "157 x 68 x 8.2 mm (6.18 x 2.68 x 0.32 in)",
            "colors": "Black, Green, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia 5 III 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-iii.jpg"
          ]
        },
        {
          "name": "Sony Xperia 5 II",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Sony-Xperia-5-II.jpg",
          "specs": {
            "display": "6.1 inches, 86.9 cm, 1080 x 2520 pixels, 21:9 ratio (~449 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "Li-Ion 4000 mAh",
            "os": "Android 10, upgradable to Android 12",
            "weight": "163 g (5.75 oz)",
            "dimensions": "158 x 68 x 8 mm (6.22 x 2.68 x 0.31 in)",
            "colors": "Black, Grey, Blue, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia 5 II 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 5 II 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-5-ii/",
            "https://www.gsmarena.com.bd/images/products/Sony-Xperia-5-II.jpg"
          ]
        },
        {
          "name": "Sony Xperia 5",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-.jpg",
          "specs": {
            "display": "6.1 inches, 86.9 cm, 1080 x 2520 pixels, 21:9 ratio (~449 ppi density)",
            "processor": "Qualcomm SM8150 Snapdragon 855 (7 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Ion 3140 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 11",
            "weight": "164 g (5.78 oz)",
            "dimensions": "158 x 68 x 8.2 mm (6.22 x 2.68 x 0.32 in)",
            "colors": "Blue, Red, Black, Grey"
          },
          "variants": [
            {
              "name": "Sony Xperia 5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-5-.jpg"
          ]
        }
      ]
    },
    {
      "name": "Xperia 10 / Ace / 8",
      "models": [
        {
          "name": "Sony Xperia 10 VII",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-vii-.jpg",
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
              "name": "Sony Xperia 10 VII 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.sony.co.uk/smartphones",
            "https://www.sony.de/smartphones/gallery",
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-vii-.jpg"
          ]
        },
        {
          "name": "Sony Xperia 10 VI",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-vi.jpg",
          "specs": {
            "display": "6.1 inches, 86.9 cm, 1080 x 2520 pixels, 21:9 ratio (~449 ppi density)",
            "processor": "Qualcomm SM6450 Snapdragon 6 Gen 1 (4 nm)",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 14, upgradable to Android 15, up to 3 major Android upgrades",
            "weight": "164 g (5.78 oz)",
            "dimensions": "155 x 68 x 8.3 mm (6.10 x 2.68 x 0.33 in)",
            "colors": "Blue, Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 VI 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.sony.co.uk/smartphones",
            "https://www.sony.de/smartphones/gallery",
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-vi.jpg"
          ]
        },
        {
          "name": "Sony Xperia 10 V",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Sony-Xperia-10-V.jpg",
          "specs": {
            "display": "OLED, 1B colors, HDR, 6.1 inches, 1080 x 2520",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000",
            "os": "Android 13, upgradable to Android 14",
            "weight": "159.0",
            "dimensions": "155 x 68 x 8.3 mm (6.10 x 2.68 x 0.33 in)",
            "colors": "Black, White, Sage Green, Lavender"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 V 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-10-v/",
            "https://www.gsmarena.com.bd/images/products/Sony-Xperia-10-V.jpg"
          ]
        },
        {
          "name": "Sony Xperia 10 IV",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iv.jpg",
          "specs": {
            "display": "6.0 inches, 84.1 cm, 1080 x 2520 pixels, 21:9 ratio (~457 ppi density)",
            "processor": "Qualcomm SM6375 Snapdragon 695 5G (6 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 5000 mAh",
            "os": "Android 12, upgradable to Android 14",
            "weight": "161 g (5.68 oz)",
            "dimensions": "153 x 67 x 8.3 mm (6.02 x 2.64 x 0.33 in)",
            "colors": "Black, White, Mint, Lavender"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 IV 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iv.jpg"
          ]
        },
        {
          "name": "Sony Xperia Ace III",
          "aliases": [],
          "releaseYear": 2022,
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
              "name": "Sony Xperia Ace III 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Xperia 10 III",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iii.jpg",
          "specs": {
            "display": "OLED, 1B colors, HDR, 6.0 inches, 1080 x 2520",
            "processor": "Qualcomm SM6350 Snapdragon 690 5G (8 nm)",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4500",
            "os": "Android 11, upgradable to Android 13",
            "weight": "169.0",
            "dimensions": "154 x 68 x 8.3 mm (6.06 x 2.68 x 0.33 in)",
            "colors": "Black, White, Blue, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 III 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iii.jpg"
          ]
        },
        {
          "name": "Sony Xperia 10 III Lite",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iii-lite.jpg",
          "specs": {
            "display": "6.0 inches, 84.1 cm, 1080 x 2520 pixels, 21:9 ratio (~457 ppi density)",
            "processor": "Qualcomm SM6350 Snapdragon 690 5G (8 nm)",
            "ram": "6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Po 4500 mAh",
            "os": "Android 11",
            "weight": "169 g (5.96 oz)",
            "dimensions": "154 x 68 x 8.3 mm (6.06 x 2.68 x 0.33 in)",
            "colors": "Black, White, Blue, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 III Lite 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-iii-lite.jpg"
          ]
        },
        {
          "name": "Sony Xperia Ace II",
          "aliases": [],
          "releaseYear": 2021,
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
              "name": "Sony Xperia Ace II 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Xperia 10 II",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-10-ii.jpg",
          "specs": {
            "display": "6.0 inches, 84.1 cm, 1080 x 2520 pixels, 21:9 ratio (~457 ppi density)",
            "processor": "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "Li-Po 3600 mAh",
            "os": "Android 10, upgradable to Android 12",
            "weight": "151 g (5.33 oz)",
            "dimensions": "157 x 69 x 8.2 mm (6.18 x 2.72 x 0.32 in)",
            "colors": "Black, White, Mint Green, Berry Blue"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 II 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 10 II 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-10-ii/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-10-ii.jpg"
          ]
        },
        {
          "name": "Sony Xperia 8 Lite",
          "aliases": [],
          "releaseYear": 2020,
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
              "name": "Sony Xperia 8 Lite 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Xperia 10",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-.jpg",
          "specs": {
            "display": "6.0 inches, 84.1 cm, 1080 x 2520 pixels, 21:9 ratio (~457 ppi density)",
            "processor": "Qualcomm SDM630 Snapdragon 630 (14 nm)",
            "ram": "3GB/4GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 2870 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "156 x 68 x 8.4 mm (6.14 x 2.68 x 0.33 in)",
            "colors": "Black, Navy, Silver, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 10 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-.jpg"
          ]
        },
        {
          "name": "Sony Xperia 10 Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-plus-.jpg",
          "specs": {
            "display": "6.5 inches, 98.7 cm, 1080 x 2520 pixels, 21:9 ratio (~422 ppi density)",
            "processor": "Qualcomm SDM636 Snapdragon 636 (14 nm)",
            "ram": "4GB/6GB",
            "storage": [
              "64GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 9.0 (Pie)",
            "weight": "180 g (6.35 oz)",
            "dimensions": "167 x 73 x 8.3 mm (6.57 x 2.87 x 0.33 in)",
            "colors": "Black, Navy, Silver, Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia 10 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia 10 Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-10-plus-.jpg"
          ]
        },
        {
          "name": "Sony Xperia 8",
          "aliases": [],
          "releaseYear": 2019,
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
              "name": "Sony Xperia 8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Xperia Ace",
          "aliases": [],
          "releaseYear": 2019,
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
              "name": "Sony Xperia Ace 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        }
      ]
    },
    {
      "name": "Xperia X / XA / XZ / R / L",
      "models": [
        {
          "name": "Sony Xperia L4",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l4.jpg",
          "specs": {
            "display": "6.2 inches, 89.8 cm, 720 x 1680 pixels, 21:9 ratio (~295 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3580 mAh",
            "os": "Android 9.0 (Pie)",
            "weight": "178 g (6.28 oz)",
            "dimensions": "159 x 71 x 8.7 mm (6.26 x 2.80 x 0.34 in)",
            "colors": "Black, Blue"
          },
          "variants": [
            {
              "name": "Sony Xperia L4 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l4.jpg"
          ]
        },
        {
          "name": "Sony Xperia L3",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l3.jpg",
          "specs": {
            "display": "5.7 inches, 83.8 cm, 720 x 1440 pixels, 18:9 ratio (~282 ppi density)",
            "processor": "Mediatek MT6762 Helio P22 (12 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3300 mAh, non-removable",
            "os": "Android 8.0 (Oreo)",
            "weight": "156 g (5.50 oz)",
            "dimensions": "154 x 72 x 8.9 mm (6.06 x 2.83 x 0.35 in)",
            "colors": "Black, Gold, Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia L3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l3.jpg"
          ]
        },
        {
          "name": "Sony Xperia L2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l2-.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6737T (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 3300 mAh, non-removable",
            "os": "Android 7.1.1 (Nougat)",
            "weight": "178 g (6.28 oz)",
            "dimensions": "150 x 78 x 9.8 mm (5.91 x 3.07 x 0.39 in)",
            "colors": "Black, Gold, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia L2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l2-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm SDM630 Snapdragon 630 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3300 mAh, non-removable",
            "os": "Android 8.0 (Oreo)",
            "weight": "171 g (6.03 oz)",
            "dimensions": "142 x 70 x 9.7 mm (5.59 x 2.76 x 0.38 in)",
            "colors": "Silver, Black, Blue, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XA2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA2 Plus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-plus-.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1080 x 2160 pixels, 18:9 ratio (~402 ppi density)",
            "processor": "Qualcomm SDM630 Snapdragon 630 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3580 mAh, non-removable",
            "os": "Android 8.0 (Oreo)",
            "weight": "205 g (7.23 oz)",
            "dimensions": "157 x 75 x 9.6 mm (6.18 x 2.95 x 0.38 in)",
            "colors": "Silver, Black, Gold, Green"
          },
          "variants": [
            {
              "name": "Sony Xperia XA2 Plus 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XA2 Plus 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-plus-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA2 Ultra",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-ultra-.jpg",
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Qualcomm SDM630 Snapdragon 630 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3580 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie)",
            "weight": "221 g (7.80 oz)",
            "dimensions": "163 x 80 x 9.5 mm (6.42 x 3.15 x 0.37 in)",
            "colors": "Silver, Black, Blue, Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia XA2 Ultra 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XA2 Ultra 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa2-ultra-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-.jpg",
          "specs": {
            "display": "5.7 inches, 83.8 cm, 1080 x 2160 pixels, 18:9 ratio (~424 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3180 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 10",
            "weight": "198 g (6.98 oz)",
            "dimensions": "153 x 72 x 11.1 mm (6.02 x 2.83 x 0.44 in)",
            "colors": "Liquid Black, Liquid Silver, Deep Green, Ash Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XZ2 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ2 Compact",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-compact-.jpg",
          "specs": {
            "display": "5.0 inches, 64.5 cm, 1080 x 2160 pixels, 18:9 ratio (~483 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2870 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 10",
            "weight": "168 g (5.93 oz)",
            "dimensions": "135 x 65 x 12.1 mm (5.31 x 2.56 x 0.48 in)",
            "colors": "Black, White Silver, Moss Green, Coral Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ2 Compact 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-compact-.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ2 Premium",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-premium.jpg",
          "specs": {
            "display": "5.8 inches, 91.5 cm, 3840 x 2160 pixels, 16:9 ratio (~765 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3540 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 10",
            "weight": "236 g (8.32 oz)",
            "dimensions": "158 x 80 x 11.9 mm (6.22 x 3.15 x 0.47 in)",
            "colors": "Chrome Black, Chrome Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ2 Premium 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz2-premium.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz3-.jpg",
          "specs": {
            "display": "6.0 inches, 92.9 cm, 1440 x 2880 pixels, 18:9 ratio (~537 ppi density)",
            "processor": "Qualcomm SDM845 Snapdragon 845 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3300 mAh, non-removable",
            "os": "Android 9.0 (Pie), upgradable to Android 10",
            "weight": "193 g (6.81 oz)",
            "dimensions": "158 x 73 x 9.9 mm (6.22 x 2.87 x 0.39 in)",
            "colors": "Black, Silver White, Forest Green, Bordeaux Red"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XZ3 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz3-.jpg"
          ]
        },
        {
          "name": "Sony Xperia L1",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l1-.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Mediatek MT6737T (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2620 mAh, non-removable",
            "os": "Android 7.0 (Nougat)",
            "weight": "180 g (6.35 oz)",
            "dimensions": "151 x 74 x 8.7 mm (5.94 x 2.91 x 0.34 in)",
            "colors": "Black, White, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia L1 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l1-.jpg"
          ]
        },
        {
          "name": "Sony Xperia R1",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-r1.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 720 x 1280 pixels, 16:9 ratio (~282 ppi density)",
            "processor": "Qualcomm MSM8937 Snapdragon 430 (28 nm)",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Li-Ion 2620 mAh, non-removable",
            "os": "Android 7.1 (Nougat)",
            "weight": "154 g (5.43 oz)",
            "dimensions": "146 x 73.2 x 8.9 mm (5.75 x 2.88 x 0.35 in)",
            "colors": "Black, Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia R1 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia R1 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-r1.jpg"
          ]
        },
        {
          "name": "Sony Xperia R1 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-r1-plus.jpg",
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
              "name": "Sony Xperia R1 Plus 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia R1 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia R1 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-r1-plus/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-r1-plus.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA1",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xz.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~70.9% screen-to-body ratio)",
            "processor": "Mediatek MT6757 Helio P20",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 2900 mAh battery",
            "os": "Android 7.0 (Nougat)",
            "weight": "143 g",
            "dimensions": "145 x 67 x 8 mm (5.71 x 2.64 x 0.31 in)",
            "colors": "Mineral black| Platinum| Forest blue| Deep pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XA1 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA1 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xz.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA1 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa1-plus.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6757 Helio P20 (16 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 3430 mAh, non-removable",
            "os": "Android 7.0 (Nougat), upgradable to Android 8.0 (Oreo)",
            "weight": "189 g (6.67 oz)",
            "dimensions": "155 x 75 x 8.7 mm (6.10 x 2.95 x 0.34 in)",
            "colors": "Black, Blue, Pink, Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia XA1 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XA1 Plus 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xa1-plus.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA1 Ultra",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-xa1-ultra.jpg",
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Mediatek MT6757 Helio P20 (16 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 7.0 (Nougat), upgradable to Android 8.0 (Oreo)",
            "weight": "188 g (6.63 oz)",
            "dimensions": "165 x 79 x 8.1 mm (6.50 x 3.11 x 0.32 in)",
            "colors": "White, Black, Gold, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XA1 Ultra 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XA1 Ultra 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-xa1-ultra/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-xa1-ultra.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ Premium",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xa1-ultra-2017.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 3840 x 2160 pixels (~807 ppi pixel density), 5.46 inches (~68.4% screen-to-body ratio)",
            "processor": "Qualcomm MSM8998 Snapdragon 835",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 2700 mAh battery",
            "os": "Android 7.1 (Nougat)",
            "weight": "195 g",
            "dimensions": "156 x 77 x 7.9 mm (6.14 x 3.03 x 0.31 in)",
            "colors": "White| Black| Gold| Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ Premium 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XZ Premium 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XZ Premium 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xa1-ultra-2017.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ1",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz1.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie)",
            "weight": "155 g (5.47 oz)",
            "dimensions": "148 x 73.4 x 7.4 mm (5.83 x 2.89 x 0.29 in)",
            "colors": "Black, Warm Silver, Venus Pink, Moonlit Blue"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ1 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz1.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ1 Compact",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz1-compact.jpg",
          "specs": {
            "display": "4.6 inches, 58.3 cm, 720 x 1280 pixels, 16:9 ratio (~319 ppi density)",
            "processor": "Qualcomm MSM8998 Snapdragon 835 (10 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 8.0 (Oreo), upgradable to Android 9.0 (Pie)",
            "weight": "140 g (4.94 oz)",
            "dimensions": "129 x 65 x 9.3 mm (5.08 x 2.56 x 0.37 in)",
            "colors": "Black, White Silver, Horizon Blue, Twilight Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ1 Compact 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz1-compact.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZs",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-xzs.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 820 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2900 mAh, non-removable",
            "os": "Android 7.1 (Nougat), upgradable to Android 8.0 (Oreo)",
            "weight": "161 g (5.68 oz)",
            "dimensions": "146 x 72 x 8.1 mm (5.75 x 2.83 x 0.32 in)",
            "colors": "Black, Warm Silver, Ice Blue"
          },
          "variants": [
            {
              "name": "Sony Xperia XZs 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XZs 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-xzs/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-xzs.jpg"
          ]
        },
        {
          "name": "Sony Xperia X",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xa--.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~441 ppi pixel density), 5.0 inches (~69.8% screen-to-body ratio)",
            "processor": "Qualcomm MSM8956 Snapdragon 650",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 2300 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)| upgradable to 7.1.1 (Nougat)",
            "weight": "153 g",
            "dimensions": "143 x 69 x 7.7 mm (5.63 x 2.72 x 0.30 in)",
            "colors": "White| Graphite Black| Lime Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia X 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia X 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-xa--.jpg"
          ]
        },
        {
          "name": "Sony Xperia X Compact",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-x-compact.jpg",
          "specs": {
            "display": "4.6 inches, 58.3 cm, 720 x 1280 pixels, 16:9 ratio (~319 ppi density)",
            "processor": "Qualcomm MSM8956 Snapdragon 650",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 6.0.1 (Marshmallow), upgradable to Android 8.0 (Oreo)",
            "weight": "135 g (4.76 oz)",
            "dimensions": "129 x 65 x 9.5 mm (5.08 x 2.56 x 0.37 in)",
            "colors": "White, Universe black, Mist blue"
          },
          "variants": [
            {
              "name": "Sony Xperia X Compact 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-x-compact.jpg"
          ]
        },
        {
          "name": "Sony Xperia X Performance",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-x-performance.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 820 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 6.0.1 (Marshmallow), upgradable to Android 8.0 (Oreo)",
            "weight": "164.4 g (5.78 oz)",
            "dimensions": "143.7 x 70.4 x 8.7 mm (5.66 x 2.77 x 0.34 in)",
            "colors": "White, Graphite Black, Lime Gold, Rose Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia X Performance 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia X Performance 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-x-performance.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/verycool-spark-lte-sl5011.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~71.8% screen-to-body ratio)",
            "processor": "Mediatek MT6755 Helio P10",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Po 2200 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)| planned upgrade to 7.0 (Nougat)",
            "weight": "137.4 g",
            "dimensions": "143.6 x 66.8 x 7.9 mm (5.65 x 2.63 x 0.31 in)",
            "colors": "Black/Silver| White/Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia XA 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/verycool-spark-lte-sl5011.jpg"
          ]
        },
        {
          "name": "Sony Xperia XA Ultra",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-x-performance.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 1080 x 1920 pixels (~367 ppi pixel density), 6.0 inches (~76.6% screen-to-body ratio)",
            "processor": "Mediatek MT6755 Helio P10",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Non-removable Li-Ion 2700 mAh battery",
            "os": "Android 6.0.1 (Marshmallow)| planned upgrade to 7.0 (Nougat)",
            "weight": "202 g",
            "dimensions": "164 x 79 x 8.4 mm (6.46 x 3.11 x 0.33 in)",
            "colors": "White| Graphite Black| Lime Gold| Rose Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia XA Ultra 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA Ultra 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia XA Ultra 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-x-performance.jpg"
          ]
        },
        {
          "name": "Sony Xperia XZ",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8996 Snapdragon 820 (14 nm)",
            "ram": "3GB/4GB/6GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "Li-Ion 2900 mAh, non-removable",
            "os": "Android 6.0.1 (Marshmallow), upgradable to Android 8.0 (Oreo)",
            "weight": "161 g (5.68 oz)",
            "dimensions": "146 x 72 x 8.1 mm (5.75 x 2.83 x 0.32 in)",
            "colors": "Mineral black, Platinum, Forest blue, Deep pink"
          },
          "variants": [
            {
              "name": "Sony Xperia XZ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia XZ 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://www.gadgets360.com/mobiles/sony-phones",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-xz.jpg"
          ]
        }
      ]
    },
    {
      "name": "Xperia Z",
      "models": [
        {
          "name": "Sony Xperia Z3+",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-z3-plus.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2930 mAh, non-removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 7.0 (Nougat)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "146 x 72 x 6.9 mm (5.75 x 2.83 x 0.27 in)",
            "colors": "White, black, copper, aqua green"
          },
          "variants": [
            {
              "name": "Sony Xperia Z3+ 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-z3-plus/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-z3-plus.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z3+ dual",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-z3-plus-dual.jpg",
          "specs": {
            "display": "5.2 inches, 73.2 cm, 1080 x 1920 pixels, 16:9 ratio (~428 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2930 mAh, non-removable",
            "os": "Android 5.0 (Lollipop), upgradable to 6.0 (Marshmallow)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "146 x 72 x 6.9 mm (5.75 x 2.83 x 0.27 in)",
            "colors": "White, black, copper, aqua green"
          },
          "variants": [
            {
              "name": "Sony Xperia Z3+ dual 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-z3-plus-dual/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-z3-plus-dual.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z4v",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z4v.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1440 x 2560 pixels, 16:9 ratio (~565 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 5.0 (Lollipop)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "144.4 x 72.3 x 8.7 mm (5.69 x 2.85 x 0.34 in)",
            "colors": "White, black"
          },
          "variants": [
            {
              "name": "Sony Xperia Z4v 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z4v.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z5",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-z5.jpg",
          "specs": {
            "display": "5.2 inches, 73.2 cm, 1080 x 1920 pixels, 16:9 ratio (~428 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2900 mAh, non-removable",
            "os": "Android 5.1.1 (Lollipop), upgradable to 7.1.1 (Nougat)",
            "weight": "154 g (5.43 oz)",
            "dimensions": "146 x 72 x 7.3 mm (5.75 x 2.83 x 0.29 in)",
            "colors": "White, Graphite Black, Gold, Green, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia Z5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-z5/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-z5.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z5 Compact",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-z5-compact.jpg",
          "specs": {
            "display": "4.6 inches, 56.9 cm, 720 x 1280 pixels, 16:9 ratio (~323 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2700 mAh, non-removable",
            "os": "Android 5.1.1 (Lollipop), upgradable to 7.1.1 (Nougat)",
            "weight": "138 g (4.87 oz)",
            "dimensions": "127 x 65 x 8.9 mm (5.0 x 2.56 x 0.35 in)",
            "colors": "White, Graphite Black, Yellow, Coral"
          },
          "variants": [
            {
              "name": "Sony Xperia Z5 Compact 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-z5-compact/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-z5-compact.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z5 Premium",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/sony-xperia-z5-premium.jpg",
          "specs": {
            "display": "5.5 inches, 82.4 cm, 2160 x 3840 pixels, 16:9 ratio (~806 ppi density)",
            "processor": "Qualcomm MSM8994 Snapdragon 810 (20 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3430 mAh, non-removable",
            "os": "Android 5.1.1 (Lollipop), upgradable to 7.0 (Nougat)",
            "weight": "180 g (6.35 oz)",
            "dimensions": "154.4 x 75.8 x 7.8 mm (6.08 x 2.98 x 0.31 in)",
            "colors": "Chrome, Black, Gold, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia Z5 Premium 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "https://www.gsmarena.com.bd/pictures/sony-xperia-z5-premium/",
            "https://www.gsmarena.com.bd/images/products/sony-xperia-z5-premium.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z1 Compact",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z1-compact.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8974 Snapdragon 800 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "137 g (4.83 oz)",
            "dimensions": "127 x 64.9 x 9.5 mm (5.0 x 2.56 x 0.37 in)",
            "colors": "Black, White, Pink, Lime"
          },
          "variants": [
            {
              "name": "Sony Xperia Z1 Compact 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z1-compact.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z1s",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z1s.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8974 Snapdragon 800 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "162 g (5.71 oz)",
            "dimensions": "145.7 x 73.9 x 8.6 mm (5.74 x 2.91 x 0.34 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "Sony Xperia Z1s 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z1s.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z2",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z2.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8974AB Snapdragon 801 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 6.0 (Marshmallow)",
            "weight": "163 g (5.75 oz)",
            "dimensions": "146.8 x 73.3 x 8.2 mm (5.78 x 2.89 x 0.32 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia Z2 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z2.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z2a",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z2a.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8974AB Snapdragon 801 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "163 g (5.75 oz)",
            "dimensions": "137 x 72 x 11 mm (5.39 x 2.83 x 0.43 in)",
            "colors": "Black, White, Turquoise"
          },
          "variants": [
            {
              "name": "Sony Xperia Z2a 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z2a.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3100 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat), upgradable to 6.0 (Marshmallow)",
            "weight": "152 g (5.36 oz)",
            "dimensions": "146 x 72 x 7.3 mm (5.75 x 2.83 x 0.29 in)",
            "colors": "Black, White, Copper, Silver Green, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia Z3 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia Z3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z3 Compact",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3-compact.jpg",
          "specs": {
            "display": "4.6 inches, 58.3 cm, 720 x 1280 pixels, 16:9 ratio (~319 ppi density)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2600 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat), upgradable to 6.0 (Marshmallow)",
            "weight": "129 g (4.55 oz)",
            "dimensions": "127.3 x 64.9 x 8.6 mm (5.01 x 2.56 x 0.34 in)",
            "colors": "Black, White, Green, Orange"
          },
          "variants": [
            {
              "name": "Sony Xperia Z3 Compact 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3-compact.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z3v",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3v.jpg",
          "specs": {
            "display": "5.2 inches, 74.5 cm, 1080 x 1920 pixels, 16:9 ratio (~424 ppi density)",
            "processor": "Qualcomm MSM8974AC Snapdragon 801 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3200 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat), upgradable to 5.1.1 (Lollipop)",
            "weight": "170.6 g (6.00 oz)",
            "dimensions": "148.5 x 73.4 x 8.9 mm (5.85 x 2.89 x 0.35 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia Z3v 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z3v.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2330 mAh, non-removable",
            "os": "Android 4.1.2 (Jelly Bean), upgradable to 5.1.1 (Lollipop)",
            "weight": "146 g (5.15 oz)",
            "dimensions": "139 x 71 x 7.9 mm (5.47 x 2.80 x 0.31 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia Z 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z Ultra",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z-ultra.jpg",
          "specs": {
            "display": "6.4 inches, 112.9 cm, 1080 x 1920 pixels, 16:9 ratio (~344 ppi density)",
            "processor": "Qualcomm MSM8274 or MSM8974 Snapdragon 800 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3050 mAh, non-removable",
            "os": "Android 4.2 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "212 g (7.48 oz)",
            "dimensions": "179.4 x 92.2 x 6.5 mm (7.06 x 3.63 x 0.26 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia Z Ultra 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-z-ultra.jpg"
          ]
        },
        {
          "name": "Sony Xperia Z1",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": null,
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm MSM8974 Snapdragon 800 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.2 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "170 g (6.00 oz)",
            "dimensions": "144 x 74 x 8.5 mm (5.67 x 2.91 x 0.33 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia Z1 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia ZL",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-zl.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2370 mAh battery",
            "os": "Android 4.1.2 (Jelly Bean), upgradable to 5.1.1 (Lollipop)",
            "weight": "151 g (5.33 oz)",
            "dimensions": "131.6 x 69.3 x 9.8 mm (5.18 x 2.73 x 0.39 in)",
            "colors": "Black, White, Red"
          },
          "variants": [
            {
              "name": "Sony Xperia ZL 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-zl.jpg"
          ]
        },
        {
          "name": "Sony Xperia ZR",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-zr.jpg",
          "specs": {
            "display": "4.55 inches, 57.1 cm, 720 x 1280 pixels, 16:9 ratio (~323 ppi density)",
            "processor": "Qualcomm APQ8064 Snapdragon S4 Pro",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, removable",
            "os": "Android 4.1.2 (Jelly Bean), upgradable to 5.1.1 (Lollipop)",
            "weight": "138 g (4.87 oz)",
            "dimensions": "131.3 x 67.3 x 10.5 mm (5.17 x 2.65 x 0.41 in)",
            "colors": "Black, White, Pink, Mint"
          },
          "variants": [
            {
              "name": "Sony Xperia ZR 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-zr.jpg"
          ]
        }
      ]
    },
    {
      "name": "Xperia C / E / M / T / 2012-2016",
      "models": [
        {
          "name": "Sony Xperia E5",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-e5r.jpg",
          "specs": {
            "display": "IPS LCD capacitive touchscreen 16M colors, 720 x 1280 pixels (~294 ppi pixel density), 5.0 inches (~69.4% screen-to-body ratio)",
            "processor": "Mediatek MT6735",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": "Non-removable Li-Po 2300 mAh battery",
            "os": "Android 6.0 (Marshmallow)",
            "weight": "147 g",
            "dimensions": "144 x 69 x 8.2 mm (5.67 x 2.72 x 0.32 in)",
            "colors": "Graphite Black| White"
          },
          "variants": [
            {
              "name": "Sony Xperia E5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia E5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia E5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "kaggle:gsmarena-img-url",
            "http://cdn2.gsmarena.com/vv/bigpic/sony-xperia-e5r.jpg"
          ]
        },
        {
          "name": "Sony Xperia C4",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c4.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 1080 x 1920 pixels, 16:9 ratio (~401 ppi density)",
            "processor": "Mediatek MT6752 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2600 mAh, non-removable",
            "os": "Android 5.0 (Lollipop), upgradable to 6.0 (Marshmallow)",
            "weight": "147 g (5.19 oz)",
            "dimensions": "150.3 x 77.4 x 7.9 mm (5.92 x 3.05 x 0.31 in)",
            "colors": "Black, White, Mint"
          },
          "variants": [
            {
              "name": "Sony Xperia C4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c4.jpg"
          ]
        },
        {
          "name": "Sony Xperia C5 Ultra",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c5-ultra.jpg",
          "specs": {
            "display": "6.0 inches, 99.2 cm, 1080 x 1920 pixels, 16:9 ratio (~367 ppi density)",
            "processor": "Mediatek MT6752 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2930 mAh, non-removable",
            "os": "Android 5.0 (Lollipop), upgradable to 6.0 (Marshmallow)",
            "weight": "187 g (6.60 oz)",
            "dimensions": "164.2 x 79.6 x 8.2 mm (6.46 x 3.13 x 0.32 in)",
            "colors": "Black, White, Mint"
          },
          "variants": [
            {
              "name": "Sony Xperia C5 Ultra 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c5-ultra.jpg"
          ]
        },
        {
          "name": "Sony Xperia E4",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e4.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 540 x 960 pixels, 16:9 ratio (~220 ppi density)",
            "processor": "Mediatek MT6582 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "137 x 74.6 x 10.5 mm (5.39 x 2.94 x 0.41 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia E4 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e4.jpg"
          ]
        },
        {
          "name": "Sony Xperia E4g",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e4g.jpg",
          "specs": {
            "display": "4.7 inches, 60.9 cm, 540 x 960 pixels, 16:9 ratio (~234 ppi density)",
            "processor": "MediaTek MT6732 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, non-removable",
            "os": "Android 4.4.4 (KitKat)",
            "weight": "135 g (4.76 oz)",
            "dimensions": "133 x 71 x 10.8 mm (5.24 x 2.80 x 0.43 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia E4g 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e4g.jpg"
          ]
        },
        {
          "name": "Sony Xperia M4 Aqua",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m4-aqua.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 720 x 1280 pixels, 16:9 ratio (~294 ppi density)",
            "processor": "Qualcomm MSM8939 Snapdragon 615 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2400 mAh, non-removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "136 g (4.80 oz)",
            "dimensions": "145.5 x 72.6 x 7.3 mm (5.73 x 2.86 x 0.29 in)",
            "colors": "Black, White, Coral, Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia M4 Aqua 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            },
            {
              "name": "Sony Xperia M4 Aqua 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m4-aqua.jpg"
          ]
        },
        {
          "name": "Sony Xperia M5",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m5.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 1080 x 1920 pixels, 16:9 ratio (~441 ppi density)",
            "processor": "Mediatek MT6795 Helio X10 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2600 mAh, non-removable",
            "os": "Android 5.0.1 (Lollipop), upgradable to 6.0.1 (Marshmallow)",
            "weight": "142.5 g (5.04 oz)",
            "dimensions": "145 x 72 x 7.6 mm (5.71 x 2.83 x 0.30 in)",
            "colors": "Black, White, Gold"
          },
          "variants": [
            {
              "name": "Sony Xperia M5 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m5.jpg"
          ]
        },
        {
          "name": "Sony Xperia C3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c3.jpg",
          "specs": {
            "display": "5.5 inches, 83.4 cm, 720 x 1280 pixels, 16:9 ratio (~267 ppi density)",
            "processor": "Qualcomm MSM8926 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2500 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 5.1 (Lollipop)",
            "weight": "149.7 g (5.29 oz)",
            "dimensions": "156.2 x 78.7 x 7.6 mm (6.15 x 3.10 x 0.30 in)",
            "colors": "Black, White, Mint"
          },
          "variants": [
            {
              "name": "Sony Xperia C3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c3.jpg"
          ]
        },
        {
          "name": "Sony Xperia E1",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e1.jpg",
          "specs": {
            "display": "4.0 inches, 45.5 cm, 480 x 800 pixels, 5:3 ratio (~233 ppi density)",
            "processor": "Qualcomm MSM8210 Snapdragon 200 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1700 mAh, removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 4.4.2 (KitKat), Timescape UI",
            "weight": "120 g (4.23 oz)",
            "dimensions": "118 x 62.4 x 12 mm (4.65 x 2.46 x 0.47 in)",
            "colors": "Black, Purple, White"
          },
          "variants": [
            {
              "name": "Sony Xperia E1 512MB 4GB",
              "ram": "512MB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e1.jpg"
          ]
        },
        {
          "name": "Sony Xperia E3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e3.jpg",
          "specs": {
            "display": "4.5 inches, 55.8 cm, 480 x 854 pixels, 16:9 ratio (~218 ppi density)",
            "processor": "Qualcomm MSM8926-2 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2330 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat), upgradable to Android 4.4.4 (KitKat)",
            "weight": "143.8 g (5.08 oz)",
            "dimensions": "137.1 x 69.4 x 8.5 mm (5.40 x 2.73 x 0.33 in)",
            "colors": "Black, White, Yellow, Copper"
          },
          "variants": [
            {
              "name": "Sony Xperia E3 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e3.jpg"
          ]
        },
        {
          "name": "Sony Xperia M2",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m2.jpg",
          "specs": {
            "display": "4.8 inches, 63.5 cm, 540 x 960 pixels, 16:9 ratio (~229 ppi density)",
            "processor": "Qualcomm MSM8926 Snapdragon 400 (28 nm) (D2303, D2306)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "148 g (5.22 oz)",
            "dimensions": "139.7 x 71.1 x 8.6 mm (5.5 x 2.80 x 0.34 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia M2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m2.jpg"
          ]
        },
        {
          "name": "Sony Xperia M2 Aqua",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "4.8 inches, 63.5 cm, 540 x 960 pixels, 16:9 ratio (~229 ppi density)",
            "processor": "Qualcomm MSM8926-2 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2300 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat), upgradable to 5.1.1 (Lollipop)",
            "weight": "149 g (5.26 oz)",
            "dimensions": "140 x 72 x 8.6 mm (5.51 x 2.83 x 0.34 in)",
            "colors": "Black, White, Copper"
          },
          "variants": [
            {
              "name": "Sony Xperia M2 Aqua 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia T2 Ultra",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 99.2 cm, 720 x 1280 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm MSM8928 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 5.1 (Lollipop)",
            "weight": "171.7 g (D5303)/ 172.4 g (D5306) (6.07 oz)",
            "dimensions": "165.2 x 83.8 x 7.7 mm (6.50 x 3.30 x 0.30 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia T2 Ultra 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia T2 Ultra dual",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": null,
          "specs": {
            "display": "6.0 inches, 99.2 cm, 720 x 1280 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm MSM8228 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 3000 mAh, non-removable",
            "os": "Android 4.3 (Jelly Bean), upgradable to 5.1.1 (Lollipop)",
            "weight": "171.8 g (6.03 oz)",
            "dimensions": "165.2 x 83.8 x 7.7 mm (6.50 x 3.30 x 0.30 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia T2 Ultra dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia T3",
          "aliases": [],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-t3.jpg",
          "specs": {
            "display": "5.3 inches, 77.4 cm, 720 x 1280 pixels, 16:9 ratio (~277 ppi density)",
            "processor": "Qualcomm MSM8928-2 Snapdragon 400 (28 nm) (D5103,D5106)/ Qualcomm MSM8228 (D5102)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2500 mAh, non-removable",
            "os": "Android 4.4.2 (KitKat)",
            "weight": "148 g (5.22 oz)",
            "dimensions": "150.7 x 77 x 7 mm (5.93 x 3.03 x 0.28 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia T3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-t3.jpg"
          ]
        },
        {
          "name": "Sony Xperia C",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c.jpg",
          "specs": {
            "display": "5.0 inches, 68.9 cm, 540 x 960 pixels, 16:9 ratio (~220 ppi density)",
            "processor": "Mediatek MT6589 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2390 mAh, non-removable",
            "os": "Android 4.2.2 (Jelly Bean)",
            "weight": "153 g (5.40 oz)",
            "dimensions": "141.5 x 74.2 x 8.9 mm (5.57 x 2.92 x 0.35 in)",
            "colors": "Black, White, Purple"
          },
          "variants": [
            {
              "name": "Sony Xperia C 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-c.jpg"
          ]
        },
        {
          "name": "Sony Xperia E",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e.jpg",
          "specs": {
            "display": "3.5 inches, 36.5 cm, 320 x 480 pixels, 3:2 ratio (~165 ppi density)",
            "processor": "Qualcomm MSM7227A Snapdragon S1",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1530 mAh, removable",
            "os": "Android 4.1 (Jelly Bean), Timescape UI",
            "weight": "115.7 g (4.06 oz)",
            "dimensions": "113.5 x 61.8 x 11 mm (4.47 x 2.43 x 0.43 in)",
            "colors": "Black, Pink, White"
          },
          "variants": [
            {
              "name": "Sony Xperia E 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia E 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia E 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia E 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-e.jpg"
          ]
        },
        {
          "name": "Sony Xperia L",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 480 x 854 pixels, 16:9 ratio (~228 ppi density)",
            "processor": "Qualcomm MSM8230 Snapdragon 400 (28 nm)",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 1750 mAh, removable",
            "os": "Android 4.1 (Jelly Bean), upgradable to 4.2.2 (Jelly Bean)",
            "weight": "137 g (4.83 oz)",
            "dimensions": "128.7 x 65 x 9.7 mm (5.07 x 2.56 x 0.38 in)",
            "colors": "Black, White, Red"
          },
          "variants": [
            {
              "name": "Sony Xperia L 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia L 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia L 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia L 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-l.jpg"
          ]
        },
        {
          "name": "Sony Xperia M",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m.jpg",
          "specs": {
            "display": "4.0 inches, 44.1 cm, 480 x 854 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm Snapdragon S4 Plus MSM8227",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Po 1750 mAh, removable",
            "os": "Android 4.1 (Jelly Bean)/ 4.2.2 - C2004/C2005 models, upgradable to 4.3 (Jelly Bean)",
            "weight": "115 g (4.06 oz)",
            "dimensions": "124 x 62 x 9.3 mm (4.88 x 2.44 x 0.37 in)",
            "colors": "Black, White, Purple, Yellow (single sim model only)"
          },
          "variants": [
            {
              "name": "Sony Xperia M 1GB 4GB",
              "ram": "1GB",
              "storage": "4GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-m.jpg"
          ]
        },
        {
          "name": "Sony Xperia SP",
          "aliases": [],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-sp.jpg",
          "specs": {
            "display": "4.6 inches, 58.3 cm, 720 x 1280 pixels, 16:9 ratio (~319 ppi density)",
            "processor": "Qualcomm MSM8960T Snapdragon S4 Pro",
            "ram": "1GB/2GB/3GB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": "Li-Ion 2370 mAh, non-removable",
            "os": "Android 4.1 (Jelly Bean), upgradаble to 4.3 (Jelly Bean)",
            "weight": "155 g (5.47 oz)",
            "dimensions": "130.6 x 67.1 x 10 mm (5.14 x 2.64 x 0.39 in)",
            "colors": "Black, White, Red"
          },
          "variants": [
            {
              "name": "Sony Xperia SP 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia SP 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia SP 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia SP 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-sp.jpg"
          ]
        },
        {
          "name": "Sony Xperia acro S",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-acro-s.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8260 Snapdragon S3",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1910 mAh battery",
            "os": "Android 4.0 (Ice Cream Sandwich), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "147 g (5.19 oz)",
            "dimensions": "126 x 66 x 11.9 mm (4.96 x 2.60 x 0.47 in)",
            "colors": "White, Black, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia acro S 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia acro S 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia acro S 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia acro S 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-acro-s.jpg"
          ]
        },
        {
          "name": "Sony Xperia go",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-go.jpg",
          "specs": {
            "display": "3.5 inches, 36.5 cm, 320 x 480 pixels, 3:2 ratio (~165 ppi density)",
            "processor": "NovaThor U8500",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1305 mAh battery",
            "os": "Android 2.3 (Gingerbread), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "110 g (3.88 oz)",
            "dimensions": "111 x 60.3 x 9.8 mm (4.37 x 2.37 x 0.39 in)",
            "colors": "White, Black, Yellow"
          },
          "variants": [
            {
              "name": "Sony Xperia go 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia go 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia go 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia go 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-go.jpg"
          ]
        },
        {
          "name": "Sony Xperia ion",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-ion.jpg",
          "specs": {
            "display": "4.55 inches, 57.1 cm, 720 x 1280 pixels, 16:9 ratio (~323 ppi density)",
            "processor": "Qualcomm MSM8260 Snapdragon S3",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1900 mAh battery",
            "os": "Android 2.3 (Gingerbread), 4.0 (Ice Cream Sandwich), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "133 x 68 x 10.8 mm (5.24 x 2.68 x 0.43 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia ion 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-ion.jpg"
          ]
        },
        {
          "name": "Sony Xperia J",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-j.jpg",
          "specs": {
            "display": "4.0 inches, 44.1 cm, 480 x 854 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm MSM7227A Snapdragon S1",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1750 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "124 g (4.37 oz)",
            "dimensions": "124.3 x 61.2 x 9.2 mm (4.89 x 2.41 x 0.36 in)",
            "colors": "Black, White, Gold, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia J 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia J 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia J 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia J 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-j.jpg"
          ]
        },
        {
          "name": "Sony Xperia miro",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-miro.jpg",
          "specs": {
            "display": "3.5 inches, 36.5 cm, 320 x 480 pixels, 3:2 ratio (~165 ppi density)",
            "processor": "Qualcomm MSM7225A Snapdragon S1",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 4.0 (Ice Cream Sandwich)",
            "weight": "110 g (3.88 oz)",
            "dimensions": "113 x 59.4 x 9.9 mm (4.45 x 2.34 x 0.39 in)",
            "colors": "Black, Pink, White with silver, White with gold"
          },
          "variants": [
            {
              "name": "Sony Xperia miro 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia miro 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia miro 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia miro 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-miro.jpg"
          ]
        },
        {
          "name": "Sony Xperia neo L",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-neo-l.jpg",
          "specs": {
            "display": "4.0 inches, 44.1 cm, 480 x 854 pixels, 16:9 ratio (~245 ppi density)",
            "processor": "Qualcomm MSM8255 Snapdragon S2",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Po 1500 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich)",
            "weight": "131.5 g (4.62 oz)",
            "dimensions": "121 x 61.1 x 12.2 mm (4.76 x 2.41 x 0.48 in)",
            "colors": "Black, White"
          },
          "variants": [
            {
              "name": "Sony Xperia neo L 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia neo L 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia neo L 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia neo L 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-neo-l.jpg"
          ]
        },
        {
          "name": "Sony Xperia P",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "4.0 inches, 44.1 cm, 540 x 960 pixels, 16:9 ratio (~275 ppi density)",
            "processor": "NovaThor U8500",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1305 mAh battery",
            "os": "Android 2.3 (Gingerbread), upgradable to 4.1 (Jelly Bean)",
            "weight": "120 g (4.23 oz)",
            "dimensions": "122 x 59.5 x 10.5 mm (4.80 x 2.34 x 0.41 in)",
            "colors": "Silver, Black, Red"
          },
          "variants": [
            {
              "name": "Sony Xperia P 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia P 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia P 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia P 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia S",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-s.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8260 Snapdragon S3",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1750 mAh battery",
            "os": "Android 2.3 (Gingerbread), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "128 x 64 x 10.6 mm (5.04 x 2.52 x 0.42 in)",
            "colors": "White, Black, Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia S 1GB 32GB",
              "ram": "1GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-s.jpg"
          ]
        },
        {
          "name": "Sony Xperia SL",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8260 Snapdragon S3",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1750 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich), upgradable to 4.1.2 (Jelly Bean)",
            "weight": "144 g (5.08 oz)",
            "dimensions": "128 x 64 x 10.6 mm (5.04 x 2.52 x 0.42 in)",
            "colors": "Black, White, Silver, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia SL 1GB 32GB",
              "ram": "1GB",
              "storage": "32GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia sola",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-sola.jpg",
          "specs": {
            "display": "3.7 inches, 37.7 cm, 480 x 854 pixels, 16:9 ratio (~265 ppi density)",
            "processor": "NovaThor U8500",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1320 mAh battery",
            "os": "Android 2.3 (Gingerbread), upgradable to 4.0 (Ice Cream Sandwich)",
            "weight": "107 g (3.77 oz)",
            "dimensions": "116 x 59 x 9.9 mm (4.57 x 2.32 x 0.39 in)",
            "colors": "Black, White, Red"
          },
          "variants": [
            {
              "name": "Sony Xperia sola 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia sola 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia sola 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia sola 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-sola.jpg"
          ]
        },
        {
          "name": "Sony Xperia T",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-t.jpg",
          "specs": {
            "display": "4.55 inches, 57.1 cm, 720 x 1280 pixels, 16:9 ratio (~323 ppi density)",
            "processor": "Qualcomm MSM8260A Snapdragon S4 Plus",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Non-removable Li-Ion 1850 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich), upgradаble to 4.3 (Jelly Bean)",
            "weight": "139 g (4.90 oz)",
            "dimensions": "129.4 x 67.3 x 9.4 mm (5.09 x 2.65 x 0.37 in)",
            "colors": "Black, White, Silver"
          },
          "variants": [
            {
              "name": "Sony Xperia T 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-t.jpg"
          ]
        },
        {
          "name": "Sony Xperia tipo",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tipo.jpg",
          "specs": {
            "display": "3.2 inches, 30.5 cm, 320 x 480 pixels, 3:2 ratio (~180 ppi density)",
            "processor": "Qualcomm MSM7225AA Snapdragon S1",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich)",
            "weight": "99.4 g (3.49 oz)",
            "dimensions": "103 x 57 x 13 mm (4.06 x 2.24 x 0.51 in)",
            "colors": "Classic Black, Classic White, Deep Red, Navy Blue"
          },
          "variants": [
            {
              "name": "Sony Xperia tipo 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tipo.jpg"
          ]
        },
        {
          "name": "Sony Xperia tipo dual",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tipo-dual.jpg",
          "specs": {
            "display": "3.2 inches, 30.5 cm, 320 x 480 pixels, 3:2 ratio (~180 ppi density)",
            "processor": "Qualcomm MSM7225AA Snapdragon S1",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1500 mAh battery",
            "os": "Android 4.0.3 (Ice Cream Sandwich)",
            "weight": "99.4 g (3.49 oz)",
            "dimensions": "103 x 57 x 13 mm (4.06 x 2.24 x 0.51 in)",
            "colors": "Serene black, Classic silver"
          },
          "variants": [
            {
              "name": "Sony Xperia tipo dual 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo dual 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo dual 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia tipo dual 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tipo-dual.jpg"
          ]
        },
        {
          "name": "Sony Xperia TL",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tl.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Xperia TL 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia TL 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia TL 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia TL 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tl.jpg"
          ]
        },
        {
          "name": "Sony Xperia TX",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tx.jpg",
          "specs": {
            "display": "4.55 inches, 57.1 cm, 720 x 1280 pixels, 16:9 ratio (~323 ppi density)",
            "processor": "Qualcomm MSM8260A Snapdragon S4 Plus",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1750 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich), upgradаble to 4.3 (Jelly Bean)",
            "weight": "127 g (4.48 oz)",
            "dimensions": "131 x 68.6 x 8.6 mm (5.16 x 2.70 x 0.34 in)",
            "colors": "Black, White, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia TX 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-tx.jpg"
          ]
        },
        {
          "name": "Sony Xperia U",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": null,
          "specs": {
            "display": "3.5 inches, 33.8 cm, 480 x 854 pixels, 16:9 ratio (~280 ppi density)",
            "processor": "NovaThor U8500",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1320 mAh battery",
            "os": "Android 2.3 (Gingerbread), upgradable to 4.0 (Ice Cream Sandwich)",
            "weight": "110 g (3.88 oz)",
            "dimensions": "112 x 54 x 12 mm (4.41 x 2.13 x 0.47 in)",
            "colors": "Black, White/ exchangeable bottom caps in white, black, pink, yellow"
          },
          "variants": [
            {
              "name": "Sony Xperia U 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia U 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia U 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Xperia U 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs"
          ]
        },
        {
          "name": "Sony Xperia V",
          "aliases": [],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-v.jpg",
          "specs": {
            "display": "4.3 inches, 51.0 cm, 720 x 1280 pixels, 16:9 ratio (~342 ppi density)",
            "processor": "Qualcomm MSM8960 Snapdragon S4 Plus",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Removable Li-Ion 1750 mAh battery",
            "os": "Android 4.0.4 (Ice Cream Sandwich), upgradable to 4.3 (Jelly Bean)",
            "weight": "120 g (4.23 oz)",
            "dimensions": "129 x 65 x 10.7 mm (5.08 x 2.56 x 0.42 in)",
            "colors": "Black, White, Pink"
          },
          "variants": [
            {
              "name": "Sony Xperia V 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sony/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-xperia-v.jpg"
          ]
        }
      ]
    },
    {
      "name": "Legacy Sony Ericsson Xperia",
      "models": [
        {
          "name": "Sony Ericsson Acro SO-02C",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Acro SO-02C 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Acro SO-02C 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Acro SO-02C 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Acro SO-02C 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Live with Walkman",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-live-with-walkman.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Live with Walkman 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Live with Walkman 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Live with Walkman 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Live with Walkman 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-live-with-walkman.jpg"
          ]
        },
        {
          "name": "Sony Ericsson W8 Walkman",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson W8 Walkman 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson W8 Walkman 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson W8 Walkman 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson W8 Walkman 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson WT18i",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-wt18i.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson WT18i 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson WT18i 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson WT18i 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson WT18i 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-wt18i.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Xperia active",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia active 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia active 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia active 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia active 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia arc",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia arc 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia arc S",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia arc S 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc S 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc S 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia arc S 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia mini",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia mini 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia mini pro",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia mini pro 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini pro 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini pro 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia mini pro 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia neo",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-neo.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia neo 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-neo.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Xperia neo V",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-neo-v.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia neo V 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo V 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo V 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia neo V 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-neo-v.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Xperia PLAY",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia PLAY 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia PLAY 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia PLAY 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia PLAY 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia pro",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-pro.jpg",
          "specs": {
            "display": "6.5 inches, 98.6 cm, 1644 x 3840 pixels, 21:9 ratio (~643 ppi density)",
            "processor": "Qualcomm SM8250 Snapdragon 865 5G (7 nm+)",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
              "8GB",
              "16GB"
            ],
            "battery": "Li-Po 4000 mAh",
            "os": "Android 10, upgradable to Android 12",
            "weight": "225.1 g (7.94 oz)",
            "dimensions": "170.2 x 76.2 x 10.2 mm (6.70 x 3.00 x 0.40 in)",
            "colors": "Black"
          },
          "variants": [
            {
              "name": "Sony Ericsson Xperia pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "kaggle_gsmarena_internal_memory"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia",
            "kaggle:gsmarena-derived-sony-specs",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-xperia-pro.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Xperia ray",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": null,
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Xperia ray 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia ray 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia ray 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Xperia ray 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson A8i",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson A8i Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X10",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia X10 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X10 mini",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia X10 mini Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X10 mini pro",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia X10 mini pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X8",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia X8 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia Pureness",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia Pureness Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X2",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Xperia X2 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        },
        {
          "name": "Sony Ericsson Xperia X1",
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
              "name": "Sony Ericsson Xperia X1 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "https://en.wikipedia.org/wiki/Sony_Xperia"
          ]
        }
      ]
    },
    {
      "name": "Other Sony Ericsson Phones",
      "models": [
        {
          "name": "Sony Ericsson Mix Walkman",
          "aliases": [],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-mix-walkman.jpg",
          "specs": {
            "display": "Display details pending public verification",
            "processor": "Processor details pending public verification",
            "ram": "512MB/1GB",
            "storage": [
              "320MB",
              "1GB",
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
              "name": "Sony Ericsson Mix Walkman 512MB 320MB",
              "ram": "512MB",
              "storage": "320MB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Mix Walkman 512MB 1GB",
              "ram": "512MB",
              "storage": "1GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Mix Walkman 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Sony Ericsson Mix Walkman 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-mix-walkman.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Aspen",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-aspen.jpg",
          "specs": {
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
              "name": "Sony Ericsson Aspen Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-aspen.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Cedar",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Cedar Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Elm",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-elm.jpg",
          "specs": {
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
              "name": "Sony Ericsson Elm Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-elm.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Hazel",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Hazel Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Spiro",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Spiro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Vivaz",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-vivaz.jpg",
          "specs": {
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
              "name": "Sony Ericsson Vivaz Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/",
            "gsmarena:fdn2-bigpic-candidate",
            "https://fdn2.gsmarena.com/vv/bigpic/sony-ericsson-vivaz.jpg"
          ]
        },
        {
          "name": "Sony Ericsson Vivaz Pro",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Vivaz Pro Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Yendo",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Yendo Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Zylo",
          "aliases": [],
          "releaseYear": 2010,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Zylo Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson C901 GreenHeart",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson C901 GreenHeart Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Jalou",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Jalou Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Jalou by Dolce&Gabbana",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Jalou by Dolce&Gabbana Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson Naite",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson Naite Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        },
        {
          "name": "Sony Ericsson T715",
          "aliases": [],
          "releaseYear": 2009,
          "imageUrl": null,
          "specs": {
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
              "name": "Sony Ericsson T715 Market-dependent storage",
              "storage": "Market-dependent storage",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/sonyericsson/"
          ]
        }
      ]
    }
  ]
};
