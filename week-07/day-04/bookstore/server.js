'use strict';

const express = require('express');
const app = express();
const PORT = 8080;

app.use(express.json());
app.set('view engine', 'ejs');
app.use(express.static('./root'));

let mysql = require('mysql');

let conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'bookstore'
});

app.get('/', (req, res) => {
  conn.query(
    `SELECT book_name, aut_name, cate_descrip, book_price, pub_name FROM book_mast 
    INNER JOIN author ON book_mast.aut_id = author.aut_id 
    INNER JOIN category ON book_mast.cate_id = category.cate_id 
    INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`,
    function(err, rows) {
      console.log(rows);
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
