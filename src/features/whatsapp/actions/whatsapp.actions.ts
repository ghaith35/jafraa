"use server";

import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import {
  buildTicketReceivedPreview,
  buildTicketReadyPreview,
  buildEstimateReadyPreview,
  type WaPreview,
} from "@/lib/whatsapp/notifications";
import type { TemplateLocale } from "@/lib/whatsapp/templates";

// ─── Preview Actions ───────────────────────────────────────────────────────────

/**
 * Returns a wa.me preview for a repair ticket notification.
 * Does NOT send anything — the client opens the link manually.
 */
export async function getTicketWhatsAppPreview(
  ticketId: string,
  type: "received" | "ready" | "estimate",
  locale: TemplateLocale = "fr"
): Promise<WaPreview | null> {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  if (type === "received") return buildTicketReceivedPreview(ticketId, locale);
  if (type === "ready") return buildTicketReadyPreview(ticketId, locale);
  if (type === "estimate") return buildEstimateReadyPreview(ticketId, locale);
  return null;
}

// ─── Log Action ───────────────────────────────────────────────────────────────

/**
 * Log that a wa.me link was opened (user self-reports they sent the message).
 * Called client-side after the user clicks "Ouvrir WhatsApp".
 */
export async function logWhatsAppSent(input: {
  storeId: string;
  customerId?: string;
  entityType: string;
  entityId: string;
  phone: string;
  messagePreview: string;
}) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  await prisma.whatsAppNotificationLog.create({
    data: {
      storeId: input.storeId,
      customerId: input.customerId ?? null,
      entityType: input.entityType,
      entityId: input.entityId,
      phone: input.phone,
      messagePreview: input.messagePreview.slice(0, 200),
      sentByUserId: session.sub,
    },
  });
}

// ─── Notification Log ─────────────────────────────────────────────────────────

export async function listWhatsAppLogs(limit = 50) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");

  const storeId = session.storeIds[0];
  if (!storeId) return [];

  return prisma.whatsAppNotificationLog.findMany({
    where: { storeId },
    orderBy: { createdAt: "desc" },
    take: limit,
  });
}

// ─── Store WhatsApp Number ─────────────────────────────────────────────────────

export async function getStoreWhatsAppPhone(): Promise<string | null> {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const settings = await prisma.storeSettings.findUnique({
    where: { storeId },
    select: { whatsappPhone: true },
  });
  return settings?.whatsappPhone ?? null;
}

export async function saveStoreWhatsAppPhone(phone: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  if (!["admin", "manager"].includes(session.role)) throw new Error("Forbidden");

  const storeId = session.storeIds[0];
  if (!storeId) throw new Error("No store");

  await prisma.storeSettings.upsert({
    where: { storeId },
    update: { whatsappPhone: phone || null, updatedBy: session.sub },
    create: {
      storeId,
      whatsappPhone: phone || null,
      updatedBy: session.sub,
    },
  });

  return { success: true };
}
