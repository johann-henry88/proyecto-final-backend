import { ordenModel } from "../models/orden.model.js";
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

  export const actualizarOrden = async (req, res) => { 
    try {
  
      const {correoUsuario, stock, codigo } = req.body; 
      await ordenModel.updateOne({codigo}, { $set: { correoUsuario, stock, codigo }} )
   
      return res.status(201).json({
        message: "Orden actualizado exitosamente",
      });
  
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al actualizar la orden",
        content: error.message,
      });
  
    }
  };

  export const eliminarOrden = async (req, res) => { 
    try {
  
      const {codigo} = req.body;
      await ordenModel.deleteOne({codigo});
      return res.status(201).json({
        message: "Orden eliminado exitosamente",
      });
      
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al eliminar la orden",
        content: error.message,
      });
  
    }
  };

  export const getOrden = async (req, res) => {

    try {
  
      const {codigo} = req.body;
      const orden =  await ordenModel.findOne({codigo})
  
      if (!orden){
        return res.status(400).json({
          status: false,
          message: "Producto no encontrado", 
          content: null
        });
      }
      
      return res.status(200).json({
        status: true,
        message: null,
        content: orden 
      });
       
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al obtener el producto",
        content: error.message,
      });
  
    }
  
  };