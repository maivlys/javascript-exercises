const convertToCelsius = function (number) {
  let result = ((number - 32) * 5) / 9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function (number) {
  let result = number * 1.8 + 32;
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
