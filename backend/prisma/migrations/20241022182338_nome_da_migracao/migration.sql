/*
  Warnings:

  - You are about to drop the column `image_link` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "image_link",
ADD COLUMN     "image" VARCHAR(250);

-- AlterTable
ALTER TABLE "Product" ALTER COLUMN "created_date" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_date" SET DEFAULT CURRENT_TIMESTAMP;
