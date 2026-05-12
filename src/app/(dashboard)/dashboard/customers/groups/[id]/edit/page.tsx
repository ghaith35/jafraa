import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { getAppI18n } from "@/lib/i18n/server";
import { prisma } from "@/lib/db";
import { GroupForm } from "@/features/customers/components/GroupForm";

export const metadata = { title: "تعديل الفئة — العملاء" };

export default async function EditCustomerGroupPage(props: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "customers:view")) redirect("/dashboard");

  const { id } = await props.params;
  const { t } = await getAppI18n();

  const group = await prisma.customerGroup.findFirst({
    where: { id, companyId: session.companyId },
  });

  if (!group) redirect("/dashboard/customers/groups");

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("customers.editGroup")}</h1>
        <p className="text-sm text-muted-foreground mt-1">{group.name}</p>
      </div>
      <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
        <GroupForm
          defaultValues={{
            id: group.id,
            name: group.name,
            debtAlertLimit: group.debtAlertLimit ? Number(group.debtAlertLimit) : null,
            defaultDiscountPercent: Number(group.defaultDiscountPercent),
            sellingPrice: group.sellingPrice ? Number(group.sellingPrice) : null,
          }}
        />
      </div>
    </div>
  );
}
