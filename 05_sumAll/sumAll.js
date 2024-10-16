const sumAll = function (start, end) {
  let arr = [start];
  for (let i = 1; i < end; i++) {
    arr[i] = arr[i - 1] + 1;
  }
  return arr.reduce((a, b) => a + b, 0);
};

// Do not edit below this line
module.exports = sumAll;
