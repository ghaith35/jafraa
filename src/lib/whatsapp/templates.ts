/**
 * WhatsApp Message Templates
 */

export const WhatsAppTemplates = {
  /**
   * Repair Ticket Received
   */
  repairReceived: (data: { 
    customerName: string; 
    ticketNumber: string; 
    deviceName: string; 
    storeName: string;
    storePhone: string;
  }) => {
    return `Bonjour *${data.customerName}*,\n\n` +
      `Votre appareil *${data.deviceName}* a été bien reçu pour réparation chez *${data.storeName}*.\n\n` +
      `📌 *N° Ticket :* ${data.ticketNumber}\n` +
      `Vous recevrez une notification dès que le diagnostic sera terminé.\n\n` +
      `Merci de votre confiance ! 🙏\n\n` +
      `--- \n` +
      `📞 ${data.storePhone}`;
  },

  /**
   * Repair Ready for Pickup
   */
  repairReady: (data: { 
    customerName: string; 
    ticketNumber: string; 
    deviceName: string; 
    finalPrice: string;
    storeName: string;
  }) => {
    return `Bonne nouvelle *${data.customerName}* ! 🎉\n\n` +
      `Votre *${data.deviceName}* (Ticket #${data.ticketNumber}) est prêt à être récupéré chez *${data.storeName}*.\n\n` +
      `💰 *Montant :* ${data.finalPrice} DZD\n\n` +
      `À très bientôt !`;
  },

  /**
   * Invoice/Receipt
   */
  invoiceSent: (data: { 
    customerName: string; 
    invoiceNumber: string; 
    totalAmount: string; 
    storeName: string;
  }) => {
    return `Bonjour *${data.customerName}*,\n\n` +
      `Merci pour votre achat chez *${data.storeName}*.\n\n` +
      `🧾 *Facture N° :* ${data.invoiceNumber}\n` +
      `💵 *Total :* ${data.totalAmount} DZD\n\n` +
      `Nous espérons vous revoir bientôt !`;
  },
};
