const convertToCelsius = function (number) {
  let result = ((number - 32) * 5) / 9;
  result.toFixed(1);
  return result;
};

const convertToFahrenheit = function (number) {
  let result = (number * 5) / 9 + 32;
  result.toFixed(1);
  return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
