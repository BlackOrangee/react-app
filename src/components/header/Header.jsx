import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Header.css';
import Auth from '../../auth/Auth';
import { Flex } from 'antd';

const Header = () => {

    const location = useLocation();

    return (
        <header>
            <div style={{ display: 'Flex', justifyContent: 'space-between', alignItems: 'center', margin: '0 20px' }}>
                <nav>
                    {location.pathname !== '/' && <NavLink to="/">Home</NavLink>}
                    {location.pathname !== '/todo' && <NavLink to="todo">Todo</NavLink>}
                    {location.pathname !== '/example' && <NavLink to="example">Example</NavLink>}
                    {location.pathname !== '/counters' && <NavLink to="counters">Counters</NavLink>}
                </nav>
                <Auth />
            </div>
        </header>
    );
}

export default Header;
