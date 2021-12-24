import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

export const Navbar = () => {
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    return (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            <div className="container-fluid">
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Algoritmos
                </Link>
                <button className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNavDropdown">
                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-link ' + (isActive ? 'active' : '')}
                                to="/users"
                            >
                                Usuarios
                            </NavLink>

                        </li>
                        {/* <li className="nav-item">
                            <NavLink
                                className={({ isActive }) => 'nav-item nav-link ' + (isActive ? 'active' : '')}
                                to="/users/create"
                            >
                                Crear un usuario nuevo
                            </NavLink>
                        </li> */}
                    </ul>
                </div>
            </div>
        </nav>
    )
}