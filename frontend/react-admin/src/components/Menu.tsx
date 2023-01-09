import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <nav id="sidebarMenu" className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
            <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <NavLink to={'/'} className="nav-link">
                            <span data-feather="home"></span>
                            Dashboard
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/users'} className="nav-link">
                            <span data-feather="home"></span>
                            Users
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/Roles'} className="nav-link">
                            <span data-feather="home"></span>
                            Roles
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/products'} className="nav-link">
                            <span data-feather="home"></span>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={'/orders'} className="nav-link">
                            <span data-feather="home"></span>
                            Orders
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Menu;
