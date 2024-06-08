/*
  Warnings:

  - Added the required column `translation` to the `word` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "word" ADD COLUMN     "article" TEXT,
ADD COLUMN     "translation" TEXT NOT NULL;
