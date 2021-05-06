import React, { Component } from 'react';
import './searchField.scss';
import { connect } from 'react-redux';
import * as flightActions from '../../flights.actions';

class SearchField extends Component {
  state = {
    flightNumber: '',
  };

  onChange = event => {
    this.setState({ flightNumber: event.target.value });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.searchFlight(this.state.flightNumber);
  };

  render() {
    return (
      <>
        <div className="search-field">
          <h2 className="search-field__title">Search flight</h2>
          <form className="search-form" onSubmit={this.onSubmit}>
            <i className="fas fa-search search-form__icon"></i>
            <input
              className="search-form__input"
              value={this.state.flightNumber}
              onChange={this.onChange}
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
  }
}

const mapDispatch = {
  searchFlight: flightActions.searchFlight,
};

export default connect(null, mapDispatch)(SearchField);
