-- CreateTable
CREATE TABLE "BotStory" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    "generatedForUserId" INTEGER,

    CONSTRAINT "BotStory_pkey" PRIMARY KEY ("id")
);
