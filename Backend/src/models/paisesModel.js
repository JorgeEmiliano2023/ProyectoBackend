const db = require('../db/dbconfig'); 

const Paises = {};

Paises.ingresarPaises = (id, nombre)  => 
{
  return new Promise((resolve, reject) => {

    const query = 'INSERT INTO nacionalidad (id, nombre) VALUES (?, ?)';

    db.query(query, [id, nombre], (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result); 
      }
    });
  });
};

Paises.listarPaises = () => {
    return new Promise((resolve, reject) => {
      const query = 'SELECT * FROM nacionalidad';
      db.query(query, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  };



  module.exports = Paises;