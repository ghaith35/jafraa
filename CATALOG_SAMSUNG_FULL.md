# Samsung Phones — Complete Regeneration

Generate `phones_samsung_full.json` covering EVERY Samsung Galaxy phone model ever released. Do NOT skip any.

## Rules
1. Every single model must be included — from oldest Galaxy to latest 2026
2. Use web browsing to research each model on GSMArena
3. Each model needs: `release_year`, `image_url` (GSMArena, verify it loads), full `specs`, storage+color `variants`
4. RAM and battery mAh from GSMArena — never null
5. Older models are critical — repair shops fix them daily
6. If 2025-2026 models aren't listed, ADD them

## Format

```json
{
  "category": "phone",
  "brands": [
    {
      "name": "Samsung",
      "logo_url": "https://logo.clearbit.com/samsung.com",
      "families": [
        { "name": "Galaxy S", "models": [...] },
        { "name": "Galaxy A", "models": [...] },
        { "name": "Galaxy Z Fold", "models": [...] },
        { "name": "Galaxy Z Flip", "models": [...] },
        { "name": "Galaxy Note", "models": [...] },
        { "name": "Galaxy M", "models": [...] },
        { "name": "Galaxy J", "models": [...] },
        { "name": "Galaxy F", "models": [...] },
        { "name": "Galaxy XCover", "models": [...] }
      ]
    }
  ]
}
```

## Complete Checklist — EVERY model must be included

### Galaxy S Series
S1, S2, S3, S4, S4 Mini, S5, S5 Mini, S6, S6 Edge, S6 Edge+, S7, S7 Edge, S8, S8+, S9, S9+, S10, S10+, S10e, S10 Lite, S20, S20+, S20 Ultra, S20 FE, S21, S21+, S21 Ultra, S21 FE, S22, S22+, S22 Ultra, S23, S23+, S23 Ultra, S23 FE, S24, S24+, S24 Ultra, S24 FE, S25, S25+, S25 Ultra

### Galaxy A Series
A01, A02, A02s, A03, A03s, A04, A04s, A05, A05s, A06, A10, A10s, A11, A12, A13, A13 5G, A14, A14 5G, A15, A15 5G, A16, A16 5G, A20, A20s, A21, A21s, A22, A22 5G, A23, A23 5G, A24, A25 5G, A26 5G, A30, A30s, A31, A32, A32 5G, A33 5G, A34 5G, A35 5G, A36 5G, A40, A41, A42 5G, A50, A50s, A51, A51 5G, A52, A52 5G, A52s 5G, A53 5G, A54 5G, A55 5G, A56 5G, A70, A71, A72, A73 5G, A80, A90 5G

### Galaxy Z Fold Series
Fold (1st), Z Fold 2, Z Fold 3, Z Fold 4, Z Fold 5, Z Fold 6, Z Fold Special Edition

### Galaxy Z Flip Series
Z Flip (1st), Z Flip 3, Z Flip 4, Z Flip 5, Z Flip 6

### Galaxy Note Series
Note 4, Note 5, Note 7, Note 8, Note 9, Note 10, Note 10+, Note 20, Note 20 Ultra

### Galaxy M Series
M01, M02, M10, M11, M12, M13, M14 5G, M15 5G, M20, M21, M30, M30s, M31, M31s, M32, M33 5G, M34 5G, M35 5G, M40, M51, M52 5G, M53 5G, M54 5G, M55 5G

### Galaxy J Series (older — very common in repair)
J1, J2, J2 Prime, J3, J3 Pro, J4, J4+, J5, J5 Pro, J6, J6+, J7, J7 Prime, J7 Pro, J8

### Galaxy F Series
F12, F13, F14 5G, F22, F23 5G, F34 5G, F54 5G, F55 5G

### Galaxy XCover Series
XCover 4, XCover 4s, XCover FieldPro, XCover Pro, XCover 5, XCover 6 Pro, XCover 7

## Each Model
```json
{
  "name": "Samsung Galaxy S24 Ultra",
  "release_year": 2024,
  "image_url": "https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg",
  "specs": {
    "display": "6.8\" Dynamic AMOLED 2X, 1440×3120, 120Hz",
    "processor": "Snapdragon 8 Gen 3",
    "ram": "12 GB",
    "storage": ["256 GB", "512 GB", "1 TB"],
    "battery": "5000 mAh",
    "os": "Android 14, One UI 6.1",
    "weight": "232 g",
    "dimensions": "162.3 × 79 × 8.6 mm"
  },
  "variants": [
    { "name": "Galaxy S24 Ultra 256 GB Titanium Black", "processor": "Snapdragon 8 Gen 3", "ram": "12 GB", "storage": "256 GB", "color": "Titanium Black" }
  ]
}
```

## Delivery
File: `phones_samsung_full.json`
