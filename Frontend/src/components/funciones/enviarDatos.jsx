import Swal from 'sweetalert2';

const enviarDatos = async (peliculas, formData, setFormData, setPeliculas, initialState) => {
  //Verifico que el usuario complete todos los campos del formulario, caso contrario muestro un alerta.
    if (Object.values(formData).some(value => value === '')) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Por favor, completa todos los campos antes de enviar la información.',
      });
      return;
    }
  
    // Verificar si ya existe una película con el mismo título antes de enviar la solicitud al backend.
    const peliculaExistente = peliculas.find(pelicula => pelicula.titulo === formData.titulo);
  
    if (peliculaExistente) {
      // Mostrar alerta si ya existe una película con el mismo título
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Ya existe una película con el mismo título. Introduce otro titulo.',
      });
      return;
    }
  
    try {
      const response = await fetch('http://localhost:4000/api/agregarPelicula', {
        method: 'POST',
        headers: {
          //Datos enviados en formato json.
          'Content-Type': 'application/json',
        },
        //Convierto un objeto de JS en una cadena JSON
        body: JSON.stringify({...formData, paisId: formData.paisId}),
      });
  
      if (response.ok) {
        // La película se ha agregado exitosamente a la base de datos
        console.log('Película agregada correctamente');
        // Mostrar alerta de éxito con SweetAlert
        Swal.fire({
          icon: 'success',
          title: 'Éxito',
          text: 'Película agregada correctamente',
        });
        // Resetear los campos del formulario después de agregar la película.
        setFormData(initialState);
  
        // Actualizar la lista de películas después de agregar una nueva pelicula.
        const updatedPeliculas = [...peliculas, formData];
        setPeliculas(updatedPeliculas);
      } else {
        // Manejar errores en la respuesta
        console.error('Error al agregar la película:', response.status, response.statusText);
        // Mostrar alerta de error con SweetAlert
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: `Error en la respuesta del servidor: ${response.status} - ${response.statusText}`,
        });
      }
    } catch (error) {
      
      console.error('Error al enviar la solicitud:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: `Error al enviar la solicitud: ${error.message}`,
      });

    }
  };

  export default enviarDatos;