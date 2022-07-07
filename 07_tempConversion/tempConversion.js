// formula for F to C => 	[°C] = ([°F] − 32) × 5⁄9
const ftoc = function (ftemp) {
  let ctemp = ((ftemp - 32) * 5) / 9;
  return ctemp;
};

// formula for C to F => [°F] = [°C] × 9⁄5 + 32
const ctof = function (ctemp) {
  let ftemp = (ctemp * 5) / 9 + 32;
  return ftemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
