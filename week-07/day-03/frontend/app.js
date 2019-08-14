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

app.get('/greeter', (req, res) => {
  const name = req.query.name;
  const title = req.query.title;
  if (name !== undefined && title === undefined) {
    let output = {
      error: 'Please provide a title!'
    };
    res.json(output);
  } else if (name !== undefined && title !== undefined) {
    let output = {
      welcome_message: `Oh, hi there ${name}, my dear ${title}!`
    };
    res.json(output);
  } else if (name === undefined && title === undefined) {
    let output = {
      error: 'Please provide a name and a title!'
    };
    res.json(output);
  } else if (name === undefined && title !== undefined) {
    let output = {
      error: 'Please provide a name!'
    };
    res.json(output);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
