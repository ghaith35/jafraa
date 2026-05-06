import { PageHeader } from "@/components/shared/PageHeader";
import { Settings, Cpu, MessageSquare } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

export const metadata = { title: "Paramètres" };

export default async function SettingsPage() {
  const t = await getTranslations("settings");

  return (
    <>
      <PageHeader
        title={t("title")}
        description={t("description")}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Catalog card */}
        <Link
          href="/dashboard/settings/catalog"
          className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <div className="mb-3 rounded-lg bg-accent p-2.5 w-fit">
            <Cpu className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {t("catalogTitle")}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {t("catalogDescription")}
          </p>
        </Link>

        {/* WhatsApp settings */}
        <Link
          href="/dashboard/settings/whatsapp"
          className="group rounded-xl border border-border bg-card p-5 hover:border-emerald-400/60 hover:shadow-sm transition-all"
        >
          <div className="mb-3 rounded-lg bg-emerald-50 dark:bg-emerald-950/20 p-2.5 w-fit">
            <MessageSquare className="h-5 w-5 text-emerald-600" />
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-emerald-600 transition-colors">
            {t("whatsappTitle")}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {t("whatsappDescription")}
          </p>
        </Link>

        {/* Store settings */}
        <Link
          href="/dashboard/settings/store"
          className="group rounded-xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-sm transition-all"
        >
          <div className="mb-3 rounded-lg bg-accent p-2.5 w-fit">
            <Settings className="h-5 w-5 text-accent-foreground" />
          </div>
          <h3 className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
            {t("storeTitle")}
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            {t("storeDescription")}
          </p>
        </Link>
      </div>
    </>
  );
}
