export const dynamic = "force-dynamic";

import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { redirect } from "next/navigation";
import { PageHeader } from "@/components/shared/PageHeader";
import { getAuditLogs, getCompanyUsers } from "@/features/reports/actions/audit.actions";
import { AuditLogViewer } from "./AuditLogViewer";
import { Shield } from "lucide-react";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Journal d'audit — REPAIRE" };

export default async function AuditLogPage({
  searchParams,
}: {
  searchParams: Promise<{ action?: string; entityType?: string; userId?: string }>;
}) {
  const { t } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  if (!hasPermission(session.role, "settings:manage")) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center p-6">
        <div className="h-16 w-16 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
          <Shield className="h-8 w-8 text-destructive" />
        </div>
        <h2 className="text-xl font-bold">{t("reports.restrictedTitle")}</h2>
        <p className="text-muted-foreground mt-2 max-w-sm">
          {t("reports.restrictedAudit")}
        </p>
      </div>
    );
  }

  const params = await searchParams;

  const [logs, users] = await Promise.all([
    getAuditLogs({
      action: params.action,
      entityType: params.entityType,
      userId: params.userId,
      limit: 200,
    }),
    getCompanyUsers(),
  ]);

  return (
    <div className="space-y-6">
      <PageHeader
        title={t("reports.audit.title")}
        description={t("reports.audit.description")}
      />
      <AuditLogViewer
        logs={logs.map((l) => ({
          id: l.id,
          action: l.action,
          entityType: l.entityType,
          entityId: l.entityId,
          createdAt: l.createdAt,
          ipAddress: l.ipAddress,
          user: l.user ? { name: l.user.name, role: l.user.role } : null,
          store: l.store ? { name: l.store.name } : null,
        }))}
        users={users}
      />
    </div>
  );
}
