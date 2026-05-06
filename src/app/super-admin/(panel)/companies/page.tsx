export const dynamic = "force-dynamic";

import { listCompanies } from "@/features/super-admin/actions/companies.actions";
import Link from "next/link";
import { Building2, Users, ChevronRight, Store, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";
import { getAppI18n } from "@/lib/i18n/server";

const STATUS_KEYS = {
  trial: "superAdmin.status.trial",
  active: "superAdmin.status.active",
  grace: "superAdmin.status.grace",
  read_only: "superAdmin.status.read_only",
  suspended: "superAdmin.status.suspended",
  cancelled: "superAdmin.status.cancelled",
} as const;

const STATUS_CONFIG: Record<string, { statusKey: keyof typeof STATUS_KEYS; cls: string }> = {
  trial: { statusKey: "trial", cls: "bg-blue-100 text-blue-800 border-blue-200" },
  active: { statusKey: "active", cls: "bg-emerald-100 text-emerald-800 border-emerald-200" },
  grace: { statusKey: "grace", cls: "bg-amber-100 text-amber-800 border-amber-200" },
  read_only: { statusKey: "read_only", cls: "bg-gray-100 text-gray-700 border-gray-200" },
  suspended: { statusKey: "suspended", cls: "bg-red-100 text-red-800 border-red-200" },
  cancelled: { statusKey: "cancelled", cls: "bg-gray-100 text-gray-500 border-gray-200" },
};

export default async function CompaniesListPage() {
  const { t, formatDate } = await getAppI18n();
  const companies = await listCompanies();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{t("superAdmin.companies")}</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {t("superAdmin.companyCount", { count: companies.length, plural: companies.length !== 1 ? "s" : "" })}
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-card overflow-hidden">
        <div className="divide-y divide-border">
          {companies.length === 0 ? (
            <div className="p-10 text-center text-muted-foreground">
              {t("superAdmin.noCompanies")}
            </div>
          ) : (
            companies.map((company) => {
              const sub = company.subscription;
              const cfg = sub ? (STATUS_CONFIG[sub.status] ?? STATUS_CONFIG.trial) : null;

              return (
                <Link
                  key={company.id}
                  href={`/super-admin/companies/${company.id}`}
                  className="flex items-center gap-4 px-5 py-4 hover:bg-muted/30 transition-colors group"
                >
                  <div className="h-10 w-10 shrink-0 flex items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <Building2 className="h-5 w-5" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                        {company.name}
                      </span>
                      {company.isArchived && (
                        <span className="text-xs px-1.5 py-0.5 rounded border border-border text-muted-foreground">
                          {t("superAdmin.archived")}
                        </span>
                      )}
                      {cfg && (
                        <span className={cn("text-xs px-2 py-0.5 rounded-full border font-medium", cfg.cls)}>
                          {t(STATUS_KEYS[cfg.statusKey])}
                        </span>
                      )}
                      {sub && (
                        <span className="text-xs text-muted-foreground">{sub.planName}</span>
                      )}
                    </div>
                    <div className="flex items-center gap-4 mt-1 text-xs text-muted-foreground">
                      {company.email && <span>{company.email}</span>}
                      <span className="flex items-center gap-1">
                        <Users className="h-3 w-3" /> {company.counts.users}
                      </span>
                      <span className="flex items-center gap-1">
                        <Store className="h-3 w-3" /> {company.counts.stores}
                      </span>
                      <span className="flex items-center gap-1">
                        <Wrench className="h-3 w-3" /> {company.counts.repairTickets}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 shrink-0">
                    {sub?.expiresAt && (
                      <span className="text-xs text-muted-foreground hidden sm:block">
                        {t("superAdmin.expiresOn", { date: formatDate(sub.expiresAt) })}
                      </span>
                    )}
                    <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
}
