function _each(array, iteratee) {
  for(var i = 0; i < array.length; i++) {
    iteratee(array[i]);
  }

  return array;
}

function _filter(array, predicate) {
  var newList = [];
  _each(array, function(value) {
    if (predicate(value)) {
      newList.push(value)
    }
  })

  return newList;
}

function _map(array, mapper) {
  var newList = [];
  _each(array, function(value) {
    newList.push(mapper(value))
  })

  return newList;
}

function _curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b)
    }
  }
}
