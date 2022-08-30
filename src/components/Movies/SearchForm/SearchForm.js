import {useState} from "react";
import "./SearchForm.css";

const SearchForm = ({
  handleSearch, 
  search, 
  setSearch
}) => {

  const [error, setError] = useState('');
  const [innerSearch, setInnerSearch] = useState(search);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (!innerSearch.query) {
        setError('Нужно ввести ключевое слово');
    } else {
        setError('');
        setSearch(innerSearch);
        handleSearch(innerSearch);
    }
  };

  const handleSearchInputChange = (evt) => {
    setInnerSearch({ ...innerSearch, query: evt.target.value });
  };

  const handleChangeCheckbox = (evt) => {
    setInnerSearch({ ...innerSearch, isShort: evt.target.checked });
    setSearch({ ...innerSearch, isShort: evt.target.checked });
  };

  return (
    <section className="search-form">
      <div className="search-form__container">
        <form className="search-form__form" onSubmit={handleSubmit}>
          <input
            className="search-form__input"
            type="text"
            placeholder="Фильм"
            minLength="1"
            required
            onChange={handleSearchInputChange}
            value={innerSearch.query || ''}
          />
          <button className="search-form__button" type="submit"></button>
        </form>
        {error && <span className="search-form__error">{error}</span>}
        <div className="search-form__filter-checkbox">
          <p className="search-form__text">Короткометражки</p>
          <input
            className="search-form__checkbox"
            type="checkbox"
            onChange={handleChangeCheckbox}
            checked={innerSearch.isShort}
          />
        </div>
      </div>
    </section>
  );
};

export default SearchForm;
