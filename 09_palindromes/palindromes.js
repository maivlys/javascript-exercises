const palindromes = function (input) {
  // if (/\d/.test(input)) {
  //   return false;
  // }
  let str = input.toLowerCase().replaceAll(/[^a-zA-Z0-9]/g, "");
  let reversedArr = str.split("").reverse();
  let reversedStr = reversedArr.join("");

  console.log(str);
  console.log(reversedArr);
  console.log(reversedStr);

  if (str === reversedStr) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = palindromes;
