import "./App.css";
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import Main from "../Main/Main";
import Footer from "../atAll/Footer/Footer";
import Header from "../atAll/Header/Header";
import Movies from "../Movies/Movies";
import SavedMovies from "../Movies/SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Profile/Register/Register";
import Login from "../Profile/Login/Login";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../utils/MainApi";
import InfoTooltip from "../InfoTooltip/InfoTooltip";
import ProtectedRoute from "../ProtectedRoute";
import moviesApi from "../../utils/MoviesApi";
import filterMovies from "../../utils/filterMovies";
import unOk from "../../images/Ok.png";
import unFalse from "../../images/Stop.png";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [loggedIn, setLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [registerErrorText, setRegisterErrorText] = useState({});
  const [menuOpen, setMenuOpen] = useState(false);
  const [infoTooltipOpened, setInfoTooltipOpened] = useState(false);
  const [infoTooltip, setInfoTooltip] = useState({ img: "", title: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [search, setSearch] = useState({ query: "", isShort: false });
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  useEffect(() => {
    if (localStorage.getItem("savedMovies")) {
      setSavedMovies(JSON.parse(localStorage.getItem("savedMovies")));
    } else {
      mainApi
        .getSavedMovies()
        .then((res) => {
          setSavedMovies(res);
          localStorage.setItem("savedMovies", JSON.stringify(res));
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  useEffect(() => {
    if (movies.length) {
      const filteredMovies = filterMovies(movies, search);
      setSearchedMovies(filteredMovies);
      localStorage.setItem("searchedMovies", JSON.stringify(filteredMovies));
      if (filteredMovies.length === 0) {
        setError("Ничего не найдено");
      } else setError("");
    }
  }, [movies, search.query, search.isShort, search]);

  useEffect(() => {
    if (localStorage.getItem("searchedMovies")) {
      setSearchedMovies(JSON.parse(localStorage.getItem("searchedMovies")));
    }
    if (localStorage.getItem("search")) {
      setSearch(JSON.parse(localStorage.getItem("search")));
    }
  }, []);

  const getUserInfo = () => {
    mainApi
      .getUserInfo()
      .then((res) => {
        if (res) {
          setCurrentUser(res);
          setLoggedIn(true);
          navigate("/movies");
          pathname === "/signin" || pathname === "/signup"
            ? navigate("/movies")
            : navigate(pathname);
        }
      })
      .catch((err) => {
        console.log("Авторизуйтесь", err);
        setLoggedIn(false);
      });
  };

  const handleRegister = (data) => {
    setIsLoading(true);
    mainApi
      .register(data)
      .then(() => {
        handleLogin(data)
      })
      .catch((err) => {
        setRegisterErrorText(err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogin = (data) => {
    setIsLoading(true);
    mainApi
      .login(data)
      .then((res) => {
        setCurrentUser(res);
        localStorage.setItem("jwt", res.token);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch(() => {
        setInfoTooltip({
          img: unFalse,
          title: "Неправильный E-mail или пароль",
        });
        handleInfoTooltip();
      })
      .finally(() => setIsLoading(false));
  };

  const handleEditProfile = (data) => {
    setIsLoading(true);
    mainApi
      .updateUser(data)
      .then((res) => {
        setCurrentUser(res);
        setInfoTooltip({
          img: unOk,
          title: "Данные изменены!",
        });
        handleInfoTooltip();
      })
      .catch((err) => {
        setSuccess("");
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  };

  const handleInfoTooltip = () => {
    setInfoTooltipOpened(true);
  };

  const closeInfoTooltip = () => {
    setInfoTooltipOpened(false);
  };

  const handleSignOut = () => {
    setCurrentUser({});
    setLoggedIn(false);
    localStorage.clear();
    setSavedMovies([]);
    setSearchedMovies([]);
    navigate("/");
  };

  const searchMovies = (req) => {
    if (!movies.length) {
      setIsLoading(true);
      moviesApi
        .getMovies()
        .then((res) => {
          setMovies(res);
        })
        .catch((err) => {
          setError(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз"
          );
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setSearch(req);
    localStorage.setItem("search", JSON.stringify(req));
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header handleMenu={toggleMenu} loggedIn={loggedIn} />
        <main className="main">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route
              path="/movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Movies
                    searchedMovies={searchedMovies}
                    search={search}
                    isLoading={isLoading}
                    setSearch={setSearch}
                    searchMovies={searchMovies}
                    savedMovies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    error={error}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/saved-movies"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <SavedMovies
                    movies={savedMovies}
                    setSavedMovies={setSavedMovies}
                    isLoading={isLoading}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <ProtectedRoute loggedIn={loggedIn}>
                  <Profile
                    error={error}
                    setError={setError}
                    handleEditProfile={handleEditProfile}
                    onSignOut={handleSignOut}
                    success={success}
                  />
                </ProtectedRoute>
              }
            />
            <Route
              path="/signin"
              element={
                <Login
                  error={error}
                  setError={setError}
                  onLogin={handleLogin}
                  isLoading={isLoading}
                />
              }
            />
            <Route
              path="/signup"
              element={
                <Register
                  error={error}
                  setError={setError}
                  onRegister={handleRegister}
                  isLoading={isLoading}
                  errorText={registerErrorText}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <InfoTooltip
          name="InfoTooltip"
          onClose={closeInfoTooltip}
          isOpen={infoTooltipOpened}
          title={infoTooltip.title}
          img={infoTooltip.img}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
