# HP Laptops Catalog

Generate a JSON file `laptops_hp.json` with all HP laptop models.

```json
{
  "category": "laptop",
  "brands": [
    {
      "name": "HP",
      "logo_url": "https://logo.clearbit.com/hp.com",
      "families": [
        { "name": "ProBook", "models": [...] },
        { "name": "EliteBook", "models": [...] },
        { "name": "Pavilion", "models": [...] },
        { "name": "Envy", "models": [...] },
        { "name": "Spectre", "models": [...] },
        { "name": "Omen", "models": [...] },
        { "name": "Victus", "models": [...] }
      ]
    }
  ]
}
```

## Complete Model Checklist — every single model must be included

### ProBook
440 G8, G9, G10, G11 — 445 G8, G9, G10, G11 — 450 G8, G9, G10, G11 — 455 G8, G9, G10, G11

### EliteBook
830 G8, G9, G10, G11 — 835 G8, G9, G10 — 840 G8, G9, G10, G11 — 845 G8, G9, G10, G11 — 860 G9, G10, G11 — 865 G9, G10, G16

### Pavilion
14 series, 15 series, 16 series — Plus 14, Plus 15 — x360 14, x360 15

### Envy
13-ba, 14-eb, 15-ep, 16-h — x360 13, x360 15, x360 16

### Spectre
x360 14, x360 16 — Foldable PC

### Omen
15, 16, 17 — Transcend 14, Transcend 16

### Victus
15, 16

## Each model
- `release_year`, `image_url` (verified from HP site or NotebookCheck)
- Full specs: display, processor, RAM, storage options, battery, OS, weight, dimensions
- Variants: at least 2-3 processor + RAM + storage configurations per model
- Use web browsing to find 2024-2025 models not listed

Deliver as `laptops_hp.json`.
