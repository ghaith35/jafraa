export function localizedCategoryName(
  category: { name: string; nameFr?: string | null; nameAr?: string | null; nameEn?: string | null },
  locale: string
): string {
  if (locale === "ar" && category.nameAr) return category.nameAr;
  if (locale === "en" && category.nameEn) return category.nameEn;
  if (locale === "fr" && category.nameFr) return category.nameFr;
  return category.name;
}
