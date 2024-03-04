import { PrismaClient } from "@prisma/client"
import { TIPO_DE_CURSO_COMPLEMENTARIOS, TIPO_DE_CURSO_PROGRAMACION } from "../constants"

const tiposDeCurso = [
  {
    tipo: TIPO_DE_CURSO_PROGRAMACION,
  },
  {
    tipo: TIPO_DE_CURSO_COMPLEMENTARIOS,
  },
]
export async function createTiposDeCurso(prisma: PrismaClient) {
   try {
     await prisma.tipos_de_curso.createMany({
       data: tiposDeCurso,
     })
   } catch (error) {
     console.log(error)
   }
}
