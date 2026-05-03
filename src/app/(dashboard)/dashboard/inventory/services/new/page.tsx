import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { ServiceForm } from "@/features/inventory/components/ServiceForm";

export const metadata = { title: "Nouveau service" };

export default async function NewServicePage() {
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard/inventory?tab=services");

  return (
    <>
      <PageHeader title="Nouveau service" description="Ajouter un service ou une prestation" />
      <div className="max-w-2xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <ServiceForm />
        </div>
      </div>
    </>
  );
}
