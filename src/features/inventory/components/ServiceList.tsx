"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Zap, Clock, Archive, Pencil, RotateCcw, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppI18n } from "@/lib/i18n/ui";
import { archiveService, reactivateService } from "../actions/service.actions";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  sku: string;
  category: string | null;
  sellingPrice: number;
  basePrice: number | null;
  costPrice: number | null;
  estimatedDurationMinutes: number | null;
  isArchived: boolean;
  deviceCategory?: { nameFr: string; nameEn?: string | null; nameAr?: string | null } | null;
  _count?: { packageItems: number };
}

interface Props {
  services: Service[];
  userRole: UserRole;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(v: number, locale: string): string {
  const intlLocale = locale === "ar" ? "ar-DZ" : locale === "en" ? "en-GB" : "fr-DZ";
  return new Intl.NumberFormat(intlLocale, {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(v) + (locale === "ar" ? " دج" : " DZD");
}

function formatDuration(minutes: number): string {
  if (minutes < 60) return `${minutes} min`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}min` : `${h}h`;
}

// ─── Row ─────────────────────────────────────────────────────────────────────

function ServiceRow({
  service,
  canManage,
}: {
  service: Service;
  canManage: boolean;
}) {
  const { t, locale } = useAppI18n();
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    startTransition(async () => {
      await archiveService(service.id);
    });
  }
  function handleReactivate() {
    startTransition(async () => {
      await reactivateService(service.id);
    });
  }

  const cost = service.costPrice ?? 0;
  const marginAmount = service.sellingPrice - cost;
  const marginPercent = service.sellingPrice > 0 ? (marginAmount / service.sellingPrice) * 100 : 0;
  const deviceName =
    locale === "ar"
      ? service.deviceCategory?.nameAr || service.deviceCategory?.nameFr
      : locale === "en"
        ? service.deviceCategory?.nameEn || service.deviceCategory?.nameFr
        : service.deviceCategory?.nameFr;
  const isPackage = (service._count?.packageItems ?? 0) > 0;

  return (
    <div className={cn(
      "flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 transition-colors",
      service.isArchived ? "opacity-60" : "hover:bg-accent/30"
    )}>
      {/* Icon */}
      <div className="rounded-md bg-muted p-2 shrink-0">
        <Zap className="h-4 w-4 text-muted-foreground" />
      </div>

      {/* Main info */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm font-medium text-foreground truncate">{service.name}</span>
          {service.category && (
            <span className="text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5">
              {service.category}
            </span>
          )}
          {deviceName ? (
            <span className="text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5">
              {deviceName}
            </span>
          ) : null}
          {isPackage ? (
            <span className="inline-flex items-center gap-1 text-xs text-muted-foreground bg-muted rounded px-1.5 py-0.5">
              <Layers className="h-3 w-3" />
              {t("services.isPackage")}
            </span>
          ) : null}
          {service.isArchived && (
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              {t("inventory.archived")}
            </span>
          )}
        </div>
        <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-0.5 text-xs text-muted-foreground">
          <span className="font-mono">{service.sku}</span>
          {service.estimatedDurationMinutes != null && (
            <span className="flex items-center gap-0.5">
              <Clock className="h-3 w-3" />
              {formatDuration(service.estimatedDurationMinutes)}
            </span>
          )}
        </div>
      </div>

      {/* Price */}
      <div className="hidden sm:flex flex-col items-end gap-0.5 shrink-0">
        <span className="text-sm font-semibold text-foreground">
          {formatPrice(service.sellingPrice, locale)}
        </span>
        <span className="text-xs text-muted-foreground">
          {t("services.margin")}: {formatPrice(marginAmount, locale)} ({marginPercent.toFixed(1)}%)
        </span>
      </div>

      {/* Actions */}
      {canManage && (
        <div className="flex items-center gap-1 shrink-0">
          <Link
            href={`/dashboard/services/${service.id}/edit`}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title={t("common.edit")}
          >
            <Pencil className="h-3.5 w-3.5" />
          </Link>
          {service.isArchived ? (
            <button
              type="button"
              onClick={handleReactivate}
              disabled={isPending}
              title={t("inventory.reactivateCategory")}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-muted-foreground hover:text-foreground hover:bg-muted disabled:opacity-50 transition-colors"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleArchive}
              disabled={isPending}
              title={t("inventory.archiveService")}
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

// ─── List ─────────────────────────────────────────────────────────────────────

export function ServiceList({ services, userRole }: Props) {
  const { t } = useAppI18n();
  const canManage = hasPermission(userRole, "inventory:manage");

  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Zap className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">{t("inventory.noServices")}</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          {t("inventory.noServicesDesc")}
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-2">
      {services.map((s) => (
        <ServiceRow key={s.id} service={s} canManage={canManage} />
      ))}
    </div>
  );
}
