"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { useAppI18n } from "@/lib/i18n/ui";

interface Props {
  months: { value: string; label: string }[];
  days: { value: string; label: string }[];
  selectedMonth: string;
  selectedDay: string;
}

const MONTH_NAMES: Record<string, string[]> = {
  fr: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"],
  ar: ["جانفي", "فيفري", "مارس", "أفريل", "ماي", "جوان", "جويلية", "أوت", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
  en: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
};

function formatDayLabel(d: Date, locale: string): string {
  const day = d.getDate();
  const monthIdx = d.getMonth();
  const monthName = (MONTH_NAMES[locale] ?? MONTH_NAMES.fr)[monthIdx];
  return `${day} ${monthName}`;
}

function formatMonthLabel(d: Date, locale: string): string {
  const monthIdx = d.getMonth();
  const year = d.getFullYear();
  const monthName = (MONTH_NAMES[locale] ?? MONTH_NAMES.fr)[monthIdx];
  return `${monthName} ${year}`;
}

const ALL_TIME: Record<string, string> = { fr: "Tout", ar: "الكل", en: "All" };
const ALL_MONTH: Record<string, string> = { fr: "Tout le mois", ar: "كل الشهر", en: "All month" };

export function ExpenseDateFilter({ months, days, selectedMonth, selectedDay }: Props) {
  const { locale } = useAppI18n();
  const router = useRouter();
  const searchParams = useSearchParams();

  const navigate = useCallback((month: string, day: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");
    if (month) params.set("month", month); else params.delete("month");
    if (day) params.set("day", day); else params.delete("day");
    router.push(`/dashboard/expenses?${params.toString()}`);
  }, [router, searchParams]);

  const parsedMonths = months.map((m) => ({ ...m, date: new Date(m.value + "-01") }));
  const parsedDays = days.map((d) => ({ ...d, date: new Date(d.value) }));

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Month selector */}
      <select
        value={selectedMonth}
        onChange={(e) => navigate(e.target.value, "")}
        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30"
      >
        <option value="">{ALL_TIME[locale] ?? ALL_TIME.fr}</option>
        {parsedMonths.map((m) => (
          <option key={m.value} value={m.value}>
            {formatMonthLabel(m.date, locale)}
          </option>
        ))}
      </select>

      {/* Day selector — always visible, disabled until month selected */}
      <select
        value={selectedDay}
        onChange={(e) => navigate(selectedMonth, e.target.value)}
        disabled={!selectedMonth}
        className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium text-[var(--text-primary)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)]/30 disabled:opacity-40 disabled:cursor-not-allowed"
      >
        <option value="">{ALL_MONTH[locale] ?? ALL_MONTH.fr}</option>
        {parsedDays.map((d) => (
          <option key={d.value} value={d.value}>
            {formatDayLabel(d.date, locale)}
          </option>
        ))}
      </select>

      {/* Reset */}
      {(selectedMonth || selectedDay) && (
        <button
          onClick={() => navigate("", "")}
          className="text-xs font-medium text-[var(--text-tertiary)] hover:text-[var(--text-primary)] transition-colors px-2 py-1"
        >
          ✕
        </button>
      )}
    </div>
  );
}
