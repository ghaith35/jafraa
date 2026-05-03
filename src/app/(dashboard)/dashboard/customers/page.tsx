import { Suspense } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { Plus, Users } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { PageHeader } from "@/components/shared/PageHeader";
import { EmptyState } from "@/components/shared/EmptyState";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { CustomerSearchBar } from "@/features/customers/components/CustomerSearchBar";
import type { CustomerType } from "@prisma/client";

export const metadata = { title: "Clients" };

const LANG_LABELS: Record<string, string> = { fr: "FR", ar: "AR", en: "EN" };

function customerTypeLabel(type: CustomerType) {
  return type === "named" ? "Nommé" : "De passage";
}

function initials(name: string): string {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");
}

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat("fr-DZ", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(d);
}

export default async function CustomersPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; type?: string; archived?: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { q, type, archived } = await searchParams;
  const showArchived = archived === "1";
  const typeFilter = type === "named" || type === "walkin" ? (type as CustomerType) : undefined;

  const customers = await prisma.customer.findMany({
    where: {
      companyId: session.companyId,
      isArchived: showArchived ? undefined : false,
      customerType: typeFilter,
      ...(q
        ? {
            OR: [
              { name: { contains: q, mode: "insensitive" } },
              {
                phones: {
                  some: { phoneNumber: { contains: q } },
                },
              },
            ],
          }
        : {}),
    },
    include: {
      phones: {
        where: { isPrimary: true },
        take: 1,
      },
      customerGroup: { select: { name: true } },
    },
    orderBy: { createdAt: "desc" },
    take: 100,
  });

  return (
    <>
      <PageHeader
        title="Clients"
        description={`${customers.length} client${customers.length !== 1 ? "s" : ""} trouvé${customers.length !== 1 ? "s" : ""}`}
        actions={
          <Link
            href="/dashboard/customers/new"
            className="flex items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            <Plus className="h-4 w-4" />
            Nouveau client
          </Link>
        }
      />

      <Suspense>
        <CustomerSearchBar />
      </Suspense>

      {customers.length === 0 ? (
        <EmptyState
          icon={Users}
          title={q ? "Aucun résultat" : "Aucun client pour le moment"}
          description={
            q
              ? `Aucun client ne correspond à « ${q} ».`
              : "Commencez par créer votre premier client."
          }
          action={
            !q ? (
              <Link
                href="/dashboard/customers/new"
                className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Créer un client
              </Link>
            ) : undefined
          }
        />
      ) : (
        <ul className="space-y-2">
          {customers.map((c) => (
            <li key={c.id}>
              <Link
                href={`/dashboard/customers/${c.id}`}
                className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 hover:bg-accent/50 transition-colors group"
              >
                {/* Avatar */}
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-semibold text-primary">
                    {c.customerType === "walkin" ? "?" : initials(c.name)}
                  </span>
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-sm font-medium text-foreground truncate">
                      {c.name}
                    </span>
                    {c.isArchived && (
                      <StatusBadge label="Archivé" variant="outline" />
                    )}
                  </div>
                  <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground flex-wrap">
                    {c.phones[0] ? (
                      <span>{c.phones[0].phoneNumber}</span>
                    ) : (
                      <span className="italic">Aucun téléphone</span>
                    )}
                    {c.customerGroup && <span>· {c.customerGroup.name}</span>}
                  </div>
                </div>

                {/* Badges */}
                <div className="hidden sm:flex items-center gap-2 shrink-0">
                  <StatusBadge
                    label={customerTypeLabel(c.customerType)}
                    variant={c.customerType === "named" ? "default" : "outline"}
                  />
                  <span className="text-xs text-muted-foreground rounded border border-border px-1.5 py-0.5">
                    {LANG_LABELS[c.languagePreference] ?? c.languagePreference}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {formatDate(c.createdAt)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
