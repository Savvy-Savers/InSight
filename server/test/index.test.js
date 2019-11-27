/* eslint-disable no-undef */
// Jest includes describe, it and expect for you in every test file.You don’t have to require them.

const supertest = require('supertest');
const app = require('../index.js');// Link to your server file

const request = supertest(app);

// This test fails because 1 !== 2
it('Testing to see if Jest works', () => {
  expect(1).toBe(1);
});

it('Async test', async done => {
  // Do your async tests here

  done();
});
