/* eslint-disable no-undef */
// Jest includes describe, it and expect for you in every test file.You don’t have to require them.

const supertest = require('supertest');
const app = require('../index.js');// Link to your server file

// allows testing of endpoints
const request = supertest(app);

// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
});

it('gets the courselist endpoint', async done => {
  const response = await request.get('/course/list/1');

  expect(response.status).toBe(200);
  // expect(response.body.message).toBe('pass!');
  done();
});

