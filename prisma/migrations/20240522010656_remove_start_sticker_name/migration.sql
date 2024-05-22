/*
  Warnings:

  - You are about to drop the column `name` on the `StartSticker` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "StartSticker_name_key";

-- AlterTable
ALTER TABLE "StartSticker" DROP COLUMN "name";
