const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should correctly calculate the sum of two rounded numbers', () => {
    assert.strictEqual(calculateNumber(1.4, 3.6), 5);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.4, -3.6), -5);
  });

  it('should handle zero correctly', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle edge cases correctly', () => {
    assert.strictEqual(calculateNumber(0.1, 0.2), 0);
  });
});
