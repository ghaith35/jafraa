"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Pencil, Archive, RotateCcw, Users } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { archiveCustomerGroup, unarchiveCustomerGroup } from "../actions/customer-group.actions";

interface GroupWithCount {
  id: string;
  name: string;
  debtAlertLimit: { toNumber: () => number } | null;
  sellingPrice: { toNumber: () => number } | null;
  defaultDiscountPercent: { toNumber: () => number } | number;
  isArchived: boolean;
  _count: { customers: number };
}

export function GroupsList({ groups }: { groups: GroupWithCount[] }) {
  const { t, formatDate } = useAppI18n();
  const router = useRouter();

  async function handleArchive(id: string) {
    if (!confirm(t("customers.confirmArchiveGroup"))) return;
    const result = await archiveCustomerGroup(id);
    if (result && "error" in result) {
      alert(result.error);
      return;
    }
    router.refresh();
  }

  async function handleUnarchive(id: string) {
    const result = await unarchiveCustomerGroup(id);
    if (result && "error" in result) {
      alert(result.error);
      return;
    }
    router.refresh();
  }

  const toNum = (v: { toNumber: () => number } | number | null | undefined): number => {
    if (v == null) return 0;
    return typeof v === "object" ? v.toNumber() : Number(v);
  };

  if (groups.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <Users className="h-10 w-10 text-muted-foreground mb-3" />
        <p className="text-sm font-medium">{t("customers.noGroups")}</p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {groups.map((group) => (
        <div
          key={group.id}
          className={cn(
            "flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-shadow hover:shadow-sm",
            group.isArchived && "opacity-50"
          )}
        >
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-bold truncate">{group.name}</h3>
              {group.isArchived && (
                <span className="shrink-0 rounded-full bg-muted px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                  {t("customers.archived")}
                </span>
              )}
            </div>
            <div className="mt-1 flex flex-wrap gap-x-4 gap-y-1 text-[12px] text-muted-foreground">
              <span>
                {t("customers.customersCount")}: {group._count.customers}
              </span>
              {group.sellingPrice != null && (
                <span>
                  {t("customers.groupSellingPrice")}: {toNum(group.sellingPrice).toLocaleString()} DZD
                </span>
              )}
              {group.debtAlertLimit != null && (
                <span>
                  {t("customers.debtAlertLimit")}: {toNum(group.debtAlertLimit).toLocaleString()} DZD
                </span>
              )}
              {group.defaultDiscountPercent > 0 && (
                <span>
                  {t("customers.defaultDiscountPercent")}: {toNum(group.defaultDiscountPercent)}%
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center gap-1 shrink-0">
            {group.isArchived ? (
              <button
                onClick={() => handleUnarchive(group.id)}
                className="rounded-md p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                title={t("customers.unarchive")}
              >
                <RotateCcw className="h-4 w-4" />
              </button>
            ) : (
              <>
                <Link
                  href={`/dashboard/customers/groups/${group.id}/edit`}
                  className="rounded-md p-1.5 text-muted-foreground hover:text-foreground transition-colors"
                  title={t("customers.editGroup")}
                >
                  <Pencil className="h-4 w-4" />
                </Link>
                <button
                  onClick={() => handleArchive(group.id)}
                  className="rounded-md p-1.5 text-muted-foreground hover:text-destructive transition-colors"
                  title={t("customers.archiveGroup")}
                >
                  <Archive className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
