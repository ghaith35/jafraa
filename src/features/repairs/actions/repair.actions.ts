"use server";

import { revalidatePath } from "next/cache";
import { prisma } from "@/lib/db";
import { getSession } from "@/lib/auth/session";
import { generateTicketNumber } from "@/lib/sequences/ticket-sequence";
import {
  createRepairTicketSchema,
  updateRepairStatusSchema,
  type CreateRepairTicketInput,
  type UpdateRepairStatusInput,
} from "../schemas/repair.schema";
import { Prisma, type RepairStatus } from "@prisma/client";
import { paginate } from "@/lib/pagination";

type ActionError = { error: string };

function normalizePhone(phone: string): string {
  return phone.replace(/[\s\-\(\)\.]/g, "");
}

function isDuplicateRecordError(error: unknown): boolean {
  return error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002";
}

export async function quickCreateRepairCustomer(data: {
  name: string;
  phone?: string;
  languagePreference?: "fr" | "ar" | "en";
}): Promise<ActionError | { customer: { id: string; name: string; phones: Array<{ phoneNumber: string }>; assets: [] } }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const name = data.name.trim();
  const phone = data.phone?.trim() ?? "";

  if (!name) return { error: "Le nom du client est requis" };
  if (name.length > 120) return { error: "Le nom est trop long" };
  if (phone && !/^\+?[\d\s\-\(\)\.]{7,20}$/.test(phone)) {
    return { error: "Format de numéro invalide" };
  }

  try {
    const customer = await prisma.$transaction(async (tx) => {
      const created = await tx.customer.create({
        data: {
          companyId: session.companyId,
          customerType: "named",
          name,
          languagePreference: data.languagePreference ?? "fr",
        },
        select: { id: true, name: true },
      });

      if (phone) {
        await tx.customerPhone.create({
          data: {
            companyId: session.companyId,
            customerId: created.id,
            phoneNumber: normalizePhone(phone),
            isPrimary: true,
          },
        });
      }

      return {
        id: created.id,
        name: created.name,
        phones: phone ? [{ phoneNumber: normalizePhone(phone) }] : [],
        assets: [] as [],
      };
    });

    revalidatePath("/dashboard/repairs/new");
    revalidatePath("/dashboard/customers");
    return { customer };
  } catch (error) {
    if (isDuplicateRecordError(error)) {
      return { error: "Ce numéro est déjà associé à un autre client" };
    }
    console.error("quickCreateRepairCustomer:", error);
    return { error: "Erreur lors de la création du client" };
  }
}

// ─── List ─────────────────────────────────────────────────────────────────────

export async function listRepairTickets(opts?: {
  storeId?: string;
  q?: string;
  status?: RepairStatus;
  page?: number;
  perPage?: number;
}) {
  const session = await getSession();
  if (!session) return { data: [], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const storeId = opts?.storeId ?? session.storeIds[0];
  if (!storeId) return { data: [], total: 0, page: 1, perPage: 50, totalPages: 0 };

  const page = opts?.page ?? 1;
  const perPage = opts?.perPage ?? 50;

  // Technician sees only assigned tickets (unless they created it and it's not assigned yet)
  // For simplicity: Technician only sees assigned tickets.
  const isTechnician = session.role === "Technician";

  const where: Prisma.RepairTicketWhereInput = {
    storeId,
      ...(isTechnician
        ? {
            OR: [
              { assignedTechnicianId: session.sub },
              { technicians: { some: { userId: session.sub } } },
            ],
          }
        : {}),
      ...(opts?.status ? { currentStatus: opts.status } : {}),
      ...(opts?.q
        ? {
            OR: [
              { ticketNumber: { contains: opts.q, mode: "insensitive" as const } },
              { customer: { name: { contains: opts.q, mode: "insensitive" as const } } },
              { customer: { phones: { some: { phoneNumber: { contains: opts.q } } } } },
            ],
          }
        : {}),
  };

  const [tickets, total] = await Promise.all([
    prisma.repairTicket.findMany({
      where,
      skip: (page - 1) * perPage,
      take: perPage,
      include: {
        customer: { select: { name: true, phones: { select: { phoneNumber: true } } } },
        customerDevice: { select: { customBrand: true, customModel: true, deviceTypeName: true } },
        deviceCategory: { select: { nameFr: true } },
        deviceBrand: { select: { name: true } },
        deviceFamily: { select: { name: true } },
        assignedTechnician: { select: { id: true, name: true } },
        technicians: { include: { user: { select: { id: true, name: true } } } },
        problems: { select: { problemText: true } },
      },
      orderBy: { createdAt: "desc" },
    }),
    prisma.repairTicket.count({ where }),
  ]);

  return paginate(
    tickets.map((t) => ({
      ...t,
      estimatedPrice: t.estimatedPrice ? Number(t.estimatedPrice) : null,
      finalPrice: t.finalPrice ? Number(t.finalPrice) : null,
    })),
    total,
    page,
    perPage
  );
}

// ─── Get one ──────────────────────────────────────────────────────────────────

export async function getRepairTicket(id: string) {
  const session = await getSession();
  if (!session) return null;

  const storeId = session.storeIds[0];
  if (!storeId) return null;

  const isTechnician = session.role === "Technician";

  const ticket = await prisma.repairTicket.findFirst({
    where: {
      id,
      storeId,
      ...(isTechnician
        ? {
            OR: [
              { assignedTechnicianId: session.sub },
              { technicians: { some: { userId: session.sub } } },
            ],
          }
        : {}),
    },
    include: {
      customer: { select: { name: true, phones: { select: { phoneNumber: true } }, address: true, wilayaCode: true, customerType: true } },
      customerDevice: true,
      deviceCategory: true,
      deviceBrand: true,
      deviceFamily: true,
      assignedTechnician: { select: { id: true, name: true } },
      technicians: { include: { user: { select: { id: true, name: true } } } },
      createdBy: { select: { name: true } },
      problems: true,
      statusHistory: {
        include: { changedBy: { select: { name: true } } },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!ticket) return null;

  return {
    ...ticket,
    estimatedPrice: ticket.estimatedPrice ? Number(ticket.estimatedPrice) : null,
    finalPrice: ticket.finalPrice ? Number(ticket.finalPrice) : null,
  };
}

// ─── Create ───────────────────────────────────────────────────────────────────

export async function createRepairTicket(
  data: CreateRepairTicketInput
): Promise<ActionError | { id: string }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const store = await prisma.store.findFirst({
    where: { id: storeId, companyId: session.companyId },
    select: { prefix: true },
  });
  if (!store) return { error: "Boutique introuvable" };

  const parsed = createRepairTicketSchema.safeParse(data);
  if (!parsed.success) {
    const first = Object.values(parsed.error.flatten().fieldErrors).flat()[0];
    return { error: first ?? "Données invalides" };
  }

  const d = parsed.data;

  const validatedCustomerId = d.customerId || null;

  if (validatedCustomerId) {
    const customer = await prisma.customer.findFirst({
      where: { id: validatedCustomerId, companyId: session.companyId, isArchived: false },
      select: { id: true },
    });
    if (!customer) return { error: "Client introuvable" };
  } else if (!d.walkInCustomer) {
    return { error: "Sélectionnez un client ou utilisez le client anonyme" };
  }

  if (d.customerDeviceId) {
    if (!validatedCustomerId) return { error: "Un appareil enregistré nécessite un client" };
    const asset = await prisma.customerAsset.findFirst({
      where: { id: d.customerDeviceId, customerId: validatedCustomerId, isArchived: false },
      select: { id: true },
    });
    if (!asset) return { error: "Appareil client introuvable" };
  }

  // Technicians auto-assign to themselves if they create it.
  let assignedTechnicianId = d.assignedTechnicianId || null;
  if (session.role === "Technician") {
    assignedTechnicianId = session.sub;
  }

  const initialStatus = d.initialStatus ?? "received";

  try {
    const result = await prisma.$transaction(async (tx) => {
      const ticketNumber = await generateTicketNumber(tx, storeId, store.prefix);

      let customerDeviceId = d.customerDeviceId || null;
      let ticketCustomerId = validatedCustomerId;

      if (!ticketCustomerId && d.walkInCustomer) {
        const existingWalkInCustomer = await tx.customer.findFirst({
          where: {
            companyId: session.companyId,
            customerType: "walkin",
            isArchived: false,
            name: { equals: "Client anonyme", mode: "insensitive" },
          },
          select: { id: true },
        });

        if (existingWalkInCustomer) {
          ticketCustomerId = existingWalkInCustomer.id;
        } else {
          const walkInCustomer = await tx.customer.create({
            data: {
              companyId: session.companyId,
              customerType: "walkin",
              name: "Client anonyme",
              languagePreference: "fr",
            },
            select: { id: true },
          });
          ticketCustomerId = walkInCustomer.id;
        }
      }

      if (!ticketCustomerId) throw new Error("Client introuvable");

      // When the intake wizard creates a new device for a named customer, save it
      // as a customer asset so the next repair can be opened in one click.
      // Walk-in / anonymous tickets keep the device details only on the ticket.
      let selectedCategoryKey: string | null = null;
      let selectedBrandName: string | null = null;

      if (d.deviceCategoryId) {
        const category = await tx.deviceCategory.findUnique({ where: { id: d.deviceCategoryId }, select: { key: true } });
        selectedCategoryKey = category?.key ?? null;
      }
      if (d.deviceBrandId) {
        const brand = await tx.deviceBrand.findUnique({ where: { id: d.deviceBrandId }, select: { name: true } });
        selectedBrandName = brand?.name ?? null;
      }

      if (validatedCustomerId && !customerDeviceId && (d.deviceCategoryId || d.deviceBrandId || d.deviceFamilyId || d.customDeviceBrand || d.customDeviceModel || d.imeiSerial)) {
        const asset = await tx.customerAsset.create({
          data: {
            customerId: validatedCustomerId,
            deviceCategoryId: d.deviceCategoryId || null,
            deviceBrandId: d.deviceBrandId || null,
            deviceModelFamilyId: d.deviceFamilyId || null,
            deviceTypeName: selectedCategoryKey,
            customBrand: d.customDeviceBrand || null,
            customModel: d.customDeviceModel || null,
            imeiSerial: d.imeiSerial || null,
            color: d.deviceColor || null,
            storage: d.deviceStorageRam || null,
          },
          select: { id: true },
        });
        customerDeviceId = asset.id;
      }

      // If the catalog did not contain the model, keep the ticket usable now and
      // create a pending suggestion so the owner can approve/merge it later.
      if (!d.deviceFamilyId && d.customDeviceModel?.trim()) {
        const existingPendingSuggestion = await tx.deviceCatalogSuggestion.findFirst({
          where: {
            companyId: session.companyId,
            storeId,
            status: "pending",
            modelName: { equals: d.customDeviceModel.trim(), mode: "insensitive" },
            ...(d.deviceCategoryId ? { categoryId: d.deviceCategoryId } : {}),
            ...(d.deviceBrandId ? { brandId: d.deviceBrandId } : {}),
          },
          select: { id: true },
        });

        if (!existingPendingSuggestion) {
          await tx.deviceCatalogSuggestion.create({
            data: {
              companyId: session.companyId,
              storeId,
              createdByUserId: session.sub,
              categoryId: d.deviceCategoryId || null,
              categoryKey: selectedCategoryKey,
              brandId: d.deviceBrandId || null,
              brandName: d.customDeviceBrand || selectedBrandName,
              modelName: d.customDeviceModel.trim(),
              printerType: d.printerType || null,
              seriesName: d.laptopSeriesName || null,
              modelLine: d.laptopModelLine || null,
              generation: d.laptopGeneration || null,
              processor: d.laptopProcessor || null,
              ram: d.laptopRam || null,
              storage: d.laptopDisk || d.deviceStorageRam || null,
              gpu: d.laptopGpu || null,
              notes: [
                d.diagnosisNote ? `Diagnostic: ${d.diagnosisNote}` : "",
                d.imeiSerial ? `Serial/IMEI: ${d.imeiSerial}` : "",
              ].filter(Boolean).join("\n") || null,
              source: "repair_intake",
              status: "pending",
            },
          });
        }
      }

      const ticket = await tx.repairTicket.create({
        data: {
          companyId: session.companyId,
          storeId,
          ticketNumber,
          customerId: ticketCustomerId,
          customerDeviceId,
          deviceCategoryId: d.deviceCategoryId || null,
          deviceBrandId: d.deviceBrandId || null,
          deviceFamilyId: d.deviceFamilyId || null,
          customDeviceBrand: d.customDeviceBrand || null,
          customDeviceModel: d.customDeviceModel || null,
          deviceColor: d.deviceColor || null,
          deviceStorageRam: d.deviceStorageRam || null,
          imeiSerial: d.imeiSerial || null,
          priority: d.priority,
          assignedTechnicianId,
          diagnosisNote: d.diagnosisNote || null,
          internalNotes: d.internalNotes || null,
          customerNotes: d.customerNotes || null,
          estimatedPrice: d.estimatedPrice ?? null,
          warrantyDays: d.warrantyDays ?? null,
          dueAt: d.dueAt ? new Date(d.dueAt) : null,
          createdByUserId: session.sub,
          currentStatus: initialStatus,
          problems: {
            create: d.problems.map((p) => ({
              problemText: p.problemText,
            })),
          },
        },
      });

      // Sync junction table: lead tech + any extra technicians
      const allTechnicianIds = new Set<string>();
      if (assignedTechnicianId) allTechnicianIds.add(assignedTechnicianId);
      for (const tid of d.technicianIds ?? []) {
        if (tid) allTechnicianIds.add(tid);
      }
      for (const userId of allTechnicianIds) {
        await tx.repairTicketTechnician.create({
          data: {
            repairTicketId: ticket.id,
            userId,
            role: userId === assignedTechnicianId ? "lead" : "support",
          },
        });
      }

      for (const selectedPart of d.selectedParts ?? []) {
        const part = await tx.part.findFirst({
          where: { id: selectedPart.partId, storeId, isArchived: false },
          select: { id: true, name: true, stockQty: true },
        });
        if (!part) {
          throw new Error("Pièce introuvable ou archivée");
        }

        const reserved = await tx.repairTicketPart.aggregate({
          where: { partId: part.id, storeId, status: "reserved" },
          _sum: { quantity: true },
        });
        const availableQty = part.stockQty - (reserved._sum.quantity || 0);
        if (selectedPart.quantity > availableQty) {
          throw new Error(`Stock insuffisant pour ${part.name}. Disponible: ${availableQty}`);
        }

        await tx.repairTicketPart.create({
          data: {
            companyId: session.companyId,
            storeId,
            repairTicketId: ticket.id,
            partId: part.id,
            quantity: selectedPart.quantity,
            status: "reserved",
            reservedByUserId: session.sub,
            note: selectedPart.note || null,
          },
        });
      }

      // Initial status history
      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: ticket.id,
          oldStatus: null,
          newStatus: initialStatus,
          changedByUserId: session.sub,
          note: "Création du ticket",
        },
      });

      return ticket;
    });

    revalidatePath("/dashboard/repairs");
    revalidatePath(`/dashboard/repairs/${result.id}`);

    return { id: result.id };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Erreur lors de la création du ticket";
    console.error("createRepairTicket:", e);
    return { error: message };
  }
}

// ─── Change Status ────────────────────────────────────────────────────────────

export async function changeRepairTicketStatus(
  id: string,
  data: UpdateRepairStatusInput
): Promise<ActionError | { success: boolean }> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  const isTechnician = session.role === "Technician";

  const ticket = await prisma.repairTicket.findFirst({
    where: {
      id,
      storeId,
      ...(isTechnician
        ? {
            OR: [
              { assignedTechnicianId: session.sub },
              { technicians: { some: { userId: session.sub } } },
            ],
          }
        : {}),
    },
    select: { id: true, currentStatus: true },
  });

  if (!ticket) return { error: "Ticket introuvable ou non autorisé" };

  const parsed = updateRepairStatusSchema.safeParse(data);
  if (!parsed.success) {
    return { error: "Statut invalide" };
  }

  const { newStatus, note } = parsed.data;

  if (ticket.currentStatus === newStatus) {
    return { success: true }; // No change
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.repairTicket.update({
        where: { id },
        data: { currentStatus: newStatus },
      });

      await tx.repairStatusHistory.create({
        data: {
          repairTicketId: id,
          oldStatus: ticket.currentStatus,
          newStatus,
          changedByUserId: session.sub,
          note: note || null,
        },
      });
    });

    revalidatePath("/dashboard/repairs");
    revalidatePath(`/dashboard/repairs/${id}`);

    return { success: true };
  } catch (e) {
    console.error("changeRepairTicketStatus:", e);
    return { error: "Erreur lors du changement de statut" };
  }
}

// ─── Assign Technician ────────────────────────────────────────────────────────

export async function assignTechnician(
  id: string,
  technicianId: string | null
): Promise<ActionError | void> {
  const session = await getSession();
  if (!session) return { error: "Non autorisé" };

  // Only Admin, Manager, Cashier can assign technicians
  if (session.role === "Technician") {
    return { error: "Action non autorisée" };
  }

  const storeId = session.storeIds[0];
  if (!storeId) return { error: "Aucune boutique assignée" };

  try {
    await prisma.$transaction(async (tx) => {
      await tx.repairTicket.update({
        where: { id, storeId },
        data: { assignedTechnicianId: technicianId },
      });

      // Sync junction table: upsert the lead tech, remove others
      await tx.repairTicketTechnician.deleteMany({
        where: { repairTicketId: id },
      });
      if (technicianId) {
        await tx.repairTicketTechnician.create({
          data: {
            repairTicketId: id,
            userId: technicianId,
            role: "lead",
          },
        });
      }
    });
    revalidatePath("/dashboard/repairs");
    revalidatePath(`/dashboard/repairs/${id}`);
  } catch (e) {
    console.error("assignTechnician:", e);
    return { error: "Erreur lors de l'assignation" };
  }
}
