import { Router } from "express";
import { methodHTTP as productoController } from "../controllers/producto.controllers.js";

const router = Router();

router.put("/:id", productoController.updateProducto); // Define la ruta PUT con el parámetro :id

export default router;