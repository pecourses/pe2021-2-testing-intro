const request = require('supertest');
const app = require('./../app');

describe('testing simple requests to server', function () {
  it('response from "/" should be 200 Hello)', function (done) {
    request(app)
      .get('/')
      .expect(200)
      .expect('Hello)')
      .end(done);
  });
  // протестировать обращение GET /users/id
  it('response from "/users/id" should be 200 {name: "Test"}', function (done) {
    request(app)
      .get('/users/id')
      .expect(200)
      .expect({ name: 'Test' })
      .end(done);
  });
});
