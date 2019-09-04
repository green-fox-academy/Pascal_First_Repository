'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('arrow test 1', t => {
  request(app)
    .get('/yondu?distance=100.0&time=10.0')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        distance: 100.0,
        time: 10.0,
        speed: 10
      });
      t.end();
    });
});

test('arrow test 2', t => {
  request(app)
    .get('/yondu?distance=100.0&time=0')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        distance: 100.0,
        time: 0,
        speed: null
      });
      t.end();
    });
});

test('arrow test 3', t => {
  request(app)
    .get('/yondu')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 200);
      t.same(resp.body, {
        distance: null,
        time: null,
        speed: null
      });
      t.end();
    });
});

test('arrow test 4', t => {
  request(app)
    .get('/yon')
    .send()
    .end((err, resp) => {
      if (err) throw err;
      t.equal(resp.status, 404);
      t.end();
    });
});
