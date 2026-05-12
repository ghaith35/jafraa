import { Suspense } from "react";
import Link from "next/link";
import { Plus } from "lucide-react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { Pagination } from "@/components/shared/Pagination";
import { listPurchaseInvoices } from "@/features/inventory/actions/purchase.actions";
import { PurchaseList } from "@/features/inventory/components/PurchaseList";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Achats — REPAIRE" };

export default async function PurchasesPage(props: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const sp = await props.searchParams;
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const result = await listPurchaseInvoices({ page, perPage });

  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t("inventory.purchases")}
          </h1>
          <p className="text-sm text-muted-foreground">
            {t("inventory.purchaseHistoryDescription")}
          </p>
        </div>
        <Link
          href="/dashboard/inventory/purchases/new"
          className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
        >
          <Plus className="h-4 w-4" />
          {t("inventory.recordPurchase")}
        </Link>
      </div>

      <Suspense fallback={<div className="h-20 bg-muted animate-pulse rounded-md" />}>
        <PurchaseList purchases={result.data} />
      </Suspense>
      <Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} />
    </div>
  );
}
