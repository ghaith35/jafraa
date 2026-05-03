import { z } from "zod";

// Permissive Algerian-friendly phone: 7-20 chars, digits/spaces/dashes/parens/+
const phoneField = z
  .string()
  .trim()
  .refine(
    (v) => !v || /^\+?[\d\s\-\(\)\.]{7,20}$/.test(v),
    { message: "Format de numéro invalide" }
  )
  .optional();

export const createCustomerSchema = z
  .object({
    customerType: z.enum(["named", "walkin"]),
    name: z.string().trim().min(1, "Le nom est requis").max(120),
    phone: phoneField,
    languagePreference: z.enum(["fr", "ar", "en"]).default("fr"),
    notes: z.string().trim().max(1000).optional().or(z.literal("")),
    customerGroupId: z.string().cuid("ID invalide").optional().or(z.literal("")),
  })
  .refine(
    (d) => d.customerType === "walkin" || !!(d.phone?.trim()),
    {
      message: "Un numéro de téléphone est requis pour un client nommé",
      path: ["phone"],
    }
  );

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;

export const updateCustomerSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(120),
  languagePreference: z.enum(["fr", "ar", "en"]),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  customerGroupId: z.string().cuid("ID invalide").optional().or(z.literal("")),
});

export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;

export const addPhoneSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .min(7, "Numéro trop court")
    .max(20, "Numéro trop long")
    .refine(
      (v) => /^\+?[\d\s\-\(\)\.]{7,20}$/.test(v),
      { message: "Format de numéro invalide" }
    ),
  isPrimary: z.boolean().default(false),
});

export type AddPhoneInput = z.infer<typeof addPhoneSchema>;
