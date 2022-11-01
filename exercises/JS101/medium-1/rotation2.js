/*
In continuation of exercise "Medium 1: Rotation (Part 1)"...
The rotateRightmostDigits function rotates the last x digits of a number. 
A rotation is defined as moving the first of the selected digits to the end and 
shifting the remaining digits to the left. (e.g. 319 -> 193)

The function first casts the number argument to a string to iterate over each
digit. A variable called rightDigits is constructed that contains the last 
x number of characters from the string. The selected characters are 
rotated, as explained and demonstrated in the previous exercise. The non-rotated
portion of the number and the rotated digits are combined to get the returned 
number. 
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

// test cases
console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917