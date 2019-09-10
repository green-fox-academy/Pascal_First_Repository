'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const https = require('https');
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

app.get('/', (req, res) => {
  res.sendFile('index.html', { root: __dirname });
});

let data;
let stream;
let artwork;
let track_name;
let artist;
let length;

app.post('/sent', (req, res) => {
  let url = req.body.data;
  https.get(url, function(respond) {
    let xml = '';
    respond.on('data', function(stream) {
      xml += stream;
    });
    respond.on('end', function() {
      parser.parseString(xml, function(error, result) {
        if (error === null) {
          data = result.track;
          stream = result.track.stream[0]._;
          artwork = result.track.artwork[0];
          track_name = result.track.name[0];
          artist = result.track.artist[0];
          length = `${Math.floor(
            result.track.stream[0].ATTR.length / 60
          )}:${result.track.stream[0].ATTR.length % 60}`;
          console.log('Parse succesfull');
        } else {
          console.log(error);
        }
      });
      conn.query(
        `INSERT INTO tracks (stream, artwork, track_name, artist, length) VALUES (?, ?, ?, ?, ?);`,
        [stream, artwork, track_name, artist, length],
        (err, rows) => {
          res.send('Uploaded');
        }
      );
    });
  });
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
