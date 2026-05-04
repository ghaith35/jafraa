import {
  LayoutDashboard,
  ShoppingCart,
  Wrench,
  Users,
  Package,
  Truck,
  BarChart2,
  Settings,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import type { UserRole } from "@prisma/client";
import { hasPermission, type Permission } from "@/lib/auth/permissions";

export interface NavItem {
  href: string;
  label: string;
  icon: LucideIcon;
  permission: Permission | null;
}

const ALL_NAV_ITEMS: NavItem[] = [
  {
    href: "/dashboard",
    label: "Tableau de bord",
    icon: LayoutDashboard,
    permission: null, // visible to all
  },
  {
    href: "/dashboard/pos",
    label: "Caisse",
    icon: ShoppingCart,
    permission: "payments:manage",
  },
  {
    href: "/dashboard/repairs",
    label: "Réparations",
    icon: Wrench,
    permission: "tickets:view",
  },
  {
    href: "/dashboard/customers",
    label: "Clients",
    icon: Users,
    permission: "customers:view",
  },
  {
    href: "/dashboard/inventory",
    label: "Inventaire",
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
  {
    href: "/dashboard/settings/whatsapp",
    label: "WhatsApp",
    icon: MessageSquare,
    permission: "settings:manage",
  },
];

export function getNavItemsForRole(role: UserRole): NavItem[] {
  return ALL_NAV_ITEMS.filter(
    (item) => item.permission === null || hasPermission(role, item.permission)
  );
}
