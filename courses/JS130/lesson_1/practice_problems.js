/*
(JS130) Lesson 1 - Practice Problems: Emulating Iteration Methods
*/


// reimplementation of JavaScript's built-in 'filter' method
function filter(array, callback) {
  let filteredItems = [];
  let item;

  for (let i = 0; i < array.length; i++) {
    item = array[i];
    if (callback(item)) filteredItems.push(item);
  }

  return filteredItems;
}

let numbers = [1, 2, 3, 4, 5];
console.log(filter(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filter(numbers, number => number < 0)); // => []
console.log(filter(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

let values = [1, "abc", null, true, undefined, "xyz"];
console.log(filter(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


// reimplementation of JavaScript's built-in 'map' method
function map(array, callback) {
  let mappedArr = [];

  for (let i = 0; i < array.length; i++) {
    mappedArr.push(callback(array[i]));
  }

  return mappedArr;
}

numbers = [1, 2, 3, 4, 5];
console.log(map(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(map(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(map(numbers, () => false));
// => [ false, false, false, false, false ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(map(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]


// reimplementation of JavaScript's built-in 'reduce' method
function reduce(array, callback, initValue) {
  let i = initValue ? 0 : 1;
  if (initValue === undefined) initValue = array[0];

  for (i; i < array.length; i++) {
    initValue = callback(initValue, array[i]);
  }

  return initValue;
}

numbers = [1, 2, 3, 4, 5];
console.log(reduce(numbers, (accum, number) => accum + number));   // => 15
console.log(reduce(numbers, (prod, number) => prod * number));     // => 120
console.log(reduce(numbers, (prod, number) => prod * number, 3));  // => 360
console.log(reduce([], (accum, number) => accum + number, 10));    // => 10
console.log(reduce([], (accum, number) => accum + number));
// => undefined

let stooges = ["Mo", "Larry", "Curly"];
console.log(reduce(stooges, (reversedStooges, stooge) => {
  reversedStooges.unshift(stooge);
  return reversedStooges;
}, []));
// => ["Curly", "Larry", "Mo"]


// reimplementation of JavaScript's built-in 'filter' method, using the 'reduce'
// method
function filterReduce(array, callback) {
  let filterReducer = (acc, element) => {
    return callback(element) ? acc.concat(element) : acc;
  }

  return array.reduce(filterReducer, []);
}

numbers = [1, 2, 3, 4, 5];
console.log(filterReduce(numbers, number => number > 3)); // => [ 4, 5 ]
console.log(filterReduce(numbers, number => number < 0)); // => []
console.log(filterReduce(numbers, () => true));           // => [ 1, 2, 3, 4, 5 ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(filterReduce(values, value => typeof value === "string"));
// => [ 'abc', 'xyz' ]


// reimplementation of JavaScript's built-in 'map' method, using the 'reduce'
// method
function mapReduce(array, callback) {
  let mapReducer = (acc, element) => {
    return acc.concat(callback(element));
  };

  return array.reduce(mapReducer, []);
}

numbers = [1, 2, 3, 4, 5];
console.log(mapReduce(numbers, number => number * 3));  // => [ 3, 6, 9, 12, 15 ]
console.log(mapReduce(numbers, number => number + 1));  // => [ 2, 3, 4, 5, 6 ]
console.log(mapReduce(numbers, () => false));
// => [ false, false, false, false, false ]

values = [1, "abc", null, true, undefined, "xyz"];
console.log(mapReduce(values, value => String(value)));
// => [ '1', 'abc', 'null', 'true', 'undefined', 'xyz' ]