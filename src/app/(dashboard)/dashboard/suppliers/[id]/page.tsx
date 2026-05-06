import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect, notFound } from "next/navigation";
import { getSupplier } from "@/features/inventory/actions/supplier.actions";
import Link from "next/link";
import { Building2, MapPin, Phone, Pencil, FileText } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Détails fournisseur — REPAIRE" };

export default async function SupplierDetailPage(props: { params: Promise<{ id: string }> }) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  
  // Actually, anyone who can view inventory can probably view supplier details (but not manage them).
  // Wait, the rule was "Cashier/Technician should not manage suppliers. Cashier/Technician can be blocked from suppliers page if that matches current navigation rules."
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const params = await props.params;
  const supplier = await getSupplier(params.id);

  if (!supplier) {
    notFound();
  }

  const bal = supplier.balance;
  const hasDebt = bal > 0;

  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="rounded-md bg-muted p-3">
            <Building2 className="h-6 w-6 text-muted-foreground" />
          </div>
          <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
              {supplier.name}
              {supplier.isArchived && (
                <span className="text-xs font-medium text-muted-foreground border border-border rounded px-1.5 py-0.5">
                  {t("customers.archived")}
                </span>
              )}
            </h1>
            <p className="text-sm text-muted-foreground">{t("suppliers.supplier")}</p>
          </div>
        </div>
        
        {!supplier.isArchived && (
          <Link
            href={`/dashboard/suppliers/${supplier.id}/edit`}
            className="inline-flex shrink-0 items-center gap-1.5 rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            <Pencil className="h-4 w-4" />
            {t("common.edit")}
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Info Card */}
        <div className="md:col-span-1 space-y-6">
          <div className="rounded-xl border border-border bg-card p-5 space-y-4">
            <h3 className="font-semibold text-foreground">{t("suppliers.contact")}</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{supplier.phone || t("suppliers.notProvided")}</span>
              </div>
              <div className="flex items-start gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>{supplier.address || t("suppliers.notProvided")}</span>
              </div>
            </div>

            {supplier.notes && (
              <>
                <div className="h-px bg-border" />
                <div className="space-y-1">
                  <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wider"> {t("common.notes")}</h4>
                  <p className="text-sm text-foreground whitespace-pre-wrap">{supplier.notes}</p>
                </div>
              </>
            )}
          </div>

          <div className="rounded-xl border border-border bg-card p-5 space-y-2">
            <h3 className="font-semibold text-foreground">{t("suppliers.financialBalance")}</h3>
            <div className="flex items-baseline gap-2">
              <span className={`text-2xl font-bold ${hasDebt ? "text-destructive" : "text-foreground"}`}>
                {formatCurrency(bal)}
              </span>
            </div>
            {hasDebt ? (
              <p className="text-sm text-muted-foreground">
                {t("suppliers.amountDueInfo")}
              </p>
            ) : (
              <p className="text-sm text-muted-foreground">
                {t("suppliers.noPendingBalance")}
              </p>
            )}
          </div>
        </div>

        {/* Purchase History (Placeholder for now) */}
        <div className="md:col-span-2 space-y-4">
          <h2 className="text-xl font-semibold tracking-tight">{t("suppliers.purchaseHistory")}</h2>
          
          <div className="rounded-xl border border-dashed border-border bg-card p-10 flex flex-col items-center justify-center text-center">
            <div className="mb-4 rounded-full bg-muted p-3">
              <FileText className="h-6 w-6 text-muted-foreground" />
            </div>
            <p className="text-sm font-medium text-foreground">{t("suppliers.noPurchaseInvoices")}</p>
            <p className="mt-1 text-sm text-muted-foreground max-w-sm">
              {t("suppliers.noPurchaseInvoicesDescription")}
            </p>
            {/* Link to create purchase invoice (to be implemented) */}
            <Link
              href={`/dashboard/inventory/purchases/new?supplierId=${supplier.id}`}
              className="mt-4 inline-flex items-center gap-1.5 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              {t("suppliers.createPurchase")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
