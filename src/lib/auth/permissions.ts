import type { UserRole } from "@prisma/client";

export type Permission =
  | "users:manage"
  | "users:view"
  | "stores:manage"
  | "stores:view"
  | "settings:manage"
  | "subscriptions:view"
  | "customers:manage"
  | "customers:view"
  | "inventory:manage"
  | "inventory:view"
  | "inventory:view_cost"
  | "tickets:manage"
  | "tickets:view"
  | "payments:manage"
  | "payments:view"
  | "reports:view"
  | "debt:manage"
  | "debt:view"
  | "expenses:manage"
  | "expenses:view";

const ROLE_PERMISSIONS: Record<UserRole, Permission[]> = {
  Admin: [
    "users:manage",
    "users:view",
    "stores:manage",
    "stores:view",
    "settings:manage",
    "subscriptions:view",
    "customers:manage",
    "customers:view",
    "inventory:manage",
    "inventory:view",
    "inventory:view_cost",
    "tickets:manage",
    "tickets:view",
    "payments:manage",
    "payments:view",
    "reports:view",
    "debt:manage",
    "debt:view",
    "expenses:manage",
    "expenses:view",
  ],
  Manager: [
    "users:view",
    "stores:view",
    "customers:manage",
    "customers:view",
    "inventory:manage",
    "inventory:view",
    "inventory:view_cost",
    "tickets:manage",
    "tickets:view",
    "payments:manage",
    "payments:view",
    "reports:view",
    "debt:manage",
    "debt:view",
    "expenses:manage",
    "expenses:view",
  ],
  Cashier: [
    "customers:view",
    "inventory:view",
    "tickets:view",
    "payments:manage",
    "payments:view",
    "debt:view",
  ],
  Technician: [
    "customers:view",
    "inventory:view",
    "tickets:manage",
    "tickets:view",
  ],
};

export function hasPermission(role: UserRole, permission: Permission): boolean {
  return ROLE_PERMISSIONS[role].includes(permission);
}

export function hasAnyPermission(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.some((p) => hasPermission(role, p));
}

export function hasAllPermissions(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.every((p) => hasPermission(role, p));
}
