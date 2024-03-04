/*
  Warnings:

  - Added the required column `cuotas` to the `precios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `precios` ADD COLUMN `cuotas` VARCHAR(191) NOT NULL;
