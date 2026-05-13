# Laptop Catalog — Complete Generation

Generate a single JSON file `laptops.json` with ALL brands and models below.

## Rules

1. Every single model listed here must be included — do NOT skip any
2. Use web browsing to find newer models (2025-2026) not listed and ADD them
3. Each model needs: `release_year`, `image_url` (verified), full `specs`, `variants` (processor + RAM configs)
4. Image URLs: use manufacturer site or NotebookCheck — verify they load
5. Never skip older models — repair shops fix 5+ year old laptops daily

## Format

```json
{
  "category": "laptop",
  "brands": [
    {
      "name": "Apple",
      "logo_url": "https://logo.clearbit.com/apple.com",
      "families": [
        { "name": "MacBook Air", "models": [...] },
        { "name": "MacBook Pro", "models": [...] }
      ]
    }
  ]
}
```

## Complete Model Checklist

### Apple — 2 families
**MacBook Air:** M1 (2020), M2 (2022), M3 (2023), M4 (2024)
**MacBook Pro 14":** M1 Pro (2021), M2 Pro (2023), M3 Pro (2023), M4 Pro (2024)
**MacBook Pro 16":** M1 Pro/Max (2021), M2 Pro/Max (2023), M3 Max (2023), M4 Max (2024)

### Dell — 5 families
**Latitude:** 3000 series (3320, 3420, 3430, 3440, 3450), 5000 series (5420, 5430, 5440, 5450, 5520, 5530, 5540, 5550), 7000 series (7320, 7330, 7340, 7350, 7430, 7440, 7450, 7530, 7540, 7550), 9000 series (9330, 9430, 9440, 9450, 9540)
**Inspiron:** 3000 series (3501, 3505, 3510, 3511, 3515, 3520, 3525), 5000 series (5402, 5406, 5410, 5415, 5420, 5425, 5430, 5435, 5440, 5445, 5450, 5458, 5502, 5510, 5515, 5520, 5525, 5530), 7000 series (7400, 7415, 7420, 7430, 7440, 7500, 7510, 7515)
**XPS:** 13 (9305, 9310, 9315, 9320, 9330, 9340, 9345), 15 (9500, 9510, 9520, 9530), 16 (9610, 9620, 9630, 9640)
**Precision:** 3000 (3470, 3480), 5000 (5570, 5680), 7000 (7670, 7680, 7770, 7780)
**Alienware:** m15 (R5, R6, R7), m16, x14, x15, x16

### HP — 7 families
**ProBook:** 440 G8, G9, G10, G11, 445 G8, G9, G10, G11, 450 G8, G9, G10, G11, 455 G8, G9, G10, G11
**EliteBook:** 830 G8, G9, G10, G11, 835 G8, G9, G10, 840 G8, G9, G10, G11, 845 G8, G9, G10, 860 G9, G10, G11, 865 G9, G10
**Pavilion:** 14, 15, 16 series — ec1000 through ec3000, dv2000 through dv6000
**Envy:** 13-ba, 14-eb, 15-ep, 16-h series
**Spectre:** x360 14, 16
**Omen:** 15, 16, 17, Transcend 14, Transcend 16
**Victus:** 15, 16

### Lenovo — 7 families
**ThinkPad T Series:** T14 Gen 1-5, T14s Gen 1-5, T15 Gen 2-3, T16 Gen 1-3
**ThinkPad X Series:** X1 Carbon Gen 8-12, X1 Nano Gen 1-3, X1 Yoga Gen 6-9
**ThinkPad E Series:** E14 Gen 2-6, E15 Gen 2-4, E16 Gen 1-2
**ThinkPad L Series:** L14 Gen 2-5, L15 Gen 2-4, L16 Gen 1
**IdeaPad:** 1, 3, 5, Slim, Flex series
**Legion:** 5 (15, 16), 5 Pro, 7 (16), 7 Pro, 9, Slim 5, Slim 7, Pro 5
**Yoga:** 6, 7, 9, Slim 7, Pro 7

### Asus — 5 families
**VivoBook:** 14, 15, 16, S14, S15, S16, Pro series
**ZenBook:** 13 OLED, 14 OLED, 15 OLED, Pro 14, Pro 16, Duo
**TUF Gaming:** F15, F17, A15, A16, FA507, FX507
**ROG:** Zephyrus G14, G16, M16, Strix G15, G16, Scar 15, Scar 16, Scar 17, Strix G18, Flow X13, X16
**ExpertBook:** B1, B3, B5, B9, P1, P2

### Acer — 5 families
**Aspire:** 3, 5, 7, Vero, Lite series
**Swift:** 3, 5, 7, 9, Go, Edge
**Nitro:** 5, V, 16, 17
**Predator:** Helios 16, Helios 18, Triton 14, Triton 16
**TravelMate:** P2, P4, Spin series

### MSI — 8 families
**Modern:** 14, 15
**Prestige:** 13, 14, 15, 16
**Katana:** 15, 17
**Stealth:** 14, 15, 16, 17
**Raider:** GE68, GE78
**Sword:** 15, 16, 17
**Vector:** 16, 17
**Alpha:** 15, 17

### Samsung — 3 families
**Galaxy Book:** 3, 4
**Galaxy Book Pro:** 360, 2 Pro, 3 Pro, 4 Pro
**Galaxy Book Ultra:** 2 Ultra, 3 Ultra, 4 Ultra

### Huawei — 2 families
**MateBook D:** 14, 15, 16
**MateBook X Pro:** 2021, 2022, 2023, 2024

### Microsoft — 3 families
**Surface Laptop:** 4, 5, 6, 7, Studio
**Surface Pro:** 8, 9, 10, 11
**Surface Book:** 3, 4

### Razer — 1 family
**Blade:** 14 (2021-2024), 15 (2021-2024), 16 (2023-2024), 18 (2024)

### Gigabyte — 2 families
**AORUS:** 15, 16, 17
**AERO:** 14, 15, 16

### LG — 1 family
**Gram:** 14, 15, 16, 17, Style, Pro

### Xiaomi — 2 families
**Mi Notebook:** Pro 14, Pro 15, Ultra
**RedmiBook:** 15, 16, Pro 14, Pro 15

### Honor — 1 family
**MagicBook:** 14, 15, Pro 16

### MSI — already covered above

### Condor — 2 families
**CloudBook:** 14, 15
**Terra:** 14, 15

### Thomson — 1 family
**Neo:** 14, 15

### Toshiba / Dynabook — 2 families
**Satellite:** Pro, C series
**Tecra:** A series

### Fujitsu — 1 family
**Lifebook:** U series, E series, A series

### Panasonic — 1 family
**Toughbook:** 55, G2, 40

## Each Model MUST Include

```json
{
  "name": "Dell Latitude 7440",
  "release_year": 2023,
  "image_url": "https://i.dell.com/is/image/DellContent/...",
  "specs": {
    "display": "14\" IPS, 1920×1200",
    "processor": "Intel Core i5-1345U",
    "ram": "16 GB",
    "storage": ["256 GB", "512 GB", "1 TB"],
    "battery": "57 Wh",
    "os": "Windows 11 Pro",
    "weight": "1.39 kg",
    "dimensions": "313 × 222 × 17 mm"
  },
  "variants": [
    { "name": "Latitude 7440 i5-1345U 16GB 256GB", "processor": "Intel Core i5-1345U", "ram": "16 GB", "storage": "256 GB" }
  ]
}
```

## Delivery
- File: `laptops.json`
- Include ALL brands and models from the checklist
- Use web browsing to find 2025-2026 models not listed
- Verify image URLs load
