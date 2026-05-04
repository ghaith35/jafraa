import { Prisma } from "@prisma/client";

/**
 * FIFO stock consumption helper.
 *
 * Consumes stock from the oldest available batches first.
 * Must be called inside a Prisma $transaction.
 *
 * Steps:
 * 1. Fetch all batches with qtyRemaining > 0, ordered oldest first
 * 2. Pre-check: total available >= requested quantity
 * 3. Consume from each batch, creating StockMovement per batch
 * 4. Decrement the item's denormalized stockQty
 * 5. Return total weighted cost
 *
 * This helper is reusable for POS sales and future repair part usage.
 */

interface ConsumeFifoParams {
  storeId: string;
  companyId: string;
  itemType: "product" | "part";
  productId?: string;
  partId?: string;
  quantity: number;
  sourceType: string;  // e.g. "pos_sale"
  sourceId: string;    // e.g. the PosSale id
  userId: string;
}

interface ConsumeFifoResult {
  costTotal: number;
}

export async function consumeStockFifo(
  tx: Prisma.TransactionClient,
  params: ConsumeFifoParams
): Promise<ConsumeFifoResult> {
  const {
    storeId,
    companyId,
    itemType,
    productId,
    partId,
    quantity,
    sourceType,
    sourceId,
    userId,
  } = params;

  if (quantity <= 0) {
    throw new Error("La quantité à consommer doit être supérieure à 0");
  }

  // Determine which item to look up
  const itemFilter = itemType === "product"
    ? { productId: productId!, itemType: "product" as const }
    : { partId: partId!, itemType: "part" as const };

  // 1. Fetch available batches, oldest first (FIFO)
  const batches = await tx.stockBatch.findMany({
    where: {
      storeId,
      ...itemFilter,
      qtyRemaining: { gt: 0 },
    },
    orderBy: { createdAt: "asc" },
  });

  // 2. Pre-check: enough stock?
  const totalAvailable = batches.reduce((sum, b) => sum + b.qtyRemaining, 0);
  if (totalAvailable < quantity) {
    throw new Error(
      `Stock insuffisant. Disponible: ${totalAvailable}, demandé: ${quantity}`
    );
  }

  // 3. Consume from batches
  let remaining = quantity;
  let costTotal = 0;

  for (const batch of batches) {
    if (remaining <= 0) break;

    const consume = Math.min(batch.qtyRemaining, remaining);

    // Decrement batch
    await tx.stockBatch.update({
      where: { id: batch.id },
      data: { qtyRemaining: { decrement: consume } },
    });

    // Create stock movement for this batch consumption
    await tx.stockMovement.create({
      data: {
        companyId,
        storeId,
        itemType,
        productId: itemType === "product" ? productId : null,
        partId: itemType === "part" ? partId : null,
        movementType: "sale",
        quantityDelta: -consume,
        unitCostSnapshot: batch.unitCost,
        stockBatchId: batch.id,
        sourceType,
        sourceId,
        note: `Vente POS — lot ${batch.id.slice(-6)}`,
        createdByUserId: userId,
      },
    });

    costTotal += consume * Number(batch.unitCost);
    remaining -= consume;
  }

  // 4. Decrement denormalized stockQty
  if (itemType === "product" && productId) {
    await tx.product.update({
      where: { id: productId },
      data: { stockQty: { decrement: quantity } },
    });
  } else if (itemType === "part" && partId) {
    await tx.part.update({
      where: { id: partId },
      data: { stockQty: { decrement: quantity } },
    });
  }

  return { costTotal };
}
