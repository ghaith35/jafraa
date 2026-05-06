# Laptop Workflow Update

This project version changes the laptop intake flow from a flat model list into a guided laptop-specific selection flow.

## New laptop workflow

For category `Laptop`, the repair wizard now uses:

1. Category
2. Brand
3. Series / family
   - Example: ProBook, EliteBook, Pavilion, ThinkPad, Latitude, XPS
4. Model line
   - Example: 440, 450, 840, T14, Latitude 5420
5. Generation / chassis
   - Example: G5, G8, Gen 2, A2141
6. Specifications
   - Processor
   - RAM
   - Disk / storage
   - GPU
7. Problems
8. Parts
9. Details

Phones/tablets/printers still use the simpler flow:

Category → Brand → Device → Problems → Parts → Details

## Database behavior

No destructive database migration is required for this update.

The final selected laptop still maps to the existing `DeviceModelFamily` record, such as:

- HP ProBook 440 G8
- HP EliteBook 840 G5
- Lenovo ThinkPad T14 Gen 2
- Dell Latitude 5420

The UI groups those existing model-family names dynamically so the user does not see all laptop models at once.

## Specifications storage

Because the current schema does not yet have separate CPU/RAM/disk fields, the wizard stores:

- RAM/storage in the existing `deviceStorageRam` field when possible
- CPU/GPU/spec details in the ticket internal notes

A future schema upgrade can add dedicated fields such as `processor`, `ram`, `storage`, and `gpu` on customer assets / repair tickets.

## Modified files

- `src/features/repairs/components/intake/RepairIntakeWizard.tsx`
- `src/features/repairs/components/intake/RepairBreadcrumb.tsx`

## Recommended next database upgrade

For a perfect long-term laptop catalog, add dedicated tables:

- `DeviceSeries`
- `DeviceModelVariant`
- `DeviceCatalogSuggestion`

This will allow a clean database model:

Brand → Series → Model line → Generation → Variant/specs
