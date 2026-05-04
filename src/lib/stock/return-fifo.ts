import { Prisma } from "@prisma/client";

/**
 * Return stock helper.
 * Adds stock back to the inventory by creating a "return" batch.
 */
interface ReturnFifoParams {
  storeId: string;
  companyId: string;
  itemType: "product" | "part";
  productId?: string;
  partId?: string;
  quantity: number;
  unitCost?: number; // Optional: can be taken from original sale if tracked
  sourceType: string;
  sourceId: string;
  userId: string;
  note?: string;
}

export async function returnStockFifo(
  tx: Prisma.TransactionClient,
  params: ReturnFifoParams
) {
  const {
    storeId,
    companyId,
    itemType,
    productId,
    partId,
    quantity,
    unitCost = 0,
    sourceType,
    sourceId,
    userId,
    note,
  } = params;

  if (quantity <= 0) return;

  // 1. Create a new StockBatch for the return
  // This makes the returned items available for future FIFO consumption
  await tx.stockBatch.create({
    data: {
      companyId,
      storeId,
      itemType,
      productId: itemType === "product" ? productId : null,
      partId: itemType === "part" ? partId : null,
      sourceType: "return",
      sourceId,
      qtyInitial: quantity,
      qtyRemaining: quantity,
      unitCost: unitCost,
    },
  });

  // 2. Create StockMovement
  await tx.stockMovement.create({
    data: {
      companyId,
      storeId,
      itemType,
      productId: itemType === "product" ? productId : null,
      partId: itemType === "part" ? partId : null,
      movementType: "return",
      quantityDelta: quantity,
      unitCostSnapshot: unitCost,
      sourceType,
      sourceId,
      note: note || `Retour stock — ${sourceType} ${sourceId}`,
      createdByUserId: userId,
    },
  });

  // 3. Increment denormalized stockQty
  if (itemType === "product" && productId) {
    await tx.product.update({
      where: { id: productId },
      data: { stockQty: { increment: quantity } },
    });
  } else if (itemType === "part" && partId) {
    await tx.part.update({
      where: { id: partId },
      data: { stockQty: { increment: quantity } },
    });
  }
}
