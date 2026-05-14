"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  LayoutDashboard, Building2, Store, Users, CreditCard, Layers, Tag, Boxes, Cpu, FileText, LogOut, ChevronLeft, ChevronRight, Menu
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Props {
  user: { id: string; name: string; email: string };
  children: React.ReactNode;
}

const navItems = [
  { section: "Overview", items: [
    { href: "/super-admin/dashboard", icon: LayoutDashboard, label: "Dashboard" },
  ]},
  { section: "Tenant Management", items: [
    { href: "/super-admin/dashboard/companies", icon: Building2, label: "Companies" },
  ]},
  { section: "Catalog", items: [
    { href: "/super-admin/dashboard/catalog", icon: Layers, label: "Catalog Manager" },
  ]},
  { section: "System", items: [
    { href: "/super-admin/dashboard/audit", icon: FileText, label: "Audit Log" },
  ]},
];

export function SuperAdminLayout({ user, children }: Props) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex h-screen overflow-hidden bg-surface-page">
      {/* Mobile overlay */}
      {mobileOpen && <div className="fixed inset-0 z-20 bg-black/40 lg:hidden" onClick={() => setMobileOpen(false)} />}

      {/* Sidebar */}
      <aside
        className={cn("fixed inset-y-0 start-0 z-30 flex flex-col transition-all duration-300 lg:translate-x-0",
          collapsed ? "w-[60px]" : "w-[220px]",
          mobileOpen ? "translate-x-0" : "-translate-x-full")}
        style={{ background: "linear-gradient(180deg, #0c1226 0%, #162042 100%)", borderRight: "1px solid #1e293b" }}
      >
        {/* Logo */}
        <div className={cn("shrink-0", collapsed ? "px-2 pt-4 pb-2" : "px-4 pt-5 pb-3")}>
          <div className="flex items-center justify-between">
            {!collapsed && <span className="text-lg font-bold text-white">RE<span className="text-blue-400">PAIRE</span></span>}
            <button onClick={() => setCollapsed(!collapsed)} className={cn("hidden lg:flex h-7 w-7 items-center justify-center rounded-md text-slate-400 hover:text-white hover:bg-white/10", collapsed && "w-full")}>
              {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(false)} className="absolute top-4 end-4 lg:hidden text-white"><Menu className="h-5 w-5" /></button>

        {/* Nav */}
        <nav className="flex-1 overflow-y-auto px-2 py-1">
          {navItems.map((section) => (
            <div key={section.section} className="mb-1">
              {!collapsed && <div className="px-2 pb-1 pt-3 text-[11px] font-semibold uppercase tracking-wider text-slate-500">{section.section}</div>}
              {section.items.map((item) => (
                <Link key={item.href} href={item.href}
                  className={cn("flex items-center gap-2.5 rounded-lg px-2 py-2 text-sm transition", collapsed ? "justify-center" : "",
                    pathname === item.href || pathname.startsWith(item.href + "/")
                      ? "bg-indigo-500/20 text-indigo-300"
                      : "text-slate-400 hover:bg-white/5 hover:text-slate-200")}>
                  <item.icon className="h-4 w-4 shrink-0" />
                  {!collapsed && <span className="truncate">{item.label}</span>}
                </Link>
              ))}
            </div>
          ))}
        </nav>

        {/* User footer */}
        {!collapsed && (
          <div className="shrink-0 border-t border-slate-800 px-4 py-3">
            <p className="truncate text-xs font-medium text-slate-200">{user.name}</p>
            <p className="truncate text-[11px] text-slate-500">{user.email}</p>
            <button onClick={() => router.push("/super-admin")} className="mt-1.5 flex items-center gap-1 text-[11px] text-red-400 hover:text-red-300">
              <LogOut className="h-3 w-3" /> Logout
            </button>
          </div>
        )}
      </aside>

      {/* Main */}
      <div className={cn("flex flex-1 flex-col transition-all duration-300", collapsed ? "lg:ms-[60px]" : "lg:ms-[220px]")}>
        <header className="flex h-12 shrink-0 items-center justify-between border-b border-border bg-surface/80 backdrop-blur-md px-4">
          <button onClick={() => setMobileOpen(true)} className="lg:hidden"><Menu className="h-5 w-5" /></button>
          <span className="text-sm font-semibold text-foreground">Super Admin</span>
          <span className="text-xs text-muted-foreground">{user.email}</span>
        </header>
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
