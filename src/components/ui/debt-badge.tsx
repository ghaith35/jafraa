import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn, formatCurrency } from "@/lib/utils";

export function DebtBadge({
  amount,
  className,
}: {
  amount: number;
  className?: string;
}) {
  const hasDebt = amount > 0;
  const Icon = hasDebt ? AlertCircle : CheckCircle2;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[11px] font-semibold",
        className
      )}
      style={{
        backgroundColor: hasDebt ? "var(--debt-active-bg)" : "var(--debt-clear-bg)",
        borderColor: hasDebt ? "var(--debt-active-border)" : "transparent",
        color: hasDebt ? "var(--debt-active-fg)" : "var(--debt-clear-fg)",
      }}
    >
      <Icon className="h-3.5 w-3.5" />
      {hasDebt ? formatCurrency(amount) : "Dette soldée"}
    </span>
  );
}
