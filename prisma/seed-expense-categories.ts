import { PrismaClient } from "@prisma/client";

const DEFAULT_CATEGORIES = [
  { id: "seed-expense-cat-electricite",  name: "Électricité",  nameFr: "Électricité",  nameAr: "الكهرباء",  nameEn: "Electricity" },
  { id: "seed-expense-cat-loyer",       name: "Loyer",        nameFr: "Loyer",        nameAr: "الإيجار",   nameEn: "Rent" },
  { id: "seed-expense-cat-eau",         name: "Eau",          nameFr: "Eau",          nameAr: "الماء",     nameEn: "Water" },
  { id: "seed-expense-cat-entretien",   name: "Entretien & Réparation", nameFr: "Entretien & Réparation", nameAr: "الصيانة",  nameEn: "Maintenance" },
  { id: "seed-expense-cat-transport",   name: "Transport",    nameFr: "Transport",    nameAr: "النقل",     nameEn: "Transport" },
];

export async function seedExpenseCategories(prisma: PrismaClient) {
  for (const cat of DEFAULT_CATEGORIES) {
    await prisma.expenseCategory.upsert({
      where: { id: cat.id },
      update: { name: cat.name, nameFr: cat.nameFr, nameAr: cat.nameAr, nameEn: cat.nameEn },
      create: {
        id: cat.id,
        companyId: null,
        storeId: null,
        name: cat.name,
        nameFr: cat.nameFr,
        nameAr: cat.nameAr,
        nameEn: cat.nameEn,
        isDefault: true,
      },
    });
  }
  console.log(`  ExpenseCategories: ${DEFAULT_CATEGORIES.length} default categories (FR/AR/EN)`);
}
