// @flow

import React, { PureComponent } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers';
import dataStore from './data/dataStore';
import './style/style.css';
import App from './components/ui/App/App';

const store = createStore(reducer, dataStore);

const entryPoint = document.getElementById('React-app');

if (entryPoint) {
    render(
        <Provider store={store}>
            <App />
        </Provider>,
        entryPoint
    )
}