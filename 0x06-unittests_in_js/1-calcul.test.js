const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM operation', () => {
    it('should correctly calculate the sum of two rounded numbers', () => {
      assert.strictEqual(calculateNumber('SUM', 1.4, 3.6), 5);
    });
  });

  describe('SUBTRACT operation', () => {
    it('should correctly subtract rounded b from rounded a', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 2.2), 4);
    });
  });

  describe('DIVIDE operation', () => {
    it('should correctly divide rounded a by rounded b', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 2), 5);
    });

    it('should return "Error" when rounded b is 0', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
    });
  });

  describe('Invalid input', () => {
    it('should throw an error for invalid type', () => {
      assert.throws(() => calculateNumber('INVALID', 1, 2), Error);
    });

    it('should throw an error if type is not a string', () => {
      assert.throws(() => calculateNumber(123, 1, 2), Error);
    });
  });
});
