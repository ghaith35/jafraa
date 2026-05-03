"use client";

import { useTransition } from "react";
import Link from "next/link";
import { Zap, Clock, Archive, Pencil } from "lucide-react";
import { cn } from "@/lib/utils";
import { archiveService } from "../actions/service.actions";
import type { UserRole } from "@prisma/client";
import { hasPermission } from "@/lib/auth/permissions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Service {
  id: string;
  name: string;
  sku: string;
  category: string | null;
  sellingPrice: { toNumber: () => number } | number;
  estimatedDurationMinutes: number | null;
  isArchived: boolean;
}

interface Props {
  services: Service[];
  userRole: UserRole;
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

function formatPrice(v: { toNumber: () => number } | number): string {
  const num = typeof v === "number" ? v : v.toNumber();
  return new Intl.NumberFormat("fr-DZ", {
    style: "decimal",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num) + " DZD";
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
  const [isPending, startTransition] = useTransition();

  function handleArchive() {
    startTransition(async () => {
      await archiveService(service.id);
    });
  }

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
          {service.isArchived && (
            <span className="text-xs text-muted-foreground border border-border rounded px-1.5 py-0.5">
              Archivé
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
          {formatPrice(service.sellingPrice)}
        </span>
        <span className="text-xs text-muted-foreground">Main-d&apos;œuvre</span>
      </div>

      {/* Actions */}
      {canManage && !service.isArchived && (
        <div className="flex items-center gap-1 shrink-0">
          <Link
            href={`/dashboard/inventory/services/${service.id}/edit`}
            className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            title="Modifier"
          >
            <Pencil className="h-3.5 w-3.5" />
          </Link>
          <button
            type="button"
            onClick={handleArchive}
            disabled={isPending}
            title="Archiver ce service"
            className="rounded-md p-1.5 text-muted-foreground hover:text-destructive hover:bg-destructive/10 disabled:opacity-50 transition-colors"
          >
            <Archive className="h-3.5 w-3.5" />
          </button>
        </div>
      )}
    </div>
  );
}

// ─── List ─────────────────────────────────────────────────────────────────────

export function ServiceList({ services, userRole }: Props) {
  const canManage = hasPermission(userRole, "inventory:manage");

  if (services.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border bg-card p-10 text-center">
        <div className="mb-4 rounded-full bg-muted p-3">
          <Zap className="h-6 w-6 text-muted-foreground" />
        </div>
        <p className="text-sm font-medium text-foreground">Aucun service</p>
        <p className="mt-1 text-sm text-muted-foreground max-w-sm">
          Ajoutez vos services (diagnostic, main-d&apos;œuvre, logiciel…).
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
