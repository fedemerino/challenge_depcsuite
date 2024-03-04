import { Router } from "express";
import { getPais, getPaises } from "../controllers/paises.controller";

const router = Router();

router.get("/", getPaises)
router.get("/:id", getPais)
export default router;