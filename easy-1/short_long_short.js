/*
The shortLongShort function takes two strings as arguments, determines the 
length of the strings, and returns the result of concatenating the strings 
in the following format: shorter string + longer string + shorter string. It is
assumed the arguments are two strings of different lengths. 
*/

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    return string1 + string2 + string1;
  } else {
    return string2 + string1 + string2;
  }
}

// test cases
console.log(shortLongShort('abc', 'defgh')); // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh')); // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));      // "xyz"