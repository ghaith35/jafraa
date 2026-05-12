import { z } from "zod";

export const createExpenseCategorySchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(200),
});

export type CreateExpenseCategoryInput = z.infer<typeof createExpenseCategorySchema>;

export const createExpenseSchema = z.object({
  categoryId: z.string().trim().min(1, "La catégorie est requise"),
  amount: z.number().min(1, "Le montant doit être ≥ 1"),
  expenseDate: z.string().trim().min(1, "La date est requise"),
  note: z.string().trim().max(500).optional(),
});

export const updateExpenseSchema = createExpenseSchema;

export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
export type UpdateExpenseInput = z.infer<typeof updateExpenseSchema>;
