import { getSession } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/db";
import { PosRefundView } from "@/features/pos/components/PosRefundView";
import { getTranslations } from "next-intl/server";

export const metadata = {
  title: "Remboursements POS | REPAIRE",
};

export default async function PosRefundPage() {
  const t = await getTranslations("pos");
  const session = await getSession();
  if (!session) redirect("/login");
  
  if (session.role === "Technician") redirect("/dashboard");

  const storeId = session.storeIds[0];
  if (!storeId) redirect("/dashboard");

  // Check if there is an open cash session
  const cashSession = await prisma.cashRegisterSession.findFirst({
    where: { storeId, status: "opened" },
    select: { id: true },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">{t("refundsTitle")}</h1>
        <p className="text-muted-foreground">
          {t("refundsDescription")}
        </p>
      </div>

      <PosRefundView 
        hasOpenSession={!!cashSession} 
      />
    </div>
  );
}
