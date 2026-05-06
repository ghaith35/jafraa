# REPAIRE — Final QA Checklist

Generated: 2026-05-04

## Pre-deploy checks

### Build & Quality
- [ ] `npm run typecheck` — 0 errors
- [ ] `npm run lint` — 0 errors
- [ ] `npm run build` — clean exit

### Database migrations
- [ ] `npx prisma migrate status` — all migrations applied
- [ ] Migration `20260504120000_add_expenses_and_whatsapp_log` applied (expenses + WhatsApp log + storeSettings.whatsappPhone)
- [ ] `npx prisma db seed` — seed runs without errors
- [ ] Demo users login correctly: admin@demo.repaire / demo1234

### Environment variables
- [ ] `DATABASE_URL` set and database accessible
- [ ] `JWT_SECRET` set to a strong random string (not default)
- [ ] `.env` not committed to git

---

## Auth & Roles

- [ ] Login page works (fr UI, error states, redirect)
- [ ] Admin can access all routes
- [ ] Manager cannot access `/dashboard/settings`
- [ ] Cashier cannot access `/dashboard/suppliers`, `/dashboard/reports`, `/dashboard/settings`
- [ ] Technician cannot access POS, reports, invoices, refunds, payments
- [ ] Technician can view repairs, customers, inventory (read)
- [ ] Session expires and redirects to /login

---

## Cash Register

- [ ] Only one open session per store at a time
- [ ] Cashier can open/close own session
- [ ] Manager/Admin can force-close any session
- [ ] Technician is blocked from cash register

---

## POS Checkout

- [ ] Item search works (products, parts, services)
- [ ] Out-of-stock items show 0 qty
- [ ] FIFO batch consumption on checkout
- [ ] Cashier cannot apply discount above threshold
- [ ] Walk-in customer: full cash required (no debt)
- [ ] Named customer: can create debt sale
- [ ] Sale confirmation shows correct change/debt

---

## Repair Tickets

- [ ] Ticket creation with device, problems, notes
- [ ] Status change workflow (received → in_diagnosis → in_repair → ready_for_pickup → completed)
- [ ] Part reservation updates stock availability
- [ ] Estimate creation, send, accept/reject flow
- [ ] Repair invoice generation from accepted estimate
- [ ] Cash payment on repair invoice (full + partial/debt)
- [ ] Ticket status → completed after full payment
- [ ] Internal notes NEVER appear on printed documents

---

## Customer Debt

- [ ] Walk-in customer cannot incur debt
- [ ] Debt balance updates atomically
- [ ] Cashier can pay debt (not add manual entries)
- [ ] Debt payment creates CashMovement + updates session

---

## Refunds

- [ ] POS refund returns stock (FIFO insert)
- [ ] Refund creates outward CashMovement
- [ ] Cashier cannot refund outside own session
- [ ] Technician cannot refund

---

## Documents & Print

- [ ] POS receipt prints cleanly (no nav/sidebar)
- [ ] Repair invoice prints with correct totals
- [ ] Z-report shows session totals
- [ ] Customer debt statement PDF
- [ ] No internal notes in any printed document

---

## WhatsApp

- [ ] WhatsApp button on repair ticket detail shows preview modal
- [ ] Message preview is correct (customer name, ticket number, device)
- [ ] "Ouvrir WhatsApp" opens wa.me link in new tab
- [ ] Notification logged after send
- [ ] Log visible at /dashboard/settings/whatsapp
- [ ] Store WhatsApp number can be saved

---

## Reports

- [ ] Sales report with date range filter
- [ ] Profit report (handles missing expenses table gracefully)
- [ ] Repairs report with status breakdown
- [ ] Debt report with top debtors
- [ ] Technician performance report
- [ ] Inventory health / low stock report
- [ ] Cash flow report
- [ ] Audit log visible to Admin only
- [ ] Manager cannot access audit log

---

## Settings

- [ ] Store profile editable (name, address, phone, email)
- [ ] Prefix is read-only (document numbering)
- [ ] Operational settings save correctly (warranty days, thresholds)
- [ ] Catalog browser works (categories, brands, model families)
- [ ] WhatsApp settings page accessible

---

## Super Admin

- [ ] Super admin login at /super-admin/login
- [ ] Companies list with subscription status
- [ ] Company detail with metrics
- [ ] Subscription status can be changed (trial/active/suspended…)
- [ ] Expiry date can be updated
- [ ] Company archive/restore works
- [ ] Super admin route inaccessible to regular users

---

## Tenant Isolation

- [ ] Company A data not visible from Company B session
- [ ] All prisma queries include companyId or storeId scope
- [ ] Customer queries: companyId scope
- [ ] Transaction queries: storeId scope
- [ ] No raw SQL without tenant filter

---

## RTL / Mobile

- [ ] Arabic users (languagePreference=ar) see RTL layout
- [ ] No horizontal overflow on mobile (375px width)
- [ ] Sidebar overlay works on mobile
- [ ] Forms are readable on mobile

---

## DZD Currency

- [ ] All monetary values display "DZD" suffix
- [ ] No "€" or "$" anywhere in the UI
- [ ] Decimal precision: 2 decimal places consistently

---

## Known Issues / Deferred

- `Expense` and `ExpenseCategory` tables require migration `20260504120000` to be applied before expense tracking works
- Profit report shows 0 expenses until migration is applied (handled gracefully — no crash)
- whatsapp-web.js is installed but not used — can be uninstalled post-MVP to reduce bundle size
- Super admin impersonation is deferred (schema exists, no UI)
- Abandoned device workflow notifications are deferred (thresholds stored, no cron)
- Manager PIN approval flow is deferred
- Barcode scanner optimization is deferred
- Held/suspended POS carts are deferred
- Refunds on debt sales/invoices are deferred for Admin/Manager (blocked for MVP safety)
- RTL `[locale]` URL routing deferred (dir set via DB user preference, not URL)
- `npm install` required after package.json changes (removed @aws-sdk/client-s3, qrcode)

---

## Commands to run before production

```bash
# 1. Install dependencies (package.json changed)
npm install

# 2. Generate Prisma client
npx prisma generate

# 3. Apply all migrations
npx prisma migrate deploy

# 4. Seed demo data (dev only)
npx prisma db seed

# 5. Final build check
npm run typecheck && npm run lint && npm run build
```
