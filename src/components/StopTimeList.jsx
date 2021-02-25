
//
//
//

// imports

import React from 'react';
import PropTypes from 'prop-types';
import {v4 as uuidv4} from 'uuid';

import StopTime from './StopTime';

// declarations

const StopTimeList = ({data}) => {
  const stopTimes = data;
  return data
    ? stopTimes.map((stopTime) => <StopTime key={uuidv4} data={stopTime}/>)
    : <p>no data</p>;
};

StopTimeList.propTypes = {};

// exports

export default StopTimeList;