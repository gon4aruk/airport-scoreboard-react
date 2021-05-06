import React from 'react';
import moment from 'moment';
import './flightInfo.scss';

const FlightInfo = ({ flightData }) => {
  const { term, airline, codeShareData } = flightData;
  const timeOnShedule = flightData.timeDepShedule || flightData.actual;
  const cityName = flightData['airportFromID.city_en'] || flightData['airportToID.city_en'];
  const localTime = moment(new Date(timeOnShedule)).format('HH:mm');
  let status;
  if (flightData.status === 'LN') {
    status = `Landed at ${moment(new Date(flightData.actual)).format('HH:mm')}`;
  } else if (flightData.status === 'DP') {
    status = `Departed at ${moment(new Date(flightData.timeTakeofFact)).format('HH:mm')}`;
  } else if (flightData.status === 'CX') {
    status = 'Cancelled';
  } else if (flightData.status === 'BD') {
    status = 'Boarding';
  } else if (flightData.status === 'GC') {
    status = 'Gate closed';
  } else if (flightData.status === 'FR') {
    status = 'In flight';
  } else if (flightData.status === 'ON') {
    status = 'On time';
  }

  return (
    <tr className="table__body-row">
      <td className="terminal">
        <span>{term}</span>
      </td>
      <td className="localTime">{localTime}</td>
      <td className="cityName">{cityName}</td>
      <td className="status">{status}</td>
      <td className="company-name">
        <div className="logo">
          <img className="logo__image" src={airline.en.logoSmallName} alt={airline.en.name} />
        </div>
        <p>{airline.en.name}</p>
      </td>
      <td className="flight-number">{codeShareData[0].codeShare}</td>
    </tr>
  );
};

export default FlightInfo;
