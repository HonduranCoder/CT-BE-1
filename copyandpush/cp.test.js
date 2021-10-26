const copyAndPush = require('./cp.js');

describe('copyAndPush', () => {
  it('returns a new array with all the items in the original array and a new item pushed to the end.', () => {
    const numbers = [1, 2, 3];
    const item = 4;

    expect(copyAndPush(numbers, item)).toEqual([1, 2, 3, 4]);
  });
});
