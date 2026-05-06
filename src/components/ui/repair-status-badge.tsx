import type { RepairStatus } from "@prisma/client";
import { cn } from "@/lib/utils";

export const repairStatusConfig: Record<
  RepairStatus,
  { label: string; bg: string; fg: string; border: string }
> = {
  received: {
    label: "Reçu",
    bg: "var(--status-received-bg)",
    fg: "var(--status-received-fg)",
    border: "var(--status-received-border)",
  },
  in_diagnosis: {
    label: "En diagnostic",
    bg: "var(--status-diagnosis-bg)",
    fg: "var(--status-diagnosis-fg)",
    border: "var(--status-diagnosis-border)",
  },
  waiting_customer_approval: {
    label: "Attente approbation",
    bg: "var(--status-waiting-bg)",
    fg: "var(--status-waiting-fg)",
    border: "var(--status-waiting-border)",
  },
  in_repair: {
    label: "En réparation",
    bg: "var(--status-inrepair-bg)",
    fg: "var(--status-inrepair-fg)",
    border: "var(--status-inrepair-border)",
  },
  ready_for_pickup: {
    label: "Prêt à livrer",
    bg: "var(--status-ready-bg)",
    fg: "var(--status-ready-fg)",
    border: "var(--status-ready-border)",
  },
  completed: {
    label: "Terminé",
    bg: "var(--status-completed-bg)",
    fg: "var(--status-completed-fg)",
    border: "var(--status-completed-border)",
  },
  not_repaired: {
    label: "Non réparé",
    bg: "var(--status-norepair-bg)",
    fg: "var(--status-norepair-fg)",
    border: "var(--status-norepair-border)",
  },
};

export function RepairStatusBadge({
  status,
  label,
  className,
}: {
  status: RepairStatus;
  label?: string;
  className?: string;
}) {
  const config = repairStatusConfig[status];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-medium",
        className
      )}
      style={{
        backgroundColor: config.bg,
        borderColor: config.border,
        color: config.fg,
      }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current opacity-80" />
      {label ?? config.label}
    </span>
  );
}
