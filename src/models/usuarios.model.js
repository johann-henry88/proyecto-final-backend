import mongoose from "mongoose";
import bcryptjs from "bcryptjs";
 
const usuarioSchema = new mongoose.Schema({
  nombre: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  apellido: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  celular: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  correo: {
    type: mongoose.Schema.Types.String,
    required: true,
    index: true,
    unique: true,
  },
  password: {
    type: mongoose.Schema.Types.String,
    required: true,
    set: (valor) => {
      const passwordHashed = bcryptjs.hashSync(valor);
      return passwordHashed;
    },
  },
});

export const UsuarioModel = mongoose.model("usuarios", usuarioSchema);
