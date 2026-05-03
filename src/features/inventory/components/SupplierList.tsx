"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Building2, Archive, Pencil, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { archiveSupplier } from "../actions/supplier.actions";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Supplier {
  id: string;
  name: string;
  phone: string | null;
  address: string | null;
  balance: { toNumber: () => number } | number;
  isArchived: boolean;
}

interface Props {
  suppliers: Supplier[];
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

// ─── Row ─────────────────────────────────────────────────────────────────────

function SupplierRow({
  supplier,
  canManage,
}: {
  supplier: Supplier;
  canManage: boolean;
}) {
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    startTransition(async () => {
      await archiveSupplier(supplier.id);
    });
  }

  const bal = typeof supplier.balance === "number" ? supplier.balance : supplier.balance.toNumber();
  const hasDebt = bal > 0;

  return (
    <div className={cn(
      "flex flex-col sm:flex-row gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors",
      supplier.isArchived ? "opacity-60" : "hover:bg-accent/30"
    )}>
      {/* Icon */}
      <div className="hidden sm:flex rounded-md bg-muted p-2 shrink-0 items-start">
        <Building2 className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <Link
            href={`/dashboard/suppliers/${supplier.id}`}
            className="text-sm font-medium text-foreground hover:underline truncate"
          >
            {supplier.name}
          </Link>
          {supplier.isArchived && (
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              Archivé
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1 text-xs text-muted-foreground">
          {supplier.phone && (
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {supplier.phone}
            </span>
          )}
          {supplier.address && (
            <span className="flex items-center gap-1 truncate max-w-[200px]">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{supplier.address}</span>
            </span>
          )}
        </div>
      </div>

      {/* Balance */}
      <div className="flex items-center justify-between sm:flex-col sm:items-end gap-1 shrink-0 border-t border-border sm:border-0 pt-2 sm:pt-0 mt-2 sm:mt-0">
        <div className="flex flex-col sm:items-end gap-0.5">
          <span className="text-xs text-muted-foreground uppercase tracking-wide font-medium">Solde dû</span>
          <span className={cn("text-sm font-semibold", hasDebt ? "text-destructive" : "text-foreground")}>
            {formatPrice(supplier.balance)}
          </span>
        </div>

        {/* Actions */}
        {canManage && !supplier.isArchived && (
          <div className="flex items-center gap-1 shrink-0">
            <Link
              href={`/dashboard/suppliers/${supplier.id}/edit`}
              className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              title="Modifier"
            >
              <Pencil className="h-3.5 w-3.5" />
            </Link>
            <button
              type="button"
              onClick={handleArchive}
              disabled={isPending}
              title="Archiver ce fournisseur"
              className="rounded-md p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
            >
              <Archive className="h-3.5 w-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export function SupplierList({ suppliers, userRole }: Props) {
  const canManage = hasPermission(userRole, "inventory:manage");

  if (suppliers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Building2 className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">Aucun fournisseur</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          Commencez par ajouter vos fournisseurs pour suivre vos achats et vos soldes.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {suppliers.map((s) => (
        <SupplierRow key={s.id} supplier={s} canManage={canManage} />
      ))}
    </div>
  );
}
