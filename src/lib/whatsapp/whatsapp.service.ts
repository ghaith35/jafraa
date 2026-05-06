/**
 * WhatsApp wa.me link generator
 *
 * Full whatsapp-web.js / Puppeteer automation is deferred.
 * MVP uses wa.me deep links — the user clicks a link that opens WhatsApp
 * pre-filled with the message, then manually taps Send.
 */

/**
 * Format a phone number for wa.me (digits only, no leading +).
 * Algerian numbers: strip leading 0, prepend country code 213.
 */
export function formatPhoneForWa(phone: string): string {
  const digits = phone.replace(/\D/g, "");
  if (!digits) return digits;
  // If already has country code (starts with 213 or another CC ≥ 3 digits after trimming 0)
  if (digits.startsWith("213")) return digits;
  // Strip leading 0 and prepend DZ country code
  if (digits.startsWith("0")) return "213" + digits.slice(1);
  // Assume DZ if 9-digit number without leading 0
  if (digits.length === 9) return "213" + digits;
  return digits;
}

/**
 * Generate a wa.me pre-filled link.
 */
export function generateWaLink(phone: string, message: string): string {
  const formatted = formatPhoneForWa(phone);
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${formatted}?text=${encoded}`;
}
