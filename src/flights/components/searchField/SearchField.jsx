import React, { useState, useEffect } from 'react';
import './searchField.scss';
import { connect } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import * as flightActions from '../../flights.actions';
import qs from 'qs';
import { dateSelector } from '../../flights.selectors';

const SearchField = ({ date, searchFlight }) => {
  const location = useLocation();
  const history = useHistory();
  const searchText = location.search.split('=')[2];

  const [inputValue, setInputValue] = useState(searchText);

  useEffect(() => {
    if (location.pathname === '/') {
      history.push('/departures');
    }
  }, [history, location.pathname]);

  useEffect(() => {
    if (searchText) {
      searchFlight(searchText);
    }
  });

  const onSubmit = event => {
    event.preventDefault();

    let pathname = '';

    const dataQuery = {
      date,
      ...qs.parse(location.search, { ignoreQueryPrefix: true }),
      search: inputValue,
    };
    pathname = location.pathname + '?';

    const queryString = qs.stringify(dataQuery);
    history.push(`${pathname}${queryString}`);

    searchFlight(inputValue);
  };

  return (
    <>
      <div className="search-field">
        <h2 className="search-field__title">Search flight</h2>
        <form className="search-form" onSubmit={event => onSubmit(event)}>
          <i className="fas fa-search search-form__icon"></i>
          <input
            className="search-form__input"
            value={inputValue}
            onChange={event => setInputValue(event.target.value)}
            type="text"
            placeholder="Flight #"
          />
          <button className="btn search-form__btn" type="submit">
            Search
          </button>
        </form>
      </div>
    </>
  );
};

const mapState = state => {
  return {
    date: dateSelector(state),
  };
};

const mapDispatch = {
  searchFlight: flightActions.searchFlight,
};

export default connect(mapState, mapDispatch)(SearchField);
