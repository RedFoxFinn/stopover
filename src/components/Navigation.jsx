
// Author:    RedFoxFinn
// Project:   Stopover
// File:      Navigation.jsx

// imports

import React, {} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Configuration from './Configuration';
import FourOFour from './FourOFour';
import Root from './Root';
import StopList from './StopList';

// declarations

// Routes provides declared routes to applications React Router

const Routes = () => {
  return <Switch>
    <Route exact path='/' render={(props) => <Root {...props} />} />
    <Route path='/configure' render={(props) => <Configuration {...props} />} />
    <Route path='/404' render={(props) => <FourOFour {...props}/>} />
    <Route path='/stoptimes' render={(props) => <StopList {...props} data={true}/>}/>
  </Switch>;
};

// Navigator provides declared navigational links to application UI

const Navigator = () => {
  return <nav>
    <Link to='/'>Home</Link>
    <Link to='/configure'>Configure</Link>
    <Link to='/404'>err</Link>
    <Link to='/stoptimes'>Stop times</Link>
  </nav>;
};

// Navigation is the main component of the application that renders both the
// navigational links and the appropriate component based on active route

const Navigation = () => {
  return <Router basename='/'>
    <Navigator/>
    <Routes/>
  </Router>;
};

// exports

export default Navigation;