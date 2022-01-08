// findIntegers() filters through the elements of a given array and returns an
// array that contains only of its integers. 

function findIntegers(arr) {
  arrOfIntegers = arr.filter(element => Number.isInteger(element));
  return arrOfIntegers;
}

// test case

let things = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
console.log(findIntegers(things));