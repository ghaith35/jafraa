"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import bcrypt from "bcryptjs";

const userSchema = z.object({
  name: z.string().min(1).max(200),
  email: z.string().email().max(200),
  role: z.enum(["Admin", "Manager", "Cashier", "Technician"]),
  languagePreference: z.enum(["fr", "ar", "en"]).default("fr"),
});

export async function createUser(companyId: string, data: z.infer<typeof userSchema> & { password: string }) {
  const parsed = userSchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  if (!data.password || data.password.length < 4) return { error: "Password required (min 4 chars)" };
  const d = parsed.data;
  const passwordHash = await bcrypt.hash(data.password, 10);
  await prisma.user.create({ data: { companyId, name: d.name, email: d.email, role: d.role as any, languagePreference: d.languagePreference as any, passwordHash } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function updateUser(id: string, data: z.infer<typeof userSchema>) {
  const parsed = userSchema.safeParse(data);
  if (!parsed.success) return { error: (parsed.error.issues?.[0]?.message) || (parsed.error.errors?.[0]?.message) || "Validation failed" };
  const d = parsed.data;
  await prisma.user.update({ where: { id }, data: { name: d.name, email: d.email, role: d.role as any, languagePreference: d.languagePreference as any } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function archiveUser(id: string) {
  await prisma.user.update({ where: { id }, data: { isArchived: true } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}

export async function restoreUser(id: string) {
  await prisma.user.update({ where: { id }, data: { isArchived: false } });
  revalidatePath("/super-admin/dashboard");
  return { success: true };
}
