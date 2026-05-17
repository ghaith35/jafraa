import { PrismaClient, PlanCode, UserRole } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import { Pool } from "pg";
import * as dotenv from "dotenv";
import bcrypt from "bcryptjs";
import { seedCatalog } from "./seed-catalog";
import { seedExpandedLaptopCatalog } from "./seed-laptops-expanded";
import { seedExpandedPhoneCatalog } from "./seed-phones-expanded";
import { seedExpandedPrinterCatalog } from "./seed-printers-expanded";
import { seedInventory } from "./seed-inventory";
import { seedSuppliers } from "./seed-suppliers";
import { seedExpenseCategories } from "./seed-expense-categories";
import { seedServiceTypes } from "./seed-service-types";

// Prisma 7 requires an adapter — no implicit url from schema.prisma
dotenv.config();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

const SALT_ROUNDS = 12;

async function main() {
  console.log("Seeding database...");

  // ─── Plans ────────────────────────────────────────────────────────────────
  const plans: { code: PlanCode; name: string; maxStores: number | null }[] = [
    { code: "trial", name: "Essai gratuit (14 jours)", maxStores: 1 },
    { code: "single_store", name: "Boutique unique", maxStores: 1 },
    { code: "multi_store", name: "Multi-boutiques", maxStores: null },
  ];

  for (const plan of plans) {
    await prisma.plan.upsert({
      where: { code: plan.code },
      update: { name: plan.name, maxStores: plan.maxStores },
      create: {
        code: plan.code,
        name: plan.name,
        maxStores: plan.maxStores,
        featuresJson: {},
        isActive: true,
      },
    });
    console.log(`  Plan: ${plan.name}`);
  }

  // ─── Payment Methods (Cash only — MVP v1) ─────────────────────────────────
  await prisma.paymentMethod.upsert({
    where: { code: "cash" },
    update: { isActive: true, isDefault: true },
    create: {
      code: "cash",
      nameFr: "Espèces",
      nameAr: "نقداً",
      nameEn: "Cash",
      isActive: true,
      isDefault: true,
    },
  });
  console.log("  PaymentMethod: cash (Espèces)");

  // ─── Demo Company ─────────────────────────────────────────────────────────
  const demoCompany = await prisma.company.upsert({
    where: { id: "demo-company-001" },
    update: { name: "Demo Réparation" },
    create: {
      id: "demo-company-001",
      name: "Demo Réparation",
      phone: "0550000000",
      email: "contact@demo-reparation.dz",
    },
  });
  console.log(`  Company: ${demoCompany.name}`);

  // ─── Demo Store ───────────────────────────────────────────────────────────
  const demoStore = await prisma.store.upsert({
    where: { id: "demo-store-001" },
    update: { name: "Boutique Principale" },
    create: {
      id: "demo-store-001",
      companyId: demoCompany.id,
      name: "Boutique Principale",
      prefix: "ALG",
      address: "1 Rue de la République, Alger",
      phone: "0550000001",
      isActive: true,
    },
  });
  console.log(`  Store: ${demoStore.name}`);

  // ─── Demo Subscription (trial) ────────────────────────────────────────────
  const trialPlan = await prisma.plan.findUniqueOrThrow({
    where: { code: "trial" },
  });

  const existingSub = await prisma.companySubscription.findFirst({
    where: { companyId: demoCompany.id },
  });
  if (!existingSub) {
    await prisma.companySubscription.create({
      data: {
        companyId: demoCompany.id,
        planId: trialPlan.id,
        status: "trial",
        expiresAt: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
      },
    });
    console.log("  Subscription: trial (14 days)");
  }

  // ─── Store Settings ───────────────────────────────────────────────────────
  await prisma.storeSettings.upsert({
    where: { storeId: demoStore.id },
    update: {},
    create: { storeId: demoStore.id, updatedBy: "seed" },
  });
  console.log("  StoreSettings: created");

  // ─── Demo Users ───────────────────────────────────────────────────────────
  const demoPassword = await bcrypt.hash("ghaith$", SALT_ROUNDS);

  const demoUsers: {
    id: string;
    email: string;
    name: string;
    role: UserRole;
  }[] = [
    { id: "demo-user-admin", email: "gayethtayem@gmail.com", name: "Amina Admin", role: "Admin" },
    { id: "demo-user-manager", email: "manager@demo.repaire", name: "Mourad Manager", role: "Manager" },
    { id: "demo-user-cashier", email: "cashier@demo.repaire", name: "Chafia Caissier", role: "Cashier" },
    { id: "demo-user-tech", email: "tech@demo.repaire", name: "Tarek Technicien", role: "Technician" },
  ];

  for (const u of demoUsers) {
    const user = await prisma.user.upsert({
      where: { id: u.id },
      update: { name: u.name, email: u.email, role: u.role, passwordHash: demoPassword },
      create: {
        id: u.id,
        companyId: demoCompany.id,
        email: u.email,
        name: u.name,
        passwordHash: demoPassword,
        role: u.role,
        isActive: true,
      },
    });

    // Grant access to the demo store
    await prisma.userStoreAccess.upsert({
      where: { userId_storeId: { userId: user.id, storeId: demoStore.id } },
      update: {},
      create: { userId: user.id, storeId: demoStore.id },
    });

    console.log(`  User: ${u.email} (${u.role})`);
  }

  // ─── Device Catalog (Block 6) ───────────────────────────────────────────────
  await seedCatalog(prisma);
  await seedExpandedLaptopCatalog(prisma);
  await seedExpandedPhoneCatalog(prisma);
  await seedExpandedPrinterCatalog(prisma);

  // ─── Inventory Catalog (Block 7) ─────────────────────────────────────────────
  await seedInventory(prisma);

  // ─── Suppliers (Block 8) ─────────────────────────────────────────────────────
  await seedSuppliers(prisma);

  // ─── Expense Categories (Block 18) ────────────────────────────────────────────
  await seedExpenseCategories(prisma);

  // ─── Service Types ────────────────────────────────────────────────────────────
  await seedServiceTypes(prisma);

  console.log("\nSeed complete.");
  console.log("\nDemo credentials (password: ghaith$):");
  for (const u of demoUsers) {
    console.log(`  ${u.role.padEnd(12)} ${u.email}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
