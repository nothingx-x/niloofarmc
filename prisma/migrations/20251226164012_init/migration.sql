/*
  Warnings:

  - A unique constraint covering the columns `[serverId]` on the table `ServerPlayers` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `ServerSubmission` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Server" ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "port" SET DEFAULT 25565,
ALTER COLUMN "countryCode" DROP NOT NULL,
ALTER COLUMN "region" DROP NOT NULL,
ALTER COLUMN "latency" SET DEFAULT 0,
ALTER COLUMN "type" SET DEFAULT 'JAVA',
ALTER COLUMN "votes" SET DEFAULT 0;

-- AlterTable
ALTER TABLE "ServerSubmission" ADD COLUMN     "statusText" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "userId" INTEGER NOT NULL,
ALTER COLUMN "description" DROP NOT NULL,
ALTER COLUMN "address" DROP NOT NULL,
ALTER COLUMN "port" SET DEFAULT 25565,
ALTER COLUMN "type" SET DEFAULT 'JAVA',
ALTER COLUMN "status" SET DEFAULT 'PENDING';

-- CreateIndex
CREATE INDEX "Server_type_idx" ON "Server"("type");

-- CreateIndex
CREATE INDEX "Server_countryCode_idx" ON "Server"("countryCode");

-- CreateIndex
CREATE INDEX "Server_region_idx" ON "Server"("region");

-- CreateIndex
CREATE UNIQUE INDEX "ServerPlayers_serverId_key" ON "ServerPlayers"("serverId");

-- CreateIndex
CREATE INDEX "User_username_idx" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_role_idx" ON "User"("role");

-- AddForeignKey
ALTER TABLE "ServerPlayers" ADD CONSTRAINT "ServerPlayers_serverId_fkey" FOREIGN KEY ("serverId") REFERENCES "Server"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ServerSubmission" ADD CONSTRAINT "ServerSubmission_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
