import { prisma } from "@/lib/db";
import { readFileSync } from "fs";
import path from "path";

interface CategoryNode {
  name: string;
  children?: CategoryNode[];
}

interface AccessoriesFile {
  generated_at: string;
  source: string;
  categories: CategoryNode[];
}

async function importTree(
  nodes: CategoryNode[],
  storeId: string,
  parentId: string | null = null
) {
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    const existing = await prisma.accessoryCategory.findFirst({
      where: { storeId, parentId, name: node.name },
    });

    const id = existing?.id ?? (
      await prisma.accessoryCategory.create({
        data: { storeId, parentId, name: node.name, sortOrder: i },
        select: { id: true },
      })
    ).id;

    if (node.children?.length) {
      await importTree(node.children, storeId, id);
    }
  }
}

async function main() {
  const storeId = process.argv[2];
  const filePath = process.argv[3] || path.join(process.cwd(), "accessories_categories.json");

  if (!storeId) {
    console.error("Usage: npx tsx scripts/seed-accessories.ts <storeId> [path/to/file.json]");
    console.error("Default file path: accessories_categories.json in project root");
    process.exit(1);
  }
  const raw = readFileSync(filePath, "utf-8");
  const data: AccessoriesFile = JSON.parse(raw);

  console.log(`Importing ${data.categories.length} root categories...`);

  // Delete existing categories for this store
  await prisma.accessoryCategory.deleteMany({ where: { storeId } });
  console.log("Cleared existing categories");

  await importTree(data.categories, storeId);

  const count = await prisma.accessoryCategory.count({ where: { storeId } });
  console.log(`Done. ${count} categories imported.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
