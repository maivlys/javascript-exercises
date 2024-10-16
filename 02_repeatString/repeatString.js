const repeatString = function (string, repeat) {
  if (repeat < 0) {
    return "ERROR";
  }
  let result = string;
  for (let i = 1; i < repeat; i++) {
    result += string;
  }
  return result;
};

// Do not edit below this line
module.exports = repeatString;
