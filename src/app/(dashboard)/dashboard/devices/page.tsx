import Link from "next/link";
import { redirect } from "next/navigation";
import { MonitorSmartphone, Settings } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Appareils" };

export default async function DevicesPage() {
  const { t, locale } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");
  if (!hasPermission(session.role, "customers:view")) redirect("/dashboard");
  const categories = await listDeviceCategories();
  const canManageCatalog = hasPermission(session.role, "settings:manage");

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("devices.title")}
        description={t("devices.description")}
        actions={canManageCatalog ? <Link href="/dashboard/settings/catalog" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-3 py-2 text-sm font-bold hover:bg-muted"><Settings className="h-4 w-4" />{t("devices.manageCatalog")}</Link> : null}
      />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <div key={category.id} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
            <div className="rounded-xl bg-primary/10 p-3 text-primary w-fit"><MonitorSmartphone className="h-5 w-5" /></div>
            <h2 className="mt-4 text-base font-black text-foreground">{locale === "ar" ? category.nameAr : locale === "en" ? category.nameEn : category.nameFr}</h2>
            <p className="mt-1 text-sm text-muted-foreground">{t("devices.categoryDescription")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
