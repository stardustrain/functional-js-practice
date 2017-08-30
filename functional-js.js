var _filter = function (array, condition) {
  var returnArray = [];
  for (var i = 1; i < array.length; i++) {
    if (condition(array[i])) {
      returnArray.push(array[i]);
    }
  }

  return returnArray;
}

var _map = function (array, iteratee) {
  var returnArray = [];
  for (var i = 1; i < array.length; i++) {
    returnArray.push(iteratee(array[i]))
  }

  return returnArray;
}