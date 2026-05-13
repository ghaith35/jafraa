import { PrismaClient } from "@prisma/client";

// Brand logo URLs using simpleicons.org CDN (free, open-source brand SVG icons)
const BRAND_LOGOS: Record<string, string> = {
  "Apple": "https://cdn.simpleicons.org/apple/555555",
  "Samsung": "https://cdn.simpleicons.org/samsung/1428A0",
  "Xiaomi": "https://cdn.simpleicons.org/xiaomi/FF6900",
  "Redmi": "https://cdn.simpleicons.org/xiaomi/FF6900",
  "Poco": "https://cdn.simpleicons.org/poco/F5A623",
  "Oppo": "https://cdn.simpleicons.org/oppo/1B6B4A",
  "Realme": "https://cdn.simpleicons.org/realme/FF6C37",
  "Infinix": "https://cdn.simpleicons.org/infinix/000000",
  "Tecno": "https://cdn.simpleicons.org/tecno/0E0E0E",
  "Itel": "https://cdn.simpleicons.org/itel/000000",
  "Huawei": "https://cdn.simpleicons.org/huawei/FF0000",
  "Honor": "https://cdn.simpleicons.org/honor/000000",
  "Vivo": "https://cdn.simpleicons.org/vivo/415FFF",
  "Condor": "https://cdn.simpleicons.org/condor/000000",
  "HP": "https://cdn.simpleicons.org/hp/0096D6",
  "Dell": "https://cdn.simpleicons.org/dell/007DB8",
  "Lenovo": "https://cdn.simpleicons.org/lenovo/E2231A",
  "Acer": "https://cdn.simpleicons.org/acer/3AB54A",
  "Asus": "https://cdn.simpleicons.org/asus/000000",
  "MSI": "https://cdn.simpleicons.org/msi/FF0000",
  "Toshiba": "https://cdn.simpleicons.org/toshiba/0099E5",
  "Microsoft Surface": "https://cdn.simpleicons.org/microsoft/00A4EF",
  "Thomson": "https://cdn.simpleicons.org/thomson/0095D5",
  "Epson": "https://cdn.simpleicons.org/epson/003366",
  "Canon": "https://cdn.simpleicons.org/canon/002473",
  "Brother": "https://cdn.simpleicons.org/brother/003399",
  "Xerox": "https://cdn.simpleicons.org/xerox/003F7D",
  "Ricoh": "https://cdn.simpleicons.org/ricoh/000000",
  "Kyocera": "https://cdn.simpleicons.org/kyocera/FF0000",
  "Pantum": "https://cdn.simpleicons.org/pantum/00A3E0",
  "Sony PlayStation": "https://cdn.simpleicons.org/playstation/003791",
  "Microsoft Xbox": "https://cdn.simpleicons.org/xbox/107C10",
  "Nintendo": "https://cdn.simpleicons.org/nintendo/E60012",
  "Steam Deck": "https://cdn.simpleicons.org/steam/000000",
  "Apple iPad": "https://cdn.simpleicons.org/apple/555555",
  "Samsung Galaxy Tab": "https://cdn.simpleicons.org/samsung/1428A0",
  "Lenovo Tab": "https://cdn.simpleicons.org/lenovo/E2231A",
  "Huawei MatePad": "https://cdn.simpleicons.org/huawei/FF0000",
  "Xiaomi Pad": "https://cdn.simpleicons.org/xiaomi/FF6900",
  "Honor Pad": "https://cdn.simpleicons.org/honor/000000",
  "Oppo Pad": "https://cdn.simpleicons.org/oppo/1B6B4A",
  "Realme Pad": "https://cdn.simpleicons.org/realme/FF6C37",
  "Toshiba / Dynabook": "https://cdn.simpleicons.org/toshiba/0099E5",
};

export async function seedBrandLogos(prisma: PrismaClient) {
  let updated = 0;
  for (const [brandName, logoUrl] of Object.entries(BRAND_LOGOS)) {
    const brands = await prisma.deviceBrand.findMany({
      where: { name: { startsWith: brandName, mode: "insensitive" }, isGlobalDefault: true },
    });
    for (const brand of brands) {
      await prisma.deviceBrand.update({
        where: { id: brand.id },
        data: { logoUrl },
      });
      updated++;
    }
  }
  console.log(`  BrandLogos: ${updated} brands updated with logo URLs`);
}
