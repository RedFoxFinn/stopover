
// Author:              Antti Aarnio || RedFoxFinn
// Project:             stopover
// Description:         Personal project aiming to build Electron.js & React.js application which will display realtime stop and routing data of HSL
// File:                Style.js
// File description:    style is a self-made tool to provide inline styling for React components

//   Function definitions for styling tool

const platform = () => {
  return {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center'
  };
};

const sortings = () => {
  return {
    marginLeft: '1em',
    marginRight: '1em',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignContent: 'center'
  };
};

const inline = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center'
  };
};

const person = () => {
  return {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    alignContent: 'center',
    height: '4em'
  };
};

const appName = () => {
  return {
    fontSize: '3em',
    color: 'black'
  };
};

const personName = () => {
  return {
    fontSize: '2.5em',
    color: 'black'
  };
};

const authorName = () => {
  return {
    fontSize: '1em',
    color: 'grey'
  };
};

const text = () => {
  return {
    fontSize: '1em',
    color: 'black'
  };
};

const textL = () => {
  return {
    fontSize: '1.5em',
    color: 'black'
  };
};

const success = () => {
  return {
    fontSize: '1em',
    color: 'forestgreen'
  };
};

const failure = () => {
  return {
    fontSize: '1em',
    color: '#dc4233'
  };
};

const running = () => {
  return {
    fontSize: '1em',
    color: 'darkblue'
  };
};

const selection = () => {
  return {
    fontSize: '1.5em',
    color: '#dc4233'
  };
};

const sortingButton = () => {
  return {
    marginBottom: '0.5em',
    width: '12em',
    height: '2em',
    outline: '1px solid #dc4233',
    border: '1px solid transparent',
    background: 'transparent'
  };
};

const fetchingButton = () => {
  return {
    marginLeft: '1em',
    width: '6em',
    height: '2em',
    outline: '1px solid #dc4233',
    border: '1px solid transparent',
    background: 'transparent'
  };
};

const searchButtons = () => {
  return {
    marginLeft: '1em',
    width: '8em',
    height: '2em',
    outline: '1px solid #dc4233',
    border: '1px solid transparent',
    background: 'transparent'
  };
};

const searchField = () => {
  return {
    width: '12em',
    height: '1em',
    outline: '1px solid #dc4233',
    border: '1px solid transparent',
    background: 'transparent'
  };
};

const stopList = () => {};

const stop = () => {};

const stopTimeList = () => {};

const stopTime = () => {};

const desktopNav = () => {
  return inline();
};

const desktopNavElement = () => {
  return {
    fontSize: '1.25em',
    marginLeft: '0.5em',
    marginRight: '0.5em',
    marginTop: '0.25em',
    marginBottom: '0.25em'
  };
};

const mobileNav = () => {};

const mobileNavElement = () => {
  return {};
};

//   styling tool exporting

export default {
  appName, authorName, desktopNav, desktopNavElement, failure, fetchingButton, inline,
  platform, person, personName, running, searchButtons, searchField, selection, sortingButton,
  sortings, stop, stopList, stopTimeList, stopTime, success, text, textL
};