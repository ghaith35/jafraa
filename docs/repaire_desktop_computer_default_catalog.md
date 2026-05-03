# Repaire Desktop Computer Default Catalog

Purpose: default desktop computer catalog for repair workflow, inventory, parts, and services.

Target:
- Cover around 70%+ of common desktop computer repair cases by default.
- Keep the flow smooth.
- Let the shop add custom brand/model/problem/part anytime.

UX rule:
- Flow: Desktop computer → Device type → Brand / Build type → Model family or custom build → Problem → Suggested parts.
- Do not force exact model if it is custom assembled PC.
- Always show:
  - Search
  - Custom assembled PC
  - Other brand
  - Other model
  - Add custom brand/model
  - Add manual problem
  - Add manual part

Data strategy:
- Global default catalog = seed data managed by super admin.
- Store custom catalog = tenant/store-specific additions.
- Defaults are editable only by super admin.
- Store additions should not modify global catalog.

---

# 1. Desktop Computer Types

Default desktop device types:

- Branded desktop PC
- Custom assembled PC
- All-in-one PC
- Mini PC
- Gaming PC
- Workstation
- Server / small office server
- Thin client
- Other desktop computer

UX priority:

1. Custom assembled PC
2. Branded desktop PC
3. All-in-one PC
4. Mini PC
5. Gaming PC
6. Workstation
7. Server / small office server
8. Other

---

# 2. Desktop Brand List

Priority brands:

- HP
- Dell
- Lenovo
- Acer
- Asus
- Apple
- MSI
- Fujitsu
- Samsung
- Huawei
- Intel NUC
- Gigabyte / Aorus
- Zotac
- Corsair
- Alienware
- Other

Extended brands:

- Toshiba / Dynabook
- Medion
- Packard Bell
- Gateway
- Chuwi
- Beelink
- MinisForum
- ASRock
- Razer
- Microsoft Surface
- NEC
- LG
- Panasonic
- Other

---

# 3. HP Desktop Catalog

## Priority families

- HP Pavilion Desktop
- HP ProDesk
- HP EliteDesk
- HP Compaq
- HP All-in-One
- HP Omen
- HP Victus
- HP Z Workstation

## HP Pavilion Desktop

- Pavilion Desktop
- Pavilion Slimline
- Pavilion Gaming Desktop
- Pavilion All-in-One
- Other HP Pavilion Desktop

## HP ProDesk

- ProDesk 400
- ProDesk 600
- ProDesk Mini
- ProDesk Small Form Factor
- ProDesk Tower
- Other HP ProDesk

## HP EliteDesk

- EliteDesk 705
- EliteDesk 800
- EliteDesk Mini
- EliteDesk Small Form Factor
- EliteDesk Tower
- Other HP EliteDesk

## HP Compaq / Business

- Compaq 6000
- Compaq 6200
- Compaq 6300
- Compaq 8000
- Compaq 8100
- Compaq 8200
- Compaq 8300
- HP Business Desktop
- Other HP Compaq

## HP All-in-One

- HP All-in-One 20
- HP All-in-One 22
- HP All-in-One 24
- HP All-in-One 27
- HP Envy All-in-One
- HP Pavilion All-in-One
- HP ProOne
- HP EliteOne
- Other HP AIO

## HP Gaming / Workstation

- Omen Desktop
- Victus Desktop
- Z Workstation
- Z Mini
- Z Tower
- ZBook Dock / workstation dock
- Other HP Workstation

---

# 4. Dell Desktop Catalog

## Priority families

- OptiPlex
- Inspiron Desktop
- Vostro Desktop
- XPS Desktop
- Precision Workstation
- Alienware Aurora
- Dell All-in-One

## Dell OptiPlex

- OptiPlex 3000
- OptiPlex 5000
- OptiPlex 7000
- OptiPlex 3020
- OptiPlex 3040
- OptiPlex 3050
- OptiPlex 3060
- OptiPlex 3070
- OptiPlex 3080
- OptiPlex 3090
- OptiPlex 5040
- OptiPlex 5050
- OptiPlex 5060
- OptiPlex 5070
- OptiPlex 5080
- OptiPlex 5090
- OptiPlex 7010
- OptiPlex 7020
- OptiPlex 7040
- OptiPlex 7050
- OptiPlex 7060
- OptiPlex 7070
- OptiPlex 7080
- OptiPlex Micro
- OptiPlex Small Form Factor
- OptiPlex Tower
- Other Dell OptiPlex

## Dell Inspiron Desktop

- Inspiron Desktop
- Inspiron Small Desktop
- Inspiron 3000
- Inspiron 5000
- Inspiron 7000
- Inspiron All-in-One
- Other Dell Inspiron Desktop

## Dell Vostro Desktop

- Vostro Desktop
- Vostro 3000
- Vostro 5000
- Vostro Small Desktop
- Vostro Tower
- Other Dell Vostro Desktop

## Dell XPS / Alienware

- XPS Desktop
- XPS Tower
- XPS Special Edition
- Alienware Aurora
- Alienware Area-51
- Other Dell Gaming Desktop

## Dell Precision Workstation

- Precision 3000
- Precision 5000
- Precision 7000
- Precision Tower
- Precision Rack
- Other Dell Precision

## Dell All-in-One

- Inspiron All-in-One
- OptiPlex All-in-One
- Dell 22 AIO
- Dell 24 AIO
- Dell 27 AIO
- Other Dell AIO

---

# 5. Lenovo Desktop Catalog

## Priority families

- ThinkCentre
- IdeaCentre
- Legion Tower
- ThinkStation
- Lenovo All-in-One
- Yoga AIO

## ThinkCentre

- ThinkCentre M Series
- ThinkCentre M70
- ThinkCentre M80
- ThinkCentre M90
- ThinkCentre Tiny
- ThinkCentre Small Form Factor
- ThinkCentre Tower
- ThinkCentre Neo
- Other ThinkCentre

## IdeaCentre

- IdeaCentre 3
- IdeaCentre 5
- IdeaCentre Gaming
- IdeaCentre Mini
- IdeaCentre All-in-One
- Other IdeaCentre

## Legion Desktop

- Legion Tower 5
- Legion Tower 7
- Legion C Series
- Legion T Series
- Other Legion Desktop

## ThinkStation

- ThinkStation P Series
- ThinkStation P Tiny
- ThinkStation P Tower
- ThinkStation P360
- ThinkStation P520
- ThinkStation P620
- ThinkStation P720
- Other ThinkStation

## Lenovo All-in-One

- IdeaCentre AIO 3
- IdeaCentre AIO 5
- Yoga AIO
- ThinkCentre AIO
- Other Lenovo AIO

---

# 6. Acer Desktop Catalog

## Priority families

- Aspire Desktop
- Veriton
- Predator Orion
- Nitro Desktop
- Acer All-in-One

## Acer Aspire

- Aspire Desktop
- Aspire TC
- Aspire XC
- Aspire GX
- Aspire All-in-One
- Other Aspire Desktop

## Acer Veriton

- Veriton M
- Veriton X
- Veriton N
- Veriton Z All-in-One
- Other Acer Veriton

## Acer Gaming

- Predator Orion
- Predator Orion 3000
- Predator Orion 5000
- Predator Orion 7000
- Nitro Desktop
- Other Acer Gaming Desktop

## Acer All-in-One

- Aspire C Series
- Veriton Z Series
- Other Acer AIO

---

# 7. Asus Desktop Catalog

## Priority families

- ExpertCenter
- VivoPC
- VivoMini
- ROG Desktop
- TUF Gaming Desktop
- ProArt Station
- Asus All-in-One

## Asus Business / Mini

- ExpertCenter D Series
- ExpertCenter PN Series
- VivoPC
- VivoMini
- Mini PC PN Series
- Mini PC PB Series
- Other Asus Business/Mini

## Asus Gaming

- ROG Strix Desktop
- ROG G Series
- TUF Gaming Desktop
- TUF Gaming GT Series
- Other Asus Gaming Desktop

## Asus Workstation / AIO

- ProArt Station
- ProArt Workstation
- Asus All-in-One
- Zen AiO
- Other Asus AIO/Workstation

---

# 8. Apple Desktop Catalog

## Priority families

- iMac
- Mac mini
- Mac Studio
- Mac Pro

## iMac

- iMac 21.5-inch
- iMac 24-inch
- iMac 27-inch
- iMac Intel
- iMac M1
- iMac M3
- iMac Retina 4K
- iMac Retina 5K
- Other iMac

## Mac mini

- Mac mini Intel
- Mac mini M1
- Mac mini M2
- Mac mini M4
- Other Mac mini

## Mac Studio

- Mac Studio M1 Max
- Mac Studio M1 Ultra
- Mac Studio M2 Max
- Mac Studio M2 Ultra
- Other Mac Studio

## Mac Pro

- Mac Pro Tower
- Mac Pro Cylinder
- Mac Pro Apple Silicon
- Other Mac Pro

---

# 9. MSI Desktop Catalog

## Priority families

- MAG
- MEG
- MPG
- Trident
- Infinite
- Aegis
- Cubi
- Pro DP
- Modern AM

## MSI Gaming

- MAG Infinite
- MEG Aegis
- MPG Trident
- Trident 3
- Trident X
- Infinite S
- Aegis RS
- Codex
- Other MSI Gaming Desktop

## MSI Mini / Business / AIO

- Cubi
- Pro DP
- Modern AM
- Pro AP All-in-One
- Modern All-in-One
- Other MSI Desktop

---

# 10. Fujitsu Desktop Catalog

- Esprimo
- Esprimo P Series
- Esprimo D Series
- Esprimo Q Series
- Celsius Workstation
- Futro Thin Client
- Other Fujitsu Desktop

---

# 11. Samsung Desktop Catalog

- Samsung All-in-One
- Samsung Desktop
- Samsung MagicStation
- Samsung Thin Client
- Other Samsung Desktop

---

# 12. Huawei Desktop Catalog

- MateStation
- MateStation S
- MateStation X
- Huawei All-in-One
- Other Huawei Desktop

---

# 13. Intel NUC / Mini PC Catalog

- Intel NUC
- NUC Mini PC
- NUC Kit
- NUC Extreme
- NUC Pro
- NUC Enthusiast
- Other Intel NUC

---

# 14. Gigabyte / Aorus Desktop Catalog

- Aorus Gaming Desktop
- Gigabyte Gaming PC
- BRIX Mini PC
- Aorus Model X
- Aorus Model S
- Other Gigabyte / Aorus Desktop

---

# 15. Zotac Desktop Catalog

- ZBOX
- ZBOX Mini PC
- ZBOX Magnus
- ZBOX Gaming
- Other Zotac Desktop

---

# 16. Corsair Desktop Catalog

- Corsair One
- Corsair Vengeance PC
- Corsair Workstation
- Other Corsair Desktop

---

# 17. Alienware Desktop Catalog

Note:
Alienware also appears under Dell, but keep it searchable as brand.

- Alienware Aurora
- Alienware Area-51
- Alienware Alpha
- Alienware X51
- Other Alienware Desktop

---

# 18. Mini PC / Budget Brands

## Beelink

- Beelink Mini S
- Beelink SER
- Beelink SEi
- Beelink GTR
- Other Beelink

## MinisForum

- UM Series
- HM Series
- EliteMini
- Neptune
- Venus
- Other MinisForum

## Chuwi

- HeroBox
- CoreBox
- LarkBox
- RZBox
- Other Chuwi Mini PC

## ASRock

- DeskMini
- DeskMeet
- Industrial Mini PC
- Other ASRock

## Other Mini PC

- Generic Mini PC
- Android mini box used as PC
- Other Mini PC

---

# 19. Custom Assembled PC Catalog

For custom assembled PCs, brand/model may be unknown.

Recommended fields:

- Case type
- Motherboard brand/model
- CPU
- RAM
- Storage
- GPU
- Power supply
- Cooling type
- Operating system
- Notes

Default build categories:

- Office PC
- Gaming PC
- Design / workstation PC
- Cyber / internet cafe PC
- Mini tower
- Mid tower
- Full tower
- Small form factor
- Other custom PC

Common component brands:

## Motherboard brands

- Asus
- MSI
- Gigabyte
- ASRock
- Intel
- Biostar
- ECS
- Other

## CPU brands

- Intel
- AMD
- Other

## GPU brands

- Nvidia
- AMD Radeon
- Intel Arc
- Other

## PSU brands

- Cooler Master
- Corsair
- Antec
- Thermaltake
- EVGA
- MSI
- Gigabyte
- FSP
- Generic
- Other

---

# 20. Common Desktop Computer Problems

## Power / startup

- No power
- Does not boot
- Restarts automatically
- Random shutdown
- Power supply problem
- Power button issue
- Burning smell
- Beep codes
- BIOS issue
- CMOS battery problem

## Display / graphics

- No display
- Display only with external GPU
- GPU not detected
- Lines on display
- Resolution problem
- HDMI/VGA/DisplayPort issue
- Monitor signal problem
- All-in-one screen broken
- All-in-one backlight issue

## Performance / storage

- Very slow
- Windows not booting
- HDD problem
- SSD problem
- RAM problem
- Blue screen
- Freezing
- Data recovery
- Storage full
- Bad sectors
- Upgrade needed

## Cooling / overheating

- Overheating
- Fan noise
- Fan not spinning
- CPU temperature high
- GPU temperature high
- Thermal paste needed
- Dust cleaning needed
- Liquid cooler issue

## Motherboard / ports

- USB ports not working
- Audio jack not working
- Ethernet port not working
- Motherboard short circuit
- BIOS chip issue
- SATA port problem
- PCIe slot problem
- RAM slot problem
- CPU socket issue

## Network / audio

- No sound
- Microphone not working
- Wi-Fi not working
- Bluetooth not working
- Ethernet not working
- Network card problem

## Software

- Windows installation
- Driver installation
- Virus removal
- Antivirus installation
- Office installation
- Software activation
- System optimization
- Backup setup
- Data transfer
- Password reset
- BIOS password
- Format and reinstall

## Physical

- Case damaged
- Front panel broken
- Button broken
- Cable management
- Internal cleaning
- Dust damage
- Liquid damage
- Broken connector

---

# 21. Common Desktop Computer Parts

## Power parts

- Power supply / PSU
- Power cable
- Power button
- Front panel cable
- CMOS battery
- UPS battery
- Power adapter for mini PC / AIO

## Motherboard / CPU

- Motherboard
- CPU
- CPU socket repair
- BIOS chip
- CMOS battery
- SATA cable
- Front panel connector
- Motherboard spacer/standoff
- Thermal paste

## Memory / storage

- RAM DDR2
- RAM DDR3
- RAM DDR4
- RAM DDR5
- HDD 3.5
- HDD 2.5
- SSD SATA
- SSD NVMe
- M.2 SSD
- HDD/SSD caddy
- SATA cable
- M.2 screw

## Graphics / display

- Graphics card / GPU
- GPU fan
- HDMI port
- VGA port
- DisplayPort port
- DVI port
- All-in-one LCD screen
- All-in-one LCD cable
- All-in-one inverter/backlight
- Monitor cable

## Cooling

- CPU fan
- Case fan
- GPU fan
- Heatsink
- Liquid cooler
- Thermal paste
- Thermal pads
- Dust filter

## Ports / cards

- USB port
- USB expansion card
- Audio jack board
- Ethernet card
- Wi-Fi card
- Bluetooth adapter
- PCIe card
- Card reader
- DVD drive
- DVD writer

## Case / body

- PC case
- Side panel
- Front panel
- Case buttons
- Screws
- Rubber feet
- Cable ties
- LED strip
- Dust filter

## All-in-one parts

- AIO screen
- AIO power board
- AIO motherboard
- AIO stand
- AIO camera
- AIO speaker
- AIO Wi-Fi card
- AIO internal cable

---

# 22. Common Desktop Services

These are services, not physical parts unless parts are consumed.

- Windows installation
- Driver installation
- Antivirus installation
- Virus removal
- Data recovery
- Data backup
- Data transfer
- System cleaning
- Dust cleaning
- Thermal paste replacement
- RAM upgrade
- SSD upgrade
- HDD replacement
- GPU installation
- PSU replacement
- Motherboard replacement
- BIOS update
- BIOS password removal
- Software activation
- Network setup
- Printer setup
- Gaming PC assembly
- Cable management
- Full PC diagnosis

---

# 23. Desktop Repair Flow

Recommended flow:

1. Select device family: Desktop computer
2. Select desktop type:
   - Custom assembled PC
   - Branded desktop PC
   - All-in-one PC
   - Mini PC
   - Gaming PC
   - Workstation
3. Select brand if applicable
4. Select model family if applicable
5. Enter exact model/reference manually if needed
6. Select problem
7. Suggested parts/services appear
8. Add inventory part or manual part
9. Add condition photos/checklist if needed
10. Create repair ticket

Fallbacks:

- Custom assembled PC
- Unknown brand
- Other model
- Add custom brand
- Add custom model
- Add manual problem
- Add manual part

---

# 24. Desktop Device Fields

Required for repair:

- Desktop type
- Brand or custom assembled
- Model/manual device name
- Problem
- Customer phone number

Optional:

- Customer name
- Serial number
- CPU
- RAM
- Storage
- GPU
- Motherboard
- Power supply
- Operating system
- Password note
- Condition notes
- Photos

For inventory device sale:

- Desktop type
- Brand/model or custom build name
- Category: New device / Used device / Caba device
- Condition: excellent / good / fair / broken
- Cost price
- Selling price
- Status: available / reserved / sold / returned / damaged
- Serial/internal code optional; internal code generated if empty

---

# 25. Compatibility Rules

Part compatibility can link to:

- Device family: Desktop computer
- Desktop type
- Brand
- Model family
- Exact model
- Component standard/tag

Important compatibility tags:

- DDR2
- DDR3
- DDR4
- DDR5
- SATA
- NVMe
- M.2
- PCIe
- ATX
- Micro-ATX
- Mini-ITX
- 2.5 inch
- 3.5 inch
- LGA1155
- LGA1150
- LGA1151
- LGA1200
- LGA1700
- AM3
- AM4
- AM5
- USB 2.0
- USB 3.0
- HDMI
- VGA
- DisplayPort

Examples:

- DDR4 RAM → Desktop computer → DDR4 tag
- 500W ATX PSU → Desktop computer → ATX PSU tag
- HP EliteDesk power supply → HP → EliteDesk
- Dell OptiPlex SFF PSU → Dell → OptiPlex → SFF
- iMac 27 screen → Apple → iMac → 27-inch

---

# 26. Suggested UX Rules

- Show Custom assembled PC first.
- For branded devices, show HP/Dell/Lenovo first.
- Use search everywhere.
- Allow exact model/reference text field.
- Allow technician to skip exact model if unknown.
- Let technician add custom model during ticket creation.
- Keep custom additions store-specific.
- Do not block ticket creation if model is not in catalog.

Priority desktop type order:

1. Custom assembled PC
2. Branded desktop PC
3. All-in-one PC
4. Mini PC
5. Gaming PC
6. Workstation
7. Server / small office server
8. Other

Priority brand order:

1. HP
2. Dell
3. Lenovo
4. Acer
5. Asus
6. Apple
7. MSI
8. Fujitsu
9. Samsung
10. Huawei
11. Intel NUC
12. Gigabyte / Aorus
13. Other

---

# 27. Data Model Notes

Recommended tables:

- device_families
- device_subfamilies
- device_brands
- device_model_families
- device_models
- device_model_aliases
- component_standards
- repair_problem_categories
- repair_problems
- part_categories
- parts
- part_compatibility
- service_categories
- services
- store_custom_catalog_entries

Aliases are important.

Examples:
- OptiPlex 7050 SFF = Dell OptiPlex 7050 Small Form Factor
- HP 8300 = HP Compaq 8300
- AIO = All-in-one
- Mini PC = NUC-style desktop
