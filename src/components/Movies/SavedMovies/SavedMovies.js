import { useState, useEffect } from "react";
import './SavedMovies.css';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import mainApi from '../../../utils/MainApi';
import filterMovies from "../../../utils/filterMovies";
import "../Movies.css";

const SavedMovies = ({
    movies,
    setSavedMovies,
}) => {

    const [search, setSearch] = useState({query: '', isShort: false});
    const [filteredMovies, setFilteredMovies] = useState(movies);
    const [error, setError] = useState('');

    const handleDeleteMovie = (movieId) => {
        mainApi
            .deleteMovie(movieId)
            .then(() => {
                const newSavedMovies = movies.filter((item) => item._id !== movieId);
                const newFilteredMovies = filteredMovies.filter(
                (item) => item._id !== movieId
                );
                setSavedMovies(newSavedMovies);
                setFilteredMovies(newFilteredMovies);
                localStorage.setItem('savedMovies', JSON.stringify(newSavedMovies));
            })
            .catch((err) => console.log(err));
    };
    
    const searchInSavedMovies = (search) => {
        if (movies.length) {
            const filteredMovies = filterMovies(movies, search);
            setFilteredMovies(filteredMovies);
            if (filteredMovies.length === 0) {
                setError('Ничего не найдено');
            } else setError('');
        }
        setSearch(search);
    };
    
    useEffect(() => {
        if (movies.length) {
            const filteredMovies = filterMovies(movies, search);
            setFilteredMovies(filteredMovies);
            if (filteredMovies.length === 0) {
                setError('Ничего не найдено');
            } else setError('');
        }
    }, [movies, search.query, search.isShort]);

    return(
        <section className='saved-movies'>
            <SearchForm
            search={search}
            handleSearch={searchInSavedMovies}
            setSearch={setSearch}
            />
            {error && <span className="saved-movies__error">{error}</span>}
            <MoviesCardList
            movies={filteredMovies}
            savedMovies={filteredMovies}
            onDeleteMovie={handleDeleteMovie}
            />
      
        </section>
    )
}

export default SavedMovies;