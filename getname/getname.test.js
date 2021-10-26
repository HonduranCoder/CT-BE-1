const getName = require('./getname.js');

describe('getName', () => {
  it('returns the name property of an object', () => {
    const name = { name: 'mia' };

    expect(getName(name)).toEqual('mia');
  });
});
