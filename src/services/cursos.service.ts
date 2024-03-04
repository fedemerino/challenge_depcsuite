import prisma from "../utils/prisma"
import { Curso, HorarioCursado, Tecnologia, Unidad } from "../utils/interfaces"
import logger from "../utils/winston"

export async function getCursosService(monedaId: number) {
  try {
    const cursos: Curso[] = await prisma.cursos.findMany()
    if (!cursos) return []
    for (const curso of cursos) {
      const precioCurso = await getPrecioCursoService(monedaId, curso.id)
      curso.precio = precioCurso.precio
    }
    return cursos
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener los cursos")
  }
}

async function getPrecioCursoService(monedaId: number, cursoId: number) {
  try {
    const precio = await prisma.precios.findFirst({
      where: {
        moneda_id: monedaId,
        curso_id: cursoId,
      },
    })
    if (!precio) return { precio: 0 }
    return precio
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener el precio")
  }
}

export async function getCursoByIdService(cursoId: number, monedaId: number) {
  try {
    const curso: Curso | null = await prisma.cursos.findFirst({
      where: {
        id: cursoId,
      },
    })
    if (!curso) return null
    const precioCurso = await getPrecioCursoService(monedaId, curso.id)
    curso.precio = precioCurso.precio
    const descuentoCurso = await getDescuentoCursoService(curso.id)
    curso.porcentaje_descuento = descuentoCurso
    return curso
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener el curso")
  }
}

async function getDescuentoCursoService(cursoId: number) {
  try {
    const descuento = await prisma.descuentos.findFirst({
      where: {
        curso_id: cursoId,
      },
    })
    if (!descuento) return 0
    return descuento.porcentaje
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener el descuento")
  }
}

export async function getUnidadesService(cursoId: number) {
  try {
    if (!cursoId) return []
    const unidades: Unidad[] = await prisma.unidades.findMany({
      where: {
        curso_id: cursoId,
      },
    })
    if (!unidades)  return []
    for (const unidad of unidades) {
      const tecnologias = await getTecnologiasServices(unidad.id)
      unidad.tecnologias = tecnologias
    }
    return unidades
  } catch (error: any) {
    throw new Error(error.message || "Ocurrió un error al obtener las unidades")
  }
}

async function getTecnologiasServices(unidadId: number) {
  try {
    const tecnologias: Tecnologia[] = []
    const unidadesTecnologias = await prisma.unidades_tecnologias.findMany({
      where: {
        unidad_id: unidadId,
      },
    })
    if (!unidadesTecnologias) return []
    for (const unidadTecnologia of unidadesTecnologias) {
      const tecnologia = await prisma.tecnologias.findFirst({
        where: {
          id: unidadTecnologia.tecnologia_id,
        },
      })
      if (!tecnologia) {
        logger.error("No se encontró la tecnologia con id: " + unidadTecnologia.tecnologia_id)
        continue
      }
      tecnologias.push(tecnologia)
    }
    return tecnologias
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener las tecnologias"
    )
  }
}

export async function getModalidadesService(cursoId: number) {
  try {
    const modalidades = await prisma.modalidades.findMany({
      where: {
        curso_id: cursoId,
      },
    })
    if (!modalidades) return []
    return modalidades
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener las modalidades"
    )
  }
}

export async function getComisiones(cursoId: number) {
  try {
    const comisiones = await prisma.comisiones.findMany({
      where: {
        curso_id: cursoId,
      },
    })
    if (!comisiones) return []
    return comisiones
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener las comisiones"
    )
  }
}

export async function getHorariosCursadoService(cursoId: number) {
  try {
    const comisiones = await getComisiones(cursoId)
    let horarioMasProximo: HorarioCursado | null = null;
    let fechaMasProxima: Date | null = null;
    for (const comision of comisiones) {
      const horario = await prisma.horarios_cursado.findFirst({
        where: {
          comision_id: comision.id,
          fecha_inicio: {
            gt: new Date(),
          },
        },
        orderBy: {
          fecha_inicio: 'asc',
        },
      });
      if (horario) {
        if (!fechaMasProxima || horario.fecha_inicio < fechaMasProxima) {
          horarioMasProximo = horario;
          fechaMasProxima = horario.fecha_inicio;
        }
      }
    }
    if (horarioMasProximo) {
      return horarioMasProximo;
    } else {
      return null;
    }
  } catch (error: any) {
    throw new Error(
      error.message || "Ocurrió un error al obtener los horarios de cursado"
    )
  }
}
