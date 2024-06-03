export const fetchPaises = (setPaises) => {
    fetch('http://localhost:4000/api2/listarPaises')
      .then(response => response.json())
      .then(data => setPaises(data))
      .catch(error => console.error('Error al obtener las nacionalidades', error));
  };