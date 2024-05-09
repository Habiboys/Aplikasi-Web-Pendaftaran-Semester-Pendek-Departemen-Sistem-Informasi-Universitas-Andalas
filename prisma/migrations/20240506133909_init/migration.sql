/*
  Warnings:

  - You are about to drop the column `level` on the `users` table. All the data in the column will be lost.
  - Added the required column `roles` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `level`,
    ADD COLUMN `roles` ENUM('mahasiswa', 'dosen', 'admin') NOT NULL;
