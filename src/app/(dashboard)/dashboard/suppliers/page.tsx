import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { Pagination } from "@/components/shared/Pagination";
import { KpiStrip } from "@/components/shared/KpiStrip";
import { listSuppliers } from "@/features/inventory/actions/supplier.actions";
import { SupplierList } from "@/features/inventory/components/SupplierList";
import { NewSupplierDialog } from "@/features/inventory/components/NewSupplierDialog";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Fournisseurs" };

export default async function SuppliersPage(props: {
  searchParams: Promise<{ q?: string; archived?: string; page?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  const sp = await props.searchParams;
  const q = sp.q;
  const showArchived = sp.archived === "true";
  const page = Number(sp.page) || 1;
  const perPage = 50;

  const [result, totalSuppliers, debtResult, pendingInvoices] = await Promise.all([
    listSuppliers({ q, showArchived, page, perPage }),
    prisma.supplier.count({ where: { storeId, isArchived: false } }),
    prisma.supplier.aggregate({ where: { storeId, isArchived: false, balance: { gt: 0 } }, _sum: { balance: true } }),
    prisma.purchaseInvoice.count({ where: { storeId, status: { in: ["unpaid", "partial"] } } }),
  ]);

  const totalOwed = Math.round(Number(debtResult._sum.balance ?? 0));

  return (
    <div className="space-y-5">
      <KpiStrip items={[
        { label: t("kpi.activeSuppliers"), value: String(totalSuppliers) },
        { label: t("kpi.totalOwed"), value: `${totalOwed.toLocaleString()} DZD`, tone: totalOwed > 0 ? "red" : "default" },
        { label: t("kpi.pendingInvoices"), value: String(pendingInvoices), tone: pendingInvoices > 0 ? "amber" : "default" },
      ]} />
      <div className="flex items-center justify-end">
        <NewSupplierDialog />
      </div>

      <Suspense fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}>
        <SupplierList suppliers={result.data} userRole={session.role} />
      </Suspense>
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
