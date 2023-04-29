import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

import { usuarioRouter } from "./routes/usuarios.routes.js";
import { productoRouter } from "./routes/productos.routes.js";
import { ordenRouter } from "./routes/orden.routes.js";


dotenv.config();

const servidor = express();

// Operador logico OR
const PORT = process.env.PORT || 21000;

servidor.use(
    cors({
      methods: ["GET", "POST", "PUT", "DELETE"],
      origin: "*",
    })
  );
 
  servidor.use(express.json());
  servidor.use(usuarioRouter);
  servidor.use(productoRouter);
  servidor.use(ordenRouter);
 
  servidor.listen(PORT, () => {
    console.log(`Servidor API corriendo exitosamente en el puerto ${PORT}`);
    conectarBD();
  });


  function conectarBD() {
    mongoose
      .connect(process.env.MONGODB_URI)
      .then(() => {
        console.log("Base de datos conectada 🔌");
      })
      .catch((e) => {
        console.error("Error al conectarse a la base de datos");
        console.error(e.message);
      });
  }
  