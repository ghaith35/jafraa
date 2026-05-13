import { prisma } from "@/lib/db";
async function main() {
  const stores = await prisma.store.findMany({ select: { id: true, name: true } });
  console.log(JSON.stringify(stores, null, 2));
  await prisma.$disconnect();
}
main();
