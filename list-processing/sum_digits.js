/*
The sum function takes one argument, a positive integer, and returns the sum of 
its digits. 

The function first splits each digit of the number into an array. Then, using
the .reduce() method, the function accumulates the sum of every element in the 
array. 
*/

function sum (number) {
  let digits = String(number).split('');
  let sum = digits.reduce((acc, num) => {
    return Number(num) + acc; 
  }, 0);

  return sum;
}

// test cases
console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45