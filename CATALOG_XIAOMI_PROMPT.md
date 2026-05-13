# Xiaomi / Redmi / Poco Phones — Complete Catalog

## Critical Rule
Do NOT skip any model. Every single model listed below must be in the output. Use web browsing to research each one — specs, release year, GSMArena image. If a model was released in the last 12 months that I haven't listed, include it too.

## Output Format

Append to existing `phones.json` or create `phones_xiaomi.json`:

```json
{
  "category": "phone",
  "brands": [
    {
      "name": "Xiaomi",
      "logo_url": "https://logo.clearbit.com/mi.com",
      "families": [
        { "name": "Xiaomi Number Series", "models": [...] },
        { "name": "Xiaomi T Series", "models": [...] },
        { "name": "Xiaomi Mix", "models": [...] },
        { "name": "Xiaomi Civi", "models": [...] },
        { "name": "Black Shark", "models": [...] }
      ]
    },
    {
      "name": "Redmi",
      "logo_url": "https://logo.clearbit.com/mi.com",
      "families": [
        { "name": "Redmi Number Series", "models": [...] },
        { "name": "Redmi Note Series", "models": [...] },
        { "name": "Redmi A Series", "models": [...] },
        { "name": "Redmi K Series", "models": [...] }
      ]
    },
    {
      "name": "Poco",
      "logo_url": "https://logo.clearbit.com/poco.com",
      "families": [
        { "name": "Poco F Series", "models": [...] },
        { "name": "Poco X Series", "models": [...] },
        { "name": "Poco M Series", "models": [...] },
        { "name": "Poco C Series", "models": [...] }
      ]
    }
  ]
}
```

## Complete Model Checklist

### Xiaomi — Number Series
Xiaomi 12, 12X, 12 Pro, 12 Lite, 12T, 12T Pro
Xiaomi 13, 13 Pro, 13 Ultra, 13 Lite, 13T, 13T Pro
Xiaomi 14, 14 Pro, 14 Ultra, 14T, 14T Pro
Xiaomi 15, 15 Pro, 15 Ultra

### Xiaomi — T Series
Xiaomi 11T, 11T Pro, 12T, 12T Pro, 13T, 13T Pro, 14T, 14T Pro

### Xiaomi — Mix Series
Xiaomi Mix 4, Mix Fold, Mix Fold 2, Mix Fold 3, Mix Fold 4

### Xiaomi — Civi Series
Xiaomi Civi, Civi 2, Civi 3, Civi 4 Pro

### Xiaomi — Black Shark
Black Shark 2, 3, 4, 5

### Redmi — Number Series
Redmi 9, 9A, 9C, 9T
Redmi 10, 10A, 10C, 10 5G
Redmi 11 Prime, 11 5G
Redmi 12, 12 5G, 12C
Redmi 13, 13 5G, 13C
Redmi 14, 14 5G, 14C

### Redmi — Note Series
Redmi Note 9, 9 Pro, 9S, 9T
Redmi Note 10, 10 Pro, 10S, 10 5G
Redmi Note 11, 11 Pro, 11S, 11 5G, 11T
Redmi Note 12, 12 Pro, 12S, 12 5G, 12 Turbo
Redmi Note 13, 13 Pro, 13 Pro+, 13 5G, 13R
Redmi Note 14, 14 Pro, 14 5G

### Redmi — A Series
Redmi 9A, 9AT
Redmi 10A
Redmi 12C
Redmi 13C
Redmi A3, A3x, A4

### Redmi — K Series
Redmi K40, K40 Pro, K40 Gaming
Redmi K50, K50 Pro, K50 Gaming, K50i
Redmi K60, K60 Pro, K60 Ultra, K60E
Redmi K70, K70 Pro, K70 Ultra
Redmi K80, K80 Pro

### Poco — F Series
Poco F2 Pro, F3, F4, F5, F5 Pro, F6, F6 Pro

### Poco — X Series
Poco X2, X3, X3 Pro, X4 Pro, X5 Pro, X6 Pro

### Poco — M Series
Poco M2, M2 Pro, M3, M3 Pro, M4 Pro, M5, M5s, M6, M6 Pro, M7 Pro

### Poco — C Series
Poco C3, C31, C40, C55, C61, C65

## Each Model MUST Include

```json
{
  "name": "Xiaomi 14 Ultra",
  "release_year": 2024,
  "image_url": "https://fdn2.gsmarena.com/vv/bigpic/xiaomi-14-ultra.jpg",
  "specs": {
    "display": "6.73\" LTPO AMOLED, 1440×3200, 120Hz",
    "processor": "Snapdragon 8 Gen 3",
    "ram": "12 GB",
    "storage": ["256 GB", "512 GB", "1 TB"],
    "battery": "5300 mAh",
    "os": "Android 14, HyperOS",
    "weight": "224 g",
    "dimensions": "161.4 × 75.3 × 9.2 mm"
  },
  "variants": [
    { "name": "Xiaomi 14 Ultra 256 GB Black", "processor": "Snapdragon 8 Gen 3", "ram": "12 GB", "storage": "256 GB", "color": "Black" }
  ]
}
```

## Rules
1. Every model gets a REAL GSMArena image URL — verify it loads
2. RAM, battery mAh, processor from GSMArena — never null
3. Do NOT skip any model from the checklist
4. If new models released in 2026 aren't listed, add them
5. Deliver as downloadable `phones_xiaomi.json`
