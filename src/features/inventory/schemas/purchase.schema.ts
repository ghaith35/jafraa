import { z } from "zod";

export const purchaseInvoiceLineSchema = z.object({
  itemType: z.enum(["product", "part"]),
  productId: z.string().cuid().optional(),
  partId: z.string().cuid().optional(),
  quantity: z.number().int().positive("La quantité doit être supérieure à 0"),
  unitCost: z.number().min(0, "Le coût unitaire ne peut pas être négatif"),
  totalCost: z.number().min(0),
}).refine(
  (data) => {
    if (data.itemType === "product" && !data.productId) return false;
    if (data.itemType === "part" && !data.partId) return false;
    return true;
  },
  {
    message: "Le produit ou la pièce est requis selon le type sélectionné",
    path: ["productId"],
  }
);

export const createPurchaseInvoiceSchema = z.object({
  supplierId: z.string().cuid("Sélectionnez un fournisseur"),
  invoiceNumber: z.string().trim().min(1, "Numéro de facture requis").max(100),
  invoiceDate: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Format de date invalide"),
  amountPaid: z.number().min(0, "Le montant payé ne peut pas être négatif"),
  notes: z.string().trim().max(1000).optional().or(z.literal("")),
  lines: z.array(purchaseInvoiceLineSchema).min(1, "Au moins une ligne est requise"),
}).refine(
  (data) => {
    const totalAmount = data.lines.reduce((sum, line) => sum + line.totalCost, 0);
    return data.amountPaid <= totalAmount;
  },
  {
    message: "Le montant payé ne peut pas dépasser le total de la facture",
    path: ["amountPaid"],
  }
);

export type PurchaseInvoiceLineInput = z.infer<typeof purchaseInvoiceLineSchema>;
export type CreatePurchaseInvoiceInput = z.infer<typeof createPurchaseInvoiceSchema>;
