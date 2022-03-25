/*
In continuation of "Easy 2: Convert a Number to a String!"...
The signedIntegerToString function converts a positive/negative integer into its
string representation

The function uses the integerToString function (from a previous exercise) to 
convert the integer to a string. In addition, it determines if the integer is 
positive/negative and adds the appropriate sign to the string.  
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

function signedIntegerToString (integer) {
  let positivity = Math.sign(integer)
  switch (positivity) {
    case 1:
      return "+" + integerToString(integer);
    case -1:
      return "-" + integerToString(-integer);
    case 0:
      return integerToString(integer);
  }
}

// test cases
console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");