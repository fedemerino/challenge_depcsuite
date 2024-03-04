import { MEDIO_DE_PAGO_PAYPAL } from "../../prisma/constants"
import { MedioDePago, Pais } from "../utils/interfaces"
import prisma from "../utils/prisma"
import logger from "../utils/winston"

export async function getPaisesService() {
  try {
    const paises: Pais[] = await prisma.paises.findMany()
    if (!paises) return []
    const otrosMediosDePago = await findOtrosMediosDePagoService()
    if (!otrosMediosDePago) {
      logger.error("No se encontraron otros medios de pago")
      return []
    }
    for (const pais of paises) {
      const moneda = await getMonedaService(pais.moneda_id)
      const mediosDePago = await getMediosDePagoService(pais.id)
      if (!mediosDePago) {
        logger.error("No se encontraron medios de pago del pais" + pais.nombre)
        continue
      }
      if (!moneda) {
        logger.error("No se encontró la moneda del pais" + pais.nombre)
        continue
      }
      pais.moneda = moneda
      pais.medios_de_pago = mediosDePago
      pais.otros_medios_de_pago = otrosMediosDePago
    }
    return paises
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener los paises")
  }
}

async function getMonedaService(monedaId: number) {
  try {
    const moneda = await prisma.monedas.findFirst({
      where: {
        id: monedaId,
      },
    })
    if (!moneda) return null
    return moneda
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener la moneda")
  }
}

async function getMediosDePagoService(paisId: number) {
  try {
    let mediosDePago: MedioDePago[] = []
    const paisMediosDePago = await prisma.pais_medios_de_pago.findMany({
      where: {
        pais_id: paisId,
      },
    })
    for (const paisMedioDePago of paisMediosDePago) {
      const medioDePago = await prisma.medios_de_pago.findFirst({
        where: {
          id: paisMedioDePago.medio_de_pago_id,
        },
      })
      if (medioDePago) mediosDePago.push(medioDePago)
    }
    return mediosDePago
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener los medios de pago"
    )
  }
}

const findOtrosMediosDePagoService = async () => {
  try {
    const otrosMediosDePago = await prisma.medios_de_pago.findFirst({
      where: {
        nombre: MEDIO_DE_PAGO_PAYPAL,
      },
    })
    if (!otrosMediosDePago) return []
    return [otrosMediosDePago]
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener los otros medios de pago"
    )
  }
}

export async function getPaisService(paisId: number) {
  try {
    const pais:Pais | null = await prisma.paises.findFirst({
      where: {
        id: paisId,
      },
    })
    if (!pais) return null
    const moneda = await getMonedaService(pais.moneda_id)
    const mediosDePago = await getMediosDePagoService(pais.id)
    const otrosMediosDePago = await findOtrosMediosDePagoService()
    if (!mediosDePago) {
      logger.error("No se encontraron medios de pago del pais" + pais.nombre)
      return null
    }
    if (!moneda) {
      logger.error("No se encontró la moneda del pais" + pais.nombre)
      return null
    }
    pais.moneda = moneda
    pais.medios_de_pago = mediosDePago
    pais.otros_medios_de_pago = otrosMediosDePago
    return pais
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener el pais")
  }
}