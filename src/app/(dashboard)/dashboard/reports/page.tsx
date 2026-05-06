import { PageHeader } from "@/components/shared/PageHeader";
import {
  TrendingUp,
  BarChart3,
  Wrench,
  CreditCard,
  Package,
  Users2,
  ArrowRightLeft,
  ChevronRight,
  Shield
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";
import { getTranslations } from "next-intl/server";

interface ReportLink {
  titleKey: string;
  descriptionKey: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export default async function ReportsIndexPage() {
  const t = await getTranslations("reportsPage");
  const session = await getSession();
  if (!session) redirect("/login");
  
  const canView = hasPermission(session.role, "reports:view");
  if (!canView) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
        <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <CreditCard className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold">{t("restrictedTitle")}</h2>
        <p className="text-muted-foreground mt-2 max-w-sm">
          {t("restrictedDescription")}
        </p>
      </div>
    );
  }

  const reports: ReportLink[] = [
    {
      titleKey: "salesTitle",
      descriptionKey: "salesDescription",
      href: "/dashboard/reports/sales",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-primary/10 text-primary",
    },
    {
      titleKey: "profitTitle",
      descriptionKey: "profitDescription",
      href: "/dashboard/reports/profit",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      titleKey: "repairsTitle",
      descriptionKey: "repairsDescription",
      href: "/dashboard/reports/repairs",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      titleKey: "debtTitle",
      descriptionKey: "debtDescription",
      href: "/dashboard/reports/debt",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-destructive/10 text-destructive",
    },
    {
      titleKey: "staffTitle",
      descriptionKey: "staffDescription",
      href: "/dashboard/reports/technicians",
      icon: <Users2 className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      titleKey: "inventoryTitle",
      descriptionKey: "inventoryDescription",
      href: "/dashboard/reports/inventory",
      icon: <Package className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      titleKey: "cashFlowTitle",
      descriptionKey: "cashFlowDescription",
      href: "/dashboard/reports/cash-flow",
      icon: <ArrowRightLeft className="h-6 w-6" />,
      color: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    },
    {
      titleKey: "auditTitle",
      descriptionKey: "auditDescription",
      href: "/dashboard/reports/audit",
      icon: <Shield className="h-6 w-6" />,
      color: "bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title={t("title")} 
        description={t("description")}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reports.map((report) => (
          <Link 
            key={report.href}
            href={report.href}
            className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:shadow-md hover:border-primary/50 transition-all"
          >
            <div className={cn("rounded-lg p-3 shrink-0 transition-transform group-hover:scale-110", report.color)}>
              {report.icon}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-foreground group-hover:text-primary transition-colors truncate">
                  {t(report.titleKey)}
                </h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {t(report.descriptionKey)}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
