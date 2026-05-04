# REPAIRE — Implementation Tracker

Last updated: 2026-05-04 (Block 13 complete)

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Done |
| 🔄 | In Progress |
| ⏳ | Not Started |
| 🚫 | Deferred |

---

## Coding Blocks

| # | Block | Status | Notes |
|---|-------|--------|-------|
| 1 | Project Foundation | ✅ Done | Folder structure, shadcn/ui setup, i18n structure, RTL foundation, theme |
| 2 | Database Foundation | ✅ Done | Prisma 7 + pg adapter, full schema, migration applied, seed data |
| 3 | Auth, Roles, Permissions | ✅ Done | JWT HS256, refresh rotation + grace window, 4 roles, login page, middleware |
| 4 | Dashboard Shell & RTL Layout | ✅ Done | App shell, sidebar nav, RTL support, 8 placeholder routes, proxy migration |
| 5 | Customers & Customer Devices | ✅ Done | Customer list/create/edit/archive, walk-in vs named, phones, assets |
| 6 | Catalog Foundation | ✅ Done | DeviceCategory/DeviceBrand/DeviceModelFamily, seed data, catalog UI, asset form integration |
| 7 | Inventory — Products / Parts / Services | ✅ Done | Products, parts, services, schemas, seed data, unified UI |
| 8 | Stock Batches, FIFO, Stock Movements, Purchase Invoices | ✅ Done | Suppliers, PurchaseInvoice, StockBatch, StockMovement, FIFO foundation |
| 9 | Basic Repair Tickets Foundation | ✅ Done | Ticket creation, intake, device linking, status history |
| 10 | Estimates / Devis & Customer Approval | ✅ Done | Estimate lifecycle, lines, customer approval log, status transitions |
| 11 | Stock Reservation for Repair Tickets | ✅ Done | RepairTicketPart, availability calc, reserve/release UI |
| 12 | Cash Register Sessions | ✅ Done | CashRegisterSession, open/close/force-close, session history, dashboard widget |
| 13 | Cash-Only POS Checkout | ✅ Done | PosSale, PosSaleLine, CashMovement, FIFO consumption, cart UI, cash checkout |
| 14 | Customer Debt | ⏳ Not Started | Three-source debt, debt statement |
| 15 | Cash Payments & Receipts | ⏳ Not Started | Payment recording, change calc |
| 16 | PDFs | ⏳ Not Started | Ticket receipt, invoice, debt statement |
| 17 | WhatsApp | ⏳ Not Started | whatsapp-web.js, per-store session |
| 18 | Reports | ⏳ Not Started | Daily sales, repair revenue, cash variance |
| 19 | Super Admin | ⏳ Not Started | Tenant management, impersonation |
| 20 | Security Hardening | ⏳ Not Started | ESLint guards, rate limiting, audit log |
| 21 | Production Polish | ⏳ Not Started | Empty states, print layouts, error pages |

---

## Block 1 — Project Foundation

**Status:** ✅ Done

### Completed
- [x] Clean folder structure (`src/components/`, `src/features/`, `src/lib/`, `src/hooks/`, `src/types/`, `src/messages/`, `src/i18n/`)
- [x] shadcn/ui dependency setup (`components.json`, `lib/utils.ts`, `clsx`, `tailwind-merge`, `class-variance-authority`, `lucide-react`)
- [x] REPAIRE theme CSS variables (light + dark mode) in `globals.css`
- [x] Tailwind v4 `@theme inline` mapping for all brand tokens
- [x] Sidebar color tokens defined
- [x] Base layout cleanup (`layout.tsx`) — REPAIRE branding, `lang="fr"`, `dir="ltr"`
- [x] i18n folder structure (`src/messages/fr.json`, `ar.json`, `en.json`)
- [x] next-intl v4 config (`src/i18n/routing.ts`, `src/i18n/request.ts`)
- [x] next-intl plugin wired in `next.config.ts`
- [x] Base app types (`src/types/index.ts`) — Locale, Direction, UserRole
- [x] RTL-ready direction utility (`getDirection()`)
- [x] Route group folders created: `src/app/(auth)/`, `src/app/(dashboard)/`
- [x] REPAIRE placeholder page (replaces Next.js boilerplate)

### Deferred to Later Blocks
- [ ] Locale-aware `lang` and `dir` on `<html>` (Block 4 — requires `[locale]` routing)
- [ ] Arabic font (Noto Sans Arabic or Amiri) loading (Block 4)
- [ ] `NextIntlClientProvider` wiring in layout (Block 4)
- [ ] shadcn/ui component installation (Button, Input, etc.) — added per-feature as needed

---

## Block 2 — Database Foundation

**Status:** ✅ Done

### Completed
- [x] Prisma 7 setup with `@prisma/adapter-pg` driver adapter (Prisma 7 breaking change: no `url` in schema)
- [x] `prisma.config.ts` — datasource URL + seed config (Prisma 7 config file)
- [x] `prisma/schema.prisma` — full schema with all Block 2 tables
- [x] Migration `20260503150654_init` applied to `repaire_dev` database
- [x] Seed data: 3 plans (trial/single_store/multi_store) + 1 payment method (cash only)
- [x] `src/lib/db/index.ts` — singleton PrismaClient with pg pool adapter
- [x] `docker-compose.yml` — PostgreSQL 16 for Docker-based local dev
- [x] `.env` + `.env.example` — DATABASE_URL configured
- [x] `package.json` — db:generate, db:migrate, db:push, db:seed, db:studio, db:reset scripts

### Tables created (20 total)
**Tenant & Auth:** companies, super_admin_users, users, stores, user_store_access, plans, company_subscriptions, tenant_impersonation_sessions, refresh_tokens

**Customers (company-scoped):** customer_groups, customers, customer_phones, customer_assets, customer_debt_balances, customer_debt_transactions

**System:** audit_logs, store_settings, document_sequences, payment_methods

### Key design decisions
- Phone uniqueness per company: `company_id` denormalized onto `customer_phones` → `@@unique([companyId, phoneNumber])`
- `customer_debt_balances.totalDebt` is a plain field (updated by app + reconciliation cron) — PostgreSQL generated columns not used for Prisma compatibility
- `customer_debt_transactions` is immutable (no delete, no edit by design)
- All money fields: `Decimal @db.Decimal(12, 2)` DZD
- `payment_methods` seeded with `cash` only — V1.5 methods added later

### Known Prisma 7 workarounds
- `url` in `schema.prisma` datasource removed (Prisma 7 breaking change)
- `prisma.config.ts` loads `.env` via `dotenv` (Prisma 7 doesn't auto-load `.env` for config)
- All Prisma operations (seed, app client) require `PrismaPg` adapter from `@prisma/adapter-pg`
- Partial unique index on `cash_register_sessions` (one open session per store) added in migration SQL, not schema — deferred to Block 11

### Deferred to Later Blocks
- [ ] Tenant-scoped Prisma client extension (Block 3 / Block 4 — needs auth context)
- [ ] ESLint guard against raw `prisma` import in tenant routes (Block 19)
- [ ] FK constraints on `customer_assets.deviceFamilyId/brandId/modelId` (Block 6)
- [ ] FK constraints on `customer_debt_transactions.invoiceId/paymentId` (Block 11)
- [ ] `pg_trgm` extension + trigram indexes on customers/products/parts (Block 5)
- [ ] Partial unique index on open cash register sessions (Block 11)

---

## Block 3 — Auth, Roles, Permissions

**Status:** ✅ Done

### Completed
- [x] bcryptjs password hashing (12 rounds) — `hashPassword()`, `verifyPassword()`, `hashPin()`, `verifyPin()`
- [x] JWT HS256 access tokens (15 min) via `jose` — `signAccessToken()`, `verifyAccessToken()`
- [x] Opaque refresh tokens (7 days) — SHA-256 hashed in DB, HttpOnly cookie
- [x] Refresh token family-based reuse detection — revoke entire family on breach
- [x] 3-second grace window for concurrent refresh races
- [x] API routes: POST /api/auth/login, POST /api/auth/refresh, POST /api/auth/logout, GET /api/auth/me
- [x] Next.js middleware (`src/middleware.ts`) — protects `/dashboard/**`, redirects unauth to `/login`
- [x] Login page (`/login`) — French UI, error state, loading state, redirect after login
- [x] Protected dashboard placeholder (`/dashboard`) — shows session info, logout button
- [x] Permission matrix (`src/lib/auth/permissions.ts`) — 17 permissions across 4 roles
- [x] Session helper (`src/lib/auth/session.ts`) — `getSession()` for server components
- [x] Demo seed: Demo Réparation company + Boutique Principale store + 4 users (password: demo1234)
- [x] JWT_SECRET added to `.env` + `.env.example`

### Key design decisions
- Access token payload: `{ sub: userId, companyId, role, storeIds[] }`
- Refresh token is opaque random bytes (not JWT), stored as SHA-256 hash in DB
- Cookie strategy: both tokens in HttpOnly cookies; client reads user data via `/api/auth/me` or server props
- Middleware uses `jose jwtVerify` (edge-compatible) — no DB calls in middleware
- HS256 symmetric signing for MVP simplicity (RS256 upgrade path available)
- Constant-time negative path in login to prevent timing attacks

### Demo credentials
- `admin@demo.repaire` / `demo1234` — Admin
- `manager@demo.repaire` / `demo1234` — Manager
- `cashier@demo.repaire` / `demo1234` — Cashier
- `tech@demo.repaire` / `demo1234` — Technician

### Deferred to Later Blocks
- [ ] SuperAdmin login route (Block 18)
- [ ] Subscription status check in proxy (Block 5+)
- [ ] Manager PIN approval flows (Blocks 12, 14)
- [ ] Client-side token auto-refresh on 401 (Block 5+)
- [ ] Rate limiting on auth endpoints (Block 19)
- [ ] Audit log on login events (Block 19)

---

## Block 4 — Dashboard Shell & RTL Layout

**Status:** ✅ Done

### Completed
- [x] Migrated `src/middleware.ts` → `src/proxy.ts` (Next.js 16 `proxy` convention, eliminates deprecation warning)
- [x] `src/proxy.ts` — exports `proxy` function with same auth guard behavior as before
- [x] `Noto_Sans_Arabic` font loaded via `next/font/google` (`--font-arabic` CSS variable)
- [x] `globals.css` updated: `[dir="rtl"]` uses `--font-arabic`
- [x] `src/app/(dashboard)/layout.tsx` — server layout: reads session + user from DB, renders `DashboardShell`
- [x] `src/components/layout/DashboardShell.tsx` — client: manages mobile sidebar state, sets `dir` from user's `languagePreference`
- [x] `src/components/layout/Sidebar.tsx` — client: navigation, user info, logout; RTL slide direction explicit via `dir` prop
- [x] `src/components/layout/Topbar.tsx` — client: mobile hamburger, company name on mobile, user name on all sizes
- [x] `src/components/layout/NavItem.tsx` — client: link with active state highlighting, lucide icon
- [x] `src/components/layout/nav-items.ts` — nav config with permission guard per item
- [x] `src/components/shared/PageHeader.tsx` — title + description + optional actions slot
- [x] `src/components/shared/EmptyState.tsx` — icon + title + description + optional action
- [x] `src/components/shared/StatusBadge.tsx` — colored status pill (5 variants)
- [x] `src/components/shared/RoleBadge.tsx` — role display (Admin/Manager/Cashier/Technician)
- [x] Dashboard page upgraded — 4 stat cards (static 0 placeholders) + cash register status card
- [x] 7 placeholder module pages: `/dashboard/pos`, `/dashboard/repairs`, `/dashboard/customers`, `/dashboard/inventory`, `/dashboard/suppliers`, `/dashboard/reports`, `/dashboard/settings`

### Role-based navigation
| Role | Visible nav items |
|------|------------------|
| Admin | All 8 items |
| Manager | All except Paramètres |
| Cashier | Tableau de bord, Caisse, Réparations, Clients, Inventaire |
| Technician | Tableau de bord, Réparations, Clients, Inventaire |

### RTL implementation
- `dir` is derived from the authenticated user's `languagePreference` (from DB in layout)
- `dir` attribute applied on the `DashboardShell` wrapper `<div>` (not on `<html>` — deferred to locale routing block)
- Sidebar uses `start-0` (CSS logical `inset-inline-start: 0`) — positions right in RTL, left in LTR
- Main content uses `ms-64` (`margin-inline-start: 256px`) — RTL-aware sidebar offset
- Topbar uses `border-e` (`border-inline-end`) for sidebar border — flips in RTL
- Mobile slide animation uses explicit `dir` prop to avoid `rtl:` specificity conflicts

### Key design decisions
- `dir` computed from user `languagePreference` stored in DB — no cookie/URL needed for shell layout
- Sidebar always visible at `lg:` breakpoint (1024px+); mobile: overlay drawer with backdrop
- `Noto_Sans_Arabic` loaded globally; applied only under `[dir="rtl"]` via CSS
- `[locale]` next-intl routing deferred — not needed for shell-level RTL

### Deferred to Later Blocks
- [ ] `[locale]` URL routing + `<html lang dir>` dynamic (full next-intl routing)
- [ ] Breadcrumb in topbar (Block 5+, once routes have real content)
- [ ] Notification bell in topbar (Block 8+)
- [ ] User language preference switcher UI (Block 4.5 or Block 20)
- [ ] Subscription status banner in topbar (Block 5+)
- [ ] Client-side token refresh interceptor (Block 5+)

---

## Block 5 — Customers & Customer Devices

**Status:** ✅ Done

### Completed
- [x] Customer list (`/dashboard/customers`) — searchable by name/phone, filterable by type and archived status
- [x] Create customer (`/dashboard/customers/new`) — named (requires phone) or walk-in
- [x] Customer detail (`/dashboard/customers/[id]`) — profile card, phones, assets, placeholder sections
- [x] Edit customer (`/dashboard/customers/[id]/edit`) — name, language, notes, group
- [x] Archive customer — Admin/Manager only, server-side permission check
- [x] Customer devices/assets — add/view/archive per customer; free-text type, brand, model, IMEI, storage, color, notes
- [x] Phone uniqueness per company (DB constraint + P2002 handling)
- [x] Walk-in customer support (no phone required)
- [x] All roles can view customers/detail; Admin/Manager only can archive
- [x] TypeScript fixes: RHF resolver types, React 19 useRef, useWatch pattern

### Deferred to Later Blocks
- [ ] Phone add/remove UI (actions exist, no UI yet)
- [ ] Walk-in → named customer promotion flow
- [ ] Customer group management (create/edit groups)
- [ ] `pg_trgm` trigram indexes for faster search (Block 19)

---

## Block 6 — Catalog Foundation

**Status:** ✅ Done

### Completed
- [x] New Prisma models: `DeviceCategory`, `DeviceBrand`, `DeviceModelFamily`
- [x] Migration `20260503210936_add_device_catalog` applied
- [x] FK constraints from `CustomerAsset` → catalog tables (onDelete: SetNull)
- [x] `CustomerAsset` fields renamed: `deviceFamilyId` → `deviceCategoryId`, `deviceModelId` → `deviceModelFamilyId`
- [x] Catalog seed: 7 categories, 65 brands, 173 model families
- [x] Seed data covers: phones (15 brands), tablets (10), laptops (14), desktops (10), printers (10), game consoles (6)
- [x] Global vs store custom entry support: `isGlobalDefault` flag, nullable `companyId`/`storeId`
- [x] Catalog service layer (`src/features/catalog/actions/catalog.actions.ts`)
- [x] Catalog management UI page (`/dashboard/settings/catalog`)
- [x] Two-column browser: brands + model families with scope badges (Global/Custom)
- [x] Category tabs with icons per device type
- [x] Search bar for filtering brands/families
- [x] Admin/Manager can add store-custom brands and model families
- [x] Cashier/Technician can view but cannot add entries (permission: `inventory:manage`)
- [x] Customer AssetForm upgraded with catalog-linked cascading selects
- [x] Free-text brand/model fallback always available
- [x] AssetCard displays catalog names when available, falls back to free-text
- [x] Settings page updated with catalog card link
- [x] Build clean: typecheck ✅, lint ✅, build ✅ (19 routes)

### Schema design decisions
- `DeviceCategory` has a unique `key` field (phone, tablet, laptop, etc.) for stable programmatic reference
- `DeviceBrand` and `DeviceModelFamily` use `@@unique([..., companyId, storeId, name])` — null-safe in PostgreSQL for global entries
- No FK from `DeviceBrand`/`DeviceModelFamily` back to `Company`/`Store` — intentional to keep the catalog global-first
- `CustomerAsset` FK constraints use `onDelete: SetNull` — safe for catalog cleanup without breaking existing assets

### Seed approach
- Separate seed file (`prisma/seed-catalog.ts`) for maintainability
- Uses `findFirst + create/update` pattern (not `upsert`) because PostgreSQL NULL ≠ NULL in unique indexes
- Called from main `prisma/seed.ts`
- Idempotent — safe to re-run

### Deferred to Later Blocks
- [ ] Super Admin global catalog management (Block 18)
- [ ] Archive/deactivate store custom entries UI
- [ ] `DeviceModelAlias` for alternative names (deferred to post-MVP)
- [ ] Products/accessories catalog extension (Block 7)
- [ ] Repair service catalog (Block 7)

---

## ✅ Block 7: Inventory Foundation (Products, Parts, Services)

### Goal
Implement the foundation for the store's inventory, distinguishing between sellable products (accessories), repair parts (components linked to the catalog), and labor services. This serves as the prerequisite for POS checkout and repair ticket creation.

### Status
✅ Complete

### Key Achievements
- [x] Schema extensions for `InventoryCategory`, `Product`, `Part`, and `Service`
- [x] Enforced strict `storeId` scoping on all inventory items
- [x] Implemented optional unique constraints per store for `sku` and `barcode`
- [x] Integrated `Part` with the Block 6 catalog (`DeviceCategory`, `DeviceBrand`, `DeviceModelFamily`) via optional FKs
- [x] Created `prisma/seed-inventory.ts` to inject sample categories and common services into the demo store
- [x] Server Actions layer implemented with search, filtering, and role-based permissions (`inventory:manage`)
- [x] SKU generation logic implemented (`PRD-000001`, `PRT-000001`, `SRV-000001`)
- [x] UI: Main `/dashboard/inventory` page with segmented tabs for Products, Parts, and Services
- [x] UI: Create and Edit forms for all three item types with Zod validation (Zod v4 compatible)
- [x] UI: Cascading selects in Part form for device compatibility
- [x] Build clean: typecheck ✅, lint ✅, build ✅

### Schema design decisions
- Kept `InventoryCategory` unified with an `itemType` discriminator for simplicity
- Separated `Product`, `Part`, and `Service` into distinct tables since they have different fields (e.g. `estimatedDurationMinutes` vs `compatibleBrandId`)
- MVP stock fields (`stockQty`, `lowStockThreshold`) included on the items directly, deferring complex FIFO/batch tracking to a future block

### Deferred to Later Blocks
- [ ] Inventory adjustments / movements log (Block 21)
- [ ] FIFO/LIFO batch cost tracking (Block 21)
- [ ] Low stock alert dashboard widget
- [ ] Print barcode labels

---

## ✅ Block 8: Stock Batches, FIFO, Stock Movements, and Purchase Invoices

### Goal
Implement the core stock foundation for inventory. This enables traceability of stock, FIFO batch management, supplier management, and processing purchase invoices to safely update stock quantities and supplier balances within guaranteed transactions.

### Status
✅ Complete

### Key Achievements
- [x] Schema extensions for `Supplier`, `PurchaseInvoice`, `PurchaseInvoiceLine`, `StockBatch`, and `StockMovement`.
- [x] All new models are fully store-scoped (`storeId`) and isolated by tenant (`companyId`).
- [x] **Massive Prisma Transaction**: `createPurchaseInvoice` action safely orchestrates creating the invoice, its lines, initializing stock batches, writing to the immutable stock movement log, updating `stockQty` on products/parts, and updating supplier debt balance.
- [x] **Suppliers Module**: Full CRUD UI under `/dashboard/suppliers` including a detail page to view supplier balances.
- [x] **Purchases Module**: A complex dynamic form under `/dashboard/inventory/purchases/new` that allows selecting products/parts, managing quantities, and capturing paid amounts.
- [x] **Stock Movements**: Read-only audit log page at `/dashboard/inventory/stock-movements`.
- [x] Implemented proper authorization checks; Cashiers/Technicians cannot view/manage purchases or suppliers.
- [x] Build clean: typecheck ✅, lint ✅, build ✅ (26 routes)

### Schema design decisions
- **Denormalized Stock Qty**: The `stockQty` on `Product` and `Part` is immediately updated. The `StockBatch` tracks the granular remaining quantities for future FIFO consumption.
- **Immutable Movements**: The `StockMovement` table acts as a true append-only ledger for any delta to the stock quantity.

### Deferred to Later Blocks
- [ ] POS checkout stock consumption
- [ ] Repair ticket part usage
- [ ] Payment of past supplier invoices (Supplier Debt Payments)
- [ ] Manual stock adjustments and counts

---

## Block 12 — Cash Register Sessions

**Status:** ✅ Done

### Completed
- [x] **Schema**: Added `CashSessionStatus` enum and `CashRegisterSession` model with company/store scoping
- [x] **Migration**: `20260504085953_add_cash_register_sessions` applied successfully
- [x] **Server Actions** (`src/features/pos/actions/cash-session.actions.ts`):
  - `getCurrentCashSession()` — fetch active session for current store
  - `listCashSessions()` — session history (last 50)
  - `openCashSession(amount, notes)` — transactional; enforces one-open-per-store rule
  - `closeCashSession(id, counted, notes)` — calculates variance, enforces ownership/role
  - `forceCloseCashSession(id, counted, note)` — Admin/Manager only, mandatory note
- [x] **UI Components** (`src/features/pos/components/`):
  - `OpenSessionCard` — form to open session
  - `ActiveSessionCard` — live session viewer + close/force-close forms with variance display
  - `CashSessionHistory` — paginated history table with color-coded variance
- [x] **Pages**:
  - `/dashboard/pos` — updated with live cash status card and navigation
  - `/dashboard/pos/cash-register` — full session management page
  - `/dashboard` — dashboard cash widget shows live open/closed status with clickable link
- [x] **Permission Enforcement**: Technician blocked at server-action level and redirect level; Cashier cannot force-close; Manager/Admin can force-close any session
- [x] `CashMovement` — **deferred** (see below)
- [x] Build clean: typecheck ✅, lint ✅, build ✅ (28 routes)

### Session lifecycle rules
| Rule | Enforcement |
|------|-------------|
| One open session per store | `$transaction` check in `openCashSession` |
| Cannot close already-closed session | Status guard in `closeCashSession` |
| User closes own session | `openedByUserId === session.sub` check |
| Manager/Admin can close any session | Role check fallback |
| Force-close requires note | Non-empty `forceCloseNote` validation |
| Technician blocked entirely | Server action + redirect guard |

### Available stock formula (MVP)
- `expectedCashAmount` = `openingCashAmount` (no cash movements yet)
- `variance` = `countedCashAmount` − `expectedCashAmount`

### Deferred to Later Blocks
- [x] ~~`CashMovement` ledger table~~ → Implemented in Block 13
- [x] ~~Re-calculate `expectedCashAmount` from real cash movements~~ → Implemented in Block 13
- [ ] Z-report PDF generation
- [x] ~~POS checkout integration (Block 13)~~ → Implemented in Block 13
- [ ] Repair payment integration
- [ ] Expense recording

---

## Block 13 — Cash-Only POS Checkout

**Status:** ✅ Done

### Completed
- [x] **Schema**: Added `PosSaleStatus`, `CashMovementType`, `CashMovementDirection` enums
- [x] **Schema**: Added `pos_sale` to `DocumentSequenceType`
- [x] **Schema**: Added `PosSale`, `PosSaleLine`, `CashMovement` models with full relations
- [x] **Migration**: `20260504092205_add_pos_sales_and_cash_movements`
- [x] **Sale Sequence** (`src/lib/sequences/sale-sequence.ts`): `{PREFIX}-POS-{YYYY}-{000001}`
- [x] **FIFO Helper** (`src/lib/stock/consume-fifo.ts`): Reusable helper for oldest-batch-first consumption
- [x] **Server Actions** (`src/features/pos/actions/pos-sale.actions.ts`):
  - `searchSellableItems(query)` — search products/parts/services by name/SKU/barcode
  - `checkoutCashSale(lines, cashReceived, customerId, discount)` — full transactional checkout
- [x] **UI Components** (`src/features/pos/components/`):
  - `ItemSearch` — search-as-you-type with stock info and type badges
  - `CartPanel` — quantity controls, line removal, subtotal
  - `PosCheckout` — main POS interface with cart, discount, cash input, checkout
  - `SaleConfirmation` — post-checkout success screen
- [x] **Page**: `/dashboard/pos` → full checkout interface with cash session guard
- [x] **Permission Enforcement**: Technician blocked; Cashier cannot apply discounts; Admin/Manager full access
- [x] Build clean: typecheck ✅, lint ✅, build ✅ (28 routes)

### Checkout transaction flow
1. Verify user permission (not Technician)
2. Verify open cash session exists
3. Validate customer if provided
4. Validate all items exist and belong to store
5. Pre-check stock availability for products/parts
6. Generate sale number via `DocumentSequence`
7. FIFO consume stock batches → `StockMovement` per batch
8. Decrement `Product.stockQty` / `Part.stockQty`
9. Create `PosSale` + `PosSaleLine` records
10. Create `CashMovement` (type: `pos_sale`, direction: `in`)
11. Increment `CashRegisterSession.expectedCashAmount`
12. Full rollback on any failure

### FIFO consumption rules
- Oldest batches consumed first (`createdAt ASC`)
- Pre-checks total available ≥ requested before any mutations
- Each batch decrement creates its own `StockMovement`
- `costTotal` = Σ(consumed_qty × batch.unitCost)
- Services skip stock entirely
- `qtyRemaining` and `stockQty` never go below 0

### Permission matrix
| Role | Access POS | Checkout | Apply Discount |
|------|-----------|----------|----------------|
| Admin | ✅ | ✅ | ✅ |
| Manager | ✅ | ✅ | ✅ |
| Cashier | ✅ | ✅ | ❌ |
| Technician | ❌ | ❌ | ❌ |

### Design decisions
- **Client-side cart**: Cart state is managed in React state, not persisted to DB. Checkout sends full cart payload in one transaction. Simpler for MVP; held carts deferred.
- **CashMovement created at checkout**: `expectedCashAmount` is now dynamically updated by real sales.

### Deferred to Later Blocks
- [ ] Held/suspended carts
- [ ] Customer selection in POS
- [ ] Repair ticket checkout / repair payments
- [ ] Customer debt creation
- [ ] Partial payments
- [ ] Refunds / returns
- [ ] PDF receipt
- [ ] WhatsApp receipt
- [ ] Barcode scanner optimization
- [ ] Expense recording via CashMovement

