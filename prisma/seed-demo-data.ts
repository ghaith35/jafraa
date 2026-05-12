import { PrismaClient, UserRole, type Prisma } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";

dotenv.config();

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SALT_ROUNDS = 12;
const DEMO_COMPANY_ID = "demo-company-001";
const DEMO_STORE_ID = "demo-store-001";

type DemoUser = {
  id: string;
  email: string;
  name: string;
  role: UserRole;
};

const DEMO_USERS: DemoUser[] = [
  { id: "demo-user-admin", email: "gayethtayem@gmail.com", name: "Amina Admin", role: "Admin" },
  { id: "demo-user-manager", email: "manager@demo.repaire", name: "Mourad Manager", role: "Manager" },
  { id: "demo-user-cashier", email: "cashier@demo.repaire", name: "Chafia Caissier", role: "Cashier" },
  { id: "demo-user-tech", email: "tech@demo.repaire", name: "Tarek Technicien", role: "Technician" },
];

const PRODUCT_CATEGORY_PATHS = [
  "Cables",
  "Cables > Network",
  "Cables > Network > Ethernet",
  "Cables > Charging",
  "Cables > Audio",
  "Storage",
  "Storage > SSD",
  "Storage > USB Flash",
  "Printer Supplies",
  "Printer Supplies > Ink",
  "Printer Supplies > Toner",
  "Chargers",
  "Chargers > USB-C",
  "Chargers > Laptop",
];

const PART_CATEGORY_PATHS = [
  "Phone Screens",
  "Phone Batteries",
  "Charging Ports",
  "Laptop Keyboards",
  "Printer Rollers",
  "Printer Heads",
  "Printer Toner",
];

const DEMO_PRODUCTS: Array<{
  sku: string;
  name: string;
  categoryPath: string;
  brand: string;
  modelReference: string;
  barcode: string;
  sellingPrice: number;
  stockQty: number;
  lowStockThreshold: number;
}> = [
  { sku: "PRD-DEMO-0001", name: "Ethernet Cable", categoryPath: "Cables > Network > Ethernet", brand: "UGREEN", modelReference: "1.5m Cat6", barcode: "3700000000012", sellingPrice: 900, stockQty: 22, lowStockThreshold: 8 },
  { sku: "PRD-DEMO-0002", name: "Ethernet Cable", categoryPath: "Cables > Network > Ethernet", brand: "TP-Link", modelReference: "3m Cat6", barcode: "3700000000029", sellingPrice: 1200, stockQty: 9, lowStockThreshold: 7 },
  { sku: "PRD-DEMO-0003", name: "USB-C Cable", categoryPath: "Cables > Charging", brand: "Anker", modelReference: "1m 60W", barcode: "3700000000036", sellingPrice: 1500, stockQty: 30, lowStockThreshold: 10 },
  { sku: "PRD-DEMO-0004", name: "USB-C Cable", categoryPath: "Cables > Charging", brand: "Baseus", modelReference: "2m 100W", barcode: "3700000000043", sellingPrice: 1900, stockQty: 6, lowStockThreshold: 8 },
  { sku: "PRD-DEMO-0005", name: "Audio Aux Cable", categoryPath: "Cables > Audio", brand: "Sony", modelReference: "1.5m 3.5mm", barcode: "3700000000050", sellingPrice: 800, stockQty: 17, lowStockThreshold: 6 },
  { sku: "PRD-DEMO-0006", name: "Portable SSD", categoryPath: "Storage > SSD", brand: "Samsung", modelReference: "1TB T7", barcode: "3700000000067", sellingPrice: 18500, stockQty: 5, lowStockThreshold: 4 },
  { sku: "PRD-DEMO-0007", name: "Portable SSD", categoryPath: "Storage > SSD", brand: "Kingston", modelReference: "512GB XS1000", barcode: "3700000000074", sellingPrice: 10500, stockQty: 12, lowStockThreshold: 5 },
  { sku: "PRD-DEMO-0008", name: "USB Flash Drive", categoryPath: "Storage > USB Flash", brand: "SanDisk", modelReference: "128GB USB 3.2", barcode: "3700000000081", sellingPrice: 2100, stockQty: 28, lowStockThreshold: 10 },
  { sku: "PRD-DEMO-0009", name: "USB Flash Drive", categoryPath: "Storage > USB Flash", brand: "Kingston", modelReference: "64GB USB 3.2", barcode: "3700000000098", sellingPrice: 1300, stockQty: 4, lowStockThreshold: 6 },
  { sku: "PRD-DEMO-0010", name: "Ink Cartridge", categoryPath: "Printer Supplies > Ink", brand: "HP", modelReference: "HP 305 Black", barcode: "3700000000104", sellingPrice: 4200, stockQty: 11, lowStockThreshold: 5 },
  { sku: "PRD-DEMO-0011", name: "Ink Cartridge", categoryPath: "Printer Supplies > Ink", brand: "Canon", modelReference: "PG-445 Black", barcode: "3700000000111", sellingPrice: 3900, stockQty: 7, lowStockThreshold: 5 },
  { sku: "PRD-DEMO-0012", name: "Toner Cartridge", categoryPath: "Printer Supplies > Toner", brand: "Brother", modelReference: "TN-760", barcode: "3700000000128", sellingPrice: 7800, stockQty: 3, lowStockThreshold: 4 },
  { sku: "PRD-DEMO-0013", name: "Toner Cartridge", categoryPath: "Printer Supplies > Toner", brand: "HP", modelReference: "85A CE285A", barcode: "3700000000135", sellingPrice: 7400, stockQty: 9, lowStockThreshold: 4 },
  { sku: "PRD-DEMO-0014", name: "USB-C Charger", categoryPath: "Chargers > USB-C", brand: "Anker", modelReference: "30W", barcode: "3700000000142", sellingPrice: 3200, stockQty: 14, lowStockThreshold: 6 },
  { sku: "PRD-DEMO-0015", name: "USB-C Charger", categoryPath: "Chargers > USB-C", brand: "Baseus", modelReference: "65W GaN", barcode: "3700000000159", sellingPrice: 5900, stockQty: 8, lowStockThreshold: 5 },
  { sku: "PRD-DEMO-0016", name: "Laptop Charger", categoryPath: "Chargers > Laptop", brand: "Dell", modelReference: "65W Type-C", barcode: "3700000000166", sellingPrice: 6500, stockQty: 5, lowStockThreshold: 5 },
  { sku: "PRD-DEMO-0017", name: "Laptop Charger", categoryPath: "Chargers > Laptop", brand: "HP", modelReference: "90W Barrel", barcode: "3700000000173", sellingPrice: 6700, stockQty: 2, lowStockThreshold: 4 },
  { sku: "PRD-DEMO-0018", name: "Network Patch Panel", categoryPath: "Cables > Network", brand: "D-Link", modelReference: "24 Port Cat6", barcode: "3700000000180", sellingPrice: 4800, stockQty: 6, lowStockThreshold: 3 },
];

const DEMO_PARTS: Array<{
  sku: string;
  name: string;
  categoryPath: string;
  brand: string;
  modelReference: string;
  sellingPrice: number;
  stockQty: number;
  lowStockThreshold: number;
}> = [
  { sku: "PRT-DEMO-1001", name: "iPhone 14 OLED Screen", categoryPath: "Phone Screens", brand: "Apple", modelReference: "iPhone 14", sellingPrice: 24500, stockQty: 3, lowStockThreshold: 3 },
  { sku: "PRT-DEMO-1002", name: "Galaxy A15 Screen", categoryPath: "Phone Screens", brand: "Samsung", modelReference: "Galaxy A15", sellingPrice: 12500, stockQty: 7, lowStockThreshold: 3 },
  { sku: "PRT-DEMO-1003", name: "iPhone 14 Battery", categoryPath: "Phone Batteries", brand: "Apple", modelReference: "iPhone 14", sellingPrice: 9000, stockQty: 6, lowStockThreshold: 4 },
  { sku: "PRT-DEMO-1004", name: "Type-C Charging Port", categoryPath: "Charging Ports", brand: "Generic", modelReference: "Samsung A Series", sellingPrice: 4800, stockQty: 10, lowStockThreshold: 5 },
  { sku: "PRT-DEMO-1005", name: "Laptop Keyboard", categoryPath: "Laptop Keyboards", brand: "Lenovo", modelReference: "ThinkPad E14", sellingPrice: 7200, stockQty: 4, lowStockThreshold: 3 },
  { sku: "PRT-DEMO-1006", name: "Laser Printer Roller", categoryPath: "Printer Rollers", brand: "HP", modelReference: "M404", sellingPrice: 3900, stockQty: 8, lowStockThreshold: 4 },
];

const DEMO_CUSTOMERS = [
  { id: "demo-customer-001", name: "Karim Benali", phone: "0550100001", languagePreference: "fr" as const },
  { id: "demo-customer-002", name: "Nadia Touati", phone: "0550100002", languagePreference: "ar" as const },
  { id: "demo-customer-003", name: "Samir Haddad", phone: "0550100003", languagePreference: "fr" as const },
  { id: "demo-customer-004", name: "Lina Rahmani", phone: "0550100004", languagePreference: "en" as const },
  { id: "demo-customer-005", name: "Youssef Merabet", phone: "0550100005", languagePreference: "fr" as const },
  { id: "demo-customer-006", name: "Imane Kaci", phone: "0550100006", languagePreference: "ar" as const },
  { id: "demo-customer-007", name: "Walid Mansouri", phone: "0550100007", languagePreference: "fr" as const },
  { id: "demo-customer-008", name: "Sara Benaissa", phone: "0550100008", languagePreference: "fr" as const },
];

const DEMO_SUPPLIERS = [
  { id: "demo-supplier-001", name: "TechSource Algeria", phone: "0661000001", address: "Alger", notes: "Cables and chargers" },
  { id: "demo-supplier-002", name: "PrintPro Distribution", phone: "0661000002", address: "Oran", notes: "Printer ink and toner" },
  { id: "demo-supplier-003", name: "Mobile Parts Hub", phone: "0661000003", address: "Constantine", notes: "Phone parts and screens" },
];

async function ensureBase() {
  const passwordHash = await bcrypt.hash("ghaith$", SALT_ROUNDS);

  const company = await prisma.company.upsert({
    where: { id: DEMO_COMPANY_ID },
    update: { name: "Demo Réparation" },
    create: {
      id: DEMO_COMPANY_ID,
      name: "Demo Réparation",
      phone: "0550000000",
      email: "contact@demo-reparation.dz",
    },
  });

  const store = await prisma.store.upsert({
    where: { id: DEMO_STORE_ID },
    update: { name: "Boutique Principale" },
    create: {
      id: DEMO_STORE_ID,
      companyId: company.id,
      name: "Boutique Principale",
      prefix: "ALG",
      address: "1 Rue de la République, Alger",
      phone: "0550000001",
      isActive: true,
    },
  });

  for (const user of DEMO_USERS) {
    const created = await prisma.user.upsert({
      where: { id: user.id },
      update: {
        email: user.email,
        name: user.name,
        role: user.role,
        isActive: true,
        passwordHash,
      },
      create: {
        id: user.id,
        companyId: company.id,
        email: user.email,
        name: user.name,
        passwordHash,
        role: user.role,
        isActive: true,
      },
    });

    await prisma.userStoreAccess.upsert({
      where: { userId_storeId: { userId: created.id, storeId: store.id } },
      update: {},
      create: { userId: created.id, storeId: store.id },
    });
  }

  return { company, store };
}

async function ensureInventoryCategories(storeId: string) {
  for (const path of PRODUCT_CATEGORY_PATHS) {
    await prisma.inventoryCategory.upsert({
      where: {
        storeId_itemType_name: { storeId, itemType: "product", name: path },
      },
      update: { isActive: true },
      create: {
        storeId,
        itemType: "product",
        name: path,
        isActive: true,
      },
    });
  }

  for (const path of PART_CATEGORY_PATHS) {
    await prisma.inventoryCategory.upsert({
      where: {
        storeId_itemType_name: { storeId, itemType: "part", name: path },
      },
      update: { isActive: true },
      create: {
        storeId,
        itemType: "part",
        name: path,
        isActive: true,
      },
    });
  }
}

async function ensureProducts(storeId: string) {
  const categories = await prisma.inventoryCategory.findMany({
    where: { storeId, itemType: "product" },
    select: { id: true, name: true },
  });
  const byName = new Map(categories.map((c) => [c.name, c.id]));

  for (const item of DEMO_PRODUCTS) {
    await prisma.product.upsert({
      where: { storeId_sku: { storeId, sku: item.sku } },
      update: {
        categoryId: byName.get(item.categoryPath) ?? null,
        name: item.name,
        barcode: item.barcode,
        brand: item.brand,
        modelReference: item.modelReference,
        sellingPrice: item.sellingPrice,
        stockQty: item.stockQty,
        lowStockThreshold: item.lowStockThreshold,
        isArchived: false,
      },
      create: {
        storeId,
        categoryId: byName.get(item.categoryPath) ?? null,
        name: item.name,
        sku: item.sku,
        barcode: item.barcode,
        brand: item.brand,
        modelReference: item.modelReference,
        sellingPrice: item.sellingPrice,
        stockQty: item.stockQty,
        lowStockThreshold: item.lowStockThreshold,
      },
    });
  }
}

async function ensureParts(storeId: string) {
  const categories = await prisma.inventoryCategory.findMany({
    where: { storeId, itemType: "part" },
    select: { id: true, name: true },
  });
  const byName = new Map(categories.map((c) => [c.name, c.id]));

  for (const item of DEMO_PARTS) {
    await prisma.part.upsert({
      where: { storeId_sku: { storeId, sku: item.sku } },
      update: {
        categoryId: byName.get(item.categoryPath) ?? null,
        name: item.name,
        brand: item.brand,
        modelReference: item.modelReference,
        sellingPrice: item.sellingPrice,
        stockQty: item.stockQty,
        lowStockThreshold: item.lowStockThreshold,
        isArchived: false,
      },
      create: {
        storeId,
        categoryId: byName.get(item.categoryPath) ?? null,
        name: item.name,
        sku: item.sku,
        brand: item.brand,
        modelReference: item.modelReference,
        sellingPrice: item.sellingPrice,
        stockQty: item.stockQty,
        lowStockThreshold: item.lowStockThreshold,
      },
    });
  }
}

async function ensureCustomers(companyId: string) {
  for (const customer of DEMO_CUSTOMERS) {
    await prisma.customer.upsert({
      where: { id: customer.id },
      update: {
        name: customer.name,
        languagePreference: customer.languagePreference,
        isArchived: false,
      },
      create: {
        id: customer.id,
        companyId,
        customerType: "named",
        name: customer.name,
        languagePreference: customer.languagePreference,
      },
    });

    await prisma.customerPhone.upsert({
      where: {
        companyId_phoneNumber: {
          companyId,
          phoneNumber: customer.phone,
        },
      },
      update: { customerId: customer.id, isPrimary: true },
      create: {
        companyId,
        customerId: customer.id,
        phoneNumber: customer.phone,
        isPrimary: true,
      },
    });
  }
}

async function ensureSuppliers(companyId: string, storeId: string) {
  for (const supplier of DEMO_SUPPLIERS) {
    await prisma.supplier.upsert({
      where: { id: supplier.id },
      update: {
        name: supplier.name,
        phone: supplier.phone,
        address: supplier.address,
        notes: supplier.notes,
        isArchived: false,
      },
      create: {
        id: supplier.id,
        companyId,
        storeId,
        name: supplier.name,
        phone: supplier.phone,
        address: supplier.address,
        notes: supplier.notes,
      },
    });
  }
}

async function ensurePurchaseOrders(companyId: string, storeId: string) {
  const adminUserId = "demo-user-admin";
  const products = await prisma.product.findMany({
    where: { storeId, sku: { in: ["PRD-DEMO-0004", "PRD-DEMO-0006", "PRD-DEMO-0012", "PRD-DEMO-0017"] } },
    select: { id: true, sku: true, name: true },
  });
  const parts = await prisma.part.findMany({
    where: { storeId, sku: { in: ["PRT-DEMO-1001", "PRT-DEMO-1003"] } },
    select: { id: true, sku: true, name: true },
  });
  const productBySku = new Map(products.map((p) => [p.sku, p]));
  const partBySku = new Map(parts.map((p) => [p.sku, p]));

  const orders: Array<{
    id: string;
    orderNumber: string;
    supplierId: string;
    status: string;
    expectedAt?: Date;
    lines: Array<{
      itemType: "product" | "part";
      sku: string;
      quantity: number;
      unitCost: number;
    }>;
  }> = [
    {
      id: "demo-po-001",
      orderNumber: "PO-DEMO-0001",
      supplierId: "demo-supplier-001",
      status: "draft",
      expectedAt: new Date(Date.now() + 3 * 86400000),
      lines: [
        { itemType: "product", sku: "PRD-DEMO-0004", quantity: 30, unitCost: 1200 },
        { itemType: "product", sku: "PRD-DEMO-0017", quantity: 10, unitCost: 4500 },
      ],
    },
    {
      id: "demo-po-002",
      orderNumber: "PO-DEMO-0002",
      supplierId: "demo-supplier-003",
      status: "sent",
      expectedAt: new Date(Date.now() + 5 * 86400000),
      lines: [
        { itemType: "part", sku: "PRT-DEMO-1001", quantity: 8, unitCost: 18000 },
        { itemType: "part", sku: "PRT-DEMO-1003", quantity: 10, unitCost: 5200 },
      ],
    },
    {
      id: "demo-po-003",
      orderNumber: "PO-DEMO-0003",
      supplierId: "demo-supplier-002",
      status: "confirmed",
      expectedAt: new Date(Date.now() + 7 * 86400000),
      lines: [
        { itemType: "product", sku: "PRD-DEMO-0012", quantity: 20, unitCost: 5000 },
      ],
    },
  ];

  for (const order of orders) {
    const subtotal = order.lines.reduce((sum, line) => sum + line.quantity * line.unitCost, 0);
    await prisma.purchaseOrder.upsert({
      where: { storeId_orderNumber: { storeId, orderNumber: order.orderNumber } },
      update: {
        supplierId: order.supplierId,
        status: order.status,
        expectedAt: order.expectedAt,
        subtotalAmount: subtotal,
      },
      create: {
        id: order.id,
        companyId,
        storeId,
        supplierId: order.supplierId,
        orderNumber: order.orderNumber,
        status: order.status,
        expectedAt: order.expectedAt,
        subtotalAmount: subtotal,
        createdByUserId: adminUserId,
      },
    });

    const createdOrder = await prisma.purchaseOrder.findUniqueOrThrow({
      where: { storeId_orderNumber: { storeId, orderNumber: order.orderNumber } },
      select: { id: true },
    });

    await prisma.purchaseOrderLine.deleteMany({
      where: { purchaseOrderId: createdOrder.id },
    });

    for (const line of order.lines) {
      const item = line.itemType === "product" ? productBySku.get(line.sku) : partBySku.get(line.sku);
      if (!item) continue;

      await prisma.purchaseOrderLine.create({
        data: {
          purchaseOrderId: createdOrder.id,
          itemType: line.itemType,
          productId: line.itemType === "product" ? item.id : null,
          partId: line.itemType === "part" ? item.id : null,
          description: item.name,
          quantity: line.quantity,
          unitCost: line.unitCost,
          totalCost: line.quantity * line.unitCost,
        },
      });
    }
  }
}

async function ensureRepairTickets(companyId: string, storeId: string) {
  const customerIds = DEMO_CUSTOMERS.map((c) => c.id);
  const techUserId = "demo-user-tech";
  const managerUserId = "demo-user-manager";

  const statuses: Prisma.RepairTicketCreateInput["currentStatus"][] = [
    "received",
    "in_diagnosis",
    "waiting_customer_approval",
    "in_repair",
    "ready_for_pickup",
    "completed",
    "not_repaired",
  ];

  const tickets = Array.from({ length: 14 }).map((_, idx) => {
    const n = idx + 1;
    const status = statuses[idx % statuses.length];
    const customerId = customerIds[idx % customerIds.length];
    return {
      id: `demo-repair-${String(n).padStart(3, "0")}`,
      ticketNumber: `ALG-REP-${String(n).padStart(4, "0")}`,
      customerId,
      status,
      createdAt: new Date(Date.now() - (14 - n) * 86400000),
      estimatedPrice: 1500 + n * 700,
      finalPrice: status === "completed" ? 1800 + n * 700 : null,
      note: n % 2 ? "Diagnostic en attente de validation client." : "Remplacement pièce + tests.",
    };
  });

  for (const ticket of tickets) {
    await prisma.repairTicket.upsert({
      where: {
        storeId_ticketNumber: {
          storeId,
          ticketNumber: ticket.ticketNumber,
        },
      },
      update: {
        customerId: ticket.customerId,
        currentStatus: ticket.status,
        assignedTechnicianId: techUserId,
        createdByUserId: managerUserId,
        diagnosisNote: ticket.note,
        estimatedPrice: ticket.estimatedPrice,
        finalPrice: ticket.finalPrice,
      },
      create: {
        id: ticket.id,
        companyId,
        storeId,
        ticketNumber: ticket.ticketNumber,
        customerId: ticket.customerId,
        currentStatus: ticket.status,
        assignedTechnicianId: techUserId,
        createdByUserId: managerUserId,
        diagnosisNote: ticket.note,
        estimatedPrice: ticket.estimatedPrice,
        finalPrice: ticket.finalPrice,
        createdAt: ticket.createdAt,
      },
    });
  }
}

async function main() {
  console.log("Seeding demo showcase data...");

  const { company, store } = await ensureBase();
  await ensureInventoryCategories(store.id);
  await ensureProducts(store.id);
  await ensureParts(store.id);
  await ensureCustomers(company.id);
  await ensureSuppliers(company.id, store.id);
  await ensurePurchaseOrders(company.id, store.id);
  await ensureRepairTickets(company.id, store.id);

  console.log("Demo showcase seed complete.");
  console.log("Login credentials: gayethtayem@gmail.com / ghaith$");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
