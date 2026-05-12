import type { RepairPriority } from "@prisma/client";
import { Flame } from "lucide-react";
import { cn } from "@/lib/utils";

export function PriorityBadge({
  priority,
  className,
}: {
  priority: RepairPriority;
  className?: string;
}) {
  const urgent = priority === "rush";

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[12px] font-semibold",
        className
      )}
      style={{
        backgroundColor: urgent ? "var(--priority-urgent-bg)" : "var(--priority-normal-bg)",
        color: urgent ? "var(--priority-urgent-fg)" : "var(--priority-normal-fg)",
      }}
    >
      {urgent && <Flame className="h-3 w-3" />}
      {urgent ? "Urgent" : "Normal"}
    </span>
  );
}
