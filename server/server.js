import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

import { handleRender, renderToString } from '../public/server';

import api from './routes/apis';

const app = express();
const port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use(express.static(path.join(__dirname, './../public')));
app.get('/resume/:id*?', handleRender); // React Server Side Rendering
app.use('/api', api);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
