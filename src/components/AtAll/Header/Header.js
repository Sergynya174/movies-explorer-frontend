/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
//import {Link} from 'react-router-dom';
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    return(
        <section className='header'>
            <img className='header__logo' src={logo} alt='Логотип'/>
            <div className='header__container'>
                <a className='header__link' href='#'>Регистрация</a>
                <a className='header__link header__link_active' href='#'>Войти</a>
            </div>  
        </section>
    )
}

export default Header;