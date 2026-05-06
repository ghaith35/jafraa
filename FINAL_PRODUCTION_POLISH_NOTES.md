# Final production polish package

This package adds the requested production workflow enhancements on top of the catalog/repair workflow build.

## Added

### 1. POS repair UI polish

- Added `src/features/pos/components/PosRepairWorkspace.tsx`.
- `/dashboard/pos` now presents the repair workflow in a cleaner POS-style shell with quick stats, workflow guidance and a modern wizard container.

### 2. Real receipt / label printing

- POS sale receipt:
  - `/dashboard/pos/sales/[id]/receipt`
- Repair label:
  - `/dashboard/repairs/[id]/label`
- Repair ticket receipt remains available:
  - `/dashboard/repairs/[id]/ticket-receipt`
- Repair invoice receipt remains available:
  - `/dashboard/repairs/invoices/[id]/receipt`

### 3. WhatsApp notifications

- WhatsApp templates now support French, Arabic and English.
- Estimate WhatsApp message can include the public approval link.
- WhatsApp settings now shows the notification template coverage cards.

### 4. Estimate approval flow

- Added public customer approval tokens to `Estimate`.
- `markEstimateSent()` generates a 14-day approval link.
- New public route:
  - `/estimate-approval/[token]`
- Client can accept/reject estimate without logging in.
- Approval updates:
  - estimate status
  - repair ticket status
  - customer approval log
  - repair status history

### 5. Better reports dashboard

- `/dashboard/reports` now has an executive dashboard:
  - revenue
  - repair count
  - debt
  - low-stock alerts
  - revenue trend
  - most repaired categories
  - links to all detailed reports

### 6. Stock purchase orders

- Added purchase order database tables:
  - `PurchaseOrder`
  - `PurchaseOrderLine`
- Added pages:
  - `/dashboard/inventory/purchase-orders`
  - `/dashboard/inventory/purchase-orders/[id]`
- Added low-stock generation button from reorder page.
- Purchase orders support draft, sent, confirmed, received and cancelled states.

### 7. Production deployment

- Added `Dockerfile`.
- Added `.dockerignore`.
- Added `.env.example`.
- Added `/api/health` endpoint.
- Added `PRODUCTION_DEPLOYMENT_GUIDE.md`.
- Set Next.js `output: "standalone"`.

## Database migration

New migration:

```txt
prisma/migrations/20260506203000_production_polish/
```

Run:

```bash
npm install
npm run db:generate
npm run db:migrate
npm run db:seed
npm run validate:workflows
npm run typecheck
npm run build
npm run dev
```

If your local DB is old and you do not need its data:

```bash
npm run db:reset
npm run dev
```

If you need to keep data:

```bash
npm run db:sync
npm run db:seed
npm run dev
```

## Important production setting

Set these in `.env`:

```env
NEXT_PUBLIC_APP_URL="https://your-domain.com"
APP_URL="https://your-domain.com"
```

These are required so WhatsApp messages contain valid public estimate approval links.

## Validation performed in sandbox

- `node scripts/validate-workflows.mjs`: passed.
- TypeScript/TSX syntax transpilation for changed files: passed.
- Full dependency install/build could not be completed in the sandbox because npm registry access failed for a package tarball. Run the full commands above on your machine.
