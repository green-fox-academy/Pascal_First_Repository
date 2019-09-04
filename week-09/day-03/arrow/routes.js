const express = require('express');
const app = express();

app.get('/yondu', (req, res) => {
  res.send({
    distance: Number(req.query.distance),
    time: Number(req.query.time),
    speed: Number(req.query.distance / req.query.time)
  });
});

module.exports = app;
