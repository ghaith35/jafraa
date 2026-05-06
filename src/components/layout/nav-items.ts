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
  labelKey: string;
  icon: LucideIcon;
  permission: Permission | null;
}

const ALL_NAV_ITEMS: NavItem[] = [
  {
    href: "/dashboard",
    labelKey: "dashboard",
    icon: LayoutDashboard,
    permission: null, // visible to all
  },
  {
    href: "/dashboard/pos",
    labelKey: "pos",
    icon: ShoppingCart,
    permission: "payments:manage",
  },
  {
    href: "/dashboard/repairs",
    labelKey: "repairs",
    icon: Wrench,
    permission: "tickets:view",
  },
  {
    href: "/dashboard/customers",
    labelKey: "customers",
    icon: Users,
    permission: "customers:view",
  },
  {
    href: "/dashboard/inventory",
    labelKey: "inventory",
    icon: Package,
    permission: "inventory:view",
  },
  {
    href: "/dashboard/suppliers",
    labelKey: "suppliers",
    icon: Truck,
    permission: "inventory:manage",
  },
  {
    href: "/dashboard/reports",
    labelKey: "reports",
    icon: BarChart2,
    permission: "reports:view",
  },
  {
    href: "/dashboard/settings",
    labelKey: "settings",
    icon: Settings,
    permission: "settings:manage",
  },
  {
    href: "/dashboard/settings/whatsapp",
    labelKey: "whatsapp",
    icon: MessageSquare,
    permission: "settings:manage",
  },
];

export function getNavItemsForRole(role: UserRole): NavItem[] {
  return ALL_NAV_ITEMS.filter(
    (item) => item.permission === null || hasPermission(role, item.permission)
  );
}
