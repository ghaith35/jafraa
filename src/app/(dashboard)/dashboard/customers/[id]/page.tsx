import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Edit, TrendingDown } from "lucide-react";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { hasPermission } from "@/lib/auth/permissions";
import { PageHeader } from "@/components/shared/PageHeader";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { RoleBadge } from "@/components/shared/RoleBadge";
import { AssetSection } from "@/features/customers/components/AssetSection";
import { ArchiveCustomerButton } from "@/features/customers/components/ArchiveCustomerButton";
import { PhoneManager } from "@/features/customers/components/PhoneManager";
import { DebtSection } from "@/features/customers/components/DebtSection";
import { listDeviceCategories } from "@/features/catalog/actions/catalog.actions";
import {
  getCustomerDebtSummary,
  listCustomerDebtEntries,
} from "@/features/customers/actions/debt.actions";
import type { CustomerType, LanguagePreference } from "@prisma/client";
import { getAppI18n } from "@/lib/i18n/server";

export const metadata = { title: "Fiche client" };

const LANG_LABELS: Record<LanguagePreference, string> = {
  fr: "Français",
  ar: "العربية",
  en: "English",
};

const TYPE_VARIANTS: Record<CustomerType, "default" | "outline"> = {
  named: "default",
  walkin: "outline",
};

export default async function CustomerDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { t, formatDate } = await getAppI18n();
  const session = await getSession();
  if (!session) redirect("/login");

  const { id } = await params;

  const [customer, categories] = await Promise.all([
    prisma.customer.findFirst({
      where: { id, companyId: session.companyId },
      include: {
        phones: { orderBy: { isPrimary: "desc" } },
        assets: {
          where: { isArchived: false },
          orderBy: { createdAt: "desc" },
          include: {
            deviceCategory: { select: { nameFr: true } },
            deviceBrand: { select: { name: true } },
            deviceModelFamily: { select: { name: true } },
          },
        },
        customerGroup: { select: { id: true, name: true } },
      },
    }),
    listDeviceCategories(),
  ]);

  if (!customer) notFound();

  const assetsWithNames = customer.assets.map((a) => ({
    id: a.id,
    deviceTypeName: a.deviceTypeName,
    deviceCategoryId: a.deviceCategoryId,
    deviceBrandId: a.deviceBrandId,
    deviceModelFamilyId: a.deviceModelFamilyId,
    customBrand: a.customBrand,
    customModel: a.customModel,
    color: a.color,
    storage: a.storage,
    imeiSerial: a.imeiSerial,
    notes: a.notes,
    categoryName: a.deviceCategory?.nameFr ?? null,
    brandName: a.deviceBrand?.name ?? null,
    familyName: a.deviceModelFamily?.name ?? null,
  }));

  const canManage = hasPermission(session.role, "customers:manage");
  const canViewDebt = hasPermission(session.role, "debt:view");
  const canManageDebt = hasPermission(session.role, "debt:manage");
  const canPayDebt = hasPermission(session.role, "payments:manage");

  const [debtSummary, debtEntries] = canViewDebt
    ? await Promise.all([
        getCustomerDebtSummary(id),
        listCustomerDebtEntries(id),
      ])
    : [null, null];

  return (
    <>
      {/* Back link */}
      <div className="mb-4">
        <Link
          href="/dashboard/customers"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          {t("customers.backToList")}
        </Link>
      </div>

      <PageHeader
        title={customer.name}
        description={t("customers.createdOn", { date: formatDate(customer.createdAt) })}
        actions={
          <div className="flex items-center gap-2">
            {canManage && !customer.isArchived && (
              <>
                <Link
                  href={`/dashboard/customers/${customer.id}/edit`}
                  className="flex items-center gap-1.5 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-sm font-medium shadow-[var(--shadow-xs)] hover:bg-[var(--muted)] transition-colors"
                >
                  <Edit className="h-3.5 w-3.5" />
                  {t("common.edit")}
                </Link>
                <ArchiveCustomerButton customerId={customer.id} />
              </>
            )}
          </div>
        }
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 min-h-[calc(100svh-14rem)]">
        {/* Left: profile */}
        <div className="lg:col-span-1 space-y-4">
          {/* Profile card */}
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)] space-y-4">
            <div className="flex items-start gap-3">
              <div
                className="h-12 w-12 rounded-xl flex items-center justify-center shrink-0 shadow-[var(--shadow-xs)]"
                style={{
                  background: "linear-gradient(135deg, var(--accent), var(--accent))",
                }}
              >
                <span className="text-base font-bold text-[var(--primary)]">
                  {customer.name[0]?.toUpperCase() ?? "?"}
                </span>
              </div>
              <div className="space-y-1">
                <p className="text-base font-semibold text-[var(--text-primary)]">{customer.name}</p>
                <div className="flex items-center gap-2 flex-wrap">
                  <StatusBadge
                    label={customer.customerType === "named" ? t("customers.named") : t("customers.walkin")}
                    variant={TYPE_VARIANTS[customer.customerType]}
                  />
                  {customer.isArchived && (
                    <StatusBadge label={t("customers.archived")} variant="warning" />
                  )}
                </div>
              </div>
            </div>

            <dl className="space-y-2 text-sm">
              <div className="flex justify-between">
                <dt className="text-[var(--text-tertiary)]">{t("customers.language")}</dt>
                <dd className="font-medium text-[var(--text-primary)]">
                  {LANG_LABELS[customer.languagePreference]}
                </dd>
              </div>
              {customer.address && (
                <div className="flex justify-between">
                  <dt className="text-[var(--text-tertiary)]">{t("customers.address")}</dt>
                  <dd className="font-medium text-[var(--text-primary)] text-right max-w-[60%] truncate">
                    {customer.address}
                  </dd>
                </div>
              )}
              {customer.customerGroup && (
                <div className="flex justify-between">
                  <dt className="text-[var(--text-tertiary)]">{t("customers.group")}</dt>
                  <dd className="font-medium text-[var(--text-primary)]">
                    {customer.customerGroup.name}
                  </dd>
                </div>
              )}
              <div className="flex justify-between">
                <dt className="text-[var(--text-tertiary)]">{t("customers.createdAt")}</dt>
                <dd className="text-[var(--text-primary)]">{formatDate(customer.createdAt)}</dd>
              </div>
            </dl>

            {customer.notes && (
              <div className="pt-2 border-t border-[var(--border)]">
                <p className="text-xs text-[var(--text-tertiary)] mb-1">{t("common.notes")}</p>
                <p className="text-sm text-[var(--text-primary)] whitespace-pre-wrap">
                  {customer.notes}
                </p>
              </div>
            )}
          </div>

          <PhoneManager
            customerId={customer.id}
            initialPhones={customer.phones}
            canManage={canManage && !customer.isArchived}
          />
        </div>

        {/* Right: assets + debt */}
        <div className="lg:col-span-2 space-y-5">
          <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
            <AssetSection
              customerId={customer.id}
              initialAssets={assetsWithNames}
              canManage={canManage && !customer.isArchived}
              categories={categories}
              companyId={session.companyId}
              storeId={session.storeIds[0]}
            />
          </div>

          {canViewDebt && debtSummary && debtEntries && (
            <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[var(--shadow-sm)]">
              <div className="flex items-center gap-2 mb-4">
                <TrendingDown className="h-4 w-4 text-[var(--text-tertiary)]" />
                <h2 className="text-sm font-semibold">{t("customers.customerDebt")}</h2>
              </div>
              <DebtSection
                customerId={customer.id}
                initialSummary={debtSummary}
                initialEntries={Array.isArray(debtEntries) ? debtEntries : []}
                canManageDebt={canManageDebt && !customer.isArchived}
                canPayDebt={canPayDebt && !customer.isArchived}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}
