import { z } from "zod";

// Device types — still used for backward compat display
export const DEVICE_TYPES = [
  { value: "phone", label: "Téléphone" },
  { value: "tablet", label: "Tablette / iPad" },
  { value: "laptop", label: "Ordinateur portable" },
  { value: "desktop", label: "Ordinateur fixe" },
  { value: "printer", label: "Imprimante" },
  { value: "console", label: "Console de jeux" },
  { value: "other", label: "Autre" },
] as const;

export type DeviceTypeValue = (typeof DEVICE_TYPES)[number]["value"];

const optText = z.string().trim().max(120).optional();
const optId = z.string().trim().optional();

export const createAssetSchema = z
  .object({
    // Catalog-linked fields (Block 6)
    deviceCategoryId: optId,
    deviceBrandId: optId,
    deviceModelFamilyId: optId,
    // Legacy free-text fields
    deviceTypeName: z
      .enum(["phone", "tablet", "laptop", "desktop", "printer", "console", "other"])
      .optional(),
    customBrand: optText,
    customModel: optText,
    color: optText,
    storage: optText,
    imeiSerial: optText,
    notes: z.string().trim().max(500).optional(),
  })
  .refine(
    (d) => d.deviceCategoryId || d.deviceTypeName || d.customBrand || d.customModel,
    {
      message: "Indiquez au moins la catégorie, le type, la marque ou le modèle",
      path: ["deviceTypeName"],
    }
  );

export type CreateAssetInput = z.infer<typeof createAssetSchema>;
export const updateAssetSchema = createAssetSchema;
export type UpdateAssetInput = CreateAssetInput;
