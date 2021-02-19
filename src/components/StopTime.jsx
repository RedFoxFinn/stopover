import React, {} from 'react';

const StopTime = (props) => {
  const {name, zoneId, gtfsId, code, stoptimesWithoutPatterns} = props.data;
  return props.data
    ? <details>
      <summary><strong>{code} | {name} | {zoneId}</strong></summary>
      <p>data details</p>
    </details>
    : <details>
      <summary>no data summary</summary>
      <p>no data details</p>
    </details>;
};

export default StopTime;