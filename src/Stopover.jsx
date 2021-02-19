
// Author:    RedFoxFinn
// Project:   Stopover
// File:      Stopover.jsx

// imports

import React from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import Navigation from './components/Navigation';

// declarations

// Stopover is the main component provided for rendering to the React virtual DOM
// and provides the very base layout of the application

const Stopover = () => {
  return <article>
    <Header/>
    <Navigation/>
    <Footer/>
  </article>;
};

// exports

export default Stopover;