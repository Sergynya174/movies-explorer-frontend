/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import './Header.css';
import logo from '../../../images/logo.png';

const Header = () => {
    return(
        /*<section className='header'>
            <img className='header__logo' src={logo} alt='Логотип'/>
            <div className='header__container'>
                <a className='header__link' href='#'>Регистрация</a>
                <a className='header__link header__link_active' href='#'>Войти</a>
            </div>
        </section>*/
        <section className='header header_navigation'>
            <div className='header__container'>
                <img className='header__logo' src={logo} alt='Логотип'/>
                <a className='header__link header__link_nanigation' href='#'>Фильмы</a>
                <a className='header__link header__link_nanigation' href='#'>Сохраненные фильмы</a>
            </div>
            <div className='header__account'></div>
        </section>
    )
}

export default Header;