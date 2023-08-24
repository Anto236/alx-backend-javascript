const { expect } = require('chai');
const { it, describe } = require('mocha');
const sinon = require('sinon');

const Utils = require('./utils.js');
const sendPaymentRequestToApi = require('./4-payment.js');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments and log result', () => {
    // Stub Utils.calculateNumber to always return 10
    const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

    // Spy on console.log
    const consoleLogSpy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    // Verify that calculateNumberStub was called with correct arguments
    expect(calculateNumberStub.calledWith('SUM', 100, 20)).to.be.true;

    // Verify that console.log is logging the correct message
    expect(consoleLogSpy.calledWith('The total is: 10')).to.be.true;

    // Restore the stub and the spy
    calculateNumberStub.restore();
    consoleLogSpy.restore();
  });
});
