const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const PORT = 8080;

app.use(express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/arrays', (req, res) => {
  let action = req.body.what;
  let input = req.body.numbers;
  if (action === 'sum') {
    function sumAll(array) {
      return array.reduce(function(a, b) {
        return a + b;
      });
    }
    let output = {
      result: sumAll(input)
    };
    res.json(output);
  } else if (action === 'multiply') {
    function multiply(array) {
      return array.reduce(function(a, b) {
        return a * b;
      });
    }
    let output = {
      result: multiply(input)
    };
    res.json(output);
  } else if (action === 'double') {
    function double(array) {
      let tempArray = [];
      for (let index = 0; index < array.length; index++) {
        tempArray.push(array[i] * 2);
      }
      return tempArray;
    }
    let output = {
      result: double(input)
    };
    res.json(output);
  } else {
    let output = {
      error: 'Please provide what to do with the numbers!'
    };
    res.json(output);
  }
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
