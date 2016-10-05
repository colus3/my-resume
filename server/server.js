import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import router from './routes/resume';

const app = express();
const port = process.env.PORT || 3000;

app.enable('trust proxy');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(bodyParser.json()); // for parsing application/json
app.use('/my-resume', router);

app.listen(port, () => {
  console.log(`Express is listening on port ${port}`);
});
