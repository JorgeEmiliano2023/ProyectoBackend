import { useEffect, useState } from 'react';
import '../CSS/table.css';
import 'sweetalert2/dist/sweetalert2.css';
import { fetchPeliculas } from './funciones/listado';
import { fetchPaises } from './funciones/listadoPaises';
import botonEliminar from './funciones/eliminarDatos';
import botonEditar from './funciones/editarDatos';


function Modulo1(){

      const [peliculas, setPeliculas] = useState([]);
      const [paises, setPaises] = useState([]);

      useEffect(() => {
          fetchPeliculas(setPeliculas);
          fetchPaises(setPaises);
      }, []);

      const buscarNombrePais = (paisId) => {
        const pais = paises.find(pais => pais.id === paisId);
        return pais ? pais.nombre : '';
      };

      const eliminarPelicula = (id) => {
          botonEliminar(id, setPeliculas);
      };
          
      const editarPelicula = (pelicula) => {
        botonEditar(pelicula, setPeliculas, paises);
      };
  
    return (

            <>
            
            <h5 className="text-center mt-3 mb-3">Tabla Peliculas</h5>

            <div className='container-fluid px-5'>

                
                <table className='table table-dark table-striped-columns text-center'>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Título</th>
                    <th>Categoría</th>
                    <th>Director</th>
                    <th>Año</th>
                    <th>Pais</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {peliculas.map(pelicula => (
                      <tr key={`pelicula_${pelicula?.id}`}>
                      <td>{pelicula?.id || ''}</td>
                      <td>{pelicula?.titulo || ''}</td>
                      <td>{pelicula?.categoria || ''}</td>
                      <td>{pelicula?.director || ''}</td>
                      <td>{pelicula?.año || ''}</td>
                      <td>{buscarNombrePais(pelicula?.id_pais) || ''}</td>
                      <td>
                        <button onClick={() => editarPelicula(pelicula)}>Editar</button>
                        </td>
                        <td>
                        <button onClick={() => eliminarPelicula(pelicula?.id)}>Eliminar</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
                </table>
            </div>


                
            </>
    )
}

export default Modulo1;

