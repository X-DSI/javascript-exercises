const palindromes = function (str) {
  // works with single words and words without punctuation
  //   return s.split("").reverse().join("") ? true : false;
  // How to remove space n punctuation and combine the whole thing into a single string
  let tempstr = str.replace(/[^a-zA-Z0-9]/g, "");
  let tempstr1 = tempstr.replace(/\s+/g, "");
  let finalstr = tempstr1.toLowerCase();
  //   console.log(finalstr);
  if (finalstr === finalstr.split("").reverse().join("")) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
