/**
 * WhatsApp message templates — FR, AR and EN variants.
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
  approvalUrl?: string;
};

export type PaymentReminderData = {
  customerName: string;
  amountDue: string;
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
    en: (d: TicketReceivedData) =>
      `Hello *${d.customerName}*,\n\n` +
      `Your *${d.deviceName}* has been received for repair at *${d.storeName}*.\n\n` +
      `📌 *Ticket:* ${d.ticketNumber}\n` +
      `We will notify you when diagnosis is complete.\n\n` +
      `Thank you! 🙏` +
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
    en: (d: TicketReadyData) =>
      `Good news *${d.customerName}*! 🎉\n\n` +
      `Your *${d.deviceName}* (Ticket #${d.ticketNumber}) is ready for pickup at *${d.storeName}*.\n\n` +
      `💰 *Amount due:* ${d.finalPrice} DZD\n\n` +
      `See you soon!`,
  },

  estimateReady: {
    fr: (d: EstimateReadyData) =>
      `Bonjour *${d.customerName}*,\n\n` +
      `Le devis pour la réparation de votre *${d.deviceName}* (Ticket #${d.ticketNumber}) est prêt.\n\n` +
      `💵 *Montant estimé :* ${d.estimateAmount} DZD\n\n` +
      `Vous pouvez confirmer ou refuser le devis depuis ce lien :\n` +
      `${d.approvalUrl || "Contactez-nous pour confirmer ou refuser."}\n\n` +
      `— *${d.storeName}*`,
    ar: (d: EstimateReadyData) =>
      `مرحباً *${d.customerName}*،\n\n` +
      `تم إعداد تقدير تكلفة إصلاح جهازك *${d.deviceName}* (تذكرة #${d.ticketNumber}).\n\n` +
      `💵 *المبلغ المقدر:* ${d.estimateAmount} دج\n\n` +
      `يمكنك الموافقة أو الرفض من هذا الرابط:\n` +
      `${d.approvalUrl || "يرجى التواصل معنا للموافقة أو الرفض."}\n\n` +
      `— *${d.storeName}*`,
    en: (d: EstimateReadyData) =>
      `Hello *${d.customerName}*,\n\n` +
      `The estimate for your *${d.deviceName}* (Ticket #${d.ticketNumber}) is ready.\n\n` +
      `💵 *Estimated amount:* ${d.estimateAmount} DZD\n\n` +
      `Approve or reject it here:\n` +
      `${d.approvalUrl || "Please contact us to approve or reject."}\n\n` +
      `— *${d.storeName}*`,
  },

  paymentReminder: {
    fr: (d: PaymentReminderData) =>
      `Bonjour *${d.customerName}*,\n\n` +
      `Petit rappel: il reste *${d.amountDue} DZD* à régler chez *${d.storeName}*.\n\nMerci.`,
    ar: (d: PaymentReminderData) =>
      `مرحباً *${d.customerName}*،\n\n` +
      `تذكير: المبلغ المتبقي هو *${d.amountDue} دج* لدى *${d.storeName}*.\n\nشكراً.`,
    en: (d: PaymentReminderData) =>
      `Hello *${d.customerName}*,\n\n` +
      `Reminder: *${d.amountDue} DZD* remains due at *${d.storeName}*.\n\nThank you.`,
  },
};

export type TemplateLocale = "fr" | "ar" | "en";
export type TemplateType = keyof typeof WhatsAppTemplates;
