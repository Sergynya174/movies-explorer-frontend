import { useEffect } from "react";
import "./Login.css";
import logo from "../../../images/logo.svg";
import { Link } from "react-router-dom";
import { useFormWithValidation } from "../../../hooks/useFormValidation";

const Login = ({ onLogin, setError, error }) => {

  const { values, errors, isValid, handleChange } = useFormWithValidation();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("in login-handleSubmit", values);
    onLogin(values);
  };

  const showError = () => {
    for (const key in errors) {
      if (errors[key]) return errors[key];
    }
  };

  useEffect(() => {
        console.log('error');
        console.log(error);
        console.log('errors');
        console.log(errors);
        setError('');
    }, [error, errors, setError, values]);

  return (
    <section className="login">
      <form className="login__form" onSubmit={handleSubmit}>
        <Link to="/">
          <img className="login__logo" src={logo} alt="Логотип" />
        </Link>
        <h2 className="login__title">Рады видеть!</h2>
        <div className="login__container">
          <label className="login__label">E-mail</label>
          <input
            className="login__input"
            minLength="2"
            maxLength="40"
            id="login-email"
            name="email"
            type="email"
            required
            onChange={handleChange}
            value={values.email || ""}
          />
          <label className="login__label">Пароль</label>
          <input
            className="login__input"
            minLength="2"
            maxLength="40"
            id="login-password"
            name="password"
            type="password"
            required
            onChange={handleChange}
            value={values.password || ""}
          />
          <span
            type="error"
            className={`login__error ${!isValid ? "login__error_active" : ""}`}
          >
            {showError()}
          </span>
        </div>
        <button
          className="login__button"
          type="submit"
          disabled={!isValid ? true : ""}
        >
          Войти
        </button>
        <div className="login__enter">
          <p className="login__text">Ещё не зарегистрированы?</p>
          <Link className="login__link" to="/signup">
            Регистрация
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Login;
