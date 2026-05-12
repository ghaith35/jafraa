# REPAIRE — Full Design Overhaul Prompt for DeepSeek V4 Pro

## Context

You are redesigning **REPAIRE**, a multi-tenant repair shop management SaaS for the Algerian market. It handles: repair ticket workflow (receive → diagnose → approve → repair → pickup), cash-only POS, inventory (products/parts/services), customer management, customer debt, invoices, PDFs, WhatsApp notifications, and multi-store support.

**Stack**: Next.js 16.2.4 + React 19.2.4 + Prisma 7 + PostgreSQL + Tailwind CSS v4 + next-intl v4 + TypeScript 5

**Languages**: French (default), Arabic (RTL), English

**Currency**: DZD (Algerian Dinar) — displayed as `X,XXX DZD`

**Target users**: Algerian repair shop owners, managers, cashiers, and technicians. These are NOT tech-savvy users — the UI must be intuitive, fast, and forgiving.

---

## Current Design Weaknesses (Fix ALL of these)

### 1. No brand identity / personality
- Login page is literally centered text + a bordered form box. No logo, no illustration, no gradient, no feeling.
- The logo in the sidebar is just "RE" in blue + "PAIRE" — generic.
- A repair shop app should feel **tactile, industrial, trustworthy, modern** — not like a generic Bootstrap admin panel.
- Add a real wordmark/brand treatment. Add subtle decorative elements (tool icons, gear patterns, diagonal lines).

### 2. Flat, border-heavy cards everywhere
- Every surface is `border border-border bg-card p-5 shadow-sm`. It's repetitive and visually boring.
- Replace with a mix of: frosted/glass cards (backdrop-blur with subtle background), gradient accent cards, cards with colored icon headers, cards with background patterns.
- Not every card needs a visible border — use elevation/depth instead (layered shadows, different background tints).

### 3. Typography is flat and lifeless
- Base font 14px is too small for a business app used by shop workers all day.
- Headings are all just `font-semibold` — no expressive scale.
- No contrast between display text, section titles, card titles, body, and metadata.
- Create a real type scale: 32/24/20/16/14/13/12px with distinct weights.
- Use tighter tracking for headings, wider for body.

### 4. Table-heavy layouts
- Every list page (customers, repairs, inventory, etc.) is a bordered table or bordered card list.
- Tables are fine for data but modern dashboards use: kanban boards for repairs, grid cards with background icons, horizontal stat bars, inline quick-actions.
- Break out of the table mindset — each section should have the best layout for its data type.

### 5. No micro-interactions or feedback
- Buttons scale slightly on click (good), but there's barely any other feedback.
- Add: smooth page transitions, skeleton loading states (already have skeleton.tsx but not widely used), toast animations, status change animations, hover scale/glow on primary actions, progress indicators on multi-step flows.

### 6. No visual hierarchy
- Headers, content, sidebars, and actions all live in similarly bordered boxes.
- Everything has the same visual weight. Users can't glance and understand what's important.
- Use: larger section titles, accent color for primary info, muted colors for secondary, background color blocks for grouping, icon + color coding for status sections.

### 7. Sidebar is a generic dark admin template
- Works but looks like every other admin panel (2018 era).
- Redesign with: auto-collapse on small desktop screens, subtle active indicator (not just background color), cleaner spacing, lighter variant option, tooltips in collapsed mode, smoother expand/collapse animation.

### 8. Login page is an afterthought
- Just a card in the center of a blank page. No illustration, no brand story, no trust signal.
- Add: background gradient or pattern, app logo/wordmark, a tagline, maybe a small illustration of a repaired device.
- Make it feel like entering a professional tool, not a spreadsheet.

### 9. Empty states are text-only
- The EmptyState component is an icon in a circle + text. That's the minimum.
- Add: contextual illustrations (different for each section), clear call-to-action, maybe a tip or helpful message. Use simple inline SVG illustrations.

### 10. No consistent spacing system
- Some pages use `p-4 md:p-5`, others use `px-6 py-5`, others use `gap-5`. Inconsistent.
- Define a strict spacing scale for the app (page padding, card padding, section gap, element gap) and enforce it everywhere.

### 11. Not mobile-optimized enough
- The app works on mobile but feels cramped — tables overflow, buttons are too small, touch targets too small.
- This app WILL be used on tablets and phones in the shop. Every page must feel native on mobile.

### 12. The color palette is safe but boring
- Primary blue (#1d4ed8) is very corporate. Consider a more distinctive palette.
- Since it's a repair shop brand, potentially: deep orange/amber (tools, warmth, urgency), or teal/cyan (clean, medical-precision), or a dark green (trust, money).
- Whatever palette is chosen, it should be distinctive enough that a user instantly recognizes REPAIRE.
- The dark sidebar is fine but could use a subtle gradient or tint.

---

## What to Deliver

### A. New Design System (CSS variables in globals.css)
Redesign ALL CSS variables in `:root` and `.dark`:
- Color palette (primary, secondary, accent, surface tiers, status colors, KPI colors)
- Typography scale (sizes, line heights, font weights)
- Spacing scale (page, card, section, element)
- Shadow system (keep the layered approach but refine)
- Border radius scale
- Animation timing tokens

### B. Sidebar Redesign (`src/components/layout/Sidebar.tsx`)
- Modern look with smooth collapse animation
- Tooltips when collapsed
- Better active state indicator
- Optional: subtle gradient background instead of flat dark
- Mobile drawer stays but animates better

### C. Dashboard Redesign (`src/app/(dashboard)/dashboard/page.tsx`)
- The 4 KPI cards should feel like real stats (background icons, gradient overlays, trend indicators)
- Charts section should be visually integrated, not just bordered boxes
- The table and activity feed should feel like modern SaaS (Stripe, Linear, Vercel-inspired)
- The bottom bar (critical stock alert + quick actions) should be a floating/attached element

### D. Login Page (`src/app/(auth)/login/page.tsx`)
- Full redesign with brand presence
- Background decoration
- Proper logo/wordmark
- Professional, trustworthy feel

### E. Card & Surface System
- Not every card needs a border. Create elevation tiers: flat (no border, subtle bg), raised (shadow, no border), bordered (for forms/tables), accent (colored top border or left border).
- Every surface should feel intentional, not default.

### F. List Pages (Customers, Repairs, Inventory, etc.)
- Move away from pure table mindset where appropriate
- Use stat cards at top, then appropriate data display
- Better search/filter integration
- Modern row design (not just bordered rows)

### G. Empty States
- Replace generic icon+text with contextual content
- Add simple inline SVG illustrations for different sections

### H. Micro-interactions
- Page transitions (fade/ slide)
- Loading states (skeleton shimmer)
- Button hover/active states (scale, glow, ripple)
- Card hover (lift, border glow)
- Status change animations

### I. Fix ANY bugs found
- While making visual changes, if you encounter any rendering issues, TypeScript errors, layout bugs, or logic issues, fix them.
- Run `npm run typecheck` and `npm run lint` and fix all errors.
- Run `npm run build` and ensure clean build (currently 35 routes).

### J. RTL & i18n
- All design changes must respect RTL (Arabic). Use logical CSS properties (`margin-inline-start`, `padding-inline-end`, etc.).
- Text must use `next-intl` translation keys or `t()` — no hardcoded French text in components.
- The design should feel equally good in French (LTR) and Arabic (RTL).

---

## Technical Constraints

1. **DO NOT** change any business logic in server actions, database queries, or API routes.
2. **DO NOT** remove or rename CSS variables that might be referenced outside `globals.css`. Add new ones, keep old ones working.
3. **DO NOT** break the tenant isolation rules (companyId/storeId scoping).
4. **DO NOT** change the Prisma schema or database structure.
5. **DO NOT** remove any existing pages or routes.
6. **DO** use Tailwind CSS v4 utilities (`@theme inline`, new v4 syntax).
7. **DO** use lucide-react for icons.
8. **DO** keep the `@theme inline` section in globals.css for Tailwind v4 compatibility.
9. **DO** keep the dark mode system working.
10. **DO** keep all translation strings in the existing i18n message files — add new keys only if necessary.
11. **DO** make sure the design is fully functional in all 3 languages (FR, AR, EN).
12. **DO** ensure all existing component props and interfaces remain compatible.

---

## Design Inspiration References

The design should feel like a blend of:
- **Linear** (clean, spaced, typographic, minimal color)
- **Stripe** (trustworthy, blue-ish but warm, great micro-interactions)
- **Notion** (sidebar treatment, block-based layouts)
- A touch of **industrial/tool aesthetic** (since it's a repair shop)

The primary feeling should be: "This is a professional, modern tool I can trust with my business."

---

## How to Proceed

1. Start by reading `globals.css` fully — understand every CSS variable.
2. Read the layout components: `DashboardShell.tsx`, `Sidebar.tsx`, `Topbar.tsx`, `NavItem.tsx`.
3. Read the shared components: `PageHeader.tsx`, `EmptyState.tsx`, `StatusBadge.tsx`, `Pagination.tsx`.
4. Read the UI components: `button.tsx`, `card.tsx`, `badge.tsx`, `dialog.tsx`, `input.tsx`, `select.tsx`.
5. Read the dashboard page: `src/app/(dashboard)/dashboard/page.tsx`.
6. Read the login page: `src/app/(auth)/login/page.tsx`.
7. Read the customer list page: `src/app/(dashboard)/dashboard/customers/page.tsx`.
8. Read the customer detail page: `src/app/(dashboard)/dashboard/customers/[id]/page.tsx`.
9. Read the charts component: `src/components/ui/charts.tsx`.
10. Plan the full design system overhaul.
11. Implement changes file by file, starting with `globals.css` (tokens), then layout, then pages.
12. Run `npm run typecheck && npm run lint && npm run build` to verify nothing is broken.

---

## Success Criteria

- The app should look and feel **modern, professional, and distinctive**
- Users should feel confident and comfortable using it for 8 hours/day
- The brand should be memorable (not "another admin panel")
- All 3 languages (FR/AR/EN) should look equally polished
- The design should work great on desktop, tablet, and mobile
- `npm run build` should pass with 0 errors
- `npm run typecheck` should pass with 0 errors
- `npm run lint` should pass with 0 errors
