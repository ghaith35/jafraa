import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { ProductForm } from "@/features/inventory/components/ProductForm";

export const metadata = { title: "Nouveau produit" };

export default async function NewProductPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=products");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory?tab=products");

  const categories = await prisma.inventoryCategory.findMany({
    where: { storeId, itemType: "product", isActive: true },
    orderBy: { sortOrder: "asc" },
    select: { id: true, name: true },
  });

  return (
    <>
      <PageHeader title="Nouveau produit" description="Ajouter un produit à l'inventaire" />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ProductForm categories={categories} />
        </div>
      </div>
    </>
  );
}
