import TabResult from './TabResult';
import { connect } from 'react-redux';
import { departureFlightListSelector } from '../../../flights.selectors';

const mapState = state => {
  return {
    flightList: departureFlightListSelector(state),
  };
};

export default connect(mapState)(TabResult);
