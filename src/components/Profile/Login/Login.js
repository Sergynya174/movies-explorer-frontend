import React from "react";
import './Login.css';
import logo from '../../../images/logo.svg';
import { Link } from 'react-router-dom';

const Login = () => {
    return(
        <section className='login'>
            <form className='login__form'>
                <Link to='/'><img className='login__logo' src={logo} alt='Логотип'/></Link>
                <h2 className='login__title'>Рады видеть!</h2>
                <div className='login__container'>
                    <label className='login__label'>E-mail</label>
                    <input
                        className='login__input'
                        minLength='2'
                        id='login-email'
                        name='login-email'
                        type='email'
                        required
                    />
                    <label className='login__label'>Пароль</label>
                    <input
                        className='login__input'
                        minLength='2'
                        id='login-password'
                        name='login-password'
                        type='password'
                        required
                    />
                </div>
                <button className='login__button' type='submit'>Войти</button>
                <div className='login__enter'>
                    <p className='login__text'>Ещё не зарегистрированы?</p>
                    <Link className='login__link' to='/signup'>Регистрация</Link>
                </div>
            </form>
        </section>
    )
}

export default Login;