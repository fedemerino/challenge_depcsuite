/*
  Warnings:

  - You are about to drop the `metodos_de_pago` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pais_metodos_de_pago` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `pais_metodos_de_pago` DROP FOREIGN KEY `pais_metodos_de_pago_metodo_de_pago_id_fkey`;

-- DropForeignKey
ALTER TABLE `pais_metodos_de_pago` DROP FOREIGN KEY `pais_metodos_de_pago_pais_id_fkey`;

-- DropTable
DROP TABLE `metodos_de_pago`;

-- DropTable
DROP TABLE `pais_metodos_de_pago`;

-- CreateTable
CREATE TABLE `pais_medios_de_pago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `pais_id` INTEGER NOT NULL,
    `medio_de_pago_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `medios_de_pago` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `url_imagen` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pais_medios_de_pago` ADD CONSTRAINT `pais_medios_de_pago_pais_id_fkey` FOREIGN KEY (`pais_id`) REFERENCES `paises`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `pais_medios_de_pago` ADD CONSTRAINT `pais_medios_de_pago_medio_de_pago_id_fkey` FOREIGN KEY (`medio_de_pago_id`) REFERENCES `medios_de_pago`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
