# Production deployment guide

## Required checks before deployment

```bash
npm install
npm run db:generate
npm run db:migrate
npm run db:seed
npm run validate:workflows
npm run typecheck
npm run build
```

## Environment variables

Copy `.env.example` to `.env` and set production values:

- `DATABASE_URL`
- `NEXT_PUBLIC_APP_URL`
- `APP_URL`
- `JWT_ACCESS_SECRET`
- `JWT_REFRESH_SECRET`
- `SUPER_ADMIN_JWT_SECRET`

`NEXT_PUBLIC_APP_URL` is required for WhatsApp estimate approval links.

## Health check

After deployment, check:

```text
/api/health
```

Expected response:

```json
{ "ok": true, "service": "jafraa", "database": "ok" }
```

## Docker

```bash
docker build -t jafraa:latest .
docker run --env-file .env -p 3000:3000 jafraa:latest
```

## Recommended production flow

1. Run migrations against production database.
2. Run seed only for baseline catalog/payment methods if needed.
3. Open `/api/health`.
4. Login as admin.
5. Test POS sale receipt, repair POS, estimate approval link, WhatsApp preview, purchase orders and reports.
