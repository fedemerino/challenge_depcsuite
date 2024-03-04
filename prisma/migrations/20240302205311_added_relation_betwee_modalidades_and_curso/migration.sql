/*
  Warnings:

  - Added the required column `curso_id` to the `modalidades` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `modalidades` ADD COLUMN `curso_id` INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE `modalidades` ADD CONSTRAINT `modalidades_curso_id_fkey` FOREIGN KEY (`curso_id`) REFERENCES `cursos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
