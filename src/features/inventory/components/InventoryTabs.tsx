"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Package, Wrench, Zap } from "lucide-react";

type Tab = "products" | "parts" | "services";

const TABS: { key: Tab; label: string; icon: React.ElementType }[] = [
  { key: "products", label: "Produits",  icon: Package },
  { key: "parts",    label: "Pièces",    icon: Wrench },
  { key: "services", label: "Services",  icon: Zap },
];

interface Props {
  activeTab: Tab;
}

export function InventoryTabs({ activeTab }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  function selectTab(tab: Tab) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", tab);
    params.delete("q");
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex gap-1 rounded-xl border border-border bg-muted p-1">
      {TABS.map(({ key, label, icon: Icon }) => (
        <button
          key={key}
          onClick={() => selectTab(key)}
          className={cn(
            "flex flex-1 items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
            activeTab === key
              ? "bg-background text-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Icon className="h-4 w-4" />
          {label}
        </button>
      ))}
    </div>
  );
}
