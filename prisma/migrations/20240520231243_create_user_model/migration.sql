-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "isBot" BOOLEAN NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT,
    "username" TEXT,
    "isPremium" BOOLEAN NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);
