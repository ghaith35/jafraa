"use server";

import { prisma } from "@/lib/db";
import { verifyPassword } from "@/lib/auth/passwords";
import {
  signSuperAdminToken,
  setSuperAdminCookie,
  clearSuperAdminCookie,
} from "@/lib/auth/super-admin-session";
import { redirect } from "next/navigation";

export async function superAdminLogin(email: string, password: string) {
  const admin = await prisma.superAdminUser.findUnique({ where: { email } });

  if (!admin) {
    // Constant-time fake check
    await verifyPassword("fake", "$2b$12$fake.hash.to.prevent.timing.attacks.padding");
    return { error: "Identifiants invalides" };
  }

  const valid = await verifyPassword(password, admin.passwordHash);
  if (!valid) return { error: "Identifiants invalides" };

  const token = await signSuperAdminToken({
    sub: admin.id,
    email: admin.email,
    name: admin.name,
  });

  await setSuperAdminCookie(token);
  redirect("/super-admin/dashboard");
}

export async function superAdminLogout() {
  await clearSuperAdminCookie();
  redirect("/super-admin/login");
}
