/**
 * Created by Colus on 2016. 8. 22..
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/app';
import indexPage from '../public/index.html';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { reducer } from '../client/reducer';

import { getInitialData } from './db/orientdb';

// function serverSideRendering(req, res) {
//   const reactString =  ReactDOMServer.renderToString(<App/>);
//
//   res.send(index.replace('<div id="root"></div>', `<div id="root">${reactString}</div>`));
// }

function renderToString() {
  
  return indexPage.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`);
}

function handleRender(req, res) {
  // Create a new Redux store instance
  // const store = createStore(counterApp);
  // const initialState = getInitialData();
  getInitialData().then((initialData) => {

    const store = createStore(reducer, initialData);
  
    // Render the component to a string
    const html = ReactDOMServer.renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    );
  
    // Grab the initial state from our Redux store
    const initialState = store.getState();
  
    console.log(`initialData1 : ${JSON.stringify(initialState)}`);
  
    // Send the rendered page back to the client
    res.send(renderFullPage(html, initialState));
  } );
}

function renderFullPage(html, initialState) {
  return indexPage.replace('<div id="root"></div>', `<div id="root">${html}</div><script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>`);
}

export { handleRender, renderToString };