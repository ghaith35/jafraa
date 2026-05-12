import { prisma } from "@/lib/db";

interface RawMonth {
  year: number;
  month: number;
  count: bigint;
}

interface RawDay {
  day: number;
  count: bigint;
}

interface MonthEntry {
  year: number;
  month: number;
  count: number;
}

interface DayEntry {
  day: number;
  count: number;
}

export async function getAvailableMonths(
  storeId: string,
  extraWhere?: string
): Promise<MonthEntry[]> {
  const where = extraWhere ? `AND ${extraWhere}` : "";
  const rows = await prisma.$queryRawUnsafe<RawMonth[]>(
    `SELECT
      EXTRACT(YEAR FROM "createdAt")::int AS year,
      EXTRACT(MONTH FROM "createdAt")::int AS month,
      COUNT(*)::int AS count
    FROM repair_tickets
    WHERE "storeId" = $1 ${where}
    GROUP BY year, month
    ORDER BY year DESC, month DESC`,
    storeId
  );
  return (rows as unknown as RawMonth[]).map((r) => ({
    year: r.year,
    month: r.month,
    count: Number(r.count),
  }));
}

export async function getAvailableDays(
  storeId: string,
  year: number,
  month: number,
  extraWhere?: string
): Promise<DayEntry[]> {
  const where = extraWhere ? `AND ${extraWhere}` : "";
  const startDate = `${year}-${String(month).padStart(2, "0")}-01`;
  const endDate =
    month === 12
      ? `${year + 1}-01-01`
      : `${year}-${String(month + 1).padStart(2, "0")}-01`;
  const rows = await prisma.$queryRawUnsafe<RawDay[]>(
    `SELECT
      EXTRACT(DAY FROM "createdAt")::int AS day,
      COUNT(*)::int AS count
    FROM repair_tickets
    WHERE "storeId" = $1 AND "createdAt" >= $2::date AND "createdAt" < $3::date ${where}
    GROUP BY day
    ORDER BY day ASC`,
    storeId,
    startDate,
    endDate
  );
  return (rows as unknown as RawDay[]).map((r) => ({
    day: r.day,
    count: Number(r.count),
  }));
}
