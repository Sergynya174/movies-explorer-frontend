import React from "react";
import "./Register.css";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import {useFormWithValidation} from '../../../hooks/useFormValidation';


const Register = ({ onRegister, isLoading, error }) => {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log("in register-handleSubmit", values);
    onRegister(values);
  };

  const showError = () => {
    for (const key in errors) {
      if (errors[key]) return errors[key];
    }
  };

  return (
    <section className="register">
      <form className="register__form" onSubmit={handleSubmit}>
        <Link to="/">
          <img className="register__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="register__title">Добро пожаловать!</h2>
        <div className="register__container">
          <label className="register__label">Имя</label>
          <input
            className="register__input"
            minLength="2"
            maxLength="40"
            id="register-name"
            name="name"
            type="text"
            required
            pattern="^[A-Za-zА-Яа-яЁё /s -]+$"
            autoComplete="on"
            value={values.name || ""}
            onChange={handleChange}
          />
          <label className="register__label">E-mail</label>
          <input
            className="register__input"
            minLength="2"
            maxLength="40"
            id="register-email"
            name="email"
            type="email"
            required
            autoComplete="on"
            value={values.email || ""}
            onChange={handleChange}
          />
          <label className="register__label">Пароль</label>
          <input
            className="register__input"
            minLength="2"
            maxLength="40"
            id="register-password"
            name="password"
            type="password"
            required
            autoComplete="on"
            value={"" || values.password}
            onChange={handleChange}
          />
          <span
            type="error"
            className={`register__error ${
              !isValid ? "register__error_active" : ""
            }`}
          >
            {showError()}
          </span>
        </div>
        <button
          className="register__button"
          type="submit"
          disabled={!isValid ? true : ''}
        >
          Зарегистрироваться
        </button>
        <div className="register__enter">
          <p className="register__text">Уже зарегистрированы?</p>
          <Link className="register__link" to="/signin">
            Войти
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Register;
