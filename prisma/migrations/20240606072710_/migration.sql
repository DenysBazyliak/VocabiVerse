/*
  Warnings:

  - You are about to drop the column `authorId` on the `word` table. All the data in the column will be lost.
  - You are about to drop the `section` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_model` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "section" DROP CONSTRAINT "section_authorId_fkey";

-- DropForeignKey
ALTER TABLE "section" DROP CONSTRAINT "section_wordId_fkey";

-- DropForeignKey
ALTER TABLE "word" DROP CONSTRAINT "word_authorId_fkey";

-- AlterTable
ALTER TABLE "word" DROP COLUMN "authorId";

-- DropTable
DROP TABLE "section";

-- DropTable
DROP TABLE "user_model";
