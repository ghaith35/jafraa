"use server";

import { prisma } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const catSchema = z.object({
  key: z.string().min(1).max(50),
  nameFr: z.string().min(1).max(200),
  nameAr: z.string().max(200).default(""),
  nameEn: z.string().max(200).default(""),
  sortOrder: z.number().int().default(0),
});

export async function createCategory(data: z.infer<typeof catSchema>) {
  const p = catSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceCategory.create({ data: { ...p.data, isActive: true } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function updateCategory(id: string, data: z.infer<typeof catSchema>) {
  const p = catSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceCategory.update({ where: { id }, data: p.data });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function deleteCategory(id: string) {
  const exists = await prisma.deviceCategory.findUnique({ where: { id }, select: { id: true } });
  if (!exists) return { error: "Catégorie introuvable" };
  try {
    await prisma.deviceCategory.delete({ where: { id } });
  } catch {
    return { error: "Impossible de supprimer : la catégorie contient des marques liées" };
  }
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

const brandSchema = z.object({
  name: z.string().min(1).max(200),
  categoryId: z.string().min(1),
  logoUrl: z.string().max(500).optional(),
  sortOrder: z.number().int().default(0),
});

export async function createBrand(data: z.infer<typeof brandSchema>) {
  const p = brandSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceBrand.create({ data: { ...p.data, isGlobalDefault: false, isActive: true } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function updateBrand(id: string, data: z.infer<typeof brandSchema>) {
  const p = brandSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceBrand.update({ where: { id }, data: { name: p.data.name, categoryId: p.data.categoryId, logoUrl: p.data.logoUrl, sortOrder: p.data.sortOrder } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function deleteBrand(id: string) {
  const exists = await prisma.deviceBrand.findUnique({ where: { id }, select: { id: true } });
  if (!exists) return { error: "Marque introuvable" };
  try {
    await prisma.deviceBrand.delete({ where: { id } });
  } catch {
    return { error: "Impossible de supprimer : la marque contient des familles liées" };
  }
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

const familySchema = z.object({ name: z.string().min(1).max(200), brandId: z.string().min(1), sortOrder: z.number().int().default(0) });
export async function createFamily(data: z.infer<typeof familySchema>) {
  const p = familySchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceModelFamily.create({ data: { ...p.data, isGlobalDefault: true, isActive: true } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}
export async function updateFamily(id: string, data: z.infer<typeof familySchema>) {
  const p = familySchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceModelFamily.update({ where: { id }, data: p.data });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}
export async function deleteFamily(id: string) {
  const exists = await prisma.deviceModelFamily.findUnique({ where: { id }, select: { id: true } });
  if (!exists) return { error: "Famille introuvable" };
  try {
    await prisma.deviceModelFamily.delete({ where: { id } });
  } catch {
    return { error: "Impossible de supprimer : la famille contient des modèles liés" };
  }
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

const modelSchema = z.object({
  name: z.string().min(1).max(300),
  familyId: z.string().min(1),
  releaseYear: z.number().int().min(2000).max(2030).nullable().optional(),
  imageUrl: z.string().max(10000).nullable().optional(),
  specs: z.any().optional(),
  variants: z.any().optional(),
});

export async function createModel(data: z.infer<typeof modelSchema>) {
  const p = modelSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceModel.create({ data: { ...p.data, isActive: true } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function updateModel(id: string, data: z.infer<typeof modelSchema>) {
  const p = modelSchema.safeParse(data);
  if (!p.success) return { error: (p.error.issues?.[0]?.message) || (p.error.errors?.[0]?.message) || "Validation failed" };
  await prisma.deviceModel.update({ where: { id }, data: { name: p.data.name, familyId: p.data.familyId, releaseYear: p.data.releaseYear, imageUrl: p.data.imageUrl, specs: p.data.specs || {}, variants: p.data.variants || [] } });
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function fetchModelsByFamily(familyId: string) {
  return prisma.deviceModel.findMany({ where: { familyId }, orderBy: [{ releaseYear: { sort: "desc", nulls: "last" } }, { sortOrder: "asc" }, { name: "asc" }] });
}

export async function deleteModel(id: string) {
  const exists = await prisma.deviceModel.findUnique({ where: { id }, select: { id: true } });
  if (!exists) return { error: "Modèle introuvable" };
  try {
    await prisma.deviceModel.delete({ where: { id } });
  } catch {
    return { error: "Impossible de supprimer : le modèle est référencé par des tickets" };
  }
  revalidatePath("/super-admin/dashboard/catalog");
  return { success: true };
}

export async function listAllCategories() {
  return prisma.deviceCategory.findMany({ orderBy: { sortOrder: "asc" } });
}

export async function listAllBrands() {
  return prisma.deviceBrand.findMany({ include: { category: { select: { nameFr: true } }, _count: { select: { modelFamilies: true } } }, orderBy: { name: "asc" } });
}

export async function listAllFamilies() {
  return prisma.deviceModelFamily.findMany({ include: { brand: { select: { name: true } }, _count: { select: { deviceModels: true } } }, orderBy: { name: "asc" } });
}

export async function listAllModels() {
  return prisma.deviceModel.findMany({ include: { family: { select: { name: true, brand: { select: { name: true } } } } }, orderBy: { name: "asc" }, take: 500 });
}
