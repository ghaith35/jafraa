# REPAIRE — Full Device Catalog Generation Prompt for ChatGPT (GPT-4 with Web Browsing)

## Goal

Generate a complete, realistic device catalog covering ALL major consumer electronics brands with their device families, exact models, specs, release years, and image URLs. The output must be a single JSON file that we can import into a PostgreSQL database.

## Context

This is for **REPAIRE**, a repair shop management SaaS for the Algerian market. The catalog is used by repair technicians to look up devices when creating repair tickets. Technicians need to quickly find exact device models with specs.

**Current DB schema** (3-level hierarchy):
```
DeviceCategory (e.g. "phone", "laptop", "tablet")
  → DeviceBrand (e.g. "Apple", "Samsung", "HP")
    → DeviceModelFamily (e.g. "Galaxy S", "MacBook Pro", "Latitude")
```

A new 4th level `DeviceModel` is being added:
```
→ DeviceModel (e.g. "Galaxy S24 Ultra", "MacBook Pro 16\" M3 Pro", "Latitude 7440")
```

## Output Format

Generate a single JSON file. Structure:

```json
{
  "generated_at": "2026-05-13",
  "source": "GPT-4 with web browsing — real data from GSMArena, NotebookCheck, Wikipedia, manufacturer sites",
  "categories": [
    {
      "key": "phone",
      "brands": [
        {
          "name": "Apple",
          "logo_url": "https://logo.clearbit.com/apple.com",
          "families": [
            {
              "name": "iPhone 16",
              "models": [
                {
                  "name": "iPhone 16",
                  "release_year": 2024,
                  "image_url": "...",
                  "specs": {
                    "display": "6.1\" OLED, 2556×1179",
                    "processor": "A18 Bionic",
                    "ram": "8 GB",
                    "storage": ["128 GB", "256 GB", "512 GB"],
                    "battery": "3561 mAh",
                    "os": "iOS 18",
                    "weight": "170 g",
                    "dimensions": "147.6 × 71.6 × 7.8 mm"
                  },
                  "variants": [
                    { "name": "iPhone 16 128GB", "storage": "128 GB", "color": "Black" },
                    { "name": "iPhone 16 256GB", "storage": "256 GB", "color": "White" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
```

## Image Requirements

For `image_url`:
- Use **Wikimedia Commons** URLs (free, stable, CDN-hosted) e.g., `https://upload.wikimedia.org/wikipedia/commons/...`
- Use **wikidata** image property (P18) values
- Fallback: `https://fdn2.gsmarena.com/vv/bigpic/...` (GSMArena images)
- Images must be real device photos, not logos
- Aim for front-facing product shot (250×250 to 800×800)

For `logo_url`:
- Use `https://logo.clearbit.com/{branddomain}` (e.g., `https://logo.clearbit.com/apple.com`)
- This returns real PNG logos on-the-fly, no storage needed

## Coverage Requirements

### PHONES — Cover ALL of these completely:

| Brand | Families to cover | Min models |
|-------|------------------|------------|
| Apple | iPhone 14, 15, 16, SE | all models + variants |
| Samsung | Galaxy S, A, Z, M, Note, XCover | 5-10 models per family |
| Xiaomi | Number, T, Mix, Civi | 5 per family |
| Redmi | Number, Note, A, K | 5 per family |
| Poco | C, M, X, F | 3-5 per family |
| Oppo | A, Reno, Find | 3-5 per family |
| Realme | C, Number, Narzo, GT | 3-5 per family |
| Infinix | Smart, Hot, Note, Zero | 3-5 per family |
| Tecno | Spark, Camon, Pop, Pova | 3-5 per family |
| Itel | A, P, S | 3 per family |
| Huawei | P, Mate, Nova, Y | 3-5 per family |
| Honor | X, Magic, Number | 3-5 per family |
| Vivo | Y, V, X, iQOO | 3-5 per family |
| OnePlus | Number, Nord | 3-5 per family |
| Google | Pixel | all models |
| Nothing | Phone | all models |
| Sony | Xperia 1, 5, 10 | 2-3 per family |
| Motorola | Moto G, E, Edge | 3-5 per family |
| Nokia | G, C, X | 2-3 per family |
| Asus | ROG Phone, Zenfone | 2-3 per family |
| Condor | Allure, Griffe, Plume | 2 per family |

### LAPTOPS — Cover ALL of these completely:

| Brand | Families to cover | Min models |
|-------|------------------|------------|
| Apple | MacBook Air, MacBook Pro 14", MacBook Pro 16" | all M-series models |
| Dell | Latitude (5xxx, 7xxx), Inspiron, XPS, Precision, Alienware | 5-8 per family |
| HP | ProBook, EliteBook, Pavilion, Envy, Spectre, Omen, Victus, ZBook | 5-8 per family |
| Lenovo | ThinkPad (T, X, L, E), IdeaPad, Legion, Yoga, ThinkBook | 5-8 per family |
| Asus | ZenBook, VivoBook, TUF Gaming, ROG (Zephyrus, Strix) | 5-8 per family |
| Acer | Aspire, Swift, Nitro, Predator, TravelMate | 3-5 per family |
| MSI | Modern, Prestige, Katana, Stealth, Raider, Sword | 3-5 per family |
| Samsung | Galaxy Book, Galaxy Book Pro, Galaxy Book Ultra | 3-5 per family |
| Huawei | MateBook D, MateBook X Pro | 3-5 per family |
| Microsoft | Surface Laptop, Surface Pro | 3-5 per family |
| Razer | Blade, Blade Stealth | 2-3 per family |
| Gigabyte | AORUS, AERO | 2-3 per family |
| LG | Gram | 2-3 per family |
| Xiaomi | Mi Notebook, RedmiBook | 2-3 per family |
| Honor | MagicBook | 2-3 per family |
| Condor | CloudBook, Terra, Neo | 2 per family |
| Thomson | Neo, Hero, Prestige | 2 per family |

### TABLETS
| Brand | Families | Min models |
|-------|----------|------------|
| Apple iPad | iPad, iPad mini, iPad Air, iPad Pro | 3-5 per family |
| Samsung | Tab A, Tab S, Tab Active | 3-5 per family |
| Lenovo | Tab M, Tab P, Yoga Tab | 2-3 per family |
| Huawei | MatePad, MediaPad | 2-3 per family |
| Xiaomi | Xiaomi Pad, Redmi Pad | 2-3 per family |
| Amazon | Fire 7, Fire HD 8, Fire HD 10 | 2-3 per family |
| Microsoft | Surface Pro, Surface Go | 2-3 per family |

### PRINTERS — LASER
| Brand | Families | Min models |
|-------|----------|------------|
| HP | LaserJet, LaserJet Pro, Neverstop Laser | 5-8 per family |
| Canon | i-SENSYS, imageCLASS | 3-5 per family |
| Brother | HL, DCP, MFC | 3-5 per family |
| Samsung | Xpress, ProXpress | 3-5 per family |
| Xerox | Phaser, WorkCentre | 3-5 per family |
| Ricoh | SP Series, IM Series | 3-5 per family |
| Kyocera | Ecosys, TASKalfa | 3-5 per family |
| Pantum | P Series, M Series | 2-3 per family |
| Lexmark | MS, MX Series | 2-3 per family |

### PRINTERS — CARTRIDGE / INK
| Brand | Families | Min models |
|-------|----------|------------|
| Epson | EcoTank, L Series, WorkForce, Expression | 5-8 per family |
| Canon | PIXMA G, PIXMA, MAXIFY | 5-8 per family |
| HP | DeskJet, OfficeJet, Smart Tank, ENVY | 5-8 per family |
| Brother | MFC, DCP, InkBenefit | 3-5 per family |

### PRINTERS — RISOGRAFIT
| Brand | Families | Min models |
|-------|----------|------------|
| Ricoh | Riso | 2-3 models |
| Duplo | DP Series | 2-3 models |

### CONSOLES & HANDHELDS
| Brand | Families | Min models |
|-------|----------|------------|
| Sony | PS4, PS5, PS Vita | all models |
| Microsoft | Xbox One, Xbox Series S/X | all models |
| Nintendo | Switch, 3DS | all models |
| Steam Deck | Steam Deck | all models |
| Asus | ROG Ally | all models |
| Lenovo | Legion Go | all models |
| MSI | Claw | all models |

### DESKTOPS
| Brand | Families | Min models |
|-------|----------|------------|
| HP | Pavilion, ProDesk, EliteDesk, All-in-One | 3-5 per family |
| Dell | OptiPlex, Inspiron, Precision, Alienware | 3-5 per family |
| Lenovo | ThinkCentre, IdeaCentre, Legion Tower | 3-5 per family |
| Apple | iMac, Mac mini, Mac Studio, Mac Pro | all models |
| Custom | Gaming, Office, Workstation builds | general specs |

## Variant Rules

For laptops: Each model may have **processor variants** (Intel i5/i7/i9, AMD Ryzen 5/7/9) and **RAM variants** (8/16/32/64 GB). Create separate variants for each:
```json
{
  "name": "Dell Latitude 7440",
  "variants": [
    { "name": "Dell Latitude 7440 i5-1345U 16GB", "processor": "Intel Core i5-1345U", "ram": "16 GB" },
    { "name": "Dell Latitude 7440 i7-1365U 16GB", "processor": "Intel Core i7-1365U", "ram": "16 GB" },
    { "name": "Dell Latitude 7440 i7-1365U 32GB", "processor": "Intel Core i7-1365U", "ram": "32 GB" }
  ]
}
```

For phones: Create variants for **storage** (128/256/512 GB) and **colors**.

## Image Source Strategy

For each model, find the best image URL in this priority order:

1. **Wikimedia Commons**: `https://commons.wikimedia.org/wiki/File:...`
   - Search via: `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&titles=MODEL_NAME&pithumbsize=500&format=json`
   - Use first result, convert to direct URL: `https://upload.wikimedia.org/wikipedia/commons/...`

2. **GSMArena** (phones only): `https://fdn2.gsmarena.com/vv/bigpic/MODEL-CODE.jpg`
   - Example: Samsung Galaxy S24 Ultra → `https://fdn2.gsmarena.com/vv/bigpic/samsung-galaxy-s24-ultra-5g.jpg`

3. **Manufacturer website** (fallback)
   - Apple: `https://store.storeimages.cdn-apple.com/...`
   - Dell: `https://i.dell.com/is/image/DellContent/...`

If no image found after trying, use a placeholder from `https://placehold.co/400x400/e2e8f0/64748b?text=MODEL_NAME`

## Delivery Format

Provide the output as:
1. A JSON file split by category (phones.json, laptops.json, tablets.json, printers_laser.json, printers_cartridge.json, printers_risograph.json, consoles.json, desktops.json)
2. Each file follows the same structure
3. Files should be downloadable via a link (Google Drive, Dropbox, or direct pastebin)

## Technical Notes

- Total estimated output: 5,000-10,000 device models
- Images should be real product photos, not renders or logos
- Release years should be accurate (2019-2026 range)
- Specs should match official manufacturer specs
- Use `null` for unknown specs rather than guessing
- All text in English (names, specs) — we handle Arabic/French in the UI layer
- Variants should capture the most common configurations, not every possible build

## How to proceed

1. Research each brand and family using web browsing
2. For each model, find specifications, release year, and image
3. Generate the JSON files
4. Make files available for download
5. I confirm receipt, then you can continue with any corrections

Start with PHONES first (largest category with most data publicly available), then LAPTOPS, then the rest.
Image validation:
For each image_url you include, verify the link actually loads (HTTP 200). Do NOT guess URLs — if you can't confirm an image exists, use the placeholder https://placehold.co/400x400/e2e8f0/64748b?text={MODEL_NAME} instead. Broken images make the catalog look unprofessional, so quality-check every single one.