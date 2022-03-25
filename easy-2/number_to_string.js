/*
In continuation of "Easy 2: Convert a String to a Number"...
The integerToString function achieves the opposite and converts a non-negative
integer value to the string representation of that number.

The function repeatedly extracts the ones digit of the provided number and adds
them to an array. The elements within the array are then concatenated with the 
"join" method to convert it into a string. 
*/

function integerToString (number) {
  let arrayOfDigits = []
  do {
    let onesDigit = number % 10;
    arrayOfDigits.unshift(onesDigit);
    number = Math.floor(number / 10);
  } while (number > 0)

  return arrayOfDigits.join('');
}

// test cases
console.log(integerToString(4321));        // "4321"
console.log(integerToString(0));           // "0"
console.log(integerToString(5000));        // "5000"
console.log(integerToString(1234567890));  // "1234567890"