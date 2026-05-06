# Full Printer Catalog Guide

This update expands the repair catalog for the printer workflow:

```txt
Printer
→ Printer type
→ Brand
→ Model
→ Problems
→ Parts
→ Details
```

Printer types supported:

```txt
Printer → Laser
Printer → Réservoir / Ink Tank
Printer → Cartouche / Ink Cartridge
Printer → Risograph / Digital Duplicator
```

## Catalog architecture

The current Prisma schema already supports:

```txt
DeviceCategory → DeviceBrand → DeviceModelFamily
```

To avoid a heavy migration now, printer type is stored as a model-family prefix:

```txt
Laser | HP LaserJet Pro M404
Ink Tank | Epson EcoTank L3250
Ink Cartridge | Canon PIXMA TS3450
Risograph | RISO SF 5330
```

The repair intake UI filters by this prefix after the user chooses the printer type.

## Files changed

```txt
prisma/catalog/printer-catalog-expanded.ts
prisma/seed-printers-expanded.ts
src/features/repairs/lib/repair-problems.ts
```

## Catalog size

The expanded printer catalog contains about 1,296 practical repair-shop model families:

```txt
Laser: 576
Réservoir / Ink Tank: 216
Cartouche / Ink Cartridge: 359
Risograph / Digital Duplicator: 145
```

Included brands include HP, Canon, Epson, Brother, Samsung, Xerox, Ricoh, Kyocera, Pantum, Lexmark, OKI, Sharp, Toshiba, Konica Minolta, Dell, Panasonic, RISO, Duplo, Gestetner/Nashuatec/Rex-Rotary, Savin, Lanier, Kodak, and Autre.

## Why this design

Laser, ink tank, cartridge inkjet, and risograph machines have different common failures and parts. The repair wizard now separates them before brand/model selection so the technician sees only relevant problems.

Examples:

```txt
Laser problems:
- Toner / cartouche laser
- Drum unit
- Fuser unit
- Transfer belt
- Developer / imaging unit
- Pickup rollers
- Duplex unit
- Firmware / error code

Réservoir problems:
- Clogged printhead
- Waste ink absorber full
- Air in tank / ink lines
- Ink pump / tubes
- Ink tank leak
- Wrong ink / mixed ink

Cartouche problems:
- Cartridge not recognized
- Empty / dry cartridge
- Cartridge refill / leak
- Carriage jam
- Alignment / color quality

Risograph problems:
- Master making error
- Master jam
- Ink drum
- Used master disposal
- Registration / alignment
- Duplicator feed rollers
- Pressure / copy quality
```

## How to apply

Run:

```bash
npm install
npm run db:generate
npm run db:seed
npm run dev
```

Then test:

```txt
/dashboard/repairs/new
```

Choose:

```txt
Printer → Laser
Printer → Réservoir
Printer → Cartouche
Printer → Risograph
```

## Important note

This is a broad practical catalog, not a guarantee of every regional SKU ever sold. The app should still keep the custom model fallback so the shop can create a ticket for a missing or unknown printer model.
