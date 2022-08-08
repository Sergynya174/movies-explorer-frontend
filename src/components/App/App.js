import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from '../Main/Main';
import Footer from '../AtAll/Footer/Footer';
import Header from '../AtAll/Header/Header';
import Movies from '../Movies/Movies';
import SavedMovies from '../Movies/SavedMovies/SavedMovies';
import Profile  from '../Profile/Profile';
import Register from '../Profile/Register/Register';
import Login from '../Profile/Login/Login';
import NotFound from '../NotFound/NotFound';
 
function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className='page'>
      <Header handleMenu={toggleMenu} />
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/movies' element={<Movies/>} />
        <Route path='/saved-movies' element={<SavedMovies/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/signin' element={<Login/>} />
        <Route path='/signup' element={<Register/>} />
        <Route path='/*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
