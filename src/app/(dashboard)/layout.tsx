import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth/session";
import { prisma } from "@/lib/db";
import { DashboardShell } from "@/components/layout/DashboardShell";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();
  if (!session) redirect("/login");

  const user = await prisma.user.findUnique({
    where: { id: session.sub },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      languagePreference: true,
      company: { select: { name: true } },
    },
  });

  if (!user) redirect("/login");

  return (
    <DashboardShell
      user={{
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        languagePreference: user.languagePreference,
      }}
      company={{ name: user.company.name }}
      storeIds={session.storeIds}
    >
      {children}
    </DashboardShell>
  );
}
