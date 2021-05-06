import moment from 'moment';

const dateNow = moment(new Date()).format('D-MM-YYYY');
const baseUrl = `https://api.iev.aero/api/flights/${dateNow}`;

export const fetchFlights= () => {
  return fetch(baseUrl).then(response => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error('Failed to load data');
    }
  });
};
