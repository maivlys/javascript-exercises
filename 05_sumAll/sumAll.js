const sumAll = function (start, end) {
  if (typeof start !== "number" || typeof end !== "number") {
    return "ERROR";
  }
  if (!Number.isInteger(start) || !Number.isInteger(end)) {
    return "ERROR";
  }
  if (start < 0 || end < 0) {
    return "ERROR";
  }
  // -----------------------------------------------
  let arr = [];

  if (start < end) {
    for (let i = start; i < end + 1; i++) {
      arr.push(i);
    }
  } else if (start > end) {
    for (let i = end; i < start + 1; i++) {
      arr.push(i);
    }
  }
  return arr.reduce((a, b) => a + b);
};

// Do not edit below this line
module.exports = sumAll;
