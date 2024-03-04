import { PrismaClient } from "@prisma/client"
import { PESOS_ARGENTINOS } from "../constants"

export const createMonedas = async (prisma: PrismaClient) => {
  const monedas = [
    {
      nombre: PESOS_ARGENTINOS,
      descripcion: "Pesos Argentinos",
    },
  ]

  for (const moneda of monedas) {
    await prisma.monedas.create({
      data: moneda,
    })
  }
}
