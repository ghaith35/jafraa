/**
 * Enriched Infinix phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/infinix.json.
 */

export type InfinixEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type InfinixEnrichedModelSpecs = {
  display?: string | null;
  processor?: string | null;
  ram?: string | null;
  storage?: string[] | null;
  battery?: string | null;
  os?: string | null;
  weight?: string | null;
  dimensions?: string | null;
};

export type InfinixEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: InfinixEnrichedModelSpecs;
  variants: InfinixEnrichedModelVariant[];
  sources?: string[];
};

export type InfinixEnrichedFamily = {
  name: string;
  models: InfinixEnrichedModel[];
};

export const INFINIX_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: InfinixEnrichedFamily[];
} = {
  "brandName": "Infinix",
  "logoUrl": "https://logo.clearbit.com/infinixmobility.com",
  "sortOrder": 11,
  "families": [
    {
      "name": "Infinix GT",
      "models": [
        {
          "name": "Infinix GT 50 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt50-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1208 x 2644",
            "processor": "MediaTek Dimensity 8400 Ultimate",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "6500 mAh",
            "os": "Android 16 / XOS 16",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix GT 50 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 50 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://nanoreview.net/en/phone-list/all-other",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://wap.infinixmobility.com/GT-50-Pro",
            "https://www.fonearena.com/blog/481023/infinix-gt-50-pro-price-specifications.html",
            "https://www.devicespecifications.com/en/model/e4c16731",
            "https://www.gsmarena.com/infinix_gt_50_pro_5g-14497.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt50-pro.jpg"
          ]
        },
        {
          "name": "Infinix GT 30",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-5g.jpg",
          "specs": {
            "display": "6.78-inch LTPS AMOLED",
            "processor": "MediaTek Dimensity 7400",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix GT 30 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_gt_30_5g-14044.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-5g.jpg"
          ]
        },
        {
          "name": "Infinix GT 30 5G+",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt50-pro.jpg",
          "specs": {
            "display": "6.78-inch LTPS AMOLED",
            "processor": "MediaTek Dimensity 7400",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix GT 30 5G+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix GT",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt50-pro.jpg"
          ]
        },
        {
          "name": "Infinix GT 30 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1224 x 2720",
            "processor": "MediaTek Dimensity 8350",
            "ram": "8GB/12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5500 mAh",
            "os": "XOS 14 for GT (Android 14)",
            "weight": "188 g",
            "dimensions": "75.8 x 163.7 x 7.99 mm"
          },
          "variants": [
            {
              "name": "Infinix GT 30 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 30 Pro 8GB 512GB",
              "ram": "8GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 30 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 30 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://indiatimes.com/technology/news/infinix-gt-30-pro-first-sale-starts-soon-launched-with-678-inch-15k-ltps-amoled-display-6-layer-3d-vapor-chamber-cooling-system-5500mah-battery-4k-video-and-more-660228.html",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_gt_30_pro_5g-13889.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-pro.jpg"
          ]
        },
        {
          "name": "Infinix GT 30 Pro 5G",
          "aliases": [
            "Infinix GT 30 Pro"
          ],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-pro.jpg",
          "specs": {
            "display": "6.78-inch 1.5K LTPS AMOLED",
            "processor": "MediaTek Dimensity 8350 Ultimate",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix GT 30 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 30 Pro 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://indiatimes.com/technology/news/infinix-gt-30-pro-first-sale-starts-soon-launched-with-678-inch-15k-ltps-amoled-display-6-layer-3d-vapor-chamber-cooling-system-5500mah-battery-4k-video-and-more-660228.html",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_gt_30_pro_5g-13889.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt30-pro.jpg"
          ]
        },
        {
          "name": "Infinix GT 20 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt20-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 8200-Ultra",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14 for GT (Android 14)",
            "weight": "194 g",
            "dimensions": "75.43 x 164.26 x 8.15 mm"
          },
          "variants": [
            {
              "name": "Infinix GT 20 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix GT 20 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_GT_20_Pro",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_gt_20_pro-12962.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt20-pro.jpg"
          ]
        },
        {
          "name": "Infinix GT 10 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt10-pro-5g.jpg",
          "specs": {
            "display": "6.67-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Dimensity 8050",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "187 g",
            "dimensions": "75.89 x 162.66 x 8.1 mm"
          },
          "variants": [
            {
              "name": "Infinix GT 10 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_gt_10_pro-12451.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-gt10-pro-5g.jpg"
          ]
        }
      ]
    },
    {
      "name": "Infinix Zero",
      "models": [
        {
          "name": "Infinix Zero 40",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-40-4g-.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G100",
            "ram": "8GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "180 g",
            "dimensions": "74.6 x 164.31 x 7.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 40 8GB 512GB",
              "ram": "8GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_40_4g-13276.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-40-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 40 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-40-4g-.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 8200-Ultra",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "195 g",
            "dimensions": "74.47 x 164.31 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 40 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 40 5G 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/zero-40-5g/",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_40_4g-13276.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-40-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Zero Flip",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg",
          "specs": {
            "display": "6.9-inch AMOLED, 1080 x 2640",
            "processor": "MediaTek Dimensity 8020",
            "ram": "8GB",
            "storage": [
              "512GB"
            ],
            "battery": "4720 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "195 g",
            "dimensions": "73.4 x 170.35 x 7.64 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero Flip 8GB 512GB",
              "ram": "8GB",
              "storage": "512GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_flip-13347.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 30",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero30-5g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 13 (Android 13)",
            "weight": "185 g",
            "dimensions": "75.03 x 164.51 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 30 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_30-12518.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero30-5g.jpg"
          ]
        },
        {
          "name": "Infinix Zero 30 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero30-5g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Dimensity 8020",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 13 (Android 13)",
            "weight": "185 g",
            "dimensions": "75.03 x 164.51 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 30 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 30 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_30-12518.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero30-5g.jpg"
          ]
        },
        {
          "name": "Infinix Zero 20",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero20-.jpg",
          "specs": {
            "display": "6.7-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "X OS 12 (Android 12)",
            "weight": "196 g",
            "dimensions": "76.66 x 164.43 x 7.98 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 20 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 20 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_20-11913.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero20-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 5G 2023",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g-2023-turbo.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Dimensity 1080",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 12 (Android 12)",
            "weight": "201 g",
            "dimensions": "76.53 x 168.73 x 8.83 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 5G 2023 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_5g_2023-11976.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g-2023-turbo.jpg"
          ]
        },
        {
          "name": "Infinix Zero Ultra",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-ultra.jpg",
          "specs": {
            "display": "6.8-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Dimensity 920",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "XOS 12 (Android 12)",
            "weight": "213 g",
            "dimensions": "74.5 x 165.6 x 8.76 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero Ultra 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_ultra-11922.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Zero Ultra 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-ultra.jpg",
          "specs": {
            "display": "6.8-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Dimensity 920",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "4500 mAh",
            "os": "XOS 12 (Android 12)",
            "weight": "213 g",
            "dimensions": "74.5 x 165.6 x 8.76 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero Ultra 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_ultra-11922.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Zero X",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-x-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero X Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_x-11097.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-x-.jpg"
          ]
        },
        {
          "name": "Infinix Zero X Neo",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-x-neo-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero X Neo Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_x_neo-11098.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-x-neo-.jpg"
          ]
        },
        {
          "name": "Infinix Zero X Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/zero-x-series.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero X Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_x_pro-10989.php",
            "https://fdn2.gsmarena.com/vv/bigpic/zero-x-series.jpg"
          ]
        },
        {
          "name": "Infinix Zero 8",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero8.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785 Helio G90T",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 8 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_8-10401.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero8.jpg"
          ]
        },
        {
          "name": "Infinix Zero 8i",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-8i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785 Helio G90T",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 8i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_8i-10622.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-8i.jpg"
          ]
        },
        {
          "name": "Infinix Zero 6",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-6.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Snapdragon 636",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3650 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 6 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_6-9656.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-6.jpg"
          ]
        },
        {
          "name": "Infinix Zero 6 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-6.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Snapdragon 636",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3650 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 6 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_6_pro-9657.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-6.jpg"
          ]
        },
        {
          "name": "Infinix Zero 5",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero5-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6757CD Helio P20",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4350 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_5-9414.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero5-n.jpg"
          ]
        },
        {
          "name": "Infinix Zero 5 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero5-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6757CD Helio P20",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4350 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 5 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_5_pro-9415.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero5-pro.jpg"
          ]
        },
        {
          "name": "Infinix Zero 4",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero4-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6753",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 4 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_zero_4-9478.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero4-n.jpg"
          ]
        },
        {
          "name": "Infinix Zero 4 Plus",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero4-plus-n.jpg",
          "specs": {
            "display": "5.98-inch IPS, 1080 x 1920",
            "processor": "MediaTek Helio X20",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 6.0 Marshmallow",
            "weight": "203 g",
            "dimensions": "82.97 x 160.5 x 8.25 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 4 Plus 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_4_plus-9479.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero4-plus-n.jpg"
          ]
        },
        {
          "name": "Infinix Zero 2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg",
          "specs": {
            "display": "5-inch Super AMOLED, 720 x 1280",
            "processor": "MediaTek MT6592T",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "2300 mAh",
            "os": "Android 4.4.2 KitKat",
            "weight": "118 g",
            "dimensions": "71.5 x 145 x 6.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Zero",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 2 LTE",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 2 LTE Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Zero",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg",
          "specs": {
            "display": "5.5-inch IPS, 1080 x 1920",
            "processor": "MediaTek Helio X10",
            "ram": "3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "3030 mAh",
            "os": "Android 5.1 Lollipop",
            "weight": "172 g",
            "dimensions": "75.8 x 151 x 6.8 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 3 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Zero 3 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Zero",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg"
          ]
        },
        {
          "name": "Infinix Zero 9",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero 9 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "fallback:image-from-family:Infinix Zero",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-flip-.jpg"
          ]
        }
      ]
    },
    {
      "name": "Infinix Note",
      "models": [
        {
          "name": "Infinix Note 60",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1208 x 2644",
            "processor": "MediaTek Dimensity 7400",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "6500 mAh",
            "os": "Android 16",
            "weight": "199 g",
            "dimensions": "77.17 x 162.37 x 7.45 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 60 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 60 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://gadgets.beebom.com/news/infinix-note-60-note-60-pro-note-60-ultra-ram-and-storage-options-leak",
            "https://wap.infinixmobility.com/Smartphones",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_60_5g-14498.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60.jpg"
          ]
        },
        {
          "name": "Infinix Note 60 Pro",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1208 x 2644",
            "processor": "Qualcomm Snapdragon 7s Gen 4",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "6500 mAh",
            "os": "Android 16",
            "weight": "201 g",
            "dimensions": "77.17 x 162.37 x 7.45 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 60 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 60 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://en.wikipedia.org/wiki/Infinix_Note_60_Pro",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://gadgets.beebom.com/news/infinix-note-60-note-60-pro-note-60-ultra-ram-and-storage-options-leak",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_60_pro_5g-14499.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-pro.jpg"
          ]
        },
        {
          "name": "Infinix Note 60 Ultra",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1208 x 2644",
            "processor": "MediaTek Dimensity 8400-Ultra",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "7000 mAh",
            "os": "Android 16",
            "weight": "201 g",
            "dimensions": "77.17 x 162.37 x 7.45 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 60 Ultra 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.devicespecifications.com/en/model/551e66a7",
            "https://nanoreview.net/en/phone/infinix-note-60-ultra",
            "https://gadgets.beebom.com/news/infinix-note-60-note-60-pro-note-60-ultra-ram-and-storage-options-leak",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_60_ultra_5g-14528.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 50",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G100",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5200 mAh",
            "os": "X OS 15 (Android 15)",
            "weight": "199 g",
            "dimensions": "74.43 x 163.26 x 7.55 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 50 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_50_4g-13705.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50.jpg"
          ]
        },
        {
          "name": "Infinix Note 50 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G100",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5200 mAh",
            "os": "X OS 15 (Android 15)",
            "weight": "198 g",
            "dimensions": "74.43 x 163.26 x 7.32 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 50 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 50 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_50_pro_4g-13701.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50-pro.jpg"
          ]
        },
        {
          "name": "Infinix Note 50 Pro+ 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50-pro-plus-5g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 8350",
            "ram": "12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5200 mAh",
            "os": "X OS 15 (Android 15)",
            "weight": "198 g",
            "dimensions": "74.5 x 163.4 x 8 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 50 Pro+ 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.devicespecifications.com/en/model/e3e8634c",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_50_pro+-13746.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note50-pro-plus-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 50s 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-50s.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 7300 Ultimate",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 50s 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_note_50s_5g-13793.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-50s.jpg"
          ]
        },
        {
          "name": "Infinix Note 50s 5G+",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 7300",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5500 mAh",
            "os": "X OS 15 (Android 15)",
            "weight": "196 g",
            "dimensions": "75.5 x 164.28 x 8.09 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 50s 5G+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 50s 5G+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://timesofindia.indiatimes.com/technology/mobiles-tabs/infinix-note-50s-5g-smartphone-new-6gb-ram-variant-launched-in-india-price-specs-and-more/articleshow/121932597.cms",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 50x",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-50x.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 7300 Ultimate",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 50x Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_note_50x-13747.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-50x.jpg"
          ]
        },
        {
          "name": "Infinix Note 50X 5G+",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "6.67-inch IPS, 720 x 1600",
            "processor": "MediaTek Dimensity 7300",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5200/5500 mAh",
            "os": "X OS 15 (Android 15)",
            "weight": "195 g",
            "dimensions": "76.41 x 165.42 x 7.98 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 50X 5G+ 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 50X 5G+ 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 50X 5G+ 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 50X 5G+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note Edge",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-edge.jpg",
          "specs": {
            "display": "6.78-inch LTPS AMOLED",
            "processor": "MediaTek Dimensity 7100",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "6500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note Edge 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_edge_5g-14421.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-edge.jpg"
          ]
        },
        {
          "name": "Infinix Note 40",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-4g-.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 14 (Android 14)",
            "weight": "190 g",
            "dimensions": "74.53 x 164.13 x 7.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_40-12877.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-4g-.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 7020",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 14 (Android 14)",
            "weight": "190 g",
            "dimensions": "74.6 x 164.36 x 7.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 40 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_40-12877.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-4g-.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G99",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 14 (Android 14)",
            "weight": "190 g",
            "dimensions": "74.6 x 164.35 x 7.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 40 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 40 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_40_pro_4g-12876.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Pro 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-4g-.jpg",
          "specs": {
            "display": "6.78-inch Flexible AMOLED",
            "processor": "MediaTek Dimensity 7020",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40 Pro 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://wap.infinixmobility.com/note-40-pro",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_40_pro_4g-12876.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-4g-.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Pro+ 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-plus-5g-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 7020",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4600 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40 Pro+ 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_40_pro+-12874.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-40-pro-plus-5g-.jpg"
          ]
        },
        {
          "name": "Infinix Note 40S",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note40s-x6850b.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G99 Ultimate",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_40s-13460.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note40s-x6850b.jpg"
          ]
        },
        {
          "name": "Infinix Note 40X 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note40x-5g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Dimensity 6300",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 14 (Android 14)",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40X 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 40X 5G 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_40x_5g-13246.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note40x-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 30",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-5g.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "219 g",
            "dimensions": "76.6 x 168.62 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 30 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_30_5g-12272.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 30 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-5g.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Dimensity 6080",
            "ram": "4GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "204 g",
            "dimensions": "76.51 x 168.51 x 8.45 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 30 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 5G 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 5G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_30_5g-12272.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 30 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-pro.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2460",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "219 g",
            "dimensions": "75.95 x 162.72 x 8.12 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 30 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_30_pro-12273.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30-pro.jpg"
          ]
        },
        {
          "name": "Infinix Note 30 VIP",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-x6710-note-30-vip.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2460",
            "processor": "MediaTek Dimensity 8050",
            "ram": "8GB/12GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "190 g",
            "dimensions": "75.89 x 162.66 x 8.21 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 30 VIP 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 30 VIP 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_30_vip-12365.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-x6710-note-30-vip.jpg"
          ]
        },
        {
          "name": "Infinix Note 30i",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769 Helio G85",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 30i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_30i-12274.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-30i.jpg"
          ]
        },
        {
          "name": "Infinix Note 12",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12-11497.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12-11497.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 G96",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-g96.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6781 Helio G96",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 G96 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_note_12_g96-11526.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-g96.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 Pro 4G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 810",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 Pro 4G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12_pro_5g-11663.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 Pro 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 810",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 Pro 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12_pro_5g-11663.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-pro-5g.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 VIP",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-vip.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6781 Helio G96",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 VIP Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12_vip-11527.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12-vip.jpg"
          ]
        },
        {
          "name": "Infinix Note 12i",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769Z Helio G85",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_12i-11523.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12i.jpg"
          ]
        },
        {
          "name": "Infinix Note 12i 2022",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12i-2022.jpg",
          "specs": {
            "display": "6.7-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Helio G85",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 10.6 (Android 12)",
            "weight": "188 g",
            "dimensions": "76.7 x 164.47 x 7.8 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 12i 2022 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 12i 2022 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 12i 2022 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 12i 2022 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_12i_2022-11919.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note12i-2022.jpg"
          ]
        },
        {
          "name": "Infinix Note 10",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769Z Helio G85",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 10 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_10-10909.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10.jpg"
          ]
        },
        {
          "name": "Infinix Note 10 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10-pro-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 10 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_10_pro-10907.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10-pro-.jpg"
          ]
        },
        {
          "name": "Infinix Note 10 Pro NFC",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10-pro-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6785V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 10 Pro NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_note_10_pro_nfc-10908.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-10-pro-.jpg"
          ]
        },
        {
          "name": "Infinix Note 11",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note11.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 11 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_11-11201.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note11.jpg"
          ]
        },
        {
          "name": "Infinix Note 11 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6781 Helio G96",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 11 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_11_pro-11157.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11-pro.jpg"
          ]
        },
        {
          "name": "Infinix Note 11i",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769Z Helio G85",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 11i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_11i-11214.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11i.jpg"
          ]
        },
        {
          "name": "Infinix Note 11S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11s.jpg",
          "specs": {
            "display": "6.95-inch IPS, 1080 x 2460",
            "processor": "MediaTek Helio G96",
            "ram": "4GB/6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 10 (Android 11)",
            "weight": null,
            "dimensions": "78.37 x 173.06 x 8.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 11S 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 11S 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 11S 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 11S 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 11S 8GB 64GB",
              "ram": "8GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 11S 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_11s-11202.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11s.jpg"
          ]
        },
        {
          "name": "Infinix Note 7",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note7.jpg",
          "specs": {
            "display": "6.95-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G70",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 6.0 (Android 10)",
            "weight": "206 g",
            "dimensions": "79 x 173.4 x 8.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 7 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Note_7",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_7-10175.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note7.jpg"
          ]
        },
        {
          "name": "Infinix Note 7 Lite",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note7lite.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio G70",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 6.0 (Android 10)",
            "weight": "185 g",
            "dimensions": "76.8 x 165 x 8.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 7 Lite 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Note_7",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_7_lite-10177.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note7lite.jpg"
          ]
        },
        {
          "name": "Infinix Note 8",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note8-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 8 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_8-10514.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note8-.jpg"
          ]
        },
        {
          "name": "Infinix Note 8i",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-8i-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 8i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_note_8i-10515.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-8i-.jpg"
          ]
        },
        {
          "name": "Infinix Note 6",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-6-x610.jpg",
          "specs": {
            "display": "6.01-inch AMOLED, 1080 x 2160",
            "processor": "MediaTek Helio P35",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "X OS 5.0 (Android 9 Pie)",
            "weight": "173 g",
            "dimensions": "74.5 x 154.2 x 7.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 6 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_6-9761.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-6-x610.jpg"
          ]
        },
        {
          "name": "Infinix Note 4",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note4-n.jpg",
          "specs": {
            "display": "5.7-inch IPS, 1080 x 1920",
            "processor": "MediaTek MT6753",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "4300 mAh",
            "os": "Android 7.0 Nougat",
            "weight": "198 g",
            "dimensions": "78.8 x 159 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_4-9418.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note4-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 5",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note5-n.jpg",
          "specs": {
            "display": "6-inch IPS, 1080 x 2160",
            "processor": "MediaTek Helio P23",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 8.1 Oreo",
            "weight": "175 g",
            "dimensions": "75 x 158 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 5 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 5 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 5 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_5-9417.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note5-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 5 Stylus",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note5-stylus-n.jpg",
          "specs": {
            "display": "6-inch IPS, 1080 x 2160",
            "processor": "MediaTek Helio P23",
            "ram": "4GB",
            "storage": [
              "32GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 8.1 Oreo Go Edition",
            "weight": null,
            "dimensions": "75 x 158 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 5 Stylus 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_5_stylus-9416.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note5-stylus-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 4 Pro",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note4-pro-n.jpg",
          "specs": {
            "display": "5.7-inch IPS, 1080 x 1920",
            "processor": "MediaTek MT6753",
            "ram": "3GB",
            "storage": [
              "32GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 7.0 Nougat",
            "weight": "200 g",
            "dimensions": "78.8 x 159.6 x 8.3 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 4 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_4_pro-9419.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note4-pro-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 3",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note3-n.jpg",
          "specs": {
            "display": "6-inch IPS, 1080 x 1920",
            "processor": "MediaTek MT6753",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 6.0 Marshmallow",
            "weight": "199 g",
            "dimensions": "82.8 x 162.5 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 3 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_3-9475.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note3-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 3 Pro",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note3-pro-n.jpg",
          "specs": {
            "display": "6-inch IPS, 1080 x 1920",
            "processor": "MediaTek MT6753",
            "ram": "3GB",
            "storage": [
              "16GB"
            ],
            "battery": "4500 mAh",
            "os": "Android 6.0 Marshmallow",
            "weight": "199 g",
            "dimensions": "82.8 x 162.5 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 3 Pro 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_note_3_pro-9476.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note3-pro-n.jpg"
          ]
        },
        {
          "name": "Infinix Note 11 Pro NFC",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 11 Pro NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note-11-pro.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 2023",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Infinix-Note-12-2023.jpg",
          "specs": {
            "display": "6.7-inch AMOLED, 1080 x 2400",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 10.6 (Android 12)",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 2023 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com.bd/images/products/Infinix-Note-12-2023.jpg"
          ]
        },
        {
          "name": "Infinix Note 12 Turbo",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 12 Turbo Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "5.98-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6753",
            "ram": "1GB/2GB",
            "storage": [
              "16GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 5.1 Lollipop",
            "weight": "194 g",
            "dimensions": "82.5 x 159.5 x 9.3 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 2 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Note 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 30 Play",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G37",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "X OS 13 (Android 13)",
            "weight": "205 g",
            "dimensions": "77.5 x 170.57 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Infinix Note 30 Play 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 30 VIP Racing",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 30 VIP Racing Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Pro 5G Racing",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40 Pro 5G Racing Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Pro+ 5G Racing",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40 Pro+ 5G Racing Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 40 Racing Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 40 Racing Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        },
        {
          "name": "Infinix Note 60 Edge",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Note 60 Edge Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "fallback:image-from-family:Infinix Note",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-note60-ultra.jpg"
          ]
        }
      ]
    },
    {
      "name": "Infinix Hot",
      "models": [
        {
          "name": "Infinix Hot 60 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot60-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 7020",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmarena.com/infinix_hot_60_5g-14006.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot60-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G200",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5160 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmarena.com/infinix_hot_60_pro-14003.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60-pro.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60 Pro+",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60-pro-plus.jpg",
          "specs": {
            "display": "6.78-inch 144Hz AMOLED",
            "processor": "MediaTek Helio G200",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5160 mAh",
            "os": null,
            "weight": null,
            "dimensions": "6.0 mm thickness"
          },
          "variants": [
            {
              "name": "Infinix Hot 60 Pro+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.androidcentral.com/phones/infinix-hot-60-pro-plus-budget-phone-sleek-design",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmarena.com/infinix_hot_60_pro+-14002.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60-pro-plus.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60i",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G81 Ultimate",
            "ram": "4GB/6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5160 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 60i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.gsmarena.com/infinix_hot_60i-13983.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60i 5G",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G81 Ultimate",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5160 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60i 5G Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmarena.com/infinix_hot_60i-13983.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-60i.jpg"
          ]
        },
        {
          "name": "Infinix Xpad 20 Android tablet",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "7000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Xpad 20 Android tablet Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_xpad_20-13922.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad20.jpg"
          ]
        },
        {
          "name": "Infinix Xpad 20 Pro Android tablet",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad-20-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G100 Ultimate",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "8000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Xpad 20 Pro Android tablet Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_xpad_20_pro-14116.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad-20-pro.jpg"
          ]
        },
        {
          "name": "Infinix Xpad GT Android tablet",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad-gt.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Snapdragon 888 5G",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "10000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Xpad GT Android tablet Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_xpad_gt-13890.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-xpad-gt.jpg"
          ]
        },
        {
          "name": "Infinix Hot 50 4G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-5g-x6720-.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Helio G100",
            "ram": "6GB/8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "187 g",
            "dimensions": "75.6 x 167.9 x 7.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 50 4G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50 4G 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50 4G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50 4G 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_50-13305.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-5g-x6720-.jpg"
          ]
        },
        {
          "name": "Infinix Hot 50 5G",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-5g-x6720-.jpg",
          "specs": {
            "display": "6.7-inch IPS, 720 x 1600",
            "processor": "MediaTek Dimensity 6300",
            "ram": "4GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "188 g",
            "dimensions": "77.1 x 165.7 x 7.82 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 50 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_50-13305.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-5g-x6720-.jpg"
          ]
        },
        {
          "name": "Infinix Hot 50 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-pro-4g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2460",
            "processor": "MediaTek Helio G100",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "188 g",
            "dimensions": "77.1 x 165.7 x 8.3 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 50 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_50_pro_4g-13461.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-pro-4g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 50 Pro+",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-pro-plus-4g.jpg",
          "specs": {
            "display": "6.78-inch AMOLED, 1080 x 2436",
            "processor": "MediaTek Helio G100",
            "ram": "8GB",
            "storage": [
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "162 g",
            "dimensions": "74.4 x 164.1 x 6.8 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 50 Pro+ 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://wap.infinixmobility.com/specs/hot-50-pro%2B",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_50_pro+_4g-13408.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50-pro-plus-4g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 50i",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50i.jpg",
          "specs": {
            "display": "6.7-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio G81",
            "ram": "4GB/6GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14.5 (Android 14)",
            "weight": "184 g",
            "dimensions": "77.1 x 165.7 x 7.82 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 50i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50i 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 50i 6GB 256GB",
              "ram": "6GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_50i-13375.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-50i.jpg"
          ]
        },
        {
          "name": "Infinix Xpad Android tablet",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/ulefone-xpad.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G99",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "7000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Xpad Android tablet Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_xpad-13263.php",
            "https://fdn2.gsmarena.com/vv/bigpic/ulefone-xpad.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_30-12214.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30 5G",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Dimensity 6020",
            "ram": "4GB/8GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "XOS 13 (Android 13)",
            "weight": "215 g",
            "dimensions": "76.51 x 168.51 x 9.12 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 30 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 30 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_30-12214.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30 Play NFC",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30-play-nfc.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6765 Helio G37",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30 Play NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_hot_30_play_nfc-12289.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30-play-nfc.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30i",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Unisoc T606",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_30i-12216.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 40",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Helio G88",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 13.5 (Android 13)",
            "weight": "196 g",
            "dimensions": "76.61 x 168.61 x 8.25 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 40 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 40 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_40-12732.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40.jpg"
          ]
        },
        {
          "name": "Infinix Hot 40 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40-pro.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Helio G99",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 13.5 (Android 13)",
            "weight": "199 g",
            "dimensions": "76.6 x 168.6 x 8.25 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 40 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 40 Pro 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_40_pro-12733.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40-pro.jpg"
          ]
        },
        {
          "name": "Infinix Hot 40i",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Unisoc T606",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 40i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_40i-12731.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-40i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11 2022",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-11-2022.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Unisoc T610",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11 2022 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_11_2022-11478.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-11-2022.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11S NFC",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-11s-nfc.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11S NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_11s_nfc-11605.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-11s-nfc.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769Z Helio G85",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 12 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_12-11498.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12 Play",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-play.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6765V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 12 Play Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_12_play-11547.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12 Play NFC",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-play.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Unisoc T610",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 12 Play NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_hot_12_play_nfc-11876.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-pro.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1612",
            "processor": "Unisoc Tiger T616",
            "ram": "6GB/8GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 10.6 (Android 12)",
            "weight": "191 g",
            "dimensions": "75.75 x 164.22 x 8.42 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 12 Pro 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 12 Pro 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 12 Pro 8GB 64GB",
              "ram": "8GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 12 Pro 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_12_pro-11822.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot12-pro.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12i",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-12i.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1612",
            "processor": "MediaTek Helio A22",
            "ram": "2GB/3GB/4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 7.6 (Android 11)",
            "weight": "190 g",
            "dimensions": "76.4 x 164.8 x 8.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 12i 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 12i 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 12i 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_12i-11473.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-12i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-5g.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G85",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 10.6 (Android 12)",
            "weight": "198 g",
            "dimensions": "77.44 x 170.67 x 8.32 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 20 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 20 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_20_5g-11923.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-5g.jpg",
          "specs": {
            "display": "6.6-inch IPS, 1080 x 2408",
            "processor": "MediaTek Dimensity 810",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 10.6 (Android 12)",
            "weight": "204 g",
            "dimensions": "76.45 x 166.25 x 8.93 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 20 5G 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_20_5g-11923.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20 Play",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-play.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G37",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "XOS 10.6 (Android 12)",
            "weight": "209 g",
            "dimensions": "78 x 171 x 8.85 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 20 Play 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 20 Play 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_20_play-11931.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20i",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20i.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1612",
            "processor": "MediaTek Helio G25",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 10.6 (Android 12)",
            "weight": "195 g",
            "dimensions": "76.4 x 164.8 x 8.75 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 20i 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 20i 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 20i 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 20i 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_20i-11924.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20S",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20s.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6781 Helio G96",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 20S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_hot_20s-11930.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot20s.jpg"
          ]
        },
        {
          "name": "Infinix Zero",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Dimensity 900",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Zero Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_zero_5g-11355.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Zero 5G",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "6.78-inch IPS, 1080 x 2460",
            "processor": "MediaTek Dimensity 900",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 10 (Android 11)",
            "weight": "199 g",
            "dimensions": "76.53 x 168.73 x 8.77 mm"
          },
          "variants": [
            {
              "name": "Infinix Zero 5G 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_zero_5g-11355.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10 Play",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10-play.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G25/G35",
            "ram": "2GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10 Go / XOS 7.0",
            "weight": null,
            "dimensions": "77.96 x 171.82 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 10 Play 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 10 Play 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 10 Play 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 10 Play 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_10_play-10699.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10i",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769V Helio G70",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 10i Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_10i-11031.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10s--.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G85",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "X OS 7.6 (Android 11)",
            "weight": null,
            "dimensions": "77.5 x 171.5 x 9.2 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 10S 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_10s-10868.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10s--.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10S NFC",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10s--.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G85",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 7.6 (Android 11)",
            "weight": null,
            "dimensions": "77.5 x 171.5 x 9.2 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 10S NFC 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_10s_nfc-10869.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10s--.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10T",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10t-.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G70",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 7.6 (Android 11)",
            "weight": null,
            "dimensions": "77.5 x 171.5 x 9.2 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 10T 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_10t-10891.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-10t-.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_11-11161.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11 Play",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11-play.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6765G Helio G35",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11 Play Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_11_play-11216.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11S",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11s.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769H Helio G88",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_hot_11s-11162.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot11s.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6769V",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5200 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 10 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_10-10452.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10 Lite",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10-lite-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761D Helio A20",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 10 Lite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_10_lite-10516.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot10-lite-.jpg"
          ]
        },
        {
          "name": "Infinix Hot 9",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio A25",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 6.0 (Android 10)",
            "weight": "185 g",
            "dimensions": "76.8 x 165 x 8.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 9 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_9-10156.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9.jpg"
          ]
        },
        {
          "name": "Infinix Hot 9 Play",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9-play.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761 Helio A22",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 9 Play Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_9_play-10285.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9-play.jpg"
          ]
        },
        {
          "name": "Infinix Hot 9 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6762 Helio P22",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 9 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_9_pro-10272.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot9-pro.jpg"
          ]
        },
        {
          "name": "Infinix Hot 7",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot7.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6580",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 7 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_7-9658.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot7.jpg"
          ]
        },
        {
          "name": "Infinix Hot 7 Pro",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-7-pro.jpg",
          "specs": {
            "display": "6.2-inch IPS, 720 x 1520",
            "processor": "MediaTek Helio P20/P22",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "X OS 5.0 (Android 9 Pie)",
            "weight": null,
            "dimensions": "75.9 x 155.4 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 7 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 7 Pro 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 7 Pro 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 7 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_7_pro-9679.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-7-pro.jpg"
          ]
        },
        {
          "name": "Infinix Hot 8",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s8.jpg",
          "specs": {
            "display": "6.52-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio P22",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 5.0 (Android 9 Pie)",
            "weight": "179 g",
            "dimensions": "76.3 x 165 x 8.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_8-9856.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s8.jpg"
          ]
        },
        {
          "name": "Infinix Hot 8 Lite",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-8-lite.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6580",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 8 Lite Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_8_lite-9927.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-8-lite.jpg"
          ]
        },
        {
          "name": "Infinix Hot 6",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 6 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_hot_6-9426.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 6 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6-pro-n.jpg",
          "specs": {
            "display": "6-inch IPS, 720 x 1440",
            "processor": "Qualcomm Snapdragon 425",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 8.0 Oreo",
            "weight": "158 g",
            "dimensions": "76.21 x 160.43 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 6 Pro 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 6 Pro 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 6 Pro 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 6 Pro 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_6_pro-9425.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6-pro-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 6X",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6x-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Snapdragon 425",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 6X Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_6x-9423.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot6x-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot S3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s3-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Snapdragon 430",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot S3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_s3-9421.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s3-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 5",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot5-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6580M",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_5-9427.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot5-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 5 Lite",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot5-lite-n.jpg",
          "specs": {
            "display": "5.5-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6580",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 7.0 Nougat",
            "weight": "168 g",
            "dimensions": "77.7 x 154.8 x 8.35 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 5 Lite 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_hot_5_lite-9428.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot5-lite-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 4",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot4-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6580",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 4 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_hot_4-9472.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot4-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 4 Pro",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot4-pro-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6737W",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 4 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_hot_4_pro-9473.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot4-pro-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot S",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6753",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot S Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_hot_s-9474.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s-n.jpg"
          ]
        },
        {
          "name": "Infinix Hot 2",
          "aliases": [],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "5-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6580",
            "ram": "1GB/2GB",
            "storage": [
              "8GB",
              "16GB"
            ],
            "battery": "2200 mAh",
            "os": "Android 5.1.1 Lollipop",
            "weight": null,
            "dimensions": "71.86 x 145 x 8.8 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 2 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 2 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 2 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Android_One",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 10 Play X688B",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 10 Play X688B Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 11 G37",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 11 G37 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 12 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 12 India Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20 Free Fire",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 20 Free Fire Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20S Free Fire",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 20S Free Fire Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 20S Neon Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 20S Neon Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "5.5-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6580",
            "ram": "1GB/2GB",
            "storage": [
              "8GB"
            ],
            "battery": "3000 mAh",
            "os": "Android 5.1.1 Lollipop",
            "weight": "167 g",
            "dimensions": "76.2 x 152.6 x 8 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot 3 1GB 8GB",
              "ram": "1GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot 3 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30 Free Fire",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30 Free Fire Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30 Play",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30 Play Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 30i NFC",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30i.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 30i NFC Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-30i.jpg"
          ]
        },
        {
          "name": "Infinix Hot 40 Free Fire",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 40 Free Fire Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 40 Pro Free Fire",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 40 Pro Free Fire Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60 5G X6726",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60 5G X6726 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot 60 5G+",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Hot 60 5G+ Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        },
        {
          "name": "Infinix Hot Note",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg",
          "specs": {
            "display": "5.5-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6592M",
            "ram": "1GB/2GB",
            "storage": [
              "16GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 4.4.2 KitKat",
            "weight": "172 g",
            "dimensions": "77.88 x 156 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Hot Note 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Hot Note 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix Hot",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-zero-5g.jpg"
          ]
        }
      ]
    },
    {
      "name": "Infinix S",
      "models": [
        {
          "name": "Infinix S5 Pro",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-pro-new.jpg",
          "specs": {
            "display": "6.53-inch IPS, 1080 x 2340",
            "processor": "MediaTek Helio P35",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "X OS 6.0 (Android 10)",
            "weight": "194 g",
            "dimensions": "76.88 x 162.5 x 8.95 mm"
          },
          "variants": [
            {
              "name": "Infinix S5 Pro 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_s5_pro-10116.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-pro-new.jpg"
          ]
        },
        {
          "name": "Infinix S4",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s4.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6762 Helio P22",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix S4 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_s4-9678.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-hot-s4.jpg"
          ]
        },
        {
          "name": "Infinix S5",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-x652.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio P22",
            "ram": "4GB/6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "4000 mAh",
            "os": "X OS 5.5 (Android 9 Pie)",
            "weight": "178 g",
            "dimensions": "76 x 164 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Infinix S5 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S5 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S5 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S5 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_s5-9915.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-x652.jpg"
          ]
        },
        {
          "name": "Infinix S5 Lite",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-lite-new.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio P22",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "X OS 5.5 (Android 9 Pie)",
            "weight": "178 g",
            "dimensions": "76 x 164 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Infinix S5 Lite 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_s5_lite-10008.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-lite-new.jpg"
          ]
        },
        {
          "name": "Infinix S3X",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s3x-n.jpg",
          "specs": {
            "display": "6.2-inch IPS, 720 x 1500",
            "processor": "Qualcomm Snapdragon 430",
            "ram": "3GB/4GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 8.1 Oreo",
            "weight": "150 g",
            "dimensions": "75.3 x 156.7 x 7.99 mm"
          },
          "variants": [
            {
              "name": "Infinix S3X 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S3X 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S3X 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S3X 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_s3x-9420.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s3x-n.jpg"
          ]
        },
        {
          "name": "Infinix S2 Pro",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s2-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6753",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix S2 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmarena.com/infinix_s2_pro-9422.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s2-n.jpg"
          ]
        },
        {
          "name": "Infinix S2",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-pro-new.jpg",
          "specs": {
            "display": "5.2-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6753",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "3000 mAh",
            "os": "Android 7.0 Nougat",
            "weight": "147 g",
            "dimensions": "72.2 x 148.9 x 8.07 mm"
          },
          "variants": [
            {
              "name": "Infinix S2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S2 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix S2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "fallback:image-from-family:Infinix S",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-s5-pro-new.jpg"
          ]
        }
      ]
    },
    {
      "name": "Infinix Smart",
      "models": [
        {
          "name": "Infinix Smart 20",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "6.78-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G81 Ultimate",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5200 mAh",
            "os": "X OS 16 (Android 16)",
            "weight": null,
            "dimensions": "78.8 x 167.7 x 7.7 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 20 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 20 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://wap.infinixmobility.com/specs/smart-20",
            "https://www.devicespecifications.com/en/model/6509667e",
            "https://en.kalvo.com/infinix-smart-20-217922.html",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_20-14502.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 10",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-10.jpg",
          "specs": {
            "display": "6.67-inch IPS, 720 x 1600",
            "processor": "Unisoc T7250",
            "ram": "3GB/4GB",
            "storage": [
              "64GB",
              "128GB",
              "256GB"
            ],
            "battery": "5000 mAh",
            "os": "X OS 15.1 (Android 15)",
            "weight": "187 g",
            "dimensions": "77.01 x 165.62 x 8.25 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 10 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 10 3GB 128GB",
              "ram": "3GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 10 3GB 256GB",
              "ram": "3GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 10 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 10 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 10 4GB 256GB",
              "ram": "4GB",
              "storage": "256GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_10-13933.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-10.jpg"
          ]
        },
        {
          "name": "Infinix Smart 10 HD",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart10-hd.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1612",
            "processor": "Unisoc Tiger T606",
            "ram": "2GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 15 Go edition",
            "weight": "184 g",
            "dimensions": "75.6 x 163.6 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 10 HD 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_10_hd-13954.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart10-hd.jpg"
          ]
        },
        {
          "name": "Infinix Smart 10 Plus",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-10-plus-.jpg",
          "specs": {
            "display": "6.67-inch IPS, 720 x 1600",
            "processor": "Unisoc T7250",
            "ram": "4GB",
            "storage": [
              "128GB"
            ],
            "battery": "6000 mAh",
            "os": "X OS 15.1 (Android 15)",
            "weight": "198 g",
            "dimensions": "77.01 x 165.62 x 7.99 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 10 Plus 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_10_plus-13953.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-10-plus-.jpg"
          ]
        },
        {
          "name": "Infinix Smart 8 Plus",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-plus.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G36",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "6000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 8 Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_8_plus-12817.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-plus.jpg"
          ]
        },
        {
          "name": "Infinix Smart 8 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-pro.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Helio G36",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 8 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_8_pro-12812.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-pro.jpg"
          ]
        },
        {
          "name": "Infinix Smart 9",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart9.jpg",
          "specs": {
            "display": "6.7-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio G81",
            "ram": "3GB/4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14 (Android 14 Go edition)",
            "weight": "188 g",
            "dimensions": "77.1 x 165.7 x 8.35 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 9 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 9 3GB 128GB",
              "ram": "3GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 9 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 9 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_9-13374.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart9.jpg"
          ]
        },
        {
          "name": "Infinix Smart 9 HD",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-9-hd.jpg",
          "specs": {
            "display": "6.7-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio G50",
            "ram": "3GB/4GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "XOS 14 (Android 14 Go edition)",
            "weight": "188 g",
            "dimensions": "77.1 x 165.7 x 8.35 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 9 HD 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 9 HD 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_9_hd-13590.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-9-hd.jpg"
          ]
        },
        {
          "name": "Infinix Smart 7",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-7.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761 Helio A22",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 7 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_7-12116.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-7.jpg"
          ]
        },
        {
          "name": "Infinix Smart 7 HD",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart7-hd.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 7 HD Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_7_hd-12243.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart7-hd.jpg"
          ]
        },
        {
          "name": "Infinix Smart 8",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart8.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Unisoc T606",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 8 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 8 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://webstar-electro.com/telephones-mobiles/?id_famille=3758&id_marque=66537&page=prix-telephones-portables-infinix-algerie&position=3",
            "https://www.gsmarena.com/infinix_smart_8-12642.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart8.jpg"
          ]
        },
        {
          "name": "Infinix Smart 8 HD",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-hd.jpg",
          "specs": {
            "display": "6.6-inch IPS LCD",
            "processor": "Unisoc T606",
            "ram": "3GB",
            "storage": [
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 8 HD 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_8_hd-12736.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-8-hd.jpg"
          ]
        },
        {
          "name": "Infinix Smart 6 HD",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6-hd.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "Unisoc SC9863A",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 Go edition",
            "weight": null,
            "dimensions": "76.4 x 165.64 x 9.05 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 6 HD 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_6_hd-11499.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6-hd.jpg"
          ]
        },
        {
          "name": "Infinix Smart 6 Plus",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6-plus.jpg",
          "specs": {
            "display": "6.6/6.82-inch IPS, HD+",
            "processor": "MediaTek Helio A22/G25",
            "ram": "2GB/3GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 Go edition",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 6 Plus 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 6 Plus 2GB 64GB",
              "ram": "2GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 6 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 6 Plus 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_6_plus_(india)-11742.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6-plus.jpg"
          ]
        },
        {
          "name": "Infinix Smart 5 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-5pro.jpg",
          "specs": {
            "display": "6.52-inch IPS, 720 x 1560",
            "processor": "Unisoc SC9863A",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 11 Go edition",
            "weight": "183 g",
            "dimensions": "75.6 x 164.38 x 9.5 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 5 Pro 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_5_pro-11221.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-5pro.jpg"
          ]
        },
        {
          "name": "Infinix Smart 6",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "Unisoc SC9863A",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 11 Go edition",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 6 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_6-11189.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-6.jpg"
          ]
        },
        {
          "name": "Infinix Smart 5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart5-.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761D Helio A20",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 5 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_5-10367.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart5-.jpg"
          ]
        },
        {
          "name": "Infinix Smart HD 2021",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-hd-2021.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761D Helio A20",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "5000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart HD 2021 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_hd_2021-10646.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-hd-2021.jpg"
          ]
        },
        {
          "name": "Infinix Smart 3 Plus",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart3-plus.jpg",
          "specs": {
            "display": "6.21-inch IPS, HD+",
            "processor": "MediaTek Helio A22",
            "ram": "2GB/3GB",
            "storage": [
              "32GB"
            ],
            "battery": "3500 mAh",
            "os": "Android 9 Pie",
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 3 Plus 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 3 Plus 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart3_plus-9680.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart3-plus.jpg"
          ]
        },
        {
          "name": "Infinix Smart 4",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart4-x653.jpg",
          "specs": {
            "display": "6.6-inch IPS, 720 x 1600",
            "processor": "MediaTek Helio A22",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "4000 mAh",
            "os": "Android 9 Pie",
            "weight": "183 g",
            "dimensions": "76 x 167 x 8.3 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 4 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_4-9980.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart4-x653.jpg"
          ]
        },
        {
          "name": "Infinix Smart 4C",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart4-x653c.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6761 Helio A22",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "4000 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 4C Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.gsmarena.com/infinix_smart_4c-9975.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart4-x653c.jpg"
          ]
        },
        {
          "name": "Infinix Smart 2",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-n.jpg",
          "specs": {
            "display": "5.45-inch IPS, 720 x 1440",
            "processor": "MediaTek MT6739",
            "ram": "2GB/3GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "3050 mAh",
            "os": "Android 8.1 Oreo",
            "weight": "138 g",
            "dimensions": "71 x 148 x 8.4 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 2 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 2 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 2 3GB 16GB",
              "ram": "3GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            },
            {
              "name": "Infinix Smart 2 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_2-9430.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-n.jpg"
          ]
        },
        {
          "name": "Infinix Smart 2 HD",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-hd-n.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "MT6580",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": "3500 mAh",
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 2 HD Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.gsmarena.com/infinix_smart_2_hd-9477.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-hd-n.jpg"
          ]
        },
        {
          "name": "Infinix Smart 2 Pro",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-pro-n.jpg",
          "specs": {
            "display": "5.5-inch IPS, 720 x 1440",
            "processor": "MediaTek MT6739",
            "ram": "2GB",
            "storage": [
              "16GB"
            ],
            "battery": "3050 mAh",
            "os": "Android 8.1 Oreo",
            "weight": "138 g",
            "dimensions": "71 x 147.5 x 8.3 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 2 Pro 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart_2_pro-9429.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart2-pro-n.jpg"
          ]
        },
        {
          "name": "Infinix Smart",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-n.jpg",
          "specs": {
            "display": "5-inch IPS, 720 x 1280",
            "processor": "MediaTek MT6580",
            "ram": "1GB",
            "storage": [
              "16GB"
            ],
            "battery": "3060 mAh",
            "os": "Android 7.0 Nougat",
            "weight": "145 g",
            "dimensions": "71.9 x 144.9 x 8.35 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com/infinix_smart-9431.php",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart-n.jpg"
          ]
        },
        {
          "name": "Infinix Smart 10 Pro",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 10 Pro Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Infinix_Mobile",
            "https://www.91mobiles.com/list-of-phones/infinix-mobile-price-list-in-india",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 2 Go Edition",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 2 Go Edition Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 3",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 3 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 4 Plus",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 4 Plus Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 5 India",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Infinix-Smart-5-India.jpg",
          "specs": {
            "display": "6.82-inch IPS, 720 x 1640",
            "processor": "MediaTek Helio G25",
            "ram": "2GB",
            "storage": [
              "32GB"
            ],
            "battery": "6000 mAh",
            "os": "Android 10 Go",
            "weight": null,
            "dimensions": "77.96 x 171.82 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Infinix Smart 5 India 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "simplified_storage_color_network"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "https://www.devicespecifications.com/fr/brand/0a9b116",
            "https://www.infinixmobility.com/",
            "https://www.gsmarena.com.bd/images/products/Infinix-Smart-5-India.jpg"
          ]
        },
        {
          "name": "Infinix Smart 5A",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 5A Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        },
        {
          "name": "Infinix Smart 7 X6517",
          "aliases": [],
          "releaseYear": null,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg",
          "specs": {
            "display": "Not specified",
            "processor": "Not specified",
            "ram": null,
            "storage": [
              "Not specified"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null
          },
          "variants": [
            {
              "name": "Infinix Smart 7 X6517 Not specified",
              "storage": "Not specified",
              "sourceBasis": "derived_from_model_specs"
            }
          ],
          "sources": [
            "https://www.gsmchoice.com/en/catalogue/infinix/",
            "fallback:image-from-family:Infinix Smart",
            "https://fdn2.gsmarena.com/vv/bigpic/infinix-smart20.jpg"
          ]
        }
      ]
    }
  ]
};
