# REPAIRE — Architecture Fixes & Enhancements (Post-Critique)

This document captures ALL fixes, corrections, and additions applied to the Repaire architecture after the senior critique review. It is organized by category and references the original critique IDs.

Use this file together with:
- `repaire_full_architecture_discussion_notes.md`
- `repaire_screen_extraction_summary.md`

---

# 1. Updated Permissions Matrix

The following permission changes were applied based on critique items C1 and C2.

## Changes from original

- **Technician can NO LONGER take payments** — restricted to Cashier + Manager + Admin
- **Manual debt adjustments** — restricted to Manager + Admin only (was: any role)
- **Technician can NO LONGER do POS sales** — unchanged, confirmed

## Full updated permissions

### Repair tickets
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| Create repair ticket | ✓ | ✓ | ✓ | ✓ |
| Update repair status | ✓ | ✓ | ✓ | ✓ |
| Mark Ready for pickup (triggers invoice) | ✓ | ✓ | ✓ | ✓ |
| Mark parts as used | ✓ | ✓ | ✓ | ✓ |
| Edit repair price / labor charge | ✓ | ✓ | — | — |
| Cancel / delete ticket | ✓ | ✓ | ✓ | — |
| Assign technician | ✓ | ✓ | ✓ | — |

### Payments & invoices
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| Take payment (cash collection) | ✓ | ✓ | ✓ | — |
| Apply discount on invoice | ✓ | ✓ | — | — |
| Process refund | ✓ | ✓ | ✓ | — |
| Record old debt payment | ✓ | ✓ | ✓ | — |

### Inventory
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| View products / parts / services | ✓ | ✓ | ✓ | ✓ |
| View cost price / FIFO batches | ✓ | ✓ | — | — |
| Create / edit / delete products, parts, services | ✓ | ✓ | — | — |
| Create purchase invoice (add stock) | ✓ | ✓ | — | — |
| Manual stock adjustment | ✓ | ✓ | — | — |

### Customers
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| Create / edit customers | ✓ | ✓ | ✓ | ✓ |
| Add manual debt / opening balance | ✓ | ✓ | — | — |
| Manual debt adjustment (write-off) | ✓ | ✓ | — | — |
| View customer debt details | ✓ | ✓ | ✓ | — |

### POS sales
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| Create POS sale | ✓ | ✓ | ✓ | — |
| Apply discount on POS sale | ✓ | ✓ | — | — |
| Price override on cart | ✓ | ✓ | — | — |

### Reports & settings
| Action | Admin | Manager | Cashier | Technician |
|--------|-------|---------|---------|------------|
| View reports | ✓ | ✓ | — | — |
| Manage store settings | ✓ | — | — | — |
| Manage users / roles | ✓ | — | — | — |
| Manage catalog | ✓ | ✓ | — | — |

---

# 2. Architecture Risk Fixes (Section A)

## A1 — JWT Auth: Refresh Token Rotation

### Implementation

Auth flow:
1. Login → issue access_token (15 min expiry) + refresh_token (7 days expiry)
2. Access token stored in memory (JS variable, NOT localStorage)
3. Refresh token stored as HttpOnly secure cookie
4. On 401 → call /api/auth/refresh → get new access_token + new refresh_token
5. Old refresh_token is invalidated immediately (rotation)
6. If old refresh_token is reused → invalidate entire token family (compromise detected)

### New DB table

```
refresh_tokens
├── id (PK)
├── user_id (FK → users)
├── token_hash (unique) — bcrypt hash, never store raw
├── family_id — groups tokens from the same login session
├── expires_at
├── is_revoked (default: false)
├── replaced_by_id (FK → refresh_tokens, nullable)
├── created_at
```

### Rules
- On login: create new family_id (UUID), issue first refresh token
- On refresh: revoke old token, issue new token with same family_id
- On reuse detection (revoked token used): revoke ALL tokens with that family_id
- On logout: revoke all tokens for that user
- Cron job: delete expired/revoked tokens older than 30 days

---

## A2 — WhatsApp Abstraction Layer

### Implementation

Create a `NotificationService` interface:

```
interface NotificationService {
  sendTicketCreated(ticket, customer, store): Promise<SendResult>
  sendReadyForPickup(ticket, customer, store, invoice): Promise<SendResult>
  sendSaleReceipt(sale, customer, store): Promise<SendResult> // optional
}
```

Two adapters:
1. `WhatsAppWebAdapter` — uses whatsapp-web.js (current)
2. `WaMeLinkAdapter` — generates wa.me deep links as fallback

### Rate limiting
- Max 30 messages per hour per store number
- Queue messages with 2-second delay between sends
- If session is disconnected → automatically fall back to wa.me link shown in UI

### whatsapp-web.js session management
- Lazy initialization: session only starts when first message is queued
- Auto-teardown: destroy session after 10 minutes idle
- Session pool: max 5 concurrent sessions on server, rotate between stores
- Store session data encrypted with AES-256 using server-level key

---

## A3 — Home Server Resilience

### Automated backups
- PostgreSQL: `pg_dump` via cron every 6 hours
- Store backups in `/backups/` with 7-day rotation
- Sync daily backup to Backblaze B2 (free 10GB tier) or Google Drive via rclone
- Test restore monthly

### UPS
- Recommended: APC Back-UPS 600VA (~8,000 DZD)
- Gives 15-30 minutes runtime for graceful Docker shutdown

### DDNS health check
- Use DuckDNS or No-IP with 5-minute update interval
- Nginx returns 502 on app failure → monitor with UptimeRobot (free tier, 5-minute checks)

### Migration readiness
- Docker Compose = trivial migration to VPS
- At 10 paying tenants → migrate to Hetzner CAX11 (€3.29/month, ARM)
- Migration steps: rsync Docker volumes + pg_dump/restore + DNS update

---

## A4 — Prisma Interactive Transactions

### Critical operations that MUST use interactive transactions

```javascript
// Pattern for all atomic operations
await prisma.$transaction(async (tx) => {
  // All queries inside use the same transaction
  const invoice = await tx.invoice.create({ ... });
  const movements = await tx.stockMovement.createMany({ ... });
  await tx.stockBatch.updateMany({ ... });
  await tx.customerDebtBalance.update({ ... });
  await tx.cart.update({ where: { id: cartId }, data: { status: 'completed' } });
  // If ANY step throws, ALL steps are rolled back
});
```

### Operations requiring transactions
1. POS checkout (invoice + stock + payment + debt + cart clear)
2. Purchase invoice save (batches + stock_qty + supplier balance + movements)
3. Repair → Ready for pickup (invoice create + deposit application)
4. Refund processing (refund record + stock restock + debt adjustment + invoice status)
5. Stock count confirm (adjustments + movements + stock_qty updates)
6. Debt payment (payment record + allocations + balance updates)
7. Trade-in Scenario B (trade-in record + sale + invoice + stock)
8. Repair cancellation / Not repaired (stock restoration + movements)

---

## A5 — API Rate Limiting

### Implementation

Use a simple in-memory rate limiter middleware for Next.js API routes:

```
Rate limits:
├── POST /api/auth/login → 10 requests / minute / IP
├── POST /api/auth/refresh → 20 requests / minute / IP  
├── POST /api/whatsapp/* → 5 requests / minute / store
├── All other endpoints → 100 requests / minute / user
```

### Package
- Use `rate-limiter-flexible` with in-memory storage (no Redis needed for v1)
- Apply as Next.js middleware in `middleware.ts`
- Return 429 with `Retry-After` header

---

## A6 — Tenant Isolation Enforcement (CRITICAL)

### Implementation: Prisma Client Extension

Create a scoped Prisma client per request that automatically injects tenant filters:

```javascript
function createTenantPrisma(companyId, storeId) {
  return prisma.$extends({
    query: {
      $allOperations({ model, operation, args, query }) {
        // Skip models that don't have tenant columns
        const companyModels = ['users', 'stores', 'company_subscriptions'];
        const storeModels = ['customers', 'repair_tickets', 'invoices', 'products', 'parts', ...];
        
        if (storeModels.includes(model)) {
          args.where = { ...args.where, store_id: storeId };
        } else if (companyModels.includes(model)) {
          args.where = { ...args.where, company_id: companyId };
        }
        return query(args);
      }
    }
  });
}
```

### Middleware flow
1. JWT decoded → extract company_id + user_id
2. Fetch user's allowed store_ids
3. Validate requested store_id is in allowed list
4. Create scoped Prisma client with company_id + store_id
5. Pass scoped client to route handler
6. Route handler NEVER uses the raw prisma client

### Rule
- Raw `prisma` client is ONLY used for: super admin panel, auth endpoints, cron jobs
- All tenant-facing API routes use the scoped client exclusively

---

## A7 — Denormalized Counter Reconciliation

### Cron job: every 6 hours

Tables to reconcile:

```
1. products.stock_qty vs SUM(stock_batches.qty_remaining WHERE item_type='product' AND item_id=products.id)
2. parts.stock_qty vs SUM(stock_batches.qty_remaining WHERE item_type='part' AND item_id=parts.id)
3. devices.stock_qty vs SUM(stock_batches.qty_remaining WHERE item_type='device' AND item_id=devices.id)
4. customer_debt_balances.repair_debt vs SUM(customer_debt_transactions WHERE type='repair_debt')
5. customer_debt_balances.sale_debt vs SUM(customer_debt_transactions WHERE type='sale_debt')
6. customer_debt_balances.manual_debt vs SUM(customer_debt_transactions WHERE type IN ('manual_debt','adjustment','opening_balance'))
7. suppliers.balance_due vs SUM(purchase_invoices.balance_due)
```

### New DB table

```
reconciliation_logs
├── id (PK)
├── table_name
├── record_id
├── field_name
├── expected_value
├── actual_value
├── drift_amount
├── auto_fixed (boolean, default false — v1 logs only)
├── created_at
```

---

# 3. MVP Gap Fixes (Section B)

## B1 — Barcode Scanning for POS

### Implementation
- USB barcode scanners emit keyboard events (rapid sequential keystrokes)
- Detect in POS search input: if 6+ characters arrive within 100ms → treat as barcode scan
- Match against `products.barcode` or `parts.barcode` or `products.sku`
- If match found → add to cart automatically
- If no match → show "not found" notification

### Code pattern
```javascript
// In POS search input component
let buffer = '';
let lastKeyTime = 0;

onKeyDown(e) {
  const now = Date.now();
  if (now - lastKeyTime < 50) {
    buffer += e.key;
  } else {
    buffer = e.key;
  }
  lastKeyTime = now;
  
  if (e.key === 'Enter' && buffer.length >= 6) {
    handleBarcodeScan(buffer);
    buffer = '';
  }
}
```

### No additional packages needed — this is pure DOM event handling.

---

## B2 — Cash Register Sessions

### New DB tables

```
cash_register_sessions
├── id (PK)
├── store_id (FK)
├── opened_by (FK → users)
├── closed_by (FK → users, nullable)
├── opening_cash (decimal) — counted cash when opening
├── expected_cash (decimal, computed) — opening + payments received - refunds given
├── closing_cash (decimal, nullable) — counted cash when closing
├── difference (decimal, nullable) — closing_cash - expected_cash
├── status: open | closed
├── note (nullable)
├── opened_at
├── closed_at (nullable)
```

### Rules
- Only one open session per store at a time
- Cannot take payments or do checkouts without an open cash register session
- Admin/Manager can force-close a session
- On close: system calculates expected_cash, cashier enters actual counted cash, difference is logged
- Difference is shown in reports (daily cash variance)

### Cash flow calculation
```
expected_cash = opening_cash
  + SUM(payments WHERE cash_register_session_id AND type = 'incoming')
  - SUM(refunds WHERE cash_register_session_id AND type = 'outgoing')
  - SUM(tradein_payments WHERE cash_register_session_id) // cash paid to customers for trade-ins
```

### Permissions
- Open register: Cashier + Manager + Admin
- Close register: the user who opened it, or Manager + Admin
- View cash reports: Manager + Admin only

---

## B3 — Warranty Tracking Post-Repair

### Implementation (no new tables needed)

On repair ticket detail page:
- Show "Warranty: X days remaining" or "Warranty expired" badge
- Calculation: `ticket.completed_at + ticket.warranty_days > now`

On new repair ticket creation:
- After customer + device is selected, query:
  ```sql
  SELECT * FROM repair_tickets 
  WHERE customer_id = ? 
    AND device_brand = ? AND device_model = ?
    AND status = 'completed'
    AND completed_at + (warranty_days * INTERVAL '1 day') > NOW()
  ORDER BY completed_at DESC
  LIMIT 1
  ```
- If found → show prominent warning banner:
  "This device has an active warranty from ticket #TIZ-2025-11-0034 (12 days remaining). Link to original ticket."
- Staff decides whether to create a warranty repair (no charge) or a new paid repair

### Warranty repair handling
- Create new ticket as normal
- Link to original ticket via a `warranty_original_ticket_id` field (nullable FK)
- If warranty repair: labor charge = 0, parts from original ticket may be reused

### New field on repair_tickets table
```
warranty_original_ticket_id (FK → repair_tickets, nullable)
```

---

## B4 — Global Search (Cmd+K)

### Implementation
- Use shadcn/ui `<CommandDialog>` (built-in, uses cmdk library)
- Keyboard shortcut: Ctrl+K / Cmd+K
- Search across: customers (phone, name), repair tickets (number), products (name, SKU, barcode), invoices (number)

### Backend
- Single API route: `GET /api/search?q=...&limit=10`
- Uses PostgreSQL `ILIKE` with `pg_trgm` extension for fuzzy matching
- Returns categorized results:
  ```json
  {
    "customers": [{ id, name, phone }],
    "tickets": [{ id, ticket_number, status, device }],
    "products": [{ id, name, sku, stock_qty }],
    "invoices": [{ id, invoice_number, total, status }]
  }
  ```

### Index needed
```sql
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX idx_customers_phone_trgm ON customers USING gin (phone gin_trgm_ops);
CREATE INDEX idx_customers_name_trgm ON customers USING gin (name gin_trgm_ops);
CREATE INDEX idx_products_name_trgm ON products USING gin (name gin_trgm_ops);
CREATE INDEX idx_products_sku ON products (sku);
CREATE INDEX idx_products_barcode ON products (barcode) WHERE barcode IS NOT NULL;
```

---

## B5 — wa.me Fallback Links

### Implementation
- On every WhatsApp send failure or when session is disconnected:
- Generate wa.me link: `https://wa.me/213XXXXXXXXX?text={encoded_message}`
- Show as a clickable button on the ticket detail page: "Send via WhatsApp manually"
- Staff taps → their personal WhatsApp opens with pre-filled message
- Log the manual send attempt in whatsapp_logs with status = 'manual_link'

### No new tables needed — just UI + whatsapp_logs status enum updated to include 'manual_link'

---

## B6 — Expense Tracking

### New DB tables

```
expense_categories
├── id (PK)
├── store_id (FK)
├── name (e.g., Rent, Salary, Utilities, Transport, Other)
├── is_default (boolean) — seed defaults per store
├── created_at

expenses
├── id (PK)
├── store_id (FK)
├── category_id (FK → expense_categories)
├── amount (decimal)
├── date
├── note (nullable)
├── created_at
├── created_by (FK → users)
```

### Default categories (seeded per store)
- Loyer (Rent)
- Salaires (Salaries)
- Électricité / Eau (Utilities)
- Transport
- Fournitures (Supplies)
- Autre (Other)

### Permissions
- Create/edit/delete expenses: Manager + Admin only
- View expenses: Manager + Admin only

### Profit report update
```
Net profit = Gross profit - Total expenses (in period)
Gross profit = Revenue - COGS (unchanged)
```

---

# 4. Design Contradiction Fixes (Section C)

## C3 — Deposit to Invoice Application

### Fix: explicit step in "mark Ready for pickup" function

When status changes to Ready for pickup:
1. Create invoice with all line items (labor + parts + services)
2. Query all payments WHERE repair_ticket_id = ticket.id AND payment_type = 'deposit'
3. For each deposit:
   a. Create payment_invoice_links row (payment_id, invoice_id, amount_applied = deposit amount)
   b. Update invoice.amount_paid += deposit amount
   c. Recalculate invoice.balance_due = total_amount - amount_paid
4. Set invoice status based on balance_due (paid if 0, partial if > 0)

### This runs inside the same Prisma transaction as the invoice creation.

---

## C4 — Held Cart Stock Validation on Resume

### Fix: validate stock on cart resume

When a held cart is activated (switched to):
1. For each cart_item, check current stock_qty of the item
2. If stock_qty < cart_item.qty → show warning badge on that line
3. If stock_qty = 0 → show red "out of stock" badge
4. Cashier can remove or adjust quantity
5. At checkout, final stock check again (belt and suspenders)

### No DB changes needed — this is a frontend check with API validation.

---

## C5 — Trade-in Offsets Entire Cart Total

### Updated trade-in Scenario B logic

Invoice structure for Scenario B:
```
Invoice line items:
├── New device: Samsung Galaxy A54 — 65,000 DZD
├── Phone case — 2,000 DZD
├── Screen protector — 1,500 DZD
├── SUBTOTAL: 68,500 DZD
├── Trade-in credit: iPhone 11 (Working) — -35,000 DZD
├── TOTAL DUE: 33,500 DZD
```

### Implementation
- Trade-in value is stored as a negative line on the invoice (item_type: 'tradein_credit')
- Total due = subtotal - trade-in credit
- If trade-in value > subtotal → store pays customer the difference in cash (logged as outgoing payment)

---

## C6 — WhatsApp Toggle on POS Checkout

### Fix: add toggle to checkout flow

- Default: OFF for POS sales (configurable in store settings)
- Checkout UI shows: "☐ Send receipt via WhatsApp"
- If toggled on → send WhatsApp after checkout
- If toggled off → no message sent
- Store setting: `default_whatsapp_on_sale: boolean` (default: false)

### For repairs: WhatsApp is ALWAYS sent (no toggle). Ticket created and Ready for pickup are mandatory triggers.

---

# 5. Database Schema Red Flag Fixes (Section F)

## F1 — Polymorphic Item References

### Decision: keep polymorphic pattern but add safeguards

The polymorphic `item_type + item_id` pattern stays because creating a single `inventory_items` table would force products, parts, and devices (which have very different fields) into an ugly inheritance pattern.

### Safeguards
1. CHECK constraint on item_type:
   ```sql
   CHECK (item_type IN ('product', 'part', 'device'))
   ```
2. Application-level validation: every function that writes a polymorphic reference validates that item_id exists in the corresponding table
3. Reconciliation job (A7) checks for orphaned references every 6 hours
4. NEVER cascade delete products/parts/devices — use soft delete (is_archived)

---

## F2 — Invoice Number Race Condition

### Fix: use PostgreSQL advisory lock

```sql
-- When generating invoice number:
SELECT pg_advisory_xact_lock(store_id); -- lock per store
UPDATE document_sequences 
  SET last_number = last_number + 1 
  WHERE store_id = ? AND type = 'invoice' AND year = ? AND month = ?
  RETURNING last_number;
```

### Advisory lock is released automatically at transaction end. No deadlock risk because we lock per store (each store has its own sequence).

---

## F3 — No Hard Deletes on Critical Records

### Soft delete tables (add `is_archived: boolean, default false`)
- customers
- products
- parts
- devices
- services
- suppliers
- users

### Tables that are NEVER deleted (immutable audit trail)
- invoices
- payments
- stock_movements
- customer_debt_transactions
- repair_status_history
- whatsapp_logs
- activity_logs
- cash_register_sessions
- reconciliation_logs

### Hard delete allowed (non-critical, user-facing)
- carts (status = cancelled or completed only)
- cart_items (when cart is cancelled)

---

## F4 — Required Composite Indexes

```sql
-- FIFO consumption (most critical query)
CREATE INDEX idx_stock_batches_fifo ON stock_batches (item_type, item_id, created_at ASC) WHERE qty_remaining > 0;

-- Invoice lookup by customer
CREATE INDEX idx_invoices_store_customer_status ON invoices (store_id, customer_id, status);

-- Repair ticket list
CREATE INDEX idx_tickets_store_status ON repair_tickets (store_id, status);

-- Stock movement history
CREATE INDEX idx_movements_item ON stock_movements (item_type, item_id, created_at DESC);

-- Customer phone lookup (most common search)
CREATE INDEX idx_customer_phones_number ON customer_phone_numbers (phone_number);

-- Invoice number uniqueness
CREATE UNIQUE INDEX idx_invoice_number ON invoices (store_id, invoice_number);

-- Repair ticket number uniqueness  
CREATE UNIQUE INDEX idx_ticket_number ON repair_tickets (store_id, ticket_number);

-- Debt balance lookup
CREATE INDEX idx_debt_balances_customer ON customer_debt_balances (customer_id, store_id);

-- Cash register session (one open per store)
CREATE UNIQUE INDEX idx_open_register ON cash_register_sessions (store_id) WHERE status = 'open';

-- Document sequences (one per store/type/year/month)
CREATE UNIQUE INDEX idx_doc_seq ON document_sequences (store_id, type, year, month);
```

---

## F5 — Debt Balance Consistency: Generated Column

### Fix: total_debt as generated column

```sql
ALTER TABLE customer_debt_balances 
  ADD COLUMN total_debt DECIMAL GENERATED ALWAYS AS (repair_debt + sale_debt + manual_debt) STORED;
```

### In Prisma schema
- Mark `total_debt` as `@default(0)` and compute it via raw SQL migration
- Prisma doesn't natively support generated columns — use a migration script

### Alternatively: use a PostgreSQL trigger

```sql
CREATE OR REPLACE FUNCTION update_total_debt()
RETURNS TRIGGER AS $$
BEGIN
  NEW.total_debt = NEW.repair_debt + NEW.sale_debt + NEW.manual_debt;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trg_total_debt
  BEFORE INSERT OR UPDATE ON customer_debt_balances
  FOR EACH ROW EXECUTE FUNCTION update_total_debt();
```

---

## F6 — FIFO Batch Audit Trail

### Fix: keep merge behavior but ensure audit trail via stock_movements

Every purchase that merges into an existing batch STILL creates a stock_movement record:

```
stock_movements for a merged purchase:
├── item_type: 'part'
├── item_id: 42
├── batch_id: 7 (the merged-into batch)
├── movement_type: 'purchase'
├── qty_change: +10
├── cost_price_snapshot: 3000
├── purchase_invoice_id: 15 (the specific purchase)
├── created_at: now
```

This means: even though batch #7 now contains units from multiple purchases, the stock_movements table shows exactly which purchase contributed which quantity. The batch is the cost bucket; the movements are the audit trail.

---

## F7 — Company vs Store Isolation

### Middleware enforcement pattern

```
API Request Flow:
├── 1. JWT middleware → extract company_id, user_id
├── 2. Load user → get allowed_store_ids[]
├── 3. Extract store_id from request (header, query, or body)
├── 4. Validate: store_id IN allowed_store_ids AND store.company_id = company_id
├── 5. Create scoped Prisma client with (company_id, store_id)
├── 6. Pass scoped client to route handler
```

### Tables keyed by company_id
- companies
- users (belong to company)
- stores (belong to company)
- company_subscriptions
- plans

### Tables keyed by store_id (most tables)
- customers, repair_tickets, invoices, payments, products, parts, devices, services
- suppliers, purchase_invoices, stock_batches, stock_movements
- carts, sales, whatsapp_sessions, whatsapp_templates
- cash_register_sessions, expense_categories, expenses
- document_sequences

### Tables keyed by both (cross-reference)
- user_store_access (company_id + user_id + store_id)

---

# 6. Performance & Scalability Fixes (Section G)

## G1 — WhatsApp Session Pool

### Architecture

```
WhatsApp Worker (separate Docker container):
├── Session pool: max 5 concurrent Chromium instances
├── Message queue: PostgreSQL-based (no Redis needed for v1)
├── On message queued → check if store has active session
│   ├── Yes → send immediately
│   └── No → initialize session, send, then schedule teardown after 10 min idle
├── Resource limits: 2GB RAM max for WhatsApp container
├── If pool full → queue message, process when session slot opens
```

### New DB table

```
whatsapp_message_queue
├── id (PK)
├── store_id (FK)
├── phone_number
├── message_body
├── trigger: ticket_created | ready_for_pickup | sale_receipt
├── status: pending | processing | sent | failed
├── attempts (default: 0, max: 3)
├── error_message (nullable)
├── created_at
├── processed_at (nullable)
```

---

## G2 — PDF Generation Optimization

### Fix: use HTML-based receipts for thermal printers, PDF for A4 documents

Two document rendering paths:
1. **Thermal receipt** (POS sale, repair pickup) → HTML template rendered in browser → `window.print()` to thermal printer. No PDF generation needed. Instant.
2. **A4 document** (received-device ticket, debt statement, reports) → PDF generated server-side with Puppeteer or `@react-pdf/renderer`

### For server-generated PDFs: background queue

```
pdf_generation_queue
├── id (PK)
├── document_type: receipt | ticket | report | debt_statement
├── reference_id (invoice_id or ticket_id or report params)
├── status: pending | processing | completed | failed
├── file_path (nullable, set on completion)
├── created_at
├── completed_at (nullable)
```

- Most receipts use the HTML path (instant, no queue)
- PDF queue only for A4 documents and report exports
- Process queue with a simple setInterval worker (no BullMQ needed for v1)

---

## G3 — Prisma Singleton Pattern

### Implementation in Next.js

```javascript
// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma = globalForPrisma.prisma ?? new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query'] : [],
});

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}
```

### PostgreSQL connection settings
```
# postgresql.conf
max_connections = 200

# Prisma connection string
DATABASE_URL="postgresql://...?connection_limit=20&pool_timeout=10"
```

---

## G4 — Query Performance: Mandatory Date Ranges

### Fix: every list page has a default date range

- Default: current month
- Max range: 3 months for transaction-heavy tables (stock_movements, payments, invoices)
- No "all time" option on: stock_movements, payments, invoices, customer_debt_transactions
- "All time" allowed on: customers, products, repair_tickets (with pagination, limit 50)

### Add `created_at` index on all high-volume tables
```sql
CREATE INDEX idx_invoices_created ON invoices (store_id, created_at DESC);
CREATE INDEX idx_payments_created ON payments (store_id, created_at DESC);
CREATE INDEX idx_movements_created ON stock_movements (store_id, created_at DESC);
CREATE INDEX idx_debt_txns_created ON customer_debt_transactions (customer_id, created_at DESC);
```

---

## G5 — Cloudflare Free Tier as Reverse Proxy

### Setup
1. Register domain on Cloudflare (free)
2. Point domain to home server IP (A record, proxied through Cloudflare)
3. Cloudflare handles: SSL termination, static asset caching, DDoS protection
4. Remove Let's Encrypt — Cloudflare handles SSL end-to-end
5. Nginx becomes a simple reverse proxy to Next.js (no SSL config needed)

### Nginx config simplification
```nginx
server {
    listen 80;
    server_name repaire.dz;
    
    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

### Benefits
- Static assets (JS, CSS, images) cached at Cloudflare edge globally
- Page load speed significantly improved for users across Algeria
- Free DDoS protection
- Free SSL certificate (no Let's Encrypt renewal management)
- Zero cost

---

# 7. Additional MVP Features Added

## Trial period updated
- Changed from 7 days to 14 days
- All features unlocked during trial
- Warning banner shown starting day 10

## WhatsApp POS sale toggle
- Store setting: `default_whatsapp_on_sale` (default: false)
- Checkout UI toggle: "Send receipt via WhatsApp"
- Repair WhatsApp triggers remain mandatory (no toggle)

---

# 8. Updated Build Phases

Phase 1: Foundation (unchanged)
- Next.js, DB, auth (with refresh token rotation), tenant isolation middleware, store model, roles, layout, i18n, Prisma singleton

Phase 2: Customers + Catalog (updated)
- Customer CRUD, groups, debt, assets, device catalog, repair problems
- Global search (Cmd+K) — add here since it touches customers + products

Phase 3: Inventory + Suppliers (updated)
- Products, parts, services, devices, FIFO, suppliers, purchase invoices
- Manual adjustments, stock count sessions
- Barcode scanning support on product/part records
- Expense categories + expenses table

Phase 4: Repair Tickets (updated)
- Wizard, statuses, parts/services, technician, notes, checklist
- Warranty tracking (query + warning banner + warranty_original_ticket_id field)
- Deposit handling

Phase 5: POS Sales + Payments (updated)
- Cart, checkout (with barcode scanning), payments, debt, refunds, trade-in
- Cash register sessions (open/close/daily count)
- Held cart stock validation on resume
- WhatsApp toggle on POS sale

Phase 6: Documents + Reports + WhatsApp (updated)
- PDF for A4 docs, HTML for thermal receipts
- Reports (including net profit with expenses)
- WhatsApp with abstraction layer + wa.me fallback
- Settings, audit log
- Denormalized counter reconciliation cron job

Phase 7: SaaS + Super Admin (updated)
- Plans (14-day trial, single-store, multi-store)
- Subscription activation, read-only mode, grace period (7 days)
- Super admin panel
- Demo/sandbox tenant (read-only, resets nightly)

---

# 9. New Tables Summary (added by fixes)

```
refresh_tokens — JWT refresh token rotation (A1)
cash_register_sessions — daily cash open/close (B2)
expense_categories — expense types per store (B6)
expenses — expense records (B6)
whatsapp_message_queue — message queue for WhatsApp worker (G1)
reconciliation_logs — denormalized counter drift detection (A7)
```

## Modified tables

```
repair_tickets — added: warranty_original_ticket_id (nullable FK)
store_settings — added: default_whatsapp_on_sale (boolean, default false)
whatsapp_logs — added status enum value: 'manual_link'
customer_debt_balances — total_debt becomes generated column (trigger-computed)
```

---

# 10. Items Deferred to v2 (NOT in MVP)

- Customer-facing public repair tracking page (D1)
- Multi-store stock transfer (D2)
- Repair photo timeline per status change (D3)
- Automated low-stock WhatsApp alert to Admin (D4)
- Customer loyalty / repeat customer pricing (D5)
- Technician mobile-optimized view (D6)
- CSV import for customers and products (E3)
- Automated payment gateway for subscriptions
- SMS fallback for WhatsApp

---

# 11. Summary of All Changes vs Original Architecture

| Area | Original Decision | Updated Decision | Reason |
|------|-------------------|------------------|--------|
| Technician payments | Any role | Cashier + Manager + Admin only | Financial accountability |
| Manual debt adjustment | Any role | Manager + Admin only | Prevent unauthorized write-offs |
| Trade-in offset scope | Unspecified | Entire cart total | Real shop behavior |
| WhatsApp on POS sale | Always sent | Toggle at checkout (default OFF) | Avoid customer spam + bans |
| Free trial duration | 7 days | 14 days | Need full business cycle |
| Expense tracking | Not included | Added to MVP | Net profit accuracy |
| Cash register sessions | Not included | Added to MVP | Day-one shop owner need |
| Barcode scanning | Not included | Added to MVP | POS usability |
| Global search | Not included | Added to MVP | Staff efficiency |
| Warranty tracking | Field only | Query + warning + linking | Day-one need |
| JWT auth | Basic JWT | Refresh token rotation | Security |
| Tenant isolation | Not specified | Prisma middleware auto-inject | Critical security |
| Invoice numbering | Simple counter | Advisory lock | Race condition prevention |
| Hard deletes | Allowed | Soft delete on all critical tables | Data integrity |
| PDF receipts | Always PDF | HTML for thermal, PDF for A4 | Performance |
| Customer total_debt | Application computed | DB trigger/generated column | Consistency guarantee |
| WhatsApp architecture | Direct send | Queue + session pool + wa.me fallback | Reliability + scalability |
| Infrastructure | Nginx + Let's Encrypt | Cloudflare free + Nginx | Performance + security |

---

End of fixes document.
Next step: produce the full database schema incorporating all these changes.
