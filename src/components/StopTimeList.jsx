
//
//
//

// imports

import React from 'react';
import PropTypes from 'prop-types';

import Stop from './Stop';
import {STATION_MODE, STOP_MODE, ZONE} from '../tools/Enums';
import {TEST_ENTRY, TIMES} from '../tools/Tester';
import {estimate} from '../tools/TimeTools';

// declarations

const tester = {
  name: 'test', zoneId: 'ABCD', gtfsId: 'HSL:1234567', code: 'H1234',
  stoptimesWithoutPatterns: [
    {
      scheduledArrival: 64200,
      realtimeArrival: 64000,
      scheduledDeparture: 64200,
      realtimeDeparture: 64100,
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

const StopTimeList = ({data}) => {
  const {realtimeArrival, serviceDay} = tester.stoptimesWithoutPatterns[0];
  estimate(84510, serviceDay);
  return data
    ? <article>
      <Stop data={tester}/>
    </article>
    : <article>
      <p>no data</p>
    </article>;
};

StopTimeList.propTypes = {};

// exports

export default StopTimeList;