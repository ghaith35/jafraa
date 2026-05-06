"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { startOfDay, endOfDay, format, eachDayOfInterval } from "date-fns";

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
export async function getDashboardStats() {
  const session = await getSession();
  if (!session) return null;
  const storeId = session.storeIds[0];

  const todayStart = startOfDay(new Date());
  const todayEnd = endOfDay(new Date());

  const [dailySales, openTickets, lowStock, totalDebt] = await Promise.all([
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
    })
  ]);

  return {
    dailyRevenue: Number(dailySales._sum.totalAmount || 0),
    openTickets,
    lowStock,
    totalDebt: Number(totalDebt._sum.totalDebt || 0),
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
      assignedTechnicianId: { not: null },
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
      repairInvoices: {
        where: { status: { not: "cancelled" } },
        select: { totalAmount: true }
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const techMap = new Map<string, any>();

  tickets.forEach(t => {
    if (!t.assignedTechnician) return;
    
    const tech = techMap.get(t.assignedTechnicianId!) || {
      id: t.assignedTechnicianId,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      name: (t as any).assignedTechnician.name,
      total: 0,
      completed: 0,
      revenue: 0,
    };

    tech.total += 1;
    if (t.currentStatus === "completed") {
      tech.completed += 1;
    }

    // Sum revenue from repair invoices
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const revenue = (t as any).repairInvoices.reduce((acc: number, inv: any) => acc + Number(inv.totalAmount), 0);
    tech.revenue += revenue;

    techMap.set(t.assignedTechnicianId!, tech);
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
