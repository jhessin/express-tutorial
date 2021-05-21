/** @format */

import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.send(`
    <html>
    <head>
    <title>My Express Server</title>
    </head>
    <body>
    <a href="/html">HTML Page</a><br>
    <a href="/query?name=Jim&location=Not Mullen">Query Page</a><br>
    <a href="/params/Jim/Mullen/Developer">Params Page</a><br>
    <a href="/json">JSON page</a>
    </body>
    </html>
    `);
});

app.get('/json', (req, res, next) => {
  res.json({
    name: 'Jim',
    location: 'Mullen',
  });
});

app.get('/html', (req, res, next) => {
  const html = `
  <html>
  <head>
  <title>HTML Response</title>
  </head>
  <body>
  <h1
  style="color:red"
  >This is an HTML response</h1>
  </body>
  </html>
  `;
  res.send(html);
});

app.get('/query', (req, res, next) => {
  const { query } = req;
  res.json(query);
});

app.get('/params/:name/:location/:ocupation', (req, res, next) => {
  const { params } = req;
  res.json(params);
});

app.listen(8080, '0.0.0.0', () => {
  console.log('Listening...');
});
