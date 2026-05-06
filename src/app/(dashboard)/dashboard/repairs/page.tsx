import Link from "next/link";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAppI18n } from "@/lib/i18n/server";
import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { listRepairTickets } from "@/features/repairs/actions/repair.actions";
import { RepairList } from "@/features/repairs/components/RepairList";
import type { RepairStatus } from "@prisma/client";

export const metadata = { title: "Réparations" };

export default async function RepairsPage(props: {
  searchParams: Promise<{ q?: string; status?: string }>;
}) {
  const { t } = await getAppI18n();
  const searchParams = await props.searchParams;
  const session = await getSession();
  if (!session) redirect("/login");

  const tickets = await listRepairTickets({
    q: searchParams.q,
    status: searchParams.status as RepairStatus | undefined,
  });

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <PageHeader
          title={t("repairs.title")}
          description={t("repairs.subtitle")}
        />
        <Link
          href="/dashboard/repairs/new"
          className="inline-flex h-9 items-center justify-center gap-2 whitespace-nowrap rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-[var(--shadow-xs)] transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          <Plus className="h-4 w-4" />
          {t("repairs.newTicket")}
        </Link>
      </div>

      <RepairList tickets={tickets} userRole={session.role} />
    </div>
  );
}
