"use client";

import { Menu } from "lucide-react";
import type { UserRole } from "@prisma/client";

interface Props {
  user: {
    name: string;
    role: UserRole;
  };
  company: { name: string };
  onMobileMenuToggle: () => void;
}

export function Topbar({ user, company, onMobileMenuToggle }: Props) {
  return (
    <header className="sticky top-0 z-10 flex h-14 items-center gap-3 border-b border-border bg-card px-4 shrink-0">
      {/* Mobile: hamburger */}
      <button
        onClick={onMobileMenuToggle}
        className="lg:hidden rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Ouvrir le menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Company name — visible on mobile only (desktop shows in sidebar) */}
      <div className="flex-1 flex items-center gap-2 lg:hidden">
        <div className="h-6 w-6 rounded bg-primary flex items-center justify-center shrink-0">
          <span className="text-xs font-bold text-white">R</span>
        </div>
        <span className="text-sm font-semibold text-foreground truncate">
          {company.name}
        </span>
      </div>

      {/* Desktop spacer */}
      <div className="hidden lg:flex flex-1" />

      {/* User info chip — visible on all sizes */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="hidden sm:inline truncate max-w-[160px]">{user.name}</span>
      </div>
    </header>
  );
}
