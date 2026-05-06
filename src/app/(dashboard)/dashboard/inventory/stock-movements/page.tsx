import { Suspense } from "react";
import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { listStockMovements } from "@/features/inventory/actions/movement.actions";
import { MovementList } from "@/features/inventory/components/MovementList";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Mouvements de stock — REPAIRE" };

export default async function StockMovementsPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:manage")) redirect("/dashboard");

  const movements = await listStockMovements();

  return (
    <div className="max-w-screen-xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">
          {t("inventory.stockMovements")}
        </h1>
        <p className="text-sm text-muted-foreground mt-1">
          {t("inventory.stockMovementsFullDescription")}
        </p>
      </div>

      <Suspense fallback={<div className="h-64 bg-muted animate-pulse rounded-xl" />}>
        <MovementList movements={movements} />
      </Suspense>
    </div>
  );
}
