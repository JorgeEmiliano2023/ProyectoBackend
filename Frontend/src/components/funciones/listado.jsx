export const fetchPeliculas = (setPeliculas) => {
  //Soliciud get a la URL 
    fetch('http://localhost:4000/api/listarPelicula')
    //Convierto la respuesta del servidor en un objeto JavaScript
      .then(response => response.json())
    //Se asigna los datos obtenidos desde el backend a la variable data para luego pasarle como parametro a la funcion setPeliculas
      .then(data => setPeliculas(data))
      .catch(error => console.error('Error al obtener las películas', error));
  };