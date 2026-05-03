import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { CustomerForm } from "@/features/customers/components/CustomerForm";

export const metadata = { title: "Modifier le client" };

export default async function EditCustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { id } = await params;

  // All roles can edit customers (access controlled by session company scope)
  // Only Admin/Manager can archive (checked in actions)

  const customer = await prisma.customer.findFirst({
    where: { id, companyId: session.companyId, isArchived: false },
    select: {
      id: true,
      name: true,
      languagePreference: true,
      notes: true,
      customerGroupId: true,
      customerType: true,
    },
  });

  if (!customer) notFound();

  const groups = await prisma.customerGroup.findMany({
    where: { companyId: session.companyId, isArchived: false },
    select: { id: true, name: true },
    orderBy: { name: "asc" },
  });

  return (
    <>
      <div className="mb-4">
        <Link
          href={`/dashboard/customers/${id}`}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Retour à la fiche client
        </Link>
      </div>

      <PageHeader
        title="Modifier le client"
        description={customer.name}
      />

      <div className="max-w-xl">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <CustomerForm
            mode="edit"
            defaultValues={{
              id: customer.id,
              name: customer.name,
              languagePreference: customer.languagePreference,
              notes: customer.notes,
              customerGroupId: customer.customerGroupId,
            }}
            groups={groups}
          />
        </div>
      </div>
    </>
  );
}
