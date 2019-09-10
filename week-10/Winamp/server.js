'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('assets'));
app.use(express.static('root'));
app.use(express.static('frontend'));

let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'winamp'
});

/* app.get('/', (req, res) => {
  res.render('index.ejs', { root: __dirname });
});
 */
app.get('/', (req, res) => {
  conn.query(
    `SELECT stream, artwork, track_name, artist, playlist_id, length FROM tracks 
    ;`,
    function(err, rows) {
      res.render('index.ejs', { rows: rows });
    }
  );
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
