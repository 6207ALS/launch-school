// The oddLengths function determines the length of each string element 
// in a given array and returns an array of only string lengths 
// with an odd value. 

function oddLengths(arr) {
  let stringLength = arr.map(string => string.length)
  let oddValues = stringLength.filter(element => element % 2 === 1);
  
  return oddValues;
}

// test case

let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]