"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useTransition } from "react";
import {
  Smartphone,
  Tablet,
  Laptop,
  Monitor,
  Printer,
  Gamepad2,
  HelpCircle,
  Plus,
  Globe,
  Store,
  ChevronRight,
  Search,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { hasPermission } from "@/lib/auth/permissions";
import type { UserRole } from "@prisma/client";
import {
  createStoreCustomBrand,
  createStoreCustomFamily,
} from "../actions/catalog.actions";

// ─── Types ───────────────────────────────────────────────────────────────────

interface Category {
  id: string;
  key: string;
  nameFr: string;
  nameAr: string;
  nameEn: string;
}

interface Brand {
  id: string;
  name: string;
  isGlobalDefault: boolean;
  categoryId: string;
}

interface Family {
  id: string;
  name: string;
  isGlobalDefault: boolean;
  brandId: string;
}

interface Props {
  categories: Category[];
  selectedCategoryKey: string | null;
  brands: Brand[];
  selectedBrandId: string | null;
  families: Family[];
  userRole: UserRole;
}

// ─── Icon Mapping ────────────────────────────────────────────────────────────

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  phone: Smartphone,
  tablet: Tablet,
  laptop: Laptop,
  desktop: Monitor,
  printer: Printer,
  console: Gamepad2,
  other: HelpCircle,
};

// ─── Shared styles ───────────────────────────────────────────────────────────

const inputCls =
  "w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50";

const btnPrimary =
  "rounded-md bg-primary px-3 py-1.5 text-sm font-medium text-primary-foreground hover:bg-primary/90 disabled:opacity-50 transition-colors";

const btnGhost =
  "text-sm text-muted-foreground hover:text-foreground disabled:opacity-50 transition-colors";

// ─── ScopeBadge ──────────────────────────────────────────────────────────────

function ScopeBadge({ isGlobal }: { isGlobal: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-medium shrink-0",
        isGlobal
          ? "bg-accent text-accent-foreground"
          : "bg-warning/15 text-warning"
      )}
    >
      {isGlobal ? (
        <>
          <Globe className="h-2.5 w-2.5" />
          Global
        </>
      ) : (
        <>
          <Store className="h-2.5 w-2.5" />
          Custom
        </>
      )}
    </span>
  );
}

// ─── Add Form ────────────────────────────────────────────────────────────────

function InlineAddForm({
  placeholder,
  onSubmit,
  onCancel,
}: {
  placeholder: string;
  onSubmit: (name: string) => Promise<void>;
  onCancel: () => void;
}) {
  const [name, setName] = useState("");
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim()) return;
    setError(null);
    startTransition(async () => {
      try {
        await onSubmit(name.trim());
        setName("");
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erreur");
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 mt-2">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder={placeholder}
        className={cn(inputCls, "flex-1")}
        disabled={isPending}
        autoFocus
      />
      <button type="submit" disabled={isPending || !name.trim()} className={btnPrimary}>
        {isPending ? "…" : "Ajouter"}
      </button>
      <button type="button" onClick={onCancel} disabled={isPending} className={btnGhost}>
        Annuler
      </button>
      {error && <span className="text-xs text-destructive">{error}</span>}
    </form>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────

export function CatalogBrowser({
  categories,
  selectedCategoryKey,
  brands,
  selectedBrandId,
  families,
  userRole,
}: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const canManage = hasPermission(userRole, "inventory:manage");

  const [showAddBrand, setShowAddBrand] = useState(false);
  const [showAddFamily, setShowAddFamily] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const selectedCategory = categories.find((c) => c.key === selectedCategoryKey) ?? null;
  const selectedBrand = brands.find((b) => b.id === selectedBrandId) ?? null;

  // Navigation helpers
  function selectCategory(key: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", key);
    params.delete("brand");
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
    setShowAddBrand(false);
    setShowAddFamily(false);
  }

  function selectBrand(id: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("brand", id);
    router.push(`/dashboard/settings/catalog?${params.toString()}`);
    setShowAddFamily(false);
  }

  // Filter brands by search
  const filteredBrands = searchQuery
    ? brands.filter((b) =>
        b.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : brands;

  // Filter families by search
  const filteredFamilies = searchQuery
    ? families.filter((f) =>
        f.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : families;

  // ── Add handlers ─────────────────────────────────────────────────────────

  async function handleAddBrand(name: string) {
    if (!selectedCategory) return;
    const result = await createStoreCustomBrand(selectedCategory.id, name);
    if ("error" in result) throw new Error(result.error);
    setShowAddBrand(false);
    router.refresh();
  }

  async function handleAddFamily(name: string) {
    if (!selectedBrand) return;
    const result = await createStoreCustomFamily(selectedBrand.id, name);
    if ("error" in result) throw new Error(result.error);
    setShowAddFamily(false);
    router.refresh();
  }

  return (
    <div className="space-y-4">
      {/* Search bar */}
      <div className="relative">
        <Search className="absolute start-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Rechercher une marque ou famille…"
          className={cn(inputCls, "ps-9")}
        />
      </div>

      {/* Category tabs */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => {
          const Icon = CATEGORY_ICONS[cat.key] ?? HelpCircle;
          const isActive = cat.key === selectedCategoryKey;
          return (
            <button
              key={cat.key}
              onClick={() => selectCategory(cat.key)}
              className={cn(
                "flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "bg-card border border-border text-foreground hover:bg-muted"
              )}
            >
              <Icon className="h-4 w-4" />
              {cat.nameFr}
            </button>
          );
        })}
      </div>

      {/* Content area: brands + families side by side */}
      {selectedCategory ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* ── Brands column ────────────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">
                Marques — {selectedCategory.nameFr}
              </h2>
              {canManage && !showAddBrand && (
                <button
                  onClick={() => setShowAddBrand(true)}
                  className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Ajouter
                </button>
              )}
            </div>

            <div className="p-2 space-y-0.5 max-h-[28rem] overflow-y-auto">
              {filteredBrands.length === 0 ? (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                  {searchQuery ? "Aucune marque trouvée" : "Aucune marque"}
                </p>
              ) : (
                filteredBrands.map((brand) => (
                  <button
                    key={brand.id}
                    onClick={() => selectBrand(brand.id)}
                    className={cn(
                      "w-full flex items-center justify-between rounded-lg px-3 py-2.5 text-start text-sm transition-colors",
                      brand.id === selectedBrandId
                        ? "bg-primary/10 text-primary font-medium"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    <div className="flex items-center gap-2 min-w-0">
                      <span className="truncate">{brand.name}</span>
                      <ScopeBadge isGlobal={brand.isGlobalDefault} />
                    </div>
                    <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
                  </button>
                ))
              )}
            </div>

            {showAddBrand && (
              <div className="border-t border-border px-4 py-3">
                <InlineAddForm
                  placeholder="Nom de la marque…"
                  onSubmit={handleAddBrand}
                  onCancel={() => setShowAddBrand(false)}
                />
              </div>
            )}
          </div>

          {/* ── Families column ───────────────────────────────────────── */}
          <div className="rounded-xl border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-4 py-3">
              <h2 className="text-sm font-semibold text-foreground">
                {selectedBrand
                  ? `Familles — ${selectedBrand.name}`
                  : "Familles de modèles"}
              </h2>
              {canManage && selectedBrand && !showAddFamily && (
                <button
                  onClick={() => setShowAddFamily(true)}
                  className="flex items-center gap-1 text-xs font-medium text-primary hover:text-primary/80 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                  Ajouter
                </button>
              )}
            </div>

            <div className="p-2 space-y-0.5 max-h-[28rem] overflow-y-auto">
              {!selectedBrand ? (
                <p className="px-3 py-6 text-center text-sm text-muted-foreground">
                  Sélectionnez une marque pour voir ses familles de modèles
                </p>
              ) : filteredFamilies.length === 0 ? (
                <div className="px-3 py-6 text-center">
                  <p className="text-sm text-muted-foreground">
                    {searchQuery
                      ? "Aucune famille trouvée"
                      : "Aucune famille de modèle"}
                  </p>
                  {canManage && !searchQuery && (
                    <button
                      onClick={() => setShowAddFamily(true)}
                      className="mt-2 text-sm text-primary hover:underline"
                    >
                      Ajouter une famille
                    </button>
                  )}
                </div>
              ) : (
                filteredFamilies.map((family) => (
                  <div
                    key={family.id}
                    className="flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground"
                  >
                    <span>{family.name}</span>
                    <ScopeBadge isGlobal={family.isGlobalDefault} />
                  </div>
                ))
              )}
            </div>

            {showAddFamily && selectedBrand && (
              <div className="border-t border-border px-4 py-3">
                <InlineAddForm
                  placeholder="Nom de la famille…"
                  onSubmit={handleAddFamily}
                  onCancel={() => setShowAddFamily(false)}
                />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-border p-10 text-center">
          <p className="text-sm text-muted-foreground">
            Sélectionnez une catégorie pour parcourir le catalogue
          </p>
        </div>
      )}
    </div>
  );
}
