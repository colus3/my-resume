import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'components';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from 'reducers';

// Grab the state from a global injected into server-generated HTML
const initialState = window.__INITIAL_STATE__;

// Create Redux store with initial state
const store = createStore(reducer, initialState);

let rootElement = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);