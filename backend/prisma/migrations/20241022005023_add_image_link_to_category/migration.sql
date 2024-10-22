/*
  Warnings:

  - You are about to drop the column `created_date` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `image_link` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `updated_date` on the `Category` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `Category` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "created_date",
DROP COLUMN "image_link",
DROP COLUMN "updated_date",
ALTER COLUMN "name" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");
