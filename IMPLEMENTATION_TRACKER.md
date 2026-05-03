# REPAIRE — Implementation Tracker

Last updated: 2026-05-03 (Block 4 complete)

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
| 5 | Customers & Customer Devices | ⏳ Not Started | Company-scoped customers, walk-in, assets |
| 6 | Catalog Foundation | ⏳ Not Started | Device families, brands, seed data |
| 7 | Inventory — Products / Parts / Services | ⏳ Not Started | FIFO, stock movements, adjustments |
| 8 | Basic Repair Tickets | ⏳ Not Started | Ticket creation, intake, status |
| 9 | Repair Status Flow | ⏳ Not Started | Full status machine, history |
| 10 | Estimates / Devis | ⏳ Not Started | Draft → sent → accepted → rejected |
| 11 | Cash Register Sessions | ⏳ Not Started | Open/close session, Z-report |
| 12 | Cash-Only POS | ⏳ Not Started | POS screen, held carts, barcode scan |
| 13 | Customer Debt | ⏳ Not Started | Three-source debt, debt statement |
| 14 | Cash Payments & Receipts | ⏳ Not Started | Payment recording, change calc |
| 15 | PDFs | ⏳ Not Started | Ticket receipt, invoice, debt statement |
| 16 | WhatsApp | ⏳ Not Started | whatsapp-web.js, per-store session |
| 17 | Reports | ⏳ Not Started | Daily sales, repair revenue, cash variance |
| 18 | Super Admin | ⏳ Not Started | Tenant management, impersonation |
| 19 | Security Hardening | ⏳ Not Started | ESLint guards, rate limiting, audit log |
| 20 | Production Polish | ⏳ Not Started | Empty states, print layouts, error pages |

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
