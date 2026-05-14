import { prisma } from "@/lib/db";

export const metadata = { title: "Audit Log — Super Admin" };

export default async function AuditLogPage() {
  const logs = await prisma.auditLog.findMany({
    orderBy: { createdAt: "desc" },
    take: 200,
    include: {
      user: { select: { id: true, name: true, email: true } },
      superAdminUser: { select: { email: true } },
    },
  });

  return (
    <div className="space-y-4">
      <div><h1 className="text-xl font-bold">Audit Log</h1><p className="text-sm text-muted-foreground">Last 200 actions across the system</p></div>

      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead><tr className="border-b border-border bg-muted/50">
            <th className="px-4 py-3 text-start">When</th><th className="px-4 py-3 text-start">User</th><th className="px-4 py-3 text-start">Action</th><th className="px-4 py-3 text-start">Entity</th><th className="px-4 py-3 text-start">Details</th>
          </tr></thead>
          <tbody className="divide-y divide-border">
            {logs.map((l) => (
              <tr key={l.id} className="hover:bg-muted/30">
                <td className="px-4 py-3 text-xs text-muted-foreground whitespace-nowrap">{new Date(l.createdAt).toISOString().replace("T", " ").slice(0, 19)}</td>
                <td className="px-4 py-3 text-xs">{l.user?.name || l.superAdminUser?.email || "System"}</td>
                <td className="px-4 py-3 font-medium">{l.action}</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">{l.entityType}: {l.entityId?.slice(0, 8)}...</td>
                <td className="px-4 py-3 text-xs text-muted-foreground max-w-[200px] truncate">{l.details ? JSON.stringify(l.details).slice(0, 100) : "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
