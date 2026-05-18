import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { getAppI18n } from "@/lib/i18n/server";
import { listServices, countServicesByDeviceCategory } from "@/features/inventory/actions/service.actions";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";
import { listServiceTypes } from "@/features/services/actions/service-type.actions";
import { listCustomerGroups } from "@/features/customers/actions/customer-group.actions";
import { ServicesManagerClient } from "@/features/services/components/ServicesManagerClient";

export const metadata = { title: "Services" };

export default async function ServicesPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; archived?: string; device?: string; page?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const sp = await searchParams;
  const storeId = session.storeIds[0];
  const q = sp.q?.trim() || undefined;
  const deviceCategoryId = sp.device?.trim() || undefined;
  const page = Number(sp.page) || 1;
  const perPage = 50;

  const [result, counts, deviceCategories, serviceTypes, customerGroups, activeServices, archivedServices, typeCount] = await Promise.all([
    listServices({ storeId, q, showArchived: sp.archived === "1", deviceCategoryId, page, perPage }),
    countServicesByDeviceCategory(storeId),
    listDeviceCategories(),
    listServiceTypes({ includeInactive: false }),
    listCustomerGroups(),
    prisma.service.count({ where: { storeId, isArchived: false } }),
    prisma.service.count({ where: { storeId, isArchived: true } }),
    prisma.serviceType.count({ where: { companyId: session.companyId, isActive: true, services: { some: { storeId, isArchived: false } } } }),
  ]);

  const canManage = hasPermission(session.role, "inventory:manage");

  const kpiItems = [
    { label: t("kpi.activeServices"), value: String(activeServices) },
    { label: t("kpi.archivedServices"), value: String(archivedServices) },
    { label: t("kpi.serviceTypes"), value: String(typeCount) },
  ];

  return (
    <ServicesManagerClient
      canManage={canManage}
      kpiItems={kpiItems}
      services={result.data}
      deviceCategories={deviceCategories.map((d) => ({
        id: d.id,
        key: d.key,
        nameFr: d.nameFr,
        nameEn: d.nameEn,
        nameAr: d.nameAr,
        sortOrder: d.sortOrder,
      }))}
      serviceTypes={serviceTypes}
      customerGroups={customerGroups.map((g) => ({ id: g.id, name: g.name }))}
      userRole={session.role}
      counts={counts}
      selectedDeviceId={deviceCategoryId ?? null}
      searchDefaultValue={q ?? ""}
      searchPlaceholder={t("inventory.searchServices")}
      page={result.page}
      totalPages={result.totalPages}
      total={result.total}
      perPage={result.perPage}
    />
  );
}
