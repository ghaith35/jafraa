"use client";

import {
  Apple,
  Archive,
  Battery,
  Boxes,
  Camera,
  CheckCircle2,
  CircleHelp,
  Cpu,
  Droplets,
  Gamepad2,
  HardDrive,
  Keyboard,
  Laptop,
  Monitor,
  Package,
  PlugZap,
  Printer,
  Smartphone,
  Speaker,
  Tablet,
  Wrench,
  Wifi,
} from "lucide-react";
import { cn } from "@/lib/utils";

const ICONS = {
  apple: Apple,
  battery: Battery,
  brand: Archive,
  camera: Camera,
  charging: PlugZap,
  console: Gamepad2,
  desktop: Monitor,
  diagnostic: Wrench,
  fuser: Cpu,
  keyboard: Keyboard,
  laptop: Laptop,
  network: Wifi,
  other: CircleHelp,
  package: Package,
  paperJam: Archive,
  phone: Smartphone,
  printer: Printer,
  roller: Boxes,
  screen: Smartphone,
  software: Cpu,
  speaker: Speaker,
  storage: HardDrive,
  tablet: Tablet,
  toner: Droplets,
  water: Droplets,
} as const;

export type RepairTileIconKey = keyof typeof ICONS | string;

export function RepairTileCard({
  title,
  subtitle,
  iconKey = "other",
  selected,
  disabled,
  badge,
  stockStatus,
  density = "normal",
  onClick,
}: {
  title: string;
  subtitle?: string;
  iconKey?: RepairTileIconKey;
  selected?: boolean;
  disabled?: boolean;
  badge?: string | number;
  stockStatus?: "ok" | "low" | "out";
  density?: "compact" | "normal";
  onClick?: () => void;
}) {
  const Icon = ICONS[(iconKey as keyof typeof ICONS) || "other"] ?? CircleHelp;

  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "group relative w-full overflow-hidden rounded-2xl border bg-card text-start shadow-sm transition-all duration-200",
        "hover:-translate-y-0.5 hover:border-primary/60 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40",
        density === "compact" ? "min-h-24 p-3" : "min-h-32 p-4",
        selected && "border-primary bg-gradient-to-br from-primary/10 via-card to-card shadow-md ring-1 ring-primary/35",
        disabled && "cursor-not-allowed opacity-50 hover:translate-y-0 hover:shadow-sm"
      )}
    >
      <div className="absolute inset-x-0 top-0 h-1 bg-transparent transition-colors group-hover:bg-primary/60" />
      {selected && <CheckCircle2 className="absolute end-3 top-3 h-5 w-5 text-primary" />}
      {badge !== undefined && badge !== null && badge !== "" && (
        <span className="absolute start-3 top-3 rounded-full bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
          {badge}
        </span>
      )}

      <div className="flex h-full flex-col items-center justify-center text-center">
        <div
          className={cn(
            "mb-3 flex items-center justify-center rounded-2xl bg-muted/50 text-muted-foreground shadow-inner transition-colors group-hover:bg-primary/10 group-hover:text-primary",
            density === "compact" ? "h-10 w-10" : "h-14 w-14"
          )}
        >
          <Icon className={cn(density === "compact" ? "h-5 w-5" : "h-7 w-7")} />
        </div>
        <div className="line-clamp-2 text-sm font-bold leading-snug text-foreground">{title}</div>
        {subtitle && <div className="mt-1 line-clamp-2 text-xs leading-snug text-muted-foreground">{subtitle}</div>}
        {stockStatus && (
          <div
            className={cn(
              "mt-3 inline-flex rounded-full px-2 py-0.5 text-xs font-bold",
              stockStatus === "ok" && "bg-emerald-50 text-emerald-700",
              stockStatus === "low" && "bg-amber-50 text-amber-700",
              stockStatus === "out" && "bg-red-50 text-red-700"
            )}
          >
            {stockStatus === "ok" ? "OK" : stockStatus === "low" ? "Low" : "Out"}
          </div>
        )}
      </div>
    </button>
  );
}
