/*
In continuation of "Easy 2: Convert a String to a Number"...
The function stringToSignedInteger takes a string of digits and returns the 
appropriate number as an integer. The string may have a leading + or - sign;
if the first character is a "+", the function returns a positive number; 
if it is a "-", the function returns a negative number. If there is no sign, it 
returns a positive number.

The function uses a switch expression to determine if the first character of the
string is a sign.  
*/



function stringToInteger(string) {
  let length = string.length;
  let num = 0;
  for (char of string) {
    let charToNum = char.charCodeAt(0) - 48;
    num += charToNum * (10 ** (length - 1));
    length--;
  }
  return num;
}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':
      return -stringToInteger(string.slice(1, string.length));
    case '+':
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

// test cases
console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true