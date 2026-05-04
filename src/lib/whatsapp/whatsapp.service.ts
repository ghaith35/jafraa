import { Client, LocalAuth, MessageContent } from "whatsapp-web.js";
import QRCode from "qrcode";
import path from "path";
import fs from "fs";

/**
 * WhatsApp Service Singleton
 */
class WhatsAppService {
  private clients: Map<string, Client> = new Map();
  private qrCodes: Map<string, string> = new Map();
  private statuses: Map<string, "disconnected" | "pairing" | "connected"> = new Map();

  constructor() {
    // Ensure session directory exists
    const sessionDir = path.join(process.cwd(), ".wwebjs_auth");
    if (!fs.existsSync(sessionDir)) {
      fs.mkdirSync(sessionDir);
    }
  }

  /**
   * Initialize a client for a store
   */
  async initClient(storeId: string) {
    if (this.clients.has(storeId)) return;

    this.statuses.set(storeId, "disconnected");

    const client = new Client({
      authStrategy: new LocalAuth({
        clientId: storeId,
        dataPath: path.join(process.cwd(), ".wwebjs_auth")
      }),
      puppeteer: {
        headless: true,
        args: ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    });

    client.on("qr", async (qr) => {
      console.log(`[WhatsApp] QR received for store ${storeId}`);
      const qrDataUrl = await QRCode.toDataURL(qr);
      this.qrCodes.set(storeId, qrDataUrl);
      this.statuses.set(storeId, "pairing");
    });

    client.on("ready", () => {
      console.log(`[WhatsApp] Client ready for store ${storeId}`);
      this.qrCodes.delete(storeId);
      this.statuses.set(storeId, "connected");
    });

    client.on("authenticated", () => {
      console.log(`[WhatsApp] Authenticated for store ${storeId}`);
    });

    client.on("auth_failure", (msg) => {
      console.error(`[WhatsApp] Auth failure for store ${storeId}:`, msg);
      this.statuses.set(storeId, "disconnected");
    });

    client.on("disconnected", (reason) => {
      console.log(`[WhatsApp] Client disconnected for store ${storeId}:`, reason);
      this.statuses.set(storeId, "disconnected");
      this.clients.delete(storeId);
    });

    try {
      await client.initialize();
      this.clients.set(storeId, client);
    } catch (err) {
      console.error(`[WhatsApp] Failed to initialize client for store ${storeId}:`, err);
    }
  }

  /**
   * Get status
   */
  getStatus(storeId: string) {
    return this.statuses.get(storeId) || "disconnected";
  }

  /**
   * Get QR Code
   */
  getQRCode(storeId: string) {
    return this.qrCodes.get(storeId) || null;
  }

  /**
   * Send message
   */
  async sendMessage(storeId: string, phone: string, content: MessageContent) {
    const client = this.clients.get(storeId);
    if (!client || this.statuses.get(storeId) !== "connected") {
      throw new Error("WhatsApp client not connected");
    }

    // Format phone: remove spaces/plus, append @c.us
    const formattedPhone = phone.replace(/\D/g, "") + "@c.us";
    
    try {
      await client.sendMessage(formattedPhone, content);
      return { success: true };
    } catch (err) {
      console.error(`[WhatsApp] Failed to send message to ${phone}:`, err);
      throw err;
    }
  }

  /**
   * Disconnect
   */
  async disconnect(storeId: string) {
    const client = this.clients.get(storeId);
    if (client) {
      try {
        await client.logout();
        await client.destroy();
      } catch (err) {
        console.error(`[WhatsApp] Error during disconnect:`, err);
      }
      this.clients.delete(storeId);
      this.statuses.set(storeId, "disconnected");
      this.qrCodes.delete(storeId);
    }
  }
}

// Global singleton to survive HMR in dev
const globalForWhatsApp = global as unknown as { whatsappService: WhatsAppService };
export const whatsappService = globalForWhatsApp.whatsappService || new WhatsAppService();
if (process.env.NODE_ENV !== "production") globalForWhatsApp.whatsappService = whatsappService;
