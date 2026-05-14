"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const companySchema = z.object({
  name: z.string().min(1).max(200),
  address: z.string().max(300).optional().or(z.literal("")),
  phone: z.string().max(60).optional().or(z.literal("")),
  email: z.string().email().max(200).optional().or(z.literal("")),
  logoUrl: z.string().max(500).optional().or(z.literal("")),
});

export async function listCompanies() {
  return prisma.company.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: { select: { stores: true, users: true } },
      subscriptions: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });
}

export async function getCompany(id: string) {
  return prisma.company.findUnique({
    where: { id },
    include: {
      stores: { orderBy: { name: "asc" } },
      users: { orderBy: { name: "asc" } },
      subscriptions: { orderBy: { createdAt: "desc" }, take: 1 },
    },
  });
}

export async function createCompany(data: z.infer<typeof companySchema>) {
  const parsed = companySchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  const d = parsed.data;
  const company = await prisma.company.create({ data: { ...d, address: d.address || null, phone: d.phone || null, email: d.email || null, logoUrl: d.logoUrl || null } });
  revalidatePath("/super-admin/dashboard");
  return { success: true, id: company.id };
}

export async function updateCompany(id: string, data: z.infer<typeof companySchema>) {
  const parsed = companySchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  const d = parsed.data;
  await prisma.company.update({ where: { id }, data: { ...d, address: d.address || null, phone: d.phone || null, email: d.email || null, logoUrl: d.logoUrl || null } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function archiveCompany(id: string) {
  await prisma.company.update({ where: { id }, data: { isArchived: true } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function restoreCompany(id: string) {
  await prisma.company.update({ where: { id }, data: { isArchived: false } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}
