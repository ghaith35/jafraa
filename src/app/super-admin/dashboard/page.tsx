import { prisma } from "@/lib/db";

export const metadata = { title: "Super Admin Dashboard" };

export default async function DashboardHome() {
  const [companies, totalUsers, totalStores, totalModels] = await Promise.all([
    prisma.company.count(),
    prisma.user.count({ where: { isArchived: false } }),
    prisma.store.count(),
    prisma.deviceModel.count(),
  ]);

  const activeCompanies = await prisma.company.count({ where: { isArchived: false } });
  const trialCompanies = await prisma.companySubscription.count({ where: { status: "trial" } });
  const activeSubs = await prisma.companySubscription.count({ where: { status: "active" } });

  const stats = [
    { label: "Total Companies", value: companies, sub: `${activeCompanies} active` },
    { label: "Total Users", value: totalUsers, sub: "Active" },
    { label: "Total Stores", value: totalStores, sub: "Across all companies" },
    { label: "Total Models", value: totalModels, sub: "Device catalog" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-0.5">Super admin overview</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-surface p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{s.label}</p>
            <p className="mt-2 text-3xl font-bold tracking-tight text-foreground">{s.value.toLocaleString()}</p>
            <p className="mt-1 text-xs text-muted-foreground">{s.sub}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Subscriptions</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Active</span><span className="font-semibold text-green-600">{activeSubs}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Trial</span><span className="font-semibold text-amber-600">{trialCompanies}</span></div>
            <div className="flex justify-between text-sm"><span className="text-muted-foreground">Total</span><span className="font-semibold">{activeSubs + trialCompanies}</span></div>
          </div>
        </div>

        <div className="rounded-xl border border-border bg-surface p-5 shadow-sm">
          <h3 className="text-sm font-semibold text-foreground mb-4">Recent Companies</h3>
          <RecentCompanies />
        </div>
      </div>
    </div>
  );
}

async function RecentCompanies() {
  const companies = await prisma.company.findMany({ orderBy: { createdAt: "desc" }, take: 5, select: { name: true, createdAt: true } });
  return (
    <div className="space-y-2">
      {companies.map((c, i) => (
        <div key={i} className="flex justify-between text-sm">
          <span className="font-medium text-foreground">{c.name}</span>
          <span className="text-muted-foreground">{c.createdAt.toISOString().split("T")[0]}</span>
        </div>
      ))}
    </div>
  );
}
