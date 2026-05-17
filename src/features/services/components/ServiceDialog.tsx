"use client";

import { Dialog } from "@/components/ui/dialog";
import { ServiceForm, type ServiceFormDeviceCategory, type CustomerGroup } from "./ServiceForm";
import type { ServiceTypeRecord } from "@/features/services/actions/service-type.actions";
import type { ServiceListItem } from "@/features/inventory/actions/service.actions";
import { useAppI18n } from "@/lib/i18n/ui";

interface Props {
  open: boolean;
  onClose: () => void;
  deviceCategories: ServiceFormDeviceCategory[];
  serviceTypes: ServiceTypeRecord[];
  customerGroups: CustomerGroup[];
  editingService: ServiceListItem | null;
}

export function ServiceDialog({ open, onClose, deviceCategories, serviceTypes, customerGroups, editingService }: Props) {
  const { locale } = useAppI18n();

  const title = editingService
    ? (locale === "ar" ? "تعديل الخدمة" : locale === "en" ? "Edit Service" : "Modifier le service")
    : (locale === "ar" ? "خدمة جديدة" : locale === "en" ? "New Service" : "Nouveau service");

  const defaultValues = editingService
    ? {
        id: editingService.id,
        nameFr: editingService.nameFr,
        nameEn: editingService.nameEn ?? null,
        nameAr: editingService.nameAr ?? null,
        sku: editingService.sku,
        deviceCategoryIds: editingService.deviceCategories.map((dc) => dc.id),
        serviceTypeId: editingService.serviceType?.id ?? null,
        sellingPrice: editingService.sellingPrice,
        basePrice: editingService.basePrice ?? null,
        costPrice: editingService.costPrice ?? null,
        estimatedDurationMinutes: editingService.estimatedDurationMinutes ?? null,
        notes: editingService.notes ?? null,
        groupPrices: editingService.groupPrices,
      }
    : undefined;

  return (
    <Dialog open={open} onClose={onClose} title={title} className="max-w-2xl w-full">
      {open && (
        <ServiceForm
          deviceCategories={deviceCategories}
          serviceTypes={serviceTypes}
          customerGroups={customerGroups}
          defaultValues={defaultValues}
          onSuccess={onClose}
        />
      )}
    </Dialog>
  );
}
