/*
  Warnings:

  - You are about to alter the column `label` on the `Image` table. The data in that column could be lost. The data in that column will be cast from `VarChar(255)` to `VarChar(30)`.

*/
-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "label" DROP NOT NULL,
ALTER COLUMN "label" SET DATA TYPE VARCHAR(30);
