import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { getStoreConfig } from "@/features/settings/actions/settings.actions";
import { StoreSettingsForm } from "@/features/settings/components/StoreSettingsForm";
import { getAppI18n } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";
export const metadata = { title: "Paramètres boutique — REPAIRE" };

export default async function StoreSettingsPage() {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const canEdit = hasPermission(session.role, "settings:manage");

  const config = await getStoreConfig();
  if (!config) redirect("/dashboard");

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <PageHeader
        title={t("settings.storeTitle")}
        description={t("settings.storeDescription")}
      />
      <StoreSettingsForm
        profile={config.profile}
        settings={config.settings}
        canEdit={canEdit}
      />
    </div>
  );
}
