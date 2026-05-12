import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { getAppI18n } from "@/lib/i18n/server";
import { GroupForm } from "@/features/customers/components/GroupForm";

export const metadata = { title: "إضافة فئة جديدة — العملاء" };

export default async function NewCustomerGroupPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "customers:view")) redirect("/dashboard");

  const { t } = await getAppI18n();

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("customers.newGroup")}</h1>
        <p className="text-sm text-muted-foreground mt-1">{t("customers.newGroupDescription")}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <GroupForm />
      </div>
    </div>
  );
}
