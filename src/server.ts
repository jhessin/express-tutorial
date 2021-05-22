/** @format */
/* eslint-disable no-console*/

import express from 'express';
import path from 'path';
import { Request } from './types';
import routes from './routes';

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use((req: Request, res, next) => {
  console.log('FIRST MIDDLEWARE!');
  req.timestamp = new Date().toString();
  next();
});

app.use(routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.listen(8080, '0.0.0.0', () => {
  console.log('Listening...');
});
