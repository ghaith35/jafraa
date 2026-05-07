import { z } from "zod";

export const repairTicketProblemSchema = z.object({
  problemText: z.string().trim().min(1, "Veuillez décrire le problème"),
});

const repairInitialStatusSchema = z.enum([
  "received",
  "in_diagnosis",
  "waiting_customer_approval",
  "in_repair",
  "ready_for_pickup",
]);

const selectedRepairPartSchema = z.object({
  partId: z.string().cuid("Pièce invalide"),
  quantity: z.number().int().min(1, "La quantité doit être supérieure à 0"),
  note: z.string().trim().max(500).optional().or(z.literal("")),
});

export const createRepairTicketSchema = z.object({
  customerId: z.string().cuid("Sélectionnez un client").optional().or(z.literal("")),
  walkInCustomer: z.boolean().optional().default(false),
  customerDeviceId: z.string().cuid().optional().or(z.literal("")),
  
  // Custom device fields (if customerDeviceId is empty)
  deviceCategoryId: z.string().cuid().optional().or(z.literal("")),
  deviceBrandId: z.string().cuid().optional().or(z.literal("")),
  deviceFamilyId: z.string().cuid().optional().or(z.literal("")),
  customDeviceBrand: z.string().trim().max(100).optional().or(z.literal("")),
  customDeviceModel: z.string().trim().max(100).optional().or(z.literal("")),
  deviceColor: z.string().trim().max(50).optional().or(z.literal("")),
  deviceStorageRam: z.string().trim().max(50).optional().or(z.literal("")),
  imeiSerial: z.string().trim().max(100).optional().or(z.literal("")),

  // Catalog suggestion metadata for missing models. These fields do not block
  // ticket creation; they help Settings approve custom devices later.
  printerType: z.string().trim().max(50).optional().or(z.literal("")),
  laptopSeriesName: z.string().trim().max(100).optional().or(z.literal("")),
  laptopModelLine: z.string().trim().max(120).optional().or(z.literal("")),
  laptopGeneration: z.string().trim().max(80).optional().or(z.literal("")),
  laptopProcessor: z.string().trim().max(120).optional().or(z.literal("")),
  laptopRam: z.string().trim().max(80).optional().or(z.literal("")),
  laptopDisk: z.string().trim().max(120).optional().or(z.literal("")),
  laptopGpu: z.string().trim().max(120).optional().or(z.literal("")),

  priority: z.enum(["normal", "rush"]).default("normal"),
  initialStatus: repairInitialStatusSchema.optional(),
  assignedTechnicianId: z.string().cuid().optional().or(z.literal("")),
  
  diagnosisNote: z.string().trim().max(2000).optional().or(z.literal("")),
  internalNotes: z.string().trim().max(2000).optional().or(z.literal("")),
  customerNotes: z.string().trim().max(2000).optional().or(z.literal("")),
  
  estimatedPrice: z.number().min(0, "Le prix ne peut pas être négatif").optional(),
  warrantyDays: z.number().int().min(0).optional(),
  dueAt: z.string().optional().or(z.literal("")),

  selectedParts: z.array(selectedRepairPartSchema).optional(),

  problems: z.array(repairTicketProblemSchema).min(1, "Veuillez ajouter au moins un problème"),
}).refine(
  (data) => Boolean(data.walkInCustomer || data.customerId),
  {
    message: "Sélectionnez un client ou utilisez le client anonyme",
    path: ["customerId"],
  }
).refine(
  (data) => {
    // Must have either an existing device OR at least custom model/brand or category
    if (data.customerDeviceId) return true;
    if (data.deviceCategoryId || data.customDeviceBrand || data.customDeviceModel) return true;
    return false;
  },
  {
    message: "Veuillez sélectionner un appareil existant ou fournir les détails du nouvel appareil",
    path: ["customDeviceModel"], // focus error here
  }
);

export const updateRepairStatusSchema = z.object({
  newStatus: z.enum([
    "received",
    "in_diagnosis",
    "waiting_customer_approval",
    "in_repair",
    "ready_for_pickup",
    "completed",
    "not_repaired",
  ]),
  note: z.string().trim().max(1000).optional().or(z.literal("")),
});

export type CreateRepairTicketInput = z.infer<typeof createRepairTicketSchema>;
export type UpdateRepairStatusInput = z.infer<typeof updateRepairStatusSchema>;
