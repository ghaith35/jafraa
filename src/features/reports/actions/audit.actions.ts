"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { startOfDay, endOfDay } from "date-fns";

export interface AuditFilters {
  startDate?: Date;
  endDate?: Date;
  entityType?: string;
  action?: string;
  userId?: string;
  limit?: number;
}

export async function getAuditLogs(filters: AuditFilters = {}) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  // Only admin can view audit logs
  if (!hasPermission(session.role, "settings:manage")) {
    throw new Error("Forbidden: Admin only");
  }

  const companyId = session.companyId;
  const limit = Math.min(filters.limit ?? 100, 500);

  return prisma.auditLog.findMany({
    where: {
      companyId,
      ...(filters.startDate && {
        createdAt: { gte: startOfDay(filters.startDate) },
      }),
      ...(filters.endDate && {
        createdAt: { lte: endOfDay(filters.endDate) },
      }),
      ...(filters.entityType && { entityType: filters.entityType }),
      ...(filters.action && { action: { contains: filters.action, mode: "insensitive" } }),
      ...(filters.userId && { userId: filters.userId }),
    },
    include: {
      user: { select: { id: true, name: true, role: true } },
      store: { select: { id: true, name: true } },
    },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

export async function getCompanyUsers() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  if (!hasPermission(session.role, "settings:manage")) throw new Error("Forbidden");

  return prisma.user.findMany({
    where: { companyId: session.companyId, isArchived: false },
    select: { id: true, name: true, role: true },
    orderBy: { name: "asc" },
  });
}
