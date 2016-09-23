import express from 'express';
// import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';

// import { handleRender, renderToString } from '../public/server';

import router from './routes/resume';

const app = express();
const port = process.env.PORT || 3000;

app.enable('trust proxy');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use('/resume', router);
// app.use('/', express.static(path.join(__dirname, './../public'))); // Static Resource
// app.get('/resume/:id*?', handleRender); // React Server Side Rendering
// app.use('/api', api); // Server API

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
