import { Router } from "express"
import { getCursoById, getCursos, getHorariosCursado, getModalidades, getUnidades } from "../controllers/cursos.controller"

const router = Router()

router.get("/", getCursos)
router.get("/:id", getCursoById)
router.get("/:id/unidades", getUnidades)
router.get("/:id/horarios", getHorariosCursado)
router.get("/:id/modalidades", getModalidades)

export default router