
// Author:    RedFoxFinn
// Project:   Stopover
// File:      Stopover.jsx

// imports

import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Style from './tools/Style';
import LocalStorageHandler from './tools/LocalStorageHandler';

// declarations

// Stopover is the main component provided for rendering to the React virtual DOM
// and provides the very base layout of the application

const Stopover = () => {
  const lang = LocalStorageHandler.checkLang();
  return <article style={Style.platform()}>
    <Header lang={lang}/>
    <Navigation lang={lang}/>
    <Footer lang={lang}/>
  </article>;
};

// exports

export default Stopover;