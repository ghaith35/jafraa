/*
  Warnings:

  - You are about to drop the column `createdAt` on the `expense_categories` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "expense_categories" DROP CONSTRAINT "expense_categories_storeId_fkey";

-- DropIndex
DROP INDEX "expense_categories_storeId_idx";

-- AlterTable
ALTER TABLE "expense_categories" DROP COLUMN "createdAt",
ADD COLUMN     "isDefault" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "storeId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "expense_categories" ADD CONSTRAINT "expense_categories_storeId_fkey" FOREIGN KEY ("storeId") REFERENCES "stores"("id") ON DELETE SET NULL ON UPDATE CASCADE;
