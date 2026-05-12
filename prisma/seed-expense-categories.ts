import { PrismaClient } from "@prisma/client";

const DEFAULT_CATEGORIES = [
  { name: "Loyer", isGlobal: true },
  { name: "Électricité", isGlobal: true },
  { name: "Eau", isGlobal: true },
  { name: "Fournitures de bureau", isGlobal: true },
  { name: "Transport", isGlobal: true },
  { name: "Marketing & Publicité", isGlobal: true },
  { name: "Entretien & Réparation", isGlobal: true },
  { name: "Salaires", isGlobal: true },
  { name: "Frais bancaires", isGlobal: true },
  { name: "Impôts & Taxes", isGlobal: true },
  { name: "Autres", isGlobal: true },
];

export async function seedExpenseCategories(prisma: PrismaClient) {
  for (const cat of DEFAULT_CATEGORIES) {
    await prisma.expenseCategory.upsert({
      where: { id: `seed-expense-cat-${cat.name.toLowerCase().replace(/[^a-z]/g, "-")}` },
      update: { name: cat.name },
      create: {
        id: `seed-expense-cat-${cat.name.toLowerCase().replace(/[^a-z]/g, "-")}`,
        companyId: null,
        storeId: null,
        name: cat.name,
        isDefault: true,
      },
    });
  }
  console.log(`  ExpenseCategories: ${DEFAULT_CATEGORIES.length} default categories`);
}
