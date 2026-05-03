import { cn } from "@/lib/utils";
import type { UserRole } from "@prisma/client";

interface Props {
  role: UserRole;
  className?: string;
}

const ROLE_CONFIG: Record<
  UserRole,
  { label: string; className: string }
> = {
  Admin: {
    label: "Administrateur",
    className: "bg-primary/15 text-primary",
  },
  Manager: {
    label: "Gérant",
    className: "bg-accent text-accent-foreground",
  },
  Cashier: {
    label: "Caissier",
    className: "bg-success/15 text-success",
  },
  Technician: {
    label: "Technicien",
    className: "bg-warning/15 text-warning",
  },
};

export function RoleBadge({ role, className }: Props) {
  const config = ROLE_CONFIG[role];
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        config.className,
        className
      )}
    >
      {config.label}
    </span>
  );
}
