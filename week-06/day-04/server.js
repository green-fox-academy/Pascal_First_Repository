('use strict');

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('root'));
app.use(express.static('assets'));
app.use(express.static('views'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.render('home', { arrayToUse: arrayToUse });
});

const arrayToUse = [
  {
    path: '1.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '2.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '3.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '4.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '5.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '6.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '7.jpg',
    title: 'string',
    content: 'string'
  },
  {
    path: '8.jpg',
    title: 'string',
    content: 'string'
  }
];
