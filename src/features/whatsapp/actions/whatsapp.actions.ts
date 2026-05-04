"use server";

import { getSession } from "@/lib/auth/session";
import { whatsappService } from "@/lib/whatsapp/whatsapp.service";
import { revalidatePath } from "next/cache";

/**
 * Get WhatsApp status and QR Code
 */
export async function getWhatsAppConnectionInfo() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const storeId = session.storeIds[0];

  return {
    status: whatsappService.getStatus(storeId),
    qrCode: whatsappService.getQRCode(storeId),
  };
}

/**
 * Start WhatsApp connection (initializes client)
 */
export async function connectWhatsApp() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const storeId = session.storeIds[0];

  await whatsappService.initClient(storeId);
  revalidatePath("/dashboard/settings/whatsapp");
  return { success: true };
}

/**
 * Disconnect WhatsApp
 */
export async function disconnectWhatsApp() {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const storeId = session.storeIds[0];

  await whatsappService.disconnect(storeId);
  revalidatePath("/dashboard/settings/whatsapp");
  return { success: true };
}

/**
 * Test WhatsApp message
 */
export async function testWhatsAppMessage(phone: string) {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  const storeId = session.storeIds[0];

  try {
    await whatsappService.sendMessage(
      storeId, 
      phone, 
      "Message de test de votre boutique REPAIRE ! 🚀"
    );
    return { success: true };
  } catch (err: unknown) {
    const error = err as Error;
    return { error: error.message || "Failed to send message" };
  }
}

/**
 * Notify customer about ticket manually
 */
export async function notifyCustomerWhatsApp(ticketId: string, type: "received" | "ready") {
  const session = await getSession();
  if (!session) throw new Error("Unauthorized");
  
  const { WhatsAppNotifications } = await import("@/lib/whatsapp/notifications");
  
  if (type === "received") {
    await WhatsAppNotifications.sendTicketReceived(ticketId);
  } else {
    await WhatsAppNotifications.sendTicketReady(ticketId);
  }
  
  return { success: true };
}
