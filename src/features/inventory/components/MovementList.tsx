"use client";

import { Package, Wrench, ArrowRightLeft, ArrowDownToLine, ArrowUpFromLine, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
// Infer type from action return
type StockMovement = {
  id: string;
  itemType: string;
  movementType: string;
  quantityDelta: number;
  createdAt: Date;
  note: string | null;
  product: { name: string; sku: string } | null;
  part: { name: string; sku: string } | null;
  createdBy: { name: string };
};

interface Props {
  movements: StockMovement[];
}

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat("fr-FR", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(d);
}

const TYPE_CONFIG: Record<string, { label: string; icon: React.ElementType; cls: string }> = {
  purchase: { label: "Achat", icon: ArrowDownToLine, cls: "text-emerald-600 bg-emerald-100 border-emerald-200" },
  return: { label: "Retour", icon: ArrowUpFromLine, cls: "text-amber-600 bg-amber-100 border-amber-200" },
  adjustment_in: { label: "Ajust. (+)", icon: ArrowRightLeft, cls: "text-blue-600 bg-blue-100 border-blue-200" },
  adjustment_out: { label: "Ajust. (-)", icon: ArrowRightLeft, cls: "text-red-600 bg-red-100 border-red-200" },
  correction: { label: "Correction", icon: RefreshCw, cls: "text-purple-600 bg-purple-100 border-purple-200" },
};

export function MovementList({ movements }: Props) {
  const { t, formatDateTime } = useAppI18n();
  if (movements.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <ArrowRightLeft className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">{t("inventory.noMovement")}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          {t("inventory.noMovementDescription")}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-sm text-left">
          <thead className="bg-muted/50 text-muted-foreground text-xs uppercase font-medium">
            <tr>
              <th className="px-4 py-3">{t("common.date")}</th>
              <th className="px-4 py-3">{t("common.type")}</th>
              <th className="px-4 py-3">{t("inventory.item")}</th>
              <th className="px-4 py-3 text-right">{t("common.quantityShort")}</th>
              <th className="px-4 py-3">{t("inventory.user")}</th>
              <th className="px-4 py-3">{t("common.note")}</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {movements.map((m) => {
              const cfg = TYPE_CONFIG[m.movementType] || { label: m.movementType, icon: ArrowRightLeft, cls: "text-gray-600 bg-gray-100" };
              const movementLabel = t(`inventory.movement.${m.movementType}` as any) || cfg.label;
              const Icon = cfg.icon;
              const itemName = m.itemType === "product" ? m.product?.name : m.part?.name;
              const itemSku = m.itemType === "product" ? m.product?.sku : m.part?.sku;
              const isPositive = m.quantityDelta > 0;

              return (
                <tr key={m.id} className="hover:bg-accent/30 transition-colors">
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {formatDateTime(m.createdAt)}
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    <span className={cn("inline-flex items-center gap-1 px-2 py-0.5 rounded border text-[10px] font-medium uppercase tracking-wider", cfg.cls)}>
                      <Icon className="h-3 w-3" />
                      {movementLabel}
                    </span>
                  </td>
                  <td className="px-4 py-3 min-w-[200px]">
                    <div className="flex items-center gap-2">
                      {m.itemType === "product" ? (
                        <Package className="h-4 w-4 text-muted-foreground shrink-0" />
                      ) : (
                        <Wrench className="h-4 w-4 text-muted-foreground shrink-0" />
                      )}
                      <div className="flex flex-col">
                        <span className="font-medium text-foreground">{itemName || t("inventory.unknown")}</span>
                        <span className="text-xs text-muted-foreground">{itemSku || "---"}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-right whitespace-nowrap">
                    <span className={cn(
                      "font-semibold",
                      isPositive ? "text-emerald-600" : m.quantityDelta < 0 ? "text-destructive" : "text-muted-foreground"
                    )}>
                      {isPositive ? "+" : ""}{m.quantityDelta}
                    </span>
                  </td>
                  <td className="px-4 py-3 whitespace-nowrap text-muted-foreground">
                    {m.createdBy.name}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground truncate max-w-[200px]" title={m.note || ""}>
                    {m.note || "—"}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
