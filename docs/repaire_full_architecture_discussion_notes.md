# REPAIRE — Full Product & Architecture Discussion Notes

This file consolidates the information and decisions discussed so far for the **Repaire** repair-shop/POS system.

Purpose of this file:
- Preserve the product decisions made during the architecture discussion.
- Allow continuation with another GPT/assistant/developer without losing context.
- Act as a source of truth before creating the implementation plan, database schema, API routes, and build phases.

---

# 1. Product Vision

Repaire is a repair-shop management system with:

- Repair ticket workflow
- Customer management
- Customer devices/assets
- Inventory management
- Parts/products/services
- POS sales
- Payments and debts
- Supplier and purchase tracking
- Trade-in purchase flow
- PDF/print tickets
- Reports
- WhatsApp notifications
- SaaS plans
- Multi-store support
- Offline Windows cashier app

The product should feel complete and professional for repair shops, while staying smooth and easy to use.

---

# 2. Extracted Screenshot Modules

The screenshots analyzed covered these modules:

- POS repair ticket creation
- POS products flow
- Customers
- Customer assets
- Customer groups
- Repair ticket list/details
- Pre/post checklist
- Inventory master list
- Inventory services
- Trade-in inventory and purchase
- Sales panel
- Repair modals/actions
- Inquiry modals
- Pattern lock modal
- Email ticket modal
- Documents/PDF preview
- Reports
- Settings
- Store settings
- Profile settings
- Inventory settings
- Label template settings

Features postponed for later discussion:

- Unlocking flow
- Advanced search flow

---

# 3. Main System Modules

Core modules:

1. Authentication & users
2. Company / tenant management
3. Store management
4. Customers
5. Customer groups
6. Customer debts
7. Customer devices/assets
8. Repair tickets
9. Repair statuses/history
10. Repair problems
11. Repair parts
12. Inventory devices
13. Inventory products
14. Inventory parts
15. Services
16. Suppliers
17. Purchase invoices
18. Stock batches / FIFO
19. Stock movements
20. POS sales
21. Payments
22. Invoices / tickets / receipts
23. Trade-in
24. Reports
25. Settings
26. WhatsApp notifications
27. Offline mode
28. Super admin panel

Optional/later modules:

- Unlocking
- Advanced search
- Campaigner/marketing
- Cash drawer hardware
- Clock in/out
- Commission
- Gift cards
- Loyalty
- Store credits

---

# 4. SaaS Structure

The app is SaaS-based with tenant isolation.

Rules:

- Each client/company has isolated data.
- Each employee belongs to one company/client.
- Each company can have one or more stores, depending on plan.
- Multi-store is a paid/version feature.
- Single-store plan hides multi-store features.
- Multi-store clients can use per-store and global reports.

Plans:

- 7-day free trial
- Single-store paid plan
- Multi-store paid plan

Billing:

- Yearly subscription for v1
- Future option:
  - one-time software payment
  - yearly subscription for extra features, mobile app, updates, support

Expired subscription:

- Read-only access

Admin levels:

- Shop admin panel for each client/company
- Super admin panel for the owner of the SaaS to manage:
  - clients
  - companies
  - subscriptions
  - plans
  - trial state
  - activation/expiration

---

# 5. User Roles and Permissions

Default roles:

- Admin
- Manager
- Technician
- Cashier

Custom roles:

- Fixed roles first
- Custom roles/permissions can be added later or optionally if user wants to create roles

Permission decisions:

- Technician can update technical statuses on assigned tickets.
- Manager/Admin/Cashier handles payments, invoice creation, final completion/closing.
- Manual stock adjustment: Admin/Manager only.
- Cashier can process refunds directly.
- Refund reason is optional.
- Cost/FIFO batch visibility: Admin + Manager.
- Cashier sees selling price + stock only.
- Technician sees parts availability and can mark parts as used, but does not see cost.

Audit logs:

- Track all create/update/delete/payment/status actions.

---

# 6. Language, Currency, UI

UI languages:

- French
- Arabic
- English

Default UI language:

- French by default
- User can change easily

Arabic:

- RTL required

Customer message languages:

- Arabic
- French

Customer preferred language controls WhatsApp/message language.

Currency:

- DZD only for v1

---

# 7. Customer System

Customer record rules:

- Phone is required for repair.
- Name is optional in normal repair.
- Name is required only if no phone, but the final repair rule says phone is always required.
- Customer can have multiple phone numbers:
  - primary phone
  - extra phone numbers
- Customer has preferred language:
  - Arabic
  - French
- Preferred language default:
  - Arabic if not selected

Duplicate detection:

- Detect by phone + name.

Customer display:

- Show both name and phone.
- Phone is the main identifier.

Product/service sale:

- Customer is required.
- Sale with debt/partial payment requires customer.

Customer groups support:

- Price rules
- Debt alert limit

Customer debt includes:

- Unpaid invoices
- Partial repair balances before invoice
- Old debt/opening balance from before using the app
- Manual debt transactions

Debt limit:

- Warning only, not blocking.
- Customer group has default debt alert limit.
- Individual customer can override this limit.
- If customer debt exceeds limit:
  - system shows warning
  - sale/repair can still continue
  - staff decides what to do

Old customer debt:

- Can be added as opening balance
- Can be added as manual debt transaction

Old debt payment:

- Customer can pay old debt separately.
- Print receipt for old debt payment.

---

# 8. Customer Assets / Devices

A real customer can have saved devices/assets.

Customer asset/device fields:

- Device category/type
- Brand
- Model
- Color
- Storage/RAM
- Notes
- Serial/IMEI optional

Rule:

- Real customer → save device as asset.
- Pure walk-in without identity → do not save as asset by default.
- However, final repair rule requires phone number for repair.

Device categories for repair/assets:

- Phone
- Tablet / iPad
- Laptop
- Desktop computer
- Printer
- Game console
- Accessories / Other if needed

Printer subfamilies:

- Laser printer
- Inkjet / Tank printer

---

# 9. Repair Workflow

Main repair flow:

1. Customer selected/created
2. Device added
3. Problem selected
4. Ticket created
5. Received/deposit ticket printed
6. Diagnosis
7. Customer approval
8. Repair
9. Technician marks parts used
10. Ready for pickup
11. Customer pays/picks up
12. Final ticket/invoice printed
13. Completed

Default repair status:

- Received

Main fixed statuses:

- Received
- In diagnosis
- Waiting customer approval
- In repair
- Ready for pickup
- Completed
- Not repaired / Returned
- Abandoned

Status customization:

- Fixed main statuses
- Custom extra statuses allowed from settings

Every status change is saved in history:

- Old status
- New status
- Changed by user
- Changed date/time
- Optional note

Repair completion rule:

- Ready for pickup = technician finished repair.
- Completed = customer physically picks up device.

If customer never picks up:

- Mark as Abandoned after X days.
- X configurable from settings.

If customer refuses repair after diagnosis:

- Status = Not repaired / Returned.
- Device can be returned without repair.
- Optional diagnosis fee may still be charged.

Repair cancellation:

- Cashier/technician can cancel.
- Cancellation reason optional.

Repair priority:

- Normal
- Rush

Rush repair:

- Flag only, no automatic price change.

Repair due date:

- Optional.

Technician assignment:

- Repair ticket can be assigned only to a technician.
- Assignment optional at creation.

---

# 10. Repair Ticket Required Fields

Required for repair ticket:

- Customer phone number
- Device category/type
- Device brand/model or manual device name
- Problem

Optional:

- Customer name
- Diagnostic note
- Repair price
- Parts
- IMEI/serial
- Device photos
- Pre-repair checklist
- Technician assignment
- Due date
- Priority
- Passcode / pattern note
- Physical location
- Condition notes

Repair price:

- Optional at ticket creation.
- Added later after inspection/diagnosis.

Diagnosis fee:

- Optional.
- Can be charged even if customer refuses repair.

Device condition photos:

- Optional.

Pre-repair checklist:

- Optional.

Post-repair checklist:

- Skipped for first version.

Notes:

- Internal notes
- Customer-visible notes

Attachments:

- Optional device photos only for first version.

Customer signature:

- Skipped first version.

---

# 11. Repair Problems and Warranty

Repair problem selection:

- Predefined problem list
- Custom problem text allowed

Repair problems are linked to device category.

Examples:

- Phone problems
- Laptop problems
- Tablet problems
- Printer problems
- Console problems
- Accessory/other problems

Repair problems:

- Fixed defaults + custom additions allowed.
- Shop can add new problems.

Warranty:

- Each repair problem can have its own warranty duration.
- Ticket uses default warranty from selected problem.
- Custom warranty override allowed.

Warranty claim:

- Reopen same ticket.
- Keep same ticket number.

---

# 12. Repair Parts and Stock Usage

Repair parts:

- Can be selected from inventory.
- Can be added manually if not in inventory.

Manual repair part:

- Cost required.
- Selling price required or included inside repair service price.
- Does not affect stock.
- Cost deducted from profit as an expense.

Stock decrease rule:

- Repair part stock decreases when technician marks part as used.

Earlier idea was customer approval, but final rule is:

- Stock decreases when technician marks part used.

Manual stock adjustment:

- Admin/Manager only.
- Reason optional.

Stock movement history tracks:

- Sale
- Repair usage
- Refund
- Manual adjustment
- Purchase
- Trade-in
- Correction

---

# 13. Repair Payments, Invoice, Pickup

Payment method v1:

- Cash only

Later:

- Bank transfer
- Card/terminal
- Custom payment methods

Payment timing:

- Payment can be added anytime.
- Default payment is at pickup/completion.
- Customer can pay advance/deposit before repair is completed.

Partial payments:

- Allowed.

Payment statuses:

- Unpaid
- Partially paid
- Paid

Remaining balance:

- total - paid amount

Pickup with unpaid balance:

- Allowed with warning.
- Remaining balance becomes customer debt.

Final repair invoice:

- Created only when customer pays/picks up.

---

# 14. Documents / Printing

Store documents = papers/PDFs generated and printed.

Repair documents needed:

1. Deposit / received device ticket
2. Payment / final ticket

Deposit / received device ticket:

- Printed when customer leaves the device.
- Proves the shop received the device.
- Always generated/printable when device is received.
- Shows no price.

Deposit ticket includes:

- Ticket number
- Date/time
- Customer phone
- Device details
- Problem
- Shop terms/conditions

Payment / final ticket:

- Printed when customer pays/picks up.
- Shows repair/services/parts details.
- Shows total, paid amount, remaining balance.
- Shows payment date/time.
- Shows customer/device info.

Product-only / service sale ticket:

- Required.
- Shows items + total + paid + remaining balance.

Old debt payment:

- Print receipt.

Receipt/print language:

- Customer preferred language for customer-related repair documents.
- Product/service sale requires customer, so receipt can use customer language.
- If no customer context exists, use store default language from settings.

---

# 15. Numbering

Ticket number format:

- STORE-TCK-YEAR-SEQUENCE

Example:

- JAF-TCK-2026-0001

Invoice number format:

- STORE-INV-YEAR-SEQUENCE

Example:

- JAF-INV-2026-0001

Final numbering rule:

- Separate ticket/invoice sequence per store.

Offline numbering:

- Temporary local number.
- Replaced after sync with official server number.

Earlier shared sequence idea was replaced by the final rule:

- Separate ticket/invoice sequence per store.

---

# 16. POS Sales

Product/service sale:

- Customer required.

Sale with debt/partial payment:

- Customer required.

Payment method:

- Cash only in v1.

Partial payment:

- Allowed.

Remaining balance:

- Becomes customer debt.

Refund:

- Cashier can refund directly.
- Refund reason optional.

Cash drawer:

- Skip hardware.
- Only record cash.

Tax:

- No tax in first version.

Discounts/pricing:

- Manual price edit allowed.
- Customer group price rules apply.

---

# 17. Customer Pricing and Price Groups

Customer price groups support:

- Percentage discount per group
- Fixed special price per product/service per group

Examples:

- Normal customer
- VIP customer
- Reseller
- Company client
- Technician/partner

Pricing priority:

1. Manual edited price
2. Fixed special price for customer group
3. Percentage discount for customer group
4. Default selling price

Selling price can be edited during sale/repair by staff.

Original catalog price should still be saved for history/profit tracking.

---

# 18. Trade-In

First version:

- Simple buy-used-device flow.

Trade-in payment:

- Cash only.

Trade-in flow:

1. Select/create customer
2. Add used device/item
3. Set purchase price
4. Pay cash
5. Item enters trade-in inventory

Advanced resale status can come later.

---

# 19. Reports

First version reports:

- Sales
- Repair revenue
- Inventory
- Low stock
- Customer debt
- Technician performance
- Profit

Technician performance:

- Completed repairs
- Repair revenue

Profit reports use:

- Product cost
- Service cost
- Manual part expenses

Dashboard first version:

- Sales
- Repairs
- Debts
- Low stock

Reports support:

- Per-store reports
- Global all-store reports for multi-store clients

---

# 20. Multi-Store

Multi-store is a paid/plan feature.

Architecture:

- Multi-tenant + multi-store ready.
- Single-store plan hides multi-store features.

Stock:

- Each store has separate stock.

Reports:

- Per-store reports
- Global all-stores reports for multi-store clients

Stock transfer:

- Skipped first version.

---

# 21. Offline Mode

Offline target:

- Windows desktop app first.

Main system:

- Online SaaS web app.

Offline system:

- Windows cashier desktop app.

Decision:

- Build Web SaaS + Windows offline desktop in first version.

Offline allowed actions first version:

- POS sales
- Repair ticket creation

Earlier broader allowed actions were discussed, but final clarified first desktop version includes:

- POS sales
- Repair ticket creation

Offline printing:

- Required.
- Can print received-device ticket offline.
- Can print sale receipt offline.

Offline stock behavior:

- Allow sale even if stock may be outdated.

Offline sync:

- Automatic when internet returns.
- No manual sync button in final answer.

Offline WhatsApp:

- Skip while offline.
- Send automatically after sync.

Offline data duration:

- Max 7 days offline.

Offline device:

- Cashier computer only for offline mode.

Offline data storage:

- Installed desktop/local app.

Offline sync conflict strategy:

- Avoid conflicts by limiting offline features.

Offline numbering:

- Temporary local number.
- Replaced after sync with official server number.

Desktop platform:

- Windows first.

---

# 22. WhatsApp Notifications

WhatsApp:

- Automatic through WhatsApp API.
- Provider undecided.

Messages sent:

- When repair ticket is created.
- When device is ready for pickup.

Languages:

- Arabic
- French

Customer preferred language controls message language.

Offline WhatsApp:

- Not sent offline.
- Sent automatically after sync.

---

# 23. Backup and Export

Backup:

- Automatic cloud backup.
- Local backup option.
- Client can export their data.

Export formats:

- Excel
- PDF
- Full JSON backup

---

# 24. Authentication

Login:

- Password
- Email or phone

Staff login:

- Phone required

Employees:

- Each employee belongs to one company/client.

---

# 25. Inventory: Main Architecture

Main catalog types:

- Device
- Product
- Part
- Service

Meaning:

- Device = main sellable devices and repair devices:
  - phones
  - tablets/iPads
  - laptops
  - desktop computers
  - printers
  - consoles
- Product = accessories/consumables/software sold to customer:
  - charger
  - cable
  - case
  - glass
  - mouse
  - keyboard
  - RAM
  - SSD
  - antivirus
  - printer ink
  - tools
- Part = repair parts used in repair tickets:
  - screen
  - battery
  - charging port
  - keyboard
  - speaker
  - printer roller
  - HDMI port
- Service = labor/service work:
  - screen replacement
  - Windows installation
  - diagnosis
  - cleaning

Inventory physical item types originally discussed as product/accessory/part, then refined to:

- Device
- Product
- Part

Services are separate.

---

# 26. Device Inventory

Device subcategories:

- New device
- Used device
- Caba device

Caba device meaning:

- Imported used device brought by normal people/travelers.
- Usually used, but from a higher-quality country/source.
- Keep label as “Caba device”.

Device categories:

- Phone
- Tablet / iPad
- Laptop
- Desktop computer
- Printer
- Game console
- Other

Device condition:

- Excellent
- Good
- Fair
- Broken

Device status:

- Available
- Reserved
- Sold
- Returned
- Damaged

Device reservation:

- Device can be reserved for a customer.

Device stock modes:

1. Quantity mode
   - Used when many devices are identical.
   - Example: iPhone 13 128GB Blue, quantity 5.

2. Unit mode
   - Used when each device has different IMEI/cost/condition/price.
   - Example: used/Caba/expensive devices.

Device unit code:

- If no IMEI/serial, system auto-generates internal code.
- User gets warning.
- Generated code must clearly look generated, not like real IMEI.

Device cost:

- Each device unit can have its own cost.

Device selling price:

- Each device unit can have its own selling price.

Device sale:

- Used/Caba device sold like normal product/device.

---

# 27. Product Inventory

Products are quantity-only in v1.

Product examples:

- Charger
- Cable
- Phone case
- Tempered glass
- Mouse
- Keyboard
- Speakers
- Hard drive
- RAM
- Antivirus
- Printer ink
- Toner
- Tools
- Consumables

Product category structure:

- Unlimited nested categories.
- Detailed default list.
- Client can edit/add/remove categories.
- Same product can appear in multiple places using tags/compatibility.

Product has:

- One main category
- Many tags
- Many compatibility links

Example:

HDMI Cable:

- Main category: Universal Accessories > Cables > HDMI
- Tags: Computer, Console, TV, Monitor, HDMI

Antivirus:

- Product
- Tracked by quantity only in v1.
- No license code tracking.

Product units:

- Normal products tracked by quantity only.
- No individual serial/unit tracking for products in v1.

Product images:

- Multiple images per item.

Product duplicate detection:

- SKU/barcode + name/category
- Warn only

Barcode/SKU:

- Auto-generate if empty.

Inventory import:

- Skip first version.
- Manual entry only.

---

# 28. Part Inventory

Parts are repair parts used in tickets.

Part compatibility can link to:

- Device category/family
- Brand
- Model family
- Exact model
- Tags

Part examples:

- iPhone 11 screen
- Samsung A15 charging port
- HP Pavilion 15 keyboard
- Epson L3150 printhead
- PS5 HDMI port

Part categories:

- To be defined more deeply later if needed.
- Existing catalog files include common part groups for phones, tablets, laptops, desktops, printers, consoles.

Part compatibility rule:

- Part can be linked to category + brand + model.

Part stock:

- FIFO batch costing.

---

# 29. Services

Services are separate from inventory stock.

Service fields:

- Name
- Cost
- Price
- Warranty duration
- Category
- Description
- Consumed parts optional

Service can be used in:

- Repair ticket
- POS sale

Service can consume parts.

Examples:

- Screen replacement
- Battery replacement
- Windows installation
- Printer cleaning
- Console HDMI replacement
- Diagnosis

Service warranty:

- Service has warranty if configured.
- Repair problem warranty also exists.

---

# 30. FIFO Stock and Cost Architecture

Important decision:

- Do not store only one cost price.

Each product/part stock arrival creates a FIFO stock batch.

Example:

HDMI Cable:

- Batch 1: quantity 10, cost 390 DA
- Batch 2: quantity 8, cost 400 DA
- Batch 3: quantity 12, cost 420 DA
- Batch 4: quantity 5, cost 450 DA
- Batch 5: quantity 20, cost 390 DA

Costing method:

- FIFO = First In, First Out

When selling or using stock:

- System consumes oldest available batch first.
- Profit uses the real cost from the consumed batch.

Example:

Sell 12 HDMI cables:

- Batch 1: 10 pcs at 390 DA → consumed fully
- Batch 2: 2 pcs at 400 DA → consumed partially

Cost used for profit:

- 10 × 390 + 2 × 400

Admin/manager product page should show:

- Batch quantity
- Remaining quantity
- Cost price
- Purchase date
- Supplier
- Total batch value

Cashier sees:

- Selling price
- Stock quantity

Cost visibility:

- Admin + Manager can see cost/FIFO batches.
- Cashier cannot see cost.

---

# 31. Adding Stock and Purchases

Stock can be added by:

1. Simple stock entry
   - Product/part
   - Quantity
   - Cost price
   - Optional supplier

2. Purchase invoice
   - Supplier
   - Multiple products/parts
   - Quantity per item
   - Cost price per item
   - Invoice date/reference

Both create FIFO stock batches.

Supplier management:

- Full supplier profile.
- Name required.
- Phone optional.
- Address optional.
- Supplier balance/debt tracked.

Supplier debt:

- Unpaid purchase invoices
- Manual supplier balance

Purchase invoice payment:

- Track supplier payments/debt.

Supplier invoice number:

- Optional.

Purchase cost:

- Product cost.
- Extra fees like shipping/transport recorded separately.

Shipping/transport/extra purchase fees:

- Recorded as general expenses.
- Not distributed into product cost.
- Do not change FIFO batch cost.

Batch cost correction:

- Admin can edit batch cost.

Selling price:

- Belongs to product only.
- Not per batch.

---

# 32. Stock and Low Stock

Stock quantity tracked only for physical items:

- Devices if quantity mode
- Products
- Parts

No stock quantity for services.

Low stock:

- Based on per-store stock.
- Global default threshold.
- Per-product override.

Stock movement history tracks:

- Purchase
- Sale
- Repair usage
- Refund
- Manual adjustment
- Trade-in
- Correction

Manual stock adjustment:

- Admin/Manager only.
- Reason optional.

---

# 33. Inventory Categories

Separate category systems for:

- Device
- Product
- Part

Product categories:

- Unlimited nested categories.
- Detailed default list.
- Client can edit and make custom categories.

Same product can appear in multiple places using tags/compatibility.

Product compatibility:

- Family/tags
- Exact device model links if needed

Part compatibility:

- Category
- Brand
- Model

---

# 34. Default Device Repair Catalog Strategy

The repair catalog should be guided, not just a flat parts list.

Flow:

- Device family
- Brand
- Model family
- Common model / generation
- Problem
- Suggested parts/services

Example:

Laptop → HP → Pavilion → Pavilion 15 → Broken screen → suggested screen/LCD cable/hinges.

Catalog coverage target:

- Around 70% of common repair cases by default.
- Remaining 30% handled by custom add/manual entry.

Catalog strategy:

1. Include most common brands and model families.
2. Include common parts/problems for each device family.
3. Do not try to include every exact model in the world.
4. Allow shop to add custom brand/model/problem/part instantly during ticket creation.

Brand/model catalog levels:

- Global default catalog = common 70%.
- Store custom catalog = local additions.

For exact models:

- Do not list every tiny reference.
- Use:
  - Brand
  - Family
  - Series/size
  - Exact model text field

Example:

Laptop → HP → Pavilion → Pavilion 15 → exact model typed manually like 15-cs3004tx.

---

# 35. Default Catalog Files Created

Separate markdown catalog files were created:

1. `repaire_laptop_default_catalog.md`
2. `repaire_phone_default_catalog.md`
3. `repaire_tablet_ipad_default_catalog.md`
4. `repaire_printer_default_catalog.md`
5. `repaire_desktop_computer_default_catalog.md`
6. `repaire_game_console_default_catalog.md`
7. `repaire_products_accessories_default_catalog.md`

These files contain large default catalogs for:

- Brands
- Model families
- Common models/generations
- Common problems
- Common parts
- Repair flow rules
- Data model notes

---

# 36. Laptop Catalog Decisions

Laptop and desktop are separate device families.

Laptop default brands: expanded list.

Included brands:

- HP
- Dell
- Lenovo
- Acer
- Asus
- Apple
- MSI
- Toshiba
- Samsung
- Huawei
- Microsoft Surface
- Fujitsu
- Sony VAIO
- Packard Bell
- Gateway
- Medion
- Alienware
- Gigabyte / Aorus
- Razer
- LG
- Panasonic
- Chuwi
- Xiaomi / Redmi
- Honor
- Thomson
- Dynabook
- Other

Laptop UX:

- Show common families first.
- Hide older/rare families under “More models”.
- Always show Search.
- Always provide Other/Add custom model.

Laptop flow:

1. Laptop
2. Brand
3. Family
4. Common variant/series
5. Exact model typed manually if needed
6. Problem
7. Suggested parts

---

# 37. Phone Catalog Decisions

Phone catalog should handle brands in Algerian market and many common models.

Phone priority brands:

- Samsung
- Xiaomi
- Redmi
- Poco
- Apple
- Oppo
- Realme
- Infinix
- Tecno
- Huawei
- Honor
- Vivo
- Itel
- Nokia / HMD
- Condor
- Iris
- Stream
- OnePlus
- Google Pixel

Extended brands include:

- Motorola
- Sony
- LG
- ZTE
- Meizu
- Lenovo
- Alcatel
- Wiko
- Nothing
- Blackview
- Doogee
- Ulefone
- Cubot
- Oukitel
- TCL
- Hisense
- HTC
- Asus ROG Phone
- Nubia / RedMagic
- Other

Phone model approach:

- Brand → model family → model/generation.
- RAM/storage/color are fields, not separate models.
- Exact model/reference can be typed manually.

Examples:

Samsung → Galaxy A Series → A10/A12/A13/A14/A15/A16 etc.

Apple → iPhone 11/12/13/14/15/16/17 families.

Xiaomi/Redmi/Poco separated but searchable and compatibility can overlap.

Local brands included:

- Condor
- Iris
- Stream

---

# 38. Tablet / iPad Catalog Decisions

Tablet/iPad brands:

- Apple iPad
- Samsung Galaxy Tab
- Lenovo Tab
- Huawei MatePad / MediaPad
- Xiaomi Pad / Redmi Pad
- Honor Pad
- Oppo Pad
- Realme Pad
- Amazon Fire
- Microsoft Surface
- Alcatel
- Condor
- Iris
- Stream
- Tecno
- Infinix
- Nokia / HMD
- Other

Tablet/iPad model approach:

- Brand → family → generation.
- Storage, color, Wi-Fi/cellular, serial/IMEI are fields.

Examples:

Apple → iPad / iPad mini / iPad Air / iPad Pro.

Samsung → Galaxy Tab A / Tab S / Tab E / Tab Active.

---

# 39. Printer Catalog Decisions

Printer subfamilies:

- Laser printer
- Inkjet / Tank printer

Printer brands:

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

Printer UX:

1. Select Printer
2. Select Laser or Inkjet/Tank
3. Select brand
4. Select model family
5. Enter exact model/reference if needed
6. Select problem
7. Suggested parts/consumables

Common printer problems include:

- Paper jam
- Paper not feeding
- Print quality issue
- Blank page
- Toner/drum/fuser issue
- Printhead clogged
- Ink absorber full
- Cartridge not detected
- Wi-Fi/USB issue
- Scanner/ADF issue

Consumables are products, not parts, unless used in repair ticket.

---

# 40. Desktop Computer Catalog Decisions

Desktop computer is separate from laptop.

Desktop types:

- Branded desktop PC
- Custom assembled PC
- All-in-one PC
- Mini PC
- Gaming PC
- Workstation
- Server / small office server
- Thin client
- Other desktop computer

Priority UX order:

1. Custom assembled PC
2. Branded desktop PC
3. All-in-one PC
4. Mini PC
5. Gaming PC
6. Workstation
7. Server/small office server
8. Other

Desktop brands:

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

Custom assembled PC fields:

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

---

# 41. Game Console Catalog Decisions

Game console platforms:

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
- Other handheld/emulator console

Console flow:

1. Game console
2. Platform/brand
3. Console family
4. Model/generation
5. Problem
6. Suggested parts/services

Common console problems include:

- No power
- HDMI port damaged
- Overheating
- Fan noise
- Disc not reading
- Storage issue
- Controller drift
- Dock not displaying
- USB-C port damaged
- Wi-Fi/Bluetooth issue

---

# 42. Products / Accessories Catalog Decisions

Product root categories:

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

Product examples:

- Chargers
- Cables
- Phone cases
- Tempered glass
- Earphones/headphones
- Power banks
- Mouse
- Keyboard
- Speakers
- HDD/SSD
- RAM
- Laptop bags
- Adapters/hubs
- Antivirus
- Windows license
- Office license
- Ink
- Toner
- Paper
- Console controller
- HDMI cables
- Repair tools
- Glue
- Thermal paste
- Alcohol
- Solder wire
- Screws

Important product rule:

- Same product can appear in multiple places using tags.

Example:

HDMI Cable:

- Main category: Universal Accessories > Cables > HDMI
- Tags: Computer, Console, TV, Monitor

Antivirus:

- Product
- Quantity only in v1
- No license code tracking

---

# 43. Suggested Database Groups

High-level database groups:

Auth/store:

- users
- roles
- permissions
- companies
- stores
- store_settings
- user_store_access

Customers:

- customers
- customer_phone_numbers
- customer_groups
- customer_group_price_rules
- customer_group_debt_limits
- customer_debt_transactions
- customer_assets
- customer_history_logs
- customer_notes

Repair:

- repair_tickets
- repair_statuses
- repair_status_history
- repair_categories
- repair_problems
- repair_ticket_problems
- repair_ticket_parts
- repair_notes
- repair_condition_images
- repair_checklists
- warranty_claims

Catalog:

- device_families
- device_subfamilies
- device_brands
- device_model_families
- device_models
- device_model_aliases
- device_variants
- store_custom_catalog_entries

Inventory:

- devices
- device_units
- products
- product_categories
- product_tags
- product_tag_links
- product_compatibility
- parts
- part_categories
- part_compatibility
- services
- service_categories
- service_consumed_parts

Stock/purchase:

- inventory_stock_batches
- stock_movements
- suppliers
- supplier_balances
- purchase_invoices
- purchase_invoice_items
- supplier_payments
- expenses

Sales/payments:

- sales
- sale_items
- invoices
- invoice_items
- payments
- payment_methods
- refunds

Trade-in:

- tradein_purchases
- tradein_items
- tradein_payments

Documents/reports:

- document_sequences
- pdf_templates
- print_templates
- report_snapshots
- activity_logs

Offline:

- offline_sessions
- offline_local_documents
- offline_sync_queue
- offline_sync_logs

SaaS:

- plans
- subscriptions
- trials
- company_billing
- super_admin_users

---

# 44. Main API Groups

Suggested API groups:

- /api/auth
- /api/users
- /api/companies
- /api/stores
- /api/customers
- /api/customer-groups
- /api/customer-assets
- /api/customer-debts

Repair:

- /api/repair/tickets
- /api/repair/statuses
- /api/repair/problems
- /api/repair/checklists
- /api/repair/parts-used
- /api/repair/documents

Catalog:

- /api/catalog/device-families
- /api/catalog/brands
- /api/catalog/model-families
- /api/catalog/models
- /api/catalog/custom

Inventory:

- /api/inventory/devices
- /api/inventory/products
- /api/inventory/parts
- /api/inventory/services
- /api/inventory/categories
- /api/inventory/stock-batches
- /api/inventory/stock-movements
- /api/inventory/adjustments

Suppliers/purchases:

- /api/suppliers
- /api/purchase-invoices
- /api/supplier-payments

POS/sales:

- /api/pos/cart
- /api/sales
- /api/invoices
- /api/payments
- /api/refunds

Trade-in:

- /api/trade-in

Reports:

- /api/reports

Settings:

- /api/settings
- /api/pdf
- /api/whatsapp
- /api/offline-sync
- /api/super-admin

---

# 45. Frontend Pages

Suggested pages:

Auth:

- /login

Dashboard:

- /dashboard

Customers:

- /customers
- /customers/new
- /customers/[id]
- /customers/groups
- /customers/assets
- /customers/debts

POS:

- /pos
- /pos/repair
- /pos/products
- /pos/trade-in

Repairs:

- /repairs
- /repairs/[id]

Inventory:

- /inventory/devices
- /inventory/products
- /inventory/parts
- /inventory/services
- /inventory/stock
- /inventory/low-stock
- /inventory/purchases
- /inventory/suppliers

Sales:

- /sales
- /invoices
- /payments

Trade-in:

- /trade-in

Reports:

- /reports
- /reports/sales
- /reports/repairs
- /reports/inventory
- /reports/debts
- /reports/technicians
- /reports/profit

Settings:

- /settings/store
- /settings/profile
- /settings/inventory
- /settings/documents
- /settings/whatsapp
- /settings/users
- /settings/roles

Super admin:

- /super-admin/clients
- /super-admin/plans
- /super-admin/subscriptions

---

# 46. MVP Build Order

Recommended build order:

1. Foundation
   - Next.js app
   - database
   - auth
   - tenant/company model
   - store model
   - layout/sidebar/topbar

2. Users and roles
   - admin
   - manager
   - technician
   - cashier

3. Customers
   - customer CRUD
   - multiple phones
   - customer groups
   - debt alert limit
   - opening balance/manual debt

4. Catalog foundation
   - device families
   - brands
   - model families
   - models
   - custom entries

5. Inventory
   - devices
   - products
   - parts
   - services
   - FIFO stock batches
   - stock movements

6. Suppliers and purchases
   - suppliers
   - purchase invoices
   - supplier payments/debt

7. Repair tickets
   - repair wizard
   - ticket list/detail
   - statuses/history
   - parts/services/manual parts
   - technician assignment
   - ready/completed flow

8. Printing
   - received-device ticket
   - final/payment ticket
   - sale receipt
   - debt payment receipt

9. POS sales
   - cart
   - product/service sale
   - cash payments
   - partial payments/debt
   - refunds

10. Reports
   - sales
   - repairs
   - debts
   - low stock
   - profit
   - technician performance

11. WhatsApp
   - ticket created message
   - ready for pickup message

12. Offline Windows app
   - POS sales
   - repair ticket creation
   - offline printing
   - automatic sync

13. SaaS/super admin
   - plans
   - trial
   - subscriptions
   - read-only expired access

---

# 47. Core First Usable Workflow

The first strong usable version should support:

1. Customer with phone
2. Device received
3. Repair ticket created
4. Received-device ticket printed
5. Diagnosis
6. Repair price/parts/services added
7. Technician marks parts used
8. Customer notified when ready
9. Customer pays fully or partially
10. Final ticket/invoice printed
11. Device picked up
12. Customer debt updated if unpaid
13. Reports updated
14. Inventory stock updated using FIFO

---

# 48. Important Design Philosophy

The app must feel complete but not difficult.

For catalog UX:

- Common items first.
- Search everywhere.
- “Other” and “Add custom” always available.
- Do not block ticket creation if exact model is missing.
- Defaults cover 70% of cases.
- Custom entries cover the rest.
- Store custom additions are tenant-specific.
- Global default catalog is protected.

For repair UX:

- Smooth guided flow.
- Device family → brand → model → problem → suggested parts.
- Manual override always possible.

For inventory UX:

- Products easy to sell.
- Admin/manager can inspect cost batches.
- Cashier sees only needed info.
- FIFO cost/profit handled automatically.

For SaaS:

- Multi-store-ready architecture.
- Single-store plan stays simple.
- Multi-store features hidden unless plan supports them.

For offline:

- Desktop Windows cashier app.
- Limited operations to avoid conflict.
- Temporary numbers replaced after sync.
- WhatsApp sent after sync.

---

# 49. Files Produced During This Discussion

Generated MD files:

- `/mnt/data/repaire_laptop_default_catalog.md`
- `/mnt/data/repaire_phone_default_catalog.md`
- `/mnt/data/repaire_tablet_ipad_default_catalog.md`
- `/mnt/data/repaire_printer_default_catalog.md`
- `/mnt/data/repaire_desktop_computer_default_catalog.md`
- `/mnt/data/repaire_game_console_default_catalog.md`
- `/mnt/data/repaire_products_accessories_default_catalog.md`

This file:

- `/mnt/data/repaire_full_architecture_discussion_notes.md`

Recommended next step:

- Use this file as context to generate:
  1. Final normalized architecture document
  2. Database schema
  3. API specification
  4. Implementation phases
  5. Claude/Copilot build prompt
