import { fetchFlights } from './flightsGateway';

export const FLIGHT_LIST_RECEIVED = 'FLIGHT/FLIGHT_LIST_RECEIVED';
export const SEARCH_FLIGHT = 'FLIGHT/SEARCH_FLIGHT';

export const flightListReceived = flightList => {
  return {
    type: FLIGHT_LIST_RECEIVED,
    payload: {
      flightList,
    },
  };
};

export const searchFlight = text => {
  return {
    type: SEARCH_FLIGHT,
    payload: {
      text,
    },
  };
};

export const fetchFlightList = () => dispatch =>
  fetchFlights().then(flightList => dispatch(flightListReceived(flightList)));
