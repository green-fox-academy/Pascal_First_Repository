const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
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

app.get('/appenda/:appendable', (req, res) => {
  let output = {
    appended: `${req.params.appendable}a`
  };
  res.json(output);
});

app.post('/dountil/:action', (req, res) => {
  let input = req.body.until;
  let action = req.params.action;
  if (isNaN(input)) {
    let output = {
      error: 'Please provide a number!'
    };
    res.json(output);
  } else if (action === 'sum') {
    function sumAll(num) {
      let newArr = [];
      for (let i = 1; i <= num; i++) {
        newArr.push(i);
      }
      return newArr.reduce(function(a, b) {
        return a + b;
      });
    }
    let output = {
      result: sumAll(input)
    };
    res.json(output);
  } else if (action === 'factor') {
    function factorio(num) {
      let newArr = [];
      for (let i = 1; i <= num; i++) {
        newArr.push(i);
      }
      return newArr.reduce(function(a, b) {
        return a * b;
      });
    }
    let output = {
      result: factorio(input)
    };
    res.json(output);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
