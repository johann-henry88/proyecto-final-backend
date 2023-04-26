import { UsuarioModel } from "../models/usuarios.model.js";
import bcryptjs from "bcryptjs";

export const registroUsuario = async (req, res) => { 
  try {

    const data = req.body;
    await UsuarioModel.create(data);
    return res.status(201).json({
      message: "Usuario creado exitosamente",
    });

  } catch (error) {

    return res.status(400).json({
      message: "Error al crear el usuario",
      content: error.message,
    });

  }
};

export const actualizarUsuario = async (req, res) => { 
  try {

    const {correo, nombre, apellido, celular} = req.body; 
    await UsuarioModel.updateOne({correo}, { $set: { nombre,apellido, celular }} )
 
    return res.status(201).json({
      message: "Usuario actualizado exitosamente",
    });

  } catch (error) {

    return res.status(400).json({
      message: "Error al actualizar el usuario",
      content: error.message,
    });

  }
};

export const eliminarUsuario = async (req, res) => { 
  try {

    const {correo} = req.body;
    await UsuarioModel.deleteOne({correo});
    return res.status(201).json({
      message: "Usuario eliminado exitosamente",
    });
    
  } catch (error) {

    return res.status(400).json({
      message: "Error al eliminar el usuario",
      content: error.message,
    });

  }
};


export const loginUsuario = async (req, res) => {

  try {

    const {correo, password} = req.body;
    const usuario =  await UsuarioModel.findOne({correo})

    if (!usuario){
      return res.status(400).json({
        status:false,
        message: "Usuario no encontrado", 
      });
    }
    
    bcryptjs.compare(password, usuario.password, (err, data) => {
      //if error than throw error
      if (err) throw err

      //if both match than you can do anything
      if (data) { 
          return res.status(201).json({
            status:true,
            message: "Login correcto",
          });
      } else {
        return res.status(201).json({
          status:false,
          message: "Login Incorrecto",
        });
      } 
    })
     
  } catch (error) {

    return res.status(400).json({
      message: "Error al logear el usuario",
      content: error.message,
    });

  }

};
