const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly calculate the sum of two rounded numbers', () => {
      expect(calculateNumber('SUM', 1.4, 3.6)).to.equal(5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded b from rounded a', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 2.2)).to.equal(4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded a by rounded b', () => {
      expect(calculateNumber('DIVIDE', 10, 2)).to.equal(5);
    });

    it('should return "Error" when rounded b is 0', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
    });
  });

  describe('Invalid input', () => {
    it('should throw an error for invalid type', () => {
      expect(() => calculateNumber('INVALID', 1, 2)).to.throw(Error);
    });

    it('should throw an error if type is not a string', () => {
      expect(() => calculateNumber(123, 1, 2)).to.throw(Error);
    });
  });
});
