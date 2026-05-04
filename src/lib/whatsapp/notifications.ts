import { prisma } from "@/lib/db";
import { whatsappService } from "./whatsapp.service";
import { WhatsAppTemplates } from "./templates";

/**
 * WhatsApp Notification Service
 */
export const WhatsAppNotifications = {
  /**
   * Send Ticket Received Notification
   */
  async sendTicketReceived(ticketId: string) {
    try {
      const ticket = await prisma.repairTicket.findUnique({
        where: { id: ticketId },
        include: {
          customer: { include: { phones: true } },
          store: true,
          customerDevice: true
        }
      });

      if (!ticket || !ticket.customer.phones[0]) return;

      const deviceName = ticket.customerDevice 
        ? `${ticket.customerDevice.deviceTypeName} ${ticket.customDeviceBrand || ""} ${ticket.customDeviceModel || ""}`.trim()
        : "Appareil";

      const message = WhatsAppTemplates.repairReceived({
        customerName: ticket.customer.name,
        ticketNumber: ticket.ticketNumber,
        deviceName,
        storeName: ticket.store.name,
        storePhone: ticket.store.phone || ""
      });

      await whatsappService.sendMessage(ticket.storeId, ticket.customer.phones[0].phoneNumber, message);
    } catch (err) {
      console.error("[WhatsAppNotifications] Failed to send ticket received:", err);
    }
  },

  /**
   * Send Ticket Ready Notification
   */
  async sendTicketReady(ticketId: string) {
    try {
      const ticket = await prisma.repairTicket.findUnique({
        where: { id: ticketId },
        include: {
          customer: { include: { phones: true } },
          store: true,
          customerDevice: true
        }
      });

      if (!ticket || !ticket.customer.phones[0]) return;

      const deviceName = ticket.customerDevice 
        ? `${ticket.customerDevice.deviceTypeName} ${ticket.customDeviceBrand || ""} ${ticket.customDeviceModel || ""}`.trim()
        : "Appareil";

      const message = WhatsAppTemplates.repairReady({
        customerName: ticket.customer.name,
        ticketNumber: ticket.ticketNumber,
        deviceName,
        finalPrice: ticket.finalPrice?.toString() || ticket.estimatedPrice?.toString() || "0",
        storeName: ticket.store.name
      });

      await whatsappService.sendMessage(ticket.storeId, ticket.customer.phones[0].phoneNumber, message);
    } catch (err) {
      console.error("[WhatsAppNotifications] Failed to send ticket ready:", err);
    }
  },

  /**
   * Send Invoice Notification
   */
  async sendInvoice(invoiceId: string) {
    try {
      const invoice = await prisma.repairInvoice.findUnique({
        where: { id: invoiceId },
        include: {
          customer: { include: { phones: true } },
          store: true
        }
      });

      if (!invoice || !invoice.customer.phones[0]) return;

      const message = WhatsAppTemplates.invoiceSent({
        customerName: invoice.customer.name,
        invoiceNumber: invoice.invoiceNumber,
        totalAmount: invoice.totalAmount.toString(),
        storeName: invoice.store.name
      });

      await whatsappService.sendMessage(invoice.storeId, invoice.customer.phones[0].phoneNumber, message);
    } catch (err) {
      console.error("[WhatsAppNotifications] Failed to send invoice:", err);
    }
  }
};
