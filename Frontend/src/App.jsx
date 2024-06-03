// Importo don componenetes de react-router-dom
import { Routes, Route } from 'react-router-dom'
import Navegacion from './components/Navegacion.jsx'
import Modulo1 from './components/Modulo1.jsx'
import Modulo2 from './components/Modulo2.jsx'

function App() {
  
  // Renderizo el componente Navegacion
  // <Route path='/modulo1' element={<Modulo1 />} /> y <Route path='/modulo2' element={<Modulo2 />} />: Especifica las rutas y los componentes asociados a esas rutas. En este caso, si la URL coincide con '/modulo1', se renderizará el componente Modulo1, y si coincide con '/modulo2', se renderizará el componente Modulo2.
  // El return determina que elementos quiero que me retornen, para este caso devuelve a la interfaz del usuario los componentes declarados.
  // <>...</> es una forma abreviada de utilizar un fragmento en React. En React, un fragmento es una forma de agrupar múltiples elementos hijos sin agregar un nodo adicional al DOM.
  // Routes es un contenedor que me permite agrupar varias rutas juntas. Route es un componente que define una ruta específica y el componente que debe renderizarse cuando la URL coincide con esa ruta. El prop path en Route especifica la URL para la cual se debe activar esa ruta.
  return (
    <>
    
    <Navegacion />

    <Routes>
      <Route path='/modulo1' element={<Modulo1 />} />
      <Route path='/modulo2' element={<Modulo2 />} />
    </Routes>
     
    </>
  )
}

export default App

// export default App es una declaración que exporta la función App como el miembro predeterminado del módulo. Al utilizar export default, puedes importar la función con cualquier nombre cuando la importas en otro archivo.

// En otras palabras, cuando un componente se "renderiza", se traduce en elementos HTML que se muestran en el navegador.