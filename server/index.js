/**
 * Created by Colus on 2016. 8. 22..
 */

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from '../client/components/app';
import index from '../public/index.html';

export default function renderToString(req, res) {
  const reactString =  ReactDOMServer.renderToString(<App/>);
  
  res.send(index.replace('<div id="root"></div>', `<div id="root">${reactString}</div>`));
}