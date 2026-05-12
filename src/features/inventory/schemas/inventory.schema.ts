import { z } from "zod";

// ─── Product ──────────────────────────────────────────────────────────────────

export const groupPriceEntry = z.object({
  groupId: z.string(),
  price: z.number().min(0),
});

export const createProductSchema = z.object({
  categoryId: z.string().trim().optional(),
  name: z.string().trim().min(1, "Le nom est requis").max(200),
  sku: z.string().trim().max(60).optional(),
  barcode: z.string().trim().max(60).optional(),
  brand: z.string().trim().max(120).optional(),
  modelReference: z.string().trim().max(120).optional(),
  sellingPrice: z.number().min(0, "Le prix doit être ≥ 0"),
  stockQty: z.number().int().min(0, "La quantité doit être ≥ 0").optional(),
  lowStockThreshold: z.number().int().min(0).optional(),
  notes: z.string().trim().max(500).optional(),
  imageUrl: z.string().url("URL invalide").optional().or(z.literal("")),
  groupPrices: z.array(groupPriceEntry).optional(),
});

export const updateProductSchema = createProductSchema;

export type CreateProductInput = z.infer<typeof createProductSchema>;
export type UpdateProductInput = z.infer<typeof updateProductSchema>;

// ─── Part ─────────────────────────────────────────────────────────────────────

export const createPartSchema = z.object({
  categoryId: z.string().trim().optional(),
  compatibleCategoryId: z.string().trim().optional(),
  compatibleBrandId: z.string().trim().optional(),
  compatibleFamilyId: z.string().trim().optional(),
  name: z.string().trim().min(1, "Le nom est requis").max(200),
  sku: z.string().trim().max(60).optional(),
  barcode: z.string().trim().max(60).optional(),
  brand: z.string().trim().max(120).optional(),
  modelReference: z.string().trim().max(120).optional(),
  sellingPrice: z.number().min(0, "Le prix doit être ≥ 0"),
  stockQty: z.number().int().min(0, "La quantité doit être ≥ 0").optional(),
  lowStockThreshold: z.number().int().min(0).optional(),
  notes: z.string().trim().max(500).optional(),
  imageUrl: z.string().url("URL invalide").optional().or(z.literal("")),
});

export const updatePartSchema = createPartSchema;

export type CreatePartInput = z.infer<typeof createPartSchema>;
export type UpdatePartInput = z.infer<typeof updatePartSchema>;

// ─── Service ──────────────────────────────────────────────────────────────────

export const createServiceSchema = z.object({
  name: z.string().trim().min(1, "Le nom est requis").max(200),
  nameEn: z.string().trim().max(200).optional(),
  nameAr: z.string().trim().max(200).optional(),
  sku: z.string().trim().max(60).optional(),
  category: z.string().trim().max(220).optional(),
  serviceCategoryId: z.string().trim().optional(),
  deviceCategoryId: z.string().trim().optional(),
  isPackage: z.boolean().optional(),
  packageServiceIds: z.array(z.string().trim()).optional(),
  packageDescription: z.string().trim().max(500).optional(),
  basePrice: z.number().min(0).optional(),
  costPrice: z.number().min(0).optional(),
  sellingPrice: z.number().min(0, "Le prix doit être ≥ 0"),
  estimatedDurationMinutes: z.number().int().min(0).optional(),
  notes: z.string().trim().max(500).optional(),
  groupPrices: z.array(groupPriceEntry).optional(),
});

export const updateServiceSchema = createServiceSchema;

export type CreateServiceInput = z.infer<typeof createServiceSchema>;
export type UpdateServiceInput = z.infer<typeof updateServiceSchema>;
