import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductForm } from "@/features/inventory/components/ProductForm";

export const metadata = { title: "Modifier le produit" };

export default async function EditProductPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=products");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory?tab=products");

  const { id } = await params;

  const [product, categories] = await Promise.all([
    prisma.product.findFirst({
      where: { id, storeId, isArchived: false },
    }),
    prisma.inventoryCategory.findMany({
      where: { storeId, itemType: "product", isActive: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, name: true },
    }),
  ]);

  if (!product) notFound();

  return (
    <>
      <PageHeader
        title={`Modifier — ${product.name}`}
        description="Mettre à jour les informations du produit"
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
