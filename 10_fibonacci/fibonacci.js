const fibonacci = function (input) {
  if (input < 0) {
    return "OOPS";
  }
  if (typeof input === "string") {
    input = Number(input);
  }

  let sequence = [0, 1];
  for (let i = 2; i <= input; i++) {
    sequence[i] = sequence[i - 2] + sequence[i - 1];
  }
  return sequence[input];
};

// Do not edit below this line
module.exports = fibonacci;

// let a = "string";
// console.log(typeof a);
