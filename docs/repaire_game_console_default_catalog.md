# Repaire Game Console Default Catalog

Purpose: default game console catalog for repair workflow, inventory, parts, and services.

Target:
- Cover around 70%+ of common console repair cases by default.
- Keep the flow smooth.
- Let the shop add custom brand/model/problem/part anytime.

UX rule:
- Flow: Game console → Brand/platform → Console family → Model/generation → Problem → Suggested parts.
- Do not force every exact storage/color/bundle version.
- Storage, color, serial number, firmware notes, and condition are fields.
- Always show:
  - Search
  - Other brand/platform
  - Other model
  - Add custom model
  - Add manual problem
  - Add manual part

Data strategy:
- Global default catalog = seed data managed by super admin.
- Store custom catalog = tenant/store-specific additions.
- Defaults are editable only by super admin.
- Store additions should not modify global catalog.

---

# 1. Game Console Brand / Platform List

Priority platforms:

- Sony PlayStation
- Microsoft Xbox
- Nintendo
- Steam Deck / handheld PC
- Retro / classic consoles
- Other

Extended platforms:

- Asus ROG Ally
- Lenovo Legion Go
- MSI Claw
- Logitech G Cloud
- Anbernic
- Retroid
- Powkiddy
- Sega
- Atari
- Other handheld / emulator console

Priority UX order:

1. PlayStation
2. Xbox
3. Nintendo
4. Steam Deck / handheld PC
5. Retro / classic
6. Other

---

# 2. Sony PlayStation Catalog

## Priority families

- PlayStation 2
- PlayStation 3
- PlayStation 4
- PlayStation 5
- PSP
- PS Vita

## PlayStation 1

- PlayStation 1
- PS One
- Other PlayStation 1

## PlayStation 2

- PlayStation 2 Fat
- PlayStation 2 Slim
- PS2 SCPH-30000 Series
- PS2 SCPH-50000 Series
- PS2 SCPH-70000 Series
- PS2 SCPH-90000 Series
- Other PlayStation 2

## PlayStation 3

- PlayStation 3 Fat
- PlayStation 3 Slim
- PlayStation 3 Super Slim
- PS3 CECH-A/B/C/E Series
- PS3 CECH-2000 Series
- PS3 CECH-2500 Series
- PS3 CECH-3000 Series
- PS3 CECH-4000 Series
- Other PlayStation 3

## PlayStation 4

- PlayStation 4 Fat
- PlayStation 4 Slim
- PlayStation 4 Pro
- PS4 CUH-1000 Series
- PS4 CUH-1100 Series
- PS4 CUH-1200 Series
- PS4 Slim CUH-2000 Series
- PS4 Pro CUH-7000 Series
- PS4 Pro CUH-7100 Series
- PS4 Pro CUH-7200 Series
- Other PlayStation 4

## PlayStation 5

- PlayStation 5 Standard
- PlayStation 5 Digital Edition
- PlayStation 5 Slim Standard
- PlayStation 5 Slim Digital Edition
- PlayStation 5 Pro
- PS5 CFI-1000 Series
- PS5 CFI-1100 Series
- PS5 CFI-1200 Series
- PS5 CFI-2000 Series
- Other PlayStation 5

## PlayStation Portable / Vita

- PSP 1000
- PSP 2000
- PSP 3000
- PSP Go
- PS Vita 1000 OLED
- PS Vita 2000 Slim
- PlayStation TV
- Other PSP / Vita

## PlayStation controllers

- DualShock 2
- DualShock 3
- DualShock 4
- DualSense
- DualSense Edge
- PlayStation Move
- Other PlayStation controller

---

# 3. Microsoft Xbox Catalog

## Priority families

- Xbox 360
- Xbox One
- Xbox Series S
- Xbox Series X

## Original Xbox

- Xbox Original
- Other Original Xbox

## Xbox 360

- Xbox 360 Fat
- Xbox 360 Arcade
- Xbox 360 Elite
- Xbox 360 Slim
- Xbox 360 E
- Xbox 360 Jasper
- Xbox 360 Falcon
- Xbox 360 Trinity
- Xbox 360 Corona
- Other Xbox 360

## Xbox One

- Xbox One Fat
- Xbox One S
- Xbox One X
- Xbox One Digital Edition
- Other Xbox One

## Xbox Series

- Xbox Series S
- Xbox Series X
- Xbox Series S 1TB
- Xbox Series X Digital
- Other Xbox Series

## Xbox controllers

- Xbox 360 Controller
- Xbox One Controller
- Xbox Series Controller
- Xbox Elite Controller Series 1
- Xbox Elite Controller Series 2
- Adaptive Controller
- Other Xbox controller

---

# 4. Nintendo Catalog

## Priority families

- Nintendo Switch
- Nintendo Wii
- Nintendo 3DS / 2DS
- Nintendo DS
- Game Boy

## Nintendo Switch

- Nintendo Switch V1
- Nintendo Switch V2
- Nintendo Switch Lite
- Nintendo Switch OLED
- Nintendo Switch 2
- Joy-Con
- Switch Pro Controller
- Switch Dock
- Other Nintendo Switch

## Nintendo Wii / Wii U

- Nintendo Wii
- Nintendo Wii Mini
- Nintendo Wii U
- Wii Remote
- Wii U GamePad
- Other Wii / Wii U

## Nintendo DS / 3DS

- Nintendo DS
- Nintendo DS Lite
- Nintendo DSi
- Nintendo DSi XL
- Nintendo 3DS
- Nintendo 3DS XL
- New Nintendo 3DS
- New Nintendo 3DS XL
- Nintendo 2DS
- New Nintendo 2DS XL
- Other DS / 3DS

## Game Boy / older handheld

- Game Boy
- Game Boy Color
- Game Boy Advance
- Game Boy Advance SP
- Game Boy Micro
- Other Game Boy

## Nintendo classic consoles

- NES
- SNES
- Nintendo 64
- GameCube
- Other Nintendo classic

---

# 5. Steam Deck / Handheld PC Catalog

## Valve Steam Deck

- Steam Deck LCD 64GB
- Steam Deck LCD 256GB
- Steam Deck LCD 512GB
- Steam Deck OLED 512GB
- Steam Deck OLED 1TB
- Steam Deck Dock
- Other Steam Deck

## Asus ROG Ally

- ROG Ally Z1
- ROG Ally Z1 Extreme
- ROG Ally X
- Other ROG Ally

## Lenovo Legion Go

- Legion Go
- Legion Go S
- Other Legion Go

## MSI Claw

- MSI Claw A1M
- MSI Claw 8
- Other MSI Claw

## Other handheld PC

- Ayaneo
- GPD Win
- OneXPlayer
- Logitech G Cloud
- Other handheld PC

---

# 6. Retro / Emulator Handheld Catalog

## Anbernic

- RG35XX
- RG35XX Plus
- RG35XX H
- RG353V
- RG353P
- RG405M
- RG505
- RG556
- Other Anbernic

## Retroid

- Retroid Pocket 2
- Retroid Pocket 2 Plus
- Retroid Pocket 3
- Retroid Pocket 3 Plus
- Retroid Pocket 4
- Retroid Pocket 4 Pro
- Retroid Pocket 5
- Other Retroid

## Powkiddy

- RGB20S
- RGB30
- X55
- V90
- Other Powkiddy

## Other retro / emulator

- Miyoo Mini
- Miyoo Mini Plus
- TrimUI
- Generic retro console
- Other emulator handheld

---

# 7. Sega / Atari / Classic Catalog

## Sega

- Sega Master System
- Sega Mega Drive / Genesis
- Sega Saturn
- Sega Dreamcast
- Sega Game Gear
- Other Sega

## Atari

- Atari 2600
- Atari 7800
- Atari Lynx
- Atari Jaguar
- Other Atari

## Other classic

- Neo Geo
- Commodore
- Classic mini console
- Generic plug-and-play console
- Other classic console

---

# 8. Common Game Console Problems

## Power / startup

- Console does not power on
- Random shutdown
- Power supply problem
- Power button issue
- Standby light only
- No light / no power
- Overheating shutdown
- Boot loop
- Stuck on logo
- Error code displayed

## Display / HDMI

- No display
- HDMI port damaged
- HDMI signal cuts
- Black screen
- Resolution problem
- Display flickers
- HDMI retimer IC problem
- AV port problem
- DisplayPort/USB-C video problem

## Storage / system

- Hard drive problem
- SSD problem
- Storage full
- System update failed
- Corrupted system software
- Factory reset
- Data transfer
- Save data recovery
- Reinstall system software

## Disc drive

- Disc not reading
- Disc stuck
- Disc drive noise
- Disc eject problem
- Laser lens problem
- Drive motor problem
- Blu-ray drive problem
- DVD drive problem
- Game card slot issue

## Cooling

- Overheating
- Fan noise
- Fan not spinning
- Dust cleaning needed
- Thermal paste needed
- Thermal pads needed
- Liquid metal issue
- Heat sink problem

## Network / connectivity

- Wi-Fi not working
- Bluetooth not working
- Controller not connecting
- Weak Wi-Fi
- LAN port problem
- Online connection issue
- NAT/network setup

## USB / charging

- USB port damaged
- USB-C port damaged
- Charging port damaged
- Controller charging problem
- Dock not charging
- Dock not displaying
- Cable not detected

## Controller problems

- Stick drift
- Analog stick broken
- Buttons not working
- Trigger problem
- Bumper problem
- Controller not charging
- Battery problem
- Bluetooth pairing problem
- Vibration motor problem
- Touchpad problem
- Controller board problem

## Nintendo Switch specific

- Joy-Con drift
- Joy-Con rail problem
- Switch not charging
- Dock not displaying
- Game card not detected
- SD card not detected
- Blue screen
- Orange screen
- Touchscreen not working
- Battery swollen
- USB-C port damaged

## PlayStation specific

- PS4 blue light of death
- PS4 HDMI port damaged
- PS4 disc eject problem
- PS4 overheating
- PS5 HDMI port damaged
- PS5 liquid metal issue
- PS5 fan noise
- DualSense drift
- DualShock drift

## Xbox specific

- Xbox 360 red ring
- Xbox One no power
- Xbox One HDMI retimer problem
- Xbox Series HDMI issue
- Xbox controller drift
- Xbox controller sync problem

## Physical / liquid damage

- Case damaged
- Broken cover
- Broken buttons
- Liquid damage
- Dust damage
- Broken connector
- Screws missing
- Port damaged
- Board short circuit

## Software / account

- Firmware update
- Account login issue
- Parental control
- Region/account issue
- Game installation issue
- Jailbreak / mod note
- Factory reset
- Software configuration

---

# 9. Common Game Console Parts

## Power parts

- Power supply
- Power cable
- Power button
- Power board
- AC adapter
- Battery
- Charging IC
- USB-C charging board

## Display / video parts

- HDMI port
- HDMI retimer IC
- HDMI encoder IC
- AV port
- USB-C video port
- Display connector
- LCD screen
- Touchscreen
- Screen glass
- Backlight

## Storage parts

- HDD
- SSD
- NVMe SSD
- Internal storage module
- SD card reader
- Game card reader
- Storage connector
- HDD cable
- SSD screw

## Disc drive parts

- Blu-ray drive
- DVD drive
- Laser lens
- Drive motor
- Drive belt
- Eject mechanism
- Disc sensor
- Drive board

## Cooling parts

- Fan
- Heat sink
- Thermal paste
- Thermal pads
- Liquid metal
- Dust filter
- Fan connector

## Board / internal parts

- Motherboard
- Daughterboard
- Wi-Fi module
- Bluetooth module
- USB board
- LAN port
- Southbridge chip
- APU/CPU repair
- RAM chip
- NAND chip
- BIOS/firmware chip
- Fuse
- Capacitor
- IC component

## Ports / connectors

- HDMI port
- USB port
- USB-C port
- LAN port
- Power port
- AV port
- Controller port
- Game card slot
- SD card slot
- Dock connector

## Controller parts

- Analog stick
- Stick module
- Buttons
- D-pad
- Triggers
- Bumpers
- Controller battery
- Charging port
- Controller board
- Ribbon cable
- Vibration motor
- Touchpad
- Shell / housing
- Conductive film

## Body / housing

- Console shell
- Faceplate
- Bottom cover
- Top cover
- Screws
- Rubber feet
- Stand
- Dock shell
- Cartridge cover
- Rail / slider

---

# 10. Common Console Services

These are services unless parts are consumed.

- Full console diagnosis
- Dust cleaning
- Thermal paste replacement
- Thermal pads replacement
- Liquid metal replacement
- HDMI port replacement
- USB port replacement
- Fan replacement
- Power supply replacement
- HDD/SSD replacement
- Storage upgrade
- System reinstall
- Firmware update
- Data transfer
- Factory reset
- Controller drift repair
- Controller cleaning
- Controller battery replacement
- Game installation support
- Network setup
- Dock diagnosis
- Joy-Con rail repair

---

# 11. Game Console Repair Flow

Recommended flow:

1. Select device family: Game console
2. Select platform/brand:
   - PlayStation
   - Xbox
   - Nintendo
   - Steam Deck / handheld PC
   - Retro / classic
   - Other
3. Select console family
4. Select model/generation
5. Enter exact model/reference manually if needed
6. Select problem
7. Suggested parts/services appear
8. Add inventory part or manual part
9. Add condition photos/checklist if needed
10. Create repair ticket

Fallbacks:

- Other platform
- Other model
- Add custom brand/platform
- Add custom console family
- Add custom model
- Add manual problem
- Add manual part

---

# 12. Game Console Device Fields

Required for repair:

- Platform/brand
- Model or manual device name
- Problem
- Customer phone number

Optional:

- Customer name
- Serial number
- Storage capacity
- Color / edition
- Firmware/system version
- Controller included: yes/no
- Power cable included: yes/no
- HDMI cable included: yes/no
- Dock included: yes/no
- Disc/game stuck inside: yes/no
- Passcode/account note
- Condition notes
- Photos

For inventory device sale:

- Platform/brand
- Model
- Category: New device / Used device / Caba device
- Condition: excellent / good / fair / broken
- Cost price
- Selling price
- Status: available / reserved / sold / returned / damaged
- Serial optional; internal code generated if empty

---

# 13. Compatibility Rules

Part compatibility can link to:

- Device family: Game console
- Platform/brand
- Console family
- Exact model/generation
- Optional tags

Examples:

- PS4 Slim HDMI port → PlayStation → PS4 → Slim
- PS5 HDMI port → PlayStation → PS5
- Xbox One S power supply → Xbox → Xbox One → One S
- Nintendo Switch USB-C port → Nintendo → Switch
- Joy-Con analog stick → Nintendo → Joy-Con
- Steam Deck fan → Steam Deck → LCD/OLED if needed

Important compatibility tags:

- PS4
- PS4 Slim
- PS4 Pro
- PS5
- Xbox One
- Xbox One S
- Xbox One X
- Xbox Series S
- Xbox Series X
- Nintendo Switch
- Switch Lite
- Switch OLED
- Steam Deck LCD
- Steam Deck OLED
- HDMI
- USB-C
- Controller
- Joy-Con
- Disc drive
- Digital edition

---

# 14. Suggested UX Rules

- Show PlayStation, Xbox, Nintendo first.
- For PlayStation, show PS4 and PS5 first.
- For Xbox, show Xbox One and Xbox Series first.
- For Nintendo, show Switch first.
- Use search everywhere.
- Show console family before exact model.
- Allow exact model/reference text field.
- Let technician add custom model during ticket creation.
- Keep custom additions store-specific.
- Do not block ticket creation if model is not in catalog.

Priority platform order:

1. PlayStation
2. Xbox
3. Nintendo
4. Steam Deck / handheld PC
5. Retro / classic
6. Other

---

# 15. Data Model Notes

Recommended tables:

- device_families
- device_platforms
- device_brands
- device_model_families
- device_models
- device_model_aliases
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
- PS5 = PlayStation 5
- PS4 Fat = PlayStation 4 Fat
- Xbox Series X = XSX
- Xbox Series S = XSS
- Switch OLED = Nintendo Switch OLED

Do not duplicate storage/color/edition as separate models:
- Model: PlayStation 5 Slim
- Variant fields: storage, color, edition, serial
