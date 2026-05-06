import { prisma } from "@/lib/db";
import { generateWaLink } from "./whatsapp.service";
import { WhatsAppTemplates, type TemplateLocale } from "./templates";
import type { EstimateStatus } from "@prisma/client";

export type WaPreview = {
  phone: string;
  message: string;
  waLink: string;
  customerName: string;
  locale: TemplateLocale;
};

/**
 * Build a wa.me preview for "ticket received" notification.
 * Returns null if customer has no phone (walk-in).
 */
export async function buildTicketReceivedPreview(
  ticketId: string,
  locale: TemplateLocale = "fr"
): Promise<WaPreview | null> {
  const ticket = await prisma.repairTicket.findUnique({
    where: { id: ticketId },
    include: {
      customer: { include: { phones: true } },
      store: true,
      customerDevice: true,
    },
  });

  if (!ticket || !ticket.customer.phones[0]) return null;

  const phone = ticket.customer.phones[0].phoneNumber;
  const deviceName = buildDeviceName(ticket);

  const message = WhatsAppTemplates.ticketReceived[locale]({
    customerName: ticket.customer.name,
    ticketNumber: ticket.ticketNumber,
    deviceName,
    storeName: ticket.store.name,
    storePhone: ticket.store.phone ?? undefined,
  });

  return {
    phone,
    message,
    waLink: generateWaLink(phone, message),
    customerName: ticket.customer.name,
    locale,
  };
}

/**
 * Build a wa.me preview for "ticket ready for pickup" notification.
 */
export async function buildTicketReadyPreview(
  ticketId: string,
  locale: TemplateLocale = "fr"
): Promise<WaPreview | null> {
  const ticket = await prisma.repairTicket.findUnique({
    where: { id: ticketId },
    include: {
      customer: { include: { phones: true } },
      store: true,
      customerDevice: true,
      repairInvoices: {
        where: { status: { not: "cancelled" } },
        orderBy: { createdAt: "desc" },
        take: 1,
        select: { totalAmount: true },
      },
    },
  });

  if (!ticket || !ticket.customer.phones[0]) return null;

  const phone = ticket.customer.phones[0].phoneNumber;
  const deviceName = buildDeviceName(ticket);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const invoiceAmount = (ticket as any).repairInvoices?.[0]?.totalAmount;
  const finalPrice = invoiceAmount
    ? Number(invoiceAmount).toLocaleString("fr-DZ")
    : ticket.finalPrice
    ? Number(ticket.finalPrice).toLocaleString("fr-DZ")
    : ticket.estimatedPrice
    ? Number(ticket.estimatedPrice).toLocaleString("fr-DZ")
    : "—";

  const message = WhatsAppTemplates.ticketReady[locale]({
    customerName: ticket.customer.name,
    ticketNumber: ticket.ticketNumber,
    deviceName,
    finalPrice,
    storeName: ticket.store.name,
  });

  return {
    phone,
    message,
    waLink: generateWaLink(phone, message),
    customerName: ticket.customer.name,
    locale,
  };
}

/**
 * Build a wa.me preview for "estimate ready" notification.
 */
export async function buildEstimateReadyPreview(
  ticketId: string,
  locale: TemplateLocale = "fr"
): Promise<WaPreview | null> {
  const ticket = await prisma.repairTicket.findUnique({
    where: { id: ticketId },
    include: {
      customer: { include: { phones: true } },
      store: true,
      customerDevice: true,
      estimates: {
        where: { status: { not: "converted_to_invoice" as EstimateStatus } },
        orderBy: { createdAt: "desc" },
        take: 1,
        select: { totalAmount: true, estimateNumber: true },
      },
    },
  });

  if (!ticket || !ticket.customer.phones[0]) return null;

  const phone = ticket.customer.phones[0].phoneNumber;
  const deviceName = buildDeviceName(ticket);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const estimate = (ticket as any).estimates?.[0];
  if (!estimate) return null;

  const message = WhatsAppTemplates.estimateReady[locale]({
    customerName: ticket.customer.name,
    ticketNumber: ticket.ticketNumber,
    deviceName,
    estimateAmount: Number(estimate.totalAmount).toLocaleString("fr-DZ"),
    storeName: ticket.store.name,
  });

  return {
    phone,
    message,
    waLink: generateWaLink(phone, message),
    customerName: ticket.customer.name,
    locale,
  };
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function buildDeviceName(ticket: any): string {
  if (ticket.customerDevice?.customModel) return ticket.customerDevice.customModel;
  if (ticket.customerDevice?.deviceTypeName) return ticket.customerDevice.deviceTypeName;
  if (ticket.customDeviceModel) {
    return `${ticket.customDeviceBrand ? ticket.customDeviceBrand + " " : ""}${ticket.customDeviceModel}`;
  }
  if (ticket.deviceFamily?.name) return ticket.deviceFamily.name;
  return "Appareil";
}
