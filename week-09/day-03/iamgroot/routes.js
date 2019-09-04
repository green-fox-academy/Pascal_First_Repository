const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  if (Object.values(req.query)[0] !== '') {
    res.send({
      received: Object.values(req.query)[0],
      translated: 'I am Groot!'
    });
  } else {
    res.send({
      error: 'I am Groot!'
    });
  }
});

module.exports = app;
