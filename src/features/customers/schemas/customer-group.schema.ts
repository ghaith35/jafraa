import { z } from "zod";

export const createCustomerGroupSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(120),
});

export const updateCustomerGroupSchema = createCustomerGroupSchema;

export type CreateCustomerGroupInput = z.infer<typeof createCustomerGroupSchema>;
export type UpdateCustomerGroupInput = z.infer<typeof updateCustomerGroupSchema>;
