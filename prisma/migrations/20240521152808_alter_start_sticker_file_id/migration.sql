/*
  Warnings:

  - The primary key for the `StartSticker` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "StartSticker" DROP CONSTRAINT "StartSticker_pkey",
ALTER COLUMN "fileId" SET DATA TYPE TEXT,
ADD CONSTRAINT "StartSticker_pkey" PRIMARY KEY ("fileId");
