const add = function (numb1, numb2) {
  return numb1 + numb2;
};

const subtract = function (numb1, numb2) {
  return numb1 - numb2;
};

const sum = function (array) {
  return array.reduce((a, b) => a + b, 0);
};

const multiply = function (array) {
  return array.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function () {};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
