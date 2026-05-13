# All-in-One PC Catalog

Generate a JSON file `all_in_one.json` with ALL brands and models.

## Format

```json
{
  "category": "all_in_one",
  "brands": [
    {
      "name": "Apple",
      "logo_url": "https://logo.clearbit.com/apple.com",
      "families": [
        { "name": "iMac", "models": [...] },
        { "name": "iMac Pro", "models": [...] }
      ]
    }
  ]
}
```

## Complete Coverage

### Apple
**iMac:** 21.5" (2017-2019), 24" M1 (2021), 24" M3 (2023), 24" M4 (2024), 27" (2019-2020), Retina 5K 27" (2017-2020)
**iMac Pro:** 27" (2017-2021)

### HP
**All-in-One:** 24, 27, 32 series — all generations
**Envy All-in-One:** 24, 27, 32 series
**Pavilion All-in-One:** 24, 27 series

### Dell
**Inspiron All-in-One:** 24 3000, 24 5000, 27 5000, 27 7000 series
**XPS All-in-One:** 27 series
**OptiPlex All-in-One:** 7410, 7420

### Lenovo
**IdeaCentre AIO:** 3, 5, 7 series — 24", 27"
**ThinkCentre AIO:** M70a, M80a, M90a Gen 3-5

### Microsoft
**Surface Studio:** 1, 2, 3

### Asus
**Vivo AIO:** V200, V220, V240 series
**Zen AIO:** Z240, Z272

### Acer
**Aspire All-in-One:** C22, C24, C27, C32 series

## Each Model
- `release_year`, `image_url` (verified)
- Specs: display size/resolution, processor, RAM, storage options, OS, weight, dimensions
- At least 2 variants per model (different CPU/RAM configs)

## Delivery
File: `all_in_one.json`
