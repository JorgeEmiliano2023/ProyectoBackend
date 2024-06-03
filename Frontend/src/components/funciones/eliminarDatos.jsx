import Swal from 'sweetalert2';

const botonEliminar = async (id, setPeliculas) => {

    console.log('Intentando eliminar película con ID:', id);

    //Se ejecuta el codigo dentro del try y si hay un error se lo maneja en el bloque catch.
    //Fetch es una funcion que se utiliza para enviar solicitudes.

    try {
        const response = await fetch(`http://localhost:4000/api/eliminarPelicula/${id}`, {
            method: 'DELETE',
        });

        const data = await response.json();
        console.log('Respuesta del servidor:', data);

            if (data && data.mensaje) 
            //Se verifica si la respuesta del servidor tiene un mensaje, si es asi se considera que la pelicula se elimino correctamente. 
        {
            //prevPeliculas es el estado anterior de las peliculas antes de eliminar a una. filter es una funcion que me genera un nuevo array que contenga todas la peliculas con id distinto al id de la pelicula que elimine.

            // Actualizar el estado eliminando la película localmente
            setPeliculas(prevPeliculas => prevPeliculas.filter(pelicula => pelicula.id !== id));


            // Mostrar un alert
            Swal.fire({
                icon: 'success',
                title: 'Película eliminada exitosamente',
                showConfirmButton: false,
                timer: 1500,
            });

        } else {
            Swal.fire({
                icon: 'error',
                title: 'Error al eliminar la película',
                text: 'Hubo un problema al intentar eliminar la película.',
            });
        }
    } catch (error) {
        console.error('Error al eliminar la película', error);
        Swal.fire({
            icon: 'error',
            title: 'Error al eliminar la película',
            text: 'Hubo un problema al intentar eliminar la película.',
        });
    }
};

export default botonEliminar;
