export type RepairProblemIcon =
  | "diagnostic"
  | "battery"
  | "screen"
  | "camera"
  | "charging"
  | "speaker"
  | "water"
  | "keyboard"
  | "storage"
  | "network"
  | "paperJam"
  | "toner"
  | "fuser"
  | "roller"
  | "software"
  | "other";

export type LocalizedText = {
  fr: string;
  en: string;
  ar: string;
};

export type PrinterTypeKey = "ink_cartridge" | "ink_tank" | "laser" | "risograph";

export type RepairProblemTemplate = {
  key: string;
  categoryKeys: string[];
  printerTypes?: PrinterTypeKey[];
  label: LocalizedText;
  description?: LocalizedText;
  icon: RepairProblemIcon;
  basePrice?: number;
};

const COMMON_PROBLEMS: RepairProblemTemplate[] = [
  {
    key: "diagnostic",
    categoryKeys: ["phone", "tablet", "laptop", "desktop", "printer", "console", "other"],
    icon: "diagnostic",
    label: { fr: "Diagnostic", en: "Diagnostic", ar: "تشخيص" },
    description: {
      fr: "Contrôle et identification de la panne",
      en: "Inspection and fault identification",
      ar: "فحص وتحديد العطل",
    },
    basePrice: 0,
  },
  {
    key: "water_damage",
    categoryKeys: ["phone", "tablet", "laptop", "desktop", "console"],
    icon: "water",
    label: { fr: "Dégât liquide", en: "Water damage", ar: "ضرر بسبب الماء" },
    description: {
      fr: "Nettoyage et diagnostic après contact liquide",
      en: "Cleaning and diagnosis after liquid contact",
      ar: "تنظيف وتشخيص بعد ملامسة السوائل",
    },
    basePrice: 0,
  },
  {
    key: "software_issue",
    categoryKeys: ["phone", "tablet", "laptop", "desktop", "printer", "console"],
    icon: "software",
    label: { fr: "Problème logiciel", en: "Software issue", ar: "مشكلة برمجية" },
    description: {
      fr: "Système, pilotes, mise à jour ou réinitialisation",
      en: "System, drivers, update or reset",
      ar: "النظام أو التعريفات أو التحديث أو إعادة الضبط",
    },
    basePrice: 0,
  },
];

const CATEGORY_PROBLEMS: RepairProblemTemplate[] = [
  {
    key: "screen_replacement",
    categoryKeys: ["phone", "tablet", "laptop"],
    icon: "screen",
    label: { fr: "Remplacement écran", en: "Screen replacement", ar: "تغيير الشاشة" },
    description: { fr: "LCD/OLED/Vitre", en: "LCD/OLED/glass", ar: "LCD/OLED/زجاج" },
    basePrice: 0,
  },
  {
    key: "battery_replacement",
    categoryKeys: ["phone", "tablet", "laptop", "console"],
    icon: "battery",
    label: { fr: "Remplacement batterie", en: "Battery replacement", ar: "تغيير البطارية" },
    description: { fr: "Batterie faible ou gonflée", en: "Weak or swollen battery", ar: "بطارية ضعيفة أو منتفخة" },
    basePrice: 0,
  },
  {
    key: "charging_port",
    categoryKeys: ["phone", "tablet", "laptop", "console"],
    icon: "charging",
    label: { fr: "Connecteur de charge", en: "Charging port", ar: "منفذ الشحن" },
    description: { fr: "Ne charge pas ou faux contact", en: "Not charging or loose connection", ar: "لا يشحن أو يوجد تماس ضعيف" },
    basePrice: 0,
  },
  {
    key: "speaker_replacement",
    categoryKeys: ["phone", "tablet", "laptop"],
    icon: "speaker",
    label: { fr: "Haut-parleur", en: "Speaker replacement", ar: "تغيير السماعة" },
    description: { fr: "Son faible ou absent", en: "Low or no sound", ar: "صوت ضعيف أو منعدم" },
    basePrice: 0,
  },
  {
    key: "front_camera",
    categoryKeys: ["phone", "tablet", "laptop"],
    icon: "camera",
    label: { fr: "Caméra avant", en: "Front camera", ar: "الكاميرا الأمامية" },
    basePrice: 0,
  },
  {
    key: "back_camera",
    categoryKeys: ["phone", "tablet"],
    icon: "camera",
    label: { fr: "Caméra arrière", en: "Back camera", ar: "الكاميرا الخلفية" },
    basePrice: 0,
  },
  {
    key: "keyboard_replacement",
    categoryKeys: ["laptop", "desktop"],
    icon: "keyboard",
    label: { fr: "Clavier", en: "Keyboard replacement", ar: "تغيير لوحة المفاتيح" },
    description: { fr: "Touches cassées ou non fonctionnelles", en: "Broken or non-working keys", ar: "أزرار مكسورة أو لا تعمل" },
    basePrice: 0,
  },
  {
    key: "storage_upgrade",
    categoryKeys: ["laptop", "desktop", "console"],
    icon: "storage",
    label: { fr: "SSD / Stockage", en: "SSD / Storage", ar: "SSD / التخزين" },
    description: { fr: "Remplacement ou mise à niveau", en: "Replacement or upgrade", ar: "تغيير أو ترقية" },
    basePrice: 0,
  },
  {
    key: "overheating",
    categoryKeys: ["laptop", "desktop", "console"],
    icon: "diagnostic",
    label: { fr: "Surchauffe", en: "Overheating", ar: "ارتفاع الحرارة" },
    description: { fr: "Nettoyage, pâte thermique, ventilation", en: "Cleaning, thermal paste, cooling", ar: "تنظيف، معجون حراري، تبريد" },
    basePrice: 0,
  },
];

const PRINTER_PROBLEMS: RepairProblemTemplate[] = [
  {
    key: "printer_paper_jam",
    categoryKeys: ["printer"],
    icon: "paperJam",
    label: { fr: "Bourrage papier", en: "Paper jam", ar: "انحشار الورق" },
    description: { fr: "Papier bloqué, capteur ou chemin papier", en: "Paper stuck, sensor or paper path issue", ar: "ورق عالق، حساس أو مسار الورق" },
    basePrice: 0,
  },
  {
    key: "printer_not_printing",
    categoryKeys: ["printer"],
    icon: "diagnostic",
    label: { fr: "N'imprime pas", en: "Not printing", ar: "لا تطبع" },
    description: { fr: "Pilote, connexion, consommable ou mécanique", en: "Driver, connection, consumable or mechanics", ar: "تعريف، اتصال، مستهلكات أو ميكانيك" },
    basePrice: 0,
  },
  {
    key: "printer_network_setup",
    categoryKeys: ["printer"],
    icon: "network",
    label: { fr: "Réseau / Wi‑Fi", en: "Network / Wi‑Fi", ar: "الشبكة / واي فاي" },
    description: { fr: "Configuration réseau, IP, partage ou AirPrint", en: "Network, IP, sharing or AirPrint setup", ar: "إعداد الشبكة أو IP أو المشاركة أو AirPrint" },
    basePrice: 0,
  },
  {
    key: "printer_scan_copy_adf",
    categoryKeys: ["printer"],
    icon: "diagnostic",
    label: { fr: "Scanner / ADF / copie", en: "Scanner / ADF / copy", ar: "الماسح / ADF / النسخ" },
    description: { fr: "Scanner, chargeur documents, vitre ou nappe", en: "Scanner, document feeder, glass or flat cable", ar: "الماسح، مغذي الأوراق، الزجاج أو الفلاتة" },
    basePrice: 0,
  },

  // Cartouche / cartridge inkjet printers
  {
    key: "ink_cartridge_not_recognized",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge"],
    icon: "toner",
    label: { fr: "Cartouche non reconnue", en: "Cartridge not recognized", ar: "الخرطوشة غير معروفة" },
    description: { fr: "Puce, contact ou cartouche incompatible", en: "Chip, contact or incompatible cartridge", ar: "الشريحة أو التلامس أو خرطوشة غير متوافقة" },
    basePrice: 0,
  },
  {
    key: "ink_cartridge_empty_or_dry",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge"],
    icon: "toner",
    label: { fr: "Cartouche vide / sèche", en: "Empty / dry cartridge", ar: "خرطوشة فارغة أو جافة" },
    description: { fr: "Encre sèche, cartouche vide ou buses bouchées", en: "Dry ink, empty cartridge or clogged nozzles", ar: "حبر جاف، خرطوشة فارغة أو فتحات مسدودة" },
    basePrice: 0,
  },
  {
    key: "ink_cartridge_refill_leak",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge"],
    icon: "toner",
    label: { fr: "Recharge / fuite cartouche", en: "Cartridge refill / leak", ar: "تعبئة أو تسرب الخرطوشة" },
    description: { fr: "Recharge, purge, fuite ou cartouche abîmée", en: "Refill, purge, leak or damaged cartridge", ar: "تعبئة، تنفيس، تسرب أو خرطوشة تالفة" },
    basePrice: 0,
  },
  {
    key: "ink_cartridge_carriage_jam",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge"],
    icon: "roller",
    label: { fr: "Blocage chariot", en: "Carriage jam", ar: "انحشار عربة الطباعة" },
    description: { fr: "Chariot bloqué, courroie, encodeur ou moteur", en: "Stuck carriage, belt, encoder strip or motor", ar: "العربة عالقة، السير، شريط التشفير أو المحرك" },
    basePrice: 0,
  },
  {
    key: "ink_cartridge_alignment",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge"],
    icon: "diagnostic",
    label: { fr: "Alignement / qualité couleur", en: "Alignment / color quality", ar: "المحاذاة / جودة الألوان" },
    description: { fr: "Alignement tête, couleurs mélangées, lignes ou bandes", en: "Head alignment, mixed colors, lines or banding", ar: "محاذاة الرأس، ألوان مختلطة، خطوط أو شرائط" },
    basePrice: 0,
  },

  // Réservoir / tank printers
  {
    key: "ink_printhead_clogged",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge", "ink_tank"],
    icon: "toner",
    label: { fr: "Tête bouchée", en: "Clogged printhead", ar: "رأس الطباعة مسدود" },
    description: { fr: "Nettoyage tête, buses ou purge encre", en: "Printhead/nozzle cleaning or ink purge", ar: "تنظيف الرأس أو الفتحات أو تنفيس الحبر" },
    basePrice: 0,
  },
  {
    key: "ink_absorber_full",
    categoryKeys: ["printer"],
    printerTypes: ["ink_cartridge", "ink_tank"],
    icon: "other",
    label: { fr: "Tampon encre plein", en: "Waste ink / absorber full", ar: "خزان الحبر الضائع ممتلئ" },
    description: { fr: "Remplacement tampon et remise à zéro compteur", en: "Waste pad replacement and counter reset", ar: "تغيير الوسادة وإعادة ضبط العداد" },
    basePrice: 0,
  },
  {
    key: "ink_tank_air_lines",
    categoryKeys: ["printer"],
    printerTypes: ["ink_tank"],
    icon: "toner",
    label: { fr: "Air dans réservoir / tuyaux", en: "Air in tank / ink lines", ar: "هواء في الخزان أو الأنابيب" },
    description: { fr: "Purge, remplissage et contrôle circuit encre", en: "Purge, refill and ink circuit check", ar: "تنفيس وتعبئة وفحص مسار الحبر" },
    basePrice: 0,
  },
  {
    key: "ink_tank_pump_tube",
    categoryKeys: ["printer"],
    printerTypes: ["ink_tank"],
    icon: "other",
    label: { fr: "Pompe / tuyaux d'encre", en: "Ink pump / tubes", ar: "مضخة أو أنابيب الحبر" },
    description: { fr: "Circuit encre, pompe ou tuyau coupé", en: "Ink circuit, pump or damaged tube", ar: "مسار الحبر، المضخة أو أنبوب تالف" },
    basePrice: 0,
  },
  {
    key: "ink_tank_leak",
    categoryKeys: ["printer"],
    printerTypes: ["ink_tank"],
    icon: "water",
    label: { fr: "Fuite réservoir", en: "Ink tank leak", ar: "تسرب خزان الحبر" },
    description: { fr: "Réservoir, bouchon, tuyau ou raccord qui fuit", en: "Leaking tank, cap, tube or connector", ar: "تسرب في الخزان، الغطاء، الأنبوب أو الوصلة" },
    basePrice: 0,
  },
  {
    key: "ink_tank_wrong_ink",
    categoryKeys: ["printer"],
    printerTypes: ["ink_tank"],
    icon: "toner",
    label: { fr: "Mauvaise encre / mélange", en: "Wrong ink / mixed ink", ar: "حبر خاطئ أو مختلط" },
    description: { fr: "Encre incompatible, couleur mélangée ou rinçage circuit", en: "Incompatible ink, mixed color or ink system flushing", ar: "حبر غير متوافق، لون مختلط أو غسل مسار الحبر" },
    basePrice: 0,
  },

  // Laser printers and copiers
  {
    key: "laser_toner",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "toner",
    label: { fr: "Toner / cartouche laser", en: "Toner cartridge", ar: "خرطوشة التونر" },
    description: { fr: "Toner vide, puce, fuite ou qualité", en: "Empty toner, chip, leak or quality issue", ar: "تونر فارغ، شريحة، تسرب أو جودة" },
    basePrice: 0,
  },
  {
    key: "laser_drum",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "toner",
    label: { fr: "Tambour / Drum", en: "Drum unit", ar: "وحدة الدرام" },
    description: { fr: "Taches, répétition ou usure tambour", en: "Spots, repeating marks or drum wear", ar: "بقع أو تكرار علامات أو تآكل الدرام" },
    basePrice: 0,
  },
  {
    key: "laser_fuser",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "fuser",
    label: { fr: "Four / Fuser", en: "Fuser unit", ar: "وحدة التسخين" },
    description: { fr: "Toner ne colle pas, plis ou bruit four", en: "Toner not fixing, wrinkles or fuser noise", ar: "التونر لا يثبت، تجعد أو صوت في السخان" },
    basePrice: 0,
  },
  {
    key: "laser_transfer_belt",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "roller",
    label: { fr: "Courroie transfert", en: "Transfer belt", ar: "حزام النقل" },
    description: { fr: "Défaut couleur ou transfert image", en: "Color defect or image transfer issue", ar: "خلل ألوان أو نقل الصورة" },
    basePrice: 0,
  },
  {
    key: "laser_developer",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "toner",
    label: { fr: "Développeur / image unit", en: "Developer / imaging unit", ar: "وحدة التطوير / التصوير" },
    description: { fr: "Fond gris, impression pâle, défaut développeur", en: "Gray background, pale print, developer issue", ar: "خلفية رمادية، طباعة باهتة أو عطل المطور" },
    basePrice: 0,
  },
  {
    key: "laser_pickup_roller",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "roller",
    label: { fr: "Rouleaux d'entraînement", en: "Pickup / feed rollers", ar: "بكرات سحب الورق" },
    description: { fr: "Ne tire pas le papier ou tire plusieurs feuilles", en: "Does not pick paper or double-feed", ar: "لا يسحب الورق أو يسحب ورقات متعددة" },
    basePrice: 0,
  },
  {
    key: "laser_duplex_unit",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "roller",
    label: { fr: "Recto-verso / Duplex", en: "Duplex unit", ar: "وحدة الطباعة على الوجهين" },
    description: { fr: "Bourrage en recto-verso ou module duplex", en: "Duplex paper jam or duplex module issue", ar: "انحشار في الدوبلكس أو عطل وحدة الوجهين" },
    basePrice: 0,
  },
  {
    key: "laser_firmware_error",
    categoryKeys: ["printer"],
    printerTypes: ["laser"],
    icon: "software",
    label: { fr: "Firmware / code erreur", en: "Firmware / error code", ar: "الفيرموير / كود الخطأ" },
    description: { fr: "Erreur 49/50/59, mise à jour, reset ou carte logique", en: "49/50/59 error, update, reset or formatter board", ar: "خطأ 49/50/59، تحديث، إعادة ضبط أو كارتة التحكم" },
    basePrice: 0,
  },

  // Risograph / digital duplicators
  {
    key: "riso_master_error",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "other",
    label: { fr: "Erreur master", en: "Master making error", ar: "خطأ في الماستر" },
    description: { fr: "Master, coupe, capteur ou tête thermique", en: "Master, cutter, sensor or thermal head", ar: "الماستر، القاطع، الحساس أو الرأس الحراري" },
    basePrice: 0,
  },
  {
    key: "riso_master_jam",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "paperJam",
    label: { fr: "Bourrage master", en: "Master jam", ar: "انحشار الماستر" },
    description: { fr: "Master coincé, rouleau master ou coupe master", en: "Stuck master, master roller or cutter", ar: "ماستر عالق، بكرة الماستر أو القاطع" },
    basePrice: 0,
  },
  {
    key: "riso_ink_drum",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "toner",
    label: { fr: "Tambour encre", en: "Ink drum", ar: "درام الحبر" },
    description: { fr: "Tambour, encre, couleur ou fuite", en: "Drum, ink, color or leak issue", ar: "درام، حبر، لون أو تسرب" },
    basePrice: 0,
  },
  {
    key: "riso_master_disposal",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "other",
    label: { fr: "Boîte master usagé", en: "Used master disposal", ar: "علبة الماستر المستعمل" },
    description: { fr: "Boîte pleine, capteur ou blocage master", en: "Full box, sensor or master jam", ar: "العلبة ممتلئة، حساس أو انحشار الماستر" },
    basePrice: 0,
  },
  {
    key: "riso_registration",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "roller",
    label: { fr: "Alignement / repérage", en: "Registration / alignment", ar: "المحاذاة / التسجيل" },
    description: { fr: "Décalage impression, pression ou papier", en: "Print shift, pressure or paper handling", ar: "انحراف الطباعة، الضغط أو الورق" },
    basePrice: 0,
  },
  {
    key: "riso_feed_roller",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "roller",
    label: { fr: "Rouleaux papier duplicateur", en: "Duplicator feed rollers", ar: "بكرات سحب الريزوغراف" },
    description: { fr: "Alimentation papier, double feuille ou rouleau usé", en: "Paper feed, double-feed or worn roller", ar: "سحب الورق، سحب ورقتين أو بكرات مهترئة" },
    basePrice: 0,
  },
  {
    key: "riso_pressure_print_quality",
    categoryKeys: ["printer"],
    printerTypes: ["risograph"],
    icon: "diagnostic",
    label: { fr: "Pression / qualité copie", en: "Pressure / copy quality", ar: "الضغط / جودة النسخ" },
    description: { fr: "Impression claire, floue, manque d'encre ou pression", en: "Light print, blur, low ink transfer or pressure", ar: "طباعة فاتحة، ضبابية، نقص نقل الحبر أو ضغط" },
    basePrice: 0,
  },
];

export function getRepairProblemTemplates(
  categoryKey?: string,
  options?: { printerType?: PrinterTypeKey | string }
): RepairProblemTemplate[] {
  if (!categoryKey) return COMMON_PROBLEMS;
  const key = categoryKey.toLowerCase();
  const printerType = options?.printerType as PrinterTypeKey | undefined;

  return [...CATEGORY_PROBLEMS, ...PRINTER_PROBLEMS, ...COMMON_PROBLEMS].filter((problem) => {
    if (!problem.categoryKeys.includes(key)) return false;
    if (key !== "printer") return true;
    if (!problem.printerTypes) return true;
    return Boolean(printerType && problem.printerTypes.includes(printerType));
  });
}

export function getProblemLabel(problem: RepairProblemTemplate, locale: string): string {
  if (locale === "ar") return problem.label.ar;
  if (locale === "en") return problem.label.en;
  return problem.label.fr;
}

export function getProblemDescription(problem: RepairProblemTemplate, locale: string): string | undefined {
  if (!problem.description) return undefined;
  if (locale === "ar") return problem.description.ar;
  if (locale === "en") return problem.description.en;
  return problem.description.fr;
}
