# Settings Device Catalog Update

The Settings → Device Catalog page now matches the current repair workflow.

## What changed

- Laptop catalogs are no longer shown as one flat list.
- Laptop models are grouped as: Brand → Series / family → Model line → Generation.
- Printer catalogs are separated by type: Laser, Réservoir / Ink Tank, Cartouche / Ink Cartridge, and Risograph.
- Phone/tablet/console categories keep the simpler Brand → Model view.
- Admin/manager users can still add custom brands and custom models.
- Custom laptop additions are saved as a `DeviceModelFamily` name using the current schema, for example: `HP ProBook 440 G8`.
- Custom printer additions are saved using the same prefix convention as the printer seed, for example: `Laser | HP LaserJet Pro M404`.

## Important database note

The current Prisma schema does not yet have separate tables for `DeviceSeries`, `DeviceModel`, or `DeviceModelVariant`. This update avoids a risky migration by deriving laptop series/generation and printer type from the existing `DeviceModelFamily.name` convention.

Future perfect schema:

```prisma
DeviceCategory → DeviceBrand → DeviceSeries → DeviceModelFamily → DeviceModelVariant
```

For now, CPU/RAM/disk/GPU are intentionally stored during repair ticket creation, not as main catalog cards.
