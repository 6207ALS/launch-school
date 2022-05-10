// The sumOfSquares function uses the .reduce() method to iterate over a given
// array and find the sum of each element's square value. 

function sumOfSquares(arr) {
  let sum = arr.reduce(function (accumulator, element) {
    return accumulator + element * element    // adds the current element's square to the sum
  }, 0);

  return sum;
}

// test case

let array = [3, 5, 7];
console.log(sumOfSquares(array)); // => 83