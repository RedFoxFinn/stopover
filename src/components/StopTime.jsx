
//
//
//

// imports

import React, {} from 'react';
import PropTypes from 'prop-types';

import {estimate} from '../tools/TimeTools';

const StopTime = ({data}) => {
  const {
    scheduledArrival, realtimeArrival,
    scheduledDeparture, realtimeDeparture,
    realtime,
    serviceDay, trip
  } = data;
  return data
    ? realtime
      ? <table>
        <tbody>
          <tr>
            <td>realtime arrival in: {estimate(realtimeArrival, serviceDay)}</td>
          </tr>
          <tr>
            <td>realtime departure in: {estimate(realtimeDeparture, serviceDay)}</td>
          </tr>
        </tbody>
      </table>
      : <table>
        <tbody>
          <tr>
            <td>scheduled arrival in: {estimate(scheduledArrival, serviceDay)}</td>
            <td>scheduled departure in: {estimate(scheduledDeparture, serviceDay)}</td>
          </tr>
        </tbody>
      </table>
    : <article>
      <p>no stoptimes available</p>
    </article>;
};

StopTime.propTypes = {};

export default StopTime;