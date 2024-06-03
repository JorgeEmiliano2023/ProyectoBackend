const Paises = require('../models/paisesModel');

const paisesController = {};

paisesController.agregarPaises = async (req, res) => 
{
 
  const {id, nombre } = req.body;
  console.log('Datos del pais recibido:', {id, nombre });

  
  try {
   
    await Paises.ingresarPaises(id, nombre);
    console.log('Pais insertado correctamente');
    res.status(200).json({ mensaje: 'Pais insertado correctamente'  });
  } catch (error) {
    console.error('Error al insertar pais:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

paisesController.listarPaises = async (req, res) => {
    try {
      const paises = await Paises.listarPaises();
      console.log('Listado de Paises ejecutado correctamente: ', paises);
      res.status(200).json(paises);
    } catch (error) {
      console.error('Error al obtener paises:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  };

  module.exports = paisesController;