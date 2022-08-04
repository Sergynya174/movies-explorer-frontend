import './App.css';
import React from 'react';
import Main from '../Main/Main';
import Footer from '../AtAll/Footer/Footer';
import Header from '../AtAll/Header/Header';

function App() {
  //const [isMenuOpened, setMenuOpened] = React.useState(false);
  /*const toggleMenu = () => {
    setMenuOpened(!isMenuOpened);
  };*/

  return (
    <div className="page">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
