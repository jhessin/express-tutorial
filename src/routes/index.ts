/** @format */
/// routes/index.ts

import { Router } from 'express';

const router = Router();

const profiles = [
  {
    name: 'Jim',
    city: 'Mullen',
    profession: 'developer',
  },
];

router.get('/', (req, res, next) => {
  const data = {
    title: 'My Index Page!',
    name: 'Index',
    profiles,
    links: [
      {
        url: '/html',
        label: 'HTML Page',
      },
      {
        url: '/query?name=Jim&location=Not Mullen',
        label: 'Query Page',
      },
      {
        url: '/params/Jim/Mullen/Developer',
        label: 'Params Page',
      },
      {
        url: '/json',
        label: 'JSON page',
      },
    ],
  };
  res.render('index', data);
});

router.post('/join', (req, res, next) => {
  const { body } = req;
  profiles.push(body);

  res.redirect('/');
});

router.get('/json', (req, res, next) => {
  res.json({
    name: 'Jim',
    location: 'Mullen',
  });
});

router.get('/html', (req, res, next) => {
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

router.get('/query', (req, res, next) => {
  const { query } = req;
  res.json(query);
});

router.get('/params/:name/:location/:ocupation', (req, res, next) => {
  const { params } = req;
  res.json(params);
});

export default router;
