/*
  Warnings:

  - You are about to drop the column `published` on the `Image` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `Image` table. All the data in the column will be lost.
  - Added the required column `src` to the `Image` table without a default value. This is not possible if the table is not empty.
  - Made the column `label` on table `Image` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Image" DROP COLUMN "published",
DROP COLUMN "url",
ADD COLUMN     "src" VARCHAR(512) NOT NULL,
ALTER COLUMN "label" SET NOT NULL;
