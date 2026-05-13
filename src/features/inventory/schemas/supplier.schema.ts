import { z } from "zod";

export const createSupplierSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(120),
  phones: z.string().trim().max(200).optional().or(z.literal("")),
  nif: z.string().trim().max(30).optional().or(z.literal("")),
  nis: z.string().trim().max(30).optional().or(z.literal("")),
  address: z.string().trim().max(300).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
});

export const updateSupplierSchema = createSupplierSchema;

export type CreateSupplierInput = z.infer<typeof createSupplierSchema>;
export type UpdateSupplierInput = z.infer<typeof updateSupplierSchema>;
