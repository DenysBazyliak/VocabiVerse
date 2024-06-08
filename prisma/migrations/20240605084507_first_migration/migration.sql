-- CreateEnum
CREATE TYPE "Role" AS ENUM ('BASIC', 'ADMIN');

-- CreateTable
CREATE TABLE "user_model" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'BASIC',
    "isAdmin" BOOLEAN NOT NULL,

    CONSTRAINT "user_model_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "word" (
    "id" TEXT NOT NULL,
    "word" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upratedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "word_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "section" (
    "id" TEXT NOT NULL,
    "section" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "upratedAt" TIMESTAMP(3) NOT NULL,
    "authorId" TEXT NOT NULL,

    CONSTRAINT "section_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "language" (
    "id" TEXT NOT NULL,
    "language" TEXT NOT NULL,

    CONSTRAINT "language_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_model_email_key" ON "user_model"("email");

-- CreateIndex
CREATE INDEX "user_model_email_idx" ON "user_model"("email");

-- CreateIndex
CREATE UNIQUE INDEX "word_word_key" ON "word"("word");

-- CreateIndex
CREATE UNIQUE INDEX "section_section_key" ON "section"("section");

-- AddForeignKey
ALTER TABLE "word" ADD CONSTRAINT "word_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "section" ADD CONSTRAINT "section_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user_model"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
