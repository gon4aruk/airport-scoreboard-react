import React, { useEffect, useState } from 'react';
import './searchResult.scss';
import ArrivalsTabResult from './tabResult/ArrivalsTabResult';
import DeparturesTabResult from './tabResult/DeparturesTabResult';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightListActions from '../../flights.actions';

const SearchResult = ({ fetchFlightList }) => {
  const location = useLocation();
  const [status, setStatus] = useState('departures');

  useEffect(() => {
    if (location.pathname === '/') {
      setStatus('depatrures');
    }
  }, [location]);

  useEffect(() => {
    fetchFlightList();
  }, [fetchFlightList]);

  const isArrivalsActive = status === 'arrivals' ? 'navigation-tabs__btn-active' : '';
  const isDeparturesActive = status === 'departures' ? 'navigation-tabs__btn-active' : '';
  return (
    <div className="search-result">
      <ul className="navigation-tabs">
        <li className="navigation-tabs__item">
          <Link
            to="/departures"
            className={`navigation-tabs__btn ${isDeparturesActive}`}
            onClick={() => setStatus('departures')}
          >
            <i className="fas fa-plane-departure navigation-tabs__btn-icon"></i>
            Departures
          </Link>
        </li>
        <li className="navigation-tabs__item">
          <Link
            to="/arrivals"
            className={`navigation-tabs__btn ${isArrivalsActive}`}
            onClick={() => setStatus('arrivals')}
          >
            <i className="fas fa-plane-arrival navigation-tabs__btn-icon"></i>
            Arrivals
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path="/departures" component={DeparturesTabResult}></Route>
        <Route path="/arrivals" component={ArrivalsTabResult}></Route>
      </Switch>
    </div>
  );
};

const mapDispatch = {
  fetchFlightList: flightListActions.fetchFlightList,
};

export default connect(null, mapDispatch)(SearchResult);
