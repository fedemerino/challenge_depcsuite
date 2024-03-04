import { PrismaClient } from "@prisma/client"
import prisma from "../../src/utils/prisma"
import { TECNOLOGIA_APACHE, TECNOLOGIA_BOOTSTRAP, TECNOLOGIA_CSS, TECNOLOGIA_GIT, TECNOLOGIA_HTML, TECNOLOGIA_JAVASCRIPT, TECNOLOGIA_LARAVEL, TECNOLOGIA_MERCADOPAGO, TECNOLOGIA_MYSQL, TECNOLOGIA_PHP, UNIDAD_BASES_DE_DATOS, UNIDAD_FRAMEWORK, UNIDAD_FUNDAMENTOS_DE_PROGRAMACION, UNIDAD_JAVASCRIPT_Y_LIBRERIAS, UNIDAD_MAQUETACION } from "../constants"

const getUnidadId = async (titulo: string) => {
  try {
    const unidad = await prisma.unidades.findFirst({
      where: {
        titulo: titulo,
      },
    })
    if (!unidad)
      throw new Error(`No se encontró la unidad con el título ${titulo}`)
    return unidad.id
  } catch (e) {
    console.error(e)
    return
  }
}

const getTecnologiaId = async (nombre: string) => {
  try {
    const tecnologia = await prisma.tecnologias.findFirst({
      where: {
        nombre: nombre,
      },
    })
    if (!tecnologia)
      throw new Error(`No se encontró la tecnología con el nombre ${nombre}`)
    return tecnologia.id
  } catch (e) {
    console.error(e)
    return
  }
}

const unidadesTecnologias = [
  {
    unidad_titulo: UNIDAD_MAQUETACION,
    tecnologia_nombre: TECNOLOGIA_HTML,
  },
  {
    unidad_titulo: UNIDAD_MAQUETACION,
    tecnologia_nombre: TECNOLOGIA_CSS,
  },
  {
    unidad_titulo: UNIDAD_MAQUETACION,
    tecnologia_nombre: TECNOLOGIA_BOOTSTRAP,
  },
  {
    unidad_titulo: UNIDAD_MAQUETACION,
    tecnologia_nombre: TECNOLOGIA_GIT,
  },
  {
    unidad_titulo: UNIDAD_FUNDAMENTOS_DE_PROGRAMACION,
    tecnologia_nombre: TECNOLOGIA_PHP,
  },
  {
    unidad_titulo: UNIDAD_FUNDAMENTOS_DE_PROGRAMACION,
    tecnologia_nombre: TECNOLOGIA_APACHE,
  },
  {
    unidad_titulo: UNIDAD_BASES_DE_DATOS,
    tecnologia_nombre: TECNOLOGIA_MYSQL,
  },
  {
    unidad_titulo: UNIDAD_FRAMEWORK,
    tecnologia_nombre: TECNOLOGIA_LARAVEL,
  },
  {
    unidad_titulo: UNIDAD_FRAMEWORK,
    tecnologia_nombre: TECNOLOGIA_MERCADOPAGO,
  },
  {
    unidad_titulo: UNIDAD_JAVASCRIPT_Y_LIBRERIAS,
    tecnologia_nombre: TECNOLOGIA_JAVASCRIPT,
  },
]
export async function createUnidadesTecnologias(prisma: PrismaClient) {
  try {
    let unidades_tecnologias = [];
    for (const unidadTecnologia of unidadesTecnologias) {
      try {
        const unidadId = await getUnidadId(unidadTecnologia.unidad_titulo);
        if (!unidadId) {
          throw new Error(
            `No se encontró la unidad con el id ${unidadTecnologia.unidad_titulo}`
          );
        }
        const tecnologiaId = await getTecnologiaId(
          unidadTecnologia.tecnologia_nombre
        );
        if (!tecnologiaId) {
          throw new Error(
            `No se encontró la tecnología con el id ${unidadTecnologia.tecnologia_nombre}`
          );
        }
        unidades_tecnologias.push({
          unidad_id: unidadId,
          tecnologia_id: tecnologiaId,
        });
      } catch (e) {
        console.error(e);
      }
    }

    await prisma.unidades_tecnologias.createMany({
      data: unidades_tecnologias,
    });
  } catch (e) {
    console.error(e);
  }
}

