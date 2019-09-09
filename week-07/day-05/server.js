'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('views'));
app.use(express.static('frontend'));

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

app.get('/home', (req, res) => {
  conn.query(
    `SELECT category, vote_count, post_content, reg_date_post, name FROM posts 
    LEFT JOIN users ON posts.user_id = users.user_id 
    ;`,
    function(err, rows) {
      res.render('home.ejs', { rows: rows });
    }
  );
});

app.post('/home', (req, res) => {
  conn.query(
    `INSERT INTO posts (user_id, category, vote_count, post_content) VALUES (1, ?, 0, ?)
    ;`,
    [req.body.category, req.body.text],
    (err, rows) => {
      res.status(200);
    }
  );
});

app.get('/register', (req, res) => {
  res.render('register.ejs', { root: __dirname });
});

app.get('/login', (req, res) => {
  res.render('login.ejs', { root: __dirname });
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
