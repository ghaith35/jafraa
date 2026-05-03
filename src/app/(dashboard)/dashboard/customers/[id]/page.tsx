import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Phone, Edit } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { RoleBadge } from "@/components/shared/RoleBadge";
import { AssetSection } from "@/features/customers/components/AssetSection";
import { ArchiveCustomerButton } from "@/features/customers/components/ArchiveCustomerButton";
import type { CustomerType, LanguagePreference } from "@prisma/client";

export const metadata = { title: "Fiche client" };

const LANG_LABELS: Record<LanguagePreference, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
};

const TYPE_CONFIG: Record<CustomerType, { label: string; variant: "default" | "outline" }> = {
  named: { label: "Client nommé", variant: "default" },
  walkin: { label: "Client de passage", variant: "outline" },
};

function formatDate(d: Date): string {
  return new Intl.DateTimeFormat("fr-DZ", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(d);
}

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const { id } = await params;

  const customer = await prisma.customer.findFirst({
    where: { id, companyId: session.companyId },
    include: {
      phones: { orderBy: { isPrimary: "desc" } },
      assets: {
        where: { isArchived: false },
        orderBy: { createdAt: "desc" },
      },
      customerGroup: { select: { id: true, name: true } },
    },
  });

  if (!customer) notFound();

  const canManage = hasPermission(session.role, "customers:manage");

  return (
    <>
      {/* Back link + header */}
      <div className="mb-4">
        <Link
          href="/dashboard/customers"
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Retour aux clients
        </Link>
      </div>

      <PageHeader
        title={customer.name}
        description={`Client créé le ${formatDate(customer.createdAt)}`}
        actions={
          <div className="flex items-center gap-2">
            {canManage && !customer.isArchived && (
              <>
                <Link
                  href={`/dashboard/customers/${customer.id}/edit`}
                  className="flex items-center gap-1.5 rounded-md border border-border px-3 py-1.5 text-sm font-medium text-foreground hover:bg-secondary transition-colors"
                >
                  <Edit className="h-3.5 w-3.5" />
                  Modifier
                </Link>
                <ArchiveCustomerButton customerId={customer.id} />
              </>
            )}
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {/* Left: profile */}
        <div className="lg:col-span-1 space-y-4">
          {/* Profile card */}
          <div className="rounded-xl border border-border bg-card p-5 space-y-4 shadow-sm">
            {/* Avatar + badges */}
            <div className="flex items-start gap-3">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <span className="text-base font-semibold text-primary">
                  {customer.name[0]?.toUpperCase() ?? "?"}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-foreground">{customer.name}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <StatusBadge
                    label={TYPE_CONFIG[customer.customerType].label}
                    variant={TYPE_CONFIG[customer.customerType].variant}
                  />
                  <RoleBadge role={session.role} className="hidden" />
                  {customer.isArchived && (
                    <StatusBadge label="Archivé" variant="warning" />
                  )}
                </div>
              </div>
            </div>

            {/* Details */}
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Langue</dt>
                <dd className="font-medium text-foreground">
                  {LANG_LABELS[customer.languagePreference]}
                </dd>
              </div>
              {customer.customerGroup && (
                <div className="flex justify-between">
                  <dt className="text-muted-foreground">Groupe</dt>
                  <dd className="font-medium text-foreground">
                    {customer.customerGroup.name}
                  </dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-muted-foreground">Créé le</dt>
                <dd className="text-foreground">{formatDate(customer.createdAt)}</dd>
              </div>
            </dl>

            {/* Notes */}
            {customer.notes && (
              <div className="pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground mb-1">Notes</p>
                <p className="text-sm text-foreground whitespace-pre-wrap">
                  {customer.notes}
                </p>
              </div>
            )}
          </div>

          {/* Phones card */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center gap-2 mb-3">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <h2 className="text-sm font-semibold text-foreground">
                Téléphones ({customer.phones.length})
              </h2>
            </div>
            {customer.phones.length === 0 ? (
              <p className="text-sm text-muted-foreground italic">
                Aucun numéro enregistré
              </p>
            ) : (
              <ul className="space-y-2">
                {customer.phones.map((p) => (
                  <li key={p.id} className="flex items-center justify-between">
                    <span className="text-sm font-mono text-foreground">
                      {p.phoneNumber}
                    </span>
                    {p.isPrimary && (
                      <StatusBadge label="Principal" variant="success" />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Right: assets + placeholders */}
        <div className="lg:col-span-2 space-y-5">
          {/* Devices section */}
          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <AssetSection
              customerId={customer.id}
              initialAssets={customer.assets}
              canManage={canManage && !customer.isArchived}
            />
          </div>

          {/* Placeholder: Repair history */}
          <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
            <p className="text-sm font-medium text-muted-foreground">
              Historique des réparations — disponible au Bloc 8
            </p>
          </div>

          {/* Placeholder: Debt — hidden from Technician */}
          {session.role !== "Technician" && (
            <div className="rounded-xl border border-dashed border-border bg-muted/30 p-5">
              <p className="text-sm font-medium text-muted-foreground">
                Solde dette client — disponible au Bloc 13
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
