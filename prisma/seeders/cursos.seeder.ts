import { PrismaClient } from "@prisma/client"
import {
  TIPO_DE_CURSO_PROGRAMACION,
  TIPO_DE_CURSO_COMPLEMENTARIOS,
  PROGRAMACION_WEB_FULLSTACK,
  PROGRAMACION_PYTHON,
  PROGRAMACION_APPS_REACT_NATIVE,
  PROGRAMACION_MICROSOFT_CSHARP_DOTNET,
  MICROSOFT_EXCEL,
  WORKSHOP_CRIPTOMONEDAS_BITCOINS,
} from "../constants"
const cursos = [
  {
    nombre: PROGRAMACION_WEB_FULLSTACK,
    descripcion:
      "5 meses de duración|2 modalidades para elegir|No requiere conocimiento previo|Mentoría personalizada",
    significado:
      "El Programador Web Full Stack es aquel que integra la tecnología Front-End - es decir, la interacción y visualización que tiene el usuario con la página web- y el Back-End, que es toda la lógica que provee de seguridad, acceso a datos y lógica de programación en el lado del servidor.",
    informacion:
      "El curso está diseñado para que aprendas a programar desde cero con un docente en vivo, desarrollando páginas web, sistemas, sitios ecommerce con carrito de compra y medios de pago, con el fin de que te postules a puestos de trabajo como programador junior en cualquier parte del mundo.|Durante el curso adquirirás conocimiento en tecnologías de programación que se emplean en el ámbito laboral, sentar las bases de la lógica de programación siendo capaz de crear sitios, sistemas web y páginas ecommerce totalmente funcionales.",
    url_imagen: "none",
    duracion: "5 meses",
    habilidades_a_adquirir: "Páginas Web|Sitios Ecommerce|Sistemas|Plataformas",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_PROGRAMACION,
  },
  {
    nombre: PROGRAMACION_PYTHON,
    descripcion: "",
    significado: "",
    informacion: "",
    url_imagen: "none",
    duracion: "3 meses",
    habilidades_a_adquirir: "Python|Desarrollo de Software",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_PROGRAMACION,
  },
  {
    nombre: PROGRAMACION_APPS_REACT_NATIVE,
    descripcion: "",
    significado: "",
    informacion: "",
    url_imagen: "none",
    duracion: "5 meses",
    habilidades_a_adquirir: "React Native|Desarrollo Mobile",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_PROGRAMACION,
  },
  {
    nombre: PROGRAMACION_MICROSOFT_CSHARP_DOTNET,
    descripcion: "",
    significado: "",
    informacion: "",
    url_imagen: "none",
    duracion: "5 meses",
    habilidades_a_adquirir: "Desarrollo de Software|Desarrollo Backend",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_PROGRAMACION,
  },
  {
    nombre: MICROSOFT_EXCEL,
    descripcion: "",
    significado: "",
    informacion: "",
    url_imagen: "none",
    duracion: "4 semanas",
    habilidades_a_adquirir: "Microsoft Excel|Tablas Dinámicas|Gráficos",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_COMPLEMENTARIOS,
  },
  {
    nombre: WORKSHOP_CRIPTOMONEDAS_BITCOINS,
    descripcion: "",
    significado: "",
    informacion: "",
    url_imagen: "none",
    duracion: "",
    habilidades_a_adquirir: "Bitcoin|Criptomonedas|Blockchain",
    disponible: true,
    tipo_de_curso_id: TIPO_DE_CURSO_COMPLEMENTARIOS,
  },
]

export async function createCursos(prisma: PrismaClient) {
  try {
    await Promise.all(
      cursos.map(async (curso) => {
        const tipo_de_curso = await prisma.tipos_de_curso.findFirst({
          where: {
            tipo: curso.tipo_de_curso_id,
          },
        })
        if (!tipo_de_curso) {
          throw new Error(
            "Hubo un error al buscar el tipo de curso en la base de datos."
          )
        }
        await prisma.cursos.create({
          data: {
            ...curso,
            tipo_de_curso_id: tipo_de_curso.id,
          },
        })
      })
    )
  } catch (e) {
    console.error(e)
  }
}
