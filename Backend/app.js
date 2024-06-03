const express = require('express'); //Importa la biblioteca express
const cors = require('cors'); //Importa la biblioteca Cors
const app = express(); // Crea una instancia de la aplicacion Express
const { port } = require('./src/config'); //Importa el valor del puerto desde otro archivo
const peliculasRoutes = require('./src/routes/peliculas'); //Importa las rutas relacionadas con las peliculas
const paisesRoutes = require('./src/routes/paises')

//Define las opciones de CORS para permitir solicitudes desde un dominio específico.
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

//Configura Express para usar CORS con las opciones definidas.
app.use(cors(corsOptions));

//Configura Express para analizar las solicitudes con formato JSON. Cpnvierte los textos de las solicitudes en objetos de JS.
app.use(express.json());

//Asocia las rutas de películas a la ruta base '/api'. Establece que cualquier ruta que este definida en peliculasRoutes estaran bajo el prefijo "/api". Entonces, cualquier ruta definida en peliculasRoutes que comience con "/" se combinará con "/api".
app.use('/api', peliculasRoutes);
app.use('/api2', paisesRoutes);

// Inicia el servidor en el puerto especificado e imprime un mensaje en la consola cuando el servidor está listo.
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
