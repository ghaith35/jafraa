import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { PartForm } from "@/features/inventory/components/PartForm";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";

export const metadata = { title: "Modifier la pièce" };

export default async function EditPartPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=parts");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory?tab=parts");

  const { id } = await params;

  const [part, categories, deviceCategories] = await Promise.all([
    prisma.part.findFirst({ where: { id, storeId, isArchived: false } }),
    prisma.inventoryCategory.findMany({
      where: { storeId, itemType: "part", isActive: true },
      orderBy: { sortOrder: "asc" },
      select: { id: true, name: true },
    }),
    listDeviceCategories(),
  ]);

  if (!part) notFound();

  return (
    <>
      <PageHeader
        title={t("inventory.editPart", { name: part.name })}
        description={t("inventory.editPartDescription")}
      />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <PartForm
            categories={categories}
            deviceCategories={deviceCategories}
            companyId={session.companyId}
            storeId={storeId}
            part={{
              id: part.id,
              categoryId: part.categoryId,
              compatibleCategoryId: part.compatibleCategoryId,
              compatibleBrandId: part.compatibleBrandId,
              compatibleFamilyId: part.compatibleFamilyId,
              name: part.name,
              sku: part.sku,
              barcode: part.barcode,
              brand: part.brand,
              modelReference: part.modelReference,
              sellingPrice: part.sellingPrice,
              stockQty: part.stockQty,
              lowStockThreshold: part.lowStockThreshold,
              notes: part.notes,
              imageUrl: part.imageUrl,
            }}
          />
        </div>
      </div>
    </>
  );
}
