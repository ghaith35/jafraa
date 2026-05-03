import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { listSuppliers } from "@/features/inventory/actions/supplier.actions";
import { prisma } from "@/lib/db";
import { PurchaseForm } from "@/features/inventory/components/PurchaseForm";

export const metadata = { title: "Nouvel achat — REPAIRE" };

export default async function NewPurchasePage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  // Fetch lookups
  const suppliers = await listSuppliers({ storeId, showArchived: false });
  const products = await prisma.product.findMany({
    where: { storeId, isArchived: false },
    select: { id: true, name: true, sku: true },
    orderBy: { name: "asc" },
  });
  const parts = await prisma.part.findMany({
    where: { storeId, isArchived: false },
    select: { id: true, name: true, sku: true },
    orderBy: { name: "asc" },
  });

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Saisir une facture d&apos;achat
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          L&apos;enregistrement d&apos;un achat augmente automatiquement le stock et crée un historique de mouvement.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-4 sm:p-6 shadow-sm">
        <PurchaseForm
          suppliers={suppliers}
          products={products}
          parts={parts}
        />
      </div>
    </div>
  );
}
