import { PrismaClient } from "@prisma/client"
import prisma from "../../src/utils/prisma"
import { PROGRAMACION_WEB_FULLSTACK, UNIDAD_BASES_DE_DATOS, UNIDAD_FRAMEWORK, UNIDAD_FUNDAMENTOS_DE_PROGRAMACION, UNIDAD_JAVASCRIPT_Y_LIBRERIAS, UNIDAD_MAQUETACION, UNIDAD_PROYECTO_FINAL } from "../constants"

const getCursoId = async (nombre: string) => {
  try {
    const curso = await prisma.cursos.findFirst({
      where: {
        nombre: nombre,
      },
    })
    if (!curso)
      throw new Error(`No se encontró el curso con el título ${nombre}`)
    return curso.id
  } catch (e) {
    console.error(e)
    return
  }
}

interface Unidad {
  numero: number;
  titulo: string;
  descripcion: string;
  clases: number;
  horas: number;
  curso_id: number;
}

const unidades: Unidad[] = [
  {
    numero: 1,
    titulo: UNIDAD_MAQUETACION,
    descripcion:
      "En esta primera unidad aprendes a crear tu primera página web que será posteriormente publicada en Internet a partir de las tecnologías <b>HTML, CSS, Bootstrap, Repositorio, Git/GitHub.</b>",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
  {
    numero: 2,
    titulo: UNIDAD_FUNDAMENTOS_DE_PROGRAMACION,
    descripcion:
      "Como su nombre lo indica, te irás sumergiendo en las bases de la programación y adquiriendo un entendimiento mediante el estudio del <b>lenguaje PHP</b>, metodologías y estándares de programación, <b>patrón de diseño MVC, JSON</b>.",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
  {
    numero: 3,
    titulo: UNIDAD_BASES_DE_DATOS,
    descripcion:
      "Aprenderás a diseñar y construir bases de datos y SQL, con <b>MySQL/MariaDB</b>.",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
  {
    numero: 4,
    titulo: UNIDAD_FRAMEWORK,
    descripcion:
      "A partir de las tecnologías aprendidas, se comienza a armar un proyecto integrador, haciendo equipos de trabajo como se suele hacer a nivel empresarial con trabajo de forma remota y asignación de tareas. <b>Framework PHP Laravel. API de MercadoPago.</b>",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
  {
    numero: 5,
    titulo: UNIDAD_JAVASCRIPT_Y_LIBRERIAS,
    descripcion:
      "Fundamentos de programación con tecnologías de <b>Frontend; JavaScript, API Rest, jQuery, AJAX.</b>",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
  {
    numero: 6,
    titulo: UNIDAD_PROYECTO_FINAL,
    descripcion:
      "Lanzamiento de un proyecto del tipo ecommerce con <b>web comercial y panel de gestión</b>.",
    clases: 2,
    horas: 8,
    curso_id: 0
  },
]

export async function createUnidades(prisma: PrismaClient) {
  try {

    for(const unidad of unidades){
      try {
        const cursoId = await getCursoId(PROGRAMACION_WEB_FULLSTACK)
        if(!cursoId) throw new Error(`No se encontró el curso con el título ${PROGRAMACION_WEB_FULLSTACK}`)
        unidad.curso_id = cursoId
      }
      catch(e){
        console.error(e)
      }
    }
    await prisma.unidades.createMany({
      data: unidades, 
    });
  } catch (e) {
    console.error(e);
  }
}
