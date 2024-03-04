import { PrismaClient } from "@prisma/client"
import prisma from "../../src/utils/prisma"
import { PROGRAMACION_WEB_FULLSTACK } from "../constants"

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

export async function createDescuentos(prisma: PrismaClient) {
  try {
    const cursoId = await getCursoId(PROGRAMACION_WEB_FULLSTACK)
    if (!cursoId) {
      throw new Error(`Curso ${PROGRAMACION_WEB_FULLSTACK} not found`)
    }
    await prisma.descuentos.create({
      data: {
        fecha_inicio: new Date(),
        fecha_fin: new Date("2024-03-30"),
        porcentaje: 35,
        curso_id: cursoId,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
