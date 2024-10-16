const leapYears = function (year) {
  if (isNaN(year) || year <= 0) {
    return "ERROR";
  }

  let isLeapYear = false;

  if (year % 100 === 0) {
    if (year % 400 === 0) {
      isLeapYear = true;
    }
  } else if (year % 4 === 0) {
    isLeapYear = true;
  }

  return isLeapYear;
};

// Do not edit below this line
module.exports = leapYears;
