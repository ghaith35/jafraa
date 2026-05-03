@AGENTS.md
# REPAIRE — Claude Code Project Memory

## Project Identity

REPAIRE is a repair-shop / POS / inventory SaaS system for Algerian repair shops and small/medium repair businesses.

The app must support:
- Repair ticket workflow
- Cash-only POS for MVP
- Inventory products, parts, services, and devices
- Customer management
- Customer devices/assets
- Customer debt
- Invoices, receipts, and PDFs
- WhatsApp notifications
- SaaS tenant isolation
- Multi-store support
- French, Arabic, and English
- Arabic RTL layout
- DZD currency

## Final MVP Constraints

These rules are final:

1. MVP payment method is CASH ONLY.
2. Do not implement Baridimob, CIB, Dahabia, CCP, card, or bank transfer in MVP.
3. Non-cash payment methods are future V1.5/V2 only.
4. Offline Windows cashier app is deferred.
5. French is the default UI language.
6. Arabic RTL and English must be prepared from day one.
7. Currency is DZD only.
8. Customers are company-scoped.
9. Transactions are store-scoped.
10. Do not over-engineer.
11. Build module by module.
12. Never rewrite the whole app in one step.

## Technology Stack

Use:
- Next.js App Router
- TypeScript
- Tailwind CSS
- shadcn/ui
- Prisma
- PostgreSQL
- Docker later
- next-intl or similar i18n approach
- React Hook Form + Zod for forms/validation if needed

## Architecture Rules

- Use `src/` directory.
- Keep code modular.
- Use feature-based folders when possible.
- Do not put all logic inside pages.
- Separate UI components, server actions, services, validation schemas, and database access.
- Use server-side authorization, not only client-side hiding.
- Every tenant-scoped query must be scoped by `company_id`.
- Store-specific transactions must include `store_id`.
- Do not expose cost/FIFO data to Cashier or Technician roles.

## Coding Behavior

Before making large changes:
1. Read the relevant plan/documentation.
2. Explain the intended change briefly.
3. Modify only the required files.
4. Avoid unrelated refactors.
5. Run typecheck/lint when possible.
6. Update `BUILD_LOG.md`.
7. Update `IMPLEMENTATION_TRACKER.md`.

## Files Claude Must Maintain

Claude must create and maintain:

- `IMPLEMENTATION_TRACKER.md`
- `BUILD_LOG.md`

### IMPLEMENTATION_TRACKER.md

Tracks modules:
- Not started
- In progress
- Done
- Deferred

### BUILD_LOG.md

After every coding block, add:
- Date
- Coding block name
- What changed
- Files touched
- Tests/checks run
- Known issues
- Next recommended block

## Build Strategy

Use the full master plan as source of truth, but implement one coding block at a time.

Do not build the whole app in one response.

Coding order:

1. Project foundation
2. Database foundation
3. Auth, roles, permissions
4. Dashboard shell and RTL layout
5. Customers and customer devices
6. Catalog foundation
7. Inventory products / parts / services
8. Basic repair tickets
9. Repair status flow
10. Estimates / devis
11. Cash register sessions
12. Cash-only POS
13. Customer debt
14. Cash payments and receipts
15. PDFs
16. WhatsApp
17. Reports
18. Super admin
19. Security hardening
20. Production polish

## Important Product Rules

### Payments

MVP is cash-only.

Allowed in MVP:
- cash sale
- cash repair payment
- cash debt payment
- cash refund
- cash register session
- Z-report

Not allowed in MVP:
- card
- CIB
- Dahabia
- Baridimob
- BaridiPay
- CCP
- bank transfer

### Customers

- Named customers require phone.
- Walk-in customers are allowed.
- Walk-in customers cannot have debt.
- Walk-in customers cannot receive WhatsApp.
- If phone is added later, walk-in can be promoted to named customer.

### Tenant / Store

- Company = tenant.
- Customers are company-scoped.
- Stores belong to company.
- Tickets, invoices, payments, stock, cash sessions are store-scoped.

### Languages

- Default UI: French.
- Arabic and English supported.
- Arabic must be RTL.
- UI labels are translated.
- User-entered content is not automatically translated.

## How Claude Should Use Tools / Plugins

Claude should use available tools when useful:
- File editing tools for code changes
- Search tools to inspect codebase before editing
- Terminal/bash tools to run commands
- Package manager commands only when needed
- Browser/dev server inspection if available
- Database/Prisma commands when working on schema

Claude must not assume a file exists. It must inspect first.

Claude must not install unnecessary packages.

Claude must ask before adding major new dependencies.

## Verification Commands

Use these when relevant:

```bash
npm run lint
npm run typecheck
npm run build
npm run dev
npx prisma generate
npx prisma migrate dev