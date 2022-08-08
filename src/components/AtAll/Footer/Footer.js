import React from "react";
import './Footer.css';
import { useRoutes } from 'react-router-dom';
import FooterLanding from './FooterLanding/FooterLanding';

const Footer = () => {
    return useRoutes(
        [
            { path: '/', element: <FooterLanding /> },
            { path: '/movies', element: <FooterLanding /> },
            { path: '/saved-movies', element: <FooterLanding /> },
        ]
    )
}

export default Footer;