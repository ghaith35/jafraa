# Repair Intake UI Fix

This version keeps the guided laptop workflow, but rebuilds the intake UI to a cleaner modern POS-style layout.

## Main UI changes

- Rebuilt the repair intake screen into a modern 3-column workspace:
  - Left: customer selector and step shortcut rail
  - Center: main wizard workspace with tabs, breadcrumb, search, card grids, and sticky actions
  - Right: repair summary panel
- Laptop workflow stays guided:
  - Category → Brand → Series → Model line → Generation → Specs → Problems → Parts → Details
- Phones/tablets/printers remain simpler:
  - Category → Brand → Device → Problems → Parts → Details
- Improved card styling, spacing, selected states, hover states, focus rings, and summary panel.
- Removed the old/basic form look from the repair intake page.

## Main files changed

- `src/features/repairs/components/intake/RepairIntakeWizard.tsx`
- `src/features/repairs/components/intake/RepairTileCard.tsx`
- `src/features/repairs/components/intake/RepairBreadcrumb.tsx`
- `src/features/repairs/components/intake/RepairSummaryPanel.tsx`
- `src/app/(dashboard)/dashboard/repairs/new/page.tsx`

## Test path

Open:

```txt
/dashboard/repairs/new
```

Then test:

```txt
Laptop → HP → ProBook → 440 → G8 → Specs
```
