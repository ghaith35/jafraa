import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { RepairForm } from "@/features/repairs/components/RepairForm";

export const metadata = { title: "Nouveau Ticket | Réparations" };

export default async function NewRepairPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const companyId = session.companyId;
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  // Fetch needed data for dropdowns
  const [customers, technicians] = await Promise.all([
    prisma.customer.findMany({
      where: { companyId, isArchived: false },
      select: {
        id: true,
        name: true,
        phones: { select: { phoneNumber: true }, take: 1 },
        assets: {
          select: {
            id: true,
            customBrand: true,
            customModel: true,
            deviceTypeName: true,
            imeiSerial: true,
          },
        },
      },
      orderBy: { name: "asc" },
    }),
    prisma.user.findMany({
      where: {
        companyId,
        storeAccess: { some: { storeId } },
        role: { in: ["Technician", "Manager", "Admin"] },
        isActive: true,
        isArchived: false,
      },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <PageHeader
        title={t("repairs.newTicketTitle")}
        description={t("repairs.newTicketDescription")}
      />
      <RepairForm customers={customers} technicians={technicians} />
    </div>
  );
}
