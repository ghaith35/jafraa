"use client";

import { ChevronLeft, ChevronRight, Home } from "lucide-react";
import { Link, usePathname } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
  homeHref?: string;
}

export function Breadcrumbs({ items, className, homeHref = "/dashboard" }: BreadcrumbsProps) {
  const pathname = usePathname();
  const isRtl = pathname.startsWith("/ar");

  return (
    <nav className={cn("flex items-center gap-1 text-[13px] text-muted-foreground", className)} aria-label="Breadcrumb">
      <Link
        href={homeHref}
        className="flex items-center gap-1 hover:text-foreground transition-colors"
      >
        <Home className="h-3.5 w-3.5" />
      </Link>

      {items.length > 0 && (
        <span className="flex items-center text-muted-foreground/40">
          {isRtl ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
        </span>
      )}

      {items.map((item, i) => {
        const isLast = i === items.length - 1;

        return (
          <span key={item.label} className="flex items-center gap-1">
            {item.href && !isLast ? (
              <Link
                href={item.href}
                className="hover:text-foreground transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className={cn(isLast && "text-foreground font-medium")}>
                {item.label}
              </span>
            )}

            {!isLast && (
              <span className="text-muted-foreground/40">
                {isRtl ? <ChevronLeft className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
              </span>
            )}
          </span>
        );
      })}
    </nav>
  );
}
