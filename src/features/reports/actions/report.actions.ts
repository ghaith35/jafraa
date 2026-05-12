"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { startOfDay, endOfDay, format, eachDayOfInterval, subDays } from "date-fns";

/**
 * Common report filters
 */
export interface ReportFilters {
  startDate: Date;
  endDate: Date;
  storeId?: string;
}

/**
 * Role Check Helper
 */
async function ensureReportAccess() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  
  const canView = hasPermission(session.role, "reports:view");
  if (!canView) throw new Error("Forbidden: Access restricted to managers and admins");
  
  return session;
}

/**
 * 1. Sales Report
 */
export async function getSalesReport(filters: ReportFilters) {
  const session = await ensureReportAccess();
  const storeId = filters.storeId || session.storeIds[0];

  const sales = await prisma.posSale.findMany({
    where: {
      storeId,
      createdAt: {
        gte: startOfDay(filters.startDate),
        lte: endOfDay(filters.endDate),
      },
    },
    include: {
      lines: true,
    },
    orderBy: { createdAt: "asc" },
  });

  const totalRevenue = sales.reduce((acc, s) => acc + Number(s.totalAmount), 0);
  const totalPaid = sales.reduce((acc, s) => acc + Number(s.cashReceivedAmount), 0);
  const totalDebt = sales.reduce((acc, s) => acc + Number(s.debtAmount), 0);

  // Group by date for chart
  const dateMap = new Map<string, number>();
  sales.forEach(s => {
    const d = format(s.createdAt, "yyyy-MM-dd");
    dateMap.set(d, (dateMap.get(d) || 0) + Number(s.totalAmount));
  });

  const chartData = eachDayOfInterval({
    start: filters.startDate,
    end: filters.endDate,
  }).map(date => {
    const d = format(date, "yyyy-MM-dd");
    return {
      date: d,
      value: dateMap.get(d) || 0,
    };
  });

  return {
    summary: {
      totalRevenue,
      totalPaid,
      totalDebt,
      count: sales.length,
    },
    chartData,
  };
}

/**
 * 2. Profit Report (FIFO Based)
 */
export async function getProfitReport(filters: ReportFilters) {
  const session = await ensureReportAccess();
  const storeId = filters.storeId || session.storeIds[0];

  const [posLines, repairLines, expenses] = await Promise.all([
    prisma.posSaleLine.findMany({
      where: {
        posSale: {
          storeId,
          createdAt: {
            gte: startOfDay(filters.startDate),
            lte: endOfDay(filters.endDate),
          },
        },
      },
    }),
    prisma.repairInvoiceLine.findMany({
      where: {
        repairInvoice: {
          storeId,
          createdAt: {
            gte: startOfDay(filters.startDate),
            lte: endOfDay(filters.endDate),
          },
        },
      },
    }),
    // Expenses table may not exist yet (pending migration) — fail gracefully
    prisma.expense.findMany({
       where: {
         storeId,
         expenseDate: {
           gte: startOfDay(filters.startDate),
           lte: endOfDay(filters.endDate),
         },
       }
    }).catch(() => []),
  ]);

  const posRevenue = posLines.reduce((acc, l) => acc + Number(l.totalPrice), 0);
  const posCost = posLines.reduce((acc, l) => acc + Number(l.costTotal || 0), 0);
  
  const repairRevenue = repairLines.reduce((acc, l) => acc + Number(l.totalPrice), 0);
  const repairCost = repairLines.reduce((acc, l) => acc + Number(l.costTotal || 0), 0);

  const totalExpense = expenses.reduce((acc, e) => acc + Number(e.amount), 0);

  const grossProfit = (posRevenue - posCost) + (repairRevenue - repairCost);
  const netProfit = grossProfit - totalExpense;

  return {
    revenue: {
      pos: posRevenue,
      repairs: repairRevenue,
      total: posRevenue + repairRevenue,
    },
    cost: {
      pos: posCost,
      repairs: repairCost,
      total: posCost + repairCost,
    },
    grossProfit,
    netProfit,
    expenses: totalExpense,
  };
}

/**
 * 3. Repairs Report
 */
export async function getRepairsReport(filters: ReportFilters) {
  const session = await ensureReportAccess();
  const storeId = filters.storeId || session.storeIds[0];

  const tickets = await prisma.repairTicket.findMany({
    where: {
      storeId,
      createdAt: {
        gte: startOfDay(filters.startDate),
        lte: endOfDay(filters.endDate),
      },
    },
    select: {
      id: true,
      currentStatus: true,
      createdAt: true,
    }
  });

  const statusCounts = tickets.reduce((acc, t) => {
    acc[t.currentStatus] = (acc[t.currentStatus] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    summary: {
      total: tickets.length,
      completed: statusCounts["completed"] || 0,
      ready: statusCounts["ready_for_pickup"] || 0,
      inRepair: (statusCounts["in_repair"] || 0) + (statusCounts["in_diagnosis"] || 0),
    },
    statusCounts,
  };
}

/**
 * 4. Debt Report
 */
export async function getDebtReport() {
  const session = await ensureReportAccess();
  const companyId = session.companyId;

  const balances = await prisma.customerDebtBalance.findMany({
    where: {
      customer: {
        companyId,
        isArchived: false,
      },
      totalDebt: { gt: 0 },
    },
    include: {
      customer: {
        select: {
          id: true,
          name: true,
        },
      },
    },
    orderBy: { totalDebt: "desc" },
    take: 50,
  });

  const totalDebt = balances.reduce((acc, b) => acc + Number(b.totalDebt), 0);

  return {
    totalDebt,
    count: balances.length,
    topCustomers: balances.map(b => ({
      id: b.customer.id,
      name: b.customer.name,
      debt: Number(b.totalDebt),
    })),
  };
}

/**
 * 5. Dashboard Widgets (Optimized)
 */
export interface DashboardStats {
  dailyRevenue: number;
  openTickets: number;
  lowStock: number;
  totalDebt: number;
  weeklyRevenue: number[];
  statusDistribution: { status: string; count: number }[];
  technicianWorkload: { name: string; count: number }[];
}

export async function getDashboardStats(): Promise<DashboardStats | null> {
  const session = await getSession();
  if (!session) return null;
  const storeId = session.storeIds[0];

  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  const sevenDaysAgo = subDays(new Date(), 6);

  const [dailySales, openTickets, lowStock, totalDebt, weeklySales, statusCounts, techWorkload] = await Promise.all([
    prisma.posSale.aggregate({
      _sum: { totalAmount: true },
      where: { storeId, createdAt: { gte: todayStart, lte: todayEnd } }
    }),
    prisma.repairTicket.count({
      where: { storeId, isArchived: false, currentStatus: { notIn: ["completed", "not_repaired", "ready_for_pickup"] } }
    }),
    prisma.part.count({
      where: { storeId, isArchived: false, lowStockThreshold: { not: null }, stockQty: { lte: 0 } }
    }),
    prisma.customerDebtBalance.aggregate({
      _sum: { totalDebt: true },
      where: { customer: { companyId: session.companyId, isArchived: false } }
    }),
    prisma.posSale.findMany({
      where: { storeId, createdAt: { gte: sevenDaysAgo, lte: todayEnd } },
      select: { totalAmount: true, createdAt: true },
    }),
    prisma.repairTicket.groupBy({
      by: ["currentStatus"],
      where: { storeId, isArchived: false },
      _count: true,
    }),
    prisma.repairTicket.groupBy({
      by: ["assignedTechnicianId"],
      where: { storeId, isArchived: false, assignedTechnicianId: { not: null } },
      _count: true,
    }),
  ]);

  const weeklyRevenueMap = new Map<string, number>();
  weeklySales.forEach(s => {
    const d = format(s.createdAt, "yyyy-MM-dd");
    weeklyRevenueMap.set(d, (weeklyRevenueMap.get(d) || 0) + Number(s.totalAmount));
  });

  const weeklyRevenue = eachDayOfInterval({ start: sevenDaysAgo, end: new Date() }).map(date => {
    const d = format(date, "yyyy-MM-dd");
    return weeklyRevenueMap.get(d) || 0;
  });

  let technicianWorkload: DashboardStats["technicianWorkload"] = [];
  if (techWorkload.length > 0) {
    const techIds = techWorkload.map(t => t.assignedTechnicianId).filter(Boolean) as string[];
    const techUsers = await prisma.user.findMany({
      where: { id: { in: techIds } },
      select: { id: true, name: true },
    });
    const techMap = new Map(techUsers.map(t => [t.id, t.name]));
    technicianWorkload = techWorkload.map(t => ({
      name: techMap.get(t.assignedTechnicianId!) || "Inconnu",
      count: t._count,
    }));
  }

  return {
    dailyRevenue: Number(dailySales._sum.totalAmount || 0),
    openTickets,
    lowStock,
    totalDebt: Number(totalDebt._sum.totalDebt || 0),
    weeklyRevenue,
    statusDistribution: statusCounts.map(s => ({ status: s.currentStatus, count: s._count })),
    technicianWorkload,
  };
}

/**
 * 6. Technician Performance
 */
export async function getTechnicianPerformance(filters: ReportFilters) {
  const session = await ensureReportAccess();
  const storeId = filters.storeId || session.storeIds[0];

  const tickets = await prisma.repairTicket.findMany({
    where: {
      storeId,
      OR: [
        { assignedTechnicianId: { not: null } },
        { technicians: { some: {} } },
      ],
      createdAt: {
        gte: startOfDay(filters.startDate),
        lte: endOfDay(filters.endDate),
      },
    },
    include: {
      assignedTechnician: {
        select: {
          id: true,
          name: true,
        },
      },
      technicians: {
        include: {
          user: { select: { id: true, name: true } },
        },
      },
      repairInvoices: {
        where: { status: { not: "cancelled" } },
        select: { totalAmount: true }
      }
    },
  });

  interface TechAccumulator {
    id: string;
    name: string;
    total: number;
    completed: number;
    revenue: number;
  }

  const techMap = new Map<string, TechAccumulator>();

  tickets.forEach(t => {
    const techIds = new Set<string>();
    if (t.assignedTechnicianId) techIds.add(t.assignedTechnicianId);
    for (const tt of t.technicians) {
      techIds.add(tt.userId);
    }

    const revenue = t.repairInvoices.reduce((acc, inv) => acc + Number(inv.totalAmount), 0);

    for (const techId of techIds) {
      const tech = techMap.get(techId) || {
        id: techId,
        name: "",
        total: 0,
        completed: 0,
        revenue: 0,
      };

      // Try to get name from assignedTechnician first, then from junction
      if (!tech.name) {
        if (t.assignedTechnician?.id === techId) {
          tech.name = t.assignedTechnician.name;
        } else {
          const jt = t.technicians.find((tt) => tt.userId === techId);
          if (jt) tech.name = jt.user.name;
        }
      }

      tech.total += 1;
      if (t.currentStatus === "completed") {
        tech.completed += 1;
      }
      tech.revenue += revenue;

      techMap.set(techId, tech);
    }
  });

  return Array.from(techMap.values());
}

/**
 * 7. Inventory Health Report
 */
export async function getInventoryHealthReport() {
  const session = await ensureReportAccess();
  const storeId = session.storeIds[0];

  const [products, parts] = await Promise.all([
    prisma.product.findMany({
      where: { storeId, isArchived: false },
    }),
    prisma.part.findMany({
      where: { storeId, isArchived: false },
    }),
  ]);

  const lowStockProducts = products.filter(p => p.lowStockThreshold !== null && Number(p.stockQty) <= Number(p.lowStockThreshold));
  const lowStockParts = parts.filter(p => p.lowStockThreshold !== null && Number(p.stockQty) <= Number(p.lowStockThreshold));

  const totalStockValue = products.reduce((acc, p) => acc + (Number(p.stockQty) * Number(p.sellingPrice)), 0) +
                          parts.reduce((acc, p) => acc + (Number(p.stockQty) * Number(p.sellingPrice)), 0);

  return {
    summary: {
      lowStockCount: lowStockProducts.length + lowStockParts.length,
      totalItems: products.length + parts.length,
      activeDevices: 0, // Placeholder as Device model seems missing or renamed
      estimatedStockValue: totalStockValue,
    },
    lowStockItems: [
      ...lowStockProducts.map(p => ({ id: p.id, name: p.name, type: "Produit", qty: Number(p.stockQty), threshold: Number(p.lowStockThreshold) })),
      ...lowStockParts.map(p => ({ id: p.id, name: p.name, type: "Pièce", qty: Number(p.stockQty), threshold: Number(p.lowStockThreshold) })),
    ],
  };
}

/**
 * 8. Executive dashboard: one screen for owner/manager.
 */
export async function getExecutiveDashboardReport(filters?: Partial<ReportFilters>) {
  const session = await ensureReportAccess();
  const storeId = filters?.storeId || session.storeIds[0];
  const endDate = filters?.endDate || new Date();
  const startDate = filters?.startDate || subDays(endDate, 30);

  const [sales, repairInvoices, tickets, debts, parts, products, purchases] = await Promise.all([
    prisma.posSale.findMany({
      where: { storeId, createdAt: { gte: startOfDay(startDate), lte: endOfDay(endDate) } },
      select: { totalAmount: true, cashReceivedAmount: true, debtAmount: true, createdAt: true },
    }),
    prisma.repairInvoice.findMany({
      where: { storeId, createdAt: { gte: startOfDay(startDate), lte: endOfDay(endDate) }, status: { not: "cancelled" } },
      select: { totalAmount: true, paidAmount: true, debtAmount: true, createdAt: true },
    }),
    prisma.repairTicket.findMany({
      where: { storeId, createdAt: { gte: startOfDay(startDate), lte: endOfDay(endDate) }, isArchived: false },
      select: { currentStatus: true, deviceCategory: { select: { nameFr: true } }, createdAt: true },
    }),
    prisma.customerDebtBalance.aggregate({
      _sum: { totalDebt: true },
      where: { customer: { companyId: session.companyId, isArchived: false } },
    }),
    prisma.part.findMany({ where: { storeId, isArchived: false }, select: { stockQty: true, lowStockThreshold: true, sellingPrice: true } }),
    prisma.product.findMany({ where: { storeId, isArchived: false }, select: { stockQty: true, lowStockThreshold: true, sellingPrice: true } }),
    prisma.purchaseOrder.findMany({ where: { storeId, status: { in: ["draft", "sent", "confirmed"] } }, select: { id: true, subtotalAmount: true, status: true } }).catch(() => []),
  ]);

  const salesRevenue = sales.reduce((sum, s) => sum + Number(s.totalAmount), 0);
  const repairRevenue = repairInvoices.reduce((sum, i) => sum + Number(i.totalAmount), 0);
  const paid = sales.reduce((sum, s) => sum + Number(s.cashReceivedAmount), 0) + repairInvoices.reduce((sum, i) => sum + Number(i.paidAmount), 0);
  const periodDebt = sales.reduce((sum, s) => sum + Number(s.debtAmount), 0) + repairInvoices.reduce((sum, i) => sum + Number(i.debtAmount), 0);
  const lowStockCount = [...parts, ...products].filter((item) => item.lowStockThreshold !== null && Number(item.stockQty) <= Number(item.lowStockThreshold)).length;
  const stockValue = [...parts, ...products].reduce((sum, item) => sum + Number(item.stockQty) * Number(item.sellingPrice), 0);

  const daily = new Map<string, { revenue: number; repairs: number }>();
  for (const d of eachDayOfInterval({ start: startDate, end: endDate })) {
    daily.set(format(d, "yyyy-MM-dd"), { revenue: 0, repairs: 0 });
  }
  sales.forEach((s) => {
    const key = format(s.createdAt, "yyyy-MM-dd");
    const row = daily.get(key) || { revenue: 0, repairs: 0 };
    row.revenue += Number(s.totalAmount);
    daily.set(key, row);
  });
  repairInvoices.forEach((i) => {
    const key = format(i.createdAt, "yyyy-MM-dd");
    const row = daily.get(key) || { revenue: 0, repairs: 0 };
    row.revenue += Number(i.totalAmount);
    daily.set(key, row);
  });
  tickets.forEach((t) => {
    const key = format(t.createdAt, "yyyy-MM-dd");
    const row = daily.get(key) || { revenue: 0, repairs: 0 };
    row.repairs += 1;
    daily.set(key, row);
  });

  const statusCounts = tickets.reduce((acc, ticket) => {
    acc[ticket.currentStatus] = (acc[ticket.currentStatus] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const categories = tickets.reduce((acc, ticket) => {
    const name = ticket.deviceCategory?.nameFr || "Autre";
    acc[name] = (acc[name] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    summary: {
      totalRevenue: salesRevenue + repairRevenue,
      salesRevenue,
      repairRevenue,
      paid,
      periodDebt,
      totalDebt: Number(debts._sum.totalDebt || 0),
      ticketCount: tickets.length,
      lowStockCount,
      stockValue,
      openPurchaseOrders: purchases.length,
      openPurchaseAmount: purchases.reduce((sum, po) => sum + Number(po.subtotalAmount), 0),
    },
    daily: Array.from(daily.entries()).map(([date, value]) => ({ date, ...value })),
    statusCounts,
    categories: Object.entries(categories).sort((a, b) => b[1] - a[1]).slice(0, 8).map(([name, count]) => ({ name, count })),
  };
}
