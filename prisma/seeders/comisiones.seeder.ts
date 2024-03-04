import prisma from "../../src/utils/prisma"
import { PrismaClient } from "@prisma/client"
import { TIPO_DE_MODALIDAD_GRABADO, TIPO_DE_MODALIDAD_EN_VIVO, PROGRAMACION_WEB_FULLSTACK } from "../constants"

const getCursoId = async (nombre: string) => {
  try {
    const curso = await prisma.cursos.findFirst({
      where: {
        nombre,
      },
    })
    if (!curso) {
      throw new Error(`Curso ${nombre} not found`)
    }
    return curso.id
  } catch (error) {
    console.log(error)
    return
  }
}

const getModalidadId = async (tipo: string) => {
    try {
        const modalidad = await prisma.modalidades.findFirst({
        where: {
            tipo,
        },
        })
        if (!modalidad) {
        throw new Error(`Modalidad ${tipo} not found`)
        }
        return modalidad.id
    } catch (error) {
        console.log(error)
        return
    }
    
}

export async function createComisiones(prisma: PrismaClient) {
  try {
    const cursoId = await getCursoId(PROGRAMACION_WEB_FULLSTACK)
    if (!cursoId) {
      throw new Error(`Curso ${PROGRAMACION_WEB_FULLSTACK} not found`)
    }
    const modalidadGrabadoId = await getModalidadId(TIPO_DE_MODALIDAD_GRABADO)
    if (!modalidadGrabadoId) {
      throw new Error(`Modalidad ${TIPO_DE_MODALIDAD_GRABADO} not found`)
    }
    const modalidadEnVivoId = await getModalidadId(TIPO_DE_MODALIDAD_EN_VIVO)
    if (!modalidadEnVivoId) {
      throw new Error(`Modalidad ${TIPO_DE_MODALIDAD_EN_VIVO} not found`)
    }

    const comisiones = [
      {
        curso_id: cursoId,
        modalidad_id: modalidadEnVivoId,
      },
      {
        curso_id: cursoId,
        modalidad_id: modalidadGrabadoId,
      },
    ]
    await prisma.comisiones.createMany({
      data: comisiones,
    })
  } catch (error) {
    console.log(error)
  }
}
