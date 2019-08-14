const express = require('express');
const path = require('path');

const app = express();
app.use(express.json());
const PORT = 8080;

app.post('/sith', (req, res) => {
  let input = req.body.text;
  let output = {};
});

app.listen(PORT, () => {
  console.log(`The server is up and running on ${PORT}`);
});
