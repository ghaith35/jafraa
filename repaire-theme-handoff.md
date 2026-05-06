# REPAIRE — Design System Implementation Handoff
> For a coding agent implementing the new theme in an existing Next.js / React / Tailwind v4 codebase.
> Do not summarize. Do not skip steps. Implement exactly as specified.

---

## 1. Theme Overview

### Design Direction

REPAIRE is a multi-tenant SaaS for Algerian repair shops. The previous theme was a generic admin dashboard — white cards, blue primary, dark slate sidebar, zinc neutrals. It looked like every other shadcn starter kit. It did not communicate repair-shop identity, urgency, or operational density.

The new theme keeps **full structural compatibility** with the existing shadcn-new-york zinc base, but makes targeted upgrades that transform the feel:

- **Brand identity via sidebar**: the sidebar remains `#1e293b`/`#0f172a` (slate) for trust and professionalism, but the logo block gains a `#2563eb` accent square with a tool icon — making REPAIRE recognizable, not just "another app".
- **Semantic status color system**: every repair workflow status gets a distinct, meaningful color (not just "muted gray" for everything). Staff must be able to scan a ticket list and instantly read status. This is now possible.
- **Operational density**: cards use tighter internal spacing. Section headers are smaller (11–12px uppercase). Tables use 10px column headers. This fits more data on screen for cashiers and technicians without feeling cramped.
- **Domain-aware tokens**: instead of overloading `--destructive` for both errors and debt warnings and low stock, there are now explicit semantic tokens for repair statuses, POS cash states, inventory stock levels, debt severity, and WhatsApp actions.
- **Dark mode is first-class**: every token has a dark variant. The sidebar already works in dark mode via its fixed slate colors. The content area maps cleanly to the existing `dark:` Tailwind class.
- **RTL-safe**: no left/right directional hardcoding in components. Use `ms-auto`, `ps-`, `pe-` Tailwind utilities throughout. Arabic RTL layout inverts correctly with `dir="rtl"` on the root.
- **Print-safe**: receipt and print pages use `@media print` overrides. All semantic color tokens resolve to print-legible values (dark text on white, no background fills).

### What changed vs. old theme

| Area | Old | New |
|---|---|---|
| Status badges | All gray/muted | 7 distinct semantic colors |
| Notes/callouts | Plain textarea | Left-border accent block in primary blue |
| Ticket hero | Plain title text | Device icon + accent square |
| Debt warning | Generic red text | Pill badge with alert icon, always visible |
| Status stepper | Not present | Inline sidebar stepper, clickable |
| WhatsApp actions | Hidden in menu | Dedicated sidebar block, 3 quick-send buttons |
| Estimate summary | Flat list | Contained muted block with total row |
| POS item cards | Basic list | Grid cards with stock-state color coding |
| Inventory low-stock | Text label | Amber border + badge on card |
| Reports KPIs | Large decorative cards | Compact metric blocks, 4-up grid |

---

## 2. Exact Design Tokens

Add all of the following to your global CSS file (e.g., `app/globals.css`). These extend — do not replace — your existing shadcn zinc tokens unless explicitly marked **REPLACE**.

### 2.1 Light Mode (`:root`)

```css
:root {
  /* ── Core (keep existing zinc shadcn tokens, add/override below) ── */
  --radius: 0.5rem;                        /* KEEP — no change */
  --background: #f8fafc;                   /* REPLACE: was #ffffff — slight warm page bg */
  --foreground: #09090b;                   /* KEEP */
  --card: #ffffff;                         /* KEEP */
  --card-foreground: #09090b;              /* KEEP */
  --popover: #ffffff;                      /* KEEP */
  --popover-foreground: #09090b;           /* KEEP */
  --primary: #1d4ed8;                      /* KEEP */
  --primary-foreground: #ffffff;           /* KEEP */
  --secondary: #f4f4f5;                    /* KEEP */
  --secondary-foreground: #09090b;         /* KEEP */
  --muted: #f4f4f5;                        /* KEEP */
  --muted-foreground: #71717a;             /* KEEP */
  --accent: #eff6ff;                       /* KEEP */
  --accent-foreground: #1d4ed8;            /* KEEP */
  --destructive: #ef4444;                  /* KEEP */
  --destructive-foreground: #ffffff;       /* KEEP */
  --border: #e4e4e7;                       /* KEEP */
  --input: #e4e4e7;                        /* KEEP */
  --ring: #1d4ed8;                         /* KEEP */

  /* ── Page surface ── */
  --surface-page: #f8fafc;                 /* NEW: content area background */
  --surface-card: #ffffff;                 /* NEW: alias for --card */
  --surface-panel: #fafafa;               /* NEW: right sidebar / sub-panels */
  --surface-raised: #ffffff;              /* NEW: modal, dropdown */
  --surface-sunken: #f4f4f5;             /* NEW: inset blocks (estimate summary, note bg) */

  /* ── Typography scale additions ── */
  --text-xs: 10px;
  --text-sm: 11px;
  --text-base: 12px;
  --text-md: 13px;
  --text-lg: 15px;
  --text-xl: 17px;
  --text-2xl: 22px;

  /* ── Shadow scale ── */
  --shadow-xs: 0 1px 2px 0 rgba(0,0,0,.04);
  --shadow-sm: 0 1px 3px 0 rgba(0,0,0,.08), 0 1px 2px -1px rgba(0,0,0,.06);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,.08), 0 2px 4px -2px rgba(0,0,0,.05);
}
```

### 2.2 Dark Mode (`.dark` or `@media (prefers-color-scheme: dark)`)

Use whichever dark mode strategy your app already applies. Append to the existing dark block:

```css
.dark {
  --background: #09090b;                   /* KEEP */
  --foreground: #fafafa;                   /* KEEP */
  --card: #18181b;                         /* KEEP */
  --card-foreground: #fafafa;              /* KEEP */
  --primary: #3b82f6;                      /* KEEP */
  --muted: #27272a;                        /* KEEP */
  --muted-foreground: #a1a1aa;             /* KEEP */
  --accent: #1e3a5f;                       /* KEEP */
  --accent-foreground: #93c5fd;            /* KEEP */
  --border: #27272a;                       /* KEEP */
  --input: #27272a;                        /* KEEP */

  /* ── Page surface (dark) ── */
  --surface-page: #09090b;
  --surface-card: #18181b;
  --surface-panel: #1c1c1f;
  --surface-raised: #18181b;
  --surface-sunken: #27272a;
}
```

### 2.3 Sidebar Tokens

These are fixed (not affected by light/dark toggle) because the sidebar is always dark slate:

```css
:root {
  --sidebar-bg: #1e293b;
  --sidebar-bg-dark: #0f172a;             /* used on dark mode root-level sidebar */
  --sidebar-fg: #f8fafc;
  --sidebar-muted: #334155;
  --sidebar-muted-fg: #94a3b8;
  --sidebar-accent: #2563eb;
  --sidebar-accent-fg: #ffffff;
  --sidebar-border: #334155;
  --sidebar-active-bg: #2563eb;
  --sidebar-active-fg: #ffffff;
  --sidebar-hover-bg: #334155;
  --sidebar-hover-fg: #f8fafc;
  --sidebar-badge-bg: rgba(255,255,255,0.15);
  --sidebar-badge-alert-bg: #ef4444;
  --sidebar-badge-fg: #ffffff;
  --sidebar-logo-icon-bg: #2563eb;
  --sidebar-logo-icon-fg: #ffffff;
  --sidebar-brand-accent: #93c5fd;        /* "PAIRE" in RE[PAIRE] wordmark */
  --sidebar-section-fg: #64748b;
  --sidebar-footer-border: #334155;
}
```

### 2.4 Repair Workflow Status Colors

These are the 7 repair ticket statuses. Each has a `bg`, `fg`, and `border` token. Use consistently in badges, table rows, stepper, and ticket hero.

```css
:root {
  /* received */
  --status-received-bg: #f4f4f5;
  --status-received-fg: #52525b;
  --status-received-border: #d4d4d8;

  /* in_diagnosis */
  --status-diagnosis-bg: #fef3c7;
  --status-diagnosis-fg: #92400e;
  --status-diagnosis-border: #fcd34d;

  /* waiting_customer_approval */
  --status-waiting-bg: #eff6ff;
  --status-waiting-fg: #1e40af;
  --status-waiting-border: #bfdbfe;

  /* in_repair */
  --status-inrepair-bg: #dcfce7;
  --status-inrepair-fg: #15803d;
  --status-inrepair-border: #86efac;

  /* ready_for_pickup */
  --status-ready-bg: #f0fdf4;
  --status-ready-fg: #16a34a;
  --status-ready-border: #bbf7d0;

  /* completed */
  --status-completed-bg: #f4f4f5;
  --status-completed-fg: #3f3f46;
  --status-completed-border: #d4d4d8;

  /* not_repaired */
  --status-norepair-bg: #fef2f2;
  --status-norepair-fg: #dc2626;
  --status-norepair-border: #fecaca;

  /* priority: urgent */
  --priority-urgent-bg: #fef2f2;
  --priority-urgent-fg: #dc2626;

  /* priority: normal */
  --priority-normal-bg: #f4f4f5;
  --priority-normal-fg: #71717a;
}

.dark {
  --status-received-bg: #27272a;
  --status-received-fg: #a1a1aa;
  --status-received-border: #3f3f46;

  --status-diagnosis-bg: #451a03;
  --status-diagnosis-fg: #fcd34d;
  --status-diagnosis-border: #92400e;

  --status-waiting-bg: #172554;
  --status-waiting-fg: #93c5fd;
  --status-waiting-border: #1e40af;

  --status-inrepair-bg: #052e16;
  --status-inrepair-fg: #86efac;
  --status-inrepair-border: #15803d;

  --status-ready-bg: #052e16;
  --status-ready-fg: #4ade80;
  --status-ready-border: #16a34a;

  --status-completed-bg: #27272a;
  --status-completed-fg: #a1a1aa;
  --status-completed-border: #3f3f46;

  --status-norepair-bg: #450a0a;
  --status-norepair-fg: #fca5a5;
  --status-norepair-border: #dc2626;

  --priority-urgent-bg: #450a0a;
  --priority-urgent-fg: #fca5a5;

  --priority-normal-bg: #27272a;
  --priority-normal-fg: #a1a1aa;
}
```

### 2.5 POS / Cash Session Colors

```css
:root {
  --pos-cash-in-bg: #f0fdf4;
  --pos-cash-in-fg: #15803d;              /* sales, payments received */
  --pos-cash-out-bg: #fef2f2;
  --pos-cash-out-fg: #dc2626;             /* refunds, expenses */
  --pos-neutral-bg: #f4f4f5;
  --pos-neutral-fg: #52525b;              /* opening balance */
  --pos-total-bg: #f8fafc;
  --pos-total-fg: #09090b;               /* session total row */
  --pos-change-fg: #16a34a;              /* change-to-give highlight */
  --pos-session-open-bg: #f0fdf4;
  --pos-session-open-fg: #15803d;
  --pos-session-open-dot: #22c55e;
  --pos-session-closed-bg: #fef2f2;
  --pos-session-closed-fg: #dc2626;
  --pos-discount-fg: #16a34a;            /* discount amount shown in green */
  --pos-item-out-opacity: 0.45;          /* out-of-stock item card opacity */
}

.dark {
  --pos-cash-in-bg: #052e16;
  --pos-cash-in-fg: #86efac;
  --pos-cash-out-bg: #450a0a;
  --pos-cash-out-fg: #fca5a5;
  --pos-neutral-bg: #27272a;
  --pos-neutral-fg: #a1a1aa;
  --pos-total-bg: #18181b;
  --pos-total-fg: #fafafa;
  --pos-change-fg: #4ade80;
  --pos-session-open-bg: #052e16;
  --pos-session-open-fg: #86efac;
  --pos-session-open-dot: #22c55e;
  --pos-session-closed-bg: #450a0a;
  --pos-session-closed-fg: #fca5a5;
  --pos-discount-fg: #4ade80;
}
```

### 2.6 Inventory Colors

```css
:root {
  --inv-ok-fg: #15803d;                   /* in stock */
  --inv-ok-bg: #f0fdf4;
  --inv-low-fg: #92400e;                  /* low stock warning */
  --inv-low-bg: #fef3c7;
  --inv-low-border: #f59e0b;             /* amber border on card */
  --inv-out-fg: #dc2626;                  /* out of stock */
  --inv-out-bg: #fef2f2;
  --inv-reserved-bg: #dcfce7;            /* reserved for repair */
  --inv-reserved-fg: #15803d;
  --inv-reorder-fg: #92400e;             /* below reorder threshold */
  --inv-reorder-bg: #fef3c7;
}

.dark {
  --inv-ok-fg: #86efac;
  --inv-ok-bg: #052e16;
  --inv-low-fg: #fcd34d;
  --inv-low-bg: #451a03;
  --inv-low-border: #92400e;
  --inv-out-fg: #fca5a5;
  --inv-out-bg: #450a0a;
  --inv-reserved-bg: #052e16;
  --inv-reserved-fg: #86efac;
  --inv-reorder-fg: #fcd34d;
  --inv-reorder-bg: #451a03;
}
```

### 2.7 Debt / Warning Colors

```css
:root {
  --debt-active-bg: #fef2f2;
  --debt-active-fg: #dc2626;             /* customer has outstanding debt */
  --debt-active-border: #fecaca;
  --debt-partial-bg: #fef3c7;
  --debt-partial-fg: #92400e;            /* partial payment, balance remaining */
  --debt-clear-bg: #f0fdf4;
  --debt-clear-fg: #15803d;              /* debt fully settled */
  --debt-icon: "ti ti-alert-circle";     /* always shown next to debt amount */
}

.dark {
  --debt-active-bg: #450a0a;
  --debt-active-fg: #fca5a5;
  --debt-active-border: #dc2626;
  --debt-partial-bg: #451a03;
  --debt-partial-fg: #fcd34d;
  --debt-clear-bg: #052e16;
  --debt-clear-fg: #86efac;
}
```

### 2.8 WhatsApp Colors

```css
:root {
  --wa-green: #22c55e;                   /* WhatsApp icon accent */
  --wa-sent-fg: #15803d;
  --wa-sent-bg: #f0fdf4;
  --wa-failed-fg: #dc2626;
  --wa-failed-bg: #fef2f2;
  --wa-pending-fg: #92400e;
  --wa-pending-bg: #fef3c7;
}
/* Dark mode: same fg values, dark bg variants */
.dark {
  --wa-sent-bg: #052e16;
  --wa-failed-bg: #450a0a;
  --wa-pending-bg: #451a03;
}
```

### 2.9 Report / KPI Colors

```css
:root {
  --kpi-revenue-fg: #1d4ed8;
  --kpi-revenue-bg: #eff6ff;
  --kpi-repairs-fg: #15803d;
  --kpi-repairs-bg: #f0fdf4;
  --kpi-debt-fg: #dc2626;
  --kpi-debt-bg: #fef2f2;
  --kpi-pending-fg: #92400e;
  --kpi-pending-bg: #fef3c7;
  --kpi-technician-fg: #7c3aed;          /* technician performance */
  --kpi-technician-bg: #f5f3ff;
  --kpi-trend-up: #16a34a;
  --kpi-trend-down: #dc2626;
  --kpi-trend-neutral: #71717a;
}

.dark {
  --kpi-revenue-bg: #172554;
  --kpi-repairs-bg: #052e16;
  --kpi-debt-bg: #450a0a;
  --kpi-pending-bg: #451a03;
  --kpi-technician-bg: #2e1065;
}
```

---

## 3. Tailwind v4 Integration

### 3.1 Where to put tokens

In Tailwind v4, CSS variables declared in `:root` are automatically available as `var(--token-name)`. For explicit `@theme inline` mapping, add the following to your `app/globals.css` inside the `@theme inline` block:

```css
@theme inline {
  /* Map semantic status colors as Tailwind utilities */
  --color-status-received: var(--status-received-fg);
  --color-status-diagnosis: var(--status-diagnosis-fg);
  --color-status-waiting: var(--status-waiting-fg);
  --color-status-inrepair: var(--status-inrepair-fg);
  --color-status-ready: var(--status-ready-fg);
  --color-status-completed: var(--status-completed-fg);
  --color-status-norepair: var(--status-norepair-fg);

  /* POS */
  --color-pos-in: var(--pos-cash-in-fg);
  --color-pos-out: var(--pos-cash-out-fg);
  --color-pos-change: var(--pos-change-fg);

  /* Inventory */
  --color-inv-ok: var(--inv-ok-fg);
  --color-inv-low: var(--inv-low-fg);
  --color-inv-out: var(--inv-out-fg);

  /* Surfaces */
  --color-surface-page: var(--surface-page);
  --color-surface-panel: var(--surface-panel);
  --color-surface-sunken: var(--surface-sunken);

  /* Sidebar (fixed slate) */
  --color-sidebar: var(--sidebar-bg);
  --color-sidebar-accent: var(--sidebar-accent);
}
```

### 3.2 Replace vs. extend

- **Replace**: `--background` (new value: `#f8fafc`) — update in `:root`, shadcn's white page bg was too stark.
- **Extend**: all `--status-*`, `--pos-*`, `--inv-*`, `--debt-*`, `--wa-*`, `--kpi-*` — pure additions, no conflicts.
- **Do not touch**: shadcn component tokens (`--card`, `--border`, `--ring`, `--radius`) — leave exactly as they are.

### 3.3 Using tokens in Tailwind classes

Since these are CSS variables, use them via arbitrary values where Tailwind utilities don't auto-map:

```tsx
// Badge background using status token
<span style={{ background: 'var(--status-inrepair-bg)', color: 'var(--status-inrepair-fg)' }} />

// Or create a thin utility wrapper if used frequently:
// In a cn() helper or Tailwind plugin
```

For frequently-used status/domain classes, consider creating a `lib/status.ts` helper (see Section 4 below).

---

## 4. Component Rules

### 4.1 App Shell

```
Layout: fixed sidebar (220px) + sticky topbar (48px) + scrollable content area
Background: var(--surface-page) on content, var(--sidebar-bg) on sidebar
Content inner: CSS Grid, 2 columns on detail pages (1fr 272px), 1 column on list/dashboard pages
No full-width card wrappers on page level — page bg itself IS the container
```

### 4.2 Sidebar

```
Background: var(--sidebar-bg) always (not affected by dark mode toggle)
Width: 220px fixed, no collapse on desktop MVP
Logo block: 
  - Icon square: 30x30px, bg var(--sidebar-logo-icon-bg), border-radius var(--radius)
  - Icon: ti-tool, 16px, color var(--sidebar-logo-icon-fg)
  - Wordmark: "RE" in var(--sidebar-fg), "PAIRE" in var(--sidebar-brand-accent)
Store selector: below logo, full width, bg var(--sidebar-muted), border 1px solid rgba(255,255,255,0.06)
Nav sections: 10px uppercase, color var(--sidebar-section-fg), letter-spacing 0.7px
Nav items: 
  - Default: color var(--sidebar-muted-fg)
  - Hover: bg var(--sidebar-hover-bg), color var(--sidebar-hover-fg)
  - Active: bg var(--sidebar-active-bg), color var(--sidebar-active-fg), font-weight 500
Nav badges: bg var(--sidebar-badge-bg), color var(--sidebar-badge-fg)
  - Alert badges (urgent count): bg var(--sidebar-badge-alert-bg)
Footer: border-top var(--sidebar-footer-border), user avatar 30px circle in sidebar-accent bg
RTL: sidebar stays on left in LTR, moves to right with dir="rtl" on <html> — use logical CSS props
```

### 4.3 Topbar

```
Height: 48px, bg var(--card), border-bottom 1px solid var(--border)
Left: back button (outlined, shadow-xs) + breadcrumb text
Center: global search input (max-width 320px), placeholder in French
Right: context indicators (session open/closed pill) + lang switcher + notification icon
Session indicator: pill shape, bg var(--pos-session-open-bg), fg var(--pos-session-open-fg), 
  dot var(--pos-session-open-dot), always visible for cashier role
Notification icon: badge dot in --destructive when unread
```

### 4.4 Cards

```
Background: var(--card)
Border: 1px solid var(--border)
Border-radius: var(--radius)
Box-shadow: var(--shadow-sm)
Card header: 
  - Padding: 12px 16px
  - Border-bottom: 1px solid var(--border)
  - Font: 12px, font-weight 600, uppercase optional for section labels
  - Left: icon (15px, color var(--muted-foreground)) + label
  - Right: action button (ghost or outlined, 11px)
Card body: padding 14px 16px unless overridden by table/list content
No nested cards. If you need a sunken section inside a card, use: 
  bg var(--surface-sunken), border-radius calc(var(--radius) - 1px), padding 10px 12px
```

### 4.5 Tables

```
Table layout: fixed (prevents overflow)
Column headers: 10px, font-weight 600, uppercase, letter-spacing 0.4px, color var(--muted-foreground)
  border-bottom: 1px solid var(--border), padding 8px 0
Rows: padding 10px 0, border-bottom 1px solid var(--border), font-size 12px
Last row: no border-bottom
Hover: bg var(--muted) on tr:hover
Primary cell (item name): font-weight 500, color var(--foreground)
Secondary cells: color var(--muted-foreground)
Amount/total cells: text-align right, font-weight 600, color var(--foreground)
Status cells: contain StatusBadge component only — no raw text
Reserved indicator: inline tag, bg var(--inv-reserved-bg), fg var(--inv-reserved-fg), 
  border-radius 4px, padding 2px 6px, 10px, font-weight 500
```

### 4.6 Forms / Inputs

```
All inputs: shadcn Input component, no changes to base styles
Autofill search (customer, device, part): 
  - Popover with max-height 280px, scrollable
  - Each result row: 36px height, icon left + name + meta right
  - Highlight match text in var(--primary)
Wizard steps: see 4.11
Select menus: shadcn Select, no changes
Textarea (notes): min-height 80px, font-size 12px, line-height 1.75
Date inputs: shadcn DatePicker
Disabled state: opacity 0.5, cursor not-allowed
Required indicator: red dot after label, aria-required on input
```

### 4.7 Buttons

```
Primary: bg var(--primary), fg var(--primary-foreground), hover opacity 0.9
  - Use for: "Nouveau ticket", "Encaisser", "Marquer livré", "Enregistrer"
Secondary/outlined: bg var(--card), border var(--border), shadow-xs, hover bg var(--muted)
  - Use for: "Imprimer", "Facture", "Retour", secondary actions
Ghost: no bg, no border, no shadow, color var(--muted-foreground), hover bg var(--muted)
  - Use for: inline edit buttons in card headers
Destructive: bg var(--status-norepair-bg), fg var(--status-norepair-fg), no shadow
  - Use for: "Non réparé", "Annuler session", "Supprimer"
Icon+label: always gap-1.5 (6px), icon at 14px
Icon-only: 32x32px, outlined variant, aria-label required
Size: default 32px height, sm 28px height (card headers), lg 38px (CTA like "Encaisser")
RTL: button icon position mirrors automatically with logical margin
```

### 4.8 Badges

```
Base: inline-flex, align-items center, border-radius 9999px (pill), font-size 11px, font-weight 500
  padding: 3px 9px
  No box-shadow
Status badges (repair workflow): use --status-{name}-bg and --status-{name}-fg tokens
  Include a 6px circle dot before the label (::before or inline span)
  Dot color = currentColor
Priority badges: pill, 10px, font-weight 600
  urgent: var(--priority-urgent-bg/fg), includes ti-flame icon 10px
  normal: var(--priority-normal-bg/fg)
Inventory stock badges: 
  in-stock: var(--inv-ok-bg/fg)
  low: var(--inv-low-bg/fg) — also add amber border to parent card
  out: var(--inv-out-bg/fg) — parent card opacity var(--pos-item-out-opacity)
Reserved parts badge: var(--inv-reserved-bg/fg), ti-lock icon, 10px, font-weight 500
Debt badge: pill, var(--debt-active-bg/fg), ti-alert-circle icon, always shown on customer record
WhatsApp status dot: 6px circle, color var(--wa-green) if sent, var(--wa-failed-fg) if failed
```

### 4.9 Status Pills (repair-specific)

Create a shared `<RepairStatusBadge status={status} />` component:

```tsx
// lib/status.ts
export const statusConfig = {
  received:                  { label: 'Reçu',               bg: 'var(--status-received-bg)',   fg: 'var(--status-received-fg)'   },
  in_diagnosis:              { label: 'En diagnostic',      bg: 'var(--status-diagnosis-bg)',  fg: 'var(--status-diagnosis-fg)'  },
  waiting_customer_approval: { label: 'Attente approbation',bg: 'var(--status-waiting-bg)',    fg: 'var(--status-waiting-fg)'    },
  in_repair:                 { label: 'En réparation',      bg: 'var(--status-inrepair-bg)',   fg: 'var(--status-inrepair-fg)'   },
  ready_for_pickup:          { label: 'Prêt à livrer',      bg: 'var(--status-ready-bg)',      fg: 'var(--status-ready-fg)'      },
  completed:                 { label: 'Terminé',            bg: 'var(--status-completed-bg)',  fg: 'var(--status-completed-fg)'  },
  not_repaired:              { label: 'Non réparé',         bg: 'var(--status-norepair-bg)',   fg: 'var(--status-norepair-fg)'   },
} as const

// components/ui/repair-status-badge.tsx
export function RepairStatusBadge({ status }: { status: keyof typeof statusConfig }) {
  const cfg = statusConfig[status]
  return (
    <span
      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-medium"
      style={{ background: cfg.bg, color: cfg.fg }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {cfg.label}
    </span>
  )
}
```

Use `<RepairStatusBadge />` everywhere: ticket list rows, ticket detail hero, technician queue, customer repair history. Never hardcode colors per-screen.

### 4.10 Repair Intake Wizard

```
Layout: full-page wizard, steps in topbar progress bar, content centered max-width 680px
Step indicator: horizontal pills, current step in --primary, completed in --inv-ok-fg with check, 
  future steps in --muted-foreground
Steps:
  1. Client — search/create customer, walk-in toggle
  2. Appareil — category grid (icon cards 80x80px), then brand autocomplete, then model autocomplete
  3. Problèmes — checkbox list of known problems, free-text notes, photo upload (optional)
  4. Pièces — autocomplete part search, reserve toggle, estimated cost
  5. Détails — technician assign, due date, priority, warranty, initial status
  6. Récapitulatif — full summary before submit
Category grid: 3x3 grid of cards (icon + label), active state border-2 solid var(--primary)
Back/Next buttons: sticky bottom bar, full-width on mobile, right-aligned on desktop
Cancel: ghost button top-left
Walk-in toggle: prominent, changes customer section to "Client de passage" with no phone required
```

### 4.11 POS Workspace

```
Layout: 2-column, left = product grid + tab filter, right = fixed cart panel 272px
Product tabs: Produits / Pièces de rechange / Services — underline tab style, active in --primary
Product search: top of left panel, F3 keyboard shortcut shown in placeholder
Product cards: grid 3 columns, 
  - card: bg var(--card), border, radius, hover border-color var(--primary)
  - name: 12px font-weight 500
  - ref: 10px muted
  - price: 13px font-weight 500
  - stock state badge: see badge rules above
  - out-of-stock cards: opacity var(--pos-item-out-opacity), pointer-events none
Cart panel (right):
  - Header: cart item count
  - Customer bar: below header, shows selected customer name + debt pill if applicable
  - Cart rows: qty control (−/qty/+) inline, unit price muted, line total right-aligned font-weight 600
  - Discount row: input + percentage, live discount amount in var(--pos-discount-fg)
  - Totals block: bg var(--surface-sunken), subtotal/discount/total rows
  - Payment block: "Reçu" input, change amount large in var(--pos-change-fg)
  - CTA: full-width primary button "Encaisser · X DZD"
  - Debt option: full-width secondary button "Mettre en dette client" — only shown for named customers
Cash session indicator: always visible in topbar, shows open/closed state with dot
```

### 4.12 Repair Ticket Detail

```
Layout: 2-column grid (1fr 272px), left = main content, right = sidebar panel bg var(--surface-panel)
Left column blocks (top to bottom):
  1. Ticket hero card:
     - Device icon in accent square (44x44px bg var(--accent), icon color var(--primary), radius var(--radius))
     - Ticket number (11px uppercase muted), title (16px font-weight 600), created-by (11px muted)
     - Status pill + priority pill right-aligned
     - Divider
     - 4-col attrs grid: Catégorie / Marque+modèle / Technicien (blue) / Date limite
  2. Problèmes signalés card — tag chips
  3. Pièces réservées card — table with reserved badges
  4. Notes technicien card — left-border accent block (3px solid var(--primary), bg var(--accent))
  5. Historique card — timeline with tl-icon dots, active dot in --primary/--accent

Right sidebar blocks:
  1. Cliente block — avatar + name + phone + debt pill + device row + warranty row + action buttons
  2. Avancer le statut block — stepper list (done/current/future states)
  3. Devis accepté block — sunken estimate summary with total row + accepted badge
  4. WhatsApp block — 3 quick-send action rows

Topbar actions: Retour (outlined) / Imprimer / Facture / Non réparé (destructive) / Marquer livré (primary)
```

### 4.13 Technician Workspace

```
Layout: full-width list, grouped by status (En réparation / En diagnostic / Prêt à livrer)
Each group: collapsible section header with count badge
Ticket card (not the full detail layout — a compact card):
  - Left: device category icon in small accent square
  - Center: ticket number + device name + customer name
  - Right: status badge + priority + due date (red if overdue)
  - Bottom: quick action buttons: "Changer statut" + "Ajouter note"
Quick status change: inline dropdown or bottom sheet on mobile — no full page navigation required
Notes: textarea in an inline expandable section — saves on blur
Filter bar: by status, by priority, by date — above the list
```

### 4.14 Customer Profile

```
Layout: 2-column (1fr 280px) on desktop
Left: 
  - Customer hero (avatar 48px + name + phone + creation date)
  - Devices list (each device: category icon + model + IMEI + warranty badge)
  - Repair history table (ticket number + device + status + date + amount)
  - POS sales history table
Right sidebar:
  - Debt summary block (total owed, breakdown: repair debt / sale debt)
  - Debt transaction list (debits/credits/payments)
  - Quick actions: "Enregistrer paiement" + "Ajuster solde"
Debt amounts: always color-coded:
  - Owed > 0: var(--debt-active-fg) with debt-active-bg block
  - Partially paid: var(--debt-partial-fg)
  - Cleared: var(--debt-clear-fg)
Walk-in indicator: "Client de passage" badge in place of name, phone, debt — no debt section shown
```

### 4.15 Inventory Pages

```
Layout: list with top filter/search bar, optional kanban-style low-stock view
Item cards in grid:
  - Default: standard card with border
  - Low stock: border-color var(--inv-low-border), header badge "Stock bas" in --inv-low-bg/fg
  - Out of stock: border-color var(--inv-out-fg), opacity 0.7
Stock level indicator: colored dot + number text, color based on stock state
Purchase orders: table layout, status badges for pending/received/partial
Reorder page: filtered to low+out items, sorted by urgency, bulk reorder action in topbar
FIFO cost data: hidden entirely for Cashier and Technician roles — server-side, not CSS
```

### 4.16 Reports / Executive Dashboard

```
KPI grid: 4-column on desktop, 2-column on tablet, 1-column on mobile
  Each KPI block: bg var(--kpi-{type}-bg), label 10px uppercase muted, value 22px font-weight 600, 
  trend indicator (↑/↓) in var(--kpi-trend-up/down)
Charts: use existing chart library (recharts/chart.js), use semantic colors from kpi tokens for series
Section tabs: Sales / Repairs / Inventory / Profit / Debt / Cash flow / Technicians / Audit
Date range picker: in topbar, compact
Export button: top-right, outlined
No decorative icon circles on KPI blocks — numbers should dominate
```

### 4.17 Settings / Catalog

```
Layout: settings sidebar nav (sub-nav, not main sidebar) + content area
Settings sections: General / Catalogue / WhatsApp / Utilisateurs / Abonnement
Catalog page: table of categories/brands/models, inline edit, add button in section header
WhatsApp settings: template previews with phone mockup frame, send-test button
Form layout: label above input, sections separated by divider, save button sticky bottom
```

### 4.18 Receipts / Print Pages

```
Target: A5 or thermal (80mm) print output
Print CSS: @media print { 
  sidebar: display none
  topbar: display none
  print-only elements: display block
  all background colors: white
  all text: black (#000)
  borders: 0.5px solid #000
  receipt card: no shadow, no border-radius
  font: 12px monospace for amounts, system sans for labels
}
Receipt structure: shop header + ticket number + customer + device + work done + parts + total + signature line
QR code: ticket tracking URL as QR (use qrcode lib already in deps or add qrcode.react)
Thermal mode: single column, max-width 80mm, font-size 11px, no images except logo
```

---

## 5. Migration Plan

Execute in this exact order. Each phase is independently deployable — the app stays functional throughout.

### Phase 0 — Token injection (30 min, no visual change expected)

1. Open `app/globals.css`
2. In `:root {}`, add all new tokens from Section 2 (status, pos, inv, debt, wa, kpi tokens)
3. Change `--background` from `#ffffff` to `#f8fafc`
4. In `.dark {}`, add all dark variants from Section 2
5. Add `@theme inline` block from Section 3.1
6. Add sidebar tokens (they are `:root` level fixed values)
7. Commit. Deploy. Verify no visual regressions — the only visible change should be a very slightly off-white page background.

### Phase 1 — Shared components (2–4 hours)

Edit in this order:

1. **`components/ui/repair-status-badge.tsx`** — create this file with `statusConfig` and `RepairStatusBadge` component (see Section 4.9). This is the most reused component.
2. **`components/layout/sidebar.tsx`** (or equivalent) — update logo block, wordmark accent color, nav item active/hover states, badge alert color. Use sidebar tokens.
3. **`components/layout/topbar.tsx`** — add session indicator pill (show/hide based on cash session state from context), connect lang switcher.
4. **`components/ui/status-badge.tsx`** (if existing generic badge) — refactor to use `RepairStatusBadge` for repair statuses. Keep generic badge for other uses.
5. **`components/ui/debt-badge.tsx`** — create pill using debt tokens, always includes ti-alert-circle icon.

Do not touch feature pages yet.

### Phase 2 — Ticket detail page (2–3 hours)

This is the highest-traffic page and the best showcase of the new system.

1. Open `app/dashboard/repairs/[id]/page.tsx` (or equivalent)
2. Apply the 2-column grid layout from Section 4.12
3. Rebuild ticket hero block with device icon square, status pill, priority pill, 4-col attrs
4. Replace any inline status color logic with `<RepairStatusBadge />`
5. Apply notes left-border accent block (replace textarea preview)
6. Apply timeline component styles from Section 4.12
7. Build right sidebar with customer block, status stepper, estimate block, WhatsApp block
8. Update topbar action buttons to match button rules from Section 4.7

### Phase 3 — Ticket list page (1 hour)

1. Replace status column with `<RepairStatusBadge />`
2. Apply debt badge to customer name column where applicable
3. Apply priority pill
4. Verify `inv-low-border` on stock cells if parts are shown in list

### Phase 4 — POS workspace (2–3 hours)

1. Apply product card grid with stock state colors
2. Apply cart panel layout
3. Apply session open/closed indicator
4. Apply payment block with change amount color
5. Apply debt button conditional display

### Phase 5 — Customer profile (1–2 hours)

1. Apply debt summary block with debt tokens
2. Apply device list cards
3. Apply walk-in conditional rendering (no debt section)
4. Replace history table status column with `<RepairStatusBadge />`

### Phase 6 — Inventory pages (1–2 hours)

1. Apply stock-state card borders and badges
2. Apply reorder page filters
3. Confirm FIFO cost columns are not rendered for Cashier/Technician roles (server-side check)

### Phase 7 — Reports dashboard (1–2 hours)

1. Apply KPI grid layout with semantic kpi tokens
2. Apply chart series colors from kpi tokens
3. Apply section tabs

### Phase 8 — Technician workspace (1 hour)

1. Apply grouped status sections
2. Apply compact ticket cards with quick actions
3. Apply inline note form

### Phase 9 — Remaining pages

Settings, catalog, WhatsApp config, supplier pages — apply card/table/form rules from Section 4. Lower priority.

### Phase 10 — Print / receipt styles (1 hour)

1. Add `@media print` block to globals.css or a dedicated `print.css`
2. Audit every print route for compliance with Section 4.18
3. Test thermal output at 80mm width

### How to avoid breaking layouts

- Never remove a CSS class from a component without confirming no other component uses it
- Use `git diff` after each phase before committing
- Test each page in both light and dark mode after every phase
- Keep a `THEME_MIGRATION.md` checklist in the repo root tracking which pages are done

---

## 6. Before / After Intent

### 6.1 Status Badges

Old problem: every repair status badge was rendered as a gray muted pill. A cashier scanning 20 tickets could not distinguish "En réparation" from "Prêt à livrer" without reading the text.

New solution: 7 distinct semantic colors. Green = in repair/ready (work happening). Amber = diagnosis/waiting (attention needed). Blue = waiting approval (awaiting customer). Gray = received/completed (neutral). Red = not repaired (failure).

Expected result: cashier can scan the status column of a ticket list and immediately triage without reading every word. Visual load drops by ~60%.

### 6.2 Page Background

Old problem: pure white (`#ffffff`) page background made cards invisible against the page — no depth separation between content and surface.

New solution: `#f8fafc` (warm off-white) for the page, `#ffffff` for cards. Cards now lift visibly off the page.

Expected result: clear visual hierarchy between page shell and content blocks. No decorative shadows needed.

### 6.3 Customer Debt Warning

Old problem: debt balance was shown as a plain number in the customer record, in the same muted gray as every other field. Cashiers missed it constantly.

New solution: debt balance is always rendered as a pill badge using `--debt-active-bg/fg` (red tones) with a ti-alert-circle icon, inline next to the customer name wherever they appear (cart customer bar, ticket sidebar, customer list).

Expected result: debt is impossible to miss. Cashier sees it before completing any transaction.

### 6.4 Ticket Hero

Old problem: the ticket detail page opened with a plain text title. Staff had to read the full title and status field to orient themselves.

New solution: device category icon in an accent-colored square (phone, laptop, tablet, etc.) gives instant device type recognition. Status pill and priority pill are top-right — the two most important read-at-a-glance pieces of info.

Expected result: technician opens a ticket and within 500ms knows: device type, current status, urgency level — before reading anything.

### 6.5 WhatsApp Actions

Old problem: WhatsApp notifications were buried in a menu or a separate page. Sending a status update required 3–4 clicks.

New solution: dedicated sidebar block on ticket detail with 3 inline action buttons (update status / resend estimate link / ready for pickup). Always visible on the right panel.

Expected result: WhatsApp send is a 1-click action from the ticket page. Adoption increases because friction is gone.

### 6.6 POS Item Stock State

Old problem: out-of-stock or low-stock items appeared identically to in-stock items. Cashiers would add them to cart and only discover the problem at checkout.

New solution: low-stock cards have amber border + badge. Out-of-stock cards are 45% opacity and pointer-events none (unclickable). In-stock shows green count.

Expected result: POS checkout errors from stock issues drop to near zero. Cashier never adds an unavailable item.

### 6.7 Notes Block Styling

Old problem: technician notes appeared in a plain gray text area block. No visual distinction from other form fields.

New solution: notes render as a left-border accent block — 3px solid `--primary`, background `--accent`, text in `--accent-foreground`. This is a standard shadcn callout pattern that staff recognize as "important annotated content."

Expected result: notes are instantly distinguishable from form fields. Technicians read them before starting work.

---

## 7. Constraints for the Coding Agent

Obey these unconditionally:

1. **No full rewrites.** Migrate component by component. Keep existing component file structure.

2. **No decorative additions.** Do not add gradients, glassmorphism, hero images, animated backgrounds, or icon decorations that don't carry information. Every pixel must earn its place.

3. **Keep density.** Do not increase card padding, increase font sizes, or add extra spacing to "make it look premium." The density is intentional for shop-staff use.

4. **Preserve role-based rendering.** Cashier never sees FIFO cost. Technician never sees POS or reports. Admin/Manager sees everything. These guards are already in the codebase — do not remove them while restyling.

5. **RTL must work.** All layout directions use logical CSS (`ms-`, `me-`, `ps-`, `pe-`, `start`, `end`). No `ml-`, `mr-`, `pl-`, `pr-`, `left:`, `right:` in new code. Sidebar flips with `dir="rtl"` on `<html>`. The flex/grid layouts are already direction-agnostic.

6. **Receipts stay print-friendly.** All `@media print` styles must produce black-on-white output. No background fills, no shadows, no sidebar, no topbar in print output.

7. **French is default.** All new UI labels, placeholder text, and empty state messages should be written in French. RTL Arabic and English are handled via `next-intl` translation keys — do not hardcode English strings in components.

8. **Keep WhatsApp template semantics.** The 3 WhatsApp action buttons in the ticket sidebar must use the correct template identifiers (update / estimate / ready). Do not change the API calls — only change the visual presentation.

9. **Do not break the cash session state machine.** Session open/closed state controls what the cashier can do. The new session indicator in the topbar reads from existing session context — do not refactor the session logic, only add the visual indicator.

10. **Modular component output.** `RepairStatusBadge`, `DebtBadge`, `StockBadge`, `PriorityBadge` are shared across all feature areas. Build them once in `components/ui/`, import everywhere. No duplicated inline color logic per page.

---

## 8. Quick Reference: Token Cheat Sheet

```
Repair status colors    →  --status-{received|diagnosis|waiting|inrepair|ready|completed|norepair}-{bg|fg|border}
POS cash flows          →  --pos-cash-in-{bg|fg}, --pos-cash-out-{bg|fg}, --pos-change-fg
Inventory stock states  →  --inv-{ok|low|out|reserved}-{bg|fg}, --inv-low-border
Customer debt           →  --debt-{active|partial|clear}-{bg|fg}
WhatsApp                →  --wa-green, --wa-{sent|failed|pending}-{bg|fg}
Report KPIs             →  --kpi-{revenue|repairs|debt|pending|technician}-{bg|fg}, --kpi-trend-{up|down}
Sidebar (fixed)         →  --sidebar-{bg|fg|muted|muted-fg|accent|border|active-bg|active-fg|hover-bg}
Surfaces                →  --surface-{page|card|panel|raised|sunken}
Shadows                 →  --shadow-{xs|sm|md}
```

---

*End of handoff. This document contains everything the coding agent needs to implement the REPAIRE design system without ambiguity. Implement Section 5 phases in order. Do not skip Phase 0.*
