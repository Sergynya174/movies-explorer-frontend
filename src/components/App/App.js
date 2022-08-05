import './App.css';
import React from 'react';
//import Main from '../Main/Main';
//import Footer from '../AtAll/Footer/Footer';
import Header from '../AtAll/Header/Header';
//import Movies from '../Movies/Movies';
//import SearchForm from '../Movies/SearchForm/SearchForm';
import Profile  from '../Profile/Profile';

function App() {

  return (
    <div className='page'>
      <Header />
      <Profile />
    </div>
  );
}

export default App;
