/*
  Warnings:

  - You are about to alter the column `name` on the `Category` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(50)`.

*/
-- DropIndex
DROP INDEX "Category_name_key";

-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "created_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "image_link" VARCHAR(250),
ADD COLUMN     "updated_date" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "name" SET DATA TYPE VARCHAR(50);
