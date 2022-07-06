const sumAll = function (...args) {
  let baseno = args[0];
  const finalno = args[1];
  let sum = baseno;
  let nextno = 0;

  if (!Number.isInteger(baseno) || !Number.isInteger(finalno)) return "ERROR";

  if (baseno < 0 || finalno < 0) return "ERROR";

  if (baseno < finalno) {
    do {
      nextno = baseno + 1;
      sum = sum + nextno;
      baseno += 1;
    } while (nextno < finalno);
    return sum;
  } else if (baseno > finalno) {
    do {
      nextno = baseno - 1;
      sum = sum + nextno;
      baseno -= 1;
    } while (nextno > finalno);
    return sum;
  }
};
// Do not edit below this line
module.exports = sumAll;
