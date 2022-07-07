// formula for F to C => 	[°C] = ([°F] − 32) × 5⁄9
const ftoc = function (ftemp) {
  let ctemp = (ftemp - 32) * (5 / 9);
  return Math.round(ctemp * 10) / 10;
};

// formula for C to F => [°F] = [°C] × 9⁄5 + 32
const ctof = function (ctemp) {
  let ftemp = ctemp * (9 / 5) + 32;
  return Math.round(ftemp * 10) / 10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
