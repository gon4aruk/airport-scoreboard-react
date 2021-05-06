import React from 'react';
import './tabResult.scss';
import FlightInfo from '../../flightInfo/FlightInfo';

const TabResult = ({ flightList }) => {
  return (
    <table className="table">
      <thead className="table__header">
        <tr>
          <th>Terminal</th>
          <th>Local time</th>
          <th>Destination</th>
          <th>Status</th>
          <th>Airline</th>
          <th>Flight</th>
        </tr>
      </thead>
      <tbody className="table__body">
        {flightList.map(flightData => {
          return <FlightInfo key={flightData.ID} flightData={flightData} />;
        })}
      </tbody>
    </table>
  );
};

export default TabResult;
