import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { RepairIntakeWizard } from "@/features/repairs/components/intake/RepairIntakeWizard";
import { getRepairIntakeData } from "@/features/repairs/lib/intake-data";

export const metadata = { title: "Nouveau Ticket | Réparations" };

export default async function NewRepairPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const companyId = session.companyId;
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const { customers, technicians, catalog } = await getRepairIntakeData(companyId, storeId);

  return (
    <div className="mx-auto max-w-[1920px] space-y-4">
      <PageHeader
        title={t("repairs.newTicketTitle")}
        description={t("repairs.newTicketDescription")}
      />
      <RepairIntakeWizard customers={customers} technicians={technicians} catalog={catalog} />
    </div>
  );
}
