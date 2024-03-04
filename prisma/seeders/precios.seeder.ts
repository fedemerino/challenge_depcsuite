import { PrismaClient } from "@prisma/client"
import prisma from "../../src/utils/prisma"
import { MATRICULA_MAS_5_CUOTAS, MICROSOFT_EXCEL, PESOS_ARGENTINOS, PRECIO_ARS_MICROSOFT_EXCEL, PRECIO_ARS_PROGRAMACION_APPS_REACT_NATIVE, PRECIO_ARS_PROGRAMACION_MICROSOFT_CSHARP_DOTNET, PRECIO_ARS_PROGRAMACION_PYTHON, PRECIO_ARS_PROGRAMACION_WEB_FULLSTACK, PRECIO_ARS_WORKSHOP_CRIPTOMONEDAS_BITCOINS, PROGRAMACION_APPS_REACT_NATIVE, PROGRAMACION_MICROSOFT_CSHARP_DOTNET, PROGRAMACION_PYTHON, PROGRAMACION_WEB_FULLSTACK, UN_PAGO, WORKSHOP_CRIPTOMONEDAS_BITCOINS } from "../constants"

const getCursoId = async (nombre: string) => {
  try {
    const curso = await prisma.cursos.findFirst({
      where: {
        nombre: nombre,
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

const getMonedaId = async (nombre: string) => {
  try {
    const moneda = await prisma.monedas.findFirst({
      where: {
        nombre: nombre,
      },
    })
    if (!moneda) {
      throw new Error(`Moneda ${nombre} not found`)
    }
    return moneda.id
  } catch (error) {
    console.log(error)
    return
  }
}

export const createPrecios = async (prisma: PrismaClient) => {
  try {
   
    const monedaId = await getMonedaId(PESOS_ARGENTINOS)
    if (!monedaId) throw new Error(`Moneda ${PESOS_ARGENTINOS} not found`)

    const precios = [
      {
        curso: PROGRAMACION_WEB_FULLSTACK,
        precio: PRECIO_ARS_PROGRAMACION_WEB_FULLSTACK,
        cuotas: MATRICULA_MAS_5_CUOTAS,
        moneda_id: monedaId,
      },
      {
        curso: PROGRAMACION_APPS_REACT_NATIVE,
        precio: PRECIO_ARS_PROGRAMACION_APPS_REACT_NATIVE,
        cuotas: MATRICULA_MAS_5_CUOTAS,
        moneda_id: monedaId,
      },
      {
        curso: PROGRAMACION_PYTHON,
        precio: PRECIO_ARS_PROGRAMACION_PYTHON,
        cuotas: MATRICULA_MAS_5_CUOTAS,
        moneda_id: monedaId,
      },
      {
        curso: PROGRAMACION_MICROSOFT_CSHARP_DOTNET,
        precio: PRECIO_ARS_PROGRAMACION_MICROSOFT_CSHARP_DOTNET,
        cuotas: MATRICULA_MAS_5_CUOTAS,
        moneda_id: monedaId,
      },
      {
        curso: MICROSOFT_EXCEL,
        precio: PRECIO_ARS_MICROSOFT_EXCEL,
        cuotas: MATRICULA_MAS_5_CUOTAS,
        moneda_id: monedaId,
      },
      {
        curso: WORKSHOP_CRIPTOMONEDAS_BITCOINS,
        precio: PRECIO_ARS_WORKSHOP_CRIPTOMONEDAS_BITCOINS,
        cuotas: UN_PAGO,
        moneda_id: monedaId,
      }
    ]

    for (const precio of precios) {
      const cursoId = await getCursoId(precio.curso)
      if (!cursoId) throw new Error(`Curso not found`)
      await prisma.precios.create({
        data: {
          precio: precio.precio,
          moneda_id: precio.moneda_id,
          cuotas: precio.cuotas,
          curso_id: cursoId,
        },
      })
    }
  } catch (error) {
    console.log(error)
  }
}
