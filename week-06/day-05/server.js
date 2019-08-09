('use strict');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('root'));
app.use(express.static('assets'));
app.use(express.static('views'));

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.get('/', (req, res) => {
  res.sendFile('views/home.html', { root: __dirname });
});
