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
      newList.push(value);
    }
  })

  return newList;
}

function _map(array, mapper) {
  var newList = [];
  _each(array, function(value) {
    newList.push(mapper(value));
  })

  return newList;
}

function _curry(fn) {
  return function(a, b) {
    // Check number of parameter.
    // If add(5, 6) -> return fn(5, 6).
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(a, b); };
  }
}

function _curryr(fn) {
  /**
   * This function need when first applying
   * right side paramter in input arguments at running fn.
   * e.g> var sub10 = _curry(function(a, b) { return a - b; })
   * sub10(5) result is 5 but that is a not matched context because this functions means 5 - 10.
   */
  return function(a, b) {
    // If arguments
    return arguments.length === 2 ? fn(a, b) : function(b) { return fn(b, a); };
  }
}

const _get = _curryr(function(obj, key) {
  /**
   * function _get(obj, key) {
   *   return obj === null ? undefined : ojb[key];
   * }
   */
    return obj === null ? undefined : ojb[key];
});

function _rest(list, num) {
  // Defensive code for Array like object
  const slice = Array.prototype.slice;
  return slice.call(list, num || 1);
}

function _reduce(list, iteratee, memo) {
  if (arguments.length === 2) {
    /**
     * If not input memo parameter, initialize memo value is first value in list
     * and list has been slicing first index.
     */
    memo = list[0];
    list = _rest(list);
  }
  _each(list, function(val) {
    memo = iteratee(memo, val);
  });
  return memo;
}
