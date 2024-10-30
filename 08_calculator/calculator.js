const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr.reduce((a, b) => a + b);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => a * b);
};

const power = function (a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
};

const factorial = function (number) {
  if (number < 0) {
    return "ERROR";
  }
  if (number === 0) {
    return 1;
  }
  if (number === 1) {
    return 1;
  }
  let arr = [];
  for (let i = number; i > 0; i--) {
    arr.push(i);
  }
  return arr.reduce((a, b) => a * b);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
