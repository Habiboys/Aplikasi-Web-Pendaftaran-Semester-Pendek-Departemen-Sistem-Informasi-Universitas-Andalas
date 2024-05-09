/*
  Warnings:

  - The values [MAHASISWA,DOSEN,ADMIN] on the enum `Users_level` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterTable
ALTER TABLE `users` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updateAt` DATETIME(3) NULL,
    MODIFY `level` ENUM('mahasiswa', 'dosen', 'admin') NOT NULL;
