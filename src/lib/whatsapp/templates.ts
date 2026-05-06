/**
 * WhatsApp message templates — FR (default) and AR variants
 */

export type TicketReceivedData = {
  customerName: string;
  ticketNumber: string;
  deviceName: string;
  storeName: string;
  storePhone?: string;
};

export type TicketReadyData = {
  customerName: string;
  ticketNumber: string;
  deviceName: string;
  finalPrice: string;
  storeName: string;
};

export type EstimateReadyData = {
  customerName: string;
  ticketNumber: string;
  deviceName: string;
  estimateAmount: string;
  storeName: string;
};

export const WhatsAppTemplates = {
  ticketReceived: {
    fr: (d: TicketReceivedData) =>
      `Bonjour *${d.customerName}*,\n\n` +
      `Votre appareil *${d.deviceName}* a bien été reçu pour réparation chez *${d.storeName}*.\n\n` +
      `📌 *N° Ticket :* ${d.ticketNumber}\n` +
      `Vous recevrez une notification dès que le diagnostic sera terminé.\n\n` +
      `Merci de votre confiance ! 🙏` +
      (d.storePhone ? `\n\n📞 ${d.storePhone}` : ""),

    ar: (d: TicketReceivedData) =>
      `مرحباً *${d.customerName}*،\n\n` +
      `تم استلام جهازك *${d.deviceName}* للإصلاح في *${d.storeName}*.\n\n` +
      `📌 *رقم التذكرة:* ${d.ticketNumber}\n` +
      `ستتلقى إشعاراً عند الانتهاء من التشخيص.\n\n` +
      `شكراً لثقتكم! 🙏` +
      (d.storePhone ? `\n\n📞 ${d.storePhone}` : ""),
  },

  ticketReady: {
    fr: (d: TicketReadyData) =>
      `Bonne nouvelle *${d.customerName}* ! 🎉\n\n` +
      `Votre *${d.deviceName}* (Ticket #${d.ticketNumber}) est prêt à être récupéré chez *${d.storeName}*.\n\n` +
      `💰 *Montant à régler :* ${d.finalPrice} DZD\n\n` +
      `À très bientôt !`,

    ar: (d: TicketReadyData) =>
      `خبر سار *${d.customerName}* ! 🎉\n\n` +
      `جهازك *${d.deviceName}* (تذكرة #${d.ticketNumber}) جاهز للاستلام من *${d.storeName}*.\n\n` +
      `💰 *المبلغ المطلوب:* ${d.finalPrice} دج\n\n` +
      `نراكم قريباً!`,
  },

  estimateReady: {
    fr: (d: EstimateReadyData) =>
      `Bonjour *${d.customerName}*,\n\n` +
      `Le devis pour la réparation de votre *${d.deviceName}* (Ticket #${d.ticketNumber}) est prêt.\n\n` +
      `💵 *Montant estimé :* ${d.estimateAmount} DZD\n\n` +
      `Veuillez nous contacter pour confirmer ou refuser le devis.\n\n` +
      `— *${d.storeName}*`,

    ar: (d: EstimateReadyData) =>
      `مرحباً *${d.customerName}*،\n\n` +
      `تم إعداد تقدير تكلفة إصلاح جهازك *${d.deviceName}* (تذكرة #${d.ticketNumber}).\n\n` +
      `💵 *المبلغ المقدر:* ${d.estimateAmount} دج\n\n` +
      `يرجى التواصل معنا للموافقة أو الرفض.\n\n` +
      `— *${d.storeName}*`,
  },
};

export type TemplateLocale = "fr" | "ar";
export type TemplateType = "ticketReceived" | "ticketReady" | "estimateReady";
