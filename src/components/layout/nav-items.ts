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
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "@prisma/client";
import { hasPermission, type Permission } from "@/lib/auth/permissions";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  permission: Permission | null;
  badge?: string;
  alert?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

const ALL_NAV_SECTIONS: NavSection[] = [
  {
    title: "Principal",
    items: [
      {
        href: "/dashboard",
        label: "Tableau de bord",
        icon: LayoutDashboard,
        permission: null,
      },
      {
        href: "/dashboard/repairs",
        label: "Tickets réparation",
        icon: Wrench,
        permission: "tickets:view",
        badge: "3",
      },
      {
        href: "/dashboard/pos",
        label: "Point de vente",
        icon: ShoppingCart,
        permission: "payments:manage",
      },
      {
        href: "/dashboard/customers",
        label: "Clients",
        icon: Users,
        permission: "customers:view",
      },
    ],
  },
  {
    title: "Inventaire",
    items: [
      {
        href: "/dashboard/inventory",
        label: "Stock & produits",
        icon: Package,
        permission: "inventory:view",
      },
      {
        href: "/dashboard/suppliers",
        label: "Fournisseurs",
        icon: Truck,
        permission: "inventory:manage",
      },
      {
        href: "/dashboard/inventory/purchase-orders",
        label: "Bons de commande",
        icon: ClipboardList,
        permission: "inventory:manage",
        badge: "2",
        alert: true,
      },
    ],
  },
  {
    title: "Admin",
    items: [
      {
        href: "/dashboard/reports",
        label: "Rapports",
        icon: BarChart2,
        permission: "reports:view",
      },
      {
        href: "/dashboard/settings",
        label: "Paramètres",
        icon: Settings,
        permission: "settings:manage",
      },
    ],
  },
];

export function getNavSectionsForRole(role: UserRole): NavSection[] {
  return ALL_NAV_SECTIONS.map((section) => ({
    ...section,
    items: section.items.filter(
      (item) => item.permission === null || hasPermission(role, item.permission)
    ),
  })).filter((section) => section.items.length > 0);
}
