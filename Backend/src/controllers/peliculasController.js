const Pelicula = require('../models/peliculaModel'); // Importa el modelo de película, para trabajar con las operaciones de peliculas

const peliculasController = {}; // Crea un objeto vacio llamado peliculasController

//Se define una funcion asincrona agregarPelicula que tiene dos parametros req (la solicitud http) y res (la respuesta que se envia al cliente)
peliculasController.agregarPelicula = async (req, res) => 
{
  // Toma el objeto req.body, destructura el objeto para extraer sus propiedades y asignarle nuevos valores
  const { id, titulo, categoria, director, año, paisId } = req.body;
  console.log('Datos de la película recibidos:', { id, titulo, categoria, director, año, paisId });

  
  try {
    //Utiliza await para esperar a que la función insertarPelicula del modelo Pelicula se complete. Esta función probablemente realiza una operación de inserción en la base de datos con los parámetros proporcionados.
    await Pelicula.insertarPelicula(id, titulo, categoria, director, año, paisId);
    console.log('Película insertada correctamente');
    res.status(200).json({ mensaje: 'Película insertada correctamente'  });
  } catch (error) {
    console.error('Error al insertar película:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

peliculasController.listarPelicula = async (req, res) => {
  try {
    const peliculas = await Pelicula.listarPeliculas();
    console.log('Listado de Peliculas ejecutado correctamente: ', peliculas);
    res.status(200).json(peliculas);
  } catch (error) {
    console.error('Error al obtener películas:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

peliculasController.eliminarPelicula = async (req, res) => {
  // req.params.id es un objeto de express que permite obtener el valor id de una url
  const peliculaId = req.params.id;

  try {
    //Espera que se ejecute la funcion eliminarPelicula que se encuentra en otro archivo
    await Pelicula.eliminarPelicula(peliculaId);
    console.log('Película eliminada correctamente');
    res.status(200).json({ mensaje: 'Película eliminada correctamente' });
  } catch (error) {
    console.error('Error al eliminar película:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};

peliculasController.modificarPelicula = async (req, res) => {
  // La propiedad req.body en Express contiene los datos que se enviaron en el cuerpo de una solicitud HTTP.
  const peliculaId = req.params.id;
  const { titulo, categoria, director, año, paisId } = req.body;

  try {

    console.log('Actualizando película con ID:', peliculaId);
    console.log('Nuevos detalles:', { titulo, categoria, director, año, paisId });

    await Pelicula.modificarPelicula(peliculaId, titulo, categoria, director, año, paisId);
    console.log('Película modificada correctamente');
    res.status(200).json({ mensaje: 'Película modificada correctamente' });
  } catch (error) {
    console.error('Error al modificar película:', error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = peliculasController;

