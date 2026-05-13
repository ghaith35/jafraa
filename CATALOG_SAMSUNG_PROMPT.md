# Samsung Phones Catalog — Full Generation

## Context

You are building a device catalog for a repair shop management app. Technicians use this to look up phones during repairs. Every model needs real, accurate specs and a verified product image. This is the **second brand** after Apple.

## Output Format

Generate a JSON file named `phones_samsung.json` with this structure:

```json
{
  "category": "phone",
  "brands": [
    {
      "name": "Samsung",
      "logo_url": "https://logo.clearbit.com/samsung.com",
      "families": [
        {
          "name": "Galaxy S",
          "models": [ ... ]
        }
      ]
    }
  ]
}
```

## Coverage — All Galaxy Families

### Galaxy S Series (flagship, most repaired)
- Galaxy S21, S21+, S21 Ultra, S21 FE
- Galaxy S22, S22+, S22 Ultra
- Galaxy S23, S23+, S23 Ultra, S23 FE
- Galaxy S24, S24+, S24 Ultra, S24 FE
- Galaxy S25, S25+, S25 Ultra

### Galaxy A Series (budget, most common in repair)
- A10 through A55 — every generation (A10, A10s, A11, A12, A13, A14, A15, A16, A20, A21, A22, A23, A24, A25, A30, A31, A32, A33, A34, A35, A40, A41, A42, A50, A51, A52, A53, A54, A55)
- Include all sub-variants (e.g. A52, A52s, A52 5G)

### Galaxy Z Fold Series
- Galaxy Z Fold 2, Fold 3, Fold 4, Fold 5, Fold 6, Fold Special Edition

### Galaxy Z Flip Series
- Galaxy Z Flip 3, Flip 4, Flip 5, Flip 6

### Galaxy Note Series
- Galaxy Note 10, Note 10+, Note 20, Note 20 Ultra

### Galaxy M Series
- Galaxy M10, M20, M30, M31, M32, M33, M34, M35, M51, M52, M53, M54, M55

### Galaxy J Series (older but common in repair)
- Galaxy J2, J2 Prime, J3, J4, J4+, J5, J6, J7, J7 Prime, J8

### Galaxy XCover Series
- Galaxy XCover FieldPro, XCover 5, XCover 6 Pro, XCover 7

## Each Model MUST Include

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
    { "name": "Galaxy S24 Ultra 256 GB Titanium Black", "processor": "Snapdragon 8 Gen 3", "ram": "12 GB", "storage": "256 GB", "color": "Titanium Black" },
    { "name": "Galaxy S24 Ultra 256 GB Titanium Gray", "processor": "Snapdragon 8 Gen 3", "ram": "12 GB", "storage": "256 GB", "color": "Titanium Gray" },
    { "name": "Galaxy S24 Ultra 512 GB Titanium Black", "processor": "Snapdragon 8 Gen 3", "ram": "12 GB", "storage": "512 GB", "color": "Titanium Black" }
  ]
}
```

### Rules for every model
1. `image_url` — use `https://fdn2.gsmarena.com/vv/bigpic/...` format and **verify it loads** (HTTP 200)
2. `specs.ram` — get from GSMArena, never null
3. `specs.battery` — always mAh (e.g. "5000 mAh"), never "hours"
4. `specs.processor` — exact chipset name (e.g. "Snapdragon 8 Gen 3", "Exynos 2400")
5. `specs.os` — include Android version + One UI version (e.g. "Android 14, One UI 6.1")
6. `variants` — at least 2-3 storage × color combinations per model (more for popular models)
7. `name` — include "Samsung Galaxy" prefix (e.g. "Samsung Galaxy S24 Ultra")
8. Do NOT skip older models just because they're old — repair shops fix them daily
9. Do NOT include fake models that don't exist

## Image Source Rules
- PRIMARY: GSMArena `https://fdn2.gsmarena.com/vv/bigpic/...` — has every Samsung phone
- Verify each URL actually loads before including it
- NEVER use placeholder URLs or guessed URLs

## Delivery
- Generate the complete JSON file
- Make it available as a downloadable file
- File name: `phones_samsung.json`

## Next Steps
After Samsung, I will ask you to continue with: Xiaomi, Redmi, Poco, Oppo, Realme, Infinix, Tecno, Itel, Huawei, Honor, Vivo, OnePlus, Google, Nothing, Sony, Motorola, Nokia, Asus, Condor — one brand at a time.
