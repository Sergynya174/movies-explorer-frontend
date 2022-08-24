import { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import moviesApi from '../../../utils/MoviesApi';

const MoviesCardList = ({
  savedMovies,
  onDeleteMovie,
  onSaveMovie = () => null,
}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    moviesApi.getMovies()
    .then((res) => {
      setMovies(res)
    })
    .catch((err) => console.log(err));
  }, []);

  return (
    <section className="movies-list">
      <ul className="movies-list__cards">
        {movies.map((movie) => (
            <MoviesCard
              movie={movie}
              key={movie.id || movie.movieId}
              savedMovies={savedMovies}
              onDelete={onDeleteMovie}
              onSave={onSaveMovie}
            />
        ))}
      </ul>
    </section>
  );
};

export default MoviesCardList;
