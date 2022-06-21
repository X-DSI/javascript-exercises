const reverseString = function (word) {
  // using built-in functions
  //   return word.split("").reverse().join("");
  // using for-loop

  let rword = "";
  for (let index = word.length - 1; index >= 0; index--) {
    rword += word[index];
  }

  return rword;
};

// Do not edit below this line
module.exports = reverseString;
