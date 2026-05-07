import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { listInventoryCategories } from "@/features/inventory/actions/category.actions";
import { InventoryCategoryManager } from "@/features/inventory/components/InventoryCategoryManager";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";

export const metadata = { title: "Catégories inventaire" };

export default async function InventoryCategoriesPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const [categories, deviceCategories] = await Promise.all([
    listInventoryCategories({ includeInactive: true }),
    listDeviceCategories(),
  ]);
  const canManage = hasPermission(session.role, "inventory:manage");

  return (
    <div className="space-y-5">
      <PageHeader
        title={t("inventory.manageCategories")}
        description={t("inventory.manageCategoriesDescription")}
      />
      <InventoryCategoryManager categories={categories} deviceCategories={deviceCategories} canManage={canManage} />
    </div>
  );
}
