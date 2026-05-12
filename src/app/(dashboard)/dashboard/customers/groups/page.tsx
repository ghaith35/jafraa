import { redirect } from "next/navigation";
import Link from "next/link";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { getAppI18n } from "@/lib/i18n/server";
import { prisma } from "@/lib/db";
import { GroupsList } from "@/features/customers/components/GroupsList";

export const metadata = { title: "الفئات — العملاء" };

export default async function CustomerGroupsPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "customers:view")) redirect("/dashboard");

  const { t } = await getAppI18n();

  const groups = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId },
    orderBy: { name: "asc" },
    include: { _count: { select: { customers: true } } },
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{t("customers.groups")}</h1>
          <p className="text-sm text-muted-foreground mt-1">{t("customers.groupsDescription")}</p>
        </div>
        <Link
          href="/dashboard/customers/groups/new"
          className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"
        >
          <Plus className="h-4 w-4" />
          {t("customers.newGroup")}
        </Link>
      </div>

      <GroupsList groups={groups} />
    </div>
  );
}
