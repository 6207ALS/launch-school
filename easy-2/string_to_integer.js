/*
The stringToInteger function takes a string of numeric characters and returns
the number as an integer (Number data type) value. For instance, the string 
literal "123" would be returned as 123. 

It does so by subtracting 48 from each numeric character's ASCII code value. 
As decimal values (0-9) range from 48 to 57 on the ASCII table, we can convert 
each numeric character into its literal integer value. For instance, the numeric
character "1" has an ASCII code of 49: (49 - 48 = 1). 
*/

function stringToInteger(string) {
  let length = string.length;
  let num = 0;
  for (char of string) {
    let charToNum = char.charCodeAt(0) - 48;
    num += charToNum * (10 ** (length - 1));
    length--;
  }
  console.log(num);
  return num;
}

// test cases
console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true