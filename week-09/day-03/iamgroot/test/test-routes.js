'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', t => {
  request(app)
    .get('/groot?message=tomika')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        received: 'tomika',
        translated: 'I am Groot!'
      });
      t.end();
    });
});

test('groot endpoint 2', t => {
  request(app)
    .get('/groot?message=')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        error: 'I am Groot!'
      });
      t.end();
    });
});
