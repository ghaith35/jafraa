import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { InventorySearchBar } from "@/features/inventory/components/InventorySearchBar";
import { ServiceList } from "@/features/inventory/components/ServiceList";
import { listServices } from "@/features/inventory/actions/service.actions";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Services" };

export default async function ServiceCategoryPage({ searchParams }: { searchParams: Promise<{ q?: string; archived?: string }> }) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");
  const sp = await searchParams;
  const storeId = session.storeIds[0];
  const q = sp.q?.trim() || undefined;
  const services = await listServices({ storeId, q, showArchived: sp.archived === "1", category: "unlock" });
  const canManage = hasPermission(session.role, "inventory:manage");
  return <div className="space-y-5"><PageHeader title={t("services.unlockingTitle")} description={t("services.unlockingDescription")} actions={canManage ? <Link href="/dashboard/services/new" className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4" />{t("inventory.newService")}</Link> : null} /><InventorySearchBar placeholder={t("inventory.searchServices")} defaultValue={q ?? ""} /><Suspense fallback={<div className="h-24 rounded-xl bg-muted animate-pulse" />}><ServiceList services={services} userRole={session.role} /></Suspense></div>;
}
