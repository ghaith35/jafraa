import { notFound, redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ServiceForm } from "@/features/inventory/components/ServiceForm";

export const metadata = { title: "Modifier le service" };

export default async function EditServicePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=services");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard/inventory?tab=services");

  const { id } = await params;

  const service = await prisma.service.findFirst({
    where: { id, storeId, isArchived: false },
  });

  if (!service) notFound();

  return (
    <>
      <PageHeader
        title={t("inventory.editService", { name: service.name })}
        description={t("inventory.editServiceDescription")}
      />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ServiceForm
            service={{
              id: service.id,
              name: service.name,
              sku: service.sku,
              category: service.category,
              sellingPrice: service.sellingPrice,
              estimatedDurationMinutes: service.estimatedDurationMinutes,
              notes: service.notes,
            }}
          />
        </div>
      </div>
    </>
  );
}
