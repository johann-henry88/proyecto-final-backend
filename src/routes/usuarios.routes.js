import { Router } from "express";
import * as controller from "../controllers/usuarios.controllers.js";

export const usuarioRouter = Router();

usuarioRouter.post("/registrousuario", controller.registroUsuario);
usuarioRouter.delete("/eliminarusuario", controller.eliminarUsuario);
usuarioRouter.put("/actualizarusuario", controller.actualizarUsuario);
usuarioRouter.post("/loginusuario", controller.loginUsuario);


