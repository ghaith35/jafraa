import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { CustomerForm } from "@/features/customers/components/CustomerForm";

export const metadata = { title: "Nouveau client" };

export default async function NewCustomerPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const groups = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <PageHeader
        title={t("customers.new")}
        description={t("customers.createDescription")}
      />
      <div className="max-w-xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <CustomerForm mode="create" groups={groups} />
        </div>
      </div>
    </>
  );
}
