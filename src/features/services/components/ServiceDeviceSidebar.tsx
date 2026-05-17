"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { Smartphone, Laptop, Printer, Tablet, Monitor, Cpu, Gamepad2, Package, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";

interface DeviceCategory {
  id: string;
  key: string;
  nameFr: string;
  nameEn: string | null;
  nameAr: string | null;
  sortOrder: number;
}

interface Props {
  deviceCategories: DeviceCategory[];
  counts: Record<string, number>;
  selectedDeviceId: string | null;
}

const DEVICE_ICONS: Record<string, LucideIcon> = {
  phone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  desktop: Monitor,
  printer: Printer,
  console: Gamepad2,
  screen: Monitor,
  other: Cpu,
};

function deviceIcon(key: string): LucideIcon {
  return DEVICE_ICONS[key] ?? Package;
}

function deviceLabel(device: DeviceCategory, locale: string): string {
  if (locale === "ar") return device.nameAr || device.nameFr;
  if (locale === "en") return device.nameEn || device.nameFr;
  return device.nameFr;
}

export function ServiceDeviceSidebar({ deviceCategories, counts, selectedDeviceId }: Props) {
  const { t, locale } = useAppI18n();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const navigate = useCallback(
    (deviceId: string | null) => {
      const params = new URLSearchParams(searchParams.toString());
      params.delete("page");
      if (deviceId) params.set("device", deviceId);
      else params.delete("device");
      router.push(`${pathname}?${params.toString()}`);
    },
    [pathname, router, searchParams]
  );

  const totalAll = counts["all"] ?? 0;

  const visibleDevices = [...deviceCategories].sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <aside className="w-52 shrink-0 rounded-2xl border border-border bg-card p-2 space-y-0.5 overflow-y-auto">
      {/* All devices */}
      <button
        type="button"
        onClick={() => navigate(null)}
        className={cn(
          "w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
          !selectedDeviceId
            ? "bg-primary text-primary-foreground font-semibold"
            : "text-foreground hover:bg-accent"
        )}
      >
        <Package className="h-4 w-4 shrink-0" />
        <span className="flex-1 text-start truncate">{t("services.allDevices")}</span>
        {totalAll > 0 && (
          <span className={cn(
            "text-xs rounded-full px-1.5 py-0.5 font-mono",
            !selectedDeviceId ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
          )}>
            {totalAll}
          </span>
        )}
      </button>

      {visibleDevices.length > 0 && <div className="my-1 h-px bg-border" />}

      {visibleDevices.map((device) => {
        const Icon = deviceIcon(device.key);
        const count = counts[device.id] ?? 0;
        const isSelected = selectedDeviceId === device.id;
        return (
          <button
            key={device.id}
            type="button"
            onClick={() => navigate(device.id)}
            className={cn(
              "w-full flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm transition-colors",
              isSelected
                ? "bg-primary text-primary-foreground font-semibold"
                : "text-foreground hover:bg-accent"
            )}
          >
            <Icon className="h-4 w-4 shrink-0" />
            <span className="flex-1 text-start truncate">{deviceLabel(device, locale)}</span>
            {count > 0 && (
              <span className={cn(
                "text-xs rounded-full px-1.5 py-0.5 font-mono",
                isSelected ? "bg-primary-foreground/20 text-primary-foreground" : "bg-muted text-muted-foreground"
              )}>
                {count}
              </span>
            )}
          </button>
        );
      })}
    </aside>
  );
}
