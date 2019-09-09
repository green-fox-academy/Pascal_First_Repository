'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('assets'));
app.use(express.static('root'));

app.get('/', (req, res) => {
  res.render('index.ejs', { root: __dirname });
});

app.listen(PORT, () => {
  console.log('Server is upp and running boss!');
});
