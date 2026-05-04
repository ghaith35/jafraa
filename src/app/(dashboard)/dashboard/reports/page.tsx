import { PageHeader } from "@/components/shared/PageHeader";
import { 
  TrendingUp, 
  BarChart3, 
  Wrench, 
  CreditCard, 
  Package, 
  Users2, 
  ArrowRightLeft,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";

interface ReportLink {
  title: string;
  description: string;
  href: string;
  icon: React.ReactNode;
  color: string;
}

export default async function ReportsIndexPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  
  const canView = hasPermission(session.role, "reports:view");
  if (!canView) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
        <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <CreditCard className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold">Accès restreint</h2>
        <p className="text-muted-foreground mt-2 max-w-sm">
          Seuls les administrateurs et les managers peuvent consulter les rapports financiers et de performance.
        </p>
      </div>
    );
  }

  const reports: ReportLink[] = [
    {
      title: "Ventes POS",
      description: "Chiffre d'affaires, paiements et volume des ventes.",
      href: "/dashboard/reports/sales",
      icon: <TrendingUp className="h-6 w-6" />,
      color: "bg-primary/10 text-primary",
    },
    {
      title: "Rentabilité",
      description: "Analyse des bénéfices, marges et coûts (FIFO).",
      href: "/dashboard/reports/profit",
      icon: <BarChart3 className="h-6 w-6" />,
      color: "bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400",
    },
    {
      title: "Réparations",
      description: "Suivi de l'atelier, tickets et taux de réussite.",
      href: "/dashboard/reports/repairs",
      icon: <Wrench className="h-6 w-6" />,
      color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    },
    {
      title: "Dettes Clients",
      description: "État des créances et liste des débiteurs.",
      href: "/dashboard/reports/debt",
      icon: <CreditCard className="h-6 w-6" />,
      color: "bg-destructive/10 text-destructive",
    },
    {
      title: "Performance Staff",
      description: "Productivité par technicien et chiffre par vendeur.",
      href: "/dashboard/reports/technicians",
      icon: <Users2 className="h-6 w-6" />,
      color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    },
    {
      title: "Stock & Inventaire",
      description: "Santé du stock, alertes et pertes enregistrées.",
      href: "/dashboard/reports/inventory",
      icon: <Package className="h-6 w-6" />,
      color: "bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400",
    },
    {
      title: "Flux de Trésorerie",
      description: "Entrées et sorties d'espèces réelles.",
      href: "/dashboard/reports/cash-flow",
      icon: <ArrowRightLeft className="h-6 w-6" />,
      color: "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
    },
  ];

  return (
    <div className="space-y-6">
      <PageHeader 
        title="Rapports & Analyses" 
        description="Pilotez votre boutique avec des données précises"
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
                  {report.title}
                </h3>
                <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                {report.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import { cn } from "@/lib/utils";
