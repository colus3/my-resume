import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3000;

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/', express.static(path.join(__dirname, './../public')));

app.get('/server', (req, res) => {
  
  res.send('<h1>test</h1>');
});

app.listen(port, () => {
  console.log('Express is listening on port', port);
});