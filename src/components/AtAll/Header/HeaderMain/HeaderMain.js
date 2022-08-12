import React from "react";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../../images/logo.png';

const HeaderMain = () => {
    const [isClicked, setIsDataLoad] = React.useState(false);

    function handleClose() {
        setIsDataLoad(false)
    }
    
    function handleOpen() {
        setIsDataLoad(true)
    }

    return(
        <>
            <section className='header header_navigation'>
                <div className='header__container'>
                    <Link to='/'><img className='header__logo' src={logo} alt='Логотип'/></Link>
                    <Link className='header__link header__link_navigation' to='/movies'>Фильмы</Link>
                    <Link className='header__link header__link_navigation' to='/saved-movies'>Сохраненные фильмы</Link>
                </div>
                <NavLink to='/profile'>            
                    <button className='header__account' type='button'></button>
                    <button onClick={handleOpen} className='header__burger-menu' type='button'></button>
                </NavLink>
                {
                    isClicked ?
                        <>
                            <div className='header__overlay'></div>
                            <div className='header__menu'>
                                <NavLink exact to='/' onClick={handleClose} className='header__menu-link'>Главная</NavLink>
                                <NavLink to='/movies' onClick={handleClose} className='header__menu-link'>Фильмы</NavLink>
                                <NavLink to='/saved-movies' onClick={handleClose} className='header__menu-link'>Сохраненные фильмы</NavLink>
                                <Link to='/profile' onClick={handleClose} className='header__account_active'></Link>
                                <button onClick={handleClose} className='header__menu-close' type='button'>&#x2716;</button>
                            </div>
                        </>
                        :
                        ''
                }
            </section>
        </>
    )
}

export default HeaderMain;