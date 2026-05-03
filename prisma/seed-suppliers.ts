import { PrismaClient } from "@prisma/client";

export async function seedSuppliers(prisma: PrismaClient) {
  console.log("  Seeding suppliers...");

  // Assume demo store is created and we have the company ID
  const store = await prisma.store.findFirst({
    where: { name: "Boutique Principale" },
    select: { id: true, companyId: true },
  });

  if (!store) {
    console.log("    Skipped: Boutique Principale not found.");
    return;
  }

  const suppliers = [
    {
      name: "Fournisseur A (Écrans)",
      phone: "0555 11 22 33",
      address: "Alger Centre",
      notes: "Pièces de qualité originale",
    },
    {
      name: "Fournisseur B (Accessoires)",
      phone: "0777 44 55 66",
      address: "El Eulma",
      notes: "Gros volume, bons prix",
    },
    {
      name: "Fournisseur C (Outils)",
      phone: "0666 77 88 99",
      address: "Oran",
      notes: "",
    },
  ];

  let count = 0;
  for (const sup of suppliers) {
    const exists = await prisma.supplier.findFirst({
      where: { storeId: store.id, name: sup.name },
    });
    if (!exists) {
      await prisma.supplier.create({
        data: {
          companyId: store.companyId,
          storeId: store.id,
          name: sup.name,
          phone: sup.phone,
          address: sup.address,
          notes: sup.notes,
        },
      });
      count++;
    }
  }

  console.log(`    ✓ ${count} new suppliers added.`);
  console.log("  Suppliers seeded.");
}
