import { useState, useEffect } from "react";
import "./Movies.css";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import Preloader from "./Preloader/Preloader";
import mainApi from "../../utils/MainApi";

const Movies = ({
  savedMovies,
  setSavedMovies,
  isLoading,
  error,
  searchedMovies,
  search,
  searchMovies,
  setSearch,
}) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [extraMovies, setExtraMovies] = useState(null);
  const [limitMovies, setLimitMovies] = useState(null);
  const [shownMovies, setShownMovies] = useState([]);
  const [isShowMoreButton, setIsShowMoreButton] = useState(false);

  const handleDeleteMovie = (movieId) => {
    mainApi
      .deleteMovie(movieId)
      .then(() => {
        const filteredMovies = savedMovies.filter(
          (item) => item._id !== movieId
        );
        setSavedMovies(filteredMovies);
        localStorage.setItem("savedMovies", JSON.stringify(filteredMovies));
      })
      .catch((err) => console.log(err));
  };

  const handleSaveMovie = (movie) => {
    mainApi.addNewMovie(movie)
      .then(newMovie => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
  };

  useEffect(() => {
    const resizeHandler = () => {
      setTimeout(() => setScreenWidth(window.innerWidth), 500);
    };
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  useEffect(() => {
    switch (true) {
      case screenWidth > 1024:
        setExtraMovies(3);
        setLimitMovies(12);
        break;
      case screenWidth > 768:
        setExtraMovies(2);
        setLimitMovies(8);
        break;
      default:
        setExtraMovies(2);
        setLimitMovies(5);
        break;
    }
  }, [screenWidth, searchedMovies]);

  useEffect(() => {
    const newShownMovies = searchedMovies.slice(0, limitMovies);
    setShownMovies(newShownMovies);
    if (newShownMovies.length < searchedMovies.length) {
      setIsShowMoreButton(true);
    } else setIsShowMoreButton(false);
  }, [limitMovies, searchedMovies]);

  const handleShowMore = () => {
    setLimitMovies((prevValue) => (prevValue += extraMovies));
  };

  return (
    <section className="cards">
      <SearchForm
        search={search}
        handleSearch={searchMovies}
        setSearch={setSearch}
      />
      {isLoading ? (
        <Preloader />
      ) : error ? (
        <span className="movies__error">{error}</span>
      ) : (
        <>
          <MoviesCardList
          movies={shownMovies}
          handleShowMoreButton={handleShowMore}
          onDeleteMovie={handleDeleteMovie}
          onSaveMovie={handleSaveMovie}
          savedMovies={savedMovies}
          />
        </>
      )}
      {isShowMoreButton && (
        <button className="movies__more-button" onClick={handleShowMore}>
          Ещё
        </button>
      )}
    </section>
  );
};

export default Movies;
