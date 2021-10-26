const capitalizeAndFilter = require('./cp.js');

describe('capitalizeAndFilter', () => {
  it('takes an array of strings capitalize all strings and filter out any string that starts with the letter F/f.', () => {
    const array = ['mia', 'feona', 'doogie'];

    expect(capitalizeAndFilter(array)).toEqual(['MIA', 'DOOGIE']);
  });