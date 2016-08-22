import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import renderToString from '../public/server';

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.get('/', renderToString);
app.use('/', express.static(path.join(__dirname, './../public')));

app.listen(port, () => {
  console.log('Express is listening on port', port);
});
