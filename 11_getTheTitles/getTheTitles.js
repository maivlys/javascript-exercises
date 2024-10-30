const getTheTitles = function (arr) {
  let newArr = arr.map((item) => Object.values(item)[0]);
  return newArr;
};

// Do not edit below this line
module.exports = getTheTitles;

// const streets = [
//   {
//     name: "Main St",
//     number: 101,
//   },
//   {
//     name: "Elm St",
//     number: 202,
//   },
//   {
//     name: "Maple Ave",
//     number: 303,
//   },
// ];
