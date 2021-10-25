const getName = require('./getname.js');

describe('getname', () => {
  it('returns the name property of an object', () => {
    const name = 'Mia';

    expect(getName(name)).toEqual({ name: Mia });
  });
});
