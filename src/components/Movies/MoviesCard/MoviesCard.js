import { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import "./MoviesCard.css";
import { CurrentUserContext } from "../../../contexts/CurrentUserContext";

const MoviesCard = ({
  movie, 
  savedMovies, 
  onDelete, 
  onSave
}) => {
  const [imgSrc, setImgSrc] = useState("");
  const [saved, setSaved] = useState(true);
  let location = useLocation();
  const { _id } = useContext(CurrentUserContext);

  const handleMovieCardClick = () => {
    window.open(movie.trailerLink, '_blank');
  };

  useEffect(() => {
    const isSaved = savedMovies.find((item) => item.movieId === movie.id);
    setSaved(isSaved);
  }, [movie, savedMovies]);

  useEffect(() => {
    const src =
      location.pathname === "/saved-movies"
        ? movie.image
        : movie?.image?.url.includes("https://api.nomoreparties.co")
        ? movie.image
        : "https://api.nomoreparties.co" + movie.image.url;
    setImgSrc(src);
  }, [movie]);

  const formatDuration = (duration) => {
    const hours = Math.floor(duration / 60);
    const min = duration % 60;
    return hours ? `${hours}ч ${min}м` : `${min}м`;
  };

  const handleLikeClick = (evt) => {
    evt.stopPropagation();
    if (saved) {
      const { _id } = savedMovies.find((item) => item.movieId === movie.id);
      onDelete(_id);
    } else {
      onSave(movie, _id);
      setSaved(true);
    }
  };

  const handleDelete = (evt) => {
    evt.stopPropagation();
    const { _id } = movie;
    onDelete(_id);
  };

  return (
    <li className="movie-card">
      <div className="movie-card__container-img" onClick={handleMovieCardClick}>
        <img className="movie-card__img" alt={movie.nameRU} src={imgSrc} />
      </div>
      <div className="movie-card__container">
        <div className="movie-card__info">
          <h2 className="movie-card__name">{movie.nameRU}</h2>
          <p className="movie-card__time">{formatDuration(movie.duration)}</p>
        </div>
        {location.pathname === '/movies' && (
          <button
            onClick={handleLikeClick}
            className={
              saved
                ? "movie-card__button movie-card__like"
                : "movie-card__button movie-card__like_active"
            }
            type="button"
          ></button>
        )}
        {location.pathname === '/saved-movies' && (
          <button
            className="movie-card__button movie-card__delete"
            onClick={handleDelete}
          ></button>
        )}
      </div>
    </li>
  );
};

export default MoviesCard;
