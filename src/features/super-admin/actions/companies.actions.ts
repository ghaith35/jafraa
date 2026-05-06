"use server";

import { prisma } from "@/lib/db";
import { getSuperAdminSession } from "@/lib/auth/super-admin-session";
import { revalidatePath } from "next/cache";

async function ensureSuperAdmin() {
  const session = await getSuperAdminSession();
  if (!session) throw new Error("Unauthorized");
  return session;
}

// ─── List companies ───────────────────────────────────────────────────────────

export async function listCompanies() {
  await ensureSuperAdmin();

  const companies = await prisma.company.findMany({
    include: {
      subscriptions: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { plan: { select: { name: true, code: true } } },
      },
      _count: {
        select: { users: true, stores: true, customers: true, repairTickets: true },
      },
    },
    orderBy: { createdAt: "desc" },
  });

  return companies.map((c) => ({
    id: c.id,
    name: c.name,
    email: c.email,
    phone: c.phone,
    isArchived: c.isArchived,
    createdAt: c.createdAt,
    subscription: c.subscriptions[0]
      ? {
          status: c.subscriptions[0].status,
          planName: c.subscriptions[0].plan.name,
          expiresAt: c.subscriptions[0].expiresAt,
        }
      : null,
    counts: c._count,
  }));
}

// ─── Get one company ──────────────────────────────────────────────────────────

export async function getCompanyDetail(id: string) {
  await ensureSuperAdmin();

  const company = await prisma.company.findUnique({
    where: { id },
    include: {
      stores: { select: { id: true, name: true, isActive: true } },
      users: {
        select: { id: true, name: true, email: true, role: true, isActive: true },
        orderBy: { createdAt: "asc" },
      },
      subscriptions: {
        orderBy: { createdAt: "desc" },
        take: 1,
        include: { plan: true },
      },
      _count: {
        select: { customers: true, repairTickets: true, posSales: true, repairInvoices: true },
      },
    },
  });

  return company;
}

// ─── Subscription management ──────────────────────────────────────────────────

export async function updateSubscriptionStatus(
  companyId: string,
  status: "trial" | "active" | "grace" | "read_only" | "suspended" | "cancelled",
  expiresAt?: Date | null,
  note?: string
) {
  await ensureSuperAdmin();

  const sub = await prisma.companySubscription.findFirst({
    where: { companyId },
    orderBy: { createdAt: "desc" },
  });

  if (!sub) throw new Error("No subscription found for this company");

  await prisma.companySubscription.update({
    where: { id: sub.id },
    data: {
      status,
      expiresAt: expiresAt !== undefined ? expiresAt : sub.expiresAt,
      note: note || sub.note,
    },
  });

  revalidatePath("/super-admin/companies");
  revalidatePath(`/super-admin/companies/${companyId}`);
  return { success: true };
}

// ─── Archive/restore company ──────────────────────────────────────────────────

export async function archiveCompany(companyId: string) {
  await ensureSuperAdmin();
  await prisma.company.update({ where: { id: companyId }, data: { isArchived: true } });
  revalidatePath("/super-admin/companies");
  return { success: true };
}

export async function restoreCompany(companyId: string) {
  await ensureSuperAdmin();
  await prisma.company.update({ where: { id: companyId }, data: { isArchived: false } });
  revalidatePath("/super-admin/companies");
  return { success: true };
}
