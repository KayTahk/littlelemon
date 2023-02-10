import './App.css';
import React from 'react';
import Nav from './Nav.js';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <React.Fragment>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </React.Fragment>
  );
}

export default App;
