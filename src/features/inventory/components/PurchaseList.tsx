"use client";

import { FileText, Truck, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n, type AppTranslationKey } from "@/lib/i18n/ui";

interface PurchaseInvoice {
  id: string;
  invoiceNumber: string;
  invoiceDate: Date;
  totalAmount: { toNumber: () => number } | number;
  remainingAmount: { toNumber: () => number } | number;
  status: string;
  supplier: { name: string };
}

interface Props {
  purchases: PurchaseInvoice[];
}

function formatPrice(v: { toNumber: () => number } | number): string {
  const num = typeof v === "number" ? v : v.toNumber();
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num) + " DZD";
}

const STATUS_MAP: Record<string, { label: string; cls: string }> = {
  paid: { label: "Payé", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  partial: { label: "Partiel", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  unpaid: { label: "Non payé", cls: "bg-red-100 text-red-800 border-red-200" },
};

function statusTranslationKey(status: string): AppTranslationKey {
  return `inventory.status.${status}` as AppTranslationKey;
}

export function PurchaseList({ purchases }: Props) {
  const { t, formatDate } = useAppI18n();
  if (purchases.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <FileText className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">{t("inventory.noPurchases")}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          {t("inventory.purchaseDescription")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {purchases.map((p) => {
        const s = STATUS_MAP[p.status] || STATUS_MAP.unpaid;
        const statusLabel = t(statusTranslationKey(p.status)) || s.label;
        return (
          <div key={p.id} className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-xl border border-border bg-card px-4 py-3 hover:bg-accent/30 transition-colors">
            <div className="hidden sm:flex rounded-md bg-muted p-2 shrink-0">
              <FileText className="h-4 w-4 text-muted-foreground" />
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-foreground">
                  {p.invoiceNumber}
                </span>
                <span className={cn("text-[10px] font-medium px-1.5 py-0.5 rounded border", s.cls)}>
                  {statusLabel}
                </span>
              </div>
              <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Truck className="h-3 w-3" />
                  {p.supplier.name}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar className="h-3 w-3" />
                  {formatDate(p.invoiceDate)}
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:items-end shrink-0 border-t border-border sm:border-0 pt-2 sm:pt-0">
              <span className="text-sm font-semibold text-foreground">
                {formatPrice(p.totalAmount)}
              </span>
              {p.status !== "paid" && (
                <span className="text-xs text-destructive">
                  {t("inventory.remaining")}: {formatPrice(p.remainingAmount)}
                </span>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
