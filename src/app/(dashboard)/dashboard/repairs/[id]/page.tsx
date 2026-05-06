import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { getRepairTicket } from "@/features/repairs/actions/repair.actions";
import { RepairDetail } from "@/features/repairs/components/RepairDetail";
import { getEstimatesForTicket } from "@/features/estimates/actions/estimate.actions";
import { EstimateSection } from "@/features/estimates/components/EstimateSection";
import { listReservedPartsForTicket } from "@/features/repairs/actions/reservation.actions";
import { ReservedPartsSection } from "@/features/repairs/components/ReservedPartsSection";
import { getRepairInvoice } from "@/features/repairs/actions/invoice.actions";
import { RepairInvoiceSection } from "@/features/repairs/components/RepairInvoiceSection";
import { getAppI18n } from "@/lib/i18n/server";

export async function generateMetadata() {
  return { title: "Détail Ticket | Réparations" };
}

export default async function RepairDetailPage(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const companyId = session.companyId;
  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  const [ticket, technicians, estimates, reservedParts, invoiceResult] = await Promise.all([
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
    getEstimatesForTicket(params.id),
    listReservedPartsForTicket(params.id),
    getRepairInvoice(params.id),
  ]);

  const initialInvoice =
    invoiceResult && !('error' in invoiceResult) ? invoiceResult : null;

  if (!ticket) {
    return (
      <div className="flex h-[50vh] flex-col items-center justify-center text-center">
        <h2 className="text-2xl font-bold tracking-tight">{t("repairs.ticketNotFound")}</h2>
        <p className="mt-2 text-muted-foreground">{t("repairs.ticketNotFoundDescription")}</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl space-y-5">
      <RepairDetail
        ticket={ticket}
        technicians={technicians}
        userRole={session.role}
        reservedParts={reservedParts}
        estimates={estimates}
      />
      <EstimateSection ticket={ticket} initialEstimates={estimates} userRole={session.role} />
      <ReservedPartsSection ticket={ticket} initialParts={reservedParts} userRole={session.role} />

      {/* Invoice & Payment section — hidden from Technician */}
      {session.role !== "Technician" && (
        <div className="rounded-md border border-border bg-card p-4 shadow-[var(--shadow-sm)]">
          <div className="flex items-center gap-2 mb-4">
            <span className="text-sm font-semibold">{t("repairs.invoicePayment")}</span>
          </div>
          <RepairInvoiceSection
            ticketId={ticket.id}
            storeId={ticket.storeId}
            customerId={ticket.customerId}
            ticketStatus={ticket.currentStatus}
            isWalkin={ticket.customer.customerType === "walkin"}
            initialInvoice={initialInvoice}
            userRole={session.role}
          />
        </div>
      )}
    </div>
  );
}
