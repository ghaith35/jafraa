# Repair Intake Workflow Upgrade

This package replaces the slow manual repair creation form with a fast POS-style repair intake wizard.

## What changed

### New repair workflow

`/dashboard/repairs/new` now uses a card-based wizard:

1. Category
2. Manufacturer
3. Device/model
4. Problems
5. Compatible parts
6. Ticket details

The wizard is implemented in:

- `src/features/repairs/components/intake/RepairIntakeWizard.tsx`
- `src/features/repairs/components/intake/RepairTileCard.tsx`
- `src/features/repairs/components/intake/RepairBreadcrumb.tsx`
- `src/features/repairs/components/intake/RepairSummaryPanel.tsx`

### Database catalog integration

The workflow reads categories, brands, and model families from the existing Prisma catalog tables:

- `DeviceCategory`
- `DeviceBrand`
- `DeviceModelFamily`

The repair page fetches this data from Prisma and passes it to the wizard.

### Parts compatibility

The parts step uses inventory compatibility fields:

- `Part.compatibleCategoryId`
- `Part.compatibleBrandId`
- `Part.compatibleFamilyId`

New server action:

- `listCompatiblePartsForRepair()` in `src/features/inventory/actions/part.actions.ts`

### Ticket creation

`createRepairTicket()` now supports:

- selected compatible parts
- reservation of parts during ticket creation
- initial ticket status
- automatic saving of a new device as a customer asset
- customer/company validation
- saved customer device validation

### Seed improvements

`prisma/seed-catalog.ts` now includes more specific phone and printer model families such as:

- iPhone 14 Pro Max
- iPhone 15 Plus
- Samsung Galaxy A15
- HP LaserJet Pro M404
- Epson EcoTank L3250

`prisma/seed-inventory.ts` now includes sample compatible parts for the demo store.

## After installing

Run:

```bash
npm install
npx prisma generate
npx prisma db seed
npm run typecheck
npm run build
```

If you already have production data, review the seed files before running them.
