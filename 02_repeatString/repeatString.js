const repeatString = function (word, num) {
  let rword = "";
  if (num >= 0) {
    while (num > 0) {
      rword += word;
      num--;
    }
    return rword;
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
