export const PRODUCT_VIEW_MODES = ["list", "table", "card", "compact", "categories"] as const;
export type ProductViewMode = (typeof PRODUCT_VIEW_MODES)[number];

export const PRODUCT_STOCK_FILTERS = ["all", "in_stock", "low_stock", "out_of_stock", "archived"] as const;
export type ProductStockFilter = (typeof PRODUCT_STOCK_FILTERS)[number];

export const PRODUCT_SORTS = ["name_asc", "newest", "stock_low_first", "price_high", "price_low"] as const;
export type ProductSort = (typeof PRODUCT_SORTS)[number];

export interface ProductListFilters {
  storeId?: string;
  q?: string;
  category?: string;
  brand?: string;
  stock?: ProductStockFilter;
  sort?: ProductSort;
  spec?: string;
  showArchived?: boolean;
}

export interface ProductListItem {
  id: string;
  storeId: string;
  categoryId: string | null;
  name: string;
  sku: string;
  barcode: string | null;
  brand: string | null;
  modelReference: string | null;
  sellingPrice: number;
  stockQty: number;
  lowStockThreshold: number | null;
  notes: string | null;
  imageUrl: string | null;
  isArchived: boolean;
  createdAt: Date;
  updatedAt: Date;
  category: { name: string } | null;
}

export interface ProductHierarchy {
  category: string;
  subcategory: string;
  specFamily: string;
}

export function splitCategoryPath(raw?: string | null): string[] {
  if (!raw) return [];
  return raw
    .split(/>/g)
    .map((part) => part.trim())
    .filter(Boolean);
}

export function normalizePathPart(value: string): string {
  return value.trim().replace(/\s+/g, " ");
}

export function normalizeCategoryPath(parts: string[]): string {
  return parts.map(normalizePathPart).filter(Boolean).join(" > ");
}

export function isLowStock(item: Pick<ProductListItem, "lowStockThreshold" | "stockQty" | "isArchived">): boolean {
  if (item.isArchived || item.lowStockThreshold == null) return false;
  return item.stockQty <= item.lowStockThreshold;
}

export function isOutOfStock(item: Pick<ProductListItem, "stockQty" | "isArchived">): boolean {
  return !item.isArchived && item.stockQty <= 0;
}

export function isInStock(item: Pick<ProductListItem, "stockQty" | "isArchived">): boolean {
  return !item.isArchived && item.stockQty > 0;
}

export function suggestedReorderQty(item: Pick<ProductListItem, "stockQty" | "lowStockThreshold">): number {
  if (item.lowStockThreshold == null) return 0;
  if (item.stockQty >= item.lowStockThreshold) return 0;
  return item.lowStockThreshold - item.stockQty;
}
