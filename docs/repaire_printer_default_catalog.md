# Repaire Printer Default Catalog

Purpose: default printer catalog for repair workflow, inventory, parts, and consumables.

Target:
- Cover around 70%+ of common printer repair cases by default.
- Keep the flow smooth.
- Let the shop add custom brand/model/problem/part anytime.

UX rule:
- Flow: Printer → Printer type → Brand → Model family → Model/generation → exact model typed manually if needed.
- Do not force every exact printer reference.
- Always show:
  - Search
  - Other brand
  - Other model
  - Add custom brand/model
  - Add manual problem
  - Add manual part/consumable

Printer type separation:
- Laser printer
- Inkjet / Tank printer

Data strategy:
- Global default catalog = seed data managed by super admin.
- Store custom catalog = tenant/store-specific additions.
- Defaults are editable only by super admin.
- Store additions should not modify global catalog.

---

# 1. Printer Brand List

Priority brands:

- HP
- Canon
- Epson
- Brother
- Samsung
- Xerox
- Ricoh
- Kyocera
- Lexmark
- Pantum
- Konica Minolta
- Toshiba
- Sharp
- OKI
- Zebra
- Dymo
- Other

Extended brands:

- Dell
- Lenovo
- Fujitsu
- Panasonic
- Citizen
- TSC
- Bixolon
- Star Micronics
- Godex
- Honeywell
- Intermec
- Other

Priority UX order:

1. HP
2. Canon
3. Epson
4. Brother
5. Samsung
6. Xerox
7. Ricoh
8. Kyocera
9. Lexmark
10. Pantum
11. Konica Minolta
12. Zebra / Dymo
13. Other

---

# 2. Printer Types

## Laser printer

Use for:
- black/white laser
- color laser
- multifunction laser
- office copy/print/scan devices

Common subtypes:
- Mono laser printer
- Color laser printer
- Laser multifunction printer
- Laser copier/MFP
- Network laser printer

## Inkjet / Tank printer

Use for:
- ink cartridge printers
- refillable tank printers
- photo printers
- multifunction inkjet devices

Common subtypes:
- Inkjet cartridge printer
- Ink tank printer
- EcoTank / MegaTank / Smart Tank style printer
- Photo inkjet printer
- Inkjet multifunction printer

---

# 3. HP Printer Catalog

## HP LaserJet

- LaserJet
- LaserJet Pro
- LaserJet Enterprise
- LaserJet Ultra
- LaserJet Managed
- LaserJet M Series
- LaserJet P Series
- LaserJet 1000 Series
- LaserJet 1100 Series
- LaserJet 1200 Series
- LaserJet 1300 Series
- LaserJet 1500 Series
- LaserJet 2000 Series
- LaserJet 3000 Series
- LaserJet 4000 Series
- LaserJet 5000 Series
- Other HP LaserJet

## HP LaserJet Pro common models/families

- LaserJet Pro M12
- LaserJet Pro M15
- LaserJet Pro M17
- LaserJet Pro M26
- LaserJet Pro M28
- LaserJet Pro M29
- LaserJet Pro M102
- LaserJet Pro M104
- LaserJet Pro M118
- LaserJet Pro M130
- LaserJet Pro M132
- LaserJet Pro M148
- LaserJet Pro M203
- LaserJet Pro M227
- LaserJet Pro MFP M125
- LaserJet Pro MFP M126
- LaserJet Pro MFP M127
- LaserJet Pro MFP M128
- LaserJet Pro MFP M130
- LaserJet Pro MFP M132
- LaserJet Pro MFP M135
- LaserJet Pro MFP M137
- LaserJet Pro MFP M148
- LaserJet Pro MFP M227
- LaserJet Pro MFP M428
- LaserJet Pro MFP M479
- Other LaserJet Pro

## HP Color LaserJet

- Color LaserJet
- Color LaserJet Pro
- Color LaserJet Enterprise
- Color LaserJet CP Series
- Color LaserJet CM Series
- Color LaserJet M Series
- Other HP Color LaserJet

## HP DeskJet

- DeskJet
- DeskJet Ink Advantage
- DeskJet Plus
- DeskJet 1000 Series
- DeskJet 2000 Series
- DeskJet 3000 Series
- DeskJet 3700 Series
- DeskJet 4100 Series
- DeskJet 5000 Series
- Other HP DeskJet

## HP OfficeJet

- OfficeJet
- OfficeJet Pro
- OfficeJet 4000 Series
- OfficeJet 5000 Series
- OfficeJet 6000 Series
- OfficeJet 7000 Series
- OfficeJet 8000 Series
- OfficeJet 9000 Series
- Other HP OfficeJet

## HP Smart Tank

- Smart Tank 500
- Smart Tank 515
- Smart Tank 516
- Smart Tank 530
- Smart Tank 580
- Smart Tank 600
- Smart Tank 615
- Smart Tank 650
- Smart Tank 670
- Smart Tank 720
- Smart Tank 750
- Smart Tank 790
- Other HP Smart Tank

## HP Ink Tank

- Ink Tank 315
- Ink Tank 319
- Ink Tank 415
- Ink Tank 419
- Wireless Ink Tank
- Other HP Ink Tank

## HP Envy / Photosmart

- Envy
- Envy Photo
- Photosmart
- Photosmart Plus
- Other HP Envy/Photosmart

---

# 4. Canon Printer Catalog

## Canon PIXMA

- PIXMA
- PIXMA MG Series
- PIXMA MP Series
- PIXMA MX Series
- PIXMA TS Series
- PIXMA TR Series
- PIXMA iP Series
- PIXMA G Series
- PIXMA E Series
- Other Canon PIXMA

## Canon PIXMA G / MegaTank

- PIXMA G1000
- PIXMA G1010
- PIXMA G1020
- PIXMA G2000
- PIXMA G2010
- PIXMA G2020
- PIXMA G3000
- PIXMA G3010
- PIXMA G3020
- PIXMA G3400
- PIXMA G3410
- PIXMA G4000
- PIXMA G4010
- PIXMA G5000
- PIXMA G6000
- PIXMA G7000
- Other Canon G / MegaTank

## Canon i-SENSYS / Laser

- i-SENSYS
- i-SENSYS LBP
- i-SENSYS MF
- i-SENSYS LBP 6000 Series
- i-SENSYS LBP 6200 Series
- i-SENSYS LBP 6600 Series
- i-SENSYS MF 300 Series
- i-SENSYS MF 400 Series
- i-SENSYS MF 600 Series
- i-SENSYS MF 700 Series
- Other Canon i-SENSYS

## Canon imageCLASS

- imageCLASS LBP
- imageCLASS MF
- imageCLASS D Series
- imageCLASS Color
- Other Canon imageCLASS

## Canon imageRUNNER

- imageRUNNER
- imageRUNNER ADVANCE
- imageRUNNER C Series
- imageRUNNER 2000 Series
- imageRUNNER 3000 Series
- imageRUNNER 4000 Series
- Other Canon imageRUNNER

---

# 5. Epson Printer Catalog

## Epson EcoTank

- EcoTank L Series
- EcoTank L100
- EcoTank L110
- EcoTank L120
- EcoTank L130
- EcoTank L200
- EcoTank L210
- EcoTank L220
- EcoTank L310
- EcoTank L3150
- EcoTank L3210
- EcoTank L3250
- EcoTank L3260
- EcoTank L355
- EcoTank L365
- EcoTank L380
- EcoTank L382
- EcoTank L385
- EcoTank L386
- EcoTank L395
- EcoTank L405
- EcoTank L4150
- EcoTank L4160
- EcoTank L4260
- EcoTank L5190
- EcoTank L5290
- EcoTank L805
- EcoTank L810
- EcoTank L850
- EcoTank L1800
- Other Epson EcoTank

## Epson WorkForce

- WorkForce
- WorkForce Pro
- WorkForce WF Series
- WorkForce WF-200 Series
- WorkForce WF-2500 Series
- WorkForce WF-2600 Series
- WorkForce WF-2800 Series
- WorkForce WF-3000 Series
- WorkForce WF-7000 Series
- Other Epson WorkForce

## Epson Expression

- Expression Home
- Expression Premium
- Expression Photo
- XP Series
- Other Epson Expression

## Epson Stylus

- Stylus
- Stylus Photo
- Stylus Office
- SX Series
- TX Series
- Other Epson Stylus

## Epson Dot Matrix / POS

- LX Series
- LQ Series
- FX Series
- TM Series
- Other Epson Dot Matrix/POS

---

# 6. Brother Printer Catalog

## Brother Laser

- HL Series
- HL-L Series
- HL-1000 Series
- HL-1100 Series
- HL-1200 Series
- HL-L2300 Series
- HL-L2350
- HL-L2370
- HL-L5000 Series
- HL-L6000 Series
- Other Brother HL

## Brother MFC / DCP Laser

- DCP Series
- DCP-L Series
- DCP-L2500 Series
- DCP-L2510
- DCP-L2530
- DCP-L2540
- DCP-L2550
- MFC Series
- MFC-L Series
- MFC-L2700 Series
- MFC-L2710
- MFC-L2730
- MFC-L2750
- MFC-L5000 Series
- Other Brother MFC/DCP Laser

## Brother Inkjet / InkBenefit

- DCP-T Series
- DCP-T300
- DCP-T500
- DCP-T510
- DCP-T520
- DCP-T710
- DCP-T720
- DCP-T820
- MFC-T Series
- MFC-T800
- MFC-T810
- MFC-T910
- MFC-T920
- Other Brother Inkjet

---

# 7. Samsung Printer Catalog

Note:
Samsung printer support/market may appear under HP ownership in some contexts, but keep Samsung as brand for repair shops.

## Samsung Laser

- ML Series
- ML-1600 Series
- ML-1660
- ML-1860
- ML-2160
- ML-2525
- ML-2850
- ML-3310
- ML-3710
- Other Samsung ML

## Samsung MFP

- SCX Series
- SCX-3200
- SCX-3400
- SCX-4200
- SCX-4300
- SCX-4600
- SCX-4623
- SCX-4729
- SCX-4833
- Other Samsung SCX

## Samsung Color Laser

- CLP Series
- CLX Series
- Xpress Series
- Xpress M Series
- Xpress C Series
- Other Samsung Color/Xpress

---

# 8. Xerox Printer Catalog

## Xerox Phaser

- Phaser
- Phaser 3000 Series
- Phaser 6000 Series
- Phaser 6500 Series
- Other Xerox Phaser

## Xerox WorkCentre

- WorkCentre
- WorkCentre 3000 Series
- WorkCentre 5000 Series
- WorkCentre 6000 Series
- WorkCentre 7000 Series
- Other Xerox WorkCentre

## Xerox VersaLink / AltaLink

- VersaLink B Series
- VersaLink C Series
- AltaLink B Series
- AltaLink C Series
- Other Xerox VersaLink/AltaLink

---

# 9. Ricoh Printer Catalog

## Ricoh Aficio / SP

- Aficio
- Aficio MP
- Aficio SP
- SP 100 Series
- SP 200 Series
- SP 300 Series
- SP 400 Series
- SP 500 Series
- Other Ricoh SP/Aficio

## Ricoh IM / MP

- MP Series
- IM Series
- IM C Series
- IM 300 Series
- IM 400 Series
- IM 500 Series
- IM 2000 Series
- IM 3000 Series
- IM 4000 Series
- Other Ricoh IM/MP

---

# 10. Kyocera Printer Catalog

- ECOSYS
- ECOSYS FS Series
- ECOSYS P Series
- ECOSYS M Series
- TASKalfa
- TASKalfa 1800 Series
- TASKalfa 2200 Series
- TASKalfa 3000 Series
- TASKalfa 4000 Series
- Other Kyocera

---

# 11. Lexmark Printer Catalog

- Lexmark MS Series
- Lexmark MX Series
- Lexmark CS Series
- Lexmark CX Series
- Lexmark E Series
- Lexmark T Series
- Lexmark X Series
- Other Lexmark

---

# 12. Pantum Printer Catalog

- Pantum P Series
- Pantum P2200
- Pantum P2500
- Pantum P3300
- Pantum M Series
- Pantum M6500
- Pantum M6550
- Pantum M6600
- Pantum BM Series
- Pantum BP Series
- Other Pantum

---

# 13. Konica Minolta Printer Catalog

- bizhub C Series
- bizhub 200 Series
- bizhub 300 Series
- bizhub 400 Series
- bizhub 500 Series
- bizhub 700 Series
- bizhub PRO
- Other Konica Minolta

---

# 14. Toshiba Printer Catalog

- e-STUDIO
- e-STUDIO 200 Series
- e-STUDIO 250 Series
- e-STUDIO 300 Series
- e-STUDIO 400 Series
- e-STUDIO 500 Series
- e-STUDIO Color
- Other Toshiba e-STUDIO

---

# 15. Sharp Printer Catalog

- AR Series
- MX Series
- BP Series
- AL Series
- Other Sharp

---

# 16. OKI Printer Catalog

- OKI B Series
- OKI C Series
- OKI MC Series
- OKI MB Series
- OKI Dot Matrix
- Other OKI

---

# 17. Label / Thermal Printer Catalog

## Zebra

- GK Series
- GX Series
- ZD Series
- ZT Series
- LP Series
- TLP Series
- Other Zebra

## Dymo

- LabelWriter
- LabelManager
- LabelPoint
- Other Dymo

## Bixolon

- SLP Series
- SRP Series
- XD Series
- Other Bixolon

## TSC

- TDP Series
- TTP Series
- TE Series
- MH Series
- Other TSC

## Other label/thermal

- Godex
- Citizen
- Star Micronics
- Honeywell
- Intermec
- Other thermal printer

---

# 18. Common Printer Problems

## General / power

- Printer does not power on
- Random shutdown
- Power supply problem
- Error code displayed
- Printer freezes
- Buttons/control panel not working
- Firmware problem

## Paper feed

- Paper jam
- Paper not feeding
- Multiple pages feeding
- Paper pickup problem
- Paper tray issue
- Paper output issue
- Roller worn
- Pickup roller worn
- Separation pad worn

## Print quality

- Blank page
- Faded print
- Lines on print
- Black spots
- Smudges
- Dirty print
- Missing colors
- Wrong colors
- Ghosting
- Repeated marks
- Toner not fixing
- Ink streaks
- Banding
- Horizontal lines
- Vertical lines

## Inkjet / Tank problems

- Ink not flowing
- Printhead clogged
- Printhead damaged
- Air in ink tubes
- Ink leakage
- Ink absorber full
- Waste ink pad full
- Cartridge not detected
- Ink level not detected
- Refill issue
- Tank/reservoir problem
- Nozzle check failed

## Laser problems

- Toner cartridge not detected
- Drum problem
- Fuser problem
- Transfer belt problem
- Developer unit problem
- Toner powder leakage
- Toner low/error
- Waste toner full
- Heating/fuser error
- Drum life ended

## Scanner / copier

- Scanner not working
- ADF not feeding
- ADF jam
- Copy quality problem
- Scanner glass dirty/broken
- Scanner lamp problem
- Scanner cable/flex issue

## Connectivity / software

- USB not detected
- Wi-Fi not connecting
- Network printer offline
- Driver installation
- Printer not found
- Print queue stuck
- Mobile printing issue
- Firmware update
- Reset configuration

## Physical

- Broken cover
- Broken hinge
- Broken tray
- Damaged cable
- Liquid damage
- Internal gear broken
- Belt problem
- Motor noise
- Loud noise when printing

---

# 19. Common Printer Parts

## Paper feed parts

- Pickup roller
- Paper feed roller
- Separation pad
- Paper tray
- Output tray
- Paper sensor
- ADF roller
- ADF separation pad

## Inkjet / Tank parts

- Printhead
- Ink cartridge
- Ink tank/reservoir
- Ink tube
- Ink damper
- Ink absorber
- Waste ink pad
- Pump/capping station
- Encoder strip
- Carriage belt
- Cartridge holder
- Nozzle cleaning unit

## Laser parts

- Toner cartridge
- Drum unit
- Fuser unit
- Transfer roller
- Transfer belt
- Developer unit
- Waste toner box
- Pickup roller
- Separation pad
- Laser scanner unit
- Toner sensor
- Heating film
- Pressure roller

## Electrical / board parts

- Power supply
- Logic board / formatter board
- Control panel
- Display panel
- USB board
- Wi-Fi module
- Network board
- Sensor board
- Motor
- Solenoid

## Scanner / copier parts

- Scanner unit
- Scanner glass
- ADF unit
- ADF roller
- Scanner cable
- Scanner lamp
- Flatbed cover

## Body / mechanical

- Cover
- Hinge
- Gear
- Belt
- Spring
- Screws
- Carriage rail
- Encoder disk
- Paper guide

---

# 20. Printer Consumables

Consumables can be Products, not Parts, unless used in repair ticket.

## Laser consumables

- Toner cartridge
- Toner powder
- Drum unit
- Waste toner box
- Fuser film
- Maintenance kit

## Inkjet / Tank consumables

- Ink cartridge
- Refill ink
- Ink bottle
- Printhead cleaning liquid
- Waste ink pad
- Ink absorber

## Paper / labels

- A4 paper
- Photo paper
- Label paper
- Thermal labels
- Receipt paper roll

---

# 21. Printer Repair Flow

Recommended flow:

1. Select device family: Printer
2. Select printer type: Laser printer or Inkjet / Tank printer
3. Select brand
4. Select model family
5. Select exact model/reference manually if needed
6. Select problem
7. Suggested parts/consumables appear
8. Add inventory part/product or manual part
9. Add condition photos/checklist if needed
10. Create repair ticket

Fallbacks:

- Other printer type
- Other brand
- Other model
- Add custom brand
- Add custom family
- Add custom model
- Add manual problem
- Add manual part/consumable

---

# 22. Printer Device Fields

Required for repair:

- Printer type
- Brand
- Model or manual device name
- Problem
- Customer phone number

Optional:

- Customer name
- Serial number
- Connection type: USB / Wi-Fi / Ethernet
- Color or mono
- Multifunction: print / scan / copy / fax
- Ink/toner reference
- Page counter
- Error code
- Condition notes
- Photos

For inventory device sale:

- Brand
- Model
- Printer type: Laser / Inkjet-Tank
- Category: New device / Used device / Caba device
- Condition: excellent / good / fair / broken
- Cost price
- Selling price
- Status: available / reserved / sold / returned / damaged
- Serial optional; internal code generated if empty

---

# 23. Compatibility Rules

Part compatibility can link to:

- Device family: Printer
- Printer type: Laser or Inkjet/Tank
- Brand
- Model family
- Exact model/generation
- Optional tags

Examples:

- HP LaserJet MFP M130 pickup roller → HP → LaserJet Pro MFP → M130
- Epson L3150 printhead → Epson → EcoTank L Series → L3150
- Canon G3410 ink absorber → Canon → PIXMA G/MegaTank → G3410
- Brother DCP-T720 ink tube → Brother → Inkjet DCP-T Series → DCP-T720
- Universal USB printer cable → Printer → USB tag

---

# 24. Suggested UX Rules

- First ask: Laser or Inkjet/Tank.
- Show HP, Canon, Epson, Brother first.
- Use search everywhere.
- Show model family before exact model.
- Allow exact model/reference text field.
- Allow technician to skip exact model if unknown.
- Let technician add custom model during ticket creation.
- Keep custom additions store-specific.
- Do not block ticket creation if model is not in catalog.

Priority brand order:

1. HP
2. Canon
3. Epson
4. Brother
5. Samsung
6. Xerox
7. Ricoh
8. Kyocera
9. Pantum
10. Lexmark
11. Konica Minolta
12. Zebra / Dymo
13. Other

---

# 25. Data Model Notes

Recommended tables:

- device_families
- device_subfamilies
- device_brands
- device_model_families
- device_models
- device_model_aliases
- repair_problem_categories
- repair_problems
- part_categories
- parts
- part_compatibility
- product_categories
- products
- store_custom_catalog_entries

Aliases are important.

Examples:
- HP M130 = HP LaserJet Pro MFP M130
- Epson L3150 = EcoTank L3150
- Canon G3410 = PIXMA G3410
- Brother T720 = DCP-T720
