"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { Calendar, Download, RefreshCw } from "lucide-react";
import { format, subDays } from "date-fns";
import { useAppI18n } from "@/lib/i18n/ui";

interface ReportShellProps {
  title: string;
  description: string;
  children: React.ReactNode;
}

export function ReportShell({ title, description, children }: ReportShellProps) {
  const { t } = useAppI18n();
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const startParam = searchParams.get("start") || format(subDays(new Date(), 30), "yyyy-MM-dd");
  const endParam = searchParams.get("end") || format(new Date(), "yyyy-MM-dd");

  const [startDate, setStartDate] = useState(startParam);
  const [endDate, setEndDate] = useState(endParam);
  const [isUpdating, setIsUpdating] = useState(false);

  const handleApply = () => {
    setIsUpdating(true);
    const params = new URLSearchParams(searchParams.toString());
    params.set("start", startDate);
    params.set("end", endDate);
    router.push(`?${params.toString()}`);
    setTimeout(() => setIsUpdating(false), 500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 print:hidden">
        <PageHeader title={title} description={description} />
        
        <div className="flex flex-wrap items-center gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-1.5 shadow-sm">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <input
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
            />
            <span className="text-muted-foreground">{t("common.to")}</span>
            <input
              type="date"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
              className="bg-transparent text-sm focus:outline-none"
            />
            <button
              onClick={handleApply}
              disabled={isUpdating}
              className="ml-2 rounded-md bg-primary/10 px-2 py-1 text-xs font-medium text-primary hover:bg-primary/20 disabled:opacity-50"
            >
              {isUpdating ? <RefreshCw className="h-3 w-3 animate-spin" /> : t("reports.apply")}
            </button>
          </div>

          <button
            onClick={handlePrint}
            className="flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium shadow-sm hover:bg-muted transition-colors"
          >
            <Download className="h-4 w-4" />
            {t("reports.exportPdf")}
          </button>
        </div>
      </div>

      <div className="print:block">
        {children}
      </div>
      
      {/* Print-only Header */}
      <div className="hidden print:block mb-8">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p className="text-sm text-muted-foreground">{description}</p>
        <p className="text-xs mt-2">
          {t("reports.period", { start: format(new Date(startDate), "dd/MM/yyyy"), end: format(new Date(endDate), "dd/MM/yyyy") })}
        </p>
      </div>
    </div>
  );
}
