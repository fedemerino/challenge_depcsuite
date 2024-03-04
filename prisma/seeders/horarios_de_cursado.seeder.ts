import prisma from "../../src/utils/prisma"
import { PrismaClient } from "@prisma/client"
import {
  TIPO_DE_MODALIDAD_EN_VIVO,
  PROGRAMACION_WEB_FULLSTACK,
} from "../constants"

const getCurso = async (nombre: string) => {
  try {
    const curso = await prisma.cursos.findFirst({
      where: {
        nombre: nombre,
      },
    })
    if (!curso) {
      throw new Error(`Curso ${PROGRAMACION_WEB_FULLSTACK} not found`)
    }
    return curso.id
  } catch (error) {
    console.log(error)
    return
  }
}

const getModalidad = async (tipo: string) => {
  try {
    const modalidad = await prisma.modalidades.findFirst({
      where: {
        tipo: tipo,
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

const getComisionId = async () => {
  try {
    const curso = await getCurso(PROGRAMACION_WEB_FULLSTACK)
    const modalidad = await getModalidad(TIPO_DE_MODALIDAD_EN_VIVO)
    const comision = await prisma.comisiones.findFirst({
      where: {
        curso_id: curso,
        modalidad_id: modalidad,
      },
    })
    if (!comision) {
      throw new Error(`Comision not found`)
    }
    return comision.id
  } catch (error) {
    console.log(error)
    return
  }
}

export async function createHorariosDeCursado(prisma: PrismaClient) {
  try {
    const comisionId = await getComisionId()
    if (!comisionId) {
      throw new Error(`Comision not found`)
    }
    const horariosDeCursado = [
      {
        dias: "Martes y Jueves",
        hora_inicio: "18:30",
        hora_fin: "21:00",
        fecha_inicio: new Date("2024-03-15"),
        fecha_fin: new Date("2024-06-30"),
        comision_id: comisionId,
      },
    ]
    await prisma.horarios_cursado.createMany({
      data: horariosDeCursado,
    })
  } catch (error) {
    console.log(error)
  }
}
