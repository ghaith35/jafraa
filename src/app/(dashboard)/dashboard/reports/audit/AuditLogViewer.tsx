"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Search, Filter, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

const ACTION_COLORS: Record<string, string> = {
  create: "bg-emerald-100 text-emerald-700",
  update: "bg-blue-100 text-blue-700",
  delete: "bg-red-100 text-red-700",
  payment: "bg-amber-100 text-amber-700",
  refund: "bg-orange-100 text-orange-700",
  login: "bg-purple-100 text-purple-700",
};

function actionColor(action: string) {
  for (const [key, cls] of Object.entries(ACTION_COLORS)) {
    if (action.toLowerCase().includes(key)) return cls;
  }
  return "bg-gray-100 text-gray-700";
}

interface LogEntry {
  id: string;
  action: string;
  entityType: string;
  entityId: string;
  createdAt: Date;
  ipAddress: string | null;
  user: { name: string; role: string } | null;
  store: { name: string } | null;
}

interface Props {
  logs: LogEntry[];
  users: { id: string; name: string; role: string }[];
}

export function AuditLogViewer({ logs, users }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const [search, setSearch] = useState("");

  const filtered = logs.filter((l) => {
    if (!search) return true;
    const q = search.toLowerCase();
    return (
      l.action.toLowerCase().includes(q) ||
      l.entityType.toLowerCase().includes(q) ||
      l.entityId.toLowerCase().includes(q) ||
      l.user?.name.toLowerCase().includes(q) ||
      false
    );
  });

  const updateFilter = (key: string, value: string) => {
    const params = new URLSearchParams(window.location.search);
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="space-y-4">
      {/* Filters */}
      <div className="flex flex-wrap gap-3 items-center">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Rechercher action, entité, utilisateur..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-9 pl-9 pr-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
          />
        </div>
        <select
          onChange={(e) => updateFilter("userId", e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none"
          defaultValue=""
        >
          <option value="">Tous les utilisateurs</option>
          {users.map((u) => (
            <option key={u.id} value={u.id}>
              {u.name}
            </option>
          ))}
        </select>
        <select
          onChange={(e) => updateFilter("entityType", e.target.value)}
          className="h-9 rounded-md border border-input bg-background px-3 text-sm focus:outline-none"
          defaultValue=""
        >
          <option value="">Toutes les entités</option>
          {["pos_sale", "repair_ticket", "repair_invoice", "refund", "cash_session", "customer", "stock_movement"].map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      {/* Count */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <Filter className="h-4 w-4" />
        {filtered.length} entrée{filtered.length !== 1 ? "s" : ""}
      </div>

      {/* Table */}
      <div className="rounded-xl border border-border bg-card overflow-hidden">
        {filtered.length === 0 ? (
          <div className="p-10 text-center text-muted-foreground text-sm">
            <Shield className="h-10 w-10 mx-auto mb-3 opacity-20" />
            Aucune entrée trouvée.
          </div>
        ) : (
          <div className="divide-y divide-border">
            {filtered.map((log) => (
              <div key={log.id} className="px-5 py-3 hover:bg-muted/20 transition-colors">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-3 min-w-0">
                    <span className={cn("text-xs px-2 py-0.5 rounded-full font-medium shrink-0 mt-0.5", actionColor(log.action))}>
                      {log.action}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm">
                        <span className="font-medium">{log.entityType}</span>
                        <span className="text-muted-foreground ml-2 text-xs font-mono">{log.entityId.slice(0, 12)}…</span>
                      </p>
                      <div className="flex items-center gap-3 mt-0.5 text-xs text-muted-foreground flex-wrap">
                        {log.user && (
                          <span>{log.user.name} <span className="opacity-60">({log.user.role})</span></span>
                        )}
                        {log.store && <span>· {log.store.name}</span>}
                        {log.ipAddress && <span>· {log.ipAddress}</span>}
                      </div>
                    </div>
                  </div>
                  <time className="text-xs text-muted-foreground shrink-0 tabular-nums">
                    {new Date(log.createdAt).toLocaleString("fr-FR", {
                      day: "2-digit",
                      month: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </time>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
