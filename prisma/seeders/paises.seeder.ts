import { PrismaClient } from "@prisma/client"
import { PAIS_ARGENTINA, PESOS_ARGENTINOS } from "../constants"

const getMonedaId = async (prisma: PrismaClient, moneda: string) => {
  try {
    const monedaId = await prisma.monedas.findFirst({
      where: {
        nombre: moneda,
      },
    })
    if (!monedaId) {
      throw new Error(`Moneda ${moneda} not found`)
    }
    return monedaId?.id
  } catch (error) {
    console.log(error)
    return
  }
}

export async function createPaises(prisma: PrismaClient) {
  try {
    const monedaId = await getMonedaId(prisma, PESOS_ARGENTINOS)
    if (!monedaId) {
      throw new Error(`Moneda ${PESOS_ARGENTINOS} not found`)
    }
    await prisma.paises.create({
      data: {
        nombre: PAIS_ARGENTINA,
        moneda_id: monedaId,
      },
    })
  } catch (error) {
    console.log(error)
  }
}
