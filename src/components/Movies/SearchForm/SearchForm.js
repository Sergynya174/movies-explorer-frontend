import React from "react";
import './SearchForm.css';
//import search from '../../../images/find.png';

const SearchForm = () => {
    return(
        <section className='search-form'>
            <div className='search-form__container'>
                <form className='search-form__form'>
                    <input className='search-form__input' placeholder='Фильм' required />
                    <button className='search-form__button' type='submit'></button>
                </form>
                <div className='search-form__filter-checkbox'>
                    <input className='search-form__checkbox' type='checkbox'/>
                    <p className='search-form__text'>Короткометражки</p>
                </div>
            </div>
        </section>
    )
}

export default SearchForm;