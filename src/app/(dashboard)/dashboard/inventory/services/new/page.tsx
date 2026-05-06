import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { ServiceForm } from "@/features/inventory/components/ServiceForm";

export const metadata = { title: "Nouveau service" };

export default async function NewServicePage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=services");

  return (
    <>
      <PageHeader title={t("inventory.newService")} description={t("inventory.addServiceDescription")} />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ServiceForm />
        </div>
      </div>
    </>
  );
}
