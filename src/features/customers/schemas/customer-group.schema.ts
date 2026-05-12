import { z } from "zod";

export const createCustomerGroupSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(120),
  debtAlertLimit: z.number().min(0).optional(),
  defaultDiscountPercent: z.number().min(0).max(100).optional(),
  sellingPrice: z.number().min(0).optional(),
});

export const updateCustomerGroupSchema = createCustomerGroupSchema;

export type CreateCustomerGroupInput = z.infer<typeof createCustomerGroupSchema>;
export type UpdateCustomerGroupInput = z.infer<typeof updateCustomerGroupSchema>;
