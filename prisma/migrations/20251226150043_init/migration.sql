-- CreateEnum
CREATE TYPE "ServerType" AS ENUM ('JAVA', 'BEDROCK');

-- CreateTable
CREATE TABLE "ServerPlayers" (
    "id" SERIAL NOT NULL,
    "serverId" INTEGER NOT NULL,
    "max" INTEGER NOT NULL,
    "current" INTEGER NOT NULL,
    "record" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServerPlayers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Server" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "ip" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "port" INTEGER NOT NULL,
    "countryCode" TEXT NOT NULL,
    "region" TEXT NOT NULL,
    "latency" INTEGER NOT NULL,
    "type" "ServerType" NOT NULL,
    "votes" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Server_pkey" PRIMARY KEY ("id")
);
