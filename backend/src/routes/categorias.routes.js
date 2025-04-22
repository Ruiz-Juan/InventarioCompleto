import { Router } from "express";
import { methodHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.postCategorias);

router.get("/:id", categoriaController.getCategory);

export default router;