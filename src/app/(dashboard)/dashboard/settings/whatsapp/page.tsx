import { PageHeader } from "@/components/shared/PageHeader";
import { AlertCircle } from "lucide-react";
import { WhatsAppManager } from "@/features/whatsapp/components/WhatsAppManager";
import { getStoreWhatsAppPhone, listWhatsAppLogs } from "@/features/whatsapp/actions/whatsapp.actions";
import type { WhatsAppNotificationLog } from "@prisma/client";
import { getAppI18n } from "@/lib/i18n/server";

export const dynamic = "force-dynamic";
export const metadata = { title: "WhatsApp — REPAIRE" };

export default async function WhatsAppSettingsPage() {
  const { t } = await getAppI18n();
  const [initialPhone, logs] = await Promise.all([
    getStoreWhatsAppPhone(),
    listWhatsAppLogs(100),
  ]);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <PageHeader
        title={t("settings.whatsappTitle")}
        description={t("settings.whatsappDescription")}
      />

      <WhatsAppManager
        initialPhone={initialPhone}
        logs={logs.map((l: WhatsAppNotificationLog) => ({
          id: l.id,
          phone: l.phone,
          entityType: l.entityType,
          entityId: l.entityId,
          messagePreview: l.messagePreview,
          createdAt: l.createdAt,
        }))}
      />

      <div className="rounded-xl border border-amber-200 bg-amber-50 p-4 dark:bg-amber-950/20 dark:border-amber-900/50 flex gap-3">
        <AlertCircle className="h-5 w-5 text-amber-600 shrink-0 mt-0.5" />
        <div className="text-sm text-amber-800 dark:text-amber-300">
          <p className="font-bold">{t("common.info")}</p>
          <p className="mt-1">
            {t("settings.whatsappManualNotice")}
          </p>
        </div>
      </div>
    </div>
  );
}
