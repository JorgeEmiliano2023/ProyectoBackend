// En el contexto de React Router, "Link" es un componente que se utiliza para crear enlaces de navegación en una aplicación React. Al importarlo de esta manera, estás importando específicamente el componente "Link" del módulo "react-router-dom".
import { Link } from "react-router-dom";


function Navegacion () {
    return (
        <>
                <nav className='navbar navbar-expand-lg bg-primary'>
                <div className='container-fluid'>
                    <Link to='/' className='navbar-brand'>CineAtlas</Link>
                    <button 
                    className='navbar-toggler' 
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                    </button>
                    <div className='collapse navbar-collapse' id='navbarNav'>
                    <ul className='navbar-nav mx-auto fs-5 fw-bold'>
                        <li className='av-item'>
                        <Link to='/modulo1' className="nav-link" aria-current='page'>Modulo1</Link>
                        </li>
                        <li className='av-item'>
                        <Link to='/modulo2' className="nav-link">Modulo2</Link>
                        </li>
                       
                    </ul>
                    </div>
                </div>
                </nav>
        </>
    )
}

export default Navegacion;