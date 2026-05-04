import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { PageHeader } from "@/components/shared/PageHeader";
import { getCurrentCashSession, listCashSessions } from "@/features/pos/actions/cash-session.actions";
import { OpenSessionCard } from "@/features/pos/components/OpenSessionCard";
import { ActiveSessionCard } from "@/features/pos/components/ActiveSessionCard";
import { CashSessionHistory } from "@/features/pos/components/CashSessionHistory";

export const metadata = { title: "Gestion de la Caisse" };

export default async function CashRegisterPage() {
  const session = await getSession();
  
  if (!session) redirect("/login");
  if (session.role === "Technician") redirect("/dashboard"); // Unauthorized

  const [activeSession, history] = await Promise.all([
    getCurrentCashSession(),
    listCashSessions(),
  ]);

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <PageHeader
        title="Gestion de la Caisse"
        description="Gérez les ouvertures, fermetures et écarts de caisse"
      />

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
          <h2 className="text-xl font-bold mb-4">Historique des sessions</h2>
          <CashSessionHistory sessions={history} />
        </section>
      </div>
    </div>
  );
}
