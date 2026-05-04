# REPAIRE — Build Log

---

## 2026-05-03 — Block 9: Basic Repair Tickets Foundation

### What changed

Implemented the MVP foundation for managing repair tickets. This module allows creating, tracking, assigning, and viewing repair tickets associated with a specific customer and their device.

### Schema changes

- **New Enums**: `RepairStatus`, `RepairPriority`, `ProblemResolutionStatus`.
- **New Models**: `RepairTicket`, `RepairTicketProblem`, `RepairStatusHistory`.
- **Relations**: Updated `Company`, `Store`, `Customer`, `CustomerAsset`, and `User` to establish reverse relations.
- **Migration**: `20260503224119_add_repair_tickets`

### Architecture & technical decisions

- **Ticket Numbering**: Implemented `generateTicketNumber` utilizing the `DocumentSequence` model to issue sequentially safe store-scoped identifiers (e.g. `DEMO-REP-2026-000001`) via a Prisma `$transaction`.
- **Status Machine**: Implemented a strictly controlled status update workflow that logs changes immutably to `RepairStatusHistory`.
- **Permissions**: Restricted Technician visibility to assigned tickets only. Auto-assignment applied if a Technician creates a ticket.

### New pages/routes

1. `/dashboard/repairs` - Replaced placeholder with the live `RepairList` component.
2. `/dashboard/repairs/new` - The dynamic `RepairForm` for ticket intake, integrating with `react-hook-form` and Zod schemas.
3. `/dashboard/repairs/[id]` - The `RepairDetail` view displaying all problems, customer info, device parameters, and a chronologically sorted status history.

### Deferred functionality

- Estimates / Devis
- POS Checkout / Payment collection
- Inventory parts deduction / Stock reservations
- Customer debt synchronization
- Invoice/PDF generation
- WhatsApp notifications

### Validation

- TypeScript: `npm run typecheck` passes cleanly.
- ESLint: `npm run lint` passes cleanly (after resolving `any` and unescaped quote errors).
- Build: `npm run build` completed successfully (27 routes).

## 2026-05-03 — Block 8: Stock Batches, FIFO, Stock Movements, and Purchase Invoices

### What changed

Implemented the core stock foundation for inventory. This enables traceability of stock, FIFO batch management, supplier management, and processing purchase invoices to safely update stock quantities and supplier balances within guaranteed transactions.

### Schema changes

- **New models**: `Supplier`, `PurchaseInvoice`, `PurchaseInvoiceLine`, `StockBatch`, `StockMovement`.
- **Relations updated**: `Company`, `Store`, `Product`, `Part`, and `User` models updated with necessary reverse relations.
- **Migration**: `20260503221631_add_stock_foundation`

### Architecture & technical decisions

- **Massive Prisma Transaction**: The `createPurchaseInvoice` server action executes within a single `$transaction`. It creates the invoice, line items, initializes stock batches, writes to the immutable stock movement log, updates `stockQty` on products/parts, and updates supplier debt balances. If any step fails, everything rolls back.
- **Zod / RHF integration**: Modified the `createPurchaseInvoiceSchema` to carefully calculate remaining amounts and enforce that the `amountPaid` cannot exceed the `totalAmount`.
- **Permissions**: Added `inventory:manage` checks across all new actions. Suppliers and purchases are hidden from Cashiers and Technicians.

### New pages/routes

1. `/dashboard/suppliers` - List suppliers
2. `/dashboard/suppliers/new` & `[id]/edit` - Supplier CRUD forms
3. `/dashboard/suppliers/[id]` - Supplier detail view showing balance
4. `/dashboard/inventory/purchases` - List purchase invoices
5. `/dashboard/inventory/purchases/new` - Dynamic form to create purchase invoices with multiple line items (products or parts)
6. `/dashboard/inventory/stock-movements` - Read-only audit log for all stock changes

### Validation

- Tested full typecheck cleanly across all forms and API server actions.
- Full `npm run build` succeeds (26 static/dynamic routes).

## 2026-05-03 — Block 7: Inventory Foundation

### What changed

Full inventory system for products, parts, and services with schema, seed data, service layer, and management UI.

### Schema changes

- **New models**: `InventoryCategory` (unified), `Product`, `Part`, `Service`.
- **Foreign Keys**: Parts can reference `DeviceCategory`, `DeviceBrand`, and `DeviceModelFamily` for compatibility.
- **Scoping**: Strict `storeId` constraints on all inventory models.
- **Constraints**: Optional unique constraints for `sku` and `barcode` per store.
- **Migration**: `20260503213338_add_inventory`

### Architecture & technical decisions

- **Separate models**: Instead of a single "Item" model, we opted for separate tables since products, parts, and services have different specific fields (e.g., compatibility for parts, duration for services).
- **Zod v4 Support**: Encountered type mismatch between Zod `.optional().default()` output and React Hook Form inputs; resolved by simplifying the schema to strictly use `.optional()` and managing defaults within the form `defaultValues`.
- **SKU Generation**: Created an auto-incrementing SKU utility with format `PRD-NNNNNN`, `PRT-NNNNNN`, `SRV-NNNNNN` that safely scans the current store's max suffix.

### New pages/routes

1. `/dashboard/inventory` - Unified list view with segmented tabs
2. `/dashboard/inventory/products/new` & `[id]/edit` - Product forms
3. `/dashboard/inventory/parts/new` & `[id]/edit` - Part forms (with cascading device selects)
4. `/dashboard/inventory/services/new` & `[id]/edit` - Service forms

### Validation

- Tested full typecheck cleanly across all forms and API server actions.
- Full `npm run build` succeeds (22 static/dynamic routes).



## 2026-05-03 — Block 6: Catalog Foundation

### What changed

Full device catalog system: schema, seed data, service layer, management UI, and customer asset form integration.

### Schema changes

- **New models**: `DeviceCategory` (7 entries), `DeviceBrand` (65 entries), `DeviceModelFamily` (173 entries)
- **`CustomerAsset` updated**: `deviceFamilyId` → `deviceCategoryId`, `deviceModelId` → `deviceModelFamilyId`; FK constraints added with `onDelete: SetNull`
- **Migration**: `20260503210936_add_device_catalog`
- **Unique constraints**: `DeviceBrand` and `DeviceModelFamily` use `@@unique([..., companyId, storeId, name])` for global/custom scope isolation

### Seed data scope

| Category | Brands | Model Families |
|----------|--------|---------------|
| Phone | 15 | 58 |
| Tablet / iPad | 10 | 14 |
| Laptop | 14 | 37 |
| Desktop | 10 | 22 |
| Printer | 10 | 21 |
| Game Console | 6 | 17 |
| Other | 0 | 0 |
| **Total** | **65** | **173** (4 missing brands that have no families) |

### Files created

| File | Purpose |
|------|---------|
| `prisma/seed-catalog.ts` | Catalog seed data (idempotent, findFirst + create/update pattern) |
| `src/features/catalog/actions/catalog.actions.ts` | Server actions: list categories/brands/families, create custom, search, getCatalogPageData |
| `src/features/catalog/components/CatalogBrowser.tsx` | Client: two-column catalog browser with category tabs, scope badges, search, inline add forms |
| `src/app/(dashboard)/dashboard/settings/catalog/page.tsx` | Catalog management page (server component) |

### Files modified

| File | Change |
|------|--------|
| `prisma/schema.prisma` | Added 3 models, updated `CustomerAsset` with FKs, renamed fields |
| `prisma/seed.ts` | Imported and calls `seedCatalog()` |
| `src/features/customers/schemas/asset.schema.ts` | Added `deviceCategoryId`, `deviceBrandId`, `deviceModelFamilyId` fields |
| `src/features/customers/actions/asset.actions.ts` | Handles new catalog FK fields in create/update |
| `src/features/customers/components/AssetForm.tsx` | Catalog-linked cascading selects with free-text fallback |
| `src/features/customers/components/AssetSection.tsx` | Passes categories/companyId/storeId to AssetForm |
| `src/features/customers/components/AssetCard.tsx` | Displays catalog names when available |
| `src/app/(dashboard)/dashboard/customers/[id]/page.tsx` | Loads categories, joins catalog names for assets |
| `src/app/(dashboard)/dashboard/settings/page.tsx` | Settings card grid with catalog link |
| `IMPLEMENTATION_TRACKER.md` | Block 6 marked done + detail section added |

### Checks run

- `npx prisma generate` — ✅
- `npx prisma migrate dev --name add_device_catalog` — ✅ migration applied
- `npm run db:seed` — ✅ 7 categories, 65 brands, 173 families
- `npm run typecheck` — ✅ 0 errors
- `npm run lint` — ✅ 0 errors, 0 warnings
- `npm run build` — ✅ 19 routes compiled successfully

### Key design decisions

- **No useEffect for cascading selects** — React 19 lint rules forbid synchronous setState in effects. Used onChange event handlers instead.
- **findFirst + create/update** for seed — PostgreSQL NULL ≠ NULL in unique indexes, so Prisma `upsert` cannot reliably target rows with nullable unique columns.
- **Catalog is global-first** — `DeviceBrand` and `DeviceModelFamily` have no FK back to `Company`/`Store` to keep the schema clean.
- **Settings sub-route** — Catalog lives at `/dashboard/settings/catalog` rather than a top-level nav item, keeping the sidebar clean.

### Known issues

None.

### Next recommended block

Block 7 — Inventory Products / Parts / Services

---

## 2026-05-03 — Handoff Document

### What changed

Created `HANDOFF_TO_ANTIGRAVITY.md` — a complete agent handoff covering project status, all critical rules, technical setup (Prisma 7 breaking changes, Next.js 16 proxy, Tailwind v4, React 19), auth system, current app structure, customer module status, database status, known issues, and a recommended prompt for Block 6.

### Files created

- `HANDOFF_TO_ANTIGRAVITY.md`

### Files modified

- `IMPLEMENTATION_TRACKER.md` — noted handoff document creation

### Checks run

- `npm run typecheck` — ✅ 0 errors
- `npm run lint` — ✅ 0 errors, 0 warnings
- `npm run build` — ✅ 18 routes compiled successfully

### Known issues

None.

### Next recommended block

Block 6 — Catalog Foundation (device families, brands, models — migration, seed, AssetForm update)

---

## 2026-05-03 — Block 5: Customers & Customer Devices (TypeScript fixes)

### What changed

Fixed all TypeScript errors from Block 5 implementation. Zero errors, zero warnings in typecheck + lint + build.

### Root causes fixed

| Error | Fix |
|-------|-----|
| RHF resolver type mismatch in `CustomerForm` | Introduced `CustomerFormValues` superset type; cast resolver with `as Resolver<CustomerFormValues>` |
| RHF resolver type mismatch in `AssetForm` | Removed `.transform()` and `.nullable()` from all Zod schema fields; use plain `.optional()` |
| `<form action={archiveCustomer.bind(...)}>` type error | Created `ArchiveCustomerButton` client component using `useTransition`; removed `<form action>` pattern |
| `archiveAsset.bind(...)` form action type error | Converted `AssetCard` to a client component using `useTransition` |
| `useRef()` without initial value (React 19 breaking change) | Changed to `useRef<... \| undefined>(undefined)` in `CustomerSearchBar` |
| Unused `hasPermission` import | Removed from `customers/[id]/edit/page.tsx` |
| `form.watch()` React Compiler warning | Replaced with `useWatch({ control, name })` hook |

### Files modified

- `src/features/customers/schemas/customer.schema.ts` — removed transforms from phone/notes/customerGroupId fields
- `src/features/customers/schemas/asset.schema.ts` — removed transforms from all optional text fields
- `src/features/customers/components/CustomerForm.tsx` — unified `CustomerFormValues` type, `useWatch`, clean resolver cast
- `src/features/customers/components/AssetForm.tsx` — fixed default values from `null` to `""`/`undefined`
- `src/features/customers/components/AssetCard.tsx` — converted to client component with `useTransition`
- `src/features/customers/components/CustomerSearchBar.tsx` — fixed `useRef` initial value
- `src/app/(dashboard)/dashboard/customers/[id]/page.tsx` — replaced `<form action>` with `ArchiveCustomerButton`
- `src/app/(dashboard)/dashboard/customers/[id]/edit/page.tsx` — removed unused import

### Files created

- `src/features/customers/components/ArchiveCustomerButton.tsx` — client component for archive action

### Checks run

- `npm run typecheck` — ✅ 0 errors
- `npm run lint` — ✅ 0 errors, 0 warnings
- `npm run build` — ✅ 18 routes compiled successfully

### Known issues

None.

### Next recommended block

Block 6 — Catalog Foundation (device families, brands, models — seed + admin UI for catalog browsing)

---

## 2026-05-03 — Block 1: Project Foundation

### What changed

Established the full project foundation. No business logic was added.

### Files created

| File | Purpose |
|------|---------|
| `src/lib/utils.ts` | shadcn/ui `cn()` utility (clsx + tailwind-merge) |
| `src/types/index.ts` | App-wide types: Locale, Direction, UserRole, getDirection() |
| `src/i18n/routing.ts` | next-intl v4 locale routing config (fr/ar/en, default: fr) |
| `src/i18n/request.ts` | next-intl v4 getRequestConfig — loads messages per locale |
| `src/messages/fr.json` | French base messages (common, nav, auth) |
| `src/messages/ar.json` | Arabic base messages (common, nav, auth) |
| `src/messages/en.json` | English base messages (common, nav, auth) |
| `components.json` | shadcn/ui config (new-york style, Tailwind v4, lucide icons) |
| `IMPLEMENTATION_TRACKER.md` | Module tracker initialized |
| `BUILD_LOG.md` | This file |

### Files modified

| File | Change |
|------|--------|
| `src/app/globals.css` | Full REPAIRE theme: CSS variables (light/dark), Tailwind v4 `@theme inline` mapping, sidebar tokens, RTL font fallback |
| `src/app/layout.tsx` | REPAIRE metadata, `lang="fr"`, `dir="ltr"`, bg/text tokens |
| `src/app/page.tsx` | Replaced Next.js boilerplate with REPAIRE placeholder page |
| `next.config.ts` | Added next-intl v4 plugin via `createNextIntlPlugin` |
| `package.json` | Added: next-intl, clsx, tailwind-merge, class-variance-authority, lucide-react |

### Directories created

```
src/components/ui/
src/components/layout/
src/components/shared/
src/features/
src/hooks/
src/i18n/
src/lib/
src/messages/
src/types/
src/app/(auth)/
src/app/(dashboard)/
```

### Checks run

- `npm run typecheck` — passed
- `npm run lint` — passed

### Known issues / notes

- `lang` and `dir` on `<html>` are static (`fr` / `ltr`) until Block 4 adds `[locale]` routing and the locale-aware layout.
- Arabic font (Noto Sans Arabic) not yet loaded — deferred to Block 4.
- No shadcn/ui components installed yet — they will be added per feature block.
- `src/app/(auth)/` and `src/app/(dashboard)/` are empty route group stubs.

### Next recommended block

**Block 3 — Auth, Roles, Permissions**

---

## 2026-05-03 — Block 2: Database Foundation

### What changed

Full Prisma 7 database setup. 20 tables created and migrated. Seed data applied.
Encountered and resolved Prisma 7 breaking changes (no `url` in schema, adapter required).

### Prisma 7 breaking changes resolved

| Change | Solution |
|--------|---------|
| `url` removed from `datasource` in schema.prisma | Moved to `prisma.config.ts` via `defineConfig` |
| `.env` not auto-loaded for `prisma.config.ts` | Added `dotenv.config()` at top of `prisma.config.ts` |
| `PrismaClient()` requires adapter (no implicit url) | Used `@prisma/adapter-pg` + `pg.Pool` in all client instantiations |

### Files created

| File | Purpose |
|------|---------|
| `prisma/schema.prisma` | Full Prisma schema — 20 models, all enums, all indexes |
| `prisma/seed.ts` | Idempotent seed: 3 plans + 1 payment method (cash) |
| `prisma.config.ts` | Prisma 7 config — datasource URL, seed command, dotenv loading |
| `src/lib/db/index.ts` | Singleton PrismaClient with PrismaPg adapter + pg.Pool |
| `docker-compose.yml` | PostgreSQL 16 container for Docker-based local dev |
| `.env` | Local dev DATABASE_URL (gitignored) |
| `.env.example` | Template with DATABASE_URL and future env var stubs |
| `prisma/migrations/20260503150654_init/migration.sql` | Initial migration SQL |

### Files modified

| File | Change |
|------|--------|
| `package.json` | Added: @prisma/adapter-pg, pg, prisma, @prisma/client, tsx; added db:* scripts; added prisma.seed config |

### Packages added

- `@prisma/client@7.8.0` (runtime)
- `@prisma/adapter-pg@7.8.0` (runtime — required by Prisma 7)
- `pg@8.20.0` (runtime)
- `prisma@7.8.0` (devDep — CLI)
- `tsx@4.21.0` (devDep — runs seed.ts)
- `@types/pg@8.20.0` (devDep)

### Tables in migration

```
companies              stores                 users
super_admin_users      user_store_access      plans
company_subscriptions  tenant_impersonation_sessions
refresh_tokens         customer_groups        customers
customer_phones        customer_assets        customer_debt_balances
customer_debt_transactions  audit_logs        store_settings
document_sequences     payment_methods
```

### Seed data applied

- Plans: `trial` (Essai gratuit), `single_store` (Boutique unique), `multi_store` (Multi-boutiques)
- PaymentMethod: `cash` / Espèces — default, active (V1.5 methods not seeded)

### Checks run

- `npx prisma generate` — passed
- `npx prisma migrate dev --name init` — migration applied
- `npm run db:seed` — seed complete
- `npm run typecheck` — passed
- `npm run lint` — passed

### Known issues / notes

- PostgreSQL 17 (EDB installer) used locally instead of Docker (Docker not running)
- `repaire` DB user needs `CREATEDB` privilege for Prisma's shadow database during migrations
- `docker-compose.yml` provided for teams using Docker
- Partial unique index for "one open cash register session per store" deferred to Block 11

### Next recommended block

**Block 4 — Dashboard Shell & RTL Layout**

---

## 2026-05-03 — Block 3: Auth, Roles, Permissions

### What changed

Full authentication and authorization system. No UI shell yet — that is Block 4.

### Packages added

- `bcryptjs@^3.0.2` (runtime — password + PIN hashing)
- `@types/bcryptjs@^2.4.6` (devDep)
- `jose@^6.0.10` (runtime — JWT HS256 sign/verify, edge-compatible)

### Files created

| File | Purpose |
|------|---------|
| `src/lib/auth/passwords.ts` | `hashPassword()`, `verifyPassword()`, `hashPin()`, `verifyPin()` — bcrypt 12 rounds |
| `src/lib/auth/tokens.ts` | `signAccessToken()`, `verifyAccessToken()` (JWT HS256, 15 min); `generateRefreshToken()`, `hashRefreshToken()` (SHA-256) |
| `src/lib/auth/session.ts` | `getSession()` — reads + verifies access_token cookie in server components |
| `src/lib/auth/permissions.ts` | 17-permission matrix for Admin / Manager / Cashier / Technician; `hasPermission()`, `hasAnyPermission()`, `hasAllPermissions()` |
| `src/middleware.ts` | Route guard: `/dashboard/**` requires valid JWT; `/login` redirects to dashboard if already authenticated |
| `src/app/api/auth/login/route.ts` | POST — email/password login, issues access + refresh cookies |
| `src/app/api/auth/refresh/route.ts` | POST — refresh token rotation with family reuse detection + 3s grace window |
| `src/app/api/auth/logout/route.ts` | POST — revokes refresh token, clears both cookies |
| `src/app/api/auth/me/route.ts` | GET — returns current user from access token |
| `src/app/(auth)/login/page.tsx` | Login page — French labels, metadata |
| `src/app/(auth)/login/_components/LoginForm.tsx` | Client component — email/password form, fetch to /api/auth/login, error + loading states |
| `src/app/(dashboard)/dashboard/page.tsx` | Protected dashboard placeholder — shows session payload, logout button |
| `src/app/(dashboard)/dashboard/_components/LogoutButton.tsx` | Client component — calls /api/auth/logout, redirects to /login |

### Files modified

| File | Change |
|------|--------|
| `prisma/seed.ts` | Added: demo company, demo store, subscription, store settings, 4 demo users with store access |
| `.env` | Added `JWT_SECRET` |
| `.env.example` | Updated auth section with `JWT_SECRET` |

### Checks run

- `npm run typecheck` — passed
- `npm run lint` — passed
- `npm run db:seed` — passed (demo users created)

### Known issues / notes

- Access token uses HS256 (symmetric). RS256 upgrade deferred — not needed for MVP SaaS.
- Email is searched globally (`findFirst`) — works for MVP where emails are effectively unique. Multi-tenant login by subdomain is a Block 4+ concern.
- Middleware does not check subscription status yet — deferred to Block 4.
- No rate limiting on auth endpoints yet — Block 19.

### Demo credentials

All passwords: `demo1234`

| Role | Email |
|------|-------|
| Admin | admin@demo.repaire |
| Manager | manager@demo.repaire |
| Cashier | cashier@demo.repaire |
| Technician | tech@demo.repaire |

### Next recommended block

**Block 5 — Customers & Customer Devices**

---

## 2026-05-03 — Block 4: Dashboard Shell, Navigation, Theme, RTL Layout

### What changed

Full protected application shell. No business logic. Auth behavior from Block 3 preserved.

### Proxy migration (Next.js 16)

`src/middleware.ts` deprecated and removed. `src/proxy.ts` created with named `proxy` export per the Next.js 16 file convention. Build output now shows `ƒ Proxy` instead of emitting a deprecation warning. Behavior identical: `/dashboard/**` protected, `/login` redirects authenticated users to `/dashboard`.

### Packages added

- `next/font/google` — `Noto_Sans_Arabic` (already available, no new package needed)

### Files created

| File | Purpose |
|------|---------|
| `src/proxy.ts` | Route guard — replaces middleware.ts |
| `src/app/(dashboard)/layout.tsx` | Server layout: reads session + DB user/company |
| `src/components/layout/DashboardShell.tsx` | Client: sidebar state, dir, shell structure |
| `src/components/layout/Sidebar.tsx` | Navigation, user info, logout |
| `src/components/layout/Topbar.tsx` | Mobile hamburger, company name |
| `src/components/layout/NavItem.tsx` | Nav link with active state |
| `src/components/layout/nav-items.ts` | Nav config with permission gates |
| `src/components/shared/PageHeader.tsx` | Page title component |
| `src/components/shared/EmptyState.tsx` | Empty state card |
| `src/components/shared/StatusBadge.tsx` | Status pill |
| `src/components/shared/RoleBadge.tsx` | Role pill |
| 7× placeholder pages | `/dashboard/{pos,repairs,customers,inventory,suppliers,reports,settings}` |

### Files modified / deleted

| File | Change |
|------|--------|
| `src/middleware.ts` | Deleted — replaced by `src/proxy.ts` |
| `src/app/(dashboard)/dashboard/page.tsx` | Upgraded to stat cards |
| `src/app/(dashboard)/dashboard/_components/LogoutButton.tsx` | Deleted — logout in Sidebar |
| `src/app/layout.tsx` | Noto Sans Arabic font added |
| `src/app/globals.css` | `[dir="rtl"]` uses Arabic font variable |

### Checks run

- `npm run typecheck` — passed
- `npm run lint` — passed
- `npm run build` — passed (17 routes, proxy recognized, no deprecation warning)

### Known issues / notes

- `dir` applied on `DashboardShell` div, not on `<html>` — full locale URL routing deferred
- Sidebar mobile animation uses explicit `dir` prop (avoids `rtl:` CSS specificity conflicts)
- No active breadcrumb in topbar yet — deferred to Block 5+ when routes have real content

### Next recommended block

**Block 5 — Customers & Customer Devices**

## Block 10: Estimates / Devis & Customer Approval Foundation (Completed)
- Created models for `Estimate`, `EstimateLine`, and `CustomerApprovalLog` in Prisma Schema.
- Implemented server actions and sequence generator for safe estimate lifecycle transitions (Draft -> Sent -> Accepted/Rejected).
- Upgraded the `/dashboard/repairs/[id]` page to include an integrated `EstimateSection`.
- Validated the codebase ensuring total calculation and validation strictness via Zod schemas.
- Ran `npx prisma migrate dev` successfully.
- Codebase compiles cleanly with `npm run build` with zero errors.
