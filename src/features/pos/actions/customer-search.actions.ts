"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";

export interface NamedCustomerResult {
  id: string;
  name: string;
  phone: string | null;
  totalDebt: number;
}

/**
 * Search named customers for POS debt sales.
 * Returns only `named` type customers (not walk-in) for the current company.
 */
export async function searchNamedCustomers(
  query: string
): Promise<NamedCustomerResult[]> {
  const session = await getSession();
  if (!session) return [];
  if (session.role === "Technician") return [];

  const q = query.trim();
  if (q.length < 2) return [];

  const customers = await prisma.customer.findMany({
    where: {
      companyId: session.companyId,
      customerType: "named",
      isArchived: false,
      OR: [
        { name: { contains: q, mode: "insensitive" } },
        { phones: { some: { phoneNumber: { contains: q } } } },
      ],
    },
    include: {
      phones: { where: { isPrimary: true }, take: 1 },
      debtBalance: { select: { totalDebt: true } },
    },
    take: 8,
    orderBy: { name: "asc" },
  });

  return customers.map((c) => ({
    id: c.id,
    name: c.name,
    phone: c.phones[0]?.phoneNumber ?? null,
    totalDebt: c.debtBalance ? Number(c.debtBalance.totalDebt) : 0,
  }));
}
