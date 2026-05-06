# Database setup and seed fix

If `npm run db:seed` fails with an error like:

```txt
The column `store_settings.whatsappPhone` does not exist in the current database.
```

The project files are not missing. This means the database schema is older than the Prisma schema. The final ZIP includes the migration that adds `store_settings.whatsappPhone`:

```txt
prisma/migrations/20260504120000_add_expenses_and_whatsapp_log/migration.sql
```

## Correct order for a normal local setup

Run from the project root:

```bash
npm install
npm run db:generate
npm run db:migrate
npm run db:seed
npm run dev
```

Or use the helper script:

```bash
npm run db:setup
npm run dev
```

## Fast non-destructive fix for an existing local database

If you already have tables but some columns are missing, run:

```bash
npm run db:sync
npm run dev
```

`db:sync` runs Prisma `db push`, which syncs the current schema to the database without creating a new migration file. This is useful for local development.

## Clean development reset

If you do not need the existing local data, the cleanest option is:

```bash
npm run db:reset
npm run dev
```

This deletes local data, applies all migrations, and runs the seed again.

## Why the ZIP size is smaller

The final ZIP is smaller because generated/cache files such as `tsconfig.tsbuildinfo`, `.DS_Store`, and `__MACOSX` metadata were removed. Source files, Prisma migrations, catalogs, and project configuration are included.
