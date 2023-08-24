const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should resolve with the correct response object when success is true', async () => {
    const result = await getPaymentTokenFromAPI(true);
    expect(result).to.deep.equal({ data: 'Successful response from the API' });
  });

  it('should resolve with undefined when success is false', async () => {
    const result = await getPaymentTokenFromAPI(false);
    expect(result).to.be.undefined;
  });
});
