import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { getCurrentCashSession, listCashSessions } from "@/features/pos/actions/cash-session.actions";
import { OpenSessionCard } from "@/features/pos/components/OpenSessionCard";
import { ActiveSessionCard } from "@/features/pos/components/ActiveSessionCard";
import { CashSessionHistory } from "@/features/pos/components/CashSessionHistory";
import { KpiStrip } from "@/components/shared/KpiStrip";
import { getTranslations } from "next-intl/server";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Gestion de la Caisse" };

export default async function CashRegisterPage() {
  const posT = await getTranslations("pos");
  const { t } = await getAppI18n();
  const session = await getSession();

  if (!session) redirect("/login");
  if (session.role === "Technician") redirect("/dashboard"); // Unauthorized

  const storeId = session.storeIds[0];
  const startOfToday = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());

  const [activeSession, history, revenueAgg, salesToday] = await Promise.all([
    getCurrentCashSession(),
    listCashSessions(),
    prisma.cashMovement.aggregate({
      where: { storeId, direction: "in", movementType: { in: ["pos_sale", "repair_payment", "debt_payment"] }, createdAt: { gte: startOfToday } },
      _sum: { amount: true },
    }),
    prisma.posSale.count({ where: { storeId, status: "completed", createdAt: { gte: startOfToday } } }),
  ]);

  const revenueToday = Math.round(Number(revenueAgg._sum.amount ?? 0));
  const sessionOpen = !!activeSession;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <KpiStrip items={[
        {
          label: t("kpi.sessionStatus"),
          value: sessionOpen ? t("kpi.sessionOpen") : t("kpi.sessionClosed"),
          tone: sessionOpen ? "green" : "default",
        },
        { label: t("kpi.revenueToday"), value: `${revenueToday.toLocaleString()} DZD`, tone: revenueToday > 0 ? "green" : "default" },
        { label: t("kpi.salesToday"), value: String(salesToday) },
      ]} />
      <div className="space-y-10">
        <section>
          {activeSession ? (
            <ActiveSessionCard 
              session={activeSession} 
              userRole={session.role} 
              currentUserId={session.sub} 
            />
          ) : (
            <OpenSessionCard />
          )}
        </section>

        <section>
          <h2 className="text-xl font-bold mb-4">{posT("sessionHistory")}</h2>
          <CashSessionHistory sessions={history} />
        </section>
      </div>
    </div>
  );
}
