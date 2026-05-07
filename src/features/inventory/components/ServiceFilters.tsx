"use client";

import { useCallback } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppI18n } from "@/lib/i18n/ui";
import { cn } from "@/lib/utils";

interface DeviceOption {
  id: string;
  nameFr: string;
  nameEn: string;
  nameAr: string;
}

interface CategoryOption {
  id: string;
  namePath: string;
  deviceCategoryId: string | null;
  isActive: boolean;
}

interface Props {
  device?: string;
  serviceCategory?: string;
  archived?: boolean;
  devices: DeviceOption[];
  categories: CategoryOption[];
}

const inputCls =
  "h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring";

function deviceLabel(option: DeviceOption, locale: string): string {
  if (locale === "ar") return option.nameAr || option.nameFr;
  if (locale === "en") return option.nameEn || option.nameFr;
  return option.nameFr;
}

export function ServiceFilters({
  device,
  serviceCategory,
  archived,
  devices,
  categories,
}: Props) {
  const { t, locale } = useAppI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const updateParam = useCallback(
    (key: string, value?: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value && value.trim()) params.set(key, value.trim());
      else params.delete(key);
      const query = params.toString();
      router.push(query ? `${pathname}?${query}` : pathname);
    },
    [pathname, router, searchParams]
  );

  const visibleCategories = categories.filter((category) =>
    device ? category.deviceCategoryId === device : true
  );

  return (
    <div className="space-y-3 rounded-2xl border border-border bg-card p-4">
      <div className="grid gap-3 md:grid-cols-3">
        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.deviceType")}</span>
          <select className={inputCls} value={device ?? ""} onChange={(e) => updateParam("device", e.target.value)}>
            <option value="">{t("inventory.categoryAllDeviceTypes")}</option>
            {devices.map((option) => (
              <option key={option.id} value={option.id}>
                {deviceLabel(option, locale)}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.filterCategory")}</span>
          <select
            className={inputCls}
            value={serviceCategory ?? ""}
            onChange={(e) => updateParam("serviceCategory", e.target.value)}
          >
            <option value="">{t("inventory.filterAllCategories")}</option>
            {visibleCategories.map((option) => (
              <option key={option.id} value={option.id}>
                {option.namePath}
                {!option.isActive ? ` (${t("inventory.inactive")})` : ""}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-1">
          <span className="text-xs font-medium text-muted-foreground">{t("inventory.categoryIsActive")}</span>
          <select
            className={inputCls}
            value={archived ? "all" : "active"}
            onChange={(e) => updateParam("archived", e.target.value === "all" ? "1" : "")}
          >
            <option value="active">{t("inventory.hideInactive")}</option>
            <option value="all">{t("inventory.showInactive")}</option>
          </select>
        </label>
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => {
            const params = new URLSearchParams(searchParams.toString());
            ["device", "serviceCategory", "archived"].forEach((key) => params.delete(key));
            router.push(params.toString() ? `${pathname}?${params.toString()}` : pathname);
          }}
          className={cn("h-11 rounded-md border border-border px-3 text-sm text-foreground hover:bg-accent")}
        >
          {t("inventory.clearFilters")}
        </button>
      </div>
    </div>
  );
}
