# Tablet Catalog

Generate a JSON file `tablets.json` with ALL brands and models.

## Format

```json
{
  "category": "tablet",
  "brands": [
    {
      "name": "Apple iPad",
      "logo_url": "https://logo.clearbit.com/apple.com",
      "families": [
        { "name": "iPad", "models": [...] },
        { "name": "iPad Pro", "models": [...] }
      ]
    }
  ]
}
```

## Complete Coverage

### Apple iPad
**iPad:** 5th gen through 10th gen, iPad 11th gen
**iPad mini:** 5th gen through 7th gen
**iPad Air:** 3rd gen through 6th gen, iPad Air M2, iPad Air M3
**iPad Pro:** 11" (1st-5th gen), 12.9" (3rd-6th gen), 13" M4

### Samsung Galaxy Tab
**Tab A:** A7 Lite, A8, A9, A9+, A10
**Tab S:** S6 Lite, S7, S7+, S8, S8+, S8 Ultra, S9, S9+, S9 Ultra, S10, S10+, S10 Ultra
**Tab Active:** Active 3, Active 4 Pro, Active 5

### Lenovo Tab
**Tab M:** M8, M9, M10, M11
**Tab P:** P11, P11 Pro, P12 Pro
**Yoga Tab:** Yoga Tab 11, Yoga Tab 13, Yoga Tab Plus

### Huawei MatePad
**MatePad:** 11, 11.5, Pro 12.2, Pro 13.2
**MediaPad:** M5, M6

### Xiaomi Pad
**Xiaomi Pad:** Pad 5, Pad 6, Pad 6 Pro, Pad 7, Pad 7 Pro
**Redmi Pad:** Redmi Pad, Redmi Pad SE

### Amazon Fire
**Fire:** Fire 7, Fire HD 8, Fire HD 10, Fire Max 11

### Microsoft Surface
**Surface Pro:** Pro 7+, Pro 8, Pro 9, Pro 10, Pro 11
**Surface Go:** Go 2, Go 3, Go 4

### Honor Pad
**Pad:** Pad 8, Pad 9, Pad X8, Pad X9

### Condor — add any models

## Each Model
- `release_year`, `image_url` (verified from GSMArena or manufacturer)
- Specs: display, processor, RAM, storage options, battery, OS, weight, dimensions
- At least 2 variants per model

## Delivery
File: `tablets.json`
