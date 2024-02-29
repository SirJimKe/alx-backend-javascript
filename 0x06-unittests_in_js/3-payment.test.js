const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sentPaymentRequestToApi = require('./3-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', () => {
  it('should call Utils.calculateNumber with correct arguments', () => {
    const calcNumSpy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    expect(calcNumSpy.calledOnce).to.be.true;
    expect(calcNumSpy.calledWithExactly('SUM', 100, 20)).to.be.true;

    calcNumSpy.restore();
  });
});
