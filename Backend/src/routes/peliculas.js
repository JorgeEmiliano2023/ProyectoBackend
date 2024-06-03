// Importo el modulo express
const express = require('express');
// Se crea un enrutador para organizar las rutas
const router = express.Router();
const peliculasController = require('../controllers/peliculasController');

// Express.json() es un middleware que se agrega a mi enrutador y se utiliza para analizar el cuerpo de las solicitudes HTTP con formato JSON. Cuando un cliente envía datos al servidor, por ejemplo, al agregar o modificar una película, los datos se envían en el cuerpo de la solicitud HTTP. Estos datos pueden estar en diferentes formatos, y express.json() se encarga de analizar el cuerpo de la solicitud cuando está en formato JSON.
//router.use(express.json());

// Obtener todas las películas
// Establece una ruta para manejar solicitudes get a la url listarPelicula utilizando el metodo de mismo nombre del controlador para gestionar esa solicitud.
router.get('/listarPelicula', peliculasController.listarPelicula);

// Ingresar una nueva película
router.post('/agregarPelicula', peliculasController.agregarPelicula);

// Actualizar una película existente
router.put('/modificarPelicula/:id', peliculasController.modificarPelicula);

// Eliminar una película
router.delete('/eliminarPelicula/:id', peliculasController.eliminarPelicula);

module.exports = router;
