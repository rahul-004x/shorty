-- CreateTable
CREATE TABLE "Link" (
    "id" TEXT NOT NULL,
    "short" TEXT NOT NULL,
    "long" TEXT NOT NULL,
    "clicks" INTEGER NOT NULL DEFAULT 0,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Link_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Link_short_key" ON "Link"("short");

-- CreateIndex
CREATE INDEX "Link_short_idx" ON "Link"("short");
