import { PrismaClient } from "@prisma/client"
import {
  MEDIO_DE_PAGO_AMERICAN_EXPRESS,
  MEDIO_DE_PAGO_CABAL,
  MEDIO_DE_PAGO_MASTER_CARD,
  MEDIO_DE_PAGO_MERCADOPAGO,
  MEDIO_DE_PAGO_NARANJA_X,
  MEDIO_DE_PAGO_PAGO_FACIL,
  MEDIO_DE_PAGO_RAPIPAGO,
  MEDIO_DE_PAGO_VISA,
  PAIS_ARGENTINA,
} from "../constants"

const mediosDePago = [
  MEDIO_DE_PAGO_VISA,
  MEDIO_DE_PAGO_AMERICAN_EXPRESS,
  MEDIO_DE_PAGO_CABAL,
  MEDIO_DE_PAGO_MASTER_CARD,
  MEDIO_DE_PAGO_NARANJA_X,
  MEDIO_DE_PAGO_MERCADOPAGO,
  MEDIO_DE_PAGO_PAGO_FACIL,
  MEDIO_DE_PAGO_RAPIPAGO,
]

const getPaisId = async (prisma: PrismaClient, pais: string) => {
  try {
    const paisId = await prisma.paises.findFirst({
      where: {
        nombre: pais,
      },
    })
    if (!paisId) {
      throw new Error(`Pais ${pais} not found`)
    }
    return paisId.id
  } catch (error) {
    console.log(error)
    return
  }
}

const getMedioDePagoId = async (prisma: PrismaClient, medioDePago: string) => {
  try {
    const medioDePagoId = await prisma.medios_de_pago.findFirst({
      where: {
        nombre: medioDePago,
      },
    })
    if (!medioDePagoId) {
      throw new Error(`Medio de pago ${medioDePago} not found`)
    }
    return medioDePagoId.id
  } catch (error) {
    console.log(error)
    return
  }
}

export async function createPaisMediosDePago(prisma: PrismaClient) {
  try {
    const paisId = await getPaisId(prisma, PAIS_ARGENTINA)
    if (!paisId) {
      throw new Error(`Pais ${PAIS_ARGENTINA} not found`)
    }
    for (const medioDePago of mediosDePago) {
      const medioDePagoId = await getMedioDePagoId(prisma, medioDePago)
      if (!medioDePagoId) {
        throw new Error(`Medio de pago ${medioDePago} not found`)
      }
      await prisma.pais_medios_de_pago.create({
        data: {
          pais_id: paisId,
          medio_de_pago_id: medioDePagoId,
        },
      })
    }
  } catch (error) {
    console.log(error)
  }
}
