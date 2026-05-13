# REPAIRE — Super Admin Dashboard Build Prompt

## Overview

Build a complete Super Admin dashboard for **REPAIRE**, a multi-tenant repair shop management SaaS. The dashboard allows super admins to manage tenants (companies) and the device catalog.

**Stack**: Next.js 16.2.4 + React 19.2.4 + Prisma 7 + PostgreSQL + Tailwind CSS v4 + next-intl v4 + TypeScript 5

**Existing files**:
- Prisma schema: `prisma/schema.prisma` (full schema with all models)
- UI components: `src/components/ui/` (Button, Card, Dialog, Input, Select, Badge)
- Layout components: `src/components/layout/` (Sidebar, Topbar)
- Catalog actions: `src/features/catalog/actions/catalog.actions.ts`
- Catalog browser: `src/features/catalog/components/CatalogBrowser.tsx`
- Super admin structure: `src/app/super-admin/` (already exists with login pages)

## What to Build

### 1. Super Admin Layout

Create a dedicated super admin layout at `src/app/super-admin/dashboard/layout.tsx` with:
- A clean, professional sidebar navigation (dark theme, same style as the main app sidebar)
- Top bar with super admin user info and logout
- The sidebar should have these sections:

**Tenant Management**
- Companies (list, create, edit, archive)
- Stores (per company)
- Users (per company, create/edit/archive, role management)
- Subscriptions (plan management, status changes)

**Catalog Management**  
- Categories (CRUD, reorder)
- Brands (CRUD per category, upload logo)
- Model Families (CRUD per brand)
- Device Models (CRUD per family, bulk edit)
- Model Variants (view/edit per model)
- Model Images (upload/remove)

**System**
- Audit Log (view all system actions)
- Health Checks

### 2. Companies Page (`/super-admin/dashboard/companies`)

Display a table of ALL companies with:
- Company name, email, phone, creation date
- Store count, user count
- Subscription status (trial/active/grace/read_only/cancelled/suspended) with color-coded badges
- Actions: Edit, Archive/Restore, Impersonate

**Create/Edit Company dialog** with:
- Name (required), address, phone, email
- Logo URL (optional)

**Company Detail page** (`/super-admin/dashboard/companies/[id]`) showing:
- Company info card
- Stores list (name, address, phone, status)
- Users list (name, email, role, status) with role badges
- Subscription info (plan, status, start/end dates)
- Quick actions: Add Store, Add User, Manage Subscription, Archive Company

### 3. Stores Management

**Stores list** on company detail page showing:
- Store name, address, phone
- Status badge
- Actions: Edit, Archive

**Create/Edit Store dialog** with:
- Name (required)
- Address, phone

### 4. Users Management

**Users list** on company detail page showing:
- Name, email, role (Admin/Manager/Cashier/Technician) with color-coded badges
- Status (active/inactive)
- Language preference
- Actions: Edit, Archive, Reset Password

**Create/Edit User dialog** with:
- Name (required)
- Email (required, unique per company)
- Password (on create only, with show/hide toggle)
- Role (dropdown: Admin, Manager, Cashier, Technician)
- Language (FR/AR/EN)

### 5. Subscriptions Management

**Subscription section** on company detail page:
- Current plan (trial/single_store/multi_store)
- Status (trial/active/grace/read_only/cancelled/suspended)
- Start date, end date
- Payment model (yearly/lifetime)

**Change Subscription dialog** with:
- Plan (dropdown)
- Status (dropdown)
- Payment model
- Start/end dates

### 6. Catalog Management — Full CRUD

**Categories list** (`/super-admin/dashboard/catalog/categories`):
- Table showing key, nameFr, nameAr, nameEn, sortOrder, status
- Inline edit for sortOrder
- Create/Edit dialog with all 3 language name fields

**Brands list** (`/super-admin/dashboard/catalog/brands`):
- Filterable by category
- Table showing brand name, category, logo preview, model families count, status
- Logo upload (paste URL → shows preview)
- Create/Edit dialog with name, category, logoUrl

**Model Families list** (`/super-admin/dashboard/catalog/families`):
- Filterable by brand
- Table showing name, brand, models count, status
- Create/Edit dialog

**Device Models grid** (`/super-admin/dashboard/catalog/models`):
- Filterable by family
- Grid/card view showing model image, name, specs summary, variants count
- Click to open detail/edit panel
- Edit dialog with all fields (name, releaseYear, imageUrl, specs as JSON editor)
- Image URL field with live preview
- Delete with confirmation

**Model Variants** (inside model detail):
- Table of all variants
- Add variant dialog (name, processor, RAM, storage, color)
- Delete with confirmation

### 7. Catalog Image Management

For models with `imageUrl`, show a **live preview** in the edit form. Allow:
- Paste URL → shows preview with the current image
- Remove image (set to null)
- No file upload — images are URL-based (stored externally on GSMArena, etc.)

For brands with `logoUrl`, same live preview pattern.

### 8. Audit Log (`/super-admin/dashboard/audit`)

Read-only table showing:
- Timestamp
- User (name + email)
- Action
- Entity type
- Entity ID
- Details (expandable JSON)
- Filterable by date range, user, action type

### 9. Dashboard Home (`/super-admin/dashboard`)

Stats cards showing:
- Total companies (active/trial/total)
- Total stores
- Total users (by role breakdown)
- Total device models in catalog
- Recent registrations (last 7 days)
- Subscription status breakdown (pie/donut chart)

## Design Guidelines

- Use the existing design system CSS variables (`--bg-surface`, `--text-primary`, `--border`, `--primary`, etc.)
- English language only for the super admin panel
- Use the existing `Dialog`, `Button`, `Card`, `Input` components from `src/components/ui/`
- Dark sidebar with gradient (same style as main app sidebar)
- Tables should be clean, responsive, with hover states
- All CRUD actions should use dialogs (not separate pages) except for detail views

## Technical Notes

1. All server actions go in `src/features/super-admin/actions/`
2. All components go in `src/features/super-admin/components/`
3. Pages go in `src/app/super-admin/dashboard/`
4. Use the existing `prisma` client from `src/lib/db/`
5. Use the existing session/auth from `src/lib/auth/session.ts`
6. Create a separate auth check for super admin (check `SuperAdminUser` table)
7. All forms should use `react-hook-form` + `zod` for validation
8. Use `useTransition` for loading states on all mutations
9. All delete operations should have a confirmation dialog
10. Toast notifications for success/error feedback

## File Structure to Create

```
src/app/super-admin/dashboard/
  layout.tsx
  page.tsx
  companies/
    page.tsx
    [id]/page.tsx
  catalog/
    categories/page.tsx
    brands/page.tsx
    families/page.tsx
    models/page.tsx

src/features/super-admin/
  actions/
    companies.actions.ts
    stores.actions.ts
    users.actions.ts
    subscriptions.actions.ts
    catalog.actions.ts
    audit.actions.ts
  components/
    SuperAdminSidebar.tsx
    SuperAdminLayout.tsx
    CompanyForm.tsx
    CompanyDetail.tsx
    StoreForm.tsx
    UserForm.tsx
    SubscriptionForm.tsx
    CategoryForm.tsx
    BrandForm.tsx
    FamilyForm.tsx
    ModelForm.tsx
    VariantForm.tsx
    AuditLogTable.tsx
    StatsCards.tsx
```

## Start with

Build it one page at a time:
1. First: Super admin layout + sidebar + dashboard home with stats
2. Then: Companies list + detail page
3. Then: Stores, Users, Subscriptions management
4. Then: Catalog CRUD (categories → brands → families → models)
5. Then: Audit log
6. Finally: Polish, error handling, loading states
