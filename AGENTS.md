<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Tenant Isolation Rules

Every server action and page MUST follow these tenant scoping rules:

## 1. Always get the session
```ts
const session = await getSession();
if (!session) return { error: "Non autorisé" }; // or redirect
```

## 2. Filter READ queries by companyId
For models that HAVE a `companyId` column, ALWAYS add to `where`:
```ts
where: { companyId: session.companyId }
```

## 3. Filter READ queries by storeId (defense-in-depth)
Even when filtering by companyId, also add storeId:
```ts
where: { storeId, companyId: session.companyId }
```

## 4. Set companyId on CREATE
```ts
data: { companyId: session.companyId, ... }
```

## 5. Models with companyId
These models have a `companyId` column and MUST be scoped:
- Customer, CustomerGroup, CustomerPhone
- RepairTicket, RepairTicketPart, RepairInvoice
- Estimate, CustomerApprovalLog
- PosSale, CashRegisterSession, CashMovement
- Refund, RefundLine
- Supplier, PurchaseInvoice, PurchaseOrder
- StockBatch, StockMovement
- AuditLog, DeviceCatalogSuggestion
- Expense, ExpenseCategory
- Cart, StockAdjustment, TradeinPurchase

## 6. Models scoped by storeId only (no companyId)
These rely on storeId + session.storeIds for isolation:
- Product, Part, Service
- InventoryCategory, ServiceCategory, ServicePackage
- WhatsAppNotificationLog

## 7. Cash session queries
The `CashRegisterSession` model HAS companyId — ALWAYS include it:
```ts
where: { storeId, companyId: session.companyId, status: CashSessionStatus.opened }
```

## 8. Role-based permission check
```ts
if (!hasPermission(session.role, "expenses:manage")) { ... }
```

## 9. Middleware
`src/middleware.ts` handles JWT existence check for all non-public routes. Actual JWT validation and tenant scoping happen in server actions/pages.
