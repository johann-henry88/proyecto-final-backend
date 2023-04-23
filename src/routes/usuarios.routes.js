import { Router } from "express";
import * as controller from "../controllers/usuarios.controllers.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registro", controller.registroUsuario);
usuarioRouter.delete("/eliminar", controller.eliminarUsuario);
usuarioRouter.put("/actualizar", controller.actualizarUsuario);
usuarioRouter.post("/login", controller.loginUsuario);