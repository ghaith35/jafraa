import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import { RepairList } from "@/features/repairs/components/RepairList";
import type { RepairStatus } from "@prisma/client";

export const metadata = { title: "Réparations" };

export default async function RepairsPage(props: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const searchParams = await props.searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const tickets = await listRepairTickets({
    q: searchParams.q,
    status: searchParams.status as RepairStatus | undefined,
  });

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader
          title="Réparations"
          description="Tickets de réparation et suivi du statut"
        />
        <Link
          href="/dashboard/repairs/new"
          className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2"
        >
          <Plus className="h-4 w-4" />
          Nouveau ticket
        </Link>
      </div>

      <RepairList tickets={tickets} userRole={session.role} />
    </div>
  );
}
