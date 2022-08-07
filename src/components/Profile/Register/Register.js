import React from "react";
import './Register.css';
import logo from '../../../images/logo.png';
//import { Link } from "react-router-dom";

const Register = () => {
    return(
        <section className='register'>
            <form className='register__form'>
                <img className='register__logo' src={logo} alt='Логотип'/>
                <h2 className='register__title'>Добро пожаловать!</h2>
                <label className='register__label'>Имя</label>
                <input
                    className='register__input'
                    minLength='2'
                    id='register-name'
                    name='register-name'
                    type='text'
                    required
                />
                <label className='register__label'>E-mail</label>
                <input
                    className='register__input'
                    minLength='2'
                    id='register-email'
                    name='register-email'
                    type='email'
                    required
                />
                <label className='register__label'>Пароль</label>
                <input
                    className='register__input'
                    minLength='2'
                    id='register-password'
                    name='register-password'
                    type='password'
                    required
                />
                <span className='register__error'>Что-то пошло не так...</span>
                <button className='register__button' type='submit'>Зарегистрироваться</button>
                <div className='register__enter'>
                    <p className='register__text'>Уже зарегистрированы?</p>
                </div>
            </form>
        </section>
    )
}

export default Register;