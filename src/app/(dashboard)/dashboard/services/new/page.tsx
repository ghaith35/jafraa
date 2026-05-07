import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ServiceForm } from "@/features/inventory/components/ServiceForm";
import { listServiceCategories, listServices } from "@/features/inventory/actions/service.actions";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";

export const metadata = { title: "Nouveau service" };

export default async function NewServicePage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/services");
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/services");

  const [categories, deviceCategories, packageCandidates] = await Promise.all([
    listServiceCategories({ storeId }),
    listDeviceCategories(),
    listServices({ storeId }),
  ]);

  return (
    <>
      <PageHeader title={t("inventory.newService")} description={t("inventory.addServiceDescription")} />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ServiceForm
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
            packageCandidates={packageCandidates.map((service) => ({
              id: service.id,
              name: service.name,
              deviceCategoryId: service.deviceCategoryId ?? null,
            }))}
          />
        </div>
      </div>
    </>
  );
}
