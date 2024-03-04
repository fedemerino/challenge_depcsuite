import { PrismaClient } from "@prisma/client"
import {
  MEDIO_DE_PAGO_AMERICAN_EXPRESS,
  MEDIO_DE_PAGO_CABAL,
  MEDIO_DE_PAGO_MASTER_CARD,
  MEDIO_DE_PAGO_MERCADOPAGO,
  MEDIO_DE_PAGO_NARANJA_X,
  MEDIO_DE_PAGO_PAGO_FACIL,
  MEDIO_DE_PAGO_PAYPAL,
  MEDIO_DE_PAGO_RAPIPAGO,
  MEDIO_DE_PAGO_VISA,
} from "../constants"

const metodosDePago = [
  {
    nombre: MEDIO_DE_PAGO_VISA,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_MASTER_CARD,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_AMERICAN_EXPRESS,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_NARANJA_X,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_CABAL,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_PAGO_FACIL,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_RAPIPAGO,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_MERCADOPAGO,
    url_imagen: "",
  },
  {
    nombre: MEDIO_DE_PAGO_PAYPAL,
    url_imagen: "",
  },
]

export async function createMediosDePago(prisma: PrismaClient) {
  try {
    for (const metodo of metodosDePago) {
      await prisma.medios_de_pago.create({
        data: {
          nombre: metodo.nombre,
          url_imagen: metodo.url_imagen,
        },
      })
    }
  } catch (error) {
    console.log(error)
  }
}
