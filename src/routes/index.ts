/** @format */
/* eslint-disable no-console */

/// routes/index.ts

import { Router } from 'express';
import { Request } from '../types';

const router = Router();

let user: string = null;

interface Profile {
  name: string;
  city: string;
  profession?: string;
}

interface Link {
  url: string;
  label: string;
}

const profiles: Profile[] = [
  {
    name: 'Jim',
    city: 'Mullen',
    profession: 'developer',
  },
];

const links: Link[] = [
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
  {
    url: '/login',
    label: 'Login page',
  },
];

router.get('/', (req: Request, res) => {
  console.log(`Timestamp: ${req.timestamp}`);
  const data = {
    title: 'My Index Page!',
    user,
    name: 'Index',
    date: req.timestamp,
    profiles,
    links,
  };
  res.render('index', data);
});

router.post('/login', (req, res, next) => {
  const { username, password } = req.body;

  if (password === '123') {
    user = username;
    res.redirect('/');
    return;
  }

  const data = {
    title: 'Login Error',
    message: 'Please check your password and username.',
  };

  res.render('error', data);
});

router.post('/join', (req, res) => {
  const { body } = req;
  profiles.push(body);

  res.redirect('/');
});

router.get('/json', (req: Request, res) => {
  res.json({
    name: 'Jim',
    location: 'Mullen',
    date: req.timestamp,
  });
});

router.get('/html', (_req, res) => {
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

router.get('/query', (req, res) => {
  const { query } = req;
  res.json(query);
});

router.get('/params/:name/:location/:ocupation', (req, res) => {
  const { params } = req;
  res.json(params);
});

router.get('/login', (_req, res) => {
  res.render('login', null);
});

export default router;
