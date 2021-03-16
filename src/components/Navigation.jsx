
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
import Style from '../tools/Style';
import Text from '../tools/Text';

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

const Navigator = ({lang}) => {
  return <nav style={Style.desktopNav()}>
    <Link to='/' style={Style.desktopNavElement()}>{Text.home(lang).text}</Link>
    <Link to='/configure' style={Style.desktopNavElement()}>{Text.configure(lang).text}</Link>
    <Link to='/404' style={Style.desktopNavElement()}>err</Link>
    <Link to='/stoptimes' style={Style.desktopNavElement()}>{Text.stoptimes(lang).text}</Link>
  </nav>;
};

// Navigation is the main component of the application that renders both the
// navigational links and the appropriate component based on active route

const Navigation = (props) => {
  const {lang} = props;
  return <Router basename='/'>
    <Navigator lang={lang}/>
    <Routes/>
  </Router>;
};

// exports

export default Navigation;