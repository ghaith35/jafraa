import { cn } from "@/lib/utils";
import type { LucideIcon } from "lucide-react";

interface Props {
  icon?: LucideIcon;
  title: string;
  description?: string;
  action?: React.ReactNode;
  hint?: string;
  className?: string;
}

export function EmptyState({ icon: Icon, title, description, action, hint, className }: Props) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)]/50 py-12 px-6 text-center",
        className
      )}
    >
      {Icon && (
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--muted)] ring-1 ring-inset ring-[var(--border)]">
          <Icon className="h-6 w-6 text-[var(--text-tertiary)]" />
        </div>
      )}
      <p className="text-sm font-semibold text-[var(--text-primary)]">{title}</p>
      {description && (
        <p className="mt-1.5 text-sm text-[var(--text-secondary)] max-w-sm">{description}</p>
      )}
      {hint && (
        <p className="mt-2 text-xs text-[var(--text-tertiary)] max-w-xs">{hint}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  );
}
