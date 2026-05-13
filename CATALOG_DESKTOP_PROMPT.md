# Desktop Unit Catalog

Generate a JSON file `desktop_unit.json` with ALL brands and models.

## Format

```json
{
  "category": "desktop_unit",
  "brands": [
    {
      "name": "Dell",
      "logo_url": "https://logo.clearbit.com/dell.com",
      "families": [
        { "name": "OptiPlex", "models": [...] },
        { "name": "Precision Tower", "models": [...] }
      ]
    }
  ]
}
```

## Complete Coverage

### Custom PCs
**PC assemblé (Custom):** Gaming build, Office build, Workstation build, HTPC — general specs per category

### Dell
**OptiPlex:** 3000, 5000, 7000 series — Micro, Small Form Factor, Tower — all generations
**Inspiron Desktop:** 3000, 5000 series
**Vostro Desktop:** 3000, 5000, 7000 series
**XPS Desktop:** 8950, 8960
**Precision Tower:** 3000, 5000, 7000 series
**Alienware:** Aurora R10-R16, Area-51

### HP
**ProDesk:** 400, 600 series G6-G9
**EliteDesk:** 800 series G6-G9
**Pavilion Desktop:** TP01, TP02 series
**Omen Desktop:** 25L, 30L, 40L, 45L
**Z Workstation:** Z2, Z4, Z6, Z8 G4-G9

### Lenovo
**ThinkCentre:** M70q, M80q, M90q Tiny, M70s, M80s, M90s, M70t, M80t, M90t Gen 3-5
**IdeaCentre:** 3, 5, 7 series
**Legion Tower:** 5, 5i, 7, 7i, 9, 9i

### Acer
**Aspire Desktop:** TC series, XC series
**Predator Orion:** 3000, 5000, 7000, 9000

### Asus
**ROG Desktop:** Strix GA35, GA15, GT35
**ExpertCenter:** D5, D7, S5 series
**ProArt:** PA series

### MSI
**Infinite:** S3, S5
**Trident:** 3, 5, X
**MEG:** Aegis Ti5, Trident X

### Condor — add any models if available

## Each Model
- `release_year`, `image_url` (verified)
- Specs: processor, RAM, storage, GPU, OS, weight, dimensions
- At least 2 variants per model

## Delivery
File: `desktop_unit.json`
