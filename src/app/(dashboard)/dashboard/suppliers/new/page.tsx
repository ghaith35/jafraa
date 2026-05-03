import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { SupplierForm } from "@/features/inventory/components/SupplierForm";

export const metadata = { title: "Nouveau fournisseur — REPAIRE" };

export default async function NewSupplierPage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          Nouveau fournisseur
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          Ajoutez un nouveau fournisseur à votre boutique.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <SupplierForm />
      </div>
    </div>
  );
}
