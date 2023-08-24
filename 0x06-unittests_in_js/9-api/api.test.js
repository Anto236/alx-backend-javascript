const request = require('request');
const { expect } = require('chai');

describe('Integration Testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

  describe('GET /cart/:id', () => {
    it('should return payment methods for a valid cart ID', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/123',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });

    it('should return Not Found for an invalid cart ID', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/abc',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        expect(body).to.equal('Not Found');
        done();
      });
    });
  });
});
