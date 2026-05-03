# Repaire Products / Accessories Default Catalog

Purpose: default catalog for sellable products, accessories, consumables, software products, and repair tools.

Target:
- Cover around 70%+ of common repair-shop product sales.
- Keep the structure flexible.
- Client can edit/add/remove categories and subcategories.
- Same product can appear in multiple places using tags/compatibility.

Important architecture rule:
- Products are quantity-based inventory.
- Devices are separate from products.
- Parts are separate from products.
- Services are separate from products.
- Product stock uses FIFO batches for cost/profit.
- Selling price belongs to the product.
- Cost price belongs to stock batches.

---

# 1. Product Catalog Structure

Product catalog supports:

- unlimited nested categories
- product tags
- compatibility families
- custom categories per store/client
- multiple images per product
- barcode/SKU auto-generation if empty
- FIFO cost batches

Recommended product fields:

Required:
- name
- category
- selling price
- stock quantity when adding stock
- cost price when adding stock batch

Optional:
- brand
- model/reference
- SKU/barcode
- tags
- compatibility families
- supplier
- images
- notes
- low-stock threshold override

---

# 2. Main Product Category Groups

Default root categories:

- Phone Products
- Tablet / iPad Products
- Computer Products
- Printer Products
- Console Products
- Network Products
- Audio Products
- Storage Products
- Software Products
- Tools & Consumables
- Universal Accessories
- Other Products

Important:
A product can be linked to multiple families using tags.

Example:
HDMI Cable
- Main category: Universal Accessories > Cables > HDMI Cable
- Tags: Computer, Console, TV, Monitor, HDMI

---

# 3. Phone Products

## Chargers

- Original charger
- Compatible charger
- Fast charger
- USB-C charger
- Lightning charger
- Micro-USB charger
- Wireless charger
- MagSafe charger
- Car charger
- Multi-port charger
- Charger head
- Travel charger
- Power adapter
- Other phone charger

## Cables

- USB-A to Lightning
- USB-C to Lightning
- USB-A to USB-C
- USB-C to USB-C
- USB-A to Micro-USB
- Micro-USB cable
- Magnetic charging cable
- Multi charging cable
- Fast charging cable
- Braided cable
- Short cable
- Long cable
- Other phone cable

## Phone Cases

- Silicone case
- Transparent case
- Magnetic case
- Leather case
- Wallet case
- Shockproof case
- Rugged case
- Slim case
- Ring case
- Camera protection case
- MagSafe case
- Flip cover
- Other phone case

## Screen Protectors

- Tempered glass
- Privacy glass
- Full glue glass
- 5D/9D glass
- Ceramic protector
- Hydrogel film
- Matte film
- Camera lens protector
- Back film protector
- Tablet/phone universal film
- Other screen protector

## Phone Audio

- Wired earphones
- Lightning earphones
- USB-C earphones
- Bluetooth earphones
- TWS earbuds
- AirPods style earbuds
- Neckband earphones
- Headphones
- AUX adapter
- Lightning to AUX adapter
- USB-C to AUX adapter
- Other phone audio

## Holders / Stands

- Car holder
- Magnetic car holder
- Vent holder
- Dashboard holder
- Desk holder
- Ring holder
- Pop socket
- Tripod holder
- Bike holder
- Other phone holder

## Power Banks

- Standard power bank
- Fast charge power bank
- MagSafe power bank
- Solar power bank
- Mini power bank
- Laptop power bank
- Other power bank

## SIM / Memory Accessories

- SIM adapter
- SIM eject pin
- SIM card holder
- Memory card
- OTG adapter
- USB-C OTG
- Micro-USB OTG
- Lightning OTG
- Other SIM/memory accessory

---

# 4. Tablet / iPad Products

## Tablet Chargers & Cables

- iPad charger
- USB-C tablet charger
- Lightning tablet charger
- Tablet charging cable
- Tablet fast charger
- Other tablet charger/cable

## Tablet Cases

- iPad case
- Samsung Tab case
- Universal tablet case
- Kids tablet case
- Keyboard case
- Flip cover
- Rugged tablet case
- Other tablet case

## Tablet Screen Protectors

- iPad tempered glass
- Tablet tempered glass
- Privacy glass
- Hydrogel film
- Matte film
- Other tablet protector

## Tablet Accessories

- Stylus pen
- Apple Pencil compatible pen
- Tablet stand
- Tablet holder
- Keyboard for tablet
- Bluetooth keyboard
- Tablet mouse
- Other tablet accessory

---

# 5. Computer Products

## Mouse

- Wired mouse
- Wireless mouse
- Bluetooth mouse
- Gaming mouse
- Ergonomic mouse
- Laptop mouse
- Mouse pad
- Gaming mouse pad
- Other mouse/accessory

## Keyboard

- Wired keyboard
- Wireless keyboard
- Bluetooth keyboard
- Gaming keyboard
- Mechanical keyboard
- Arabic/French keyboard
- Mini keyboard
- Keyboard/mouse combo
- Other keyboard

## Speakers

- USB speaker
- Bluetooth speaker
- 2.0 speaker
- 2.1 speaker
- Soundbar
- Mini speaker
- Gaming speaker
- Other speaker

## Webcams / Microphones

- Webcam
- Full HD webcam
- Microphone
- Lavalier microphone
- USB microphone
- Headset microphone
- Other webcam/mic

## Laptop Accessories

- Laptop charger
- Universal laptop charger
- Laptop battery external pack
- Laptop bag
- Laptop sleeve
- Cooling pad
- Laptop stand
- Laptop lock
- Keyboard protector
- Screen cleaning kit
- Other laptop accessory

## Desktop Accessories

- PC power cable
- Monitor power cable
- VGA cable
- HDMI cable
- DisplayPort cable
- DVI cable
- Ethernet cable
- Audio cable
- Extension cable
- Power strip
- Other desktop accessory

## Adapters / Hubs

- USB hub
- Type-C hub
- HDMI adapter
- VGA adapter
- DisplayPort adapter
- DVI adapter
- Ethernet adapter
- Wi-Fi USB adapter
- Bluetooth USB adapter
- Card reader
- USB sound card
- SATA to USB adapter
- NVMe enclosure
- 2.5 HDD enclosure
- Other adapter/hub

## PC Components Sold as Products

- RAM DDR3
- RAM DDR4
- RAM DDR5
- SSD SATA
- SSD NVMe
- HDD 2.5
- HDD 3.5
- External HDD
- External SSD
- USB flash drive
- Memory card
- Graphics card
- Power supply / PSU
- PC case
- CPU cooler
- Case fan
- Thermal paste
- Other PC component

---

# 6. Storage Products

## USB / Memory

- USB flash drive
- USB 2.0 flash drive
- USB 3.0 flash drive
- USB-C flash drive
- OTG flash drive
- Memory card SD
- Memory card microSD
- Memory card adapter
- Other USB/memory

## Hard Drives / SSD

- HDD 2.5
- HDD 3.5
- SSD SATA
- SSD NVMe
- SSD M.2
- External HDD
- External SSD
- HDD enclosure
- SSD enclosure
- Docking station
- Other storage product

---

# 7. Printer Products

## Ink Products

- Ink cartridge
- Refill ink
- Ink bottle
- Black ink
- Cyan ink
- Magenta ink
- Yellow ink
- Photo ink
- Printhead cleaning liquid
- Other ink product

## Toner Products

- Toner cartridge
- Toner powder
- Black toner
- Color toner
- Drum unit
- Waste toner box
- Fuser film
- Maintenance kit
- Other toner product

## Paper / Labels

- A4 paper
- A3 paper
- Photo paper
- Glossy paper
- Label paper
- Sticker paper
- Thermal labels
- Receipt paper roll
- Other paper/label

## Printer Accessories

- USB printer cable
- Printer power cable
- Printer cover
- Paper tray
- Maintenance box
- Ink absorber
- Other printer accessory

---

# 8. Console Products

## Controllers

- PlayStation controller
- Xbox controller
- Nintendo Switch Pro controller
- Joy-Con
- Generic controller
- Wired controller
- Wireless controller
- Controller charging cable
- Controller battery
- Controller grip
- Other controller product

## Console Cables

- HDMI cable
- Power cable
- USB controller cable
- USB-C charging cable
- AV cable
- Display cable
- Other console cable

## Console Accessories

- Headset
- Charging dock
- Controller dock
- Console stand
- Cooling stand
- Protective case
- Carrying case
- Thumb grips
- Controller shell
- Other console accessory

## Console Storage

- Console HDD
- Console SSD
- NVMe SSD for console
- Memory card
- SD card for Switch
- Other console storage

## Game / Digital Products

- Physical game
- Digital game card/code
- Subscription card
- Gift card
- Other game product

---

# 9. Network Products

## Routers / Modems

- Wi-Fi router
- 4G router
- 5G router
- ADSL modem
- Fiber router
- Router antenna
- Other router/modem

## Network Accessories

- Ethernet cable
- RJ45 connector
- Crimping tool
- Switch
- Wi-Fi repeater
- Wi-Fi USB adapter
- Network card
- Patch cable
- Other network accessory

---

# 10. Audio Products

## Earphones / Headphones

- Wired earphones
- Bluetooth earphones
- TWS earbuds
- Headphones
- Gaming headset
- USB headset
- AUX headset
- Other earphones/headphones

## Speakers

- Bluetooth speaker
- USB speaker
- Portable speaker
- Soundbar
- 2.1 speaker
- Gaming speaker
- Other audio speaker

## Audio Accessories

- AUX cable
- AUX adapter
- USB-C audio adapter
- Lightning audio adapter
- Microphone
- Lavalier microphone
- Audio splitter
- Other audio accessory

---

# 11. Software Products

Software is Product if sold as a license/code/card.

## Security Software

- Antivirus
- Internet Security
- VPN license
- Anti-malware license
- Other security software

## Operating Systems

- Windows license
- Windows installation media
- macOS support item
- Linux installation media
- Other OS product

## Office / Productivity

- Microsoft Office license
- Office activation card
- PDF software license
- Design software license
- Other productivity software

## Other Digital Products

- Game code
- Subscription card
- Gift card
- Cloud storage subscription
- Other software/digital product

Rule:
- In v1, antivirus/software licenses are tracked by quantity only.
- No license code tracking in v1.

---

# 12. Tools & Consumables

Tools and consumables are products in inventory.

## Repair Tools

- Screwdriver set
- Precision screwdriver
- Pentalobe screwdriver
- Torx screwdriver
- Opening picks
- Spudger
- Suction cup
- Tweezers
- Pry tool
- SIM eject tool
- Soldering iron
- Hot air station accessory
- Multimeter
- Magnifier
- Other repair tool

## Consumables

- Glue
- B7000 glue
- T7000 glue
- Double-sided tape
- Screen adhesive
- Battery adhesive
- Thermal paste
- Thermal pads
- Cleaning liquid
- Alcohol
- Solder wire
- Flux
- Desoldering wick
- Screws
- Rubber bands
- Dust cleaning brush
- Other consumable

## Protection / Packaging

- Anti-static bag
- Bubble wrap
- Small boxes
- Labels
- Barcode labels
- Receipt rolls
- Product bags
- Other packaging

---

# 13. Universal Accessories

## Cables

- HDMI cable
- VGA cable
- DisplayPort cable
- DVI cable
- USB cable
- USB-C cable
- Lightning cable
- Micro-USB cable
- Ethernet cable
- AUX cable
- Power cable
- Other cable

## Adapters

- HDMI adapter
- VGA adapter
- Type-C adapter
- USB adapter
- OTG adapter
- Audio adapter
- Ethernet adapter
- Card reader
- Other adapter

## Cleaning

- Screen cleaner
- Cleaning cloth
- Alcohol wipes
- Dust blower
- Cleaning brush
- Other cleaning product

---

# 14. Product Tags

Use tags so one product appears in multiple places.

Device/family tags:
- Phone
- Tablet
- iPad
- Laptop
- Desktop
- Printer
- Console
- TV
- Monitor
- Audio
- Gaming
- Network

Connector tags:
- USB-A
- USB-C
- Lightning
- Micro-USB
- HDMI
- VGA
- DisplayPort
- DVI
- AUX
- Ethernet
- SATA
- NVMe
- M.2

Quality/source tags:
- Original
- Compatible
- Generic
- Premium
- Budget
- Refurbished
- Used
- New

Feature tags:
- Fast charging
- Wireless
- Wired
- Bluetooth
- Gaming
- Waterproof
- Magnetic
- MagSafe
- Privacy
- Anti-shock
- High speed

Examples:
- HDMI Cable 2m → tags: HDMI, Computer, Console, TV, Monitor
- USB-C Charger 25W → tags: USB-C, Phone, Tablet, Fast charging
- Bluetooth Speaker → tags: Audio, Bluetooth, Phone, Computer
- Antivirus → tags: Software, Computer, Security

---

# 15. Product Compatibility Rules

Products can be compatible by:

- device family
- brand
- model
- connector type
- tag

Examples:
- iPhone 13 case → Phone, Apple, iPhone 13
- Samsung A15 glass → Phone, Samsung, Galaxy A15
- HDMI cable → Computer, Console, TV, Monitor, HDMI
- Laptop charger HP 19.5V → Laptop, HP, charger tag
- USB-C charger → Phone, Tablet, USB-C
- Printer ink Epson 003 → Printer, Epson, EcoTank tag

---

# 16. Stock / Cost Rules

Products are quantity-based.

Cost is not stored as only one value.

Each stock arrival creates FIFO batch:

- product
- store
- quantity
- remaining quantity
- cost price
- purchase date
- supplier optional
- purchase invoice optional

Profit uses FIFO:

Example:
- Batch 1: 10 pcs cost 390 DA
- Batch 2: 8 pcs cost 400 DA
- Sell 12 pcs
- Cost used = 10×390 + 2×400

Visibility:
- Admin + Manager can see cost/FIFO batches.
- Cashier sees selling price + stock only.

Low stock:
- based on per-store stock.
- global default threshold + product override.

---

# 17. Suggested POS UX

Product browsing:

1. Search by name / SKU / barcode
2. Browse by root category
3. Browse by nested category
4. Filter by tags/family
5. Select product
6. Add quantity to cart

Important:
- Same product can appear in many category views through tags.
- Category tree should not duplicate the product record.
- Product has one main category, many tags/compatibility links.

Fallback:
- Add custom product
- Add quick product/manual line if allowed by role
- Add stock later

---

# 18. Data Model Notes

Recommended tables:

- products
- product_categories
- product_category_closure or nested category parent_id
- product_tags
- product_tag_links
- product_compatibility
- inventory_stock_batches
- stock_movements
- suppliers
- purchase_invoices
- purchase_invoice_items
- product_images
- store_custom_catalog_entries

Important:
- Use unlimited nested categories.
- Do not duplicate product for every place it appears.
- Use tags and compatibility for multi-placement.
