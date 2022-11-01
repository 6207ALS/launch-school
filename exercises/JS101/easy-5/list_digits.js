/*
The digitList function takes one argument, a positive integer, and returns a 
list of the digits in the number.

The function iterates over each character (digit) of the number's string 
representative. It then adds the digit to the returned list. 
*/

function digitList(number) {
  let digits = [];
  for (digit of String(number)) {
    digits.push(Number(digit));
  }
  return digits;
}

// test cases
console.log(digitList(12345));       // [1, 2, 3, 4, 5]
console.log(digitList(7));           // [7]
console.log(digitList(375290));      // [3, 7, 5, 2, 9, 0]
console.log(digitList(444));         // [4, 4, 4]