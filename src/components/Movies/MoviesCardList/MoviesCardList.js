import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";


const MoviesCardList = ({
  movies,
  savedMovies,
  onDeleteMovie,
  onSaveMovie = () => null,
}) => {

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
