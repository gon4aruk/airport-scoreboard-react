import { FLIGHT_LIST_RECEIVED, SEARCH_FLIGHT } from './flights.actions';

const initState = {
  flightsList: [],
  searchText: '',
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
