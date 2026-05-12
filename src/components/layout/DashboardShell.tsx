"use client";

import { useState } from "react";
import { useLocale } from "next-intl";
import type { UserRole, LanguagePreference } from "@prisma/client";
import { Sidebar } from "./Sidebar";
import { Topbar } from "./Topbar";
import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  user: {
    id: string;
    name: string;
    email: string;
    role: UserRole;
    languagePreference: LanguagePreference;
  };
  company: { name: string };
  storeIds: string[];
}

export function DashboardShell({ children, user, company }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const locale = useLocale();

  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <div dir={dir} className="flex h-svh overflow-hidden bg-surface-page">
      {/* Mobile overlay backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/40 lg:hidden"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <Sidebar
        user={user}
        company={company}
        mobileOpen={mobileOpen}
        collapsed={collapsed}
        onMobileClose={() => setMobileOpen(false)}
        onToggleCollapse={() => setCollapsed((c) => !c)}
        dir={dir}
      />

      {/* Main content — offset by sidebar width on desktop */}
      <div
        className={cn(
          "flex flex-1 flex-col overflow-hidden transition-all duration-200 ease-in-out",
          collapsed ? "lg:ms-[60px]" : "lg:ms-[220px]"
        )}
      >
        <Topbar
          user={user}
          company={company}
          onMobileMenuToggle={() => setMobileOpen((o) => !o)}
        />
        <main className="main-scroll flex-1 overflow-y-auto">
          <div className="p-4 md:p-5">{children}</div>
        </main>
      </div>
    </div>
  );
}
