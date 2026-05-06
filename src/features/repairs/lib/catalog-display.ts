import type { Locale } from "@/i18n/routing";

export type RepairCatalogFamily = {
  id: string;
  name: string;
};

export type RepairCatalogBrand = {
  id: string;
  name: string;
  modelFamilies: RepairCatalogFamily[];
};

export type RepairCatalogCategory = {
  id: string;
  key: string;
  nameFr: string;
  nameAr: string;
  nameEn: string;
  brands: RepairCatalogBrand[];
};

export function getCategoryLabel(category: RepairCatalogCategory, locale: Locale | string): string {
  if (locale === "ar") return category.nameAr;
  if (locale === "en") return category.nameEn;
  return category.nameFr;
}

export function getCategoryIconKey(categoryKey?: string): string {
  switch (categoryKey) {
    case "phone":
      return "phone";
    case "tablet":
      return "tablet";
    case "laptop":
      return "laptop";
    case "desktop":
      return "desktop";
    case "printer":
      return "printer";
    case "console":
      return "console";
    default:
      return "other";
  }
}

export function getBrandIconKey(brandName?: string): string {
  const brand = (brandName ?? "").toLowerCase();
  if (brand.includes("apple") || brand.includes("ipad")) return "apple";
  if (
    brand.includes("samsung") ||
    brand.includes("xiaomi") ||
    brand.includes("redmi") ||
    brand.includes("poco") ||
    brand.includes("oppo") ||
    brand.includes("realme") ||
    brand.includes("vivo") ||
    brand.includes("huawei") ||
    brand.includes("honor") ||
    brand.includes("infinix") ||
    brand.includes("tecno") ||
    brand.includes("itel") ||
    brand.includes("nokia") ||
    brand.includes("motorola") ||
    brand.includes("oneplus") ||
    brand.includes("pixel")
  ) return "phone";
  if (brand.includes("hp") || brand.includes("dell") || brand.includes("lenovo") || brand.includes("acer") || brand.includes("asus") || brand.includes("msi")) return "laptop";
  if (brand.includes("epson") || brand.includes("canon") || brand.includes("brother") || brand.includes("xerox") || brand.includes("pantum") || brand.includes("riso") || brand.includes("ricoh") || brand.includes("duplo")) return "printer";
  if (brand.includes("playstation") || brand.includes("xbox") || brand.includes("nintendo")) return "console";
  return "brand";
}

export function getDeviceIconKey(categoryKey?: string): string {
  return getCategoryIconKey(categoryKey);
}
