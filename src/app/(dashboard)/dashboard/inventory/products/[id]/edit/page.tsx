import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ProductForm } from "@/features/inventory/components/ProductForm";
import { getStoreInventoryDeviceScopes } from "@/features/inventory/lib/device-scope.server";
import { isInventoryCategoryAllowedByScope } from "@/features/inventory/lib/device-scope.server";

export const metadata = { title: "Modifier le produit" };

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory/products");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory/products");
  const allowedScopes = await getStoreInventoryDeviceScopes(storeId);

  const { id } = await params;

  const [product, categoriesRaw] = await Promise.all([
    prisma.product.findFirst({
      where: { id, storeId, isArchived: false },
    }),
    prisma.inventoryCategory.findMany({
      where: { storeId, itemType: "product" },
      orderBy: [{ sortOrder: "asc" }, { name: "asc" }],
      select: { id: true, name: true, deviceCategory: { select: { key: true } } },
    }),
  ]);
  const categories = allowedScopes.length
    ? categoriesRaw.filter((category) =>
        isInventoryCategoryAllowedByScope(
          { name: category.name, deviceCategoryKey: category.deviceCategory?.key },
          allowedScopes
        )
      )
    : categoriesRaw;

  if (!product) notFound();

  return (
    <>
      <PageHeader
        title={t("inventory.editProduct", { name: product.name })}
        description={t("inventory.editProductDescription")}
      />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ProductForm
            categories={categories}
            product={{
              id: product.id,
              categoryId: product.categoryId,
              name: product.name,
              sku: product.sku,
              barcode: product.barcode,
              brand: product.brand,
              modelReference: product.modelReference,
              sellingPrice: product.sellingPrice,
              stockQty: product.stockQty,
              lowStockThreshold: product.lowStockThreshold,
              notes: product.notes,
              imageUrl: product.imageUrl,
            }}
          />
        </div>
      </div>
    </>
  );
}
