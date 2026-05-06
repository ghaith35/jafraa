import { prisma } from "@/lib/db";

export async function getRepairIntakeData(companyId: string, storeId: string) {
  const [customers, technicians, catalog] = await Promise.all([
    prisma.customer.findMany({
      where: { companyId, isArchived: false },
      select: {
        id: true,
        name: true,
        phones: { select: { phoneNumber: true }, take: 1 },
        assets: {
          where: { isArchived: false },
          select: {
            id: true,
            deviceCategoryId: true,
            deviceBrandId: true,
            deviceModelFamilyId: true,
            customBrand: true,
            customModel: true,
            deviceTypeName: true,
            imeiSerial: true,
            color: true,
            storage: true,
          },
          orderBy: { createdAt: "desc" },
        },
      },
      orderBy: { name: "asc" },
    }),
    prisma.user.findMany({
      where: {
        companyId,
        storeAccess: { some: { storeId } },
        role: { in: ["Technician", "Manager", "Admin"] },
        isActive: true,
        isArchived: false,
      },
      select: { id: true, name: true },
      orderBy: { name: "asc" },
    }),
    prisma.deviceCategory.findMany({
      where: { isActive: true },
      select: {
        id: true,
        key: true,
        nameFr: true,
        nameAr: true,
        nameEn: true,
        brands: {
          where: {
            isActive: true,
            OR: [
              { isGlobalDefault: true },
              { companyId, storeId },
              { companyId, storeId: null },
            ],
          },
          select: {
            id: true,
            name: true,
            modelFamilies: {
              where: {
                isActive: true,
                OR: [
                  { isGlobalDefault: true },
                  { companyId, storeId },
                  { companyId, storeId: null },
                ],
              },
              select: { id: true, name: true },
              orderBy: { sortOrder: "asc" },
            },
          },
          orderBy: { sortOrder: "asc" },
        },
      },
      orderBy: { sortOrder: "asc" },
    }),
  ]);

  return { customers, technicians, catalog };
}

export type RepairIntakeData = Awaited<ReturnType<typeof getRepairIntakeData>>;
