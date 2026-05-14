import { listCompanies } from "@/features/super-admin/actions/companies.actions";
import Link from "next/link";

export const metadata = { title: "Companies — Super Admin" };

const statusColors: Record<string, string> = {
  trial: "bg-amber-100 text-amber-700",
  active: "bg-green-100 text-green-700",
  grace: "bg-blue-100 text-blue-700",
  read_only: "bg-gray-100 text-gray-700",
  cancelled: "bg-red-100 text-red-700",
  suspended: "bg-red-100 text-red-700",
};

export default async function CompaniesPage() {
  const companies = await listCompanies();

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-foreground">Companies</h1>
          <p className="text-sm text-muted-foreground">{companies.length} companies</p>
        </div>
      </div>

      <div className="rounded-xl border border-border bg-surface shadow-sm overflow-hidden">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-muted/50">
              <th className="px-4 py-3 text-start font-medium text-muted-foreground">Name</th>
              <th className="px-4 py-3 text-start font-medium text-muted-foreground">Email</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Stores</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Users</th>
              <th className="px-4 py-3 text-start font-medium text-muted-foreground">Subscription</th>
              <th className="px-4 py-3 text-start font-medium text-muted-foreground">Created</th>
              <th className="px-4 py-3 text-center font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {companies.map((c) => {
              const sub = c.subscriptions[0];
              return (
                <tr key={c.id} className="hover:bg-muted/30 transition-colors">
                  <td className="px-4 py-3">
                    <Link href={`/super-admin/dashboard/companies/${c.id}`} className="font-semibold text-primary hover:underline">{c.name}</Link>
                    {c.phone && <p className="text-xs text-muted-foreground">{c.phone}</p>}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{c.email || "—"}</td>
                  <td className="px-4 py-3 text-center">{c._count.stores}</td>
                  <td className="px-4 py-3 text-center">{c._count.users}</td>
                  <td className="px-4 py-3">
                    {sub ? (
                      <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${statusColors[sub.status] || "bg-gray-100 text-gray-700"}`}>
                        {sub.status}
                      </span>
                    ) : "—"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground text-xs">{c.createdAt.toISOString().split("T")[0]}</td>
                  <td className="px-4 py-3 text-center">
                    {c.isArchived ? <span className="text-xs text-muted-foreground border rounded-full px-2 py-0.5">Archived</span>: <span className="text-xs text-green-600 font-medium">Active</span>}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
