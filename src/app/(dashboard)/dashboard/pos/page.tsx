import { redirect } from "next/navigation";
import Link from "next/link";
import { getSession } from "@/lib/auth/session";
import { PageHeader } from "@/components/shared/PageHeader";
import { getCurrentCashSession } from "@/features/pos/actions/cash-session.actions";
import { PosCheckout } from "@/features/pos/components/PosCheckout";
import { Settings, RotateCcw } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { getRepairIntakeData } from "@/features/repairs/lib/intake-data";

export const metadata = { title: "Caisse" };

export default async function PosPage() {
  const t = await getTranslations("pos");
  const session = await getSession();
  if (!session) redirect("/login");

  // Technician has no access to POS module
  if (session.role === "Technician") redirect("/dashboard");

  const activeSession = await getCurrentCashSession();
  const storeId = session.storeIds[0];
  const repairIntake = storeId
    ? await getRepairIntakeData(session.companyId, storeId)
    : null;

  return (
    <>
      <PageHeader
        title={t("title")}
        description={t("description")}
        actions={
          <div className="flex items-center gap-2">
            <Link
              href="/dashboard/pos/refunds"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <RotateCcw className="h-4 w-4" />
              {t("refunds")}
            </Link>
            <Link
              href="/dashboard/pos/cash-register"
              className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-input bg-background px-4 text-sm font-medium hover:bg-muted transition-colors"
            >
              <Settings className="h-4 w-4" />
              {t("cashManagement")}
            </Link>
          </div>
        }
      />

      <PosCheckout
        hasOpenSession={!!activeSession}
        userRole={session.role}
        repairIntake={repairIntake ?? undefined}
      />
    </>
  );
}
