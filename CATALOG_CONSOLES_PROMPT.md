# Console & Handheld Catalog

Generate a JSON file `consoles.json`.

## Format

```json
{
  "category": "console",
  "brands": [
    {
      "name": "Sony PlayStation",
      "logo_url": "https://logo.clearbit.com/playstation.com",
      "families": [
        { "name": "PlayStation 4", "models": [...] },
        { "name": "PlayStation 5", "models": [...] }
      ]
    }
  ]
}
```

## Complete Coverage

### Sony PlayStation
**PS4:** PS4 Slim (all models), PS4 Pro
**PS5:** PS5 Digital, PS5 Disc, PS5 Slim, PS5 Pro
**PS Vita:** PCH-1000, PCH-2000
**PSP:** PSP 1000, 2000, 3000

### Microsoft Xbox
**Xbox One:** Xbox One S, Xbox One X
**Xbox Series:** Xbox Series S, Xbox Series X

### Nintendo
**Switch:** Switch, Switch OLED, Switch Lite
**3DS:** 3DS XL, New 3DS, New 3DS XL, 2DS
**Wii:** Wii, Wii U

### Steam Deck / Handheld PC
**Steam Deck:** LCD (all variants), OLED (all variants)
**Asus ROG Ally:** Z1 Extreme, Z1
**Lenovo Legion Go:** All models
**MSI Claw:** All models

### Retro / Classic
**Atari:** 2600, 7800
**Sega:** Mega Drive / Genesis

## Each Model
- `release_year`, `image_url` (verified)
- Specs: processor, RAM, storage, GPU, weight, dimensions
- Variants: at least 2-3 per model (different storage/configs)

## Delivery
File: `consoles.json`
