"use server";

import { prisma } from "@/lib/db";
import { getRepairStatusLabel } from "../i18n";

type TrackingError = { error: string };

export type PublicRepairTrackingResult = {
  ticketNumber: string;
  status: string;
  statusLabel: string;
  customerName: string;
  deviceName: string;
  problems: string[];
  dueAt: string | null;
  warrantyDays: number | null;
  createdAt: string;
  customerNotes: string | null;
};

function normalizePhone(value: string) {
  return value.replace(/\D/g, "");
}

function safeDate(value: Date | null) {
  return value ? value.toISOString() : null;
}

export async function trackRepairTicket(input: {
  ticketNumber: string;
  phone: string;
  locale?: "fr" | "ar" | "en";
}): Promise<TrackingError | PublicRepairTrackingResult> {
  const ticketNumber = input.ticketNumber.trim();
  const phoneDigits = normalizePhone(input.phone);
  const locale = input.locale ?? "fr";

  if (ticketNumber.length < 3 || phoneDigits.length < 6) {
    return { error: "Veuillez saisir le numéro du ticket et le téléphone du client." };
  }

  const ticket = await prisma.repairTicket.findFirst({
    where: {
      ticketNumber: { equals: ticketNumber, mode: "insensitive" },
      isArchived: false,
    },
    include: {
      customer: { select: { name: true, phones: { select: { phoneNumber: true } } } },
      deviceBrand: { select: { name: true } },
      deviceFamily: { select: { name: true } },
      customerDevice: { select: { customBrand: true, customModel: true, deviceTypeName: true } },
      problems: { select: { problemText: true } },
    },
  });

  if (!ticket) {
    return { error: "Ticket introuvable. Vérifiez le numéro et réessayez." };
  }

  const hasMatchingPhone = ticket.customer.phones.some((p) => {
    const stored = normalizePhone(p.phoneNumber);
    return stored.endsWith(phoneDigits) || phoneDigits.endsWith(stored) || stored.includes(phoneDigits);
  });

  if (!hasMatchingPhone) {
    return { error: "Les informations ne correspondent pas à ce ticket." };
  }

  const deviceName = [
    ticket.deviceBrand?.name ?? ticket.customerDevice?.customBrand ?? ticket.customDeviceBrand,
    ticket.deviceFamily?.name ?? ticket.customerDevice?.customModel ?? ticket.customDeviceModel,
  ].filter(Boolean).join(" ") || ticket.customerDevice?.deviceTypeName || "Appareil";

  return {
    ticketNumber: ticket.ticketNumber,
    status: ticket.currentStatus,
    statusLabel: getRepairStatusLabel(ticket.currentStatus, locale),
    customerName: ticket.customer.name,
    deviceName,
    problems: ticket.problems.map((p) => p.problemText),
    dueAt: safeDate(ticket.dueAt),
    warrantyDays: ticket.warrantyDays,
    createdAt: ticket.createdAt.toISOString(),
    customerNotes: ticket.customerNotes,
  };
}
