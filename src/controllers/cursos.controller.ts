import { Request, Response } from "express"
import logger from "../utils/winston"
import { getCursoByIdService, getCursosService, getHorariosCursadoService, getModalidadesService, getUnidadesService } from "../services/cursos.service"
import { errorDto } from "../dtos/error.dto"
import { dataDto } from "../dtos/data.dto"

export async function getCursos(_req: Request, res: Response) {
  try {
    const monedaId = _req.query.monedaId
    if(!monedaId) return res.status(400).send("Por favor ingrese el id de la moneda")
    let cursos = await getCursosService(Number(monedaId))
    if (!cursos || cursos.length <= 0) return res.status(404).json(errorDto("No se encontraron cursos"))
    return res.status(200).json(dataDto(cursos))
  } catch (error:any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener los cursos")
    return res.status(500).send(errorDto("Ocurrió un error al obtener los cursos"))
  }
}

export async function getCursoById(_req: Request, res: Response) {
  try {
    const cursoId = _req.params.id
    if(!cursoId) return res.status(400).send(errorDto("Por favor ingrese el id del curso"))
    const monedaId = _req.query.monedaId
    if(!monedaId) return res.status(400).send(errorDto("Por favor ingrese el id de la moneda"))
    const curso = await getCursoByIdService(Number(cursoId), Number(monedaId))
    if (!curso) return res.status(404).send(errorDto("No se encontró el curso"))
    return res.status(200).json(dataDto(curso))
  } catch (error:any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener el curso")
    return res.status(500).send(errorDto("Ocurrió un error al obtener el curso"))
  }
}

export async function getUnidades(_req: Request, res: Response) {
  try {
    const cursoId = _req.params.id
    if(!cursoId) return res.status(400).send(errorDto("Por favor ingrese el id del curso"))
    const unidades = await getUnidadesService(Number(cursoId))
    if (!unidades || unidades.length <= 0) return res.status(404).send(errorDto("No se encontraron unidades"))
    return res.status(200).json(dataDto(unidades))
  } catch (error:any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener las unidades")
    return res.status(500).send(errorDto("Ocurrió un error al obtener las unidades"))
  }
}

export async function getHorariosCursado(_req: Request, res: Response) {
  try {
    const cursoId = _req.params.id
    if(!cursoId) return res.status(400).send(errorDto("Por favor ingrese el id del curso"))
    const horarios = await getHorariosCursadoService(Number(cursoId))
    if (!horarios) return res.status(404).send(errorDto("No se encontraron horarios"))
    return res.status(200).json(dataDto(horarios))
  } catch (error:any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener los horarios")
    return res.status(500).send(errorDto("Ocurrió un error al obtener los horarios"))
  }
}

export async function getModalidades(_req: Request, res: Response) {
  try {
    const cursoId = _req.params.id
    const modalidades = await getModalidadesService(Number(cursoId))
    if (!modalidades || modalidades.length <= 0) return res.status(404).send(errorDto("No se encontraron modalidades"))
    return res.status(200).json(dataDto(modalidades))
  } catch (error:any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener las modalidades")
    return res.status(500).send(errorDto("Ocurrió un error al obtener las modalidades"))
  }
}