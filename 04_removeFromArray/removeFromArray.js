const removeFromArray = function (array, itemToRemove) {
  function checkItem(item) {
    return item !== 3;
  }
  return array.filter(checkItem);
};

// Do not edit below this line
module.exports = removeFromArray;
