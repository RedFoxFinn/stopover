
//
//
//

// imports

import React, {} from 'react';
import PropTypes from 'prop-types';

import StopTimeList from './StopTimeList';

const Stop = ({data}) => {
  const {name, zoneId, gtfsId, code, stoptimesWithoutPatterns} = data;
  return data
    ? <details>
      <summary><strong>{name} | {zoneId}</strong></summary>
      <table>
        <thead>
          <tr>
            <td></td><td></td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{code} / {gtfsId}</td>
          </tr>
        </tbody>
      </table>
      <StopTimeList data={stoptimesWithoutPatterns}/>
    </details>
    : <details>
      <summary>no data summary</summary>
      <p>no data details</p>
    </details>;
};

Stop.propTypes = {};

export default Stop;