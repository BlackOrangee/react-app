import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {

    const location = useLocation();

    return (
        <header>
            <nav>
                {location.pathname !== '/' && <NavLink to="/">Home</NavLink>}
                {location.pathname !== '/todo' && <NavLink to="todo">Todo</NavLink>}
                {location.pathname !== '/example' && <NavLink to="example">Example</NavLink>}
                {location.pathname !== '/counters' && <NavLink to="counters">Counters</NavLink>}
            </nav>
        </header>
    );
}

export default Header;
