import Link from "next/link";
import { redirect } from "next/navigation";
import { AlertTriangle, PackagePlus } from "lucide-react";
import { GenerateLowStockPurchaseOrderButton } from "@/features/inventory/components/PurchaseOrderActions";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { prisma } from "@/lib/db";

export const metadata = { title: "Réapprovisionnement" };

export default async function InventoryReorderPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const [parts, products] = await Promise.all([
    prisma.part.findMany({
      where: { storeId, isArchived: false, lowStockThreshold: { not: null } },
      orderBy: [{ stockQty: "asc" }, { name: "asc" }],
    }),
    prisma.product.findMany({
      where: { storeId, isArchived: false, lowStockThreshold: { not: null } },
      orderBy: [{ stockQty: "asc" }, { name: "asc" }],
    }),
  ]);

  const lowParts = parts.filter((p) => p.lowStockThreshold !== null && p.stockQty <= p.lowStockThreshold);
  const lowProducts = products.filter((p) => p.lowStockThreshold !== null && p.stockQty <= p.lowStockThreshold);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Réapprovisionnement intelligent"
        description="Articles sous seuil, quantité recommandée et lien vers les achats."
        actions={
          <div className="flex flex-wrap gap-2">
            <GenerateLowStockPurchaseOrderButton />
            <Link href="/dashboard/inventory/purchase-orders" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold hover:bg-muted">
              <PackagePlus className="h-4 w-4" />
              Voir commandes
            </Link>
          </div>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Metric label="Pièces à commander" value={lowParts.length} />
        <Metric label="Produits à commander" value={lowProducts.length} />
        <Metric label="Total alertes" value={lowParts.length + lowProducts.length} />
      </div>

      <ReorderTable title="Pièces de réparation" items={lowParts.map((item) => ({ ...item, type: "part" as const }))} />
      <ReorderTable title="Produits / accessoires" items={lowProducts.map((item) => ({ ...item, type: "product" as const }))} />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-muted-foreground">{label}</span>
        <AlertTriangle className="h-5 w-5 text-amber-500" />
      </div>
      <p className="mt-3 text-3xl font-black">{value}</p>
    </div>
  );
}

type ReorderItem = {
  id: string;
  type: "part" | "product";
  name: string;
  sku: string;
  stockQty: number;
  lowStockThreshold: number | null;
  sellingPrice: unknown;
  brand: string | null;
  modelReference: string | null;
};

function suggestedQty(stock: number, threshold: number | null) {
  const target = Math.max((threshold ?? 0) * 3, 5);
  return Math.max(target - stock, threshold ?? 1);
}

function ReorderTable({ title, items }: { title: string; items: ReorderItem[] }) {
  return (
    <section className="rounded-3xl border border-border bg-card shadow-sm">
      <div className="flex items-center justify-between border-b border-border px-5 py-4">
        <h2 className="font-black">{title}</h2>
        <span className="rounded-full bg-muted px-2.5 py-1 text-xs font-bold text-muted-foreground">{items.length}</span>
      </div>
      {items.length === 0 ? (
        <div className="p-10 text-center text-sm font-semibold text-muted-foreground">Aucune alerte pour cette catégorie.</div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-muted/50 text-xs uppercase text-muted-foreground">
              <tr>
                <th className="px-4 py-3 text-start">Article</th>
                <th className="px-4 py-3 text-start">SKU</th>
                <th className="px-4 py-3 text-end">Stock</th>
                <th className="px-4 py-3 text-end">Seuil</th>
                <th className="px-4 py-3 text-end">À commander</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={`${item.type}-${item.id}`} className="border-t border-border">
                  <td className="px-4 py-3">
                    <p className="font-bold">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{[item.brand, item.modelReference].filter(Boolean).join(" · ") || "—"}</p>
                  </td>
                  <td className="px-4 py-3 font-mono text-xs">{item.sku}</td>
                  <td className="px-4 py-3 text-end font-black text-red-600">{item.stockQty}</td>
                  <td className="px-4 py-3 text-end">{item.lowStockThreshold}</td>
                  <td className="px-4 py-3 text-end font-black text-primary">{suggestedQty(item.stockQty, item.lowStockThreshold)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
