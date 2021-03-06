
// Author:    RedFoxFinn
// Project:   Stopover
// File:      index.js

// imports

import React from 'react';
import ReactDOM from 'react-dom';
import Stopover from './Stopover';
import reportWebVitals from './reportWebVitals';

// render on html page as element 'root'

ReactDOM.render(
  <React.StrictMode>
    <Stopover/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
