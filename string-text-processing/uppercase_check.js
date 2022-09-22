/*
The isUppercase function takes a string argument and returns true if all of the 
alphabetic characters inside the string are uppercase; false otherwise. The 
function also ignores characters that are not alphabetic.

The function iterates over each character of the given string argument. It then
compares the character to its capitalized letter. If they are the same, the said
character is a capital letter and the loop continues. If not, the character is 
a lowercase letter and false is returned.  
*/

function isUppercase (string) {
  for (character of string) {
    if (character !== character.toUpperCase()) return false;  
  }
  return true;
}

// test cases
console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true