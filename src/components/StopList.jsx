
//
//
//

// imports

import React from 'react';
import PropTypes from 'prop-types';

import Stop from './Stop';

// declarations

const tester = {
  name: 'test', zoneId: 'ABCD', gtfsId: 'HSL:1234567', code: 'H1234',
  stoptimesWithoutPatterns: [
    {
      scheduledArrival: 81200,
      realtimeArrival: 81000,
      scheduledDeparture: 81200,
      realtimeDeparture: 81100,
      realtime: true,
      realtimeState: 'UPDATED',
      serviceDay: 1613685600,
      trip: {
        route: {
          shortName: '00',
          longName: 'nll1 - nll2(M) - nll3',
          mode: 'BUS'
        }
      }
    }
  ]
};

const StopList = ({data}) => {
  return data
    ? <article>
      <Stop data={tester}/>
    </article>
    : <article>
      <p>no data</p>
    </article>;
};

StopList.propTypes = {};

// exports

export default StopList;