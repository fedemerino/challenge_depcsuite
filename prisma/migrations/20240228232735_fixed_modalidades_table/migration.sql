/*
  Warnings:

  - You are about to drop the column `comision_id` on the `modalidades` table. All the data in the column will be lost.
  - Added the required column `modalidad_id` to the `comisiones` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `modalidades` DROP FOREIGN KEY `modalidades_comision_id_fkey`;

-- AlterTable
ALTER TABLE `comisiones` ADD COLUMN `modalidad_id` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `modalidades` DROP COLUMN `comision_id`;

-- AlterTable
ALTER TABLE `unidades` MODIFY `descripcion` VARCHAR(500) NOT NULL;

-- AddForeignKey
ALTER TABLE `comisiones` ADD CONSTRAINT `comisiones_modalidad_id_fkey` FOREIGN KEY (`modalidad_id`) REFERENCES `modalidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
