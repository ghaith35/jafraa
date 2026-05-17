/**
 * Enriched Apple phone catalog with specs, variants, images, and release years.
 * Generated from normalized Apple catalog data.
 */

export type AppleEnrichedModelVariant = {
  name: string;
  processor?: string;
  ram?: string;
  storage?: string;
  color?: string;
};

export type AppleEnrichedModel = {
  name: string;
  releaseYear: number | null;
  imageUrl: string | null;
  specs: Record<string, unknown>;
  variants: AppleEnrichedModelVariant[];
};

export type AppleEnrichedFamily = {
  name: string;
  models: AppleEnrichedModel[];
};

export type AppleEnrichedCatalog = {
  brandName: string;
  logoUrl: string | null;
  families: AppleEnrichedFamily[];
};

export const APPLE_ENRICHED_CATALOG: AppleEnrichedCatalog = {
  "brandName": "Apple",
  "logoUrl": "https://logo.clearbit.com/apple.com",
  "families": [
    {
      "name": "iPhone 17/Air",
      "models": [
        {
          "name": "iPhone 17e",
          "releaseYear": 2026,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17e.jpg",
          "specs": {
            "display": "6.1-inch Super Retina XDR OLED",
            "processor": "Apple A19",
            "ram": "8GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": "169 g",
            "dimensions": "146.7 x 71.5 x 7.8 mm",
            "colors": [
              "Black",
              "White",
              "Soft Pink"
            ]
          },
          "variants": [
            {
              "name": "iPhone 17e 256GB Black",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Black"
            },
            {
              "name": "iPhone 17e 256GB White",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "White"
            },
            {
              "name": "iPhone 17e 256GB Soft Pink",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Soft Pink"
            },
            {
              "name": "iPhone 17e 512GB Black",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Black"
            },
            {
              "name": "iPhone 17e 512GB White",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "White"
            },
            {
              "name": "iPhone 17e 512GB Soft Pink",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Soft Pink"
            }
          ]
        },
        {
          "name": "iPhone 17 Pro Max",
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro-max.jpg",
          "specs": {
            "display": "6.9-inch Super Retina XDR OLED",
            "processor": "Apple A19 Pro",
            "ram": "12GB",
            "storage": [
              "256GB",
              "512GB",
              "1TB",
              "2TB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Silver",
              "Cosmic Orange",
              "Deep Blue"
            ]
          },
          "variants": [
            {
              "name": "iPhone 17 Pro Max 256GB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro Max 256GB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro Max 256GB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Deep Blue"
            },
            {
              "name": "iPhone 17 Pro Max 512GB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro Max 512GB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro Max 512GB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Deep Blue"
            },
            {
              "name": "iPhone 17 Pro Max 1TB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro Max 1TB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro Max 1TB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Deep Blue"
            },
            {
              "name": "iPhone 17 Pro Max 2TB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "2TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro Max 2TB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "2TB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro Max 2TB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "2TB",
              "color": "Deep Blue"
            }
          ]
        },
        {
          "name": "iPhone 17 Pro",
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17-pro.jpg",
          "specs": {
            "display": "6.3-inch Super Retina XDR OLED",
            "processor": "Apple A19 Pro",
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
            "colors": [
              "Silver",
              "Cosmic Orange",
              "Deep Blue"
            ]
          },
          "variants": [
            {
              "name": "iPhone 17 Pro 256GB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro 256GB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro 256GB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Deep Blue"
            },
            {
              "name": "iPhone 17 Pro 512GB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro 512GB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro 512GB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Deep Blue"
            },
            {
              "name": "iPhone 17 Pro 1TB Silver",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 17 Pro 1TB Cosmic Orange",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Cosmic Orange"
            },
            {
              "name": "iPhone 17 Pro 1TB Deep Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Deep Blue"
            }
          ]
        },
        {
          "name": "iPhone 17",
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-17.jpg",
          "specs": {
            "display": "6.3-inch Super Retina XDR OLED",
            "processor": "Apple A19",
            "ram": "8GB",
            "storage": [
              "256GB",
              "512GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Black",
              "White",
              "Mist Blue",
              "Sage",
              "Lavender"
            ]
          },
          "variants": [
            {
              "name": "iPhone 17 256GB Black",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Black"
            },
            {
              "name": "iPhone 17 256GB White",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "White"
            },
            {
              "name": "iPhone 17 256GB Mist Blue",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Mist Blue"
            },
            {
              "name": "iPhone 17 256GB Sage",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Sage"
            },
            {
              "name": "iPhone 17 256GB Lavender",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "256GB",
              "color": "Lavender"
            },
            {
              "name": "iPhone 17 512GB Black",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Black"
            },
            {
              "name": "iPhone 17 512GB White",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "White"
            },
            {
              "name": "iPhone 17 512GB Mist Blue",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Mist Blue"
            },
            {
              "name": "iPhone 17 512GB Sage",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Sage"
            },
            {
              "name": "iPhone 17 512GB Lavender",
              "processor": "Apple A19",
              "ram": "8GB",
              "storage": "512GB",
              "color": "Lavender"
            }
          ]
        },
        {
          "name": "iPhone Air",
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-air.jpg",
          "specs": {
            "display": "6.5-inch Super Retina XDR OLED",
            "processor": "Apple A19 Pro",
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
            "colors": [
              "Space Black",
              "Cloud White",
              "Light Gold",
              "Sky Blue"
            ]
          },
          "variants": [
            {
              "name": "iPhone Air 256GB Space Black",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone Air 256GB Cloud White",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Cloud White"
            },
            {
              "name": "iPhone Air 256GB Light Gold",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Light Gold"
            },
            {
              "name": "iPhone Air 256GB Sky Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "256GB",
              "color": "Sky Blue"
            },
            {
              "name": "iPhone Air 512GB Space Black",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone Air 512GB Cloud White",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Cloud White"
            },
            {
              "name": "iPhone Air 512GB Light Gold",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Light Gold"
            },
            {
              "name": "iPhone Air 512GB Sky Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "512GB",
              "color": "Sky Blue"
            },
            {
              "name": "iPhone Air 1TB Space Black",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Space Black"
            },
            {
              "name": "iPhone Air 1TB Cloud White",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Cloud White"
            },
            {
              "name": "iPhone Air 1TB Light Gold",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Light Gold"
            },
            {
              "name": "iPhone Air 1TB Sky Blue",
              "processor": "Apple A19 Pro",
              "ram": "12GB",
              "storage": "1TB",
              "color": "Sky Blue"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 16",
      "models": [
        {
          "name": "iPhone 16e",
          "releaseYear": 2025,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16e.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi",
            "processor": "Apple A18",
            "ram": "8 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3961 mAh",
            "os": "iOS 18.3.1",
            "weight": "167 g",
            "dimensions": "146.7 × 71.5 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 16e 128 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16e 128 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16e 256 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16e 256 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16e 512 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16e 512 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White"
            }
          ]
        },
        {
          "name": "iPhone 16 Pro Max",
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro-max.jpg",
          "specs": {
            "display": "6.9\" LTPO Super Retina XDR OLED, 1320×2868, 460 ppi, 120Hz",
            "processor": "Apple A18 Pro",
            "ram": "8 GB",
            "storage": [
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "4685 mAh",
            "os": "iOS 18",
            "weight": "227 g",
            "dimensions": "163.0 × 77.6 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 16 Pro Max 256 GB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 256 GB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 256 GB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 256 GB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Desert Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 512 GB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 512 GB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 512 GB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 512 GB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Desert Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 1 TB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 1 TB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 1 TB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro Max 1 TB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Desert Titanium"
            }
          ]
        },
        {
          "name": "iPhone 16 Pro",
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-pro.jpg",
          "specs": {
            "display": "6.3\" LTPO Super Retina XDR OLED, 1206×2622, 460 ppi, 120Hz",
            "processor": "Apple A18 Pro",
            "ram": "8 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "3582 mAh",
            "os": "iOS 18",
            "weight": "199 g",
            "dimensions": "149.6 × 71.5 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 16 Pro 128 GB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro 128 GB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro 128 GB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro 128 GB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Desert Titanium"
            },
            {
              "name": "iPhone 16 Pro 256 GB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro 256 GB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro 256 GB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro 256 GB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Desert Titanium"
            },
            {
              "name": "iPhone 16 Pro 512 GB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro 512 GB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro 512 GB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro 512 GB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Desert Titanium"
            },
            {
              "name": "iPhone 16 Pro 1 TB Black Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 16 Pro 1 TB White Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 16 Pro 1 TB Natural Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 16 Pro 1 TB Desert Titanium",
              "processor": "Apple A18 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Desert Titanium"
            }
          ]
        },
        {
          "name": "iPhone 16 Plus",
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16-plus.jpg",
          "specs": {
            "display": "6.7\" Super Retina XDR OLED, 1290×2796, 460 ppi",
            "processor": "Apple A18",
            "ram": "8 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "4674 mAh",
            "os": "iOS 18",
            "weight": "199 g",
            "dimensions": "160.9 × 77.8 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 16 Plus 128 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 Plus 128 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 Plus 128 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 Plus 128 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 Plus 128 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Ultramarine"
            },
            {
              "name": "iPhone 16 Plus 256 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 Plus 256 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 Plus 256 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 Plus 256 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 Plus 256 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Ultramarine"
            },
            {
              "name": "iPhone 16 Plus 512 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 Plus 512 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 Plus 512 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 Plus 512 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 Plus 512 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Ultramarine"
            }
          ]
        },
        {
          "name": "iPhone 16",
          "releaseYear": 2024,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-16.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1179×2556, 461 ppi",
            "processor": "Apple A18",
            "ram": "8 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3561 mAh",
            "os": "iOS 18",
            "weight": "170 g",
            "dimensions": "147.6 × 71.6 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 16 128 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 128 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 128 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 128 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 128 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Ultramarine"
            },
            {
              "name": "iPhone 16 256 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 256 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 256 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 256 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 256 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Ultramarine"
            },
            {
              "name": "iPhone 16 512 GB Black",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 16 512 GB White",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White"
            },
            {
              "name": "iPhone 16 512 GB Pink",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 16 512 GB Teal",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Teal"
            },
            {
              "name": "iPhone 16 512 GB Ultramarine",
              "processor": "Apple A18",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Ultramarine"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 15",
      "models": [
        {
          "name": "iPhone 15 Pro Max",
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro-max.jpg",
          "specs": {
            "display": "6.7\" LTPO Super Retina XDR OLED, 1290×2796, 460 ppi, 120Hz",
            "processor": "Apple A17 Pro",
            "ram": "8 GB",
            "storage": [
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "4441 mAh",
            "os": "iOS 17",
            "weight": "221 g",
            "dimensions": "159.9 × 76.7 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 15 Pro Max 256 GB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 256 GB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 256 GB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 256 GB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 512 GB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 512 GB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 512 GB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 512 GB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 1 TB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 1 TB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 1 TB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro Max 1 TB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Natural Titanium"
            }
          ]
        },
        {
          "name": "iPhone 15 Pro",
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-pro.jpg",
          "specs": {
            "display": "6.1\" LTPO Super Retina XDR OLED, 1179×2556, 461 ppi, 120Hz",
            "processor": "Apple A17 Pro",
            "ram": "8 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "3274 mAh",
            "os": "iOS 17",
            "weight": "187 g",
            "dimensions": "146.6 × 70.6 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 15 Pro 128 GB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro 128 GB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro 128 GB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro 128 GB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "128 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 15 Pro 256 GB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro 256 GB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro 256 GB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro 256 GB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "256 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 15 Pro 512 GB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro 512 GB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro 512 GB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro 512 GB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "512 GB",
              "color": "Natural Titanium"
            },
            {
              "name": "iPhone 15 Pro 1 TB Black Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Black Titanium"
            },
            {
              "name": "iPhone 15 Pro 1 TB White Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "White Titanium"
            },
            {
              "name": "iPhone 15 Pro 1 TB Blue Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Blue Titanium"
            },
            {
              "name": "iPhone 15 Pro 1 TB Natural Titanium",
              "processor": "Apple A17 Pro",
              "ram": "8 GB",
              "storage": "1 TB",
              "color": "Natural Titanium"
            }
          ]
        },
        {
          "name": "iPhone 15 Plus",
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15-plus-.jpg",
          "specs": {
            "display": "6.7\" Super Retina XDR OLED, 1290×2796, 460 ppi",
            "processor": "Apple A16 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "4383 mAh",
            "os": "iOS 17",
            "weight": "201 g",
            "dimensions": "160.9 × 77.8 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 15 Plus 128 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 Plus 128 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 Plus 128 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 Plus 128 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 Plus 128 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 15 Plus 256 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 Plus 256 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 Plus 256 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 Plus 256 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 Plus 256 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 15 Plus 512 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 Plus 512 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 Plus 512 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 Plus 512 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 Plus 512 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Pink"
            }
          ]
        },
        {
          "name": "iPhone 15",
          "releaseYear": 2023,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-15.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1179×2556, 461 ppi",
            "processor": "Apple A16 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3349 mAh",
            "os": "iOS 17",
            "weight": "171 g",
            "dimensions": "147.6 × 71.6 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 15 128 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 128 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 128 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 128 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 128 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 15 256 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 256 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 256 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 256 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 256 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 15 512 GB Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 15 512 GB Blue",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 15 512 GB Green",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 15 512 GB Yellow",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 15 512 GB Pink",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Pink"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 14",
      "models": [
        {
          "name": "iPhone 14 Pro Max",
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro-max-.jpg",
          "specs": {
            "display": "6.7\" LTPO Super Retina XDR OLED, 1290×2796, 460 ppi, 120Hz",
            "processor": "Apple A16 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "4323 mAh",
            "os": "iOS 16",
            "weight": "240 g",
            "dimensions": "160.7 × 77.6 × 7.9 mm"
          },
          "variants": [
            {
              "name": "iPhone 14 Pro Max 128 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro Max 128 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro Max 128 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro Max 128 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro Max 256 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro Max 256 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro Max 256 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro Max 256 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro Max 512 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro Max 512 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro Max 512 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro Max 512 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro Max 1 TB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro Max 1 TB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro Max 1 TB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro Max 1 TB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Deep Purple"
            }
          ]
        },
        {
          "name": "iPhone 14 Pro",
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-pro.jpg",
          "specs": {
            "display": "6.1\" LTPO Super Retina XDR OLED, 1179×2556, 460 ppi, 120Hz",
            "processor": "Apple A16 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "3200 mAh",
            "os": "iOS 16",
            "weight": "206 g",
            "dimensions": "147.5 × 71.5 × 7.9 mm"
          },
          "variants": [
            {
              "name": "iPhone 14 Pro 128 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro 128 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro 128 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro 128 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro 256 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro 256 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro 256 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro 256 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro 512 GB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro 512 GB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro 512 GB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro 512 GB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Deep Purple"
            },
            {
              "name": "iPhone 14 Pro 1 TB Space Black",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Space Black"
            },
            {
              "name": "iPhone 14 Pro 1 TB Silver",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 14 Pro 1 TB Gold",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Gold"
            },
            {
              "name": "iPhone 14 Pro 1 TB Deep Purple",
              "processor": "Apple A16 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Deep Purple"
            }
          ]
        },
        {
          "name": "iPhone 14 Plus",
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14-plus.jpg",
          "specs": {
            "display": "6.7\" Super Retina XDR OLED, 1284×2778, 458 ppi",
            "processor": "Apple A15 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "4323 mAh",
            "os": "iOS 16",
            "weight": "203 g",
            "dimensions": "160.8 × 78.1 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 14 Plus 128 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 Plus 128 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 Plus 128 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 Plus 128 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 Plus 128 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 Plus 128 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 14 Plus 256 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 Plus 256 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 Plus 256 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 Plus 256 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 Plus 256 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 Plus 256 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 14 Plus 512 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 Plus 512 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 Plus 512 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 Plus 512 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 Plus 512 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 Plus 512 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Yellow"
            }
          ]
        },
        {
          "name": "iPhone 14",
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-14.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi",
            "processor": "Apple A15 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3279 mAh",
            "os": "iOS 16",
            "weight": "172 g",
            "dimensions": "146.7 × 71.5 × 7.8 mm"
          },
          "variants": [
            {
              "name": "iPhone 14 128 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 128 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 128 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 128 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 128 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 128 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 14 256 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 256 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 256 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 256 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 256 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 256 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 14 512 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 14 512 GB Purple",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 14 512 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 14 512 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 14 512 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 14 512 GB Yellow",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Yellow"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 13",
      "models": [
        {
          "name": "iPhone 13 Pro Max",
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro-max.jpg",
          "specs": {
            "display": "6.7\" Super Retina XDR OLED, 1284×2778, 458 ppi, 120Hz",
            "processor": "Apple A15 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "4352 mAh",
            "os": "iOS 15",
            "weight": "240 g",
            "dimensions": "160.8 × 78.1 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone 13 Pro Max 128 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro Max 128 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro Max 128 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro Max 128 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro Max 128 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro Max 256 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro Max 256 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro Max 256 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro Max 256 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro Max 256 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro Max 512 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro Max 512 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro Max 512 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro Max 512 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro Max 512 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro Max 1 TB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro Max 1 TB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro Max 1 TB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro Max 1 TB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro Max 1 TB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Alpine Green"
            }
          ]
        },
        {
          "name": "iPhone 13 Pro",
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-pro.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi, 120Hz",
            "processor": "Apple A15 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB",
              "1 TB"
            ],
            "battery": "3095 mAh",
            "os": "iOS 15",
            "weight": "204 g",
            "dimensions": "146.7 × 71.5 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone 13 Pro 128 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro 128 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro 128 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro 128 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro 128 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro 256 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro 256 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro 256 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro 256 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro 256 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro 512 GB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro 512 GB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro 512 GB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro 512 GB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro 512 GB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Alpine Green"
            },
            {
              "name": "iPhone 13 Pro 1 TB Graphite",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 13 Pro 1 TB Gold",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Gold"
            },
            {
              "name": "iPhone 13 Pro 1 TB Silver",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Silver"
            },
            {
              "name": "iPhone 13 Pro 1 TB Sierra Blue",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Sierra Blue"
            },
            {
              "name": "iPhone 13 Pro 1 TB Alpine Green",
              "processor": "Apple A15 Bionic",
              "ram": "6 GB",
              "storage": "1 TB",
              "color": "Alpine Green"
            }
          ]
        },
        {
          "name": "iPhone 13 mini",
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13-mini.jpg",
          "specs": {
            "display": "5.4\" Super Retina XDR OLED, 1080×2340, 476 ppi",
            "processor": "Apple A15 Bionic",
            "ram": "4 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "2438 mAh",
            "os": "iOS 15",
            "weight": "141 g",
            "dimensions": "131.5 × 64.2 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone 13 mini 128 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 mini 128 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 mini 128 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 mini 128 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 mini 128 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 mini 128 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 13 mini 256 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 mini 256 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 mini 256 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 mini 256 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 mini 256 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 mini 256 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 13 mini 512 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 mini 512 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 mini 512 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 mini 512 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 mini 512 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 mini 512 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Green"
            }
          ]
        },
        {
          "name": "iPhone 13",
          "releaseYear": 2021,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-13.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi",
            "processor": "Apple A15 Bionic",
            "ram": "4 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3240 mAh",
            "os": "iOS 15",
            "weight": "174 g",
            "dimensions": "146.7 × 71.5 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone 13 128 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 128 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 128 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 128 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 128 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 128 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 13 256 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 256 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 256 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 256 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 256 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 256 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 13 512 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone 13 512 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone 13 512 GB Blue",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 13 512 GB Pink",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 13 512 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 13 512 GB Green",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Green"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 12",
      "models": [
        {
          "name": "iPhone 12 Pro Max",
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro-max-.jpg",
          "specs": {
            "display": "6.7\" Super Retina XDR OLED, 1284×2778, 458 ppi",
            "processor": "Apple A14 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3687 mAh",
            "os": "iOS 14.1",
            "weight": "228 g",
            "dimensions": "160.8 × 78.1 × 7.4 mm"
          },
          "variants": [
            {
              "name": "iPhone 12 Pro Max 128 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro Max 128 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro Max 128 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro Max 128 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Pacific Blue"
            },
            {
              "name": "iPhone 12 Pro Max 256 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro Max 256 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro Max 256 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro Max 256 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Pacific Blue"
            },
            {
              "name": "iPhone 12 Pro Max 512 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro Max 512 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro Max 512 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro Max 512 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Pacific Blue"
            }
          ]
        },
        {
          "name": "iPhone 12 Pro",
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-pro--.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi",
            "processor": "Apple A14 Bionic",
            "ram": "6 GB",
            "storage": [
              "128 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "2815 mAh",
            "os": "iOS 14.1",
            "weight": "189 g",
            "dimensions": "146.7 × 71.5 × 7.4 mm"
          },
          "variants": [
            {
              "name": "iPhone 12 Pro 128 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro 128 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro 128 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro 128 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "128 GB",
              "color": "Pacific Blue"
            },
            {
              "name": "iPhone 12 Pro 256 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro 256 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro 256 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro 256 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "256 GB",
              "color": "Pacific Blue"
            },
            {
              "name": "iPhone 12 Pro 512 GB Silver",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 12 Pro 512 GB Graphite",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Graphite"
            },
            {
              "name": "iPhone 12 Pro 512 GB Gold",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 12 Pro 512 GB Pacific Blue",
              "processor": "Apple A14 Bionic",
              "ram": "6 GB",
              "storage": "512 GB",
              "color": "Pacific Blue"
            }
          ]
        },
        {
          "name": "iPhone 12 mini",
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12-mini.jpg",
          "specs": {
            "display": "5.4\" Super Retina XDR OLED, 1080×2340, 476 ppi",
            "processor": "Apple A14 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2227 mAh",
            "os": "iOS 14.1",
            "weight": "135 g",
            "dimensions": "131.5 × 64.2 × 7.4 mm"
          },
          "variants": [
            {
              "name": "iPhone 12 mini 64 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 mini 64 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 mini 64 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 mini 64 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 mini 64 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 mini 64 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 12 mini 128 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 mini 128 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 mini 128 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 mini 128 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 mini 128 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 mini 128 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 12 mini 256 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 mini 256 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 mini 256 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 mini 256 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 mini 256 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 mini 256 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Purple"
            }
          ]
        },
        {
          "name": "iPhone 12",
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-12.jpg",
          "specs": {
            "display": "6.1\" Super Retina XDR OLED, 1170×2532, 460 ppi",
            "processor": "Apple A14 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2815 mAh",
            "os": "iOS 14.1",
            "weight": "164 g",
            "dimensions": "146.7 × 71.5 × 7.4 mm"
          },
          "variants": [
            {
              "name": "iPhone 12 64 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 64 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 64 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 64 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 64 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 64 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 12 128 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 128 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 128 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 128 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 128 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 128 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 12 256 GB Black",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 12 256 GB White",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone 12 256 GB Red",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 12 256 GB Green",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 12 256 GB Blue",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 12 256 GB Purple",
              "processor": "Apple A14 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Purple"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 11",
      "models": [
        {
          "name": "iPhone 11 Pro Max",
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro-max-.jpg",
          "specs": {
            "display": "6.5\" Super Retina XDR OLED, 1242×2688, 458 ppi",
            "processor": "Apple A13 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3969 mAh",
            "os": "iOS 13",
            "weight": "226 g",
            "dimensions": "158.0 × 77.8 × 8.1 mm"
          },
          "variants": [
            {
              "name": "iPhone 11 Pro Max 64 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro Max 64 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro Max 64 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro Max 64 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Midnight Green"
            },
            {
              "name": "iPhone 11 Pro Max 256 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro Max 256 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro Max 256 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro Max 256 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Midnight Green"
            },
            {
              "name": "iPhone 11 Pro Max 512 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro Max 512 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro Max 512 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro Max 512 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Midnight Green"
            }
          ]
        },
        {
          "name": "iPhone 11 Pro",
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11-pro.jpg",
          "specs": {
            "display": "5.8\" Super Retina XDR OLED, 1125×2436, 458 ppi",
            "processor": "Apple A13 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3046 mAh",
            "os": "iOS 13",
            "weight": "188 g",
            "dimensions": "144.0 × 71.4 × 8.1 mm"
          },
          "variants": [
            {
              "name": "iPhone 11 Pro 64 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro 64 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro 64 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro 64 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Midnight Green"
            },
            {
              "name": "iPhone 11 Pro 256 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro 256 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro 256 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro 256 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Midnight Green"
            },
            {
              "name": "iPhone 11 Pro 512 GB Space Gray",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 11 Pro 512 GB Silver",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 11 Pro 512 GB Gold",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 11 Pro 512 GB Midnight Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Midnight Green"
            }
          ]
        },
        {
          "name": "iPhone 11",
          "releaseYear": 2019,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg",
          "specs": {
            "display": "6.1\" Liquid Retina IPS LCD, 828×1792, 326 ppi",
            "processor": "Apple A13 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "3110 mAh",
            "os": "iOS 13",
            "weight": "194 g",
            "dimensions": "150.9 × 75.7 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 11 64 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 11 64 GB Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 11 64 GB Yellow",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 11 64 GB Purple",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 11 64 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 11 64 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "White"
            },
            {
              "name": "iPhone 11 128 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 11 128 GB Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 11 128 GB Yellow",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 11 128 GB Purple",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 11 128 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 11 128 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone 11 256 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 11 256 GB Green",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 11 256 GB Yellow",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 11 256 GB Purple",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Purple"
            },
            {
              "name": "iPhone 11 256 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 11 256 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "White"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone X/XR/XS",
      "models": [
        {
          "name": "iPhone XS Max",
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-max-new1.jpg",
          "specs": {
            "display": "6.5\" Super Retina OLED, 1242×2688, 458 ppi",
            "processor": "Apple A12 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "3174 mAh",
            "os": "iOS 12",
            "weight": "208 g",
            "dimensions": "157.5 × 77.4 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone XS Max 64 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS Max 64 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS Max 64 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone XS Max 256 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS Max 256 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS Max 256 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone XS Max 512 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS Max 512 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS Max 512 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Gold"
            }
          ]
        },
        {
          "name": "iPhone XS",
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xs-new.jpg",
          "specs": {
            "display": "5.8\" Super Retina OLED, 1125×2436, 458 ppi",
            "processor": "Apple A12 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "256 GB",
              "512 GB"
            ],
            "battery": "2658 mAh",
            "os": "iOS 12",
            "weight": "177 g",
            "dimensions": "143.6 × 70.9 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone XS 64 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS 64 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS 64 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone XS 256 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS 256 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS 256 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone XS 512 GB Space Gray",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone XS 512 GB Silver",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone XS 512 GB Gold",
              "processor": "Apple A12 Bionic",
              "ram": "4 GB",
              "storage": "512 GB",
              "color": "Gold"
            }
          ]
        },
        {
          "name": "iPhone XR",
          "releaseYear": 2018,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-xr-new.jpg",
          "specs": {
            "display": "6.1\" Liquid Retina IPS LCD, 828×1792, 326 ppi",
            "processor": "Apple A12 Bionic",
            "ram": "3 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2942 mAh",
            "os": "iOS 12",
            "weight": "194 g",
            "dimensions": "150.9 × 75.7 × 8.3 mm"
          },
          "variants": [
            {
              "name": "iPhone XR 64 GB Black",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Black"
            },
            {
              "name": "iPhone XR 64 GB White",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "White"
            },
            {
              "name": "iPhone XR 64 GB Blue",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone XR 64 GB Yellow",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone XR 64 GB Coral",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Coral"
            },
            {
              "name": "iPhone XR 64 GB Red",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone XR 128 GB Black",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone XR 128 GB White",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone XR 128 GB Blue",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone XR 128 GB Yellow",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone XR 128 GB Coral",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Coral"
            },
            {
              "name": "iPhone XR 128 GB Red",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone XR 256 GB Black",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone XR 256 GB White",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone XR 256 GB Blue",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone XR 256 GB Yellow",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone XR 256 GB Coral",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Coral"
            },
            {
              "name": "iPhone XR 256 GB Red",
              "processor": "Apple A12 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone X",
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-x.jpg",
          "specs": {
            "display": "5.8\" Super Retina OLED, 1125×2436, 458 ppi",
            "processor": "Apple A11 Bionic",
            "ram": "3 GB",
            "storage": [
              "64 GB",
              "256 GB"
            ],
            "battery": "2716 mAh",
            "os": "iOS 11",
            "weight": "174 g",
            "dimensions": "143.6 × 70.9 × 7.7 mm"
          },
          "variants": [
            {
              "name": "iPhone X 64 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone X 64 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone X 256 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone X 256 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Silver"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone SE",
      "models": [
        {
          "name": "iPhone SE (3rd generation)",
          "releaseYear": 2022,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2022.jpg",
          "specs": {
            "display": "4.7\" Retina IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A15 Bionic",
            "ram": "4 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2018 mAh",
            "os": "iOS 15.4",
            "weight": "144 g",
            "dimensions": "138.4 × 67.3 × 7.3 mm"
          },
          "variants": [
            {
              "name": "iPhone SE (3rd generation) 64 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone SE (3rd generation) 64 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone SE (3rd generation) 64 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone SE (3rd generation) 128 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone SE (3rd generation) 128 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone SE (3rd generation) 128 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone SE (3rd generation) 256 GB Midnight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Midnight"
            },
            {
              "name": "iPhone SE (3rd generation) 256 GB Starlight",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Starlight"
            },
            {
              "name": "iPhone SE (3rd generation) 256 GB Red",
              "processor": "Apple A15 Bionic",
              "ram": "4 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone SE (2nd generation)",
          "releaseYear": 2020,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-se-2020.jpg",
          "specs": {
            "display": "4.7\" Retina IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A13 Bionic",
            "ram": "3 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "1821 mAh",
            "os": "iOS 13",
            "weight": "148 g",
            "dimensions": "138.4 × 67.3 × 7.3 mm"
          },
          "variants": [
            {
              "name": "iPhone SE (2nd generation) 64 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Black"
            },
            {
              "name": "iPhone SE (2nd generation) 64 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "White"
            },
            {
              "name": "iPhone SE (2nd generation) 64 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone SE (2nd generation) 128 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone SE (2nd generation) 128 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "White"
            },
            {
              "name": "iPhone SE (2nd generation) 128 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone SE (2nd generation) 256 GB Black",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone SE (2nd generation) 256 GB White",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "White"
            },
            {
              "name": "iPhone SE (2nd generation) 256 GB Red",
              "processor": "Apple A13 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone SE (1st generation)",
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5se-ofic.jpg",
          "specs": {
            "display": "4.0\" IPS LCD, 640×1136, 326 ppi",
            "processor": "Apple A9",
            "ram": "2 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB",
              "128 GB"
            ],
            "battery": "1624 mAh",
            "os": "iOS 9.3",
            "weight": "113 g",
            "dimensions": "123.8 × 58.6 × 7.6 mm"
          },
          "variants": [
            {
              "name": "iPhone SE (1st generation) 16 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone SE (1st generation) 16 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone SE (1st generation) 16 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone SE (1st generation) 16 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone SE (1st generation) 32 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone SE (1st generation) 32 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone SE (1st generation) 32 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone SE (1st generation) 32 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone SE (1st generation) 64 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone SE (1st generation) 64 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone SE (1st generation) 64 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone SE (1st generation) 64 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone SE (1st generation) 128 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone SE (1st generation) 128 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone SE (1st generation) 128 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone SE (1st generation) 128 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Rose Gold"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 6/7/8",
      "models": [
        {
          "name": "iPhone 8 Plus",
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-plus-new.jpg",
          "specs": {
            "display": "5.5\" IPS LCD, 1080×1920, 401 ppi",
            "processor": "Apple A11 Bionic",
            "ram": "3 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2691 mAh",
            "os": "iOS 11",
            "weight": "202 g",
            "dimensions": "158.4 × 78.1 × 7.5 mm"
          },
          "variants": [
            {
              "name": "iPhone 8 Plus 64 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 Plus 64 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 Plus 64 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 Plus 64 GB Red",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 8 Plus 128 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 Plus 128 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 Plus 128 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 Plus 256 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 Plus 256 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 Plus 256 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 Plus 256 GB Red",
              "processor": "Apple A11 Bionic",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone 8",
          "releaseYear": 2017,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-8-new.jpg",
          "specs": {
            "display": "4.7\" IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A11 Bionic",
            "ram": "2 GB",
            "storage": [
              "64 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "1821 mAh",
            "os": "iOS 11",
            "weight": "148 g",
            "dimensions": "138.4 × 67.3 × 7.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 8 64 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 64 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 64 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 64 GB Red",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 8 128 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 128 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 128 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 256 GB Space Gray",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 8 256 GB Silver",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 8 256 GB Gold",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 8 256 GB Red",
              "processor": "Apple A11 Bionic",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone 7 Plus",
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7-plus-r2.jpg",
          "specs": {
            "display": "5.5\" IPS LCD, 1080×1920, 401 ppi",
            "processor": "Apple A10 Fusion",
            "ram": "3 GB",
            "storage": [
              "32 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "2900 mAh",
            "os": "iOS 10",
            "weight": "188 g",
            "dimensions": "158.2 × 77.9 × 7.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 7 Plus 32 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "32 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 Plus 32 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 Plus 32 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 Plus 32 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "32 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 Plus 128 GB Jet Black",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Jet Black"
            },
            {
              "name": "iPhone 7 Plus 128 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 Plus 128 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 Plus 128 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 Plus 128 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 Plus 128 GB Red",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 7 Plus 256 GB Jet Black",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Jet Black"
            },
            {
              "name": "iPhone 7 Plus 256 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 Plus 256 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 Plus 256 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 Plus 256 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 Plus 256 GB Red",
              "processor": "Apple A10 Fusion",
              "ram": "3 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone 7",
          "releaseYear": 2016,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-7r4.jpg",
          "specs": {
            "display": "4.7\" IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A10 Fusion",
            "ram": "2 GB",
            "storage": [
              "32 GB",
              "128 GB",
              "256 GB"
            ],
            "battery": "1960 mAh",
            "os": "iOS 10",
            "weight": "138 g",
            "dimensions": "138.3 × 67.1 × 7.1 mm"
          },
          "variants": [
            {
              "name": "iPhone 7 32 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 32 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 32 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 32 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 128 GB Jet Black",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Jet Black"
            },
            {
              "name": "iPhone 7 128 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 128 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 128 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 128 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 128 GB Red",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Red"
            },
            {
              "name": "iPhone 7 256 GB Jet Black",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Jet Black"
            },
            {
              "name": "iPhone 7 256 GB Black",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Black"
            },
            {
              "name": "iPhone 7 256 GB Silver",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 7 256 GB Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 7 256 GB Rose Gold",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 7 256 GB Red",
              "processor": "Apple A10 Fusion",
              "ram": "2 GB",
              "storage": "256 GB",
              "color": "Red"
            }
          ]
        },
        {
          "name": "iPhone 6s Plus",
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s-plus.jpg",
          "specs": {
            "display": "5.5\" IPS LCD, 1080×1920, 401 ppi",
            "processor": "Apple A9",
            "ram": "2 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB",
              "128 GB"
            ],
            "battery": "2750 mAh",
            "os": "iOS 9",
            "weight": "192 g",
            "dimensions": "158.2 × 77.9 × 7.3 mm"
          },
          "variants": [
            {
              "name": "iPhone 6s Plus 16 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s Plus 16 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s Plus 16 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s Plus 16 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s Plus 32 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s Plus 32 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s Plus 32 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s Plus 32 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s Plus 64 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s Plus 64 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s Plus 64 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s Plus 64 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s Plus 128 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s Plus 128 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s Plus 128 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s Plus 128 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Rose Gold"
            }
          ]
        },
        {
          "name": "iPhone 6s",
          "releaseYear": 2015,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6s1.jpg",
          "specs": {
            "display": "4.7\" IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A9",
            "ram": "2 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB",
              "128 GB"
            ],
            "battery": "1715 mAh",
            "os": "iOS 9",
            "weight": "143 g",
            "dimensions": "138.3 × 67.1 × 7.1 mm"
          },
          "variants": [
            {
              "name": "iPhone 6s 16 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s 16 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s 16 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s 16 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "16 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s 32 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s 32 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s 32 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s 32 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "32 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s 64 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s 64 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s 64 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s 64 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "64 GB",
              "color": "Rose Gold"
            },
            {
              "name": "iPhone 6s 128 GB Space Gray",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6s 128 GB Silver",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6s 128 GB Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6s 128 GB Rose Gold",
              "processor": "Apple A9",
              "ram": "2 GB",
              "storage": "128 GB",
              "color": "Rose Gold"
            }
          ]
        },
        {
          "name": "iPhone 6 Plus",
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-plus2.jpg",
          "specs": {
            "display": "5.5\" IPS LCD, 1080×1920, 401 ppi",
            "processor": "Apple A8",
            "ram": "1 GB",
            "storage": [
              "16 GB",
              "64 GB",
              "128 GB"
            ],
            "battery": "2915 mAh",
            "os": "iOS 8",
            "weight": "172 g",
            "dimensions": "158.1 × 77.8 × 7.1 mm"
          },
          "variants": [
            {
              "name": "iPhone 6 Plus 16 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 Plus 16 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 Plus 16 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6 Plus 64 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 Plus 64 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 Plus 64 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6 Plus 128 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 Plus 128 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 Plus 128 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Gold"
            }
          ]
        },
        {
          "name": "iPhone 6",
          "releaseYear": 2014,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-6-4.jpg",
          "specs": {
            "display": "4.7\" IPS LCD, 750×1334, 326 ppi",
            "processor": "Apple A8",
            "ram": "1 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB",
              "128 GB"
            ],
            "battery": "1810 mAh",
            "os": "iOS 8",
            "weight": "129 g",
            "dimensions": "138.1 × 67.0 × 6.9 mm"
          },
          "variants": [
            {
              "name": "iPhone 6 16 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 16 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 16 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6 32 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 32 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 32 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6 64 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 64 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 64 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 6 128 GB Space Gray",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 6 128 GB Silver",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 6 128 GB Gold",
              "processor": "Apple A8",
              "ram": "1 GB",
              "storage": "128 GB",
              "color": "Gold"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 5/5C/5S",
      "models": [
        {
          "name": "iPhone 5s",
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5s-ofic.jpg",
          "specs": {
            "display": "4.0\" IPS LCD, 640×1136, 326 ppi",
            "processor": "Apple A7",
            "ram": "1 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB"
            ],
            "battery": "1560 mAh",
            "os": "iOS 7",
            "weight": "112 g",
            "dimensions": "123.8 × 58.6 × 7.6 mm"
          },
          "variants": [
            {
              "name": "iPhone 5s 16 GB Space Gray",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 5s 16 GB Silver",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 5s 16 GB Gold",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 5s 32 GB Space Gray",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 5s 32 GB Silver",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 5s 32 GB Gold",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Gold"
            },
            {
              "name": "iPhone 5s 64 GB Space Gray",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Space Gray"
            },
            {
              "name": "iPhone 5s 64 GB Silver",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Silver"
            },
            {
              "name": "iPhone 5s 64 GB Gold",
              "processor": "Apple A7",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Gold"
            }
          ]
        },
        {
          "name": "iPhone 5c",
          "releaseYear": 2013,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5c-new2.jpg",
          "specs": {
            "display": "4.0\" IPS LCD, 640×1136, 326 ppi",
            "processor": "Apple A6",
            "ram": "1 GB",
            "storage": [
              "8 GB",
              "16 GB",
              "32 GB"
            ],
            "battery": "1510 mAh",
            "os": "iOS 7",
            "weight": "132 g",
            "dimensions": "124.4 × 59.2 × 9.0 mm"
          },
          "variants": [
            {
              "name": "iPhone 5c 8 GB White",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "8 GB",
              "color": "White"
            },
            {
              "name": "iPhone 5c 8 GB Blue",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "8 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 5c 8 GB Green",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "8 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 5c 8 GB Yellow",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "8 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 5c 8 GB Pink",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "8 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 5c 16 GB White",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "White"
            },
            {
              "name": "iPhone 5c 16 GB Blue",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 5c 16 GB Green",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 5c 16 GB Yellow",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 5c 16 GB Pink",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Pink"
            },
            {
              "name": "iPhone 5c 32 GB White",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "White"
            },
            {
              "name": "iPhone 5c 32 GB Blue",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Blue"
            },
            {
              "name": "iPhone 5c 32 GB Green",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Green"
            },
            {
              "name": "iPhone 5c 32 GB Yellow",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Yellow"
            },
            {
              "name": "iPhone 5c 32 GB Pink",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Pink"
            }
          ]
        },
        {
          "name": "iPhone 5",
          "releaseYear": 2012,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-5-ofic.jpg",
          "specs": {
            "display": "4.0\" IPS LCD, 640×1136, 326 ppi",
            "processor": "Apple A6",
            "ram": "1 GB",
            "storage": [
              "16 GB",
              "32 GB",
              "64 GB"
            ],
            "battery": "1440 mAh",
            "os": "iOS 6",
            "weight": "112 g",
            "dimensions": "123.8 × 58.6 × 7.6 mm"
          },
          "variants": [
            {
              "name": "iPhone 5 16 GB Black/Slate",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "Black/Slate"
            },
            {
              "name": "iPhone 5 16 GB White/Silver",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "16 GB",
              "color": "White/Silver"
            },
            {
              "name": "iPhone 5 32 GB Black/Slate",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "Black/Slate"
            },
            {
              "name": "iPhone 5 32 GB White/Silver",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "32 GB",
              "color": "White/Silver"
            },
            {
              "name": "iPhone 5 64 GB Black/Slate",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "Black/Slate"
            },
            {
              "name": "iPhone 5 64 GB White/Silver",
              "processor": "Apple A6",
              "ram": "1 GB",
              "storage": "64 GB",
              "color": "White/Silver"
            }
          ]
        }
      ]
    },
    {
      "name": "iPhone 2G/3G/4",
      "models": [
        {
          "name": "iPhone 4s",
          "releaseYear": 2011,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4s-new.jpg",
          "specs": {
            "display": "3.5-inch Retina IPS LCD",
            "processor": "Apple A5",
            "ram": "512MB",
            "storage": [
              "8GB",
              "16GB",
              "32GB",
              "64GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Black",
              "White"
            ]
          },
          "variants": [
            {
              "name": "iPhone 4s 8GB Black",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "8GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4s 8GB White",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "8GB",
              "color": "White"
            },
            {
              "name": "iPhone 4s 16GB Black",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "16GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4s 16GB White",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "16GB",
              "color": "White"
            },
            {
              "name": "iPhone 4s 32GB Black",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "32GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4s 32GB White",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "32GB",
              "color": "White"
            },
            {
              "name": "iPhone 4s 64GB Black",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "64GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4s 64GB White",
              "processor": "Apple A5",
              "ram": "512MB",
              "storage": "64GB",
              "color": "White"
            }
          ]
        },
        {
          "name": "iPhone 4",
          "releaseYear": 2010,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-4-ofic-final.jpg",
          "specs": {
            "display": "3.5-inch Retina IPS LCD",
            "processor": "Apple A4",
            "ram": "512MB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Black",
              "White"
            ]
          },
          "variants": [
            {
              "name": "iPhone 4 8GB Black",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "8GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4 8GB White",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "8GB",
              "color": "White"
            },
            {
              "name": "iPhone 4 16GB Black",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "16GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4 16GB White",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "16GB",
              "color": "White"
            },
            {
              "name": "iPhone 4 32GB Black",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "32GB",
              "color": "Black"
            },
            {
              "name": "iPhone 4 32GB White",
              "processor": "Apple A4",
              "ram": "512MB",
              "storage": "32GB",
              "color": "White"
            }
          ]
        },
        {
          "name": "iPhone 3GS",
          "releaseYear": 2009,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-3gs-ofic.jpg",
          "specs": {
            "display": "3.5-inch TFT LCD",
            "processor": "Samsung S5PC100",
            "ram": "256MB",
            "storage": [
              "8GB",
              "16GB",
              "32GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Black",
              "White"
            ]
          },
          "variants": [
            {
              "name": "iPhone 3GS 8GB Black",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "8GB",
              "color": "Black"
            },
            {
              "name": "iPhone 3GS 8GB White",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "8GB",
              "color": "White"
            },
            {
              "name": "iPhone 3GS 16GB Black",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "16GB",
              "color": "Black"
            },
            {
              "name": "iPhone 3GS 16GB White",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "16GB",
              "color": "White"
            },
            {
              "name": "iPhone 3GS 32GB Black",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "32GB",
              "color": "Black"
            },
            {
              "name": "iPhone 3GS 32GB White",
              "processor": "Samsung S5PC100",
              "ram": "256MB",
              "storage": "32GB",
              "color": "White"
            }
          ]
        },
        {
          "name": "iPhone 3G",
          "releaseYear": 2008,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone3g.jpg",
          "specs": {
            "display": "3.5-inch TFT LCD",
            "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
            "ram": "128MB",
            "storage": [
              "8GB",
              "16GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Black",
              "White"
            ]
          },
          "variants": [
            {
              "name": "iPhone 3G 8GB Black",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "8GB",
              "color": "Black"
            },
            {
              "name": "iPhone 3G 8GB White",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "8GB",
              "color": "White"
            },
            {
              "name": "iPhone 3G 16GB Black",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "16GB",
              "color": "Black"
            },
            {
              "name": "iPhone 3G 16GB White",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "16GB",
              "color": "White"
            }
          ]
        },
        {
          "name": "iPhone",
          "releaseYear": 2007,
          "imageUrl": "https://fdn2.gsmarena.com/vv/bigpic/apple-iphone.gif",
          "specs": {
            "display": "3.5-inch TFT LCD",
            "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
            "ram": "128MB",
            "storage": [
              "4GB",
              "8GB",
              "16GB"
            ],
            "battery": null,
            "os": null,
            "weight": null,
            "dimensions": null,
            "colors": [
              "Silver/Black"
            ]
          },
          "variants": [
            {
              "name": "iPhone 4GB Silver/Black",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "4GB",
              "color": "Silver/Black"
            },
            {
              "name": "iPhone 8GB Silver/Black",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "8GB",
              "color": "Silver/Black"
            },
            {
              "name": "iPhone 16GB Silver/Black",
              "processor": "Samsung 32-bit RISC ARM 1176JZ(F)-S",
              "ram": "128MB",
              "storage": "16GB",
              "color": "Silver/Black"
            }
          ]
        }
      ]
    }
  ]
};
