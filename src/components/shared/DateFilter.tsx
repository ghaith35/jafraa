"use client";

import { useRouter, usePathname } from "@/i18n/navigation";
import { useCallback } from "react";
import { useLocale } from "next-intl";
import { useSearchParams } from "next/navigation";

interface MonthEntry {
  year: number;
  month: number;
  count: number;
}

interface DayEntry {
  day: number;
  count: number;
}

interface Props {
  months: MonthEntry[];
  days: DayEntry[];
  selectedYear?: number;
  selectedMonth?: number;
  selectedDay?: number;
}

const MONTH_LOCALE = "fr";

function monthName(year: number, month: number): string {
  return new Intl.DateTimeFormat(MONTH_LOCALE, { month: "long", year: "numeric" }).format(new Date(year, month - 1));
}

function singleMonthName(month: number): string {
  return new Intl.DateTimeFormat(MONTH_LOCALE, { month: "long" }).format(new Date(2000, month - 1));
}

export function DateFilter({ months, days, selectedYear, selectedMonth, selectedDay }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const searchParams = useSearchParams();

  const navigate = useCallback(
    (overrides: Record<string, string | undefined>) => {
      // Start from current params so status/q/etc. are preserved
      const params = new URLSearchParams(searchParams.toString());
      params.delete("year"); params.delete("month"); params.delete("day"); params.delete("page");
      const year = overrides.year ?? (selectedYear ? String(selectedYear) : undefined);
      const month = overrides.month ?? (selectedMonth ? String(selectedMonth) : undefined);
      const day = overrides.day ?? (selectedDay ? String(selectedDay) : undefined);
      if (year) params.set("year", year);
      if (month) params.set("month", month);
      if (day) params.set("day", day);
      const qs = params.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname);
    },
    [router, pathname, selectedYear, selectedMonth, selectedDay, searchParams]
  );

  const hasActiveFilter = selectedYear || selectedMonth || selectedDay;

  return (
    <div className="flex items-center gap-1.5 flex-wrap">
      <select
        value={selectedMonth ? `${selectedYear}-${String(selectedMonth).padStart(2, "0")}` : ""}
        onChange={(e) => {
          if (!e.target.value) {
            navigate({ year: undefined, month: undefined, day: undefined });
            return;
          }
          const [y, m] = e.target.value.split("-");
          navigate({ year: y, month: m, day: undefined });
        }}
        className="h-9 rounded-md border border-input bg-background px-2 text-sm"
      >
        <option value="">{locale === "ar" ? "الشهر" : locale === "fr" ? "Mois" : "Month"}</option>
        {months.map((m) => (
          <option key={`${m.year}-${m.month}`} value={`${m.year}-${String(m.month).padStart(2, "0")}`}>
            {monthName(m.year, m.month)} ({m.count})
          </option>
        ))}
      </select>

      {selectedMonth && days.length > 0 && (
        <select
          value={selectedDay ? String(selectedDay) : ""}
          onChange={(e) => navigate({ day: e.target.value || undefined })}
          className="h-9 rounded-md border border-input bg-background px-2 text-sm"
        >
          <option value="">{locale === "ar" ? "اليوم" : locale === "fr" ? "Jour" : "Day"}</option>
          {days.map((d) => (
            <option key={d.day} value={String(d.day)}>
              {singleMonthName(selectedMonth)} {d.day} ({d.count})
            </option>
          ))}
        </select>
      )}

      {hasActiveFilter && (
        <button
          onClick={() => navigate({ year: undefined, month: undefined, day: undefined })}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm text-muted-foreground hover:bg-accent"
        >
          {locale === "ar" ? "إعادة" : locale === "fr" ? "Réinitialiser" : "Reset"}
        </button>
      )}
    </div>
  );
}
