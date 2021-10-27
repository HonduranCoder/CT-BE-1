capitalizeAndFilter = (array) => {
  const newArray = array.map((item) => item.toUpperCase());
  return newArray.filter((item) => !item.startsWith('F'));
};

module.exports = capitalizeAndFilter;
