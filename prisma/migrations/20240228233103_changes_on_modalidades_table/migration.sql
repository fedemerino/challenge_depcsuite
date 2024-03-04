/*
  Warnings:

  - You are about to drop the column `descripcion` on the `modalidades` table. All the data in the column will be lost.
  - Added the required column `subtitulo` to the `modalidades` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipo` to the `modalidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `modalidades` DROP COLUMN `descripcion`,
    ADD COLUMN `subtitulo` VARCHAR(191) NOT NULL,
    ADD COLUMN `tipo` VARCHAR(191) NOT NULL;
