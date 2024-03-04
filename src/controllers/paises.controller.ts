import {Request, Response} from "express"
import logger from "../utils/winston"
import { getPaisService, getPaisesService } from "../services/paises.services"
import { dataDto } from "../dtos/data.dto"
import { errorDto } from "../dtos/error.dto"

export async function getPaises(_req: Request, res: Response) {
  try {
    const paises = await getPaisesService()
    if (!paises || paises.length <= 0) return res.status(404).send("No se encontraron paises")
    return res.status(200).json(dataDto(paises))
  } catch (error: any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener los paises")
    return res.status(500).send(errorDto("Ocurrió un error al obtener los paises"))
  }
}

export async function getPais(_req: Request, res: Response) {
  try {
    const paisId = _req.params.id
    if (!paisId) return res.status(400).send("Por favor ingrese el id del pais")
    const pais = await getPaisService(Number(paisId))
    if (!pais) return res.status(404).send("No se encontró el pais")
    return res.status(200).json(dataDto(pais))
  } catch (error: any) {
    logger.error(error.message + error.stack || "Ocurrió un error al obtener el pais")
    return res.status(500).send(errorDto("Ocurrió un error al obtener el pais"))
  }
}