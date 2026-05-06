"use client";

import { useState } from "react";
import { Package, Plus } from "lucide-react";
import { ReservedPartsList } from "./ReservedPartsList";
import { ReservePartForm } from "./ReservePartForm";
import { useRepairI18n } from "./RepairLanguageSwitcher";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function ReservedPartsSection({ ticket, initialParts, userRole }: { ticket: any; initialParts: any[]; userRole: string }) {
  const { t } = useRepairI18n();
  const [isAdding, setIsAdding] = useState(false);

  const blockedStatuses = ["completed", "not_repaired"];
  const isBlocked = blockedStatuses.includes(ticket.currentStatus);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const activeCount = initialParts.filter((part: any) => part.status === "reserved").length;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-xl font-bold tracking-tight flex items-center gap-2">
          <Package className="h-5 w-5 text-muted-foreground" />
          {t("parts_title", { count: activeCount })}
        </h2>

        {!isAdding && !isBlocked && (
          <button
            onClick={() => setIsAdding(true)}
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            {t("parts_add")}
          </button>
        )}
      </div>

      {isAdding && (
        <div className="rounded-xl border border-border bg-card p-5">
          <div className="mb-4 flex items-center justify-between border-b pb-4">
            <h3 className="font-semibold text-lg">{t("parts_reserveTitle")}</h3>
            <button
              onClick={() => setIsAdding(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {t("cancel")}
            </button>
          </div>
          <ReservePartForm ticketId={ticket.id} onSuccess={() => setIsAdding(false)} />
        </div>
      )}

      <ReservedPartsList parts={initialParts} userRole={userRole} />
    </div>
  );
}
