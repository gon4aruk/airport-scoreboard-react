import React from 'react';
import ScoreBoard from './flights/components/ScoreBoard';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScoreBoard />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
