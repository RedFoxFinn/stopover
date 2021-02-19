import React, {} from 'react';

const StopTime = () => {};

const Stop = (props) => {
  const {name, zoneId, gtfsId, code, stoptimesWithoutPatterns} = props.data;
  return props.data
    ? <details>
      <summary><strong>{name} | {zoneId}</strong></summary>
      <table>
        <tbody>
          <tr>
            <td>ID:</td>
            <td>{code} / {gtfsId}</td>
          </tr>
        </tbody>
      </table>
      <table></table>
    </details>
    : <details>
      <summary>no data summary</summary>
      <p>no data details</p>
    </details>;
};

export default Stop;