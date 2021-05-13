import { FLIGHT_LIST_RECEIVED, SEARCH_FLIGHT } from './flights.actions';
import moment from 'moment';

const dateNow = moment(new Date()).format('D-MM-YYYY');

const initState = {
  flightsList: [],
  searchText: '',
  date: dateNow,
};

export const flightsReducer = (state = initState, action) => {
  switch (action.type) {
    case FLIGHT_LIST_RECEIVED:
      return {
        ...state,
        flightsList: action.payload.flightList,
      };
    case SEARCH_FLIGHT:
      return {
        ...state,
        searchText: action.payload.text,
      };
    default:
      return state;
  }
};
