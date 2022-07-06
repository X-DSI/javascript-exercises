const sumAll = function (...args) {
  let baseno = args[0];
  const finalno = args[1];
  let sum = baseno;
  let nextno = 0;
  do {
    nextno = baseno + 1;
    sum = sum + nextno;
    baseno += 1;
  } while (nextno < finalno);
  return sum;
};
// Do not edit below this line
module.exports = sumAll;
