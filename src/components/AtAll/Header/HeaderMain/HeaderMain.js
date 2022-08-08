import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../images/logo.png';

const HeaderMain = () => {
    return(
        <section className='header header_navigation'>
            <div className='header__container'>
                <Link to='/'><img className='header__logo' src={logo} alt='Логотип'/></Link>
                <Link className='header__link header__link_navigation' to='/movies'>Фильмы</Link>
                <Link className='header__link header__link_navigation' to='/saved-movies'>Сохраненные фильмы</Link>
            </div>
            <NavLink to='/profile'>
                <div className='header__account'></div>
            </NavLink>
        </section>
    )
}

export default HeaderMain;