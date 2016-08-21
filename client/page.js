/**
 * Created by Colus on 2016. 8. 21..
 */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './components/App';

export default function renderPage() {
  return ReactDOMServer.renderToString(<App />);
}