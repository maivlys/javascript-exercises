const removeFromArray = function (arr, ...itemsToRemove) {
  let toRemove = itemsToRemove;
  let newArr = [];
  arr.map((item) => {
    if (!toRemove.includes(item)) {
      return newArr.push(item);
    }
  });

  return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;

// let arr = [1, 2, 2, 3, 4, 4, "ha", "hi"];
// removeFromArray(arr, 1, 2,3);
