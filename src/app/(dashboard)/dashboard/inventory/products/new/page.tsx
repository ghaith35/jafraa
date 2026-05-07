import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ProductForm } from "@/features/inventory/components/ProductForm";
import { getStoreInventoryDeviceScopes } from "@/features/inventory/lib/device-scope.server";
import { isInventoryCategoryAllowedByScope } from "@/features/inventory/lib/device-scope.server";

export const metadata = { title: "Nouveau produit" };

export default async function NewProductPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory/products");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory/products");
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const categoriesRaw = await prisma.inventoryCategory.findMany({
    where: { storeId, itemType: "product" },
    orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
    select: { id: true, name: true, deviceCategory: { select: { key: true } } },
  });
  const categories = allowedScopes.length
    ? categoriesRaw.filter((category) =>
        isInventoryCategoryAllowedByScope(
          { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
          allowedScopes
        )
      )
    : categoriesRaw;

  return (
    <>
      <PageHeader title={t("inventory.newProduct")} description={t("inventory.addProductDescription")} />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ProductForm categories={categories} />
        </div>
      </div>
    </>
  );
}
