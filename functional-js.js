function _each(array, iteratee) {
  for(var i = 1; i < array.length; i++) {
    iteratee(array[i]);
  }

  return array;
}

function _filter(array, predicate) {
  var newList = [];
  for (var i = 1; i < array.length; i++) {
    if (predicate(array[i])) {
      newList.push(array[i]);
    }
  }

  return newList;
}

function _map(array, mapper) {
  var newList = [];
  for (var i = 1; i < array.length; i++) {
    newList.push(mapper(array[i]))
  }

  return newList;
}