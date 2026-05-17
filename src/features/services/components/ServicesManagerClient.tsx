"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Pagination } from "@/components/shared/Pagination";
import { InventorySearchBar } from "@/features/inventory/components/InventorySearchBar";
import { ServiceList } from "@/features/inventory/components/ServiceList";
import { ServiceDeviceSidebar } from "./ServiceDeviceSidebar";
import { ServiceDialog } from "./ServiceDialog";
import type { ServiceListItem } from "@/features/inventory/actions/service.actions";
import type { ServiceTypeRecord } from "@/features/services/actions/service-type.actions";
import type { ServiceFormDeviceCategory, CustomerGroup } from "./ServiceForm";
import type { UserRole } from "@prisma/client";
import { useAppI18n } from "@/lib/i18n/ui";

type DeviceCategory = ServiceFormDeviceCategory & { sortOrder: number };

interface Props {
  canManage: boolean;
  services: ServiceListItem[];
  deviceCategories: DeviceCategory[];
  serviceTypes: ServiceTypeRecord[];
  customerGroups: CustomerGroup[];
  userRole: UserRole;
  counts: Record<string, number>;
  selectedDeviceId: string | null;
  searchDefaultValue: string;
  searchPlaceholder: string;
  page: number;
  totalPages: number;
  total: number;
  perPage: number;
}

export function ServicesManagerClient({
  canManage,
  services,
  deviceCategories,
  serviceTypes,
  customerGroups,
  userRole,
  counts,
  selectedDeviceId,
  searchDefaultValue,
  searchPlaceholder,
  page,
  totalPages,
  total,
  perPage,
}: Props) {
  const { locale } = useAppI18n();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingService, setEditingService] = useState<ServiceListItem | null>(null);

  function openNew() {
    setEditingService(null);
    setDialogOpen(true);
  }

  function openEdit(service: ServiceListItem) {
    setEditingService(service);
    setDialogOpen(true);
  }

  function closeDialog() {
    setDialogOpen(false);
    setEditingService(null);
  }

  const newServiceLabel =
    locale === "ar" ? "خدمة جديدة" : locale === "en" ? "New Service" : "Nouveau service";

  return (
    <div className="flex flex-col gap-4" style={{ height: "calc(100svh - 3.5rem - 2.5rem)" }}>
      {/* ── Fixed header row: title + search + button ───────────────────── */}
      <div className="flex items-center gap-3 shrink-0">
        <div className="w-64 shrink-0">
          <InventorySearchBar
            placeholder={searchPlaceholder}
            defaultValue={searchDefaultValue}
          />
        </div>
        {canManage && (
          <button
            type="button"
            onClick={openNew}
            className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
          >
            <Plus className="h-4 w-4" />
            {newServiceLabel}
          </button>
        )}
      </div>

      {/* ── Body row: sidebar + content ──────────────────────────────────── */}
      <div className="flex gap-4 flex-1 min-h-0">
        {/* Sidebar — full height, no internal scroll */}
        <ServiceDeviceSidebar
          deviceCategories={deviceCategories}
          counts={counts}
          selectedDeviceId={selectedDeviceId}
        />

        {/* Content column — list scrolls, pagination pinned bottom */}
        <div className="flex flex-col flex-1 min-w-0 min-h-0 gap-3">

          {/* Only this div scrolls */}
          <div className="flex-1 overflow-y-auto min-h-0 pr-0.5">
            <ServiceList
              services={services}
              userRole={userRole}
              onEdit={canManage ? openEdit : undefined}
            />
          </div>

          <Pagination
            page={page}
            totalPages={totalPages}
            total={total}
            perPage={perPage}
          />
        </div>
      </div>

      <ServiceDialog
        open={dialogOpen}
        onClose={closeDialog}
        deviceCategories={deviceCategories}
        serviceTypes={serviceTypes}
        customerGroups={customerGroups}
        editingService={editingService}
      />
    </div>
  );
}
