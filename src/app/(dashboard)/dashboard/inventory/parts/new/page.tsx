import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { PartForm } from "@/features/inventory/components/PartForm";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";
import { getStoreInventoryDeviceScopes } from "@/features/inventory/lib/device-scope.server";
import {
  isDeviceCategoryKeyInScopes,
} from "@/features/inventory/lib/device-scope";
import { isInventoryCategoryAllowedByScope } from "@/features/inventory/lib/device-scope.server";

export const metadata = { title: "Nouvelle pièce" };

export default async function NewPartPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory/parts");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory/parts");
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const [categoriesRaw, deviceCategoriesRaw] = await Promise.all([
    prisma.inventoryCategory.findMany({
      where: { storeId, itemType: "part", isActive: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, name: true, deviceCategory: { select: { key: true } } },
    }),
    listDeviceCategories(),
  ]);
  const categories = allowedScopes.length
    ? categoriesRaw.filter((category) =>
        isInventoryCategoryAllowedByScope(
          { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
          allowedScopes
        )
      )
    : categoriesRaw;
  const formCategories = categories.map((category) => ({
    id: category.id,
    name: category.name,
    deviceCategoryKey: category.deviceCategory?.key ?? null,
  }));
  const deviceCategories = allowedScopes.length
    ? deviceCategoriesRaw.filter((category) => isDeviceCategoryKeyInScopes(category.key, allowedScopes))
    : deviceCategoriesRaw;

  return (
    <>
      <PageHeader title={t("inventory.newPart")} description={t("inventory.addPartDescription")} />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <PartForm
            categories={formCategories}
            deviceCategories={deviceCategories}
            companyId={session.companyId}
            storeId={storeId}
          />
        </div>
      </div>
    </>
  );
}
