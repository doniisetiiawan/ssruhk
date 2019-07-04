/* eslint-disable react/jsx-filename-extension */
import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import path from 'path';
import 'es6-promise';
import fetch from 'isomorphic-fetch';

import App from './app';
import template from './template';

const app = express();
const port = 3000;

app.use(express.static(path.resolve(__dirname, './dist/public')));

app.get('/', (req, res) => {
  fetch('https://api.github.com/users/gaearon/gists')
    .then(response => response.json())
    .then((gists) => {
      const body = renderToString(<App gists={gists} />);
      const html = template(body);

      res.send(html);
    });
});
app.listen(port,
  () => console.log(`Example app listening on port ${port}!`));
