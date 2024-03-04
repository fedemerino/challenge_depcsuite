/*
  Warnings:

  - Added the required column `fecha_fin` to the `horarios_cursado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `fecha_inicio` to the `horarios_cursado` table without a default value. This is not possible if the table is not empty.
  - Added the required column `hora_fin` to the `horarios_cursado` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `horarios_cursado` ADD COLUMN `fecha_fin` DATETIME(3) NOT NULL,
    ADD COLUMN `fecha_inicio` DATETIME(3) NOT NULL,
    ADD COLUMN `hora_fin` VARCHAR(191) NOT NULL,
    MODIFY `hora_inicio` VARCHAR(191) NOT NULL;
