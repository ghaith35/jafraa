import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { Pagination } from "@/components/shared/Pagination";
import { InventorySearchBar } from "@/features/inventory/components/InventorySearchBar";
import { PartList } from "@/features/inventory/components/PartList";
import { listParts } from "@/features/inventory/actions/part.actions";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Pièces détachées" };

export default async function InventoryPartsPage({ searchParams }: { searchParams: Promise<{ q?: string; archived?: string; page?: string }> }) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "inventory:view")) redirect("/dashboard");
  const sp = await searchParams;
  const storeId = session.storeIds[0];
  const q = sp.q?.trim() || undefined;
  const page = Number(sp.page) || 1;
  const perPage = 50;
  const result = await listParts({ storeId, q, showArchived: sp.archived === "1", page, perPage });
  const canManage = hasPermission(session.role, "inventory:manage");
  return <div className="space-y-5"><PageHeader title={t("inventory.spareParts")} description={t("inventory.partsDescription")} actions={canManage ? <Link href="/dashboard/inventory/parts/new" className="inline-flex items-center gap-2 rounded-xl bg-primary px-3 py-2 text-sm font-bold text-primary-foreground hover:bg-primary/90"><Plus className="h-4 w-4" />{t("inventory.newPart")}</Link> : null} /><InventorySearchBar placeholder={t("inventory.searchParts")} defaultValue={q ?? ""} /><Suspense fallback={<div className="h-24 rounded-xl bg-muted animate-pulse" />}><PartList parts={result.data} userRole={session.role} /></Suspense><Pagination page={result.page} totalPages={result.totalPages} total={result.total} perPage={result.perPage} /></div>;
}
