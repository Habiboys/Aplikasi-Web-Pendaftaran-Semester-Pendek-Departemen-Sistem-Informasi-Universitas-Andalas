/*
  Warnings:

  - You are about to drop the column `roles` on the `users` table. All the data in the column will be lost.
  - Added the required column `role` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `users` DROP COLUMN `roles`,
    ADD COLUMN `role` ENUM('mahasiswa', 'dosen', 'admin') NOT NULL;
