import React, { useEffect, useState } from 'react';
import './searchResult.scss';
import { Link, Switch, Route, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import * as flightListActions from '../../flights.actions';
import TabResult from '../tabResult/TabResult';

const SearchResult = ({ fetchFlightList }) => {
  const location = useLocation();
  const [status, setStatus] = useState('');

  useEffect(() => {
    setStatus(location.pathname);
  }, [location]);

  useEffect(() => {
    fetchFlightList();
  }, [fetchFlightList]);

  const isArrivalsActive = status === '/arrivals' ? 'navigation-tabs__btn-active' : '';
  const isDeparturesActive = status === '/departures' ? 'navigation-tabs__btn-active' : '';
  return (
    <div className="search-result">
      <ul className="navigation-tabs">
        <li className="navigation-tabs__item">
          <Link
            to={`/departures${location.search}`}
            className={`navigation-tabs__btn ${isDeparturesActive}`}
            onClick={() => setStatus('/departures')}
          >
            <i className="fas fa-plane-departure navigation-tabs__btn-icon"></i>
            Departures
          </Link>
        </li>
        <li className="navigation-tabs__item">
          <Link
            to={`/arrivals${location.search}`}
            className={`navigation-tabs__btn ${isArrivalsActive}`}
            onClick={() => setStatus('/arrivals')}
          >
            <i className="fas fa-plane-arrival navigation-tabs__btn-icon"></i>
            Arrivals
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`/:direction?`} component={TabResult}></Route>
      </Switch>
    </div>
  );
};

const mapDispatch = {
  fetchFlightList: flightListActions.fetchFlightList,
};

export default connect(null, mapDispatch)(SearchResult);
