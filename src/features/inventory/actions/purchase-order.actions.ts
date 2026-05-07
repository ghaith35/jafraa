"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";

export type PurchaseOrderLineInput = {
  itemType: "product" | "part" | "custom";
  productId?: string | null;
  partId?: string | null;
  description: string;
  quantity: number;
  unitCost?: number;
  suggestedFromStock?: boolean;
};

export type CreatePurchaseOrderInput = {
  supplierId?: string | null;
  expectedAt?: string | null;
  notes?: string | null;
  lines: PurchaseOrderLineInput[];
};

type ActionResult = { error: string } | { id: string; orderNumber: string };

async function ensureInventoryManager() {
  const session = await getSession();
  if (!session) return null;
  if (!["Admin", "Manager", "Cashier"].includes(session.role)) return null;
  const storeId = session.storeIds[0];
  if (!storeId) return null;
  return { ...session, storeId };
}

async function nextPurchaseOrderNumber(storeId: string) {
  const store = await prisma.store.findUnique({ where: { id: storeId }, select: { prefix: true } });
  const prefix = store?.prefix ?? "PO";
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}`;
  const count = await safePurchaseOrderQuery(() => prisma.purchaseOrder.count({ where: { storeId } }), 0);
  return `${prefix}-PO-${stamp}-${String(count + 1).padStart(4, "0")}`;
}

export async function listPurchaseOrders() {
  const session = await ensureInventoryManager();
  if (!session) return [];

  return safePurchaseOrderQuery(
    () =>
      prisma.purchaseOrder.findMany({
        where: { storeId: session.storeId },
        orderBy: { createdAt: "desc" },
        take: 100,
        include: {
          supplier: { select: { name: true, phone: true } },
          createdBy: { select: { name: true } },
          lines: true,
        },
      }),
    []
  );
}

export async function getPurchaseOrder(orderId: string) {
  const session = await ensureInventoryManager();
  if (!session) return null;

  return safePurchaseOrderQuery(
    () =>
      prisma.purchaseOrder.findFirst({
        where: { id: orderId, storeId: session.storeId },
        include: {
          supplier: true,
          store: true,
          createdBy: { select: { name: true } },
          lines: { include: { product: true, part: true }, orderBy: { createdAt: "asc" } },
        },
      }),
    null
  );
}

export async function createPurchaseOrder(input: CreatePurchaseOrderInput): Promise<ActionResult> {
  const session = await ensureInventoryManager();
  if (!session) return { error: "Non autorisé" };

  const cleaned = input.lines
    .map((line) => ({
      ...line,
      description: line.description.trim(),
      quantity: Math.max(1, Math.trunc(Number(line.quantity || 0))),
      unitCost: Math.max(0, Number(line.unitCost || 0)),
    }))
    .filter((line) => line.description && line.quantity > 0);

  if (cleaned.length === 0) return { error: "Ajoutez au moins une ligne à commander." };

  const subtotal = cleaned.reduce((sum, line) => sum + line.quantity * Number(line.unitCost || 0), 0);
  const orderNumber = await nextPurchaseOrderNumber(session.storeId);

  const po = await safePurchaseOrderQuery(() => prisma.purchaseOrder.create({
    data: {
      companyId: session.companyId,
      storeId: session.storeId,
      supplierId: input.supplierId || null,
      orderNumber,
      expectedAt: input.expectedAt ? new Date(input.expectedAt) : null,
      notes: input.notes?.trim() || null,
      subtotalAmount: subtotal,
      createdByUserId: session.sub,
      lines: {
        create: cleaned.map((line) => ({
          itemType: line.itemType,
          productId: line.itemType === "product" ? line.productId || null : null,
          partId: line.itemType === "part" ? line.partId || null : null,
          description: line.description,
          quantity: line.quantity,
          unitCost: line.unitCost,
          totalCost: line.quantity * Number(line.unitCost || 0),
          suggestedFromStock: !!line.suggestedFromStock,
        })),
      },
    },
  }), null);

  if (!po) {
    return { error: "La table des commandes fournisseur n'existe pas encore dans votre base de données. Lancez vos migrations Prisma avant d'utiliser cette fonction." };
  }

  revalidatePath("/dashboard/inventory/purchase-orders");
  revalidatePath("/dashboard/inventory/reorder");
  return { id: po.id, orderNumber };
}

export async function createPurchaseOrderFromLowStock(input?: { supplierId?: string | null }) {
  const session = await ensureInventoryManager();
  if (!session) return { error: "Non autorisé" };

  const [products, parts] = await Promise.all([
    prisma.product.findMany({ where: { storeId: session.storeId, isArchived: false }, orderBy: { name: "asc" } }),
    prisma.part.findMany({ where: { storeId: session.storeId, isArchived: false }, orderBy: { name: "asc" } }),
  ]);

  const lines: PurchaseOrderLineInput[] = [
    ...products
      .filter((item) => item.lowStockThreshold !== null && item.stockQty <= Number(item.lowStockThreshold))
      .map((item) => ({
        itemType: "product" as const,
        productId: item.id,
        description: `${item.name} (${item.sku})`,
        quantity: Math.max(1, Number(item.lowStockThreshold || 1) * 2 - item.stockQty),
        unitCost: 0,
        suggestedFromStock: true,
      })),
    ...parts
      .filter((item) => item.lowStockThreshold !== null && item.stockQty <= Number(item.lowStockThreshold))
      .map((item) => ({
        itemType: "part" as const,
        partId: item.id,
        description: `${item.name} (${item.sku})`,
        quantity: Math.max(1, Number(item.lowStockThreshold || 1) * 2 - item.stockQty),
        unitCost: 0,
        suggestedFromStock: true,
      })),
  ];

  if (lines.length === 0) return { error: "Aucun article en stock critique." };
  return createPurchaseOrder({ supplierId: input?.supplierId ?? null, lines, notes: "Commande générée automatiquement depuis le réapprovisionnement." });
}

export async function updatePurchaseOrderStatus(orderId: string, status: "draft" | "sent" | "confirmed" | "received" | "cancelled") {
  const session = await ensureInventoryManager();
  if (!session) return { error: "Non autorisé" };

  const order = await safePurchaseOrderQuery(() => prisma.purchaseOrder.findFirst({ where: { id: orderId, storeId: session.storeId }, select: { id: true } }), null);
  if (!order) return { error: "Commande introuvable ou table des commandes fournisseur manquante" };

  const updated = await safePurchaseOrderQuery(
    () =>
      prisma.purchaseOrder.update({
        where: { id: orderId },
        data: {
          status,
          sentAt: status === "sent" ? new Date() : undefined,
          receivedAt: status === "received" ? new Date() : undefined,
        },
      }),
    null
  );

  if (!updated) return { error: "Impossible de mettre à jour cette commande fournisseur." };

  revalidatePath("/dashboard/inventory/purchase-orders");
  revalidatePath(`/dashboard/inventory/purchase-orders/${orderId}`);
  return { success: true };
}


async function safePurchaseOrderQuery<T>(query: () => Promise<T>, fallback: T): Promise<T> {
  try {
    return await query();
  } catch (error) {
    console.warn("Purchase order feature skipped because the current database is missing purchase order tables/columns:", error);
    return fallback;
  }
}
