import { productoModel } from "../models/orden.model.js";
import bcryptjs from "bcryptjs";


export const registroOrden = async (req, res) => { 
    try {
   



      const data = req.body;


      console.log(data)

      await ordenModel.create(data);
      return res.status(201).json({
        message: "Producto creado exitosamente",
      });
  
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al crear el producto",
        content: error.message,
      });
  
    }
  };