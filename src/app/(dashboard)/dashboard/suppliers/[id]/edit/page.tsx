import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect, notFound } from "next/navigation";
import { getSupplier } from "@/features/inventory/actions/supplier.actions";
import { SupplierForm } from "@/features/inventory/components/SupplierForm";

export const metadata = { title: "Modifier le fournisseur — REPAIRE" };

export default async function EditSupplierPage(props: { params: Promise<{ id: string }> }) {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const params = await props.params;
  const supplier = await getSupplier(params.id);

  if (!supplier) {
    notFound();
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Modifier {supplier.name}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Mettez à jour les informations du fournisseur.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <SupplierForm supplier={supplier} />
      </div>
    </div>
  );
}
