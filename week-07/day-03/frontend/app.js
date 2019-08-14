const express = require('express');
const path = require('path');

const app = express();
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  if (isNaN(Number(req.query.input)) === false) {
    let output = {
      received: req.query.input,
      result: req.query.input * 2
    };
    res.json(output);
  } else {
    res.json('Please provide an input!');
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
