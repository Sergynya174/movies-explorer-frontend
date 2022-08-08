import React from "react";
import './Header.css';
import { useRoutes } from 'react-router-dom';
import HeaderLanding from './HeaderLanding/HeaderLanding';
import HeaderMain from './HeaderMain/HeaderMain';

const Header = ({ handleMenu }) => {
    return useRoutes(
        [
            { path: '/', element: <HeaderLanding handleOpenMenu={handleMenu} /> },
            { path: '/movies', element: <HeaderMain handleOpenMenu={handleMenu} /> },
            { path: '/saved-movies', element: <HeaderMain handleOpenMenu={handleMenu} /> },
            { path: '/profile', element: <HeaderMain handleOpenMenu={handleMenu} /> },
        ]
    )
}

export default Header;