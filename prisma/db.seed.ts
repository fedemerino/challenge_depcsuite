import prisma from "../src/utils/prisma"
import { createPaisMediosDePago } from "./seeders/pais_medios_de_pago.seeder"
import { createMediosDePago } from "./seeders/medios_de_pago.seeder"
import { createPaises } from "./seeders/paises.seeder"
import { createMonedas } from "./seeders/monedas.seeder"
import { createPrecios } from "./seeders/precios.seeder"
import { createDescuentos } from "./seeders/descuentos.seeder"
import { createTiposDeCurso } from "./seeders/tipos_de_curso.seeder"
import { createCursos } from "./seeders/cursos.seeder"
import { createModalidades } from "./seeders/modalidades.seeder"
import { createTecnologias } from "./seeders/tecnologias.seeder"
import { createUnidades } from "./seeders/unidades.seeder"
import { createUnidadesTecnologias } from "./seeders/unidades_tecnologias.seeder"
import { createComisiones } from "./seeders/comisiones.seeder"
import { createHorariosDeCursado } from "./seeders/horarios_de_cursado.seeder"

async function main() {
  await createTiposDeCurso(prisma)
  await createCursos(prisma)
  await createUnidades(prisma)
  await createTecnologias(prisma)
  await createUnidadesTecnologias(prisma)
  await createModalidades(prisma)
  await createComisiones(prisma)
  await createHorariosDeCursado(prisma)
  await createDescuentos(prisma)
  await createMonedas(prisma)
  await createPrecios(prisma)
  await createPaises(prisma)
  await createMediosDePago(prisma)
  await createPaisMediosDePago(prisma)
}

main()
  .then(async () => {
    console.log("Seeding finished.")
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
