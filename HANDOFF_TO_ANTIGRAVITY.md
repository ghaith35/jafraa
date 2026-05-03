# REPAIRE — Handoff to Antigravity

**Prepared:** 2026-05-03  
**Last completed block:** Block 5 — Customers & Customer Devices  
**Next block:** Block 6 — Catalog Foundation  
**Build status:** ✅ typecheck clean · ✅ lint clean · ✅ build passes (18 routes)

---

## 1. Project Status

### What is REPAIRE?

REPAIRE is a multi-tenant repair-shop SaaS for Algerian repair shops. It handles: repair ticket workflow, cash-only POS, inventory (products/parts/services/devices), customer management, customer debt, invoices, PDFs, WhatsApp notifications, SaaS tenant isolation, and multi-store support.

### Completed blocks

| # | Block | Status |
|---|-------|--------|
| 1 | Project Foundation | ✅ Done — folder structure, Tailwind v4, next-intl v4, RTL foundation, theme |
| 2 | Database Foundation | ✅ Done — Prisma 7 + pg adapter, 20-model schema, migration applied, seed data |
| 3 | Auth, Roles, Permissions | ✅ Done — JWT HS256, refresh rotation + grace window, 4 roles, login page, proxy |
| 4 | Dashboard Shell & RTL Layout | ✅ Done — app shell, sidebar nav, RTL support, 8 placeholder routes |
| 5 | Customers & Customer Devices | ✅ Done — customer list/create/edit/archive, walk-in vs named, phones, assets |

### Current app capabilities

- Login with role-based access (4 roles)
- Persistent sessions via JWT + HttpOnly refresh token rotation
- Full dashboard shell with RTL-aware sidebar navigation
- **Customer list** — searchable by name/phone, filterable by type and archived status
- **Create customer** — named (requires phone, unique per company) or walk-in
- **Customer detail** — profile card, phones, customer devices/assets, placeholder sections for repairs and debt
- **Edit customer** — name, language, notes, group
- **Archive customer** — Admin/Manager only
- **Customer devices/assets** — add/view/archive per customer; free-text type, brand, model, IMEI, storage, color, notes
- All data fully company-scoped; no cross-tenant leakage

### Blocks not started (6–20)

6 Catalog Foundation · 7 Inventory Products/Parts/Services · 8 Basic Repair Tickets · 9 Repair Status Flow · 10 Estimates/Devis · 11 Cash Register Sessions · 12 Cash-Only POS · 13 Customer Debt · 14 Cash Payments & Receipts · 15 PDFs · 16 WhatsApp · 17 Reports · 18 Super Admin · 19 Security Hardening · 20 Production Polish

---

## 2. Critical Rules (Non-Negotiable)

These are locked for MVP. Do not implement exceptions.

1. **MVP payment method is CASH ONLY.** No Baridimob, CIB, Dahabia, CCP, card, or bank transfer — not even hidden or disabled UI. These are V1.5/V2.
2. **Offline Windows cashier app is DEFERRED.** The architecture is left clean for it but do not build it.
3. **French is the default UI language.** Arabic RTL and English are prepared and supported from day one but French is the fallback.
4. **Arabic must be RTL** — built at component level using CSS logical properties, not retrofitted.
5. **Currency is DZD only.** No multi-currency in any UI.
6. **Customers are company-scoped.** A customer belongs to a company and is visible across all its stores. Never scope customers to a single store.
7. **Transactions (tickets, invoices, payments, stock, cash sessions) are store-scoped.** Every transactional table must have `storeId`.
8. **Do not expose cost/FIFO data to Cashier or Technician roles.** Server-side permission check, not just client-side hiding.
9. **Every DB query in a tenant context must be scoped by `companyId`.** No exceptions.
10. **Do not over-engineer.** Build exactly what the current block requires. No abstractions for hypothetical future needs.
11. **Build one block at a time.** Never implement the next block while the current one is incomplete.
12. **Walk-in customers cannot have debt and cannot receive WhatsApp.** A walk-in with a phone added can be promoted to named — not yet built.

---

## 3. Technical Setup

### Versions

| Package | Version |
|---------|---------|
| Next.js | 16.2.4 |
| React | 19.2.4 |
| TypeScript | ^5 |
| Tailwind CSS | ^4 (CSS-first, no `tailwind.config.js`) |
| Prisma | ^7.8.0 |
| `@prisma/adapter-pg` | ^7.8.0 |
| `@prisma/client` | ^7.8.0 |
| `pg` | ^8.20.0 |
| `next-intl` | ^4.11.0 |
| `jose` | ^6.2.3 |
| `zod` | ^4.4.2 |
| `react-hook-form` | ^7.75.0 |
| `@hookform/resolvers` | ^5.2.2 |
| `bcryptjs` | ^3.0.3 |
| `lucide-react` | ^1.14.0 |

### Prisma 7 — critical breaking changes

Prisma 7 is a major version break. The following patterns are **required** and **not optional**:

1. **No `url` in `schema.prisma`** — the datasource block has no `url` field. The database URL is configured in `prisma.config.ts`.

2. **`prisma.config.ts`** (at project root) is the Prisma 7 config file:
   ```ts
   import { defineConfig } from "prisma/config";
   import "dotenv/config";
   export default defineConfig({
     earlyAccess: true,
     schema: "prisma/schema.prisma",
   });
   ```
   It must call `import "dotenv/config"` because Prisma 7 does not auto-load `.env`.

3. **Runtime client requires `PrismaPg` adapter.** See `src/lib/db/index.ts`:
   ```ts
   import { Pool } from "pg";
   import { PrismaPg } from "@prisma/adapter-pg";
   import { PrismaClient } from "@prisma/client";
   const pool = new Pool({ connectionString: process.env.DATABASE_URL });
   const adapter = new PrismaPg(pool);
   export const prisma = new PrismaClient({ adapter });
   ```

4. After any schema change, always run `npx prisma generate` before running the app.

### PostgreSQL

- Database name: `repaire_dev`
- User: `repaire` / Password: `repaire_dev_pass`
- Port: 5432 (default)
- `docker-compose.yml` is present for local Docker-based Postgres

### Environment variables

```env
# .env
DATABASE_URL="postgresql://repaire:repaire_dev_pass@localhost:5432/repaire_dev"
JWT_SECRET="<32-byte hex string>"
```

Generate `JWT_SECRET`: `node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"`

### Commands

```bash
npm run dev           # start dev server
npm run build         # production build
npm run typecheck     # tsc --noEmit
npm run lint          # eslint

npm run db:generate   # npx prisma generate (after schema changes)
npm run db:migrate    # npx prisma migrate dev (new migration)
npm run db:seed       # npx prisma db seed (run seed.ts)
npm run db:studio     # npx prisma studio
npm run db:reset      # npx prisma migrate reset (wipe + reseed)
```

### Next.js 16 — proxy convention

`src/middleware.ts` is **deprecated** in Next.js 16. The project uses `src/proxy.ts` with an exported `proxy` function (not `middleware`). Do not create or modify `src/middleware.ts`.

### Tailwind v4

No `tailwind.config.js`. All theme tokens are defined in `src/app/globals.css` under `@theme inline`. Use CSS logical properties for RTL:
- `start-0` (not `left-0`)
- `ms-64` (not `ml-64`)
- `border-e` (not `border-r`)
- `ps-3` (not `pl-3`)

### React 19

`useRef` requires an explicit initial value: `useRef<T | undefined>(undefined)` — not `useRef<T>()`.

---

## 4. Auth Setup

### API routes

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/auth/login` | Email + password → sets `access_token` + `refresh_token` cookies |
| POST | `/api/auth/refresh` | Rotates refresh token → new access token |
| POST | `/api/auth/logout` | Revokes refresh token family, clears cookies |
| GET | `/api/auth/me` | Returns current user from access token |

### Token behavior

- **Access token**: JWT HS256, 15-minute expiry, stored in `access_token` HttpOnly cookie
- **Refresh token**: opaque random bytes (not JWT), stored as SHA-256 hash in DB, 7-day expiry, stored in `refresh_token` HttpOnly cookie
- **JWT payload**: `{ sub: userId, companyId, role, storeIds: string[] }`

### Refresh token rotation

- Every refresh issues a new token and revokes the previous one (family chain)
- **3-second grace window**: if the old (already-rotated) token is reused within 3 seconds, it still works (handles concurrent refresh races)
- **Reuse detection**: reusing a token outside the grace window revokes the entire family — all sessions for that device are killed

### `getSession()` helper

```ts
import { getSession } from "@/lib/auth/session";
// Returns: { sub, companyId, role, storeIds } | null
// Use in server components and server actions
```

### Proxy protection

`src/proxy.ts` protects all `/dashboard/**` routes. Unauthenticated requests are redirected to `/login?from=<original-path>`. Authenticated users visiting `/login` are redirected to `/dashboard`.

### Demo users (password: `demo1234` for all)

| Email | Role |
|-------|------|
| `admin@demo.repaire` | Admin |
| `manager@demo.repaire` | Manager |
| `cashier@demo.repaire` | Cashier |
| `tech@demo.repaire` | Technician |

---

## 5. Current App Structure

### Folder layout

```
src/
├── app/
│   ├── (auth)/login/              # Login page + LoginForm client component
│   ├── (dashboard)/
│   │   ├── layout.tsx             # Server: loads session + user from DB → DashboardShell
│   │   └── dashboard/
│   │       ├── page.tsx           # Dashboard with stat cards (static placeholders)
│   │       ├── customers/         # Full customer module (Block 5)
│   │       ├── pos/               # Placeholder
│   │       ├── repairs/           # Placeholder
│   │       ├── inventory/         # Placeholder
│   │       ├── suppliers/         # Placeholder
│   │       ├── reports/           # Placeholder
│   │       └── settings/          # Placeholder
│   ├── api/auth/                  # login, refresh, logout, me routes
│   ├── globals.css                # Tailwind v4 theme, RTL font, CSS variables
│   └── layout.tsx                 # Root layout: Noto Sans Arabic font variable
├── components/
│   ├── layout/
│   │   ├── DashboardShell.tsx     # Client: manages mobile sidebar state, sets dir=
│   │   ├── Sidebar.tsx            # Client: nav, user info, logout; RTL slide via dir prop
│   │   ├── Topbar.tsx             # Client: hamburger, company name, user name
│   │   ├── NavItem.tsx            # Client: link with active state
│   │   └── nav-items.ts           # Nav config with permission guards per item
│   └── shared/
│       ├── PageHeader.tsx         # title + description + optional actions slot
│       ├── EmptyState.tsx         # icon + title + description + optional action
│       ├── StatusBadge.tsx        # colored pill: default/outline/success/warning/destructive
│       └── RoleBadge.tsx          # role display badge
├── features/
│   └── customers/
│       ├── actions/               # Server actions (customer.actions.ts, asset.actions.ts)
│       ├── components/            # CustomerForm, CustomerSearchBar, AssetSection, AssetCard, AssetForm, ArchiveCustomerButton
│       └── schemas/               # customer.schema.ts, asset.schema.ts (Zod, no .transform())
├── lib/
│   ├── auth/
│   │   ├── permissions.ts         # Permission matrix for 4 roles (17 permissions)
│   │   ├── session.ts             # getSession() helper
│   │   ├── tokens.ts              # JWT sign/verify, refresh token utils
│   │   └── passwords.ts           # bcrypt hash/verify for passwords and PINs
│   └── db/index.ts                # Singleton PrismaClient with PrismaPg adapter
├── i18n/
│   ├── routing.ts                 # next-intl v4 locale config (fr/ar/en, default: fr)
│   └── request.ts                 # next-intl v4 getRequestConfig
├── messages/                      # fr.json, ar.json, en.json (UI labels)
├── types/index.ts                 # Locale, Direction, UserRole, getDirection()
└── proxy.ts                       # Next.js 16 proxy (replaces middleware.ts)
```

### RTL implementation

- `dir` is derived from the authenticated user's `languagePreference` (stored in DB)
- Applied on the `DashboardShell` wrapper `<div>`, not on `<html>` (locale routing deferred)
- Arabic font: `Noto_Sans_Arabic` loaded via `next/font/google` as `--font-arabic` CSS variable; applied only under `[dir="rtl"]`

### Sidebar navigation (role-filtered)

| Nav item | Required permission |
|----------|-------------------|
| Tableau de bord | (all) |
| Caisse | `payments:manage` |
| Réparations | `tickets:view` |
| Clients | `customers:view` |
| Inventaire | `inventory:view` |
| Fournisseurs | `inventory:manage` |
| Rapports | `reports:view` |
| Paramètres | `settings:manage` |

### Permission matrix summary

| Permission | Admin | Manager | Cashier | Technician |
|-----------|-------|---------|---------|-----------|
| `users:manage` | ✅ | | | |
| `settings:manage` | ✅ | | | |
| `customers:manage` | ✅ | ✅ | | |
| `customers:view` | ✅ | ✅ | ✅ | ✅ |
| `inventory:manage` | ✅ | ✅ | | |
| `inventory:view_cost` | ✅ | ✅ | | |
| `inventory:view` | ✅ | ✅ | ✅ | ✅ |
| `tickets:manage` | ✅ | ✅ | | ✅ |
| `tickets:view` | ✅ | ✅ | ✅ | ✅ |
| `payments:manage` | ✅ | ✅ | ✅ | |
| `reports:view` | ✅ | ✅ | | |
| `debt:manage` | ✅ | ✅ | | |
| `debt:view` | ✅ | ✅ | ✅ | |

---

## 6. Customer Module Status

### What is built

**Customer list** (`/dashboard/customers`)
- Server page with `searchParams: Promise<{...}>` (Next.js 16 async params)
- Filters: full-text search (name or phone), type (named/walk-in/all), archived toggle
- Results capped at 100; ordered by `createdAt desc`
- `CustomerSearchBar` is a client component (debounced search, URL-param driven) wrapped in `<Suspense>` in the page

**Create customer** (`/dashboard/customers/new`)
- `CustomerForm` client component, mode="create"
- Customer type toggle: named (requires phone) or walk-in
- Phone normalized before storage: `replace(/[\s\-\(\)\.]/g, "")`
- Duplicate phone returns user-friendly error (catches Prisma P2002)
- All roles can create customers (no permission gate on creation)

**Customer detail** (`/dashboard/customers/[id]`)
- Profile card with type badge, language, group, notes
- Phones list with primary badge
- Assets section (client: shows/hides inline add form)
- Placeholder sections for repairs and debt (hidden from Technician)
- Archive button: `ArchiveCustomerButton` client component — Admin/Manager only (`customers:manage`)

**Edit customer** (`/dashboard/customers/[id]/edit`)
- `CustomerForm` mode="edit" — updates name, language, notes, group only
- Phone editing is not yet built (add/remove phones via separate actions exist in `customer.actions.ts`)

**Archive customer**
- Soft archive (`isArchived: true`)
- Admin/Manager only (server-side permission check in `archiveCustomer` action)
- Redirects to customer list on success

**Customer devices / assets** (inline on customer detail)
- `AssetSection` manages show/hide of the add form
- `AssetForm` — type (enum select), brand, model, color, storage, IMEI/serial, notes
- `AssetCard` — displays one asset; archive button uses `useTransition` (client component)
- At least one of type/brand/model is required (Zod refine)

### Walk-in customer rules

- No phone required (phone is optional)
- Walk-in customers are stored like named customers; `customerType: "walkin"` flag
- Debt section on detail page is conditionally hidden from Technician (not yet from walk-ins — that is enforced in Block 13 when debt UI is built)
- Walk-in cannot receive WhatsApp — enforced in Block 16

### Phone uniqueness

- Enforced at DB level: `@@unique([companyId, phoneNumber])` on `CustomerPhone`
- `companyId` is denormalized onto `CustomerPhone` specifically for this constraint
- Normalized before insert: strip spaces, dashes, parens, dots
- P2002 error caught and surfaced as user-friendly message

### Permissions

- **All roles**: can view customer list and detail, can create customers, can add/archive assets
- **Admin/Manager only** (`customers:manage`): can edit customers, archive customers
- The edit page itself has no permission gate (any session can load it); the `updateCustomer` action does not currently gate on `customers:manage` — only archive does. This is intentional for MVP simplicity; tighten in Block 19 if needed.

### Known limitations / not yet built

- Phone add/remove UI on customer detail (server actions exist, no UI yet)
- Walk-in → named customer promotion flow
- Customer group management (create/edit groups — only consumed, not managed)
- `pg_trgm` trigram indexes for faster name/phone search (deferred to Block 5 follow-up or Block 19)
- FK constraints on `CustomerAsset.deviceFamilyId/brandId/modelId` (deferred to Block 6)
- `cnasNumber`, `casnosNumber`, `address`, `wilayaCode` fields exist in schema but are not exposed in the form

---

## 7. Database Status

### Migration applied

One migration: `prisma/migrations/20260503150654_init/`  
Applied to `repaire_dev` database.

### Seeded data

Run with `npm run db:seed` (`prisma/seed.ts`):

- **3 Plans**: `trial` (14 days, 1 store), `single_store` (1 store), `multi_store` (unlimited stores)
- **1 Payment method**: `cash` — "Espèces" (FR) / "نقداً" (AR) / "Cash" (EN) — `isDefault: true`
- **Demo tenant**: Company "Demo Réparation" + Store "Boutique Principale" (prefix: "DEMO")
- **4 demo users** (password: `demo1234`): admin, manager, cashier, tech @ demo.repaire
- **1 subscription**: trial status for demo company

### Models implemented (20 total)

**Tenant & Auth:** `Company`, `SuperAdminUser`, `User`, `Store`, `UserStoreAccess`, `Plan`, `CompanySubscription`, `TenantImpersonationSession`, `RefreshToken`

**Customers (company-scoped):** `CustomerGroup`, `Customer`, `CustomerPhone`, `CustomerAsset`, `CustomerDebtBalance`, `CustomerDebtTransaction`

**System:** `AuditLog`, `StoreSettings`, `DocumentSequence`, `PaymentMethod`

### Models NOT yet implemented (added in future blocks)

The following tables do not exist yet — they will be added via `prisma migrate dev` in their respective blocks:

- **Block 6**: `DeviceFamily`, `DeviceBrand`, `DeviceModel` (catalog)
- **Block 7**: `Product`, `ProductVariant`, `StockBatch`, `StockMovement`, `Service`, `Part`, `Supplier`, `PurchaseInvoice`, `PurchaseInvoiceItem`
- **Block 8+**: `RepairTicket`, `TicketItem`, `TicketStatusHistory`, `Estimate`, `EstimateItem`
- **Block 11+**: `CashRegisterSession`, `CashTransaction`
- **Block 12+**: `SaleOrder`, `SaleOrderItem`
- **Block 13+**: (debt UI only — models already in schema)

### Important design constraints in schema

- **All money**: `Decimal @db.Decimal(12, 2)` DZD — no floats anywhere
- **`CustomerDebtTransaction`**: immutable ledger — corrections add rows, never update
- **`CustomerDebtBalance.totalDebt`**: denormalized field maintained by app + reconciliation cron (not a generated column — Prisma compatibility reason)
- **`DocumentSequence`**: advisory-lock-based safe number generation per store/type/year/month
- **`StoreSettings`**: one row per store, typed columns (no JSON blobs for settings)
- **`RefreshToken`**: family-based chain with `replacedById` self-relation

---

## 8. Known Issues / Warnings

### Nothing currently broken

`npm run typecheck`, `npm run lint`, and `npm run build` all pass cleanly as of Block 5.

### Deferred items to be aware of

1. **`[locale]` URL routing** — next-intl is installed and configured but `[locale]` segment in URLs is deferred. The `dir` attribute is applied at the shell `<div>` level from the user's DB `languagePreference`. The `<html lang dir>` attributes are static (`lang="fr"` `dir="ltr"`). This is intentional until a full locale routing block is scheduled.

2. **Phone add/remove UI** — `addPhone` and `removePhone` server actions are built in `customer.actions.ts` but no UI exposes them yet. The phones displayed on the customer detail are read-only.

3. **Client-side token auto-refresh** — if the access token expires while a user is on a page, the next server action or navigation will hit a 401. No automatic refresh interceptor exists yet (deferred to Block 5+).

4. **FK constraints on `CustomerAsset` catalog fields** — `deviceFamilyId`, `deviceBrandId`, `deviceModelId` exist as nullable `String?` fields with no FK constraints. FKs are added in Block 6 when the catalog tables are created.

5. **Subscription status check in proxy** — the proxy validates the JWT but does not check subscription status. Subscription enforcement is deferred.

6. **Rate limiting on auth endpoints** — `/api/auth/login` and `/api/auth/refresh` have no rate limiting. Deferred to Block 19.

7. **`pg_trgm` trigram indexes** for fast name/phone search — not yet applied. Current search uses `contains: q, mode: "insensitive"` (works but is a sequential scan). Add `CREATE EXTENSION pg_trgm` + GIN indexes in Block 19 or as a follow-up to Block 5.

8. **Block 5 Tracker missing detail** — the `IMPLEMENTATION_TRACKER.md` Block 5 detail section was not written (only the summary table was updated). Add it in the next session if needed.

---

## 9. Next Recommended Block

### Block 6 — Catalog Foundation

**Goal:** Create the device catalog that will power repair ticket intake, asset autofill, and inventory linking. The catalog is company-agnostic (shared across all tenants) and seeded with the most common devices repaired in Algerian shops.

**Scope:**

1. **New Prisma models** (add via `prisma migrate dev`):
   - `DeviceFamily` — device category (phone, tablet, laptop, desktop, printer, console, other) with `nameFr`, `nameAr`, `nameEn`
   - `DeviceBrand` — brand (Apple, Samsung, Huawei, …) scoped to one or more families; `nameFr`/`nameAr`/`nameEn`, `logoUrl?`
   - `DeviceModel` — specific model (iPhone 13, Galaxy S22, …) linked to family + brand; includes `connectorType`, `releaseYear?`, `screenSizeInch?`, `ramGb?`, `storageGb?`
   - Add FK constraints from `CustomerAsset.deviceFamilyId`, `.deviceBrandId`, `.deviceModelId` to the new tables

2. **Seed catalog data** from the existing `docs/repaire_*_default_catalog.md` files (phone, tablet, laptop, desktop, printer, console)

3. **Read-only catalog browser UI** (optional but useful for agents): a simple `/dashboard/catalog` page (Admin/Manager only) listing families → brands → models. Placeholder if short on time.

4. **Update `AssetForm`** to offer a searchable select for family/brand/model (in addition to the existing free-text custom brand/model fields). The form should gracefully fall back to free-text when the catalog does not have the device.

**Key constraints for Block 6:**
- Catalog is global (not company-scoped). `DeviceFamily`, `DeviceBrand`, `DeviceModel` have no `companyId`.
- `CustomerAsset` already has `deviceFamilyId`, `deviceBrandId`, `deviceModelId` nullable String fields. Block 6 adds the FK constraints via a new migration — do not recreate the `CustomerAsset` model.
- Use the existing `ConnectorType` enum already defined in `schema.prisma`.
- The `deviceTypeName` String field on `CustomerAsset` (added in Block 5 for display) is a stop-gap. After Block 6, prefer the FK relation; keep `deviceTypeName` for backward compatibility with existing assets.
- Seeding is mandatory — the app is not useful for Block 8 (tickets) without a populated catalog.

**Recommended prompt to start Block 6:**

> Read `HANDOFF_TO_ANTIGRAVITY.md` Section 9, `docs/REPAIRE_Full_Implementation_Plan.md` catalog sections, and the existing Prisma schema at `prisma/schema.prisma`. Implement Block 6 — Catalog Foundation: add `DeviceFamily`, `DeviceBrand`, and `DeviceModel` models with FK constraints to `CustomerAsset`, run `prisma migrate dev`, seed the catalog from the `docs/repaire_*_default_catalog.md` files, and update `AssetForm` to support catalog-linked device selection with a free-text fallback. Update `IMPLEMENTATION_TRACKER.md` and `BUILD_LOG.md` when done.

---

## Appendix: File Reference

### Auth files

| File | Purpose |
|------|---------|
| `src/proxy.ts` | Next.js 16 proxy (auth guard for `/dashboard/**` and `/login`) |
| `src/lib/auth/session.ts` | `getSession()` — reads JWT from cookie, returns payload or null |
| `src/lib/auth/tokens.ts` | `signAccessToken`, `verifyAccessToken`, refresh token utils |
| `src/lib/auth/passwords.ts` | `hashPassword`, `verifyPassword`, `hashPin`, `verifyPin` |
| `src/lib/auth/permissions.ts` | Permission matrix, `hasPermission()` |

### Database

| File | Purpose |
|------|---------|
| `src/lib/db/index.ts` | Singleton `prisma` export with `PrismaPg` adapter |
| `prisma/schema.prisma` | Full schema — 20 models, 7 enums |
| `prisma/seed.ts` | Seed: plans, payment methods, demo company, 4 users |
| `prisma.config.ts` | Prisma 7 config (datasource URL via dotenv) |

### Customer feature

| File | Purpose |
|------|---------|
| `src/features/customers/actions/customer.actions.ts` | createCustomer, updateCustomer, archiveCustomer, addPhone, removePhone |
| `src/features/customers/actions/asset.actions.ts` | createAsset, updateAsset, archiveAsset |
| `src/features/customers/schemas/customer.schema.ts` | createCustomerSchema, updateCustomerSchema, addPhoneSchema (Zod — no .transform()) |
| `src/features/customers/schemas/asset.schema.ts` | createAssetSchema, DEVICE_TYPES const (Zod — no .transform()) |
| `src/features/customers/components/CustomerForm.tsx` | RHF form for create and edit mode (unified CustomerFormValues type) |
| `src/features/customers/components/CustomerSearchBar.tsx` | Client search/filter bar (debounced, URL-param driven) |
| `src/features/customers/components/AssetSection.tsx` | Client wrapper managing add-form show/hide |
| `src/features/customers/components/AssetForm.tsx` | RHF inline form for adding a device |
| `src/features/customers/components/AssetCard.tsx` | Client component displaying one device with archive button |
| `src/features/customers/components/ArchiveCustomerButton.tsx` | Client component for customer archive action |
