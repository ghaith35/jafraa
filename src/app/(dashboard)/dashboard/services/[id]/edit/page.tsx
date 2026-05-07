import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { getService } from "@/features/inventory/actions/service.actions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ServiceForm } from "@/features/inventory/components/ServiceForm";
import { listServiceCategories, listServices } from "@/features/inventory/actions/service.actions";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";

export const metadata = { title: "Modifier le service" };

export default async function EditServicePage({ params }: { params: Promise<{ id: string }> }) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/services");
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/services");
  const { id } = await params;
  const [service, categories, deviceCategories, packageCandidates] = await Promise.all([
    getService(id),
    listServiceCategories({ storeId }),
    listDeviceCategories(),
    listServices({ storeId }),
  ]);
  if (!service) notFound();
  return (
    <>
      <PageHeader title={t("inventory.editService", { name: service.name })} description={t("inventory.editServiceDescription")} />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ServiceForm
            service={service}
            categories={categories.map((category) => ({
              id: category.id,
              namePath: category.namePath,
              deviceCategoryId: category.deviceCategoryId,
            }))}
            deviceCategories={deviceCategories.map((category) => ({
              id: category.id,
              nameFr: category.nameFr,
              nameEn: category.nameEn,
              nameAr: category.nameAr,
            }))}
            packageCandidates={packageCandidates.map((candidate) => ({
              id: candidate.id,
              name: candidate.name,
              deviceCategoryId: candidate.deviceCategoryId ?? null,
            }))}
          />
        </div>
      </div>
    </>
  );
}
