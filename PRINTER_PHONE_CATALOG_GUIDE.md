# Expanded Phone + Printer Catalog Guide

This build adds two global catalog seed modules:

- `prisma/catalog/phone-catalog-expanded.ts`
- `prisma/catalog/printer-catalog-expanded.ts`

And two seed functions:

- `prisma/seed-phones-expanded.ts`
- `prisma/seed-printers-expanded.ts`

`prisma/seed.ts` now runs them after the base catalog and expanded laptop catalog.

## Printer workflow

Printers now use a separate guided workflow:

```txt
Printer
→ Printer type
→ Brand
→ Model
→ Problems
→ Parts
→ Details
```

Printer types:

```txt
Ink cartridge / Cartouche
Ink tank / Réservoir
Laser
Risograph / Digital duplicator
```

The current database schema only has `DeviceCategory → DeviceBrand → DeviceModelFamily`, so printer technology is stored in the model-family name prefix:

```txt
Laser | HP LaserJet Pro M404
Ink Tank | Epson EcoTank L3250
Ink Cartridge | Canon PIXMA TS3150
Risograph | RISO SF 5330
```

The UI hides the prefix and uses it only for filtering and problem selection.

## Printer-specific problems

The repair wizard now shows different problem tiles depending on printer type.

Examples:

```txt
Ink cartridge:
- Cartridge not recognized
- Cartridge refill / leak
- Clogged printhead
- Waste ink / absorber full

Ink tank:
- Air in tank / ink lines
- Ink pump / tubes
- Clogged printhead
- Waste ink / absorber full

Laser:
- Toner cartridge
- Drum unit
- Fuser unit
- Transfer belt
- Pickup rollers

Risograph / duplicator:
- Master making error
- Ink drum
- Used master disposal
- Registration / alignment
```

## Phone catalog

The phone seed adds a large repair-shop catalog with common models for:

```txt
Apple, Samsung, Xiaomi, Redmi, Poco, Oppo, Realme, Vivo, Huawei, Honor,
Infinix, Tecno, Itel, Nokia, Motorola, OnePlus, Google Pixel, Sony, LG,
ZTE/Nubia, Condor, and custom/legacy brands.
```

## How to apply

After extracting the ZIP, run:

```bash
npm install
npm run db:generate
npm run db:seed
npm run dev
```

If the database already has old seed rows, rerunning `npm run db:seed` is safe. The seed uses find/create/update logic and keeps existing tenant/store data.

## Important limitation

This is a large repair-shop catalog, not a guaranteed list of every SKU ever made. The app must keep the custom model fallback. If a model is missing, the shop can still use custom brand/model text in the repair wizard.
