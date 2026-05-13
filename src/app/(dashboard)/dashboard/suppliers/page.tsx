import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { Pagination } from "@/components/shared/Pagination";
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

  const sp = await props.searchParams;
  const q = sp.q;
  const showArchived = sp.archived === "true";
  const page = Number(sp.page) || 1;
  const perPage = 50;

  const result = await listSuppliers({ q, showArchived, page, perPage });

  return (
    <div className="space-y-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">{t("suppliers.title")}</h1>
          <p className="text-sm text-muted-foreground mt-0.5">{t("suppliers.description")}</p>
        </div>
        <NewSupplierDialog />
      </div>

      <Suspense fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}>
        <SupplierList suppliers={result.data} userRole={session.role} />
      </Suspense>
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
