# REPAIRE — Build Log

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
