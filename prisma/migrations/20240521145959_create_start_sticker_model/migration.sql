-- CreateTable
CREATE TABLE "StartSticker" (
    "fileId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "StartSticker_pkey" PRIMARY KEY ("fileId")
);

-- CreateIndex
CREATE UNIQUE INDEX "StartSticker_name_key" ON "StartSticker"("name");
