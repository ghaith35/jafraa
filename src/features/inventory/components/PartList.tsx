"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Wrench, AlertTriangle, Archive, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { archivePart } from "../actions/part.actions";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Part {
  id: string;
  name: string;
  sku: string;
  barcode: string | null;
  brand: string | null;
  sellingPrice: { toNumber: () => number } | number;
  stockQty: number;
  lowStockThreshold: number | null;
  isArchived: boolean;
  category?: { name: string } | null;
  compatibleCategory?: { nameFr: string } | null;
  compatibleBrand?: { name: string } | null;
  compatibleFamily?: { name: string } | null;
}

interface Props {
  parts: Part[];
  userRole: UserRole;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(v: { toNumber: () => number } | number): string {
  const num = typeof v === "number" ? v : v.toNumber();
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num) + " DZD";
}

function compatibilitySummary(part: Part): string | null {
  const parts = [
    part.compatibleCategory?.nameFr,
    part.compatibleBrand?.name,
    part.compatibleFamily?.name,
  ].filter(Boolean);
  return parts.length > 0 ? parts.join(" · ") : null;
}

// ─── Row ─────────────────────────────────────────────────────────────────────

function PartRow({ part, canManage }: { part: Part; canManage: boolean }) {
  const { t } = useAppI18n();
  const [isPending, startTransition] = useTransition();
  const low = part.lowStockThreshold != null && part.stockQty <= part.lowStockThreshold;
  const compat = compatibilitySummary(part);

  function handleArchive() {
    startTransition(async () => {
      await archivePart(part.id);
    });
  }

  return (
    <div className={cn(
      "flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors",
      part.isArchived ? "opacity-60" : "hover:bg-accent/30"
    )}>
      {/* Icon */}
      <div className="rounded-md bg-muted p-2 shrink-0">
        <Wrench className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-foreground truncate">{part.name}</span>
          {part.category && (
            <span className="text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5">
              {part.category.name}
            </span>
          )}
          {low && (
            <span className="flex items-center gap-0.5 text-xs font-medium text-warning">
              <AlertTriangle className="h-3 w-3" />
              {t("inventory.lowStock")}
            </span>
          )}
          {part.isArchived && (
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              {t("inventory.archived")}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5 text-xs text-muted-foreground">
          <span className="font-mono">{part.sku}</span>
          {part.barcode && <span className="font-mono">{part.barcode}</span>}
          {compat && <span className="text-accent-foreground">{compat}</span>}
        </div>
      </div>

      {/* Price + stock */}
      <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0">
        <span className="text-sm font-semibold text-foreground">
          {formatPrice(part.sellingPrice)}
        </span>
        <span className={cn("text-xs", low ? "text-warning font-medium" : "text-muted-foreground")}>
          {t("inventory.stock", { qty: part.stockQty })}
        </span>
      </div>

      {/* Actions */}
      {canManage && !part.isArchived && (
        <div className="flex items-center gap-1 shrink-0">
          <Link
            href={`/dashboard/inventory/parts/${part.id}/edit`}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title={t("common.edit")}
          >
            <Pencil className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleArchive}
            disabled={isPending}
            title={t("inventory.archivePart")}
            className="rounded-md p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
          >
            <Archive className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export function PartList({ parts, userRole }: Props) {
  const { t } = useAppI18n();
  const canManage = hasPermission(userRole, "inventory:manage");

  if (parts.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Wrench className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">{t("inventory.noParts")}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          {t("inventory.noPartsDesc")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {parts.map((p) => (
        <PartRow key={p.id} part={p} canManage={canManage} />
      ))}
    </div>
  );
}
