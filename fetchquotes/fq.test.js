const fetchQuotes = require('./fq.js');

describe('fetchQuotes', () => {
  it('returns a single quote', async () => {
    const quote = await fetchQuotes();

    const expectation = [
      {
        character: expect.any(String),
        quote: expect.any(String),
        image: expect.any(String),
      },
    ];

    expect(quote).toEqual(expectation);
  });
});
