"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { hasPermission } from "@/lib/auth/permissions";
import { Prisma } from "@prisma/client";
import {
  createPurchaseInvoiceSchema,
  type CreatePurchaseInvoiceInput,
} from "../schemas/purchase.schema";

type ActionError = { error: string };

function isP2002(e: unknown): boolean {
  return e instanceof Prisma.PrismaClientKnownRequestError && e.code === "P2002";
}

export async function createPurchaseInvoice(
  data: CreatePurchaseInvoiceInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };
  if (!hasPermission(session.role, "inventory:manage")) {
    return { error: "Permission insuffisante" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const parsed = createPurchaseInvoiceSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  // Calculate total amount
  const totalAmount = d.lines.reduce((sum, line) => sum + line.totalCost, 0);
  const remainingAmount = totalAmount - d.amountPaid;
  const status =
    remainingAmount === 0
      ? "paid"
      : d.amountPaid > 0
      ? "partial"
      : "unpaid";

  let newInvoiceId: string;

  try {
    const result = await prisma.$transaction(async (tx) => {
      // 1. Create Purchase Invoice
      const invoice = await tx.purchaseInvoice.create({
        data: {
          companyId: session.companyId,
          storeId,
          supplierId: d.supplierId,
          invoiceNumber: d.invoiceNumber,
          invoiceDate: new Date(d.invoiceDate),
          totalAmount,
          amountPaid: d.amountPaid,
          remainingAmount,
          status,
          notes: d.notes || undefined,
          createdByUserId: session.sub,
        },
      });

      // 2. Update Supplier Balance (if unpaid or partial)
      if (remainingAmount > 0) {
        await tx.supplier.update({
          where: { id: d.supplierId },
          data: {
            balance: {
              increment: remainingAmount,
            },
          },
        });
      }

      // 3. Process each line
      for (const line of d.lines) {
        // Create line
        await tx.purchaseInvoiceLine.create({
          data: {
            purchaseInvoiceId: invoice.id,
            itemType: line.itemType,
            productId: line.itemType === "product" ? line.productId : undefined,
            partId: line.itemType === "part" ? line.partId : undefined,
            quantity: line.quantity,
            unitCost: line.unitCost,
            totalCost: line.totalCost,
          },
        });

        // Create Stock Batch
        const batch = await tx.stockBatch.create({
          data: {
            companyId: session.companyId,
            storeId,
            itemType: line.itemType,
            productId: line.itemType === "product" ? line.productId : undefined,
            partId: line.itemType === "part" ? line.partId : undefined,
            sourceType: "purchase_invoice",
            sourceId: invoice.id,
            qtyInitial: line.quantity,
            qtyRemaining: line.quantity,
            unitCost: line.unitCost,
          },
        });

        // Create Stock Movement
        await tx.stockMovement.create({
          data: {
            companyId: session.companyId,
            storeId,
            itemType: line.itemType,
            productId: line.itemType === "product" ? line.productId : undefined,
            partId: line.itemType === "part" ? line.partId : undefined,
            movementType: "purchase",
            quantityDelta: line.quantity,
            unitCostSnapshot: line.unitCost,
            stockBatchId: batch.id,
            sourceType: "purchase_invoice",
            sourceId: invoice.id,
            note: `Achat - Facture ${d.invoiceNumber}`,
            createdByUserId: session.sub,
          },
        });

        // Update Item Stock Qty
        if (line.itemType === "product" && line.productId) {
          await tx.product.update({
            where: { id: line.productId },
            data: { stockQty: { increment: line.quantity } },
          });
        } else if (line.itemType === "part" && line.partId) {
          await tx.part.update({
            where: { id: line.partId },
            data: { stockQty: { increment: line.quantity } },
          });
        }
      }

      return invoice;
    });

    newInvoiceId = result.id;
  } catch (e) {
    if (isP2002(e)) {
      return { error: "Une facture avec ce numéro existe déjà pour cette boutique." };
    }
    console.error("createPurchaseInvoice:", e);
    return { error: "Une erreur est survenue lors de l'enregistrement." };
  }

  revalidatePath("/dashboard/inventory/purchases");
  revalidatePath("/dashboard/inventory/stock-movements");
  revalidatePath("/dashboard/inventory");
  return { id: newInvoiceId };
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listPurchaseInvoices(opts?: { storeId?: string }) {
  const session = await getSession();
  if (!session) return [];
  if (!hasPermission(session.role, "inventory:manage")) return [];

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return [];

  try {
    return await prisma.purchaseInvoice.findMany({
      where: { storeId },
      include: {
        supplier: { select: { name: true } },
        createdBy: { select: { name: true } },
      },
      orderBy: { createdAt: "desc" },
    });
  } catch (error) {
    console.warn("Purchase invoices skipped because the current database is missing purchase invoice tables/columns:", error);
    return [];
  }
}
