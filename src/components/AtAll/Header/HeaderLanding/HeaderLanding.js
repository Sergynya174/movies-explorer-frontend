import React from "react";
import logo from '../../../../images/logo.png';
import { Link } from 'react-router-dom';

const HeaderLanding = () => {
    return(
        <section className='header'>
            <Link to='/'><img className='header__logo' src={logo} alt='Логотип'/></Link>
            <div className='header__container'>
                <Link className='header__link' to='/signup'>Регистрация</Link>
                <Link className='header__link header__link_active' to='/signin'>Войти</Link>
            </div>
        </section>
    )
}

export default HeaderLanding;