/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { App } from 'components';
import resumePage from '../public/resume.html';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from 'reducers';

import { getInitialData } from './db/orientdb';

function renderToString() {
  
  return resumePage.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`);
}

function handleRender(req, res) {
  
  getInitialData(req.params.id).then((initialData) => {

    const store = createStore(reducer, initialData);
  
    // Render the component to a string
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    // Grab the initial state from our Redux store
    const initialState = store.getState();
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, initialState));
  } );
}

function renderFullPage(html, initialState) {
  return resumePage.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>`);
}

export { handleRender, renderToString };