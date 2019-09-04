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

function oneSearch(key, value) {
  if (key[0] === 'plt') {
    return `WHERE book_price < "${value[0]}"`;
  } else if (key[0] === 'pgt') {
    return `WHERE book_price > ${value[0]}`;
  } else if (key[0] === 'category') {
    return `WHERE cate_descrip = "${value[0]}"`;
  } else if (key[0] === 'publisher') {
    return `WHERE pub_name  = "${value[0]}"`;
  }
}

function multipleLine(key, value) {
  let tempString = '';
  for (let i = 1; i < key.length; i++) {
    if (key[i] === 'plt') {
      tempString = tempString.concat(` AND book_price < "${value[i]}"`);
    } else if (key[i] === 'pgt') {
      tempString = tempString.concat(` AND book_price > ${value[i]}`);
    } else if (key[i] === 'category') {
      tempString = tempString.concat(` AND cate_descrip = "${value[i]}"`);
    } else if (key[i] === 'publisher') {
      tempString = tempString.concat(` AND pub_name  = "${value[i]}"`);
    }
  }
  return tempString;
}

app.get('/', (req, res) => {
  let keys = Object.keys(req.query);
  let values = Object.values(req.query);
  function filters(key, value) {
    let querryString = '';
    if (key.length === 1) {
      querryString = oneSearch(key, value);
    } else if (key.length > 1) {
      querryString = oneSearch(key, value).concat(multipleLine(key, value));
    }
    return querryString;
  }
  conn.query(
    `SELECT book_name, aut_name, cate_descrip, book_price, pub_name FROM book_mast 
    LEFT JOIN author ON book_mast.aut_id = author.aut_id 
    LEFT JOIN category ON book_mast.cate_id = category.cate_id 
    LEFT JOIN publisher ON book_mast.pub_id = publisher.pub_id
    ${filters(keys, values)};`,
    function(err, rows) {
      console.log(filters(keys, values));
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
