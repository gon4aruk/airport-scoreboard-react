import React, { useEffect, useState } from 'react';
import './tabResult.scss';
import FlightInfo from '../../flightInfo/FlightInfo';
import { connect } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import qs from 'qs';
import { arrivalFlightListSelector, departureFlightListSelector } from '../../../flights.selectors';
import { searchFlight } from '../../../flights.actions';

const TabResult = ({ arrivalsList, departuresList }) => {
  const [flightList, setFlightList] = useState([]);
  const location = useLocation();
  const { direction } = useParams();

  useEffect(() => {
    const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    if (direction && direction.includes('arrivals')) {
      setFlightList(arrivalsList);
      searchFlight(query.search);
    } else {
      setFlightList(departuresList);
      searchFlight(query.search);
    }
  }, [arrivalsList, departuresList, direction, location]);

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

const mapState = state => {
  return {
    arrivalsList: arrivalFlightListSelector(state),
    departuresList: departureFlightListSelector(state),
  };
};

export default connect(mapState)(TabResult);
