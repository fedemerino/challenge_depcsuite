/*
  Warnings:

  - Added the required column `items` to the `modalidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `modalidades` ADD COLUMN `items` VARCHAR(750) NOT NULL;
