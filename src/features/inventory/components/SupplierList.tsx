"use client";

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { Building2, Archive, Pencil, MapPin, Phone, FileText } from "lucide-react";
import { cn } from "@/lib/utils";
import { archiveSupplier } from "../actions/supplier.actions";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";
import { useAppI18n } from "@/lib/i18n/ui";

interface Supplier {
  id: string;
  name: string;
  phones: string;
  nif: string | null;
  nis: string | null;
  address: string | null;
  balance: number;
  isArchived: boolean;
}

interface Props {
  suppliers: Supplier[];
  userRole: UserRole;
}

function SupplierRow({ supplier, canManage }: { supplier: Supplier; canManage: boolean }) {
  const { t } = useAppI18n();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const phoneList = supplier.phones ? supplier.phones.split(",").map(p => p.trim()).filter(Boolean) : [];

  function handleArchive() {
    startTransition(async () => {
      const result = await archiveSupplier(supplier.id);
      if (result && "redirect" in result && result.redirect) {
        router.push(result.redirect);
        router.refresh();
      }
    });
  }

  return (
    <div className={cn(
      "flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-[var(--shadow-xs)] hover:shadow-[var(--shadow-md)] transition-all duration-200",
      supplier.isArchived ? "opacity-60" : ""
    )}>
      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--muted)] shrink-0">
        <Building2 className="h-4 w-4 text-[var(--text-secondary)]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-semibold text-[var(--text-primary)]">{supplier.name}</span>
          {supplier.isArchived && (
            <span className="text-[11px] text-[var(--text-tertiary)] border border-[var(--border)] rounded-full px-2 py-0.5">{t("customers.archived")}</span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-4 gap-y-0.5 mt-0.5 text-xs text-[var(--text-secondary)]">
          {phoneList.length > 0 && (
            <span className="flex items-center gap-1">
              <Phone className="h-3 w-3" />
              {phoneList.join(", ")}
            </span>
          )}
          {supplier.nif && (
            <span className="flex items-center gap-1">
              <FileText className="h-3 w-3" />
              NIF: {supplier.nif}
            </span>
          )}
          {supplier.nis && (
            <span>NIS: {supplier.nis}</span>
          )}
          {supplier.address && (
            <span className="flex items-center gap-1 truncate max-w-[200px]">
              <MapPin className="h-3 w-3 shrink-0" />
              <span className="truncate">{supplier.address}</span>
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {canManage && !supplier.isArchived && (
          <>
            <button
              onClick={() => router.push(`/dashboard/suppliers/${supplier.id}/edit`)}
              className="p-1.5 text-[var(--text-tertiary)] hover:text-[var(--text-primary)] rounded-md hover:bg-[var(--muted)] transition-colors"
              title={t("common.edit")}
            >
              <Pencil className="h-3.5 w-3.5" />
            </button>
            <button
              onClick={handleArchive}
              disabled={isPending}
              className="p-1.5 text-[var(--text-tertiary)] hover:text-destructive rounded-md hover:bg-destructive/10 transition-colors"
              title={t("common.archive")}
            >
              <Archive className="h-3.5 w-3.5" />
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export function SupplierList({ suppliers, userRole }: Props) {
  const { t } = useAppI18n();
  const canManage = hasPermission(userRole, "inventory:manage");

  if (suppliers.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-[var(--border)] bg-[var(--surface)]/50 py-10 text-center">
        <div className="mb-4 rounded-full bg-[var(--muted)] p-3">
          <Building2 className="h-6 w-6 text-[var(--text-tertiary)]" />
        </div>
        <p className="text-sm font-medium text-[var(--text-primary)]">{t("suppliers.noSuppliers")}</p>
        <p className="mt-1 text-sm text-[var(--text-secondary)] max-w-sm">{t("suppliers.emptyDescription")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-1.5">
      {suppliers.map((s) => (
        <SupplierRow key={s.id} supplier={s} canManage={canManage} />
      ))}
    </div>
  );
}
