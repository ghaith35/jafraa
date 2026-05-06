"use client";

import { useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { APP_UI } from "@/lib/i18n/ui-core";

type SupportedLocale = "fr" | "en" | "ar";
type TranslationPair = { en: string; ar: string };

const EXTRA_STATIC_TRANSLATIONS: Record<string, TranslationPair> = {
  "Gestion de réparations, caisse et stock pour votre boutique.": { en: "Repair, checkout, and stock management for your shop.", ar: "إدارة الإصلاحات والصندوق والمخزون لمتجرك." },
  "Ouvrir le menu": { en: "Open menu", ar: "فتح القائمة" },
  "Rechercher": { en: "Search", ar: "بحث" },
  "Notifications": { en: "Notifications", ar: "الإشعارات" },
  "Tableau de bord": { en: "Dashboard", ar: "لوحة التحكم" },
  "Bienvenue,": { en: "Welcome,", ar: "مرحباً،" },
  "équipe REPAIRE": { en: "REPAIRE team", ar: "فريق REPAIRE" },
  "Principal": { en: "Main", ar: "الرئيسي" },
  "Tickets réparation": { en: "Repair tickets", ar: "تذاكر الإصلاح" },
  "Point de vente": { en: "Point of sale", ar: "نقطة البيع" },
  "Stock & produits": { en: "Stock & products", ar: "المخزون والمنتجات" },
  "Bons de commande": { en: "Purchase orders", ar: "أوامر الشراء" },
  "Admin": { en: "Admin", ar: "الإدارة" },
  "Tickets actifs": { en: "Active tickets", ar: "التذاكر النشطة" },
  "+3 depuis hier": { en: "+3 since yesterday", ar: "+3 منذ أمس" },
  "Prêts à livrer": { en: "Ready for delivery", ar: "جاهزة للتسليم" },
  "À contacter aujourd’hui": { en: "To contact today", ar: "للاتصال اليوم" },
  "Recettes aujourd’hui": { en: "Today's revenue", ar: "إيرادات اليوم" },
  "Caisse ouverte": { en: "Cash register open", ar: "الصندوق مفتوح" },
  "Caisse fermée": { en: "Cash register closed", ar: "الصندوق مغلق" },
  "Stock critique": { en: "Critical stock", ar: "مخزون حرج" },
  "À réapprovisionner": { en: "To restock", ar: "بحاجة لإعادة التموين" },
  "Pipeline réparations": { en: "Repair pipeline", ar: "مسار الإصلاحات" },
  "Voir tous": { en: "View all", ar: "عرض الكل" },
  "Ticket": { en: "Ticket", ar: "تذكرة" },
  "Appareil": { en: "Device", ar: "الجهاز" },
  "Statut": { en: "Status", ar: "الحالة" },
  "Date": { en: "Date", ar: "التاريخ" },
  "Activité récente": { en: "Recent activity", ar: "النشاط الأخير" },
  "Aucune activité récente.": { en: "No recent activity.", ar: "لا يوجد نشاط حديث." },
  "Commander": { en: "Order", ar: "اطلب" },
  "Ouvrir caisse": { en: "Open cash register", ar: "فتح الصندوق" },
  "Français": { en: "French", ar: "الفرنسية" },
  "Anglais": { en: "English", ar: "الإنجليزية" },
  "Arabe": { en: "Arabic", ar: "العربية" },
  "Administrateur": { en: "Administrator", ar: "مسؤول" },
  "Gérant": { en: "Manager", ar: "مدير" },
  "Caissier": { en: "Cashier", ar: "أمين الصندوق" },
  "Technicien": { en: "Technician", ar: "فني" },
  "Non assigné": { en: "Unassigned", ar: "غير مخصص" },
  "Aucune boutique": { en: "No store", ar: "لا يوجد متجر" },
  "Aucune boutique assignée": { en: "No store assigned", ar: "لا يوجد متجر معيّن" },
  "Aucune session de caisse ouverte.": { en: "No open cash session.", ar: "لا توجد جلسة صندوق مفتوحة." },
  "Aucune session de caisse ouverte. Veuillez ouvrir la caisse avant d'encaisser.": { en: "No open cash session. Please open the cash register before checkout.", ar: "لا توجد جلسة صندوق مفتوحة. يرجى فتح الصندوق قبل التحصيل." },
  "Aucune session de caisse ouverte. Veuillez ouvrir la caisse avant de vendre.": { en: "No open cash session. Please open the cash register before selling.", ar: "لا توجد جلسة صندوق مفتوحة. يرجى فتح الصندوق قبل البيع." },
  "Session expirée": { en: "Session expired", ar: "انتهت الجلسة" },
  "Corps de requête invalide": { en: "Invalid request body", ar: "محتوى الطلب غير صالح" },
  "Non autorisé": { en: "Unauthorized", ar: "غير مصرح" },
  "Accès refusé": { en: "Access denied", ar: "تم رفض الوصول" },
  "Données invalides": { en: "Invalid data", ar: "بيانات غير صالحة" },
  "Permission refusée": { en: "Permission denied", ar: "تم رفض الإذن" },
  "Action non autorisée": { en: "Unauthorized action", ar: "إجراء غير مصرح" },
  "Client introuvable": { en: "Customer not found", ar: "الزبون غير موجود" },
  "Ticket introuvable": { en: "Ticket not found", ar: "التذكرة غير موجودة" },
  "Ticket introuvable ou non autorisé": { en: "Ticket not found or unauthorized", ar: "التذكرة غير موجودة أو غير مصرح بها" },
  "Facture introuvable": { en: "Invoice not found", ar: "الفاتورة غير موجودة" },
  "Devis introuvable": { en: "Estimate not found", ar: "عرض السعر غير موجود" },
  "Vente introuvable": { en: "Sale not found", ar: "عملية البيع غير موجودة" },
  "Remboursement introuvable": { en: "Refund not found", ar: "الاسترداد غير موجود" },
  "Boutique introuvable": { en: "Store not found", ar: "المتجر غير موجود" },
  "Pièce introuvable": { en: "Part not found", ar: "القطعة غير موجودة" },
  "Pièce introuvable ou archivée": { en: "Part not found or archived", ar: "القطعة غير موجودة أو مؤرشفة" },
  "Réservation introuvable": { en: "Reservation not found", ar: "الحجز غير موجود" },
  "Appareil non spécifié": { en: "Device not specified", ar: "الجهاز غير محدد" },
  "IMEI/SN non spécifié": { en: "IMEI/SN not specified", ar: "IMEI/SN غير محدد" },
  "Aucune note particulière": { en: "No special notes", ar: "لا توجد ملاحظات خاصة" },
  "Aucun ticket de réparation": { en: "No repair ticket", ar: "لا توجد تذكرة إصلاح" },
  "Vous n'avez pas encore de tickets assignés.": { en: "You do not have assigned tickets yet.", ar: "ليست لديك تذاكر مخصصة بعد." },
  "Commencez par créer un nouveau ticket pour un client.": { en: "Start by creating a new ticket for a customer.", ar: "ابدأ بإنشاء تذكرة جديدة لزبون." },
  "Nouveau Ticket | Réparations": { en: "New Ticket | Repairs", ar: "تذكرة جديدة | الإصلاحات" },
  "Détail Ticket | Réparations": { en: "Ticket Details | Repairs", ar: "تفاصيل التذكرة | الإصلاحات" },
  "Nouveau Ticket de Réparation": { en: "New Repair Ticket", ar: "تذكرة إصلاح جديدة" },
  "Enregistrez un nouvel appareil pour réparation": { en: "Register a new device for repair", ar: "سجّل جهازاً جديداً للإصلاح" },
  "Nouveau ticket": { en: "New ticket", ar: "تذكرة جديدة" },
  "Réparations": { en: "Repairs", ar: "الإصلاحات" },
  "Tickets de réparation et suivi du statut": { en: "Repair tickets and status tracking", ar: "تذاكر الإصلاح ومتابعة الحالة" },
  "Ticket reçu": { en: "Ticket received", ar: "تم استلام التذكرة" },
  "Reçu": { en: "Received", ar: "مستلم" },
  "En réparation": { en: "In repair", ar: "قيد الإصلاح" },
  "Prêt à retirer": { en: "Ready for pickup", ar: "جاهز للاستلام" },
  "Prêt à récupérer": { en: "Ready for pickup", ar: "جاهز للاستلام" },
  "Terminé": { en: "Completed", ar: "مكتمل" },
  "Non réparé": { en: "Not repaired", ar: "غير مُصلح" },
  "Réparé": { en: "Repaired", ar: "تم الإصلاح" },
  "Non résolu": { en: "Unresolved", ar: "غير محلول" },
  "Échéance : {date}": { en: "Due: {date}", ar: "الموعد: {date}" },
  "Créé le {date} par {name}": { en: "Created on {date} by {name}", ar: "تم الإنشاء في {date} بواسطة {name}" },
  "Passé au statut {status}": { en: "Moved to status {status}", ar: "تم نقله إلى الحالة {status}" },
  "1. Client": { en: "1. Customer", ar: "1. الزبون" },
  "Sélectionner un client *": { en: "Select a customer *", ar: "اختر زبونًا *" },
  "Sélectionnez un client": { en: "Select a customer", ar: "اختر زبونًا" },
  "IMEI / Série": { en: "IMEI / Serial", ar: "IMEI / الرقم التسلسلي" },
  "Modèle *": { en: "Model *", ar: "الطراز *" },
  "Code de déverrouillage": { en: "Unlock code", ar: "رمز إلغاء القفل" },
  "3. Problèmes signalés *": { en: "3. Reported problems *", ar: "3. المشاكل المبلغ عنها *" },
  "Problèmes signalés": { en: "Reported problems", ar: "المشاكل المبلغ عنها" },
  "Ajouter un problème": { en: "Add a problem", ar: "إضافة مشكلة" },
  "Description du problème {index}...": { en: "Problem description {index}...", ar: "وصف المشكلة {index}..." },
  "Veuillez décrire le problème": { en: "Please describe the problem", ar: "يرجى وصف المشكلة" },
  "Veuillez ajouter au moins un problème": { en: "Please add at least one problem", ar: "يرجى إضافة مشكلة واحدة على الأقل" },
  "Veuillez sélectionner un appareil existant ou fournir les détails du nouvel appareil": { en: "Please select an existing device or provide the new device details", ar: "يرجى اختيار جهاز موجود أو إدخال تفاصيل الجهاز الجديد" },
  "Assigner à un technicien": { en: "Assign to a technician", ar: "تعيين لفني" },
  "Priorité": { en: "Priority", ar: "الأولوية" },
  "Urgent (Priorité)": { en: "Urgent (Priority)", ar: "عاجل (أولوية)" },
  "5. Notes (Optionnel)": { en: "5. Notes (Optional)", ar: "5. الملاحظات (اختياري)" },
  "5. Notes (Optional)": { en: "5. Notes (Optional)", ar: "5. الملاحظات (اختياري)" },
  "Notes internes": { en: "Internal notes", ar: "ملاحظات داخلية" },
  "Notes internes (visibles par l'équipe)": { en: "Internal notes (visible to the team)", ar: "ملاحظات داخلية (مرئية للفريق)" },
  "Exemple : Vérifier le connecteur de charge...": { en: "Example: Check the charging connector...", ar: "مثال: فحص منفذ الشحن..." },
  "Créer le ticket": { en: "Create ticket", ar: "إنشاء التذكرة" },
  "Erreur lors de la création du ticket": { en: "Error while creating the ticket", ar: "حدث خطأ أثناء إنشاء التذكرة" },
  "Note de diagnostic": { en: "Diagnostic note", ar: "ملاحظة التشخيص" },
  "Ticket archivé": { en: "Ticket archived", ar: "تمت أرشفة التذكرة" },
  "Vous n'êtes pas assigné à ce ticket": { en: "You are not assigned to this ticket", ar: "أنت غير مخصص لهذه التذكرة" },
  "Ticket réparation": { en: "Repair ticket", ar: "تذكرة إصلاح" },
  "Bon de réception": { en: "Receipt voucher", ar: "وصل الاستلام" },
  "Conservez ce bon pour retirer votre appareil. Toute réparation non retirée après 90 jours pourra être recyclée.": { en: "Keep this voucher to pick up your device. Any repair not picked up after 90 days may be recycled.", ar: "احتفظ بهذا الوصل لاستلام جهازك. أي إصلاح لا يتم استلامه بعد 90 يوماً قد تتم إعادة تدويره." },
  "Détails": { en: "Details", ar: "التفاصيل" },
  "Signature Client": { en: "Customer signature", ar: "توقيع الزبون" },
  "Facture": { en: "Invoice", ar: "الفاتورة" },
  "Facture réparation": { en: "Repair invoice", ar: "فاتورة الإصلاح" },
  "Facture de réparation": { en: "Repair invoice", ar: "فاتورة الإصلاح" },
  "Facture & Paiement": { en: "Invoice & Payment", ar: "الفاتورة والدفع" },
  "Générer la facture": { en: "Generate invoice", ar: "إنشاء الفاتورة" },
  "Aucune facture générée": { en: "No invoice generated", ar: "لم يتم إنشاء فاتورة" },
  "Aucune facture disponible": { en: "No invoice available", ar: "لا توجد فاتورة متاحة" },
  "Ticket terminé — aucune facture générée": { en: "Ticket completed — no invoice generated", ar: "التذكرة مكتملة — لم يتم إنشاء فاتورة" },
  "Imprimer la facture": { en: "Print invoice", ar: "طباعة الفاتورة" },
  "Non payée": { en: "Unpaid", ar: "غير مدفوعة" },
  "Partiellement payée": { en: "Partially paid", ar: "مدفوعة جزئياً" },
  "Payée": { en: "Paid", ar: "مدفوعة" },
  "Annulée": { en: "Cancelled", ar: "ملغاة" },
  "Accepté": { en: "Accepted", ar: "مقبول" },
  "Refusé": { en: "Rejected", ar: "مرفوض" },
  "Envoyé": { en: "Sent", ar: "مُرسل" },
  "Paiement": { en: "Payment", ar: "الدفع" },
  "Espèces reçues (DZD)": { en: "Cash received (DZD)", ar: "النقد المستلم (دج)" },
  "Montant restant": { en: "Remaining amount", ar: "المبلغ المتبقي" },
  "Dette créée : {amount} DZD sera enregistrée sur le compte client": { en: "Debt created: {amount} DZD will be recorded on the customer account", ar: "تم إنشاء دين: سيتم تسجيل {amount} دج على حساب الزبون" },
  "Client de passage — paiement complet en espèces requis ({amount} DZD)": { en: "Walk-in customer — full cash payment required ({amount} DZD)", ar: "زبون عابر — مطلوب دفع نقدي كامل ({amount} دج)" },
  "Paiement partiel — le reste sera enregistré en dette": { en: "Partial payment — the rest will be recorded as debt", ar: "دفع جزئي — سيتم تسجيل الباقي كدين" },
  "Réparation terminée": { en: "Repair completed", ar: "اكتمل الإصلاح" },
  "Espèces encaissées": { en: "Cash collected", ar: "النقد المحصل" },
  "Dette enregistrée": { en: "Debt recorded", ar: "تم تسجيل الدين" },
  "Total à payer": { en: "Total to pay", ar: "الإجمالي المستحق" },
  "Montant payé": { en: "Amount paid", ar: "المبلغ المدفوع" },
  "Reste à payer": { en: "Remaining to pay", ar: "المتبقي للدفع" },
  "Reste à payer (Dette)": { en: "Remaining to pay (Debt)", ar: "المتبقي للدفع (دين)" },
  "Déjà payé": { en: "Already paid", ar: "مدفوع مسبقاً" },
  "Facture entièrement payée": { en: "Invoice fully paid", ar: "الفاتورة مدفوعة بالكامل" },
  "Facture partiellement payée": { en: "Invoice partially paid", ar: "الفاتورة مدفوعة جزئياً" },
  "Cette facture est déjà réglée": { en: "This invoice is already settled", ar: "هذه الفاتورة مسددة بالفعل" },
  "Cette facture a été annulée": { en: "This invoice has been cancelled", ar: "تم إلغاء هذه الفاتورة" },
  "Cette facture est déjà entièrement réglée": { en: "This invoice is already fully paid", ar: "هذه الفاتورة مدفوعة بالكامل بالفعل" },
  "Une facture active existe déjà pour ce ticket": { en: "An active invoice already exists for this ticket", ar: "توجد فاتورة نشطة بالفعل لهذه التذكرة" },
  "Erreur lors de la génération de la facture": { en: "Error while generating the invoice", ar: "حدث خطأ أثناء إنشاء الفاتورة" },
  "Les techniciens ne peuvent pas générer de factures": { en: "Technicians cannot generate invoices", ar: "لا يمكن للفنيين إنشاء الفواتير" },
  "Les clients de passage doivent payer la totalité en espèces": { en: "Walk-in customers must pay the full amount in cash", ar: "يجب على الزبائن العابرين دفع كامل المبلغ نقداً" },
  "Le montant reçu ne peut pas être négatif": { en: "The received amount cannot be negative", ar: "لا يمكن أن يكون المبلغ المستلم سالباً" },
  "Remboursement": { en: "Refund", ar: "الاسترداد" },
  "Remboursement de facture": { en: "Invoice refund", ar: "استرداد الفاتورة" },
  "Remboursement terminé": { en: "Refund completed", ar: "تم الاسترداد" },
  "Remboursement des ventes": { en: "Sales refunds", ar: "استرداد المبيعات" },
  "Total remboursé": { en: "Total refunded", ar: "إجمالي المبلغ المسترد" },
  "Total Remboursé (Espèces)": { en: "Total refunded (Cash)", ar: "إجمالي المسترد (نقداً)" },
  "{amount} DZD remboursés sous le reçu {number}.": { en: "{amount} DZD refunded under receipt {number}.", ar: "تم استرداد {amount} دج بموجب الإيصال {number}." },
  "Le remboursement des factures avec dette est différé. Contactez un administrateur.": { en: "Refunds for invoices with debt are deferred. Contact an administrator.", ar: "تم تأجيل استرداد الفواتير التي تحتوي على ديون. اتصل بمسؤول." },
  "Le remboursement des ventes à crédit est différé. Contactez un administrateur.": { en: "Refunds for credit sales are deferred. Contact an administrator.", ar: "تم تأجيل استرداد مبيعات الائتمان. اتصل بمسؤول." },
  "Montant maximum remboursable : {amount} DZD": { en: "Maximum refundable amount: {amount} DZD", ar: "الحد الأقصى القابل للاسترداد: {amount} دج" },
  "Exemple : Écran défectueux après installation, geste commercial...": { en: "Example: defective screen after installation, goodwill gesture...", ar: "مثال: شاشة معيبة بعد التركيب، إجراء تجاري..." },
  "Reçu de remboursement": { en: "Refund receipt", ar: "إيصال الاسترداد" },
  "Ce document atteste du remboursement des articles mentionnés ci-dessus.": { en: "This document certifies the refund of the items mentioned above.", ar: "تثبت هذه الوثيقة استرداد العناصر المذكورة أعلاه." },
  "Devis": { en: "Estimate", ar: "عرض السعر" },
  "Devis disponible": { en: "Estimate available", ar: "عرض السعر متاح" },
  "Devis de réparation": { en: "Repair estimate", ar: "عرض سعر الإصلاح" },
  "Total Devis": { en: "Estimate total", ar: "إجمالي عرض السعر" },
  "Ce devis est une estimation. Le prix final peut varier selon les découvertes lors de l'intervention.": { en: "This estimate is an approximation. The final price may vary depending on findings during the intervention.", ar: "عرض السعر هذا تقديري. قد يختلف السعر النهائي حسب ما يتم اكتشافه أثناء التدخل." },
  "Les prix sont indiqués en DZD.": { en: "Prices are shown in DZD.", ar: "الأسعار معروضة بالدينار الجزائري." },
  "Voulez-vous marquer ce devis comme envoyé au client ?": { en: "Do you want to mark this estimate as sent to the customer?", ar: "هل تريد وضع علامة على عرض السعر بأنه أُرسل إلى الزبون؟" },
  "Êtes-vous sûr de vouloir rouvrir ce devis ?": { en: "Are you sure you want to reopen this estimate?", ar: "هل أنت متأكد أنك تريد إعادة فتح عرض السعر؟" },
  "Devis envoyé au client, en attente d'approbation.": { en: "Estimate sent to customer, awaiting approval.", ar: "تم إرسال عرض السعر إلى الزبون، بانتظار الموافقة." },
  "Données de devis invalides": { en: "Invalid estimate data", ar: "بيانات عرض السعر غير صالحة" },
  "Erreur lors de la création du devis": { en: "Error while creating the estimate", ar: "حدث خطأ أثناء إنشاء عرض السعر" },
  "Le devis doit être envoyé avant approbation": { en: "The estimate must be sent before approval", ar: "يجب إرسال عرض السعر قبل الموافقة" },
  "Seul un devis brouillon peut être envoyé": { en: "Only a draft estimate can be sent", ar: "يمكن إرسال عرض سعر مسودة فقط" },
  "Données d'approbation invalides": { en: "Invalid approval data", ar: "بيانات الموافقة غير صالحة" },
  "Erreur lors de l'enregistrement de la décision": { en: "Error while saving the decision", ar: "حدث خطأ أثناء حفظ القرار" },
  "Permission refusée : Seuls les gérants peuvent rouvrir un devis.": { en: "Permission denied: only managers can reopen an estimate.", ar: "تم رفض الإذن: يمكن للمديرين فقط إعادة فتح عرض السعر." },
  "Seul un devis accepté ou refusé peut être rouvert": { en: "Only an accepted or rejected estimate can be reopened", ar: "يمكن إعادة فتح عرض سعر مقبول أو مرفوض فقط" },
  "Devis rouvert en brouillon par un administrateur.": { en: "Estimate reopened as draft by an administrator.", ar: "تمت إعادة فتح عرض السعر كمسودة بواسطة مسؤول." },
  "Erreur lors de la réouverture": { en: "Error while reopening", ar: "حدث خطأ أثناء إعادة الفتح" },
  "Pièce": { en: "Part", ar: "قطعة" },
  "Pièces réservées ({count})": { en: "Reserved parts ({count})", ar: "القطع المحجوزة ({count})" },
  "Ajouter une pièce": { en: "Add a part", ar: "إضافة قطعة" },
  "Réserver une pièce": { en: "Reserve a part", ar: "حجز قطعة" },
  "Aucune pièce réservée pour ce ticket.": { en: "No part reserved for this ticket.", ar: "لا توجد قطع محجوزة لهذه التذكرة." },
  "Rechercher une pièce (nom, SKU, code-barres)": { en: "Search for a part (name, SKU, barcode)", ar: "البحث عن قطعة (الاسم، SKU، الباركود)" },
  "Rupture de stock. Cette pièce ne peut pas être réservée.": { en: "Out of stock. This part cannot be reserved.", ar: "نفاد المخزون. لا يمكن حجز هذه القطعة." },
  "Réserver": { en: "Reserve", ar: "حجز" },
  "Réservé": { en: "Reserved", ar: "محجوز" },
  "Réservée": { en: "Reserved", ar: "محجوزة" },
  "Réservé par": { en: "Reserved by", ar: "حُجز بواسطة" },
  "Libérer": { en: "Release", ar: "تحرير" },
  "Libérée": { en: "Released", ar: "محررة" },
  "Libéré par": { en: "Released by", ar: "حُررت بواسطة" },
  "Utilisée": { en: "Used", ar: "مستخدمة" },
  "Voulez-vous vraiment libérer cette réservation ?": { en: "Do you really want to release this reservation?", ar: "هل تريد فعلاً تحرير هذا الحجز؟" },
  "Historique ({count} libérées)": { en: "History ({count} released)", ar: "السجل ({count} محررة)" },
  "Impossible de réserver des pièces sur un ticket terminé ou non réparé": { en: "Cannot reserve parts on a completed or unrepaired ticket", ar: "لا يمكن حجز قطع لتذكرة مكتملة أو غير مُصلحة" },
  "Seuls les gérants peuvent réserver des pièces sur un ticket prêt à retirer": { en: "Only managers can reserve parts on a ticket ready for pickup", ar: "يمكن للمديرين فقط حجز قطع لتذكرة جاهزة للاستلام" },
  "Impossible de libérer une pièce déjà utilisée": { en: "Cannot release an already used part", ar: "لا يمكن تحرير قطعة مستخدمة بالفعل" },
  "Cette réservation a déjà été libérée": { en: "This reservation has already been released", ar: "تم تحرير هذا الحجز بالفعل" },
  "Erreur lors de la réservation": { en: "Error while reserving", ar: "حدث خطأ أثناء الحجز" },
  "Erreur lors de la libération": { en: "Error while releasing", ar: "حدث خطأ أثناء التحرير" },
  "Stock total": { en: "Total stock", ar: "إجمالي المخزون" },
  "Stock insuffisant. Disponible : {available}": { en: "Insufficient stock. Available: {available}", ar: "المخزون غير كافٍ. المتاح: {available}" },
  "Prix unitaire": { en: "Unit price", ar: "سعر الوحدة" },
  "Prix de vente": { en: "Sale price", ar: "سعر البيع" },
  "Le prix doit être ≥ 0": { en: "Price must be ≥ 0", ar: "يجب أن يكون السعر ≥ 0" },
  "Le prix ne peut pas être négatif": { en: "Price cannot be negative", ar: "لا يمكن أن يكون السعر سالباً" },
  "Le prix unitaire ne peut pas être négatif": { en: "Unit price cannot be negative", ar: "لا يمكن أن يكون سعر الوحدة سالباً" },
  "Le coût unitaire ne peut pas être négatif": { en: "Unit cost cannot be negative", ar: "لا يمكن أن تكون تكلفة الوحدة سالبة" },
  "La quantité doit être supérieure à 0": { en: "Quantity must be greater than 0", ar: "يجب أن تكون الكمية أكبر من 0" },
  "La quantité doit être ≥ 0": { en: "Quantity must be ≥ 0", ar: "يجب أن تكون الكمية ≥ 0" },
  "La quantité à consommer doit être supérieure à 0": { en: "Quantity to consume must be greater than 0", ar: "يجب أن تكون الكمية المستهلكة أكبر من 0" },
  "Le montant doit être supérieur à 0": { en: "Amount must be greater than 0", ar: "يجب أن يكون المبلغ أكبر من 0" },
  "Le montant payé ne peut pas être négatif": { en: "Paid amount cannot be negative", ar: "لا يمكن أن يكون المبلغ المدفوع سالباً" },
  "Le montant payé ne peut pas dépasser le total de la facture": { en: "Paid amount cannot exceed the invoice total", ar: "لا يمكن أن يتجاوز المبلغ المدفوع إجمالي الفاتورة" },
  "Le montant compté ne peut pas être négatif": { en: "Counted amount cannot be negative", ar: "لا يمكن أن يكون المبلغ المعدود سالباً" },
  "Le montant total du remboursement doit être supérieur à 0": { en: "Total refund amount must be greater than 0", ar: "يجب أن يكون إجمالي مبلغ الاسترداد أكبر من 0" },
  "Le montant d'ouverture ne peut pas être négatif": { en: "Opening amount cannot be negative", ar: "لا يمكن أن يكون مبلغ الافتتاح سالباً" },
  "La remise ne peut pas être négative": { en: "Discount cannot be negative", ar: "لا يمكن أن يكون الخصم سالباً" },
  "La remise ne peut pas dépasser le sous-total": { en: "Discount cannot exceed the subtotal", ar: "لا يمكن أن يتجاوز الخصم المجموع الفرعي" },
  "Ce SKU est déjà utilisé dans cette boutique": { en: "This SKU is already used in this store", ar: "رمز SKU هذا مستخدم بالفعل في هذا المتجر" },
  "Ce SKU ou code-barres est déjà utilisé dans cette boutique": { en: "This SKU or barcode is already used in this store", ar: "رمز SKU أو الباركود مستخدم بالفعل في هذا المتجر" },
  "Une facture avec ce numéro existe déjà pour cette boutique.": { en: "An invoice with this number already exists for this store.", ar: "توجد فاتورة بهذا الرقم بالفعل لهذا المتجر." },
  "Erreur lors de la mise à jour": { en: "Error while updating", ar: "حدث خطأ أثناء التحديث" },
  "Une erreur est survenue lors de la mise à jour": { en: "An error occurred while updating", ar: "حدث خطأ أثناء التحديث" },
  "Une erreur est survenue lors de la création": { en: "An error occurred while creating", ar: "حدث خطأ أثناء الإنشاء" },
  "Erreur lors de la création de la pièce": { en: "Error while creating the part", ar: "حدث خطأ أثناء إنشاء القطعة" },
  "Erreur lors de la création du fournisseur": { en: "Error while creating the supplier", ar: "حدث خطأ أثناء إنشاء المورد" },
  "Erreur lors de la création du produit": { en: "Error while creating the product", ar: "حدث خطأ أثناء إنشاء المنتج" },
  "Erreur lors de la création du service": { en: "Error while creating the service", ar: "حدث خطأ أثناء إنشاء الخدمة" },
  "Supprimer": { en: "Delete", ar: "حذف" },
  "Modifier": { en: "Edit", ar: "تعديل" },
  "Enregistrer": { en: "Save", ar: "حفظ" },
  "Enregistré": { en: "Saved", ar: "تم الحفظ" },
  "Annuler": { en: "Cancel", ar: "إلغاء" },
  "Retour": { en: "Back", ar: "رجوع" },
  "Rechercher...": { en: "Search...", ar: "بحث..." },
  "Note...": { en: "Note...", ar: "ملاحظة..." },
  "Note (optionnel)": { en: "Note (optional)", ar: "ملاحظة (اختياري)" },
  "Note (optional)": { en: "Note (optional)", ar: "ملاحظة (اختياري)" },
  "Détails supplémentaires...": { en: "Additional details...", ar: "تفاصيل إضافية..." },
  "Ouvrir WhatsApp": { en: "Open WhatsApp", ar: "فتح واتساب" },
  "Clients": { en: "Customers", ar: "الزبائن" },
  "Client": { en: "Customer", ar: "الزبون" },
  "Nouveau client": { en: "New customer", ar: "زبون جديد" },
  "Modifier le client": { en: "Edit customer", ar: "تعديل الزبون" },
  "Relevé de compte client": { en: "Customer account statement", ar: "كشف حساب الزبون" },
  "Relevé de compte": { en: "Account statement", ar: "كشف الحساب" },
  "Groupe :": { en: "Group:", ar: "المجموعة:" },
  "Défaut": { en: "Default", ar: "افتراضي" },
  "Opération / Note": { en: "Operation / Note", ar: "العملية / الملاحظة" },
  "Débit (+)": { en: "Debit (+)", ar: "مدين (+)" },
  "Crédit (-)": { en: "Credit (-)", ar: "دائن (-)" },
  "Total Dettes accumulées": { en: "Total accumulated debt", ar: "إجمالي الديون المتراكمة" },
  "Total Paiements effectués": { en: "Total payments made", ar: "إجمالي المدفوعات المنجزة" },
  "Solde à régler": { en: "Balance due", ar: "الرصيد المستحق" },
  "Format de numéro invalide": { en: "Invalid number format", ar: "تنسيق الرقم غير صالح" },
  "Un numéro de téléphone est requis pour un client nommé": { en: "A phone number is required for a named customer", ar: "رقم الهاتف مطلوب للزبون المسمى" },
  "Numéro trop court": { en: "Number too short", ar: "الرقم قصير جداً" },
  "Numéro trop long": { en: "Number too long", ar: "الرقم طويل جداً" },
  "Numéro introuvable": { en: "Number not found", ar: "الرقم غير موجود" },
  "Impossible de supprimer le numéro principal": { en: "Cannot delete the primary number", ar: "لا يمكن حذف الرقم الرئيسي" },
  "Ce numéro est déjà associé à un autre client de cette entreprise": { en: "This number is already associated with another customer in this company", ar: "هذا الرقم مرتبط بالفعل بزبون آخر في هذه الشركة" },
  "Ce numéro est déjà utilisé dans cette entreprise": { en: "This number is already used in this company", ar: "هذا الرقم مستخدم بالفعل في هذه الشركة" },
  "Ce client n'a pas de dette à payer": { en: "This customer has no debt to pay", ar: "هذا الزبون ليس لديه دين للدفع" },
  "Nom de la boutique": { en: "Store name", ar: "اسم المتجر" },
  "Affiché sur les documents": { en: "Displayed on documents", ar: "يظهر في المستندات" },
  "Adresse": { en: "Address", ar: "العنوان" },
  "Adresse complète": { en: "Full address", ar: "العنوان الكامل" },
  "Téléphone": { en: "Phone", ar: "الهاتف" },
  "Préfixe": { en: "Prefix", ar: "البادئة" },
  "Utilisé dans les N° de documents — non modifiable": { en: "Used in document numbers — not editable", ar: "يستخدم في أرقام المستندات — غير قابل للتعديل" },
  "Garantie par défaut": { en: "Default warranty", ar: "الضمان الافتراضي" },
  "Jours de garantie sur chaque réparation": { en: "Warranty days for each repair", ar: "أيام الضمان لكل إصلاح" },
  "Délai avertissement abandon": { en: "Abandon warning delay", ar: "مهلة تنبيه التخلي" },
  "Seuil abandon définitif": { en: "Final abandonment threshold", ar: "حد التخلي النهائي" },
  "Jours avant classement abandonné": { en: "Days before marking as abandoned", ar: "الأيام قبل التصنيف كمتروك" },
  "Délai retrait en retard": { en: "Late pickup delay", ar: "مهلة التأخر في الاستلام" },
  "Jours depuis prêt avant alerte": { en: "Days after ready before alert", ar: "الأيام بعد الجاهزية قبل التنبيه" },
  "Au-delà, approbation Manager requise": { en: "Beyond this, manager approval is required", ar: "بعد ذلك، يلزم موافقة المدير" },
  "Montant au-delà duquel le Manager doit valider": { en: "Amount above which the manager must approve", ar: "المبلغ الذي يجب على المدير الموافقة بعده" },
  "Seuil stock critique par défaut": { en: "Default critical stock threshold", ar: "حد المخزون الحرج الافتراضي" },
  "Quantité en dessous de laquelle une alerte est affichée": { en: "Quantity below which an alert is shown", ar: "الكمية التي يظهر التنبيه عند انخفاضها عنها" },
  "Paramètres opérationnels": { en: "Operational settings", ar: "الإعدادات التشغيلية" },
  "Paramètres": { en: "Settings", ar: "الإعدادات" },
  "Paramètres boutique — REPAIRE": { en: "Store settings — REPAIRE", ar: "إعدادات المتجر — REPAIRE" },
  "Paramètres boutique": { en: "Store settings", ar: "إعدادات المتجر" },
  "Fournisseurs": { en: "Suppliers", ar: "الموردون" },
  "Fournisseurs — REPAIRE": { en: "Suppliers — REPAIRE", ar: "الموردون — REPAIRE" },
  "Nouveau fournisseur — REPAIRE": { en: "New supplier — REPAIRE", ar: "مورد جديد — REPAIRE" },
  "Détails fournisseur — REPAIRE": { en: "Supplier details — REPAIRE", ar: "تفاصيل المورد — REPAIRE" },
  "Modifier le fournisseur — REPAIRE": { en: "Edit supplier — REPAIRE", ar: "تعديل المورد — REPAIRE" },
  "Nouveau service": { en: "New service", ar: "خدمة جديدة" },
  "Modifier le service": { en: "Edit service", ar: "تعديل الخدمة" },
  "Nouvelle pièce": { en: "New part", ar: "قطعة جديدة" },
  "Modifier la pièce": { en: "Edit part", ar: "تعديل القطعة" },
  "Nouveau produit": { en: "New product", ar: "منتج جديد" },
  "Modifier le produit": { en: "Edit product", ar: "تعديل المنتج" },
  "Inventaire": { en: "Inventory", ar: "المخزون" },
  "Stock": { en: "Stock", ar: "المخزون" },
  "Rapports": { en: "Reports", ar: "التقارير" },
  "Rapport des Ventes": { en: "Sales Report", ar: "تقرير المبيعات" },
  "Rapport de Rentabilité": { en: "Profitability Report", ar: "تقرير الربحية" },
  "Rapport des Réparations": { en: "Repairs Report", ar: "تقرير الإصلاحات" },
  "Dettes Clients": { en: "Customer Debt", ar: "ديون الزبائن" },
  "Stock & Inventaire": { en: "Stock & Inventory", ar: "المخزون والجرد" },
  "Flux de Trésorerie": { en: "Cash Flow", ar: "التدفق النقدي" },
  "Performance Staff": { en: "Staff Performance", ar: "أداء الموظفين" },
  "Journal d'audit": { en: "Audit log", ar: "سجل التدقيق" },
  "Accès restreint": { en: "Restricted access", ar: "وصول مقيّد" },
  "Seuls les administrateurs peuvent consulter le journal d'audit.": { en: "Only administrators can view the audit log.", ar: "يمكن للمسؤولين فقط عرض سجل التدقيق." },
  "Période :": { en: "Period:", ar: "الفترة:" },
  "Exporter CSV": { en: "Export CSV", ar: "تصدير CSV" },
  "Exporter PDF": { en: "Export PDF", ar: "تصدير PDF" },
  "Appliquer": { en: "Apply", ar: "تطبيق" },
  "Paiements Encaissés": { en: "Payments collected", ar: "المدفوعات المحصلة" },
  "Ventes à Crédit": { en: "Credit sales", ar: "المبيعات بالدين" },
  "Nombre de Ventes": { en: "Number of sales", ar: "عدد المبيعات" },
  "Réparations Terminées": { en: "Completed repairs", ar: "الإصلاحات المكتملة" },
  "Prêts pour Retrait": { en: "Ready for pickup", ar: "جاهزة للاستلام" },
  "Total Dû par les Clients": { en: "Total due by customers", ar: "إجمالي المستحق على الزبائن" },
  "Nombre de Débiteurs": { en: "Number of debtors", ar: "عدد المدينين" },
  "Risque Moyen par Client": { en: "Average risk per customer", ar: "متوسط المخاطر لكل زبون" },
  "Coût d'Achat (COGS)": { en: "Purchase cost (COGS)", ar: "تكلفة الشراء (COGS)" },
  "Bénéfice Brut": { en: "Gross profit", ar: "الربح الإجمالي" },
  "Dépenses & Frais": { en: "Expenses & fees", ar: "المصاريف والرسوم" },
  "Répartition du Chiffre d'Affaires": { en: "Revenue breakdown", ar: "توزيع رقم الأعمال" },
  "Bénéfice Net Estimé": { en: "Estimated net profit", ar: "صافي الربح التقديري" },
  "Après déduction des frais et charges enregistrés": { en: "After deducting recorded fees and expenses", ar: "بعد خصم الرسوم والمصاريف المسجلة" },
  "Rechercher action, entité, utilisateur...": { en: "Search action, entity, user...", ar: "ابحث عن إجراء أو كيان أو مستخدم..." },
  "Toutes les entités": { en: "All entities", ar: "كل الكيانات" },
  "Aucune entrée trouvée.": { en: "No entry found.", ar: "لم يتم العثور على أي إدخال." },
  "Entrées de Caisse": { en: "Cash inflows", ar: "تدفقات الصندوق الداخلة" },
  "Sorties de Caisse": { en: "Cash outflows", ar: "تدفقات الصندوق الخارجة" },
  "Trésorerie Nette": { en: "Net cash", ar: "صافي النقد" },
  "Analyse détaillée des flux par catégorie (V1.5)": { en: "Detailed flow analysis by category (V1.5)", ar: "تحليل مفصل للتدفقات حسب الفئة (V1.5)" },
  "Le flux net correspond au Chiffre d'Affaires encaissé moins les dépenses et achats effectués.": { en: "Net flow is collected revenue minus expenses and purchases made.", ar: "يمثل التدفق الصافي رقم الأعمال المحصل ناقص المصاريف والمشتريات المنجزة." },
  "Total Références": { en: "Total references", ar: "إجمالي المراجع" },
  "Valeur Totale Estime (Vente)": { en: "Estimated total value (Sale)", ar: "القيمة الإجمالية المقدرة (البيع)" },
  "Articles en Stock Critique": { en: "Critical stock items", ar: "العناصر ذات المخزون الحرج" },
  "Appareils en Stock": { en: "Devices in stock", ar: "الأجهزة في المخزون" },
  "Articles à Réapprovisionner": { en: "Items to restock", ar: "عناصر بحاجة لإعادة التموين" },
  "Aucun article en stock bas. Félicitations !": { en: "No low-stock item. Congratulations!", ar: "لا توجد عناصر منخفضة المخزون. تهانينا!" },
  "Caisse": { en: "Cash register", ar: "الصندوق" },
  "Gestion de la Caisse": { en: "Cash Management", ar: "إدارة الصندوق" },
  "Clôturé par": { en: "Closed by", ar: "أُغلقت بواسطة" },
  "Clôture": { en: "Closing", ar: "الإغلاق" },
  "Espèces attendues": { en: "Expected cash", ar: "النقد المتوقع" },
  "Espèces déclarées": { en: "Declared cash", ar: "النقد المصرح به" },
  "Écart": { en: "Variance", ar: "الفرق" },
  "Ventes POS": { en: "POS sales", ar: "مبيعات نقطة البيع" },
  "Type / Note": { en: "Type / Note", ar: "النوع / الملاحظة" },
  "Entrée (+)": { en: "Entry (+)", ar: "دخول (+)" },
  "Reçu de vente": { en: "Sales receipt", ar: "إيصال البيع" },
  "Espèces reçues": { en: "Cash received", ar: "النقد المستلم" },
  "Merci de votre visite ! Les articles ne sont ni repris ni échangés sauf défaut de fabrication.": { en: "Thank you for your visit! Items are neither returned nor exchanged except for manufacturing defects.", ar: "شكراً لزيارتكم! لا تُسترجع ولا تُستبدل السلع إلا في حالة عيب تصنيع." },
  "Vente POS": { en: "POS sale", ar: "بيع نقطة البيع" },
  "Vente introuvable ou déjà annulée": { en: "Sale not found or already cancelled", ar: "عملية البيع غير موجودة أو ملغاة بالفعل" },
  "Aucun article sélectionné pour le remboursement": { en: "No item selected for refund", ar: "لم يتم اختيار أي عنصر للاسترداد" },
  "Une session de caisse est déjà ouverte pour cette boutique": { en: "A cash session is already open for this store", ar: "توجد جلسة صندوق مفتوحة بالفعل لهذا المتجر" },
  "Cette session est déjà fermée": { en: "This session is already closed", ar: "هذه الجلسة مغلقة بالفعل" },
  "Seul l'utilisateur ayant ouvert la caisse ou un gérant peut la fermer": { en: "Only the user who opened the register or a manager can close it", ar: "يمكن فقط للمستخدم الذي فتح الصندوق أو المدير إغلاقه" },
  "Seuls les gérants ou administrateurs peuvent forcer la fermeture d'une caisse": { en: "Only managers or administrators can force close a register", ar: "يمكن فقط للمديرين أو المسؤولين فرض إغلاق الصندوق" },
  "Une note explicative est obligatoire pour la fermeture forcée": { en: "An explanatory note is required for forced closing", ar: "ملاحظة توضيحية مطلوبة للإغلاق الإجباري" },
  "Erreur lors de la fermeture forcée de la caisse": { en: "Error while force closing the register", ar: "حدث خطأ أثناء الإغلاق الإجباري للصندوق" },
  "Seuls les gérants ou administrateurs peuvent appliquer une remise": { en: "Only managers or administrators can apply a discount", ar: "يمكن فقط للمديرين أو المسؤولين تطبيق الخصم" },
  "Main d'œuvre réparation": { en: "Repair labor", ar: "أجرة إصلاح" },
  "Main d’œuvre réparation": { en: "Repair labor", ar: "أجرة إصلاح" },
  "Création du ticket": { en: "Ticket creation", ar: "إنشاء التذكرة" },
  "Catalogue des appareils": { en: "Device catalog", ar: "كتالوج الأجهزة" },
  "Rechercher une marque ou famille…": { en: "Search for a brand or family…", ar: "ابحث عن علامة تجارية أو عائلة…" },
  "Aucune marque trouvée": { en: "No brand found", ar: "لم يتم العثور على علامة تجارية" },
  "Aucune marque": { en: "No brand", ar: "لا توجد علامة تجارية" },
  "Nom de la marque…": { en: "Brand name…", ar: "اسم العلامة التجارية…" },
  "Familles de modèles": { en: "Model families", ar: "عائلات الطرازات" },
  "Aucune famille trouvée": { en: "No family found", ar: "لم يتم العثور على عائلة" },
  "Aucune famille de modèle": { en: "No model family", ar: "لا توجد عائلة طراز" },
  "Nom de la famille…": { en: "Family name…", ar: "اسم العائلة…" },
  "Le nom de la marque est requis (max 120 caractères)": { en: "Brand name is required (max 120 characters)", ar: "اسم العلامة التجارية مطلوب (بحد أقصى 120 حرفاً)" },
  "Catégorie introuvable": { en: "Category not found", ar: "الفئة غير موجودة" },
  "Cette marque existe déjà": { en: "This brand already exists", ar: "هذه العلامة التجارية موجودة بالفعل" },
  "Erreur lors de la création de la marque": { en: "Error while creating the brand", ar: "حدث خطأ أثناء إنشاء العلامة التجارية" },
  "Le nom de la famille est requis (max 120 caractères)": { en: "Family name is required (max 120 characters)", ar: "اسم العائلة مطلوب (بحد أقصى 120 حرفاً)" },
  "Cette famille de modèle existe déjà": { en: "This model family already exists", ar: "عائلة الطراز هذه موجودة بالفعل" },
  "Erreur lors de la création de la famille": { en: "Error while creating the family", ar: "حدث خطأ أثناء إنشاء العائلة" },
  "Remplacement écran, Diagnostic…": { en: "Screen replacement, Diagnostics…", ar: "استبدال الشاشة، التشخيص…" },
  "Réparation, Logiciel, Entretien…": { en: "Repair, Software, Maintenance…", ar: "إصلاح، برنامج، صيانة…" },
  "Écran iPhone 13, Batterie Galaxy A52…": { en: "iPhone 13 screen, Galaxy A52 battery…", ar: "شاشة iPhone 13، بطارية Galaxy A52…" },
  "Qualité OEM, pré-assemblé, compatible uniquement LCD…": { en: "OEM quality, pre-assembled, LCD-only compatible…", ar: "جودة OEM، مجمّع مسبقاً، متوافق مع LCD فقط…" },
  "Payé": { en: "Paid", ar: "مدفوع" },
  "Non payé": { en: "Unpaid", ar: "غير مدفوع" },
  "Le produit ou la pièce est requis selon le type sélectionné": { en: "The product or part is required depending on the selected type", ar: "المنتج أو القطعة مطلوب حسب النوع المحدد" },
  "Sélectionnez un fournisseur": { en: "Select a supplier", ar: "اختر مورداً" },
  "Numéro de facture requis": { en: "Invoice number is required", ar: "رقم الفاتورة مطلوب" },
  "Indiquez au moins la catégorie, le type, la marque ou le modèle": { en: "Enter at least the category, type, brand, or model", ar: "أدخل على الأقل الفئة أو النوع أو العلامة التجارية أو الطراز" },
  "Grâce": { en: "Grace", ar: "مهلة" },
  "Annulé": { en: "Cancelled", ar: "ملغى" }
};

const ATTRIBUTE_NAMES = ["placeholder", "aria-label", "title", "alt"] as const;
const SKIP_SELECTOR = "script,style,code,pre,textarea,[data-no-auto-translate]";

function normalizeText(value: string) {
  return value.replace(/\s+/g, " ").trim();
}

function buildTranslationMap(locale: SupportedLocale) {
  const map = new Map<string, string>();
  if (locale === "fr") return map;

  const appUi = APP_UI as unknown as Record<SupportedLocale, Record<string, string>>;
  for (const [key, source] of Object.entries(appUi.fr ?? {})) {
    const target = appUi[locale]?.[key];
    if (source && target && source !== target) map.set(normalizeText(source), target);
  }

  for (const [source, translations] of Object.entries(EXTRA_STATIC_TRANSLATIONS)) {
    const target = translations[locale];
    if (target && target !== source) map.set(normalizeText(source), target);
  }

  return map;
}

function translateDynamicPatterns(value: string, locale: SupportedLocale) {
  if (locale === "fr") return value;
  let result = value;

  if (locale === "en") {
    result = result
      .replace(/^(\d+) client(?:s)? trouvé(?:s)?$/i, (_, count) => `${count} customer${count === "1" ? "" : "s"} found`)
      .replace(/^(\d+) entrée(?:s)?$/i, (_, count) => `${count} entr${count === "1" ? "y" : "ies"}`)
      .replace(/^Créé le (.+) par (.+)$/i, "Created on $1 by $2")
      .replace(/^Passé au statut (.+)$/i, "Moved to status $1")
      .replace(/^Échéance : (.+)$/i, "Due: $1")
      .replace(/^Stock insuffisant\. Disponible : (.+)$/i, "Insufficient stock. Available: $1")
      .replace(/^Montant maximum remboursable : (.+) DZD$/i, "Maximum refundable amount: $1 DZD")
      .replace(/^Période : (.+) au (.+)$/i, "Period: $1 to $2");
  } else {
    result = result
      .replace(/^(\d+) client(?:s)? trouvé(?:s)?$/i, (_, count) => `تم العثور على ${count} زبون`)
      .replace(/^(\d+) entrée(?:s)?$/i, (_, count) => `${count} إدخال`)
      .replace(/^Créé le (.+) par (.+)$/i, "تم الإنشاء في $1 بواسطة $2")
      .replace(/^Passé au statut (.+)$/i, "تم نقله إلى الحالة $1")
      .replace(/^Échéance : (.+)$/i, "الموعد: $1")
      .replace(/^Stock insuffisant\. Disponible : (.+)$/i, "المخزون غير كافٍ. المتاح: $1")
      .replace(/^Montant maximum remboursable : (.+) DZD$/i, "الحد الأقصى القابل للاسترداد: $1 دج")
      .replace(/^Période : (.+) au (.+)$/i, "الفترة: $1 إلى $2");
  }

  return result;
}

function translateValue(value: string, locale: SupportedLocale, map: Map<string, string>) {
  if (locale === "fr" || !value.trim()) return value;

  const leading = value.match(/^\s*/)?.[0] ?? "";
  const trailing = value.match(/\s*$/)?.[0] ?? "";
  const core = value.slice(leading.length, value.length - trailing.length);
  const normalizedCore = normalizeText(core);
  const exact = map.get(normalizedCore);
  if (exact) return `${leading}${exact}${trailing}`;

  let translated = core;
  const ordered = [...map.entries()].sort((a, b) => b[0].length - a[0].length);
  for (const [source, target] of ordered) {
    if (source.length < 3) continue;
    translated = translated.split(source).join(target);
  }

  translated = translateDynamicPatterns(translated, locale);
  return `${leading}${translated}${trailing}`;
}

function shouldSkipElement(element: Element | null) {
  return Boolean(element?.closest(SKIP_SELECTOR));
}

function translateElement(root: ParentNode, locale: SupportedLocale, map: Map<string, string>) {
  if (locale === "fr") return;

  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || shouldSkipElement(parent)) return NodeFilter.FILTER_REJECT;
      if (!node.nodeValue?.trim()) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  });

  const textNodes: Text[] = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode as Text);
  for (const node of textNodes) {
    const translated = translateValue(node.nodeValue ?? "", locale, map);
    if (translated !== node.nodeValue) node.nodeValue = translated;
  }

  const elements = root instanceof Element ? [root, ...Array.from(root.querySelectorAll<HTMLElement>("*"))] : Array.from(root.querySelectorAll<HTMLElement>("*"));
  for (const element of elements) {
    if (shouldSkipElement(element)) continue;
    for (const attr of ATTRIBUTE_NAMES) {
      const current = element.getAttribute(attr);
      if (!current) continue;
      const translated = translateValue(current, locale, map);
      if (translated !== current) element.setAttribute(attr, translated);
    }
  }
}

export function AutoTranslator() {
  const rawLocale = useLocale();
  const locale = (rawLocale === "ar" || rawLocale === "en" || rawLocale === "fr" ? rawLocale : "fr") as SupportedLocale;
  const map = useMemo(() => buildTranslationMap(locale), [locale]);

  useEffect(() => {
    if (locale === "fr") return;

    let frame = 0;
    const run = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => translateElement(document.body, locale, map));
    };

    run();
    const observer = new MutationObserver(run);
    observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: [...ATTRIBUTE_NAMES],
    });

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
    };
  }, [locale, map]);

  return null;
}
