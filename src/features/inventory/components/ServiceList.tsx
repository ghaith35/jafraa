"use client";

import { useTransition } from "react";
import { Zap, Clock, Archive, Pencil, RotateCcw } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { archiveService, reactivateService, type ServiceListItem } from "../actions/service.actions";
import { resolveServiceName } from "@/features/services/config/service-types";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";

interface Props {
  services: ServiceListItem[];
  userRole: UserRole;
  onEdit?: (service: ServiceListItem) => void;
}

function formatPrice(v: number, locale: string): string {
  const intlLocale = locale === "ar" ? "ar-DZ" : locale === "en" ? "en-GB" : "fr-DZ";
  return (
    new Intl.NumberFormat(intlLocale, {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(v) + (locale === "ar" ? " دج" : " DZD")
  );
}

function formatDuration(minutes: number, locale: string): string {
  if (locale === "ar") {
    if (minutes < 60) return `${minutes} دقيقة`;
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return m > 0 ? `${h}س ${m}د` : `${h} ساعة`;
  }
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

function ServiceRow({ service, canManage, onEdit }: { service: ServiceListItem; canManage: boolean; onEdit?: (s: ServiceListItem) => void }) {
  const { t, locale } = useAppI18n();
  const [isPending, startTransition] = useTransition();

  const displayName = resolveServiceName(service, locale);
  const cost = service.costPrice ?? 0;
  const marginAmount = service.sellingPrice - cost;
  const marginPercent = service.sellingPrice > 0 ? (marginAmount / service.sellingPrice) * 100 : 0;

  return (
    <div
      className={cn(
        "flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors",
        service.isArchived ? "opacity-60" : "hover:bg-accent/30"
      )}
    >
      <div className="rounded-md bg-muted p-2 shrink-0">
        <Zap className="h-4 w-4 text-muted-foreground" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-foreground truncate">{displayName}</span>
          {service.isArchived && (
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              {locale === "ar" ? "مؤرشف" : locale === "en" ? "Archived" : "Archivé"}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5 text-xs text-muted-foreground">
          <span className="font-mono">{service.sku}</span>
          {service.estimatedDurationMinutes != null && (
            <span className="flex items-center gap-0.5">
              <Clock className="h-3 w-3" />
              {formatDuration(service.estimatedDurationMinutes, locale)}
            </span>
          )}
        </div>
      </div>

      <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0">
        <span className="text-sm font-semibold text-foreground">
          {formatPrice(service.sellingPrice, locale)}
        </span>
        <span className="text-xs text-muted-foreground">
          {t("services.margin")}: {marginPercent.toFixed(1)}%
        </span>
      </div>

      {canManage && (
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={() => onEdit?.(service)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <Pencil className="h-3.5 w-3.5" />
          </button>
          {service.isArchived ? (
            <button
              type="button"
              onClick={() => startTransition(async () => { await reactivateService(service.id); })}
              disabled={isPending}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-50 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={() => startTransition(async () => { await archiveService(service.id); })}
              disabled={isPending}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
            >
              <Archive className="h-3.5 w-3.5" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}

export function ServiceList({ services, userRole, onEdit }: Props) {
  const { t, locale } = useAppI18n();
  const canManage = hasPermission(userRole, "inventory:manage");

  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Zap className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">{t("services.noServices")}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">{t("services.noServicesDesc")}</p>
      </div>
    );
  }

  // Group services by service type, preserving the sort order from the query
  const grouped = new Map<string, { label: string; items: ServiceListItem[] }>();
  const noTypeKey = "__no_type__";

  for (const s of services) {
    const key = s.serviceType?.id ?? noTypeKey;
    if (!grouped.has(key)) {
      const label = s.serviceType
        ? resolveServiceName(s.serviceType, locale)
        : locale === "ar" ? "بدون نوع" : locale === "en" ? "No type" : "Sans type";
      grouped.set(key, { label, items: [] });
    }
    grouped.get(key)!.items.push(s);
  }

  return (
    <div className="space-y-6">
      {Array.from(grouped.entries()).map(([key, group]) => (
        <div key={key} className="space-y-2">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground px-1">
            {group.label}
          </h3>
          <div className="space-y-1.5">
            {group.items.map((s) => (
              <ServiceRow key={s.id} service={s} canManage={canManage} onEdit={onEdit} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
