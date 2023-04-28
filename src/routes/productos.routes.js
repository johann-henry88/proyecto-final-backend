import { Router } from "express";
import * as controller from "../controllers/productos.controller.js";

export const productoRouter = Router();

productoRouter.post("/registroproducto", controller.registroProducto);
productoRouter.delete("/eliminarproducto", controller.eliminarProducto);
productoRouter.put("/actualizarproducto", controller.actualizarProducto);
productoRouter.post("/getproducto", controller.getProducto);