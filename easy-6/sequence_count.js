/*
The sequence function takes two integers as arguments. The first argument is a 
count, and the second is the starting number of a sequence that the function 
will create. The function returns an array containing the same number of 
elements as the count argument. The value of each element is a multiple of the 
starting number. It is assumed that the count argument will always be an integer
greater than or equal to 0. The starting number can be any integer. If the count
is 0, the function returns an empty array.

The function increments from the values 1 to the given count. For each value,
the function adds the product of the current value and the given start value to 
the array. This effectively adds "count" multiples of the starting number to the
array. 
*/

function sequence (count, start) {
  let arr = []
  for (let i = 1; i <= count; i++) {
    arr.push(start * i);
  }
  return arr;
}

// test cases
console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []