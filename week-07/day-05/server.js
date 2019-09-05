'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');

let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'reddit'
});

app.get('/', (req, res) => {
  res.send('hello');
});

conn.connect(function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Connection established');
});

app.listen(PORT, () => {
  console.log('Server is upp and running boss!');
});
