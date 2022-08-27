import React, { useEffect, useContext } from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../hooks/useFormValidation";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const Profile = ({ handleEditProfile, onSignOut, isLoading }) => {
    const { values, handleChange, errors, isValid, setValues, resetForm } =
        useFormWithValidation();
    const { name, email } = useContext(CurrentUserContext);

    const showError = () => {
        for (const key in errors) {
            if (errors[key]) return errors[key];
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleEditProfile(values);
    };

    useEffect(() => {
      resetForm();
      setValues({ name, email });
    }, [name, email, setValues, resetForm]);

  return (
    <section className="profile">
      <form className="profile-form" onSubmit={handleSubmit}>
        <h2 className="profile__title">Привет, {name}!</h2>
        <div className="profile__container">
          <label className="profile__label">Имя</label>
          <input
            className="profile__input"
            minLength="2"
            maxLength="40"
            id="profile-name"
            name="name"
            type="text"
            required
            placeholder="Имя"
            onChange={handleChange}
            value={values.name || ""}
          />
        </div>
        <div className="profile__container">
          <label className="profile__label">E-mail</label>
          <input
            className="profile__input"
            minLength="2"
            maxLength="40"
            id="profile-email"
            name="email"
            type="email"
            required
            placeholder="email"
            onChange={handleChange}
            value={values.email || ""}
          />
        </div>
        <span
            type="error"
            className={`profile__error ${!isValid ? "profile__error_active" : ""}`}
        >
            {showError()}
        </span>
        <button
          className="profile__button profile__button-edit"
          type="submit"
          disabled={
            !isValid || (values.name === name && values.email === email) || isLoading
          }
        >
          Редактировать
        </button>
        <button
          className="profile__button profile__button-exit"
          onClick={onSignOut}
          type="submit"
        >
          Выйти из аккаунта
        </button>
      </form>
    </section>
  );
};

export default Profile;
