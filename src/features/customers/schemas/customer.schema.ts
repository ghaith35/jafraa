import { z } from "zod";

const phoneField = z
  .string()
  .trim()
  .min(10, "Le numéro doit faire 10 chiffres")
  .max(10, "Le numéro doit faire 10 chiffres")
  .refine(
    (v) => /^[0-9]{10}$/.test(v),
    { message: "Format de numéro invalide (10 chiffres)" }
  )
  .optional();

export const createCustomerSchema = z
  .object({
    name: z.string().trim().min(1, "Le nom est requis").max(120),
    phone: phoneField,
    languagePreference: z.enum(["fr", "ar", "en"]).default("fr"),
    address: z.string().trim().max(200).optional().or(z.literal("")),
    notes: z.string().trim().max(1000).optional().or(z.literal("")),
    customerGroupId: z.string().optional().or(z.literal("")),
  })
  .refine(
    (d) => !!d.phone?.trim(),
    {
      message: "Un numéro de téléphone est requis",
      path: ["phone"],
    }
  );

export type CreateCustomerInput = z.infer<typeof createCustomerSchema>;

export const updateCustomerSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(120),
  languagePreference: z.enum(["fr", "ar", "en"]),
  address: z.string().trim().max(200).optional().or(z.literal("")),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  customerGroupId: z.string().optional().or(z.literal("")),
});

export type UpdateCustomerInput = z.infer<typeof updateCustomerSchema>;

export const addPhoneSchema = z.object({
  phoneNumber: z
    .string()
    .trim()
    .min(10, "Le numéro doit faire 10 chiffres")
    .max(10, "Le numéro doit faire 10 chiffres")
    .refine(
      (v) => /^[0-9]{10}$/.test(v),
      { message: "Format de numéro invalide" }
    ),
  isPrimary: z.boolean().default(false),
});

export type AddPhoneInput = z.infer<typeof addPhoneSchema>;
