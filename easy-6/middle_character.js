/*
The centerOf function takes a non-empty string argument and returns the middle 
character(s) of the string. If the string has an odd length, it returns exactly 
one character. If the string has an even length, it returns exactly two 
characters.

The function first finds the string's length to determine if there are an even
or odd number of characters. If even, the function returns the two characters
at the center of the string, using the appropriate indices. If odd, the function
returns the one character at the center of the string.   
*/

function centerOf (string) {
  let length = string.length;
  if (length % 2 === 0) {
    return string.slice(length / 2 - 1, length / 2 + 1);
  } else {
    return string[Math.floor(length / 2)];
  }
}

// test cases
console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"