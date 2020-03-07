import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (  
        <header className="app-header">
            <p className="nombre-usuario">
                Hola <span>Andres!</span>
            </p>

            <nav className="nav-principal">
                <li>

                <Link to="/">Cerrar Sesion</Link>
                </li>
            </nav>
        </header>
    );
}
 
export default Navbar;