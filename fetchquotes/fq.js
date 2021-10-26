const fetch = require('cross-fetch');

const fetchQuotes = () => {
  return fetch('http://futuramaapi.herokuapp.com/api/characters/fry/1')
    .then((response) => response.json())
    .then((data) =>
      data.map((item) => {
        return {
          character: item.character,
          quote: item.quote,
          image: item.image,
        };
      })
    );
};
module.exports = fetchQuotes;
