import { Lock, PackageCheck, TriangleAlert, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

type StockState = "ok" | "low" | "out" | "reserved";

const stockConfig: Record<
  StockState,
  { label: string; bg: string; fg: string; icon: typeof PackageCheck }
> = {
  ok: {
    label: "En stock",
    bg: "var(--inv-ok-bg)",
    fg: "var(--inv-ok-fg)",
    icon: PackageCheck,
  },
  low: {
    label: "Stock bas",
    bg: "var(--inv-low-bg)",
    fg: "var(--inv-low-fg)",
    icon: TriangleAlert,
  },
  out: {
    label: "Rupture",
    bg: "var(--inv-out-bg)",
    fg: "var(--inv-out-fg)",
    icon: XCircle,
  },
  reserved: {
    label: "Réservé",
    bg: "var(--inv-reserved-bg)",
    fg: "var(--inv-reserved-fg)",
    icon: Lock,
  },
};

export function getStockState(quantity: number, threshold?: number | null): StockState {
  if (quantity <= 0) return "out";
  if (threshold != null && quantity <= threshold) return "low";
  return "ok";
}

export function StockBadge({
  state,
  quantity,
  label,
  className,
}: {
  state: StockState;
  quantity?: number;
  label?: string;
  className?: string;
}) {
  const config = stockConfig[state];
  const Icon = config.icon;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-2 py-0.5 text-[12px] font-semibold",
        className
      )}
      style={{ backgroundColor: config.bg, color: config.fg }}
    >
      <Icon className="h-3 w-3" />
      {label ?? config.label}
      {typeof quantity === "number" ? ` · ${quantity}` : ""}
    </span>
  );
}
