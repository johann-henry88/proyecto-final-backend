import mongoose from "mongoose";

 
const ordenSchema = new mongoose.Schema({
    correoUsuario: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    stock: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    codigo: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
})

export const ordenModel = mongoose.model("orden", ordenSchema);