const reverseString = function (string) {
  let str = string;
  let arr = [...str];
  return arr.reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;

// reverseString("hello");
