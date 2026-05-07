import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, Boxes, ClipboardList, FileText, History, Package, Plus, Truck, Wrench } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Inventaire" };

export default async function InventoryOverviewPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");
  const canManage = hasPermission(session.role, "inventory:manage");

  const [productCount, partCount, lowProducts, lowParts, movementCount, supplierCount, purchaseOrderCount, purchaseInvoiceCount] = await Promise.all([
    safeCount(() => prisma.product.count({ where: { storeId, isArchived: false } })),
    safeCount(() => prisma.part.count({ where: { storeId, isArchived: false } })),
    safeList(() => prisma.product.findMany({ where: { storeId, isArchived: false, lowStockThreshold: { not: null } }, select: { stockQty: true, lowStockThreshold: true } })),
    safeList(() => prisma.part.findMany({ where: { storeId, isArchived: false, lowStockThreshold: { not: null } }, select: { stockQty: true, lowStockThreshold: true } })),
    safeCount(() => prisma.stockMovement.count({ where: { storeId } })),
    safeCount(() => prisma.supplier.count({ where: { storeId, isArchived: false } })),
    safeCount(() => prisma.purchaseOrder.count({ where: { storeId } })),
    safeCount(() => prisma.purchaseInvoice.count({ where: { storeId } })),
  ]);

  const lowStockCount = [...lowProducts, ...lowParts].filter((i) => i.lowStockThreshold !== null && i.stockQty <= i.lowStockThreshold).length;

  const sections = [
    { href: "/dashboard/inventory/products", title: t("inventory.products"), desc: t("inventory.productsDescription"), icon: Package, count: productCount },
    { href: "/dashboard/inventory/parts", title: t("inventory.spareParts"), desc: t("inventory.partsDescription"), icon: Wrench, count: partCount },
    { href: "/dashboard/inventory/recovered-parts", title: t("inventory.recoveredParts"), desc: t("inventory.recoveredPartsDescription"), icon: Boxes, count: undefined },
    { href: "/dashboard/inventory/stock-movements", title: t("inventory.stockMovements"), desc: t("inventory.stockMovementsDescription"), icon: History, count: movementCount },
    { href: "/dashboard/suppliers", title: t("suppliers.title"), desc: t("inventory.suppliersDescription"), icon: Truck, count: supplierCount },
    { href: "/dashboard/inventory/purchase-orders", title: t("inventory.purchaseOrders"), desc: t("inventory.purchaseOrdersDescription"), icon: ClipboardList, count: purchaseOrderCount },
    { href: "/dashboard/inventory/purchases", title: t("inventory.purchaseInvoices"), desc: t("inventory.purchaseInvoicesDescription"), icon: FileText, count: purchaseInvoiceCount },
  ];

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("inventory.overview")}
        description={t("inventory.overviewDescription")}
        actions={canManage ? (
          <div className="flex flex-wrap gap-2">
            <Link href="/dashboard/inventory/products/new" className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4" />{t("inventory.newProduct")}</Link>
            <Link href="/dashboard/inventory/parts/new" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold hover:bg-muted"><Plus className="h-4 w-4" />{t("inventory.newPart")}</Link>
          </div>
        ) : null}
      />

      <div className="grid gap-4 md:grid-cols-4">
        <Metric label={t("inventory.products")} value={productCount} />
        <Metric label={t("inventory.spareParts")} value={partCount} />
        <Metric label={t("inventory.lowStockAlerts")} value={lowStockCount} icon={<AlertTriangle className="h-5 w-5 text-warning" />} />
        <Metric label={t("inventory.suppliers")} value={supplierCount} />
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {sections.map((section) => {
          const Icon = section.icon;
          return (
            <Link key={section.href} href={section.href} className="group rounded-2xl border border-border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:bg-muted/40 hover:shadow-md">
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl bg-primary/10 p-3 text-primary"><Icon className="h-5 w-5" /></div>
                {typeof section.count === "number" && <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">{section.count}</span>}
              </div>
              <h2 className="mt-4 text-base font-black text-foreground">{section.title}</h2>
              <p className="mt-1 text-sm text-muted-foreground">{section.desc}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

function Metric({ label, value, icon }: { label: string; value: number; icon?: React.ReactNode }) {
  return <div className="rounded-2xl border border-border bg-card p-5 shadow-sm"><div className="flex items-center justify-between text-sm font-bold text-muted-foreground"><span>{label}</span>{icon}</div><p className="mt-3 text-3xl font-black text-foreground">{value}</p></div>;
}


async function safeCount(query: () => Promise<number>) {
  try {
    return await query();
  } catch (error) {
    console.warn("Inventory overview count skipped because the database is missing an optional inventory table/column:", error);
    return 0;
  }
}

async function safeList<T>(query: () => Promise<T[]>) {
  try {
    return await query();
  } catch (error) {
    console.warn("Inventory overview list skipped because the database is missing an optional inventory table/column:", error);
    return [] as T[];
  }
}
