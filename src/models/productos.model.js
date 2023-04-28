import mongoose from "mongoose";

 
const productoSchema = new mongoose.Schema({
    nombre: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    precio: {
        type: mongoose.Schema.Types.String,
        required: true,
      },
    descripcion: {
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

export const productoModel = mongoose.model("producto", productoSchema);