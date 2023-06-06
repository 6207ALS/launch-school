// LS216: List Processing and Functional Abstractions 
// Build It to Understand It | Practice Problems


// Iteration
function myForEach(array, func) {
  for (let i = 0; i < array.length; i++) {
    func(array[i], i, array);
  }
}

let min = Infinity;
let getMin = value => (min = value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);


// Filtering / Selection
function myFilter(array, func) {
  let filtered = [];

  array.forEach(element => {
    if (func(element)) {
      filtered.push(element);
    } 
  });

  return filtered;
}

let isPythagoreanTriple = function (triple) {
  return Math.pow(triple.a, 2) + Math.pow(triple.b, 2) === Math.pow(triple.c, 2);
};

console.log(myFilter([{ a: 3, b: 4,  c: 5 },
          { a: 5, b: 12, c: 13 },
          { a: 1, b: 2,  c: 3 },], isPythagoreanTriple));
// logs [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]


// Transformation
function myMap(array, func) {
  let result = [];

  array.forEach((element, index, array) => {
    result.push(func(element, index, array));
  });

  return result;
}

let plusOne = n => n + 1;
console.log(myMap([1, 2, 3, 4], plusOne));       // [ 2, 3, 4, 5 ]


// Reduce
function myReduce(array, func, initial) {
  let acc = initial === undefined ? array[0] : initial;
  let i = initial === undefined ? 1 : 0;

  array.slice(i).forEach(element => acc = func(acc, element, i, array));

  return acc;
}

let smallest = (result, value) => (result <= value ? result : value);
let sum = (result, value) => result + value;

console.log(myReduce([5, 12, 15, 1, 6], smallest));           // 1
console.log(myReduce([5, 12, 15, 1, 6], sum, 10));            // 49


// Interrogation
function myOwnEvery(array, func) {
  for (let i = 0; i < array.length; i++) {
    if (!func(array[i], i, array)) return false;
  }

  return true;
}

let isAString = value => typeof value === 'string';
console.log(myOwnEvery(['a', 'a234', '1abc'], isAString));       // true