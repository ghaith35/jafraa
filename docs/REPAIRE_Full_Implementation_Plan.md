# REPAIRE — Full Implementation Plan & UX Mockup Blueprint

> **Document purpose.** This is the master implementation blueprint for the REPAIRE repair-shop SaaS. It supersedes the architecture notes, fixes document, and screen extraction summary as the single source of truth for building the product. It incorporates accepted enhancements from the V1 and V2 critique files, rejects suggestions that contradict the final MVP constraints below, and defers items that are valuable but not required for first launch. This document is intended to be handed directly to a coding agent (Claude Code, Qwen Code, or a senior engineer) as the reference for building the entire system.

> **Document status.** Implementation-ready master plan. Final scope decisions are locked. Open questions are listed in Section 22.

---

## Final MVP Constraints (Non-Negotiable)

These constraints are final unless the product owner explicitly changes them in writing:

1. **Payment methods in MVP v1 are CASH ONLY.** No Baridimob, no CIB, no Dahabia, no CCP, no bank transfer, no card processing.
2. **Non-cash payment methods are V1.5 / V2.** They are noted in the data model so future addition is non-disruptive, but they are not implemented, not seeded, and not surfaced in the UI in v1.
3. **The MVP is shippable by a solo developer using AI-assisted coding** (Claude Code, Qwen Code). Every architectural choice respects this constraint.
4. **The offline Windows cashier app is DEFERRED** out of MVP scope. The v1 architecture is built so it can be added later without refactoring the core data model. The reasoning is in Section 17.
5. **French is the default UI language** for v1. Arabic (RTL) and English are fully supported from day one — RTL is built at component level, not retrofitted.
6. **Currency is DZD only** for v1. Multi-currency hooks exist in the data model for future expansion but no UI surfaces it.
7. **Tenant model.** Customers are **company-scoped** (shared across all stores within a company). All transactional data — tickets, invoices, stock, payments — is **store-scoped**. This decision is final and resolves the multi-store customer ambiguity in the original architecture.
8. **Trial duration is 14 days**, full access. Resolves the 7-day vs 14-day contradiction.
9. **Subscription expiry** triggers a 7-day grace period (full access + warning banner), then read-only mode. **In-flight transactions are never cut off.**
10. **WhatsApp integration uses whatsapp-web.js** with a single persistent session per store and a PostgreSQL-backed message queue. The "5-instance pool" design from the fixes document is rejected as over-engineered; it can be revisited at v2.
11. **Hosting target for v1** is a self-hosted home server with Docker Compose, Nginx, and Cloudflare free tier as reverse proxy. Migration to a VPS is a 2-hour operation when justified.

---

# 1. Product Summary

## 1.1 What REPAIRE Is

REPAIRE is a multi-tenant SaaS application for managing the day-to-day operations of a private repair shop. A repair shop in this context is a small or medium business that fixes consumer electronics — primarily mobile phones, but also laptops, tablets, desktop computers, printers, and game consoles — and that sells related accessories, parts, services, and used/new devices over the counter.

The product is built specifically for the Algerian market. This shapes every design decision: the currency is the Algerian Dinar (DZD), the primary languages are French and Arabic (with English as a third option), the dominant payment method is cash, the dominant communication channel is WhatsApp, and the catalog is seeded with brands and devices that match what is actually repaired in Algerian shops.

REPAIRE replaces the typical workflow of an Algerian repair shop — paper notebooks, Excel sheets, WhatsApp screenshots, and verbal customer agreements — with a single integrated system that handles the entire shop loop.

## 1.2 Who Uses It

- **Shop owner / Admin** (`Admin` role): the person who owns or runs the shop. Full access to everything in their company. Configures stores, hires staff, sets prices, reviews reports, manages subscriptions.
- **Shop manager** (`Manager` role): trusted senior staff. Handles inventory, suppliers, discounts, refunds, debt adjustments, and reports. Cannot manage users or change store-level settings.
- **Cashier** (`Cashier` role): handles the front counter. Creates customers, takes cash payments, processes refunds (current shift only), runs POS sales, opens and closes the cash register. Cannot see cost prices or run reports.
- **Technician** (`Technician` role): the back-room repair specialist. Receives devices, performs diagnosis and repair, marks parts used. Cannot take payments, process refunds, or manage inventory.
- **Super Admin** (separate user table): the REPAIRE operator (you). Manages tenants, plans, subscriptions, trial extensions, and tenant-level support actions like impersonation and per-tenant metrics.

## 1.3 Main Business Value

REPAIRE turns a repair shop from a paper-based operation into a structured one without forcing the staff to change how they actually work. Every screen is built around speed, language flexibility, and the practical reality of how a busy Algerian repair shop runs.

The main value drivers are:

1. **End-to-end repair tracking.** Every device received, diagnosed, repaired, and returned is logged with full status history, customer-visible notes, internal technician notes, parts consumed, and labor charged. Disputes about price or condition are resolved by referencing the system, not by argument.
2. **Cash-aware POS.** The point-of-sale system is built for cash transactions with proper opening/closing register sessions, daily reconciliation, and cash variance tracking. The shop owner knows exactly how much money should be in the drawer at the end of every day.
3. **Inventory with FIFO cost tracking.** Parts and products are tracked at the batch level with the cost they were purchased at. Profit on every sale and repair is calculated against the correct historical cost.
4. **Customer debt management.** Algerian repair shops routinely extend credit to repeat customers. REPAIRE tracks debt by source (repair, sale, manual), enforces optional debt limits with explicit override acknowledgment, and prints customer debt statements on demand.
5. **WhatsApp customer notifications.** Tickets created and devices ready for pickup are notified automatically via WhatsApp, in the customer's preferred language, from the store's actual WhatsApp number.
6. **A built-in catalog of devices.** The shop does not have to enter every brand and model from scratch. The system ships with a seed catalog covering the 70% of devices repaired in Algerian shops, plus the ability to add custom devices on the fly.

## 1.4 Why It Is More Than a Basic POS

A basic POS handles items, prices, and payments. REPAIRE handles the full shop:

- The **repair workflow** is the heart of the product. Tickets pass through 8+ statuses, with parts reserved at intake, used at repair time, and restocked automatically if the repair is refused or abandoned.
- The **estimate / devis flow** captures customer agreement to the price before work begins, providing a paper trail when disputes arise.
- The **partial repair status** lets a ticket stay open while waiting for back-ordered parts, instead of being forced into "in repair" or "ready" inaccurately.
- The **per-problem resolution** field tracks which of the multiple problems on a single ticket were actually fixed, so a customer who came in for a screen and a Wi-Fi issue knows what was done.
- The **trade-in flow** handles both scenarios: the shop buying a used device for cash, and the customer trading their old device toward a new one in the same transaction.
- The **multi-store architecture** lets a chain of shops share customers and customer history while keeping inventory, cash, and accounting separate per store.
- The **warranty tracking** automatically warns staff when a customer brings back a device that was repaired recently and is still under warranty.
- The **reporting suite** covers daily sales, repair revenue, profit (by item type, per ticket, per technician), cash variance, debt aging, low stock, supplier debt, and technician performance.

REPAIRE is designed to be the operating system of a repair shop, not just a cashier tool.

## 1.5 How It Should Feel

For the shop owner: **professional, complete, and trustworthy.** When they look at the dashboard, they see today's revenue, open tickets, low stock, and debt outstanding within two seconds. When they print a final receipt, it has the store name, logo, address, ticket number with the store prefix, customer name, device, parts used, labor charge, and warranty terms — all formatted cleanly.

For the cashier: **fast and forgiving.** The POS opens in one click. Barcode scans add items automatically. Phone-number search jumps directly to the customer. Held carts let them serve a second customer without losing the first one's basket. Cash checkout requires only a counted amount, and the receipt prints in under a second.

For the technician: **focused and clean.** They see only their assigned tickets. Each ticket shows the device, the problems, the parts they reserved, and a notes area. They can switch a ticket to "Ready for pickup" with one click. They do not see the cash register, the supplier list, or the report dashboard.

For the customer: **clear and respectful.** They get a printed received-device ticket with the store's contact details and the ticket number. They get a WhatsApp message in French or Arabic when their device is ready. They get a clean receipt at pickup showing what was done and what they paid. If they have debt, they can ask for a printed statement.

## 1.6 What Must Be Kept Simple for MVP

The biggest risk to a solo-developer SaaS launch is scope creep. The MVP keeps these things simple:

- **One warehouse per store.** No shelf/bin location tracking, no zones, no transfer slips between locations within a store.
- **Cash payments only.** All other payment methods are deferred. The data model uses a `payment_method_id` foreign key from day one, but the seeded list contains only "Espèces" until v1.5.
- **No automated subscription billing.** Super admin activates and extends subscriptions manually. Payment gateways are V2.
- **No CSV imports for products and customers.** Manual entry only. CSV import is V1.5.
- **No customer-facing public tracking page.** Customers receive WhatsApp updates and call the shop. Public tracking is V2.
- **No multi-store stock transfer.** Stores own their stock independently. Multi-store transfer is V2.
- **No commission engine for technicians.** The data model includes a junction table for multi-technician tickets, but commission calculation is V2.
- **A single WhatsApp session per store, persistent.** No connection pool, no Chromium orchestration, no idle teardown logic.
- **No PDF template editor.** The shop uses the shipped templates. Custom templates are V2.

What is *not* simplified, because it would compromise the product on day one: tenant isolation, FIFO cost tracking, refresh token security, RTL Arabic support, the estimate/devis flow, stock reservation at the ticket level, and the cash register session model.

---

# 2. Source Reconciliation Summary

This table reconciles every key decision across the source files (architecture notes, architecture fixes, screen extraction, catalogs, V1 and V2 critique files) and locks the final value used in this implementation plan. Where sources contradict each other, the final decision is shown with the reason.

| # | Topic / Source Decision | Final Decision | Reason |
|---|---|---|---|
| 1 | MVP payment methods | **Cash only** | Final constraint. Non-cash methods are V1.5+. |
| 2 | Trial duration (notes: 7 days, fixes: 14 days) | **14 days** | Repair shops need two weekly cycles to evaluate properly. |
| 3 | Customer scope (architecture: store-scoped, V2 critique: company-scoped) | **Company-scoped** | A multi-store customer must be findable and have unified debt across all stores in the same company. Foundational decision; cannot be changed post-launch. |
| 4 | Walk-in vs phone-required | **Walk-in is a distinct customer type** | Phone is required only for named customers. Walk-ins are tagged "Client de passage", cannot accrue debt, cannot receive WhatsApp. If a phone is captured, the record promotes to a named customer. |
| 5 | UI languages | **French (default), Arabic (RTL), English** | Final from architecture notes; RTL is day-one. |
| 6 | Currency | **DZD only** | Final. Multi-currency hooks exist in data model but no UI in v1. |
| 7 | Default UI language | **French** | Algerian repair shops are French-default with Arabic alongside. English is a third option. |
| 8 | Customer language preference | **Arabic or French** (drives WhatsApp template selection) | English-speaking customers in Algeria are too rare to merit a third WhatsApp template in v1. |
| 9 | WhatsApp integration | **whatsapp-web.js, single session per store, persistent** | Pool architecture from fixes is rejected as over-engineered for v1. Reverted to V2 critique recommendation. |
| 10 | WhatsApp on POS sale | **Toggle, default OFF** | Avoids spamming customers on small accessory purchases. Default surfaced in onboarding setup. |
| 11 | WhatsApp triggers | **Ticket created, Ready for pickup, Customer approval request** | Approval request added per V2 critique 5.2. POS sale toggle added per fixes. |
| 12 | Offline Windows app | **Deferred from MVP** | Conflict resolution is undefined; risk of data corruption is high; solo developer cannot debug both online and offline systems in parallel. Architecture is left clean for future addition. |
| 13 | Tenant isolation enforcement | **Prisma scoped client + ESLint guard against raw `prisma` imports in tenant routes** | Runtime isolation alone is not enough; lint-level guard is needed. Per V1 critique 3.1. |
| 14 | FIFO batch merging | **Removed — every purchase creates a new batch** | COGS accuracy beats minor storage savings. Per V2 critique 4.12. |
| 15 | Stock reservation | **Reserved → Used → Returned-to-stock states on `repair_ticket_parts`** | Solves the part-stolen-by-POS problem. Per V2 critique 4.4. |
| 16 | Customer approval mechanism | **Logged action with WhatsApp send and timestamped staff confirmation** | Per V2 critique 5.2. Original architecture said "no tracking needed"; this is reversed because legal protection requires it. |
| 17 | Estimate / devis document | **Added as a first-class entity with draft → sent → accepted → rejected lifecycle** | Per V1 critique high-priority and V2 critique 4.1. Original architecture lacked this; reinstating it. |
| 18 | Diagnosis fee agreement | **Captured at ticket creation: agreed boolean + amount** | Per V2 critique 4.2. Original architecture said "manual line item later"; reversed because legal protection requires upfront capture. |
| 19 | Notes split | **`internal_notes` and `customer_notes` are separate fields** | Per V2 critique 5.1. Single field conflates technician language and customer-facing text. |
| 20 | Per-problem resolution | **Each `repair_ticket_problem` has its own `resolution_status`** | Per V2 critique 5.4. Multi-problem tickets need per-problem tracking. |
| 21 | Photo intake | **`intake` and `post_repair` photo types with timestamp + uploader** | Per V2 critique 5.6. Optional in v1 but structured. |
| 22 | Reopen path | **"Reopen as new repair" creates a new ticket linked via `original_ticket_id`** | Per V2 critique 5.5. |
| 23 | Multi-technician | **Junction table created now; commission deferred to V2** | Per V2 critique 5.8. |
| 24 | Warranty claim | **Linked via `warranty_original_ticket_id`; system-verified device match; manager confirmation if parts cost exceeds threshold** | Per V2 critique 4.7. Already partially in fixes; tightened. |
| 25 | Held cart limits | **Max 5 per store (configurable); auto-release after 4 hours** | Per V2 critique 6.7. Original "unlimited" had no safeguard. |
| 26 | Cashier refund scope | **Current open session only; prior sessions need Manager** | Per V2 critique C3. Prevents post-shift fraud. |
| 27 | Cashier discount escalation | **Manager PIN approval flow at POS** | Per V1 critique table. Original "Manager only, full stop" kills POS speed. |
| 28 | Stock adjustment reasons | **Mandatory typed reason: count_correction / damaged / loss / theft / supplier_return / opening_balance / other** | Per V2 critique 6.6. Free-text alone cannot be aggregated. |
| 29 | Z-report | **Defined and printable on session close** | Per V2 critique 6.2. Was missing entirely. |
| 30 | Customer phone uniqueness | **Unique per company** | Per V2 critique 4.13. Prevents duplicate customer records with same phone. |
| 31 | Audit log viewer | **Filterable viewer in admin panel** | Per V2 critique 3.5. The data was being collected but unviewable. |
| 32 | Tenant data deletion | **30-day grace period then permanent deletion; logged** | Per V2 critique 9.5. Required for legal compliance (Algerian Law 18-07; legal review needed before launch). |
| 33 | Default expense categories | **Loyer, Salaires, Électricité/Eau, Transport, Fournitures, Autre + custom** | Per V1 critique medium priority. Custom categories allowed. |
| 34 | Catalog: Algerian phone brands | **Add Tecno, Itel, Wiko, Infinix to priority brands; split Poco from Xiaomi** | Per V1 critique high priority. Validated by phone catalog file already including these. |
| 35 | Catalog: Condor across families | **Add Condor as priority brand for laptops, desktops, tablets, phones** | Per V1 critique high priority. Algeria-specific. |
| 36 | Catalog: collapse over-detailed entries | **HP Compaq generations, Dell OptiPlex generations → family + free-text model field** | Per V2 critique 7.2 and 7.3. Repair shops use the case label, not the catalog. |
| 37 | Catalog: printer priority | **Epson EcoTank and Canon PIXMA G series moved to top of their brand sections** | Per V2 critique 7.4. Most repaired in Algerian homes/offices. |
| 38 | Catalog: connector type tag | **Lightning / USB-C / Micro-USB pre-populated on phone and tablet models** | Per V2 critique 7.5. |
| 39 | Product browse paths | **Junction table `product_browse_paths` separate from tags** | Per V2 critique 7.7. Tags solve search; browse paths solve POS catalog navigation. |
| 40 | Custom assembled PC priority | **Move to first position in desktop UX** | Per V2 critique 7.3. |
| 41 | Trade-in offset scope | **Applies to entire cart total** | Per fixes C5. |
| 42 | Soft deletes | **All critical entities use `is_archived` boolean. Invoices, payments, stock_movements, status history are immutable** | Per fixes F3. |
| 43 | Refresh token grace window | **2–3 second window on reuse before family revocation** | Per V2 critique 9.6. Prevents busy-shop multi-tab logouts. |
| 44 | Hosting | **Home server + Docker Compose + Cloudflare free tier as reverse proxy** | Per fixes A3 and G5. Migration-ready. |
| 45 | Backups | **pg_dump every 6 hours, weekly automated restore verification, daily success/failure notification** | Per V2 critique 3.8. Test schedule added. |
| 46 | Empty states | **Defined for every list page; first-login Quick Setup checklist on dashboard** | Per V2 critique 8.5. |
| 47 | Document preview before print/send | **Mandatory preview modal before every print or WhatsApp send** | Per V2 critique 8.7. Prevents thermal paper waste and wrong-message sends. |
| 48 | Held abandoned device transition to inventory | **Workflow: abandoned ticket → "Add to shop inventory as used device"** | Per V2 critique C7. Fills a real workflow gap. |
| 49 | Service consumed parts | **Services may optionally consume parts (e.g. screen replacement service includes the part)** | Per V2 critique C8. |
| 50 | Critique suggestion: Baridimob/CIB/Dahabia/CCP/card | **Rejected for MVP. Listed as V1.5 / V2.** | Final constraint #1. Cash-only MVP. |
| 51 | Critique suggestion: legal claims about abandoned devices | **Captured as a "needs legal validation" open question** | Specific Algerian regulations (Law 18-07 and others) require lawyer review before launch. |
| 52 | Critique suggestion: brand market dominance percentages | **Treated as assumptions; catalog is validated against catalog files, not against critique percentages** | The critique cited percentages without sources; we trust the catalog files which were built on direct shop knowledge. |

---

# 3. Final Scope Definition

## 3.1 MVP v1 (Initial Launch — Must-Have)

The MVP is the set of features required for a shop to use REPAIRE as the operating system of their business from day one.

### Authentication & access
- Custom JWT auth with refresh token rotation (with 2–3 second grace window on race detection)
- 4 roles: Admin, Manager, Cashier, Technician + Super Admin (separate user table)
- Server-side route guards via Next.js middleware (not just client-side)
- ESLint guard against raw `prisma` imports in tenant routes
- Tenant isolation via Prisma scoped client extension
- Audit log with filterable viewer in admin panel

### Multi-tenant SaaS basics
- Companies (tenants), each with one or more stores
- 14-day free trial (full access)
- Single-store and Multi-store plans
- 7-day grace period after expiry, then read-only mode (in-flight transactions never cut off)
- Super admin panel: tenants, plans, subscriptions, trial extensions, tenant impersonation (logged + tenant-visible banner), per-tenant metrics

### Customer system
- Customers company-scoped (shared across stores in a company)
- Phone number unique per company
- Multiple phone numbers per customer
- Customer preferred language (AR / FR)
- Customer groups with debt alert limit (warning only, never blocks)
- Walk-in customer type (no phone, no debt, no WhatsApp)
- Opening balance / manual debt entry
- Customer assets (devices owned by the customer)
- Three-source debt tracking (repair / sale / manual) with allocation priority and cashier override
- Printable debt statement

### Catalog (seed data)
- Device families: Phone, Tablet/iPad, Laptop, Desktop, Printer, Game Console
- Default seeded brands and model families per device family (from catalog files, with adjustments per V2 critique)
- Repair problem catalog per device family
- Product/part/service catalog with multi-path category browsing and tags
- Custom additions per store
- Catalog management screens for super admin (global) and admin (store-custom)

### Inventory
- 4 item types: Products, Parts, Services, Devices (unit mode + quantity mode)
- FIFO batches: every purchase creates a new batch (no merging)
- Stock reservation at ticket level (Reserved → Used → Returned-to-stock)
- `cost_price_snapshot` locked at consumption time
- Selling price set per item; profit reported against batch cost
- Stock movements log (immutable)
- Manual stock adjustments with mandatory typed reason
- Stock count sessions (expected vs actual)
- High-value stock adjustment threshold (Admin approval required above threshold)
- Low stock per item (with sidebar badge)
- Barcode/SKU enforced unique per store

### Suppliers & purchase invoices
- Supplier: name + phone + address; supplier debt tracked
- Purchase invoice: one supplier, mixed item types, immediate stock add
- Partial supplier payments (installments)
- Supplier overpayment safeguard (warn if payment exceeds outstanding)

### Repair workflow
- Status flow: Received → In diagnosis → Waiting customer approval → In repair → Partially repaired (waiting parts) → Ready for pickup → Completed | Not repaired/Returned | Abandoned
- Custom extra statuses allowed from settings
- Status history: timestamp, user, optional note
- Ticket fields: customer (or walk-in), device (from catalog or free text), problems (multiple, each with resolution_status), diagnosis fee agreement, deposit, parts (reserved/used), services, labor charge, warranty days, internal notes, customer notes, intake photos
- Estimate / devis document with lifecycle (draft → sent → accepted → rejected → converted_to_invoice)
- Customer approval: WhatsApp sent automatically + logged confirmation by staff
- Multi-technician (junction table; commission deferred to V2)
- Warranty tracking with system-verified device match and manager confirmation if cost exceeds threshold
- Reopen-as-new-repair on closed Not repaired tickets
- Auto-restock on Not repaired / Abandoned status transitions
- Deposit handling on failed repair: refund / credit / transfer to new ticket
- Abandoned device 3-step workflow: notice sent → grace period → abandoned (legal wording requires legal review)
- Abandoned device → inventory transition

### POS sales
- Cart with products, parts, services, devices
- Repair checkout always separate from product sale
- Cart persisted in DB; survives refresh
- Multiple held carts (max 5 per store, auto-release after 4 hours)
- Stock reservation visibility on cart resume
- Line and cart-level discounts (Manager+ only)
- Price override per line (Manager+ only) with mandatory reason
- Cashier discount escalation: Cashier requests → Manager PIN approves
- Barcode scanning (USB scanner = keyboard event detection)
- Guest sale mode (cash only, configurable threshold, no customer required)
- Zero-payment checkout allowed (full debt) for named customers only
- Returns / refunds: cashier (current session only), manager+ (any time)
- Refund types: full product return, partial product return, service refund (no restock), cash refund

### Cash & payments
- Payment method seed: "Espèces" only in v1 (with payment_method_id FK ready for V1.5)
- Cash register session: open (with starting cash) → closed (with counted cash) → variance recorded
- Z-report on close: opening cash, sales by method (just cash in v1), refunds, repair payments, debt collected, expenses, expected cash, counted cash, variance
- Auto-alert if session open > 12 hours
- Force-close by manager with mandatory note
- One open session per store
- Payments cannot be hard-deleted; void requires mandatory reason + manager alert
- Deposits link to ticket; applied to invoice automatically when invoice generated

### Trade-in
- Scenario A (cash purchase only) and Scenario B (trade + new device sale)
- Device fields: brand + model + condition + purchase price
- Post-inspection: resell / for_parts / pending
- Resell creates inventory device with cost = trade-in price
- Trade-in offsets entire cart total in Scenario B
- Document printed on confirmation

### WhatsApp notifications
- whatsapp-web.js, single persistent session per store, QR setup
- 3 triggers: ticket created, customer approval request, ready for pickup
- POS sale receipt: toggle (default OFF)
- Default and per-store editable templates in AR and FR
- Message preview before send
- Message queue in PostgreSQL
- Failed sends visible on ticket (red badge)
- Manual wa.me link always visible as fallback
- Encrypted session data with key from environment variable
- Rate limit: 30 messages/hour/store

### Documents (PDF + thermal)
- Received-device ticket
- Estimate / devis
- Final repair invoice / receipt
- POS sale receipt
- Debt payment receipt
- Refund receipt
- Trade-in receipt
- Debt statement per customer
- Z-report (cash session close)
- Purchase invoice print
- Abandoned device notice
- Document numbering: STORE_PREFIX-YYYY-MM-NNNN, monthly reset, advisory locked
- All documents support FR and AR (separate templates for AR RTL)
- Preview modal before print
- Two formats: A4 (full documents) and 80mm thermal (POS receipts, Z-reports, debt receipts)

### Reports
- Dashboard widgets: today's revenue (vs yesterday), open tickets by status, devices not picked up >X days, low stock count, total debt outstanding
- Sales report (by item type, by date range)
- Repairs report (by status, by date range)
- Profit report (segmented: products, services, repair labor, by item type, per ticket, per technician)
- Debt report (snapshot, by customer group, debt aging)
- Technician performance (tickets closed, avg resolution time, revenue, warranty rate)
- Cash flow report (collections − expenses − supplier payments)
- Supplier debt report (oldest unpaid, pay-now action)
- Low stock report
- Stock loss report (by adjustment reason)
- All reports exportable to PDF
- Date filters: today / week / month / year / custom

### Expenses
- Expense categories (default seeded + custom per store)
- Expense entries: date, amount, category, note
- Net profit in profit report = gross profit − total expenses

### Settings
- Store settings: name, prefix, address, phone, ticket numbering, default WhatsApp on sale, abandoned device threshold (days), low stock default threshold, currency display
- Catalog management (admin scope)
- User management (admin only)
- WhatsApp connection (QR scan + session status)
- PDF/thermal template selection
- Backup status display

### Reconciliation & maintenance
- Cron jobs: counter reconciliation every 6 hours, refresh token cleanup nightly, abandoned ticket auto-flag, held cart auto-release, backup verification weekly
- Logs: reconciliation drift, backup status, WhatsApp message attempts

## 3.2 V1.5 (Post-MVP — Within First 6 Months)

Features that are valuable, non-breaking to add later, and likely needed once shops use the product daily.

- **Non-cash payment methods:** Baridimob, BaridiPay, CCP virement, Virement bancaire, Carte CIB, Dahabia. Adds rows to `payment_methods` and one new field on payments. Each method auto-segregated in Z-report.
- **CSV import for customers and opening balances** (phone, name, debt amount, date, reference)
- **CSV import for products** (name, SKU, price, stock_qty, category)
- **Customer-facing public repair tracking page** (no login; customer enters phone + ticket number)
- **Tenant data export** (downloadable archive of all tenant data)
- **Multi-store stock transfer** (between stores in same company; with stock movements + transfer document)
- **Senior Technician role** (limited Manager: can see cost prices, create purchase invoices, cannot adjust debt or take payments)
- **Repair photo timeline** (before/after at every status change)
- **Automated weekly low-stock WhatsApp summary to Admin**
- **Automated payment gateway integration** (Chargily, CIB e-commerce) for SaaS subscription billing
- **Customer satisfaction WhatsApp prompt** (post-completion star rating)
- **Configurable WhatsApp templates with rich variables and previews**
- **Backup status email/WhatsApp notification to super admin daily**
- **Audit log viewer with advanced filtering and CSV export**

## 3.3 V2 (Post-V1.5 — As Justified by User Demand)

Larger features that require either user demand validation or significant additional engineering.

- **Offline Windows cashier app** (Electron + SQLite + sync queue) — full architecture in Section 17
- **Technician commission engine** (rules: per ticket / per labor / per part)
- **Capability-based permissions** (replacing fixed roles with toggleable capabilities)
- **Custom PDF template editor**
- **Customer loyalty / repeat-customer pricing** (auto-apply discount after X tickets)
- **Multi-currency support** (cost_currency + exchange_rate per batch; UI surfaces it)
- **WhatsApp Business API path** (Twilio or 360dialog) as a premium reliability tier
- **WhatsApp session pool** (multi-instance Chromium with lazy init/teardown) — only if scale justifies
- **Multi-warehouse per store** (shelf/bin location tracking)
- **Mobile-optimized technician PWA** (assigned tickets, status updates from phone)
- **Tenant-side feature usage analytics**
- **Marketplace for parts** (suppliers can publish catalogs)
- **Inter-shop part sharing** (one shop sells a rare part to another shop)

## 3.4 Not Now (Out of Scope or Rejected)

- **Card terminal integration / POS card processing.** No use case in v1.
- **Inventory device serial-number tracking for every unit.** Unit-mode devices have an internal_code; per-unit IMEI/serial is optional.
- **Per-license-key software product tracking.** Software is sold by quantity in v1.
- **Famiclone / 8-bit clone consoles.** Validate demand before adding.
- **Xbox 360 JTAG/RGH modification flow.** Legal/policy decision required; out of scope until decided.
- **Brand-by-brand market percentage assumptions from critique.** Treated as assumptions; not enshrined in scope.
- **Public marketplace.** Shop-to-shop or shop-to-customer marketplaces are out of scope.
- **Recurring service contracts / maintenance plans.** Out of scope for repair-shop primary use case.

---

# 4. User Roles and Permissions Plan

## 4.1 Role Definitions

REPAIRE has 4 in-tenant roles plus 1 platform-level role. Roles are fixed in v1; capability-based permissions are V2.

### Super Admin (platform-level)
- Lives in a separate `super_admin_users` table.
- Manages tenants (companies), plans, subscriptions, trials.
- Tenant impersonation with full audit logging and tenant-visible banner.
- Cannot create or modify shop data directly except via impersonation.

### Admin (company-level)
- Owner or top operator of the shop.
- Full access to all data within their company.
- Sole role that can manage users and store settings.
- Sole role that can approve high-value stock adjustments.
- Sole role that can request tenant data deletion.

### Manager (store-level)
- Trusted senior staff.
- All operational access within stores they have been granted access to.
- Cannot manage users or change store-level settings.
- Cannot approve their own price overrides on their own discounts above thresholds (Admin must).

### Cashier (store-level)
- Front-counter staff.
- Operates POS, takes cash, opens/closes register, creates customers.
- Cannot see cost prices or FIFO batch information.
- Cannot run reports.
- Cannot apply discounts above the configured threshold without Manager PIN.
- Cannot refund prior-session transactions without Manager.

### Technician (store-level)
- Back-room repair specialist.
- Can create repair tickets (auto-assigned to themselves) and update status of their tickets.
- Cannot take payments.
- Cannot do POS sales.
- Cannot adjust debt.
- Cannot delete tickets.

## 4.2 Final Permissions Matrix

### Repair tickets

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| Create repair ticket | ✓ | ✓ | ✓ | ✓ (auto-assigned to self) |
| View all tickets | ✓ | ✓ | ✓ | ✓ (only assigned to self by default; toggle to view all) |
| Update repair status | ✓ | ✓ | ✓ | ✓ (only on assigned tickets) |
| Mark Ready for pickup (triggers invoice) | ✓ | ✓ | ✓ | ✓ |
| Add part to ticket (reserve) | ✓ | ✓ | ✓ | ✓ |
| Mark part as used (deduct stock) | ✓ | ✓ | — | ✓ |
| Return reserved part to stock | ✓ | ✓ | — | ✓ |
| Edit repair labor charge | ✓ | ✓ | — | — |
| Edit problems / resolution per problem | ✓ | ✓ | ✓ | ✓ |
| Cancel / delete ticket | ✓ | ✓ | ✓ | — |
| Assign technician (other than self) | ✓ | ✓ | ✓ | — |
| Reopen "Not repaired" ticket | ✓ | ✓ | ✓ | — |
| Approve customer estimate (mark accepted) | ✓ | ✓ | ✓ | ✓ |
| Confirm warranty claim (above threshold) | ✓ | ✓ | — | — |
| Capture intake photos | ✓ | ✓ | ✓ | ✓ |
| Edit internal notes | ✓ | ✓ | ✓ | ✓ |
| Edit customer-visible notes | ✓ | ✓ | ✓ | ✓ |

### Estimates / devis

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| Create estimate | ✓ | ✓ | ✓ | ✓ |
| Send estimate (WhatsApp / print) | ✓ | ✓ | ✓ | ✓ |
| Mark accepted / rejected | ✓ | ✓ | ✓ | ✓ |
| Convert to repair ticket | ✓ | ✓ | ✓ | ✓ |
| Edit price after sent (Manager) | ✓ | ✓ | — | — |

### POS sales

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| Create POS sale | ✓ | ✓ | ✓ | — |
| Hold cart / resume held cart | ✓ | ✓ | ✓ | — |
| Apply discount within threshold | ✓ | ✓ | ✓ | — |
| Apply discount above threshold | ✓ | ✓ | — (escalation: Manager PIN) | — |
| Override price on cart line | ✓ | ✓ | — | — |
| Guest sale mode | ✓ | ✓ | ✓ | — |
| Process refund (current session) | ✓ | ✓ | ✓ | — |
| Process refund (prior session) | ✓ | ✓ | — | — |

### Cash & payments

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| Take cash payment | ✓ | ✓ | ✓ | — |
| Open cash register | ✓ | ✓ | ✓ | — |
| Close cash register (own session) | ✓ | ✓ | ✓ | — |
| Force-close session (other user's) | ✓ | ✓ | — | — |
| View cash variance / Z-report | ✓ | ✓ | ✓ (own session only) | — |
| Void payment (with reason) | ✓ | ✓ | — (escalation only) | — |
| Record old debt payment | ✓ | ✓ | ✓ | — |

### Customers & debt

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| Create / edit customers | ✓ | ✓ | ✓ | ✓ |
| Archive customer | ✓ | ✓ | — | — |
| Merge duplicate customers | ✓ | ✓ | — | — |
| View customer debt details | ✓ | ✓ | ✓ | — |
| Add manual debt / opening balance | ✓ | ✓ | — | — |
| Manual debt adjustment / write-off | ✓ | ✓ | — | — |
| Override debt allocation on payment | ✓ | ✓ | ✓ | — |
| Print debt statement | ✓ | ✓ | ✓ | — |

### Inventory

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| View products / parts / services / devices | ✓ | ✓ | ✓ | ✓ |
| View cost price / FIFO batches | ✓ | ✓ | — | — |
| Create / edit / archive inventory items | ✓ | ✓ | — | — |
| Create purchase invoice (add stock) | ✓ | ✓ | — | — |
| Pay supplier | ✓ | ✓ | — | — |
| Manual stock adjustment (below threshold) | ✓ | ✓ | — | — |
| Manual stock adjustment (above threshold) | ✓ | — (Admin approval) | — | — |
| Open / confirm stock count session | ✓ | ✓ | — | — |
| Process trade-in (purchase + Scenario B) | ✓ | ✓ | ✓ | — |
| Set trade-in destination (resell / parts) | ✓ | ✓ | — | — |

### Reports & settings

| Action | Admin | Manager | Cashier | Technician |
|---|---|---|---|---|
| View reports | ✓ | ✓ | — (own Z-report only) | — |
| Export reports as PDF | ✓ | ✓ | — | — |
| Manage store settings | ✓ | — | — | — |
| Manage users / roles | ✓ | — | — | — |
| Manage catalog (store-custom) | ✓ | ✓ | — | — |
| View audit log | ✓ | ✓ | — | — |
| WhatsApp connection setup / reconnect | ✓ | ✓ | — | — |
| Manage expenses | ✓ | ✓ | — | — |

### Super admin

| Action | Super Admin |
|---|---|
| Create / edit / suspend tenants | ✓ |
| Activate / extend / cancel subscriptions | ✓ |
| Modify global default catalogs | ✓ |
| Impersonate tenant (logged) | ✓ |
| View per-tenant metrics | ✓ |
| View backup status | ✓ |
| View tenant error logs | ✓ |
| Manually extend trials | ✓ |
| Force tenant to read-only | ✓ |

## 4.3 Discount Approval Flow

Cashiers cannot apply discounts above the store-configured threshold (default: 5% of line total, configurable per store). When a cashier attempts to add such a discount:

1. The cashier enters the discount and selects a reason from the dropdown.
2. The system shows a "Manager approval required" modal.
3. The manager enters their 4-digit PIN (set in user settings).
4. On valid PIN, the discount is applied. The transaction stores both the cashier and the approving manager's user IDs immutably on the invoice line.
5. On invalid PIN, the discount is not applied; the attempt is logged with timestamp.

The PIN is independent of the manager's password. It is stored hashed (bcrypt) and is only used for in-shop approvals.

## 4.4 Refund Approval Rules

- **Cashier refunds the current open session only.** The refund is created in the same session, restocking the items at their original FIFO cost.
- **Refunds from prior sessions** require Manager + Admin. The system surfaces a "Manager required" modal at the refund attempt.
- **Service refunds** (no physical item) require Manager + Admin regardless of session — there is no automatic restock signal, so judgement is needed.
- **Refund amount** above a configured threshold (default: 10,000 DZD) requires Admin even within the current session.

## 4.5 Audit Logging Rules

Every privileged action is logged immutably in `audit_logs`:
- User authentication events (login, logout, refresh, failed login)
- All financial actions: payments, refunds, voids, debt adjustments, discount applications
- All stock-altering actions: purchase invoices, stock adjustments, stock count confirmations
- All status changes on repair tickets
- All settings changes on the store
- All super admin actions, including impersonation start/stop

Each log row stores: `entity_type`, `entity_id`, `action`, `changed_fields_json` (a JSON diff of before/after values), `user_id`, `ip_address`, `user_agent`, `created_at`. Logs are retained for 12 months and purged by a monthly cron job.

The audit log is queryable from the admin panel (filterable by user, action type, entity type, date range) — an audit log without a viewer is useless.

## 4.6 Manager Override and Tenant Impersonation

When a manager needs to perform a higher-privilege action (price override, large discount, prior-session refund), the system enforces it inline, not by switching session. The user remains logged in as themselves; the action records both the operator and the approver.

Tenant impersonation by super admin is a separate mechanism. When a super admin starts an impersonation session:
1. A modal asks for a reason (mandatory).
2. The session starts with a banner visible to anyone in the tenant: "Support en cours par REPAIRE — [super admin name]".
3. All actions performed during impersonation are logged with both user IDs (the super admin and the impersonated user).
4. The super admin cannot perform any irreversible action without an additional confirmation step.


---

# 5. SaaS and Multi-Tenant Architecture Plan

## 5.1 Tenant Hierarchy

```
Super Admin (platform)
    └── Companies (tenants)
            ├── Subscriptions
            ├── Users (Admin, Manager, Cashier, Technician)
            ├── Customers (company-scoped — shared across stores)
            └── Stores (1 or many depending on plan)
                    ├── Inventory (products, parts, services, devices)
                    ├── Suppliers
                    ├── Repair tickets, Estimates, Invoices
                    ├── POS sales, Payments, Refunds
                    ├── Cash register sessions
                    ├── Expenses
                    ├── WhatsApp session
                    ├── Document sequences
                    └── Settings
```

**Key rule:** Customers are company-scoped. All transactional and inventory data is store-scoped. Every transactional record (ticket, invoice, payment) must reference both the `company_id` (for tenant isolation) and the `store_id` (for store-level operations and reporting).

## 5.2 Subscription Lifecycle

States in `company_subscriptions.status`:

- **`trial`** — 14 days from creation. Full access. No payment required.
- **`active`** — Subscription paid and within validity period. Full access.
- **`grace`** — Subscription expired but within 7-day grace window. Full access plus a persistent warning banner showing days remaining.
- **`read_only`** — Beyond grace window without renewal. Read-only access (no creates, edits, payments, stock changes). View, search, print, export still allowed.
- **`cancelled`** — Tenant has explicitly cancelled. Same restrictions as `read_only`. Data retained until tenant data deletion is explicitly requested or a configurable retention period elapses.
- **`suspended`** — Force-set by super admin (e.g. payment dispute). Same as `read_only`.

Transitions:
- `trial` → `active` (super admin activates a paid plan; trial conversion)
- `trial` → `read_only` (trial expires without conversion; no grace for trials)
- `active` → `grace` (`expires_at` passes; automatic via cron)
- `grace` → `active` (super admin extends; cron rechecks)
- `grace` → `read_only` (`grace_ends_at` passes; automatic via cron)
- `read_only` → `active` (super admin reactivates)
- any state → `suspended` (super admin)
- any state → `cancelled` (admin requests cancellation, super admin confirms)

## 5.3 In-Flight Transaction Protection

When a subscription transitions from `grace` to `read_only`, transactions that have begun but are not yet committed must complete normally. The cron job that flips the status:
- Runs at 02:00 daily.
- Skips any company that has an open cash register session, an open cart, or an unfinished checkout in the last 5 minutes (rechecked next run).
- Logs every status flip with the previous status, new status, and reason.

Read-only mode is enforced by middleware on every API write route. Once enforced:
- POST/PUT/PATCH/DELETE return `403 SUBSCRIPTION_READ_ONLY` for all tenant-scoped routes.
- GET endpoints continue to function normally.
- Print/export endpoints continue to function normally.
- The frontend shows a persistent banner with a "Renew now" call to action linking to a contact page.

## 5.4 Tenant Isolation Rules

1. **Prisma scoped client.** Every API route uses a request-scoped Prisma client extension that automatically injects `company_id` (and where appropriate, `store_id`) into every query. Raw `prisma` access is forbidden in tenant routes.
2. **ESLint rule.** A custom ESLint rule blocks `import { prisma } from '...'` in any file under `/app/api/` not in the allowlist (`auth/`, `super-admin/`, `cron/`).
3. **Middleware enforcement.** Next.js middleware decodes the JWT, extracts `user_id` and `company_id`, validates the user's allowed `store_ids`, validates the requested `store_id` against that list, and attaches the scoped client to the request context.
4. **Server-side route guards.** Every page route checks role and company scope before rendering. A Technician hitting `/dashboard/reports` receives a 403, not a redirect.
5. **No raw IDs in URLs without authorization.** Every detail route validates that the requested entity belongs to the authenticated tenant.

## 5.5 Plans

| Plan | Stores | Users | Features |
|---|---|---|---|
| **Trial** | 1 | unlimited | All features, 14 days |
| **Single-store** | 1 | unlimited | All features within one store |
| **Multi-store** | unlimited | unlimited | All features + multi-store reports + multi-store customer search |

Pricing is set per-tenant by the super admin (no public pricing page in v1). Two payment models per tenant:
- **Yearly subscription:** full price every year, includes all updates and support.
- **One-time license + yearly maintenance:** higher upfront cost, smaller yearly fee for updates and support. If maintenance lapses, the app remains fully functional but receives no updates.

## 5.6 Multi-Store Behavior

### Customers
Customers are company-scoped. Phone is unique per company. A customer who visits Store A and Store B is the same record. Their debt is unified across stores. Their repair history is unified across stores.

### Inventory
Stock is store-scoped. Each store has its own inventory of products, parts, services, and devices. The same SKU may exist in two stores at different costs and prices. Stock transfer between stores is V1.5.

### Repair tickets
Each ticket belongs to one store. The ticket number includes the store prefix (e.g. `TIZ-2025-11-0042` for Tizi Ouzou store, `ALG-2025-11-0017` for the Alger store).

### Reports
Reports are scoped per store by default. Multi-store plans get an additional "All stores" filter that aggregates across the company.

### Cash register sessions
Each store has its own register sessions. The Z-report is per-store.

### Catalog
The default catalog is global (managed by super admin). Custom catalog additions are scoped per store. Two stores in the same company can independently extend the catalog.

## 5.7 Data Storage Per Tenant Scope

| Data | Scope |
|---|---|
| Users | Company |
| Customers | **Company** |
| Customer phones | Company |
| Customer debt balances | Company (with per-store breakdown if needed for analytics) |
| Customer assets | Company |
| Stores | Company |
| Subscriptions | Company |
| Audit logs | Company (filtered by store_id when the action is store-scoped) |
| Repair tickets | Store |
| Estimates | Store |
| Invoices | Store |
| Payments | Store |
| Refunds | Store |
| Carts | Store |
| Cash register sessions | Store |
| Products, parts, services, devices | Store |
| Suppliers | Store |
| Purchase invoices | Store |
| Stock batches | Store |
| Stock movements | Store |
| WhatsApp sessions / templates | Store |
| Settings | Store |
| Document sequences | Store |
| Expenses | Store |
| Custom catalog entries | Store |


---

# 6. Full Module Breakdown

Each module is described with: purpose, core features, required screens, key actions, validation rules, edge cases, MVP simplifications, and deferred items.

## 6.1 Authentication

**Purpose.** Securely authenticate users into their company tenant with role-based access.

**Core features.**
- Email + password login.
- JWT access token (15 min) + refresh token (7 days) with rotation.
- Refresh token reuse detection with 2–3 second grace window for race conditions.
- Logout (revokes all refresh tokens for the user).
- Password reset via email link (V1).
- 4-digit Manager PIN (separate from password) for in-shop approvals.

**Screens.**
- Login.
- Forgot password.
- Reset password (link from email).
- Profile (change password, change PIN, language preference).

**Validation.**
- Email format validation.
- Password minimum 8 characters with at least one digit and one letter.
- Account lockout after 5 failed attempts in 15 minutes.

**Edge cases.**
- A user logged in on multiple devices: refresh token rotation supports this with the 2–3 second grace window.
- A trial expired: the user can still log in to view data; create/edit attempts are blocked at the API level.
- Subscription suspended: same as expired.

**MVP scope.** Email + password only. No 2FA, no SSO, no OAuth. All deferred to V2.

## 6.2 Dashboard

**Purpose.** Single screen the user sees on login. Communicates the shop's current state in two seconds.

**Core widgets.**
- Today's revenue (vs yesterday) with a small sparkline.
- Open repair tickets by status (badges with counts).
- Devices not picked up for more than X days (configurable, default 7).
- Low stock count.
- Total debt outstanding.
- Cash register status (open / closed) with current expected cash.

**First-login Quick Setup checklist.**
- Set store name, prefix, address, phone.
- Connect WhatsApp.
- Configure ticket numbering format.
- Add first product.
- Add first customer.
- Open cash register for the first time.

The checklist is dismissible once completed.

**Empty state.** When the dashboard is loaded for a brand-new shop, all widgets show their empty states with contextual CTAs ("Aucune vente aujourd'hui — Créer une vente" → POS).

**MVP scope.** Static widgets. No customizable layout. No drilldown beyond clicking through to filtered list pages.

## 6.3 Customers

**Purpose.** Manage the customers of the shop. Customers are company-scoped.

**Core features.**
- Customer CRUD with primary phone (required) and additional phones.
- Walk-in customer type (no phone, no debt, no WhatsApp).
- Customer groups with debt limit.
- Per-customer debt limit override.
- Customer preferred language (AR / FR).
- Customer assets (devices owned).
- Communication timeline (WhatsApp logs + status changes + manual notes).
- Duplicate detection on phone match (same company).
- Merge duplicate customers (Admin/Manager).
- Archive customer (Admin/Manager).

**Screens.**
- Customer list (search, filter by group, filter by debt status).
- Customer create modal.
- Customer detail page with tabs: Profile, Repair history, POS history, Debt, Assets, Communication, Notes.
- Debt statement preview / print.
- Merge confirmation dialog.

**Validation.**
- Primary phone required for named customers (Algerian phone format: starts with 0, 10 digits).
- Walk-in customers have a system-generated name like "Client de passage — 2025-05-03 10:42".
- On phone match in same company, duplicate detection prompts staff to use existing record or create new (with name confirmation).

**Edge cases.**
- A walk-in customer who later provides a phone: promotes to a named customer, generates a name (or asks for one), preserves any tickets/sales linked to the original walk-in record.
- Merging customers: combines debt history, repair history, POS history. Original records are archived but not deleted.
- A customer's debt limit is exceeded: warning banner shown at ticket/POS creation, requires explicit dismissal.

**MVP scope.** Customer assets list is a simple list. Communication timeline is a chronological feed of WhatsApp logs and status changes (manual notes are V1.5).

## 6.4 Customer Devices / Assets

**Purpose.** Track devices owned by a customer (different from inventory devices). Helps recurring repairs by storing device details once.

**Core features.**
- Asset fields: device family, brand, model, IMEI/serial (optional), color, storage, notes.
- Linked to customer (company-scoped).
- Asset auto-created when a repair ticket is created for a new device on a customer.
- Asset history shows all repair tickets ever filed for this asset.

**Screens.** Tab on customer detail page. Asset detail modal shows repair history for this specific device.

**Validation.** Brand and model required (or "Other / Custom" with free text).

**MVP scope.** No serial-uniqueness check across customers — same IMEI under two customers is allowed (data entry mistakes happen). A "merge devices" tool is V2.

## 6.5 Repair Tickets

**Purpose.** Core entity of the system. Tracks every device received for repair through its full lifecycle.

**Core features.**
- Status flow with custom statuses allowed.
- Multiple problems per ticket, each with its own resolution status.
- Diagnosis fee agreement at intake.
- Estimate / devis flow.
- Customer approval step with WhatsApp.
- Parts reservation (Reserved → Used → Returned-to-stock).
- Multiple technicians (junction table).
- Internal notes vs customer-visible notes.
- Intake photos (`intake` type) and post-repair photos (`post_repair` type).
- Auto-assignment of technician when a Technician creates a ticket.
- Reopen-as-new-repair on closed Not repaired tickets.
- Warranty tracking: warning banner when same customer + same device returns within warranty period.
- Auto-restock parts on Not repaired / Abandoned status.
- Abandoned device 3-step workflow.
- Final invoice auto-generated on Ready for pickup.
- WhatsApp sent on: ticket created, customer approval request, ready for pickup.

**Status definitions.**
- `received` — device intake recorded.
- `in_diagnosis` — technician inspecting.
- `waiting_approval` — estimate sent, awaiting customer confirmation.
- `in_repair` — customer approved, work in progress.
- `partially_repaired` — some problems fixed, others waiting for back-ordered parts. Device is still in shop.
- `ready_for_pickup` — work complete, invoice generated, customer notified.
- `completed` — customer paid (in full or partial with debt) and picked up the device.
- `not_repaired` — customer refused or repair impossible. Device returned. Optional diagnosis fee.
- `abandoned` — customer never picked up after grace period.
- (Custom statuses defined per-store appear after `partially_repaired` in any sort order.)

**Required ticket fields.**
- Customer (named or walk-in placeholder).
- Device family.
- Device brand + model OR free-text device name.
- At least one problem.
- Customer phone (only for named customers).
- Diagnosis fee agreed (boolean) and amount (if agreed).
- Estimated due date (optional, used for late-pickup warnings).
- Rush flag (optional).

**Optional ticket fields.**
- Color, storage, IMEI/serial, condition notes.
- Intake photos.
- Pre-repair checklist items.
- Warranty days (default from shop settings, editable).
- Internal notes.
- Customer notes.
- Multiple technician assignments.

**Screens.**
- Ticket list with status filter, technician filter, customer filter, date filter.
- Ticket detail page with tabs: Overview, Parts (reserved + used), Services, Estimates, Notes (internal + customer), Status history, Photos, Communications.
- Ticket creation wizard (Step 1: customer → Step 2: device → Step 3: problems → Step 4: pricing/options → Step 5: confirmation).
- Estimate detail / preview.
- Customer approval action button.
- Print received-device ticket.
- Print final receipt / invoice.

**Validation.**
- A walk-in ticket cannot generate WhatsApp messages.
- A walk-in ticket cannot accrue debt; if balance is unpaid at completion, payment is required to proceed.
- Diagnosis fee amount > 0 if `diagnosis_fee_agreed = true`.
- Status transitions must follow the allowed graph; back-transitions are allowed for corrections only and are logged.
- Marking Ready for pickup triggers invoice generation; this fails if no labor + no parts + no services exist on the ticket (something must be charged unless `is_warranty_repair = true`).
- Marking Not repaired or Abandoned auto-restocks all parts in `used` state for that ticket.

**Edge cases.**
- A repair that requires returning to "in_diagnosis" mid-way: allowed; status history logs the back-transition.
- A part is marked used but the ticket goes to Not repaired: the part is automatically returned to stock at the same batch and cost.
- A customer disputes the price on Ready for pickup: the manager can edit the labor charge; this regenerates the invoice and logs the edit.
- A ticket has multiple problems and only some are fixed: each problem's `resolution_status` is set independently; the final receipt prints all problems with their resolution.
- A warranty repair where new damage is found: the manager converts the warranty repair to a paid repair with a clear conversion note. The original warranty link is preserved.

**MVP scope.** The 3-step abandoned device workflow exists but the legal wording on the abandoned device notice is a placeholder pending legal review.

## 6.6 Diagnosis

**Purpose.** Capture the technician's diagnostic findings before quoting the customer.

**Core features.**
- Free-text diagnostic notes (internal).
- Suggested parts and services from the catalog (based on device family and problems).
- Estimated time (optional).
- Estimated cost (used to populate the estimate / devis).

**Screens.** Tab on the ticket detail page. The estimate is created from the diagnosis findings.

**MVP scope.** No structured diagnostic templates. No required fields beyond free text.

## 6.7 Estimate / Devis

**Purpose.** Document the price agreement with the customer before work begins.

**Core features.**
- Lifecycle: `draft → sent → accepted → rejected → converted_to_invoice`.
- Multiple line items: labor, parts, services, optional discount.
- Sent via WhatsApp (with PDF attached) or printed.
- On `accepted`: the ticket moves to `in_repair`, the parts on the estimate are reserved.
- On `rejected`: the ticket moves to `not_repaired` with optional diagnosis fee.
- On `converted_to_invoice`: when ticket reaches Ready for pickup, the estimate becomes the invoice (preserving the prices agreed).

**Screens.**
- Estimate create/edit form (within ticket detail).
- Estimate preview (before send).
- Estimate accept/reject action buttons.

**Validation.**
- Estimate must have at least one line item.
- Estimate cannot be edited after `accepted` without manager override.

**Edge cases.**
- The customer accepts in person without a WhatsApp confirmation: staff clicks "Accepted (in person)"; the system logs the staff member and timestamp.
- The customer changes their mind after accepting: the manager can move the ticket back to `waiting_approval` and the estimate to `draft`; the original estimate is archived.

## 6.8 Customer Approval

**Purpose.** Capture the customer's acceptance of the estimate.

**Core features.**
- WhatsApp message sent automatically when ticket moves to `waiting_approval`.
- Message contains: device, problem(s), estimated cost, store name and phone.
- Approval can be confirmed by staff (via phone call or in-person) with a logged action button.
- Once approved, ticket moves to `in_repair` and parts are reserved.

**Screens.** Approval action button on ticket detail page (only enabled in `waiting_approval` status).

**MVP scope.** No web-based customer approval link. Approval is always confirmed by staff. A customer-facing approval link is V2.

## 6.9 Repair Workflow (Statuses + Actions)

**Purpose.** Move a ticket through its lifecycle with the right side effects.

**Status transitions and side effects.**

| From | To | Trigger | Side effects |
|---|---|---|---|
| (new) | received | Ticket created | WhatsApp "ticket created" sent. Received-device ticket printed. |
| received | in_diagnosis | Manual | None. |
| in_diagnosis | waiting_approval | Manual (after estimate created and sent) | WhatsApp "approval request" sent. |
| waiting_approval | in_repair | Customer approves | Parts on estimate reserved. |
| waiting_approval | not_repaired | Customer rejects | Optional diagnosis fee added. Deposit refund/credit/transfer flow. |
| in_repair | partially_repaired | Manual (waiting parts) | None. |
| partially_repaired | in_repair | Manual (parts arrived) | None. |
| in_repair | ready_for_pickup | Manual | Final invoice generated. Deposit applied. WhatsApp "ready for pickup" sent. |
| partially_repaired | ready_for_pickup | Manual (only deferred problems are unresolved) | Same as above. Final invoice reflects only resolved problems with note about deferred ones. |
| ready_for_pickup | completed | Customer pays | Cash payment recorded. Receipt printed. Debt updated if partial. |
| ready_for_pickup | abandoned | Cron (after configurable threshold) | Abandoned notice generated. Used parts restocked. |
| any | not_repaired | Manual | Used parts restocked. Reserved parts returned to stock. |
| not_repaired | (new ticket) | "Reopen as new repair" action | New ticket inherits device + internal notes; linked via `original_ticket_id`. |

## 6.10 Warranty Claims

**Purpose.** Handle returns of devices that were repaired and are still under warranty.

**Core features.**
- Automatic detection: when a new ticket is created for a customer + device that was completed within warranty period.
- Warning banner on new ticket: "Cet appareil est sous garantie du ticket #XXX (X jours restants)."
- New ticket can be marked as `is_warranty_repair = true` and linked via `warranty_original_ticket_id`.
- Warranty repair: labor = 0, parts auto-flagged as warranty (cost charged but not to customer).
- If new damage is discovered: manager converts to paid repair with conversion note.
- Manager confirmation required if warranty parts cost exceeds threshold (default: 5000 DZD).

**Validation.** The warranty link is verified by the system (same customer, same device); not manually entered.

**MVP scope.** Warranty rate is tracked in technician performance report. No automated warranty replacement parts ordering — that's V2.

## 6.11 Abandoned Devices

**Purpose.** Manage devices that customers never pick up.

**3-step workflow.**
1. **Notice:** When a ticket has been in `ready_for_pickup` for more than X days (configurable, default 14), an abandoned notice WhatsApp is sent automatically. The ticket is flagged "Pickup overdue" but remains in `ready_for_pickup`.
2. **Grace period:** A configurable grace period (default 30 days) starts. The ticket appears on the dashboard "Devices not yet picked up" widget.
3. **Abandoned:** If still not picked up after grace period, a cron job moves the ticket to `abandoned`. Used parts are restocked. An abandoned notice document is generated.

**Transition to inventory.** When a ticket is `abandoned`, the device can be transitioned to inventory:
- Action: "Add to shop inventory as used device"
- Creates an inventory device with mode = unit, status = available, cost = 0 (or manually set).
- The customer asset is retained but archived.
- The original ticket is preserved with a note linking to the inventory device.

**Legal note.** The abandoned device notice document includes wording stating the customer has X days to claim the device. The exact legal wording is a placeholder pending legal review (see open questions in Section 22). Algerian law on abandoned property in commercial repair is not directly addressed in these documents; a lawyer must validate before launch.

**MVP scope.** Workflow is implemented; legal text is reviewable by the shop in settings.

## 6.12 POS Product Sale

**Purpose.** Counter sales of products, parts, services, and devices.

**Core features.**
- Cart with line items (product/part/service/device).
- Customer required (or guest sale mode for cash-only sales below threshold).
- Repair ticket checkout is a separate flow (not mixed with POS sales).
- Multiple held carts (max 5 per store, auto-release after 4 hours of inactivity).
- Stock validation on resume (warns if items went out of stock while held).
- Line discount and cart-level discount.
- Price override per line.
- Barcode scanning to add items.
- Quick-access favorites grid (top 8 most sold items per store, auto-computed).

**Screens.**
- POS main screen (catalog browser + cart panel).
- Customer search / create modal.
- Held carts modal.
- Payment modal (cash amount, change due).
- Receipt preview before print.

**Validation.**
- Cannot complete sale without customer (unless guest mode).
- Cannot apply discount above threshold without manager PIN.
- Stock validation at checkout: if any item is out of stock, blocks the checkout with a clear error.

**MVP scope.** Cash-only payment. No split payments. No layaway / hold-with-deposit on POS sales.

## 6.13 Cart and Checkout

**Purpose.** Build a sale, persist it, and complete it atomically.

**Core features.**
- Cart persisted in DB (status: `active | held | completed | cancelled`).
- Hold cart action: keeps the cart in `held` state, frees the cashier to start another.
- Held cart auto-release: cron checks every 30 minutes; held carts inactive for 4 hours are cancelled and any stock reservations released.
- Resume held cart: restores it as the active cart for the user, validates stock.
- Checkout: atomic transaction creates invoice, decreases stock via FIFO, creates payment, updates customer debt, clears cart.

**Edge cases.**
- A held cart references items that are now out of stock: warning shown at resume; affected lines are flagged red.
- Two cashiers each hold a cart with the last unit of an item: first to checkout wins; the second receives a clear "out of stock" error.
- A cart is cancelled with reserved parts: any reservations are released.

**MVP scope.** No reserved-stock-on-held-cart (held carts do not reserve stock). This is intentional — first checkout wins. Stock reservation is only for repair tickets.

## 6.14 Cash Payments

**Purpose.** Accept cash, track it through register sessions, reconcile at end of day.

**Core features.**
- Cash register session: open with starting cash → take payments → close with counted cash → variance.
- One open session per store.
- Cannot take payments if register is closed (system blocks).
- Cashier can only see their own session's data; manager sees all.
- Z-report on close: opening cash, sales, refunds, repair payments, debt collected, expenses (recorded against this session), expected cash, counted cash, variance.
- Force-close by manager with mandatory note.
- Auto-alert if session open >12 hours.
- Cron flags sessions still open after 24 hours.

**Edge cases.**
- A cashier logs out without closing their session: the session remains open. On their next login, the system reminds them to close it.
- A manager force-closes another user's session: the cashier on next login sees a banner "Your session was force-closed by [manager] — see Z-report."
- A cashier closes the session but the variance is significant: the system flags the close in the Z-report and alerts the manager.

## 6.15 Customer Debt

**Purpose.** Track money owed by customers across repairs, sales, and manual entries.

**Core features.**
- Three debt sources tracked separately: `repair_debt`, `sale_debt`, `manual_debt`.
- Total debt computed as a generated column.
- Debt limit warning (full-width banner, requires acknowledgment).
- Debt allocation priority on payment: repair → sale → manual (cashier can override).
- Debt transactions are immutable; corrections create new transactions, not edits.
- Manual debt adjustment with reason (Manager+).
- Customer-scope (company-wide).

**Screens.**
- Customer debt tab on customer detail.
- Debt payment modal (cashier selects which debts to settle).
- Debt statement preview / print.
- Debt aging report (Manager+).

**Validation.**
- Customer debt limit is per-customer (overrides group) or per-group (default).
- A walk-in customer cannot accrue debt.

## 6.16 Refunds and Returns

**Purpose.** Reverse a sale or repair payment, restock items if applicable.

**Refund types.**
- **Full product return:** all items returned, full refund. Items restocked at original batch cost into a new batch (return movement type).
- **Partial product return:** some items returned, partial refund. Returned items restocked.
- **Service refund:** invoice credit; no restock.
- **Cash refund:** cash returned to customer.

**Core features.**
- Refund creates a refund record + restocks items (if applicable) + reduces customer debt or returns cash.
- Refund cannot exceed the original invoice amount.
- Refund requires reason (dropdown: defective / customer changed mind / shop error / warranty / other + free text).
- Cashier scope: current open session only.
- Manager+ scope: any session.

**Screens.**
- Refund modal from invoice detail.
- Refund receipt print.

**Edge cases.**
- A refund on a partially-paid invoice: the unpaid balance is reduced first; any remaining refund amount is paid back in cash.
- A refund on a service: invoice credit only; if invoice was fully paid, the credit is added to the customer's account as a manual_debt with negative balance (i.e., customer credit).

## 6.17 Inventory Products

**Purpose.** Manage products sellable to customers (accessories, consumables, software).

**Core features.**
- Product fields: name, category (multi-path), tags, brand, model, SKU, barcode, selling_price, low_stock_threshold, image (V1.5: multiple images), notes.
- FIFO batches separate from product; product carries denormalized `stock_qty`.
- Multi-path categorization: a product can appear in multiple browse paths (e.g. USB-C charger appears in Phone Products > Chargers AND Tablet Products > Chargers).
- Tags for filtering and compatibility.
- Per-product low-stock threshold override.
- Soft delete via `is_archived`.

**Screens.**
- Product list with category filter, tag filter, search.
- Product detail / edit form.
- Stock history view (movements log filtered to this product).

**Validation.** SKU and barcode unique per store.

## 6.18 Inventory Parts

**Purpose.** Manage parts used in repairs (and sometimes sold directly).

**Core features.**
- Same structure as products.
- Compatibility data: linked device families, brands, model families, models.
- Connector type tag pre-populated where relevant (Lightning / USB-C / Micro-USB).
- Stock reservation tracked separately from stock_qty (POS available = stock_qty − reserved_qty).

**Screens.** Same as products.

## 6.19 Services

**Purpose.** Non-physical items billable on repairs and POS.

**Core features.**
- Service fields: name, category, selling_price, optional cost_price (for profit), duration estimate (optional).
- Services may optionally consume parts (junction table `service_consumed_parts` — when a service is added, its consumed parts are also added).
- Services have no FIFO batches (no physical stock).

**Screens.** Service list, service detail/edit.

## 6.20 Suppliers

**Purpose.** Track who the shop buys parts/products from.

**Core features.**
- Supplier fields: name, phone, address.
- Supplier debt tracking (running balance).
- Partial payments to supplier (installments).
- Supplier overpayment safeguard: warn if payment exceeds outstanding balance.
- Supplier debt report.

**Screens.** Supplier list, supplier detail with purchase history and payment history.

## 6.21 Purchase Invoices

**Purpose.** Record stock arrivals from suppliers and create FIFO batches.

**Core features.**
- One supplier per invoice.
- Mixed item types: products + parts + devices.
- Each line creates a new stock batch (no merging).
- Stock added immediately on save (no draft step).
- Partial payment supported.
- Print purchase invoice.

**Screens.** Purchase invoice list, purchase invoice create form.

**Validation.** Each line requires item_type, item_id, qty, cost_price.

## 6.22 Stock Batches / FIFO

**Purpose.** Track every stock arrival as an immutable batch with its cost. Drives FIFO consumption.

**Core features.**
- Each batch: item_type, item_id, qty_initial, qty_remaining, cost_price, source (purchase invoice or stock adjustment), created_at.
- No batch merging — every purchase creates a new batch.
- Consumption picks the oldest open batch (qty_remaining > 0) ordered by created_at ASC.
- Multi-batch consumption: if quantity needed > qty_remaining of oldest batch, consume across multiple batches.
- cost_price_snapshot locked on stock_movements at consumption time.

**Validation.** Batches are never edited after creation. To correct a wrong cost, create a stock adjustment.

## 6.23 Stock Movements

**Purpose.** Immutable log of every stock change.

**Core features.**
- Movement types: `purchase`, `sale`, `repair_use`, `repair_reservation`, `repair_release`, `adjustment_in`, `adjustment_out`, `return`, `tradein_in`, `tradein_use`, `transfer_out`, `transfer_in`.
- Each movement: item_type, item_id, batch_id, qty_change, cost_price_snapshot, reference (ticket/invoice/PO/adjustment ID), created_at, created_by.
- Drives the stock loss report (segmented by adjustment reason).

**MVP scope.** Movement log is filterable but not editable.

## 6.24 Stock Reservations

**Purpose.** Reserve a part for an open repair ticket so it cannot be sold from POS.

**Core features.**
- A reservation is a `repair_ticket_part` with status = `reserved`.
- POS available qty = `stock_qty − sum(qty WHERE status = 'reserved' AND ticket is open)`.
- Reservation transitions: `reserved → used` (technician marks used; stock movement created) or `reserved → returned_to_stock` (technician returns; reservation released).
- All transitions in a database transaction.

**Edge cases.**
- A reservation references stock that has been adjusted to zero: reservation is flagged invalid; ticket shows a warning.
- A reservation is for a quantity larger than current stock_qty: blocked at reservation time.

## 6.25 Trade-In

**Purpose.** Buy used devices from customers (cash) or accept them as part-payment for new devices.

**Scenarios.** A (cash purchase) and B (trade + new device sale).

**Core features.**
- Device fields: brand + model + condition (working / not_working / for_parts) + purchase price.
- Post-inspection destination: `pending → resell | for_parts`.
- Resell creates inventory device with cost = purchase_price.
- For parts: no inventory entry; parts harvested manually.
- Scenario B: trade-in value applies as a negative line on the sale invoice (entire cart total).
- Scenario B: if trade-in value > sale total, store pays customer the surplus (rare, logged).

**Screens.**
- Trade-in create form (Scenario A).
- Trade-in within POS sale (Scenario B).
- Trade-in detail page (with destination action).

## 6.26 Reports

See Section 15 for full report definitions.

## 6.27 PDFs / Receipts / Tickets

See Section 12 for full document definitions.

## 6.28 WhatsApp Notifications

See Section 13 for full WhatsApp plan.

## 6.29 Catalog Management

**Purpose.** Manage the global default catalog (super admin) and store-custom catalog additions (admin/manager).

**Core features.**
- Global catalog: device families, brands, model families, models, repair problems, problem categories, part categories, part compatibility — all read-only for tenants except via store-custom additions.
- Store custom catalog: additions to brands, model families, models, problems, parts. Stored per store; never modifies the global catalog.
- Search includes both global and store-custom entries.
- "Add custom" buttons available throughout repair ticket creation.

**Screens.**
- (Super admin) Catalog manager: tree view of device families with edit / add / archive.
- (Admin/Manager) Store custom additions list with filters by entity type.

## 6.30 Settings

**Purpose.** Per-store configuration.

**Core features.**
- Store name, prefix, address, phone, email, logo, business hours.
- Ticket numbering format (default: STORE-YYYY-MM-NNNN, monthly reset).
- Default WhatsApp templates (per language) with override.
- Default WhatsApp on POS sale (toggle, default OFF).
- Abandoned device thresholds (notice after X days, abandoned after Y days).
- Low stock default threshold (per-product override available).
- Discount approval threshold (cashier limit).
- Refund approval threshold (manager limit).
- High-value stock adjustment threshold (admin approval).
- Pickup-overdue threshold (dashboard alert).
- Default warranty period for repairs (days).
- WhatsApp connection (QR scan, session status, disconnect).
- PDF/thermal template selection.
- Backup status (read-only).
- Audit log viewer (link).

**Screens.** Settings page with sub-tabs.

## 6.31 Super Admin Panel

**Purpose.** Manage tenants, plans, subscriptions, and provide tenant support.

**Core features.**
- Tenant list with subscription status filter.
- Tenant detail: subscription history, contact info, usage metrics, error log.
- Subscription actions: activate trial, convert trial → paid, extend, cancel, suspend, reactivate.
- Plan management: create / edit / disable plans.
- Tenant impersonation with logged session and visible banner.
- Manual trial extension (one-click).
- Backup status dashboard.
- Per-tenant metrics: tickets/month, sales/month, WhatsApp messages, active users.
- Global catalog management (see 6.29).

**Screens.**
- Super admin dashboard (tenants summary, revenue, recent signups).
- Tenant list.
- Tenant detail.
- Plan list.
- Plan detail.
- Backup status page.
- Global catalog manager.

## 6.32 Offline Windows Cashier App

See Section 17 for full offline app decision and architecture preparation.


---

# 7. Database / Data Model Plan

This section defines the full data model for REPAIRE. For each entity: purpose, important fields, relationships, tenant ownership, key indexes, unique constraints, soft-delete rules, audit requirements.

**Conventions used throughout:**
- Every table has `id` (cuid or UUID), `created_at`, `updated_at`.
- Tables that are "company-scoped" have `company_id`. Tables that are "store-scoped" have `store_id`. Some have both.
- Soft deletes use `is_archived: boolean default false`. Immutable tables (invoices, payments, stock_movements, status history, audit_logs) never soft-delete.
- All money fields use `Decimal(12, 2)` for DZD with 2 decimal precision (Algerian Dinar conventionally uses 2 decimals; round at presentation).
- All timestamps are stored in UTC; presentation converts to Africa/Algiers.
- Foreign keys default to `ON DELETE RESTRICT` unless specified. Soft-delete is preferred over cascade.

## 7.1 Authentication & Tenants

### `companies` (tenants)
- `id`, `name`, `address`, `phone`, `email`, `logo_url` (nullable)
- `created_at`, `updated_at`, `is_archived`
- Indexes: `(name)`

### `super_admin_users`
- `id`, `name`, `email` (unique), `password_hash`, `created_at`
- Separate from tenant users.

### `users`
- `id`, `company_id` (FK), `name`, `email`, `password_hash`, `pin_hash` (nullable, for manager PIN), `role` (`admin | manager | cashier | technician`), `language_preference` (`fr | ar | en` default `fr`), `is_active`, `is_archived`, `created_at`, `updated_at`
- Constraints: `email` unique per company.
- Indexes: `(company_id, role)`.

### `user_store_access`
- `id`, `user_id`, `store_id`
- A user can have access to multiple stores within their company. Admin role implicitly has access to all stores in the company.
- Unique: `(user_id, store_id)`.

### `stores`
- `id`, `company_id`, `name`, `prefix` (used in ticket/invoice numbers), `address`, `phone`, `email` (nullable), `logo_url` (nullable), `business_hours_json`, `is_active`, `is_archived`
- Constraints: `prefix` unique per company.

### `refresh_tokens`
- `id`, `user_id`, `token_hash` (bcrypt), `family_id`, `expires_at`, `is_revoked`, `replaced_by_id` (nullable FK self), `replaced_at` (nullable), `created_at`, `created_ip`
- Indexes: `(user_id)`, `(token_hash)`, `(family_id)`.
- Cleanup cron: delete expired/revoked > 30 days.

### `audit_logs`
- `id`, `company_id`, `store_id` (nullable for company-level events), `user_id` (nullable for super admin events), `super_admin_user_id` (nullable), `action`, `entity_type`, `entity_id`, `changed_fields_json`, `ip_address`, `user_agent`, `created_at`
- Immutable. No edits.
- Indexes: `(company_id, created_at DESC)`, `(entity_type, entity_id)`, `(user_id, created_at DESC)`, `(action, created_at DESC)`.
- Retention: 12 months.

### `plans`
- `id`, `name`, `code` (`trial | single_store | multi_store`), `max_stores` (nullable for unlimited), `features_json`, `created_at`

### `company_subscriptions`
- `id`, `company_id`, `plan_id`, `payment_model` (`yearly | lifetime`), `status` (`trial | active | grace | read_only | cancelled | suspended`), `started_at`, `expires_at` (nullable for lifetime), `grace_ends_at` (nullable), `maintenance_expires_at` (nullable, lifetime only), `activated_by` (super admin user id), `note` (nullable), `created_at`, `updated_at`
- Only one non-cancelled subscription per company.

### `tenant_impersonation_sessions`
- `id`, `super_admin_user_id`, `company_id`, `reason`, `started_at`, `ended_at` (nullable)
- Logs every impersonation. Tenant-visible banner driven by an open row here.

## 7.2 Customers (company-scoped)

### `customer_groups`
- `id`, `company_id`, `name`, `debt_alert_limit` (nullable), `default_discount_percent` (nullable, default 0), `created_at`, `is_archived`

### `customers`
- `id`, `company_id`, `customer_type` (`named | walkin`), `name`, `customer_group_id` (nullable FK), `language_preference` (`ar | fr` default `fr`), `debt_alert_limit_override` (nullable), `cnas_number` (nullable, optional), `casnos_number` (nullable, optional), `address` (nullable), `wilaya_code` (nullable), `notes` (nullable), `created_at`, `updated_at`, `is_archived`
- Constraints: walk-in customers have an auto-generated name; phone is null. Named customers must have at least one phone.
- Indexes: `(company_id, customer_type, is_archived)`, full-text index on `name`.

### `customer_phones`
- `id`, `customer_id`, `phone_number`, `is_primary`, `note` (nullable, e.g. "WhatsApp" / "wife's number"), `created_at`
- Constraints: phone_number unique per company (across all customers). Validated as Algerian format (10 digits starting with 0, or +213 + 9 digits).
- Indexes: `(phone_number)` with company partition.

### `customer_assets` (devices owned by the customer)
- `id`, `customer_id`, `device_family_id`, `device_brand_id` (nullable for custom), `device_model_id` (nullable for custom), `custom_brand` (nullable), `custom_model` (nullable), `imei_serial` (nullable), `color` (nullable), `storage` (nullable), `notes` (nullable), `created_at`, `is_archived`
- Used to autofill ticket creation.

### `customer_debt_balances` (denormalized)
- `id`, `customer_id` (unique), `repair_debt`, `sale_debt`, `manual_debt`, `total_debt` (generated column: `repair_debt + sale_debt + manual_debt`), `updated_at`
- Reconciled every 6 hours by cron.

### `customer_debt_transactions` (immutable ledger)
- `id`, `customer_id`, `store_id` (nullable; some manual adjustments are company-level), `type` (`repair_debt | sale_debt | manual_debt | payment | adjustment | opening_balance`), `direction` (`debit | credit`), `amount`, `invoice_id` (nullable FK), `payment_id` (nullable FK), `note` (nullable), `created_at`, `created_by`
- Source of truth for debt balances.
- Indexes: `(customer_id, created_at DESC)`.

### `customer_debt_payments`
- `id`, `customer_id`, `store_id`, `total_amount`, `note` (nullable), `paid_at`, `created_by`, `cash_register_session_id` (FK)

### `debt_payment_allocations` (junction)
- `id`, `customer_debt_payment_id`, `invoice_id` (nullable, for repair/sale debts), `debt_type` (`repair | sale | manual`), `amount_applied`

## 7.3 Catalog (global + per-store custom)

### `device_families` (global, super admin managed)
- `id`, `code` (`phone | tablet | laptop | desktop | printer | console | other`), `name_fr`, `name_ar`, `name_en`, `display_order`, `icon`, `is_archived`

### `device_brands`
- `id`, `device_family_id`, `name`, `is_default` (true for global seed; false for store-custom), `store_id` (null for global), `display_order`, `is_priority` (true for the priority brands list per family), `created_at`, `is_archived`
- Constraints: name unique per (device_family_id, store_id_or_null).

### `device_model_families`
- `id`, `device_brand_id`, `name`, `is_default`, `store_id` (null for global), `display_order`, `is_archived`

### `device_models`
- `id`, `device_model_family_id`, `name`, `connector_type` (`lightning | usb_c | micro_usb | other | unknown`, nullable), `is_default`, `store_id` (null for global), `display_order`, `is_archived`
- Storage and color are NOT separate models — they are fields on the customer asset / inventory device.

### `device_model_aliases` (search aliases)
- `id`, `device_model_id`, `alias`
- Examples: "PS5" → "PlayStation 5"; "Tab A8" → "Galaxy Tab A8".

### `repair_problem_categories`
- `id`, `device_family_id`, `name`, `display_order`, `is_default`, `store_id` (null for global)

### `repair_problems`
- `id`, `repair_problem_category_id`, `name`, `display_order`, `suggested_part_categories_json` (array of part_category_ids), `is_default`, `store_id` (null for global)

### `part_categories`
- `id`, `device_family_id` (nullable for universal categories), `name`, `display_order`, `is_default`, `store_id` (null for global)

### `product_categories`
- `id`, `parent_id` (nullable for tree), `name`, `display_order`, `is_default`, `store_id` (null for global)

### `tags` (global tag registry)
- `id`, `name`, `category` (`device_family | brand | connector | quality | feature`), `is_default`, `store_id` (null for global)

## 7.4 Inventory (store-scoped)

### `products`
- `id`, `store_id`, `name`, `sku`, `barcode` (nullable), `selling_price`, `stock_qty` (denormalized), `low_stock_threshold` (default from store settings, override per product), `notes` (nullable), `image_url` (nullable), `created_at`, `updated_at`, `is_archived`
- Constraints: `sku` unique per store; `barcode` unique per store when present.

### `product_browse_paths` (junction — multi-path category browsing)
- `id`, `product_id`, `product_category_id`
- A product can be browsed under multiple category paths.

### `product_tag_links` (junction)
- `id`, `product_id`, `tag_id`

### `product_compatibility` (junction — products that are compatible with specific devices)
- `id`, `product_id`, `device_family_id` (nullable), `device_brand_id` (nullable), `device_model_family_id` (nullable), `device_model_id` (nullable)
- Granularity flexible: a part can be compatible at family level, brand level, or specific model level.

### `parts`
- Same structure as `products` plus `compatibility_summary` text (denormalized for display).
- Same junctions: `part_browse_paths` (under part_categories), `part_tag_links`, `part_compatibility`.

### `services`
- `id`, `store_id`, `name`, `selling_price`, `cost_price` (nullable), `duration_minutes` (nullable), `service_category_id` (nullable), `notes` (nullable), `created_at`, `updated_at`, `is_archived`

### `service_consumed_parts` (junction — services that consume parts)
- `id`, `service_id`, `part_id`, `default_qty`

### `devices` (inventory devices for resale)
- `id`, `store_id`, `device_model_id` (nullable), `custom_brand` (nullable), `custom_model` (nullable), `mode` (`unit | quantity`), `condition` (`new | used | refurbished`, nullable for new), `selling_price`, `stock_qty` (for quantity mode) OR `internal_code` (for unit mode), `imei_serial` (nullable), `color` (nullable), `storage` (nullable), `status` (`available | reserved | sold | returned | damaged`), `cost_price` (for unit mode; quantity mode uses batches), `tradein_purchase_id` (nullable FK if originated from trade-in), `original_ticket_id` (nullable FK if originated from abandoned device), `notes` (nullable), `created_at`, `is_archived`

### `stock_batches` (FIFO core)
- `id`, `store_id`, `item_type` (`product | part | device`), `item_id`, `purchase_invoice_id` (nullable), `tradein_purchase_id` (nullable), `stock_adjustment_id` (nullable), `cost_price`, `qty_initial`, `qty_remaining`, `is_open` (computed: `qty_remaining > 0`), `created_at`
- Every purchase creates a new batch (no merging).
- Indexes: `(store_id, item_type, item_id, created_at ASC) WHERE qty_remaining > 0` — critical for FIFO consumption.

### `stock_movements` (immutable log)
- `id`, `store_id`, `item_type`, `item_id`, `batch_id` (nullable for movements that span multiple batches as parent), `movement_type` (`purchase | sale | repair_use | repair_reservation | repair_release | adjustment_in | adjustment_out | return | tradein_in | tradein_use`), `qty_change`, `cost_price_snapshot`, `repair_ticket_id` (nullable), `invoice_id` (nullable), `purchase_invoice_id` (nullable), `stock_adjustment_id` (nullable), `tradein_purchase_id` (nullable), `note` (nullable), `created_at`, `created_by`
- Indexes: `(store_id, item_type, item_id, created_at DESC)`, `(store_id, created_at DESC)`.

### `stock_reservations` (drives stock_qty − reserved logic)
- This is conceptually represented by `repair_ticket_parts` rows where `status = 'reserved'`. No separate table needed.

## 7.5 Suppliers & Purchase Invoices

### `suppliers`
- `id`, `store_id`, `name`, `phone` (nullable), `address` (nullable), `balance_due` (denormalized), `notes` (nullable), `created_at`, `is_archived`

### `purchase_invoices`
- `id`, `store_id`, `supplier_id`, `reference_number` (system-generated using doc_sequences), `total_amount`, `amount_paid`, `balance_due`, `status` (`paid | partial | unpaid`), `note` (nullable), `created_at`, `created_by`

### `purchase_invoice_items`
- `id`, `purchase_invoice_id`, `item_type`, `item_id`, `label` (denormalized name at time of purchase), `qty`, `cost_price`, `line_total`, `batch_id` (FK created on save)

### `supplier_payments`
- `id`, `supplier_id`, `purchase_invoice_id` (nullable for partial payments), `amount`, `note` (nullable), `paid_at`, `created_by`, `cash_register_session_id`

## 7.6 Repair Tickets

### `repair_tickets`
- `id`, `store_id`, `customer_id` (nullable for walk-in), `is_walkin`, `walkin_label` (nullable, for walk-in display name), `walkin_phone` (nullable, optional capture), `ticket_number` (system-generated, store-prefix-year-month-N), `device_family_id`, `device_brand_id` (nullable), `device_model_family_id` (nullable), `device_model_id` (nullable), `custom_brand` (nullable), `custom_model` (nullable), `customer_asset_id` (nullable, links to saved asset), `imei_serial` (nullable), `color` (nullable), `storage` (nullable), `condition_notes` (nullable), `is_rush`, `due_date` (nullable), `diagnosis_fee_agreed` (boolean), `diagnosis_fee_amount` (default 0), `warranty_days` (default from store settings), `is_warranty_repair` (boolean default false), `warranty_original_ticket_id` (nullable FK self), `original_ticket_id` (nullable FK self, for reopened tickets), `internal_notes` (text, nullable), `customer_notes` (text, nullable), `current_status` (denormalized, e.g. `received`), `created_at`, `updated_at`, `created_by`, `is_archived`
- Indexes: `(store_id, current_status)`, `(store_id, customer_id)`, `(store_id, ticket_number)` unique.

### `repair_ticket_problems`
- `id`, `repair_ticket_id`, `repair_problem_id` (nullable for custom), `custom_problem` (nullable), `resolution_status` (`pending | fixed | not_fixed | deferred`), `resolution_note` (nullable), `created_at`

### `repair_ticket_parts` (reservations + usage)
- `id`, `repair_ticket_id`, `part_id` (nullable for manual parts), `manual_part_label` (nullable), `qty`, `unit_price` (selling price at time of reservation), `cost_price_snapshot` (locked when status = used), `batch_id` (nullable, set on used), `status` (`reserved | used | returned_to_stock`), `reserved_at`, `used_at` (nullable), `returned_at` (nullable), `created_by`
- Constraint: `manual_part_label` required if `part_id` is null.

### `repair_ticket_services`
- `id`, `repair_ticket_id`, `service_id` (nullable for manual services), `manual_service_label` (nullable), `qty` (default 1), `unit_price`, `cost_price_snapshot` (nullable), `created_at`

### `repair_ticket_labor_charges`
- Single row per ticket (in v1; multiple is V2): `repair_ticket_id`, `amount`, `note`
- Or simpler: store directly as `labor_amount` on `repair_tickets`. Choosing the inline approach for v1.

### `repair_ticket_technicians` (junction)
- `id`, `repair_ticket_id`, `user_id`, `role` (`lead | support`), `assigned_at`

### `repair_status_history` (immutable)
- `id`, `repair_ticket_id`, `from_status`, `to_status`, `note` (nullable), `created_at`, `created_by`

### `repair_ticket_photos`
- `id`, `repair_ticket_id`, `photo_type` (`intake | post_repair`), `file_path` (UUID-based, non-guessable), `file_size`, `mime_type`, `uploaded_at`, `uploaded_by`

### `estimates`
- `id`, `repair_ticket_id`, `estimate_number` (system-generated), `total_amount`, `discount_amount` (default 0), `subtotal_amount`, `status` (`draft | sent | accepted | rejected | converted_to_invoice | expired`), `valid_until` (nullable), `customer_response_at` (nullable), `customer_response_by` (staff id who confirmed), `note` (nullable), `created_at`, `updated_at`, `created_by`

### `estimate_items`
- `id`, `estimate_id`, `item_type` (`labor | part | service | discount`), `part_id` (nullable), `service_id` (nullable), `label`, `qty`, `unit_price`, `line_total`

## 7.7 Cash Registers, Invoices, Payments

### `payment_methods`
- `id`, `code` (`cash`), `name_fr`, `name_ar`, `name_en`, `is_active`, `is_default`
- v1 seeds: `cash`. v1.5 seeds: `baridimob`, `cib_card`, `dahabia`, `ccp`, `bank_transfer`.

### `cash_register_sessions`
- `id`, `store_id`, `opened_by`, `closed_by` (nullable), `opening_cash`, `expected_cash` (nullable, computed at close), `counted_cash` (nullable), `variance` (nullable), `status` (`open | closed | force_closed`), `force_close_note` (nullable), `note` (nullable), `opened_at`, `closed_at` (nullable)
- Constraint: only one open session per store at a time (partial unique index: `WHERE status = 'open'`).

### `invoices` (unified for repair and sale)
- `id`, `store_id`, `invoice_number` (store-prefix-YYYY-MM-NNNN, monthly reset), `type` (`repair | sale`), `customer_id` (nullable for guest sale), `repair_ticket_id` (nullable), `sale_id` (nullable), `subtotal_amount`, `discount_amount`, `total_amount`, `amount_paid`, `balance_due`, `status` (`draft | issued | paid | partial | refunded | partially_refunded`), `note` (nullable), `issued_at`, `created_at`, `created_by`
- Constraint: `invoice_number` unique per store.

### `invoice_items`
- `id`, `invoice_id`, `item_type` (`labor | part | service | product | device | tradein_credit | discount`), `part_id` (nullable), `service_id` (nullable), `product_id` (nullable), `device_id` (nullable), `label`, `qty`, `unit_price` (original), `override_price` (nullable), `final_unit_price` (computed), `discount_amount` (line discount), `line_total`, `cost_price_snapshot` (nullable for non-physical items), `override_reason` (nullable), `override_approved_by` (nullable user id)

### `payments`
- `id`, `store_id`, `cash_register_session_id`, `customer_id` (nullable for guest sale), `payment_method_id`, `amount`, `payment_type` (`deposit | invoice_payment | debt_payment | refund_out | tradein_payout`), `repair_ticket_id` (nullable, for deposits), `void_reason` (nullable), `void_at` (nullable), `void_by` (nullable), `note` (nullable), `paid_at`, `created_by`
- Constraint: payments cannot be deleted; voids set the void_* fields immutably.

### `payment_invoice_links` (junction — payments to invoices)
- `id`, `payment_id`, `invoice_id`, `amount_applied`

### `refunds`
- `id`, `invoice_id`, `payment_id` (nullable, for cash refunds), `refund_type` (`full_product_return | partial_product_return | service_refund | cash_refund`), `amount`, `reason` (typed: `defective | customer_change | shop_error | warranty | other`), `reason_note` (nullable), `cash_register_session_id`, `refunded_at`, `created_by`

### `refund_items`
- `id`, `refund_id`, `invoice_item_id`, `qty_returned`, `unit_price`, `refund_line_total`, `restock_batch_id` (nullable, for returned-to-stock items)

### `sales` (POS sale wrapper)
- `id`, `store_id`, `cart_id`, `invoice_id`, `customer_id` (nullable), `is_guest_sale`, `total_amount`, `amount_paid`, `balance_due`, `cash_register_session_id`, `whatsapp_sent` (boolean), `created_at`, `created_by`

### `carts`
- `id`, `store_id`, `customer_id` (nullable), `status` (`active | held | completed | cancelled`), `cart_discount_amount` (default 0), `note` (nullable), `held_at` (nullable), `auto_release_at` (nullable, computed: held_at + 4 hours), `created_at`, `updated_at`, `created_by`

### `cart_items`
- `id`, `cart_id`, `item_type` (`product | part | service | device | tradein_credit`), `item_id` (nullable for tradein), `tradein_purchase_id` (nullable, for tradein_credit), `label`, `qty`, `unit_price`, `override_price` (nullable), `line_discount_amount` (default 0), `line_total`, `override_reason` (nullable), `override_approved_by` (nullable)

### `discount_approvals` (audit trail of cashier discount escalations)
- `id`, `cart_id` (nullable), `invoice_id` (nullable), `cart_item_id` (nullable), `requested_by`, `approved_by` (nullable, null if rejected), `approved_at` (nullable), `original_price`, `requested_discount_amount`, `final_discount_amount`, `reason`, `status` (`requested | approved | rejected`)

## 7.8 Trade-In

### `tradein_purchases`
- `id`, `store_id`, `customer_id`, `device_family_id`, `device_brand_id` (nullable), `device_model_id` (nullable), `custom_brand` (nullable), `custom_model` (nullable), `condition` (`working | not_working | for_parts`), `purchase_price`, `amount_paid_to_customer`, `destination_status` (`pending | resell | for_parts`), `device_unit_id` (FK to devices when resell), `linked_sale_id` (nullable, for Scenario B), `cash_register_session_id`, `note` (nullable), `created_at`, `created_by`

## 7.9 WhatsApp

### `whatsapp_sessions`
- `id`, `store_id`, `status` (`connected | disconnected`), `phone_number` (nullable), `session_data_path` (path to encrypted file on disk), `connected_at` (nullable), `disconnected_at` (nullable), `last_health_check` (nullable)

### `whatsapp_templates`
- `id`, `store_id`, `trigger` (`ticket_created | approval_request | ready_for_pickup | sale_receipt | abandoned_notice`), `language` (`fr | ar`), `body`, `is_custom` (false = default global template, true = store override), `updated_at`

### `whatsapp_message_queue`
- `id`, `store_id`, `phone_number`, `message_body`, `trigger`, `status` (`pending | processing | sent | failed`), `attempts` (default 0), `error_message` (nullable), `created_at`, `processed_at` (nullable), `repair_ticket_id` (nullable), `invoice_id` (nullable)

### `whatsapp_logs` (immutable)
- `id`, `store_id`, `repair_ticket_id` (nullable), `invoice_id` (nullable), `customer_id` (nullable), `trigger`, `phone_number`, `language`, `status` (`sent | failed | manual_link`), `error_message` (nullable), `manual_link_clicked_at` (nullable), `sent_at`

## 7.10 Stock Adjustments & Counts

### `stock_adjustments`
- `id`, `store_id`, `item_type`, `item_id`, `adjustment_type` (`increase | decrease | set_exact`), `qty_before`, `qty_change`, `qty_after`, `cost_price` (nullable, for increases), `reason_type` (`count_correction | damaged | loss | theft | supplier_return | opening_balance | other`), `reason_note` (nullable), `requires_admin_approval` (boolean), `approved_by` (nullable), `approved_at` (nullable), `created_at`, `created_by`

### `stock_count_sessions`
- `id`, `store_id`, `status` (`open | confirmed | cancelled`), `note` (nullable), `started_at`, `confirmed_at` (nullable), `created_by`

### `stock_count_items`
- `id`, `stock_count_session_id`, `item_type`, `item_id`, `expected_qty`, `actual_qty` (nullable), `variance` (computed), `stock_adjustment_id` (nullable, set on confirm)

## 7.11 Expenses

### `expense_categories`
- `id`, `store_id` (null for global default), `name`, `is_default`, `display_order`, `is_archived`

### `expenses`
- `id`, `store_id`, `expense_category_id`, `amount`, `expense_date`, `note` (nullable), `cash_register_session_id` (nullable, links to session if recorded during a session), `created_at`, `created_by`

## 7.12 Documents & Files

### `document_sequences`
- `id`, `store_id`, `type` (`ticket | invoice | estimate | purchase_invoice | refund | tradein`), `year`, `month`, `last_number`
- Constraint: unique `(store_id, type, year, month)`. Advisory locked at increment.

### `pdf_generation_queue`
- `id`, `document_type`, `reference_id`, `status` (`pending | processing | completed | failed`), `file_path` (nullable), `created_at`, `completed_at` (nullable)

### `uploaded_files`
- `id`, `store_id`, `file_path` (UUID-based), `file_size`, `mime_type`, `entity_type` (e.g. `repair_ticket_photo`, `customer_logo`, `product_image`), `entity_id`, `uploaded_at`, `uploaded_by`
- Access-gated: file serving endpoint validates user has access to entity.

## 7.13 Reconciliation & System

### `reconciliation_logs`
- `id`, `table_name`, `record_id`, `field_name`, `expected_value`, `actual_value`, `drift_amount`, `auto_fixed` (boolean default false), `created_at`

### `backup_logs`
- `id`, `backup_type` (`postgres | uploads`), `status` (`success | failed | verifying | verified`), `file_path` (nullable), `file_size_bytes` (nullable), `verification_status` (nullable), `verification_at` (nullable), `error_message` (nullable), `created_at`

### `settings` (per-store key-value)
- `id`, `store_id`, `key`, `value_json`, `updated_at`, `updated_by`
- Or alternatively: a single `store_settings` table with explicit columns. Both approaches valid; the project should choose one early.

## 7.14 Critical Indexes Summary

```sql
-- FIFO consumption (the most performance-sensitive query)
CREATE INDEX idx_stock_batches_fifo ON stock_batches (store_id, item_type, item_id, created_at ASC) WHERE qty_remaining > 0;

-- Customer phone lookup (most common search)
CREATE INDEX idx_customer_phones_number ON customer_phones (phone_number);
CREATE UNIQUE INDEX idx_customer_phones_unique ON customer_phones (company_id, phone_number);

-- Trigram fuzzy search on customers and products
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX idx_customers_name_trgm ON customers USING gin (name gin_trgm_ops);
CREATE INDEX idx_products_name_trgm ON products USING gin (name gin_trgm_ops);
CREATE INDEX idx_parts_name_trgm ON parts USING gin (name gin_trgm_ops);

-- Repair ticket list
CREATE INDEX idx_tickets_store_status ON repair_tickets (store_id, current_status, created_at DESC);
CREATE INDEX idx_tickets_customer ON repair_tickets (customer_id, created_at DESC);
CREATE UNIQUE INDEX idx_tickets_number ON repair_tickets (store_id, ticket_number);

-- Invoices
CREATE INDEX idx_invoices_store_customer_status ON invoices (store_id, customer_id, status);
CREATE INDEX idx_invoices_created ON invoices (store_id, created_at DESC);
CREATE UNIQUE INDEX idx_invoice_number ON invoices (store_id, invoice_number);

-- Stock movements
CREATE INDEX idx_movements_item ON stock_movements (store_id, item_type, item_id, created_at DESC);
CREATE INDEX idx_movements_ticket ON stock_movements (repair_ticket_id) WHERE repair_ticket_id IS NOT NULL;

-- Cash register session (one open per store)
CREATE UNIQUE INDEX idx_open_register ON cash_register_sessions (store_id) WHERE status = 'open';

-- Doc sequences
CREATE UNIQUE INDEX idx_doc_seq ON document_sequences (store_id, type, year, month);

-- Audit logs
CREATE INDEX idx_audit_company_created ON audit_logs (company_id, created_at DESC);
CREATE INDEX idx_audit_entity ON audit_logs (entity_type, entity_id);

-- Refresh tokens
CREATE INDEX idx_refresh_tokens_user ON refresh_tokens (user_id);
CREATE INDEX idx_refresh_tokens_family ON refresh_tokens (family_id);

-- Debt
CREATE INDEX idx_debt_balances_customer ON customer_debt_balances (customer_id);
CREATE INDEX idx_debt_txns_customer_created ON customer_debt_transactions (customer_id, created_at DESC);
```

## 7.15 Soft Delete vs Immutable Tables

**Soft-delete tables** (use `is_archived` boolean):
- `users`, `companies`, `stores`, `customers`, `customer_assets`, `customer_groups`
- `products`, `parts`, `services`, `devices` (status = `archived`)
- `suppliers`
- `expense_categories`
- All catalog tables (`device_families`, `device_brands`, `device_model_families`, `device_models`, `repair_problem_categories`, `repair_problems`, `part_categories`, `product_categories`, `tags`)

**Immutable tables** (no deletes, no edits):
- `invoices` (only status changes via refund flow)
- `payments` (only voids via void_* fields)
- `stock_movements`
- `customer_debt_transactions`
- `repair_status_history`
- `audit_logs`
- `whatsapp_logs`
- `reconciliation_logs`
- `backup_logs`
- `tenant_impersonation_sessions`

**Hard-delete allowed** (transient data):
- `carts` (status = cancelled), `cart_items` (when cart cancelled)
- `whatsapp_message_queue` (after sent or failed status finalized)
- `pdf_generation_queue` (after completed)
- `refresh_tokens` (cleanup cron after expired/revoked > 30 days)

## 7.16 Generated Columns and Triggers

```sql
-- Total debt is always the sum of its components
ALTER TABLE customer_debt_balances 
  ADD COLUMN total_debt DECIMAL(12,2) GENERATED ALWAYS AS (repair_debt + sale_debt + manual_debt) STORED;

-- Invoice balance_due
ALTER TABLE invoices
  ADD COLUMN balance_due DECIMAL(12,2) GENERATED ALWAYS AS (total_amount - amount_paid) STORED;

-- Cash register variance
ALTER TABLE cash_register_sessions
  ADD COLUMN variance DECIMAL(12,2) GENERATED ALWAYS AS (counted_cash - expected_cash) STORED;
```


---

# 8. Business Rules Master Section

This section enumerates the exact business rules the system enforces. Where a rule has been changed during reconciliation (Section 2), the final form is shown here.

## 8.1 Repairs

### Ticket creation
- A ticket is created when a device is physically received in the shop.
- Required: customer (named or walk-in placeholder), device family, at least one problem, diagnosis fee agreement (boolean + amount).
- Required for named customer: a primary phone number.
- Walk-in tickets: phone is optional. Walk-in tickets cannot accrue debt and cannot send WhatsApp.
- Diagnosis fee: if `diagnosis_fee_agreed = true`, the fee amount must be > 0. The amount is printed on the received-device ticket as a notice.
- Technician role auto-assigns themselves on creation; cannot reassign.
- Other roles can assign any technician.
- WhatsApp "ticket created" is queued immediately after creation (named customers only, with phone).
- Received-device ticket PDF is generated immediately for printing.

### Estimate / devis
- An estimate is created as a draft inside a ticket detail page during diagnosis.
- An estimate has multiple line items (labor, parts, services, optional discount).
- An estimate can be sent via WhatsApp (with PDF attachment) or printed for the customer.
- On send, estimate status becomes `sent` and ticket status moves to `waiting_approval`.
- WhatsApp "approval request" is queued at this transition.
- Estimate validity: optional `valid_until` field (default 7 days from creation).
- An estimate cannot be edited after `accepted` without manager override.

### Customer approval
- The system confirms approval based on a logged action by staff (the "Customer approved" button on the ticket).
- Confirmation captures: timestamp, staff user ID, optional note about how the customer responded (phone / in-person / WhatsApp reply).
- On approval, ticket moves to `in_repair` and parts on the estimate are reserved automatically.
- On rejection, ticket moves to `not_repaired`. Optional diagnosis fee is added as a manual line item if `diagnosis_fee_agreed = true`.

### Parts: reserved → used → returned
- Adding a part to a ticket creates a `repair_ticket_parts` row with status = `reserved`.
- Reserved quantities reduce POS-available stock but do not create stock movements yet.
- When the technician confirms usage, status moves to `used` and a stock_movement is created (FIFO consumption with cost_price_snapshot).
- If the part is no longer needed, status moves to `returned_to_stock` and the reservation is released. No stock movement (the quantity was never consumed).
- These transitions run in database transactions.

### Repair labor and pricing
- Labor charge is editable by Manager+ only.
- Cashier can see labor charge but not edit it.
- Final invoice = labor + parts (used only) + services + optional discount.
- Discount on repair invoice is a single negative line; Manager+ only.

### Deposit
- A deposit can be taken at ticket creation. It is recorded as a payment with `payment_type = deposit` linked to the ticket.
- Deposits are NOT linked to an invoice yet (the invoice doesn't exist at intake).
- When the invoice is generated at "Ready for pickup", deposits are queried and linked via `payment_invoice_links`. The invoice's `amount_paid` is increased by the total of applied deposits.
- If the ticket fails (Not repaired) and there is an unapplied deposit, the staff is prompted: refund / credit / transfer to new ticket.

### Ready for pickup
- Any role can mark Ready for pickup.
- Triggers atomic transaction: create invoice → apply deposits → set status → log status history.
- WhatsApp "ready for pickup" queued.
- Final receipt PDF generated.

### Completed pickup
- Customer pays at the counter.
- Cash payment recorded; receipt printed.
- If balance remains > 0, debt is updated automatically (as `repair_debt` for the customer).
- Walk-in customers must pay in full at pickup; no debt allowed.
- Status moves to `completed`.

### Not repaired / returned
- Triggered manually (customer rejects, repair impossible, parts unavailable).
- All `used` parts on the ticket are restocked automatically (movement type: `return`, restocked at cost_price_snapshot into a new batch).
- All `reserved` parts have their reservations released.
- If diagnosis fee is agreed and `> 0`, an invoice with that single line is generated for the customer to pay.
- If a deposit exists, prompt staff for action (refund / credit / transfer).
- Device returned to customer.

### Abandoned device
- When a ticket is in `ready_for_pickup` for more than X days (default 14, store-configurable):
  1. WhatsApp "abandoned notice" sent automatically.
  2. Ticket flagged "Pickup overdue" on the dashboard.
- After Y additional days (default 30, store-configurable):
  3. Cron job moves ticket to `abandoned`. Used parts restocked. Abandoned notice document generated.
- Abandoned device → inventory transition: action available to manager+. Creates an inventory device.

### Warranty claim
- When a new ticket is being created for a customer + device combination matching a recent completed ticket within warranty period:
  - System detects via query: `completed_at + warranty_days * INTERVAL '1 day' > NOW()`.
  - Warning banner shown on the new ticket form: "This device has an active warranty from ticket #XXX (X days remaining)."
- Staff can choose: create as warranty repair (link via `warranty_original_ticket_id`, labor = 0 by default) or as new paid repair.
- Warranty repair where new damage is found: manager converts to paid repair with conversion note.
- Manager confirmation required if warranty parts cost > threshold (default 5000 DZD).

### Repeated repair
- If the same customer brings the same device for the same problem within X days of completion (default 30):
  - System surfaces the previous ticket on the new ticket form.
  - This is informational only — does not enforce warranty handling automatically.

### Internal vs customer notes
- `internal_notes` on the ticket are visible only to staff. Never printed on customer-facing documents. Never sent in WhatsApp.
- `customer_notes` are visible on the received-device ticket, the final receipt, and in WhatsApp where applicable.
- Both fields appear on the ticket detail page for staff.

## 8.2 POS

### Guest sale (cash-only sales below threshold)
- Available when `enable_guest_sale = true` in store settings (default ON).
- Threshold: configurable per store (default 5000 DZD).
- Above threshold: customer required (cannot remain guest).
- Guest sales: no customer record created, no debt allowed, simple receipt.
- If a phone is captured during the guest sale, the sale links to that customer (creating it if new).

### Customer sale
- Customer required (or guest if guest mode applies).
- Customer's debt limit checked at checkout. If exceeded, full-width banner shown and explicit acknowledgment required.

### Cash-only checkout
- v1 supports `cash` payment method only.
- The `payment_methods` table is populated with `cash` only; the UI does not show other methods.
- v1.5 adds: Baridimob, BaridiPay, CCP, virement, CIB, Dahabia. No code change beyond seeding rows.

### Debt sale rules
- A named customer can complete checkout with partial payment or zero payment; the unpaid balance becomes `sale_debt`.
- A walk-in customer cannot have debt; checkout requires full payment.
- Customer's debt limit warning is shown at the cart level if total + existing debt would exceed the limit.

### Discount
- Line discount and cart-level discount.
- Cashier can apply discounts up to threshold (default 5% of line; configurable).
- Above threshold: Manager PIN escalation flow (modal asks for PIN, validates, applies, logs both users).
- Discount reasons: dropdown (negotiated / damaged / promotional / staff / other) + optional free text.

### Price override
- Manager+ only.
- Mandatory reason from the same dropdown as discount.
- Both original and final price stored immutably.

### Refunds
- Cashier: current open session only.
- Manager+: any session.
- Refund types: full product return / partial product return / service refund / cash refund.
- Each type has its own restock and ledger behavior (see Section 6.16).
- Restocked items create new batches at original cost (not current).

### Held carts
- Max 5 held carts per store at any time.
- Held > 4 hours of inactivity → auto-cancelled (cron every 30 min).
- Held cart resume validates current stock; warns if any items went out of stock.

### Barcode scanning
- USB scanner = keyboard input. POS detects rapid sequential keystrokes followed by Enter as a barcode scan.
- Scan looks up the SKU/barcode field on products and parts.
- If found and in stock, item is added to cart with qty=1.
- If found but out of stock, error notification.
- If not found, "Barcode not found" notification.

## 8.3 Inventory

### Stock batch creation
- Every purchase invoice line creates a new `stock_batch` (no merging).
- Batch fields: cost_price, qty_initial, qty_remaining (initially equal).
- Stock adjustment of type `increase` also creates a batch (with a nullable purchase_invoice_id).

### FIFO cost
- On consumption, query oldest open batch for the item and consume from it.
- If qty_remaining < required qty, consume fully and move to next-oldest batch.
- Each batch consumption creates a stock_movement with cost_price_snapshot = batch.cost_price.
- The stock_movements log shows the multi-batch breakdown of any consumption.

### Stock decrease
- POS sale → movement type `sale` per item per batch consumed.
- Repair part marked used → movement type `repair_use`.
- Manual adjustment decrease → movement type `adjustment_out`, with reason_type required.

### Stock reservation
- Repair ticket part with status `reserved` is excluded from POS available qty.
- Formula: `pos_available_qty = stock_qty - sum(qty WHERE status = 'reserved' AND ticket.current_status NOT IN (completed, not_repaired, abandoned))`.
- This is computed at query time; it is NOT denormalized in v1 (denormalization is a V2 optimization if performance demands it).

### Manual stock adjustment
- Types: `increase | decrease | set_exact`.
- `set_exact` calculates the diff and applies it as increase or decrease.
- Mandatory typed reason: `count_correction | damaged | loss | theft | supplier_return | opening_balance | other`.
- Optional free-text note alongside the typed reason.
- Manager+ only. Above value threshold: Admin approval required.

### Low stock
- A product/part is "low stock" if `stock_qty - sum_reserved <= low_stock_threshold`.
- Threshold: per-product override, falls back to store-default.
- Sidebar badge shows count of low-stock items in the store.

### Purchase invoice
- One supplier per invoice.
- Mixed item types allowed.
- Stock added immediately on save (no draft).
- Partial supplier payment supported; balance tracked on the supplier.

### Returned / damaged stock
- Damaged stock: manual stock adjustment of type `decrease`, reason_type = `damaged`.
- Lost stock: same with reason_type = `loss` or `theft`.
- These adjustments feed the stock loss report.

## 8.4 Debt and Cash Payments

### Debt creation
- Created automatically when an invoice is closed with balance_due > 0 (only for named customers).
- Recorded as a `customer_debt_transaction` (direction: debit, type: repair_debt or sale_debt depending on invoice type).
- Updates `customer_debt_balances` via trigger.

### Old debt / opening balance
- Manually entered as a `customer_debt_transaction` of type `opening_balance` (manual_debt component).
- Manager+ only.

### Cash payment allocation
- A single payment can allocate to multiple invoices via `payment_invoice_links`.
- Default allocation priority: repair_debt → sale_debt → manual_debt (oldest first within each).
- Cashier can override the allocation per payment.

### Deposit handling
- Deposit at ticket creation: `payment` row with `payment_type = deposit` linked to ticket.
- At "Ready for pickup": deposit applied to the new invoice via `payment_invoice_links`.

### Partial payment at pickup
- Customer pays less than balance_due; the remainder becomes `repair_debt` (for repair) or `sale_debt` (for sale).
- A receipt is printed showing what was paid and what remains.

### Debt limit warning
- Computed at ticket creation, estimate sending, and POS checkout.
- Warning is full-width orange banner: "⚠️ Crédit dépassé — Solde dû : X DZD."
- Explicit "OK" click required to proceed.
- Acknowledgment is logged.

### Receipt printing
- Every cash payment generates a receipt (thermal format by default).
- Preview modal shown before printing.
- Receipt includes: store header, payment number, customer, payment amount, allocation breakdown (which invoices/debts were settled), staff name, date/time.

### Daily cash closing
- One open cash register session per store; opened by cashier with starting cash.
- Close session: enter counted cash, system computes expected, variance is logged.
- Z-report generated automatically (printable A4 or thermal).
- Force-close by manager with mandatory note (auto-alert if open >12 hours).

## 8.5 SaaS

### Trial
- 14 days, full access. Created by super admin.
- Trial does not have a grace period; expires directly to read-only.
- Trial data is retained after expiration; only writes are blocked.

### Subscription expiration
- 7-day grace period on paid subscriptions (full access + warning banner).
- After grace, read-only mode.
- In-flight transaction protection: cron skips companies with open carts, open cash sessions, or recent activity.

### In-flight transactions during expiry transition
- The cron flips status to read-only at 02:00 daily.
- Companies with activity in the last 5 minutes are skipped (rechecked next run).
- Open carts, open cash register sessions, ongoing checkouts are protected.

### Multi-store behavior
- Single-store plan: only one store allowed; multi-store features are hidden in UI (multi-store filters, transfer actions).
- Multi-store plan: unlimited stores; reports gain "All stores" filter; customer search shows the customer's history across all stores.


---

# 9. UX/UI Design System

## 9.1 Visual Direction

The system should feel **clean, professional, and fast** — closer to a modern accounting/CRM application than a flashy SaaS marketing page. The target user is a shop employee, not a startup designer. Visual personality should not interfere with task completion.

**Primary tools:**
- Tailwind CSS (utility-first).
- shadcn/ui as the component library (accessible primitives, easy to customize, built-in dark mode).
- Custom theme tokens for the REPAIRE color palette.
- Lucide-react for icons.

**Color system:**
- Primary: a saturated blue for actions and highlights (`#1E40AF` baseline; can be themed lighter/darker).
- Accent: a teal/emerald for success states (`#0F766E`).
- Warning: amber (`#B45309`).
- Danger: red (`#B91C1C`).
- Neutral grays: tailored to ensure WCAG AA contrast on both light and dark themes.
- Status badges: each repair status has a distinct background and text color combination.

**Dark mode:** supported throughout. Toggle in user profile settings. Applied by `class="dark"` on `<html>`.

## 9.2 Layout Structure

**Desktop (≥1024px):**
- Left sidebar (collapsible to icon-only): main navigation. Items: Dashboard, Tickets, POS, Customers, Inventory (Products / Parts / Services / Devices), Suppliers, Cash Register, Reports, Settings, Catalog (admin), Audit Log (admin).
- Top bar: store switcher (if multi-store), cash register status pill, search shortcut hint, user menu (profile, language, dark mode, logout).
- Main content: full width minus sidebar.

**Tablet (768–1023px):**
- Sidebar collapses to icon-only by default. Click to expand temporarily (auto-collapses on navigation).
- Top bar same as desktop.

**Mobile (<768px):**
- Sidebar becomes a slide-out drawer triggered by a hamburger button.
- Top bar shows app logo + hamburger + user avatar.
- Some screens (POS, ticket creation wizard) get mobile-first redesigns (full-screen flow, no sidebar visible).
- Tables become card lists.

## 9.3 RTL Arabic Layout Rules

RTL is **day-one**, not a retrofit. Every component is built and tested in both LTR and RTL.

- Use Tailwind's `rtl:` variant classes throughout: `class="ml-4 rtl:ml-0 rtl:mr-4"`.
- Set `dir="rtl"` on `<html>` when language is Arabic.
- Sidebar moves to the right side in RTL.
- Action columns in tables are leftmost in RTL (typically rightmost in LTR).
- POS cart panel moves to the left side in RTL.
- Status badges and progress indicators flip their reading direction.
- Iconography that has directionality (arrows, chevrons) is mirrored using `rtl:scale-x-[-1]` or icon-swap.
- Numbers stay LTR even within RTL text (Tailwind handles this with `dir="auto"` on numeric elements).
- PDF templates for Arabic documents are SEPARATE templates with right-to-left text flow — not the same template flipped.

**Tested at component level:** every modal, table, sidebar, POS cart, form, and date picker is verified in both directions before being marked complete.

## 9.4 Typography

- Latin script: Inter (variable font, all weights).
- Arabic script: Cairo or IBM Plex Sans Arabic (good readability, works at small sizes).
- Both fonts loaded via `@font-face` with `font-display: swap`.
- The active font switches based on the document language.

## 9.5 Components Pattern Library

### Status badges
Each repair status has a fixed color:

| Status | Color | French label | Arabic label |
|---|---|---|---|
| Received | Slate (neutral) | Reçu | تم الاستلام |
| In diagnosis | Blue | En diagnostic | قيد التشخيص |
| Waiting approval | Amber | En attente d'approbation | في انتظار الموافقة |
| In repair | Indigo | En réparation | قيد الإصلاح |
| Partially repaired | Purple | Réparation partielle | إصلاح جزئي |
| Ready for pickup | Emerald | Prêt à récupérer | جاهز للاستلام |
| Completed | Green | Terminé | منجز |
| Not repaired | Gray | Non réparé | لم يتم الإصلاح |
| Abandoned | Red | Abandonné | مهجور |

### Buttons
- Primary: filled, primary color.
- Secondary: outlined.
- Destructive: filled red.
- Ghost: text-only, used for table row actions.
- Sizes: `xs`, `sm`, `default`, `lg`. POS uses larger buttons by default for fast tapping.

### Forms
- Inline validation on blur and submit.
- Required field markers: red asterisk before label in LTR, after label in RTL.
- Error messages below the field, in the active language.
- Date pickers: localized per language (French / Arabic month names).
- Phone input: country code prefix `+213` for Algerian numbers; validation format.

### Tables
- Header row sticky on scroll.
- Hover row highlight.
- Click row → detail page (where applicable).
- Action column with an "..." menu (Edit, Archive, View history).
- Empty state: centered illustration + message + primary CTA.
- Pagination: page numbers + previous/next + page-size selector (10 / 25 / 50 / 100).
- Mandatory date range filter on transaction tables (default: current month).

### Modals
- Center-screen on desktop. Full-screen on mobile.
- ESC closes (unless dirty form, then confirms).
- Click outside closes (unless dirty form).
- Header with title + close button.
- Footer with cancel + primary action.

### Loading states
- Skeleton loaders for list pages.
- Spinners for inline actions.
- Optimistic UI for status changes (revert on error).

### Empty states
Every list page has an empty state with a primary CTA:
- Customers list (empty): "Aucun client encore — Créer votre premier client"
- Tickets list (empty): "Aucun ticket de réparation — Créer un nouveau ticket"
- Products list (empty): "Catalogue vide — Ajouter votre premier produit"
- Reports (empty for date range): "Aucune donnée pour la période sélectionnée"

### Error states
Specific messages, in all three languages, for common failures:
- "Pièce épuisée — Stock insuffisant" / "نفذت القطعة — المخزون غير كافٍ"
- "Limite de crédit dépassée" / "تم تجاوز حد الائتمان"
- "Session WhatsApp déconnectée — Utiliser le lien manuel" / "جلسة واتساب مقطوعة — استخدم الرابط اليدوي"
- "Code-barres déjà utilisé pour un autre produit" / "الباركود مستخدم لمنتج آخر"

### Confirmation modals
- Used for destructive actions (delete customer, void payment, force-close session).
- Two-button: "Cancel" (default focused) and "Confirm" (red).
- Where extra confirmation is needed (e.g. tenant data deletion), a typed-confirmation input ("Type 'DELETE' to confirm").

### Search behavior
- Global search via Cmd/Ctrl+K opens a command palette.
- Detected as phone number if numeric and 9+ digits → customer search prioritized.
- Otherwise: results categorized as Customers / Tickets / Products / Invoices, max 5 per category.

### Keyboard shortcuts (desktop)
- `Ctrl/Cmd+K`: open global search.
- `Ctrl/Cmd+N`: new ticket (when on tickets page) / new sale (when on POS).
- `Ctrl/Cmd+S`: save form (when applicable).
- `Esc`: close modal.
- `Ctrl/Cmd+P`: print preview.
- `?`: show shortcut help (V1.5).

### Barcode scanner behavior
- POS search input listens for rapid keystrokes (interval < 50ms between chars).
- 6+ chars + Enter = treated as barcode scan.
- Auto-add to cart with qty 1.
- Visual flash on scanner add (subtle green pulse).

## 9.6 Toast / Notification System

- Top-right corner (top-left in RTL).
- Auto-dismiss after 5 seconds.
- Persistent for errors with action button (e.g. "Retry").
- Used for: WhatsApp send result, save confirmations, errors.

## 9.7 Print Layout Standards

- A4 documents: paginated, header on every page (store name + logo + ticket number), footer with page numbers and date.
- Thermal 80mm: no margins, centered text where appropriate, large item names, clear total.
- Both formats: use the active language; Arabic uses RTL templates with mirrored layout.

─────────────────────────────────┐
│                                                                     │
│ Tableau de bord  | Tenants  | Plans  | Catalogues  | Backups       │
│ ─────────────────────────────────────────────────────               │
│ Tenants                                          [+ Nouveau tenant] │
│                                                                     │
│ Filtres : [Tous statuts ▾] [Plan ▾] 🔍 Recherche                    │
│                                                                     │
│ ┌─────────────────┬──────────┬──────────────┬──────────┬─────────┐ │
│ │ Nom             │ Plan     │ Statut       │ Stores   │ Actions │ │
│ ├─────────────────┼──────────┼──────────────┼──────────┼─────────┤ │
│ │ Tizi Repair Pro │ Multi    │ Active       │ 2        │ [...]   │ │
│ │ Phone Fix Algier│ Single   │ Trial (3j)   │ 1        │ [...]   │ │
│ │ Mobile Doctor   │ Single   │ Grace (5j)   │ 1        │ [...]   │ │
│ │ Quick Repair    │ —        │ Read-only    │ 1        │ [...]   │ │
│ └─────────────────┴──────────┴──────────────┴──────────┴─────────┘ │
└─────────────────────────────────────────────────────────────────────┘
```

- **Actions menu:** Activate plan, Extend trial, Suspend, Reactivate, Impersonate, View metrics.
- **Tenant detail page** has tabs: Overview, Subscription history, Metrics, Errors, Impersonation log.

## 10.24 Subscription / Trial Management Page

Tenant detail → Subscription tab:

```
Tenant : Tizi Repair Pro
─────────────────────────────────────────────────────
[Aperçu] [Abonnement] [Métriques] [Erreurs] [Impersonation]

Abonnement actuel
─────
Plan : Multi-store
Modèle : Annuel
Statut : Active
Démarré : 12/03/2025
Expire : 12/03/2026
Activé par : super_admin@repaire.dz

Actions :
[Étendre l'abonnement] [Changer de plan] [Suspendre] [Annuler]
[Convertir en licence à vie]

Historique
┌────────────┬───────────────────────────────────────┐
│ 12/03/2025 │ Activation Multi-store annuel         │
│ 26/02/2025 │ Trial démarré (14 jours)              │
└────────────┴───────────────────────────────────────┘
```

## 10.25 WhatsApp Message Preview Modal

```
┌──────────────────────────────────────────────────────┐
│ Aperçu du message WhatsApp                      ✕    │
│ ─────────────────────────────────────────────       │
│ Destinataire : Mohammed Bouchaib · 0555123456        │
│ Langue : Français                                    │
│ ─────                                                │
│                                                      │
│ Bonjour Mohammed Bouchaib 👋                         │
│                                                      │
│ Votre appareil est prêt à être récupéré !            │
│                                                      │
│ 🔧 Appareil : iPhone 13                              │
│ 🎫 N° ticket : TIZ-2025-04-0042                      │
│ 💰 Montant à payer : 6,000 DZD                       │
│                                                      │
│ 📞 Tizi Repair Pro · 0555000111                      │
│                                                      │
│ ─────                                                │
│ [Annuler]                                  [Envoyer] │
└──────────────────────────────────────────────────────┘
```

- **Preview always shown** before sending (manual sends).
- **Auto-sends** (queued from triggers) do not preview but are visible in the WhatsApp logs.

## 10.26 PDF Invoice / Ticket Preview Screen

```
Aperçu du reçu                          [Imprimer A4 ▾]
                                        [Imprimer thermique]
                                        [Télécharger PDF]
                                        [Fermer]
─────────────────────────────────────────────────────
┌─────────────────────────────────────────────────┐
│ TIZI REPAIR PRO                                 │
│ 12 rue de la Liberté, Tizi Ouzou                │
│ 0555000111                                       │
│                                                 │
│ REÇU DE PAIEMENT                                 │
│ N° INV-2025-04-0042 · 28/04/2025 14:30          │
│                                                 │
│ Client : Mohammed Bouchaib · 0555123456         │
│ Ticket lié : TIZ-2025-04-0042                   │
│                                                 │
│ Description                  Qté    Prix    Total│
│ ───────────────────────────────────────────────│
│ Réparation - Main d'œuvre    1     0       0   │
│ Écran iPhone 13              1     4,500   4,500│
│ Batterie iPhone 13           1     2,500   2,500│
│ Service - Remplacement écran 1     1,500   1,500│
│ Service - Remplacement bat.  1     800     800  │
│ ───────────────────────────────────────────────│
│ Sous-total :                              9,300 │
│ Remise :                                  -1,300│
│ TOTAL :                                   8,000 │
│ Acompte reçu :                            -2,000│
│ Encaissé aujourd'hui :                    -6,000│
│ Solde :                                   0     │
│                                                 │
│ Garantie : 30 jours                              │
│ Encaissé par : Karim                             │
│                                                 │
│ Merci de votre confiance.                        │
└─────────────────────────────────────────────────┘
```

- **Print buttons** trigger browser print dialog with the right CSS print-media query.
- **Thermal print** uses a different CSS (80mm width).
- **Arabic version** uses an entirely separate template.

## 10.27 Mobile / Tablet Adaptations Summary

| Screen | Mobile/Tablet adaptation |
|---|---|
| Dashboard | Widgets stack vertically; sidebar = drawer |
| POS | Tabs: Catalog / Cart; full-screen flow |
| Ticket creation | Each step is a full-screen page |
| Ticket detail | Tabs become horizontal scroll; section accordions on small screens |
| Customer profile | Tabs become horizontal scroll |
| Reports | Cards stack vertically |
| Settings | Tabs stack vertically; sub-sections accordion |
| Print preview | Full-screen with floating action buttons |

## 10.28 RTL Validation Checklist (apply to every screen)

For each screen built, verify:
- [ ] Sidebar is on the right.
- [ ] Action columns in tables are on the left (visual end of row).
- [ ] Form labels appear above or to the right of inputs (mirrored from LTR).
- [ ] Required-field asterisk is positioned correctly.
- [ ] Icons with directional meaning (arrows, chevrons) are mirrored.
- [ ] Numbers (prices, quantities, dates) read LTR within RTL text.
- [ ] Modal close button is in the upper-left corner.
- [ ] Back navigation arrows point right.
- [ ] Status indicators read in correct direction.
- [ ] PDF Arabic templates use RTL text flow (separate template files).


---

# 11. Multilingual Plan

## 11.1 Languages Supported

- **French (FR)** — default UI language. Algerian repair shops are predominantly French-default with Arabic alongside.
- **Arabic (AR)** — full RTL support. Day-one, not retrofit.
- **English (EN)** — third option for staff who prefer it.

## 11.2 What Is Translated vs Stored As-Entered

### Translated (i18n)
The system maintains JSON translation files for all UI labels, menu items, button text, status names, system error messages, default WhatsApp templates, and PDF static labels. These are translated across FR / AR / EN and selected by the user's language preference.

### Stored as-entered (no translation)
- Customer names
- Product names, part names, service names (the cashier wrote "Coque iPhone" — the system stores it that way)
- Ticket notes (internal and customer)
- Custom catalog entries (custom brand, custom model, custom problem)
- Supplier names
- Custom payment method names (V1.5)
- Custom expense category names

### Mixed
- **Default catalog entries** (device families, brands, model families, models, repair problem categories, repair problems, part categories, product categories) are stored with `name_fr`, `name_ar`, `name_en` columns. The active language selects which to display. If a translation is missing, fall back to French, then English, then the first non-empty.
- **Default WhatsApp templates** are stored per language (`fr` and `ar` only — English speakers in Algeria are too rare for a third template). Custom templates per store may be stored in any language; the customer's preferred language selects which to use.

## 11.3 Language Switcher

- A language switcher is in the top-right of the user menu (avatar dropdown).
- Switching language reloads the UI with the new language but does NOT reload the page (uses i18n hot-swap).
- The selected language is persisted to `users.language_preference` and used on next login.

## 11.4 Customer Preferred Language

- Customers have their own preferred language: `ar` or `fr`. (English-speaking customers in Algeria are too rare; they receive French.)
- The customer's preferred language drives WhatsApp template selection automatically.
- The customer's preferred language can be set at customer creation and edited later.
- For walk-in customers (no record), WhatsApp is not sent.

## 11.5 PDF Language

PDFs are rendered in the language relevant to their context:
- **Customer-facing documents** (received-device ticket, estimate, invoice, receipt, debt statement, abandoned notice): printed in the **customer's preferred language** if set, else the active UI language. The shop owner can override per-print if needed.
- **Internal documents** (Z-report, purchase invoice, audit log export): printed in the active UI language of the user printing them.

Each PDF type has 2 templates: FR/EN share a similar LTR template; AR uses a separate RTL template with mirrored layout and Arabic typography.

## 11.6 Date / Time / Currency Formatting

- **Date format:** `DD/MM/YYYY` for FR/AR; `DD/MM/YYYY` for EN (consistent — no US format). Time: 24-hour everywhere.
- **Number format:** thousands separator is space (`47 800 DZD`) or comma based on locale; decimals always with comma in FR/AR (`8,50 DZD`), period in EN. Use Intl.NumberFormat with the active locale.
- **Currency:** always shown as "DZD" suffix; no symbol. `Intl.NumberFormat` with `currency: 'DZD'` and `currencyDisplay: 'code'`.
- **Phone numbers:** displayed with the format `0555 12 34 56` (groups of 2-2-2 after the leading code). Stored as digits only.
- **Wilaya codes:** when shown, formatted as `15 - Tizi Ouzou`.

## 11.7 Validation Messages

All validation messages have entries in all three languages. Examples:
- "Champ requis" / "حقل مطلوب" / "Required field"
- "Format de téléphone invalide" / "تنسيق الهاتف غير صالح" / "Invalid phone format"
- "Stock insuffisant" / "المخزون غير كافٍ" / "Insufficient stock"

## 11.8 Catalog Names Translation Strategy

The seeded global catalog (super admin managed) has all names in `name_fr`, `name_ar`, `name_en`. Examples:
- Device family: `phone` → "Téléphone" / "هاتف" / "Phone"
- Brand: "Samsung" stays "Samsung" everywhere (proper nouns generally don't translate).
- Repair problem: "Écran cassé" / "شاشة مكسورة" / "Broken screen"
- Part category: "Batterie" / "بطارية" / "Battery"

Custom catalog entries (per store) have only one `name` field — the language the user typed it in. This is acceptable because store-custom entries are local to that store and the staff who entered them.

## 11.9 i18n Implementation

- Use **next-intl** (best Next.js App Router integration) or **react-i18next** (more mature, more control).
- JSON translation files split by namespace: `common.json`, `tickets.json`, `pos.json`, `customers.json`, `inventory.json`, `reports.json`, `settings.json`, `errors.json`.
- Keys use dot notation: `tickets.status.received`, `errors.stock.insufficient`.
- Translation lint: a script that checks for missing keys across languages.

---

# 12. PDF / Receipt / Document Plan

## 12.1 Document Types

| # | Document | When generated | Format | Customer-visible? | Language |
|---|---|---|---|---|---|
| 1 | Received-device ticket | On ticket creation | A4 + Thermal | Yes | Customer's preferred |
| 2 | Estimate / devis | On estimate send | A4 | Yes | Customer's preferred |
| 3 | Final repair invoice | On Ready-for-pickup | A4 | Yes | Customer's preferred |
| 4 | Repair payment receipt | On payment at pickup | Thermal | Yes | Customer's preferred |
| 5 | POS sale receipt | On checkout | Thermal | Yes | Active UI lang |
| 6 | Debt payment receipt | On debt payment | Thermal | Yes | Customer's preferred |
| 7 | Refund receipt | On refund | Thermal | Yes | Active UI lang |
| 8 | Trade-in receipt | On trade-in confirm | A4 + Thermal | Yes | Customer's preferred |
| 9 | Debt statement | On demand | A4 | Yes | Customer's preferred |
| 10 | Abandoned device notice | When abandoned | A4 | Yes | Customer's preferred |
| 11 | Z-report (cash session close) | On session close | A4 + Thermal | Internal | Active UI lang |
| 12 | Purchase invoice print | On demand | A4 | Internal | Active UI lang |
| 13 | Stock count report | On count confirm | A4 | Internal | Active UI lang |
| 14 | Warranty claim document | On warranty repair start | A4 | Yes | Customer's preferred |

## 12.2 Common Document Elements

- **Header:** store logo (if uploaded), store name, address, phone, email.
- **Document type and number:** clear label like "REÇU DE PAIEMENT" or "DEVIS".
- **Date and time:** formatted per locale.
- **Footer:** "Merci de votre confiance" or similar; page number on multi-page A4.

## 12.3 Document Numbering

Format: `STORE_PREFIX-YYYY-MM-NNNN`

Per-document-type sequences with monthly reset per store. Generation uses PostgreSQL advisory locks to prevent race conditions:

```sql
SELECT pg_advisory_xact_lock(store_id_int);
UPDATE document_sequences 
  SET last_number = last_number + 1
  WHERE store_id = $1 AND type = $2 AND year = $3 AND month = $4
  RETURNING last_number;
```

If no row exists for the (store, type, year, month) combination, INSERT with `last_number = 1`. This is also done inside the advisory lock.

## 12.4 PDF Generation Stack

- **Library:** Puppeteer for HTML-to-PDF (most flexible, supports advanced CSS, RTL, custom fonts).
- **Alternative for simpler thermal receipts:** browser print with print-media CSS (no server PDF generation needed for thermal — much faster).
- **Templates:** stored as React components rendered server-side or as HTML strings. Two template variants per document: LTR (for FR/EN) and RTL (for AR).

## 12.5 A4 vs Thermal Format

### A4 (210×297mm)
- Used for: estimates, invoices, debt statements, abandoned notices, purchase invoices, Z-report (full version), warranty claims.
- Margins: 20mm top/bottom, 15mm left/right.
- Multi-page support with header on every page.
- Font sizes: 10–12pt body, 14–16pt headings.

### Thermal 80mm
- Used for: POS sale receipts, repair payment receipts, debt payment receipts, refund receipts, abbreviated Z-report.
- Width: 72mm printable area.
- Single-column layout.
- Font sizes: 10–14pt; large total at end.
- No margins; relies on printer's own margin handling.

## 12.6 Print / Preview Behavior

- **Every print action shows a preview modal first.** Required to prevent thermal paper waste.
- **Print buttons:** "Imprimer A4" and "Imprimer thermique" available where applicable.
- **Download as PDF:** every document can be downloaded.
- **WhatsApp send:** PDF (or thermal-formatted PNG for messaging apps) can be attached to the WhatsApp message where applicable (estimate, abandoned notice, debt statement, warranty document).

## 12.7 QR / Barcode on Documents

- **Final repair invoice:** includes a QR code linking to a (V2) public tracking page. In v1, the QR encodes the ticket number for easy reference (a shop owner can scan it at pickup to pull up the ticket).
- **Debt statement:** QR code with the customer's ID and total debt for quick lookup.

## 12.8 Customer-Visible vs Internal Content

- **Customer documents** never include: cost prices, FIFO batch info, internal notes, technician comments, supplier names.
- **Customer documents** include: store contact, ticket/invoice number, customer name and phone, line items with descriptions, quantities, unit prices, totals, payment information, warranty terms (if applicable), customer-visible notes.
- **Internal documents** may include cost prices, technician names, internal notes, audit info.

## 12.9 Cash-Only Note in MVP

All payment receipts in v1 show the payment method as "Espèces" only. The receipt template has a `payment_method` placeholder that will display non-cash methods in V1.5 without template changes — only the data driving the placeholder changes.

---

# 13. WhatsApp Notification Plan

## 13.1 Integration Approach

- **Library:** whatsapp-web.js (unofficial, uses WhatsApp Web).
- **Architecture:** single persistent session per store. The pool design from the architecture fixes is rejected as over-engineered for v1.
- **Setup:** store admin clicks "Connect WhatsApp" in settings → QR code displayed → admin scans with shop's WhatsApp → session is saved on server.
- **Session persistence:** session data is stored encrypted on disk. On server restart, sessions are restored automatically.
- **Reconnection:** if the session disconnects (WhatsApp logout, server restart issue), settings shows a red "Disconnected" banner. Admin clicks "Reconnect" → new QR.

## 13.2 Risks and Mitigations

The whatsapp-web.js approach has known risks:

| Risk | Mitigation |
|---|---|
| Library breaks when WhatsApp updates web client (happens 2–4×/year) | Pin library version; monitor library GitHub releases; reserve time for updates. |
| WhatsApp can ban automated numbers | Rate limit: max 30 messages/hour per store. Document risk in onboarding so shops set expectations. |
| Legal status of automated commercial messages in Algeria | Document as "sent from your shop's own number; you are responsible for content"; legal review before launch. |
| Session expires (server downtime, account logged out elsewhere) | Health check every 5 min; alert admin via dashboard banner; manual reconnect via QR. |

These risks **must be documented in the onboarding flow** so shops understand WhatsApp reliability is shared between REPAIRE and the shop's account.

## 13.3 Triggers and Templates

### v1 triggers
1. **Ticket created** — sent immediately when a repair ticket is created (named customer with phone only).
2. **Customer approval request** — sent when ticket moves to `waiting_approval`.
3. **Ready for pickup** — sent when ticket moves to `ready_for_pickup`.
4. **POS sale receipt** — sent on POS checkout if toggle is ON (default OFF).
5. **Abandoned device notice** — sent when ticket reaches the configurable abandoned-notice threshold.

### Default template (FR — Ticket created)
```
Bonjour {{customer_name}} 👋
Votre appareil a bien été reçu chez {{store_name}}.

🔧 Appareil : {{device}}
🛠 Problème : {{problem}}
🎫 N° ticket : {{ticket_number}}

Nous vous contacterons après diagnostic.

📞 {{store_name}} · {{store_phone}}
```

### Default template (AR — Ticket created)
```
مرحباً {{customer_name}} 👋
تم استلام جهازك في {{store_name}}.

🔧 الجهاز: {{device}}
🛠 المشكلة: {{problem}}
🎫 رقم التذكرة: {{ticket_number}}

سنتصل بك بعد التشخيص.

📞 {{store_name}} · {{store_phone}}
```

### Default template (FR — Customer approval request)
```
Bonjour {{customer_name}},
Le diagnostic de votre {{device}} est terminé.

Coût estimé : {{estimated_total}} DZD
Détails : {{summary}}

Merci de confirmer pour démarrer la réparation.

📞 {{store_name}} · {{store_phone}}
```

### Default template (FR — Ready for pickup)
```
Bonjour {{customer_name}} 👋
Votre {{device}} est prêt à être récupéré !

🎫 N° ticket : {{ticket_number}}
💰 Montant à payer : {{amount_due}} DZD

📞 {{store_name}} · {{store_phone}}
```

### Default template (FR — Abandoned device notice)
```
Bonjour {{customer_name}},
Votre {{device}} (ticket {{ticket_number}}) est prêt depuis le {{ready_date}}.

Merci de venir le récupérer dans les {{grace_days}} prochains jours.

📞 {{store_name}} · {{store_phone}}
```

The exact wording of the abandoned notice should be validated with a legal advisor before launch.

## 13.4 Variables Reference

- `{{customer_name}}` — `customers.name`. Fallback: "Client".
- `{{device}}` — brand + model from the ticket (e.g. "iPhone 13").
- `{{problem}}` — first problem on the ticket; if multiple, append " et autres".
- `{{ticket_number}}` — `repair_tickets.ticket_number`.
- `{{estimated_total}}` — `estimates.total_amount` formatted with thousands separator + " DZD".
- `{{summary}}` — short list of estimate line items.
- `{{amount_due}}` — `invoices.balance_due` formatted.
- `{{store_name}}` — `stores.name`.
- `{{store_phone}}` — `stores.phone`.
- `{{ready_date}}` — date the ticket moved to `ready_for_pickup`, formatted per locale.
- `{{grace_days}}` — store-configured grace days remaining.

## 13.5 Custom Templates

Each store can override the default templates per language. Editing happens in Settings → WhatsApp → Templates. Edits are validated to ensure all required variables remain in the template (so the message doesn't break if a variable is missing).

## 13.6 Preview Before Send

- Manual sends from the ticket detail page **always show a preview modal** with the rendered message text (variables filled in).
- Auto-sends (queued from triggers) do NOT preview — they send to queue immediately.
- The customer's preferred language is used to select the template.

## 13.7 wa.me Fallback

- Every ticket detail page shows a "Send via personal WhatsApp" button at all times. This generates a `https://wa.me/213XXXXXXXXX?text=ENCODED_MESSAGE` link that staff can click to send manually from their personal WhatsApp.
- If an automated send fails, a red badge appears on the ticket: "WhatsApp non envoyé — Renvoyer manuellement". Click → opens wa.me link.
- Manual sends are logged in `whatsapp_logs` with status `manual_link`.

## 13.8 Delivery Failure Handling

- Failed sends are NEVER blockers. They are logged and surface as red badges on the ticket.
- Three retry attempts, with exponential backoff (1 min, 5 min, 30 min).
- After 3 failures: marked as `failed`. Manual re-send via wa.me is the recommended fallback.
- Persistent disconnection alerts: if a store's session has been disconnected for more than 30 minutes, the dashboard shows a red banner.

## 13.9 Notification Log

- Every send attempt creates a row in `whatsapp_logs`.
- Visible in:
  - Customer detail page → Communication tab.
  - Settings → WhatsApp → Recent activity.
  - Audit log (filtered by `entity_type = whatsapp_log`).

## 13.10 Rate Limiting and Ban Risk

- **Hard limit:** 30 messages/hour per store, enforced at queue level.
- **Soft warning:** if a store sends >100 messages/day for several consecutive days, an alert is shown to the store admin recommending throttling.
- **Onboarding warning:** during WhatsApp setup, the admin sees a warning explaining that automated messaging carries some account risk and that REPAIRE provides wa.me as a fallback.

## 13.11 Encryption of Session Data

- Session data is stored encrypted with AES-256 using a key from environment variable `WHATSAPP_SESSION_KEY` (32 bytes hex).
- The key is NOT stored on disk alongside the session files.
- Backup procedures must include the session files but the encryption key is excluded from backups (must be re-deployed manually if recovering).


---

# 14. Catalog Implementation Plan

## 14.1 Catalog Strategy Summary

The catalog is the single most important seed data set. It must:
- Cover ~70% of common Algerian repair cases out of the box.
- Stay maintainable (no over-deep entries that solve non-existent problems).
- Always allow custom additions per store.
- Never block ticket creation.
- Use search aliases generously.
- Distinguish between **fields** (storage, color, RAM, IMEI) and **models** (the device family + brand + model).

## 14.2 Two-Layer Catalog Model

### Layer 1: Global default catalog (super admin managed)
- Stored in `device_families`, `device_brands`, `device_model_families`, `device_models`, `repair_problem_categories`, `repair_problems`, `part_categories`, `product_categories`, `tags` — with `is_default = true` and `store_id = NULL`.
- Editable only by super admin via the Catalog Manager in the super admin panel.
- Updated periodically by REPAIRE (new device releases, problem types, etc.).
- Tenants automatically get catalog updates when they release.

### Layer 2: Store-custom additions
- Same tables, with `is_default = false` and `store_id = <store>`.
- Editable by Admin/Manager of that store.
- Visible only to that store.
- Never modifies the global catalog.

The catalog UI shows both layers merged. Default entries are marked with a "Par défaut" tag; custom entries are marked with "Personnalisé" and have edit/archive actions.

## 14.3 Device Catalog Hierarchy

```
device_family (e.g. Phone)
  └── device_brand (e.g. Samsung)
        └── device_model_family (e.g. Galaxy A)
              └── device_model (e.g. Galaxy A15)
                    [+ device_model_aliases for search]
```

- Some brands skip the family level (e.g. retro consoles like "Atari 2600" — no family). The schema allows nullable.
- Storage, color, RAM, IMEI, condition are NOT separate models. They are fields on `customer_assets` (when a customer brings their device) and on `devices` (when a device is in inventory).

## 14.4 Phone Catalog Implementation

Source: `1777781121106_repaire_phone_default_catalog.md` (1,972 lines).

**Priority brands seeded:**
Samsung, Xiaomi, Redmi, Poco (separate from Xiaomi), Apple, Oppo, Realme, Infinix, Tecno, Huawei, Honor, Vivo, Itel, Nokia/HMD, Condor, Iris, Stream, OnePlus, Google Pixel.

**Adjustments from V2 critique:**
- Poco moved to its own brand entry (separate from Xiaomi).
- Tecno, Itel, Wiko, Infinix in priority brands.
- Connector type tag (`Lightning | USB-C | Micro-USB`) pre-populated on phone models where known.

**Flow:** Phone → Brand → Model family → Model. Search aliases like "Note 13" → "Redmi Note 13", "S24" → "Galaxy S24", "PS5" not applicable for phones.

**Storage/RAM:** never as separate models. Always as fields.

## 14.5 Tablet / iPad Catalog Implementation

Source: `1777781121106_repaire_tablet_ipad_default_catalog.md`.

**Priority brands:** Apple iPad, Samsung Galaxy Tab, Lenovo Tab, Huawei MatePad/MediaPad, Xiaomi Pad/Redmi Pad, Honor Pad, Oppo Pad, Realme Pad, Microsoft Surface, Amazon Fire, Alcatel, Condor, Iris, Stream, Tecno, Infinix, Nokia/HMD, Other.

**Adjustments:**
- Condor tablet T-series added.
- Connector type tag pre-populated.
- Storage and connectivity (Wi-Fi only / Cellular) are fields, not models.

## 14.6 Laptop Catalog Implementation

Source: `1777781121103_repaire_laptop_default_catalog.md`.

**Priority brands:** HP, Dell, Lenovo, Acer, Asus, Apple, MSI, Toshiba/Dynabook, Samsung, Huawei, Microsoft Surface, Condor (added), Thomson (added), and the rest from the catalog file.

**Adjustments from V2 critique:**
- Condor as priority laptop brand with families CloudBook, Terra, Neo, G-series.
- Thomson with Neo, Hero, Prestige series.
- HP Compaq sub-models (6000, 6200, 6300, 8000) collapsed into one "HP Compaq Business" entry with free-text model field.
- Dell OptiPlex sub-generations (3020/3040/3050/3060/3070/3080) collapsed into one "OptiPlex 3000 series" with free-text model.

## 14.7 Desktop Computer Catalog Implementation

Source: `1777781121106_repaire_desktop_computer_default_catalog.md`.

**UX priority order (V2 critique 7.3):**
1. **Custom assembled PC (PC assemblé)** — moved to first position.
2. HP, Dell, Lenovo, Asus, Acer, Apple iMac/Mac mini/Mac Studio.
3. Condor desktop PCs (added).
4. Other.

**Custom assembled PC:** does NOT use brand/family/model. Uses fields: form factor (tower / mini / micro-ATX / etc.), CPU, GPU, RAM, storage, motherboard. Or simpler: a single "Custom PC" model with free-text description.

## 14.8 Printer Catalog Implementation

Source: `1777781121106_repaire_printer_default_catalog.md`.

**Adjustments from V2 critique 7.4:**
- Epson EcoTank (L1110, L3110, L3150, L3250, L3256, L5290, L6290) elevated to top priority within Epson section.
- Canon PIXMA G series (G2410, G3411, G3420, G3430, G4411) elevated to top priority within Canon section.
- HP DeskJet/OfficeJet budget series listed before enterprise printers.
- Thermal receipt printers (Epson TM series, Xprinter) and label printers (Brother QL) added as separate category.

## 14.9 Game Console Catalog Implementation

Source: `1777781121105_repaire_game_console_default_catalog.md`.

**Adjustments from V2 critique 7.6:**
- BLOD (Blue Light of Death) and YLOD (Yellow Light of Death) at top of console problem list.
- Famiclone / 8-bit clone consoles: deferred (validate demand first).
- Xbox 360 JTAG/RGH: deferred pending policy decision.

## 14.10 Products / Accessories Catalog Implementation

Source: `1777781121105_repaire_products_accessories_default_catalog.md`.

**Multi-path browsing (V2 critique 7.7):** A product can appear under multiple browse-path entries via `product_browse_paths` junction. Tags supplement this for filtering and compatibility but do not replace browse paths.

**Missing consumables added:**
- LOCA UV curing glue
- Ultrasonic cleaner liquid
- Wire flux and solder paste
- Isopropyl alcohol (IPA) in multiple concentrations

**Categories validated with shop data (deferred):**
- Solar power banks and solar chargers — added but flagged as low-priority.
- Prepaid mobile top-up cards (Mobilis, Djezzy, Ooredoo) — flagged for validation.

## 14.11 Repair Problems Catalog

Each device family has its own catalog of common problems, organized into categories. Examples:
- **Phone problems** — Power/charging, Display, Buttons, Audio, Network, Software, Liquid damage, etc.
- **Laptop problems** — Power, Display, Keyboard, Performance, Audio, Physical damage, Software.
- **Tablet/iPad problems** — Screen/touch, Battery/power, Charging, Audio, Buttons/sensors, Software, Liquid damage.

Each problem has suggested part categories (e.g. "Broken screen" suggests "Phone screen / digitizer" parts).

## 14.12 Search and Aliases

Search across the catalog matches:
- Brand name (e.g. "Samsung")
- Model family name (e.g. "Galaxy A")
- Model name (e.g. "Galaxy A15")
- Model aliases (e.g. "A15", "Galaxy A 15")
- Custom model entries

Aliases must be seeded for common short names:
- "PS4" → "PlayStation 4"
- "PS5" → "PlayStation 5"
- "Switch OLED" → "Nintendo Switch OLED"
- "iPad 7" → "iPad 7th generation"
- "Tab A8" → "Galaxy Tab A8"

Search uses PostgreSQL `pg_trgm` for fuzzy matching.

## 14.13 Algeria Market Adjustments

Treated as **assumptions** until validated with real shop data:
- Specific brand market percentages (the critique mentions "20–30% Condor laptops" — treated as assumption).
- "Famiclone is common" — flagged for validation.
- "EcoTank dominates 60%+ of home printers" — treated as assumption; we elevate it but don't enshrine the percentage.

The shop owner can always disable a default catalog entry (archive it) or extend with custom entries. The shipped catalog is a starting point, not a constraint.

## 14.14 Catalog Maintenance Workflow

- Super admin updates the global catalog through the Catalog Manager.
- Updates roll out to all tenants automatically (no per-tenant migration).
- Tenants can disable global entries they don't use (archive at store level).
- Tenants can add custom entries that are local to their store.
- The Catalog Manager has a versioning approach: every save creates a `catalog_version` record so rollback is possible (V1.5).


---

# 15. Reports and Analytics Plan

## 15.1 Report Access

- Reports tab is visible to **Admin** and **Manager** only.
- **Cashier** sees their own Z-report only (during cash session close).
- **Technician** does not see reports.
- All reports support PDF export.
- All reports support date range filter: today / this week / this month / this year / custom range.

## 15.2 Dashboard Widgets

Already covered in Section 6.2. Each widget links to the relevant filtered list/report.

## 15.3 Sales Report

**Purpose:** Track POS sales revenue and breakdown.

**Filters:** date range, store (if multi-store).

**Top KPIs:**
- Total revenue (all sales).
- Number of sales.
- Average sale value.
- Cash collected.
- Debt-on-sales created.

**Breakdown:**
- Revenue by item type (products / parts / services / devices).
- Top 10 selling products.
- Top 10 selling parts.
- Sales per day chart.
- Sales per cashier (if multi-user).

**Data sources:** `invoices` (type=sale), `invoice_items`, `payments`.

## 15.4 Repairs Report

**Purpose:** Track repair workflow and revenue.

**Filters:** date range, store, status, technician.

**Top KPIs:**
- Total tickets created.
- Tickets completed.
- Tickets not repaired.
- Tickets abandoned.
- Average completion time.
- Revenue from repairs.

**Breakdown:**
- Tickets by status (pie chart).
- Tickets per technician.
- Most common problems (top 10).
- Most common device families.
- Repair revenue per day.

**Data sources:** `repair_tickets`, `repair_status_history`, `invoices` (type=repair).

## 15.5 Profit Report

**Purpose:** Track profitability with FIFO COGS.

**Filters:** date range, store.

**Top KPIs:**
- Total revenue.
- Total COGS (cost of goods sold).
- Gross profit.
- Gross margin %.
- Total expenses.
- **Net profit (gross profit − expenses).**

**Segment breakdown (V2 critique 6.8):**
- **Product sales** — revenue, COGS, gross margin.
- **Part sales** — revenue, COGS, gross margin.
- **Device sales** — revenue, COGS, gross margin.
- **Services** — revenue, optional COGS, gross margin (typically 100% margin if no parts consumed).
- **Repair labor** — revenue (no COGS, pure margin).

**Per-ticket and per-invoice breakdown:** drill-down table.

**Per-technician profit:** revenue from labor on assigned tickets, parts profit on assigned tickets.

**Data sources:** `invoices`, `invoice_items`, `stock_movements` (cost_price_snapshot), `expenses`.

## 15.6 Debt Report

**Purpose:** Track customer debt outstanding.

**Filters:** customer group, date range (for activity, not balance).

**Top KPIs:**
- Total debt outstanding (snapshot — not date-filtered).
- Number of customers with debt.
- Debt aging buckets (0–30 days, 31–60, 61–90, 90+).
- Debt payments collected in date range.

**Breakdown:**
- Customer debt list with: name, phone, total debt, by source (repair/sale/manual), oldest debt date.
- Debt by customer group.
- Top 20 customers by debt amount.

**Data sources:** `customer_debt_balances`, `customer_debt_transactions`, `customer_debt_payments`.

## 15.7 Technician Performance Report

**Purpose:** Evaluate technician productivity (V2 critique 11.1).

**Filters:** date range, technician.

**Per-technician row:**
- Tickets assigned (in period).
- Tickets completed.
- Tickets not repaired.
- Tickets abandoned.
- Average completion time (received_at → ready_for_pickup).
- Revenue generated (labor + parts profit).
- Warranty rate (% of completed tickets that came back as warranty claim within warranty period).

**Data sources:** `repair_tickets`, `repair_ticket_technicians`, `repair_status_history`, `invoices`.

## 15.8 Cash Flow Report

**Purpose:** Show net cash position by period (V2 critique 11.2).

**Filters:** date range, store, cash register session (optional filter for granularity).

**KPIs:**
- Cash collected (all sources).
- Cash refunded.
- Cash paid to suppliers.
- Expenses paid in cash.
- **Net cash flow.**

**Breakdown:**
- Daily cash flow chart.
- Cash by collection source (sales / repairs / debt collection / trade-in payouts).
- Cash by outflow type (refunds / supplier / expenses).

**Data sources:** `payments`, `refunds`, `supplier_payments`, `expenses`, `tradein_purchases.amount_paid_to_customer`.

## 15.9 Supplier Debt Report

**Purpose:** What the shop owes to suppliers (V2 critique 11.3).

**KPIs:**
- Total supplier debt.
- Number of unpaid invoices.

**Per-supplier row:**
- Supplier name.
- Total balance due.
- Oldest unpaid invoice date.
- Number of unpaid invoices.
- "Pay now" action (opens payment modal).

**Data sources:** `suppliers.balance_due`, `purchase_invoices`, `supplier_payments`.

## 15.10 Low Stock Report

**Purpose:** Items at or below threshold.

**Per-item row:**
- Item name.
- Current stock quantity.
- Threshold.
- Last purchase date (from latest stock_batch).
- Reserved quantity (for parts).

**Sort:** by quantity ascending.

**Data sources:** `products`, `parts`, `devices`, `stock_batches`.

## 15.11 Stock Loss Report

**Purpose:** Track stock decreases by reason (V2 critique 6.6).

**Filters:** date range, reason type, item type.

**KPIs:**
- Total stock value lost.
- Number of adjustments.

**Breakdown by reason:**
- Damaged.
- Loss.
- Theft.
- Count correction.
- Supplier return.
- Other.

**Per-adjustment list with item, qty, cost value, reason, date, user.**

**Data sources:** `stock_adjustments`, `stock_movements`.

## 15.12 Z-Report (Cash Session Close)

**Purpose:** Daily cash reconciliation (V2 critique 6.2).

**Generated automatically on session close.** Printable A4 and thermal.

**Content:**
- Header: store name, session ID, opened by, opened at, closed by, closed at.
- Opening cash.
- **Cash collected:** by source (POS sales, repair payments, debt collected, trade-in payouts to store — net).
- **Cash paid out:** refunds, supplier payments, trade-in payouts to customer, expenses.
- **Expected cash** = opening + collected − paid out.
- **Counted cash** (entered by cashier).
- **Variance** = counted − expected.
- Notes (force-close note if applicable).
- Number of sales, number of repairs completed, number of refunds.

**MVP scope (cash-only):** sales by payment method shows just "Espèces". V1.5 will add Baridimob, CIB, etc. as separate lines.

## 15.13 Multi-Store Comparison Report (Multi-Store Plan Only)

**Purpose:** Compare metrics across stores in the same company.

**Filters:** date range.

**Per-store row:**
- Revenue.
- Tickets created / completed.
- Average ticket value.
- Stock value.
- Debt outstanding.
- Cash variance (sum of all session variances).

**Data sources:** aggregated from per-store reports.

## 15.14 Export Behavior

- All reports have a "Export PDF" button.
- The PDF includes the same KPIs and tables visible on screen.
- The PDF header includes the store name, date range, and generation timestamp.
- A4 format. Multi-page if data exceeds one page.
- V1.5: CSV export.

## 15.15 Performance and Indexing

Reports query potentially large date ranges. Required:
- All transactional tables have a `created_at` index with `store_id`.
- All financial sums use indexed scans, not full-table scans.
- For reports covering more than 90 days, the query is optimized with date-partitioned filters.
- A "long-running query" warning is shown if a report takes >5 seconds; the user is offered to email the report (V1.5) or continue waiting.


---

# 16. Security Plan

## 16.1 Authentication

- Email + password with bcrypt hashing (cost factor 12).
- Refresh token rotation with 2–3 second grace window for race conditions.
- Account lockout after 5 failed attempts in 15 minutes.
- Session revocation on logout (all refresh tokens for the user).
- Manager 4-digit PIN (separate from password) hashed with bcrypt.
- Password reset via signed email link (valid 30 minutes).
- No 2FA in v1; deferred to V2.

## 16.2 Refresh Token Rotation

- On login: create a new family ID, issue access + refresh token. Refresh stored hashed in DB.
- On refresh: hash the presented token, look up the row, mark revoked, create a new token in the same family, return it.
- On reuse of a revoked token (within 2–3 second grace window from same IP): treat as race; do not revoke family.
- On reuse outside grace window or from different IP: revoke entire family. Log event.

## 16.3 Route Guards

- Next.js middleware decodes JWT for every request.
- API routes validate role and tenant scope before any DB query.
- Page routes (dashboard, etc.) check role server-side; return 403 page if unauthorized.
- Client-side navigation guards are NOT relied upon for security — they are UX only.

## 16.4 Tenant Isolation

- Prisma scoped client extension auto-injects `company_id` into every query.
- ESLint rule blocks raw `prisma` imports in `/app/api/` outside the allowlist.
- Cross-tenant tests in CI pipeline (a Tenant A query trying to fetch Tenant B data must return empty).

## 16.5 Role Permissions

- Implemented as middleware on each API route.
- Permission matrix from Section 4 enforced server-side for every action.
- 403 returned (not 404) for unauthorized actions on visible routes.

## 16.6 Audit Logs

- Every privileged action logged immutably.
- Stored in append-only `audit_logs` table.
- Filterable viewer in admin panel.
- 12-month retention with monthly purge cron.
- Logs cannot be edited or deleted from the UI.

## 16.7 File Upload Security

- Server-side file type validation (magic bytes, not just extension).
- Allowed types: `image/jpeg`, `image/png`, `image/webp`.
- Max file size: 5 MB per upload.
- Files stored under UUID-based path (e.g. `/uploads/tickets/{uuid}.jpg`).
- File serving endpoint validates that the requesting user has access to the related entity.
- No directory listing.
- Image thumbnails generated server-side (V1.5).

## 16.8 WhatsApp Session Security

- Session data encrypted with AES-256.
- Encryption key stored in `WHATSAPP_SESSION_KEY` environment variable (32-byte hex).
- Key NOT stored on disk alongside the session files.
- Backups exclude the encryption key (must be re-deployed manually if recovering).
- Health check every 5 minutes; disconnect detected → admin notified.

## 16.9 Rate Limiting

- 10 login attempts/min/IP → 429.
- 100 requests/min/user → 429.
- 5 WhatsApp sends/min/store → queued.
- 30 WhatsApp sends/hour/store → hard limit.

## 16.10 Backup Security

- Backups encrypted before upload to Backblaze B2 (or equivalent).
- Restore tested weekly (automated; tests row counts on key tables).
- Daily success/failure notification to super admin (failure for 24h escalates).
- Backups stored 30 days; older purged.

## 16.11 Payment / Debt / Stock Manipulation Protections

- Payments: never deletable; voids immutable with reason.
- Stock adjustments above value threshold: Admin approval required.
- Debt write-offs: Manager+ only with mandatory reason.
- Refunds: typed reason, restricted scope (cashier own session).

## 16.12 Soft Deletes

- All tenant data uses `is_archived` (no hard deletes).
- Immutable tables never deleted (only purged by retention policy).
- Customer archive does NOT delete debt history.

## 16.13 Admin Override Logging

- Every Admin action that overrides a normal restriction (large discount, prior-session refund, manual debt adjustment, force-close session, high-value stock adjustment) is logged with the override reason and the admin's user ID.

## 16.14 Tenant Data Deletion

- Tenant requests deletion via Settings → Account.
- 30-day grace period during which data is still accessible.
- Grace period ends → data permanently deleted (database rows + uploaded files).
- Deletion logged with reason and timestamps.
- Notification to super admin and tenant.
- **Legal validation required before launch** for compliance with Algerian Law 18-07 on personal data protection.

## 16.15 HTTPS / TLS

- Cloudflare provides SSL termination at the edge.
- Origin server (home) accepts HTTP from Cloudflare proxy.
- Cloudflare → home server connection over Cloudflare Tunnel (recommended) or via firewalled IP whitelist (alternative).
- HSTS enabled.

## 16.16 Database Security

- PostgreSQL accepts connections only from app container (`localhost` from Nginx perspective inside Docker network).
- Strong random password for the DB user (32-char).
- Connection over Unix socket within Docker (most secure).
- Regular backup of the entire `pg_data` volume.

---

# 17. Offline App Decision

## 17.1 Decision

**The offline Windows cashier app is DEFERRED out of MVP scope.**

Reasons:
- Conflict resolution is undefined and complex (dual stock deductions, duplicated invoice numbers, payment race conditions).
- A solo developer cannot build and debug both online and offline systems in parallel without unacceptable risk.
- Algerian repair shops generally have functional internet for the working day; offline is an edge case, not the primary mode.
- Better to ship a solid online v1 and add offline as a paid V2 feature once the core is stable.

## 17.2 Architecture Preparation Now

The MVP is designed so the offline app can be added later without refactoring:

### What is prepared now
- **Document numbering uses store-prefix per-store sequences** — adding a `LOCAL-` prefix variant for offline-generated documents is trivial.
- **Stock movements are immutable** — sync rules can append without conflicting with the running ledger.
- **Customers are company-scoped** — an offline cashier can identify customers by phone without store ambiguity.
- **Payments record `cash_register_session_id`** — offline sessions can be merged into online history at sync.

### What is NOT prepared
- A sync queue model in the schema.
- Conflict resolution logic.
- Offline-aware UI states.
- Electron app codebase.

These are explicitly V2 — added later when the MVP is stable.

## 17.3 If/When Offline Is Built (V2 Scope Sketch)

### Strict offline operation set
- **Allowed offline:** create POS sale (cash-only, no debt, no partial payment, no refunds), create repair ticket (intake only — no status changes, no parts marking).
- **Forbidden offline:** all status changes beyond ticket creation, all stock adjustments, debt operations, refunds, supplier payments, purchase invoices, settings changes.

### Temporary numbering scheme
- Offline ticket: `LOCAL-{STORE_ID}-{TIMESTAMP}-{RANDOM}`.
- Offline invoice: same scheme.
- Receipts printed offline include a notice: "NUMÉRO PROVISOIRE — Le reçu officiel sera disponible après synchronisation."

### Sync rules
- Online and offline data merged at sync.
- Last-write-wins for editable ticket fields.
- Server-wins for stock quantities (offline cannot create stock movements; only sales which deduct).
- Conflicts logged in admin panel; never silent failures.
- After sync, server assigns permanent invoice/ticket numbers.
- Final WhatsApp receipt sent automatically to the customer.

### UI rules
- Offline indicator (red banner) when no connection.
- Outgoing sync queue counter visible.
- Sync log accessible to admin.
- "Sync now" manual trigger.

### Stack
- Electron + React (reuse the same Next.js components where possible).
- SQLite local DB.
- Sync worker syncs to the online API at a configurable interval (5 min default) and on every action.
- Conflict resolution UI for the admin to review unresolved conflicts.

## 17.4 What Shops Get Without Offline (MVP)

- Reliable internet uptime is required for v1 use.
- Power outage tolerance: laptop battery + UPS.
- Internet outage: shop reverts to paper for the duration; ticket creation resumes when internet returns; receipts must be re-printed manually.
- This is acceptable for v1 if shops are made aware during onboarding.


---

# 18. Technical Stack Recommendation

## 18.1 Stack Summary

| Layer | Technology | Why |
|---|---|---|
| **Frontend framework** | Next.js 14 (App Router) | Latest stable; same repo for API and UI. |
| **Language** | TypeScript (strict mode) | Type safety across DB → API → UI. |
| **UI library** | shadcn/ui + Tailwind CSS | Accessible primitives, easy to customize, RTL support, dark mode. |
| **Icons** | lucide-react | Consistent, lightweight, customizable. |
| **i18n** | next-intl | Best App Router integration; good RTL handling. |
| **Database** | PostgreSQL 16 | Mature, FIFO-friendly, advisory locks, generated columns, pg_trgm. |
| **ORM** | Prisma 5+ | Type-safe queries, migration system, scoped client extensions. |
| **Auth** | Custom JWT (jose) + bcrypt | Full control; no vendor lock-in; fits home-server hosting. |
| **PDF generation** | Puppeteer (server-side) | Most flexible; supports RTL, custom fonts, complex CSS. |
| **WhatsApp integration** | whatsapp-web.js | Free; works with shop's own number; documented risks. |
| **File uploads** | Local filesystem (`/uploads/`) | Simple; backed up; no S3 needed for v1. |
| **Process manager** | Docker Compose | One command up/down; reproducible. |
| **Reverse proxy** | Nginx behind Cloudflare | Cloudflare for SSL/CDN; Nginx for routing. |
| **DDNS** | DuckDNS or Cloudflare Tunnel | Free; reliable for home server. |
| **Backups** | pg_dump cron + Backblaze B2 sync | Automated; tested; cheap. |
| **Monorepo** | Turborepo (lightweight) | Future-ready for offline app; same tooling pattern as Lazuli. |

## 18.2 Frontend Structure (Next.js App Router)

```
/app
├── (auth)
│   ├── login/page.tsx
│   └── forgot-password/page.tsx
├── (super-admin)
│   ├── layout.tsx                 # super admin layout
│   ├── tenants/page.tsx
│   ├── tenants/[id]/page.tsx
│   ├── plans/page.tsx
│   ├── catalog/page.tsx
│   └── backups/page.tsx
├── (tenant)
│   ├── layout.tsx                 # main app layout (sidebar)
│   ├── dashboard/page.tsx
│   ├── tickets/
│   │   ├── page.tsx               # list
│   │   ├── new/page.tsx           # creation wizard
│   │   └── [id]/page.tsx          # detail
│   ├── pos/page.tsx
│   ├── customers/
│   ├── inventory/
│   │   ├── products/
│   │   ├── parts/
│   │   ├── services/
│   │   └── devices/
│   ├── suppliers/
│   ├── cash-register/
│   ├── reports/
│   ├── catalog/                   # store-custom
│   ├── settings/
│   └── audit-log/
└── api
    ├── auth/                      # login, refresh, logout, forgot
    ├── super-admin/               # super admin only
    ├── cron/                      # cron endpoints (protected by secret)
    ├── tickets/                   # tenant-scoped
    ├── pos/
    ├── customers/
    ├── inventory/
    ├── ...
```

## 18.3 Backend / API Structure

- All API routes in Next.js are server-side; request handlers in `app/api/.../route.ts`.
- Each request goes through the middleware:
  1. Decode JWT, attach `user`, `company_id`, `store_id` to request context.
  2. Validate role and tenant scope.
  3. Apply rate limit.
  4. Pass to route handler with scoped Prisma client.
- Errors are standardized: `{ error: { code, message, details? } }` with appropriate HTTP status.
- Validation: Zod schemas for every request body. Schemas exported and reused for client-side form validation.

## 18.4 Database Layer

- Prisma schema in `prisma/schema.prisma`.
- Migrations versioned in git.
- Seed scripts for default catalog (`prisma/seed.ts`).
- Scoped client extension in `lib/db/scoped-client.ts`.
- Raw `prisma` singleton in `lib/db/prisma.ts` (only imported in allowlisted routes).

## 18.5 Auth Approach

- Custom JWT issuance:
  - Access token: 15 min, JWT signed with HS256, contains `user_id`, `company_id`, `role`, `allowed_store_ids`.
  - Refresh token: 7 days, opaque token (random 32 bytes), hashed in DB.
- Tokens flow:
  - Access in memory (set at app load, never persisted).
  - Refresh in HttpOnly Secure SameSite=Strict cookie.
- Login → POST `/api/auth/login` returns access + sets refresh cookie.
- Refresh → POST `/api/auth/refresh` rotates and returns new access + sets new refresh cookie.
- Logout → POST `/api/auth/logout` revokes refresh.

## 18.6 File Storage

- All uploads go to `/var/repaire/uploads/{entity_type}/{uuid}.{ext}` on the host (mounted into the container).
- Served via Next.js API route (`/api/files/[uuid]`) with auth check.
- Full backup includes the uploads directory.

## 18.7 PDF Generation

- Puppeteer service, headless Chromium.
- Templates: HTML files in `/templates/pdf/{document}.html` with placeholders.
- Server reads the template, fills the data, runs Puppeteer to generate the PDF, returns the buffer.
- For thermal receipts: use HTML print + browser `window.print()` (no Puppeteer needed; faster).
- Async PDF generation queue for heavy reports (V1.5).

## 18.8 WhatsApp Integration

- whatsapp-web.js running in the same Node.js process as Next.js (or in a separate process for isolation; preferred).
- Each store's session managed by an instance.
- Session data stored encrypted in `/var/repaire/whatsapp-sessions/{store_id}/`.
- Message queue worker reads `whatsapp_message_queue`, attempts send, updates status, logs.

## 18.9 Deployment Architecture

```
[Internet]
   ↓
[Cloudflare]  ← SSL termination, DDoS, CDN, free tier
   ↓ (Cloudflare Tunnel or HTTPS to home IP)
[Home Server]
   ├── Nginx (port 80, reverse proxy)
   │      ↓
   ├── Next.js app (Docker container, port 3000)
   ├── PostgreSQL (Docker container, port 5432, internal only)
   ├── WhatsApp worker (Docker container, attaches to whatsapp-web.js sessions)
   └── Cron container (runs scheduled jobs)
```

- Single `docker-compose.yml` orchestrates all containers.
- Persistent volumes for `pg_data`, `uploads`, `whatsapp_sessions`.
- Restart policy: `unless-stopped`.

## 18.10 Backup Approach

- **PostgreSQL:** `pg_dump` every 6 hours via cron container; rotates 7 days locally.
- **Uploads:** rsync to `/var/repaire/backups/uploads/` daily.
- **Off-site:** rclone to Backblaze B2 (or Google Drive) every 24 hours.
- **Verification:** weekly automated restore into a test container; compare row counts.
- **Notification:** daily success/failure status logged in `backup_logs`; super admin dashboard widget shows status.

## 18.11 Environment Variables

```
DATABASE_URL=postgresql://...
JWT_ACCESS_SECRET=...                   # 32-byte hex
JWT_REFRESH_SECRET=...                  # 32-byte hex
WHATSAPP_SESSION_KEY=...                # 32-byte hex (AES-256)
NEXT_PUBLIC_APP_URL=https://repaire.dz
CLOUDFLARE_TUNNEL_TOKEN=...             # if using tunnel
B2_KEY_ID=...
B2_APPLICATION_KEY=...
B2_BUCKET_NAME=...
SMTP_HOST=...                           # for password reset emails
SMTP_USER=...
SMTP_PASSWORD=...
CRON_SECRET=...                         # protects /api/cron/* endpoints
```

## 18.12 Testing Approach

- **Unit tests:** Vitest for business logic functions (FIFO consumption, debt allocation, document numbering).
- **Integration tests:** Vitest + a test PostgreSQL instance for full API flow tests.
- **End-to-end tests (V1.5):** Playwright on critical paths (login, ticket creation, POS checkout, repair flow).
- **CI:** GitHub Actions runs unit + integration tests on every PR.
- **Tenant isolation tests** are non-negotiable: tests that explicitly attempt cross-tenant access and assert empty/forbidden results.

## 18.13 Performance Targets

- API median response time: <200ms.
- POS catalog browse: <500ms.
- Cart checkout: <1 second (full atomic transaction).
- PDF generation (thermal): <500ms.
- PDF generation (A4 with images): <2 seconds.
- Dashboard load: <1 second.
- 50 concurrent tenants supported on a moderate home server (16 GB RAM, 4-core CPU).

## 18.14 Monitoring (V1)

- Application logs: `console.log` to stdout, captured by Docker logs.
- Error tracking: Sentry free tier (V1.5; not strictly v1).
- Health check endpoint: `/api/health` returns 200 if DB connected.
- UptimeRobot free tier for external monitoring.


---

# 19. Folder Structure Plan

```
repaire/
├── apps/
│   └── web/                            # Next.js app (current MVP)
│       ├── app/
│       │   ├── (auth)/
│       │   ├── (super-admin)/
│       │   ├── (tenant)/
│       │   ├── api/
│       │   ├── layout.tsx
│       │   └── globals.css
│       ├── components/
│       │   ├── ui/                     # shadcn/ui exports
│       │   ├── layout/
│       │   │   ├── sidebar.tsx
│       │   │   ├── topbar.tsx
│       │   │   └── language-switcher.tsx
│       │   ├── customers/
│       │   │   ├── customer-search.tsx
│       │   │   ├── customer-form.tsx
│       │   │   └── debt-summary.tsx
│       │   ├── tickets/
│       │   │   ├── ticket-wizard/
│       │   │   ├── ticket-detail/
│       │   │   └── status-badge.tsx
│       │   ├── pos/
│       │   │   ├── catalog-browser.tsx
│       │   │   ├── cart-panel.tsx
│       │   │   ├── held-carts-modal.tsx
│       │   │   └── checkout-modal.tsx
│       │   ├── inventory/
│       │   ├── reports/
│       │   ├── shared/
│       │   │   ├── confirmation-modal.tsx
│       │   │   ├── empty-state.tsx
│       │   │   ├── error-boundary.tsx
│       │   │   └── document-preview.tsx
│       │   └── pdf/
│       │       ├── ticket-template.tsx
│       │       ├── invoice-template.tsx
│       │       ├── receipt-template.tsx
│       │       └── ...
│       ├── modules/                    # business logic modules
│       │   ├── auth/
│       │   │   ├── jwt.ts
│       │   │   ├── refresh-token.ts
│       │   │   └── pin.ts
│       │   ├── customers/
│       │   ├── tickets/
│       │   │   ├── status-machine.ts
│       │   │   ├── invoice-generator.ts
│       │   │   └── stock-restock.ts
│       │   ├── inventory/
│       │   │   ├── fifo-consumer.ts
│       │   │   ├── stock-reservation.ts
│       │   │   └── batch-creator.ts
│       │   ├── pos/
│       │   │   ├── cart.ts
│       │   │   ├── checkout.ts
│       │   │   └── refund.ts
│       │   ├── debt/
│       │   ├── payments/
│       │   ├── trade-in/
│       │   ├── whatsapp/
│       │   │   ├── session-manager.ts
│       │   │   ├── message-queue.ts
│       │   │   └── template-renderer.ts
│       │   ├── reports/
│       │   ├── pdf/
│       │   ├── audit-log/
│       │   └── reconciliation/
│       ├── lib/
│       │   ├── db/
│       │   │   ├── prisma.ts            # raw singleton (allowlisted only)
│       │   │   └── scoped-client.ts     # tenant-scoped client extension
│       │   ├── i18n/
│       │   │   ├── client.ts
│       │   │   └── server.ts
│       │   ├── auth/
│       │   │   └── middleware.ts
│       │   ├── validation/              # Zod schemas
│       │   ├── format/                  # date, number, currency formatters
│       │   ├── permissions/
│       │   │   └── matrix.ts
│       │   └── utils/
│       ├── messages/                    # i18n translation files
│       │   ├── fr/
│       │   │   ├── common.json
│       │   │   ├── tickets.json
│       │   │   ├── pos.json
│       │   │   ├── customers.json
│       │   │   ├── inventory.json
│       │   │   ├── reports.json
│       │   │   ├── settings.json
│       │   │   └── errors.json
│       │   ├── ar/
│       │   └── en/
│       ├── templates/
│       │   ├── pdf/                     # HTML PDF templates per language and direction
│       │   │   ├── fr/
│       │   │   │   ├── received-ticket.html
│       │   │   │   ├── estimate.html
│       │   │   │   ├── invoice.html
│       │   │   │   ├── thermal-receipt.html
│       │   │   │   ├── debt-statement.html
│       │   │   │   ├── z-report.html
│       │   │   │   └── ...
│       │   │   ├── ar/                  # RTL templates
│       │   │   └── en/
│       │   └── whatsapp/                # default templates
│       │       ├── fr/
│       │       │   ├── ticket-created.txt
│       │       │   ├── approval-request.txt
│       │       │   ├── ready-for-pickup.txt
│       │       │   ├── abandoned-notice.txt
│       │       │   └── sale-receipt.txt
│       │       └── ar/
│       ├── prisma/
│       │   ├── schema.prisma
│       │   ├── migrations/
│       │   └── seed/
│       │       ├── catalog/
│       │       │   ├── device-families.ts
│       │       │   ├── phone-brands.ts
│       │       │   ├── phone-models.ts
│       │       │   ├── repair-problems.ts
│       │       │   ├── product-categories.ts
│       │       │   └── ...
│       │       ├── plans.ts
│       │       ├── payment-methods.ts
│       │       └── seed.ts
│       ├── public/
│       │   ├── fonts/
│       │   │   ├── inter/
│       │   │   └── cairo/                # Arabic font
│       │   └── icons/
│       ├── tests/
│       │   ├── unit/
│       │   │   ├── fifo.test.ts
│       │   │   ├── debt-allocation.test.ts
│       │   │   └── document-numbering.test.ts
│       │   ├── integration/
│       │   │   ├── ticket-flow.test.ts
│       │   │   ├── pos-checkout.test.ts
│       │   │   └── tenant-isolation.test.ts   # NON-NEGOTIABLE
│       │   └── e2e/                     # V1.5 (Playwright)
│       ├── docker/
│       │   ├── Dockerfile
│       │   └── entrypoint.sh
│       ├── .eslintrc.js                 # includes raw-prisma rule
│       ├── tailwind.config.ts
│       ├── next.config.js
│       └── package.json
├── packages/                            # for monorepo extensibility
│   ├── shared-types/                    # shared TS types between web and future offline app
│   ├── shared-validation/               # shared Zod schemas
│   └── shared-i18n/                     # shared translation files
├── infra/
│   ├── docker-compose.yml
│   ├── docker-compose.prod.yml
│   ├── nginx/
│   │   └── default.conf
│   └── scripts/
│       ├── backup.sh
│       ├── restore.sh
│       └── verify-backup.sh
├── docs/
│   ├── architecture.md                  # this document, kept up to date
│   ├── deployment.md
│   ├── database-schema.md
│   ├── runbook.md                       # ops procedures
│   └── changelog.md
├── turbo.json                           # Turborepo config
├── package.json
└── README.md
```

---

# 20. Implementation Phases

The build is structured as 17 phases. Each phase has a clear goal, included features, database work, UI screens, business rules, validations, tests, done criteria, and risks. The phases assume AI-assisted coding (Claude Code / Qwen Code) which roughly halves the time vs manual coding.

## Phase 0 — Final Decisions & Project Setup

**Goal.** Lock all open decisions, set up the repository, and prepare the development environment.

**Tasks:**
- Resolve all items in Section 22 Open Questions (legal review, abandoned device wording, market validation).
- Initialize Turborepo monorepo with `apps/web` package.
- Set up Next.js 14 App Router + TypeScript strict.
- Install Tailwind, shadcn/ui, lucide-react, next-intl.
- Initialize Prisma with PostgreSQL.
- Set up Docker Compose for local development (Next.js + PostgreSQL).
- Set up Cloudflare DNS and tunnel for staging.
- Configure ESLint with the raw-prisma rule.
- Set up CI (GitHub Actions): lint + tests on every push.
- Create base layouts: empty App Router structure, sidebar shell, topbar shell.
- Set up i18n with translation file structure (empty FR/AR/EN).

**Done criteria:**
- `docker-compose up` brings the app + DB up, accessible at `localhost:3000`.
- Health check endpoint returns 200.
- ESLint enforces all rules.
- CI passes on a sample PR.

**Risks:** scope creep at this stage. Must NOT start building features.

## Phase 1 — Database Foundation & Tenant Model

**Goal.** Create the core schema for tenants, users, stores, and the tenant isolation infrastructure.

**Tables:**
- `companies`, `super_admin_users`, `users`, `user_store_access`, `stores`.
- `plans`, `company_subscriptions`, `tenant_impersonation_sessions`.
- `refresh_tokens`, `audit_logs`.
- `document_sequences`, `payment_methods` (seeded with `cash`).

**Code:**
- Prisma schema with all the above.
- Seed: `super_admin_users` (one row), `plans` (3 rows), `payment_methods` (1 row).
- `lib/db/scoped-client.ts` — Prisma client extension.
- `lib/auth/middleware.ts` — JWT validation, tenant scope attachment.
- `lib/permissions/matrix.ts` — role-permission map.
- ESLint rule for raw `prisma` import.

**Tests:**
- Tenant isolation tests (cross-tenant query returns empty).
- Refresh token rotation tests including race condition grace window.

**Done criteria:**
- A super admin can create a tenant via the database.
- A user in tenant A cannot access tenant B's data via any API.
- Audit log records every privileged action.

## Phase 2 — Auth, Roles, Permissions, Audit Logs

**Goal.** Working authentication and role enforcement across all routes.

**API routes:**
- `POST /api/auth/login`
- `POST /api/auth/refresh`
- `POST /api/auth/logout`
- `POST /api/auth/forgot-password`
- `POST /api/auth/reset-password`
- `POST /api/super-admin/login` (separate)

**Pages:**
- Login page.
- Forgot password page.
- Reset password page.
- 403 page.
- 404 page.

**Code:**
- JWT issuance and verification.
- Bcrypt password hashing.
- PIN hashing.
- Account lockout logic.
- Email sending (SMTP) for password reset.
- Audit log writer middleware.
- Audit log viewer page (admin only).

**Tests:**
- Login flow.
- Refresh token rotation.
- Account lockout.
- Password reset flow.
- Audit log entries created on every action.

**Done criteria:**
- A user can log in, navigate, refresh tokens, log out.
- A user is locked out after 5 failed login attempts.
- Audit logs viewable by Admin.

## Phase 3 — Customers & Customer Devices

**Goal.** Full customer management with multi-source debt and customer devices.

**Tables:**
- `customer_groups`, `customers`, `customer_phones`, `customer_assets`.
- `customer_debt_balances`, `customer_debt_transactions`, `customer_debt_payments`, `debt_payment_allocations`.

**API + UI:**
- Customer CRUD.
- Customer search (by phone with priority detection).
- Customer profile page with all tabs.
- Walk-in customer creation.
- Customer asset CRUD.
- Manual debt adjustment.
- Debt statement print.

**Tests:**
- Phone uniqueness per company.
- Walk-in customer rules.
- Debt balance reconciliation.
- Duplicate detection prompt.

**Done criteria:**
- Cashier can search and select a customer in <1 second.
- Walk-in customers are flagged correctly.
- Debt balances always equal the sum of debt transactions.

## Phase 4 — Repair Workflow Foundation

**Goal.** Core repair ticket lifecycle without estimates yet.

**Tables:**
- `repair_tickets`, `repair_ticket_problems`, `repair_status_history`, `repair_ticket_technicians`, `repair_ticket_photos`.
- (Catalog tables seeded earlier in this phase.)

**API + UI:**
- Catalog seed loaded (device families, brands, models, problems).
- Ticket creation wizard (5 steps).
- Ticket list with filters.
- Ticket detail page with tabs (overview, notes, status history, photos).
- Status transitions with validation.
- Auto-assignment for technician role.
- Internal vs customer notes split.
- Per-problem resolution status.

**Tests:**
- Status transition graph (allowed paths only).
- Auto-restock on Not repaired status.
- Walk-in ticket constraints (no debt, no WhatsApp).

**Done criteria:**
- A technician can create a ticket, run through statuses, mark complete.
- Status history is logged immutably.
- Photos can be uploaded and attached.

## Phase 5 — Diagnosis, Estimates, Approvals

**Goal.** Estimate / devis flow with customer approval logging.

**Tables:**
- `estimates`, `estimate_items`.

**API + UI:**
- Estimate create/edit form within ticket detail.
- Estimate preview.
- Estimate send (PDF + WhatsApp queue).
- "Customer approved" / "Customer refused" actions.
- Diagnosis fee agreement on ticket creation.
- Status transition `waiting_approval` → `in_repair` triggers part reservation.

**Tests:**
- Estimate lifecycle (draft → sent → accepted → converted).
- Approval logged with staff ID and timestamp.
- Refusal triggers diagnosis fee invoice.

**Done criteria:**
- Customer approval flow is fully captured in the system.
- Estimate PDF prints correctly in FR and AR.

## Phase 6 — Inventory: Products, Parts, Services, Devices

**Goal.** Inventory item CRUD with multi-path categorization and tags.

**Tables:**
- `products`, `parts`, `services`, `devices`.
- `product_categories`, `part_categories`, `tags`, `product_browse_paths`, `part_browse_paths`, `product_tag_links`, `part_tag_links`, `product_compatibility`, `part_compatibility`, `service_consumed_parts`.
- `uploaded_files` (for product images).

**API + UI:**
- Product/part/service/device CRUD pages.
- Multi-path category browser.
- Tag picker.
- Compatibility editor for parts.
- Image upload.
- Soft delete (archive).

**Tests:**
- Multi-path browse navigation.
- SKU/barcode uniqueness per store.
- Image upload validation (type, size).

**Done criteria:**
- A product can be browsed under multiple categories.
- Cost prices are hidden from Cashier role.

## Phase 7 — Stock Batches, FIFO, Stock Movements

**Goal.** Stock batches and FIFO consumption logic; suppliers and purchase invoices.

**Tables:**
- `stock_batches`, `stock_movements`, `suppliers`, `supplier_payments`, `purchase_invoices`, `purchase_invoice_items`.
- `stock_adjustments`, `stock_count_sessions`, `stock_count_items`.

**API + UI:**
- Supplier CRUD.
- Purchase invoice creation (multi-line, mixed types, immediate stock add).
- Stock adjustment with mandatory typed reason.
- Stock count session.
- Stock movement history view.

**Tests:**
- FIFO consumption (single batch and multi-batch).
- Each purchase creates a new batch (no merging).
- Stock adjustment threshold enforcement.
- Reservation logic: POS available qty = stock_qty − reserved.

**Done criteria:**
- Stock batches behave correctly under all scenarios.
- Supplier debt is accurately tracked.
- Stock count session adjusts variances correctly.

## Phase 8 — POS Sales & Cart

**Goal.** Working POS with cart, hold/resume, barcode, discount escalation.

**Tables:**
- `carts`, `cart_items`, `sales`, `discount_approvals`.

**API + UI:**
- POS main screen with catalog browser, cart panel, customer selection.
- Held carts modal.
- Barcode scanner detection.
- Line discount and cart discount with manager PIN escalation.
- Price override with reason.
- Guest sale mode.
- Cart auto-release cron.

**Tests:**
- Cart persistence across refresh.
- Held cart auto-release after 4 hours.
- Discount escalation flow with PIN validation.
- Stock validation at checkout.

**Done criteria:**
- Cashier can complete a basic POS sale in <30 seconds.
- Barcode scanning works with USB scanners.

## Phase 9 — Cash Payments, Debt, Refunds, Cash Sessions

**Goal.** Full cash payment system with sessions, refunds, debt allocation.

**Tables:**
- `payments`, `payment_invoice_links`, `refunds`, `refund_items`.
- `cash_register_sessions`, `tradein_purchases`.

**API + UI:**
- Cash register open/close.
- Payment modal (cash entry, change calculation).
- Refund flow (cashier scope and manager scope).
- Trade-in flow (Scenario A and Scenario B).
- Debt payment with allocation override.

**Tests:**
- Cash session opening/closing/variance.
- Refund types (full / partial / service / cash).
- Restock at original cost (new batch).
- Trade-in offsets cart total in Scenario B.

**Done criteria:**
- Z-report computes correctly.
- Force-close session works as expected.

## Phase 10 — PDFs and Receipts

**Goal.** Generate all customer-facing and internal documents.

**Code:**
- Puppeteer integration.
- HTML templates for all document types in FR and AR.
- Thermal receipt CSS.
- Document preview modal.
- Print/download buttons throughout the app.

**Tests:**
- PDF rendering for each document type.
- RTL templates render correctly in Arabic.
- Document numbering is unique and monotonic.

**Done criteria:**
- All 14 document types render correctly.
- Both A4 and thermal formats are usable.

## Phase 11 — WhatsApp Notifications

**Goal.** End-to-end WhatsApp integration with queue, templates, and fallback.

**Tables:**
- `whatsapp_sessions`, `whatsapp_templates`, `whatsapp_message_queue`, `whatsapp_logs`.

**Code:**
- whatsapp-web.js integration.
- QR connection flow in settings.
- Session encryption.
- Message queue worker.
- Template renderer with variable substitution.
- wa.me fallback links throughout.
- Health check (5 min) for session status.
- Rate limiting (30/hour/store).

**Tests:**
- Template rendering in FR and AR.
- Message queue retry logic.
- Failed send fallback.

**Done criteria:**
- A test message can be sent end-to-end from a fresh QR connection.
- Failed sends do not block any workflow.

## Phase 12 — Reports

**Goal.** All MVP reports with PDF export.

**Code:**
- All 12 reports listed in Section 15.
- Dashboard widgets.
- Report PDF templates.

**Tests:**
- Profit calculation correctness (with and without expenses).
- Cash flow correctness.
- Date range filtering.

**Done criteria:**
- Every report loads in <5 seconds for typical date ranges.
- PDF export matches on-screen content.

## Phase 13 — Catalog Management

**Goal.** Super admin global catalog manager + tenant store-custom catalog manager.

**Code:**
- Super admin Catalog Manager page (tree view, edit/add/archive).
- Tenant store-custom additions page.
- Search across global and store-custom.

**Tests:**
- Tenant cannot modify global catalog.
- Store-custom entries are scoped correctly.

**Done criteria:**
- A tenant can extend any catalog area without affecting others.

## Phase 14 — Settings & Multilingual / RTL Polish

**Goal.** Settings page, complete translations, full RTL audit.

**Code:**
- All settings tabs.
- Translation completeness check (script).
- Component-level RTL audit (every screen tested LTR + RTL).

**Tests:**
- RTL layout snapshot tests on key screens.
- All UI strings translated.

**Done criteria:**
- Switching language is instant and complete.
- RTL is visually correct on every screen.

## Phase 15 — Super Admin & Subscription Management

**Goal.** Operating tools for the platform.

**Code:**
- Super admin dashboard.
- Tenant management.
- Subscription activation, extension, suspension, cancellation.
- Tenant impersonation.
- Per-tenant metrics.
- Backup status display.

**Tests:**
- Subscription state transitions.
- Impersonation logging and banner.

**Done criteria:**
- Super admin can manage the entire platform from the panel.

## Phase 16 — Production Hardening & Deployment

**Goal.** Make the app production-ready.

**Code:**
- Cloudflare configuration.
- Nginx config.
- Backup scripts and verification.
- Cron jobs (counter reconciliation, abandoned ticket flag, held cart release, refresh token cleanup, backup, backup verification).
- Health check endpoint.
- Monitoring with UptimeRobot.
- Deployment checklist runbook.

**Tests:**
- Backup restore drill.
- Failover scenarios (DB restart, app restart).

**Done criteria:**
- The app survives a server reboot without manual intervention.
- Backups are tested and restorable.

## Phase 17 — Optional Offline App Preparation (V2)

**Goal.** If/when offline is justified, the data model is ready.

**Tasks (deferred):**
- Schema additions for offline sync queue.
- Electron app skeleton.
- Sync logic.
- Conflict resolution UI.


---

# 21. Validation Checklist

Before declaring the MVP "done," every item in this checklist must be verified.

## 21.1 Business Rules

- [ ] Walk-in tickets cannot accrue debt or send WhatsApp.
- [ ] Phone is required for named customers; unique per company.
- [ ] Diagnosis fee agreement captured at intake; printed on received-device ticket.
- [ ] Customer approval logged with timestamp and staff ID.
- [ ] Estimate lifecycle (draft → sent → accepted → rejected → converted) works correctly.
- [ ] Per-problem resolution status visible on final receipt.
- [ ] Internal notes never appear on customer documents.
- [ ] Ready for pickup auto-generates final invoice and applies deposits.
- [ ] Not repaired auto-restocks used parts.
- [ ] Abandoned device 3-step workflow runs via cron.
- [ ] Warranty banner appears for repeat customers within warranty period.
- [ ] Reopen-as-new-repair preserves device details and internal notes.

## 21.2 Repair Workflow

- [ ] Stock is reserved at part-add (not at use).
- [ ] POS available qty excludes reserved quantities.
- [ ] Marking part as used creates stock_movement at FIFO cost.
- [ ] Returning a reserved part releases reservation without movement.
- [ ] Multi-technician support records both lead and support roles.
- [ ] Photos of intake type are timestamped with uploader.
- [ ] WhatsApp failure shows red badge on ticket.

## 21.3 POS / Cash Payment

- [ ] Cash register required-open enforced; payments blocked if closed.
- [ ] One open session per store at a time.
- [ ] Z-report includes opening cash, expected cash, counted cash, variance.
- [ ] Force-close requires mandatory note.
- [ ] Auto-alert triggers if session open >12 hours.
- [ ] Held carts max 5 per store; auto-release after 4 hours.
- [ ] Discount escalation flow with manager PIN works.
- [ ] Price override requires reason and stores original price.
- [ ] Guest sale mode disables debt and customer requirement.
- [ ] Refund cashier scope is current session only.
- [ ] Refund types (full / partial / service / cash) behave correctly.

## 21.4 Inventory

- [ ] Every purchase invoice line creates a new batch (no merging).
- [ ] FIFO consumes oldest batch first.
- [ ] Multi-batch consumption works correctly.
- [ ] cost_price_snapshot is set on every consumption.
- [ ] Restocked items create new batches at original cost.
- [ ] Manual stock adjustments require typed reason.
- [ ] High-value adjustments require Admin approval.
- [ ] Stock count session computes variances and applies adjustments.
- [ ] SKU and barcode unique per store.
- [ ] Cost prices hidden from Cashier role.

## 21.5 Debt / Accounting

- [ ] Customer debt tracked across 3 sources.
- [ ] Total debt is a generated column.
- [ ] Debt allocation default priority: repair → sale → manual.
- [ ] Cashier can override allocation per payment.
- [ ] Debt limit warning is full-width banner with explicit acknowledgment.
- [ ] Walk-in customers cannot have debt.
- [ ] Manual debt adjustment is Manager+ only with mandatory reason.
- [ ] Debt statement PDF generates correctly.

## 21.6 SaaS / Tenant Isolation

- [ ] Customer is company-scoped, not store-scoped.
- [ ] All transactional data is store-scoped.
- [ ] Prisma scoped client auto-injects company_id and store_id.
- [ ] ESLint rule blocks raw prisma in tenant routes.
- [ ] Cross-tenant access tests return empty.
- [ ] 14-day trial works.
- [ ] 7-day grace after expiry.
- [ ] Read-only mode after grace.
- [ ] In-flight transactions never cut off.
- [ ] Super admin impersonation logged with banner.

## 21.7 Security

- [ ] JWT refresh token rotation with 2–3 second grace window.
- [ ] Account lockout after 5 failed attempts.
- [ ] Server-side route guards on every page and API route.
- [ ] All file uploads validated server-side (type, size, magic bytes).
- [ ] Files served behind authentication.
- [ ] WhatsApp session encrypted with key from env var.
- [ ] Audit logs immutable; viewer filterable.
- [ ] Tenant data deletion: 30-day grace with logged completion.
- [ ] Payment voids require reason; alert manager.
- [ ] Stock adjustment threshold approval enforced.

## 21.8 Multilingual / RTL

- [ ] FR is default; AR and EN fully supported.
- [ ] Every UI string translated in all 3 languages.
- [ ] RTL tested at component level for every screen.
- [ ] Sidebar mirrors in RTL.
- [ ] Action columns mirror in RTL.
- [ ] Numbers stay LTR within RTL text.
- [ ] PDFs use separate AR templates with RTL text flow.
- [ ] Customer preferred language drives WhatsApp template selection.

## 21.9 PDF / Printing

- [ ] All 14 document types render correctly.
- [ ] A4 and thermal formats both work.
- [ ] Document numbering is monotonic per (store, type, year, month).
- [ ] Advisory locks prevent duplicate numbers.
- [ ] Preview modal shown before every print.
- [ ] Customer documents never include cost prices.

## 21.10 WhatsApp

- [ ] QR connection flow works.
- [ ] Session encrypted at rest.
- [ ] Session reconnects automatically after server restart.
- [ ] Messages queued and sent with retry on failure.
- [ ] Failed sends do not block workflows.
- [ ] wa.me fallback link always available.
- [ ] Rate limit 30/hour/store enforced.
- [ ] Customer preferred language drives template selection.
- [ ] Manual sends preview before sending.

## 21.11 Reports

- [ ] All 12 MVP reports load in <5 seconds.
- [ ] Profit report segments correctly (products / services / labor).
- [ ] Net profit subtracts expenses.
- [ ] Z-report content matches Section 12 specification.
- [ ] Technician performance includes warranty rate.
- [ ] Cash flow report distinct from profit report.
- [ ] Supplier debt report includes pay-now action.
- [ ] All reports exportable to PDF.

## 21.12 Deployment

- [ ] Docker Compose brings up all services with one command.
- [ ] Cloudflare Tunnel or DNS works.
- [ ] PostgreSQL backups every 6 hours.
- [ ] Daily off-site backup sync.
- [ ] Weekly automated restore verification.
- [ ] Backup status displayed in super admin panel.
- [ ] Health check endpoint returns 200.
- [ ] UptimeRobot monitoring active.
- [ ] App survives server reboot without manual intervention.

---

# 22. Open Questions

The following items truly block implementation or require product owner decisions before specific phases can be completed. These are NOT generic questions; each has a recommended default decision so work can proceed while they are resolved.

## Q1 — Legal review of customer agreements

**Why it matters:** Diagnosis fee agreement, abandoned device notice, and customer data deletion all touch Algerian Law 18-07 on personal data protection and broader consumer law. Going to market with placeholder legal text exposes the shops (and REPAIRE) to dispute.

**Recommended default:** Use clear, neutral wording in v1; commission a brief legal review (1–2 hours of a lawyer's time) before launch to validate:
- The wording on the diagnosis fee notice that prints on the received-device ticket.
- The abandoned device notice wording and grace periods.
- The tenant data deletion procedure and 30-day grace.

**Blocks:** Phase 4 (received-device ticket print), Phase 6 (abandoned notice), Phase 16 (deletion workflow).

## Q2 — Pricing of the SaaS

**Why it matters:** The pricing strategy is not finalized. Algerian shops are price-sensitive; pricing too high kills adoption, pricing too low devalues the product. The architecture supports any price.

**Recommended default:** Anchor for early discussions:
- Yearly subscription, Single-store: 24,000–36,000 DZD/year.
- Yearly subscription, Multi-store: 60,000–90,000 DZD/year.
- One-time Single-store + maintenance: 80,000–100,000 DZD upfront + 15,000 DZD/year maintenance.
- One-time Multi-store + maintenance: 150,000–200,000 DZD upfront + 25,000 DZD/year maintenance.

**Blocks:** None for MVP build (super admin sets prices manually). Blocks marketing/sales work.

## Q3 — Validation of catalog assumptions with real shop data

**Why it matters:** Several catalog priorities are based on assumptions (Condor laptop volume, EcoTank dominance, Tecno/Itel/Wiko volume). Inaccurate priorities make the catalog less useful.

**Recommended default:** Ship with the priorities defined in Section 14 and adjust based on shop feedback in the first 30 days post-launch. The catalog is configurable per store; shops will naturally surface their own priorities through custom additions.

**Blocks:** None. Implementation can proceed; refinement is post-launch.

## Q4 — Onboarding scope for first shops

**Why it matters:** First shops will need hand-holding. The product owner should decide if this is a self-service onboarding or a guided one.

**Recommended default:** First 5 shops onboarded with hands-on assistance from the developer (1–2 hour video call to set up, scan WhatsApp, add first products). Quick Setup checklist on dashboard handles ongoing self-service.

**Blocks:** Sales work; not implementation.

## Q5 — Backup off-site provider

**Why it matters:** Backblaze B2 is recommended; alternatives include Cloudflare R2, AWS S3, Google Cloud Storage. The choice affects DR cost.

**Recommended default:** Backblaze B2 free tier (10 GB). Migration is trivial (rclone supports both).

**Blocks:** Phase 16.

## Q6 — Trial activation: open signup or invitation only?

**Why it matters:** The super admin manually activates subscriptions. The decision is whether trials are also manual (invitation-only) or self-service (anyone signs up).

**Recommended default:** Invitation-only trials for the first 6 months (super admin manually creates a trial company per request). Self-service signup (with a public landing page) is V1.5.

**Blocks:** Phase 15. Affects whether a public signup page is built.

## Q7 — Single language at first launch?

**Why it matters:** Building three full languages simultaneously is more work than building one and adding the others later. The architecture supports all three from day one.

**Recommended default:** All three languages day-one, but prioritize French translation first; Arabic follows immediately for RTL validation; English is "best effort" and may have some gaps in v1 (filled in V1.5).

**Blocks:** Phase 14. Affects translation completeness goals.

## Q8 — WhatsApp number per shop or shared?

**Why it matters:** whatsapp-web.js requires the shop's own WhatsApp number scanned via QR. Some small shops may not have a dedicated WhatsApp Business account; they use personal WhatsApp.

**Recommended default:** Strongly recommend that shops use a WhatsApp Business account (free) for the integration. Document this in onboarding. Personal WhatsApp also works but ban risk is somewhat higher.

**Blocks:** Phase 11. Just documentation, no code.

## Q9 — Cashier discount threshold default

**Why it matters:** The default threshold for cashier-applied discounts must be set. Too high = cashier authority too broad; too low = constant manager interruption.

**Recommended default:** 5% of line total OR 200 DZD per line, whichever is lower. Configurable per store. The shop owner adjusts after first week of use.

**Blocks:** Phase 8.

## Q10 — Default warranty period

**Why it matters:** Default warranty days for repairs vary across shops.

**Recommended default:** 30 days. Configurable per store and per ticket. This is a realistic average; shops can set their preferred default.

**Blocks:** Phase 4 (configuration default).

## Q11 — Should walk-in customers see WhatsApp opt-in?

**Why it matters:** A walk-in customer may want WhatsApp updates if they provide a phone. The current rule is walk-ins cannot send WhatsApp.

**Recommended default:** If staff captures a phone during a walk-in interaction, the system **promotes** the walk-in to a named customer (named auto-generated or "Client + last 4 of phone"). At promotion, WhatsApp becomes available. This avoids the awkward "you gave us your phone but we still can't text you" situation.

**Blocks:** Phase 3.

## Q12 — Audit log retention

**Why it matters:** 12 months retention is suggested; some shops or auditors might want longer.

**Recommended default:** 12 months. Configurable per super admin. If a tenant needs longer (V1.5), a per-tenant override is added.

**Blocks:** Phase 16.

---

# Final Notes

This document is the master implementation plan for REPAIRE.

**It supersedes:**
- The original architecture discussion notes.
- The architecture fixes document.
- The screen extraction summary.
- The V1 critique enhancement points file.
- The V2 critique file.

**It does not supersede:**
- The catalog files (phone, laptop, tablet/iPad, desktop, printer, console, products/accessories) — those remain the seed data source.

**Design philosophy throughout:**
- Solo developer can build it with AI assistance.
- Shippable as MVP with cash-only payments.
- Algerian repair shops are the primary target.
- Multi-language from day one with French default.
- Multi-tenant SaaS with proper isolation.
- Inventory accuracy via FIFO; debt accuracy via immutable ledger; security via tenant-scoped client + ESLint guard.
- Every shop owner can run their full daily operation without leaving the app.

**What to do next:**
1. Resolve the open questions in Section 22.
2. Validate the legal text (Q1) with a lawyer.
3. Begin Phase 0: project setup.
4. Build phases 1–16 in order.
5. Launch with first 5 shops (invitation-only).
6. Collect feedback, refine the catalog priorities, plan V1.5.

End of REPAIRE — Full Implementation Plan & UX Mockup Blueprint.
