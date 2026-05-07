import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { listServiceCategoriesManaged } from "@/features/inventory/actions/service-category.actions";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";
import { ServiceCategoryManager } from "@/features/inventory/components/ServiceCategoryManager";

export const metadata = { title: "Catégories services" };

export default async function ServiceCategoriesPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");
  const canManage = hasPermission(session.role, "inventory:manage");
  const [categories, deviceCategories] = await Promise.all([
    listServiceCategoriesManaged({ includeArchived: true }),
    listDeviceCategories(),
  ]);

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("services.categoriesTitle")}
        description={t("services.categoriesDescription")}
        actions={canManage ? <Link href="/dashboard/services/new" className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4" />{t("inventory.newService")}</Link> : null}
      />
      <ServiceCategoryManager
        categories={categories}
        deviceCategories={deviceCategories.map((category) => ({
          id: category.id,
          nameFr: category.nameFr,
          nameEn: category.nameEn,
          nameAr: category.nameAr,
        }))}
        canManage={canManage}
      />
    </div>
  );
}
