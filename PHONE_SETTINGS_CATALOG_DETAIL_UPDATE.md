# Phone Device Catalog Detail Update

This update fixes Settings → Device Catalog for phones.

## Problem fixed

The previous settings catalog could still show old starter groups such as:

- Galaxy S
- Galaxy A
- Galaxy Note
- Redmi Note Series
- A Series

Those are too generic for a repair workflow. The settings screen now shows detailed phone models such as:

- Galaxy S9, S10, S20, S22, S23, S24
- Galaxy A12, A14, A15, A50, A52, A54, A55
- iPhone 11, 12, 13, 14, 15, 16 variants
- Redmi Note, Poco, Oppo, Realme, Vivo, Huawei, Honor, Infinix, Tecno, etc.

## UI behavior

For `Phone`, the catalog browser now displays:

`Phone → Brand → Series → Exact model`

Example:

`Phone → Samsung → Galaxy S → Galaxy S23 Ultra`

The left side of the model panel groups by series, but the right side displays the exact models as cards.

## Seed behavior

`prisma/seed-phones-expanded.ts` now deactivates old grouped starter entries for phone brands when the expanded phone catalog is seeded. This prevents generic records like `Galaxy S` or `A Series` from appearing as selectable models after you run the seed.

## What to run

If your database already has the old generic entries, run:

```bash
npm run db:seed
```

This will mark the old generic phone groups inactive and keep the detailed expanded phone models active.

If you want a completely clean local database, run:

```bash
npm run db:reset
```

Use `db:reset` only in development because it deletes and recreates local data.
