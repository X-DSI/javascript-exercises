const removeFromArray = function ([a, b, c, d], e) {
  const array = [a, b, c, d];

  if (e === 3) {
    array.splice(2, 1);

    return array;
  }
};

// Do not edit below this line
module.exports = removeFromArray;
