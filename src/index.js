// @flow

import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import dataStore from './data/dataStore';
import App from './components/ui/App/App';
import './style/style.css';

const store = createStore(reducer, dataStore);

const entryPoint = document.getElementById('React-app');

if (entryPoint) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    entryPoint,
  );
}
