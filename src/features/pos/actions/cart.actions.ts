"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import type { CartLine } from "./pos-sale.actions";

type ActionError = { error: string };

export interface HeldCartSummary {
  id: string;
  note: string | null;
  heldAt: Date;
  autoReleaseAt: Date | null;
  lineCount: number;
  itemCount: number;
  total: number;
  customerName: string | null;
}

// ─── Get or create active cart ───────────────────────────────────────────────

export async function getOrCreateActiveCart() {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  // Look for existing active cart for this user
  let cart = await prisma.cart.findFirst({
    where: {
      storeId,
      companyId: session.companyId,
      createdByUserId: session.sub,
      status: "active",
    },
    include: {
      lines: true,
      customer: { select: { id: true, name: true } },
    },
  });

  if (!cart) {
    cart = await prisma.cart.create({
      data: {
        companyId: session.companyId,
        storeId,
        createdByUserId: session.sub,
        status: "active",
      },
      include: {
        lines: true,
        customer: { select: { id: true, name: true } },
      },
    });
  }

  return {
    id: cart.id,
    customerId: cart.customerId,
    customerName: cart.customer?.name ?? null,
    discountAmount: Number(cart.cartDiscountAmount),
    lines: cart.lines.map((l) => ({
      lineType: l.lineType as CartLine["lineType"],
      itemId: l.itemId,
      name: l.label,
      sku: l.sku ?? "",
      quantity: l.quantity,
      unitPrice: Number(l.unitPrice),
    })),
  };
}

// ─── Add item to cart ────────────────────────────────────────────────────────

export async function addToCart(
  cartId: string,
  item: { id: string; type: string; name: string; sku: string; sellingPrice: number }
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  // Verify cart belongs to user + store
  const cart = await prisma.cart.findFirst({
    where: { id: cartId, storeId, companyId: session.companyId, createdByUserId: session.sub },
  });
  if (!cart) return { error: "Panier introuvable" };

  // Check if item already in cart
  const existing = await prisma.cartItem.findFirst({
    where: { cartId, itemId: item.id },
  });

  try {
    if (existing) {
      await prisma.cartItem.update({
        where: { id: existing.id },
        data: { quantity: existing.quantity + 1, lineTotal: (existing.quantity + 1) * Number(existing.unitPrice) },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId,
          lineType: item.type,
          itemId: item.id,
          label: item.name,
          sku: item.sku,
          quantity: 1,
          unitPrice: item.sellingPrice,
          lineTotal: item.sellingPrice,
        },
      });
    }
  } catch (e) {
    console.error("addToCart:", e);
    return { error: "Erreur lors de l'ajout au panier" };
  }
}

// ─── Update quantity ─────────────────────────────────────────────────────────

export async function updateCartItemQuantity(
  cartId: string,
  itemId: string,
  delta: number
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const cart = await prisma.cart.findFirst({
    where: { id: cartId, storeId, companyId: session.companyId, createdByUserId: session.sub },
  });
  if (!cart) return { error: "Panier introuvable" };

  const item = await prisma.cartItem.findFirst({
    where: { cartId, itemId },
  });
  if (!item) return { error: "Élément introuvable" };

  const newQty = item.quantity + delta;
  if (newQty <= 0) {
    await prisma.cartItem.delete({ where: { id: item.id } });
    return;
  }

  try {
    await prisma.cartItem.update({
      where: { id: item.id },
      data: { quantity: newQty, lineTotal: newQty * Number(item.unitPrice) },
    });
  } catch (e) {
    console.error("updateCartItemQuantity:", e);
    return { error: "Erreur lors de la mise à jour" };
  }
}

// ─── Remove item ─────────────────────────────────────────────────────────────

export async function removeFromCart(
  cartId: string,
  itemId: string
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const item = await prisma.cartItem.findFirst({
    where: { cartId, itemId, cart: { storeId, companyId: session.companyId, createdByUserId: session.sub } },
  });
  if (!item) return { error: "Élément introuvable" };

  try {
    await prisma.cartItem.delete({ where: { id: item.id } });
  } catch (e) {
    console.error("removeFromCart:", e);
    return { error: "Erreur lors de la suppression" };
  }
}

// ─── Clear cart ──────────────────────────────────────────────────────────────

export async function clearCart(cartId: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const cart = await prisma.cart.findFirst({
    where: { id: cartId, storeId, companyId: session.companyId, createdByUserId: session.sub },
  });
  if (!cart) return { error: "Panier introuvable" };

  try {
    await prisma.cartItem.deleteMany({ where: { cartId } });
  } catch (e) {
    console.error("clearCart:", e);
    return { error: "Erreur lors du vidage du panier" };
  }
}

// ─── Update customer on cart ─────────────────────────────────────────────────

export async function updateCartCustomer(
  cartId: string,
  customerId: string | null
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    await prisma.cart.update({
      where: { id: cartId },
      data: { customerId },
    });
  } catch (e) {
    console.error("updateCartCustomer:", e);
    return { error: "Erreur lors de la mise à jour du client" };
  }
}

// ─── Update discount ─────────────────────────────────────────────────────────

export async function updateCartDiscount(
  cartId: string,
  discountAmount: number
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  try {
    await prisma.cart.update({
      where: { id: cartId },
      data: { cartDiscountAmount: discountAmount },
    });
  } catch (e) {
    console.error("updateCartDiscount:", e);
    return { error: "Erreur lors de la mise à jour de la remise" };
  }
}

// ─── Hold cart ───────────────────────────────────────────────────────────────

export async function holdCart(
  cartId: string,
  note?: string,
  autoReleaseMinutes?: number
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const cart = await prisma.cart.findFirst({
    where: { id: cartId, storeId, companyId: session.companyId, createdByUserId: session.sub },
  });
  if (!cart) return { error: "Panier introuvable" };

  try {
    await prisma.cart.update({
      where: { id: cartId },
      data: {
        status: "held",
        note: note || null,
        heldAt: new Date(),
        autoReleaseAt: autoReleaseMinutes
          ? new Date(Date.now() + autoReleaseMinutes * 60 * 1000)
          : null,
      },
    });
    revalidatePath("/dashboard/pos");
  } catch (e) {
    console.error("holdCart:", e);
    return { error: "Erreur lors de la mise en attente" };
  }
}

// ─── Resume cart ─────────────────────────────────────────────────────────────

export async function resumeCart(cartId: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const cart = await prisma.cart.findFirst({
    where: { id: cartId, storeId, companyId: session.companyId, status: "held" },
    include: {
      lines: true,
      customer: { select: { id: true, name: true } },
    },
  });

  if (!cart) return null;

  // Set back to active
  await prisma.cart.update({
    where: { id: cartId },
    data: { status: "active", heldAt: null, autoReleaseAt: null },
  });

  return {
    id: cart.id,
    customerId: cart.customerId,
    customerName: cart.customer?.name ?? null,
    discountAmount: Number(cart.cartDiscountAmount),
    lines: cart.lines.map((l) => ({
      lineType: l.lineType as CartLine["lineType"],
      itemId: l.itemId,
      name: l.label,
      sku: l.sku ?? "",
      quantity: l.quantity,
      unitPrice: Number(l.unitPrice),
    })),
  };
}

// ─── List held carts ─────────────────────────────────────────────────────────

export async function listHeldCarts(): Promise<HeldCartSummary[]> {
  const session = await getSession();
  if (!session) return [];

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  const carts = await prisma.cart.findMany({
    where: {
      storeId,
      companyId: session.companyId,
      status: "held",
    },
    include: {
      _count: { select: { lines: true } },
      customer: { select: { name: true } },
      lines: { select: { quantity: true, unitPrice: true } },
    },
    orderBy: { heldAt: "desc" },
    take: 50,
  });

  return carts.map((c) => {
    const total = c.lines.reduce(
      (sum, l) => sum + Number(l.unitPrice) * l.quantity,
      0
    );
    const itemCount = c.lines.reduce((sum, l) => sum + l.quantity, 0);
    return {
      id: c.id,
      note: c.note,
      heldAt: c.heldAt!,
      autoReleaseAt: c.autoReleaseAt,
      lineCount: c._count.lines,
      itemCount,
      total,
      customerName: c.customer?.name ?? null,
    };
  });
}

// ─── Release (cancel) held cart ──────────────────────────────────────────────

export async function releaseCart(cartId: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    await prisma.cart.update({
      where: { id: cartId },
      data: { status: "cancelled" },
    });
    revalidatePath("/dashboard/pos");
  } catch (e) {
    console.error("releaseCart:", e);
    return { error: "Erreur lors de la libération du panier" };
  }
}

// ─── Complete cart (after checkout) ──────────────────────────────────────────

export async function completeCart(cartId: string): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  try {
    await prisma.cart.update({
      where: { id: cartId },
      data: { status: "completed" },
    });
  } catch (e) {
    console.error("completeCart:", e);
    return { error: "Erreur lors de la finalisation du panier" };
  }
}
