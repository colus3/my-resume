import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { renderToString, serverSideRendering } from '../public/server';

import api from './routes/apis';

const app = express();
const port = 3000;


app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.get('/', serverSideRendering); // React Server Side Rendering
app.use('/', express.static(path.join(__dirname, './../public')));
app.use('/api', api);

app.listen(port, () => {
  console.log('Express is listening on port', port);
});
