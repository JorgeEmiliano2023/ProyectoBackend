import { useState, useEffect } from 'react';
import '../CSS/formulario.css';
import enviarDatos from './funciones/enviarDatos';
import { fetchPeliculas } from './funciones/listado';
import { fetchPaises } from './funciones/listadoPaises';

function Modulo2(){
    
  //El initialState es un objeto que contiene las propiedades id, titulo, categoria, director, año y pais, todas inicializadas con cadenas vacías. Esto significa que cuando el componente del formulario se monta, los campos del formulario estarán vacíos inicialmente.

  const initialState = {
    id: '',
    titulo: '',
    categoria: '',
    director: '',
    año: '',
    paisId: '',
  };

  //UseSate es uno de los hook mas comunes y basicos de React. Un hook en React es una función especial que te permite usar características de React dentro de un componente funcional. Cuando llamo a useState, me devuelve un par de valores: el estado actual y una funcion para actualizar el estado. 
  // const [count, setCount] = useState(0);
  // Estás declarando una variable count que almacenará el estado actual y una función setCount que se utilizará para actualizar ese estado. useState(0) inicializa count con un valor inicial de 0. Entonces, cada vez que llamas a setCount, React actualizará el estado count y volverá a renderizar el componente con el nuevo valor de count.

  // initialState se pasa como el estado inicial del formulario.
  // formData es la variable que almacena es estado actual del formulario, inicialmente se establece en initialState.
  // setFormData es una función que se utiliza para actualizar el estado de formData. Cuando se llama a esta función con un nuevo valor, React re-renderiza el componente y actualiza formData con el nuevo valor proporcionado.
  const [formData, setFormData] = useState(initialState);
  // Inicialmente se establece un arreglo vacio.
  // peliculas es la variable que almacena es estado actual de las peliculas, inicialmente esta vacio.
  // setPeliculas es una funcion que se utiliza para actualizar el estado de peliculas.
  const [peliculas, setPeliculas] = useState([]);
  // Inicialmente se establece un arreglo vacio.
  // paises es la variable que almacena el estado actual de los paises, inicialmente esta vacio.
  // setPaises es una funcion que se utiliza para actualizar el estado de paises.
  const [paises, setPaises] = useState([]);

  // useEffect tambien es un hook que tiene dos tareas principales:
  // 1) Cargar datos iniciales de películas y países: Dentro de useEffect, se llama a las funciones fetchPeliculas y fetchPaises, que parecen ser funciones de utilidad para obtener datos iniciales de películas y países respectivamente. Estas funciones toman una función setPeliculas y setPaises como argumentos, las cuales se utilizan para actualizar los estados de películas y países después de que los datos se han recuperado de alguna fuente externa.
  // 2) Controlar la ejecución de los efectos secundarios: Al pasar un array vacío como segundo argumento a useEffect ([]), se asegura de que el efecto solo se ejecute una vez, después del primer renderizado del componente. Esto garantiza que la carga inicial de datos ocurra solo una vez cuando el componente se monta por primera vez.

    useEffect(() => {
      fetchPeliculas(setPeliculas);
      fetchPaises(setPaises);
    }, []);

    // Se define una funcion de nombre handleChange que recibe como parametro un evento e. Se utiliza la funcion setFormData para actualizar el estado de formData es decir del formulario cada vez que el usuario realiza un cambio en algun campo del mismo. 
  
    // e.target.name: se utiliza para obtener el nombre del campo del formulario.
    // e.target.value: se utiliza para obtener el valor ingresado por el usuario en ese campo.

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };

      // Se define una función EnviarDatos que se utiliza para enviar los datos del formulario. Esta función invoca la función enviarDatos, pasando como argumentos la lista de películas, los datos del formulario, las funciones para actualizar el estado del formulario y el estado de las películas, y el estado initialState.
      // La palabra reservada async indica que la funcion es asincrona, lo que significa que puede contener operaciones asincronas.
      // La palabra clave await espera que la funcion enviarDatos se complete antes de continuar con el codigo, ya que realiza operaciones asincronas, como enviar una solicitud al servidor y esperar una respuesta.

      const EnviarDatos = async () => {
        await enviarDatos(peliculas, formData, setFormData, setPeliculas, initialState);
      };
  


    return (
            <>
            <h5 className="text-center mt-3">Formulario para cargar Peliculas</h5>

            <div className="contenedorFormulario">
                <form className="formulario">
                  <div className="mb-3 text-center">
                          <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Id</label>
                          <input 
                          type="text" 
                          className="form-control border border-2 border-primary" 
                          id="id"
                          name="id"
                          value={formData.id}
                          onChange={handleChange} required/>   
                      </div>
                     <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Titulo</label>
                        <input 
                        type="text" 
                        className="form-control border border-2 border-primary" 
                        id="titulo"
                        name="titulo"
                        value={formData.titulo}
                        onChange={handleChange} required/>   
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Categoria</label>
                        <input 
                        type="text" 
                        className="form-control border border-2 border-primary" 
                        id="categoria"
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange} required/>   
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Director</label>
                        <input 
                        type="text" 
                        className="form-control border border-2 border-primary"     
                        id="director"
                        name="director"
                        value={formData.director}
                        onChange={handleChange} required/>   
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Año</label>
                        <input 
                        type="number" 
                        className="form-control border border-2 border-primary"     
                        id="año"
                        name="año"
                        value={formData.año}
                        onChange={handleChange} required/>   
                    </div>
                    <div className="mb-3 text-center">
                        <label htmlFor="exampleInputEmail1" className="form-label miTitulo">Pais</label>
                        <select
                          id="pais"
                          name="paisId"
                          className="form-control border border-2 border-primary"
                          value={formData.paisId}
                          onChange={handleChange}
                          required
                        >
                          <option value="">Selecciona un país</option>
                          {paises.map((pais) => (
                            <option key={pais.id} value={pais.id}>
                              {pais.nombre}
                            </option>
                          ))}
                        </select>  
                    </div>
                  
                    
                </form>

                 
                <div className='text-center'>
                   <button 
                   type="button" 
                   className="btn btn-outline-warning w-50 mt-3"
                   onClick={EnviarDatos}>Enviar Datos</button>
                   </div>

            </div>

            </>
    )
}

export default Modulo2;