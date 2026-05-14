"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const storeSchema = z.object({
  name: z.string().min(1).max(200),
  address: z.string().max(300).optional().or(z.literal("")),
  phone: z.string().max(60).optional().or(z.literal("")),
});

export async function createStore(companyId: string, data: z.infer<typeof storeSchema>) {
  const parsed = storeSchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  const d = parsed.data;
  await prisma.store.create({ data: { companyId, name: d.name, address: d.address || null, phone: d.phone || null } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function updateStore(id: string, data: z.infer<typeof storeSchema>) {
  const parsed = storeSchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  const d = parsed.data;
  await prisma.store.update({ where: { id }, data: { name: d.name, address: d.address || null, phone: d.phone || null } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function archiveStore(id: string) {
  await prisma.store.update({ where: { id }, data: { isArchived: true } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}
