import { z } from "zod";

export const estimateLineSchema = z.object({
  lineType: z.enum(["labor", "part", "service", "custom"]),
  description: z.string().min(1, "La description est requise"),
  productId: z.string().optional().nullable(),
  partId: z.string().optional().nullable(),
  serviceId: z.string().optional().nullable(),
  quantity: z.coerce.number().min(0.01, "La quantité doit être supérieure à 0"),
  unitPrice: z.coerce.number().min(0, "Le prix unitaire ne peut pas être négatif"),
});

export const createEstimateSchema = z.object({
  repairTicketId: z.string().min(1, "Le ticket de réparation est requis"),
  customerNote: z.string().optional(),
  internalNote: z.string().optional(),
  discountAmount: z.coerce.number().min(0, "La remise ne peut pas être négative").default(0),
  lines: z.array(estimateLineSchema).min(1, "Au moins une ligne est requise"),
});

export type CreateEstimateInput = z.infer<typeof createEstimateSchema>;
export type EstimateLineInput = z.infer<typeof estimateLineSchema>;

export const approveEstimateSchema = z.object({
  estimateId: z.string(),
  decision: z.enum(["accepted", "rejected"]),
  confirmationMethod: z.enum(["phone", "in_person", "whatsapp_reply", "other"]),
  note: z.string().optional(),
});

export type ApproveEstimateInput = z.infer<typeof approveEstimateSchema>;
