import { createSelector } from 'reselect';

export const flightListSelector = state => state.flights.flightsList;

export const searchTextSelector = state => state.flights.searchText;

export const arrivalFlightListSelector = createSelector(
  [flightListSelector, searchTextSelector],
  (flightList, searchText) => {
    if (flightList.length === 0) {
      return flightList;
    }
    return flightList.body.arrival
      .slice()
      .filter(flightData => {
        const flightNumber = flightData.codeShareData[0].codeShare;
        return (
          new Date(flightData.timeToStand).getDate() === new Date().getDate() &&
          flightNumber.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      .sort((a, b) => new Date(a.timeLandCalc) - new Date(b.timeLandCalc));
  },
);

export const departureFlightListSelector = createSelector(
  [flightListSelector, searchTextSelector],
  (flightList, searchText) => {
    if (flightList.length === 0) {
      return flightList;
    }
    return flightList.body.departure
      .slice()
      .filter(flightData => {
        const flightNumber = flightData.codeShareData[0].codeShare;
        return (
          new Date(flightData.timeToStand).getDate() === new Date().getDate() &&
          flightNumber.toLowerCase().includes(searchText.toLowerCase())
        );
      })
      .sort((a, b) => new Date(a.timeDepShedule) - new Date(b.timeDepShedule));
  },
);
