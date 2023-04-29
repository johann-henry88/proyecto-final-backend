import { Router } from "express";
import * as controller from "../controllers/orden.controllers.js";

export const ordenRouter = Router();

ordenRouter.post("/registroorden", controller.registroOrden);
ordenRouter.delete("/eliminarorden", controller.eliminarOrden);
ordenRouter.put("/actualizarorden", controller.actualizarOrden);
ordenRouter.post("/getorden", controller.getOrden);