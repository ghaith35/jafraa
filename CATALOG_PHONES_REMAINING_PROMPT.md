# Remaining Phone Brands — Complete Catalog

Generate a single JSON file `phones_remaining.json` with ALL brands below.

## Critical Rules

1. Every single model listed here MUST be in the output — do NOT skip any
2. Use web browsing to find models released in 2025-2026 that I haven't listed and ADD them too
3. For older models not listed here that exist on GSMArena under these brands, include them
4. Each model needs: `release_year`, `image_url` (GSMArena verified), full `specs`, storage+color `variants`
5. RAM and battery mAh must never be null — get from GSMArena

## Format

```json
{
  "category": "phone",
  "brands": [
    { "name": "Oppo", "logo_url": "https://logo.clearbit.com/oppo.com", "families": [...] },
    { "name": "Realme", "logo_url": "https://logo.clearbit.com/realme.com", "families": [...] },
    ...
  ]
}
```

## Complete Model Checklist

### Oppo — 4 families
**Find Series:** Find X3, X3 Pro, X5, X5 Pro, X6, X6 Pro, X7, X7 Pro, X7 Ultra, X8, X8 Pro
**Reno Series:** Reno 6, 6 Pro, 7, 7 Pro, 8, 8 Pro, 9, 9 Pro, 10, 10 Pro, 11, 11 Pro, 12, 12 Pro, 13, 13 Pro
**A Series:** A15, A16, A17, A18, A38, A54, A55, A58, A60, A78, A79, A80, A96, A98
**F Series:** F19, F21, F23, F25, F27, F29

### Realme — 5 families
**Number Series:** 8, 8 Pro, 9, 9 Pro, 10, 10 Pro, 11, 11 Pro, 12, 12 Pro, 13, 13 Pro, 14, 14 Pro
**GT Series:** GT, GT 2, GT 2 Pro, GT 3, GT 5, GT 5 Pro, GT 6, GT 6T, GT 7, GT 7 Pro
**C Series:** C11, C15, C20, C21, C25, C30, C31, C33, C35, C51, C53, C55, C61, C63, C65, C67
**Narzo Series:** Narzo 30, 50, 60, 70, N53, N55, N61, N63, N65
**X Series:** X2, X3, X5, X7, X50

### Infinix — 5 families
**Hot Series:** Hot 10, 11, 12, 13, 14, 15, 20, 30, 40, 50
**Note Series:** Note 10, 11, 12, 13, 14, 15, 30, 40, 50
**Zero Series:** Zero 8, X10, 20, 30, 40, 50
**Smart Series:** Smart 5, 6, 7, 8, 9, HD, Pro
**S Series:** S4, S5, S6, S7, S8

### Tecno — 4 families
**Spark Series:** Spark 5, 6, 7, 8, 9, 10, 20, 30, 40, 50
**Camon Series:** Camon 15, 16, 17, 18, 19, 20, 30, 40, 50
**Pop Series:** Pop 2, 3, 4, 5, 6, 7, 8
**Phantom Series:** Phantom X, X2, X2 Pro, V Fold, V Flip, V Fold2

### Itel — 4 families
**A Series:** A23, A24, A25, A26, A27, A32, A33, A34, A36, A39, A40, A46, A48, A49, A50, A56, A58, A59, A60, A65, A70
**P Series:** P33, P35, P36, P37, P38, P40, P55
**S Series:** S16, S17, S18, S23, S24, S25
**Vision Series:** Vision 1, 1 Plus, 3, 5

### Huawei — 4 families
**P Series:** P40, P40 Pro, P50, P50 Pro, P60, P60 Pro, P70, P70 Pro, Pura 70, Pura 70 Pro, Pura 80
**Mate Series:** Mate 40, 40 Pro, 50, 50 Pro, 60, 60 Pro, 70, 70 Pro
**Nova Series:** Nova 9, 10, 11, 12, 13, 14, 15
**Y Series:** Y5, Y6, Y7, Y8, Y9

### Honor — 4 families
**X Series:** X7, X8, X9, X10, X9a, X9b
**Magic Series:** Magic4, Magic4 Pro, Magic5, Magic5 Pro, Magic6, Magic6 Pro, Magic7, Magic7 Pro, V Purse
**Number Series:** 50, 50 Pro, 60, 60 Pro, 70, 70 Pro, 80, 80 Pro, 90, 90 Pro, 100, 100 Pro, 200, 200 Pro, 300, 300 Pro
**Play Series:** Play 30, 40, 50, 60

### Vivo — 5 families
**V Series:** V21, V23, V25, V27, V29, V30, V40, V50
**Y Series:** Y15, Y16, Y17, Y20, Y21, Y22, Y25, Y26, Y27, Y28, Y33, Y35, Y36, Y38, Y50, Y51, Y52, Y53, Y55, Y56, Y73, Y74, Y76, Y77, Y78, Y100
**X Series:** X50, X60, X70, X80, X90, X100, X200
**iQOO Series:** iQOO Z3, Z5, Z6, Z7, Z8, Z9, Neo5, Neo6, Neo7, Neo8, Neo9
**T Series:** T1, T2, T3, T4

### OnePlus — 2 families
**Number Series:** 8, 8 Pro, 8T, 9, 9 Pro, 10 Pro, 11, 12, 13, 14
**Nord Series:** Nord, Nord 2, Nord 2T, Nord CE 2, Nord CE 3, Nord CE 4, Nord 3, Nord 4, Nord N10, Nord N20, Nord N30, Nord N100

### Google — 2 families
**Pixel Series:** Pixel 6, 6 Pro, 7, 7 Pro, 8, 8 Pro, 9, 9 Pro, 9 Pro XL, 10
**A Series:** Pixel 6a, 7a, 8a, 9a

### Nothing — 1 family
**Phone:** Phone 1, Phone 2, Phone 2a, Phone 2a Plus, Phone 3

### Sony — 3 families
**Xperia 1:** Xperia 1 II, 1 III, 1 IV, 1 V, 1 VI
**Xperia 5:** Xperia 5 II, 5 III, 5 IV, 5 V, 5 VI
**Xperia 10:** Xperia 10 II, 10 III, 10 IV, 10 V, 10 VI

### Motorola — 4 families
**Moto G Series:** G10, G20, G30, G40, G50, G60, G70, G71, G72, G73, G82, G84, G85, G100, G200, G24, G34, G45, G55, G75
**Moto E Series:** E7, E20, E30, E32, E40
**Edge Series:** Edge 20, 20 Pro, 30, 30 Pro, 40, 40 Pro, 50, 50 Pro, 50 Fusion, 60
**Razr Series:** Razr 2019, Razr 5G, Razr 2022, Razr 2023, Razr 40, Razr 40 Ultra, Razr 50, Razr 50 Ultra

### Nokia — 3 families
**G Series:** G10, G11, G20, G21, G22, G42, G50, G60, G100
**C Series:** C01, C02, C10, C12, C20, C21, C22, C30, C31, C32, C100, C110, C210
**X Series:** X10, X20, X30, X71

### Asus — 2 families
**ROG Phone:** ROG Phone 3, 5, 5s, 5 Ultimate, 6, 6 Pro, 7, 7 Ultimate, 8, 8 Pro
**ZenFone:** ZenFone 8, 8 Flip, 9, 10, 11 Ultra

### LG — 1 family (legacy, common in repair)
**K Series:** K31, K40, K50, K51, K52, K61, K62, K71, K92, K100, K200
**Velvet:** Velvet 5G
**Wing:** Wing 5G

### ZTE / Nubia — 2 families
**Nubia:** Red Magic 6, 7, 8, 9, 10, Z50, Z60, Z70
**ZTE:** Blade A31, A51, A71, A72

### Condor — 2 families (Algerian brand)
**Allure:** Allure A2, A3, A4, A5, A6, A7
**Griffe:** Griffe G1, G2, G3, G4
**Plume:** Plume P1, P2, P3

### Google Pixel — merge into Google brand (remove separate Google Pixel)

## Post-Generation Checklist
After generating, verify:
- [ ] Oppo Find latest flagships included
- [ ] Realme GT 7 series included
- [ ] Infinix Hot 50 included
- [ ] Tecno Camon 50 included
- [ ] Huawei Pura 80 included
- [ ] Honor 300 series included
- [ ] Vivo iQOO Neo9+ included
- [ ] OnePlus 14 included
- [ ] Nothing Phone 3 included
- [ ] Motorola Edge 60 included
- [ ] ROG Phone 8 Pro included
- [ ] Nubia Red Magic 10 included
- [ ] Any 2026 releases discovered via web browsing added

## Delivery
Deliver as downloadable `phones_remaining.json`
