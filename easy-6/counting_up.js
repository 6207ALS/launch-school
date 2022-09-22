/*
The function sequence takes an integer argument and returns an array containing 
all integers between 1 and the argument (inclusive), in ascending order.

The function simply iterates from the numbers 1 to the given argument and adds
the number to the returned array. 
*/

function sequence (number) {
  let numbers = [];
  for (let i = 1; i <= number; i++) {
    numbers.push(i);
  }
  return numbers;
}

// test cases
console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]