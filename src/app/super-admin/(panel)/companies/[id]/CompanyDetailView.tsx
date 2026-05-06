"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { ArrowLeft, Building2, Users, Store, Wrench, ShoppingBag, CreditCard, CheckCircle2, AlertTriangle } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  updateSubscriptionStatus,
  archiveCompany,
  restoreCompany,
} from "@/features/super-admin/actions/companies.actions";
import { useRouter } from "next/navigation";
import { useAppI18n, type AppTranslationKey } from "@/lib/i18n/ui";

const STATUS_OPTS = [
  { value: "trial", label: "Essai" },
  { value: "active", label: "Actif" },
  { value: "grace", label: "Grâce" },
  { value: "read_only", label: "Lecture seule" },
  { value: "suspended", label: "Suspendu" },
  { value: "cancelled", label: "Annulé" },
];

const STATUS_CLS: Record<string, string> = {
  trial: "bg-blue-100 text-blue-800",
  active: "bg-emerald-100 text-emerald-800",
  grace: "bg-amber-100 text-amber-800",
  read_only: "bg-gray-100 text-gray-700",
  suspended: "bg-red-100 text-red-800",
  cancelled: "bg-gray-100 text-gray-500",
};

function statusTranslationKey(status: string): AppTranslationKey {
  return `superAdmin.status.${status}` as AppTranslationKey;
}

function MetricCard({ label, value, icon }: { label: string; value: number; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-border bg-card p-4 flex items-center gap-3">
      <div className="h-9 w-9 rounded-lg bg-primary/10 text-primary flex items-center justify-center shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-2xl font-bold">{value}</p>
        <p className="text-xs text-muted-foreground">{label}</p>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function CompanyDetailView({ company }: { company: any }) {
  const { t, formatDate } = useAppI18n();
  const router = useRouter();
  const sub = company.subscriptions?.[0];
  const [newStatus, setNewStatus] = useState<string>(sub?.status ?? "trial");
  const [newExpiry, setNewExpiry] = useState<string>(
    sub?.expiresAt ? new Date(sub.expiresAt).toISOString().split("T")[0] : ""
  );
  const [note, setNote] = useState("");
  const [saved, setSaved] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSaveSubscription = () => {
    startTransition(async () => {
      await updateSubscriptionStatus(
        company.id,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        newStatus as any,
        newExpiry ? new Date(newExpiry) : null,
        note
      );
      setSaved(true);
      setTimeout(() => { setSaved(false); router.refresh(); }, 1500);
    });
  };

  const handleArchive = () => {
    if (!confirm(t("superAdmin.confirmArchive", { name: company.name }))) return;
    startTransition(async () => {
      await archiveCompany(company.id);
      router.refresh();
    });
  };

  const handleRestore = () => {
    startTransition(async () => {
      await restoreCompany(company.id);
      router.refresh();
    });
  };

  return (
    <div className="space-y-6 max-w-4xl">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Link
          href="/super-admin/companies"
          className="h-9 w-9 flex items-center justify-center rounded-md border border-input hover:bg-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-2xl font-bold">{company.name}</h1>
            {company.isArchived && (
              <span className="text-xs px-2 py-0.5 rounded border text-muted-foreground">{t("superAdmin.archived")}</span>
            )}
            {sub && (
              <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium", STATUS_CLS[sub.status] ?? "bg-gray-100")}>
                {t(statusTranslationKey(sub.status))}
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground">
            {company.email ?? t("superAdmin.noEmail")} · {t("superAdmin.createdOn", { date: formatDate(company.createdAt) })}
          </p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        <MetricCard label={t("superAdmin.users")} value={company.users.length} icon={<Users className="h-4 w-4" />} />
        <MetricCard label={t("superAdmin.stores")} value={company.stores.length} icon={<Store className="h-4 w-4" />} />
        <MetricCard label={t("superAdmin.customers")} value={company._count.customers} icon={<Building2 className="h-4 w-4" />} />
        <MetricCard label={t("superAdmin.repairs")} value={company._count.repairTickets} icon={<Wrench className="h-4 w-4" />} />
        <MetricCard label={t("superAdmin.posSales")} value={company._count.posSales} icon={<ShoppingBag className="h-4 w-4" />} />
        <MetricCard label={t("superAdmin.repairInvoices")} value={company._count.repairInvoices} icon={<CreditCard className="h-4 w-4" />} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Subscription management */}
        <div className="rounded-xl border border-border bg-card p-5 space-y-4">
          <h3 className="font-semibold flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-muted-foreground" />
            {t("superAdmin.subscription")}
          </h3>
          {sub ? (
            <div className="space-y-3 text-sm">
              <p className="text-muted-foreground">{t("superAdmin.plan")} : <span className="font-medium text-foreground">{sub.plan.name}</span></p>
              <div>
                <label className="block text-sm font-medium mb-1">{t("superAdmin.status")}</label>
                <select
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none"
                >
                  {STATUS_OPTS.map((o) => (
                    <option key={o.value} value={o.value}>{t(statusTranslationKey(o.value))}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t("superAdmin.expiryDate")}</label>
                <input
                  type="date"
                  value={newExpiry}
                  onChange={(e) => setNewExpiry(e.target.value)}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">{t("superAdmin.noteOptional")}</label>
                <input
                  type="text"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder={t("superAdmin.notePlaceholder")}
                  className="w-full h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none"
                />
              </div>
              <button
                onClick={handleSaveSubscription}
                disabled={isPending}
                className={cn(
                  "w-full inline-flex items-center justify-center gap-2 h-9 rounded-md text-sm font-medium transition-colors",
                  saved
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 disabled:opacity-50"
                )}
              >
                {saved ? <><CheckCircle2 className="h-4 w-4" /> {t("superAdmin.saved")}</> : t("superAdmin.update")}
              </button>
            </div>
          ) : (
            <p className="text-sm text-muted-foreground">{t("superAdmin.noSubscription")}</p>
          )}
        </div>

        {/* Users & stores */}
        <div className="space-y-4">
          <div className="rounded-xl border border-border bg-card p-5 space-y-3">
            <h3 className="font-semibold flex items-center gap-2">
              <Store className="h-4 w-4 text-muted-foreground" />
              {t("superAdmin.stores")}
            </h3>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {company.stores.map((s: any) => (
              <div key={s.id} className="flex items-center justify-between text-sm">
                <span>{s.name}</span>
                <span className={cn("text-xs px-1.5 py-0.5 rounded", s.isActive ? "text-emerald-700 bg-emerald-50" : "text-muted-foreground bg-muted")}>
                  {s.isActive ? t("superAdmin.active") : t("superAdmin.inactive")}
                </span>
              </div>
            ))}
          </div>

          {/* Danger zone */}
          <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 space-y-3">
            <h3 className="font-semibold text-destructive flex items-center gap-2 text-sm">
              <AlertTriangle className="h-4 w-4" />
              {t("superAdmin.dangerZone")}
            </h3>
            {company.isArchived ? (
              <button
                onClick={handleRestore}
                disabled={isPending}
                className="w-full h-9 rounded-md border border-border text-sm font-medium hover:bg-accent transition-colors"
              >
                {t("superAdmin.restoreCompany")}
              </button>
            ) : (
              <button
                onClick={handleArchive}
                disabled={isPending}
                className="w-full h-9 rounded-md bg-destructive/10 text-destructive text-sm font-medium hover:bg-destructive/20 transition-colors"
              >
                {t("superAdmin.archiveCompany")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
