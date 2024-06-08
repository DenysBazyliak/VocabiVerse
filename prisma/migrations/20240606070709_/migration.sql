/*
  Warnings:

  - Added the required column `wordId` to the `section` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "section" ADD COLUMN     "wordId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "section" ADD CONSTRAINT "section_wordId_fkey" FOREIGN KEY ("wordId") REFERENCES "word"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
