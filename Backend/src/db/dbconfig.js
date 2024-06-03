//Importa el módulo mysql2 para utilizarlo en la conexión con la base de datos MySQL.
const mysql = require('mysql2');

//Crea conexion con la DB, y guarda la informacion en una constante
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1997',
  port: '3307',
  database: 'cine',
});

connection.connect((err) => {
  if (err) {
    console.error('Error de conexión a MySQL: ', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
});

//Exporta el objeto de conexion para usarlo en otros archivos
module.exports = connection;
