import Swal from 'sweetalert2';


const botonEditar = async (pelicula, setPeliculas, paises) => {
  if (!pelicula || !pelicula.id) {
    console.error('Pelicula o ID indefinidos:', pelicula);
    return;
  }


  // Abre un formulario de edición usando SweetAlert.
  Swal.fire({
    title: 'Editar Película',
    html: `
    <form id="editarForm">
    <div>
      <label for="titulo">Título:</label>
      <input type="text" id="titulo" value="${pelicula.titulo}" required>
    </div>
    <div>
      <label for="categoria">Categoría:</label>
      <input type="text" id="categoria" value="${pelicula.categoria}" required>
    </div>
    <div>
      <label for="director">Director:</label>
      <input type="text" id="director" value="${pelicula.director}" required>
    </div>
    <div>
      <label for="año">Año:</label>
      <input type="number" id="año" value="${pelicula.año}" required>
    </div>
    <div class="mb-3">
    <label for="pais">País: </label>
    <select id="pais" name="pais" required>
  <option value="">Selecciona un país</option>
  ${paises.map(pais => `<option value="${pais.id}" ${pais.id === pelicula.id_pais ? 'selected' : ''}>${pais.nombre}</option>`).join('')}
</select>
  </div>
  </form>
    `,
    showCancelButton: true,
    confirmButtonText: 'Guardar',
    //Funcion que se ejecutara antes de confirmar el dialogo con SweetAlert.
    preConfirm: () => {
      // Obtener los nuevos valores del formulario. Guardo los nuevos valores ingresados por el usuario para enviarlos mas tarde como solicitud al backend.
      const nuevoTitulo = Swal.getPopup().querySelector('#titulo').value;
      const nuevaCategoria = Swal.getPopup().querySelector('#categoria').value;
      const nuevoDirector = Swal.getPopup().querySelector('#director').value;
      const nuevoAño = Swal.getPopup().querySelector('#año').value;
      const nuevoPais = Swal.getPopup().querySelector('#pais').value;

      return {
        nuevoTitulo,
        nuevaCategoria,
        nuevoDirector,
        nuevoAño,
        nuevoPais,
      };
    },
  }).then(async (result) => {
    //result contiene el objeto con los nuevos valores del formulario.
    if (!result.isConfirmed) {
      return;
    }

    try {
      // Realizar la solicitud PUT al backend para editar la película.
      const response = await fetch(`http://localhost:4000/api/modificarPelicula/${pelicula.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          titulo: result.value.nuevoTitulo,
          categoria: result.value.nuevaCategoria,
          director: result.value.nuevoDirector,
          año: result.value.nuevoAño,
          paisId: result.value.nuevoPais,
        }),
      });

      const data = await response.json(); 
      //Espera la respuesta del servidor y la convierte en formato JSON.

      console.log(data);

      if (data && data.mensaje) {
        // Realizar una nueva solicitud GET para obtener la lista actualizada de películas de acuerdo a la ultima modificacion hecha por el usuario.
        const updatedResponse = await fetch('http://localhost:4000/api/listarPelicula');
        // Espera la respuesta del servidor y la convierte en formato JSON. updatedData contendrá la lista actualizada de películas devuelta por el servidor.
        const updatedData = await updatedResponse.json();

        console.log(updatedData)

        // Actualizar el estado con la nueva lista de películas
        setPeliculas(updatedData);

        // Mostrar un alert de éxito
        Swal.fire('Éxito', 'Película editada correctamente', 'success');
      } else {
        // Mostrar un alert de error
        Swal.fire('Error', 'Error al editar la película', 'error');
      }
    } catch (error) {
      console.error('Error al editar la película', error);
      // Mostrar un alert de error
      Swal.fire('Error', 'Error al editar la película', 'error');
    }
  });
};

export default botonEditar;
