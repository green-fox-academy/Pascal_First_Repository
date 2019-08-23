'use strict';

const express = require('express');
const app = express();
const PORT = 8080;
app.use(express.static('root'));

app.get('/', (req, res) => {
  res.sendFile('/index.html', { root: __dirname });
});

app.listen(PORT, () => {
  console.log('Server erected');
});
