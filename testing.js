const { calculateMean, calculateMedian, calculateMode } = require('./app'); 

describe('Statistical Operations', () => {
  test('mean of [1, 3, 5, 7] is 4', () => {
    expect(calculateMean([1, 3, 5, 7])).toBe(4);
  });

  test('median of [1, 3, 5, 7] is 4', () => {
    expect(calculateMedian([1, 3, 5, 7])).toBe(4);
  });

  test('mode of [1, 2, 2, 3] is [2]', () => {
    expect(calculateMode([1, 2, 2, 3])).toEqual([2]);
  });
});

module.exports = { calculateMean, calculate }
