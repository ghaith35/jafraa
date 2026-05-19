/**
 * Enriched Google phone catalog with specs, variants, images, and release years.
 * Generated from src/data/catalog/phones/brands/google.json.
 */

export type GoogleEnrichedModelVariant = {
  name: string;
  ram?: string;
  storage?: string;
  color?: string;
  connectivity?: string;
  sourceBasis?: string;
};

export type GoogleEnrichedModelSpecs = {
  display?: string | null;
  processor?: string | null;
  ram?: string | null;
  storage?: string[] | null;
  battery?: string | null;
  os?: string | null;
  weight?: string | null;
  dimensions?: string | null;
};

export type GoogleEnrichedModel = {
  name: string;
  aliases: string[];
  releaseYear: number | null;
  imageUrl: string | null;
  specs: GoogleEnrichedModelSpecs;
  variants: GoogleEnrichedModelVariant[];
  sources?: string[];
};

export type GoogleEnrichedFamily = {
  name: string;
  models: GoogleEnrichedModel[];
};

export const GOOGLE_ENRICHED_CATALOG: {
  brandName: string;
  logoUrl: string | null;
  sortOrder: number;
  families: GoogleEnrichedFamily[];
} = {
  "brandName": "Google",
  "logoUrl": "https://logo.clearbit.com/google.com",
  "sortOrder": 15,
  "families": [
    {
      "name": "Pixel",
      "models": [
        {
          "name": "Google Pixel 10a",
          "aliases": [],
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-10a.jpg",
          "specs": {
            "display": "6.3-inch Actua pOLED, 1080 x 2424, 60-120Hz",
            "processor": "Google Tensor G4",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 16",
            "weight": "183 g",
            "dimensions": "153.9 x 73.0 x 9.0 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 10a 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10a 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en"
          ]
        },
        {
          "name": "Google Pixel 10",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Indigo.jpg",
          "specs": {
            "display": "6.3-inch Actua OLED, 1080 x 2424, 60-120Hz",
            "processor": "Google Tensor G5",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4970 mAh",
            "os": "Android 16",
            "weight": "204 g",
            "dimensions": "152.8 x 72.0 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 10 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "image-cleared:invalid-url-no-verified-replacement",
            "https://www.gsmarena.com.bd/pictures/google-pixel-10/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Indigo.jpg"
          ]
        },
        {
          "name": "Google Pixel 10 Pro",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-Obsidian.jpg",
          "specs": {
            "display": "6.3-inch Super Actua LTPO OLED, 1280 x 2856, 1-120Hz",
            "processor": "Google Tensor G5",
            "ram": "16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "4870 mAh",
            "os": "Android 16",
            "weight": "207 g",
            "dimensions": "152.8 x 72.0 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 10 Pro 16GB 128GB",
              "ram": "16GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-10-pro/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-Obsidian.jpg"
          ]
        },
        {
          "name": "Google Pixel 10 Pro Fold",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-Fold-Moonstone.jpg",
          "specs": {
            "display": "6.4-inch cover OLED + 8.0-inch folding LTPO OLED",
            "processor": "Google Tensor G5",
            "ram": "16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5015 mAh",
            "os": "Android 16",
            "weight": "258 g",
            "dimensions": "155.2 x 76.3 x 10.8 mm folded; 155.2 x 150.4 x 5.2 mm unfolded"
          },
          "variants": [
            {
              "name": "Google Pixel 10 Pro Fold 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro Fold 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro Fold 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-10-pro-fold/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-Fold-Moonstone.jpg"
          ]
        },
        {
          "name": "Google Pixel 10 Pro XL",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-XL-Jade.jpg",
          "specs": {
            "display": "6.8-inch Super Actua LTPO OLED, 1344 x 2992, 1-120Hz",
            "processor": "Google Tensor G5",
            "ram": "16GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5200 mAh",
            "os": "Android 16",
            "weight": "232 g",
            "dimensions": "162.8 x 76.6 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 10 Pro XL 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro XL 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 10 Pro XL 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-10-pro-xl/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-10-Pro-XL-Jade.jpg"
          ]
        },
        {
          "name": "Google Pixel 9a",
          "aliases": [],
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-9a.jpg",
          "specs": {
            "display": "6.3-inch pOLED, 1080 x 2424, 60-120Hz",
            "processor": "Google Tensor G4",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "5100 mAh",
            "os": "Android 15",
            "weight": "186 g",
            "dimensions": "154.7 x 73.3 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 9a 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9a 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 8a",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8a.jpg",
          "specs": {
            "display": "6.1-inch OLED, 1080 x 2400, 120Hz",
            "processor": "Google Tensor G3",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4492 mAh",
            "os": "Android 14",
            "weight": "188 g",
            "dimensions": "152.1 x 72.7 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 8a 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 8a 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 9",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Peony.jpg",
          "specs": {
            "display": "6.3-inch OLED, 1080 x 2424, 60-120Hz",
            "processor": "Google Tensor G4",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4700 mAh",
            "os": "Android 14",
            "weight": "198 g",
            "dimensions": "152.8 x 72.0 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 9 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-9/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Peony.jpg"
          ]
        },
        {
          "name": "Google Pixel 9 Pro",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-Obsidian.jpg",
          "specs": {
            "display": "6.3-inch LTPO OLED, 1280 x 2856, 1-120Hz",
            "processor": "Google Tensor G4",
            "ram": "16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "4700 mAh",
            "os": "Android 14",
            "weight": "199 g",
            "dimensions": "152.8 x 72.0 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 9 Pro 16GB 128GB",
              "ram": "16GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-9-pro/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-Obsidian.jpg"
          ]
        },
        {
          "name": "Google Pixel 9 Pro Fold",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-Fold-Porcelain.jpg",
          "specs": {
            "display": "6.3-inch cover OLED + 8.0-inch folding LTPO OLED",
            "processor": "Google Tensor G4",
            "ram": "16GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4650 mAh",
            "os": "Android 14",
            "weight": "257 g",
            "dimensions": "155.2 x 77.1 x 10.5 mm folded; 155.2 x 150.2 x 5.1 mm unfolded"
          },
          "variants": [
            {
              "name": "Google Pixel 9 Pro Fold 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro Fold 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-9-pro-fold/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-Fold-Porcelain.jpg"
          ]
        },
        {
          "name": "Google Pixel 9 Pro XL",
          "aliases": [],
          "releaseYear": 2024,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-XL-Hazel.jpg",
          "specs": {
            "display": "6.8-inch LTPO OLED, 1344 x 2992, 1-120Hz",
            "processor": "Google Tensor G4",
            "ram": "16GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5060 mAh",
            "os": "Android 14",
            "weight": "221 g",
            "dimensions": "162.8 x 76.6 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 9 Pro XL 16GB 128GB",
              "ram": "16GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro XL 16GB 256GB",
              "ram": "16GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro XL 16GB 512GB",
              "ram": "16GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 9 Pro XL 16GB 1TB",
              "ram": "16GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-9-pro-xl/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-9-Pro-XL-Hazel.jpg"
          ]
        },
        {
          "name": "Google Pixel 7a",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-7a.jpg",
          "specs": {
            "display": "6.1-inch OLED, 1080 x 2400, 90Hz",
            "processor": "Google Tensor G2",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4385 mAh",
            "os": "Android 13",
            "weight": "193.5 g",
            "dimensions": "152.0 x 72.9 x 9.0 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 7a 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 8",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8.jpg",
          "specs": {
            "display": "6.2-inch OLED, 1080 x 2400, 60-120Hz",
            "processor": "Google Tensor G3",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4575 mAh",
            "os": "Android 14",
            "weight": "187 g",
            "dimensions": "150.5 x 70.8 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 8 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 8 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 8 Pro",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-8-pro.jpg",
          "specs": {
            "display": "6.7-inch LTPO OLED, 1344 x 2992, 1-120Hz",
            "processor": "Google Tensor G3",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB",
              "1TB"
            ],
            "battery": "5050 mAh",
            "os": "Android 14",
            "weight": "213 g",
            "dimensions": "162.6 x 76.5 x 8.8 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 8 Pro 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 8 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 8 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 8 Pro 12GB 1TB",
              "ram": "12GB",
              "storage": "1TB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel Fold",
          "aliases": [],
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-fold.jpg",
          "specs": {
            "display": "5.8-inch cover OLED + 7.6-inch folding OLED",
            "processor": "Google Tensor G2",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": "4821 mAh",
            "os": "Android 13",
            "weight": "283 g",
            "dimensions": "139.7 x 79.5 x 12.1 mm folded; 139.7 x 158.7 x 5.8 mm unfolded"
          },
          "variants": [
            {
              "name": "Google Pixel Fold 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel Fold 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 6a",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6a.jpg",
          "specs": {
            "display": "6.1-inch OLED, 1080 x 2400",
            "processor": "Google Tensor",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4410 mAh",
            "os": "Android 12",
            "weight": "178 g",
            "dimensions": "152.2 x 71.8 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 6a 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 7",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-7.jpg",
          "specs": {
            "display": "6.3-inch AMOLED, 1080 x 2400, 90Hz",
            "processor": "Google Tensor G2",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4355 mAh",
            "os": "Android 13",
            "weight": "197 g",
            "dimensions": "155.6 x 73.2 x 8.7 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 7 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 7 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-7/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-7.jpg"
          ]
        },
        {
          "name": "Google Pixel 7 Pro",
          "aliases": [],
          "releaseYear": 2022,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/Google-Pixel-7-Pro.jpg",
          "specs": {
            "display": "6.7-inch LTPO AMOLED, 1440 x 3120, 120Hz",
            "processor": "Google Tensor G2",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5000 mAh",
            "os": "Android 13",
            "weight": "212 g",
            "dimensions": "162.9 x 76.6 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 7 Pro 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 7 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 7 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-7-pro/",
            "https://www.gsmarena.com.bd/images/products/Google-Pixel-7-Pro.jpg"
          ]
        },
        {
          "name": "Google Pixel 5a with 5G",
          "aliases": [
            "Google Pixel 5a 5G"
          ],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a-5g.jpg",
          "specs": {
            "display": "6.34-inch OLED, 1080 x 2400",
            "processor": "Qualcomm Snapdragon 765G",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "4680 mAh",
            "os": "Android 11",
            "weight": "183 g",
            "dimensions": "154.9 x 73.7 x 7.6 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 5a with 5G 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 6",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6.jpg",
          "specs": {
            "display": "6.4-inch AMOLED, 1080 x 2400, 90Hz",
            "processor": "Google Tensor",
            "ram": "8GB",
            "storage": [
              "128GB",
              "256GB"
            ],
            "battery": "4614 mAh",
            "os": "Android 12",
            "weight": "207 g",
            "dimensions": "158.6 x 74.8 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 6 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 6 8GB 256GB",
              "ram": "8GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 6 Pro",
          "aliases": [],
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-6-pro.jpg",
          "specs": {
            "display": "6.7-inch LTPO AMOLED, 1440 x 3120, 120Hz",
            "processor": "Google Tensor",
            "ram": "12GB",
            "storage": [
              "128GB",
              "256GB",
              "512GB"
            ],
            "battery": "5003 mAh",
            "os": "Android 12",
            "weight": "210 g",
            "dimensions": "163.9 x 75.9 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 6 Pro 12GB 128GB",
              "ram": "12GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 6 Pro 12GB 256GB",
              "ram": "12GB",
              "storage": "256GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 6 Pro 12GB 512GB",
              "ram": "12GB",
              "storage": "512GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 4a",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg",
          "specs": {
            "display": "5.81-inch OLED, 1080 x 2340",
            "processor": "Qualcomm Snapdragon 730G",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "3140 mAh",
            "os": "Android 10",
            "weight": "143 g",
            "dimensions": "144.0 x 69.4 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 4a 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 4a (5G)",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a-5g.jpg",
          "specs": {
            "display": "6.2-inch OLED, 1080 x 2340",
            "processor": "Qualcomm Snapdragon 765G",
            "ram": "6GB",
            "storage": [
              "128GB"
            ],
            "battery": "3885 mAh",
            "os": "Android 11",
            "weight": "168 g",
            "dimensions": "153.9 x 74.0 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 4a (5G) 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 5",
          "aliases": [],
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5-5g.jpg",
          "specs": {
            "display": "6.0-inch OLED, 1080 x 2340, 90Hz",
            "processor": "Qualcomm Snapdragon 765G",
            "ram": "8GB",
            "storage": [
              "128GB"
            ],
            "battery": "4080 mAh",
            "os": "Android 11",
            "weight": "151 g",
            "dimensions": "144.7 x 70.4 x 8.0 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 5 8GB 128GB",
              "ram": "8GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 3a",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a.jpg",
          "specs": {
            "display": "5.6-inch OLED, 1080 x 2220",
            "processor": "Qualcomm Snapdragon 670",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "3000 mAh",
            "os": "Android 9",
            "weight": "147 g",
            "dimensions": "151.3 x 70.1 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 3a 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 3a XL",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-3a-xl.jpg",
          "specs": {
            "display": "6.0-inch OLED, 1080 x 2160",
            "processor": "Qualcomm Snapdragon 670",
            "ram": "4GB",
            "storage": [
              "64GB"
            ],
            "battery": "3700 mAh",
            "os": "Android 9",
            "weight": "167 g",
            "dimensions": "160.1 x 76.1 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 3a XL 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 4",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/google-pixel-4.jpg",
          "specs": {
            "display": "5.7-inch P-OLED, 1080 x 2280, 90Hz",
            "processor": "Qualcomm Snapdragon 855",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "2800 mAh",
            "os": "Android 10",
            "weight": "162 g",
            "dimensions": "147.1 x 68.8 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 4 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 4 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-4/",
            "https://www.gsmarena.com.bd/images/products/google-pixel-4.jpg"
          ]
        },
        {
          "name": "Google Pixel 4 XL",
          "aliases": [],
          "releaseYear": 2019,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/google-pixel-4-xl.jpg",
          "specs": {
            "display": "6.3-inch P-OLED, 1440 x 3040, 90Hz",
            "processor": "Qualcomm Snapdragon 855",
            "ram": "6GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "3700 mAh",
            "os": "Android 10",
            "weight": "193 g",
            "dimensions": "160.4 x 75.1 x 8.2 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 4 XL 6GB 64GB",
              "ram": "6GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 4 XL 6GB 128GB",
              "ram": "6GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-4-xl/",
            "https://www.gsmarena.com.bd/images/products/google-pixel-4-xl.jpg"
          ]
        },
        {
          "name": "Google Pixel 3",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/google-pixel-3.jpg",
          "specs": {
            "display": "5.5-inch P-OLED, 1080 x 2160",
            "processor": "Qualcomm Snapdragon 845",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "2915 mAh",
            "os": "Android 9",
            "weight": "148 g",
            "dimensions": "145.6 x 68.2 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 3 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 3 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-3/",
            "https://www.gsmarena.com.bd/images/products/google-pixel-3.jpg"
          ]
        },
        {
          "name": "Google Pixel 3 XL",
          "aliases": [],
          "releaseYear": 2018,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/google-pixel-3-xl.jpg",
          "specs": {
            "display": "6.3-inch P-OLED, 1440 x 2960",
            "processor": "Qualcomm Snapdragon 845",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "3430 mAh",
            "os": "Android 9",
            "weight": "184 g",
            "dimensions": "158.0 x 76.7 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 3 XL 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 3 XL 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-3-xl/",
            "https://www.gsmarena.com.bd/images/products/google-pixel-3-xl.jpg"
          ]
        },
        {
          "name": "Google Pixel 2",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-2.jpg",
          "specs": {
            "display": "5.0-inch AMOLED, 1080 x 1920",
            "processor": "Qualcomm Snapdragon 835",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "2700 mAh",
            "os": "Android 8",
            "weight": "143 g",
            "dimensions": "145.7 x 69.7 x 7.8 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 2 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 2 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel 2 XL",
          "aliases": [],
          "releaseYear": 2017,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/google-pixel-2-xl.jpg",
          "specs": {
            "display": "6.0-inch P-OLED, 1440 x 2880",
            "processor": "Qualcomm Snapdragon 835",
            "ram": "4GB",
            "storage": [
              "64GB",
              "128GB"
            ],
            "battery": "3520 mAh",
            "os": "Android 8",
            "weight": "175 g",
            "dimensions": "157.9 x 76.7 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 2 XL 4GB 64GB",
              "ram": "4GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 2 XL 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en",
            "https://www.gsmarena.com.bd/pictures/google-pixel-2-xl/",
            "https://www.gsmarena.com.bd/images/products/google-pixel-2-xl.jpg"
          ]
        },
        {
          "name": "Google Pixel",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel.jpg",
          "specs": {
            "display": "5.0-inch AMOLED, 1080 x 1920",
            "processor": "Qualcomm Snapdragon 821",
            "ram": "4GB",
            "storage": [
              "32GB",
              "128GB"
            ],
            "battery": "2770 mAh",
            "os": "Android 7.1",
            "weight": "143 g",
            "dimensions": "143.8 x 69.5 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        },
        {
          "name": "Google Pixel XL",
          "aliases": [],
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-xl.jpg",
          "specs": {
            "display": "5.5-inch AMOLED, 1440 x 2560",
            "processor": "Qualcomm Snapdragon 821",
            "ram": "4GB",
            "storage": [
              "32GB",
              "128GB"
            ],
            "battery": "3450 mAh",
            "os": "Android 7.1",
            "weight": "168 g",
            "dimensions": "154.7 x 75.7 x 8.5 mm"
          },
          "variants": [
            {
              "name": "Google Pixel XL 4GB 32GB",
              "ram": "4GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Pixel XL 4GB 128GB",
              "ram": "4GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://support.google.com/pixelphone/answer/7158570?hl=en",
            "https://support.google.com/pixelphone/answer/4457705?hl=en"
          ]
        }
      ]
    },
    {
      "name": "Nexus",
      "models": [
        {
          "name": "Google Nexus 5X",
          "aliases": [
            "LG Nexus 5X"
          ],
          "releaseYear": 2015,
          "imageUrl": "https://www.gsmarena.com.bd/images/products/lg-nexus-5x.jpg",
          "specs": {
            "display": "5.2-inch IPS LCD, 1080 x 1920",
            "processor": "Qualcomm Snapdragon 808",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "2700 mAh",
            "os": "Android 6.0",
            "weight": "136 g",
            "dimensions": "147.0 x 72.6 x 7.9 mm"
          },
          "variants": [
            {
              "name": "Google Nexus 5X 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 5X 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus",
            "https://www.gsmarena.com.bd/pictures/lg-nexus-5x/",
            "https://www.gsmarena.com.bd/images/products/lg-nexus-5x.jpg"
          ]
        },
        {
          "name": "Google Nexus 6P",
          "aliases": [
            "Huawei Nexus 6P"
          ],
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/huawei-nexus-6p.jpg",
          "specs": {
            "display": "5.7-inch AMOLED, 1440 x 2560",
            "processor": "Qualcomm Snapdragon 810",
            "ram": "3GB",
            "storage": [
              "32GB",
              "64GB",
              "128GB"
            ],
            "battery": "3450 mAh",
            "os": "Android 6.0",
            "weight": "178 g",
            "dimensions": "159.3 x 77.8 x 7.3 mm"
          },
          "variants": [
            {
              "name": "Google Nexus 6P 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 6P 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 6P 3GB 128GB",
              "ram": "3GB",
              "storage": "128GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus",
            "image-cleared:invalid-url-no-verified-replacement",
            "https://www.gsmarena.com/",
            "https://fdn2.gsmarena.com/vv/bigpic/huawei-nexus-6p.jpg"
          ]
        },
        {
          "name": "Google Nexus 6",
          "aliases": [
            "Motorola Nexus 6"
          ],
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/moto-nexus-6.jpg",
          "specs": {
            "display": "5.96-inch AMOLED, 1440 x 2560",
            "processor": "Qualcomm Snapdragon 805",
            "ram": "3GB",
            "storage": [
              "32GB",
              "64GB"
            ],
            "battery": "3220 mAh",
            "os": "Android 5.0",
            "weight": "184 g",
            "dimensions": "159.3 x 83.0 x 10.1 mm"
          },
          "variants": [
            {
              "name": "Google Nexus 6 3GB 32GB",
              "ram": "3GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 6 3GB 64GB",
              "ram": "3GB",
              "storage": "64GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus",
            "image-cleared:invalid-url-no-verified-replacement",
            "https://www.gsmarena.com/",
            "https://fdn2.gsmarena.com/vv/bigpic/moto-nexus-6.jpg"
          ]
        },
        {
          "name": "Google Nexus 5",
          "aliases": [
            "LG Nexus 5"
          ],
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-google-nexus-5.jpg",
          "specs": {
            "display": "4.95-inch IPS LCD, 1080 x 1920",
            "processor": "Qualcomm Snapdragon 800",
            "ram": "2GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "2300 mAh",
            "os": "Android 4.4",
            "weight": "130 g",
            "dimensions": "137.9 x 69.2 x 8.6 mm"
          },
          "variants": [
            {
              "name": "Google Nexus 5 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 5 2GB 32GB",
              "ram": "2GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus"
          ]
        },
        {
          "name": "Google Nexus 4",
          "aliases": [
            "LG Nexus 4"
          ],
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-4.jpg",
          "specs": {
            "display": "4.7-inch True HD IPS Plus, 768 x 1280",
            "processor": "Qualcomm Snapdragon S4 Pro",
            "ram": "2GB",
            "storage": [
              "8GB",
              "16GB"
            ],
            "battery": "2100 mAh",
            "os": "Android 4.2",
            "weight": "139 g",
            "dimensions": "133.9 x 68.7 x 9.1 mm"
          },
          "variants": [
            {
              "name": "Google Nexus 4 2GB 8GB",
              "ram": "2GB",
              "storage": "8GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Nexus 4 2GB 16GB",
              "ram": "2GB",
              "storage": "16GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus",
            "image-cleared:invalid-url-no-verified-replacement",
            "https://www.gsmarena.com/",
            "https://fdn2.gsmarena.com/vv/bigpic/lg-nexus-4.jpg"
          ]
        },
        {
          "name": "Google Galaxy Nexus",
          "aliases": [
            "Samsung Galaxy Nexus"
          ],
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-nexus.jpg",
          "specs": {
            "display": "4.65-inch Super AMOLED, 720 x 1280",
            "processor": "TI OMAP 4460",
            "ram": "1GB",
            "storage": [
              "16GB",
              "32GB"
            ],
            "battery": "1750 mAh",
            "os": "Android 4.0",
            "weight": "135 g",
            "dimensions": "135.5 x 67.9 x 8.9 mm"
          },
          "variants": [
            {
              "name": "Google Galaxy Nexus 1GB 16GB",
              "ram": "1GB",
              "storage": "16GB",
              "sourceBasis": "source_verified_storage_ram"
            },
            {
              "name": "Google Galaxy Nexus 1GB 32GB",
              "ram": "1GB",
              "storage": "32GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus",
            "image-cleared:invalid-url-no-verified-replacement",
            "https://www.gsmarena.com/",
            "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-nexus.jpg"
          ]
        },
        {
          "name": "Google Nexus One",
          "aliases": [
            "HTC Nexus One"
          ],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/google-nexus-one.jpg",
          "specs": {
            "display": "3.7-inch AMOLED/S-LCD, 480 x 800",
            "processor": "Qualcomm Snapdragon S1",
            "ram": "512MB",
            "storage": [
              "512MB"
            ],
            "battery": "1400 mAh",
            "os": "Android 2.1",
            "weight": "130 g",
            "dimensions": "119.0 x 59.8 x 11.5 mm"
          },
          "variants": [
            {
              "name": "Google Nexus One 512MB 512MB",
              "ram": "512MB",
              "storage": "512MB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus"
          ]
        },
        {
          "name": "Google Nexus S",
          "aliases": [
            "Samsung Nexus S"
          ],
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/samsung-google-nexus-s.jpg",
          "specs": {
            "display": "4.0-inch Super AMOLED/S-LCD, 480 x 800",
            "processor": "Samsung Hummingbird",
            "ram": "512MB",
            "storage": [
              "16GB"
            ],
            "battery": "1500 mAh",
            "os": "Android 2.3",
            "weight": "129 g",
            "dimensions": "123.9 x 63.0 x 10.9 mm"
          },
          "variants": [
            {
              "name": "Google Nexus S 512MB 16GB",
              "ram": "512MB",
              "storage": "16GB",
              "sourceBasis": "source_verified_storage_ram"
            }
          ],
          "sources": [
            "https://en.wikipedia.org/wiki/Google_Nexus"
          ]
        }
      ]
    }
  ]
};
