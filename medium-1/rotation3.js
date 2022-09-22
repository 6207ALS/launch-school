/*
In continuation of exercise "Medium 1: Rotation (Part 3)"...
Take the number 735291 and rotate it by one digit to the left, getting 352917. 
Next, keep the first digit fixed in place and rotate the remaining digits to get
329175. Keep the first two digits fixed in place and rotate again to get 321759.
Keep the first three digits fixed in place and rotate again to get 321597. 
Finally, keep the first four digits fixed in place and rotate the final two 
digits to get 321579. The resulting number is called the maximum rotation of the
original number. The rotateRightmostDigits function takes an integer as an 
argument and returns the maximum rotation of that integer. 

The function reuses the rotateRightmostDigits function from the previous
exercise, and places it inside a decrementing for loop. The first iteration
uses the number argument's # of digits. The # of digits is passed to the digit
argument for the rotateRightmostDigits function. On every loop, the # of digits
decrements by 1 until it reaches the value 1. 
*/

function rotateRightmostDigits(number, digit) {
  // retrieve right digits of number
  let digits = String(number);
  let rightDigits = digits.slice(-digit);

  // replace right digits of number with the rotated version
  rightDigits = rightDigits.slice(1).concat(rightDigits[0]);
  digits = digits.slice(0, digits.length - digit) + rightDigits;

  return Number(digits);
}

function maxRotation (number) {
  for (let i = String(number).length; i > 0; i--) {
    number = rotateRightmostDigits(number, i);
  }
  return number;
}

// test cases
console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845