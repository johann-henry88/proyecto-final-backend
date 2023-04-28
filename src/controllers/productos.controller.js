import { productoModel } from "../models/productos.model.js";
import bcryptjs from "bcryptjs";


export const registroProducto = async (req, res) => { 
    try {
   



      const data = req.body;


      console.log(data)

      await productoModel.create(data);
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

  export const actualizarProducto = async (req, res) => { 
    try {
  
      const {nombre, precio, descripcion, stock, codigo} = req.body; 
      await productoModel.updateOne({codigo}, { $set: { nombre, precio, descripcion, stock }} )
   
      return res.status(201).json({
        message: "Producto actualizado exitosamente",
      });
  
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al actualizar el producto",
        content: error.message,
      });
  
    }
  };

  export const eliminarProducto = async (req, res) => { 
    try {
  
      const {codigo} = req.body;
      await productoModel.deleteOne({codigo});
      return res.status(201).json({
        message: "Producto eliminado exitosamente",
      });
      
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al eliminar el producto",
        content: error.message,
      });
  
    }
  };

  export const getProducto = async (req, res) => {

    try {
  
      const {codigo} = req.body;
      const producto =  await productoModel.findOne({codigo})
  
      if (!producto){
        return res.status(400).json({
          status: false,
          message: "Producto no encontrado", 
          content: null
        });
      }
      
      return res.status(200).json({
        status: true,
        message: null,
        content: producto 
      });
       
    } catch (error) {
  
      return res.status(400).json({
        message: "Error al obtener el producto",
        content: error.message,
      });
  
    }
  
  };