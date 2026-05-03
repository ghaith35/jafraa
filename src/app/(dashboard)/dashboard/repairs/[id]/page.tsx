import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getRepairTicket } from "@/features/repairs/actions/repair.actions";
import { RepairDetail } from "@/features/repairs/components/RepairDetail";

export async function generateMetadata() {
  return { title: "Détail Ticket | Réparations" };
}

export default async function RepairDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const session = await getSession();
  if (!session) redirect("/login");

  const companyId = session.companyId;
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const [ticket, technicians] = await Promise.all([
    getRepairTicket(params.id),
    prisma.user.findMany({
      where: {
        companyId,
        storeAccess: { some: { storeId } },
        role: { in: ["Technician", "Manager", "Admin"] },
        isActive: true,
        isArchived: false,
      },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
  ]);

  if (!ticket) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold tracking-tight">Ticket introuvable</h2>
        <p className="mt-2 text-muted-foreground">Ce ticket n&apos;existe pas ou vous n&apos;y avez pas accès.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto">
      <RepairDetail ticket={ticket} technicians={technicians} userRole={session.role} />
    </div>
  );
}
