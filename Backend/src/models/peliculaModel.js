const db = require('../db/dbconfig'); // Importa tu archivo de conexión a la base de datos

const Pelicula = {}; // Crea un objeto vacio llamado peliculas


Pelicula.insertarPelicula = (id, titulo, categoria,director, año, paisId)  => //Defino un metodo llamado insertarPelicula en el objeto Pelicula y paso los 4 parametros  
{
  //La funcion insertarPelicula devuelve una promesa. La promesa toma dos argumentos que son resolve y reject para indicar el resultado exitoso o el error
  return new Promise((resolve, reject) => {

    //Declaro la variable query y guardo la consulta sql
    const query = 'INSERT INTO peliculas (id, titulo, categoria,director, año, id_pais) VALUES (?, ?, ?, ?, ?, ?)';

    //db.query es una funcion proporcionado por la biblioteca mysql2 que toma como argumento la constante query y los valores que voy a ingresar a la base de datos como un array de datos.

    db.query(query, [id, titulo, categoria, director, año, paisId], (err, result) => {
      if (err) {
        reject(err); //Promesa Rechazada, err guarda la informacion sobre el error
      } else {
        resolve(result); //Promesa Resuelta, result guarda la informacion sobre el resultado
      }
    });
  });
};


Pelicula.listarPeliculas = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM peliculas';
    db.query(query, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

Pelicula.eliminarPelicula = (peliculaId) => {
  return new Promise((resolve, reject) => {
    const query = 'DELETE FROM peliculas WHERE id = ?';
    db.query(query, [peliculaId], (err, result) => {
      if (err) {
        console.error('Error al eliminar película en la base de datos:', err);
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

Pelicula.modificarPelicula = (peliculaId, titulo, categoria, director, año, paisId) => {
  return new Promise((resolve, reject) => {
    const query = 'UPDATE peliculas SET titulo = ?, categoria = ?, director = ?, año = ?, id_pais = ? WHERE id = ?';
    db.query(query, [titulo, categoria, director, año, paisId, peliculaId], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

module.exports = Pelicula;





