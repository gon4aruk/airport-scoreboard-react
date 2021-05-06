import TabResult from './TabResult';
import { connect } from 'react-redux';
import { arrivalFlightListSelector } from '../../../flights.selectors';
import * as flightActions from '../../../flights.actions';

const mapState = state => {
  return {
    flightList: arrivalFlightListSelector(state),
  };
};

const mapDispatch = {
  fetchFlightList: flightActions.fetchFlightList,
};

export default connect(mapState, mapDispatch)(TabResult);
