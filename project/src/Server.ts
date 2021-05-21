/** @format */

import express from 'express';
import routes from './routes';
import path from 'path';

const app = express();

app.use(routes);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(8080, '0.0.0.0', () => {
  console.log('Listening...');
});
