import {
  LayoutDashboard,
  ShoppingCart,
  Wrench,
  Users,
  Package,
  Truck,
  BarChart2,
  Settings,
  ClipboardList,
  Boxes,
  PackageSearch,
  FileText,
  Archive,
  Smartphone,
  Sparkles,
  Laptop,
  UnlockKeyhole,
  Tags,
  Wallet,
  DollarSign,
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "@prisma/client";
import { hasPermission, type Permission } from "@/lib/auth/permissions";
import type { AppTranslationKey } from "@/lib/i18n/ui-core";

export interface NavItem {
  href: string;
  labelKey: AppTranslationKey;
  fallbackLabel: string;
  icon: LucideIcon;
  permission: Permission | null;
  badge?: string;
  alert?: boolean;
  children?: NavItem[];
}

export interface NavSection {
  titleKey: AppTranslationKey;
  fallbackTitle: string;
  items: NavItem[];
}

function item(
  href: string,
  labelKey: AppTranslationKey,
  fallbackLabel: string,
  icon: LucideIcon,
  permission: Permission | null,
  extra?: Pick<NavItem, "badge" | "alert" | "children">
): NavItem {
  return { href, labelKey, fallbackLabel, icon, permission, ...extra };
}

const ALL_NAV_SECTIONS: NavSection[] = [
  {
    titleKey: "nav.section.main",
    fallbackTitle: "Principal",
    items: [
      item("/dashboard", "nav.dashboard", "Tableau de bord", LayoutDashboard, null),
      item("/dashboard/pos", "nav.pos", "Point de vente", ShoppingCart, "payments:manage"),
      item("/dashboard/customers", "nav.customers", "Clients", Users, "customers:view"),
      item("/dashboard/suppliers", "nav.inventory.suppliers", "Fournisseurs", Truck, "inventory:manage"),
      item("/dashboard/inventory", "nav.inventory", "Inventaire", Package, "inventory:view", {
        children: [
          item("/dashboard/inventory", "nav.inventory.overview", "Vue d’ensemble", PackageSearch, "inventory:view"),
          item("/dashboard/inventory/products", "nav.inventory.products", "Produits", Package, "inventory:view"),
          item("/dashboard/inventory/parts", "nav.inventory.parts", "Pièces détachées", Wrench, "inventory:view"),
          item("/dashboard/inventory/recovered-parts", "nav.inventory.recoveredParts", "Pièces récupérées", Boxes, "inventory:view"),
          item("/dashboard/inventory/purchases", "nav.inventory.purchaseInvoices", "Factures d’achat", FileText, "inventory:manage"),
        ],
      }),
      item("/dashboard/services", "nav.services", "Services", Sparkles, "inventory:view", {
        children: [
          item("/dashboard/services", "nav.services.all", "Tous les services", Sparkles, "inventory:view"),
          item("/dashboard/services/repair", "nav.services.repair", "Services réparation", Wrench, "inventory:view"),
          item("/dashboard/services/software", "nav.services.software", "Services logiciel", Laptop, "inventory:view"),
          item("/dashboard/services/unlocking", "nav.services.unlocking", "Déverrouillage", UnlockKeyhole, "inventory:view"),
          item("/dashboard/services/categories", "nav.services.categories", "Catégories services", Tags, "inventory:view"),
        ],
      }),
    ],
  },
  {
    titleKey: "nav.section.workshop",
    fallbackTitle: "Workshop",
    items: [
      item("/dashboard/repairs", "nav.repairs", "Réparations", Wrench, "tickets:view"),
      item("/dashboard/technician", "nav.technician", "Technicien", ClipboardList, "tickets:view"),
      item("/dashboard/technician/archived", "nav.archived", "Archivé", Archive, "tickets:view"),
    ],
  },
  {
    titleKey: "nav.section.cash",
    fallbackTitle: "Caisse",
    items: [
      item("/dashboard/pos/cash-register", "nav.cashRegister", "Caisse", DollarSign, "payments:manage"),
    ],
  },
  {
    titleKey: "nav.section.admin",
    fallbackTitle: "Admin",
    items: [
      item("/dashboard/reports", "nav.reports", "Rapports", BarChart2, "reports:view"),
      item("/dashboard/expenses", "nav.expenses", "Dépenses", Wallet, "expenses:view"),
      item("/dashboard/settings", "nav.settings", "Paramètres", Settings, "settings:manage"),
    ],
  },
];

function filterItemsForRole(items: NavItem[], role: UserRole): NavItem[] {
  return items
    .filter((item) => item.permission === null || hasPermission(role, item.permission))
    .map((item) => ({
      ...item,
      children: item.children ? filterItemsForRole(item.children, role) : undefined,
    }))
    .filter((item) => !item.children || item.children.length > 0);
}

export function getNavSectionsForRole(role: UserRole): NavSection[] {
  return ALL_NAV_SECTIONS.map((section) => ({
    ...section,
    items: filterItemsForRole(section.items, role),
  })).filter((section) => section.items.length > 0);
}
