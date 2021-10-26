capitalizeAndFilter = (array) => {
  const newArray = [];

  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i].toUpperCase();
  }

  return newArray.filter(
    (item) => item.charAt(0) !== 'f' && item.charAt(0) !== 'F'
  );
};

module.exports = capitalizeAndFilter;
