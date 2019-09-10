'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const xml2js = require('xml2js');
const parser = new xml2js.Parser({ attrkey: 'ATTR' });
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('root'));

app.use(bodyParser.urlencoded({ extended: true }));

let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'winamp'
});

/* app.get('/', (req, res) => {
 
  conn.query(`INSERT INTO tracks (stream, artwork, track_name, artist) VALUES ();`, function(err, rows) {
    res.render('index.ejs', { rows: rows });
  });
});
 */

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

app.post('/sent', (req, res) => {
  let data;
  let stream;
  let artwork;
  let track_name;
  let artist;
  parser.parseString(req.body.data, function(error, result) {
    if (error === null) {
      data = result;
      console.log(data.track.stream);
    } else {
      console.log(error);
    }
  });

  res.send(`${data.track.stream[0]._}`);
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
